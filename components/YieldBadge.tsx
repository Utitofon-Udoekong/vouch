"use client";

interface YieldBadgeProps {
    yieldPercent: number;
    assetName: string;
    verifiedDate: string;
    status: "verified" | "pending" | "expired";
    protectedDataAddress?: string;
    onClick?: () => void;
}

export function YieldBadge({
    yieldPercent,
    assetName,
    verifiedDate,
    status,
    protectedDataAddress,
    onClick,
}: YieldBadgeProps) {
    const statusConfig = {
        verified: {
            color: "text-green-400",
            bg: "bg-green-500/10",
            border: "border-green-500/30",
            dot: "bg-green-500",
            label: "VERIFIED",
        },
        pending: {
            color: "text-yellow-400",
            bg: "bg-yellow-500/10",
            border: "border-yellow-500/30",
            dot: "bg-yellow-500",
            label: "PENDING",
        },
        expired: {
            color: "text-red-400",
            bg: "bg-red-500/10",
            border: "border-red-500/30",
            dot: "bg-red-500",
            label: "EXPIRED",
        },
    };

    const config = statusConfig[status];

    return (
        <div
            className={`border ${config.border} ${config.bg} p-6 cursor-pointer hover:bg-opacity-20 transition-all group`}
            onClick={onClick}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${config.dot}`}></span>
                    <span className={`text-[10px] uppercase font-mono ${config.color}`}>
                        {config.label} YIELD
                    </span>
                </div>
                <svg
                    className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="square"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>

            {/* Yield Value */}
            <div className="mb-4">
                <div className="text-4xl font-medium text-white mb-1">
                    {yieldPercent.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-500">Annual Percentage Yield</div>
            </div>

            {/* Asset Info */}
            <div className="space-y-2 pt-4 border-t border-[#27272a]">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase text-gray-500">Asset</span>
                    <span className="text-sm text-white font-mono">{assetName}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase text-gray-500">Verified</span>
                    <span className="text-sm text-gray-400">{verifiedDate}</span>
                </div>
                {protectedDataAddress && (
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase text-gray-500">Data ID</span>
                        <span className="text-xs text-gray-500 font-mono">
                            {protectedDataAddress.slice(0, 6)}...{protectedDataAddress.slice(-4)}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

// Compact version for lists
export function YieldBadgeCompact({
    yieldPercent,
    assetName,
    status,
}: Pick<YieldBadgeProps, "yieldPercent" | "assetName" | "status">) {
    const statusColors = {
        verified: "bg-green-500",
        pending: "bg-yellow-500",
        expired: "bg-red-500",
    };

    return (
        <div className="flex items-center justify-between p-3 border border-[#27272a] bg-[#0c0c0e] hover:bg-[#18181b] transition-colors">
            <div className="flex items-center gap-3">
                <span className={`w-1.5 h-1.5 rounded-full ${statusColors[status]}`}></span>
                <span className="text-sm text-white">{assetName}</span>
            </div>
            <div className="text-sm font-medium text-white">{yieldPercent.toFixed(1)}%</div>
        </div>
    );
}
