import { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import MenuItemPreviewCard from "../components/MenuItemPreviewCard";
import { Col, Row, Flex, InputNumber, Input } from "antd";
import Heading from "../components/Heading";
import { CustomInput } from "../components/CustomInputs";
import { PictureOutlined } from "@ant-design/icons";

import HeaderNav from "../components/HeaderNav";
import Navbar from "../components/Navbar";
const { TextArea } = Input;

const initialMenuItems = [
  {
    id: 0,
    isDisabled: false,
    name: "HASS OMELETE",
    price: 21,
    description: "Hass Omelete",
    image:
      "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/07/14/0/FNK_Hash-Brown-Omelet_H1_s4x3.jpg",
    size: [],
  },
];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(() => {
    const storedItems = localStorage.getItem("AllItems");
    return storedItems ? JSON.parse(storedItems) : initialMenuItems;
  });
  const [viewState, setViewState] = useState("Menu");
  const [priceValue, setPriceValue] = useState();
  const [idValue, setIdValue] = useState();
  const [descriptionValue, setDescriptionValue] = useState();
  const [disableValue, setDisableValue] = useState(false);
  const [nameValue, setNameValue] = useState();
  const [image, setImage] = useState(null);
  const [nextItemId, setNextItemId] = useState(initialMenuItems.length);

  const [selectedButtons, setSelectedButtons] = useState([]);

  const defaultImage = () => {
    return (
      <>
        <PictureOutlined
          className="text-3xl text-primary absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </>
    );
  };

  const isButtonSelected = (buttonSize) => selectedButtons.includes(buttonSize);

  const handleButtonClick = (buttonSize) => {
    setSelectedButtons((prevSelected) => {
      if (prevSelected.includes(buttonSize)) {
        return prevSelected.filter((size) => size !== buttonSize);
      } else {
        return [...prevSelected, buttonSize];
      }
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleItemClick = (item) => {
    setIdValue(item.id);
    setNameValue(item.name);
    setPriceValue(item.price);
    setImage(item.image);
    setDescriptionValue(item.description);
    setSelectedButtons(item.size);
    setDisableValue(item.isDisabled);
    setViewState("Edit Item");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem();
  };

  useEffect(() => {
    localStorage.setItem("AllItems", JSON.stringify(menuItems));
  }, [menuItems]);

  const resetValues = () => {
    setIdValue();
    setNameValue();
    setPriceValue();
    setImage();
    setDescriptionValue();
    setDisableValue(false);
    setSelectedButtons([]);
  };

  const saveItem = () => {
    const updatedMenuItems = menuItems.map((item) => {
      if (item.id === idValue) {
        return {
          ...item,
          id: idValue,
          isDisabled: false,
          name: nameValue,
          description: descriptionValue,
          price: priceValue,
          image: image,
          size: selectedButtons,
        };
      }
      return item;
    });
    setMenuItems(updatedMenuItems);
    localStorage.setItem("AllItems", JSON.stringify(menuItems));
    resetValues();
    setViewState("Edit Success");
  };

  const addItem = () => {
    const newItem = {
      id: nextItemId,
      isDisabled: false,
      name: nameValue,
      description: descriptionValue,
      price: priceValue,
      image: image,
      size: selectedButtons,
    };
    setMenuItems([...menuItems, newItem]);
    localStorage.setItem("AllItems", JSON.stringify(menuItems));
    setNextItemId(nextItemId + 1);
    returnToMenu();
  };

  const deleteItem = () => {
    setMenuItems(menuItems.filter((item) => item.id !== idValue));
    returnToMenu();
  };

  const enableItem = () => {
    setMenuItems(
      menuItems.map((item) => {
        if (item.id === idValue) {
          return { ...item, isDisabled: false };
        }
        return item;
      })
    );
    returnToMenu();
  };
  const disableItem = () => {
    setMenuItems(
      menuItems.map((item) => {
        if (item.id === idValue) {
          return { ...item, isDisabled: true };
        }
        return item;
      })
    );
    returnToMenu();
  };

  const returnToMenu = () => {
    resetValues();
    setViewState("Menu");
  };

  const onClickNewItemButton = () => {
    setViewState("New Item");
  };

  const renderContent = () => {
    switch (viewState) {
      case "Menu":
        return menuState();
      case "New Item":
        return newItemState();
      case "Edit Item":
        return editItemState();
      case "Edit Success":
        return editSuccessState();
      default:
        return undefined;
    }
  };

  const editSuccessState = () => {
    return (
      <>
        <Flex vertical justify="center" align="center" className="pt-40">
          <Flex justify="center" align="center">
            <p className="text-5xl text-primary font-extrabold">SUCCESS!</p>
          </Flex>
          <Flex justify="center" align="center">
            <p className="text-3xl text-black font-extrabold">
              We have Modified Your Dish
            </p>
          </Flex>
          <Flex justify="center" align="center">
            <p className="text-3xl text-primary font-extrabold pt-16">
              Thanks for using Platemate
            </p>
          </Flex>
          <Flex align="center" justify={"center"} className="pl-6 pr-6 pt-24">
            <CustomButton
              className="text-white border-primary h-16 text-paragraph justify-center text-3xl"
              type={"primary"}
              onClick={returnToMenu}
            >
              PROCEED TO MENU PAGE
            </CustomButton>
          </Flex>
        </Flex>
      </>
    );
  };

  const editItemState = () => {
    return (
      <>
        <HeaderNav
          header={"Edit Item"}
          showLogOutButton={true}
          showBackButton={true}
          backButtonOnClick={returnToMenu}
        />
        <div className="overflow-y-auto max-h-[80%] overflow-x-hidden">
          <Flex justify="flex-start" className="px-8 text-primary">
            <Heading level={2}>Name</Heading>
          </Flex>
          <Flex vertical justify="flex-start" gap="middle" className="px-8">
            <CustomInput
              className="w-80"
              placeholder="Item name"
              allowClear
              style={{ fontSize: 14 }}
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              required
            />
          </Flex>
          <Flex justify="flex-start" className="px-8">
            <Heading level={2}>Description</Heading>
          </Flex>
          <Flex vertical justify="flex-start" gap="middle" className="px-8">
            <TextArea
              className="w-80"
              placeholder="Item description"
              allowClear
              rows={4}
              style={{ fontSize: 14 }}
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
              required
            />
          </Flex>
          <Flex justify="flex-start" className="px-8">
            <Heading level={2}>Price</Heading>
          </Flex>
          <Flex vertical justify="flex-start" gap="middle" className="px-8">
            <InputNumber
              className="w-80"
              placeholder="Item price"
              addonBefore="$"
              value={priceValue}
              onChange={setPriceValue}
              required
            />
          </Flex>
          <Flex justify="flex-start" className="px-8">
            <Heading level={2}>Image</Heading>
          </Flex>
          <div
            className="ml-auto mr-auto w-80 h-80 rounded-lg overflow-hidden relative border-dashed border-primary"
            onClick={handleImageClick}
          >
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
              accept="image/*"
            />
            <Flex vertical justify="flex-start" gap="middle" className="">
              {image ? (
                <img className="h-80 w-80 mr-16" alt="example" src={image} />
              ) : (
                defaultImage()
              )}
            </Flex>
          </div>
          <Flex justify="flex-start" className="px-8">
            <Heading level={2}>Select Size</Heading>
          </Flex>
          <Flex justify="space-between" align="center" className="pl-6 pr-6">
            <CustomButton
              className={`${
                isButtonSelected("Small") ? "text-white" : "text-primary"
              } border-primary`}
              type={isButtonSelected("Small") ? "primary" : undefined}
              onClick={() => handleButtonClick("Small")}
            >
              Small
            </CustomButton>
            <CustomButton
              className={`${
                isButtonSelected("Medium") ? "text-white" : "text-primary"
              } border-primary`}
              type={isButtonSelected("Medium") ? "primary" : undefined}
              onClick={() => handleButtonClick("Medium")}
            >
              Medium
            </CustomButton>
            <CustomButton
              className={`${
                isButtonSelected("Large") ? "text-white" : "text-primary"
              } border-primary`}
              type={isButtonSelected("Large") ? "primary" : undefined}
              onClick={() => handleButtonClick("Large")}
            >
              Large
            </CustomButton>
          </Flex>
          <div className="pt-8">
            <Flex align="center" justify={"center"} className="pl-6 pr-6">
              <CustomButton
                className={`text-white w-32 text-paragraph ${
                  disableValue ? "bg-primary" : "bg-warning"
                }`}
                onClick={disableValue ? enableItem : disableItem}
              >
                {disableValue ? "Enable Item" : "Disable Item"}
              </CustomButton>
            </Flex>
          </div>
          <div className="pt-8">
            <Flex align="center" justify={"center"} className="pl-6 pr-6">
              <CustomButton
                className="text-white w-32 text-paragraph bg-error"
                onClick={deleteItem}
              >
                Delete Item
              </CustomButton>
            </Flex>
          </div>
          <div className="pt-8">
            <Flex align="center" justify={"center"} className="pl-6 pr-6">
              <CustomButton
                className="text-white border-primary w-32 text-paragraph bg-black"
                type={"primary"}
                onClick={saveItem}
              >
                Save
              </CustomButton>
            </Flex>
          </div>
        </div>
      </>
    );
  };

  const newItemState = () => {
    return (
      <>
        <HeaderNav
          header={"New Item"}
          showLogOutButton={true}
          showBackButton={true}
          backButtonOnClick={returnToMenu}
        />

        <div className="overflow-y-auto max-h-[80%] overflow-x-hidden">
          <form onSubmit={handleSubmit}>
            <Flex justify="flex-start" className="px-8 text-primary">
              <Heading level={2}>Name</Heading>
            </Flex>
            <Flex vertical justify="flex-start" gap="middle" className="px-8">
              <CustomInput
                className="w-80"
                placeholder="Item name"
                allowClear
                style={{ fontSize: 14 }}
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                required
              />
            </Flex>
            <Flex justify="flex-start" className="px-8">
              <Heading level={2}>Description</Heading>
            </Flex>
            <Flex vertical justify="flex-start" gap="middle" className="px-8">
              <TextArea
                className="w-80"
                placeholder="Item description"
                allowClear
                rows={4}
                style={{ fontSize: 14 }}
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
                required
              />
            </Flex>
            <Flex justify="flex-start" className="px-8">
              <Heading level={2}>Price</Heading>
            </Flex>
            <Flex vertical justify="flex-start" gap="middle" className="px-8">
              <InputNumber
                className="w-80"
                placeholder="Item price"
                addonBefore="$"
                value={priceValue}
                onChange={setPriceValue}
                required
              />
            </Flex>
            <Flex justify="flex-start" className="px-8">
              <Heading level={2}>Image</Heading>
            </Flex>
            <div
              className="ml-auto mr-auto w-80 h-80 rounded-lg overflow-hidden relative border-dashed border-primary"
              onClick={handleImageClick}
            >
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
                accept="image/*"
              />
              <Flex vertical justify="flex-start" gap="middle" className="">
                {image ? (
                  <img className="h-80 w-80 mr-16" alt="example" src={image} />
                ) : (
                  defaultImage()
                )}
              </Flex>
            </div>
            <Flex justify="flex-start" className="px-8">
              <Heading level={2}>Select Size</Heading>
            </Flex>
            <Flex justify="space-between" align="center" className="pl-6 pr-6">
              <CustomButton
                className={`${
                  isButtonSelected("Small") ? "text-white" : "text-primary"
                } border-primary`}
                type={isButtonSelected("Small") ? "primary" : undefined}
                onClick={() => handleButtonClick("Small")}
              >
                Small
              </CustomButton>
              <CustomButton
                className={`${
                  isButtonSelected("Medium") ? "text-white" : "text-primary"
                } border-primary`}
                type={isButtonSelected("Medium") ? "primary" : undefined}
                onClick={() => handleButtonClick("Medium")}
              >
                Medium
              </CustomButton>
              <CustomButton
                className={`${
                  isButtonSelected("Large") ? "text-white" : "text-primary"
                } border-primary`}
                type={isButtonSelected("Large") ? "primary" : undefined}
                onClick={() => handleButtonClick("Large")}
              >
                Large
              </CustomButton>
            </Flex>
            <div className="pt-8">
              <Flex align="center" justify={"center"} className="pl-6 pr-6">
                <CustomButton
                  className="text-white border-primary w-32 text-paragraph"
                  type={"primary"}
                  htmlType="submit"
                >
                  Add Item
                </CustomButton>
              </Flex>
            </div>
          </form>
        </div>
      </>
    );
  };

  const menuState = () => {
    return (
      <>
        <HeaderNav header={"Menu"} showLogOutButton={true} />
        <div>
          <Flex justify="space-between" align="center" className="pt-6">
            <Heading
              level={2}
              className="text-lg font-bold absolute left-6 font-heading"
            >
              Menu
            </Heading>
            <CustomButton
              type="primary"
              className="absolute right-6"
              onClick={onClickNewItemButton}
            >
              + New Item
            </CustomButton>
          </Flex>
          <div className="menu-items absolute top-48 m-auto left-[6%] right-[6%] max-h-[68%] overflow-y-auto overflow-x-hidden">
            <Row gutter={[16, 16]}>
              {menuItems.map((item, index) => (
                <Col
                  key={item.id}
                  span={12}
                  style={{
                    display: "flex",
                    justifyContent: index % 2 === 1 ? "flex-end" : "flex-start",
                  }}
                >
                  <div onClick={() => handleItemClick(item)}>
                    <MenuItemPreviewCard
                      className={`${
                        item.isDisabled ? "border-dotted" : "border-solid"
                      } border-2 border-primary w-40`}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {renderContent()}
      <Navbar />
    </>
  );
};

export default Menu;