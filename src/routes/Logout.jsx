import { Flex } from "antd";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Logout = () => {
  const lastParam = useLocation().pathname.split("/").pop();

  console.log(lastParam);

  const navigate = useNavigate();

  const onClickNo = () => {
    navigate(`/${lastParam}`);
  };

  const onClickYes = () => {
    if (lastParam === "company") {
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
