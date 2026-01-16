"use client";

import { YieldBadgeCompact } from "@/components/YieldBadge";

interface LoanEligibilityProps {
    badges: Array<{
        yieldPercent: number;
        assetName: string;
        status: "verified" | "pending" | "expired";
        collateralValue: number;
    }>;
}

export function LoanEligibility({ badges }: LoanEligibilityProps) {
    const verifiedBadges = badges.filter((b) => b.status === "verified");
    const totalCollateral = verifiedBadges.reduce((sum, b) => sum + b.collateralValue, 0);
    const avgYield = verifiedBadges.length > 0
        ? verifiedBadges.reduce((sum, b) => sum + b.yieldPercent, 0) / verifiedBadges.length
        : 0;

    // Mock calculation: 70% LTV, rate based on avg yield
    const maxLoanAmount = totalCollateral * 0.7;
    const estimatedRate = Math.max(5, 12 - avgYield * 0.5);

    const isEligible = verifiedBadges.length > 0 && maxLoanAmount > 0;

    return (
        <div className="border border-[#27272a] bg-[#09090b]">
            {/* Header */}
            <div className="border-b border-[#27272a] p-4 flex items-center justify-between bg-[#0c0c0e]">
                <h3 className="text-sm font-medium text-white">Loan Eligibility</h3>
                <span className={`text-[10px] uppercase font-mono ${isEligible ? "text-green-400" : "text-gray-500"}`}>
                    {isEligible ? "ELIGIBLE" : "NOT ELIGIBLE"}
                </span>
            </div>

            <div className="p-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-[#27272a] bg-[#0c0c0e]">
                        <div className="text-[10px] uppercase text-gray-500 mb-1">Verified Assets</div>
                        <div className="text-2xl font-medium text-white">{verifiedBadges.length}</div>
                    </div>
                    <div className="p-4 border border-[#27272a] bg-[#0c0c0e]">
                        <div className="text-[10px] uppercase text-gray-500 mb-1">Total Collateral</div>
                        <div className="text-2xl font-medium text-white">
                            ${totalCollateral.toLocaleString()}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#27272a]"></div>

                {/* Loan Terms */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Max Loan Amount</span>
                        <span className="text-lg font-medium text-white">
                            ${maxLoanAmount.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Estimated Rate</span>
                        <span className="text-lg font-medium text-white">{estimatedRate.toFixed(1)}% APR</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">LTV Ratio</span>
                        <span className="text-sm text-gray-400">70%</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#27272a]"></div>

                {/* Badge List */}
                <div>
                    <div className="text-[10px] uppercase text-gray-500 mb-3">Collateral Assets</div>
                    {verifiedBadges.length === 0 ? (
                        <div className="text-sm text-gray-500 text-center py-4">
                            No verified badges available
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {verifiedBadges.map((badge, i) => (
                                <YieldBadgeCompact
                                    key={i}
                                    yieldPercent={badge.yieldPercent}
                                    assetName={badge.assetName}
                                    status={badge.status}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Action Button */}
                <button
                    disabled={!isEligible}
                    className={`w-full ${isEligible ? "btn-industrial" : "btn-industrial-outline opacity-50 cursor-not-allowed"}`}
                >
                    {isEligible ? "Request Loan" : "Add Verified Assets to Continue"}
                </button>
            </div>
        </div>
    );
}
