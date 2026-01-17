"use client";

import { useState } from "react";
import { useExplorerUrl } from "@/hooks/useExplorerUrl";

interface GrantedAccess {
    dataset: string;
    datasetprice: string;
    apprestrict: string;
    requesterrestrict: string;
    salt: string;
    sign: string;
}

interface AccessManagerProps {
    protectedDataAddress: string;
    grantedAccesses?: GrantedAccess[];
    onRevoke?: (access: GrantedAccess) => void;
}

export function AccessManager({
    protectedDataAddress,
    grantedAccesses = [],
    onRevoke,
}: AccessManagerProps) {
    const { openInExplorer } = useExplorerUrl();
    const [isRevoking, setIsRevoking] = useState<string | null>(null);

    const handleRevoke = async (access: GrantedAccess) => {
        setIsRevoking(access.salt);
        // Simulate revocation - in production would call dataProtector.core.revokeAccess
        await new Promise((resolve) => setTimeout(resolve, 1500));
        onRevoke?.(access);
        setIsRevoking(null);
    };

    const truncateAddress = (address: string) => {
        if (!address || address === "0x0000000000000000000000000000000000000000") {
            return "Any User";
        }
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <div className="border border-[#27272a] bg-[#09090b]">
            {/* Header */}
            <div className="border-b border-[#27272a] p-4 flex items-center justify-between bg-[#0c0c0e]">
                <h3 className="text-sm font-medium text-white">Access Permissions</h3>
                <span className="text-[10px] uppercase font-mono text-gray-500">
                    {grantedAccesses.length} Grant{grantedAccesses.length !== 1 ? "s" : ""}
                </span>
            </div>

            <div className="p-4">
                {/* Protected Data Address */}
                <div className="mb-4 p-3 border border-[#27272a] bg-[#0c0c0e]">
                    <div className="text-[10px] uppercase text-gray-500 mb-1">Protected Data</div>
                    <div
                        className="font-mono text-xs text-gray-400 cursor-pointer hover:text-white transition-colors"
                        onClick={() => openInExplorer(protectedDataAddress, "dataset")}
                    >
                        {truncateAddress(protectedDataAddress)}
                    </div>
                </div>

                {/* Empty State */}
                {grantedAccesses.length === 0 && (
                    <div className="py-8 text-center">
                        <div className="w-10 h-10 mx-auto mb-3 border border-[#27272a] flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="square" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-500">No access grants</p>
                        <p className="text-xs text-gray-600">This data is private</p>
                    </div>
                )}

                {/* Access List */}
                {grantedAccesses.length > 0 && (
                    <div className="space-y-2">
                        {grantedAccesses.map((access, index) => (
                            <div
                                key={access.salt || index}
                                className="p-4 border border-[#27272a] bg-[#0c0c0e] hover:bg-[#18181b] transition-colors"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        <div>
                                            <div className="text-[10px] uppercase text-gray-500">Authorized App</div>
                                            <div className="font-mono text-xs text-gray-300">
                                                {truncateAddress(access.apprestrict)}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase text-gray-500">User Restriction</div>
                                            <div className="font-mono text-xs text-gray-300">
                                                {truncateAddress(access.requesterrestrict)}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase text-gray-500">Price</div>
                                            <div className="text-xs text-gray-300">{access.datasetprice} nRLC</div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRevoke(access)}
                                        disabled={isRevoking === access.salt}
                                        className="px-3 py-1.5 text-xs font-mono uppercase border border-red-900/50 text-red-400 hover:bg-red-900/20 transition-colors disabled:opacity-50"
                                    >
                                        {isRevoking === access.salt ? "Revoking..." : "Revoke"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
