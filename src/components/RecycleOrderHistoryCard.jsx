import React from "react";
import { ShoppingCartOutlined, RightOutlined } from "@ant-design/icons";
import { Card } from "antd";

const RecycleOrderHistoryCard = ({ onClickRecycleHistoryCard, ...props }) => (
  <Card
    title={
      <div>
        <ShoppingCartOutlined className="text-3xl text-primary" />
        <span className="text-primary ml-2 font-heading text-lg">
          {props.name}
        </span>
      </div>
    }
    className="border-2 border-solid border-primary w-80"
    onClick={onClickRecycleHistoryCard}
  >
    <div className="flex ml-2">
      <div className="text-sm grid grid-cols-2 items-center">
        <span className="font-paragraph">Weight:</span>
        <span className="font-paragraph">{props.weight} lbs</span>

        <span className="font-paragraph">Type:</span>
        <span className="font-paragraph">{props.type}</span>

        <span className="font-paragraph">Company:</span>
        <span className="font-paragraph">{props.company}</span>

        <span className="font-paragraph">Time:</span>
        <span className="font-paragraph">{props.time}</span>
      </div>
      <div className="flex ml-auto">
        <RightOutlined className="text-3xl text-primary" />
      </div>
    </div>
  </Card>
);

export default RecycleOrderHistoryCard;
