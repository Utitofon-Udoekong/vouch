"use client";

import { useEffect, useState } from "react";
import { useDataProtector } from "@/hooks/useDataProtector";
import { useExplorerUrl } from "@/hooks/useExplorerUrl";
import type { ProtectedData } from "@iexec/dataprotector";

export function ProtectedDataList() {
    const { isConnected, isInitialized, fetchProtectedData } = useDataProtector();
    const { openInExplorer } = useExplorerUrl();
    const [protectedData, setProtectedData] = useState<ProtectedData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (isConnected && isInitialized) {
            loadData();
        }
    }, [isConnected, isInitialized]);

    const loadData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await fetchProtectedData();
            setProtectedData(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load data");
        } finally {
            setIsLoading(false);
        }
    };

    const formatDate = (timestamp: number) => {
        return new Date(timestamp * 1000).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const truncateAddress = (address: string) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    if (!isConnected) return null;

    return (
        <div className="border border-[#27272a] bg-[#09090b]">
            {/* Header */}
            <div className="border-b border-[#27272a] p-4 flex items-center justify-between bg-[#0c0c0e]">
                <h3 className="text-sm font-medium text-white">Protected Datasets</h3>
                <button
                    onClick={loadData}
                    disabled={isLoading}
                    className="text-[10px] uppercase font-mono text-gray-500 hover:text-white transition-colors"
                >
                    {isLoading ? "Loading..." : "Refresh"}
                </button>
            </div>

            <div className="p-4">
                {/* Loading State */}
                {isLoading && protectedData.length === 0 && (
                    <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-16 bg-[#18181b] animate-pulse border border-[#27272a]" />
                        ))}
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="p-4 border border-red-900/30 bg-red-900/10 text-red-400 text-xs font-mono">
                        <span className="text-red-500">ERROR:</span> {error}
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && !error && protectedData.length === 0 && (
                    <div className="py-12 text-center">
                        <div className="w-12 h-12 mx-auto mb-4 border border-[#27272a] flex items-center justify-center">
                            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-500 mb-1">No protected data yet</p>
                        <p className="text-xs text-gray-600">Encrypt your first yield data to get started</p>
                    </div>
                )}

                {/* Data List */}
                {!isLoading && protectedData.length > 0 && (
                    <div className="space-y-2">
                        {protectedData.map((data) => (
                            <div
                                key={data.address}
                                className="p-4 border border-[#27272a] bg-[#0c0c0e] hover:bg-[#18181b] transition-colors cursor-pointer group"
                                onClick={() => openInExplorer(data.address, "dataset")}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <div className="text-sm font-medium text-white mb-1">{data.name || "Unnamed Dataset"}</div>
                                        <div className="font-mono text-xs text-gray-500">{truncateAddress(data.address)}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] uppercase text-gray-500 mb-1">Created</div>
                                        <div className="text-xs text-gray-400">{formatDate(data.creationTimestamp)}</div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2 border-t border-[#27272a]">
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        <span className="text-[10px] uppercase text-gray-500">Encrypted</span>
                                    </div>
                                    <svg className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="square" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
