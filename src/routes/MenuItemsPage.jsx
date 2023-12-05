import React, {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {Badge, Flex, Layout, Modal} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import MenuItemPreviewCard from "../components/MenuItemPreviewCard";
import Heading from "../components/Heading";
import ChallengeModal from "../components/ChallengeModal";
import Link from "../components/Link";

const { Header, Content} = Layout;

const MenuItemsPage = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const fromJoinSuccess = state?.fromJoinSuccess;
    let skipModal = true;
    const createNewOrder = (id) => {
        return {
            id: "PLATE00" + id,
            orderItems: [],
            totalPrice: 0,
            totalCount: 0
        }
    }
    let allOrders = []
    let order = {};
    if (!state || !state.allOrders) {
        skipModal = false;
        order = createNewOrder(1);
    } else if (!state.userOrder) {
        allOrders = state.allOrders;
        const prevId = allOrders[allOrders.length-1].id;
        const id = Number(prevId.slice(7))
        order = createNewOrder( id+1);

    } else {
        order = state.userOrder;
        allOrders = state.allOrders;
    }

    const menu = [
        { name: "HASS OMELETE", price: 22, portionOptions: { small: 22, medium: 25, large: 30}, description: "Bacon, avacado, monterey jack, pico de gallo, mild cheddar", image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg"},
        { name: "HASS OMELETE", price: 22, portionOptions: { small: 22, medium: 25, large: 30}, description: "Bacon, avacado, monterey jack, pico de gallo, mild cheddar", image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg"},
        { name: "HASS OMELETE", price: 22, portionOptions: { small: 22, medium: 25, large: 30}, description: "Bacon, avacado, monterey jack, pico de gallo, mild cheddar", image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg"},
        { name: "HASS OMELETE", price: 22, portionOptions: { small: 22, medium: 25, large: 30}, description: "Bacon, avacado, monterey jack, pico de gallo, mild cheddar", image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg"},
        { name: "HASS OMELETE", price: 22, portionOptions: { small: 22, medium: 25, large: 30}, description: "Bacon, avacado, monterey jack, pico de gallo, mild cheddar", image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg"},
        { name: "HASS OMELETE", price: 22, portionOptions: { small: 22, medium: 25, large: 30}, description: "Bacon, avacado, monterey jack, pico de gallo, mild cheddar", image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg"},
        { name: "HASS OMELETE", price: 22, portionOptions: { small: 22, medium: 25, large: 30}, description: "Bacon, avacado, monterey jack, pico de gallo, mild cheddar", image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg"},
        { name: "HASS OMELETE", price: 22, portionOptions: { small: 22, medium: 25, large: 30}, description: "Bacon, avacado, monterey jack, pico de gallo, mild cheddar", image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg"},
    ]

    const onClickCart = () => {
        navigate('/user-home/order-summary', {state: {
            order: order,
            allOrders: allOrders
        }})
    }

    const onClickMenuItem = (menuItem) => {
        navigate('/user-home/menu-detail', {state: {
            userOrder: order,
            menuItem: menuItem,
            allOrders: allOrders
        }});
    }

    const handleJoin = () => {
        navigate('/user-home/join-challenge');
    }

    const handleJoinSuccess = () => {
        navigate('/user-home/join-challange-success');
    }

    return (
        <Layout className="layout">
            <Content className="bg-white py-4">
                <div className="py-2">
                    {!skipModal && <ChallengeModal/>}
                    {!fromJoinSuccess && (
                        <Link onClick={handleJoin}>
                            JOIN ZERO-WASTE CHALLENGE!
                        </Link>
                    )}
                    {fromJoinSuccess && (
                        <Link onClick={handleJoinSuccess}>
                            YOU HAVE JOINED THE CHALLENGE!
                        </Link>
                    )}
                </div>
                <Flex className="px-4" vertical>
                    <Flex justify="space-between" align="center">
                        <Heading className="font-heading">MENU</Heading>
                        <Badge className="flex" count={order.totalCount}>
                            <ShoppingCartOutlined style={{ fontSize: '150%'}} onClick={onClickCart} />
                        </Badge>
                    </Flex>
                    <Flex className="grid grid-cols-2 gap-4" justify='space-between' align='flex-start' gap="middle" vertical>
                        {Array.from({ length: menu.length }).map((_, i) => (
                            <div>
                                <MenuItemPreviewCard onClickMenuItem={() => onClickMenuItem(menu[i])}  name={menu[i]["name"]} price={menu[0]["price"]} description={menu[i]["description"]} image={menu[i]["image"]}></MenuItemPreviewCard>
                            </div>
                        ))}
                    </Flex>
                </Flex>
            </Content>
        </Layout>
    )
}
export default MenuItemsPage;