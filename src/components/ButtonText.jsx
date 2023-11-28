import { Typography } from "antd";

const ButtonText = ({ color, size, className, ...props }) => (
  <Typography.Text
    className={`font-paragraph font-semibold ${
      size === "large" ? "text-xl" : "text-base"
    } ${color === "white" ? "text-white" : "text-black"} ${className}`}
    {...props}
  />
);

export default ButtonText;