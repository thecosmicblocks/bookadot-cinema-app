"use client";
import Tabs from "@/components/tabs";
import AboutTab from "./AboutTab";
import SessionsTab from "./SessionsTab";
import { useState } from "react";
import { HEADER_HEIGHT } from "@/components/header";
import FilmDetailHeader from "../FilmDetailHeader";

const FilmTabs = () => {
  const [activeKey, setActiveKey] = useState("about");

  return (
    <>
      <FilmDetailHeader />
      <section
        style={{
          ...(activeKey === "about" && {
            maxHeight: `calc(100dvh - ${HEADER_HEIGHT + 90}px)`,
            overflow: "auto",
          }),
        }}
      >
        <Tabs
          items={[
            {
              key: "about",
              label: "About",
              children: <AboutTab />,
            },
            {
              key: "session",
              label: "Session",
              children: <SessionsTab />,
            },
          ]}
          onChange={(key) => {
            setActiveKey(key);
          }}
        />
      </section>
    </>
  );
};

export default FilmTabs;
