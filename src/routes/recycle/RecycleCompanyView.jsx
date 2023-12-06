import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Modal } from "antd";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import ButtonText from "../../components/ButtonText";
import HeaderNav from "../../components/HeaderNav";
import RecycleCompanyNavbar from "../../components/RecycleCompanyNavbar";

import RecycleCompanyOrderCard from "../../components/RecycleCompanyOrderCard";

const RecycleCompanyView = () => {
  const navigate = useNavigate();

  const handleChatButtonClick = (companyName) => {
    navigate(
      "/recycle/chat?name=" + companyName,
      { state: { backUrl: "/recycle/recycle-company-view", pov: "c2o" } }
    );
  };

  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const showAcceptModal = () => {
    setIsAcceptModalOpen(true);
  };

  const handleAcceptOk = () => {
    setIsAcceptModalOpen(false);
    // setRecycleCompanyState(1);
  };

  const handleAcceptCancel = () => {
    setIsAcceptModalOpen(false);
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

  // const [recycleCompanyState, setRecycleCompanyState] = useState(0);

  return (
    <>
      {/* {recycleCompanyState === 0 && ( */}
        <>
          <HeaderNav
            header="Recycle Order Requests"
            showBackButton={false}
            showLogOutButton={true}
          />
          <Paragraph className="mx-6">
            You can see the list of recycle orders posted by the restaurants
            close to you. You can take and handle the order in this page.
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
                  onClickAccept={showAcceptModal}
                  onClickIgnore={showIgnoreModal}
                  onClickChat={()=> handleChatButtonClick("Trattoria")}
                  showButtons={true}
                  showAcceptButton={true}
                />
              </Flex>
              <Flex className="mt-4">
                <RecycleCompanyOrderCard
                  name={"Recycle Order 2"}
                  weight={"27"}
                  type={"Intact Solid"}
                  company={"Mifen 404"}
                  time={"11/12/2023 20:00"}
                  onClickAccept={showAcceptModal}
                  onClickIgnore={showIgnoreModal}
                  onClickChat={()=> handleChatButtonClick("Mifen 404")}
                  showButtons={true}
                  showAcceptButton={true}
                />
              </Flex>
              <Flex className="mt-4">
                <RecycleCompanyOrderCard
                  name={"Recycle Order 3"}
                  weight={"78"}
                  type={"Liquid"}
                  company={"Donkey Donuts"}
                  time={"11/12/2023 23:00"}
                  onClickAccept={showAcceptModal}
                  onClickIgnore={showIgnoreModal}
                  onClickChat={()=> handleChatButtonClick("Donkey Donuts")}
                  showButtons={true}
                  showAcceptButton={true}
                />
              </Flex>
            </Flex>
          </Flex>

          <Modal
            title={
              <Heading level={2} style={{ color: "#06701D" }}>
                Confirmation
              </Heading>
            }
            open={isAcceptModalOpen}
            onOk={handleAcceptOk}
            onCancel={handleAcceptCancel}
            cancelText={<ButtonText color="black">Back</ButtonText>}
            okText={<ButtonText color="white">Confirm Accept</ButtonText>}
          >
            <Paragraph>Are you sure you want to take this order?</Paragraph>
            <RecycleCompanyOrderCard
              name={"Recycle Order 1"}
              weight={"50"}
              type={"Partial Solid"}
              company={"Trattoria"}
              time={"11/12/2023 21:00"}
              showButtons={false}
              showAcceptButton={false}
            />
          </Modal>


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
            <RecycleCompanyOrderCard
              name={"Recycle Order 1"}
              weight={"50"}
              type={"Partial Solid"}
              company={"Trattoria"}
              time={"11/12/2023 21:00"}
              showButtons={false}
              showAcceptButton={false}
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

export default RecycleCompanyView;
