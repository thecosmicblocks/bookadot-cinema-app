"use client";

import { Search } from "@/components/icon";
import Typography from "@/components/typography";

const HomeHeader = () => {
  return (
    <>
      <div className="home-container-header">
        <Typography component="h1">Now in cinemas</Typography>
        <Search />
      </div>
    </>
  );
};

export default HomeHeader;
