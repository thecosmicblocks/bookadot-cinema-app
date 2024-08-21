"use client";

import { ReactNode } from "react"
import { HomeHeader } from "@/app/components/HomeHeader"

function HomeLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
        <HomeHeader />
        {children}
    </>
  )
}

export default HomeLayout