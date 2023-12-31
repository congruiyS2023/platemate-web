import { Divider, Flex } from "antd";
import Heading from "./Heading";
import CustomButton from "./CustomButton";
import { RxArrowLeft, RxExit, RxPlusCircled } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const HeaderNav = ({
  header,
  showBackButton,
  backButtonOnClick,
  showPlusButton,
  plusButtonOnClick,
  showLogOutButton,
}) => {
  // Get current url path. e.g. localhost:3000/reward/abc will give /reward/abc
  const param = useLocation().pathname;
  const logoutIcon = (
    <NavLink to={`/logout${param}`} className={"text-midnight"}>
      <RxExit className="scale-[2]" />
    </NavLink>
  );

  const backButton = showBackButton ? (
    <CustomButton
      className="w-7 h-7 absolute left-6 top-8 border-none"
      icon={<RxArrowLeft className="scale-[2]" />}
      onClick={backButtonOnClick}
    ></CustomButton>
  ) : null;

  const plusButton = showPlusButton ? (
    <CustomButton
      className="w-7 h-7 absolute right-16 top-8 border-none"
      icon={<RxPlusCircled className="scale-[2]" />}
      onClick={plusButtonOnClick}
    ></CustomButton>
  ) : null;

  const logOutButton = showLogOutButton ? (
    <CustomButton
      className="w-7 h-7 absolute right-6 top-8 border-none"
      icon={logoutIcon}
      type={"default"}
    ></CustomButton>
  ) : null;

  return (
    <div className="sticky top-0 bg-white z-10">
      {backButton}
      <Flex className="pt-4" justify="center">
        <Heading level={1} className="text-center">
          {header}
        </Heading>
      </Flex>
      {plusButton}
      {logOutButton}
      <Divider />
    </div>
  );
};

export default HeaderNav;
