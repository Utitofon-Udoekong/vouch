"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { YieldBadge } from "@/components/YieldBadge";
import { ConnectButton } from "@/components/ConnectButton";
import Link from "next/link";

function BadgeContent() {
    const searchParams = useSearchParams();
    const address = searchParams.get("address");

    // Mock data - in production would fetch from iExec
    const mockBadgeData = {
        yieldPercent: 7.5,
        assetName: "BLDG_A_2024",
        verifiedDate: "Jan 2026",
        status: "verified" as const,
        protectedDataAddress: address || "0x1234...5678",
    };

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
                        <span className="font-mono text-sm text-gray-500">BADGE_VIEWER</span>
                    </div>
                    <ConnectButton />
                </div>
            </nav>

            <div className="max-w-xl mx-auto py-16 px-6">
                {!address ? (
                    <div className="text-center py-16">
                        <div className="w-16 h-16 mx-auto mb-6 border border-[#27272a] flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h1 className="text-xl font-medium text-white mb-2">No Badge Address</h1>
                        <p className="text-gray-500 mb-8">Please provide a badge address in the URL.</p>
                        <code className="text-xs font-mono text-gray-600 bg-[#18181b] px-3 py-2 border border-[#27272a]">
                            /badge?address=0x...
                        </code>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {/* Badge Display */}
                        <YieldBadge {...mockBadgeData} />

                        {/* Verification Info */}
                        <div className="border border-[#27272a] bg-[#0c0c0e] p-6">
                            <h3 className="text-sm font-medium text-white mb-4">Verification Details</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Protected Data</span>
                                    <span className="font-mono text-gray-400">{address?.slice(0, 10)}...{address?.slice(-8)}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Encryption</span>
                                    <span className="text-green-400">TEE Secured</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">Network</span>
                                    <span className="text-gray-400">iExec Bellecour</span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-4">
                            <Link href="/dashboard" className="btn-industrial-outline text-center">
                                View Dashboard
                            </Link>
                            <a
                                href={`https://blockscout-bellecour.iex.ec/address/${address}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-industrial text-center"
                            >
                                View on Explorer
                            </a>
                        </div>

                        {/* Request Access CTA */}
                        <div className="border border-[#ea580c]/30 bg-[#ea580c]/5 p-6 text-center">
                            <h4 className="text-sm font-medium text-white mb-2">Are you a lender?</h4>
                            <p className="text-xs text-gray-400 mb-4">
                                Request access to verify the underlying yield data for this badge.
                            </p>
                            <button className="btn-industrial">Request Access</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function BadgePage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#09090b]" />}>
            <BadgeContent />
        </Suspense>
    );
}
