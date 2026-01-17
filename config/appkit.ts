import { cookieStorage, createStorage } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { iexecArbitrumSepolia } from "./chains";
import type { AppKitNetwork } from "@reown/appkit/networks";

// Get projectId from environment
export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;

if (!projectId) {
  console.warn("NEXT_PUBLIC_REOWN_PROJECT_ID is not set. Wallet connection will not work.");
}

// Supported networks - must be a tuple type for AppKit
export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [iexecArbitrumSepolia];

// Wagmi adapter configuration
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId: projectId || "",
  networks,
});

// App metadata for Reown AppKit
export const metadata = {
  name: "Vouch",
  description: "Verified Yield Badge + DeFi Loan Integration - Privacy-preserving property income verification",
  url: typeof window !== "undefined" ? window.location.origin : "https://vouch.app",
  icons: ["/favicon.ico"],
};

export const config = wagmiAdapter.wagmiConfig;
