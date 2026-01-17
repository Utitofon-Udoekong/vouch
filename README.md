# Vouch

**Verified Yield Badge + DeFi Loan Integration**

A privacy-preserving platform that enables real-world asset owners to prove their yield performance without exposing sensitive data, using iExec's Trusted Execution Environment (TEE) technology.

## 🏆 Hack4Privacy Hackathon Submission

### Problem

Real estate and RWA owners cannot easily prove their asset yield to DeFi lenders without exposing sensitive financial data. This creates a barrier between traditional finance and on-chain capital.

### Solution

Vouch bridges this gap by:
1. **Encrypting yield data** using iExec DataProtector (TEE)
2. **Generating verifiable badges** that prove yield without exposing raw data
3. **Enabling DeFi loans** based on verified yield credentials

## 🚀 Features

- **Data Protection**: Encrypt sensitive yield data with iExec TEE
- **Yield Badges**: Generate verifiable credentials for your assets
- **Access Control**: Grant/revoke lender access to verify badges
- **DeFi Integration**: Mock loan eligibility based on verified yields

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework |
| iExec DataProtector | TEE-based encryption |
| Reown AppKit | Wallet connection |
| Wagmi v3 | Ethereum hooks |
| Tailwind CSS v4 | Styling |

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/vouch.git
cd vouch

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your NEXT_PUBLIC_REOWN_PROJECT_ID from cloud.reown.com

# Run development server
pnpm dev
```

## 🔗 Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/dashboard` | Overview + Data protection |
| `/dashboard/badges` | View yield badges |
| `/dashboard/loans` | DeFi loan dashboard |

## 🔐 How It Works

1. **Connect Wallet**: Connect to iExec Arbitrum Sepolia network
2. **Protect Data**: Encrypt your yield data using the dashboard
3. **Create Badge**: Generate a verifiable yield credential
4. **Share with Lenders**: Grant access to your protected data
5. **Get Loans**: Use badges as collateral for DeFi loans

- **iExec Arbitrum Sepolia Testnet** (chainId: 421614) - Debugging network
- Uses Sepolia ETH for gas fees
- Requires [Faucet RLC](https://explorer.iex.ec/arbitrum-sepolia-testnet/account?accountTab=Faucet)

## 📁 Project Structure

```
vouch/
├── app/
│   ├── page.tsx           # Landing page
│   ├── dashboard/         # Main dashboard
│   ├── badge/             # Badge viewer
│   └── loans/             # DeFi loans
├── components/
│   ├── ProtectData.tsx    # Encryption form
│   ├── GrantAccess.tsx    # Access management
│   ├── YieldBadge.tsx     # Badge display
│   └── LoanEligibility.tsx # Loan assessment
├── hooks/
│   └── useDataProtector.ts # iExec integration
└── config/
    ├── chains.ts          # Network config
    └── appkit.ts          # Wallet config
```

## 🧪 Testing

```bash
# Build verification
pnpm run build

# Development server
pnpm dev
```

## 📄 License

MIT

---

Built for [Hack4Privacy](https://hack4privacy.eu) 🏴‍☠️
