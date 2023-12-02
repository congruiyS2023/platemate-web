import React from "react";
import { Slider } from "antd";

const marks = {
  0: "0 lbs",
  100: { style: { whiteSpace: "nowrap" }, label: <span>100 lbs</span> },
};

const CustomSlider = ({ className, ...props }) => (
  <Slider
    className={`font-paragraph ${className}`}
    marks={marks}
    defaultValue={50}
    min={0}
    max={100}
    {...props}
  />
);

export default CustomSlider;
