import { Input, Space, Flex } from "antd";
import { SendOutlined } from "@ant-design/icons";
import CustomButton from "../components/CustomButton";
import Caption from "../components/Caption";
import React, { useState } from "react";

export const CustomInput = ({ className, ...props }) => (
  <Input className={`font-paragraph text-lg ${className}`} {...props} />
);

export const CustomInputWithPassword = ({ className, ...props }) => (
  <Input.Password
    className={`font-paragraph text-lg ${className}`}
    {...props}
  />
);

export const CustomInputWithLabel = ({
  className,
  content,
  placeholder,
  ...props
}) => (
  <Flex
    vertical
    justify="flex-start"
    className={`font-paragraph text-lg ${className}`}
  >
    <Caption style={{ width: "fit-content" }}> {content}</Caption>
    <CustomInput placeholder={placeholder} allowClear />
  </Flex>
);

export const CustomInputWithSubmit = ({ className, placeholder, ...props }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
      <Space.Compact className={`font-paragraph text-lg ${className}`}>
        <CustomInput
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        <CustomButton size="large" type="primary" disabled={!inputValue} onChange={""}>
          <SendOutlined />
        </CustomButton>
      </Space.Compact>
  );
};