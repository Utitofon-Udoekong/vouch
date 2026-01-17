"use client";

import { useState } from "react";
import { useConnection } from "wagmi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButton, NetworkButton } from "@/components/ConnectButton";

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
    const { isConnected } = useConnection();
    const pathname = usePathname();

    const navItems = [
        { href: "/dashboard", label: "Overview", exact: true },
        { href: "/dashboard/loans", label: "DeFi Loans" },
        { href: "/dashboard/badges", label: "My Badges" },
    ];

    const isActive = (href: string, exact?: boolean) => {
        if (exact) return pathname === href;
        return pathname.startsWith(href);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={onClose}
            />

            {/* Sidebar */}
            <div className="fixed inset-y-0 left-0 w-72 bg-[#0c0c0e] border-r border-[#27272a] z-50 lg:hidden animate-slide-in-left">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
                            <div className="w-8 h-8 bg-[#f4f4f5] transform rotate-45"></div>
                        </Link>
                        <button onClick={onClose} className="p-2 text-gray-500 hover:text-white">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Status */}
                    <div className="mb-8">
                        <div className="text-[10px] uppercase text-gray-500 mb-2">Status</div>
                        <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"}`}></span>
                            <span className="text-sm text-white">{isConnected ? "Connected" : "Disconnected"}</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-1 mb-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className={`block px-4 py-3 text-sm transition-colors ${isActive(item.href, item.exact)
                                        ? "text-white bg-[#18181b] border border-[#27272a]"
                                        : "text-gray-500 hover:text-white"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="space-y-3">
                        <NetworkButton />
                        <ConnectButton />
                    </div>
                </div>
            </div>
        </>
    );
}

export function MobileNavTrigger({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="lg:hidden w-10 h-10 border border-[#27272a] flex items-center justify-center hover:bg-[#18181b] transition-colors"
        >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    );
}
