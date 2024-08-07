import {
  Calendar,
  Clock,
  Screen,
  ScreenSmall,
  SmallX,
} from "@/components/icon";
import Typography from "@/components/typography";
import { Col, Flex, Row } from "antd";
import "./style.scss";
import BookingBoard from "./BookingBoard";
import { useState } from "react";
import { HEADER_2_HEIGHT } from "@/components/header-2";
import Button from "@/components/button";
import FullScreenLoading from "@/components/full-screen-loading";
import { useRouter } from "next/navigation";

interface IFilmSessionBooking {
  isFullscreen: boolean;
}

const FilmSessionBooking = ({ isFullscreen }: IFilmSessionBooking) => {
  const [selectedPlaces, setSelectedPlaces] = useState<Array<number>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <>
      <Flex
        vertical
        flex={1}
        className="session-booking"
        style={{
          ...(selectedPlaces.length > 0 && {
            maxHeight: `calc(100dvh - ${HEADER_2_HEIGHT + 80}px)`,
            overflow: "auto",
          }),
        }}
      >
        <Row gutter={[16, 0]} className="mt-4">
          <Col xs={12}>
            <Flex justify="center" align="center" className="date-section">
              <Calendar />
              <Typography>April, 14</Typography>
            </Flex>
          </Col>
          <Col xs={12}>
            <Flex justify="center" align="center" className="date-section">
              <Clock />
              <Typography>15:10</Typography>
            </Flex>
          </Col>
        </Row>

        <Flex justify="center" gap={"12px"} className="mt-8">
          <Flex align="center" className="seat-category">
            <div className="circle available"></div>
            <Typography component="p">Available</Typography>
          </Flex>
          <Flex align="center" className="seat-category">
            <SmallX />
            <Typography component="p">Occupied</Typography>
          </Flex>
          <Flex align="center" className="seat-category">
            <div className="circle chosen"></div>
            <Typography component="p">Chosen</Typography>
          </Flex>
        </Flex>

        <Flex
          vertical
          flex={1}
          justify="center"
          style={{
            ...(isFullscreen && {
              margin: "0px -16px",
              overflowX: "hidden",
            }),
          }}
        >
          <Flex justify="center">
            <Typography
              component="h5"
              style={{
                zIndex: 1,
              }}
              className="screen-text"
            >
              Screen
            </Typography>
          </Flex>
          {isFullscreen ? (
            <Flex
              justify="center"
              style={{
                marginTop: "8px",
              }}
            >
              <Screen
                style={{
                  minWidth: "593px",
                }}
              />
            </Flex>
          ) : (
            <Flex
              justify="center"
              style={{
                marginTop: "-6px",
              }}
            >
              <ScreenSmall />
            </Flex>
          )}

          <div
            className="mt-4"
            style={{
              ...(!isFullscreen && {
                padding: "0px 16px",
              }),
            }}
          >
            <BookingBoard
              isPreviewMode={!isFullscreen}
              selectedPlaces={selectedPlaces}
              setSelectedPlaces={(places) => {
                setSelectedPlaces(places);
              }}
            />
          </div>
        </Flex>
      </Flex>

      {selectedPlaces.length > 0 && (
        <Flex className="order-btn-section" justify="center" align="center">
          <Flex
            justify="center"
            style={{
              width: "min(100%,768px)",
            }}
          >
            <Button
              size="large"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  router.push("/ticket/1");
                }, 2000);
              }}
            >
              Buy {selectedPlaces.length}
            </Button>
          </Flex>
        </Flex>
      )}
      <FullScreenLoading open={isLoading} />
    </>
  );
};

export default FilmSessionBooking;
