import { Col, Flex, Row } from "antd";
import "./style.scss";
import { ArrowDown, ArrowUp, Calendar, DoubleArrow } from "@/components/icon";
import Typography from "@/components/typography";
import Switch from "@/components/switch";
import SessionItem from "./components/SessionItem";
import { useEffect, useState } from "react";
import DatePicker from "@/components/date-picker";
import dayjs from "dayjs";
const datas: Array<Session> = [
  {
    category: "IMAX",
    prices: [2200, 1000, 1500, 0],
    date: new Date().toISOString(),
    cinemaId: "1",
    cinemaName: "Eurasia Cinema7",
    sessionId: "1",
    type: "Pyc",
  },
  {
    category: "IMAX",
    prices: [3500, 0, 2500, 0],
    date: new Date().toISOString(),
    cinemaId: "2",
    cinemaName: "Kinopark 8 IMAX Saryarka",
    sessionId: "2",
    type: "Pyc",
  },
  {
    category: "IMAX",
    prices: [3500, 1500, 2500, 4000],
    date: new Date().toISOString(),
    cinemaId: "1",
    cinemaName: "Eurasia Cinema7",
    sessionId: "2",
    type: "Pyc",
  },
  {
    category: "IMAX",
    prices: [3500, 1500, 2500, 4000],
    date: new Date().toISOString(),
    cinemaId: "2",
    cinemaName: "Eurasia Cinema7",
    sessionId: "2",
    type: "Pyc",
  },
  {
    category: "IMAX",
    prices: [3500, 1500, 2500, 4000],
    date: new Date().toISOString(),
    cinemaId: "3",
    cinemaName: "Eurasia Cinema7",
    sessionId: "2",
    type: "Pyc",
  },
  {
    category: "IMAX",
    prices: [3500, 1500, 2500, 4000],
    date: new Date().toISOString(),
    cinemaId: "3",
    cinemaName: "Eurasia Cinema7",
    sessionId: "5",
    type: "Pyc",
  },
  {
    category: "IMAX",
    prices: [3500, 1500, 2500, 4000],
    date: new Date().toISOString(),
    cinemaId: "3",
    cinemaName: "Eurasia Cinema7",
    sessionId: "5",
    type: "Pyc",
  },
];

const SessionsTab = () => {
  const [groupByCinema, setGroupByCinema] = useState(false);
  const [groupByCinemaDatas, setGroupByCinemaDatas] = useState<
    Record<
      string,
      {
        cinemaName: string;
        sessions: Array<Session>;
      }
    >
  >({});
  const [sort, setSort] = useState("asc");
  const [dateFilter, setDateFilter] = useState(() => dayjs(new Date()));

  useEffect(() => {
    setGroupByCinemaDatas(
      datas.reduce((prev, session: Session) => {
        return {
          ...prev,
          [session.cinemaId]: prev[session.cinemaId]
            ? {
                ...prev[session.cinemaId],
                sessions: [...prev[session.cinemaId].sessions, session],
              }
            : {
                cinemaName: session.cinemaName,
                sessions: [session],
              },
        };
      }, {} as any)
    );
  }, [datas]);

  return (
    <section className="session-tab">
      <Row>
        <Col xs={8} className="session-tab-filter-item">
          <DatePicker
            value={dateFilter}
            onChange={(v) => {
              setDateFilter(v);
            }}
          />
          {/* </Flex> */}
        </Col>

        <Col xs={8} className="session-tab-filter-item">
          <Flex vertical align="center">
            <DoubleArrow
              onClick={() => {
                setSort(sort === "asc" ? "desc" : "asc");
              }}
              style={{
                cursor: "pointer",
              }}
            />
            <Flex align="center">
              <Typography component="p" className="mt-2">
                Time{" "}
                {sort === "asc" ? (
                  <>
                    <ArrowUp
                      style={{
                        width: "10px",
                        height: "10px",
                      }}
                    />
                  </>
                ) : (
                  <ArrowDown
                    style={{
                      width: "10px",
                      height: "10px",
                    }}
                  />
                )}
              </Typography>
            </Flex>
          </Flex>
        </Col>

        <Col xs={8} className="session-tab-filter-item">
          <Flex vertical align="center">
            <Switch
              checked={groupByCinema}
              onChange={(checked) => {
                setGroupByCinema(checked);
              }}
            />
            <Flex align="center">
              <Typography component="p" className="mt-2">
                By cinema
              </Typography>
            </Flex>
          </Flex>
        </Col>
      </Row>
      <Flex vertical>
        {groupByCinema ? (
          <>
            {Object.entries(groupByCinemaDatas).map(([key, value]) => (
              <>
                <SessionItem
                  data={{
                    cinemaId: String(key),
                    cinemaName: value.cinemaName,
                    cinemaDescription: "",
                    location: 1.5,
                  }}
                />
                <>
                  {value.sessions.map((data, index) => (
                    <SessionItem data={data} key={`session_${index}`} />
                  ))}
                </>
              </>
            ))}
          </>
        ) : (
          <>
            {datas.map((data, index) => (
              <SessionItem data={data} key={`session_${index}`} />
            ))}
          </>
        )}
      </Flex>
    </section>
  );
};

export default SessionsTab;
