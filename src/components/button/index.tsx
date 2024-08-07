import { Button as AntdButton, ButtonProps } from "antd";
import "./index.scss";

interface IButton extends ButtonProps {}

const Button = ({ className, children, ...rest }: IButton) => {
  return (
    <AntdButton
      className={`custom-button ${className || ""}`}
      size="middle"
      type="primary"
      {...rest}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
