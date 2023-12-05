import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Modal } from "antd";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import ButtonText from "../../components/ButtonText";
import HeaderNav from "../../components/HeaderNav";
import RecycleCompanyNavbar from "../../components/RecycleCompanyNavbar";

import RecycleCompanyOrderCard from "../../components/RecycleCompanyOrderCard";
import RecycleOrderHistoryCard from "../../components/RecycleOrderHistoryCard";

const RecycleCompanyOrders = () => {
  const navigate = useNavigate();



  const handleChatButtonClick = (companyName) => {
    navigate(
      "/recycle/chat",
      { state: { company: companyName, backUrl: "/recycle/recycle-company-orders" } }
    );
  };

  const [isIgnoreModalOpen, setIsIgnoreModalOpen] = useState(false);

  const showIgnoreModal = () => {
    setIsIgnoreModalOpen(true);
  };

  const handleIgnoreOk = () => {
    setIsIgnoreModalOpen(false);
    // setRecycleCompanyState(2);
  };

  const handleIgnoreCancel = () => {
    setIsIgnoreModalOpen(false);
  };

//   const [recycleCompanyState, setRecycleCompanyState] = useState(0);

  return (
    <>
      {/* {recycleCompanyState === 0 && ( */}
        <>
          <HeaderNav
            header="Manage Your Orders"
            showBackButton={false}
            showLogOutButton={true}
          />
          <Paragraph className="mx-6">
          You can see the list of recycle orders that you took. 
          You can cancel the order or chat with the restaurant here.
          </Paragraph>

          <Flex justify="center">
            <Flex vertical>
              <Flex className="mt-4">
                <RecycleCompanyOrderCard
                  name={"Recycle Order 1"}
                  weight={"50"}
                  type={"Partial Solid"}
                  company={"Trattoria"}
                  time={"11/12/2023 21:00"}
                  onClickIgnore={showIgnoreModal}
                  onClickChat={()=> handleChatButtonClick("Trattoria")}
                  showButtons={true}
                  showAcceptButton={false}
                />
              </Flex>
              <Flex className="mt-4">
                <RecycleCompanyOrderCard
                  name={"Recycle Order 2"}
                  weight={"27"}
                  type={"Intact Solid"}
                  company={"Happy Ox"}
                  time={"11/12/2023 20:00"}
                  onClickIgnore={showIgnoreModal}
                  onClickChat={()=> handleChatButtonClick("Happy Ox")}
                  showButtons={true}
                  showAcceptButton={false}
                />
              </Flex>
            </Flex>
          </Flex>

          <Modal
            title={
              <Heading level={2} style={{ color: "#AF3800" }}>
                Confirmation
              </Heading>
            }
            open={isIgnoreModalOpen}
            onOk={handleIgnoreOk}
            onCancel={handleIgnoreCancel}
            cancelText={<ButtonText color="black">Back</ButtonText>}
            okText={<ButtonText color="black">Confirm Ignore</ButtonText>}
            okType="danger"
          >
            <Paragraph>Are you sure you want to ignore this order?</Paragraph>
            <RecycleOrderHistoryCard
              name={"Recycle Order 1"}
              weight={"50"}
              type={"Partial Solid"}
              company={"Trattoria"}
              time={"11/12/2023 21:00"}
            />
          </Modal>
        </>
      {/* )} */}

      {/* {recycleCompanyState === 1 && <></>}
      {recycleCompanyState === 2 && <></>} */}
      <RecycleCompanyNavbar />
    </>
  );
};

export default RecycleCompanyOrders;
