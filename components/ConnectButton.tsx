"use client";

// Declare the Reown AppKit web component types
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "appkit-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            "appkit-network-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

export function ConnectButton() {
    return (
        <div className="connect-button-wrapper">
            <appkit-button />
        </div>
    );
}

export function NetworkButton() {
    return (
        <div className="network-button-wrapper">
            <appkit-network-button />
        </div>
    );
}
