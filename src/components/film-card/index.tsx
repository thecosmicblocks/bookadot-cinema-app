"use client";

import { Image } from "antd";
import Typography from "../typography";
import "./style.scss";
import Button from "../button";
import Link from "next/link";

interface IFilmCard {
  id: string;
  name: string;
  category: string;
  point: number;
  image: string;
}

const FilmCard = ({ id, name, category, image, point }: IFilmCard) => {
  return (
    <Link href={`/film/${id}`}>
      <div className="film-card">
        <Button className="film-card-point" size="small">
          {point}
        </Button>
        <Image src={image} className="film-card-img" preview={false} />
        <div className="con">
          <Typography component="p" className="film-card-title">
            {name}
          </Typography>
          <Typography component="p" className="film-card-category">
            {category}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
