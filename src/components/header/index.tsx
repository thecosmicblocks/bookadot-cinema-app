"use client";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import "./header.scss";
import SubWalletConnector from "@/context/WagmiContextWrapper/connectors/SubWalletConnector";
import MetamaskConnector from "@/context/WagmiContextWrapper/connectors/MetamaskConnector";
import { Logo } from "../icon";
import Button from "../button";

const Header = () => {
  const { address, chainId, status } = useAccount();
  const { disconnect, disconnectAsync } = useDisconnect();
  const { connectAsync } = useConnect();
  return (
    <header>
      <Logo
      // style={{
      //   width: "48px",
      //   height: "48px",
      // }}
      />
      {/* {address && <>Hello {address}</>}
      {chainId && <>Chain {chainId}</>} */}
      {/* 
      <button
        onClick={async () => {
          await connectAsync({
            connector: MetamaskConnector,
            chainId: 1287,
          });
          console.log("cons");
        }}
      >
        Sign in
      </button>
      <button
        onClick={async () => {
          await disconnectAsync();
          console.log("disconnect");
        }}
      >
        Disconnect
      </button> */}
      <Button
        size="middle"
        onClick={async () => {
          await connectAsync({
            connector: SubWalletConnector,
            chainId: 1287,
          });
        }}
      >
        Log in
      </Button>
    </header>
  );
};

export const HEADER_HEIGHT = 85;

export default Header;
