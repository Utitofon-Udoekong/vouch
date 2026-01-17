"use client";

import { useDataProtector } from "@/hooks/useDataProtector";
import { useProtectedData } from "@/context/ProtectedDataContext";
import { parseYieldFromName } from "@/utils/yieldParser";
import { useEffect } from "react";
import Link from "next/link";

export function ProtectedDataList() {
    const { isConnected } = useDataProtector();
    const { protectedData, isLoading, error, refreshData } = useProtectedData();

    useEffect(() => {
        if (isConnected && protectedData.length === 0) {
            refreshData();
        }
    }, [isConnected, protectedData.length, refreshData]);

    const loadData = async () => {
        await refreshData();
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

    const getBadgeUrl = (data: { address: string; name?: string; creationTimestamp: number }) => {
        const { assetName, yieldPercent } = parseYieldFromName(data.name);
        const params = new URLSearchParams({
            name: assetName,
            yield: String(yieldPercent ?? 0),
            date: formatDate(data.creationTimestamp),
        });
        return `/dashboard/badges/${data.address}?${params.toString()}`;
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
                        {protectedData
                            .filter((data) => data.name?.includes("|")) // Only show with yield metadata
                            .map((data) => {
                                const { assetName, yieldPercent } = parseYieldFromName(data.name);
                                return (
                                    <Link
                                        key={data.address}
                                        href={getBadgeUrl(data)}
                                        className="block p-4 border border-[#27272a] bg-[#0c0c0e] hover:bg-[#18181b] transition-colors cursor-pointer group"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <div className="text-sm font-medium text-white mb-1">{assetName}</div>
                                                <div className="font-mono text-xs text-gray-500">{truncateAddress(data.address)}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-[10px] uppercase text-gray-500 mb-1">Yield</div>
                                                <div className="text-sm text-green-400 font-medium">{yieldPercent?.toFixed(1) ?? "N/A"}%</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-2 border-t border-[#27272a]">
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                <span className="text-[10px] uppercase text-gray-500">Encrypted</span>
                                            </div>
                                            <div className="text-xs text-gray-500">{formatDate(data.creationTimestamp)}</div>
                                        </div>
                                    </Link>
                                );
                            })}
                    </div>
                )}
            </div>
        </div>
    );
}
