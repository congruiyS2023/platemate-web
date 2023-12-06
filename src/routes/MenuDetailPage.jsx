import React from 'react';
import { ShoppingCartOutlined } from "@ant-design/icons";
import {Badge, Flex, Layout, Select} from "antd";
import MenuItemDetailCard from "../components/MenuItemDetailCard";
import Heading from "../components/Heading";
import {CustomInput} from "../components/CustomInputs";
import CustomButton from "../components/CustomButton";
import HeaderNav from "../components/HeaderNav";
import {useLocation, useNavigate} from "react-router-dom";
const { Content} = Layout;

const MenuDetailPage = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const fromJoinSuccess = state?.fromJoinSuccess;
    const skipModal = state?.skipModal;
    const allOrders = state.allOrders;
    const userOrder = state.userOrder;
    const menuItem = state.menuItem;
    const pendingOrder = {item: menuItem}


    const initPortionOptions = () => {
        let portionOptions = []
        for (let size in menuItem.portionOptions) {
            let portionLabel = size.toUpperCase() + " - $" + menuItem.portionOptions[size]
            portionOptions.push({value: size, label: portionLabel})
        }
        return portionOptions
    }

    const onClickCart = () => {
        navigate('/user-home/order-summary', {state: {
                order: userOrder,
                allOrders: allOrders,
                fromJoinSuccess: fromJoinSuccess,
                skipModal: skipModal
        }})
    }

    const onSelectionChange = (value) => {
        pendingOrder["size"] = value
    }

    const onAmountChange = (e) => {
        pendingOrder["count"] = Number(e.target.value);
    }

    const onAddToOrderClick = () => {
        let pricePerItem = menuItem.portionOptions[pendingOrder.size]
        //TODO: sanity check potion selection & amount
        userOrder.orderItems.push(pendingOrder)
        userOrder.totalPrice += pendingOrder.count * pricePerItem;
        userOrder.totalCount += pendingOrder.count

        navigate('/user-home', {state: {userOrder: userOrder, allOrders: allOrders, fromJoinSuccess: fromJoinSuccess, skipModal: skipModal}})
    }

    const onBackButtonClick = () => {
        navigate('/user-home', {state: {userOrder: userOrder, allOrders: allOrders, fromJoinSuccess: fromJoinSuccess, skipModal: skipModal}})
    }

    return (
        <Layout className="layout">
            <HeaderNav header="PlateMate" showBackButton={true} backButtonOnClick={onBackButtonClick}></HeaderNav>
            <Content className="bg-white">
                <Flex className="px-4" justify="flex-start" gap="small" vertical>
                    <Flex justify="space-between" align="center">
                        <Heading className="font-heading">MENU</Heading>
                        <Badge count={userOrder.totalCount} className="flex">
                            <ShoppingCartOutlined style={{ fontSize: '150%'}} onClick={onClickCart} />
                        </Badge>
                    </Flex>
                    <Flex justify='space-between' gap="middle" vertical>
                        <MenuItemDetailCard name={menuItem.name} description={menuItem.description} image={menuItem.image}/>
                        <Select
                            className="font-paragraph w-full h-10 border-primary"
                            placeholder="Portion Size"
                            onChange={onSelectionChange}
                            options={initPortionOptions()}
                        />
                        <Flex align="center" className="font-paragraph w-full h-10 space-x-4">
                            <span className="font-bold font-paragraph">AMOUNT:</span>
                            <CustomInput
                                className="border-primary"
                                placeholder="Amount"
                                allowClear
                                onChange={onAmountChange}
                            />
                        </Flex>
                        <CustomButton onClick={onAddToOrderClick} type="primary" className="w-full h-10">Add to Order</CustomButton>
                    </Flex>
                </Flex>
            </Content>
        </Layout>
    )
}

export default MenuDetailPage;