"use client";

import { ConnectButton, NetworkButton } from "@/components/ConnectButton";
import { LoanEligibility } from "@/components/LoanEligibility";
import { LoanRequestForm } from "@/components/LoanRequestForm";
import { useAccount } from "wagmi";
import Link from "next/link";

// Mock data - in production would come from iExec protected data
const mockBadges = [
    {
        address: "0x1234567890abcdef1234567890abcdef12345678",
        yieldPercent: 7.5,
        assetName: "BLDG_A_2024",
        status: "verified" as const,
        collateralValue: 50000,
    },
    {
        address: "0xabcdef1234567890abcdef1234567890abcdef12",
        yieldPercent: 6.2,
        assetName: "OFFICE_PARK_Q1",
        status: "verified" as const,
        collateralValue: 35000,
    },
    {
        address: "0x9876543210fedcba9876543210fedcba98765432",
        yieldPercent: 8.1,
        assetName: "RETAIL_COMPLEX",
        status: "pending" as const,
        collateralValue: 28000,
    },
];

export default function LoansPage() {
    const { isConnected } = useAccount();

    return (
        <div className="min-h-screen bg-[#09090b] selection:bg-[#ea580c] selection:text-white">
            {/* Top Bar */}
            <nav className="h-16 border-b border-[#27272a] bg-[#09090b] flex items-center justify-between px-6 sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="w-10 h-10 border border-[#27272a] flex items-center justify-center hover:bg-[#18181b] transition-colors">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <div className="h-6 w-[1px] bg-[#27272a]"></div>
                    <span className="font-mono text-sm text-gray-400">DEFI_LOANS // <span className="text-white">REQUEST</span></span>
                </div>

                <div className="flex items-center gap-4">
                    <NetworkButton />
                    <ConnectButton />
                </div>
            </nav>

            <div className="max-w-6xl mx-auto py-12 px-6">
                {!isConnected ? (
                    <div className="min-h-[400px] flex flex-col items-center justify-center border border-[#27272a] bg-[#0c0c0e] p-12 text-center">
                        <div className="w-16 h-16 border border-[#27272a] rounded-full flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-medium text-white mb-2">Connect to Access DeFi Loans</h2>
                        <p className="text-gray-500 max-w-sm mb-8">
                            Connect your wallet to view loan eligibility based on your verified yield badges.
                        </p>
                        <ConnectButton />
                    </div>
                ) : (
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <h1 className="text-2xl font-medium text-white mb-2">DeFi Loans</h1>
                            <p className="text-gray-500">
                                Use your verified yield badges as collateral for decentralized loans.
                            </p>
                        </div>

                        {/* Main Grid */}
                        <div className="grid lg:grid-cols-2 gap-8">
                            <LoanEligibility badges={mockBadges} />
                            <LoanRequestForm
                                availableBadges={mockBadges.filter((b) => b.status === "verified")}
                                onSubmit={(request) => console.log("Loan request:", request)}
                            />
                        </div>

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
                )}
            </div>
        </div>
    );
}
