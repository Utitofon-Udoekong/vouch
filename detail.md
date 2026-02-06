# Vouch: Privacy-Preserving Yield Verification for DeFi

## The Problem

Real-world asset (RWA) owners—landlords, property managers, and real estate investors—face a critical barrier when trying to access decentralized finance:

**They cannot prove their asset performance to DeFi lenders without exposing sensitive financial data.**

Traditional finance requires rent rolls, bank statements, and tax documents to verify income. But sharing this data on-chain means:

- Loss of privacy (anyone can see your financials)
- Security risks (sensitive data becomes a target)
- No selective disclosure (all or nothing)

This creates a trust gap between off-chain reputation and on-chain capital.

---

## The Solution

**Vouch** bridges this gap using **iExec's Trusted Execution Environment (TEE)** technology.

Instead of exposing raw yield data, Vouch:

1. **Encrypts** your yield data inside a TEE (Intel SGX enclave)
2. **Issues a verifiable badge** proving your yield percentage
3. **Enables selective disclosure** to authorized lenders only
4. **Unlocks DeFi loans** based on verified yield credentials

The result: **Prove your yield without revealing your numbers.**

---

## How It Works

### End-to-End User Flow

[![](https://mermaid.ink/img/pako:eNo9kl9vmzAUxb-KdZ9pBCFA4KFTAzStlE1VN63a5j14-CaxBjZyzdI0yXffjVHhycfnd-4f5BM0RiIUsG3NodkL69jmmWtG390vDqXRGhvHXkTbouPwm93c3LIVObV2aNkPha1klXCCvDG28kjpkcYee8eUZt_qegJKD1QErFGjFQ7ZSsgdTkDlgfrE4SsNhJ84XEajvhpnDk_Dn1Y1bKP0Xw5ndk-lNqglzfNd4eF1KvTB12-9ocUeO3HtcmZrClTmoFsjJHv6sp4C977zA9l3fd8e2dZYtjFCT8B6BEbx4MUj0c_YoPqHrBS9cqIlHALYWSWhcHbAADq0nbhKOF2zHNweO5qloKMUltbg-kKZXuifxnQfMWuG3R6KrWhfSQ29pJ9VKbGzopturd-8NIN2UESxrwHFCd5IZdFsnkRJms_DRRousmUAR7qOolmcptEyi7PlPMny_BLAu28bztI8CeM0ycMwz-N4kQWAUjljP4_PxL-Wy38286f-?type=png)](https://mermaid.live/edit#pako:eNo9kl9vmzAUxb-KdZ9pBCFA4KFTAzStlE1VN63a5j14-CaxBjZyzdI0yXffjVHhycfnd-4f5BM0RiIUsG3NodkL69jmmWtG390vDqXRGhvHXkTbouPwm93c3LIVObV2aNkPha1klXCCvDG28kjpkcYee8eUZt_qegJKD1QErFGjFQ7ZSsgdTkDlgfrE4SsNhJ84XEajvhpnDk_Dn1Y1bKP0Xw5ndk-lNqglzfNd4eF1KvTB12-9ocUeO3HtcmZrClTmoFsjJHv6sp4C977zA9l3fd8e2dZYtjFCT8B6BEbx4MUj0c_YoPqHrBS9cqIlHALYWSWhcHbAADq0nbhKOF2zHNweO5qloKMUltbg-kKZXuifxnQfMWuG3R6KrWhfSQ29pJ9VKbGzopturd-8NIN2UESxrwHFCd5IZdFsnkRJms_DRRousmUAR7qOolmcptEyi7PlPMny_BLAu28bztI8CeM0ycMwz-N4kQWAUjljP4_PxL-Wy38286f-)

### Step 1: Connect & Protect

[![](https://mermaid.ink/img/pako:eNplkt9PwjAQx_-V5hITjUA2xjbWBx6UxSdfRI0xe6ntyRZYO7tOQcL_7m0T0NCHpnf9fO9XuwNpFAKHGj8a1BLnhVhaUWaa0aqEdYUsKqEde6rRnnufTSPzc3eRblCyxzQ9v7pZG7mSuSh0f9fvbfThbNaF4yzVDi0TdY2OaVEiu2bbAteKXfR0hxF-TMNZZY1D6ebCicuObU9XPX7E_ktSLe22omI1W9y9MOp-LT7xXHKqmLOFMxZbtFWiYoqy9IoTNTw18oCusfpQ3C_PhFIW6_pvLyRpR0AJcvPF6kZKAqjtN6GWCANY2kIBd7bBAZRoS9GasGtDZOByLDEDTkcl7CqDTO9JQ-N-NaY8yKxpljnwd7GuyWoqKuXw2kcEtUJ7axrtgPtxFwL4Djat5Y_GoR9GydibRN4kng5gS27fHwVR5E_jIJ6OwzhJ9gP47rJ6oygJvSAKE89LkiCYUDxUBQ3wvv9y3c_b_wCqM85v?type=png)](https://mermaid.live/edit#pako:eNplkt9PwjAQx_-V5hITjUA2xjbWBx6UxSdfRI0xe6ntyRZYO7tOQcL_7m0T0NCHpnf9fO9XuwNpFAKHGj8a1BLnhVhaUWaa0aqEdYUsKqEde6rRnnufTSPzc3eRblCyxzQ9v7pZG7mSuSh0f9fvbfThbNaF4yzVDi0TdY2OaVEiu2bbAteKXfR0hxF-TMNZZY1D6ebCicuObU9XPX7E_ktSLe22omI1W9y9MOp-LT7xXHKqmLOFMxZbtFWiYoqy9IoTNTw18oCusfpQ3C_PhFIW6_pvLyRpR0AJcvPF6kZKAqjtN6GWCANY2kIBd7bBAZRoS9GasGtDZOByLDEDTkcl7CqDTO9JQ-N-NaY8yKxpljnwd7GuyWoqKuXw2kcEtUJ7axrtgPtxFwL4Djat5Y_GoR9GydibRN4kng5gS27fHwVR5E_jIJ6OwzhJ9gP47rJ6oygJvSAKE89LkiCYUDxUBQ3wvv9y3c_b_wCqM85v)

The user provides:

- Asset name (e.g., "Downtown Office Building")
- Annualized yield percentage (e.g., 7.5%)

iExec DataProtector encrypts this data using a Trusted Execution Environment. The raw data is **never visible**—not to Vouch, not to blockchain observers, not even to iExec.

### Step 2: Badge Generation

Each protected dataset becomes a **Yield Badge**—a verifiable credential that displays:

- Asset name
- Verified yield percentage
- Verification date
- Encryption status

The badge proves the yield exists and was verified, without exposing underlying documents.

### Step 3: Sharing & Verification

[![](https://mermaid.ink/img/pako:eNp1U1tvmzAU_ivWedokGkEuEHjo1ASWNk2yKu0qbWMPLpwEawEzA0uzNP99B5N0oVJ58uW7YnsPkYwRPFht5DZKuCrZwyjMGH1F9bRWPE_Yl22Gqlmrv6sfIYx4vEY2VshLjEP4ebbLLi4u2Wgfwj2pIZtjmUiCHP5DRjXkJYSZyH6F8MLGJDiW-Y7dVU8bEbGvy1lL8oS_Sfkaa4JPhOA5lxSWF-xuMXmFYxY3gzcVZrRx3mGsUwak8yhwezLWrVrWvsZ9JtwSIxR_kB1DnGECjZlQ4wVizJZ8y3xe8k-tzpNjh29Y1A2uteLvCgv630HArqIIi6Ile2IsZE24IcKDqgjeDvle4Tdndq0zTinjRPGsPPq1I07bEW_JcV2DG-yHj61001a6GWF9zHbvxbrV9nNCNQfBHlGJlcCCiazuTzwwyE3E4JWqQgNSVCmvp7CvJUIoE0yptkfDmCu6N2F2IE7Os-9SpieaktU6AW_FNwXNqjym--kLTj3S11WlI4xllZXgdS2tAd4ensGzHKvTHVgD2-2afdvsO0MDdrRsWZ2ebVtDp-cMuwPHdQ8G_NW2Zsd2B2bPHrim6bq9Xt8xAGNRSjVv3pV-Xod_ruj6TQ?type=png)](https://mermaid.live/edit#pako:eNp1U1tvmzAU_ivWedokGkEuEHjo1ASWNk2yKu0qbWMPLpwEawEzA0uzNP99B5N0oVJ58uW7YnsPkYwRPFht5DZKuCrZwyjMGH1F9bRWPE_Yl22Gqlmrv6sfIYx4vEY2VshLjEP4ebbLLi4u2Wgfwj2pIZtjmUiCHP5DRjXkJYSZyH6F8MLGJDiW-Y7dVU8bEbGvy1lL8oS_Sfkaa4JPhOA5lxSWF-xuMXmFYxY3gzcVZrRx3mGsUwak8yhwezLWrVrWvsZ9JtwSIxR_kB1DnGECjZlQ4wVizJZ8y3xe8k-tzpNjh29Y1A2uteLvCgv630HArqIIi6Ile2IsZE24IcKDqgjeDvle4Tdndq0zTinjRPGsPPq1I07bEW_JcV2DG-yHj61001a6GWF9zHbvxbrV9nNCNQfBHlGJlcCCiazuTzwwyE3E4JWqQgNSVCmvp7CvJUIoE0yptkfDmCu6N2F2IE7Os-9SpieaktU6AW_FNwXNqjym--kLTj3S11WlI4xllZXgdS2tAd4ensGzHKvTHVgD2-2afdvsO0MDdrRsWZ2ebVtDp-cMuwPHdQ8G_NW2Zsd2B2bPHrim6bq9Xt8xAGNRSjVv3pV-Xod_ruj6TQ)

Badges can be shared via:

- **Public verification link** (`/badge/[address]`) - Anyone can view
- **Exported image** - Download for pitch decks and reports

Lenders who need to verify the raw data can **request access**, which the owner can grant through iExec's access control system.

### Step 4: DeFi Integration

[![](https://mermaid.ink/img/pako:eNpNkU1vgzAMhv9K5Gk3WgUoXzlMotCe2ss09bCxQ0oSihYICqC1q_rfF9K1aw5O7Pd5Y8k-Q6kYBwJCqu_yQPWANq9Fi8xJPwrYcV2LmjO0pKzifQGfaDZ7QUsjZVSWo6QDR5mS062pNPrVu7RYZrAIP6PN2-6uZFbJjbKlR7RRtEVpo8Z2uBO5JVaGSLtOnpBQ2nJ3YGWBtQHyut-PuucNf_BfYz-cJEcpErWU5MnzyiDgTqmk0uQJY_wIrf8gfx97IrxBQghwoNI1AzLokTvQcN3QKYXzZC9gOJjOBRDzZFR_FVC0F-PpaPuuVHOzaTVWByCCyt5kY8fMrPKaVpr-I7xlXGfTGIB4gf0CyBmOQNzInXuBG4SJhxchXkSxAydTdt25H4ZuHPlR7AVRklwc-LFd8TxMAuyHQYJxkvj-InKAs3pQentdtd345ReihpZe?type=png)](https://mermaid.live/edit#pako:eNpNkU1vgzAMhv9K5Gk3WgUoXzlMotCe2ss09bCxQ0oSihYICqC1q_rfF9K1aw5O7Pd5Y8k-Q6kYBwJCqu_yQPWANq9Fi8xJPwrYcV2LmjO0pKzifQGfaDZ7QUsjZVSWo6QDR5mS062pNPrVu7RYZrAIP6PN2-6uZFbJjbKlR7RRtEVpo8Z2uBO5JVaGSLtOnpBQ2nJ3YGWBtQHyut-PuucNf_BfYz-cJEcpErWU5MnzyiDgTqmk0uQJY_wIrf8gfx97IrxBQghwoNI1AzLokTvQcN3QKYXzZC9gOJjOBRDzZFR_FVC0F-PpaPuuVHOzaTVWByCCyt5kY8fMrPKaVpr-I7xlXGfTGIB4gf0CyBmOQNzInXuBG4SJhxchXkSxAydTdt25H4ZuHPlR7AVRklwc-LFd8TxMAuyHQYJxkvj-InKAs3pQentdtd345ReihpZe)

The platform calculates loan eligibility based on:

- Number of verified badges
- Total collateral value
- Average yield percentage

Higher yields = better loan terms. All verification happens without exposing sensitive data.

---

## Technical Architecture

[![](https://mermaid.ink/img/pako:eNp1lF2PmkAUhv_KZPamTVnLh4Bw0dRVd2O2bcziZpuWXoxw0KnAkGGsWuN_7-FjXWkUE5nzzvMOM-ccONBIxEB9mqRiG62YVGR-F-YEr3KzWEpWrMi9FLmCPP4Z0tch-cL2IEP6q0Gr63mK899gp3q_S_KBPAGLFN7njKdbnscd9oWlKSjkn0BsczIsikdewS9smXHyxzrB-Khm8N-WgvEjuvlkB1E1vrCd8QyBzxyQ-BgzxQopFERKdKlZoyLazo8Rffe-w9yDilZILEG1OMQXsAfJ8mqhZXUfRhGU5Rlx7SB3qYjWmHeeo_UtuHCgoVwggv9cyU1GAihEylkHmU8miEyxQikJHr5XcWc-GOF0kFVFHmEdJVaovLbD5ym5vf3UVqqRmnEtj2eNNJ7VYZuXjlanraPUGWqU1lDL1S7zU6JrCU_ZSLWlloJRoyDdRYJRN24TrPYpnDqXJDxN_RtjgL-FViop1uDfWIuBmThaJFIh_ZskSc6tVVdddJlmZNtwxXVWwYvmxPZAX3TMVMOW4TH1sayg0QxkxqqQHqqFQ6pWkEFIfRzGTK5DGuZH9BQs_yFE9mqTYrNcUT9haYnRpsCWhzFn2GRvCCYC5EhsckV906uXoP6B7qhvuEbPtA3b8Uy97-h9d6DRPcqG0bMcxxi4ljswbdfzjhr9Wz9V7zmerVuO7em651lW39UoxBzfr6_N96T-rBz_AVjOT4Y?type=png)](https://mermaid.live/edit#pako:eNp1lF2PmkAUhv_KZPamTVnLh4Bw0dRVd2O2bcziZpuWXoxw0KnAkGGsWuN_7-FjXWkUE5nzzvMOM-ccONBIxEB9mqRiG62YVGR-F-YEr3KzWEpWrMi9FLmCPP4Z0tch-cL2IEP6q0Gr63mK899gp3q_S_KBPAGLFN7njKdbnscd9oWlKSjkn0BsczIsikdewS9smXHyxzrB-Khm8N-WgvEjuvlkB1E1vrCd8QyBzxyQ-BgzxQopFERKdKlZoyLazo8Rffe-w9yDilZILEG1OMQXsAfJ8mqhZXUfRhGU5Rlx7SB3qYjWmHeeo_UtuHCgoVwggv9cyU1GAihEylkHmU8miEyxQikJHr5XcWc-GOF0kFVFHmEdJVaovLbD5ym5vf3UVqqRmnEtj2eNNJ7VYZuXjlanraPUGWqU1lDL1S7zU6JrCU_ZSLWlloJRoyDdRYJRN24TrPYpnDqXJDxN_RtjgL-FViop1uDfWIuBmThaJFIh_ZskSc6tVVdddJlmZNtwxXVWwYvmxPZAX3TMVMOW4TH1sayg0QxkxqqQHqqFQ6pWkEFIfRzGTK5DGuZH9BQs_yFE9mqTYrNcUT9haYnRpsCWhzFn2GRvCCYC5EhsckV906uXoP6B7qhvuEbPtA3b8Uy97-h9d6DRPcqG0bMcxxi4ljswbdfzjhr9Wz9V7zmerVuO7em651lW39UoxBzfr6_N96T-rBz_AVjOT4Y)

### Component Interaction

[![](https://mermaid.ink/img/pako:eNqFklFvgjAUhf8Kuc9IQASEhyUKJnuAhCzZgxt7qPQKRGhJKZnO-N9XZEadWdane3q_np7b9Ag5pwgBbGv-mZdESC1-yZimVtdvCkHaUgt503KGTHZjY1hp9J5BKrjEXEZEEkN2-ww-rsB6qYB1hTVdElrgQz9eqX7MCVvVVVFtqrqShwdokShokefYdQlhpEBxhyCjY_Er8DPnu5usr1GqbPoOh6A_mbn41yXkTOJe3s4cXodGOrhdmD-80kibTJ6GAKNeL89aGY06Xt3rRXLPq-ICgA6FqCgEUvSoQ4OiIYOE44BmIEtsMINAlZSIXQYZO6kzLWFvnDeXY4L3RQnBltSdUn1LicSoImrgK6JmQBHynkkIbPtsAcER9hBYnmVMHctx_ak5c82ZN9fhoLYty7Bd15p7tjefOp7vn3T4Ot9qGq7vmLbr-Kbp-7Y983RAWqnnT8Zvd_59p29yDr7k?type=png)](https://mermaid.live/edit#pako:eNqFklFvgjAUhf8Kuc9IQASEhyUKJnuAhCzZgxt7qPQKRGhJKZnO-N9XZEadWdane3q_np7b9Ag5pwgBbGv-mZdESC1-yZimVtdvCkHaUgt503KGTHZjY1hp9J5BKrjEXEZEEkN2-ww-rsB6qYB1hTVdElrgQz9eqX7MCVvVVVFtqrqShwdokShokefYdQlhpEBxhyCjY_Er8DPnu5usr1GqbPoOh6A_mbn41yXkTOJe3s4cXodGOrhdmD-80kibTJ6GAKNeL89aGY06Xt3rRXLPq-ICgA6FqCgEUvSoQ4OiIYOE44BmIEtsMINAlZSIXQYZO6kzLWFvnDeXY4L3RQnBltSdUn1LicSoImrgK6JmQBHynkkIbPtsAcER9hBYnmVMHctx_ak5c82ZN9fhoLYty7Bd15p7tjefOp7vn3T4Ot9qGq7vmLbr-Kbp-7Y983RAWqnnT8Zvd_59p29yDr7k)

---

## Features

### Core Features

| Feature | Description |

|---------|-------------|

| **Data Protection** | Encrypt yield data using iExec TEE |

| **Yield Badges** | Visual credentials proving verified yield |

| **Access Control** | Grant/revoke lender verification access |

| **Public Sharing** | Shareable verification links |

| **Image Export** | Download badges as PNG images |

| **DeFi Loans** | Loan eligibility based on verified yields |

### User Experience

| Feature | Description |

|---------|-------------|

| **Dark Industrial UI** | Premium neobrutalist design aesthetic |

| **Mobile Responsive** | Full functionality on all devices |

| **Real-time Updates** | Instant feedback on protection status |

| **Toast Notifications** | Clear success/error messaging |

---

## Tech Stack

| Layer | Technology | Purpose |

|-------|------------|---------|

| **Framework** | Next.js 16 | React server components, routing |

| **Styling** | Tailwind CSS v4 | Utility-first styling |

| **Wallet** | Reown AppKit | Multi-wallet connection |

| **Hooks** | Wagmi v3 | Ethereum state management |

| **Privacy** | iExec DataProtector | TEE encryption & access control |

| **Chain** | Arbitrum Sepolia | L2 testnet deployment |

---

## Use Cases

### For Real Estate Owners

- Prove rental yield to DeFi protocols without sharing bank statements
- Create portable, verifiable credentials for your assets
- Access on-chain capital without traditional underwriting

### For DeFi Lenders

- Verify borrower yield claims cryptographically
- Reduce default risk with TEE-verified data
- Offer better rates to verified high-yield borrowers

### For RWA Protocols

- Integrate Vouch badges as a reputation primitive
- Build lending pools with verified yield requirements
- Create composable credential systems

---

## Privacy Guarantees

[![](https://mermaid.ink/img/pako:eNqNU9tu2kAQ_ZXRRlVfANkY27EfIgE2hIemVYNS2roPG3sMVhYvWq8hFPiD_kJ_rl_SsR2aWFUv87Rnz5kzszPaA4tlgsxnqZC7eMWVhvkoyoGiKO-Xim9WELEPK65fF_BOSY2xxiRijaSK4eeIvec7-JihSCDgmkfsyzM9InrE8we41VzjGnNdtPgx8XP-CIGMyzaLedIcfmtnHoYQ5rHgW3zZSUBWs1yjgNvpolUkJIYS1H6jM5m3qAlRwzjGooCxzLWS4j8aeJrHXVZk96LVw5Tsmkm8apW5rsoUBWq44WtsUTOi7lBlaYb1_PBPDQyh272CoAEj6Pa6V8eI3eAWFZQbIXlSbeYICzL88f3bL5vxX6SNIqidwwaENZg0YFIBSn27yymV3l9v6AjTNj0UO74vYHseyBGu_yWYtWar9wJhAWkmhH-B6YCiE0shlX-RpulLUfAk6vdj28azyDAM1mFLlSXM16rEDlujWvMKskOVHjG9wmryPh0Trh6qrZ0oZ8PzT1Kuz2lKlssV81MuCkLlJqGFBBmnlz9LaC-oxrLMNfMtt7Zg_oE9Mt90zV7fNm3H6xsDxxi4lx22p2vT7FmOY166lnvZt13PO3XY17qq0XM827Ac2zMMz7OsAflhkmmp3jQfs_6fp58M2xLB?type=png)](https://mermaid.live/edit#pako:eNqNU9tu2kAQ_ZXRRlVfANkY27EfIgE2hIemVYNS2roPG3sMVhYvWq8hFPiD_kJ_rl_SsR2aWFUv87Rnz5kzszPaA4tlgsxnqZC7eMWVhvkoyoGiKO-Xim9WELEPK65fF_BOSY2xxiRijaSK4eeIvec7-JihSCDgmkfsyzM9InrE8we41VzjGnNdtPgx8XP-CIGMyzaLedIcfmtnHoYQ5rHgW3zZSUBWs1yjgNvpolUkJIYS1H6jM5m3qAlRwzjGooCxzLWS4j8aeJrHXVZk96LVw5Tsmkm8apW5rsoUBWq44WtsUTOi7lBlaYb1_PBPDQyh272CoAEj6Pa6V8eI3eAWFZQbIXlSbeYICzL88f3bL5vxX6SNIqidwwaENZg0YFIBSn27yymV3l9v6AjTNj0UO74vYHseyBGu_yWYtWar9wJhAWkmhH-B6YCiE0shlX-RpulLUfAk6vdj28azyDAM1mFLlSXM16rEDlujWvMKskOVHjG9wmryPh0Trh6qrZ0oZ8PzT1Kuz2lKlssV81MuCkLlJqGFBBmnlz9LaC-oxrLMNfMtt7Zg_oE9Mt90zV7fNm3H6xsDxxi4lx22p2vT7FmOY166lnvZt13PO3XY17qq0XM827Ac2zMMz7OsAflhkmmp3jQfs_6fp58M2xLB)

| What's Protected | How |

|-----------------|-----|

| Raw yield data | Encrypted in Intel SGX TEE |

| Financial documents | Never uploaded, only yield % stored |

| Verification access | Owner-controlled via smart contract |

| Badge viewing | Public badge shows yield, not source data |

The owner maintains **full control** over who can access the underlying data. Even Vouch cannot see the raw numbers—only the TEE can decrypt them.

---

## Current Limitations

1. **Lending is Simulated**: The loan interface is a UI prototype; no actual lending pool is deployed.
2. **Collateral is Mocked**: Badge collateral values are hardcoded at $25,000 for demo purposes.
3. **Beta SDK**: Using `@iexec/dataprotector` v2.0.0-beta.23, which may have breaking changes.
4. **Gas Price Issues**: SDK gas estimation can fail on Arbitrum Sepolia during network congestion.

---

## Future Roadmap

[![](https://mermaid.ink/img/pako:eNptkk1r3DAQhv-KmFML3kXyt31LHQI5mJocFlp8Ue3ZtYitWWQ5JF32v1frD0LKzmk0mvd5JY0u0FCLkMNJamtrzVxYZXtkB5qajj3iG_Z0HlBb9kKyHeR5aWqlxScyg7SM_XKxK8tlY8TGKtKs6uSITCzFggyy8lCxb8VkjIN9Z5-Rt6TRYz734x0XW-Lfw63FF5S9O9qTYs_a4snIuWXDrfoNFC6ayqgG2U8jG3e5_2WrJtg00T3zYCmWU2_V7mEc0bKKjD1Sr2j8ah5toGTR_JD6lT1Uz-yARh1Vc-_A8aZJ75mvtygMjeOu6KTSs7n8o3plP76A0hUkOHhwMqqF3JoJPRjQzeu2hMuNVoPtcMAacpe20rzWUOur05yl_k00bDJD06mD_Cj70a2m8230j0q69_tsQd2iKWjSFvJQzAjIL_AOuUjE3o9EFGc-D2MeJqkHH64sxD6IY5EmQZL6UZJlVw_-zq58H2cRD-Io4zzLgiBMPMBWWTLl8lfnL3v9Bx5qyAg?type=png)](https://mermaid.live/edit#pako:eNptkk1r3DAQhv-KmFML3kXyt31LHQI5mJocFlp8Ue3ZtYitWWQ5JF32v1frD0LKzmk0mvd5JY0u0FCLkMNJamtrzVxYZXtkB5qajj3iG_Z0HlBb9kKyHeR5aWqlxScyg7SM_XKxK8tlY8TGKtKs6uSITCzFggyy8lCxb8VkjIN9Z5-Rt6TRYz734x0XW-Lfw63FF5S9O9qTYs_a4snIuWXDrfoNFC6ayqgG2U8jG3e5_2WrJtg00T3zYCmWU2_V7mEc0bKKjD1Sr2j8ah5toGTR_JD6lT1Uz-yARh1Vc-_A8aZJ75mvtygMjeOu6KTSs7n8o3plP76A0hUkOHhwMqqF3JoJPRjQzeu2hMuNVoPtcMAacpe20rzWUOur05yl_k00bDJD06mD_Cj70a2m8230j0q69_tsQd2iKWjSFvJQzAjIL_AOuUjE3o9EFGc-D2MeJqkHH64sxD6IY5EmQZL6UZJlVw_-zq58H2cRD-Io4zzLgiBMPMBWWTLl8lfnL3v9Bx5qyAg)

- [ ] Integrate real DeFi lending pools (Aave, Compound)
- [ ] Add price oracle for dynamic collateral values
- [ ] Support for multi-asset badges (property portfolios)
- [ ] TEE-based yield verification from bank APIs
- [ ] Cross-chain badge portability

---

## Evaluation Criteria

### ⭐ Technical Implementation: iExec Privacy Tools

| Integration Point | How We Use It |

|-------------------|---------------|

| **DataProtector SDK** | Core of our encryption flow—`protectData()` encrypts yield in TEE |

| **getProtectedData()** | Fetches user's encrypted datasets for badge display |

| **grantAccess()** | Enables selective lender verification without exposing data |

| **TEE Verification App** | Custom iApp deployed to verify yield data in Intel SGX enclave |

| **Arbitrum Sepolia** | Deployed on iExec's recommended L2 testnet (chainId: 421614) |

**Custom iExec TEE App Deployed:**

- **App Address**: `0xfD51F98bBe46d2f69Fc246243627f3C0077A94F0`
- **Docker Image**: `utsam/vouch-verifier:1.0.0-tee-scone-5.9.1-v16-prod`
- **Chain**: Bellecour (iExec Sidechain)
- **Source**: `vouch-verifier/src/app.js`

**Key Privacy Features Leveraged:**

- Yield data encrypted in Intel SGX TEE—never visible on-chain or to Vouch
- Owner-controlled access grants via smart contract
- Public badges show yield % without revealing source documents
- TEE abstraction hides complexity from end users
- Custom verification app processes protected data securely

---

### ⭐ Real World Use Case: DeFi Problem Solved

**The Problem:**

> Real estate owners cannot prove asset yield to DeFi lenders without exposing sensitive financial data (rent rolls, bank statements, tax documents).

**Why This Matters:**

- $300T+ in global real estate is largely illiquid
- DeFi lending requires on-chain proof, but privacy is lost
- Traditional underwriting is slow, expensive, and excludes small holders

**Our Solution:**

- Privacy-preserving yield verification using TEE
- Verifiable badges as portable reputation credentials
- Selective disclosure: prove yield without revealing raw numbers
- DeFi integration: badges → collateral → loans

**Real users who benefit:**

- Landlords seeking capital without bank paperwork
- Property managers needing quick liquidity
- RWA protocols requiring verified yield data

---

**User Flow:**

```javascript

Connect Wallet → Protect Data → View Badge → Share/Export → Apply for Loan

     ↓              ↓             ↓            ↓              ↓

   1 click      2 fields       Automatic    1 click       Select & Submit

```

Every step is designed to minimize friction and maximize clarity.

---

## Summary

Vouch demonstrates how **privacy-preserving technology** can unlock **new financial primitives** for real-world assets. By encrypting sensitive yield data in a TEE and issuing verifiable badges, we enable:

> **Off-chain reputation → On-chain capital**

Without compromising privacy.