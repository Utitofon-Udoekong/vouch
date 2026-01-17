"use client";

import { useState } from "react";
import { ConnectButton, NetworkButton } from "@/components/ConnectButton";
import { MobileNav, MobileNavTrigger } from "@/components/MobileNav";
import { useConnection } from "wagmi";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    const { isConnected } = useConnection();
    const pathname = usePathname();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const navItems = [
        { href: "/dashboard", label: "Overview", exact: true },
        { href: "/dashboard/loans", label: "DeFi Loans" },
        { href: "/dashboard/badges", label: "My Badges" },
    ];

    const isActive = (href: string, exact?: boolean) => {
        if (exact) return pathname === href;
        return pathname.startsWith(href);
    };

    return (
        <div className="min-h-screen bg-[#09090b] selection:bg-[#ea580c] selection:text-white">
            {/* Mobile Nav */}
            <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

            {/* Top Bar */}
            <nav className="h-16 border-b border-[#27272a] bg-[#09090b] flex items-center justify-between px-4 lg:px-6 sticky top-0 z-40">
                <div className="flex items-center gap-3 lg:gap-4">
                    {/* Mobile Menu Trigger */}
                    <MobileNavTrigger onClick={() => setIsMobileNavOpen(true)} />

                    {/* Desktop Back Button */}
                    <Link href="/" className="hidden lg:flex w-10 h-10 border border-[#27272a] items-center justify-center hover:bg-[#18181b] transition-colors">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <div className="hidden lg:block h-6 w-[1px] bg-[#27272a]"></div>
                    <span className="font-mono text-sm text-gray-400">DASHBOARD // <span className="text-white">VOUCH</span></span>
                </div>

                <div className="flex items-center gap-2 lg:gap-4">
                    <div className="hidden sm:block">
                        <NetworkButton />
                    </div>
                    <ConnectButton />
                </div>
            </nav>

            <div className="flex h-[calc(100vh-64px)] overflow-hidden">
                {/* Sidebar - Desktop Only */}
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
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${isActive(item.href, item.exact)
                                            ? "text-white bg-[#18181b] border border-[#27272a]"
                                            : "text-gray-500 hover:text-white hover:bg-[#18181b]"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto bg-[#09090b] p-4 lg:p-12">
                    <div className="max-w-5xl mx-auto">
                        {!isConnected ? (
                            <div className="min-h-[400px] flex flex-col items-center justify-center border border-[#27272a] bg-[#0c0c0e] p-8 lg:p-12 text-center">
                                <div className="w-16 h-16 border border-[#27272a] rounded-full flex items-center justify-center mb-6">
                                    <div className="w-4 h-4 bg-[#27272a]"></div>
                                </div>
                                <h2 className="text-xl font-medium text-white mb-2">Authentication Required</h2>
                                <p className="text-gray-500 max-w-sm mb-8">Connect your wallet to access the Vouch dashboard.</p>
                                <ConnectButton />
                            </div>
                        ) : (
                            children
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
