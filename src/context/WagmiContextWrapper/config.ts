// import { cookies } from "next/headers";
import {
  http,
  createConfig,
  cookieStorage,
  createStorage,
  createConnector,
  CreateConfigParameters,
} from "wagmi";
import { mainnet, sepolia, moonbaseAlpha, moonbeam } from "wagmi/chains";
import SubWalletConnector, {
  SUB_WALLET_ID,
} from "./connectors/SubWalletConnector";

// const previousWallet = Cookie.get("wagmi.recentConnectorId");
// console.log(previousWallet);

const baseConfigOptions: CreateConfigParameters<any, any> = {
  chains: [moonbaseAlpha],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [moonbeam.id]: http(),
    [moonbaseAlpha.id]: http(),
  },
  syncConnectedChain: true,
  multiInjectedProviderDiscovery: false,
  // connectors:
  //   previousWallet && CONNECTOR_MAP[previousWallet]
  //     ? [CONNECTOR_MAP[previousWallet]]
  //     : [],

  storage: createStorage({
    storage: cookieStorage,
  }),
};

export const config = createConfig(baseConfigOptions);

export const generateConfigs = (
  overrideOptions: Partial<CreateConfigParameters<any, any>>
) => {
  return createConfig({
    ...baseConfigOptions,
    ...overrideOptions,
  } as CreateConfigParameters<any, any>);
};
