"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface Toast {
    id: string;
    type: "success" | "error" | "info" | "warning";
    title: string;
    message?: string;
    duration?: number;
}

interface ToastContextType {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, "id">) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback((toast: Omit<Toast, "id">) => {
        const id = Math.random().toString(36).slice(2);
        const newToast = { ...toast, id };
        setToasts((prev) => [...prev, newToast]);

        // Auto remove after duration
        const duration = toast.duration ?? 5000;
        setTimeout(() => {
            removeToast(id);
        }, duration);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
}

function ToastContainer() {
    const { toasts, removeToast } = useToast();

    const typeStyles = {
        success: {
            border: "border-green-500/30",
            bg: "bg-green-500/10",
            icon: "text-green-400",
            dot: "bg-green-500",
        },
        error: {
            border: "border-red-500/30",
            bg: "bg-red-500/10",
            icon: "text-red-400",
            dot: "bg-red-500",
        },
        warning: {
            border: "border-yellow-500/30",
            bg: "bg-yellow-500/10",
            icon: "text-yellow-400",
            dot: "bg-yellow-500",
        },
        info: {
            border: "border-blue-500/30",
            bg: "bg-blue-500/10",
            icon: "text-blue-400",
            dot: "bg-blue-500",
        },
    };

    if (toasts.length === 0) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[100] space-y-3 max-w-sm">
            {toasts.map((toast) => {
                const style = typeStyles[toast.type];
                return (
                    <div
                        key={toast.id}
                        className={`p-4 border ${style.border} ${style.bg} backdrop-blur-sm animate-slide-in-right`}
                    >
                        <div className="flex items-start gap-3">
                            <span className={`w-2 h-2 mt-1.5 rounded-full ${style.dot}`}></span>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-white">{toast.title}</div>
                                {toast.message && (
                                    <div className="text-xs text-gray-400 mt-1">{toast.message}</div>
                                )}
                            </div>
                            <button
                                onClick={() => removeToast(toast.id)}
                                className="text-gray-500 hover:text-white transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
