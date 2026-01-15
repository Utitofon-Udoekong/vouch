"use client";

import { useState } from "react";
import { useDataProtector, type DataObject } from "@/hooks/useDataProtector";
import { useExplorerUrl } from "@/hooks/useExplorerUrl";

export function ProtectData() {
    const { isConnected, isInitialized, isLoading, error, protectData } = useDataProtector();
    const { openInExplorer } = useExplorerUrl();

    const [name, setName] = useState("");
    const [yieldValue, setYieldValue] = useState("");
    const [occupancy, setOccupancy] = useState("");
    const [protectedDataAddress, setProtectedDataAddress] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !yieldValue) return;

        // Build data object conforming to iExec DataObject type
        const data: DataObject = {
            yieldPercent: parseFloat(yieldValue),
            verifiedAt: new Date().toISOString(),
            type: "yield_verification",
        };

        if (occupancy) {
            data.occupancyPercent = parseFloat(occupancy);
        }

        const result = await protectData({
            name,
            data,
        });

        if (result) {
            setProtectedDataAddress(result.address);
            // Reset form
            setName("");
            setYieldValue("");
            setOccupancy("");
        }
    };

    if (!isConnected) {
        return (
            <div className="card">
                <h3 className="card-title">🔒 Protect Your Yield Data</h3>
                <p className="text-gray-400">Connect your wallet to protect your property yield data.</p>
            </div>
        );
    }

    if (!isInitialized) {
        return (
            <div className="card">
                <h3 className="card-title">🔒 Protect Your Yield Data</h3>
                <p className="text-yellow-400">Initializing DataProtector... Make sure you&apos;re on iExec Bellecour network.</p>
            </div>
        );
    }

    return (
        <div className="card">
            <h3 className="card-title">🔒 Protect Your Yield Data</h3>
            <p className="text-gray-400 mb-6">
                Encrypt your property income data. Only authorized apps can access it.
            </p>

            {protectedDataAddress && (
                <div className="success-box mb-6">
                    <p className="font-semibold text-green-400">✅ Data Protected Successfully!</p>
                    <div className="mt-2 text-sm">
                        <p className="text-gray-300">Protected Data Address:</p>
                        <button
                            onClick={() => openInExplorer(protectedDataAddress, "dataset")}
                            className="text-indigo-400 hover:text-indigo-300 font-mono break-all text-left"
                        >
                            {protectedDataAddress}
                        </button>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Property Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Downtown Apartment Building"
                        className="input-field"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Annual Yield (%)
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        value={yieldValue}
                        onChange={(e) => setYieldValue(e.target.value)}
                        placeholder="e.g., 7.5"
                        className="input-field"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Occupancy Rate (%) - Optional
                    </label>
                    <input
                        type="number"
                        step="0.1"
                        value={occupancy}
                        onChange={(e) => setOccupancy(e.target.value)}
                        placeholder="e.g., 94"
                        className="input-field"
                    />
                </div>

                {error && (
                    <div className="error-box">
                        <p className="text-red-400">{error}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading || !name || !yieldValue}
                    className="btn-primary w-full"
                >
                    {isLoading ? "Protecting..." : "🔐 Protect Data"}
                </button>
            </form>
        </div>
    );
}
