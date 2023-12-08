import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Flex } from "antd";
import CustomButton from "../components/CustomButton";

const RecycleCompanyOrderCard = ({ onClickAccept, onClickIgnore, onClickChat, showButtons, showAcceptButton, ignoreOrCancel, ...props }) => {

  return (
    <>
  <Card className="border-2 border-solid border-primary w-80">
    <Flex>
      <Flex vertical className="w-fit">
        <div className="w-fit">
          <ShoppingCartOutlined className="text-3xl text-primary" />
          <span className="text-primary ml-2 font-heading text-lg">
            {props.name}
          </span>
        </div>
        <div className="flex">
          <div className="text-sm grid grid-cols-2 items-center">
            <span className="font-paragraph">Weight:</span>
            <span className="font-paragraph">{props.weight} lbs</span>

            <span className="font-paragraph">Type:</span>
            <span className="font-paragraph">{props.type}</span>

            <span className="font-paragraph">PostBy:</span>
            <span className="font-paragraph">{props.company}</span>

            <span className="font-paragraph">Time:</span>
            <span className="font-paragraph">{props.time}</span>
          </div>
        </div>
      </Flex>
      {showButtons &&
        <Flex vertical className="ml-3 justify-around">
          {showAcceptButton && 
          <CustomButton className="mt-2 w-14" size="small" type="primary" onClick={onClickAccept}>
            Accept
          </CustomButton>}
          <CustomButton className="mt-2" size="small" type="primary" danger onClick={onClickIgnore}>
            {ignoreOrCancel}
          </CustomButton>
          <CustomButton className="mt-2" size="small" onClick={onClickChat}>
            Chat
          </CustomButton>
        </Flex>
      }
    </Flex>
  </Card>
  </>
  )
};

export default RecycleCompanyOrderCard;
