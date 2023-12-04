import { Button, Col, DatePicker, Form, Input, InputNumber, Layout, Row, Select, Slider } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import theme from "../assets/theme.json";
import { CustomInput } from "../components/CustomInputs";
import HeaderNav from "../components/HeaderNav";
import Heading from "../components/Heading";

const NewRedistPost = () => {
    const MIN_QUANTITY = 1;
    const MAX_QUANTITY = 200;
    const MAX_QUANTITY_MARK = 50;

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

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div>
            <HeaderNav header={"New Post"} showBackButton={true} backButtonOnClick={handleBack} showLogOutButton={true} />
            <Layout.Content className="mx-6">
                <Form form={form} size="large" layout="vertical" name="post" requiredMark={false} autoComplete="">
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
                            className="text-lg"
                            style={{ resize: 'none' }}
                            size="large"
                            autoSize={{ minRows: 4, maxRows: 6 }}
                            placeholder="Ingredients of the food"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button className="w-full" type="primary" disabled={!submittable} onClick={form.submit}>Post</Button>
                    </Form.Item>
                </Form>
            </Layout.Content>
        </div>
    );
};

export default NewRedistPost;