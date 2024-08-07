import { Cinema } from "@/types/cinema";
import "./style.scss";
import { Flex } from "antd";
import dayjs from "dayjs";
import Typography from "@/components/typography";
import { Mark } from "@/components/icon";
import Link from "next/link";

interface SessionItemProps {
  data: Session | Cinema;
}

const SessionItem = ({ data }: SessionItemProps) => {
  const isSession = Boolean((data as Session).sessionId);

  return (
    <Flex className="session-item" vertical>
      {isSession ? (
        <Link href={`/session/${(data as Session).sessionId}`}>
          <Flex align="center">
            <Flex vertical justify="center">
              <Typography
                className="session-item-header"
                style={{
                  // textAlign: "center",
                  marginLeft: "8px",
                }}
              >
                {dayjs((data as Session).date).format("HH:mm")}
              </Typography>
              <Flex gap={8} align="center" className="mt-1">
                <Typography className="session-item-sub">
                  {(data as Session).category}
                </Typography>
                <Typography className="session-item-sub">
                  {(data as Session).type}
                </Typography>
              </Flex>
            </Flex>
            <div className="session-item-divider"></div>

            <Flex vertical>
              <Typography
                component="p"
                className="session-item-text mb-1"
                style={{
                  fontWeight: 700,
                }}
              >
                {data.cinemaName}
              </Typography>

              <Flex align="center" gap={"8px"}>
                {(data as Session).prices.map((price, index) => (
                  <>
                    {price ? (
                      <Typography
                        component="p"
                        className="session-item-text"
                        key={`session_${(data as Session).sessionId}_${index}`}
                        style={{
                          minWidth: "53px",
                        }}
                      >
                        {price} ₸
                      </Typography>
                    ) : (
                      <Typography
                        className="session-item-sub"
                        style={{
                          minWidth: "53px",
                        }}
                      >
                        •
                      </Typography>
                    )}
                  </>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Link>
      ) : (
        <>
          <Flex justify="space-between">
            <Typography className="session-item-header">
              {data.cinemaName}
            </Typography>
            <Flex align="center">
              <Mark className="mr-1" />
              <Typography className="session-item-sub">1.5km</Typography>
            </Flex>
          </Flex>
          <Typography className="session-item-sub mt-1">
            ул. Петрова, д.24, ТЦ Евразия
          </Typography>
        </>
      )}
    </Flex>
  );
};

export default SessionItem;
