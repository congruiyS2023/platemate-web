import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import Paragraph from "../../components/Paragraph";

import HeaderNav from "../../components/HeaderNav";
import Navbar from "../../components/Navbar";
import RecycleOrderHistoryCard from "../../components/RecycleOrderHistoryCard";

const EditExistingRecycleOrder = () => {
  const navigate = useNavigate();

  const handleBackButtonOnClick = () => {
    navigate("/recycle");
  };

  const handleExistingOrderCardClick = (orderId) => {
    navigate("/recycle/existing-order-edit?orderId=" + orderId);
  };

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders =
      JSON.parse(localStorage.getItem("recycleOrders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div>
      <HeaderNav
        header="Existing Recycle Orders"
        showBackButton={true}
        showLogOutButton={true}
        backButtonOnClick={handleBackButtonOnClick}
      />
      <Paragraph className="mx-6">
        You can edit or cancel the existing orders here.
      </Paragraph>

      <Flex justify="center">
        <Flex vertical>
          {orders.map((order) => (
            <Flex className="mb-4" key={order.orderId}>
              <RecycleOrderHistoryCard
                name={order.name}
                weight={order.weight.toString()}
                type={order.type}
                company={order.company}
                time={order.time}
                onClickRecycleHistoryCard={() =>
                  handleExistingOrderCardClick(order.orderId)
                }
              />
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Navbar />
    </div>
  );
};

export default EditExistingRecycleOrder;
