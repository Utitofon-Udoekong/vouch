# Vouch

**Verified Yield Badge + DeFi Loan Integration**

A privacy-preserving platform that enables real-world asset owners to prove their yield performance without exposing sensitive data, using iExec's Trusted Execution Environment (TEE) technology.

---

## 🚀 Features

- **Data Protection**: Encrypt sensitive yield data with iExec TEE
- **Yield Badges**: Generate verifiable credentials for your assets
- **Access Control**: Grant/revoke lender access to verify badges
- **DeFi Integration**: Loan eligibility based on verified yields
- **Badge Export**: Download badges as images or share public verification links

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
git clone https://github.com/Utitofon-Udoekong/vouch.git
cd vouch

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
```

Add the following to your `.env.local`:

```env
NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id  # Get from cloud.reown.com
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key  # Get from alchemy.com
```

```bash
# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔗 Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/dashboard` | Overview + Data protection |
| `/dashboard/badges` | View yield badges |
| `/dashboard/badges/[address]` | Badge detail (owner view) |
| `/dashboard/loans` | DeFi loan dashboard |
| `/badge/[address]` | Public badge verification |

## 🔐 How It Works

1. **Connect Wallet**: Connect to iExec Arbitrum Sepolia network
2. **Protect Data**: Encrypt your yield data using the dashboard
3. **Create Badge**: Generate a verifiable yield credential
4. **Share with Lenders**: Grant access or share public verification link
5. **Get Loans**: Use badges as collateral for DeFi loans

### Network Configuration

- **iExec Arbitrum Sepolia Testnet** (chainId: 421614)
- Uses Sepolia ETH for gas fees
- Requires RLC tokens: [iExec Faucet](https://explorer.iex.ec/arbitrum-sepolia-testnet/account?accountTab=Faucet)

## 📁 Project Structure

```
vouch/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/            # Main dashboard
│   │   ├── page.tsx          # Overview + ProtectData
│   │   ├── badges/           # Badge listing & details
│   │   └── loans/            # DeFi loan interface
│   └── badge/[address]/      # Public badge verification
├── components/
│   ├── ProtectData.tsx       # Encryption form
│   ├── YieldBadge.tsx        # Badge display component
│   ├── ExportBadge.tsx       # Export as image
│   ├── LoanEligibility.tsx   # Loan assessment
│   └── DashboardLayout.tsx   # Dashboard shell
├── hooks/
│   └── useDataProtector.ts   # iExec SDK integration
├── context/
│   └── ProtectedDataContext.tsx # Global state for badges
└── config/
    ├── chains.ts             # Network configuration
    └── appkit.ts             # Wallet configuration
```

## 🧪 Testing

```bash
# Build verification
pnpm run build

# Development server
pnpm dev

# Type checking
pnpm tsc --noEmit
```

## 🎬 Demo

See [demo_script.md](./demo_script.md) for a walkthrough of all features.

## 📄 License

MIT
