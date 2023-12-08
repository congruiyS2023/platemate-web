import React from "react";
import { Card } from "antd";
import { PictureOutlined } from "@ant-design/icons";

const handlePrice = ({ ...props }) => {
  return (
    <span className="text-primary font-paragraph">
      {props.size.length !== 0
        ? handleSize({ size: props.size, prices: props.prices })
        : "$ " + props.price}{" "}
    </span>
  );
};

const handleSize = ({ size, prices }) => {
  return (
    <>
      <span className="text-primary font-paragraph">
        {" "}
        {size.includes("Small") ? "S:$" + prices.small : ""}{" "}
      </span>
      <span className="text-primary font-paragraph">
        {" "}
        {size.includes("Medium") ? "M:$" + prices.medium : ""}{" "}
      </span>
      <span className="text-primary font-paragraph">
        {" "}
        {size.includes("Large") ? "L:$" + prices.large : ""}{" "}
      </span>
    </>
  );
};

const MenuItemPreviewCard = ({ className, onClickMenuItem, ...props }) => (
  <Card
    bodyStyle={{ padding: 8 }}
    hoverable={true}
    cover={
      props.image ? (
        <div
          className="bg-cover bg-center w-40 h-32"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
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
    className={`border-2 border-primary w-40 h-48 ${className}`}
  >
    <div className="flex flex-col">
      <div>
        <span className="text-primary font-heading"> {props.name} </span>
      </div>
      <div>
        <span className="text-primary font-paragraph">
          {handlePrice(props)}
        </span>
      </div>
    </div>
  </Card>
);

export default MenuItemPreviewCard;
