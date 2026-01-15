"use client";

import { ConnectButton, NetworkButton } from "@/components/ConnectButton";
import { useAccount } from "wagmi";
import Link from "next/link";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏠</span>
              <span className="text-xl font-bold gradient-text">Vouch</span>
            </div>
            <div className="flex items-center space-x-4">
              <NetworkButton />
              <ConnectButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            <span className="text-indigo-400 text-sm font-medium">
              🔐 Powered by iExec Confidential Computing
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="gradient-text">Verified Yield Badges</span>
            <br />
            <span className="text-white">for DeFi Lending</span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Prove your property income without exposing sensitive data.
            Get trusted yield credentials that unlock DeFi capital.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {isConnected ? (
              <Link href="/dashboard" className="btn-primary text-lg px-8 py-4">
                Go to Dashboard →
              </Link>
            ) : (
              <ConnectButton />
            )}
            <a
              href="https://docs.iex.ec/tools/dataprotector"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">How It Works</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Encrypt Your Data</h3>
              <p className="text-gray-400">
                Upload your property income data. It gets encrypted using iExec's
                confidential computing technology.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3 className="text-xl font-semibold mb-3">Get Verified</h3>
              <p className="text-gray-400">
                Our TEE-powered verifier analyzes your data securely and issues
                a Verified Yield Badge credential.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3 className="text-xl font-semibold mb-3">Unlock DeFi</h3>
              <p className="text-gray-400">
                Use your badge to access lending pools. Lenders trust your verified
                yield without seeing your private data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text">TEE</div>
              <div className="text-gray-400 mt-2">Hardware Security</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">100%</div>
              <div className="text-gray-400 mt-2">Data Privacy</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">On-Chain</div>
              <div className="text-gray-400 mt-2">Credentials</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">DeFi</div>
              <div className="text-gray-400 mt-2">Native</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="gradient-text">Vouch</span> for Your Yield?
          </h2>
          <p className="text-gray-400 mb-8">
            Connect your wallet and protect your property income data today.
          </p>
          {!isConnected && <ConnectButton />}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-xl">🏠</span>
            <span className="font-semibold">Vouch</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a
              href="https://iex.ec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Powered by iExec
            </a>
            <a
              href="https://docs.iex.ec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Docs
            </a>
            <span>Hack4Privacy Hackathon 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
