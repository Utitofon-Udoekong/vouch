"use client";

import { useState, useCallback, useEffect } from "react";
import { useConnection } from "wagmi";
import { IExecDataProtector, type ProtectedData, type DataObject } from "@iexec/dataprotector";
import { EIP1193Provider } from "viem";

interface ProtectDataParams {
  name: string;
  data: DataObject;
}

interface GrantAccessParams {
  protectedDataAddress: string;
  authorizedApp: string;
  authorizedUser?: string;
  numberOfAccess?: number;
  pricePerAccess?: number;
}

interface UseDataProtectorReturn {
  isConnected: boolean;
  isInitialized: boolean;
  isLoading: boolean;
  error: string | null;
  protectData: (params: ProtectDataParams) => Promise<ProtectedData | null>;
  grantAccess: (params: GrantAccessParams) => Promise<unknown>;
  fetchProtectedData: () => Promise<ProtectedData[]>;
}

// Extend Window interface for ethereum provider
declare global {
  interface Window {
    ethereum?: EIP1193Provider;
  }
}

export function useDataProtector(): UseDataProtectorReturn {
  const { isConnected, address } = useConnection();
  const [dataProtector, setDataProtector] = useState<IExecDataProtector | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize DataProtector when wallet is connected
  useEffect(() => {
    if (isConnected && typeof window !== "undefined" && window.ethereum) {
      try {
        // Cast to any to satisfy iExec SDK which expects a different provider shape
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dp = new IExecDataProtector(window.ethereum as any);
        setDataProtector(dp);
        setError(null);
      } catch (err) {
        console.error("Failed to initialize DataProtector:", err);
        setError("Failed to initialize DataProtector. Make sure you're connected to Arbitrum Sepolia.");
      }
    } else {
      setDataProtector(null);
    }
  }, [isConnected]);

  // Protect data with encryption
  const protectData = useCallback(
    async (params: ProtectDataParams): Promise<ProtectedData | null> => {
      if (!dataProtector) {
        setError("DataProtector not initialized. Please connect your wallet.");
        return null;
      }

      setIsLoading(true);
      setError(null);

      try {
        const protectedData = await dataProtector.core.protectData({
          name: params.name,
          data: params.data,
        });
        return protectedData;
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to protect data";
        setError(message);
        console.error("Error protecting data:", err);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [dataProtector]
  );

  // Grant access to protected data
  const grantAccess = useCallback(
    async (params: GrantAccessParams) => {
      if (!dataProtector) {
        setError("DataProtector not initialized. Please connect your wallet.");
        return null;
      }

      setIsLoading(true);
      setError(null);

      try {
        const grantedAccess = await dataProtector.core.grantAccess({
          protectedData: params.protectedDataAddress,
          authorizedApp: params.authorizedApp,
          authorizedUser: params.authorizedUser || "0x0000000000000000000000000000000000000000",
          numberOfAccess: params.numberOfAccess || 1,
          pricePerAccess: params.pricePerAccess || 0,
        });
        return grantedAccess;
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to grant access";
        setError(message);
        console.error("Error granting access:", err);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [dataProtector]
  );

  // Fetch user's protected data
  const fetchProtectedData = useCallback(async (): Promise<ProtectedData[]> => {
    if (!dataProtector || !address) {
      return [];
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await dataProtector.core.getProtectedData({
        owner: address,
      });
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch protected data";
      setError(message);
      console.error("Error fetching protected data:", err);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, [dataProtector, address]);

  return {
    isConnected,
    isInitialized: !!dataProtector,
    isLoading,
    error,
    protectData,
    grantAccess,
    fetchProtectedData,
  };
}

// Re-export the DataObject type for use in components
export type { DataObject };
