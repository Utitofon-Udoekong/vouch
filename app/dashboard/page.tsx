"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { ProtectData } from "@/components/ProtectData";
import { ProtectedDataList } from "@/components/ProtectedDataList";
import { GrantAccess } from "@/components/GrantAccess";
import Link from "next/link";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="space-y-12">
                {/* Module 1: Yield Assets */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-medium text-white">Yield Assets</h2>
                        <Link href="/dashboard/badges" className="text-mono-small hover:text-white transition-colors">
                            View All Badges &rarr;
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <ProtectData />
                        <ProtectedDataList />
                    </div>
                </section>

                <div className="section-divider"></div>

                {/* Module 2: Access Control */}
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

                <div className="section-divider"></div>

                {/* Quick Actions */}
                <section>
                    <h2 className="text-xl font-medium text-white mb-6">Quick Actions</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link
                            href="/dashboard/loans"
                            className="p-6 border border-[#27272a] bg-[#0c0c0e] hover:bg-[#18181b] transition-colors group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 border border-[#27272a] flex items-center justify-center group-hover:border-white transition-colors">
                                    <svg className="w-5 h-5 text-gray-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="square" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="square" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-medium text-white mb-1">DeFi Loans</h3>
                            <p className="text-xs text-gray-500">Use your badges as collateral</p>
                        </Link>

                        <Link
                            href="/dashboard/badges"
                            className="p-6 border border-[#27272a] bg-[#0c0c0e] hover:bg-[#18181b] transition-colors group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 border border-[#27272a] flex items-center justify-center group-hover:border-white transition-colors">
                                    <svg className="w-5 h-5 text-gray-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="square" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="square" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-medium text-white mb-1">My Badges</h3>
                            <p className="text-xs text-gray-500">View verified yield credentials</p>
                        </Link>
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
}
