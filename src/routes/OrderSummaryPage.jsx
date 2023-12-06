import React, {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {Badge, Flex, Layout, Space, Table, Modal} from "antd";
import Heading from "../components/Heading";
import {BookOutlined} from "@ant-design/icons";
import OrderItemCard from "../components/OrderItemCard";
import CustomButton from "../components/CustomButton";
import ButtonText from "../components/ButtonText";
import {CustomInput} from "../components/CustomInputs";
const { Content} = Layout;


const OrderSummaryPage = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const fromJoinSuccess = state?.fromJoinSuccess;
    const skipModal = state?.skipModal;
    const allOrders = state.allOrders;
    const order = state.order;
    let coupon = "";

    const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);

    const COUPONS = {
        "DISCOUNT5": 5,
        "DISCOUNT15": 15,
        "DISCOUNT25": 25,
    }

    const columns = [
        {
            title: 'Item',
            dataIndex: 'item',
            key: 'item',
            render: (_, orderItem) => (
                <OrderItemCard name={orderItem.item.name} description={orderItem.item.description} image={orderItem.item.image} count={orderItem.count} />
            )
        },
        {
            title: 'Portion Size',
            key: 'size',
            render: (_, orderItem) => (
                <Space size="middle">
                    <a>{orderItem.size}</a>
                </Space>
            ),
        },
    ];

    const onClickApplyCoupon = () => {
        setIsCouponModalOpen(true);
    };

    const handleApplyCoupon = () => {
        setIsCouponModalOpen(false);
        if (coupon in COUPONS) {
            //TODO: handle apply coupon for multiple times.
            const discount = COUPONS[coupon]
            order.coupon = coupon;
            order.totalPrice -= discount;
        }
    };

    const handleCancelApplyCoupon = () => {
        setIsCouponModalOpen(false);
    };

    const onCouponEnter = (e) => {
        coupon = e.target.value;
    }

    const onMenuClick = () => {
        navigate('/user-home', {state: {userOrder: order, fromJoinSuccess: fromJoinSuccess, skipModal: skipModal}});
    }

    const onClickPlaceOrder = () => {
        allOrders.push(order);
        navigate('/user-home/order-confirmation', {state: {
            orderId: order.id,
            allOrders: allOrders,
            fromJoinSuccess: fromJoinSuccess,
            skipModal: skipModal
        }});
    }

    return (
        <Layout className="layout">
            <Content className="bg-white">
                <Modal
                    title={
                        <Heading level={2} className="text-primary">
                            Enter Your Coupon
                        </Heading>
                    }
                    open={isCouponModalOpen}
                    onOk={handleApplyCoupon}
                    onCancel={handleCancelApplyCoupon}
                    cancelText={<ButtonText>Cancel</ButtonText>}
                    okText={<ButtonText>Apply</ButtonText>}
                >
                    <CustomInput
                        className="border-primary"
                        placeholder="Enter your Coupon"
                        allowClear
                        onChange={onCouponEnter}
                    />
                </Modal>
                <Flex className="px-4 py-4" justify="center" gap="small" vertical>
                    <Flex justify="space-between" align="center">
                        <Heading className="font-heading">Order Summary</Heading>
                        <Badge className="flex">
                            <BookOutlined onClick={onMenuClick} style={{ fontSize: '150%'}} />
                        </Badge>
                    </Flex>
                    <Flex className="bg-gray-100 h-max" gap="small" vertical>
                        <Table columns={columns} dataSource={order.orderItems} size="small" />
                        <Flex justify="space-between" align="center" className="pb-2 px-2">
                            <Flex className={ !order.coupon ? "invisible" : "" }>
                                <div className="rounded border-red-500 px-1 py-1 text-white bg-red-500">
                                    {order.coupon}
                                </div>
                            </Flex>
                            <Flex className="font-heading">Total: ${order.totalPrice} + tax</Flex>
                        </Flex>
                    </Flex>
                    <Flex className="buttom-0 left-0" align="center" gap="small" vertical>
                        <CustomButton onClick={onClickApplyCoupon} type="primary" className="min-w-full h-10" danger>Apply Coupon</CustomButton>
                        <CustomButton onClick={onClickPlaceOrder} type="primary" className="min-w-full h-10">Place Order</CustomButton>
                    </Flex>

                </Flex>
            </Content>
        </Layout>
    )
}

export default OrderSummaryPage;