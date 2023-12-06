import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Select } from "antd";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Link from "../components/Link";
import { CustomInput } from "../components/CustomInputs";
import CustomButton from "../components/CustomButton";
import HeaderNav from "../components/HeaderNav";
import Navbar from "../components/Navbar";

const Reward = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCoupon, setSelectedCoupon] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCouponChange = (value) => {
    setSelectedCoupon(value);
  };

  const isButtonDisabled = !phoneNumber || !selectedCoupon;

  const navigate = useNavigate();

  const handleSendCoupon = () => {
    navigate("/reward/coupon-sent");
  };

  const handleViewDetails = () => {
    navigate("/reward/challenge-details");
  };

  const handleManageCoupons = () => {
    navigate("/reward/coupons");
  };

  return (
    <div>
      <HeaderNav
        header="Reward"
        showBackButton={false}
        showLogOutButton={true}
      />
      <Flex vertical>
        <Flex vertical className="px-8">
          <Heading level={1} type="success">
            ZERO-WASTE CHALLENG SEND COUPON
          </Heading>
          <Paragraph>
            Send a coupon to customers who finish their plates and complete the
            zero-waste challenge!
          </Paragraph>
        </Flex>
        <Flex className="px-4">
          <Link onClick={handleViewDetails}>VIEW DETAILS</Link>
        </Flex>
      </Flex>
      <Flex vertical className="py-8">
        <Flex vertical className="px-8">
          <Heading level={2}>Receiver Phone Number</Heading>
          <CustomInput
            className="w-full h-10"
            placeholder="(000)000-0000"
            allowClear
            onChange={handlePhoneNumberChange}
          />
          <Heading level={2}>Choose a Coupon</Heading>
          <Flex justify="space-bewteen">
            <Select
              className="font-paragraph w-full h-10"
              placeholder="Select one coupon option"
              onChange={handleCouponChange}
              options={[
                { value: "1", label: "$3 - within 15 days" },
                { value: "2", label: "$5 - buy $50 save $5" },
                { value: "3", label: "$20 - buy $150 save $20" },
              ]}
            />
          </Flex>
        </Flex>
        <Flex className="px-4 pt-2">
          <Link onClick={handleManageCoupons}>MANAGE YOUR COUPON OPTIONS</Link>
        </Flex>
      </Flex>
      <Flex vertical className="px-20 py-12">
        <CustomButton
          type="primary"
          onClick={handleSendCoupon}
          disabled={isButtonDisabled}
        >
          SEND COUPON
        </CustomButton>
      </Flex>
      <Navbar />
    </div>
  );
};

export default Reward;
