import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Select, Modal } from "antd";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import ButtonText from "../../components/ButtonText";
import { CustomInput } from "../../components/CustomInputs";
import { CustomCheckbox } from "../../components/CustomCheckbox";
import RecycleOrderHistoryCard from "../../components/RecycleOrderHistoryCard";

import CustomButton from "../../components/CustomButton";
import HeaderNav from "../../components/HeaderNav";
import { Slider } from "antd";

const ExistingOrderEditView = () => {
  const [inputValue, setInputValue] = useState(68);
  const [checkedStates, setCheckedStates] = useState({
    intactSolid: false,
    partialSolid: true,
    liquid: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setEditOrderState(2);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSliderChange = (value) => {
    setInputValue(value);
  };

  const handleInputChange = (e) => {
    const value = Math.min(Math.max(0, e.target.value), 1000);
    setInputValue(value);
  };

  const handleCheckboxChange = (type) => (e) => {
    setCheckedStates({ ...checkedStates, [type]: e.target.checked });
  };

  const [timeslot, setTimeslot] = useState("21:00 - 22:00");
  const handleTimeslotChange = (value) => {
    setTimeslot(value);
  };

  const isButtonDisabled =
    inputValue === 0 ||
    (!checkedStates.intactSolid &&
      !checkedStates.partialSolid &&
      !checkedStates.liquid);

  const [editOrderState, setEditOrderState] = useState(0);

  const handleEditOrder = () => {
    setEditOrderState(1);
  };

  const marks = {
    0: "0 lbs",
    200: { style: { whiteSpace: "nowrap" }, label: <span>200+ lbs</span> },
  };

  const navigate = useNavigate();

  const handleReturnToExistingOrdersPage = () => {
    navigate("/recycle/edit-existing-recycle-order");
  };

  const handleBackButtonOnClick = () => {
    navigate("/recycle/edit-existing-recycle-order");
  };
  return (
    <>
      {editOrderState === 0 && (
        <div>
          <HeaderNav
            header="Edit Existing Order"
            showBackButton={true}
            showLogOutButton={true}
            backButtonOnClick={handleBackButtonOnClick}
          />
          <Paragraph className="mx-6">
            Use this page to edit or cancel existing recycle order.
          </Paragraph>

          <Flex vertical className="mx-8">
            <Heading level={2}>Estimate the weight in Lbs</Heading>
            <div className="mx-12 w-10/12">
              <CustomInput
                placeholder="0"
                allowClear
                value={inputValue}
                onChange={handleInputChange}
              />
              <Slider
                min={0}
                max={200}
                marks={marks}
                value={inputValue}
                onChange={handleSliderChange}
                className="font-paragraph"
              />
            </div>
          </Flex>
          <Flex vertical className="my-6 mx-8">
            <Heading level={2}>Classify the leftovers</Heading>
            <div className="mx-12 w-10/12">
              <CustomCheckbox
                content="Intact Solid"
                checked={checkedStates.intactSolid}
                onChange={handleCheckboxChange("intactSolid")}
              />
              <CustomCheckbox
                content="Partial Solid"
                checked={checkedStates.partialSolid}
                onChange={handleCheckboxChange("partialSolid")}
              />
              <CustomCheckbox
                content="Liquid"
                checked={checkedStates.liquid}
                onChange={handleCheckboxChange("liquid")}
              />
            </div>
          </Flex>

          <Flex vertical className="my-6 mx-8">
            <Heading level={2}>Pickup Time Today</Heading>
            <div className="mx-12 w-10/12">
              <Select
                className="font-paragraph w-full h-10"
                placeholder="Select one time slot"
                onChange={handleTimeslotChange}
                value={timeslot}
                options={[
                  { value: "20:00 - 21:00", label: "20:00 - 21:00" },
                  { value: "21:00 - 22:00", label: "21:00 - 22:00" },
                  { value: "22:00 - 23:00", label: "22:00 - 23:00" },
                ]}
              />
            </div>
          </Flex>

          <Flex vertical center className="mx-20 my-12">
            <CustomButton
              type="primary"
              onClick={handleEditOrder}
              disabled={isButtonDisabled}
            >
              Confirm Update Order
            </CustomButton>
            <CustomButton
              className="my-6"
              type="primary"
              danger
              onClick={showModal}
            >
              Cancel Order
            </CustomButton>
            <Modal
              title={
                <Heading level={2} style={{ color: "#AF3800" }}>
                  Confirmation
                </Heading>
              }
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              cancelText={<ButtonText color="black">Back</ButtonText>}
              okText={<ButtonText color="black">Confirm Cancel</ButtonText>}
              okType="danger"
            >
              <Paragraph>Are you sure you want to cancel this order?</Paragraph>
              <RecycleOrderHistoryCard
                name={"Recycle Order 1"}
                weight={"5"}
                type={"Partial Solid"}
                company={"RecycleHero"}
                time={"11/12/2023 21:00"}
              />
            </Modal>
          </Flex>
        </div>
      )}

      {editOrderState === 1 && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mt-48 w-full max-w-lg">
            <Heading level={1} type="success">
              Your changes are saved!
            </Heading>
          </div>
          <div className="mt-24 mx-20">
            <Paragraph>
              We have sent your request to recycle companies nearby.
            </Paragraph>
            <Paragraph>
              Your food leftovers are expected to be picked up between{" "}
              {timeslot.replace(" - ", " and ")}.
            </Paragraph>
          </div>
          <div className="text-center mt-12 w-full max-w-lg">
            <Heading level={2} type="success">
              Thank you for your effort in saving food!
            </Heading>
            <CustomButton
              className="mt-8"
              type="primary"
              size="large"
              onClick={handleReturnToExistingOrdersPage}
            >
              Return to Existing Orders Page
            </CustomButton>
          </div>
        </div>
      )}

      {editOrderState === 2 && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mt-48 w-full max-w-lg">
            <Heading level={1} type="success">
              Your are all set!
            </Heading>
          </div>
          <div className="mt-24 mx-20">
            <Paragraph>We have canceled your order.</Paragraph>
          </div>
          <div className="text-center mt-12 w-full max-w-lg">
            <CustomButton
              className="mt-8"
              type="primary"
              size="large"
              onClick={handleReturnToExistingOrdersPage}
            >
              Return to Existing Orders Page
            </CustomButton>
          </div>
        </div>
      )}
    </>
  );
};

export default ExistingOrderEditView;
