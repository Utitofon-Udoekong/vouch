"use client";

import { getExplorerUrl } from "@/config/chains";

type ExplorerType = "address" | "tx" | "dataset" | "apps";

export function useExplorerUrl() {
  const getUrl = (addressOrHash: string, type: ExplorerType = "address") => {
    return getExplorerUrl(addressOrHash, type);
  };

  const openInExplorer = (addressOrHash: string, type: ExplorerType = "address") => {
    const url = getUrl(addressOrHash, type);
    if (url && typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return {
    getUrl,
    openInExplorer,
  };
}
