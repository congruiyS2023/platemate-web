import { Typography } from "antd";

const InputText = ({ className, ...props }) => (
    <Typography.Text className="font-paragraph text-lg" {...props} />
)

export default InputText;