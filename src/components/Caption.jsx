import { Typography } from "antd";

const Caption = ({className, ...props}) => (
    <Typography.Paragraph className={`font-paragraph text-sm ${className}`} {...props} />
);

export default Caption;