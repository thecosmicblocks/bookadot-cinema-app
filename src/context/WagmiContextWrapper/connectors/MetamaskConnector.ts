import { injected } from "wagmi/connectors";

export const METAMASK_ID = "metaMask";

const MetamaskConnector = injected({
  target: "metaMask",
  shimDisconnect: true,
});

export default MetamaskConnector;
