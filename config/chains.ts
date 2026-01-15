import { defineChain } from "viem";

// iExec Bellecour Sidechain (mainnet for iExec)
export const bellecour = defineChain({
  id: 134,
  name: "iExec Sidechain",
  nativeCurrency: {
    decimals: 18,
    name: "xRLC",
    symbol: "xRLC",
  },
  rpcUrls: {
    default: {
      http: ["https://bellecour.iex.ec"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout-bellecour.iex.ec",
    },
  },
});

// Export supported chains for the app
export const supportedChains = [bellecour] as const;

// Explorer URL helpers
export function getExplorerUrl(
  addressOrHash: string,
  type: "address" | "tx" | "dataset" | "apps" = "address"
): string | null {
  const baseUrl = "https://explorer.iex.ec/bellecour";
  
  switch (type) {
    case "address":
      return `${baseUrl}/address/${addressOrHash}`;
    case "tx":
      return `${baseUrl}/tx/${addressOrHash}`;
    case "dataset":
      return `${baseUrl}/dataset/${addressOrHash}`;
    case "apps":
      return `${baseUrl}/apps`;
    default:
      return null;
  }
}
