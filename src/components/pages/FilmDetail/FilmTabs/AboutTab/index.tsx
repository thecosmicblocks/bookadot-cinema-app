import { Col, Flex, Row } from "antd";
import "./style.scss";
import Typography from "@/components/typography";
import Trailer from "./Trailer";
import Button from "@/components/button";
const AboutTab = () => {
  return (
    <>
      <section className="about-tab">
        <Trailer />

        <Row>
          <Col xs={12} className="about-tab-info">
            <Typography component="h2" className="about-tab-info-content">
              8.3
            </Typography>
            <Typography component="p" className="about-tab-info-sub">
              IMDB
            </Typography>
          </Col>
          <Col xs={12} className="about-tab-info">
            <Typography component="h2" className="about-tab-info-content">
              7.9
            </Typography>
            <Typography component="p" className="about-tab-info-sub">
              Kinopoisk
            </Typography>
          </Col>
        </Row>

        <Typography component="p" className="about-tab-text">
          When the Riddler, a sadistic serial killer, begins murdering key
          political figures in Gotham, Batman is forced to investigate the city
          hidden corruption and question his family involvement.
        </Typography>

        <Flex gap={"8px"} vertical className="mt-3">
          <Row>
            <Typography className="about-tab-sub">Certificate</Typography>
          </Row>
          <Row>
            <Typography className="about-tab-sub">Runtime</Typography>
            <Typography className="about-tab-text">02:56</Typography>
          </Row>
          <Row>
            <Typography className="about-tab-sub">Release</Typography>
            <Typography className="about-tab-text">2022</Typography>
          </Row>
          <Row>
            <Typography className="about-tab-sub">Genre</Typography>
            <Typography className="about-tab-text">
              Action, Crime, Drama
            </Typography>
          </Row>
          <Row>
            <Typography className="about-tab-sub">Director</Typography>
            <Typography className="about-tab-text">Matt Reeves</Typography>
          </Row>
          <Row wrap={false}>
            <Typography className="about-tab-sub">Cast</Typography>
            <Typography className="about-tab-text">
              Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell, Paul
              Dano, John Turturro, Andy Serkis, Peter Sarsgaard
            </Typography>
          </Row>
        </Flex>
      </section>

      <Flex justify="center" align="center" className="select-session">
        <Button size="large">Select session</Button>
      </Flex>
    </>
  );
};

export default AboutTab;
