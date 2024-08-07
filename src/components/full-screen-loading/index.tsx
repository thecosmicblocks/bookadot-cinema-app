import { Flex } from "antd";
import "./style.scss";
import { Loading } from "../icon";

interface FullScreenLoadingProps {
  open: boolean;
}

const FullScreenLoading = ({ open }: FullScreenLoadingProps) => {
  if (!open) return null;

  return (
    <Flex className="full-screen-loading" justify="center" align="center">
      <Loading className="full-screen-loading-icon" />
    </Flex>
  );
};

export default FullScreenLoading;
