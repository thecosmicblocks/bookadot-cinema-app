"use client";

import { AppHeader } from "@app/components/AppHeader";
import { useFilmContext } from "@app/context/FilmContext";
import { useEffect } from "react";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
  }>) {
    const filmContext = useFilmContext()    

    useEffect(() => {
        filmContext.setDetailFilmData({
            id: "1",
            name: "Lật mặt 6",
            image:
                "https://image.bnews.vn/MediaUpload/Org/2023/04/24/lm6-2x3-layout-20230424144523.jpg",
            category: "Action",
            point: 8.1,
        })
    }, [])

    return (
        <>
            <AppHeader title={filmContext.detailFilmData?.name || ""} className="mb-1"/>
            {children}
        </>
    );
}
