"use client";

import { useState } from "react";
import { YieldBadgeCompact } from "@/components/YieldBadge";

interface LoanRequestFormProps {
    availableBadges: Array<{
        address: string;
        yieldPercent: number;
        assetName: string;
        collateralValue: number;
    }>;
    onSubmit?: (request: LoanRequest) => void;
}

interface LoanRequest {
    selectedBadges: string[];
    amount: number;
    term: number;
}

export function LoanRequestForm({ availableBadges, onSubmit }: LoanRequestFormProps) {
    const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
    const [amount, setAmount] = useState("");
    const [term, setTerm] = useState<12 | 24 | 36>(12);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const selectedCollateral = availableBadges
        .filter((b) => selectedBadges.includes(b.address))
        .reduce((sum, b) => sum + b.collateralValue, 0);

    const maxLoan = selectedCollateral * 0.7;
    const requestedAmount = parseFloat(amount) || 0;
    const isValidAmount = requestedAmount > 0 && requestedAmount <= maxLoan;

    const toggleBadge = (address: string) => {
        setSelectedBadges((prev) =>
            prev.includes(address)
                ? prev.filter((a) => a !== address)
                : [...prev, address]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValidAmount || selectedBadges.length === 0) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const request: LoanRequest = {
            selectedBadges,
            amount: requestedAmount,
            term,
        };

        onSubmit?.(request);
        setSuccess(true);
        setIsSubmitting(false);
    };

    if (success) {
        return (
            <div className="border border-green-500/30 bg-green-500/5 p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 border border-green-500/50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="square" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Loan Request Submitted</h3>
                <p className="text-sm text-gray-400 mb-6">
                    Your request for ${requestedAmount.toLocaleString()} is pending lender review.
                </p>
                <div className="font-mono text-xs text-gray-500">
                    REQUEST_ID: LOAN_{Date.now().toString(36).toUpperCase()}
                </div>
            </div>
        );
    }

    return (
        <div className="border border-[#27272a] bg-[#09090b]">
            {/* Header */}
            <div className="border-b border-[#27272a] p-4 flex items-center justify-between bg-[#0c0c0e]">
                <h3 className="text-sm font-medium text-white">Request Loan</h3>
                <div className="text-[10px] uppercase font-mono text-gray-500">
                    Max: ${maxLoan.toLocaleString()}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Select Collateral */}
                <div>
                    <label className="text-mono-small block mb-3">Select Collateral</label>
                    <div className="space-y-2">
                        {availableBadges.length === 0 ? (
                            <div className="text-sm text-gray-500 text-center py-4 border border-[#27272a]">
                                No verified badges available
                            </div>
                        ) : (
                            availableBadges.map((badge) => (
                                <div
                                    key={badge.address}
                                    onClick={() => toggleBadge(badge.address)}
                                    className={`cursor-pointer border transition-colors ${selectedBadges.includes(badge.address)
                                            ? "border-white bg-[#18181b]"
                                            : "border-[#27272a] hover:border-gray-600"
                                        }`}
                                >
                                    <YieldBadgeCompact
                                        yieldPercent={badge.yieldPercent}
                                        assetName={badge.assetName}
                                        status="verified"
                                    />
                                </div>
                            ))
                        )}
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                        Selected: ${selectedCollateral.toLocaleString()} collateral
                    </div>
                </div>

                {/* Loan Amount */}
                <div className="space-y-2">
                    <label className="text-mono-small block">Loan Amount ($)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="input-industrial"
                        placeholder={`Max: ${maxLoan.toLocaleString()}`}
                        max={maxLoan}
                        min={0}
                    />
                    {requestedAmount > maxLoan && (
                        <div className="text-xs text-red-500">Exceeds maximum loan amount</div>
                    )}
                </div>

                {/* Loan Term */}
                <div className="space-y-2">
                    <label className="text-mono-small block">Loan Term</label>
                    <div className="grid grid-cols-3 gap-2">
                        {([12, 24, 36] as const).map((months) => (
                            <button
                                key={months}
                                type="button"
                                onClick={() => setTerm(months)}
                                className={`p-3 text-xs uppercase font-mono border transition-colors ${term === months
                                        ? "border-white text-white bg-[#18181b]"
                                        : "border-[#27272a] text-gray-500 hover:text-white"
                                    }`}
                            >
                                {months} Months
                            </button>
                        ))}
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting || !isValidAmount || selectedBadges.length === 0}
                    className="btn-industrial w-full"
                >
                    {isSubmitting ? "Submitting..." : "Submit Loan Request"}
                </button>
            </form>
        </div>
    );
}
