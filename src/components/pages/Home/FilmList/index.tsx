import FilmCard from "@/components/film-card";
import { Col, Row } from "antd";

const FILMS = [
  {
    id: "1",
    name: "Lật mặt 6",
    image:
      "https://image.bnews.vn/MediaUpload/Org/2023/04/24/lm6-2x3-layout-20230424144523.jpg",
    category: "Action",
    point: 8.1,
  },
  {
    id: "2",
    name: "Lật mặt 6",
    image:
      "https://image.bnews.vn/MediaUpload/Org/2023/04/24/lm6-2x3-layout-20230424144523.jpg",
    category: "Adventure",
    point: "8.1",
  },
  {
    id: "3",
    name: "Lật mặt 6",
    image:
      "https://image.bnews.vn/MediaUpload/Org/2023/04/24/lm6-2x3-layout-20230424144523.jpg",
    category: "Adventure",
    point: 8.1,
  },
];

const FilmList = () => {
  return (
    <section>
      <Row gutter={[16, 16]}>
        {FILMS.map((film) => (
          <Col xs={12} {...film} key={film.id}>
            <FilmCard {...(film as any)} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default FilmList;
