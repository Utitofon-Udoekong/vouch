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

    if (!isConnected) {
        return (
            <div className="card">
                <h3 className="card-title">🔓 Grant Access</h3>
                <p className="text-gray-400">Connect your wallet to manage access to your protected data.</p>
            </div>
        );
    }

    if (!isInitialized) {
        return (
            <div className="card">
                <h3 className="card-title">🔓 Grant Access</h3>
                <p className="text-yellow-400">Initializing DataProtector...</p>
            </div>
        );
    }

    return (
        <div className="card">
            <h3 className="card-title">🔓 Grant Access to Protected Data</h3>
            <p className="text-gray-400 mb-6">
                Allow specific apps and users to access your encrypted yield data.
            </p>

            {grantedAccess && (
                <div className="success-box mb-6">
                    <p className="font-semibold text-green-400">✅ Access Granted Successfully!</p>
                    <div className="mt-2 text-sm space-y-1">
                        <p><span className="text-gray-400">Dataset:</span> <span className="font-mono text-xs">{String(grantedAccess.dataset)}</span></p>
                        <p><span className="text-gray-400">Price:</span> {String(grantedAccess.datasetprice)} nRLC</p>
                        <p><span className="text-gray-400">Volume:</span> {String(grantedAccess.volume)}</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Protected Data Address
                    </label>
                    <input
                        type="text"
                        value={protectedDataAddress}
                        onChange={(e) => setProtectedDataAddress(e.target.value)}
                        placeholder="0x..."
                        className="input-field font-mono"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Authorized iApp Address
                        <a
                            href={getUrl("apps", "apps") || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-indigo-400 hover:text-indigo-300 text-xs"
                        >
                            View Available iApps →
                        </a>
                    </label>
                    <input
                        type="text"
                        value={authorizedApp}
                        onChange={(e) => setAuthorizedApp(e.target.value)}
                        placeholder="0x..."
                        className="input-field font-mono"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Authorized User (optional, 0x0... for anyone)
                    </label>
                    <input
                        type="text"
                        value={authorizedUser}
                        onChange={(e) => setAuthorizedUser(e.target.value)}
                        placeholder="0x0000000000000000000000000000000000000000"
                        className="input-field font-mono"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Access Count
                        </label>
                        <input
                            type="number"
                            min="1"
                            value={numberOfAccess}
                            onChange={(e) => setNumberOfAccess(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Price (nRLC)
                        </label>
                        <input
                            type="number"
                            min="0"
                            value={pricePerAccess}
                            onChange={(e) => setPricePerAccess(e.target.value)}
                            className="input-field"
                        />
                    </div>
                </div>

                {error && (
                    <div className="error-box">
                        <p className="text-red-400">{error}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading || !protectedDataAddress || !authorizedApp}
                    className="btn-primary w-full"
                >
                    {isLoading ? "Granting Access..." : "🔓 Grant Access"}
                </button>
            </form>
        </div>
    );
}
