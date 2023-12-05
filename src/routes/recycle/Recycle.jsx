import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import Paragraph from "../../components/Paragraph";
import RecycleOrderCard from "../../components/RecycleOrderCard";
import HeaderNav from "../../components/HeaderNav";
import Navbar from "../../components/Navbar";
import {
  PlusCircleOutlined,
  ShoppingCartOutlined,
  LineChartOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const Recycle = () => {
  const navigate = useNavigate();

  const handleCreateNewRecycleOrder = () => {
    navigate("/recycle/create-new-recycle-order");
  };

  const handleEditExistingRecycleOrder = () => {
    navigate("/recycle/edit-existing-recycle-order");
  };
  const handleChatWithRecycleCompanies = () => {
    navigate("/recycle/chat-with-recycle-companies");
  };
  const handleRecycleOrderHistory = () => {
    navigate("/recycle/recycle-history");
  };

  return (
    <div>
      <HeaderNav
        header="RECYCLE"
        showBackButton={false}
        showLogOutButton={true}
      />
      <Flex vertical>
        <Flex vertical className="px-8">
          <Paragraph>
            Use this page to create or manage recycle orders. You can also see
            how much food waste you have recycled in the Recycle History!
          </Paragraph>
        </Flex>

        <Flex justify="center">
          <Flex vertical>
            <RecycleOrderCard
              icon={PlusCircleOutlined}
              title="New Recycle Order"
              description="Creat a new recycle order here!"
              className="my-2"
              onClickCreateRecycleOrderCard={handleCreateNewRecycleOrder}
            />
            <RecycleOrderCard
              icon={ShoppingCartOutlined}
              title="Existing Recycle Order"
              description="Edit or cancel your existing orders here"
              className="my-2"
              onClickCreateRecycleOrderCard={handleEditExistingRecycleOrder}
            />
            <RecycleOrderCard
              icon={CommentOutlined}
              title="Chat with Recycle Companies"
              description="Ask anything you want!"
              className="my-2"
              onClickCreateRecycleOrderCard={handleChatWithRecycleCompanies}
            />
            <RecycleOrderCard
              icon={LineChartOutlined}
              title="Recycle History"
              description="Check how much waste you have recycled!"
              className="my-2"
              onClickCreateRecycleOrderCard={handleRecycleOrderHistory}
            />
          </Flex>
        </Flex>
      </Flex>
      <Navbar />
    </div>
  );
};

export default Recycle;
