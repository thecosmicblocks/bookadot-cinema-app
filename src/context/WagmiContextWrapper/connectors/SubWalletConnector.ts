import { isClient } from "@/common/utils";
import { injected } from "wagmi/connectors";

export const SUB_WALLET_ID = "app.subWallet";

const SubWalletConnector = injected({
  target() {
    return {
      id: SUB_WALLET_ID,
      name: "SubWallet",
      provider: ((isClient() ? window : {}) as any).SubWallet,
    };
  },
  shimDisconnect: true,
  //   unstable_shimAsyncInject: true,
});

export default SubWalletConnector;
