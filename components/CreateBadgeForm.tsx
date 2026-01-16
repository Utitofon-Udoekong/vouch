"use client";

import { useState } from "react";
import { useDataProtector, type DataObject } from "@/hooks/useDataProtector";

interface CreateBadgeFormProps {
    onSuccess?: (address: string) => void;
}

export function CreateBadgeForm({ onSuccess }: CreateBadgeFormProps) {
    const { isConnected, isLoading, error, protectData } = useDataProtector();

    const [assetName, setAssetName] = useState("");
    const [assetType, setAssetType] = useState<"real_estate" | "bond" | "other">("real_estate");
    const [yieldPercent, setYieldPercent] = useState("");
    const [occupancy, setOccupancy] = useState("");
    const [dataSource, setDataSource] = useState("");
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!assetName || !yieldPercent) return;

        setSuccess(null);

        const data: DataObject = {
            assetType,
            assetName,
            annualYieldPercent: parseFloat(yieldPercent),
            verificationDate: new Date().toISOString(),
            dataSource: dataSource || "Self-reported",
        };

        if (occupancy && assetType === "real_estate") {
            data.occupancyPercent = parseFloat(occupancy);
        }

        const result = await protectData({
            name: `YIELD_${assetName}_${new Date().getFullYear()}`,
            data,
        });

        if (result) {
            setSuccess(result.address);
            onSuccess?.(result.address);
            // Reset form
            setAssetName("");
            setYieldPercent("");
            setOccupancy("");
            setDataSource("");
        }
    };

    if (!isConnected) return null;

    return (
        <div className="border border-[#27272a] bg-[#09090b]">
            {/* Header */}
            <div className="border-b border-[#27272a] p-4 flex items-center justify-between bg-[#0c0c0e]">
                <h3 className="text-sm font-medium text-white">Create Yield Badge</h3>
                <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-[#ea580c]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#27272a]"></div>
                </div>
            </div>

            <div className="p-6">
                {success && (
                    <div className="mb-6 p-4 border border-green-900/30 bg-green-900/10 text-green-400 text-xs font-mono">
                        <div className="flex items-center mb-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            BADGE_CREATED
                        </div>
                        <div className="opacity-80 break-all">{success}</div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Asset Type */}
                    <div className="space-y-2">
                        <label className="text-mono-small block">Asset Type</label>
                        <div className="grid grid-cols-3 gap-2">
                            {(["real_estate", "bond", "other"] as const).map((type) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setAssetType(type)}
                                    className={`p-3 text-xs uppercase font-mono border transition-colors ${assetType === type
                                            ? "border-white text-white bg-[#18181b]"
                                            : "border-[#27272a] text-gray-500 hover:text-white"
                                        }`}
                                >
                                    {type.replace("_", " ")}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Asset Name */}
                    <div className="space-y-2">
                        <label className="text-mono-small block">Asset Name</label>
                        <input
                            type="text"
                            value={assetName}
                            onChange={(e) => setAssetName(e.target.value)}
                            className="input-industrial"
                            placeholder="e.g. Downtown Office Building"
                            required
                        />
                    </div>

                    {/* Yield & Occupancy */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-mono-small block">Annual Yield (%)</label>
                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                max="100"
                                value={yieldPercent}
                                onChange={(e) => setYieldPercent(e.target.value)}
                                className="input-industrial"
                                placeholder="7.50"
                                required
                            />
                        </div>
                        {assetType === "real_estate" && (
                            <div className="space-y-2">
                                <label className="text-mono-small block">Occupancy (%)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="100"
                                    value={occupancy}
                                    onChange={(e) => setOccupancy(e.target.value)}
                                    className="input-industrial"
                                    placeholder="95.0"
                                />
                            </div>
                        )}
                    </div>

                    {/* Data Source */}
                    <div className="space-y-2">
                        <label className="text-mono-small block">Data Source (Optional)</label>
                        <input
                            type="text"
                            value={dataSource}
                            onChange={(e) => setDataSource(e.target.value)}
                            className="input-industrial"
                            placeholder="e.g. Property Management Report"
                        />
                    </div>

                    {error && (
                        <div className="text-xs text-red-500 font-mono pt-2">
                            Error: {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading || !assetName || !yieldPercent}
                        className="btn-industrial w-full"
                    >
                        {isLoading ? "Creating Badge..." : "Generate Yield Badge"}
                    </button>
                </form>
            </div>
        </div>
    );
}
