import React from "react";
import {Badge, Flex, Layout, Space, Table, Tag} from "antd";
import Heading from "../components/Heading";
import {BookOutlined} from "@ant-design/icons";
import CustomButton from "../components/CustomButton";
import {useLocation, useNavigate} from "react-router-dom";
const { Content} = Layout;

const OrderHistoryPage = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const allOrders = state.allOrders;

    const onClickOrderMore = () => {
        navigate('/user-home', {state: {allOrders: allOrders}});
    }

    const columns = [
        {
            title: 'Order',
            dataIndex: 'orderId',
            key: 'orderId',
            render: (_, order) => (
                <Space size="small">
                    <a>{order.id}</a>
                </Space>
            )
        },
        {
            title: 'Summary',
            dataIndex: 'summary',
            key: 'summary',
            render: (_, { orderItems }) => (
                <>
                    {orderItems.map((orderItem) => {
                        return (
                            <Tag>
                                {orderItem.count} x {orderItem.item.name} ({orderItem.size})
                            </Tag>
                        )
                    })}
                </>
            )
        },
        {
            title: 'Price',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            render: (_, order) => (
                <Space size="small">
                    <a>${order.totalPrice}</a>
                </Space>
            )
        },
    ];

    return (
        <Layout className="layout h-screen">
            <Content className="bg-white">
                <Flex className="px-4 py-4" justify="center" gap="small" vertical>
                    <Flex justify="space-between" align="center">
                        <Heading className="font-heading">Order History</Heading>
                        <Badge className="flex">
                            <BookOutlined onClick={onClickOrderMore} style={{ fontSize: '150%'}} />
                        </Badge>
                    </Flex>
                    <Flex className="bg-gray-100 h-max" gap="small" vertical>
                        <Table columns={columns} dataSource={allOrders} size="small" />
                    </Flex>
                    <CustomButton onClick={onClickOrderMore} type="primary" className="min-w-full h-10">Order More</CustomButton>
                </Flex>
            </Content>
        </Layout>
    )
}

export default OrderHistoryPage;