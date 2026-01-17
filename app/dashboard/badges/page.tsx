"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { YieldBadge } from "@/components/YieldBadge";
import { useDataProtector } from "@/hooks/useDataProtector";
import { useExplorerUrl } from "@/hooks/useExplorerUrl";
import { useState, useEffect } from "react";
import type { ProtectedData } from "@iexec/dataprotector";

export default function BadgesPage() {
    const { isConnected, fetchProtectedData } = useDataProtector();
    const { openInExplorer } = useExplorerUrl();
    const [protectedData, setProtectedData] = useState<ProtectedData[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isConnected) {
            loadBadges();
        }
    }, [isConnected]);

    const loadBadges = async () => {
        setIsLoading(true);
        try {
            const data = await fetchProtectedData();
            setProtectedData(data);
        } catch (err) {
            console.error("Failed to load badges:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const formatDate = (timestamp: number) => {
        return new Date(timestamp * 1000).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        });
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
                        <a href="/dashboard" className="btn-industrial inline-block">
                            Protect Data
                        </a>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {protectedData.map((data) => (
                            <YieldBadge
                                key={data.address}
                                yieldPercent={7.5} // Would come from decrypted data
                                assetName={data.name || "Unnamed Asset"}
                                verifiedDate={formatDate(data.creationTimestamp)}
                                status="verified"
                                protectedDataAddress={data.address}
                                onClick={() => openInExplorer(data.address, "dataset")}
                            />
                        ))}
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
