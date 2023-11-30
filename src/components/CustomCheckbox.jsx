import { Checkbox, Flex } from "antd";
import Caption from "../components/Caption";

export const CustomCheckbox = ({ className, onChange, content, ...props }) => {
  const handleChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Flex justify="space-between" className={`font-paragraph ${className}`}>
      <Caption style={{ marginBottom: 0 }}>{content}</Caption>
      <Checkbox size="large" onChange={handleChange} {...props}></Checkbox>
    </Flex>
  );
};