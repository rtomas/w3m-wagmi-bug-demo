import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { createConfig, http } from "wagmi";

import { mainnet, sepolia } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [mainnet, sepolia];

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
  connectors: [
    coinbaseWallet({
      appName: "Team Finance",
    }),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
      showQrModal: false,
    }),
    injected({
      shimDisconnect: true,
    }),
  ],
});
