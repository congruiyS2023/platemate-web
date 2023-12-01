import React from "react";
import { ShoppingCartOutlined, RightOutlined } from "@ant-design/icons";
import { Card } from "antd";

const RecycleOrderHistoryCard = ({ clickRecycleHistoryCard, ...props }) => (
  <Card
    title={
      <div>
        <ShoppingCartOutlined className="text-3xl text-primary" />
        <span className="text-primary ml-2">Recycle Order 1</span>
      </div>
    }
    className="border-2 border-solid border-primary w-80"
    onClick={clickRecycleHistoryCard}
  >
    <div className="flex ">
      <div className="text-sm grid grid-cols-2 items-center">
        <span className="font-semibold">Weight:</span>
        <span>50 lbs</span>

        <span className="font-semibold">Type:</span>
        <span>Partial Solid</span>

        <span className="font-semibold">Company:</span>
        <span>RecycleHero</span>

        <span className="font-semibold">Time:</span>
        <span>11/12/2023 21:00</span>
      </div>
      <div className="flex ml-auto">
        <RightOutlined className="text-3xl text-primary" />
      </div>
    </div>
  </Card>
);

export default RecycleOrderHistoryCard;
