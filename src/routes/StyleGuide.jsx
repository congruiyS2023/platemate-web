import { DatePicker, Divider, Flex, Modal, Input, Space } from "antd";
import { useState } from "react";
import ButtonText from "../components/ButtonText";
import Caption from "../components/Caption";
import CustomButton from "../components/CustomButton";
import Heading from "../components/Heading";
import InputText from "../components/InputText";
import Link from "../components/Link";
import Paragraph from "../components/Paragraph";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { SendOutlined } from "@ant-design/icons";

const StyleGuide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  return (
    <>
      <div className="pt-4">
        <Heading level={1}>PlateMate Style Guide</Heading>
      </div>

      <Divider />

      <Flex justify="flex-start" className="px-12">
        <Heading level={2}>Typography</Heading>
      </Flex>
      <Flex vertical justify="flex-start" className="px-12">
        <Flex justify="space-between" align="center">
          <Heading level={1}>Title/Heading</Heading>
          <Caption>24 px Epilogue Bold 700</Caption>
        </Flex>
        <Flex justify="space-between" align="center">
          <Heading level={2}>Secondary Heading</Heading>
          <Caption>18 px Epilogue Bold 700</Caption>
        </Flex>
        <Flex justify="space-between" align="center">
          <InputText>Forms and search bar input</InputText>
          <Caption>18 px Barlow Regular 400</Caption>
        </Flex>
        <Flex justify="space-between" align="center">
          <ButtonText size="large">Large Button</ButtonText>
          <Caption>20 px Barlow Semibold 600</Caption>
        </Flex>
        <Flex justify="space-between" align="center">
          <ButtonText>Regular Button</ButtonText>
          <Caption>16 px Barlow Semibold 600</Caption>
        </Flex>
        <Flex justify="space-between" align="center">
          <Paragraph>Paragraph</Paragraph>
          <Caption>16 px Barlow Regular 400</Caption>
        </Flex>
        <Flex justify="space-between" align="center">
          <Caption>Caption</Caption>
          <Caption>14 px Barlow Regular 400</Caption>
        </Flex>
        <Flex justify="space-between" align="center">
          <Link>Link</Link>
          <Caption>16 px Barlow Semibold 600</Caption>
        </Flex>
      </Flex>

      <Divider />

      <Flex justify="flex-start" className="px-12">
        <Heading level={2}>Buttons</Heading>
      </Flex>
      <Flex wrap="wrap" gap="middle" className="px-12">
        <CustomButton type="primary">Primary Button</CustomButton>
        <CustomButton>Default Button</CustomButton>
        <CustomButton disabled>Disabled Button</CustomButton>
        <CustomButton type="primary" danger>
          Primary Danger Button
        </CustomButton>
        <CustomButton danger>Default Danger Button</CustomButton>
        <CustomButton size="large">Large Button</CustomButton>
        <CustomButton size="small">Small Button</CustomButton>
      </Flex>

      <Divider />

      <Flex justify="flex-start" className="px-12">
        <Heading level={2}>DatePicker</Heading>
      </Flex>
      <Flex justify="flex-start" className="px-12">
        <DatePicker />
      </Flex>

      <Divider />

      <Flex justify="flex-start" className="px-12">
        <Heading level={2}>Modal</Heading>
      </Flex>
      <Flex justify="flex-start" gap="middle" className="px-12">
        <CustomButton onClick={showModal}>Open Modal</CustomButton>
        <Modal
          title={
            <Heading level={2} className="text-primary">
              Confirmation
            </Heading>
          }
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelText={<ButtonText color="black">Cancel</ButtonText>}
          okText={<ButtonText color="white">OK</ButtonText>}
        >
          <Paragraph>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Modal>
      </Flex>

      <Divider />

      <Flex justify="flex-start" className="px-12">
        <Heading level={2}>Input</Heading>
      </Flex>

      <Flex vertical justify="flex-start" gap="middle" className="px-12">
        <Input
          placeholder="Basic Input"
          allowClear
          onChange={onChange}
          style={{ width: 300 }}
        />
        <Flex vertical justify="flex-start" style={{ width: 300 }}>
          <label style={{ width: "fit-content" }}> Input with label </label>
          <Input
            style={{ marginTop: "5px" }}
            placeholder="Input with label"
            allowClear
            onChange={onChange}
          />
        </Flex>

        <Input.Password
          placeholder="input password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          style={{ width: 300 }}
        />

        <Space.Compact style={{ width: 300 }}>
          <Input placeholder="Message..." />
          <CustomButton disabled>
            <SendOutlined />
          </CustomButton>
        </Space.Compact>

        <Space.Compact style={{ width: 300 }}>
          <Input defaultValue="Combine input and button" />
          <CustomButton type="primary">
            <SendOutlined />
          </CustomButton>
        </Space.Compact>
      </Flex>

      <br />
      <br />
    </>
  );
};

export default StyleGuide;
