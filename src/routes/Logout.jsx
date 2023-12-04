import { Flex } from "antd";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Logout = () => {
  // Get param. e.g.: localhost:3000/logout/reward/abc will give reward/abc
  const param = useLocation().pathname.split("/").slice(2).join("/");

  const navigate = useNavigate();

  const onClickNo = () => {
    // Return to the previous page
    navigate(`/${param}`);
  };

  const onClickYes = () => {
    localStorage.clear();
    if (param[0] === "company") {
      navigate("/login/company");
    } else {
      navigate(`/login/restaurant`);
    }
  };
  return (
    <>
      <Flex vertical justify="center" align="center" className="pt-10">
        <Flex justify="center" align="center">
          <p className="text-5xl text-black font-logo">PLATEMATE</p>
        </Flex>
        <Flex vertical justify="center" align="center">
          <p className="text-3xl text-primary font-extrabold font-heading">
            Confirm
          </p>
          <p className="text-3xl text-primary font-extrabold font-heading">
            To
          </p>
          <p className="text-3xl text-primary font-extrabold font-heading">
            Logout?
          </p>
        </Flex>
        <Flex align="center" className="pl-6 pr-6 pt-24">
          <span className="pr-10">
            <CustomButton
              className="text-white border-primary w-20 h-12 text-paragraph justify-center text-2xl bg-slate-500"
              onClick={onClickNo}
            >
              No
            </CustomButton>
          </span>
          <span className="pl-10">
            <CustomButton
              className="text-white border-primary w-20 h-12 text-paragraph justify-center text-2xl"
              type={"primary"}
              onClick={onClickYes}
            >
              Yes
            </CustomButton>
          </span>
        </Flex>
      </Flex>
    </>
  );
};

export default Logout;
