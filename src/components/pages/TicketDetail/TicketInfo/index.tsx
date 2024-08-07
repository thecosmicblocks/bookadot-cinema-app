import { Col, Flex, Row } from "antd";
import TicketQR from "./TicketQR";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { Send } from "@/components/icon";

import "./style.scss";

const TicketInfo = () => {
  return (
    <Flex vertical align="center" className="ticket-info">
      <TicketQR />

      <Flex vertical className="ticket-info-description mt-2">
        <Typography component="h4" className="ticket-info-film">
          The Batman
        </Typography>
        <Flex vertical className="mt-4" gap={"8px"}>
          <Row>
            <Typography component="p" className="ticket-info-description-sub">
              Cinema
            </Typography>
            <Flex vertical>
              <Typography
                component="p"
                className="ticket-info-description-text"
              >
                Eurasia Cinema7
              </Typography>
              <Typography
                component="p"
                className="ticket-info-description-sub mt-1"
              >
                ул. Петрова, д.24, ТЦ "Евразия"
              </Typography>
            </Flex>
          </Row>
          <Row>
            <Typography component="p" className="ticket-info-description-sub">
              Date
            </Typography>
            <Typography component="p" className="ticket-info-description-text">
              6 April 2022, 14:40
            </Typography>
          </Row>
          <Row>
            <Typography component="p" className="ticket-info-description-sub">
              Hall
            </Typography>
            <Typography component="p" className="ticket-info-description-text">
              6th
            </Typography>
          </Row>
          <Row>
            <Typography component="p" className="ticket-info-description-sub">
              Seats
            </Typography>
            <Typography component="p" className="ticket-info-description-text">
              7 row (7, 8)
            </Typography>
          </Row>
          <Row>
            <Typography component="p" className="ticket-info-description-sub">
              Cost
            </Typography>
            <Typography component="p" className="ticket-info-description-text">
              3200 ₸ (paid)
            </Typography>
          </Row>
        </Flex>
      </Flex>

      <Row gutter={[16, 0]} className="ticket-info-btns mt-2 mb-8">
        <Col xs={12}>
          <Button size="large" type="link">
            <Flex align="center">Refund</Flex>
          </Button>
        </Col>
        <Col xs={12}>
          <Button size="large">
            <Flex align="center">
              <Send className="mr-2" />
              Send
            </Flex>
          </Button>
        </Col>
      </Row>
    </Flex>
  );
};

export default TicketInfo;
