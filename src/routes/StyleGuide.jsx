import { DatePicker, Divider, Flex, Modal, Select } from "antd";
import { useState } from "react";
import ButtonText from "../components/ButtonText";
import Caption from "../components/Caption";
import CustomButton from "../components/CustomButton";
import {
  CustomInput,
  CustomInputWithPassword,
  CustomInputWithLabel,
  CustomInputWithSubmit,
} from "../components/CustomInputs";
import { CustomCheckbox } from "../components/CustomCheckbox";
import Heading from "../components/Heading";
import InputText from "../components/InputText";
import Link from "../components/Link";
import Paragraph from "../components/Paragraph";
import { Slider } from "antd";
import RecycleOrderCard from "../components/RecycleOrderCard";
import RedistributeCard from "../components/RedistributeCard";
import RecycleOrderHistoryCard from "../components/RecycleOrderHistoryCard";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import OrderItemCard from "../components/OrderItemCard";
import MenuItemDetailCard from "../components/MenuItemDetailCard";
import MenuItemPreviewCard from "../components/MenuItemPreviewCard";

const StyleGuide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [weight, setWeight] = useState(5);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const incrementWeight = () => setWeight(weight + 1);

  const decrementWeight = () => setWeight(weight > 0 ? weight - 1 : 0);

  const onChangeInputValue = (e) => {
    console.log(e);
  };

  const marks = {
    0: "0 lbs",
    100: { style: { whiteSpace: "nowrap" }, label: <span>100 lbs</span> },
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
        <Heading level={2}>Slider</Heading>
      </Flex>
      <div className="px-12 w-10/12">
        <Slider min={0} max={100} marks={marks} defaultValue={50} />
      </div>
      <Divider />

      <Flex justify="flex-start" className="px-12">
        <Heading level={2}>Card</Heading>
      </Flex>
      <Flex justify="flex-start" className="px-12" vertical>
        <Flex className="mb-4">
          <RecycleOrderCard />
        </Flex>
        <Flex className="mb-4">
          <RedistributeCard
            image={
              "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg"
            }
            weight={weight}
            onIncrement={incrementWeight}
            onDecrement={decrementWeight}
            name={"Pumpkin Pie"}
            description={"Pumpkin, sugar, butter"}
            time={"11/20/2023"}
            status={"Untouched"}
          />
        </Flex>
        <Flex className="mb-4">
          <RecycleOrderHistoryCard
            name={"Recycle Order 1"}
            weight={"5"}
            type={"Partial Solid"}
            company={"RecycleHero"}
            time={"11/12/2023 21:00"}
          />
        </Flex>
        <Flex className="mb-4">
          <MenuItemPreviewCard
            name={"HASS OMELETE"}
            price={"$22"}
            image={
              "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg"
            }
          />
        </Flex>
        <Flex className="mb-4">
          <OrderItemCard
            name={"HASS OMELETE"}
            description={
              "Bacon, avacado, monterey jack, pico de gallo, mild cheddar"
            }
            count={2}
            image={
              "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg"
            }
          />
        </Flex>
        <Flex className="mb-4">
          <MenuItemDetailCard
            name={"HASS OMELETE"}
            description={
              "Bacon, avacado, monterey jack, pico de gallo, mild cheddar"
            }
            image={
              "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg"
            }
          />
        </Flex>
      </Flex>

      <Divider />

      <Flex justify="flex-start" className="px-12">
        <Heading level={2}>Input</Heading>
      </Flex>
      <Flex vertical justify="flex-start" gap="middle" className="px-12">
        <CustomInput
          className="w-80"
          placeholder="Basic Input"
          allowClear
          onChange={onChangeInputValue}
        />

        <CustomInputWithLabel
          className="w-80"
          content="Input with label"
          placeholder="Input with label"
        />

        <CustomInputWithPassword
          className="w-80"
          placeholder="input password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />

        <CustomInputWithSubmit
          className="w-80"
          placeholder="Custom input with submit button"
        />
      </Flex>
      <Divider />
      <Flex justify="flex-start" className="px-12">
        <Heading level={2}>Checkbox</Heading>
      </Flex>
      <Flex vertical justify="flex-start" gap="middle" className="px-12">
        <CustomCheckbox className="w-60" content="CheckBox Item" />
      </Flex>

      <Divider />

      <Flex justify="flex-start" className="px-12">
        <Heading level={2}>Select</Heading>
      </Flex>

      <Flex vertical justify="flex-start" gap="middle" className="px-12">
        <Select
          className="font-paragraph w-60"
          placeholder="Select an option"
          onChange={""}
          options={[
            { value: "beefRole", label: "Beef Roll" },
            { value: "candy", label: "Candy" },
            { value: "noodles", label: "Noodles" },
            { value: "burger", label: "Burger", disabled: true },
          ]}
        />
      </Flex>

      <br />
      <br />
    </>
  );
};

export default StyleGuide;
