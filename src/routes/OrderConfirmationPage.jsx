import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result, Layout } from 'antd';
import {useLocation, useNavigate} from "react-router-dom";


const OrderConfirmationPage = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const fromJoinSuccess = state?.fromJoinSuccess;
    const skipModal = state?.skipModal;
    const orderId = state.orderId;
    const allOrders = state.allOrders;

    const onClickOrderMore = () => {
        navigate('/user-home', {state: {allOrders: allOrders, fromJoinSuccess: fromJoinSuccess, skipModal: skipModal}});
    }

    const onClickOrderHistory = () => {
        navigate('/user-home/order-history', {state: {allOrders: allOrders, fromJoinSuccess: fromJoinSuccess, skipModal: skipModal}});
    }

    return (
        <Layout className="layout h-screen">
            <Result className="py-48"
                icon={<SmileOutlined />}
                    title={<p className="font-heading text-primary">Your Order #{orderId} Has Been Sent</p>}
                extra={
                    <div className="py-2">
                        <div className="py-2">
                            <a onClick={onClickOrderHistory} className="font-bold font-paragraph underline text-black">See Order History</a>
                        </div>

                        <Button onClick={onClickOrderMore} className="px-4 w-full h-10" type="primary">Order More</Button>
                    </div>
            }
            />
        </Layout>
    )
}

export default OrderConfirmationPage;