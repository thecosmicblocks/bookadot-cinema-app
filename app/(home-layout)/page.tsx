"use client";

import { Children } from "react";
import { FilmCard } from "@app/components/FilmCard";
import { Filter, Search } from "@app/components/Icon";
import Typography from "@app/components/Typography";

const FILMS = [
    {
      id: "1",
      name: "Lật mặt 6",
      code: 'lat-mat-6',
      image:
        "https://image.bnews.vn/MediaUpload/Org/2023/04/24/lm6-2x3-layout-20230424144523.jpg",
      category: "Action",
      point: 8.1,
    },
    {
      id: "2",
      name: "Lật mặt 6",
      code: 'lat-mat-6',
      image:
        "https://image.bnews.vn/MediaUpload/Org/2023/04/24/lm6-2x3-layout-20230424144523.jpg",
      category: "Adventure",
      point: 8.1,
    },
    {
      id: "3",
      name: "Lật mặt 6",
      code: 'lat-mat-6',
      image:
        "https://image.bnews.vn/MediaUpload/Org/2023/04/24/lm6-2x3-layout-20230424144523.jpg",
      category: "Adventure",
      point: 8.1,
    },
  ];



export default function Home() {
  return (
    <div>
        <div className="flex justify-between items-center">
            <Typography component="h2" className="text-2xl font-bold">Now in cinemas</Typography>

            <span className="cursor-pointer">
                <Filter />
            </span>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Children.toArray(
                FILMS.map((film) => (
                    <div className="pt-4">
                         <FilmCard {...film} />
                    </div>
                ))
            )}
        </div>
    </div>
  );
}
