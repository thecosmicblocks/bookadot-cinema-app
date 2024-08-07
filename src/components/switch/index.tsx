import { Switch as AntdSwitch, SwitchProps } from "antd";
import "./style.scss";

interface ISwitchProps extends SwitchProps {}

const Switch = ({ className, ...rest }: ISwitchProps) => {
  return (
    <AntdSwitch className={`custom-switch ${className || ""}`} {...rest} />
  );
};

export default Switch;
