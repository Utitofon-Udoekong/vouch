"use client";

import { ConnectButton } from "@/components/ConnectButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans selection:bg-[#ea580c] selection:text-white">

      {/* Navigation - Strict Grid Layout */}
      <nav className="border-b border-[#27272a] bg-[#09090b] sticky top-0 z-50">
        <div className="flex h-16 items-center">
          {/* Logo / Brand */}
          <div className="w-16 h-16 flex items-center justify-center border-r border-[#27272a]">
            <div className="w-6 h-6 bg-[#f4f4f5] transform rotate-45"></div>
          </div>

          <div className="flex-1 px-8 flex items-center justify-between">
            <div className="flex space-x-8">
              <span className="font-mono text-xs uppercase tracking-wider text-gray-500">Platform</span>
              <span className="font-mono text-xs uppercase tracking-wider text-gray-500">Protocols</span>
              <span className="font-mono text-xs uppercase tracking-wider text-gray-500">Docs</span>
            </div>

            <div className="flex items-center space-x-6">
              <span className="hidden md:inline-block font-mono text-xs text-gray-500">
                SYSTEM_STATUS: <span className="text-[#ea580c]">●</span> ONLINE
              </span>
              <ConnectButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-[#27272a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

          {/* Left Content */}
          <div className="p-12 lg:p-24 flex flex-col justify-center border-r border-[#27272a]">
            <div className="mb-8 flex items-center space-x-3">
              <span className="status-dot"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                New Feature: Yield Verification Protocol v1.0
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 text-white">
              Reputation infrastructure for the <br />
              <span className="text-gray-500">real world.</span>
            </h1>

            <p className="text-lg text-gray-400 mb-12 max-w-lg leading-relaxed">
              Vouch provides the cryptographic primitive to bridge off-chain reputation
              into on-chain capital. Zero-knowledge proof generation for asset yield verification.
            </p>

            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="btn-industrial group">
                <span>Start Verification</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="#how-it-works" className="btn-industrial-outline">
                Read Documentation
              </a>
            </div>
          </div>

          {/* Right Content - Technical Preview */}
          <div className="bg-[#0c0c0e] industrial-grid relative flex items-center justify-center p-12 overflow-hidden">
            {/* Window Chrome */}
            <div className="w-full max-w-lg bg-[#09090b] border border-[#27272a] shadow-2xl">
              {/* Window Header */}
              <div className="border-b border-[#27272a] p-3 flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#27272a]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27272a]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27272a]"></div>
                <div className="ml-4 font-mono text-xs text-gray-500">yield_verifier.tsx</div>
              </div>

              {/* Window Content */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden bg-[#0c0c0e]">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  <span className="text-[#ea580c]">import</span> {`{ Verifier }`} <span className="text-[#ea580c]">from</span> <span className="text-green-400">&apos;@vouch/sdk&apos;</span>;

                  <span className="text-gray-500">// Initialize TEE Enclave</span>
                  <span className="text-[#ea580c]">const</span> session = <span className="text-[#ea580c]">await</span> Verifier.init({`{`}
                  enclave: <span className="text-green-400">&apos;sgx-standard&apos;</span>,
                  privacy: <span className="text-[#ea580c]">true</span>
                  {`}`});

                  <span className="text-gray-500">// Verify Asset Yield</span>
                  <span className="text-[#ea580c]">const</span> proof = session.verify({`{`}
                  asset: <span className="text-green-400">&apos;real_estate_01&apos;</span>,
                  yield: <span className="text-green-400">&apos;7.5%&apos;</span>
                  {`}`});
                </pre>
              </div>

              {/* Window Footer Status */}
              <div className="border-t border-[#27272a] p-2 bg-[#0c0c0e] flex justify-between items-center text-[10px] font-mono uppercase text-gray-500">
                <span>Status: Verified</span>
                <span>Enclave: Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#27272a]">
        {[
          {
            icon: "01",
            title: "iExec Sidechain",
            desc: "Data protection and confidential computing layer.",
            svg: (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            )
          },
          {
            icon: "02",
            title: "Arbitrum One",
            desc: "Settlement layer for DeFi loan protocols.",
            svg: (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            )
          },
          {
            icon: "03",
            title: "Reown AppKit",
            desc: "Seamless wallet connection infrastructure.",
            svg: (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )
          },
          {
            icon: "04",
            title: "Vouch Protocol",
            desc: "Yield verification and credential issuance.",
            svg: (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          }
        ].map((item) => (
          <div key={item.icon} className="p-12 border-r border-[#27272a] hover:bg-[#18181b] transition-colors group">
            <div className="font-mono text-xs text-gray-500 mb-6">{item.icon} // INFRASTRUCTURE</div>
            <div className="h-12 w-12 mb-6 border border-[#27272a] group-hover:bg-white group-hover:border-white transition-colors flex items-center justify-center">
              {item.svg}
            </div>
            <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-12 text-center bg-[#09090b]">
        <h2 className="text-3xl font-medium text-white mb-8">Ready to integrate your assets?</h2>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard" className="btn-industrial w-48">
            Launch App
          </Link>
        </div>
      </section>
    </div>
  );
}
