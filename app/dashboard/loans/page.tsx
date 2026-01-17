"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { LoanEligibility } from "@/components/LoanEligibility";
import { LoanRequestForm } from "@/components/LoanRequestForm";
import { useDataProtector } from "@/hooks/useDataProtector";
import { useProtectedData } from "@/context/ProtectedDataContext";
import { parseYieldFromName } from "@/utils/yieldParser";
import { useEffect, useMemo } from "react";

export default function LoansPage() {
    const { isConnected } = useDataProtector();
    const { protectedData, isLoading, refreshData } = useProtectedData();

    useEffect(() => {
        if (isConnected && protectedData.length === 0) {
            refreshData();
        }
    }, [isConnected, protectedData.length, refreshData]);

    const badges = useMemo(() => {
        return protectedData
            .filter((data) => data.name?.includes("|")) // Only show badges with yield metadata
            .map((data) => {
                const { assetName, yieldPercent } = parseYieldFromName(data.name);
                return {
                    address: data.address,
                    yieldPercent: yieldPercent ?? 0,
                    assetName,
                    status: "verified" as const,
                    collateralValue: 25000, // Would come from oracle or user input
                };
            });
    }, [protectedData]);

    return (
        <DashboardLayout>
            <div className="space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-medium text-white mb-2">DeFi Loans</h1>
                    <p className="text-gray-500">
                        Use your verified yield badges as collateral for decentralized loans.
                    </p>
                </div>

                {isLoading ? (
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="h-64 bg-[#18181b] animate-pulse border border-[#27272a]" />
                        <div className="h-64 bg-[#18181b] animate-pulse border border-[#27272a]" />
                    </div>
                ) : badges.length === 0 ? (
                    <div className="border border-[#27272a] bg-[#0c0c0e] p-12 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 border border-[#27272a] flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">No Yield Badges Found</h3>
                        <p className="text-gray-500 mb-6">
                            Protect your yield data first to create badges that can be used as loan collateral.
                        </p>
                        <a href="/dashboard" className="btn-industrial inline-block">
                            Go to Dashboard
                        </a>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-2 gap-8">
                        <LoanEligibility badges={badges} />
                        <LoanRequestForm
                            availableBadges={badges.filter((b) => b.status === "verified")}
                            onSubmit={(request) => console.log("Loan request:", request)}
                        />
                    </div>
                )}

                {/* Info Section */}
                <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-[#27272a]">
                    <div className="p-6 border border-[#27272a] bg-[#0c0c0e]">
                        <div className="text-[10px] uppercase text-gray-500 mb-2">01 // HOW IT WORKS</div>
                        <h4 className="text-sm font-medium text-white mb-2">Verify Your Yield</h4>
                        <p className="text-xs text-gray-500">
                            Encrypt your asset yield data using iExec TEE for privacy-preserving verification.
                        </p>
                    </div>
                    <div className="p-6 border border-[#27272a] bg-[#0c0c0e]">
                        <div className="text-[10px] uppercase text-gray-500 mb-2">02 // HOW IT WORKS</div>
                        <h4 className="text-sm font-medium text-white mb-2">Get Your Badge</h4>
                        <p className="text-xs text-gray-500">
                            Receive a verifiable credential proving your yield without exposing raw data.
                        </p>
                    </div>
                    <div className="p-6 border border-[#27272a] bg-[#0c0c0e]">
                        <div className="text-[10px] uppercase text-gray-500 mb-2">03 // HOW IT WORKS</div>
                        <h4 className="text-sm font-medium text-white mb-2">Access Capital</h4>
                        <p className="text-xs text-gray-500">
                            Use badges as collateral for DeFi loans with better rates based on verified yield.
                        </p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
