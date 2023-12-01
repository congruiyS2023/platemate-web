import React from "react";
import { PlusCircleOutlined, RightOutlined } from "@ant-design/icons";

const RecycleOrderCard = ({ clickCreateRecycleOrderCard, ...props }) => (
  <div
    className="border-solid border-primary h-24 w-80 flex bg-white rounded-lg overflow-hidden shadow-md"
    onClick={clickCreateRecycleOrderCard}
  >
    <div className="flex bg-primary w-1/3  items-center justify-center">
      <PlusCircleOutlined className="text-3xl text-white" />
    </div>
    <div className="px-4 py-3 mr-2">
      <div className="mx-3">
        <span className="text-primary font-bold">New Recycle Order</span>
        <p className="text-xs text-black">Create a new recycle order here!</p>
      </div>
    </div>
    <div className="flex items-center justify-center w-12">
      <RightOutlined className="text-3xl text-primary" />
    </div>
  </div>
);

export default RecycleOrderCard;
