import React from "react";
import { PlusCircleOutlined, RightOutlined } from "@ant-design/icons";
import Caption from "../components/Caption";


const RecycleOrderCard = ({
  className,
  icon: CustomIcon = PlusCircleOutlined,
  title  = "Card title",
  description  = "Card description", 
  onClickCreateRecycleOrderCard,
  ...props
}) => (
  <div
    className={`border-solid border-primary h-24 w-88 flex bg-white rounded-lg overflow-hidden shadow-md ${className}`}
    onClick={onClickCreateRecycleOrderCard}
    {...props}
  >
    <div className="flex bg-primary w-3/10 items-center justify-center">
      <CustomIcon className="text-3xl text-white" />
    </div>
    <div className="flex flex-col w-56">
      <div className="mx-3 mt-2">
        <span className="text-primary font-bold font-heading text-base whitespace-wrap">
          {title}
        </span>
        <Caption className="text-s">
          {description}
        </Caption>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center mr-2">
      <RightOutlined className="text-xl text-primary" />
    </div>
  </div>
);

export default RecycleOrderCard;
