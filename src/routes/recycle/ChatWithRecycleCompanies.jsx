import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import Paragraph from "../../components/Paragraph";

import HeaderNav from "../../components/HeaderNav";
import ChatWithRecycleCompanyCard from "../../components/ChatWithRecycleCompanyCard";

const ChatWithRecycleCompanies = () => {
  const navigate = useNavigate();

  const handleBackButtonOnClick = () => {
    navigate("/recycle");
  };

  const handleChatCardClick = () => {
    navigate(
      "/recycle/chat-with-existing-recycle-company/d7e5e085-30d4-4160-b1ae-936b07eff71a"
    );
  };

  return (
    <div>
      <HeaderNav
        header="Chat"
        showBackButton={true}
        showLogOutButton={true}
        backButtonOnClick={handleBackButtonOnClick}
      />
      <Paragraph className="mx-6">
        You can chat with the Recycle Company which has taken your order.
      </Paragraph>
      <Paragraph className="mx-6">
        Just click on one of our existing orders below:
      </Paragraph>

      <Flex justify="center">
        <Flex vertical>
          <Flex className="mt-4">
            <ChatWithRecycleCompanyCard
              orderId={"Recycle_order_1"}
              weight={"50"}
              type={"Partial Solid"}
              company={"Recycle Hero"}
              time={"11/12/2023 21:00"}
              onClickChatRecycleCompanyCard={handleChatCardClick}
            />
          </Flex>
          <Flex className="mt-4">
            <ChatWithRecycleCompanyCard
              orderId={"Recycle_order_2"}
              weight={"28"}
              type={"Liquid"}
              company={"Bay Area BioGas"}
              time={"11/12/2023 20:00"}
              onClickChatRecycleCompanyCard={handleChatCardClick}
            />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default ChatWithRecycleCompanies;
