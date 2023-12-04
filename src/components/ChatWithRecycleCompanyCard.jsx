import React from "react";
import { TeamOutlined, RightOutlined } from "@ant-design/icons";
import { Card } from "antd";

const ChatWithRecycleCompanyCard = ({ onClickChatRecycleCompanyCard, ...props }) => (
  <Card
    title={
      <div>
        <TeamOutlined className="text-3xl text-primary" />
        <span className="text-primary ml-2 font-heading text-lg">
          {props.company}
        </span>
      </div>
    }
    className="border-2 border-solid border-primary w-80"
    onClick={onClickChatRecycleCompanyCard}
  >
    <div className="flex ml-2">
      <div className="text-sm grid grid-cols-2 items-center">
      <span className="font-paragraph">OrderId:</span>
        <span className="font-paragraph">{props.orderId}</span>

        <span className="font-paragraph">Weight:</span>
        <span className="font-paragraph">{props.weight} lbs</span>

        <span className="font-paragraph">Type:</span>
        <span className="font-paragraph">{props.type}</span>
        <span className="font-paragraph">Time:</span>
        <span className="font-paragraph">{props.time}</span>
      </div>
      <div className="flex ml-auto">
        <RightOutlined className="text-3xl text-primary" />
      </div>
    </div>
  </Card>
);

export default ChatWithRecycleCompanyCard;
