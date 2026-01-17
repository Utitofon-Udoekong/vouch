"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useDataProtector } from "@/hooks/useDataProtector";
import type { ProtectedData } from "@iexec/dataprotector";

interface ProtectedDataContextType {
    protectedData: ProtectedData[];
    isLoading: boolean;
    error: string | null;
    refreshData: () => Promise<void>;
    lastRefresh: number;
}

const ProtectedDataContext = createContext<ProtectedDataContextType | undefined>(undefined);

export function ProtectedDataProvider({ children }: { children: ReactNode }) {
    const { fetchProtectedData, isConnected } = useDataProtector();
    const [protectedData, setProtectedData] = useState<ProtectedData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [lastRefresh, setLastRefresh] = useState(0);

    const refreshData = useCallback(async () => {
        if (!isConnected) return;

        setIsLoading(true);
        setError(null);

        try {
            console.log("Refreshing protected data...");
            const data = await fetchProtectedData();
            console.log("Fetched protected data:", data.length, "items");
            setProtectedData(data);
            setLastRefresh(Date.now());
        } catch (err) {
            console.error("Failed to fetch protected data:", err);
            setError(err instanceof Error ? err.message : "Failed to fetch data");
        } finally {
            setIsLoading(false);
        }
    }, [fetchProtectedData, isConnected]);

    return (
        <ProtectedDataContext.Provider value={{ protectedData, isLoading, error, refreshData, lastRefresh }}>
            {children}
        </ProtectedDataContext.Provider>
    );
}

export function useProtectedData() {
    const context = useContext(ProtectedDataContext);
    if (context === undefined) {
        throw new Error("useProtectedData must be used within a ProtectedDataProvider");
    }
    return context;
}
