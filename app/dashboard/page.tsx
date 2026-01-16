"use client";

import { ConnectButton, NetworkButton } from "@/components/ConnectButton";
import { ProtectData } from "@/components/ProtectData";
import { GrantAccess } from "@/components/GrantAccess";
import { useAccount } from "wagmi";
import Link from "next/link";

export default function Dashboard() {
    const { isConnected } = useAccount();

    return (
        <div className="min-h-screen bg-[#09090b] selection:bg-[#ea580c] selection:text-white">

            {/* Top Bar - Minimal */}
            <nav className="h-16 border-b border-[#27272a] bg-[#09090b] flex items-center justify-between px-6 sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <Link href="/" className="w-10 h-10 border border-[#27272a] flex items-center justify-center hover:bg-[#18181b] transition-colors">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <div className="h-6 w-[1px] bg-[#27272a]"></div>
                    <span className="font-mono text-sm text-gray-400">DASHBOARD_VIEW // <span className="text-white">MAIN</span></span>
                </div>

                <div className="flex items-center gap-4">
                    <NetworkButton />
                    <ConnectButton />
                </div>
            </nav>

            <div className="flex h-[calc(100vh-64px)] overflow-hidden">

                {/* Sidebar - Fixed width */}
                <aside className="w-64 border-r border-[#27272a] bg-[#0c0c0e] hidden lg:block overflow-y-auto">
                    <div className="p-6">
                        <h4 className="text-mono-small mb-4">Account Overview</h4>

                        <div className="space-y-4 mb-8">
                            <div>
                                <div className="text-[10px] uppercase text-gray-500 mb-1">Status</div>
                                <div className="flex items-center space-x-2">
                                    <span className={`status-dot ${isConnected ? "bg-green-500" : "bg-red-500"}`}></span>
                                    <span className="text-sm font-medium text-white">{isConnected ? "Connected" : "Offline"}</span>
                                </div>
                            </div>

                            <div>
                                <div className="text-[10px] uppercase text-gray-500 mb-1">Network</div>
                                <div className="text-sm font-medium text-white">iExec Bellecour</div>
                            </div>
                        </div>

                        <div className="section-divider mb-8"></div>

                        <h4 className="text-mono-small mb-4">Navigation</h4>
                        <div className="space-y-1">
                            <button className="w-full text-left px-3 py-2 text-sm text-white bg-[#18181b] border border-[#27272a]">Overview</button>
                            <button className="w-full text-left px-3 py-2 text-sm text-gray-500 hover:text-white transition-colors">Yield Data</button>
                            <button className="w-full text-left px-3 py-2 text-sm text-gray-500 hover:text-white transition-colors">Permissions</button>
                            <button className="w-full text-left px-3 py-2 text-sm text-gray-500 hover:text-white transition-colors">Logs</button>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto bg-[#09090b] p-6 lg:p-12">

                    <div className="max-w-5xl mx-auto">
                        {!isConnected ? (
                            <div className="min-h-[400px] flex flex-col items-center justify-center border border-[#27272a] bg-[#0c0c0e] p-12 text-center">
                                <div className="w-16 h-16 border border-[#27272a] rounded-full flex items-center justify-center mb-6">
                                    <div className="w-4 h-4 bg-[#27272a]"></div>
                                </div>
                                <h2 className="text-xl font-medium text-white mb-2">Authentication Required</h2>
                                <p className="text-gray-500 max-w-sm mb-8">Please verify your session by connecting your wallet to the iExec protocol.</p>
                                <ConnectButton />
                            </div>
                        ) : (
                            <div className="space-y-12">
                                {/* Module 1 */}
                                <section>
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-medium text-white">Yield Assets</h2>
                                        <button className="text-mono-small hover:text-white transition-colors">View All Assets &rarr;</button>
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <ProtectData />

                                        {/* Info Card Placeholder */}
                                        <div className="border border-[#27272a] p-6 bg-[#0c0c0e] flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-sm font-medium text-white mb-4">Latest Activity</h3>
                                                <div className="space-y-4">
                                                    {[1, 2, 3].map((i) => (
                                                        <div key={i} className="flex items-center justify-between text-xs border-b border-[#27272a] pb-2 last:border-0 last:pb-0">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                                                                <span className="text-gray-400">System Scan</span>
                                                            </div>
                                                            <span className="font-mono text-gray-600">09:4{i}:22</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="mt-8 pt-4 border-t border-[#27272a]">
                                                <div className="text-[10px] uppercase text-gray-500">System Load</div>
                                                <div className="w-full bg-[#27272a] h-1 mt-2">
                                                    <div className="bg-[#ea580c] h-1 w-[24%]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="section-divider"></div>

                                {/* Module 2 */}
                                <section>
                                    <h2 className="text-xl font-medium text-white mb-6">Access Control</h2>
                                    <div className="grid lg:grid-cols-3 gap-8">
                                        <div className="lg:col-span-1">
                                            <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                                Manage granular permissions for your protected datasets.
                                                Authorize specific dApps or wallet addresses to compute on your encrypted yield data without revealing the raw inputs.
                                            </p>
                                            <div className="p-4 border border-[#27272a] bg-[#0c0c0e]">
                                                <div className="text-mono-small mb-2">Active Grants</div>
                                                <div className="text-2xl font-medium text-white">0</div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-2">
                                            <GrantAccess />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>

                </main>
            </div>
        </div>
    );
}
