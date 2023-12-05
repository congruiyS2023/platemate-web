import { InfoCircleFilled, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Col, DatePicker, Flex, Form, Input, InputNumber, Layout, Modal, Row, Select, Slider } from "antd";
import dayjs from "dayjs";
import { createContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { CustomInput } from "../components/CustomInputs";
import HeaderNav from "../components/HeaderNav";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

const ModalContext = createContext(null);

const modalStyle = (action) => {
    if (action === "remove") {
        return {
            color: "#af3800",
            type: "primary",
            danger: true,
        }
    } else {
        return {
            color: "#12664f",
            type: "primary",
            danger: false,
        }
    }
}

const getModalConfig = (actionContext) => {
    return {
        title: <span className={"font-heading text-lg leading-none"}>Confirmation</span>,
        content: (
            <Paragraph>
                {`Are you sure you want to ${actionContext} this post?`}
            </Paragraph>
        ),
        centered: true,
        closable: true,
        icon: (
            actionContext === "remove" ? (
                <ExclamationCircleFilled style={{ color: "#af3800" }} />
            ) : (
                <InfoCircleFilled style={{ color: "#12664f" }} />
            )

        ),
        okButtonProps: actionContext === "remove" ? {
            type: "primary",
            danger: true,
        } : null,
        cancelButtonProps: actionContext === "remove" ? {
            type: "default",
            danger: true,
        } : null,
    }
}
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
        <Button className="w-full" type="primary" disabled={!submittable} {...props} />
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

    const [posts, setPosts] = useState(() => {
        const storedPosts = localStorage.getItem('redistributionPosts');
        return storedPosts ? JSON.parse(storedPosts) : [];
    });

    const findInitialPost = (posts) => {
        const post = posts.find((post) => post.id === params.id);
        if (post) {
            return {
                ...post,
                expirationDate: dayjs(post.expirationDate, "YYYY-MM-DD"),
            }
        }
        return {};
    };
    const initialPost = isEditingPost ? findInitialPost(posts) : {};
    useEffect(() => {
        onQuantityChange(initialPost.quantity);
    }, []);

    const [inputQuantity, setInputQuantity] = useState(() => {
        const initialPost = findInitialPost(posts);
        if (initialPost) {
            console.log("initialPost quantity", initialPost.quantity);
            return initialPost.quantity;
        } else {
            return MIN_QUANTITY;
        }
    });
    useEffect(() => {
        form.setFieldValue('quantity', inputQuantity);
    }, []);
    const onQuantityChange = (value) => {
        setInputQuantity(value);
        form.setFieldValue('quantity', value);
    };

    const [modal, contextHolder] = Modal.useModal();
    const [actionContextVal, setActionContextVal] = useState(() => {
        return isCreatingNewPost ? "publish" : isEditingPost ? "update" : null;
    });
    const isInitialMount = useRef(2);
    useEffect(() => {
        if (isInitialMount.current > 0) {
            isInitialMount.current -= 1;
        } else {
            async function confirmModal() {
                const confirmed = await modal.confirm(getModalConfig(actionContextVal));
                if (confirmed) {
                    if (actionContextVal === "remove") {
                        handleRemove();
                    } else {
                        form.submit();
                    }
                } else {
                    Modal.destroyAll();
                }
            };
            confirmModal();
        }
    }, [actionContextVal]);

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
                        expirationDate: dayjs(post.expirationDate).format("YYYY-MM-DD"),
                        quantity: post.quantity,
                        unit: post.unit,
                    };
                }
                return p;
            });
        } else if (isCreatingNewPost) {
            const newPost = {
                id: uuidv4(),  // Note: only for demo purposes
                name: post.name,
                ingredients: post.ingredients,
                status: post.status,
                expirationDate: dayjs(post.expirationDate).format("YYYY-MM-DD"),
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
        setActionContextVal("remove");
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
            <ModalContext.Provider value={actionContextVal}>
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
                                    <DatePicker className="w-full" size="large" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label={<Heading level={2}>Ingredients</Heading>} name="ingredients" rules={[{ required: true }]}>
                            <Input.TextArea
                                autoSize={{ minRows: 4, maxRows: 6 }}
                                className="text-lg"
                                placeholder="Main ingredients of the food"
                                size="large"
                                style={{ resize: 'none' }}
                            />
                        </Form.Item>
                        <Form.Item>
                            {isCreatingNewPost ?
                                (<Flex vertical gap={"middle"}>
                                    <SubmitButton
                                        form={form}
                                        onClick={async () => {
                                            const confirmed = await modal.confirm(getModalConfig(actionContextVal));
                                            if (confirmed) {
                                                form.submit();
                                            }
                                        }}
                                    >
                                        Post
                                    </SubmitButton>
                                </Flex>) : null}
                            {isEditingPost ? (
                                <Flex vertical gap="middle">
                                    <Button className="w-full" type="primary"
                                        onClick={async () => {
                                            setActionContextVal("update");
                                            const confirmed = await modal.confirm(getModalConfig(actionContextVal));
                                            if (confirmed) {
                                                form.submit();
                                            }
                                        }}>
                                        Update
                                    </Button>
                                    <Button className="w-full" type="primary" danger onClick={async () => {
                                        setActionContextVal("remove");
                                        const confirmed = await modal.confirm(getModalConfig(actionContextVal));
                                        if (confirmed) {
                                            handleRemove();
                                        }
                                    }}>
                                        Remove
                                    </Button>
                                </Flex>
                            ) : null}
                            {contextHolder}
                        </Form.Item>
                    </Form>
                </Layout.Content>
            </ModalContext.Provider>
        </div>
    );
};

export default RedistPost;