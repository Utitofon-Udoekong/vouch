"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { YieldBadge } from "@/components/YieldBadge";
import Link from "next/link";
import { use, useState } from "react";
import { useSearchParams } from "next/navigation";

interface PageProps {
    params: Promise<{ address: string }>;
}

export default function BadgeDetailPage({ params }: PageProps) {
    const { address } = use(params);
    const searchParams = useSearchParams();
    const [copied, setCopied] = useState(false);

    // Read badge data from URL params (passed from badges page)
    const assetName = searchParams.get("name") || "Protected Asset";
    const yieldPercent = parseFloat(searchParams.get("yield") || "0");
    const verifiedDate = searchParams.get("date") || "Jan 2026";

    // Validate address format
    const isValidAddress = address && address.startsWith("0x") && address.length === 42;

    // Generate public share URL with all badge data
    const getPublicShareUrl = () => {
        const params = new URLSearchParams({
            name: assetName,
            yield: String(yieldPercent),
            date: verifiedDate,
        });
        const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
        return `${baseUrl}/badge/${address}?${params.toString()}`;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(getPublicShareUrl());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!isValidAddress) {
        return (
            <DashboardLayout>
                <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-6 border border-red-500/30 bg-red-500/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h1 className="text-xl font-medium text-white mb-2">Invalid Badge Address</h1>
                    <p className="text-gray-500 mb-8">The provided address is not a valid Ethereum address.</p>
                    <Link href="/dashboard/badges" className="btn-industrial inline-block">
                        Back to Badges
                    </Link>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/badges" className="text-gray-500 hover:text-white transition-colors">
                        ← Back to Badges
                    </Link>
                </div>

                {/* Badge Display */}
                <YieldBadge
                    yieldPercent={yieldPercent}
                    assetName={assetName}
                    verifiedDate={verifiedDate}
                    status="verified"
                    protectedDataAddress={address}
                    teeVerified={true}
                />

                {/* Verification Info */}
                <div className="border border-[#27272a] bg-[#0c0c0e] p-6">
                    <h3 className="text-sm font-medium text-white mb-4">Verification Details</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Protected Data</span>
                            <span className="font-mono text-xs text-gray-400 break-all">{address}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Encryption</span>
                            <span className="text-green-400">TEE Secured</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-500">Network</span>
                            <span className="text-gray-400">Arbitrum Sepolia</span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-4">
                    <Link href="/dashboard/badges" className="btn-industrial-outline text-center">
                        Back to Badges
                    </Link>
                    <a
                        href={`https://explorer.iex.ec/arbitrum-sepolia-testnet/dataset/${address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-industrial text-center"
                    >
                        View on Explorer
                    </a>
                </div>

                {/* Lender CTA */}
                <div className="border border-[#ea580c]/30 bg-[#ea580c]/5 p-6 text-center">
                    <h4 className="text-sm font-medium text-white mb-2">Are you a lender?</h4>
                    <p className="text-xs text-gray-400 mb-4">
                        Request access to verify the underlying yield data for this badge.
                    </p>
                    <button className="btn-industrial">Request Access</button>
                </div>

                {/* Share Section */}
                <div className="border border-[#27272a] bg-[#0c0c0e] p-6">
                    <h3 className="text-sm font-medium text-white mb-4">Share This Badge</h3>
                    <div className="flex gap-2 items-stretch">
                        <input
                            type="text"
                            readOnly
                            value={getPublicShareUrl()}
                            className="input-industrial flex-1 text-xs h-10"
                        />
                        <button
                            onClick={handleCopy}
                            className={`px-4 h-10 border transition-all ${copied
                                ? "border-green-500 bg-green-500/10 text-green-400"
                                : "border-[#27272a] hover:bg-[#18181b] text-white"
                                }`}
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
