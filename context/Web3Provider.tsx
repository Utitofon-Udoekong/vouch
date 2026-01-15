"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { type Config, WagmiProvider, cookieToInitialState } from "wagmi";
import { ReactNode, useState } from "react";
import { wagmiAdapter, projectId, metadata, networks } from "@/config/appkit";

// Initialize AppKit
if (projectId) {
    createAppKit({
        adapters: [wagmiAdapter],
        projectId,
        networks,
        metadata,
        features: {
            analytics: true,
            email: false,
            socials: false,
        },
        themeMode: "dark",
        themeVariables: {
            "--w3m-accent": "#6366f1",
            "--w3m-border-radius-master": "2px",
        },
    });
}

interface Web3ProviderProps {
    children: ReactNode;
    cookies?: string | null;
}

export function Web3Provider({ children, cookies }: Web3ProviderProps) {
    const [queryClient] = useState(() => new QueryClient());

    const initialState = cookieToInitialState(
        wagmiAdapter.wagmiConfig as Config,
        cookies
    );

    return (
        <WagmiProvider
            config={wagmiAdapter.wagmiConfig as Config}
            initialState={initialState}
        >
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    );
}
