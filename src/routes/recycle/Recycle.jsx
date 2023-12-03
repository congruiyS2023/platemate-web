import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import RecycleOrderCard from "../../components/RecycleOrderCard";
import HeaderNav from "../../components/HeaderNav";
import {
  PlusCircleOutlined,
  ShoppingCartOutlined,
  LineChartOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const Recycle = () => {
  const navigate = useNavigate();

  const handleCreateNewRecycleOrder = () => {
    navigate("/create-new-recycle-order");
  };

  const handleEditExistingRecycleOrder = () => {
    navigate("/edit-existing-recycle-order");
  };
  const handleChatWithRecycleCompanies = () => {
    navigate("/chat-with-recycle-companies");
  };
  const handleRecycleOrderHistory = () => {
    navigate("/recycle-history");
  };

  return (
    <div>
      <HeaderNav
        header="PLATEMATE"
        showBackButton={false}
        showLogOutButton={true}
      />
      <Flex vertical>
        <Flex vertical className="px-8">
          <Heading level={1} type="success">
            Recycle Leftovers
          </Heading>
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
    </div>
  );
};

export default Recycle;
