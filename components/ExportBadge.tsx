"use client";

import { useRef, useCallback } from "react";
import { YieldBadge } from "@/components/YieldBadge";

interface ExportBadgeProps {
    yieldPercent: number;
    assetName: string;
    verifiedDate: string;
    protectedDataAddress: string;
}

export function ExportBadge({
    yieldPercent,
    assetName,
    verifiedDate,
    protectedDataAddress,
}: ExportBadgeProps) {
    const badgeRef = useRef<HTMLDivElement>(null);

    const exportAsImage = useCallback(async () => {
        if (!badgeRef.current) return;

        try {
            // Dynamic import to avoid SSR issues
            const html2canvas = (await import("html2canvas")).default;

            const canvas = await html2canvas(badgeRef.current, {
                backgroundColor: "#09090b",
                scale: 2,
            });

            const link = document.createElement("a");
            link.download = `vouch-badge-${assetName.replace(/\s+/g, "-").toLowerCase()}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        } catch (err) {
            console.error("Failed to export badge:", err);
            // Fallback: copy badge URL
            const url = `${window.location.origin}/badge/${protectedDataAddress}`;
            navigator.clipboard.writeText(url);
            alert("Badge exported as link copied to clipboard!");
        }
    }, [assetName, protectedDataAddress]);

    return (
        <div className="space-y-4">
            <div ref={badgeRef} className="inline-block">
                <YieldBadge
                    yieldPercent={yieldPercent}
                    assetName={assetName}
                    verifiedDate={verifiedDate}
                    status="verified"
                    protectedDataAddress={protectedDataAddress}
                />
            </div>

            <div className="flex gap-2">
                <button onClick={exportAsImage} className="btn-industrial-outline text-sm px-4 py-2 h-auto">
                    <svg className="w-4 h-4 mr-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="square" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export as Image
                </button>
                <button
                    onClick={() => {
                        const url = `${window.location.origin}/badge/${protectedDataAddress}`;
                        navigator.clipboard.writeText(url);
                    }}
                    className="btn-industrial-outline text-sm px-4 py-2 h-auto"
                >
                    <svg className="w-4 h-4 mr-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="square" strokeWidth={1.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copy Link
                </button>
            </div>
        </div>
    );
}
