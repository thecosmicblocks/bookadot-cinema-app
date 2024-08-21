"use client";

import { Badge } from "flowbite-react";
import Typography from "../Typography";
import Link from "next/link";
import Image from "next/image";

interface IFilmCard {
  id: string;
  name: string;
  category: string;
  point: number;
  image: string;
}

export const FilmCard = ({ id, name, category, image, point }: IFilmCard) => {
  return (
    <Link href={`/film/${id}`}>
      <div className="w-full flex flex-col relative">
        <Badge size="sm" className="absolute top-1 right-1 z-10" color="bookadot-primary">
            {point}
        </Badge>
        <Image
            src={image}
            alt={name}
            width={100}
            height={250}
            className="rounded-lg w-full aspect-[0.713]"    
        />
        <div className="mt-1">
          <Typography component="p" className="font-bold">
            {name}
          </Typography>
          <Typography component="p" className="text-sm mt-1 text-gray-500">
            {category}
          </Typography>
        </div>
      </div>
    </Link>
  );
};
