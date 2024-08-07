"use client";
import { WagmiProvider } from "wagmi";
import { generateConfigs } from "./config";
import React, { useMemo } from "react";
import { State } from "@wagmi/core";
import SubWalletConnector, {
  SUB_WALLET_ID,
} from "./connectors/SubWalletConnector";

import Cookie from "js-cookie";
import MetamaskConnector, { METAMASK_ID } from "./connectors/MetamaskConnector";

// wagmi.recentConnectorId
const CONNECTOR_MAP: Record<string, any> = {
  [SUB_WALLET_ID]: SubWalletConnector,
  [METAMASK_ID]: MetamaskConnector,
};

const WagmiContextWrapper = ({
  children,
  initialState,
}: React.PropsWithChildren<{
  initialState?: State;
}>) => {
  const recentConnectorId = Cookie.get("wagmi.recentConnectorId");

  const recentDisconnect = Cookie.get(
    `wagmi.${recentConnectorId}.disconnected`
  );

  const initialConnector =
    !!Cookie.get("wagmi.recentConnectorId") && recentDisconnect !== "true"
      ? CONNECTOR_MAP[Cookie.get("wagmi.recentConnectorId")!]
      : null;

  console.log(
    initialConnector,
    Cookie.get("wagmi.recentConnectorId"),
    recentConnectorId,
    recentDisconnect
  );

  const config = useMemo(() => {
    return generateConfigs({
      ...(initialConnector && {
        connectors: [initialConnector],
      }),
    });
  }, [initialConnector]);

  return (
    <>
      <WagmiProvider config={config} initialState={initialState}>
        {children}
      </WagmiProvider>
    </>
  );
};

export default WagmiContextWrapper;
