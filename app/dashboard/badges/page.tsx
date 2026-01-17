"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { YieldBadge } from "@/components/YieldBadge";
import { useDataProtector } from "@/hooks/useDataProtector";
import { useProtectedData } from "@/context/ProtectedDataContext";
import { parseYieldFromName } from "@/utils/yieldParser";
import { useEffect } from "react";
import Link from "next/link";

export default function BadgesPage() {
    const { isConnected } = useDataProtector();
    const { protectedData, isLoading, refreshData } = useProtectedData();

    useEffect(() => {
        if (isConnected && protectedData.length === 0) {
            refreshData();
        }
    }, [isConnected, protectedData.length, refreshData]);

    const loadBadges = async () => {
        await refreshData();
    };

    const formatDate = (timestamp: number) => {
        return new Date(timestamp * 1000).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        });
    };

    const getBadgeUrl = (address: string, assetName: string, yieldPercent: number | null, timestamp: number) => {
        const params = new URLSearchParams({
            name: assetName,
            yield: String(yieldPercent ?? 0),
            date: formatDate(timestamp),
        });
        return `/dashboard/badges/${address}?${params.toString()}`;
    };

    return (
        <DashboardLayout>
            <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-medium text-white mb-2">My Badges</h1>
                        <p className="text-gray-500">
                            Verified yield credentials from your protected data.
                        </p>
                    </div>
                    <button onClick={loadBadges} className="btn-industrial-outline">
                        {isLoading ? "Loading..." : "Refresh"}
                    </button>
                </div>

                {isLoading && protectedData.length === 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-48 bg-[#18181b] animate-pulse border border-[#27272a]" />
                        ))}
                    </div>
                ) : protectedData.length === 0 ? (
                    <div className="border border-[#27272a] bg-[#0c0c0e] p-12 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 border border-[#27272a] flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">No Badges Yet</h3>
                        <p className="text-gray-500 mb-6">
                            Create your first yield badge by protecting your asset data.
                        </p>
                        <Link href="/dashboard" className="btn-industrial inline-block">
                            Protect Data
                        </Link>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {protectedData
                            .filter((data) => data.name?.includes("|")) // Only show badges with yield metadata
                            .map((data) => {
                                const { assetName, yieldPercent } = parseYieldFromName(data.name);
                                return (
                                    <Link
                                        key={data.address}
                                        href={getBadgeUrl(data.address, assetName, yieldPercent, data.creationTimestamp)}
                                    >
                                        <YieldBadge
                                            yieldPercent={yieldPercent ?? 0}
                                            assetName={assetName}
                                            verifiedDate={formatDate(data.creationTimestamp)}
                                            status="verified"
                                            protectedDataAddress={data.address}
                                        />
                                    </Link>
                                );
                            })}
                    </div>
                )}

                {/* Badge Info */}
                <div className="border border-[#27272a] bg-[#0c0c0e] p-6">
                    <h3 className="text-sm font-medium text-white mb-4">About Yield Badges</h3>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                            <h4 className="text-gray-400 mb-2">What are yield badges?</h4>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Yield badges are verifiable credentials that prove your asset&apos;s performance
                                without exposing the underlying data. They&apos;re generated using iExec&apos;s
                                Trusted Execution Environment (TEE) for privacy-preserving computation.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-gray-400 mb-2">How can I use them?</h4>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Use your badges as collateral for DeFi loans, share them with lenders for
                                verification, or grant access to specific applications for computation on
                                your encrypted data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
