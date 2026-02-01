# iExec Tools Feedback

This document provides feedback on the iExec developer tools used in building Vouch.

---

## Tools Used

- **@iexec/dataprotector** (v2.0.0-beta.23)
- **iExec Arbitrum Sepolia Testnet** (chainId: 421614)
- **iExec Explorer** (https://explorer.iex.ec/arbitrum-sepolia-testnet)

---

## What Worked Well ✅

### DataProtector SDK
- **Simple API**: The `protectData()` and `getProtectedData()` methods are intuitive and easy to integrate.
- **Clear Documentation**: The SDK docs provided good examples for common use cases.
- **TEE Abstraction**: The complexity of TEE encryption is completely hidden from the developer—just pass data and it's encrypted.

### Multi-Chain Support
- The Arbitrum Sepolia deployment works smoothly with standard EVM tooling (viem, wagmi).
- RPC endpoints are reliable during development.

### Explorer
- The iExec Explorer is helpful for debugging protected data and verifying transactions.
- Direct links to datasets (`/dataset/{address}`) are useful for verification flows.

---

## Challenges Encountered ⚠️

### SDK Version Instability
- We used a beta version (`2.0.0-beta.23`) which occasionally had breaking changes.
- **Suggestion**: Clearer migration guides between beta versions would help.

### Network Switching UX
- Users need to manually switch to iExec Arbitrum Sepolia, which can be confusing.
- **Suggestion**: SDK could provide a helper to auto-prompt network switching.

### Metadata Limitations
- The `name` field in `protectData` is the only easily accessible metadata.
- We had to encode yield data into the name using a delimiter (e.g., `AssetName|7.5|Jan 2026`).
- **Suggestion**: Support for structured metadata (JSON) that's visible without TEE decryption would be valuable for display purposes.

### Error Messages
- Some SDK errors are generic and don't indicate the root cause.
- **Suggestion**: More descriptive error messages with suggested fixes.

### Gas Price Estimation on Arbitrum Sepolia
- The SDK uses a fixed `maxFeePerGas` (~20 gwei) that can be lower than the network's `baseFee` during congestion.
- This causes transactions to fail with: `max fee per gas less than block base fee`.
- The SDK doesn't expose gas configuration, so developers can't adjust it.
- **Suggestion**: Allow gas price overrides or implement dynamic gas estimation based on current network conditions.

---

## Feature Requests 💡

1. **Structured Public Metadata**: Allow developers to attach non-sensitive metadata (tags, categories, timestamps) that can be read without TEE access.

2. **Batch Operations**: Support for protecting multiple data items in a single transaction.

3. **Access Grant Notifications**: Webhook or event subscription when access is granted/revoked.

4. **SDK TypeScript Types**: Some types could be more precise (e.g., return types for async operations).

---

## Overall Experience

Building with iExec DataProtector was a positive experience. The core value proposition—privacy-preserving data with selective disclosure—is exactly what DeFi needs for real-world asset integration. The SDK abstracts away the complexity of TEE well, letting us focus on the application layer.

**Rating**: ⭐⭐⭐⭐ (4/5)

The main area for improvement is around developer experience for edge cases and the transition from beta to stable APIs.

---


