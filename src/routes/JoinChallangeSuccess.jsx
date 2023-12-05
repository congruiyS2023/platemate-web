import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "antd";
import Heading from "../components/Heading";
import CustomButton from "../components/CustomButton";
import Paragraph from "../components/Paragraph";
import Navbar from "../components/Navbar";

const JoinChallangeSuccess = () => {
  const navigate = useNavigate();

  const handleReturnToUserHome = () => {
    navigate("/user-home", {
      state: { skipModal: true, fromJoinSuccess: true },
    });
  };

  return (
    <div>
      <Flex vertical align="center" className="pt-36 px-20">
        <Heading level={1} type="success" className="text-center py-8">
          You have joined the Zero-Waste Challenge!
        </Heading>
        <Flex vertical align="center">
          <Paragraph className="text-center">
            Tell one of our staff when you finish your plates. We will send a
            coupon to your phone:
          </Paragraph>
          <Heading level={2} className="text-center">
            (400)823-8823
          </Heading>
        </Flex>
      </Flex>
      <Flex vertical className="px-20 py-20">
        <CustomButton type="primary" onClick={handleReturnToUserHome}>
          RETURN TO MENU
        </CustomButton>
      </Flex>
      <Navbar />
    </div>
  );
};

export default JoinChallangeSuccess;
