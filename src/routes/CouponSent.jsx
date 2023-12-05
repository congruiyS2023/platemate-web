import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import Heading from "../components/Heading";
import CustomButton from "../components/CustomButton";
import Navbar from "../components/Navbar";

const CouponSent = () => {
  const navigate = useNavigate();

  const handleSendAnotherCoupon = () => {
    navigate("/reward");
  };

  return (
    <div>
      <Flex vertical align="center" className="py-20">
        <Heading level={1} type="success" className="text-center px-20 py-20">
          COUPON SENT!
        </Heading>
        <Flex vertical align="center" className="px-20">
          <Heading level={2} className="text-center">
            <div>You have successfully </div>
            <div>sent a coupon</div>
            <div className="text-primary py-2">“$3 - within 15 days”</div>
            <div>by text message to </div>
            <div>customer’s phone </div>
            <div className="text-primary py-2">(408)823-8823</div>
          </Heading>
        </Flex>
      </Flex>
      <Flex vertical center className="px-20">
        <CustomButton type="primary" onClick={handleSendAnotherCoupon}>
          SEND ANOTHER COUPON
        </CustomButton>
      </Flex>
      <Navbar />
    </div>
  );
};

export default CouponSent;
