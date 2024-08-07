import { Tabs as AntdTabs, TabsProps } from "antd";
import "./style.scss";

interface ITabProps extends TabsProps {}

const Tabs = ({ className, items, ...rest }: ITabProps) => {
  return (
    <AntdTabs
      className={`custom-tab custom-tab-total-${
        (items || []).length
      } ${className}`}
      items={items}
      centered
      {...rest}
    />
  );
};

export default Tabs;
