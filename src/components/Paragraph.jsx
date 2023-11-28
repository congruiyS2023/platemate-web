import { Typography } from "antd";

const Paragraph = ({ className, ...props }) => (
  <Typography.Paragraph
    className={`font-paragraph text-base ${className}`}
    {...props}
  />
);

export default Paragraph;
