"use client";

import { useState } from "react";
import { useDataProtector } from "@/hooks/useDataProtector";
import { useExplorerUrl } from "@/hooks/useExplorerUrl";

export function GrantAccess() {
    const { isConnected, isInitialized, isLoading, error, grantAccess } = useDataProtector();
    const { getUrl } = useExplorerUrl();

    const [protectedDataAddress, setProtectedDataAddress] = useState("");
    const [authorizedApp, setAuthorizedApp] = useState("");
    const [authorizedUser, setAuthorizedUser] = useState("");
    const [numberOfAccess, setNumberOfAccess] = useState("1");
    const [pricePerAccess, setPricePerAccess] = useState("0");
    const [grantedAccess, setGrantedAccess] = useState<Record<string, unknown> | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!protectedDataAddress || !authorizedApp) return;

        const result = await grantAccess({
            protectedDataAddress,
            authorizedApp,
            authorizedUser: authorizedUser || undefined,
            numberOfAccess: parseInt(numberOfAccess),
            pricePerAccess: parseInt(pricePerAccess),
        });

        if (result) {
            setGrantedAccess(result as Record<string, unknown>);
        }
    };

    if (!isConnected) return null;

    return (
        <div className="border border-[#27272a] bg-[#09090b]">
            {/* Header */}
            <div className="border-b border-[#27272a] p-4 flex items-center justify-between bg-[#0c0c0e]">
                <h3 className="text-sm font-medium text-white">Access Control</h3>
                <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-[#27272a]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#27272a]"></div>
                </div>
            </div>

            <div className="p-6">
                {grantedAccess && (
                    <div className="mb-6 p-4 border border-green-900/30 bg-green-900/10 text-green-400 text-xs font-mono">
                        <div className="flex items-center mb-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            ACCESS_GRANTED
                        </div>
                        <div className="opacity-80">
                            Dataset: {String(grantedAccess.dataset).substring(0, 10)}...<br />
                            Price: {String(grantedAccess.datasetprice)} nRLC
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-mono-small block">Protected Address</label>
                        <input
                            type="text"
                            value={protectedDataAddress}
                            onChange={(e) => setProtectedDataAddress(e.target.value)}
                            className="input-industrial"
                            placeholder="0x..."
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-mono-small flex items-center justify-between">
                            <span>Authorized App</span>
                            <a href={getUrl("apps", "apps") || "#"} target="_blank" className="text-[10px] text-gray-500 hover:text-white underline">VIEW APPS</a>
                        </label>
                        <input
                            type="text"
                            value={authorizedApp}
                            onChange={(e) => setAuthorizedApp(e.target.value)}
                            className="input-industrial"
                            placeholder="0x..."
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-mono-small block">User Restriction (Opt)</label>
                        <input
                            type="text"
                            value={authorizedUser}
                            onChange={(e) => setAuthorizedUser(e.target.value)}
                            className="input-industrial"
                            placeholder="0x... (Empty for Any)"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-mono-small block">Count</label>
                            <input
                                type="number"
                                min="1"
                                value={numberOfAccess}
                                onChange={(e) => setNumberOfAccess(e.target.value)}
                                className="input-industrial"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-mono-small block">Price (nRLC)</label>
                            <input
                                type="number"
                                min="0"
                                value={pricePerAccess}
                                onChange={(e) => setPricePerAccess(e.target.value)}
                                className="input-industrial"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-xs text-red-500 font-mono pt-2">
                            Error code: {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading || !protectedDataAddress || !authorizedApp}
                        className="btn-industrial-outline w-full"
                    >
                        {isLoading ? "Authorizing..." : "Grant Permission"}
                    </button>
                </form>
            </div>
        </div>
    );
}
