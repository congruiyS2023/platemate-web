import { Typography } from "antd";

const Heading = ({ className, ...props }) => (
    <Typography.Title className={`font-heading ${className}`} {...props} />
);

export default Heading;