"use client";
import Header2 from "@/components/header-2";
import { Flex } from "antd";
import "./style.scss";
import Typography from "@/components/typography";
import { Back, Fullscreen } from "@/components/icon";
import { useRouter } from "next/navigation";

interface IFilmSessionHeader {
  toggleFullscreen: () => void;
}

const FilmSessionHeader = ({ toggleFullscreen }: IFilmSessionHeader) => {
  const router = useRouter();
  return (
    <Header2>
      <Flex
        justify="space-between"
        className="film-session-header"
        align="center"
      >
        <Back
          onClick={() => {
            router.back();
          }}
        />
        <Flex vertical align="center">
          <Typography className="film-session-header-cinema">
            Eurasia Cinema7
          </Typography>
          <Typography className="film-session-header-film mt-1">
            The Batman
          </Typography>
        </Flex>

        <Fullscreen onClick={toggleFullscreen} />
      </Flex>
    </Header2>
  );
};

export default FilmSessionHeader;
