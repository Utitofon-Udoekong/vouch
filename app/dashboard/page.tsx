"use client";

import { ConnectButton, NetworkButton } from "@/components/ConnectButton";
import { ProtectData } from "@/components/ProtectData";
import { GrantAccess } from "@/components/GrantAccess";
import { useAccount } from "wagmi";
import Link from "next/link";

export default function Dashboard() {
    const { isConnected, address } = useAccount();

    return (
        <div className="min-h-screen gradient-bg">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-2xl">🏠</span>
                            <span className="text-xl font-bold gradient-text">Vouch</span>
                        </Link>
                        <div className="flex items-center space-x-4">
                            <NetworkButton />
                            <ConnectButton />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-24 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">
                            <span className="gradient-text">Dashboard</span>
                        </h1>
                        {isConnected && address && (
                            <p className="text-gray-400">
                                Connected: <span className="font-mono text-sm">{address.slice(0, 6)}...{address.slice(-4)}</span>
                            </p>
                        )}
                    </div>

                    {!isConnected ? (
                        /* Not connected state */
                        <div className="card text-center py-16">
                            <h2 className="text-2xl font-semibold mb-4">Connect Your Wallet</h2>
                            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                                Connect your wallet to protect your yield data and manage access permissions.
                            </p>
                            <ConnectButton />
                        </div>
                    ) : (
                        /* Connected state - show data protection features */
                        <div className="grid lg:grid-cols-2 gap-8">
                            <ProtectData />
                            <GrantAccess />
                        </div>
                    )}

                    {/* Info Section */}
                    <div className="mt-12">
                        <div className="card">
                            <h3 className="card-title">ℹ️ How to Use</h3>
                            <div className="space-y-4 text-gray-400">
                                <div>
                                    <h4 className="font-semibold text-white mb-1">1. Connect to iExec Bellecour</h4>
                                    <p>Make sure you're connected to the iExec Bellecour network. You'll need xRLC tokens for transactions.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">2. Protect Your Yield Data</h4>
                                    <p>Enter your property details and yield information. The data will be encrypted and stored securely.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">3. Grant Access</h4>
                                    <p>Authorize specific iApps and users to access your encrypted data for verification or lending.</p>
                                </div>
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-sm">
                                        Need xRLC tokens?{" "}
                                        <a
                                            href="https://faucet.iex.ec/bellecour"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-400 hover:text-indigo-300"
                                        >
                                            Get them from the faucet →
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
