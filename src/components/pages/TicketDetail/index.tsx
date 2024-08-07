import { Flex } from "antd";
import "./style.scss";
import HeaderYourTicket from "@/components/header-your-ticket";
import TicketInfo from "./TicketInfo";

const TicketDetail = () => {
  return (
    <Flex vertical className="ticket-detail-page">
      <HeaderYourTicket />

      <Flex vertical className="mt-2">
        <TicketInfo />
      </Flex>
    </Flex>
  );
};

export default TicketDetail;
