import React from "react";
import { Card } from "antd";
import { PictureOutlined } from "@ant-design/icons";

const MenuItemPreviewCard = ({ className, onClickMenuItem, ...props }) => (
  <Card
    bodyStyle={{ padding: 8 }}
    hoverable={true}
    cover={
      props.image ? (
        <img className="h-32 w-32" alt="example" src={props.image} />
      ) : (
        <div className="bg-primary h-32 rounded-t-lg overflow-hidden shadow-md relative">
          <PictureOutlined
            className="text-3xl text-white absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )
    }
    onClick={onClickMenuItem}
    className={`border-2 border-primary w-40 ${className}`}
  >
    <div className="flex flex-col">
      <div>
        <span className="text-primary font-heading"> {props.name} </span>
      </div>
      <div>
        <span className="text-primary font-paragraph"> {props.price} </span>
      </div>
    </div>
  </Card>
);

export default MenuItemPreviewCard;
