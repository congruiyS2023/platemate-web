import React from "react";
import {
  PlusOutlined,
  MinusOutlined,
  PictureOutlined,
} from "@ant-design/icons";

const RedistributeCard = ({ weight, onIncrement, onDecrement, ...props }) => (
  <div className="border-solid border-primary h-40 w-80 flex bg-white rounded-lg overflow-hidden shadow-md">
    <div className="flex bg-primary w-1/3  items-center justify-center">
      <PictureOutlined className="text-3xl text-white" />
    </div>
    <div className="flex flex-col w-64 mt-2">
      <div className="mx-3">
        <span className="text-primary font-bold text-lg font-heading">Pumpkin Pie</span>
        <p className="text-xs text-black text-primary font-paragraph">
          Pumpkin, suger, butter
        </p>
        <p className="text-xs text-black font-paragraph">Untouched</p>
        <p className="text-xs text-black font-paragraph">Pick up by 11/5/2023</p>
        <p className="text-xs text-black text-primary">
          <span className="font-bold font-paragraph">{weight}</span>
          <span className="text-xs text-black ml-1 font-paragraph">lb</span>
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center w-20 bg-primary">
      <div className="flex h-1/2" onClick={onIncrement}>
        <PlusOutlined className="text-3xl text-primary mb-3 text-white" />
      </div>
      <div className="flex h-1/2" onClick={onDecrement}>
        <MinusOutlined className="text-3xl text-primary mt-3 text-white" />
      </div>
    </div>
  </div>
);

export default RedistributeCard;