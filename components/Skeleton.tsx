"use client";

interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
    return <div className={`skeleton ${className}`} />;
}

export function CardSkeleton() {
    return (
        <div className="border border-[#27272a] bg-[#0c0c0e] p-6">
            <Skeleton className="h-4 w-24 mb-4" />
            <Skeleton className="h-8 w-32 mb-6" />
            <div className="space-y-3">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-3/4" />
            </div>
        </div>
    );
}

export function BadgeSkeleton() {
    return (
        <div className="border border-[#27272a] bg-[#0c0c0e] p-6">
            <div className="flex items-center gap-2 mb-4">
                <Skeleton className="w-2 h-2 rounded-full" />
                <Skeleton className="h-3 w-20" />
            </div>
            <Skeleton className="h-10 w-24 mb-2" />
            <Skeleton className="h-3 w-32 mb-6" />
            <div className="pt-4 border-t border-[#27272a] space-y-2">
                <div className="flex justify-between">
                    <Skeleton className="h-3 w-12" />
                    <Skeleton className="h-3 w-20" />
                </div>
                <div className="flex justify-between">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-3 w-16" />
                </div>
            </div>
        </div>
    );
}

export function ListItemSkeleton() {
    return (
        <div className="p-4 border border-[#27272a] bg-[#0c0c0e]">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <Skeleton className="h-4 w-32 mb-2" />
                    <Skeleton className="h-3 w-24" />
                </div>
                <div className="text-right">
                    <Skeleton className="h-3 w-16 mb-1" />
                    <Skeleton className="h-3 w-20" />
                </div>
            </div>
            <div className="pt-2 border-t border-[#27272a] flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Skeleton className="w-1.5 h-1.5 rounded-full" />
                    <Skeleton className="h-2 w-16" />
                </div>
                <Skeleton className="w-4 h-4" />
            </div>
        </div>
    );
}

export function TableSkeleton({ rows = 3 }: { rows?: number }) {
    return (
        <div className="border border-[#27272a]">
            <div className="p-4 border-b border-[#27272a] bg-[#0c0c0e]">
                <Skeleton className="h-4 w-32" />
            </div>
            <div className="divide-y divide-[#27272a]">
                {Array.from({ length: rows }).map((_, i) => (
                    <div key={i} className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Skeleton className="w-8 h-8" />
                            <div>
                                <Skeleton className="h-4 w-24 mb-1" />
                                <Skeleton className="h-3 w-16" />
                            </div>
                        </div>
                        <Skeleton className="h-6 w-16" />
                    </div>
                ))}
            </div>
        </div>
    );
}
