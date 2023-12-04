import { Flex } from "antd";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import {
  CustomInputWithPassword,
  CustomInput,
} from "../components/CustomInputs";
import Heading from "../components/Heading";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
  const userType = useLocation().pathname.split("/").pop();

  console.log(userType);

  const [viewState, setViewState] = useState("Home");

  const navigate = useNavigate();

  const onClickMainPage = () => {
    setViewState("Login");
  };

  const renderContent = () => {
    switch (viewState) {
      case "Home":
        return homePageState();
      case "Login":
        return loginPageState();
      default:
        return undefined;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(userType === "restaurant"){
      navigate("/community");
    }
    else{
      navigate("/company")
    }
  };

  const homePageState = () => {
    return (
      <>
        <Flex vertical justify="center" align="center" className="pt-10">
          <Flex justify="center" align="center">
            <p className="text-5xl text-black font-logo">PLATEMATE</p>
          </Flex>
          <Flex vertical justify="center" align="center">
            <p className="text-3xl text-primary font-extrabold font-heading">
              Welcome
            </p>
            <p className="text-3xl text-primary font-extrabold font-heading">
              To
            </p>
            <p className="text-3xl text-primary font-extrabold font-heading">
              Platemate
            </p>
          </Flex>
          <Flex align="center" justify={"center"} className="pl-6 pr-6 pt-24">
            <CustomButton
              className="text-white border-primary h-16 text-paragraph justify-center text-2xl"
              type={"primary"}
              onClick={onClickMainPage}
            >
              {`${
                userType === "restaurant"
                  ? "Restaurant Owner Login"
                  : "Recycle Company Login"
              }`}
            </CustomButton>
          </Flex>
        </Flex>
      </>
    );
  };

  const loginPageState = () => {
    return (
      <>
        <Flex vertical justify="center" align="center" className="pt-10">
          <Flex justify="center" align="center">
            <p className="text-5xl text-black font-logo">PLATEMATE</p>
          </Flex>
          <div className="overflow-y-auto max-h-[80%] overflow-x-hidden">
            <form onSubmit={handleSubmit}>
              <Flex justify="flex-start" className="px-8 text-primary pt-8">
                <Heading level={2}>Username</Heading>
              </Flex>
              <Flex vertical justify="flex-start" gap="middle" className="px-8">
                <CustomInput
                  className="w-80"
                  placeholder="Username"
                  allowClear
                  style={{ fontSize: 14 }}
                  required
                />
              </Flex>
              <Flex justify="flex-start" className="px-8 text-primary pt-8">
                <Heading level={2}>Password</Heading>
              </Flex>
              <Flex vertical justify="flex-start" gap="middle" className="px-8">
                <CustomInputWithPassword
                  className="w-80"
                  placeholder="Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  allowClear
                  style={{ fontSize: 14 }}
                  required
                />
              </Flex>
              <Flex
                align="center"
                justify={"center"}
                className="pl-6 pr-6 pt-24"
              >
                <CustomButton
                  className="text-white border-primary h-16 text-paragraph justify-center text-2xl"
                  type={"primary"}
                  htmlType="submit"
                >
                  Login
                </CustomButton>
              </Flex>
            </form>
          </div>
        </Flex>
      </>
    );
  };
  return <>{renderContent()}</>;
};

export default Login;
