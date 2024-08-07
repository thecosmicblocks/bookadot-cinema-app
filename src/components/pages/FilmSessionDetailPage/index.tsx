"use client";
import { Flex } from "antd";
import FilmSessionHeader from "./FilmSessionHeader";
import FilmSessionBooking from "./FilmSessionBooking";
import { useState } from "react";

const FilmSessionDetail = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  return (
    <Flex
      vertical
      style={{
        height: "100dvh",
      }}
    >
      <FilmSessionHeader
        toggleFullscreen={() => {
          setIsFullscreen((prev) => !prev);
        }}
      />

      <FilmSessionBooking isFullscreen={isFullscreen} />
    </Flex>
  );
};

export default FilmSessionDetail;
