import React from "react";
import {
  PlusOutlined,
  MinusOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Divider, Flex } from "antd";

const RedistributeCard = ({
  onClickRedistributeCard,
  onIncrement,
  onDecrement,
  ...props
}) => {
  return !props.disabled ? (
    <div className="border-solid border-primary h-42 w-80 flex bg-white rounded-lg overflow-hidden shadow-md">
      <div
        className="flex bg-primary w-1/3  items-center justify-center"
        onClick={onClickRedistributeCard}
      >
        <InfoCircleOutlined className="text-3xl text-white" />
      </div>
      <div className="flex flex-col w-64 mt-2">
        <div className="mx-3" onClick={onClickRedistributeCard}>
          <span className="text-primary font-bold text-lg font-heading capitalize">
            {props.name}
          </span>
          <p className="text-base leading-none text-primary font-paragraph">
            {props.ingredients}
          </p>
          <p className="text-sm leading-none text-black font-paragraph capitalize">
            {props.status}
          </p>
          <p className="text-sm leading-none text-black font-paragraph">
            Pickup By {props.expirationDate}
          </p>
          <p className="text-xs space-x-6 mb-1">
            <span className="font-bold text-lg font-paragraph text-primary">{props.quantity}</span>
            <span className="text-base text-black ml-1 font-paragraph">{props.unit}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-20 bg-primary">
        <div className="flex h-1/2" onClick={onIncrement}>
          <PlusOutlined className="text-3xl text-white" />
        </div>
        <Divider className="m-0 border-2 border-white" />
        <div className="flex h-1/2" onClick={onDecrement}>
          <MinusOutlined className="text-3xl text-white" />
        </div>
      </div>
    </div>
  ) : (
    <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-neutral-800 after:opacity-25 after:rounded-lg">
      <div className="border-solid border-primary h-29 w-80 flex bg-white rounded-lg overflow-hidden shadow-md">
        <div
          className="flex bg-primary w-1/3  items-center justify-center"
          onClick={onClickRedistributeCard}
        >
          <InfoCircleOutlined className="text-3xl text-white" />
        </div>
        <div className="flex flex-col w-64 mt-2">
          <div className="mx-3" onClick={onClickRedistributeCard}>
            <span className="text-primary font-bold text-lg font-heading">
              {props.name}
            </span>
            <p className="my-2 text-base text-primary font-paragraph">
              {props.ingredients}
            </p>
            <Flex justify="space-between">
              <p className="mt-1 text-sm leading-none text-black font-paragraph">
                {props.status}
              </p>
              <p className="mt-1 text-sm leading-none text-black font-paragraph">
                Best By {props.expirationDate}
              </p>
            </Flex>

          </div>
        </div>
      </div>
    </div>
  )
};

export default RedistributeCard;
