import { Button } from 'antd';

const CustomButton = ({ className, ...props }) => (
  <Button className={`font-paragraph ${className}`} {...props} />
);

export default CustomButton;