import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import Paragraph from "../../components/Paragraph";

import HeaderNav from "../../components/HeaderNav";
import RecycleOrderHistoryCard from "../../components/RecycleOrderHistoryCard";

const CreateNewRecycleOrder = () => {
  const navigate = useNavigate();

  const handleBackButtonOnClick = () => {
    navigate("/recycle");
  }

  const handleExistingOrderCardClick = () => {
    navigate("/recycle/edit-existing-recycle-order/d7e5e085-30d4-4160-b1ae-936b07eff71a");
  }

  return (
    <div>
      <HeaderNav
        header="Existing Recycle Orders"
        showBackButton={true}
        showLogOutButton={true}
        backButtonOnClick={handleBackButtonOnClick}

      />
        <Paragraph className="mx-6">
          You can edit or cancel the existing orders here. And you can also chat
          with the companies taking your orders.
        </Paragraph>

      <Flex justify="center">
        <Flex vertical>
          <Flex className="mb-4">
            <RecycleOrderHistoryCard
              name={"Recycle Order 1"}
              weight={"5"}
              type={"Partial Solid"}
              company={"RecycleHero"}
              time={"11/12/2023 21:00"}
              onClickRecycleHistoryCard={handleExistingOrderCardClick}
            />
          </Flex>

          <Flex className="mb-4">
            <RecycleOrderHistoryCard
              name={"Recycle Order 2"}
              weight={"20"}
              type={"Liquid"}
              company={"Bay Area BioGas"}
              time={"11/12/2023 20:00"}
              onClickRecycleHistoryCard={handleExistingOrderCardClick}
            />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default CreateNewRecycleOrder;
