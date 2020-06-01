import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
interface ButtonProps {
  name: string;
}
const Button = (props: ButtonProps) => {
  const [isHover, setHover] = useState(false);
  return (
    <div>
      <button
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {props.name}
      </button>
      <button>
        <CloseOutlined />
      </button>
    </div>
  );
};

export default () => {
  return <Button name="测试" />;
};
