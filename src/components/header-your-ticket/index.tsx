"use client";
import { Close } from "../icon";
import Typography from "../typography";
import "./style.scss";
import { useRouter } from "next/navigation";

const HeaderYourTicket = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();

  return (
    <header className="header-your-ticket">
      <Typography component="h1">Your ticket</Typography>
      <Close
        className="close-icon"
        onClick={() => {
          router.back();
        }}
      />
    </header>
  );
};

export const HEADER_YOUR_TICKET_HEIGHT = 64;

export default HeaderYourTicket;
