# Vouch

**Verified Yield Badge + DeFi Loan Integration**

A privacy-preserving platform that enables real-world asset owners to prove their yield performance without exposing sensitive data, using iExec's Trusted Execution Environment (TEE) technology.

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

