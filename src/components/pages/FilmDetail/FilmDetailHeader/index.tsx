"use client";
import Header2 from "@/components/header-2";
import { Flex } from "antd";
import "./style.scss";
import Typography from "@/components/typography";
import { Back } from "@/components/icon";
import { useRouter } from "next/navigation";
const FilmDetailHeader = () => {
  const router = useRouter();
  return (
    <Header2>
      <Flex justify="center" className="film-detail-header" align="center">
        <Back
          className={"back-icon"}
          onClick={() => {
            router.back();
          }}
        />
        <Typography className="film-detail-header-title">The Batman</Typography>
      </Flex>
    </Header2>
  );
};

export default FilmDetailHeader;
