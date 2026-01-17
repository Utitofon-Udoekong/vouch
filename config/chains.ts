import { defineChain } from "viem";
import { arbitrumSepolia } from "viem/chains";

// iExec on Arbitrum Sepolia Testnet
export const iexecArbitrumSepolia = defineChain({
  ...arbitrumSepolia,
  name: "iExec Arbitrum Sepolia",
  rpcUrls: {
    default: {
      http: [`https://arb-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || ''}`],
    },
  },
  blockExplorers: {
    default: {
      name: "iExec Explorer",
      url: "https://explorer.iex.ec/arbitrum-sepolia-testnet",
    },
    arbitrum: {
      name: "Arbiscan",
      url: "https://sepolia.arbiscan.io",
    }
  },
});

// Export supported chains for the app
export const supportedChains = [iexecArbitrumSepolia] as const;

// Explorer URL helpers
export function getExplorerUrl(
  addressOrHash: string,
  type: "address" | "tx" | "dataset" | "apps" = "address"
): string | null {
  const baseUrl = "https://explorer.iex.ec/arbitrum-sepolia-testnet";

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
