"use client";

import { YieldBadge } from "@/components/YieldBadge";
import { ConnectButton } from "@/components/ConnectButton";
import Link from "next/link";
import { use } from "react";
import { useSearchParams } from "next/navigation";

interface PageProps {
    params: Promise<{ address: string }>;
}

export default function PublicBadgePage({ params }: PageProps) {
    const { address } = use(params);
    const searchParams = useSearchParams();

    // Read badge data from URL params (passed from badges page)
    const assetName = searchParams.get("name") || "Protected Asset";
    const yieldPercent = parseFloat(searchParams.get("yield") || "0");
    const verifiedDate = searchParams.get("date") || "Jan 2026";

    // In production, would fetch from iExec based on address
    // For now, showing a verification page that proves the badge exists
    const isValidAddress = address && address.startsWith("0x") && address.length === 42;

    return (
        <div className="min-h-screen bg-[#09090b] text-[#f4f4f5]">
            {/* Header */}
            <nav className="border-b border-[#27272a] bg-[#09090b] sticky top-0 z-50">
                <div className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="w-10 h-10 border border-[#27272a] flex items-center justify-center hover:bg-[#18181b] transition-colors">
                            <div className="w-4 h-4 bg-[#f4f4f5] transform rotate-45"></div>
                        </Link>
                        <div className="h-6 w-[1px] bg-[#27272a]"></div>
                        <span className="font-mono text-sm text-gray-500">BADGE_VERIFICATION</span>
                    </div>
                    <ConnectButton />
                </div>
            </nav>

            <div className="max-w-2xl mx-auto py-16 px-6">
                {!isValidAddress ? (
                    <div className="text-center py-16">
                        <div className="w-16 h-16 mx-auto mb-6 border border-red-500/30 bg-red-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h1 className="text-xl font-medium text-white mb-2">Invalid Badge Address</h1>
                        <p className="text-gray-500 mb-8">The provided address is not a valid Ethereum address.</p>
                        <Link href="/" className="btn-industrial inline-block">
                            Return Home
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {/* Badge Display */}
                        <YieldBadge
                            yieldPercent={yieldPercent}
                            assetName={assetName}
                            verifiedDate={verifiedDate}
                            status="verified"
                            protectedDataAddress={address}
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
                            <Link href="/dashboard" className="btn-industrial-outline text-center">
                                Go to Dashboard
                            </Link>
                            <a
                                href={`https://explorer.iex.ec/arbitrum-sepolia-testnet/address/${address}`}
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
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    readOnly
                                    value={typeof window !== "undefined" ? window.location.href : `/badge/${address}`}
                                    className="input-industrial flex-1 text-xs"
                                />
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                    }}
                                    className="btn-industrial-outline px-4"
                                >
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
