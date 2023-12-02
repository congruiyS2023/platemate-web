import React from "react";
import { PlusCircleOutlined, RightOutlined } from "@ant-design/icons";

const RecycleOrderCard = ({ clickCreateRecycleOrderCard, ...props }) => (
  <div
    className="border-solid border-primary h-24 w-80 flex bg-white rounded-lg overflow-hidden shadow-md"
    onClick={clickCreateRecycleOrderCard}
  >
    <div className="flex bg-primary w-1/3 items-center justify-center">
      <PlusCircleOutlined className="text-3xl text-white" />
    </div>
    <div className="flex flex-col w-48">
      <div className="mx-3 mt-2">
        <span className="text-primary font-bold font-heading text-lg whitespace-nowrap">New Recycle Order</span>
        <p className="text-xs text-black font-paragraph">Create a new recycle order here!</p>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center mr-2">
      <RightOutlined className="text-2xl text-primary" />
    </div>
  </div>
);

export default RecycleOrderCard;
