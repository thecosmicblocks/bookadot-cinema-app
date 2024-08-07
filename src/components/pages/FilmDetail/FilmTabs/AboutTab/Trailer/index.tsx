import { Play } from "@/components/icon";
import { Flex, Image } from "antd";
import "./style.scss";

const Trailer = () => {
  return (
    <Flex
      style={{
        aspectRatio: "16/9",
        position: "relative",
        backgroundSize: "cover",
        // backgroundImage:
        //   'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxWsjGM6Ob90Sd4f1iyuU_ZnK7_soL906VA&s")',
      }}
      className="trailer"
    >
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxWsjGM6Ob90Sd4f1iyuU_ZnK7_soL906VA&s"
        style={{
          width: "100%",
          height: "100%",
        }}
        preview={false}
      />
      <Play
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    </Flex>
  );
};

export default Trailer;
