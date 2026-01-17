"use client";

import { useState } from "react";
import { useDataProtector, type DataObject } from "@/hooks/useDataProtector";
import { useExplorerUrl } from "@/hooks/useExplorerUrl";
import { useProtectedData } from "@/context/ProtectedDataContext";

export function ProtectData() {
    const { isConnected, isLoading, error, protectData } = useDataProtector();
    const { refreshData } = useProtectedData();
    const { openInExplorer } = useExplorerUrl();

    const [name, setName] = useState("");
    const [yieldValue, setYieldValue] = useState("");
    const [occupancy, setOccupancy] = useState("");
    const [protectedDataAddress, setProtectedDataAddress] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !yieldValue) return;

        const data: DataObject = {
            yieldPercent: parseFloat(yieldValue),
            verifiedAt: new Date().toISOString(),
            type: "yield_verification",
        };

        if (occupancy) {
            data.occupancyPercent = parseFloat(occupancy);
        }

        const result = await protectData({ name, data });

        if (result) {
            setProtectedDataAddress(result.address);
            setName("");
            setYieldValue("");
            setOccupancy("");
            // Refresh shared data context
            await refreshData();
        }
    };

    if (!isConnected) return null;

    return (
        <div className="border border-[#27272a] bg-[#09090b]">
            {/* Header */}
            <div className="border-b border-[#27272a] p-4 flex items-center justify-between bg-[#0c0c0e]">
                <h3 className="text-sm font-medium text-white">Encryption Module</h3>
                <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-[#27272a]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#27272a]"></div>
                </div>
            </div>

            <div className="p-6">
                {protectedDataAddress && (
                    <div className="mb-6 p-4 border border-green-900/30 bg-green-900/10 text-green-400 text-xs font-mono">
                        <div className="flex items-center mb-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            ENCRYPTION_COMPLETE
                        </div>
                        <div className="break-all opacity-80 cursor-pointer hover:underline" onClick={() => openInExplorer(protectedDataAddress, "dataset")}>
                            {protectedDataAddress}
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-mono-small block">Asset Designation</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input-industrial"
                            placeholder="e.g. BLDG_block_A"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-mono-small block">Yield (%)</label>
                            <input
                                type="number"
                                step="0.01"
                                value={yieldValue}
                                onChange={(e) => setYieldValue(e.target.value)}
                                className="input-industrial"
                                placeholder="0.00"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-mono-small block">Occupancy (%)</label>
                            <input
                                type="number"
                                step="0.1"
                                value={occupancy}
                                onChange={(e) => setOccupancy(e.target.value)}
                                className="input-industrial"
                                placeholder="OPTIONAL"
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
                        disabled={isLoading || !name || !yieldValue}
                        className="btn-industrial w-full"
                    >
                        {isLoading ? "Encrypting..." : "Execute Protection"}
                    </button>
                </form>
            </div>
        </div>
    );
}
