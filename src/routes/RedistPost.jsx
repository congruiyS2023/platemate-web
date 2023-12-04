import { Button, Col, DatePicker, Flex, Form, Input, InputNumber, Layout, Row, Select, Slider } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import theme from "../assets/theme.json";
import { CustomInput } from "../components/CustomInputs";
import HeaderNav from "../components/HeaderNav";
import Heading from "../components/Heading";
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';

const SubmitButton = ({ form, ...props }) => {
    const [submittable, setSubmittable] = useState(false);
    const values = Form.useWatch([], form);
    useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(
                () => {
                    setSubmittable(true);
                },
                () => {
                    setSubmittable(false);
                },
            );
    }, [values]);

    return (
        <Button className="w-full" type="primary" htmlType="submit" disabled={!submittable} {...props} />
    );
};


const RedistPost = () => {
    const MIN_QUANTITY = 1;
    const MAX_QUANTITY = 200;
    const MAX_QUANTITY_MARK = 50;

    const location = useLocation();
    const params = useParams();

    const isCreatingNewPost = location.pathname === '/community/new';
    const isEditingPost = location.pathname === `/community/${params.id}/edit`;

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/community');
    };

    const [form] = Form.useForm();

    const [inputQuantity, setInputQuantity] = useState(1);
    useEffect(() => {
        form.setFieldValue('quantity', inputQuantity);
    }, []);
    const onQuantityChange = (value) => {
        setInputQuantity(value);
        form.setFieldValue('quantity', value);
    };

    const [posts, setPosts] = useState(() => {
        const storedPosts = localStorage.getItem('redistributionPosts');
        return storedPosts ? JSON.parse(storedPosts) : [];
    });

    const findInitialPost = (posts) => {
        const post = posts.find((post) => post.id === params.id);
        if (post) {
            return {
                ...post,
                expirationDate: dayjs(post.expirationDate, theme.dateFormat),
            }
        }
        return {};
    };
    const initialPost = isEditingPost ? findInitialPost(posts) : {};
    useEffect(() => {
        onQuantityChange(initialPost.quantity);
    }, []);

    const handleFinish = (post) => {
        const storedPosts = localStorage.getItem('redistributionPosts');
        const posts = storedPosts ? JSON.parse(storedPosts) : [];
        var updatedPosts = posts;
        if (isEditingPost) {
            updatedPosts = posts.map((p) => {
                if (p.id === params.id) {
                    return {
                        ...p,
                        name: post.name,
                        ingredients: post.ingredients,
                        status: post.status,
                        expirationDate: dayjs(post.expirationDate).format(theme.dateFormat),
                        quantity: post.quantity,
                        unit: post.unit,
                    };
                }
                return p;
            });
        } else if (isCreatingNewPost) {
            const newPost = {
                id: uuidv4(),
                name: post.name,
                ingredients: post.ingredients,
                status: post.status,
                expirationDate: dayjs(post.expirationDate).format(theme.dateFormat),
                quantity: post.quantity,
                unit: post.unit,
                expired: false,
            }
            updatedPosts = [...posts, newPost];
        }
        setPosts(updatedPosts);
        localStorage.setItem('redistributionPosts', JSON.stringify(updatedPosts));
        navigate('/community');
    };

    const handleRemove = () => {
        const storedPosts = localStorage.getItem('redistributionPosts');
        const posts = storedPosts ? JSON.parse(storedPosts) : [];
        const updatedPosts = posts.map((p) => {
            if (p.id === params.id) {
                return {
                    ...p,
                    expired: true,
                };
            }
            return p;
        });
        setPosts(updatedPosts);
        localStorage.setItem('redistributionPosts', JSON.stringify(updatedPosts));
        navigate('/community');
    };

    return (
        <div>
            <HeaderNav
                header={isCreatingNewPost ? "New Post" : isEditingPost ? "Edit Post" : "Post"}
                showBackButton={true}
                backButtonOnClick={handleBack}
                showLogOutButton={true}
            />
            <Layout.Content className="mx-6">
                <Form
                    autoComplete="off"
                    form={form}
                    initialValues={initialPost}
                    layout="vertical"
                    name="post"
                    onFinish={handleFinish}
                    requiredMark={false}
                    size="large"
                >
                    <Form.Item label={<Heading level={2}>Food Name</Heading>} name="name" rules={[{ required: true }]}>
                        <CustomInput placeholder="Name of the food" />
                    </Form.Item>
                    <Form.Item label={<Heading level={2}>Status</Heading>} name="status" rules={[{ required: true }]}>
                        <Select
                            className="font-paragraph text-left"
                            size="large"
                            placeholder={<span className="text-lg">Select status</span>}
                            optionRender={(item) => (<span className="text-lg">{item.label}</span>)}
                            options={[
                                { value: "raw", label: "Raw" },
                                { value: "untouched", label: "Untouched" },
                                { value: "touched", label: "Touched" },
                            ]}
                        />
                    </Form.Item>
                    <Row justify={"space-between"}>
                        <Col span={14}>
                            <Form.Item label={<Heading level={2}>Quantity</Heading>} name="quantity" rules={[{ required: true }]}>
                                <InputNumber className="w-full" size="large"
                                    min={MIN_QUANTITY} max={MAX_QUANTITY}
                                    onChange={onQuantityChange} />
                            </Form.Item>
                        </Col>
                        <Col span={9}>
                            <Form.Item label={<Heading level={2}>Unit</Heading>} name="unit" rules={[{ required: true }]}>
                                <Select
                                    className="font-paragraph text-left"
                                    size="large"
                                    placeholder={<span className="text-lg">Select unit</span>}
                                    optionRender={(item) => (<span className="text-lg">{item.label}</span>)}
                                    options={[
                                        { value: "servings", label: "servings" },
                                        { value: "lbs", label: "lbs" },
                                        { value: "kg", label: "kg" },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Slider
                        style={{ paddingBottom: '36px' }}
                        min={MIN_QUANTITY} max={MAX_QUANTITY_MARK}
                        marks={{ 1: '1', 50: '50+' }}
                        onChange={onQuantityChange}
                        value={typeof inputQuantity === 'number' ? inputQuantity : 0}
                    />
                    <Row justify={"space-between"} align={"middle"} className="pb-6">
                        <Col span={10}>
                            <Heading level={2}>Expiration Date</Heading>
                        </Col>
                        <Col span={12} >
                            <Form.Item noStyle={true} name="expirationDate" rules={[{ required: true }]}>
                                <DatePicker className="w-full" size="large" format={theme.dateFormat} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item label={<Heading level={2}>Ingredients</Heading>} name="ingredients" rules={[{ required: true }]}>
                        <Input.TextArea
                            autoSize={{ minRows: 4, maxRows: 6 }}
                            className="text-lg"
                            placeholder="Ingredients of the food"
                            size="large"
                            style={{ resize: 'none' }}
                        />
                    </Form.Item>
                    <Form.Item>
                        {isCreatingNewPost ? <SubmitButton form={form}>Post</SubmitButton> : null}
                        {isEditingPost ? (
                            <Flex vertical gap="middle">
                                <Button className="w-full" type="primary" htmlType="submit">Update</Button>
                                <Button className="w-full" type="primary" danger onClick={handleRemove}>Remove</Button>
                            </Flex>
                        ) : null}
                    </Form.Item>
                </Form>
            </Layout.Content>
        </div>
    );
};

export default RedistPost;