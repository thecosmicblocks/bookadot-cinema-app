"use client";

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
            code: 'lat-mat-6',
            name: "Lật mặt 6",
            image:
                "https://image.bnews.vn/MediaUpload/Org/2023/04/24/lm6-2x3-layout-20230424144523.jpg",
            category: "Action",
            point: 8.1,
            trailer: {
                url: "https://www.w3schools.com/html/mov_bbb.mp4",
                type: "video/mp4",
            },
            description: "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
            filmAttributes: {
                certificate: "16+",
                runtime: "02:56",
                release: "2022",
                genre: "Action, Crime, Drama",
                director: "Matt Reeves",
                cast: "Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell, Paul Dano, John Turturro, 	Andy Serkis, Peter Sarsgaard",
            }
        })
    }, [])

    return (
        <>
            {children}
        </>
    );
}
