### Get Started with iExec

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/index.md

Provides a quick start guide to begin building on iExec. The 'Hello World' tutorial offers a hands-on introduction to the platform's capabilities.

```markdown
layout: home

hero:
  name: 'Build with iExec’s Privacy Stack '
  tagline:
    'Build decentralized applications that combine data governance, privacy, and
    monetization.'
  image:
    src: /iexec-illustration-large.webp
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /get-started/welcome
    - theme: alt
      text: Hello World Tutorial
      link: /get-started/helloWorld
```

--------------------------------

### Install iExec SDK CLI

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/quick-start.md

Installs the iExec SDK command-line interface globally using npm. It also shows how to check the installed version and access help documentation.

```bash
npm -g install iexec
iexec --version
iexec --help
```

--------------------------------

### Instantiate Web3Telegram SDK in NodeJS

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/getting-started.md

Instantiates the Web3Telegram SDK in a NodeJS environment using a private key to get a web3 provider. Ensure your project is compatible with ESM.

```ts
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

// get web3 provider from a private key
const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY');
// instantiate
const web3telegram = new IExecWeb3telegram(web3Provider);
```

--------------------------------

### Install Web3Telegram SDK via Package Managers

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/getting-started.md

Installs the Web3Telegram SDK using popular package managers. This package is an ESM package and requires your project to also use ESM.

```sh
npm install @iexec/web3telegram
```

```sh
yarn add @iexec/web3telegram
```

```sh
pnpm add @iexec/web3telegram
```

```sh
bun add @iexec/web3telegram
```

--------------------------------

### Install @iexec/web3mail SDK

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/getting-started.md

Installs the iExec Web3Mail SDK using various package managers. This package is an ESM package, requiring your project to also use ESM.

```sh
npm install @iexec/web3mail
```

```sh
yarn add @iexec/web3mail
```

```sh
pnpm add @iexec/web3mail
```

```sh
bun add @iexec/web3mail
```

--------------------------------

### Instantiate Web3Telegram SDK in Browser

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/getting-started.md

Instantiates the Web3Telegram SDK in a browser environment using the window.ethereum object. Ensure your project is compatible with ESM.

```ts
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---
import { IExecWeb3telegram } from '@iexec/web3telegram';

const web3Provider = window.ethereum;
// instantiate
const web3telegram = new IExecWeb3telegram(web3Provider);
```

--------------------------------

### Clone Repository and Setup

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/README.md

Basic Git commands for forking the repository, cloning the fork, and installing dependencies to begin contributing.

```bash
# Fork this repository
# Clone your fork and install dependencies (`npm install`)
git clone <your-fork-url>
cd documentation
npm install

# Create a feature branch (`git checkout -b feature/your-feature-name`)
git checkout -b feature/my-new-feature

# Make your changes and test locally (`npm run dev`)
# Submit a pull request
```

--------------------------------

### Combined Component Usage Example

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

An example showcasing the combined usage of `Banner`, VitePress native containers (`info`), `CardWithBorder`, `CardWithoutBorder`, and `tip` containers to structure documentation content effectively.

```markdown
<Banner>

## Installation Guide

</Banner>

::: info Prerequisites Make sure you have Node.js installed before continuing.
:::

<CardWithBorder>

### Step 1: Installation

```bash npm install 
```

</CardWithBorder>

<CardWithoutBorder>

### Step 2: Configuration

Create your .env file based on .env.example.

</CardWithoutBorder>

::: tip Success! Your installation is now complete! :::
```

--------------------------------

### Instantiate SDK with Umbrella Module (Browser)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/getting-started.md

Instantiates the iExec DataProtector SDK using the umbrella module in a browser environment. This provides access to both core and sharing functionalities. It requires the `window.ethereum` object.

```typescript
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecDataProtector } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate using the umbrella module for full functionality
const dataProtector = new IExecDataProtector(web3Provider);

const dataProtectorCore = dataProtector.core;
const dataProtectorSharing = dataProtector.sharing;
```

--------------------------------

### Instantiate IExecWeb3mail with a Web3 Provider

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/getting-started.md

Demonstrates how to instantiate the IExecWeb3mail SDK using a Web3 provider. Supports both browser environments (using window.ethereum) and NodeJS environments (using a private key).

```ts
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---
import { IExecWeb3mail } from '@iexec/web3mail';

const web3Provider = window.ethereum;
// instantiate
const web3mail = new IExecWeb3mail(web3Provider);
```

```ts
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

// get web3 provider from a private key
const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY');
// instantiate
const web3mail = new IExecWeb3mail(web3Provider);
```

--------------------------------

### Verify iExec CLI Installation

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/3-buildIApp.md

Check the installed version of the iExec CLI and view the available commands. This helps ensure the 'iapp' package was installed correctly and is ready for use.

```shell
#checking the version
iapp --version

#checking the available commands
iapp --help
```

--------------------------------

### Instantiate Core Module Only (Browser)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/getting-started.md

Instantiates only the Core module of the iExec DataProtector SDK in a browser environment, for projects focusing solely on core data protection functions. It requires the `window.ethereum` object.

```typescript
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate only the Core module
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
```

--------------------------------

### Instantiate Sharing Module Only (Browser)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/getting-started.md

Instantiates only the Sharing module of the iExec DataProtector SDK in a browser environment, for projects that need access management functions specifically. It requires the `window.ethereum` object.

```typescript
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecDataProtectorSharing } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate only the Sharing module
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
```

--------------------------------

### Generate iApp CLI Completion

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/getting-started.md

Generates shell auto-completion scripts for the `iapp` command-line interface. This enhances user experience by providing command suggestions and reducing typing errors.

```bash
iapp completion
```

--------------------------------

### Instantiate SDK with Umbrella Module (NodeJS)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/getting-started.md

Instantiates the iExec DataProtector SDK using the umbrella module in a NodeJS environment. This provides access to both core and sharing functionalities. It requires a Web3 provider, obtained here using a private key.

```typescript
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

// Get Web3 provider from a private key
const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY');

// Instantiate using the umbrella module for full functionality
const dataProtector = new IExecDataProtector(web3Provider);

const dataProtectorCore = dataProtector.core; // access to core methods
const dataProtectorSharing = dataProtector.sharing; // access to methods
```

--------------------------------

### Start Development Server

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/README.md

Command to start the local development server for the project.

```bash
npm run dev
```

--------------------------------

### Instantiate Sharing Module Only (NodeJS)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/getting-started.md

Instantiates only the Sharing module of the iExec DataProtector SDK in a NodeJS environment, for projects that need access management functions specifically. It requires a Web3 provider, obtained here using a private key.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

// Get Web3 provider from a private key
const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY');

// Instantiate only the Sharing module
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
```

--------------------------------

### Install Project Dependencies

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/README.md

Command to install all necessary project dependencies using npm.

```bash
npm install
```

--------------------------------

### Instantiate Singleton Modules Without Provider

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/getting-started.md

Instantiate the iExec DataProtector SDK's core and sharing modules individually for read-only operations. This method is suitable when only specific read functions are needed and no Web3 provider is available.

```typescript
import {
  IExecDataProtectorSharing,
  IExecDataProtectorCore,
} from '@iexec/dataprotector';

// Instantiate only the Core module for read-only core methods
const dataProtectorCore = new IExecDataProtectorCore();
// Instantiate only the Sharing module for read-only sharing methods
const dataProtectorSharing = new IExecDataProtectorSharing();
```

--------------------------------

### Instantiate Core Module Only (NodeJS)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/getting-started.md

Instantiates only the Core module of the iExec DataProtector SDK in a NodeJS environment, for projects focusing solely on core data protection functions. It requires a Web3 provider, obtained here using a private key.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

// Get Web3 provider from a private key
const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY');

// Instantiate only the Core module
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
```

--------------------------------

### Vue.js Setup for iExec Documentation

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/3-buildIApp.md

This script setup block configures a Vue.js application for iExec documentation. It imports necessary components like InfoIcon, CLIDemo, Banner, and Container, and sets up stores and computed properties for managing chain selection and deployment steps.

```vue
<script setup>
import InfoIcon from '@/components/InfoIcon.vue'
import CLIDemo from '@/components/CLIDemo.vue';
import { computed } from 'vue';
import useUserStore from '@/stores/useUser.store';
import Banner from '../../components/Banner.vue'
import Container from '../../components/Container.vue'

const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const arbitrumSteps = [
  {
    showAt: 2,
    question: 'Using chain arbitrum-mainnet',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 3,
    question: 'This method requires sending blockchain transactions, transaction fees will be applied. Would you like to continue?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    showTyping: false,
    isComplete: false
  },
  {
    showAt: 4,
    question: 'Using saved walletPrivateKey (from iapp.config.json)',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 5,
    completeAt: 7,
    question: 'What is your username on DockerHub? (It will be used to properly tag the Docker image)',
    answer: 'bob',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 7,
    completeAt: 9,
    question: 'What is your DockerHub access token?',
    answer: '**********************',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 9,
    completeAt: 11,
    question: 'What is the version of your iApp?',
    answer: '0.0.1',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 11,
    question: 'Docker image built (sha256:a53fc4c480f482c384a13266ea2cb6cc5572733c866c44a5f604f4bfab3a744a) and tagged bob/hello-world:0.0.1',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 12,
    question: 'Pushed image bob/hello-world:0.0.1 on dockerhub',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 13,
    question: 'Pushed TEE image bob/hello-world:0.0.1-tee-scone-5.9.1-v16-ce3a01d9c5d7 on dockerhub',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 14,
    question: 'TEE app deployed',
    answer: '',
    showTyping: false,
    isComplete: true
  }
];

const bellecourSteps = [
  {
    showAt: 2,
    question: 'Using chain bellecour',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 3,
    question: 'Using saved walletPrivateKey (from iapp.config.json)',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 4,
    completeAt: 6,
    question: 'What is your username on DockerHub? (It will be used to properly tag the Docker image)',
    answer: 'bob',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 6,
    completeAt: 8,
    question: 'What is your DockerHub access token?',
    answer: '**********************',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 8,
    completeAt: 10,
    question: 'What is the version of your iApp?',
    answer: '0.0.1',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 10,
    question: 'Docker image built (sha256:a53fc4c480f482c384a13266ea2cb6cc5572733c866c44a5f604f4bfab3a744a) and tagged bob/hello-world:0.0.1',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 11,
    question: 'Pushed image bob/hello-world:0.0.1 on dockerhub',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 12,
    question: 'Pushed TEE image bob/hello-world:0.0.1-tee-scone-5.9.1-v16-ce3a01d9c5d7 on dockerhub',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 13,
    question: 'TEE app deployed',
    answer: '',
    showTyping: false,
    isComplete: true
  }
];

const arbitrumCompletionItems = [
  '└ Docker image: bob/hello-world:0.0.1-tee-scone-5.9.1-v16-ce3a01d9c5d7',
  '└ iApp address: 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923'
];

const bellecourCompletionItems = [
  '└ Docker image: bob/hello-world:0.0.1-tee-scone-5.9.1-v16-ce3a01d9c5d7',
  '└ iApp address: 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923'
];
</script>
```

--------------------------------

### Vue Setup Imports

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld.md

This script block imports necessary components from '@iconify/vue' and local paths for building the iExec DApp tutorial interface. It sets up the foundational elements for the user interface.

```javascript
import { Icon } from '@iconify/vue';
import InfoIcon from '@/components/InfoIcon.vue'
import Banner from '../components/Banner.vue'
import Container from '../components/Container.vue'
import CardWithBorder from '../components/CardWithBorder.vue'
import CardGrid from '../components/CardGrid.vue'
import Badge from '../components/Badge.vue'
import TutorialCard from '../components/TutorialCard.vue'
```

--------------------------------

### Instantiate Umbrella Module Without Provider

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/getting-started.md

Instantiate the iExec DataProtector SDK using the umbrella module for all read-only functions. This approach provides access to both core and sharing methods through a single instance when no Web3 provider is available.

```typescript
import { IExecDataProtector } from '@iexec/dataprotector';

// Instantiate using the umbrella module for read-only functions
const dataProtector = new IExecDataProtector();

// Access to read-only core methods
const dataProtectorCore = dataProtector.core;
// Access to read-only sharing methods
const dataProtectorSharing = dataProtector.sharing;
```

--------------------------------

### Install iExec CLI (npm, yarn, pnpm, bun)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/3-buildIApp.md

Install the iExec 'iapp' package globally using different package managers. This command-line tool is essential for building, testing, and deploying iExec applications.

```npm
npm i -g @iexec/iapp
```

```yarn
yarn global add @iexec/iapp
```

```pnpm
pnpm add -g @iexec/iapp
```

```bun
bun add -g @iexec/iapp
```

--------------------------------

### iExec Features Overview

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/index.md

Outlines the core features of the iExec platform, including a quick start guide, data protection with DataProtector, iApp generation, and decentralized task execution using iExec Workers.

```markdown
features:
  - icon:
      <svg class="_stroke" width="36" height="36" viewBox="0 0 36 36"
      fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.81
      29.1774H8.8733C7.84604 29.1774 6.86085 28.7694 6.13446 28.043C5.40808
      27.3166 5 26.3314 5 25.3041V7.87428C5 6.84702 5.40808 5.86183 6.13446
      5.13544C6.86085 4.40906 7.84604 4.00098 8.8733 4.00098H26.3032C27.3304
      4.00098 28.3156 4.40906 29.042 5.13544C29.7684 5.86183 30.1765 6.84702
      30.1765 7.87428V9.81093" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round"/> <path d="M22.5187 8.82727L10.9795
      22.6743H21.3648L20.2109 31.9057L31.7501 18.0586H21.3648L22.5187 8.82727Z"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>
    title: Quick Start
    details: Jump in and start building on iExec in minutes.
    link: /get-started/helloWorld
  - icon:
      <svg class="_stroke" width="38" height="36" viewBox="0 0 38 36"
      fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.16675
      10.5C5.16675 7.18629 7.85304 4.5 11.1667 4.5H26.1667C29.4805 4.5 32.1667
      7.18629 32.1667 10.5V25.5C32.1667 28.8137 29.4805 31.5 26.1667
      31.5H11.1667C7.85304 31.5 5.16675 28.8137 5.16675 25.5V10.5Z"
      stroke-width="2"/> <path d="M11.6667 12L11.6667 24" stroke-width="2"
      stroke-linecap="round"/> <path d="M15.6667 16.5L15.6667 24" stroke-width="2"
      stroke-linecap="round"/> <path d="M19.6667 25C19.6667
      21.6863 22.353 19 25.6667 19C28.9805 19 31.6667 21.6863 31.6667 25C31.6667
      28.3137 28.9805 31 25.6667 31C22.353 31 19.6667 28.3137 19.6667 25Z"
      stroke-width="2"/> <path d="M28.6667 20V16C28.6667 14.3431 27.3236 13
      25.6667 13C24.0099 13 22.6667 14.3431 22.6667 16V20" stroke-width="2"/>
      <path d="M25.6667 23.9996V25.9996" stroke-width="2"
      stroke-linecap="round"/> </svg>
    title: Protect & Manage Data
    details:
      DataProtector encrypts and allows you to control access to your sensitive
      data. Ready-to-use privacy toolkit for developers.
    link: /guides/manage-data/manage-access
  - icon:
      <svg class="_stroke" width="37" height="36" viewBox="0 0 37 36"
      fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.8335 9C7.8335
      6.51472 9.84821 4.5 12.3335 4.5H20.0909C20.8865 4.5 21.6496 4.81607
      22.2122 5.37868L27.9548 11.1213C28.5174 11.6839 28.8335 12.447 28.8335
      13.2426V27C28.8335 29.4853 26.8188 31.5 24.3335 31.5H12.3335C9.84822 31.5
      7.8335 29.4853 7.8335 27V9Z" stroke-width="2"/> <path d="M19.8335
      4V7C19.8335 10.3137 22.5198 13 25.8335 13H28.8335" stroke-width="2"/>
      <path d="M16.2282 17.6052L12.8335 21L16.2282 24.3947" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"/> <path d="M20.2283
      24.3947L23.623 21L20.2283 17.6052" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"/> </svg>
    title: Build iApp
    details:
      iApp Generator builds confidential applications that run in secure TEEs.
      Custom confidentiality integration without managing infrastructure.
    link: /guides/build-iapp/build-&-test
  - icon:
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
      xmlns="http://www.w3.org/2000/svg"> <path class="_stroke" d="M30.4659
      27.7988H22.9899L20.4979 30.3488H15.5139L13.0219 27.7988H5.5459"
      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path
      class="_stroke" d="M7.24329 24.6963L5.00049 27.633V32.7477C5.00049 33.1998
      5.27445 33.6335 5.76211 33.9532C6.24977 34.2729 6.91118 34.4526 7.60084
      34.4526H28.4037C29.0933 34.4526 29.7547 34.2729 30.2424 33.9532C30.73
      33.6335 31.004 33.1998 31.004 32.7477V27.633L28.7612 24.6963"
      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path
      class="_fill" d="M30.5286 13.7324C31.0053 13.7324 31.3918 13.3548 31.3918
      12.8892C31.3918 12.4234 31.0053 12.0459 30.5286
      12.0459H28.9253V8.914H30.5286C31.0053 8.914 31.3918 8.53644 31.3918
      8.07078C31.3918 7.60505 31.0053 7.22757 30.5286
      7.22757H28.9253V5.17976C28.9253 3.65209 27.6528 2.40919 26.0888
      2.40919H23.9922V0.843216C23.9922 0.37752 23.6056 0 23.1289 0C22.6521 0
      22.2656 0.37752 22.2656 0.843216V2.40919H19.0591V0.843216C19.0591 0.37752
      18.6726 0 18.1958 0C17.7191 0 17.3325 0.37752 17.3325
      0.843216V2.40919H14.126V0.843216C14.126 0.37752 13.7395 0 13.2627 0C12.786
```

--------------------------------

### Project File Structure

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

Illustrates the typical directory structure for the iExec documentation project, outlining the purpose of key directories like 'components', 'guides', and 'references'.

```text
src/
├── components/           # Reusable Vue components
├── get-started/         # Getting started guides
├── guides/              # Detailed guides
├── protocol/            # Protocol documentation
├── references/          # API references
└── assets/              # Images and resources
```

--------------------------------

### Install DataProtector with bun

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/manage-access.md

Installs the DataProtector library using bun, a new JavaScript runtime and toolkit. This command adds the library as a dependency to your project.

```bash
bun add @iexec/dataprotector
```

--------------------------------

### Instantiate IExecWeb3mail Without a Web3 Provider

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/getting-started.md

Shows how to instantiate the IExecWeb3mail SDK without a Web3 provider, suitable for projects that only require read functions. This method is applicable in both browser and NodeJS environments.

```ts
import { IExecWeb3mail } from '@iexec/web3mail';

// instantiate
const web3mail = new IExecWeb3mail();
```

```ts
import { IExecWeb3mail } from '@iexec/web3mail';

// instantiate
const web3mail = new IExecWeb3mail();
```

--------------------------------

### Install DataProtector with npm

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/manage-access.md

Installs the DataProtector library using npm, a package manager for Node.js. This is the first step to using DataProtector in your project.

```bash
npm install @iexec/dataprotector
```

--------------------------------

### Local Testing Commands

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

npm commands for building the project, checking syntax, and running documentation tests with Vale.

```bash
# Build the project
npm run build
```

```bash
# Check syntax
npm run lint
```

```bash
# Documentation tests with Vale
vale src/
```

--------------------------------

### Install Vale Documentation Linter

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/README.md

Commands to install the Vale documentation linter on macOS, Linux, and Windows using common package managers.

```bash
brew install Vale/tap/vale
```

```bash
snap install vale
```

```bash
choco install vale
```

--------------------------------

### Initialize your iApp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/building-your-iexec-app.md

Guides you through the step-by-step initialization process for your iApp using the iApp Generator CLI, ensuring correct configuration for iExec's confidential computing environment.

```APIDOC
## Initialize your iApp

The iApp (iExec App) Generator command-line tool simplifies the setup of your iApp by guiding you through a step-by-step initialization process. This ensures your iApp is correctly configured and compatible with iExec's confidential computing environment.

### Define your project

The `iapp init` command interactively prompts you for:

- **Project name**: Creates a folder for your project files.
- **Language**: Choose between JavaScript, Python, etc.
- **Project mode**: Choose Basic (Hello-World setup) or Advanced mode.

### Configure your iApp

Set up the following configurations:

- **Arguments (Args)**: Public parameters for your iApp.
- **Input Files**: Files dynamically downloaded during execution (from a specific URL).
- **Requester Secrets**: Confidential authentication strings.
- **Protected Data**: Encrypted data accessible only inside the TEE.
- **App Secret**: Immutable secret provisioned by the iApp owner.

Refer to the [Inputs documentation](/guides/build-iapp/inputs) for more details.
```

--------------------------------

### Install DataProtector with yarn

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/manage-access.md

Installs the DataProtector library using yarn, an alternative package manager for Node.js. This command is equivalent to the npm install command.

```bash
yarn add @iexec/dataprotector
```

--------------------------------

### Verify iExec SDK Installation

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Checks if the iExec SDK has been installed correctly and displays its version and available commands.

```bash
iexec --version
iexec --help
```

--------------------------------

### Install Latest iExec DataProtector Package

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/migrate-from-v1.md

Installs the latest version of the @iexec/dataprotector npm package. This is the first step in migrating to v2.

```shell
npm install @iexec/dataprotector@latest
```

--------------------------------

### Configure Environment Variables

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/README.md

Commands to copy the example environment file and set the VITE_REOWN_PROJECT_ID variable.

```bash
cp .env.example .env
```

```env
VITE_REOWN_PROJECT_ID=your_project_id_here
```

--------------------------------

### Install iExec SDK (npm, yarn, pnpm, bun)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Installs the iExec SDK command-line interface using different package managers. This is the first step to managing app orders via the CLI.

```sh
npm install iexec
```

```sh
yarn add iexec
```

```sh
pnpm add iexec
```

```sh
bun add iexec
```

--------------------------------

### App Order Example (JSON)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

An example JSON structure representing an app order, defining parameters like app address, price, volume, and restrictions.

```json
{
  "app": "0x123abc...", // Your iApp address
  "appprice": "1000000000", // 1 RLC per execution
  "volume": "100", // 100 authorized uses
  "tag": "0x0000000000000000000000000000000000000000000000000000000000000003", // TEE required
  "datasetrestrict": "0x0000000000000000000000000000000000000000",
  "workerpoolrestrict": "0x0000000000000000000000000000000000000000",
  "requesterrestrict": "0x0000000000000000000000000000000000000000"
}
```

--------------------------------

### View Deployment Details (JSON)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

An example JSON structure showing details of a deployed iApp. It includes the Sconified image, the iApp contract address, the owner, and the deployment date.

```json
[
  {
    "sconifiedImage": "robiniexec/iapp:0.0.1-tee-scone-5.9.1-v16-5aea8b4aa71d",
    "appContractAddress": "0x9665136c599ec361C8eE627eC4F35A23fBa94897",
    "owner": "0xbabE8270aC9857Af3aaC06877888F1939FbeC578",
    "date": "2025-08-12T13:16:18.252Z"
  },
  ...
]
```

--------------------------------

### Clone iExec Documentation Repository

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

Clones the iExec documentation repository from GitHub to your local machine. Requires Git and a GitHub account.

```bash
git clone https://github.com/YOUR_USERNAME/documentation.git
cd documentation
```

--------------------------------

### Install DataProtector with pnpm

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/manage-access.md

Installs the DataProtector library using pnpm, a performant package manager for Node.js. This is another alternative for managing project dependencies.

```bash
pnpm add @iexec/dataprotector
```

--------------------------------

### Show Deployed iApp Details

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Retrieves and displays the details of a deployed iApp on a specified iExec chain. This is useful for verifying the deployment and getting the app's index.

```bash
iexec app show --chain arbitrum-mainnet
```

--------------------------------

### Install iApp Generator CLI

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/build-&-test.md

Installs the iApp Generator CLI tool globally using npm, yarn, pnpm, or bun. This tool is essential for bootstrapping iExec applications.

```sh
npm install -g @iexec/iapp
```

```sh
yarn global add @iexec/iapp
```

```sh
pnpm add -g @iexec/iapp
```

```sh
bun add -g @iexec/iapp
```

--------------------------------

### Install DataProtector using npm, yarn, pnpm, or bun

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/2-protectData.md

Install the '@iexec/dataprotector' package using your preferred package manager. This command makes the DataProtector library available for use in your project.

```sh
npm install @iexec/dataprotector
```

```sh
yarn add @iexec/dataprotector
```

```sh
pnpm add @iexec/dataprotector
```

```sh
bun add @iexec/dataprotector
```

--------------------------------

### Initialize iExec Project Configuration

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Initializes the iExec configuration files (`iexec.json`, `chain.json`) within your project directory, skipping wallet setup for initial configuration.

```bash
# In your iApp Generator project folder
iexec init --skip-wallet
```

--------------------------------

### Install iExec SDK (bun)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/run-iapp-without-ProtectedData.md

Installs the iExec SDK using bun, a fast JavaScript runtime and package manager. This is required to use the iExec SDK.

```sh
bun add iexec
```

--------------------------------

### Vale Usage Commands

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

Commands for using the Vale linter, including syncing configurations, checking files, and generating reports.

```bash
# Download external configurations
vale sync
```

```bash
# Check all documentation files
vale src/
```

```bash
# Check specific files
vale src/get-started/helloWorld/1-overview.md
```

```bash
# Get detailed output
vale --output=line src/
```

```bash
# Generate comprehensive report with statistics
vale --output=line src/ > vale-report.txt 2>&1
```

--------------------------------

### Test iApp Locally

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/building-your-iexec-app.md

Provides examples of testing an iApp locally using the 'iapp test' command. It shows how to pass arguments, specify protected data, provide input files via URLs, and set requester secrets.

```bash
iapp test --args "input_param=value" --inputFile "http://example.com/data.csv" --requesterSecret "MY_SECRET=12345"
```

--------------------------------

### Install @iexec/dataprotector-deserializer with Package Managers

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/deserializer.md

This snippet shows how to install the @iexec/dataprotector-deserializer package using various package managers like npm, yarn, pnpm, and bun.

```sh
npm install @iexec/dataprotector-deserializer
```

```sh
yarn add @iexec/dataprotector-deserializer
```

```sh
pnpm add @iexec/dataprotector-deserializer
```

```sh
bun add @iexec/dataprotector-deserializer
```

--------------------------------

### Install iExec SDK (pnpm)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/run-iapp-without-ProtectedData.md

Installs the iExec SDK using pnpm, another package manager for Node.js. This ensures the SDK is available for use.

```sh
pnpm add iexec
```

--------------------------------

### Initialize iApp Project with CLI

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/3-buildIApp.md

Bootstrap a new iApp project by creating a directory, navigating into it, and running the `iapp init` command. This sets up the project structure and prompts for project name, programming language (JavaScript/Python), and project type (Hello World/advanced).

```sh
mkdir iexec-test
cd iexec-test
iapp init
```

--------------------------------

### Install iExec SDK (yarn)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/run-iapp-without-ProtectedData.md

Installs the iExec SDK using yarn, an alternative package manager for Node.js. This step is necessary before utilizing the SDK.

```sh
yarn add iexec
```

--------------------------------

### Install iExec SDK (npm)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/run-iapp-without-ProtectedData.md

Installs the iExec SDK using npm, a package manager for Node.js. This is a prerequisite for using the SDK's functionalities.

```sh
npm install iexec
```

--------------------------------

### Vue Component Setup for Web3Telegram

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram.md

This script setup block is used in a Vue.js component to import the Icon component from '@iconify/vue'. This is likely used for displaying icons within the Web3Telegram interface, such as the demo link.

```javascript
import { Icon } from '@iconify/vue';

```

--------------------------------

### Commit Changes to Git

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

Stages all changes and commits them with a descriptive message. Requires Git.

```bash
git add .
git commit -m "Add: description of your changes"
```

--------------------------------

### App Order Configuration in iexec.json

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

An example of how the app order parameters are structured within the `iexec.json` configuration file.

```json
{
  "apporder": {
    "app": "0xYourAppAddress",
    "appprice": "1000000000",
    "volume": "100",
    "tag": "0x0000000000000000000000000000000000000000000000000000000000000003",
    "datasetrestrict": "0x0000000000000000000000000000000000000000",
    "workerpoolrestrict": "0x0000000000000000000000000000000000000000",
    "requesterrestrict": "0x0000000000000000000000000000000000000000"
  }
}
```

--------------------------------

### Cloning AI Frameworks Hello World Repository

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/ai.md

Clones the iExec AI Frameworks Hello World repository from GitHub. This is the initial step to access the example Docker configurations for various AI frameworks.

```bash
git clone https://github.com/iExecBlockchainComputing/ai-frameworks-hello-world.git
cd ai-frameworks-hello-world
```

--------------------------------

### Initialize iExec Project and Set Up Directory Structure - Bash

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Initializes a new iExec project for a Scone-based application and sets up the necessary directory structure and files. This includes creating a project directory, a source directory, and essential configuration files like Dockerfile and sconify.sh.

```bash
cd ~/iexec-projects
mkdir tee-hello-world-app && cd tee-hello-world-app
iexec init --skip-wallet
mkdir src
touch Dockerfile
touch sconify.sh
chmod +x sconify.sh
```

--------------------------------

### Docker Build and Run for TensorFlow

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/ai.md

Builds a Docker image for the TensorFlow example and runs it. This demonstrates how to containerize and execute a TensorFlow application within the iExec environment.

```bash
cd tensorflow
docker build -t hello-tensorflow .
docker run --rm hello-tensorflow
```

--------------------------------

### Vue.js Script Setup for iExec Project

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/tooling-and-explorers/bridge.md

This snippet demonstrates the setup of a Vue.js component, importing necessary UI components like ImageViewer, CardGrid, and ProjectCard. It also imports various assets including logos and images used within the iExec project, such as the iExec logo, Arbitrum logo, bridge images, and the Halborn logo.

```javascript
<script setup>
import ImageViewer from '@/components/ImageViewer.vue';
import CardGrid from '@/components/CardGrid.vue';
import ProjectCard from '@/components/ProjectCard.vue';

// Assets
import iexecLogoIcon from '@/assets/icons/iexec-logo.png';
import arbitrumLogoIcon from '@/assets/icons/arbitrum.svg';
import bellecourBridgeImage from '@/assets/tooling-&-explorers/bridge/bellecour-bridge.png';
import stargateBridgeImage from '@/assets/tooling-&-explorers/bridge/stargate-bridge.png';
import halbornLogoIcon from '@/assets/icons/halborn.svg';
</script>
```

--------------------------------

### Docker Build and Run for PyTorch

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/ai.md

Builds a Docker image for the PyTorch example and runs it. This showcases the process of containerizing and executing a PyTorch application for iExec.

```bash
cd ../pytorch
docker build -t hello-pytorch .
docker run --rm hello-pytorch
```

--------------------------------

### Testing iApp Inputs Locally with iApp CLI

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Provides examples of using the 'iapp' command-line interface to test iApp functionality locally. It covers testing with arguments, input files, secrets, and mocked protected data.

```bash
# Test with different input types
iapp test --args "model=bert threshold=0.8"           # Test with arguments
iapp test --inputFiles "https://example.com/data.json" # Test with input files
iapp test --secrets "key1=value1,key2=value2"        # Test with secrets

# Mock protected data for testing
iapp mock protectedData  # Generate sample protected data

# Test your iApp locally with mocked protected data
iapp test --protectedData "mock_name"
```

--------------------------------

### iApp Logic for Hello World - Python

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Implements the core logic for a 'Hello World' iApp using Python. It shows how to handle command-line arguments, write output to a file, and create a computed.json file within the IEXEC_OUT directory, signaling completion and output location to iExec.

```python
import os
import sys
import json

iexec_out = os.environ['IEXEC_OUT']

# Do whatever you want (let's write hello world here)
text = 'Hello, {}!'.format(sys.argv[1] if len(sys.argv) > 1 else "World")
print(text)

# Append some results in /iexec_out/
with open(iexec_out + '/result.txt', 'w+') as fout:
    fout.write(text)

# Declare everything is computed
with open(iexec_out + '/computed.json', 'w+') as f:
    json.dump({ "deterministic-output-path" : iexec_out + '/result.txt' }, f)
```

--------------------------------

### Initialize TEE iApp Template

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Prepares the necessary template files for deploying a Trusted Execution Environment (TEE) iApp on iExec. This command sets up the basic structure required for TEE applications.

```bash
# prepare the TEE app template
iexec app init --tee
```

--------------------------------

### Vue.js: iApp Execution Steps for Arbitrum

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

This JavaScript code outlines the steps involved in running an iApp on the Arbitrum network. It simulates a command-line interface interaction, guiding the user through the execution process, including transaction confirmations.

```javascript
// Variables for running iApp (execution steps)
const arbitrumRunSteps = [
  {
    showAt: 2,
    question: 'Using chain arbitrum-mainnet',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 3,
    completeAt: 5,
    question: 'This method requires sending blockchain transactions, transaction fees will be applied. Would you like to continue?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    showTyping: false,
    isComplete: false
  },
  {
    showAt: 5,
    question: 'Using saved walletPrivateKey (from iapp.config.json)',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 6,
    question: 'Workerpool order fetched',

```

--------------------------------

### Create iExec Wallet

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/quick-start.md

Creates a new wallet for your iExec identity on the blockchain. This involves setting a password to encrypt your private key, which is essential for securing your assets and deployed applications.

```text
iexec wallet create
```

--------------------------------

### Get all AddOnlyAppWhitelist entries

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/apps-whitelist/getUserAddOnlyAppWhitelist.md

Retrieves all entries in the AddOnlyAppWhitelist. Requires an initialized iExecDataProtectorSharing instance.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const allAppOnlyAppWhitelistAvailable =
  await dataProtectorSharing.getUserAddOnlyAppWhitelist();
```

--------------------------------

### View iApp Execution Details (JSON)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

An example JSON structure detailing an iApp execution on the iExec network. It includes the iApp address, deal ID, task ID, transaction hash, and the execution date.

```json
[
  {
    "iAppAddress": "0x9665136c599ec361C8eE627eC4F35A23fBa94897",
    "dealid": "0x26d758de1be51697c33fa606cd0c5243082a6e675a4463b106d71fde2893280f",
    "taskid": "0x1a58dd6018b30b022eb35be53ad9374eb630925458d14643a1dfd9c686b964d8",
    "txHash": "0x6f14eac6933c609fb6d3e6b2bbd18c373c6dc99c7d7fd22036d5a20f847c5e42",
    "date": "2025-08-18T18:30:03.711Z"
  },
  ...
]
```

--------------------------------

### Local Testing of iExec Docker Image

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Tests a built Docker image locally by simulating iExec input and output directories using bind mounts. It also demonstrates how to pass arguments to the application within the container.

```bash
mkdir -p ./tmp/iexec_in
mkdir -p ./tmp/iexec_out
```

```bash
docker run --rm \
    -v ./tmp/iexec_in:/iexec_in \
    -v ./tmp/iexec_out:/iexec_out \
    -e IEXEC_IN=/iexec_in \
    -e IEXEC_OUT=/iexec_out \
    hello-world arg1 arg2 arg3
```

--------------------------------

### VitePress Native Containers

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

Demonstrates the usage of VitePress's built-in container directives for displaying informational, tip, warning, and danger messages within documentation pages.

```markdown
::: info Your informational content here... :::

::: tip Helpful tips and suggestions... :::

::: warning Important warnings and cautions... :::

::: danger Critical warnings and error messages... :::
```

--------------------------------

### iApp Logic for Hello World - JavaScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Implements the core logic for a 'Hello World' iApp using JavaScript. It demonstrates how to process command-line arguments, write output to a file, and generate a computed.json file in the IEXEC_OUT directory for iExec to recognize the result.

```javascript
const fsPromises = require('fs').promises;

(async () => {
  try {
    const iexecOut = process.env.IEXEC_OUT;
    // Do whatever you want (let's write hello world here)
    const message = process.argv.length > 2 ? process.argv[2] : 'World';

    const text = `Hello, ${message}!`;
    console.log(text);
    // Append some results in /iexec_out/
    await fsPromises.writeFile(`${iexecOut}/result.txt`, text);
    // Declare everything is computed
    const computedJsonObj = {
      'deterministic-output-path': `${iexecOut}/result.txt`,
    };
    await fsPromises.writeFile(
      `${iexecOut}/computed.json`,
      JSON.stringify(computedJsonObj)
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
```

--------------------------------

### GET /getProtectedDataPricingParams

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getProtectedDataPricingParams.md

Retrieve pricing parameters for renting a specific protected data in iExec. This endpoint allows you to get the rental price and duration to determine the cost and terms for data access.

```APIDOC
## GET /getProtectedDataPricingParams

### Description
Get pricing parameters for renting a specific protected data in iExec. Retrieve rental price and duration to determine the cost and terms for data access.

### Method
GET

### Endpoint
/getProtectedDataPricingParams

### Parameters
#### Query Parameters
- **protectedData** (AddressOrENS) - Required - Address of the protected data you'd like to get the pricing params for.

### Request Example
```json
{
  "protectedData": "0x123abc..."
}
```

### Response
#### Success Response (200)
- **subscription** (SubscriptionParams) - Pricing parameters for data subscription.
- **renting** (RentingParams) - Pricing parameters for data renting.

#### Response Example
```json
{
  "subscription": {
    "pricePerUnit": "100000000000000000",
    "duration": 31536000
  },
  "renting": {
    "pricePerUnit": "50000000000000000",
    "duration": 86400
  }
}
```
```

--------------------------------

### Build AMD64 Docker Image

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Builds a Docker image for the AMD64 architecture, tagging it for use with Docker Hub. This is the initial step before testing or further processing.

```bash
docker buildx build --platform linux/amd64 --tag <docker-hub-user>/hello-world .
```

```bash
docker build --tag hello-world .
```

--------------------------------

### Push Changes to Fork

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

Pushes the committed changes from your local branch to your remote fork on GitHub. Requires Git and a GitHub fork.

```bash
git push origin feature/your-feature-name
```

--------------------------------

### CLI Commands Reference

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/building-your-iexec-app.md

Reference for the iApp Generator CLI commands, including initialization, testing, deployment, and running your iApp.

```APIDOC
## `iapp init`

### Description
Initialize a new iApp project.

### Usage
`iapp init [options]`

### Details
Creates project structure, configuration files, and basic templates through interactive prompts.
```

```APIDOC
## `iapp test`

### Description
Test your iApp locally before deployment.

### Usage
`iapp test [options]`

### Options
- `-v, --version` [boolean] – Show version number
- `--args <string>` – Arguments accessible inside the iApp (use quotes to group)
- `--protectedData <string>` – Specify the protected data mock name (default or custom via `iapp mock`)
- `--inputFile <string>` – One or multiple input files (public URLs) available inside the iApp at `$IEXEC_INPUT_FILE_NAME_*`
- `--requesterSecret <array>` – Key-value requester secrets (`index=value`) available inside the iApp at `$IEXEC_REQUESTER_SECRET_*`
```

```APIDOC
## `iapp deploy`

### Description
Deploy your iApp to the iExec network.

### Usage
`iapp deploy [options]`

### Options
- `--chain <string>` – Specify the blockchain network for deployment (e.g., `goerli`, `mainnet`)
```

```APIDOC
## `iapp run <iAppAddress>`

### Description
Execute your deployed iApp on a worker node.

### Usage
`iapp run <iAppAddress> [options]`

### Positional Arguments
- `<iAppAddress>` – Address of the deployed iApp to run

### Options
- `--args <string>` – Arguments accessible inside the iApp (use quotes to group)
- `--protectedData <string>` – Specify the protected data mock name (default or custom via `iapp mock`)
- `--inputFile <string>` – One or multiple input files (public URLs) available inside the iApp at `$IEXEC_INPUT_FILE_NAME_*`
- `--requesterSecret <array>` – Key-value requester secrets (`index=value`) available inside the iApp at `$IEXEC_REQUESTER_SECRET_*`
- `--chain <string>` – Specify the blockchain network to run the iApp on (e.g., `goerli`, `mainnet`)
```

--------------------------------

### Vue.js Script Setup for IPFS Gateway Access

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/protectData.md

This Vue.js script setup imports necessary modules and defines computed properties to retrieve the current chain ID, chain data, and the IPFS gateway URL. It relies on the useUserStore and getChainById utilities.

```javascript
import { computed } from 'vue';
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const ipfsGateway = computed(() => chainData.value.ipfsGateway);

// Assets
import RequiredBadge from '@/components/RequiredBadge.vue'
import OptionalBadge from '@/components/OptionalBadge.vue'
```

--------------------------------

### Run an iApp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/3-buildIApp.md

The command to execute a deployed iApp on the iExec protocol. Replace `<my-iapp-address>` with the actual address of your iApp.

```sh
iapp run <my-iapp-address>
```

--------------------------------

### Configure TEE iApp Deployment (`iexec.json`)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Defines the configuration for deploying a TEE iApp. It includes standard app details and specific TEE parameters like framework, version, entrypoint, heap size, and the mrenclave fingerprint.

```json
{
  "...": "...",
  "app": {
    "owner": "<your-wallet-address>", // starts with 0x
    "name": "tee-scone-hello-world", // app name
    "type": "DOCKER",
    "multiaddr": "docker.io/<docker-hub-user>/tee-scone-hello-world:1.0.0", // app image
    "checksum": "<checksum>", // starts with 0x, update it with your own image digest
    "mrenclave": {
      "framework": "SCONE", // TEE framework (keep default value)
      "version": "v5.9", // Scone version (keep default value)
      "entrypoint": "node /app/app.js" OR "python3 /app/app.py", // update it with your own image entrypoint
      "heapSize": 1073741824, // heap size in bytes, update it with --heap option value used in sconify.sh script during TEE image build
      "fingerprint": "<mrenclave>" // fingerprint of the enclave code (mrenclave), without 0x prefix, see how to retrieve it below
    }
  },
  "...": "..."
}
```

--------------------------------

### Log in to Scone Registry - Bash

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Authenticates the Docker client with the Scone registry, allowing access to curated images and build tools. This is a prerequisite for using Scone's services.

```bash
docker login registry.scontain.com
```

--------------------------------

### Pass Arguments to iApp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/3-buildIApp.md

Demonstrates how to pass arguments to an iApp during runtime using the `--args` option. This is useful for providing necessary inputs to your application.

```sh
iapp test --args your-name
```

--------------------------------

### Confidential App Order Parameters (TEE)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Example parameters for an app order specifically for a confidential application requiring Trusted Execution Environment (TEE).

```json
{
  "appprice": "2000000000",
  "volume": "500",
  "tag": "0x0000000000000000000000000000000000000000000000000000000000000003"
}
```

--------------------------------

### Create New Feature Branch

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

Creates a new Git branch for developing a new feature or making changes. Requires Git.

```bash
git checkout -b feature/your-feature-name
```

--------------------------------

### Fetch contacts using iExec Web3Mail

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/fetchMyContacts.md

Demonstrates how to initialize the IExecWeb3mail service and call the fetchMyContacts method to get a list of authorized contacts. Requires a Web3 provider.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const contactsList = await web3mail.fetchMyContacts();
```

--------------------------------

### Execute iApp with Requester Secrets (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Demonstrates how a user initiates an iApp execution via DataProtector, providing public arguments and sensitive Requester Secrets. This example uses the @iexec/dataprotector library to interact with the iExec network.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Example: User executes your iApp with all input types
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...', // Protected data address
    app: '0x456def...', // Your iApp address
    args: 'model=bert threshold=0.8', // Public arguments
    secrets: {
      // Requester secrets
      1: 'sk-1234567890abcdef', // API key
      2: 'mydbpassword123', // DB password
    },
  });
```

--------------------------------

### Initialize New iApp Project

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/building-your-iexec-app.md

Demonstrates the interactive process of initializing a new iExec application (iApp) using the 'iapp init' command. It shows how to specify the project name, programming language (JavaScript or Python), and project type (e.g., Hello World).

```bash
iapp init
```

--------------------------------

### Get Worker Pool Address from User Store (Vue.js)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

This snippet demonstrates how to retrieve the worker pool address from the user store within a Vue.js application. It uses computed properties to reactively get the current chain ID and then fetch the corresponding worker pool address using a utility function.

```javascript
import { computed } from 'vue';
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const workerpoolAddress = computed(() => chainData.value.workerpoolAddress);
```

--------------------------------

### Deploy iApp on iExec

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Deploys the configured iApp to the iExec network. This command uses the settings defined in the `iexec.json` file.

```bash
iexec app deploy --chain {{chainName}}
```

--------------------------------

### GET /getRentals

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getRentals.md

Retrieves all rentals associated with a specific protected data or a user. This endpoint allows for filtering rentals based on provided parameters.

```APIDOC
## GET /getRentals

### Description
Retrieve all rentals for a specific protected data or user in iExec. Access detailed rental information based on the protected data address.

### Method
GET

### Endpoint
/getRentals

### Parameters
#### Query Parameters
- **renterAddress** (AddressOrENS) - Optional - The address of the renter to filter rentals.
- **protectedData** (AddressOrENS) - Optional - The address of the protected data to filter rentals.
- **includePastRentals** (boolean) - Optional - Defaults to `false`. Set to `true` to include past rentals.

### Request Example
```json
{
  "renterAddress": "0x246bdf...",
  "protectedData": "0x123abc...",
  "includePastRentals": true
}
```

### Response
#### Success Response (200)
- **rentals** (Array<ProtectedDataRental>) - An array of rental objects.

#### Response Example
```json
{
  "rentals": [
    {
      "rentalId": "0xrentalid123",
      "protectedData": "0xprotecteddata123",
      "dataOwner": "0xdataowner456",
      "renter": "0xrenter789",
      "startTime": 1678886400,
      "endTime": 1681564800,
      "status": "active"
    }
  ]
}
```
```

--------------------------------

### GET /getUserAddOnlyAppWhitelist

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/apps-whitelist/getUserAddOnlyAppWhitelist.md

Retrieves the AddOnlyAppWhitelist, optionally filtered by a user's Ethereum address. This is used for app access control management.

```APIDOC
## GET /getUserAddOnlyAppWhitelist

### Description
Retrieves the AddOnlyAppWhitelist, optionally filtered by a user's Ethereum address. This is used for app access control management.

### Method
GET

### Endpoint
/getUserAddOnlyAppWhitelist

### Parameters
#### Query Parameters
- **user** (AddressOrENS) - Optional - Address or ENS of the user that manages the `AddAppToAddOnlyAppWhitelist`

### Request Example
```json
{
  "user": "0x123abc..."
}
```

### Response
#### Success Response (200)
- **AddOnlyAppWhitelist** (Array) - An array of whitelist entries.

#### Response Example
```json
[
  {
    "user": "0x123abc...",
    "apps": [
      "0x456def..."
    ]
  }
]
```
```

--------------------------------

### Get Rentals for Protected Data - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getRentals.md

Retrieves all active rentals associated with a specific protected data address. It requires initializing the IExecDataProtectorSharing class with a web3 provider.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
const protectedDataActiveRentals = await dataProtectorSharing.getRentals({
  protectedData: '0x123abc...',
});
```

--------------------------------

### Vue CardWithBorder Component Usage

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

Demonstrates the use of the `CardWithBorder` Vue component to create cards with defined borders and soft backgrounds, suitable for highlighting important information.

```vue
<CardWithBorder>

### Card Title

Your card content with border. Ideal for highlighting important information.

- Point 1
- Point 2
- Point 3

</CardWithBorder>
```

--------------------------------

### Vue CardWithoutBorder Component Usage

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

Shows how to implement the `CardWithoutBorder` Vue component for creating subtle cards that lack visible borders but retain a soft background for readability.

```vue
<CardWithoutBorder>

### Card Content

This card has no border but maintains a soft background for readability.

</CardWithoutBorder>
```

--------------------------------

### Get Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getProtectedData.md

Retrieve protected data for a specific owner or schema. Results are ordered by creation date.

```APIDOC
## POST /getProtectedData

### Description
Retrieve all protected data for a specific owner, data schema, or both. Results are ordered by `creationTimestamp` desc.

### Method
POST

### Endpoint
/getProtectedData

### Parameters
#### Query Parameters
- **protectedDataAddress** (AddressOrENS) - Optional - Returns the protected data associated with this address. Returns an empty array if the protected data is not found.
- **requiredSchema** (SearchableDataSchema) - Optional - Provides a list of protected data objects matching this schema. It can be a single field or multiple fields, and a field can accept a list of types.
- **owner** (AddressOrENS) - Optional - Provides a list of protected data objects owned by the user with this ETH address.
- **createdAfterTimestamp** (number) - Optional - Provides a list of protected data objects created after this timestamp value. The provided value should be in seconds.
- **page** (number) - Optional - Specifies the results page to return. Pages are indexed starting at page 0. Default is 0.

### Request Example
```json
{
  "owner": "0xa0c15e...",
  "requiredSchema": {
    "email": "string"
  },
  "createdAfterTimestamp": 1710257612,
  "page": 1
}
```

### Response
#### Success Response (200)
- **data** (Array<ProtectedData>) - List of protected data objects matching the query.
- **owner** (AddressOrENS) - The owner of the protected data.
- **schema** (SearchableDataSchema) - The schema of the protected data.
- **creationTimestamp** (number) - Timestamp of data creation.

#### Response Example
```json
{
  "data": [
    {
      "owner": "0xa0c15e...",
      "schema": {
        "email": "string"
      },
      "creationTimestamp": 1710257612
    }
  ]
}
```
```

--------------------------------

### GET /collections

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getCollectionsByOwner.md

Fetches all collections owned by a specified user. Supports optional parameters to include hidden protected data.

```APIDOC
## GET /collections

### Description
Retrieves all collections for a specific user, with options for filtering and pagination.

### Method
GET

### Endpoint
/collections

### Parameters
#### Query Parameters
- **owner** (AddressOrENS) - Required - The address or ENS name of the owner whose collections are to be retrieved.
- **includeHiddenProtectedDatas** (boolean) - Optional - If true, includes hidden protected data in the collections. Defaults to false.

### Request Example
```json
{
  "owner": "0xa0c15e...",
  "includeHiddenProtectedDatas": true
}
```

### Response
#### Success Response (200)
- **collections** (Array<CollectionWithProtectedDatas>) - A list of collections owned by the user.

#### Response Example
```json
{
  "collections": [
    {
      "id": "0xcollectionid1",
      "owner": "0xa0c15e...",
      "protectedDatas": [
        {
          "id": "0xprotecteddataid1",
          "owner": "0xa0c15e...",
          "isSecret": false,
          "subscription": {
            "id": "0xsubid1",
            "price": "10000000000000000",
            "schedule": "ONCE",
            "maxSubscribers": 100,
            "totalShares": 1000,
            "remainingShares": 500
          },
          "renting": {
            "appId": "0xappid1",
            "datasetId": "0xdatasetid1",
            "maxDuration": 3600,
            "price": "10000000000000000"
          },
          "selling": {
            "price": "10000000000000000"
          }
        }
      ]
    }
  ]
}
```
```

--------------------------------

### Vue Banner Component Usage

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

Illustrates the usage of the `Banner` Vue component for creating stylized page headers, typically containing section titles and descriptions with gradient backgrounds.

```vue
<Banner>

## Your Section Title

Description of your section with elegant styling.

</Banner>
```

--------------------------------

### Specify duration for data subscription

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/subscribeToCollection.md

This example demonstrates the use of the `duration` parameter in the `subscribeToCollection` method. It shows how to specify the rental duration for protected data in seconds, also as a measure against front-running.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.subscribeToCollection({
  collectionId: 12,
  price: 1, // 1 nRLC
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days // [!code focus]
});
```

--------------------------------

### Get Rentals for User - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getRentals.md

Retrieves all active rentals associated with a specific renter address. This function requires the renter's address and an initialized IExecDataProtectorSharing instance.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
const userActiveRentals = await dataProtectorSharing.getRentals({
  renterAddress: '0x246bdf...', // [!code focus]
});
```

--------------------------------

### Get SendEmailResponse type definition

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Imports the SendEmailResponse type definition from the '@iexec/web3mail' package, which details the structure of the response from the sendEmail method.

```typescript
import { type SendEmailResponse } from '@iexec/web3mail';
```

--------------------------------

### Update `iexec.json` with TDX details

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

This JSON example demonstrates the updated `iexec.json` file for a TEE iApp using Intel TDX, including fields like `owner`, `name`, `multiaddr`, `checksum`, and `mrenclave` with `framework: "TDX"`.

```json
{
  ...
  "app": {
    "owner": "<your-wallet-address>", // starts with 0x
    "name": "tee-scone-hello-world", // application name
    "type": "DOCKER",
    "multiaddr": "<docker-hub-user>/hello-world:1.0.0", // app image
    "checksum": "<checksum>", // starts with 0x, update it with your own image digest
    "mrenclave": {
      "framework": "TDX" // TEE framework (keep default value)
   }
  },
  ...
}
```

--------------------------------

### Show Task Details and Download Result

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Retrieves detailed information about a completed iExec task using its task ID and downloads the resulting output files to a specified directory. The results are typically packaged as a zip file.

```bash
iexec task show --chain arbitrum-mainnet <taskid> --download my-result
```

--------------------------------

### Retrieve Protected Data by Creation Timestamp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getProtectedData.md

This example shows how to filter protected data based on its creation timestamp. The timestamp should be provided in seconds. It includes initializing the IExecDataProtectorCore.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getProtectedData({
  owner: '0xa0c15e...',
  createdAfterTimestamp: 1710257612, // March 12, 2024 15:33:32 GMT // [!code focus]
});
```

--------------------------------

### Get Rentals Including Past Rentals - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getRentals.md

Retrieves rentals for a user, including past rentals by setting the `includePastRentals` flag to true. Requires the renter's address and an initialized SDK instance.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
const userRentals = await dataProtectorSharing.getRentals({
  renterAddress: '0x246bdf...',
  includePastRentals: true, // [!code focus]
});
```

--------------------------------

### Local Testing with Input Files

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Simulates the use of input files for an iExec Docker application during local testing. It involves creating files in the input directory and setting environment variables to specify their names and count.

```bash
touch ./tmp/iexec_in/file1 && \
    touch ./tmp/iexec_in/file2 && \
    docker run \
        -v ./tmp/iexec_in:/iexec_in \
        -v ./tmp/iexec_out:/iexec_out \
        -e IEXEC_IN=/iexec_in \
        -e IEXEC_OUT=/iexec_out \
        -e IEXEC_INPUT_FILE_NAME_1=file1 \
        -e IEXEC_INPUT_FILE_NAME_2=file2 \
        -e IEXEC_INPUT_FILES_NUMBER=2 \
        hello-world \
        arg1 arg2 arg3
```

--------------------------------

### Get Task ID from Deal ID

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Retrieves the task ID associated with a specific deal ID on the iExec network. This is useful for tracking the progress or status of a computational task.

```bash
iexec deal show --chain arbitrum-mainnet <dealid>
```

--------------------------------

### Process Protected Data using iExec SDK

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

This TypeScript example demonstrates how a user initiates the processing of protected data by calling the `processProtectedData` method from the iExec SDK. It requires a web3 provider and specifies the addresses for the protected data and the application.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---
// User provides the protected data they want to use for processing
const response = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...', // Address of the protected data
  app: '0x456def...', // Your iApp address
});
```

--------------------------------

### Dockerfile for Python iApp - Dockerfile

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Defines the Dockerfile for a Python-based iApp. It uses a Python Alpine image, copies the application source, and sets the entry point to run the Python script.

```dockerfile
FROM python:3.13.3-alpine3.21
### install python dependencies if you have some
COPY ./src /app
ENTRYPOINT ["python3", "/app/app.py"]
```

--------------------------------

### Vue Container Component Usage

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/CONTRIBUTING.md

Shows how to use the custom Vue `Container` component for displaying content with different variants (success, info, danger) and titles. This is an alternative to VitePress native containers.

```vue
<Container variant="success" title="Success">
Your content here...
</Container>

<Container variant="info" title="Information">
Informational content...
</Container>

<Container variant="danger" title="Warning">
Warning message...
</Container>
```

--------------------------------

### Example Reward Calculation and Distribution

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Illustrates a detailed scenario of task execution, worker contributions, consensus achievement, and final reward distribution. It shows how stakes are managed, how rewards are calculated based on worker weights, and how the scheduler receives a portion of the reward kitty.

```plaintext
- A requester offers `20 RLC` to run a task. The task is free, but it uses a dataset that costs `1 RLC`. The requester locks `21 RLC` and the scheduler `30% * 20 = 6 RLC`.
- 3 workers contribute: Worker 1 (score 12) contributes 17, locks 7 RLC. Worker 2 (score 100) contributes 42, locks 7 RLC. Worker 3 (score 300) contributes 42, locks 7 RLC.
- Consensus achieves after the third contribution.
- Scheduler finalizes the task: Requester's 21 RLC seized. Dataset owner gets 1 RLC. Scheduler's stake unlocks. Workers 2 and 3 stakes unlock. Worker 1 stake seizes.
- `totalReward = 27 RLC`: 5% saved for scheduler, `workersReward = 95% * 27 = 25.65 RLC`.
- Worker 2 weight `log2(32) = 5`, Worker 3 weight `log2(99) = 6`. Total weight 11.
- Worker 2 gets `25.65 * 5/11 = 11.659090909 RLC`.
- Worker 3 gets `25.65 * 6/11 = 13.990909090 RLC`.
- Scheduler gets remaining `1.350000001 RLC` from worker rewards.
- Scheduler also takes a part of the reward kitty if not empty.
```

--------------------------------

### Get Protected Data in Collections

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections.md

Retrieves protected data entries within a specified collection, with support for pagination using page and pageSize parameters.

```APIDOC
## GET /protected-data/collections/{collectionId}

### Description
Retrieves a paginated list of protected data entries within a given collection.

### Method
GET

### Endpoint
`/protected-data/collections/{collectionId}`

### Parameters
#### Path Parameters
- **collectionId** (number) - Required - The unique identifier for the collection.

#### Query Parameters
- **page** (number) - Optional - The page number to retrieve. Defaults to 1.
- **pageSize** (number) - Optional - The number of items to return per page. Range: [10...1000]. Defaults to 10.

### Request Example
```ts
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  collectionId: 12,
  page: 3,
  pageSize: 25,
});
```

### Response
#### Success Response (200)
- **items** (array) - An array of `ProtectedDataInCollection` objects.
  - **ProtectedDataInCollection** (object) - Represents a protected data entry.
    - **id** (string) - The unique identifier of the protected data.
    - **collectionId** (number) - The identifier of the collection this data belongs to.
    - **owner** (string) - The Ethereum address of the data owner.
    - **name** (string) - The name of the protected data.
    - **description** (string) - A description of the protected data.
    - **tags** (array) - An array of tags associated with the data.
    - **createdAt** (string) - The timestamp when the data was created.
    - **renting** (RentingParams) - Information about renting the data.
    - **selling** (SellingParams) - Information about selling the data.

#### Response Example
```json
{
  "items": [
    {
      "id": "data-123",
      "collectionId": 12,
      "owner": "0xabc...",
      "name": "Protected Dataset A",
      "description": "A sample protected dataset.",
      "tags": ["finance", "public"],
      "createdAt": "2023-10-27T10:00:00Z",
      "renting": {
        "pricePerUnit": "1000000000000000",
        "unit": "nlp"
      },
      "selling": null
    }
  ],
  "total": 50,
  "page": 3,
  "pageSize": 25
}
```
```

--------------------------------

### GET /collectionOwners

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getCollectionOwners.md

Retrieves a list of collection owners, ordered by creation timestamp in descending order. Supports limiting the number of results.

```APIDOC
## GET /collectionOwners

### Description
Method to get all collection owners with results ordered by creation timestamp in descending order.

### Method
GET

### Endpoint
/collectionOwners

### Parameters
#### Query Parameters
- **limit** (number) - Optional - Maximum number of results to return. Defaults to 100. Range: [1...1000].

### Request Example
```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const collectionOwners = await dataProtectorSharing.getCollectionOwners({ limit: 50 });
```

### Response
#### Success Response (200)
- **owners** (array) - An array of collection owner objects.
  - **ownerAddress** (string) - The blockchain address of the collection owner.
  - **collections** (array) - An array of collections owned by the owner.
    - **collectionId** (string) - The unique identifier for the collection.
    - **creationTimestamp** (number) - The timestamp when the collection was created.
- **hasActiveSubscription** (boolean) - Indicates if the logged-in user has an active subscription to any of the returned collections.

#### Response Example
```json
{
  "owners": [
    {
      "ownerAddress": "0x123...",
      "collections": [
        {
          "collectionId": "col_abc",
          "creationTimestamp": 1678886400
        }
      ]
    }
  ],
  "hasActiveSubscription": true
}
```
```

--------------------------------

### Grant Access Parameters - App Whitelist

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/manage-access.md

Example of using an app whitelist contract address for the authorizedApp parameter when granting access. This is recommended for production to manage multiple app versions or a set of allowed applications.

```typescript
// Or use a whitelist (recommended for production)
authorizedApp: {{web3MailAppWhitelist}};
```

--------------------------------

### TypeScript: Specify Protected Data Address for Renting

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/setProtectedDataRentingParams.md

This example focuses on specifying the `protectedData` parameter, which is the address or ENS name of the protected data. This is a crucial input for the `setProtectedDataRentingParams` method.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const setForRentingResult =
  await dataProtectorSharing.setProtectedDataRentingParams({
    protectedData: '0x123abc...', // [!code focus]
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

--------------------------------

### Specify collection ID for subscription

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/subscribeToCollection.md

This example highlights the `collectionId` parameter within the `subscribeToCollection` method. It shows how to set the specific ID of the data collection you wish to subscribe to.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.subscribeToCollection({
  collectionId: 12, // [!code focus]
  price: 1, // 1 nRLC
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days
});
```

--------------------------------

### Specify Collection ID for Subscription Parameters

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams.md

This example focuses on setting the `collectionId` parameter within the `setSubscriptionParams` method. It shows how to correctly pass the collection identifier to the function.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12, // [!code focus]
    price: 2, // 2 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

--------------------------------

### Push TEE Docker Image to DockerHub

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Pushes the newly built Scone TEE Docker image to DockerHub, making it available for deployment on iExec or other platforms. Requires prior login to DockerHub.

```bash
docker login
docker push <docker-hub-user>/tee-scone-hello-world:1.0.0
```

--------------------------------

### Specify Duration in Seconds for Subscription Parameters

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams.md

This code example demonstrates setting the `duration` parameter, measured in seconds, for data collection subscriptions. It shows how to specify the length of a subscription period.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    price: 2, // 2 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days // [!code focus]
  });
```

--------------------------------

### Deploy iApp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

Standard command to deploy the iApp after configuring it for TDX.

```bash
iexec app deploy
```

--------------------------------

### Get Collection Owners

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getCollectionOwners.md

Retrieves all collection owners. Results are ordered by creation timestamp in descending order. Requires initialization of IExecDataProtectorSharing with a web3 provider.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const collectionOwners = await dataProtectorSharing.getCollectionOwners();
```

--------------------------------

### Grant Access Parameters - Single App

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/manage-access.md

Example of specifying a single authorized application address when granting access to protected data. This is a basic way to control which application can process the data.

```typescript
// Single app
authorizedApp: {{web3MailAddress}};
```

--------------------------------

### Set Protected Data for Sale with Specific Price - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/selling/setProtectedDataForSale.md

Shows how to set the price for protected data when listing it for sale. The example highlights the `price` parameter, which specifies the cost in nano RLC (nRLC).

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const setForSaleResult = await dataProtectorSharing.setProtectedDataForSale({
  protectedData: '0x123abc...',
  price: 2, // 2 nRLC // [!code focus]
});
```

--------------------------------

### Build Project for Production

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/README.md

Command to build the project for production deployment.

```bash
npm run build
```

--------------------------------

### Query iExec Apps via GraphQL

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/tooling-and-explorers/subgraph-explorer.md

Example GraphQL query to retrieve iExec App data, including ID, name, owner, type, and URI. This query can be used with The Graph explorer to fetch specific application details.

```graphql
query {
  apps {
    id
    name
    owner {
      id
    }
    appType
    appUri
  }
}
```

--------------------------------

### Process Protected Data with Specified Workerpool (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Processes protected data using the IExecDataProtectorCore by specifying a workerpool address. This example demonstrates how to initiate the protected data processing workflow.

```TypeScript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    workerpool: '0xa5de76...', // [!code focus]
  });
```

--------------------------------

### Grant Access Parameters - Public Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/manage-access.md

Example of setting the authorizedUser to a zero address to allow any user to trigger processing for protected data. This is useful for making datasets publicly accessible.

```typescript
// Special case: Set to 0x0000000000000000000000000000000000000000 to allow any user
authorizedUser: '0x0000000000000000000000000000000000000000';
```

--------------------------------

### Dockerfile for JavaScript iApp - Dockerfile

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Defines the Dockerfile for a JavaScript-based iApp. It sets the base image to Node.js Alpine, copies the application source code, and specifies the entry point for execution.

```dockerfile
FROM node:22-alpine3.21
### install your dependencies if you have some
RUN mkdir /app && cd /app
COPY ./src /app
ENTRYPOINT [ "node", "/app/app.js"]
```

--------------------------------

### Get Granted Access with Pagination (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getGrantedAccess.md

Demonstrates how to fetch granted access records using the getGrantedAccess method, specifying both page number and page size for pagination. This function helps manage and retrieve authorized access details efficiently.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  protectedData: '0x123abc...',
  page: 1, 
  pageSize: 100,
});
```

--------------------------------

### Get AddOnlyAppWhitelist filtered by user address

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/apps-whitelist/getUserAddOnlyAppWhitelist.md

Retrieves AddOnlyAppWhitelist entries filtered by a specific user's Ethereum address. Requires an initialized iExecDataProtectorSharing instance and the user's address.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const allUserAddOnlyAppWhitelist =
  await dataProtectorSharing.getUserAddOnlyAppWhitelist({
    user: '0x123abc...', // [!code focus]
  });
```

--------------------------------

### Retrieve Protected Data by Schema

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getProtectedData.md

This example demonstrates how to fetch protected data that matches a specific schema. It shows how to specify the schema structure, including allowing multiple types for a schema field.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getProtectedData({
  requiredSchema: { // [!code focus]
    email: 'string', // [!code focus]
  }, // [!code focus]
});
```

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getProtectedData({
  requiredSchema: { // [!code focus]
    picture: ['image/png', 'image/jpeg'], // [!code focus]
  }, // [!code focus]
});
```

--------------------------------

### Provide Email Content for sendEmail

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

This example illustrates the use of the `emailContent` parameter in the `sendEmail` method. It shows how to pass the body of the email, which can be plain text or HTML, with a maximum size of 512kb. The content is encrypted and stored on IPFS.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content', // [!code focus]
});
```

--------------------------------

### Build Scone TEE Docker Image (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Builds a Trust Execution Environment (TEE) Docker image using Scone, similar to the Node.js version, but configured for a Python application. It includes signing the image and setting TEE parameters.

```bash
#!/bin/bash

# Declare image related variables
IMG_FROM=<docker-hub-user>/hello-world
IMG_TO=<docker-hub-user>/tee-scone-hello-world:1.0.0

# Run the sconifier to build the TEE image based on the non-TEE image
docker run -it --rm \
            -v $PWD/enclave-key.pem:/sig/enclave-key.pem \
            -v /var/run/docker.sock:/var/run/docker.sock \
            registry.scontain.com/scone-production/iexec-sconify-image:5.9.1-v16\
            sconify_iexec \
            --from=${IMG_FROM} \
            --to=${IMG_TO} \
            --binary-fs \
            --fs-dir=/app \
            --host-path=/etc/hosts \
            --host-path=/etc/resolv.conf \
            --binary=/usr/local/bin/python3 \
            --heap=1G \
            --dlopen=1 \
            --verbose \
            && echo -e "\n------------------\n" \
            && echo "successfully built TEE docker image => ${IMG_TO}" \
            && echo "application mrenclave.fingerprint is $(docker run --rm -e SCONE_HASH=1 ${IMG_TO})"
```

--------------------------------

### Specify Protected Data Address for Renting

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/rentProtectedData.md

Shows how to specify the `protectedData` parameter when renting protected data. This parameter requires the address or ENS of the data to be rented. The example highlights the `protectedData` field within the `rentProtectedData` method call.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...', // [!code focus]
  price: 1, // 1 nRLC
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days
});
```

--------------------------------

### Get Protected Data Pricing Params - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getProtectedDataPricingParams.md

Retrieves pricing parameters (rental price and duration) for a specified protected data asset on iExec. This method requires an initialized IExecDataProtectorSharing instance.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const pricingParams = await dataProtectorSharing.getProtectedDataPricingParams({
  protectedData: '0x123abc...',
});
```

--------------------------------

### Build Docker Image for Different Platforms - Bash

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Builds a Docker image, specifying the target platform for compatibility. This command is particularly useful on macOS with Apple M processors to ensure the image is built for linux/amd64, which is typically required by execution environments like iExec.

```bash
brew install buildkit
# ARM64 variant for local testing only
docker buildx build --platform linux/arm64 --tag <docker-hub-user>/hello-world .
```

--------------------------------

### Check Public Key in Secret Management Service (SMS)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/protect-the-result.md

Verifies that the public encryption key has been successfully pushed to the SMS. This command helps confirm the setup before triggering encrypted task executions.

```bash
iexec result check-encryption-key --tee-framework --chain {{chainName}} scone
```

--------------------------------

### Deserialize values using IExecDataProtectorDeserializer

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/deserializer/getValue.md

This snippet demonstrates how to deserialize values using the `getValue` method of the `IExecDataProtectorDeserializer`. It shows examples of deserializing a boolean and a string. The method requires the path to the value and its expected type.

```typescript
import { IExecDataProtectorDeserializer } from '@iexec/dataprotector-deserializer';

const deserializer = new IExecDataProtectorDeserializer();
// ---cut---
const value1 = await deserializer.getValue('path.to.value1', 'bool');
const value2 = await deserializer.getValue('path.to.value2', 'string');
```

--------------------------------

### Initialize `iexec.json` for TDX

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

This command initializes the `iexec.json` file by adding the necessary keys for TEE applications, specifically for the TDX framework.

```bash
iexec app init --tee-framework tdx
```

--------------------------------

### Get User Collections with Hidden Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getCollectionsByOwner.md

Fetches user collections, including those that are hidden, by setting the `includeHiddenProtectedDatas` parameter to true. This demonstrates how to retrieve all data associated with a user's collections, regardless of their visibility.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
const userCollectionsWithAllProtectedData =
  await dataProtectorSharing.getCollectionsByOwner({
    owner: '0xa0c15e...',
    includeHiddenProtectedDatas: true,
  });
```

--------------------------------

### Protect Simple User Profile Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/handle-schemas-dataset-types.md

This example demonstrates protecting a simple user profile containing an email, age, and subscription status. The iExec DataProtector SDK automatically generates a schema based on the provided data types. Requires '@iexec/dataprotector'.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const userData = await dataProtectorCore.protectData({
  data: {
    email: 'user@example.com',
    age: 25,
    isSubscribed: true,
  },
});
```

--------------------------------

### Access Protected Data in JavaScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

This JavaScript code snippet shows how to access protected data within the TEE, similar to the Python example. It reads a JSON file using Node.js file system modules.

```javascript
const fs = require('fs');
const path = require('path');

// Get the input directory and dataset filename
const iexecIn = process.env.IEXEC_IN;
const dataFilename = process.env.IEXEC_DATASET_FILENAME;

try {
  // Protected data is decrypted and available as files
  const dataPath = path.join(iexecIn, dataFilename);
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  // Access the sensitive data
  const userEmail = data.email;
  const userPreferences = data.preferences;

  console.log(`Processing data for user: ${userEmail}`);
} catch (error) {
  console.log('No protected data provided');
}
```

--------------------------------

### TypeScript: Define Rental Duration in Seconds

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/setProtectedDataRentingParams.md

This code example shows how to set the `duration` parameter, which represents the rental period for protected data in seconds. A longer duration means the data can be rented for a more extended period.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const setForRentingResult =
  await dataProtectorSharing.setProtectedDataRentingParams({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days // [!code focus]
  });
```

--------------------------------

### Get Task Result

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getResultFromCompletedTask.md

Retrieves the result of a completed iExec task. Requires the task ID and optionally accepts a file path, private key for decryption, and a status update callback.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const completedTaskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: '0x7ac398...'
});
```

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const completedTaskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: '0x7ac398...', // [!code focus]
});
```

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const completedTaskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: '0x7ac398...',
  path: 'content', // [!code focus]
});
```

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexecec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const completedTaskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: '0x7ac398...',
  pemPrivateKey: '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----', // [!code focus]
});
```

```typescript
import {
  IExecDataProtectorCore,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const completedTaskResult =
  await dataProtectorCore.getResultFromCompletedTask({
    taskId: '0x7ac398...',
    onStatusUpdate: ({ title, isDone }) => { // [!code focus]
      console.log(title, isDone); // [!code focus]
    }, // [!code focus]
  });
```

--------------------------------

### Unzip and View Task Result

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Extracts the contents of a downloaded task result zip file and displays the content of a specific output file (e.g., `result.txt`). This allows inspection of the application's output.

```bash
unzip my-result.zip -d my-result
cat my-result/result.txt
```

--------------------------------

### Get Collection Owners with Limit

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getCollectionOwners.md

Retrieves a limited number of collection owners, ordered by creation timestamp. Allows specifying the 'limit' parameter to control the number of results returned.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const collectionOwners = await dataProtectorSharing.getCollectionOwners({
  limit: 100, 
});
```

--------------------------------

### Check Docker BuildKit Platforms

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/3-buildIApp.md

A command to inspect the platforms supported by Docker BuildKit. This is crucial for ensuring your iApp deployment environment supports the required AMD64 architecture.

```sh
docker buildx inspect --bootstrap | grep -i platforms
```

--------------------------------

### Get Collection Subscriptions by Collection ID

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getCollectionSubscriptions.md

Fetches all subscriptions associated with a specific collection ID using the iExec Data Protector SDK. Requires a Web3 provider and an instance of IExecDataProtectorSharing. Returns subscription data for the specified collection.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const collectionActiveSubscriptions =
  await dataProtectorSharing.getCollectionSubscriptions({
    collectionId: 9,
  });
```

--------------------------------

### Check published apporders (Arbitrum Mainnet)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Retrieves and displays the published apporders for your specific iExec application on the Arbitrum Mainnet. Replace <your app address> with the actual address of your application.

```bash
iexec orderbook app --chain arbitrum-mainnet <your app address>
```

--------------------------------

### Set Protected Data for Sale with Specific Data Address - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/selling/setProtectedDataForSale.md

Illustrates setting protected data for sale, focusing on the `protectedData` parameter. This example shows how to pass the specific address of the protected data to the `setProtectedDataForSale` function.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const setForSaleResult = await dataProtectorSharing.setProtectedDataForSale({
  protectedData: '0x123abc...', // [!code focus]
  price: 2, // 2 nRLC
});
```

--------------------------------

### Vue Composition API for iExec Data Protection Setup

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/manage-access.md

This snippet demonstrates how to set up reactive variables in Vue.js using the Composition API to retrieve and display iExec chain information, including the web3Mail address and whitelist, based on the currently selected chain.

```javascript
import { computed } from 'vue';
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';
import RequiredBadge from '@/components/RequiredBadge.vue'
import OptionalBadge from '@/components/OptionalBadge.vue'

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const web3MailAddress = computed(() => chainData.value.web3MailAddress);
const web3MailAppWhitelist = computed(() => chainData.value.web3MailAppWhitelist);
```

--------------------------------

### Build Scone TEE Docker Image (Node.js)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Uses the sconify script to build a Trust Execution Environment (TEE) Docker image from a non-TEE image. This process involves signing the image with a generated key and configuring TEE-specific parameters for a Node.js application.

```bash
#!/bin/bash

# Declare image related variables
IMG_FROM=<docker-hub-user>/hello-world
IMG_TO=<docker-hub-user>/tee-scone-hello-world:1.0.0

# Run the sconifier to build the TEE image based on the non-TEE image
docker run -it --rm \
            -v $PWD/enclave-key.pem:/sig/enclave-key.pem \
            -v /var/run/docker.sock:/var/run/docker.sock \
            registry.scontain.com/scone-production/iexec-sconify-image:5.9.1-v16\
            sconify_iexec \
            --from=${IMG_FROM} \
            --to=${IMG_TO} \
            --binary-fs \
            --fs-dir=/app \
            --host-path=/etc/hosts \
            --host-path=/etc/resolv.conf \
            --binary=/usr/local/bin/node \
            --heap=1G \
            --dlopen=1 \
            --verbose \
            && echo -e "\n------------------\n" \
            && echo "successfully built TEE docker image => ${IMG_TO}" \
            && echo "application mrenclave.fingerprint is $(docker run --rm -e SCONE_HASH=1 ${IMG_TO})"
```

--------------------------------

### Filter Granted Access by Protected Data - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getGrantedAccess.md

Shows how to filter granted access by a specific protected data object address. This example initializes the iExec Data Protector core and calls getGrantedAccess, providing only the 'protectedData' parameter. Requires @iexec/dataprotector.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  protectedData: '0x123abc...', // [!code focus]
});
```

--------------------------------

### Filter Granted Access by Authorized App - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getGrantedAccess.md

Illustrates filtering granted access based on a specific authorized application's address. The example sets up the iExec Data Protector core and invokes getGrantedAccess with the 'authorizedApp' parameter. Requires @iexec/dataprotector.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  authorizedApp: '0x456def...', // [!code focus]
});
```

--------------------------------

### Get Collection Subscriptions Including Past Subscriptions

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getCollectionSubscriptions.md

Fetches subscription data, including historical subscriptions, for a given subscriber address using the iExec Data Protector SDK. Requires a Web3 provider for initialization. Set `includePastSubscriptions` to true to retrieve all past subscription records.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const userRentals = await dataProtectorSharing.getCollectionSubscriptions({
  subscriberAddress: '0x246bdf...',
  includePastSubscriptions: true, // [!code focus]
});
```

--------------------------------

### Query iExec Protected Data via GraphQL

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/tooling-and-explorers/subgraph-explorer.md

Example GraphQL query to retrieve iExec DataProtector data, including ID, name, owner, data type, and URI. This query is useful for accessing information about protected data within the iExec ecosystem.

```graphql
query {
  protectedDatas {
    id
    name
    owner {
      id
    }
    dataType
    dataUri
  }
}
```

--------------------------------

### Deploy iApp to Default Network

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

Deploys an iApp to the default network using the iApp Generator CLI. This command initiates the deployment process, which includes handling DockerHub credentials and app versioning.

```bash
iapp deploy
```

--------------------------------

### Get Collection Subscriptions by Subscriber Address

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getCollectionSubscriptions.md

Retrieves all subscriptions made by a specific user address using the iExec Data Protector SDK. This function requires initializing the SDK with a Web3 provider. It returns a list of subscriptions tied to the provided subscriber address.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const userActiveSubscriptions =
  await dataProtectorSharing.getCollectionSubscriptions({
    subscriberAddress: '0x246bdf...', // [!code focus]
  });
```

--------------------------------

### Specify Recipient's protectedData for sendEmail

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

This code example focuses on the `protectedData` parameter within the `sendEmail` method. It shows how to provide the address of the protectedData entity that holds the recipient's email address, which is crucial for sending the email securely.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...', // [!code focus]
  emailSubject: 'My email subject',
  emailContent: 'My email content',
});
```

--------------------------------

### Enable TDX per Command

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

This shows how to enable TDX for specific iApp commands (deploy and run) by prefixing the command with the environment variable `EXPERIMENTAL_TDX_APP=true`.

```bash
# Deploy TDX-enabled iApp
EXPERIMENTAL_TDX_APP=true iapp deploy

# Run with TDX
EXPERIMENTAL_TDX_APP=true iapp run <app-address>
```

--------------------------------

### Instantiate iExec SDK in Browser

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/sdk.md

Initializes the iExec SDK in a browser environment by connecting to the injected Ethereum provider (window.ethereum). Requires a browser with a Web3 provider.

```ts
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExec } from 'iexec';

// Connect to injected provider
const iexec = new IExec({ ethProvider: window.ethereum });
```

--------------------------------

### Publish new apporder (Arbitrum Mainnet)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Publishes a new apporder for your iExec application on the Arbitrum Mainnet. This command allows for the definition of custom access rules to the app. Default values can be used initially.

```bash
iexec app publish --chain arbitrum-mainnet
```

--------------------------------

### Run Vale Documentation Checks

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/README.md

Commands for running Vale locally to sync configurations, check documentation files, and generate reports.

```bash
# Download and install external configuration sources
vale sync

# Check all documentation files
vale src/

# Check specific files
vale src/get-started/helloWorld/1-overview.md

# Get detailed output
vale --output=line src/

# Generate comprehensive report with statistics
vale --output=line src/ > vale-report.txt 2>&1
```

--------------------------------

### Get User Collections with getCollectionsByOwner

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getCollectionsByOwner.md

Retrieves all collections associated with a specific owner's address. This method is part of the IExecDataProtectorSharing class and requires a web3 provider. The owner's address is mandatory, and an option to include hidden protected data is available.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
const userCollections = await dataProtectorSharing.getCollectionsByOwner({
  owner: '0xa0c15e...',
});
```

--------------------------------

### Initialize App Order Configuration

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Initializes an `apporder` section in your `iexec.json` file, preparing it for order parameter configuration.

```bash
iexec order init --app
```

--------------------------------

### Get Protected Data with Page Size - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections.md

Demonstrates how to retrieve protected data from collections using the iExec Data Protector SDK. It shows the usage of the 'pageSize' parameter to control the number of results per page, along with 'collectionId' and 'page'.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  collectionId: 12,
  page: 3,
  pageSize: 25, // [!code focus]
});
```

--------------------------------

### Vue.js: Configure iApp Deployment Steps for Arbitrum

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

This code defines the deployment steps for an iApp on the Arbitrum network using Vue.js. It outlines the questions asked and expected answers during the deployment process, including user input for DockerHub credentials and iApp version.

```javascript
import CLIDemo from '@/components/CLIDemo.vue';
import { computed } from 'vue';
import useUserStore from '@/stores/useUser.store';

const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const arbitrumSteps = [
  {
    showAt: 2,
    question: 'Using chain arbitrum-mainnet',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 3,
    question: 'This method requires sending blockchain transactions, transaction fees will be applied. Would you like to continue?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    showTyping: false,
    isComplete: false
  },
  {
    showAt: 4,
    question: 'Using saved walletPrivateKey (from iapp.config.json)',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 5,
    completeAt: 7,
    question: 'What is your username on DockerHub? (It will be used to properly tag the Docker image)',
    answer: 'bob',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 7,
    completeAt: 9,
    question: 'What is your DockerHub access token?',
    answer: '**********************',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 9,
    completeAt: 11,
    question: 'What is the version of your iApp?',
    answer: '0.0.1',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 11,
    question: 'Docker image built (sha256:a53fc4c480f482c384a13266ea2cb6cc5572733c866c44a5f604f4bfab3a744a) and tagged bob/hello-world:0.0.1',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 12,
    question: 'Pushed image bob/hello-world:0.0.1 on dockerhub',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 13,
    question: 'Pushed TEE image bob/hello-world:0.0.1-tee-scone-5.9.1-v16-ce3a01d9c5d7 on dockerhub',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 14,
    question: 'TEE app deployed',
    answer: '',
    showTyping: false,
    isComplete: true
  }
];

```

--------------------------------

### Specify Protected Data Address for Removal (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/collection/removeProtectedDataFromCollection.md

Illustrates the specific parameter required for the removeProtectedDataFromCollection method, focusing on the 'protectedData' field. This field accepts an AddressOrENS type, which is the address of the protected data to be removed from the collection. The example highlights how to pass this parameter.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.removeProtectedDataFromCollection({
  protectedData: '0x123abc...', // [!code focus]
});
```

--------------------------------

### Strict User Filtering for Granted Access - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getGrantedAccess.md

Explains how to use the 'isUserStrict' flag to retrieve only explicit user authorizations, excluding 'any' user grants. The example shows initializing the iExec Data Protector core and calling getGrantedAccess with 'isUserStrict' set to true. Requires @iexec/dataprotector.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  isUserStrict: true, // [!code focus]
});
```

--------------------------------

### Grant Access with Number of Accesses - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/grantAccess.md

Illustrates granting access to protected data with a limit on the total number of times it can be accessed. This is crucial for controlling data usage. If the access limit is exceeded, a 'no dataset orders' error will occur. The example uses the iExec Data Protector SDK.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  pricePerAccess: 3,
  numberOfAccess: 10, // [!code focus]
});
```

--------------------------------

### Run iExec Application Tests Locally

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/build-&-test.md

This command initiates the testing process for an iExec application. It builds a Docker image for the app, runs it to simulate the TEE environment, and displays the test outcomes. Users can choose to view application logs and the final output.

```bash
iapp test
```

--------------------------------

### Arbitrum DApp Execution Steps (JavaScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

JavaScript array defining the sequence of events for executing a DApp on the Arbitrum network. It includes stages like wallet connection, order creation, deal finalization, and result download prompts.

```javascript
const arbitrumRunSteps = [
  {
    showAt: 0,
    question: 'Using chain arbitrum',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 1,
    question: 'Using saved walletPrivateKey (from iapp.config.json)',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 2,
    question: 'Workerpool order fetched',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 3,
    question: 'AppOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 4,
    question: 'RequestOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 5,
    question: 'Deal created successfully',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 6,
    question: 'Task finalized',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 7,
    completeAt: 9,
    question:'Would you like to download the result ?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    showTyping: false,
    isComplete: false
  },
  {
    showAt: 9,
    question: 'Result downloaded to output',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 10,
    completeAt: 12,
    question:'Would you like to see the result ?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    showTyping: false,
    isComplete: false
  }
];
```

--------------------------------

### Vue Component for Dynamic Chain Information

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/protect-the-result.md

A Vue.js script setup that dynamically retrieves the current chain ID and related information (chain name, workerpool address) using a user store and chain utility functions. This data is used to populate commands with correct chain-specific values.

```javascript
import { computed } from 'vue';
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const chainName = computed(() => chainData.value.chainName);
const workerpoolAddress = computed(() => chainData.value.workerpoolAddress);
```

--------------------------------

### Run Deployed iApp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/building-your-iexec-app.md

Shows how to execute a deployed iApp on an iExec worker node using the 'iapp run' command. It demonstrates passing arguments, protected data, input files, requester secrets, and specifying the target blockchain network.

```bash
iapp run 0x1234567890abcdef1234567890abcdef12345678 --args "process=true" --inputFile "http://example.com/config.json" --chain mainnet
```

--------------------------------

### Vue.js: Configure iApp Deployment Steps for Bellecour

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

This code defines the deployment steps for an iApp on the Bellecour network using Vue.js. It details the sequence of prompts and expected user inputs for building and deploying a TEE iApp.

```javascript
const bellecourSteps = [
  {
    showAt: 2,
    question: 'Using chain bellecour',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 3,
    question: 'Using saved walletPrivateKey (from iapp.config.json)',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 4,
    completeAt: 6,
    question: 'What is your username on DockerHub? (It will be used to properly tag the Docker image)',
    answer: 'bob',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 6,
    completeAt: 8,
    question: 'What is your DockerHub access token?',
    answer: '**********************',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 8,
    completeAt: 10,
    question: 'What is the version of your iApp?',
    answer: '0.0.1',
    showTyping: true,
    isComplete: false
  },
  {
    showAt: 10,
    question: 'Docker image built (sha256:a53fc4c480f482c384a13266ea2cb6cc5572733c866c44a5f604f4bfab3a744a) and tagged bob/hello-world:0.0.1',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 11,
    question: 'Pushed image bob/hello-world:0.0.1 on dockerhub',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 12,
    question: 'Pushed TEE image bob/hello-world:0.0.1-tee-scone-5.9.1-v16-ce3a01d9c5d7 on dockerhub',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 13,
    question: 'TEE app deployed',
    answer: '',
    showTyping: false,
    isComplete: true
  }
];

```

--------------------------------

### Deploy iApp to iExec Network

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/building-your-iexec-app.md

Illustrates how to deploy a built iApp to the iExec network using the 'iapp deploy' command. It includes specifying the target blockchain network.

```bash
iapp deploy --chain goerli
```

--------------------------------

### Vue 3 Composition API for Chain Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/consume/consumeProtectedData.md

This snippet demonstrates using the Vue 3 Composition API to manage reactive state. It imports necessary modules, defines computed properties to get the current chain ID and its associated data, including the workerpool address, from a user store and utility functions.

```javascript
import { computed } from 'vue';
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';
import { Icon } from '@iconify/vue';
import RequiredBadge from '@/components/RequiredBadge.vue'
import OptionalBadge from '@/components/OptionalBadge.vue'
import ChainNotSupportedBadge from '@/components/ChainNotSupportedBadge.vue'

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const workerpoolAddress = computed(() => chainData.value.workerpoolAddress);
```

--------------------------------

### iExec Oracle Generic Contract Get Verified Result Function

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/oracle.md

An internal view function that retrieves and verifies the result of an iExec task. It performs checks on the task's execution status, authorization of components, and validation of trust level and tags before returning the task's result data.

```Solidity
function _iexecDoracleGetVerifiedResult(bytes32 _doracleCallId)
internal view returns (bytes memory)
```

--------------------------------

### AI Model iApp: User Execution (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Demonstrates a user initiating an AI model iApp, providing their personal data, the model iApp address, input files (like model weights), and execution arguments.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// User runs your AI model with their data
const response = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...', // Their personal data
  app: '0x456def...', // Your AI model iApp
  inputFiles: ['https://example.com/model-weights.pkl'],
  args: 'model_type=classification confidence_threshold=0.8',
});
```

--------------------------------

### Instantiate iExec SDK in NodeJS

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/sdk.md

Initializes the iExec SDK in a Node.js environment using a private key to sign transactions. Requires a running blockchain node and a private key.

```ts
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  'http://localhost:8545', // blockchain node URL
  'YOUR_PRIVATE_KEY'
);
const iexec = new IExec({
  ethProvider,
});
```

--------------------------------

### Constructor Update

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/migrate-from-v1.md

The instantiation process for IExecDataProtector has been updated in v2. Use the `.dataProtector` property for core methods or the new `IExecDataProtectorCore` for extended functionalities.

```APIDOC
## Constructor Changes

### Description
Demonstrates the updated way to instantiate the IExecDataProtector object for v2.

### Method
Constructor

### Endpoint
N/A

### Parameters
No direct parameters for the constructor itself in this context, but the underlying web3Provider is required.

### Request Example
```javascript
// 1.0.0 and before
// const dataProtector = new IExecDataProtector(web3Provider);

// AFTER 2.0.0
// with Umbrella Module
// const dataProtector = new IExecDataProtector(web3Provider).dataProtector;
// Or with Core Module
// const dataProtector = new IExecDataProtectorCore(web3Provider);
```

### Response
No direct response, but the instantiated object provides access to methods.
```

--------------------------------

### Use Protected Data with iApp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/3-buildIApp.md

Explains how to pass protected data to an iApp using the `--protectedData` option. For testing purposes, a default mock protected data is provided.

```sh
iapp test --protectedData default
```

--------------------------------

### Update IExecDataProtector Constructor for v2

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/migrate-from-v1.md

Demonstrates the updated constructor for IExecDataProtector in v2, showing how to reference the dataProtector or use the new IExecDataProtectorCore.

```javascript
// 1.0.0 and before
const dataProtector = new IExecDataProtector(web3Provider); // [!code --]

// AFTER 2.0.0
// with Umbrella Module
const dataProtector = new IExecDataProtector(web3Provider).dataProtector; // [!code ++]
// Or with Core Module
const dataProtector = new IExecDataProtectorCore(web3Provider); // [!code ++]
```

--------------------------------

### Using a Voucher with Web3Telegram

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/how-to-pay-executions.md

Illustrates how to send a message using the Web3Telegram service with voucher integration.

```APIDOC
## POST /web3telegram/sendTelegram

### Description
Sends a message via the Web3Telegram service, supporting voucher usage for payments.

### Method
POST

### Endpoint
/web3telegram/sendTelegram

### Request Body
- **protectedData** (string) - Required - The protected data identifier.
- **telegramContent** (string) - Required - The content of the telegram message.
- **senderName** (string) - Required - The name of the sender.
- **label** (string) - Optional - A custom identifier for the message.
- **dataMaxPrice** (number) - Optional - Maximum price for data in nRLC.
- **appMaxPrice** (number) - Optional - Maximum price for the app in nRLC.
- **workerpoolMaxPrice** (number) - Optional - Maximum price for the workerpool in nRLC.
- **useVoucher** (boolean) - Required - Set to true to utilize a voucher.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "telegramContent": "My telegram message content",
  "senderName": "Awesome project team",
  "label": "some-custom-id",
  "dataMaxPrice": 42,
  "appMaxPrice": 42,
  "workerpoolMaxPrice": 42,
  "useVoucher": true
}
```

### Response
#### Success Response (200)
- **transactionHash** (string) - The hash of the transaction.

#### Response Example
```json
{
  "transactionHash": "0xdef456..."
}
```
```

--------------------------------

### Using a Voucher with any iApp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/how-to-pay-executions.md

Shows how to process protected data with any iApp, enabling voucher usage.

```APIDOC
## POST /dataprotector/processProtectedData

### Description
Processes protected data using a specified iApp, with the option to use a voucher.

### Method
POST

### Endpoint
/dataprotector/processProtectedData

### Request Body
- **protectedData** (string) - Required - The protected data identifier.
- **app** (string) - Required - The iApp identifier.
- **useVoucher** (boolean) - Required - Set to true to use a voucher.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "app": "0x456def...",
  "useVoucher": true
}
```

### Response
#### Success Response (200)
- **result** (any) - The result of the data processing.

#### Response Example
```json
{
  "result": "..."
}
```
```

--------------------------------

### Run TEE iApp on iExec

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Executes a TEE iApp on the iExec network. It specifies the chain, required tags (like 'tee' and 'scone'), the workerpool address, and enables watching the execution progress.

```bash
iexec app run --chain {{chainName}} --tag tee,scone --workerpool {{workerpoolAddress}} --watch
```

--------------------------------

### Using a Voucher with Web3Mail

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/how-to-pay-executions.md

Demonstrates how to send an email using the Web3Mail service with the `useVoucher` option enabled.

```APIDOC
## POST /web3mail/sendEmail

### Description
Sends an email using the Web3Mail service. Vouchers can be used to cover transaction costs.

### Method
POST

### Endpoint
/web3mail/sendEmail

### Request Body
- **protectedData** (string) - Required - The protected data identifier.
- **emailSubject** (string) - Required - The subject of the email.
- **emailContent** (string) - Required - The content of the email.
- **useVoucher** (boolean) - Required - Set to true to use a voucher.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "emailSubject": "My email subject",
  "emailContent": "My email content",
  "useVoucher": true
}
```

### Response
#### Success Response (200)
- **transactionHash** (string) - The hash of the transaction.

#### Response Example
```json
{
  "transactionHash": "0xabc123..."
}
```
```

--------------------------------

### Enable TDX with Environment Variable

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

This command demonstrates how to enable TDX for iApp deployment and execution using an environment variable. The syntax for setting environment variables differs between operating systems.

```bash
# Set the experimental flag
export EXPERIMENTAL_TDX_APP=true

# Deploy and run with TDX
iapp deploy
iapp run <app-address>
```

--------------------------------

### Accessing Arguments (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Demonstrates how to access arguments passed to an iApp as command-line arguments using Python's `sys.argv`.

```APIDOC
## GET /api/app-args

### Description
Access configuration parameters passed as command-line arguments to the iApp.

### Method
GET

### Endpoint
`/api/app-args`

### Parameters
#### Request Example
```json
{
  "example": "import sys\n\nargs = sys.argv[1:]  # Skip first arg (script name)\nprint(f'Received arguments: {args}')"
}
```

### Response
#### Success Response (200)
- **args** (array) - An array of strings representing the command-line arguments.

#### Response Example
```json
{
  "example": "['--config', 'production']"
}
```
```

--------------------------------

### Deposit RLC to iExec Account

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Deposits RLC tokens from your connected wallet to your iExec account. This action increases the balance available for paying for computing tasks.

```bash
iexec account deposit --chain arbitrum-mainnet <amount>
```

--------------------------------

### Deploy TDX iApp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

This command deploys a TDX-enabled iApp. The EXPERIMENTAL_TDX_APP environment variable must be set to true before executing the iapp deploy command.

```bash
EXPERIMENTAL_TDX_APP=true iapp deploy
```

--------------------------------

### Generate Signing Key for TEE App

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Generates a custom RSA signing key required for the Scone sconification process. This key is used to sign the TEE Docker image.

```bash
openssl genrsa -3 -out enclave-key.pem 3072
```

--------------------------------

### Bellecour DApp Execution Steps (JavaScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

JavaScript array detailing the execution flow for a DApp on the Bellecour network. It mirrors the Arbitrum flow, including wallet usage, order processing, deal finalization, and result handling.

```javascript
const bellecourRunSteps = [
  {
    showAt: 2,
    question: 'Using chain bellecour',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 3,
    question: 'Using saved walletPrivateKey (from iapp.config.json)',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 4,
    question: 'Workerpool order fetched',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 5,
    question: 'AppOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 6,
    question: 'RequestOrder created',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 7,
    question: 'Deal created successfully',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 8,
    question: 'Task finalized',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 9,
    completeAt: 11,
    question:'Would you like to download the result ?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    showTyping: false,
    isComplete: false
  },
  {
    showAt: 11,
    question: 'Result downloaded to output',
    answer: '',
    showTyping: false,
    isComplete: true
  },
  {
    showAt: 12,
    completeAt: 14,
    question:'Would you like to see the result ?',
    answer: 'Yes',
    options: [
      { label: 'Yes', selected: true },
      { label: 'no', selected: false }
    ],
    highlighted: false,
    showTyping: false,
    isComplete: false
  }
];
```

--------------------------------

### Data Analysis iApp: User Execution (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Illustrates how a user initiates a data analysis iApp using DataProtector, specifying protected data, the iApp address, analysis arguments, and any necessary secrets.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// User runs your data analysis iApp
const response = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...', // Their business data
  app: '0x456def...', // Your analysis iApp
  args: 'analysis_type=sentiment period=monthly',
  secrets: { 1: 'api-key-for-external-service' },
});
```

--------------------------------

### Run iApp in TDX

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

Command to execute the iApp in a TDX environment, specifying the `tee,tdx` tag and the TDX workerpool.

```bash
iexec app run --tag tee,tdx --workerpool tdx-labs.pools.iexec.eth --watch
```

--------------------------------

### Enable Experimental TDX Support for iApps

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/building-your-iexec-app.md

Enables experimental Intel TDX support for iExec applications. This is done by setting the EXPERIMENTAL_TDX_APP=true environment variable before running commands like 'iapp test', 'iapp deploy', or 'iapp run'.

```bash
EXPERIMENTAL_TDX_APP=true iapp test
EXPERIMENTAL_TDX_APP=true iapp deploy
EXPERIMENTAL_TDX_APP=true iapp run <app-address>
```

--------------------------------

### Mock Input Data for iExec Testing with iapp mock

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/building-your-iexec-app.md

Creates mocked input data for testing iExec applications. Supports various input types and options for specifying arguments, protected data, input files, and requester secrets.

```bash
iapp mock <inputType>
iapp mock <inputType> --args <string>
iapp mock <inputType> --protectedData <string>
iapp mock <inputType> --inputFile <string>
iapp mock <inputType> --requesterSecret <array>
```

--------------------------------

### Show iExec Account Balance

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Displays the current RLC balance and stake associated with your iExec account on a specific chain. This helps manage funds required for computation.

```bash
iexec account show --chain arbitrum-mainnet
```

--------------------------------

### AI Model iApp: Loading Model and Data (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Shows a Python iApp loading a machine learning model from input files, accessing user data, running inference, and saving the encrypted predictions.

```python
# Load model from input files
model = load_model_from_inputs()

# Get user data to process
user_data = load_protected_data()

# Run inference
predictions = model.predict(user_data)

# Return encrypted results
save_encrypted_results(predictions)
```

--------------------------------

### Deploy iApp to Arbitrum Mainnet

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

Deploys an iApp to the Arbitrum mainnet using the iApp Generator CLI. This process involves providing DockerHub credentials and specifying the app version for both standard and TEE-compatible images.

```bash
iapp deploy --chain arbitrum-mainnet
```

--------------------------------

### Python iApp Main File

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/building-your-iexec-app.md

Shows the default structure for the main application logic file when initializing an iApp with Python. This file is intended for implementing the iApp's core functionalities and data processing.

```python
# src/app.py

import os

print("Hello World iApp!")
# Access environment variables like:
# worker_provider_address = os.environ.get('IEX_WORKER_PROVIDER_ADDRESS')

```

--------------------------------

### Import and Initialize IExecDataProtectorCore

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/2-protectData.md

Import the necessary components from '@iexec/dataprotector' and initialize the IExecDataProtectorCore with a web3 provider. This sets up the core functionality for interacting with the DataProtector.

```ts
import { Address, IExecDataProtector } from '@iexec/dataprotector';
```

```ts
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { address: protectedDataAddress } = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
});
```

--------------------------------

### Execute iApp on Arbitrum Mainnet

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

Executes a deployed iApp on the Arbitrum mainnet using its contract address with the iApp Generator CLI. This is for iApps that may require specific inputs or configurations.

```bash
iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923 --chain arbitrum-mainnet
```

--------------------------------

### Run TDX iApp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

This command executes a TDX-enabled iApp. Similar to deployment, the EXPERIMENTAL_TDX_APP environment variable needs to be set to true before running the iapp run command with the application address.

```bash
EXPERIMENTAL_TDX_APP=true iapp run <app-address>
```

--------------------------------

### Retrieve TEE Enclave Fingerprint

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Retrieves the enclave fingerprint (mrenclave) for a TEE image by running it with the `SCONE_HASH=1` environment variable. This fingerprint is crucial for TEE application verification.

```bash
docker run --rm -e SCONE_HASH=1 <docker-hub-user>/tee-scone-hello-world:1.0.0
```

--------------------------------

### JavaScript iApp Main File

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/building-your-iexec-app.md

Displays the default structure for the main application logic file when initializing an iApp with JavaScript. This file is where the core algorithm and data processing of the iApp are implemented.

```javascript
// src/app.js

console.log('Hello World iApp!');

```

--------------------------------

### Send Email with Voucher (Web3Mail)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/how-to-pay-executions.md

Demonstrates how to send an email using the Web3Mail service with a voucher. It initializes the IExecWeb3mail service and calls the sendEmail function, enabling the use of a voucher.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  useVoucher: true
});
```

--------------------------------

### Bellecour Execution Completion Items (JavaScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

JavaScript array specifying the completion details for a DApp run on the Bellecour network, including the deal hash, task hash, and confirmation of result download.

```javascript
const bellecourRunCompletionItems = [
  '└ Deal: 0x26d758de1be51697c33fa606cd0c5243082a6e675a4463b106d71fde2893280f',
  '└ Task: 0x1a58dd6018b30b022eb35be53ad9374eb630925458d14643a1dfd9c686b964d8',
  '└ Result: Downloaded to output directory'
];
```

--------------------------------

### Create AddOnlyAppWhitelist with IExecDataProtectorSharing (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/apps-whitelist/createAddOnlyAppWhitelist.md

Demonstrates how to create an AddOnlyAppWhitelist using the IExecDataProtectorSharing class. It requires a Web3 provider and initializes the class to call the createAddOnlyAppWhitelist method.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const isAddedToAddAppToAddOnlyAppWhitelist =
  await dataProtectorSharing.createAddOnlyAppWhitelist();
```

--------------------------------

### IExecDataProtector Constructor Configuration

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/advanced-configuration.md

Demonstrates how to configure the IExecDataProtector constructor with various advanced options.

```APIDOC
## POST /api/dataprotector/configure

### Description
This section details the advanced configuration options available for the `IExecDataProtector` constructor, allowing for customization beyond default settings.

### Method
POST (Conceptual, as this relates to constructor options, not a direct API call)

### Endpoint
N/A (Constructor Configuration)

### Parameters
#### Request Body
- **dataprotectorContractAddress** (AddressOrENS) - Optional - The Ethereum contract address or ENS for the dataProtector smart contract. Defaults to the iExec provided address.
- **sharingContractAddress** (AddressOrENS) - Optional - The Ethereum contract address or ENS for the dataProtector sharing smart contract. Defaults to the iExec provided address.
- **subgraphUrl** (string) - Optional - The subgraph URL for querying data. Defaults to the iExec provided subgraph URL.
- **ipfsNode** (string) - Optional - The IPFS node URL for content uploads. Defaults to the iExec provided IPFS node.
- **ipfsGateway** (string) - Optional - The IPFS gateway URL for content downloads. Defaults to the iExec provided IPFS gateway.
- **iexecOptions** (object) - Optional - Low-level configuration options for the `iexec` SDK. Refer to the [iExec SDK documentation](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/interfaces/IExecConfigOptions.md) for details. This can include options like `smsURL`.

### Request Example
```json
{
  "dataprotectorContractAddress": "0x123abc...",
  "sharingContractAddress": "0x456def...",
  "subgraphUrl": "https://subgraph.example.com",
  "ipfsNode": "https://ipfs.example.com:5001",
  "ipfsGateway": "https://ipfs.gateway.example.com",
  "iexecOptions": {
    "smsURL": "https://sms.labs.iex.ec"
  }
}
```

### Response
#### Success Response (200)
N/A (Constructor configuration does not return a response in this manner)

#### Response Example
N/A
```

--------------------------------

### IExecWeb3Telegram Constructor Configuration

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/advanced-configuration.md

Configuration options for the IExecWeb3Telegram constructor, allowing customization of various integration parameters.

```APIDOC
## IExecWeb3Telegram Constructor Configuration

### Description
This section details the optional configuration parameters for the `IExecWeb3Telegram` constructor, allowing for customization of default settings.

### Method
Constructor

### Endpoint
N/A (Constructor)

### Parameters
#### Request Body
- **dappAddressOrENS** (string) - Optional - The Ethereum contract address or ENS for the web3telegram iApp. Defaults to the iExec-provided default.
- **dappWhitelistAddress** (string) - Optional - The Ethereum contract address for the web3telegram iApp whitelist. Defaults to the iExec-provided default.
- **dataProtectorSubgraph** (string) - Optional - The subgraph URL for querying data. Defaults to the iExec-provided default.
- **ipfsNode** (string) - Optional - The IPFS node URL for content uploads. Defaults to the iExec-provided default.
- **ipfsGateway** (string) - Optional - The IPFS gateway URL for content downloads. Defaults to the iExec-provided default.
- **iexecOptions** (object) - Optional - Low-level configuration options for the `iexec` SDK. Refer to the [iexec SDK documentation](https://github.com/iExecBlockchainComputing/iexec-sdk/blob/master/docs/interfaces/IExecConfigOptions.md) for details.

### Request Example
```json
{
  "dappAddressOrENS": "0x456def...",
  "dappWhitelistAddress": "0x789abc...",
  "dataProtectorSubgraph": "https://subgraph.example.com",
  "ipfsNode": "https://ipfs.example.com",
  "ipfsGateway": "https://ipfs-gateway.example.com",
  "iexecOptions": {
    "provider": "YOUR_ETHEREUM_PROVIDER",
    "privateKey": "YOUR_PRIVATE_KEY"
  }
}
```

### Response
#### Success Response (N/A - Constructor)
This is a constructor, it does not return a response in the traditional API sense. It initializes an `IExecWeb3telegram` instance.
```

--------------------------------

### Setting Maximum Prices for iApp Execution

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/how-to-pay-executions.md

Explains how to control costs for iApp execution by setting maximum prices for different fee components.

```APIDOC
## POST /dataprotector/processProtectedData (with price limits)

### Description
Processes protected data with an iApp while setting limits on the maximum price for application, data, and workerpool fees.

### Method
POST

### Endpoint
/dataprotector/processProtectedData

### Request Body
- **protectedData** (string) - Required - The protected data identifier.
- **app** (string) - Required - The iApp identifier.
- **dataMaxPrice** (number) - Optional - Maximum amount (in nRLC) to pay the protected data owner. Defaults to 0.
- **appMaxPrice** (number) - Optional - Maximum amount (in nRLC) to pay the iApp provider. Defaults to 0.
- **workerpoolMaxPrice** (number) - Optional - Maximum amount (in nRLC) to pay the workerpool provider. Defaults to 0.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "app": "0x456def...",
  "dataMaxPrice": 5,
  "appMaxPrice": 3,
  "workerpoolMaxPrice": 2
}
```

### Response
#### Success Response (200)
- **result** (any) - The result of the data processing.

#### Response Example
```json
{
  "result": "..."
}
```
```

--------------------------------

### Import Existing iExec Wallet

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Imports an existing iExec wallet using its private key.

```bash
iexec wallet import <private-key>
```

--------------------------------

### Verify TDX Enabled

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

This command helps verify if TDX is enabled for your deployed iApp by showing the application's details, which should include TDX-related tags if configured correctly. Replace <app-address> with the actual address of your deployed iApp.

```bash
iexec app show <app-address>
```

--------------------------------

### Execute iApp on Default Network

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

Executes a deployed iApp on the default network using its contract address via the iApp Generator CLI. This command is used for running iApps that are self-sufficient or data-dependent.

```bash
iapp run 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923
```

--------------------------------

### Using Someone Else's Voucher with any iApp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/how-to-pay-executions.md

Details how to process protected data with an iApp using another user's voucher.

```APIDOC
## POST /dataprotector/processProtectedData (with external voucher)

### Description
Processes protected data using a specified iApp and an external voucher, requiring owner authorization.

### Method
POST

### Endpoint
/dataprotector/processProtectedData

### Request Body
- **protectedData** (string) - Required - The protected data identifier.
- **app** (string) - Required - The iApp identifier.
- **useVoucher** (boolean) - Required - Set to true to use a voucher.
- **voucherOwner** (string) - Required - The address of the voucher owner.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "app": "0x456def...",
  "useVoucher": true,
  "voucherOwner": "0x5714eB..."
}
```

### Response
#### Success Response (200)
- **result** (any) - The result of the data processing.

#### Response Example
```json
{
  "result": "..."
}
```
```

--------------------------------

### Create Basic Outputs and computed.json (Python & JavaScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/outputs.md

Demonstrates how to generate a main result file (e.g., result.json) and the mandatory computed.json metadata file. The computed.json specifies the deterministic output path and other execution details. This pattern is crucial for iApp output management.

```python
import os
import json

# Get output directory
iexec_out = os.environ['IEXEC_OUT']

# Create your result file
result_data = {
    "analysis": "positive sentiment",
    "confidence": 0.92,
    "processed_at": "2024-01-15T10:30:00Z"
}

# Save main result
with open(f"{iexec_out}/result.json", 'w') as f:
    json.dump(result_data, f)

# REQUIRED: Create `computed.json` metadata
computed_metadata = {
    "deterministic-output-path": f"{iexec_out}/result.json",
    "execution-timestamp": "2024-01-15T10:30:00Z",
    "app-version": "1.0.0"
}

with open(f"{iexec_out}/computed.json", 'w') as f:
    json.dump(computed_metadata, f)
```

```javascript
const fs = require('fs');
const path = require('path');

// Get output directory
const iexecOut = process.env.IEXEC_OUT;

// Create your result file
const resultData = {
  analysis: 'positive sentiment',
  confidence: 0.92,
  processed_at: '2024-01-15T10:30:00Z',
};

// Save main result
fs.writeFileSync(
  path.join(iexecOut, 'result.json'),
  JSON.stringify(resultData, null, 2)
);

// REQUIRED: Create computed.json metadata
const computedMetadata = {
  'deterministic-output-path': path.join(iexecOut, 'result.json'),
  'execution-timestamp': '2024-01-15T10:30:00Z',
  'app-version': '1.0.0',
};

fs.writeFileSync(
  path.join(iexecOut, 'computed.json'),
  JSON.stringify(computedMetadata, null, 2)
);
```

--------------------------------

### Method Renames and New Filtering

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/migrate-from-v1.md

Key methods have been renamed for standardization. `fetchProtectedData` is now `getProtectedData` and includes a new `creationTimestampGte` filter.

```APIDOC
## Method Renames

### Description
Illustrates the renaming of `fetchProtectedData` to `getProtectedData` and the addition of a new filtering parameter.

### Method
`getProtectedData` (formerly `fetchProtectedData`)

### Endpoint
N/A

### Parameters
#### Query Parameters
- **owner** (string) - Required - The owner of the protected data.
- **creationTimestampGte** (number) - Optional - Filters data created on or after this timestamp.

### Request Example
```javascript
// await dataProtector.fetchProtectedData({ owner: '0xa0c15e...' }); // Old
// await dataProtector.getProtectedData({ owner: '0xa0c15e...', creationTimestampGte: 1707237580 }); // New
```
```

```APIDOC
## Method Rename: fetchGrantedAccess

### Description
Shows the renaming of the `fetchGrantedAccess` method.

### Method
`getGrantedAccess` (formerly `fetchGrantedAccess`)

### Endpoint
N/A

### Parameters
#### Query Parameters
- **protectedData** (string) - Required - The protected data identifier.
- **authorizedApp** (string) - Required - The authorized application identifier.
- **owner** (string) - Required - The owner of the protected data.

### Request Example
```javascript
// await dataProtector.fetchGrantedAccess({ protectedData: '0x123abc...', authorizedApp: '0x456def...', owner: '0xa0c15e...' }); // Old
// await dataProtector.getGrantedAccess({ protectedData: '0x123abc...', authorizedApp: '0x456def...', owner: '0xa0c15e...' }); // New
```
```

--------------------------------

### Specifying input files for iExec application execution

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Illustrates how to use the 'inputFiles' parameter to specify a list of URLs for input files required by an iExec application.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'], // [!code focus]
  });
```

--------------------------------

### Instantiate IExecDataProtector with iexecOptions

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/advanced-configuration.md

Illustrates initializing IExecDataProtector with low-level configuration options for the iexec SDK, such as specifying an SMS URL. Refer to the iexec SDK documentation for a full list of options.

```typescript
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const dataProtector = new IExecDataProtector(web3Provider, {
  iexecOptions: { smsURL: 'sms-url' }, // [!code focus]
});
```

--------------------------------

### Configure `chain.json` for TDX

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

This JSON snippet shows how to update the `chain.json` file to reference the TDX Workerpool for Intel TDX applications.

```json
{
  "default": "bellecour",
  "chains": {
    "bellecour": {
      "sms": { "tdx": "https://sms.labs.iex.ec" }
    }
  }
}
```

--------------------------------

### Report Generator iApp: User Execution (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Illustrates a user triggering a report generation iApp, specifying their business data, the iApp address, reporting parameters, and template input files.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// User generates a report from their business data
const response = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...', // Their business data
  app: '0x456def...', // Your report generator iApp
  args: 'report_type=quarterly format=pdf include_charts=true',
  inputFiles: ['https://example.com/company-template.xlsx'],
});
```

--------------------------------

### Accessing Input Files (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Shows how to access input files downloaded to the iExec iApp environment in Python. It reads files from the specified input directory.

```python
import os

# Get the input files directory
input_dir = os.environ.get('IEXEC_INPUT_FILES_FOLDER', './input')

# List all downloaded files
print(f"Reading files from: {input_dir}")
if os.path.exists(input_dir):
    for filename in os.listdir(input_dir):
        file_path = os.path.join(input_dir, filename)

        # Process your file
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                print(f"Loaded file: {filename}, Content length: {len(content)}")
        except Exception as e:
            print(f"Error reading file {filename}: {e}")
else:
    print("Input directory does not exist.")
```

--------------------------------

### Run iApp with Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/4-manageDataAccess.md

This command shows how to run an iApp and process protected data. It utilizes a command-line interface and requires the iApp address and the protected data address, which can be passed as a variable.

```shell
iapp run <my-iapp-address> --protectedData {{ protectedDataAddress }}
```

--------------------------------

### Set Up and Rent Time-Based Data Access (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/monetize-protected-data.md

Demonstrates how a data owner can set up time-based rental terms for protected data and how a client can rent access for a specific duration. Requires the '@iexec/dataprotector' library.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
// DATA OWNER: Set up time-based rental terms
await dataProtectorSharing.setProtectedDataToRenting({
  protectedData: '0x123abc...',
  price: 5000000000, // 5 RLC for the entire period
  duration: 604800, // 7 days of unlimited access
});

// CLIENT/SUBSCRIBER: Rent access for the full time period
const rental = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 5000000000, // One payment for full period
  duration: 604800, // Unlimited use for 7 days
});
```

--------------------------------

### Process Protected Data with Voucher (Any iApp)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/how-to-pay-executions.md

Shows how to process protected data for any iApp using a voucher. This involves initializing IExecDataProtectorCore and calling processProtectedData with the useVoucher flag set to true.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  useVoucher: true
});
```

--------------------------------

### Safe iApp File Operations (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/debugging.md

This Python code demonstrates safe file operations for iApps, ensuring the output directory exists before writing results. It uses `os.makedirs` with `exist_ok=True` and includes error handling for the file writing process.

```python
import os, json

# Always ensure output directory exists
iexec_out = os.environ['IEXEC_OUT']
os.makedirs(iexec_out, exist_ok=True)

# Write results safely
try:
    with open(f"{iexec_out}/result.json", 'w') as f:
        json.dump(result_data, f)
except Exception as e:
    print(f"ERROR: Failed to write results: {e}")
    sys.exit(1)
```

--------------------------------

### Local iApp Testing Commands (Bash)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/debugging.md

These bash commands are used for local testing of iApps. The `iapp test` command allows for testing with arguments and secrets, while `iapp mock` can be used to mock protected data for testing purposes.

```bash
# Test your iApp locally
iapp test --args "model=bert threshold=0.8"
iapp test --secrets "key1=value1,key2=value2"

# Mock protected data for testing
iapp mock protectedData
iapp test --protectedData "mock_name"
```

--------------------------------

### Debug TDX Execution

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

This command initiates the debugging process for a Trusted Domain Extensions (TDX) application by setting an environment variable and calling the iapp debug command with a specific task ID. Ensure the EXPERIMENTAL_TDX_APP environment variable is set to true.

```bash
EXPERIMENTAL_TDX_APP=true iapp debug <taskId>
```

--------------------------------

### Instantiate IExecDataProtector for TDX Environment

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/advanced-configuration.md

Demonstrates how to instantiate the IExecDataProtector to utilize the experimental Intel TDX environment by configuring it to connect to the TDX SMS and use a TDX workerpool.

```typescript
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecDataProtector } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate dataProtector connected to the TDX SMS
const dataProtector = new IExecDataProtector(web3Provider, {
  iexecOptions: {
    smsURL: 'https://sms.labs.iex.ec',
  },
});
```

--------------------------------

### Accessing Command-Line Arguments (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Demonstrates how to access command-line arguments passed to an iApp in Python. It parses arguments expected to be in a key=value format.

```python
import os

# Get arguments from environment variable
args_str = os.environ.get('IEXEC_APP_ARGS_')

if args_str:
    args = args_str.split()
    if len(args) >= 2:
        model_name = args[0]      # "model=bert"
        threshold = args[1]       # "threshold=0.8"
        print(f"Model: {model_name}, Threshold: {threshold}")
    else:
        print("Not enough arguments provided.")
else:
    print("No arguments provided.")
```

--------------------------------

### Vue.js: iApp Completion Items for Arbitrum and Bellecour

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

This code defines arrays containing completion messages for deployed iApps on Arbitrum and Bellecour networks. These messages typically include the Docker image digest and the iApp's contract address.

```javascript
const arbitrumCompletionItems = [
  '└ Docker image: bob/hello-world:0.0.1-tee-scone-5.9.1-v16-ce3a01d9c5d7',
  '└ iApp address: 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923'
];

const bellecourCompletionItems = [
  '└ Docker image: bob/hello-world:0.0.1-tee-scone-5.9.1-v16-ce3a01d9c5d7',
  '└ iApp address: 0x1f80DCebc2EAAff0Db7156413C43B7e88D189923'
];

```

--------------------------------

### Use Voucher for Email Sending with sendEmail

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

This code demonstrates how to enable email sending using a voucher by setting the `useVoucher` parameter to `true`. This option allows payment for the email deal using a voucher held in the user's wallet. If the voucher lacks sufficient funds, the SDK will attempt to use the iExec account.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  useVoucher: true, // [!code focus]
});
```

--------------------------------

### Rent Protected Data using iExec SDK

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/rentProtectedData.md

Demonstrates how to rent a protected data item using the `rentProtectedData` method from the iExec SDK. It initializes the provider and data protector, then calls the rent method with specified protected data address, price, and duration. The SDK checks if the provided price and duration match the current listing to prevent failed transactions.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 1, // 1 nRLC
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days
});
```

--------------------------------

### Providing Protected Data via DataProtector

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Shows how a user provides protected data to an iApp using the `iExecDataProtectorCore` library. It involves specifying the protected data address and the iApp address.

```APIDOC
## POST /api/process-protected-data

### Description
Execute an iApp with specified protected data using the DataProtector.

### Method
POST

### Endpoint
`/api/process-protected-data`

### Parameters
#### Request Body
- **protectedData** (string) - Required - The address of the protected data.
- **app** (string) - Required - The address of the iApp to execute.

### Request Example
```json
{
  "example": "import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';\n\nconst web3Provider = getWeb3Provider('PRIVATE_KEY');\nconst dataProtectorCore = new IExecDataProtectorCore(web3Provider);\n\nconst response = await dataProtectorCore.processProtectedData({\n  protectedData: '0x123abc...', // Address of the protected data\n  app: '0x456def...', // Your iApp address\n});"
}
```

### Response
#### Success Response (200)
- **result** (string) - The result of the iApp execution.

#### Response Example
```json
{
  "example": "iApp execution successful"
}
```
```

--------------------------------

### Sign App Order

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Signs the app order configuration stored in `iexec.json` using the currently configured wallet.

```bash
iexec order sign --app
```

--------------------------------

### Mermaid Diagram: iExec SGX Workflow

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/tee/intel-sgx.md

Illustrates the end-to-end process of developing and deploying an SGX application on the iExec platform, from developer build to secure execution and result retrieval.

```mermaid
graph TD
    Dev[Developer]
    Build[Build with Scone]
    Deploy[Deploy to iExec]
    Worker[SGX Worker Selected]
    Enclave[SGX Enclave Created]
    Execute[Secure Execution]
    Proof[Proof of Contribution]
    Result[Results]
    Dev --> Build
    Build --> Deploy
    Deploy --> Worker
    Worker --> Enclave
    Enclave --> Execute
    Execute --> Proof
    Proof --> Result
    style Enclave fill:#ffffff,stroke:#0000ff,stroke-width:2px,color:#000000
    style Execute fill:#ffffff,stroke:#0000ff,stroke-width:2px,color:#000000
```

--------------------------------

### Update revokeAllAccess Method with Status Callback

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/migrate-from-v1.md

Shows the updated revokeAllAccess method in v2, now including an optional onStatusUpdate callback to provide status updates during the access revocation process.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const allAccessRevoked = await dataProtectorCore.revokeAllAccess({
  protectedData: '0x123abc...',
  onStatusUpdate: ({ title, isDone }) => { // [!code ++]
    console.log(title, isDone); // [!code ++]
  }, // [!code ++]
});

```

--------------------------------

### Web3Mail API Methods

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail.md

This section outlines the available methods for interacting with the Web3Mail API, including fetching contacts and sending emails.

```APIDOC
## GET /fetchMyContacts

### Description
Retrieves a list of Ethereum addresses for which the current user has been granted authorization to send emails.

### Method
GET

### Endpoint
/fetchMyContacts

### Parameters
#### Query Parameters
- None

#### Request Body
- None

### Response
#### Success Response (200)
- **contacts** (array) - A list of Ethereum addresses.

#### Response Example
```json
{
  "contacts": [
    "0x123...abc",
    "0x456...def"
  ]
}
```

---

## GET /fetchUserContacts

### Description
Retrieves a list of Ethereum addresses whose owners have authorized a specified entity to email them.

### Method
GET

### Endpoint
/fetchUserContacts

### Parameters
#### Query Parameters
- **entityAddress** (string) - Required - The Ethereum address of the entity whose authorized contacts are to be fetched.

#### Request Body
- None

### Response
#### Success Response (200)
- **contacts** (array) - A list of Ethereum addresses authorized by the entity's contacts.

#### Response Example
```json
{
  "contacts": [
    "0x789...ghi",
    "0xabc...jkl"
  ]
}
```

---

## POST /sendEmail

### Description
Sends an email message to a user's protected data address.

### Method
POST

### Endpoint
/sendEmail

### Parameters
#### Query Parameters
- None

#### Request Body
- **toAddress** (string) - Required - The Ethereum address of the `protectedData` containing the recipient's email address.
- **subject** (string) - Required - The subject line of the email.
- **body** (string) - Required - The content of the email message.

### Request Example
```json
{
  "toAddress": "0x123...abc",
  "subject": "Hello from Web3Mail!",
  "body": "This is a test email sent via Web3Mail."
}
```

### Response
#### Success Response (200)
- **message** (string) - Confirmation message indicating the email was sent successfully.

#### Response Example
```json
{
  "message": "Email sent successfully to 0x123...abc"
}
```
```

--------------------------------

### Processing Protected Data with Arguments (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Illustrates how to use the iExec DataProtector SDK in TypeScript to process protected data, including passing public arguments to the iApp.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

async function processDataWithArgs() {
    const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY'); // Replace with actual private key handling
    const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
    
    try {
        const response = await dataProtectorCore.processProtectedData({
            protectedData: '0x123abc...', // Replace with actual protected data address
            app: '0x456def...', // Replace with actual app address
            args: 'model=sentiment-bert temperature=0.7 format=json', // Public arguments
        });
        console.log('Protected data processed successfully:', response);
    } catch (error) {
        console.error('Error processing protected data:', error);
    }
}

processDataWithArgs();
```

--------------------------------

### Show iExec Wallet Information

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Displays the currently configured iExec wallet address and related information.

```bash
iexec wallet show
```

--------------------------------

### Accessing Input Files (JavaScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Demonstrates how to access input files downloaded to the iExec iApp environment in JavaScript. It reads files from the specified input directory.

```javascript
const fs = require('fs');
const path = require('path');

// Get the input files directory
const inputDir = process.env.IEXEC_INPUT_FILES_FOLDER || './input';

// List all downloaded files
console.log(`Reading files from: ${inputDir}`);
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading input directory:', err);
    return;
  }
  if (files.length === 0) {
      console.log('No files found in the input directory.');
      return;
  }
  files.forEach((filename) => {
    const filePath = path.join(inputDir, filename);

    // Process your file
    fs.readFile(filePath, 'utf8', (readErr, content) => {
      if (readErr) {
        console.error(`Error reading file ${filename}:`, readErr);
        return;
      }
      console.log(`Loaded file: ${filename}, Content length: ${content.length}`);
    });
  });
});
```

--------------------------------

### Arbitrum Execution Completion Items (JavaScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/deploy-&-run.md

JavaScript array listing the final outputs of a DApp execution on Arbitrum, specifically the deal ID, task ID, and the result download status.

```javascript
const arbitrumRunCompletionItems = [
  '└ Deal: 0x26d758de1be51697c33fa606cd0c5243082a6e675a4463b106d71fde2893280f',
  '└ Task: 0x1a58dd6018b30b022eb35be53ad9374eb630925458d14643a1dfd9c686b964d8',
  '└ Result: Downloaded to output directory'
];
```

--------------------------------

### Configure Web3Telegram with Custom IPFS Gateway

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/advanced-configuration.md

Initializes the IExecWeb3telegram instance with a custom IPFS gateway URL for content downloads. This allows fetching content from a preferred IPFS gateway.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  ipfsGateway: 'ipfs-gateway-url', // [!code focus]
});
```

--------------------------------

### Processing Protected Data with Input Files (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Shows how to use the iExec DataProtector SDK in TypeScript to process protected data, including specifying an array of URLs for input files.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

async function processDataWithInputFiles() {
    const web3Provider = getWeb3Provider('YOUR_PRIVATE_KEY'); // Replace with actual private key handling
    const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
    
    try {
        const response = await dataProtectorCore.processProtectedData({
            protectedData: '0x123abc...', // Replace with actual protected data address
            app: '0x456def...', // Replace with actual app address
            inputFiles: [
                'https://example.com/sentiment-model.pkl',
                'https://myapp.com/config.json',
            ],
        });
        console.log('Protected data processed with input files:', response);
    } catch (error) {
        console.error('Error processing protected data with input files:', error);
    }
}

processDataWithInputFiles();
```

--------------------------------

### Initialize a Workerpool Order

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/worker/manage-access.md

Initializes a new workerpool order using the iexec CLI. This command sets up the basic structure for a workerpool order configuration.

```bash
iexec order init --workerpool
```

--------------------------------

### Instantiate IExecDataProtector with dataprotectorContractAddress

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/advanced-configuration.md

Demonstrates how to instantiate the IExecDataProtector by providing a custom Ethereum contract address for the dataProtector smart contract. If not provided, a default address is used.

```typescript
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const dataProtector = new IExecDataProtector(web3Provider, {
  dataprotectorContractAddress: '0x123abc...', // [!code focus]
});
```

--------------------------------

### Publish a Workerpool Order

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/worker/manage-access.md

This section details the process of publishing a workerpool order, including initializing, configuring, signing, and publishing the order.

```APIDOC
## POST /api/workerpool/order

### Description
Publishes a workerpool order to the iExec Marketplace after initialization and signing.

### Method
POST

### Endpoint
/api/workerpool/order

### Parameters
#### Request Body
- **workerpool** (string) - Required - The address of the workerpool.
- **workerpoolprice** (string) - Required - The price to charge for each execution (in nano RLC).
- **volume** (string) - Required - The number of authorized uses.
- **tag** (string) - Optional - Restricts usage to a specific runtime (e.g., Scone, Gramine).
- **category** (string) - Optional - Defines the deal category and deadlines.
- **trust** (string) - Optional - Trust level of the execution.
- **apprestrict** (string) - Optional - Restricts usage to a specific app.
- **datasetrestrict** (string) - Optional - Restricts usage to a specific dataset.
- **requesterrestrict** (string) - Optional - Restricts usage to a specific requester.

### Request Example
```json
{
  "workerpool": "0x...",
  "workerpoolprice": "10000",
  "volume": "100",
  "tag": "0x0000000000000000000000000000000000000000000000000000000000000003",
  "trust": "1",
  "apprestrict": "0x0000000000000000000000000000000000000000",
  "datasetrestrict": "0x0000000000000000000000000000000000000000",
  "requesterrestrict": "0x0000000000000000000000000000000000000000"
}
```

### Response
#### Success Response (200)
- **orderHash** (string) - The hash of the published workerpool order.

#### Response Example
```json
{
  "orderHash": "0xabcdef1234567890..."
}
```
```

--------------------------------

### Setting execution arguments with args in iExec

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Shows how to use the 'args' parameter to provide execution arguments for an iExec application. Sensitive information should not be passed here as arguments are publicly visible on the blockchain explorer.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    args: 'arg1 arg2', // [!code focus]
  });
```

--------------------------------

### Send Telegram Message with Voucher (Web3Telegram)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/how-to-pay-executions.md

Illustrates sending a Telegram message via the Web3Telegram service using a voucher. This involves setting up the IExecWeb3telegram instance and calling sendTelegram with the voucher option enabled.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
  label: 'some-custom-id',
  dataMaxPrice: 42,
  appMaxPrice: 42,
  workerpoolMaxPrice: 42,
  useVoucher: true
});
```

--------------------------------

### Buy Protected Data - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/selling/buyProtectedData.md

Demonstrates how to buy protected data using the `buyProtectedData` method from the `@iexec/dataprotector` library. This function requires the protected data address and the price in nano RLC.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 1,
});
```

--------------------------------

### Stake RLC Tokens with iExec SDK

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/how-to-pay-executions.md

Demonstrates how to use the iExec SDK to connect to the Ethereum provider, check RLC balance (staked and locked), and deposit RLC tokens to the iExec protocol for task payments. Requires an Ethereum provider and a private key.

```typescript
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  'chain', // blockchain node URL
  'PRIVATE_KEY'
);
const iexec = new IExec({
  ethProvider,
});
// ---
// Check your balance
const balance = await iexec.account.checkBalance('0xa0c15e...');
console.log('Nano RLC staked:', balance.stake.toString());
console.log('Nano RLC locked:', balance.locked.toString());

// Lock RLC in your account in the iExec protocol
await iexec.account.deposit(1_000_000_000); // Deposit 1 RLC

```

--------------------------------

### Update protectData Method with Status Callback

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/migrate-from-v1.md

Demonstrates the updated protectData method in v2, which now accepts an optional onStatusUpdate callback for real-time progress notifications.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
  onStatusUpdate: ({ title, isDone }) => { // [!code ++]
    console.log(title, isDone); // [!code ++]
  }, // [!code ++]
});
```

--------------------------------

### Specify addOnlyAppWhitelist Address for Add App to Whitelist

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/apps-whitelist/addAppToAddOnlyAppWhitelist.md

Illustrates how to specify the `addOnlyAppWhitelist` address when calling the `addAppToAddOnlyAppWhitelist` method. This parameter is crucial for directing the addition to the correct whitelist.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const isAddedToAddAppToAddOnlyAppWhitelist =
  await dataProtectorSharing.addAppToAddOnlyAppWhitelist({
    addOnlyAppWhitelist: '0x123abc...', // [!code focus]
    app: '0x127ahs...',
  });
```

--------------------------------

### Buy Protected Data with Collection ID and Whitelist - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/selling/buyProtectedData.md

Shows how to purchase protected data and assign it to a specific collection, along with specifying an application whitelist. This requires `protectedData`, `price`, `addToCollectionId`, and `addOnlyAppWhitelist` parameters.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const { txHash } = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 1,
  addToCollectionId: 12,
  addOnlyAppWhitelist: '0xdef456...',
});
```

--------------------------------

### Data Analysis iApp: Accessing Inputs (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Shows how a Python iApp accesses its inputs, including command-line arguments, environment variables for requester secrets (like API keys), and the protected data itself.

```python
# Access inputs in your iApp
args = sys.argv[1:]           # Processing parameters
api_key = os.environ.get('IEXEC_REQUESTER_SECRET_1')  # User's API access
protected_data = load_protected_data()  # The sensitive data to process

# Process and output results
results = analyze_data(protected_data, args, api_key)
save_results(results)
```

--------------------------------

### Remote iApp Debugging and Task Management (Bash)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/debugging.md

This section provides bash commands for deploying, running, debugging failed executions, and showing task details remotely. It includes options to download task results if they are completed.

```bash
# Deploy and run
iapp deploy
iapp run <iapp-address>

# Debug failed executions
iapp debug <taskId>

# View task details
iexec task show <taskId>

# Download results (if completed)
iexec task show <taskId> --download
```

--------------------------------

### Manage iExec Wallet Operations with iapp wallet

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/building-your-iexec-app.md

Performs wallet-related operations such as checking balance, retrieving address, or signing data. The --chain option specifies the blockchain network, and --data is used for signing.

```bash
iapp wallet <action>
iapp wallet <action> --chain <string>
iapp wallet sign --data <string>
```

--------------------------------

### Rename fetchGrantedAccess to getGrantedAccess

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/migrate-from-v1.md

Illustrates the renaming of the fetchGrantedAccess method to getGrantedAccess, while maintaining its functionality for fetching granted access details.

```javascript
await dataProtector.fetchGrantedAccess({ // [!code --]
await dataProtector.getGrantedAccess({ // [!code ++]
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  owner: '0xa0c15e...',
});
```

--------------------------------

### Local iApp Testing

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

This command allows for local testing of an iApp, similar to regular iApp testing. The '--protectedData "mock_name"' argument indicates that mock protected data should be used, and it's noted that TDX only affects remote deployment and execution.

```bash
iapp test --protectedData "mock_name"
```

--------------------------------

### Vue Component: ImageViewer Usage

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/tooling-and-explorers/iexec-explorer.md

Demonstrates the usage of the ImageViewer Vue component to display images with links and captions, specifically for navigating iExec's marketplace sections like iApps, Datasets, and Workerpools.

```javascript
import { computed } from 'vue';
import ImageViewer from '@/components/ImageViewer.vue';
import useUserStore  from '@/stores/useUser.store';
import {getChainById} from '@/utils/chain.utils';

// Get current chain info
const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());

const chainData = computed(() => getChainById(selectedChain.value));
const explorerUrl = computed(() => chainData.value.iexecExplorerUrl);

// Assets
import appViewImage from '@/assets/tooling-&-explorers/iexec-explorer/app-view.png';
import datasetViewImage from '@/assets/tooling-&-explorers/iexec-explorer/dataset-view.png';
import workerpoolViewImage from '@/assets/tooling-&-explorers/iexec-explorer/workerpool-view.png';

// Example usage for iApp Listing
// <ImageViewer
//   :image-url-dark="appViewImage"
//   image-alt="App View"
//   :link-url="`${explorerUrl}/apps`"
//   caption="Explore iApp Marketplace"
// />

// Example usage for Protected Data Listing
// <ImageViewer
//   :image-url-dark="datasetViewImage"
//   image-alt="Dataset View"
//   :link-url="`${explorerUrl}/datasets`"
//   caption="Explore Protected Datasets"
// />

// Example usage for Workerpools
// <ImageViewer
//   :image-url-dark="workerpoolViewImage"
//   image-alt="Workerpool View"
//   :link-url="`${explorerUrl}/workerpools`"
//   caption="Explore Workerpools Infrastructure"
// />
```

--------------------------------

### Rename fetchProtectedData to getProtectedData and Add Filtering

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/migrate-from-v1.md

Shows the renaming of the fetchProtectedData method to getProtectedData and the addition of new filtering parameters like creationTimestampGte.

```javascript
await dataProtector.fetchProtectedData({ // [!code --]
await dataProtector.getProtectedData({ // [!code ++]
  owner: '0xa0c15e...',
  creationTimestampGte: 1707237580, // Feb 6th, 2024 16:39:40 GMT // [!code ++]
});
```

--------------------------------

### GraphQL Query for Deals and Tasks

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/tooling-and-explorers/subgraph-explorer.md

This GraphQL query retrieves details about deals, including requester ID, application name, dataset name, workerpool ID, and associated task IDs and statuses. It requires access to the iExec GraphQL API.

```graphql
query {
  deals {
    id
    requester {
      id
    }
    app {
      name
    }
    dataset {
      name
    }
    workerpool {
      id
    }
    tasks {
      id
      status
    }
  }
}
```

--------------------------------

### Instantiate IExecDataProtector with ipfsGateway

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/advanced-configuration.md

Shows how to configure IExecDataProtector with a custom IPFS gateway URL for content downloads, primarily for verifying content on the IPFS network. The default iExec IPFS gateway is used if omitted.

```typescript
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const dataProtector = new IExecDataProtector(web3Provider, {
  ipfsGateway: 'ipfs-gateway-url', // [!code focus]
});
```

--------------------------------

### Import iApp Generator Wallet

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Imports an iExec wallet using a private key previously generated by iApp Generator, typically found in `iapp.config.json`.

```bash
# Extract the private key from your `iapp.config.json`
iexec wallet import <your-private-key>
```

--------------------------------

### Report Generator iApp: Accessing Inputs (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Shows a Python iApp extracting report configuration from arguments, accessing the protected business data, generating the report, and saving it.

```python
# Get configuration from args
report_type = get_arg('type', default='summary')

# Access the business data
business_data = load_protected_data()

# Generate report
report = generate_report(business_data, report_type)
save_report(report)
```

--------------------------------

### App Order Match - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Ensures that the application specified in the app order is the same one required by the requester. This is a direct match for the computational task.

```Solidity
require(_requestorder.app == _apporder.app);
```

--------------------------------

### Mermaid Diagram: iExec TDX Workflow

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/tee/intel-tdx.md

Illustrates the step-by-step workflow for executing a confidential application using TDX on the iExec platform, from development to result retrieval.

```mermaid
graph TD
    Dev[Developer]
    Build[Build TDX App]
    Deploy[Deploy to iExec]
    Worker[TDX Worker Selected]
    TrustDomain[TDX Trust Domain Created]
    Execute[Secure Execution]
    Proof[Proof of Contribution]
    Result[Results]
    Dev --> Build
    Build --> Deploy
    Deploy --> Worker
    Worker --> TrustDomain
    TrustDomain --> Execute
    Execute --> Proof
    Proof --> Result
    style TrustDomain fill:#ffffff,stroke:#0000ff,stroke-width:2px,color:#000000
    style Execute fill:#ffffff,stroke:#0000ff,stroke-width:2px,color:#000000
```

--------------------------------

### Publish App Order

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Publishes the signed app order to the iExec marketplace, making the iApp accessible under the defined conditions.

```bash
iexec order publish --app
```

--------------------------------

### Sign and Publish a Workerpool Order

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/worker/manage-access.md

Signs a configured workerpool order and then publishes it to the iExec Marketplace. This makes the workerpool's resources available for requesters.

```bash
iexec order sign --workerpool && iexec order publish --workerpool
```

--------------------------------

### Accessing Command-Line Arguments (JavaScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Shows how to access command-line arguments passed to an iApp in JavaScript using Node.js. It expects arguments in a key=value format.

```javascript
// Access args from command line
const args = process.argv.slice(2); // Skip node and script name

// Example: iapp run myapp --args "model=bert threshold=0.8"
if (args.length >= 2) {
  const modelName = args[0]; // "model=bert"
  const threshold = args[1]; // "threshold=0.8"
  console.log(`Model: ${modelName}, Threshold: ${threshold}`);
} else {
  console.log('Not enough arguments provided.');
}
```

--------------------------------

### Set Maximum Prices for iApp Execution

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/how-to-pay-executions.md

Explains how to set maximum prices for different components of an iApp execution, including data, application, and workerpool fees. Prices are specified in nRLC.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  dataMaxPrice: 5,
  appMaxPrice: 3,
  workerpoolMaxPrice: 2,
});
```

--------------------------------

### Create NFT Collection with iExec Data Protector Sharing

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/collection/createCollection.md

Demonstrates how to create a new NFT collection using the IExecDataProtectorSharing class. It requires a Web3 provider and instantiates the class to call the createCollection method.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const createCollectionResult = await dataProtectorSharing.createCollection();
```

--------------------------------

### Resource Registration Check - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Confirms that all involved resources (app, dataset, worker pool) are properly registered in their respective registries. This ensures the existence and validity of the resources.

```Solidity
require(m_appregistry.isRegistered(_apporder.app));
require(m_datasetregistry.isRegistered(_datasetorder.dataset));
require(m_workerpoolregistry.isRegistered(_workerpoolorder.workerpool));
```

--------------------------------

### Fetch User Contacts

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/fetchUserContacts.md

Demonstrates how to initialize IExecWeb3mail and fetch a list of contacts who have authorized a specific user address. Requires the '@iexec/web3mail' library.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);

const contactsList = await web3mail.fetchUserContacts({
  userAddress: '0x789cba...'
});
```

--------------------------------

### App Configuration Parameters

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Defines the configurable parameters for an iExec application.

```APIDOC
## App Configuration Parameters

### Description
This section details the optional parameters that can be set to configure an iExec application's behavior and access.

### Parameters

#### `appprice`
- **Type**: String
- **Description**: Price to charge per execution in nano RLC (nRLC). Use "0" for free execution, "1000000000" for 1 RLC, etc. (1 RLC = 10^9 nRLC).
- **Optional**

#### `volume`
- **Type**: String
- **Description**: Number of authorized executions. Decrements with each use. Examples: "1" (single use), "100" (limited campaign), "10000" (virtually unlimited).
- **Optional**

#### `tag`
- **Type**: String
- **Description**: Specifies the required execution environment. Supported values include `0x0000000000000000000000000000000000000000000000000000000000000000` for standard execution and `0x0000000000000000000000000000000000000000000000000000000000000003` for TEE (Scone) required.
- **Optional**

#### `datasetrestrict`
- **Type**: String
- **Description**: Restricts usage to a specific dataset. Use `0x0000000000000000000000000000000000000000000000000000000000000000` for no restriction.
- **Optional**

#### `workerpoolrestrict`
- **Type**: String
- **Description**: Restricts execution to a specific workerpool address.
- **Optional**

#### `requesterrestrict`
- **Type**: String
- **Description**: Restricts usage to a specific user address. Use `0x0000000000000000000000000000000000000000000000000000000000000000` for open access.
- **Optional**

### Request Example
```json
{
  "appprice": "1000000000",
  "volume": "100",
  "tag": "0x0000000000000000000000000000000000000000000000000000000000000003",
  "workerpoolrestrict": "0x1234567890abcdef1234567890abcdef12345678",
  "requesterrestrict": "0xabcdef1234567890abcdef1234567890abcdef12"
}
```

### Response
(Note: Responses are typically handled by the iExec SDK methods for deploying or updating applications, and do not return these parameters directly in a standard API response format.)
```

--------------------------------

### Use Voucher for sendTelegram Execution

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Explains how to use the `useVoucher` parameter to pay for the Telegram message execution using a voucher. If the voucher has insufficient funds, the SDK will automatically attempt to cover the cost from the iExec account.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
  label: 'some-custom-id',
  dataMaxPrice: 42,
  appMaxPrice: 42,
  workerpoolMaxPrice: 42,
  useVoucher: true, // [!code focus]
});
```

--------------------------------

### Accessing Protected Data (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Demonstrates how to access protected data, which is decrypted and available as files within the TEE environment. It shows reading a JSON file from the IEXEC_IN directory.

```APIDOC
## GET /api/protected-data

### Description
Access decrypted protected data files within the TEE.

### Method
GET

### Endpoint
`/api/protected-data`

### Parameters
#### Environment Variables
- **IEXEC_IN** (string) - Required - The directory path where input files are located.
- **IEXEC_DATASET_FILENAME** (string) - Required - The filename of the protected data.

### Request Example
```json
{
  "example": "import os\nimport json\n\niexec_in = os.environ['IEXEC_IN']\ndata_filename = os.environ['IEXEC_DATASET_FILENAME']\n\nwith open(f\"{iexec_in}/{data_filename}\", 'r') as f:\n    data = json.load(f)\n\nuser_email = data.get('email')\nuser_preferences = data.get('preferences')\n\nprint(f'Processing data for user: {user_email}')"
}
```

### Response
#### Success Response (200)
- **data** (object) - The decrypted content of the protected data.

#### Response Example
```json
{
  "example": "{\"email\": \"user@example.com\", \"preferences\": {\"theme\": \"dark\"}}"
}
```
```

--------------------------------

### Mermaid Diagram: TDX Trust Domain Structure

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/tee/intel-tdx.md

Visualizes the structure of an Intel TDX Trust Domain, showing how the hypervisor is excluded from seeing inside the protected VM, which contains the application and its data.

```mermaid
graph TB
    Hypervisor[Hypervisor<br/>Cannot see inside TDX]
    TrustDomain[🔒 TDX Trust Domain<br/>Entire VM Protected]
    App[Your Complete Application<br/>All Protected]
    Data[OS, Libraries, Data<br/>All Encrypted]
    Hypervisor --> TrustDomain
    TrustDomain --> App
    App --> Data
    style TrustDomain fill:#ffffff,stroke:#0000ff,stroke-width:2px,color:#000000
    style Data fill:#ffffff,stroke:#00ff00,stroke-width:2px,color:#000000
```

--------------------------------

### AppOrder Structure Definition

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Defines the structure for an AppOrder, used to represent an application in iExec's brokering system. Includes fields for application details, pricing, volume, restrictions, and signature.

```Solidity
struct AppOrder
{
  address app;
  uint256 appprice;
  uint256 volume;
  uint256 tag;
  address datasetrestrict;
  address workerpoolrestrict;
  address requesterrestrict;
  bytes32 salt;
  bytes   sign;
}
```

--------------------------------

### Approve Voucher Allowance with iExec SDK

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/how-to-pay-executions.md

Shows how to use the iExec SDK to grant allowance to a voucher smart contract. This allows the voucher contract to debit funds from your account if the voucher balance is insufficient for an iApp execution. Requires the voucher contract address.

```typescript
await iexec.account.approve('voucherAddress');
```

--------------------------------

### Specify Rental Price for Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/rentProtectedData.md

Illustrates how to set the `price` parameter when renting protected data. This price, in nano RLC (nRLC), acts as a safeguard against front-running. The SDK verifies this price against the current listing before submitting the transaction.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 1, // 1 nRLC // [!code focus]
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days
});
```

--------------------------------

### Create Signed Order for Data Access (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/monetize-protected-data.md

Demonstrates how to create a signed order using IExecDataProtectorCore for pay-per-use data access. It specifies authorized app, user, price per access, and total number of accesses. Requires a web3 provider.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Create a signed order with specific conditions
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...', // Your data address
  authorizedApp: 'email-processor.apps.iexec.eth', // Specific iApp only
  authorizedUser: '0x456def...', // Specific user only
  pricePerAccess: 5000000000, // 5 RLC per individual use
  numberOfAccess: 100, // Maximum 100 total uses
});

console.log('Signed order created:', grantedAccess);
```

--------------------------------

### iApp Error Handling and Reporting (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/debugging.md

This Python snippet illustrates best practices for error handling within an iApp. It uses a try-except block to catch potential exceptions during data processing and prints a clear error message before exiting.

```python
try:
    # Your processing logic
    result = process_data(data)
except Exception as e:
    print(f"ERROR: Processing failed: {str(e)}")
    sys.exit(1)
```

--------------------------------

### Initialize and Send Email with iExec Web3Mail

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

This snippet demonstrates how to initialize the IExecWeb3mail service with a private key and then use the sendEmail method to send a message. It requires the recipient's protectedData address, an email subject, and email content. The protectedData address is a reference to the user's authorized data.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
});
```

--------------------------------

### Import DataProtectorConfigOptions Type

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/advanced-configuration.md

Imports the TypeScript type definition for DataProtector configuration options from the '@iexec/dataprotector' package.

```typescript
import { type DataProtectorConfigOptions } from '@iexec/dataprotector';
```

--------------------------------

### Using voucherOwner with iExec Data Protector

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Demonstrates how to use the 'voucherOwner' parameter to pay for a task using another user's voucher. Requires 'useVoucher: true' to be set.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    useVoucher: true, // [!code focus]
    voucherOwner: '0x5714eB...', // [!code focus]
  });
```

--------------------------------

### Add Input Files to iApp Request (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/run-iapp-without-ProtectedData.md

Explains how to provide input files to an iApp by specifying their URLs in the `iexec_input_files` array within the `params` of a request order. The iApp can then download these files during execution. The process includes creating and signing the request order, retrieving app and workerpool orders, and matching them to initiate the task.

```ts
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  'chain', // blockchain node URL
  'PRIVATE_KEY'
);
const iexec = new IExec({
  ethProvider,
});
// ---
// Single input file
const requestorderToSign = await iexec.order.createRequestorder({
  app: '0x456def...',
  category: 0, // Required: category for the request
  appmaxprice: 10,
  workerpool: '0xa5de76...',
  params: {
    iexec_input_files: [
      'https://example.com/config.json',
      'https://example.com/template.html',
      'https://example.com/data.csv',
    ],
  },
});
const requestOrder = await iexec.order.signRequestorder(requestorderToSign);

// Fetch app orders
const appOrders = await iexec.orderbook.fetchAppOrderbook(
  '0x456def...' // Filter by specific app
);
if (appOrders.orders.length === 0) {
  throw new Error('No app orders found for the specified app');
}

// Fetch workerpool orders
const workerpoolOrders = await iexec.orderbook.fetchWorkerpoolOrderbook({
  workerpool: '0xa5de76...', // Filter by specific workerpool
});
if (workerpoolOrders.orders.length === 0) {
  throw new Error('No workerpool orders found for the specified workerpool');
}

// Execute the task
const taskId = await iexec.order.matchOrders({
  requestorder: requestOrder,
  apporder: appOrders.orders[0].order,
  workerpoolorder: workerpoolOrders.orders[0].order,
});
```

--------------------------------

### rentProtectedData

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/rentProtectedData.md

Rents a protected data item. Ensures the provided price and duration match the current listing to prevent front-running and unnecessary gas fees.

```APIDOC
## POST /rentProtectedData

### Description
Rents a protected data item by specifying the price and duration. The SDK verifies these parameters against the current listing to prevent front-running and avoid submitting transactions that would revert.

### Method
POST

### Endpoint
/rentProtectedData

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - Address or ENS of the protected data to rent.
- **price** (number) - Required - The expected rental price in nano RLC (nRLC). Used to prevent front-running.
- **duration** (number) - Required - The expected rental duration in seconds. Used to prevent front-running.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "price": 1,
  "duration": 172800
}
```

### Response
#### Success Response (200)
- **transactionHash** (string) - The hash of the transaction that rented the protected data.

#### Response Example
```json
{
  "transactionHash": "0xabc123..."
}
```
```

--------------------------------

### Revoke All Access with Status Updates

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/migrate-from-v1.md

The `revokeAllAccess` method now includes an optional `onStatusUpdate` callback for status notifications, replacing `revokeAllAccessObservable`.

```APIDOC
## Revoke All Access with Status Updates

### Description
Shows how to revoke all access for protected data and receive real-time status updates using the `onStatusUpdate` callback.

### Method
`revokeAllAccess`

### Endpoint
N/A

### Parameters
#### Request Body
- **protectedData** (string) - Required - The identifier of the protected data.
- **onStatusUpdate** (function) - Optional - Callback function to receive status updates.
  - **title** (string) - The status update title.
  - **isDone** (boolean) - Indicates if the process is complete.

### Request Example
```javascript
// import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
// const web3Provider = getWeb3Provider('PRIVATE_KEY');
// const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

// const allAccessRevoked = await dataProtectorCore.revokeAllAccess({
//   protectedData: '0x123abc...',
//   onStatusUpdate: ({ title, isDone }) => {
//     console.log(title, isDone);
//   },
// });
```
```

--------------------------------

### Process Protected Data with Another's Voucher (Any iApp)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/how-to-pay-executions.md

Details how to process protected data for an iApp using a voucher owned by someone else. This requires specifying the voucherOwner along with the useVoucher: true option.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  useVoucher: true,
  voucherOwner: '0x5714eB...' 
});
```

--------------------------------

### Retrieve Granted Access - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getGrantedAccess.md

Demonstrates how to retrieve granted access details using the iExec Data Protector core library. It initializes the core instance with a web3 provider and calls the getGrantedAccess method with parameters to filter by protected data, application, user, and pagination. Requires @iexec/dataprotector.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  page: 1,
  pageSize: 100,
});
```

--------------------------------

### Data Protection with Status Updates

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/migrate-from-v1.md

The `protectData` method now accepts an optional `onStatusUpdate` callback for real-time status notifications, replacing the removed `protectDataObservable`.

```APIDOC
## Protect Data with Status Updates

### Description
Demonstrates how to protect data and receive real-time status updates using the `onStatusUpdate` callback.

### Method
`protectData`

### Endpoint
N/A

### Parameters
#### Request Body
- **name** (string) - Required - The name of the data to protect.
- **data** (object) - Required - The data payload.
- **onStatusUpdate** (function) - Optional - Callback function to receive status updates.
  - **title** (string) - The status update title.
  - **isDone** (boolean) - Indicates if the process is complete.

### Request Example
```javascript
// import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
// const web3Provider = getWeb3Provider('PRIVATE_KEY');
// const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

// const protectedData = await dataProtectorCore.protectData({
//   name: 'myEmail',
//   data: {
//     email: 'example@gmail.com',
//   },
//   onStatusUpdate: ({ title, isDone }) => {
//     console.log(title, isDone);
//   },
// });
```
```

--------------------------------

### Process Protected Data with Specific Path

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/run-iapp-with-ProtectedData.md

This snippet demonstrates how to process a specific file within ProtectedData using the `processProtectedData` function. It requires the `IExecDataProtectorCore` and `getWeb3Provider` from the '@iexec/dataprotector' library.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with specific path
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  path: 'data/input.csv',
});
```

--------------------------------

### POST /createCollection

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/collection/createCollection.md

Creates a new NFT collection using the iExec Data Protector Sharing service. This is a required step before distributing protected data.

```APIDOC
## POST /createCollection

### Description
Creates a new NFT collection in the Data Sharing smart contract. A collection is necessary before distributing protected data, and a wallet address can own multiple collections.

### Method
POST

### Endpoint
/createCollection

### Parameters
#### Request Body
This method does not require a request body.

### Request Example
```ts
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const createCollectionResult = await dataProtectorSharing.createCollection();
```

### Response
#### Success Response (200)
- **collectionId** (string) - The unique identifier for the newly created collection.

#### Response Example
```json
{
  "collectionId": "0xabc123..."
}
```
```

--------------------------------

### Process Protected Data with Command-Line Arguments

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/run-iapp-with-ProtectedData.md

This snippet demonstrates how to pass command-line arguments to an iApp when processing ProtectedData. Arguments are provided as a string and are visible on the blockchain. It utilizes `processProtectedData` from the '@iexec/dataprotector' library.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with arguments
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  args: '--input-path data/input.csv --output-format json --verbose',
});
```

--------------------------------

### Use Voucher for Paying Protected Data Tasks

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Illustrates how to set the 'useVoucher' parameter to 'true' in the processProtectedData method. This enables payment for the task using an associated voucher, with an option to override the default voucher address. If the voucher lacks sufficient RLC, the SDK will automatically transfer funds.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    useVoucher: true, // [!code focus]
  });
```

--------------------------------

### Set Protected Data for Sale - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/selling/setProtectedDataForSale.md

Demonstrates how to set protected data for sale using the iExec SDK. It initializes the DataProtectorSharing service and calls the setProtectedDataForSale method with the protected data address and price.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const setForSaleResult = await dataProtectorSharing.setProtectedDataForSale({
  protectedData: '0x123abc...',
  price: 2, // 2 nRLC
});
```

--------------------------------

### Create computed.json for iApp Output (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/debugging.md

This Python snippet demonstrates the crucial step of creating a `computed.json` file, which is required for iExec to recognize and process the output of an iApp. It defines the output path for a result JSON file.

```python
# Always create computed.json
import json, os
computed = {"deterministic-output-path": f"{os.environ['IEXEC_OUT']}/result.json"}
with open(f"{os.environ['IEXEC_OUT']}/computed.json", 'w') as f:
    json.dump(computed, f)
```

--------------------------------

### Specify App Address for Add App to Whitelist

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/apps-whitelist/addAppToAddOnlyAppWhitelist.md

Shows how to provide the `app` address, which is the iExec TEE iApp to be added to the `addOnlyAppWhitelist`. This parameter targets the specific application for whitelist inclusion.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const isAddedToAddAppToAddOnlyAppWhitelist =
  await dataProtectorSharing.addAppToAddOnlyAppWhitelist({
    addOnlyAppWhitelist: '0x123abc...',
    app: '0x127ahs...', // [!code focus]
  });
```

--------------------------------

### Protect Data using IExecDataProtectorCore

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/2-protectData.md

Demonstrates how to protect data using the IExecDataProtectorCore class from the @iexec/dataprotector SDK. It initializes the core with a web3 provider and calls the protectData method with data and a name. The method returns the address of the protected data.

```ts
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const { address: protectedDataAddress } = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
});
```

--------------------------------

### Instantiate IExecDataProtector with subgraphUrl

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/advanced-configuration.md

Illustrates initializing IExecDataProtector with a specific subgraph URL for data querying. If not specified, the default iExec subgraph is utilized.

```typescript
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const dataProtector = new IExecDataProtector(web3Provider, {
  subgraphUrl: 'subgraph-url', // [!code focus]
});
```

--------------------------------

### Import Web3Telegram Configuration Type

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/advanced-configuration.md

Imports the TypeScript type definition for Web3Telegram configuration options, enabling type-safe configuration in your application.

```typescript
import { type Web3TelegramConfigOptions } from '@iexec/web3telegram';
```

--------------------------------

### Instantiate IExecDataProtector with sharingContractAddress

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/advanced-configuration.md

Shows how to initialize IExecDataProtector with a custom Ethereum contract address for the dataProtector sharing smart contract. A default address is used if this option is omitted.

```typescript
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const dataProtector = new IExecDataProtector(web3Provider, {
  sharingContractAddress: '0x123abc...', // [!code focus]
});
```

--------------------------------

### Process Protected Data with Input Files

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/run-iapp-with-ProtectedData.md

This snippet shows how to include input files in an iApp execution when processing ProtectedData. Input files are URLs to publicly accessible files that the iApp can download. This uses the `processProtectedData` function from '@iexec/dataprotector'.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with input files
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  inputFiles: [
    'https://raw.githubusercontent.com/user/repo/main/config.json',
    'https://example.com/public-data.csv',
  ],
});
```

--------------------------------

### Create Collection and Add Data (DataProtector Sharing)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/monetize-protected-data.md

Set up a collection to group your protected data and define access models like rental, subscription, or sale. Add your protected data to the collection with whitelisted iExec applications.

```APIDOC
## POST /DataProtector/Sharing/Collection

### Description
Creates a new collection for grouping protected data and allows adding protected data to an existing collection.

### Method
POST

### Endpoint
/DataProtector/Sharing/Collection

### Parameters
#### Request Body (Create Collection)
This endpoint does not require a request body to create a new collection. The response will contain the new collectionId.

#### Request Body (AddToCollection)
- **protectedData** (string) - Required - The address of the protected data to add.
- **collectionId** (string) - Required - The ID of the collection to add the data to.
- **addOnlyAppWhitelist** (string) - Required - The iExec application address to whitelist for access.

### Request Example (Create Collection)
```json
{} 
```

### Response (Create Collection)
#### Success Response (200)
- **collectionId** (string) - The unique identifier for the created collection.

#### Response Example (Create Collection)
```json
{
  "collectionId": "0x123..."
}
```

### Request Example (AddToCollection)
```json
{
  "protectedData": "0x123abc...",
  "collectionId": "0x123...",
  "addOnlyAppWhitelist": "0x256bcd881c33bdf9df952f2a0148f27d439f2e64"
}
```

### Response (AddToCollection)
#### Success Response (200)
Indicates successful addition of protected data to the collection. Typically returns no body or a success message.

#### Response Example (AddToCollection)
```json
{
  "message": "Protected data added to collection successfully."
}
```
```

--------------------------------

### Generate Multi-file Outputs with computed.json (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/outputs.md

Illustrates how an iApp can generate multiple output files for different purposes (e.g., summary, detailed report, visualization data) and correctly reference them within the computed.json file using the 'additional-files' field. This is essential for complex iApp results.

```python
import os
import json

iexec_out = os.environ['IEXEC_OUT']

# Create multiple output files
summary = {"total_processed": 1000, "success_rate": 0.95}
with open(f"{iexec_out}/summary.json", 'w') as f:
    json.dump(summary, f)

# Create a detailed report
with open(f"{iexec_out}/detailed_report.txt", 'w') as f:
    f.write("Detailed analysis results...\n")

# Create visualization data
chart_data = {"labels": ["A", "B", "C"], "values": [10, 20, 30]}
with open(f"{iexec_out}/chart_data.json", 'w') as f:
    json.dump(chart_data, f)

# Required metadata file
computed = {
    "deterministic-output-path": f"{iexec_out}/summary.json",
    "additional-files": [
        f"{iexec_out}/detailed_report.txt",
        f"{iexec_out}/chart_data.json"
    ]
}
with open(f"{iexec_out}/computed.json", 'w') as f:
    json.dump(computed, f)
```

--------------------------------

### Implement Data Sale and Ownership Transfer (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/monetize-protected-data.md

Shows how data owners can list their protected data for sale and how buyers can purchase ownership. This model facilitates the permanent transfer of data ownership upon successful purchase. Requires the '@iexec/dataprotector' library.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
// DATA OWNER: List data for sale
await dataProtectorSharing.setProtectedDataForSale({
  protectedData: '0x123abc...',
  price: 100000000000, // 100 RLC purchase price
});

// CLIENT/BUYER: Purchase ownership
const purchase = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 100000000000,
});
```

--------------------------------

### Specify App Whitelist for addToCollection

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/collection/addToCollection.md

Demonstrates how to specify the addOnlyAppWhitelist parameter, which is the address of the whitelist smart contract for applications allowed to consume the protected data.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
const { txHash } = await dataProtectorSharing.addToCollection({
  collectionId: 12,
  protectedData: '0x123abc...',
  addOnlyAppWhitelist: '0xba46d6...', // [!code focus]
});
```

--------------------------------

### POST /buyProtectedData

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/selling/buyProtectedData.md

Allows a user to purchase protected data that is listed for sale. Upon successful purchase, the buyer gains full ownership and can distribute or keep the data as desired.

```APIDOC
## POST /buyProtectedData

### Description
Allows a user to purchase protected data that is listed for sale. Upon successful purchase, the buyer gains full ownership and can distribute or keep the data as desired.

### Method
POST

### Endpoint
/buyProtectedData

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - Address of the protected data you'd like to buy.
- **price** (number) - Required - Price of the protected data that you expect to buy. This parameter ensures that you will not be front-run by the owner of the protected data. The unit is in nano RLC (nRLC).
- **addToCollectionId** (number) - Optional - Collection ID to which you'd like to transfer the ownership of the protected data.
- **addOnlyAppWhitelist** (AddressOrENS) - Optional - Address of the whitelist smart contract that contains applications allowed to consume the protected data.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "price": 1,
  "addToCollectionId": 12,
  "addOnlyAppWhitelist": "0xdef456..."
}
```

### Response
#### Success Response (200)
- **txHash** (string) - The transaction hash of the purchase operation.

#### Response Example
```json
{
  "txHash": "0xabcdef1234567890"
}
```
```

--------------------------------

### Tag Compatibility Check - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Validates that the worker pool's tags enable all the features required by the app and dataset tags. This ensures the worker pool can support the requested application and data.

```Solidity
require(tag & ~_workerpoolorder.tag == 0x0);
require(tag & ~_workerpoolorder.tag == 0x0);
```

--------------------------------

### Configure Web3Telegram with Custom IPFS Node

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/advanced-configuration.md

Initializes the IExecWeb3telegram instance with a custom IPFS node URL for content uploads. This enables using a self-hosted IPFS node for managing data on the IPFS network.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  ipfsNode: 'ipfs-node-url', // [!code focus]
});
```

--------------------------------

### Set Protected Data to Renting (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting.md

Demonstrates how to use the `setProtectedDataToRenting` method to list a protected data item for rent. It requires specifying the protected data address, rental price in nRLC, and rental duration in seconds. The method returns transaction details upon successful execution.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

--------------------------------

### Process Protected Data with iExec

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Demonstrates how to use the processProtectedData method from the IExecDataProtectorCore class to securely process encrypted data. It requires initializing the IExecDataProtectorCore with a web3 provider and specifying parameters like protectedData, app, args, inputFiles, and secrets.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    args: 'arg1 arg2',
    inputFiles: ['https://example.com/file1', 'https://example.com/file2'],
    secrets: {
      1: 'secret1',
      2: 'secret2',
    },
  });
```

--------------------------------

### Debug iExec Task Logs with iapp debug

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/building-your-iexec-app.md

Retrieves detailed execution logs from worker nodes for a specific task ID. It allows specifying the blockchain network using the --chain option.

```bash
iapp debug <taskId>
iapp debug <taskId> --chain <string>
```

--------------------------------

### Price Constraints Check - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Checks if the prices of the app, dataset, and worker pool are within the maximum prices specified by the requester. This ensures cost-effectiveness for the requester.

```Solidity
require(_requestorder.appmaxprice >= _apporder.appprice);
require(_requestorder.datasetmaxprice >= _datasetorder.datasetprice);
require(_requestorder.workerpoolmaxprice >= _workerpoolorder.workerpoolprice);
```

--------------------------------

### iApp Input Validation (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/debugging.md

This Python code snippet shows how to perform essential input validation for an iApp running within the iExec environment. It checks for the presence of required environment variables (`IEXEC_IN`, `IEXEC_OUT`) and validates command-line arguments.

```python
import os, sys

# Check required environment variables
if not os.environ.get('IEXEC_IN') or not os.environ.get('IEXEC_OUT'):
    print("ERROR: Missing IEXEC_IN or IEXEC_OUT")
    sys.exit(1)

# Validate arguments
if len(sys.argv) < 2:
    print("ERROR: Missing required arguments")
    sys.exit(1)
```

--------------------------------

### Create Data Collection and Add Protected Data (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/monetize-protected-data.md

Illustrates how to set up a data collection using IExecDataProtectorSharing for time-based access. It includes creating a collection and adding protected data to it, specifying whitelisted iExec apps. Requires a web3 provider.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
// Create a collection to group your data and provide
// a set of protectedData available for the subscription.
const collection = await dataProtectorSharing.createCollection();
console.log('Collection address:', collection.collectionId);

// Add your protected data to the collection
await dataProtectorSharing.addToCollection({
  protectedData: '0x123abc...', // Your protected data address
  collectionId: collection.collectionId,
  addOnlyAppWhitelist: '0x256bcd881c33bdf9df952f2a0148f27d439f2e64', // iExec apps whitelist
});
```

--------------------------------

### Consensus Timer Parameters Explained

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Defines the parameters controlling the consensus timer in iExec. These ratios determine the duration of different phases: finalization, contribution, and reveal, influencing the overall consensus process and refund policies.

```plaintext
FINAL_DEADLINE_RATIO = 10
CONTRIBUTION_DEADLINE_RATIO = 7
REVEAL_DEADLINE_RATIO = 2
```

--------------------------------

### Consume Protected Data with iExec SDK

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/consume/consumeProtectedData.md

Demonstrates how to consume protected data using the iExec SDK. It initializes the DataProtectorSharing service with a web3 provider and calls the consumeProtectedData method with required parameters.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
  });
```

--------------------------------

### Specify price for data collection subscription

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/subscribeToCollection.md

This code snippet focuses on the `price` parameter for the `subscribeToCollection` method. It illustrates how to set the expected price for the data rental in nano RLC (nRLC) to prevent front-running.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.subscribeToCollection({
  collectionId: 12,
  price: 1, // 1 nRLC // [!code focus]
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days
});
```

--------------------------------

### Instantiate IExecDataProtector with ipfsNode

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/advanced-configuration.md

Demonstrates setting a custom IPFS node URL for content uploads when initializing IExecDataProtector. The default iExec IPFS node is used if this option is not provided.

```typescript
import { IExecDataProtector, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const dataProtector = new IExecDataProtector(web3Provider, {
  ipfsNode: 'ipfs-node-url', // [!code focus]
});
```

--------------------------------

### Accessing Protected Data (JavaScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Illustrates how to access protected data using JavaScript within the TEE. It reads a JSON file from the IEXEC_IN directory and parses it.

```APIDOC
## GET /api/protected-data-js

### Description
Access decrypted protected data files using JavaScript within the TEE.

### Method
GET

### Endpoint
`/api/protected-data-js`

### Parameters
#### Environment Variables
- **IEXEC_IN** (string) - Required - The directory path for input files.
- **IEXEC_DATASET_FILENAME** (string) - Required - The filename of the protected data.

### Request Example
```json
{
  "example": "const fs = require('fs');\nconst path = require('path');\n\nconst iexecIn = process.env.IEXEC_IN;\nconst dataFilename = process.env.IEXEC_DATASET_FILENAME;\n\nconst dataPath = path.join(iexecIn, dataFilename);\nconst data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));\n\nconst userEmail = data.email;\nconst userPreferences = data.preferences;\n\nconsole.log(`Processing data for user: ${userEmail}`);"
}
```

### Response
#### Success Response (200)
- **data** (object) - The decrypted content of the protected data.

#### Response Example
```json
{
  "example": "{\"email\": \"user@example.com\", \"preferences\": {\"theme\": \"dark\"}}"
}
```
```

--------------------------------

### Add App to AddOnlyAppWhitelist using TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/apps-whitelist/addAppToAddOnlyAppWhitelist.md

Demonstrates how to add an iExec TEE iApp to the AddOnlyAppWhitelist using the `@iexec/dataprotector` library. This function requires the `addOnlyAppWhitelist` address and the `app` address as parameters. The method returns a transaction hash upon successful addition.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const isAddedToAddAppToAddOnlyAppWhitelist =
  await dataProtectorSharing.addAppToAddOnlyAppWhitelist({
    addOnlyAppWhitelist: '0x123abc...',
    app: '0x127ahs...',
  });
```

--------------------------------

### Specify Rental Duration for Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/rentProtectedData.md

Details how to specify the `duration` parameter for renting protected data. The duration, in seconds, also serves as a measure against front-running. The SDK confirms this duration matches the listing's terms.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const rentResult = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 1, // 1 nRLC
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days // [!code focus]
});
```

--------------------------------

### Dataset Order Match - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Verifies that the dataset provided in the dataset order matches the one requested by the requester. This ensures the correct data is used for computation.

```Solidity
require(_requestorder.dataset == _datasetorder.dataset);
```

--------------------------------

### Specify Specific File from Protected Data Zip

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Demonstrates the use of the 'path' parameter with the processProtectedData method. This allows specifying a particular file within the protected data's zip archive, which will be returned as the result after uncompression.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    path: 'my-content', // [!code focus]
  });
```

--------------------------------

### Reward Kitty Distribution Logic

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Outlines the logic for distributing rewards from the reward kitty to the scheduler. It includes a percentage-based reward (KITTY_RATIO) and a minimum reward threshold (KITTY_MIN) to ensure a base payout.

```plaintext
reward = kitty.percentage(KITTY_RATIO).max(KITTY_MIN).min(kitty)
```

--------------------------------

### Access Protected Data in Python

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

This Python code snippet demonstrates how to access protected data, which is decrypted and available as files within the TEE environment. It reads a JSON file specified by environment variables.

```python
import os
import json

# Get the input directory and dataset filename
iexec_in = os.environ['IEXEC_IN']
data_filename = os.environ['IEXEC_DATASET_FILENAME']

# Protected data is decrypted and available as files
try:
    # For single protected data
    with open(f"{iexec_in}/{data_filename}", 'r') as f:
        data = json.load(f)

    # Access the sensitive data
    user_email = data.get('email')
    user_preferences = data.get('preferences')

    print(f"Processing data for user: {user_email}")

except FileNotFoundError:
    print("No protected data provided")
```

--------------------------------

### Access Arguments in Python

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

This Python snippet shows how to access arguments passed to your iApp as command-line arguments. It retrieves all arguments excluding the script name itself.

```python
import sys

# Access args from command line
args = sys.argv[1:]  # Skip first arg (script name)

```

--------------------------------

### Withdraw RLC from iExec Account

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-sgx-iapp.md

Withdraws RLC tokens from your iExec account back to your connected wallet. Note that only the stake amount can be withdrawn.

```bash
iexec account withdraw --chain arbitrum-mainnet <amount>
```

--------------------------------

### iExec Oracle Generic Contract Constructor

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/oracle.md

The constructor function for the generic iExec Oracle contract. It initializes the contract by setting the iExec proxy address, which is essential for interacting with the iExec network.

```Solidity
constructor(address _iexecproxy) public
```

--------------------------------

### Set Subscription Parameters

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams.md

This method allows you to set the subscription parameters for a specific data collection. You can define the price in nano RLC and the duration of the subscription in seconds.

```APIDOC
## POST /dataProtector/setSubscriptionParams

### Description
Sets the subscription parameters (price and duration) for a given data collection.

### Method
POST

### Endpoint
/dataProtector/setSubscriptionParams

### Parameters
#### Request Body
- **collectionId** (number) - Required - The ID of the collection for which to set the subscription parameters.
- **price** (number) - Required - The price in nano RLC (nRLC) for subscribers to access the collection.
- **duration** (number) - Required - The duration of the subscription period in seconds.

### Request Example
```json
{
  "collectionId": 12,
  "price": 2,
  "duration": 2592000
}
```

### Response
#### Success Response (200)
- **transactionHash** (string) - The hash of the transaction confirming the operation.

#### Response Example
```json
{
  "transactionHash": "0xabc123..."
}
```
```

--------------------------------

### addAppToAddOnlyAppWhitelist

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/apps-whitelist/addAppToAddOnlyAppWhitelist.md

Method to add an app (iExec TEE iApp) into the `AddOnlyAppWhitelist` for secure data access control. Note that apps cannot be removed once added to the whitelist.

```APIDOC
## POST /addAppToAddOnlyAppWhitelist

### Description
Method to add an app (iExec TEE iApp) into the `AddOnlyAppWhitelist` for secure data access control.

### Method
POST

### Endpoint
/addAppToAddOnlyAppWhitelist

### Parameters
#### Request Body
- **addOnlyAppWhitelist** (Address) - Required - Address of the `addOnlyAppWhitelist` in which you want to add an app.
- **app** (AddressOrENS) - Required - Address of app that you want to add to the `addOnlyAppWhitelist`.

### Request Example
```json
{
  "addOnlyAppWhitelist": "0x123abc...",
  "app": "0x127ahs..."
}
```

### Response
#### Success Response (200)
- **transactionHash** (string) - The hash of the transaction.

#### Response Example
```json
{
  "transactionHash": "0xabc123..."
}
```
```

--------------------------------

### View Published App Orders

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Retrieves and displays a list of active app orders for a specified iApp address from the iExec order book.

```bash
iexec orderbook app <your-app-address>
```

--------------------------------

### Handle Access Revocation Status Updates

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/revokeAllAccess.md

Shows how to implement a callback function to receive status updates during the access revocation process. This enables monitoring of intermediate steps like data retrieval and revocation.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const revokeAllAccessResult = await dataProtectorCore.revokeAllAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```

--------------------------------

### Grant Access with Status Update Callback - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/grantAccess.md

Shows how to implement a callback function to monitor the status of granting access to protected data. The `onStatusUpdate` callback receives status information, including a title and a boolean indicating completion. Expected status titles include 'CREATE_DATASET_ORDER' and 'PUBLISH_DATASET_ORDER', each called with `isDone: false` and then `isDone: true`.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```

--------------------------------

### Revoke Access with revokeOneAccess in TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/revokeOneAccess.md

Demonstrates how to use the revokeOneAccess method from the IExecDataProtectorCore library to revoke access permissions. It requires initializing the IExecDataProtectorCore with a web3 provider and passing a comprehensive grantedAccess object.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const revokeAccess = await dataProtectorCore.revokeOneAccess({
  apprestrict: '0xea...',
  dataset: '0xA0C...',
  datasetprice: '0',
  requesterrestrict: '0xecb..',
  salt: '0x0147...',
  sign: '0xc22c1...',
  tag: '0x0000000000000000000000000000000000000000000000000000000000000003',
  volume: '1',
  workerpoolrestrict: '0x000...',
});
```

--------------------------------

### List Granted Access API

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getGrantedAccess.md

Retrieves a list of granted access records, with options for pagination.

```APIDOC
## GET /api/granted-access

### Description
Retrieves a list of granted access records. Supports pagination using `page` and `pageSize` parameters.

### Method
GET

### Endpoint
/api/granted-access

### Parameters
#### Query Parameters
- **protectedData** (string) - Required - The identifier of the protected data.
- **page** (number) - Optional - The page number of the result set to return. Zero-based indexed. Defaults to 0.
- **pageSize** (number) - Optional - The number of records to include in each page. Defaults to 20. Range: [10...1000].

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "page": 1,
  "pageSize": 100
}
```

### Response
#### Success Response (200)
- **count** (number) - The number of results returned.
- **grantedAccess** (array of GrantedAccess objects) - An array containing granted access data.

#### Response Example
```json
{
  "count": 10,
  "grantedAccess": [
    {
      "grantedData": "0x123abc...",
      "grantedOwner": "0xowner123...",
      "requester": "0xrequester456...",
      "DATAIID": "0xdataid789...",
      "isGranted": true,
      "validUntil": 1678886400
    }
  ]
}
```
```

--------------------------------

### DatasetOrder Structure Definition

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Defines the structure for a DatasetOrder, used to represent a dataset in iExec's brokering system. Includes fields for dataset details, pricing, volume, restrictions, and signature.

```Solidity
struct DatasetOrder
{
  address dataset;
  uint256 datasetprice;
  uint256 volume;
  uint256 tag;
  address apprestrict;
  address workerpoolrestrict;
  address requesterrestrict;
  bytes32 salt;
  bytes   sign;
}
```

--------------------------------

### Fetch Contacts with iExec Web3Telegram

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/fetchMyContacts.md

Retrieves a list of contacts who have authorized message sending using the iExec Web3Telegram library. It initializes the library and calls the fetchMyContacts method.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
const contactsList = await web3telegram.fetchMyContacts();
```

--------------------------------

### Add Protected Data to Collection with iExec SDK

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/collection/addToCollection.md

Demonstrates how to use the iExec SDK to add protected data to a collection. This involves initializing the SDK with a provider and calling the addToCollection method with necessary parameters like protectedData, collectionId, and addOnlyAppWhitelist.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
const { txHash } = await dataProtectorSharing.addToCollection({
  protectedData: '0x123abc...',
  collectionId: 12,
  addOnlyAppWhitelist: '0x541abc...',
});
```

--------------------------------

### IExecWeb3mail Constructor - Advanced Configuration

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/advanced-configuration.md

The IExecWeb3mail constructor accepts a configuration object for advanced customization. This includes setting custom dapp addresses, whitelist addresses, IPFS nodes, IPFS gateways, and subgraph URLs.

```APIDOC
## IExecWeb3mail Constructor with Advanced Options

### Description
Allows for advanced configuration of the `IExecWeb3mail` instance by providing specific parameters to the constructor.

### Method
`new IExecWeb3mail(web3Provider, options)`

### Parameters
#### Request Body
- **dappAddressOrENS** (string) - Optional - The Ethereum contract address or ENS for the web3mail iApp.
- **dappWhitelistAddress** (string) - Optional - The Ethereum contract address for the web3mail iApp whitelist. If not provided, the default iExec whitelist address is used.
- **dataProtectorSubgraph** (string) - Optional - The subgraph URL for querying data. If not provided, the default iExec data protector subgraph is used.
- **ipfsNode** (string) - Optional - The IPFS node URL for content uploads. If not provided, the default iExec IPFS node is used.
- **ipfsGateway** (string) - Optional - The IPFS gateway URL for content downloads. If not provided, the default iExec IPFS gateway is used.
- **iexecOptions** (object) - Optional - Low-level configuration options for the `iexec` SDK.

### Request Example
```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider, {
  dappAddressOrENS: '0x456def...',
  dappWhitelistAddress: '0x789abc...',
  dataProtectorSubgraph: 'https://subgraph.example.com',
  ipfsNode: 'https://ipfs.example.com',
  ipfsGateway: 'https://ipfs-gateway.example.com',
  iexecOptions: { /* iexec SDK options */ }
});
```

### Response
#### Success Response (Instance Creation)
- **IExecWeb3mail Instance** - The `IExecWeb3mail` instance is created with the provided configuration.

#### Response Example
(No specific response body, the result is the instantiated object.)
```

--------------------------------

### Accessing Requester Secrets (Python)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Demonstrates how to access requester secrets, provided by the user, as environment variables in Python. Secrets are accessed by their index.

```python
import os

# Access requester secrets by index
api_key = os.environ.get('IEXEC_REQUESTER_SECRET_1')
db_password = os.environ.get('IEXEC_REQUESTER_SECRET_2')

if api_key:
    # Use the API key for external service calls
    headers = {'Authorization': f'Bearer {api_key}'}
    print("API Key found, preparing to make API calls...")
    # Make API calls...
    # Example: response = requests.get('https://api.example.com/data', headers=headers)
else:
    print("No API key (IEXEC_REQUESTER_SECRET_1) provided.")

if db_password:
    print("Database password found.")
    # Use the database password for database connections
    # Example: db_connection = connect_to_database(password=db_password)
else:
    print("No database password (IEXEC_REQUESTER_SECRET_2) provided.")
```

--------------------------------

### Specify New Owner for Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/transferOwnership.md

Shows how to specify the 'newOwner' parameter for the transferOwnership method, which is the ETH address designated as the new owner of the protected data.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const transferResponse = await dataProtectorCore.transferOwnership({
  protectedData: '0x123abc...',
  newOwner: '0xc5e9f4...', // [!code focus]
});
```

--------------------------------

### Add Command-Line Arguments to iApp Request (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/run-iapp-without-ProtectedData.md

Demonstrates how to pass command-line arguments to an iApp by including them in the `params` field of a request order. These arguments are visible on the blockchain. It involves creating and signing a request order, fetching app and workerpool orders, and then matching them to execute the task.

```ts
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  'chain', // blockchain node URL
  'PRIVATE_KEY'
);
const iexec = new IExec({
  ethProvider,
});
// ---
// Basic arguments
const requestorderToSign = await iexec.order.createRequestorder({
  app: '0x456def...',
  category: 0,
  appmaxprice: 10,
  workerpool: '0xa5de76...',
  params: 'arg1 arg2 arg3', // Command-line arguments
  // Other parameters have default values
});
const requestOrder = await iexec.order.signRequestorder(requestorderToSign);

// Fetch app orders
const appOrders = await iexec.orderbook.fetchAppOrderbook(
  '0x456def...' // Filter by specific app
);
if (appOrders.orders.length === 0) {
  throw new Error('No app orders found for the specified app');
}

// Fetch workerpool orders
const workerpoolOrders = await iexec.orderbook.fetchWorkerpoolOrderbook({
  workerpool: '0xa5de76...', // Filter by specific workerpool
});
if (workerpoolOrders.orders.length === 0) {
  throw new Error('No workerpool orders found for the specified workerpool');
}

// Execute the task
const taskId = await iexec.order.matchOrders({
  requestorder: requestOrder,
  apporder: appOrders.orders[0].order,
  workerpoolorder: workerpoolOrders.orders[0].order,
});
```

--------------------------------

### TEE Compatibility Check - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

If a Trusted Execution Environment (TEE) is required, this condition verifies that the application is TEE compatible. This is crucial for secure computation.

```Solidity
require((tag ^ _apporder.tag)[31] & 0x01 == 0x0);
```

--------------------------------

### Signature Verification - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Checks if all orders (app, dataset, worker pool, and request) are either signed or pre-signed. This is a critical security step to authenticate the orders.

```Solidity
require(_checkPresignatureOrSignature(App(_apporder.app).m_owner(), _apporder.hash(), _apporder.sign));
require(_checkPresignatureOrSignature(Dataset(_datasetorder.dataset).m_owner(), _datasetorder.hash(), _datasetorder.sign));
require(_checkPresignatureOrSignature(Workerpool(_workerpoolorder.workerpool).m_owner(), _workerpoolorder.hash(), _workerpoolorder.sign));
require(_checkPresignatureOrSignature(_requestorder.requester, _requestorder.hash(), _requestorder.sign));
```

--------------------------------

### Mermaid Diagram: SGX Enclave Structure

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/tee/intel-sgx.md

Visualizes the relationship between the Operating System, a regular application, and an SGX enclave, highlighting the protection of sensitive code and data within the enclave.

```mermaid
graph TB
    OS[Operating System<br/>Can see everything]
    App[Regular App<br/>Visible & Vulnerable]
    Enclave[🔒 SGX Enclave<br/>Protected]
    Data[Sensitive Code & Data<br/>Encrypted]
    OS --> App
    App --> Enclave
    Enclave --> Data
    style Enclave fill:#ffffff,stroke:#0000ff,stroke-width:2px,color:#000000
    style Data fill:#ffffff,stroke:#00ff00,stroke-width:2px,color:#000000
```

--------------------------------

### Vue.js: Conditional Display of Voucher Section

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/5-bonusChapter.md

This Vue.js snippet conditionally renders a 'Claim your Voucher' section based on the selected blockchain network. It imports necessary components and a store for user data.

```vue
<template v-if="selectedChain !== 42161">

## 🎁 Claim your Voucher

<div class="mb-6">
  <h3 class="text-xl font-semibold mb-2">What is a Voucher?</h3>
  <p>A Voucher is your all-in-one solution for iExec development to use iExec's technology, access to premium support, technical guidance and mentorship to help you build and monetize your projects. 🚀</p>
  <p>Claim your <strong>$20 voucher</strong> to kickstart your development journey. Want to learn more about [Voucher](https://www.iex.ec/voucher) ? 🎁</p>
</div>

<div class="mb-6">
  <p>Here's your unique coupon code based on your wallet address. You'll need to provide this code when claiming your voucher on Discord:</p>
  <ClientOnly>
    <CouponCode />
  </ClientOnly>
</div>

<Button as="a" href="https://www.iex.ec/voucher" target="_blank" data-track="claimVoucher">
  Claim your $20 voucher
</Button>

<br/>
<br/>

<Container variant="success">

Thank you for being part of the iExec journey! We can't wait to see what you'll
build next! 🚀

</Container>

</template>

<script setup>
import CouponCode from '@/modules/helloWorld/CouponCode.vue';
import Button from '@/components/ui/Button.vue';
import useUserStore from '@/stores/useUser.store';
import Banner from '../../components/Banner.vue'
import Container from '../../components/Container.vue'
import { computed } from 'vue';

const userStore = useUserStore();
const selectedChain = computed(() => userStore.getCurrentChainId());
</script>
```

--------------------------------

### Protect Data with iExec DataProtector

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/handle-schemas-dataset-types.md

This snippet demonstrates how to protect data using the iExec DataProtector SDK. It takes a JavaScript object as input, analyzes its structure, and generates a schema. The protected data is then accessible via its address. Dependencies include '@iexec/dataprotector'.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'User Contact',
  data: {
    email: 'alice@example.com',
    phoneNumber: '+1234567890',
    preferences: {
      newsletter: true,
      notifications: false,
    },
  },
});

console.log('✅ Protected data created!');
console.log('📍 Address:', protectedData.address);
```

--------------------------------

### Specify Rental Price for Protected Data (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting.md

Shows how to set the `price` parameter when using `setProtectedDataToRenting`. The price is defined in nano RLC (nRLC) and determines the cost for renting the protected data.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC // [!code focus]
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

--------------------------------

### Unzip and View Decrypted Result

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/protect-the-result.md

Unzips the decrypted result archive and displays the content of the actual result file.

```bash
unzip results.zip -d my-decrypted-result && \
    cat my-decrypted-result/result.txt
```

--------------------------------

### Specify Page Size for Data Protector Results (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getGrantedAccess.md

Illustrates the usage of the pageSize parameter within the getGrantedAccess method to control the number of records returned per page. This is crucial for optimizing data retrieval and managing large result sets.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  protectedData: '0x123abc...',
  page: 1,
  pageSize: 100, 
});
```

--------------------------------

### Specify Price in nRLC for Subscription Parameters

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams.md

This snippet illustrates how to set the `price` parameter, specified in nano RLC (nRLC), when configuring subscription parameters. It highlights the correct way to define the cost for accessing a data collection.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    price: 2, // 2 nRLC // [!code focus]
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

--------------------------------

### Manage Time-Based Data Subscriptions (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/monetize-protected-data.md

Illustrates setting up subscription parameters, adding protected data to a collection, and subscribing to a collection for recurring time-based access. This involves setting prices and durations for periods of unlimited usage. Requires the '@iexec/dataprotector' library.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

// Mock collection for the example
const collection = { collectionId: 123 };
// ---cut---
// DATA OWNER: Set time-based subscription parameters
await dataProtectorSharing.setSubscriptionParams({
  collectionId: collection.collectionId,
  price: 20000000000, // 20 RLC per 30-day period
  duration: 2592000, // 30 days unlimited access
});

// DATA OWNER: Add protected data to the time-based subscription bundle
await dataProtectorSharing.setProtectedDataToSubscription({
  protectedData: '0x123abc...',
});

// DATA OWNER: Add more data to the same subscription
await dataProtectorSharing.setProtectedDataToSubscription({
  protectedData: '0x456def...', // Additional dataset
});

// CLIENT/SUBSCRIBER: Get time-based subscription access
const subscription = await dataProtectorSharing.subscribeToCollection({
  collectionId: collection.collectionId,
  price: 20000000000, // Pay for full period
  duration: 2592000, // 30 days unlimited usage
});
```

--------------------------------

### Protecting data using TDX environment with IExecDataProtectorCore

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/protectData.md

Demonstrates how to configure `IExecDataProtectorCore` to protect data within the experimental Intel TDX environment by specifying the SMS URL. This method allows for enhanced security by leveraging TDX technology.

```typescript
declare global {
  interface Window {
    ethereum: any;
  }
}
// ---cut---
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate dataProtector connected to the TDX SMS
const dataProtectorCore = new IExecDataProtectorCore(web3Provider, {
  iexecOptions: {
    smsURL: 'https://sms.labs.iex.ec', // [!code focus]
  },
});
// create a protected data
const protectedData = await dataProtectorCore.protectData({
  data: {
    email: 'example@gmail.com',
    SMTPserver: {
      port: 5000,
      smtp_server: 'smtp.gmail.com',
    },
  },
});
```

--------------------------------

### Configure Web3Telegram with Custom DApp Address

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/advanced-configuration.md

Initializes the IExecWeb3telegram instance with a specific DApp address or ENS. This allows targeting a custom or specific version of the web3telegram iApp on the iExec network.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  dappAddressOrENS: '0x456def...', // [!code focus]
});
```

--------------------------------

### Instantiate IExecDataProtectorDeserializer in NodeJS

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/deserializer.md

This code demonstrates how to import and create an instance of the IExecDataProtectorDeserializer class in a NodeJS environment.

```ts
import { IExecDataProtectorDeserializer } from '@iexec/dataprotector-deserializer';

const deserializer = new IExecDataProtectorDeserializer();
```

--------------------------------

### getGrantedAccess

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getGrantedAccess.md

Retrieve all granted access details for a protected data object. Filter access by user, application, or both, and manage access with pagination.

```APIDOC
## getGrantedAccess

### Description

This method provides a listing of all access grants given for the specified protected data object. Options for filtering include specifying an authorized user, an authorized app, or both.

### Method

POST

### Endpoint

`/getGrantedAccess`

### Parameters

#### Request Body

- **protectedData** (AddressOrENS) - Optional - Address of the protected data object for which you are querying access authorization grants. It's a representation of ethereum address or ENS name (Ethereum Name Service). If no address is specified, it will return all granted access for any protected data.
- **authorizedApp** (AddressOrENS) - Optional - Optional filter to restrict the results to include only authorizations for the specified application. It's a representation of ethereum address or ENS name (Ethereum Name Service). If no address is specified, it will return all granted access for any application.
- **authorizedUser** (AddressOrENS) - Optional - Optional filter to restrict the results to include only authorizations for the specified user. It's a string representation of ethereum address or ENS name (Ethereum Name Service). If no address is specified, it will return all granted access for any user.
- **isUserStrict** (boolean) - Optional - Optional filter to restrict the results to include only authorizations for the specified user. Authorizations made for `any` user are not returned. Defaults to `false`.
- **page** (number) - Optional - The page number for pagination.
- **pageSize** (number) - Optional - The number of results per page.

### Request Example

```json
{
  "protectedData": "0x123abc...",
  "authorizedApp": "0x456def...",
  "authorizedUser": "0x789cba...",
  "isUserStrict": true,
  "page": 1,
  "pageSize": 100
}
```

### Response

#### Success Response (200)

- **grantedAccess** (Array<GrantedAccessEntry>) - An array of granted access entries.
  - **protectedData** (AddressOrENS) - The protected data object address.
  - **authorizedApp** (AddressOrENS) - The authorized application address.
  - **authorizedUser** (AddressOrENS) - The authorized user address.
  - **isUserStrict** (boolean) - Indicates if the user authorization is strict.
  - **createdAt** (string) - The timestamp when the access was granted.

#### Response Example

```json
{
  "grantedAccess": [
    {
      "protectedData": "0x123abc...",
      "authorizedApp": "0x456def...",
      "authorizedUser": "0x789cba...",
      "isUserStrict": true,
      "createdAt": "2023-10-27T10:00:00Z"
    }
  ]
}
```
```

--------------------------------

### Conceptual iExec Task Flow

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/overview/what-is-iexec.md

Illustrates the core components and flow of a task within the iExec protocol, from data protection to receiving results.

```text
Protected Data + iApp + Worker = Task → Encrypted Result
```

--------------------------------

### POST setProtectedDataForSale

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/selling/setProtectedDataForSale.md

Allows a data owner to list their protected data for sale by setting a price. Upon successful sale, ownership is transferred to the buyer, who can choose their own pricing or retain the data for personal use.

```APIDOC
## POST setProtectedDataForSale

### Description
Allows a data owner to list their protected data for sale by setting a price. Upon successful sale, ownership is transferred to the buyer.

### Method
POST

### Endpoint
/setProtectedDataForSale

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - Address of the protected data that you'd like to set for sale.
- **price** (number) - Required - The price in nano RLC (nRLC) you ask from someone who wants to buy the protected data.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "price": 2
}
```

### Response
#### Success Response (200)
- **transactionHash** (string) - Hash of the transaction that set the data for sale.

#### Response Example
```json
{
  "transactionHash": "0xabc123..."
}
```
```

--------------------------------

### Query Protected Data by Schema

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/handle-schemas-dataset-types.md

This code illustrates how to find protected data that matches a specific schema requirement using the iExec DataProtector SDK. It helps in discovering relevant data without exposing its content. It depends on the '@iexec/dataprotector' package.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getProtectedData({
  requiredSchema: {
    email: 'string',
  },
});
```

--------------------------------

### Configure Web3Telegram with Custom Data Protector Subgraph

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/advanced-configuration.md

Initializes the IExecWeb3telegram instance with a custom subgraph URL for data querying. This allows integration with alternative or specific data protector subgraph instances.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  dataProtectorSubgraph: 'subgraph-url', // [!code focus]
});
```

--------------------------------

### Grant Access to Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/manage-access.md

Grants access to protected data for a specific application and user, with optional pricing and usage limits.

```APIDOC
## POST /api/dataprotector/grant-access

### Description
Grants access to protected data for a specific application and user, with optional pricing and usage limits.

### Method
POST

### Endpoint
/api/dataprotector/grant-access

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - The ethereum address of the protected data.
- **authorizedApp** (AddressOrENS) - Required - The iApp address that can process the data.
- **authorizedUser** (AddressOrENS) - Required - The wallet address of the user that can process the data. Use `0x0000000000000000000000000000000000000000` to allow any user.
- **pricePerAccess** (number) - Optional - The cost per data usage in nano RLC (nRLC). Defaults to 0.
- **numberOfAccess** (number) - Optional - The maximum number of times the data can be accessed. Defaults to 1.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "authorizedApp": "0x456def...",
  "authorizedUser": "0x789cba...",
  "pricePerAccess": 0,
  "numberOfAccess": 10
}
```

### Response
#### Success Response (200)
- **message** (string) - A confirmation message indicating access has been granted.

#### Response Example
```json
{
  "message": "Access granted successfully."
}
```
```

--------------------------------

### Set Subscription Parameters using IExecDataProtectorSharing

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams.md

This snippet demonstrates how to set subscription parameters (collection ID, price, and duration) for a data collection using the IExecDataProtectorSharing class. It requires a Web3 provider and the collection's details as input.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setSubscriptionParamsResult =
  await dataProtectorSharing.setSubscriptionParams({
    collectionId: 12,
    price: 2, // 2 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

--------------------------------

### Handle Status Updates in addToCollection

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/collection/addToCollection.md

Shows how to implement a callback function (onStatusUpdate) to receive notifications about the progress of the addToCollection operation. This callback provides updates on the status of different steps.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
const { txHash } = await dataProtectorSharing.addToCollection({
  protectedData: '0x123abc...',
  collectionId: 12,
  addOnlyAppWhitelist: '0xba46d6...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```

--------------------------------

### Add Secrets to iExec Request Order and Execute Task (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/run-iapp-without-ProtectedData.md

Demonstrates how to create a request order with sensitive information (secrets) for an iExec application. It includes steps for signing the order, fetching necessary app and workerpool orders, and matching them to execute the task. This requires the `iexec` SDK.

```typescript
import { IExec, utils } from 'iexec';

const ethProvider = utils.getSignerFromPrivateKey(
  'chain', // blockchain node URL
  'PRIVATE_KEY'
);
const iexec = new IExec({
  ethProvider,
});
// ---cut---
// Basic secrets
const requestorderToSign = await iexec.order.createRequestorder({
  app: '0x456def...',
  category: 0, // Required: category for the request
  appmaxprice: 10,
  workerpool: '0xa5de76...',
  params: {
    iexec_secrets: {
      1: 'api-key-12345',
      2: 'database-password',
    },
  },
});
const requestOrder = await iexec.order.signRequestorder(requestorderToSign);

// Fetch app orders
const appOrders = await iexec.orderbook.fetchAppOrderbook(
  '0x456def...' // Filter by specific app
);
if (appOrders.orders.length === 0) {
  throw new Error('No app orders found for the specified app');
}

// Fetch workerpool orders
const workerpoolOrders = await iexec.orderbook.fetchWorkerpoolOrderbook({
  workerpool: '0xa5de76...', // Filter by specific workerpool
});
if (workerpoolOrders.orders.length === 0) {
  throw new Error('No workerpool orders found for the specified workerpool');
}

// Execute the task
const taskId = await iexec.order.matchOrders({
  requestorder: requestOrder,
  apporder: appOrders.orders[0].order,
  workerpoolorder: workerpoolOrders.orders[0].order,
});
```

--------------------------------

### iExec Oracle dApp Output Format

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/oracle.md

Shows the expected JSON output format for an iExec Oracle dApp, specifically the 'callback-data' key containing the encoded result. This data is crucial for updating the Oracle's on-chain state.

```bash
$ cat ${IEXEC_OUT}/computed.json
{
  'callback-data': '0x456def...'
}
```

--------------------------------

### Grant Access to Protected Data with DataProtector SDK

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/get-started/helloWorld/4-manageDataAccess.md

This snippet demonstrates how to grant access to protected data using the IExecDataProtectorCore class. It requires initializing the core with a web3 provider and then calling the grantAccess method with the protected data, authorized application, and authorized user addresses. The zero address can be used for the authorizedUser to grant access to all users.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
});
```

--------------------------------

### Import Web3MailConfigOptions Type

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/advanced-configuration.md

Imports the necessary type definition for configuring the Web3Mail service. This is a prerequisite for defining custom configuration objects.

```typescript
import { type Web3MailConfigOptions } from '@iexec/web3mail';
```

--------------------------------

### Tagging System for Feature Matching (Conceptual)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Explains the tagging system in iExec V3, where tags are 256-bit values used to specify or represent features. This system facilitates matching worker pools to orders based on required capabilities, such as Trusted Execution Environment (TEE).

```text
Tagging System for Feature Matching:

In V3, tags are 32 bytes (256 bits) long array where each bit corresponds to a feature.

| **Value**                                                            | **Description**        |
| -------------------------------------------------------------------- | ---------------------- |
| `0x0000000000000000000000000000000000000000000000000000000000000001` | TEE (physical enclave) |
| `0x0000000000000000000000000000000000000000000000000000000000000002` | —                      |
| `0x0000000000000000000000000000000000000000000000000000000000000004` | —                      |
| `0x0000000000000000000000000000000000000000000000000000000000000008` | —                      |
| `0x0000000000000000000000000000000000000000000000000000000000000010` | —                      |
| …                                                                    | …                      |
| `0x8000000000000000000000000000000000000000000000000000000000000000` | —                      |

For orders matching, the worker pool order must enable all bits that enable in any of the app order, dataset order and requester order. Meaning that if the app order tag is `0x12 = 0x10 | 0x02`, the dataset order is `0x81 = 0x80 | 0x01` and the requester order is `0x03 = 0x02 | 0x01`, then the worker pool order must, at least, have a tag `0x93 = 0x80 | 0x10 | 0x02 | 0x01`.
```

--------------------------------

### Process Protected Data API

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

This section details the parameters that can be passed to the processProtectedData method, allowing users to specify how protected data should be processed.

```APIDOC
## POST /api/dataprotector/process

### Description
Processes protected data using specified application and execution parameters.

### Method
POST

### Endpoint
/api/dataprotector/process

### Parameters
#### Request Body
- **protectedData** (Address) - Required - The address of the protected data.
- **app** (Address) - Required - The address of the application to use for processing.
- **voucherOwner** (Address) - Optional - The address of the voucher owner. Must be used with `useVoucher: true`.
- **useVoucher** (Boolean) - Optional - Whether to use a voucher for payment. Defaults to false.
- **args** (string) - Optional - Set of execution arguments for the application. Warning: Sensitive information should not be passed here as arguments are visible on the blockchain explorer.
- **inputFiles** (string[]) - Optional - An array of URLs representing input files for application execution.
- **secrets** (Record<number, string>) - Optional - A mapping of numerical identifiers to secrets stored in the secrets manager, accessible as environment variables during execution.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "app": "0x456def...",
  "useVoucher": true,
  "voucherOwner": "0x5714eB...",
  "args": "--input data.txt --output result.txt",
  "inputFiles": [
    "https://example.com/file1.txt",
    "https://example.com/file2.txt"
  ],
  "secrets": {
    "1": "MY_SECRET_KEY",
    "2": "ANOTHER_SECRET"
  }
}
```

### Response
#### Success Response (200)
- **result** (string) - The result of the data processing operation.

#### Response Example
```json
{
  "result": "0x987xyz..."
}
```
```

--------------------------------

### Specify Protected Data Address for Renting (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting.md

Illustrates how to specify the `protectedData` parameter within the `setProtectedDataToRenting` method. This parameter is crucial for identifying the specific data asset to be made available for rent.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedData: '0x123abc...', // [!code focus]
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

--------------------------------

### Protecting an Array by converting to Record<string, any>

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/protectData.md

Shows how to protect an array of data by first converting it into a Record<string, any> format using the `reduceArray` helper function. This method is used when the data to be protected is an array.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const reduceArray = (array: Array<any>): Record<string, any> =>
  array.reduce((accumulator, current, i) => {
    accumulator[i] = current;
    return accumulator;
  }, {});

const emailsArray = [
  'example@gmail.com',
  'example@my-company.com',
  'example@example.com',
];

const protectedData = await dataProtectorCore.protectData({
  data: {
    emails: reduceArray(emailsArray),
  },
});

/**
 * protectedData.schema:
 * {
 *   emails: {
 *     0: 'string',
 *     1: 'string',
 *     2: 'string'
 *   }
 * } */
```

--------------------------------

### Accessing Requester Secrets (JavaScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/inputs.md

Shows how to access requester secrets, provided by the user, as environment variables in JavaScript. Secrets are accessed by their index.

```javascript
// Access requester secrets by index
const apiKey = process.env.IEXEC_REQUESTER_SECRET_1;
const dbPassword = process.env.IEXEC_REQUESTER_SECRET_2;

if (apiKey) {
  // Use the API key for external service calls
  const headers = { Authorization: `Bearer ${apiKey}` };
  console.log('API Key found, preparing to make API calls...');
  // Make API calls...
  // Example: fetch('https://api.example.com/data', { headers: headers })
} else {
  console.log('No API key (IEXEC_REQUESTER_SECRET_1) provided.');
}

if (dbPassword) {
  console.log('Database password found.');
  // Use the database password for database connections
  // Example: const dbConfig = { password: dbPassword };
} else {
  console.log('No database password (IEXEC_REQUESTER_SECRET_2) provided.');
}
```

--------------------------------

### Grant Access to Protected Data (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/grantAccess.md

Demonstrates how to grant access to protected data using the `grantAccess` method from the iExec SDK. This involves specifying the protected data, the authorized application or whitelist, and the authorized user, along with optional parameters for pricing and access limits. It requires the `@iexec/dataprotector` library.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  pricePerAccess: 3,
  numberOfAccess: 10,
  onStatusUpdate: ({ title, isDone }) => {
    console.log(title, isDone);
  },
});
```

--------------------------------

### sendTelegram - workerpoolMaxPrice

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Allows specifying the maximum amount you want to pay the workerpool provider for using their infrastructure to run the web3telegram app in nRLC.

```APIDOC
## POST /sendTelegram

### Description
Sends a Telegram message using the iExec Web3Telegram service.

### Method
POST

### Endpoint
/sendTelegram

### Parameters
#### Request Body
- **protectedData** (string) - Required - The protected data to be sent.
- **senderName** (string) - Required - The name of the sender.
- **telegramContent** (string) - Required - The content of the Telegram message.
- **workerpoolAddressOrEns** (string | undefined) - Optional - The address or ENS name of the workerpool to run the application. Defaults to the iExec workerpool.
- **dataMaxPrice** (number | undefined) - Optional - The maximum amount (in nRLC) to pay for the data.
- **appMaxPrice** (number | undefined) - Optional - The maximum amount (in nRLC) to pay for the Web3Telegram application.
- **workerpoolMaxPrice** (number | undefined) - Optional - The maximum amount (in nRLC) to pay the workerpool provider.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "senderName": "Arthur",
  "telegramContent": "My telegram message content",
  "workerpoolMaxPrice": 42
}
```

### Response
#### Success Response (200)
- **taskId** (Address) - Uniquely identifies the telegram task on the iExec side chain. You can view the status of the `sendTelegram` method by monitoring the task on the iExec blockchain explorer.

#### Response Example
```json
{
  "taskId": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
}
```
```

--------------------------------

### Set Protected Data Renting Parameters using TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/setProtectedDataRentingParams.md

This snippet demonstrates how to set or update the renting parameters for a protected data item using the IExecDataProtectorSharing class. It requires a Web3 provider and defines the protected data address, price in nRLC, and rental duration in seconds.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const setForRentingResult =
  await dataProtectorSharing.setProtectedDataRentingParams({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

--------------------------------

### Create Signed Order (DataProtector Core)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/monetize-protected-data.md

Create a signed order to grant access to your protected data with specific conditions like authorized app, user, price per access, and total number of accesses. This method is ideal for direct partnerships and precise access control.

```APIDOC
## POST /DataProtector/SignedOrder

### Description
Creates a signed order for accessing protected data with defined usage conditions.

### Method
POST

### Endpoint
/DataProtector/SignedOrder

### Parameters
#### Request Body
- **protectedData** (string) - Required - The address of the protected data.
- **authorizedApp** (string) - Optional - The address of the authorized iApp.
- **authorizedUser** (string) - Optional - The address of the authorized user.
- **pricePerAccess** (number) - Required - The cost for each individual data access (in RLC).
- **numberOfAccess** (number) - Required - The maximum number of times the data can be accessed.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "authorizedApp": "email-processor.apps.iexec.eth",
  "authorizedUser": "0x456def...",
  "pricePerAccess": 5000000000,
  "numberOfAccess": 100
}
```

### Response
#### Success Response (200)
- **signedOrder** (string) - The created signed order.

#### Response Example
```json
{
  "signedOrder": "0x..."
}
```
```

--------------------------------

### Remove Protected Data from Renting (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/removeProtectedDataFromRenting.md

Demonstrates how to use the removeProtectedDataFromRenting method from the @iexec/dataprotector library to stop a protected data item from being rented. It requires initializing the IExecDataProtectorSharing class with a web3 provider and specifying the protected data's address.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const notForRentingAnymoreResult =
  await dataProtectorSharing.removeProtectedDataFromRenting({
    protectedData: '0x123abc...',
  });
```

--------------------------------

### Send Email with Data Max Price

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Allows setting the maximum price (in nRLC) to pay the data owner for accessing their data.

```APIDOC
## POST /sendEmail

### Description
Sends an email using the Web3Mail service, defining the maximum payment for data access.

### Method
POST

### Endpoint
/sendEmail

### Parameters
#### Request Body
- **protectedData** (string) - Required - The protected data associated with the recipient.
- **emailSubject** (string) - Required - The subject of the email.
- **emailContent** (string) - Required - The content of the email.
- **dataMaxPrice** (number) - Optional - The maximum amount in nRLC to pay the data owner. Defaults to 0.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "emailSubject": "My email subject",
  "emailContent": "My email content",
  "dataMaxPrice": 42
}
```

### Response
#### Success Response (200)
- **taskId** (Address) - Unique identifier for the email task on the iExec side chain.

#### Response Example
```json
{
  "taskId": "0x123abc..."
}
```
```

--------------------------------

### PriceOracle Contract Update Environment Function

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/oracle.md

Allows the owner of the PriceOracle contract to update its configuration parameters. This function acts as a wrapper, calling the inherited _iexecDoracleUpdateSettings function to apply the new settings.

```Solidity
function updateEnv(
        address _authorizedApp
,       address _authorizedDataset
,       address _authorizedWorkerpool
,       bytes32 _requiredtag
,       uint256 _requiredtrust
)
public onlyOwner
{
        _iexecDoracleUpdateSettings(_authorizedApp, _authorizedDataset, _authorizedWorkerpool, _requiredtag, _requiredtrust);
}
```

--------------------------------

### App Restriction Check for Dataset/Worker Pool - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Ensures that the application fits any restrictions imposed by the dataset or worker pool orders regarding which applications they can be used with.

```Solidity
require(_checkIdentity(_datasetorder.apprestrict, _apporder.app, GROUPMEMBER_PURPOSE));
require(_checkIdentity(_workerpoolorder.apprestrict, _apporder.app, GROUPMEMBER_PURPOSE));
```

--------------------------------

### Send Email with App Max Price

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Allows setting the maximum price (in nRLC) to pay the Web3Mail app provider (iExec) for using the application.

```APIDOC
## POST /sendEmail

### Description
Sends an email using the Web3Mail service, specifying the maximum payment for application usage.

### Method
POST

### Endpoint
/sendEmail

### Parameters
#### Request Body
- **protectedData** (string) - Required - The protected data associated with the recipient.
- **emailSubject** (string) - Required - The subject of the email.
- **emailContent** (string) - Required - The content of the email.
- **appMaxPrice** (number) - Optional - The maximum amount in nRLC to pay the Web3Mail app provider. Defaults to 0.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "emailSubject": "My email subject",
  "emailContent": "My email content",
  "appMaxPrice": 42
}
```

### Response
#### Success Response (200)
- **taskId** (Address) - Unique identifier for the email task on the iExec side chain.

#### Response Example
```json
{
  "taskId": "0x123abc..."
}
```
```

--------------------------------

### Generate Encryption Keypair using iExec SDK

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/protect-the-result.md

Generates an RSA key pair for encrypting task results. The private key is stored locally and should be backed up, while the public key is used for encryption.

```bash
iexec result generate-encryption-keypair
```

--------------------------------

### Specify Rental Duration for Protected Data (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting.md

Demonstrates setting the `duration` parameter for the `setProtectedDataToRenting` method. The duration is specified in seconds and defines how long the rental agreement for the protected data will be valid.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setForRentingResult =
  await dataProtectorSharing.setProtectedDataToRenting({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC
    duration: 60 * 60 * 24 * 30, // 30 days // [!code focus]
  });
```

--------------------------------

### Send Email with Workerpool Max Price

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Allows setting the maximum price (in nRLC) to pay the workerpool provider for infrastructure usage.

```APIDOC
## POST /sendEmail

### Description
Sends an email using the Web3Mail service, defining the maximum payment for workerpool execution.

### Method
POST

### Endpoint
/sendEmail

### Parameters
#### Request Body
- **protectedData** (string) - Required - The protected data associated with the recipient.
- **emailSubject** (string) - Required - The subject of the email.
- **emailContent** (string) - Required - The content of the email.
- **workerpoolMaxPrice** (number) - Optional - The maximum amount in nRLC to pay the workerpool provider. Defaults to 0.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "emailSubject": "My email subject",
  "emailContent": "My email content",
  "workerpoolMaxPrice": 42
}
```

### Response
#### Success Response (200)
- **taskId** (Address) - Unique identifier for the email task on the iExec side chain.

#### Response Example
```json
{
  "taskId": "0x123abc..."
}
```
```

--------------------------------

### processProtectedData

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Allows processing a protected dataset through the use of a specified iExec application. Ensure the application has authorization to use the protectedData.

```APIDOC
## POST /processProtectedData

### Description
Processes a protected dataset using a specified iExec application. Authorization for the application to access the protected data is required.

### Method
POST

### Endpoint
/processProtectedData

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **protectedData** (AddressOrENS) - Required - The ETH address or ENS reference for the protected data.
- **app** (AddressOrENS) - Required - The ETH address or ENS address for the iExec application.
- **path** (string) - Optional - Specifies the file within the protected data zip file to be processed.
- **userWhitelist** (Address) - Optional - The whitelist contract address if access is granted to a group of users.
- **useVoucher** (boolean) - Optional - Set to true to pay for the task using a voucher. Defaults to false.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "app": "0x456def...",
  "args": "arg1 arg2",
  "inputFiles": [
    "https://example.com/file1",
    "https://example.com/file2"
  ],
  "secrets": {
    "1": "secret1",
    "2": "secret2"
  },
  "path": "my-content",
  "userWhitelist": "0x656def...",
  "useVoucher": true
}
```

### Response
#### Success Response (200)
- **result** (string) - The result of the data processing.

#### Response Example
```json
{
  "result": "Processed data output"
}
```
```

--------------------------------

### Monitor iApp Status in Code (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/debugging.md

This snippet demonstrates how to monitor the status of an iApp execution using the iExec SDK. It utilizes the `processProtectedData` method and provides a callback function `onStatusUpdate` to log the progress and completion status.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const response = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  onStatusUpdate: ({ title, isDone }) => {
    console.log(`Status: ${title} - Done: ${isDone}`);
  },
});
```

--------------------------------

### Send Telegram Message with Web3Telegram

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Demonstrates how to use the sendTelegram method from the IExecWeb3telegram class to send a secure Telegram message. It requires initializing the Web3Telegram instance with a provider and specifies the recipient's protected data, message content, and sender name.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  telegramContent: 'My telegram message content',
  senderName: 'Awesome project team',
  label: 'some-custom-id',
  dataMaxPrice: 42,
  appMaxPrice: 42,
  workerpoolMaxPrice: 42,
});
```

--------------------------------

### Specify Application for Protected Data Processing

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Illustrates setting the 'app' parameter in the processProtectedData method. This parameter identifies the iExec application (by ETH address or ENS) that will process the protected data.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...', // [!code focus]
  });
```

--------------------------------

### Handle Protected Data Status Updates

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/protectData.md

Illustrates how to use a callback function to receive notifications at intermediate steps during the data protection process. The callback provides status information like title and completion status.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
  onStatusUpdate: ({ title, isDone }) => {// [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```

--------------------------------

### Configure Web3Telegram with Custom Whitelist Address

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/advanced-configuration.md

Initializes the IExecWeb3telegram instance with a custom DApp whitelist address. This controls which Chat IDs are permitted to interact with the web3telegram iApp, enhancing access control.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3telegram = new IExecWeb3telegram(web3Provider, {
  dappWhitelistAddress: '0x456def...', // [!code focus]
});
```

--------------------------------

### Set Maximum Price for App in sendTelegram

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Allows specifying the maximum amount (in nRLC) willing to pay the Web3Telegram app provider for using the application. Uses the @iexec/web3telegram SDK.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  senderName: 'Arthur',
  telegramContent: 'My telegram message content',
  appMaxPrice: 42, // [!code focus]
});
```

--------------------------------

### Protect Data with DataProtector Core

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/manage-access.md

Protects data by encrypting it client-side and storing it as an NFT. This TypeScript code snippet initializes the IExecDataProtectorCore and calls the protectData method with the data's name and content.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'My Email Contact',
  data: {
    email: 'alice@example.com',
    firstName: 'Alice',
    lastName: 'Smith',
  },
});

console.log('Protected data address:', protectedData.address);
```

--------------------------------

### Fetch User Contacts List

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/fetchUserContacts.md

Retrieves a list of contacts who have authorized a specific Ethereum address to send them messages. Requires initializing IExecWeb3telegram with a web3 provider.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---
const contactsList = await web3telegram.fetchUserContacts({
  userAddress: '0x789cba...'});
```

--------------------------------

### Protecting email data using IExecDataProtectorCore

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/protectData.md

Encrypts a single email address using the `protectData` method. This demonstrates basic usage with client-side encryption for privacy. It requires initializing `IExecDataProtectorCore` with a web3 provider.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  data: {
    email: 'example@gmail.com',
  },
});
```

--------------------------------

### subscribeToCollection

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/subscribeToCollection.md

Subscribes to a collection, providing access to its protected data for a specified duration and price.

```APIDOC
## POST /api/subscribeToCollection

### Description
Subscribes to a collection on iExec, granting access to its protected data for a specified duration and price. The subscription does not automatically renew. This method includes protection against front-running by allowing the SDK to verify the price and duration against the collection owner's settings.

### Method
POST

### Endpoint
/api/subscribeToCollection

### Parameters
#### Request Body
- **collectionId** (number) - Required - The ID of the collection to subscribe to.
- **price** (number) - Required - The expected price of the rental in nano RLC (nRLC). This parameter helps prevent front-running.
- **duration** (number) - Required - The duration of the rental in seconds. This parameter helps prevent front-running.

### Request Example
```json
{
  "collectionId": 12,
  "price": 1,
  "duration": 172800
}
```

### Response
#### Success Response (200)
- **txHash** (string) - The transaction hash of the subscription.

#### Response Example
```json
{
  "txHash": "0xabc123..."
}
```
```

--------------------------------

### Providing requester secrets for iExec application execution

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Demonstrates how to use the 'secrets' parameter to supply necessary requester secrets for an iExec application's execution. Secrets are mapped to numerical identifiers and accessible as environment variables during execution.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  secrets: { // [!code focus]
    1: 'secret1', // [!code focus]
    2: 'secret2', // [!code focus]
  }, // [!code focus]
});
```

--------------------------------

### Retrieve Protected Data by Owner or Schema

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getProtectedData.md

This snippet demonstrates how to use the getProtectedData method to retrieve protected data, either by specifying an owner's address or a data schema, or both. It initializes the IExecDataProtectorCore with a web3 provider.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getProtectedData({
  owner: '0xa0c15e...',
  requiredSchema: {
    email: 'string',
  },
});
```

--------------------------------

### Protect Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/manage-access.md

Encrypts data client-side and stores it as an NFT. Only the owner can decrypt and use it.

```APIDOC
## POST /api/dataprotector/protect

### Description
Encrypts data client-side and stores it as an NFT. Only the owner can decrypt and use it.

### Method
POST

### Endpoint
/api/dataprotector/protect

### Parameters
#### Request Body
- **name** (string) - Required - A name for the protected data.
- **data** (object) - Required - The data to be protected.

### Request Example
```json
{
  "name": "My Email Contact",
  "data": {
    "email": "alice@example.com",
    "firstName": "Alice",
    "lastName": "Smith"
  }
}
```

### Response
#### Success Response (200)
- **address** (string) - The address of the protected data NFT.

#### Response Example
```json
{
  "address": "0x123abc..."
}
```
```

--------------------------------

### Set appMaxPrice for Web3Mail application cost

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Allows specifying the maximum amount in nRLC to pay the Web3Mail app provider (iExec) for using the application. This covers the application execution cost.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  appMaxPrice: 42, // [!code focus]
});
```

--------------------------------

### Provide telegramContent for sendTelegram

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Demonstrates how to provide the `telegramContent` for a Telegram message sent via the sendTelegram method. This parameter contains the actual message content, which is encrypted and stored on IPFS, with a maximum size of 512 KB.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  senderName: 'Arthur',
  telegramContent: 'My telegram message content', // [!code focus]
});
```

--------------------------------

### Set Protected Data to Subscription - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/setProtectedDataToSubscription.md

Demonstrates how to set protected data for a subscription using the iExec SDK. It initializes the IExecDataProtectorSharing service with a Web3 provider and then calls the setProtectedDataToSubscription method with the protected data address.

```ts
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const setToSubscriptionResult =
  await dataProtectorSharing.setProtectedDataToSubscription({
    protectedData: '0x123abc...',
  });
```

--------------------------------

### Protect Data for Web3Mail (Email) using DataProtector Core

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/integrate-web3-messaging.md

Protects an email address using the DataProtector Core toolkit. This is a prerequisite for sending emails via Web3Mail. It requires a Web3 provider initialized with a private key and the email address to be protected.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const protectedData = await dataProtectorCore.protectData({
  data: {
    email: 'user@example.com',
  },
});
```

--------------------------------

### Send Email using Web3Mail SDK

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/integrate-web3-messaging.md

Sends an email message using the Web3Mail SDK. This requires the protected data identifier, an email subject, and the email content. An optional voucher can also be used.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);

const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  // useVoucher: true,
});
```

--------------------------------

### Process Protected Data with TDX Worker Pool

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

This JavaScript code snippet shows how to process protected data using a specific worker pool designed for TDX. It involves calling the processProtectedData method on the DataProtector's core instance, specifying the protectedData address, the TDX workerpool, and the application address.

```javascript
await dataProtector.core.processProtectedData({
  protectedData: protectedData.address,
  workerpool: 'tdx-labs.pools.iexec.eth',
  app: '0x456def...',
});
```

--------------------------------

### sendTelegram - appMaxPrice

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Allows specifying the maximum amount (in nRLC) you are willing to pay the Web3Telegram app provider (iExec) for using the Web3Telegram application.

```APIDOC
## POST /sendTelegram

### Description
Sends a Telegram message using the iExec Web3Telegram service.

### Method
POST

### Endpoint
/sendTelegram

### Parameters
#### Request Body
- **protectedData** (string) - Required - The protected data to be sent.
- **senderName** (string) - Required - The name of the sender.
- **telegramContent** (string) - Required - The content of the Telegram message.
- **workerpoolAddressOrEns** (string | undefined) - Optional - The address or ENS name of the workerpool to run the application. Defaults to the iExec workerpool.
- **dataMaxPrice** (number | undefined) - Optional - The maximum amount (in nRLC) to pay for the data.
- **appMaxPrice** (number | undefined) - Optional - The maximum amount (in nRLC) to pay for the Web3Telegram application.
- **workerpoolMaxPrice** (number | undefined) - Optional - The maximum amount (in nRLC) to pay the workerpool provider.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "senderName": "Arthur",
  "telegramContent": "My telegram message content",
  "appMaxPrice": 42
}
```

### Response
#### Success Response (200)
- **taskId** (Address) - Uniquely identifies the telegram task on the iExec side chain. You can view the status of the `sendTelegram` method by monitoring the task on the iExec blockchain explorer.

#### Response Example
```json
{
  "taskId": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
}
```
```

--------------------------------

### Configure Web3Mail with Custom IPFS Gateway URL

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/advanced-configuration.md

Initializes the IExecWeb3mail service with a custom IPFS gateway URL for content downloads. This is useful for users who want to use their own IPFS gateway to access content stored on the IPFS network.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3mail = new IExecWeb3mail(web3Provider, {
  ipfsGateway: 'ipfs-gateway-url', // [!code focus]
});
```

--------------------------------

### Fetch User Contacts with Strict Authorization

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/fetchUserContacts.md

Shows how to fetch contacts who have exclusively granted authorization to a specific user address. This includes initialization of IExecWeb3mail and the fetchUserContacts call with the 'isUserStrict' parameter set to true. Requires the '@iexec/web3mail' library.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);

const contactsList = await web3mail.fetchUserContacts({
  userAddress: '0x789cba...',
  isUserStrict: true
});
```

--------------------------------

### fetchMyContacts

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/fetchMyContacts.md

Retrieves a list of contacts who have authorized the user to send them email messages via iExec Web3Mail.

```APIDOC
## POST /fetchMyContacts

### Description
This method provides a list of `contact` objects identifying all users who previously granted authorization to send them email messages. Each contact contains the contact's ETH address as well as the ETH address for the `protectedData` containing their email address.

### Method
POST

### Endpoint
/fetchMyContacts

### Parameters
#### Query Parameters
- **isUserStrict** (boolean) - Optional - This parameter enables fetching contacts who granted access exclusively to the user and no one else.

### Request Example
```json
{
  "isUserStrict": true
}
```

### Response
#### Success Response (200)
- **contactsList** (Contact[]) - A list of Contact objects, where each Contact object contains the user's ETH address and the ETH address for the protectedData.

#### Response Example
```json
[
  {
    "userAddress": "0x1234567890abcdef1234567890abcdef12345678",
    "protectedDataAddress": "0xfedcba0987654321fedcba0987654321fedcba09"
  }
]
```
```

--------------------------------

### fetchUserContacts

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/fetchUserContacts.md

Fetches a list of contacts who have granted authorization to a specified address for sending emails.

```APIDOC
## POST /fetchUserContacts

### Description
Retrieves a list of contacts who have previously granted authorization to a specified entity to send them email messages. Each contact object includes the contact's ETH address and the ETH address for the `protectedData` containing their email address.

### Method
POST

### Endpoint
/fetchUserContacts

### Parameters
#### Request Body
- **userAddress** (Address) - Required - The user for which you wish to obtain the list of contacts.
- **isUserStrict** (boolean) - Optional - Enables fetching contacts who granted access exclusively to the user and no one else.

### Request Example
```json
{
  "userAddress": "0x789cba...",
  "isUserStrict": true
}
```

### Response
#### Success Response (200)
- **contactsList** (Contact[]) - An array of contact objects, where each contact contains the ETH address of the user and the ETH address for the protected data.

#### Response Example
```json
{
  "contactsList": [
    {
      "userAddress": "0xabc123...",
      "protectedData": "0xdef456..."
    }
  ]
}
```
```

--------------------------------

### Configure iExec DataProtector SDK for TDX

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/build-your-first-tdx-iapp.md

This JavaScript code snippet demonstrates how to configure the iExec DataProtector SDK to support TDX by specifying the SMS endpoint. The smsURL option within the iexecOptions must be set to the appropriate TDX-compatible SMS endpoint.

```javascript
const dataProtector = new IExecDataProtector(web3Provider, {
  iexecOptions: {
    smsURL: 'https://sms.labs.iex.ec',
  },
});
```

--------------------------------

### Protecting multiple data categories with IExecDataProtectorCore

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/protectData.md

Encrypts multiple types of data, including an email and SMTP server details, using the `protectData` method. This showcases the flexibility of protecting complex data structures. Initialization of `IExecDataProtectorCore` is required.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  data: {
    email: 'example@gmail.com',
    SMTPserver: {
      port: 5000,
      smtp_server: 'smtp.gmail.com',
    },
  },
});
```

--------------------------------

### Download and Inspect Encrypted Task Result

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/protect-the-result.md

Downloads the completed task's results and displays the content of the encrypted result file. The result is typically a zip archive containing an AES-encrypted file.

```bash
iexec task show --chain {{chainName}} <0x-your-task-id> --download
```

```bash
mkdir /tmp/trash && \
    unzip <0x-your-task-id>.zip -d /tmp/trash && \
    cat /tmp/trash/iexec_out/result.zip.aes
```

--------------------------------

### Set workerpoolMaxPrice for workerpool service

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Allows specifying the maximum amount in nRLC to pay the workerpool provider for using their infrastructure to run the Web3Mail app. This covers the infrastructure usage cost.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  workerpoolMaxPrice: 42, // [!code focus]
});
```

--------------------------------

### Dataset Restriction Check for App/Worker Pool - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Verifies that the dataset meets any restrictions set by the application or worker pool orders regarding compatible datasets.

```Solidity
require(_checkIdentity(_apporder.datasetrestrict, _datasetorder.dataset, GROUPMEMBER_PURPOSE));
require(_checkIdentity(_workerpoolorder.datasetrestrict, _datasetorder.dataset, GROUPMEMBER_PURPOSE));
```

--------------------------------

### Task ID Generation

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Generates a unique task ID using keccak256 hashing on the deal ID and the request order index. This is a fundamental step in initializing a task within the iExec system.

```Solidity
bytes32 taskid = keccak256(abi.encodePacked(_dealid, idx));
```

--------------------------------

### Retrieve Paginated Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getProtectedData.md

This snippet demonstrates how to retrieve paginated results for protected data. It includes specifying the page number and optionally the page size. The IExecDataProtectorCore must be initialized first.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getProtectedData({
  owner: '0xa0c15e...',
  createdAfterTimestamp: 1710257612, // March 12, 2024 15:33:32 GMT
  page: 1, // [!code focus]
});
```

--------------------------------

### TypeScript: Set Rental Price in nRLC

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/setProtectedDataRentingParams.md

This code snippet illustrates how to set the `price` parameter for renting protected data. The price is specified in nano RLC (nRLC), and this value determines the cost for users who wish to rent the data.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const setForRentingResult =
  await dataProtectorSharing.setProtectedDataRentingParams({
    protectedData: '0x123abc...',
    price: 1, // 1 nRLC // [!code focus]
    duration: 60 * 60 * 24 * 30, // 30 days
  });
```

--------------------------------

### Grant Access with Authorized Application (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/grantAccess.md

Shows how to specify an authorized application for accessing protected data using the `authorizedApp` parameter in the `grantAccess` method. It explains the option to use a single app address or a whitelist smart contract address.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...', // [!code focus]
  authorizedUser: '0x789cba...',
});
```

--------------------------------

### setProtectedDataToRenting

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting.md

Allows a protected data item to be listed for rent. This method sets the price and duration for future rentals. If the data is already listed for rent, it updates the terms accordingly.

```APIDOC
## POST /protectedData/renting

### Description
Sets the renting parameters (price and duration) for a protected data item. If the data is already listed for rent, this method updates the existing terms for future rentals.

### Method
POST

### Endpoint
/protectedData/renting

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - The address of the protected data to set renting parameters for.
- **price** (number) - Required - The rental price in nano RLC (nRLC).
- **duration** (number) - Required - The duration of the rental in seconds.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "price": 1,
  "duration": 2592000
}
```

### Response
#### Success Response (200)
- **transactionHash** (string) - The hash of the transaction that set the renting parameters.

#### Response Example
```json
{
  "transactionHash": "0xabcdef..."
}
```
```

--------------------------------

### setProtectedDataRentingParams

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/setProtectedDataRentingParams.md

Sets or updates the renting parameters (price and duration) for a protected data item. If the data isn't listed for rent, it will be set with the provided terms.

```APIDOC
## POST /setProtectedDataRentingParams

### Description
Sets or updates the renting parameters (price and duration) for a protected data item. If the data isn't listed for rent, it will be set with the provided terms.

### Method
POST

### Endpoint
/setProtectedDataRentingParams

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - Address of the protected data.
- **price** (number) - Required - The price in nano RLC (nRLC) for renting the protected data.
- **duration** (number) - Required - The duration of the rental in seconds.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "price": 1,
  "duration": 86400
}
```

### Response
#### Success Response (200)
- **transactionHash** (string) - The hash of the transaction.

#### Response Example
```json
{
  "transactionHash": "0xabcdef1234567890"
}
```
```

--------------------------------

### Remove Protected Data from Sale (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/selling/removeProtectedDataForSale.md

Demonstrates how to use the removeProtectedDataForSale method to unlist protected data. It initializes the IExecDataProtectorSharing service with a web3 provider and then calls the method with the protected data's address.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const notForSaleAnymoreResult =
  await dataProtectorSharing.removeProtectedDataForSale({
    protectedData: '0x123abc...',
  });
```

--------------------------------

### sendTelegram - workerpoolAddressOrEns

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Allows specifying the workerpool that will run the Web3Telegram application.

```APIDOC
## POST /sendTelegram

### Description
Sends a Telegram message using the iExec Web3Telegram service.

### Method
POST

### Endpoint
/sendTelegram

### Parameters
#### Request Body
- **protectedData** (string) - Required - The protected data to be sent.
- **senderName** (string) - Required - The name of the sender.
- **telegramContent** (string) - Required - The content of the Telegram message.
- **workerpoolAddressOrEns** (string | undefined) - Optional - The address or ENS name of the workerpool to run the application. Defaults to the iExec workerpool.
- **dataMaxPrice** (number | undefined) - Optional - The maximum amount (in nRLC) to pay for the data.
- **appMaxPrice** (number | undefined) - Optional - The maximum amount (in nRLC) to pay for the Web3Telegram application.
- **workerpoolMaxPrice** (number | undefined) - Optional - The maximum amount (in nRLC) to pay the workerpool provider.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "senderName": "Arthur",
  "telegramContent": "My telegram message content",
  "workerpoolAddressOrEns": "0xa5de76..."
}
```

### Response
#### Success Response (200)
- **taskId** (Address) - Uniquely identifies the telegram task on the iExec side chain.

#### Response Example
```json
{
  "taskId": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
}
```
```

--------------------------------

### addToCollection

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/collection/addToCollection.md

Transfers protected data to a collection in the Data Sharing smart contract, approving the contract and adding the data.

```APIDOC
## POST /addToCollection

### Description
Transfers one of your protected data to a collection in the Data Sharing smart contract. This method first approves the Data Sharing smart contract to manage your protected data and then adds it to your collection.

### Method
POST

### Endpoint
`/addToCollection`

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - Address of the protected data to add to the collection.
- **collectionId** (number) - Required - The ID of the collection to which the protected data will be added.
- **addOnlyAppWhitelist** (AddressOrENS) - Required - The address of the whitelist smart contract containing applications allowed to consume the protected data. Use `0x256bcd881c33bdf9df952f2a0148f27d439f2e64` as a default value if needed.
- **onStatusUpdate** (OnStatusUpdateFn<AddToCollectionStatuses>) - Optional - A callback function to receive notifications about the status updates during the process. Expected titles include 'APPROVE_COLLECTION_CONTRACT' and 'ADD_PROTECTED_DATA_TO_COLLECTION'.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "collectionId": 12,
  "addOnlyAppWhitelist": "0x256bcd881c33bdf9df952f2a0148f27d439f2e64"
}
```

### Response
#### Success Response (200)
- **txHash** (string) - The transaction hash of the operation.

#### Response Example
```json
{
  "txHash": "0xabc123..."
}
```
```

--------------------------------

### Protect Nested Contact Information

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/handle-schemas-dataset-types.md

Protects nested contact information using the iExec Data Protector. It requires initializing the IExecDataProtectorCore with a web3 provider and passing a data object containing personal, contact, and preferences fields.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const contactData = await dataProtectorCore.protectData({
  data: {
    personal: {
      firstName: 'Alice',
      lastName: 'Smith',
    },
    contact: {
      email: 'alice@example.com',
      phone: '+1234567890',
    },
    preferences: {
      marketing: false,
      notifications: true,
    },
  },
});
```

--------------------------------

### Specify User Whitelist for Protected Data Access

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Shows how to use the 'userWhitelist' parameter in the processProtectedData method when access to protected data is restricted to a specific group. The value should be the address of the whitelist contract granting access.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    userWhitelist: '0x656def...', // [!code focus]
  });
```

--------------------------------

### Retrieve Protected Data by Owner Address

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getProtectedData.md

This snippet illustrates how to retrieve all protected data objects owned by a specific Ethereum address. It requires initializing the IExecDataProtectorCore.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getProtectedData({
  owner: '0xa0c15e...', // [!code focus]
});
```

--------------------------------

### getCollectionSubscriptions

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getCollectionSubscriptions.md

Retrieves subscriptions for a given collection or user. Supports filtering by subscriber address and including past subscriptions.

```APIDOC
## GET /getCollectionSubscriptions

### Description
Fetches all subscriptions for a specific collection or user.

### Method
GET

### Endpoint
/getCollectionSubscriptions

### Parameters
#### Query Parameters
- **subscriberAddress** (AddressOrENS) - Optional - The address of the subscriber.
- **collectionId** (number) - Optional - The ID of the collection.
- **includePastSubscriptions** (boolean) - Optional - Whether to include past subscriptions. Defaults to false.

### Request Example
```json
{
  "subscriberAddress": "0x246bdf...",
  "collectionId": 9,
  "includePastSubscriptions": true
}
```

### Response
#### Success Response (200)
- **subscriptions** (Array<CollectionSubscription>) - An array of subscription objects.

#### Response Example
```json
{
  "subscriptions": [
    {
      "subscriber": "0x123...",
      "collectionId": 9,
      "startTime": 1678886400,
      "endTime": 1681564800,
      "isActive": true
    }
  ]
}
```
```

--------------------------------

### Category Match Requirement - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Ensures that the worker pool's category is equal to the requester's category. This is a fundamental matching criteria.

```Solidity
require(_requestorder.category == _workerpoolorder.category);
```

--------------------------------

### Grant Access to Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/manage-access.md

Grants access to protected data for a specific application and user. This TypeScript code snippet initializes the DataProtectorCore and calls the grantAccess method with the protected data address, authorized app, authorized user, price per access, and number of accesses.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---

const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...', // Your protected data address
  authorizedApp: '0x456def...', // iApp that can process the data
  authorizedUser: '0x789cba...', // User who can trigger the processing
  pricePerAccess: 0, // Cost per use (in nRLC)
  numberOfAccess: 10, // Maximum number of uses
});
```

--------------------------------

### Grant Access with Price per Access - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/grantAccess.md

Demonstrates how to grant access to protected data with a specified price per access using the iExec Data Protector SDK. The price is defined in nano RLC (nRLC) and must be a non-negative integer. This function requires the protected data, authorized application, authorized user, price per access, and the number of allowed accesses.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  pricePerAccess: 3, // [!code focus]
  numberOfAccess: 10,
});
```

--------------------------------

### Specify Protected Data for Ownership Transfer

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/transferOwnership.md

Demonstrates how to specify the 'protectedData' parameter for the transferOwnership method, which is the ETH address of the data entity to be transferred.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const transferResponse = await dataProtectorCore.transferOwnership({
  protectedData: '0x123abc...', // [!code focus]
  newOwner: '0xc5e9f4...',
});
```

--------------------------------

### Add Label to sendTelegram Deal

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Shows how to add a custom public label to a Telegram message deal using the `label` parameter. This label is recorded on-chain as `iexec_args` within the deal parameters.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  senderName: 'Arthur',
  telegramContent: 'My telegram message content',
  label: 'some-custom-id', // [!code focus]
});
```

--------------------------------

### WorkerpoolOrder Structure Definition

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Defines the structure for a WorkerpoolOrder, used to represent a worker pool in iExec's brokering system. Includes fields for worker pool details, pricing, volume, category, trust, restrictions, and signature.

```Solidity
struct WorkerpoolOrder
{
  address workerpool;
  uint256 workerpoolprice;
  uint256 volume;
  uint256 tag;
  uint256 category;
  uint256 trust;
  address apprestrict;
  address datasetrestrict;
  address requesterrestrict;
  bytes32 salt;
  bytes   sign;
}
```

--------------------------------

### Filter Granted Access by Authorized User - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getGrantedAccess.md

Demonstrates filtering granted access for a particular user address. This snippet initializes the iExec Data Protector core and uses the getGrantedAccess method, specifying the 'authorizedUser' parameter. Requires @iexec/dataprotector.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const listGrantedAccess = await dataProtectorCore.getGrantedAccess({
  authorizedUser: '0x789cba...', // [!code focus]
});
```

--------------------------------

### Protected Data Structure for Delivery iApp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/advanced/apps-whitelist.md

This JSON structure represents the expected format of protected data when consumed by the 'Protected data delivery iApp'. It requires a 'file' property containing the data as an ArrayBuffer.

```json
{
  "file": "<ArrayBuffer>"
}
```

--------------------------------

### List Published Workerpool Orders

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/worker/manage-access.md

Lists all orders published by a specific workerpool address. This is useful for identifying the `orderHash` of an order you wish to manage.

```bash
iexec orderbook workerpool <your workerpool address>
```

--------------------------------

### Send Email with Custom Label

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Allows adding a custom public label to the email, which is written onchain as 'iexec_args'.

```APIDOC
## POST /sendEmail

### Description
Sends an email using the Web3Mail service with a custom public label.

### Method
POST

### Endpoint
/sendEmail

### Parameters
#### Request Body
- **protectedData** (string) - Required - The protected data associated with the recipient.
- **emailSubject** (string) - Required - The subject of the email.
- **emailContent** (string) - Required - The content of the email.
- **label** (string) - Optional - A custom public label for the email.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "emailSubject": "My email subject",
  "emailContent": "My email content",
  "label": "some-custom-id"
}
```

### Response
#### Success Response (200)
- **taskId** (Address) - Unique identifier for the email task on the iExec side chain.

#### Response Example
```json
{
  "taskId": "0x123abc..."
}
```
```

--------------------------------

### Specify Upload Mode for Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/protectData.md

Shows how to configure the storage platform for the encrypted payload of protected data. Supported modes are 'ipfs' and 'arweave'.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'myEmail',
  data: {
    email: 'example@gmail.com',
  },
  uploadMode: 'arweave', // [!code focus]
});
```

--------------------------------

### Fetch strictly authorized contacts with iExec Web3Mail

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/fetchMyContacts.md

Shows how to use the fetchMyContacts method with the 'isUserStrict' parameter set to true to retrieve only those contacts who granted exclusive authorization. Requires initialization with a Web3 provider.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const contactsList = await web3mail.fetchMyContacts({
  isUserStrict: true, // [!code focus]
});
```

--------------------------------

### Protect Data for Web3Telegram (Chat ID) using DataProtector Core

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/integrate-web3-messaging.md

Protects a Telegram Chat ID using the DataProtector Core toolkit, a necessary step before sending messages via Web3Telegram. It requires a Web3 provider initialized with a private key and the Telegram Chat ID.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const protectedData = await dataProtectorCore.protectData({
  data: {
    telegram_chatId: '12345678',
  },
});
```

--------------------------------

### Configure Web3Mail with Custom Data Protector Subgraph URL

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/advanced-configuration.md

Initializes the IExecWeb3mail service with a custom subgraph URL for querying data. This allows users to point to their own data protector subgraph instance for enhanced data management.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3mail = new IExecWeb3mail(web3Provider, {
  dataProtectorSubgraph: 'subgraph-url', // [!code focus]
});
```

--------------------------------

### Protect Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/protectData.md

Protects data by encrypting and uploading it, returning a unique identifier and access details.

```APIDOC
## POST /api/dataprotector/protect

### Description
Protects data by encrypting and uploading it, returning a unique identifier and access details.

### Method
POST

### Endpoint
/api/dataprotector/protect

### Parameters
#### Request Body
- **name** (string) - Optional - Allows providing a descriptive name for the protected data. Defaults to 'Untitled'.
- **data** (object) - Required - The data to be protected. The structure of this object will determine the schema.
- **uploadMode** (string) - Optional - Specify the storage platform to use for the protected data encrypted payload hosting. Allowed values: 'ipfs' or 'arweave'. Defaults to 'ipfs'.
- **onStatusUpdate** (function) - Optional - Callback function to be notified at intermediate steps of the protection process.

### Request Example
```json
{
  "name": "myEmail",
  "data": {
    "email": "example@gmail.com"
  },
  "uploadMode": "arweave",
  "onStatusUpdate": "(status) => console.log(status)"
}
```

### Response
#### Success Response (200)
- **name** (string) - The optional name provided during invocation of the method. If no name is specified this value defaults to `Untitled`.
- **address** (string) - The ETH address of the newly created `protectedData`.
- **owner** (string) - The ETH address of the creator and owner of this `protectedData`.
- **schema** (object) - Metadata describing the fields provided in the `data` parameter. The data types are automatically detected and listed in the schema.
- **creationTimestamp** (number) - A unix-style timestamp indicating the creation time of this `protectedData`.
- **transactionHash** (string) - The ID of the transaction that happened on iExec's side chain.
- **zipFile** (Uint8Array) - The protected data compressed as a zip file.
- **encryptionKey** (Uint8Array) - The encryption key generated by the client to encrypt the data.

#### Response Example
```json
{
  "name": "myEmail",
  "address": "0x123...",
  "owner": "0xabc...",
  "schema": {
    "email": "string"
  },
  "creationTimestamp": 1678886400,
  "transactionHash": "0xdef...",
  "zipFile": "<binary data>",
  "encryptionKey": "<binary data>"
}
```
```

--------------------------------

### GrantedAccessResponse Type Definition (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getGrantedAccess.md

Imports the GrantedAccessResponse type definition from the '@iexec/dataprotector' library. This type defines the structure of the data returned by methods like getGrantedAccess, ensuring type safety.

```typescript
import { type GrantedAccessResponse } from '@iexec/dataprotector';
```

--------------------------------

### Retrieve Result from Completed Task

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/run-iapp-with-ProtectedData.md

This snippet shows how to retrieve the result of a completed iApp execution using the `getResultFromCompletedTask` function. It requires the task ID and the `IExecDataProtectorCore` and `getWeb3Provider` from the '@iexec/dataprotector' library.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
const taskId = '0x7ac398...';

// ---cut---
// Retrieve the result
const taskResult = await dataProtectorCore.getResultFromCompletedTask({
  taskId: taskId,
});
```

--------------------------------

### POST /consumeProtectedData

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/consume/consumeProtectedData.md

Consume protected data by visualizing or downloading it. This process involves generating RSA keys, interacting with iExec's Secret Management Service, and securely retrieving encrypted data from IPFS.

```APIDOC
## POST /consumeProtectedData

### Description
Consume protected data by visualizing or downloading it. This method involves generating RSA keys, interacting with iExec's Secret Management Service, and securely retrieving encrypted data from InterPlanetary File System (IPFS).

### Method
POST

### Endpoint
/consumeProtectedData

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - Address of the protected data you'd like to visualize.
- **app** (AddressOrENS) - Required - Address or Ethereum Name Service (ENS) of the iApp that will be used to consume the protected data. This iExec TEE iApp is the one that runs within an iExec worker. The recommended "Protected data delivery TEE iApp" address is `0x1cb7D4F3FFa203F211e57357D759321C6CE49921`.
- **path** (string) - Optional - Specifies the file within the protected data zip archive you are interested in. The zip file will be uncompressed, and only the desired file will be returned.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "app": "0x456def...",
  "path": "my-content"
}
```

### Response
#### Success Response (200)
- **result** (string) - The visualized or downloaded protected data.

#### Response Example
```json
{
  "result": "Decrypted data content"
}
```
```

--------------------------------

### Set Maximum Application Price for iApp Usage (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Specifies the maximum amount (in nRLC) to be paid to the iApp provider for utilizing their deployed application. This is controlled by the appMaxPrice option.

```TypeScript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    appMaxPrice: 42, // [!code focus]
  });
```

--------------------------------

### iExec Data Protector Return Value Types

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/protectData.md

Imports necessary types for working with the return value of the protectData method in iExec Data Protector.

```typescript
import type {
  ProtectedDataWithSecretProps,
  ProtectedData,
} from '@iexec/dataprotector';
```

--------------------------------

### Grant Access with Authorized User (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/grantAccess.md

Demonstrates how to authorize a specific user to access protected data via the `authorizedUser` parameter in the `grantAccess` method. It also mentions the possibility of authorizing all users by setting this parameter to a zero address.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...', // [!code focus]
});
```

--------------------------------

### sendTelegram - dataMaxPrice

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Allows specifying the maximum amount (in nRLC) you are willing to pay the telegram chat ID owner for using their data.

```APIDOC
## POST /sendTelegram

### Description
Sends a Telegram message using the iExec Web3Telegram service.

### Method
POST

### Endpoint
/sendTelegram

### Parameters
#### Request Body
- **protectedData** (string) - Required - The protected data to be sent.
- **senderName** (string) - Required - The name of the sender.
- **telegramContent** (string) - Required - The content of the Telegram message.
- **workerpoolAddressOrEns** (string | undefined) - Optional - The address or ENS name of the workerpool to run the application. Defaults to the iExec workerpool.
- **dataMaxPrice** (number | undefined) - Optional - The maximum amount (in nRLC) to pay for the data.
- **appMaxPrice** (number | undefined) - Optional - The maximum amount (in nRLC) to pay for the Web3Telegram application.
- **workerpoolMaxPrice** (number | undefined) - Optional - The maximum amount (in nRLC) to pay the workerpool provider.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "senderName": "Arthur",
  "telegramContent": "My telegram message content",
  "dataMaxPrice": 42
}
```

### Response
#### Success Response (200)
- **taskId** (Address) - Uniquely identifies the telegram task on the iExec side chain. You can view the status of the `sendTelegram` method by monitoring the task on the iExec blockchain explorer.

#### Response Example
```json
{
  "taskId": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
}
```
```

--------------------------------

### RequesterOrder Struct Definition (Solidity)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Defines the structure of a RequesterOrder, which encapsulates all parameters for a computation request on the iExec network. This includes application details, dataset requirements, pricing, security parameters, and the requester's signature.

```Solidity
struct RequestOrder
{
  address app;
  uint256 appmaxprice;
  address dataset;
  uint256 datasetmaxprice;
  address workerpool;
  uint256 workerpoolmaxprice;
  address requester;
  uint256 volume;
  uint256 tag;
  uint256 category;
  uint256 trust;
  address beneficiary;
  address callback;
  string  params;
  bytes32 salt;
  bytes   sign;
}
```

--------------------------------

### Requester Restriction Check for App/Dataset/Worker Pool - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Validates that the requester meets any restrictions set by the application, dataset, or worker pool orders regarding who can access their resources.

```Solidity
require(_checkIdentity(_apporder.requesterrestrict, _requestorder.requester, GROUPMEMBER_PURPOSE));
require(_checkIdentity(_datasetorder.requesterrestrict, _requestorder.requester, GROUPMEMBER_PURPOSE));
require(_checkIdentity(_workerpoolorder.requesterrestrict, _requestorder.requester, GROUPMEMBER_PURPOSE));
```

--------------------------------

### Process Protected Data with Secrets

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/run-iapp-with-ProtectedData.md

This snippet demonstrates how to securely pass sensitive data (secrets) to an iApp when processing ProtectedData. Secrets are made available as environment variables to the iApp. It uses the `processProtectedData` function from '@iexec/dataprotector'.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
// Process protected data with secrets
const result = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  secrets: {
    1: 'openai-api-key',
    2: 'database-password',
  },
});
```

--------------------------------

### Specify File Path for Protected Data Consumption

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/consume/consumeProtectedData.md

Shows how to specify a file path when consuming protected data. This allows you to extract a specific file from a zip archive containing the protected data.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    path: 'my-content',
  });
```

--------------------------------

### Set Maximum Price for Workerpool in sendTelegram

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Allows specifying the maximum amount willing to pay the workerpool provider for using their infrastructure to run the web3telegram app in nRLC. Uses the @iexec/web3telegram SDK.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  senderName: 'Arthur',
  telegramContent: 'My telegram message content',
  workerpoolMaxPrice: 42, // [!code focus]
});
```

--------------------------------

### Worker Pool Stake Ratio Calculation

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Specifies the percentage of the worker pool price that the scheduler must stake. This stake is at risk if the consensus is not finalized within the defined timer.

```plaintext
WORKERPOOL_STAKE_RATIO = 30
```

--------------------------------

### iExec Oracle Generic Contract State Variables

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/oracle.md

Defines the core state variables for an iExec Oracle contract, including the iExec proxy interface, authorized addresses, and task validation parameters. These fields are crucial for managing and validating oracle data updates.

```Solidity
IexecInterfaceToken public iexecproxy;
address             public m_authorizedApp;
address             public m_authorizedDataset;
address             public m_authorizedWorkerpool;
bytes32             public m_requiredtag;
uint256             public m_requiredtrust;
```

--------------------------------

### Push Public Key to Secret Management Service (SMS)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/protect-the-result.md

Pushes the generated public encryption key to the iExec Secret Management Service (SMS) for use during task execution. Requires the iExec SDK and specifies the framework and chain.

```bash
iexec result push-encryption-key --tee-framework --chain {{chainName}} scone
```

--------------------------------

### Converting file to ArrayBuffer for protection

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/protectData.md

Converts a file into an ArrayBuffer, a necessary step before protecting file data using iExec DataProtector. This utility function facilitates the handling of file inputs.

```typescript
const file: File = new File([], 'emptyFile.txt');
// ---cut---
import { createArrayBufferFromFile } from '@iexec/dataprotector';

const fileAsArrayBuffer = await createArrayBufferFromFile(file);
```

--------------------------------

### Configure Web3Mail with Custom iApp Whitelist Address

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/advanced-configuration.md

Initializes the IExecWeb3mail service with a custom iApp whitelist address. This enables users to manage access to the web3mail iApp by specifying a whitelist contract, ensuring email availability across iApp versions.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3mail = new IExecWeb3mail(web3Provider, {
  dappWhitelistAddress: '0x456def...', // [!code focus]
});
```

--------------------------------

### Retrieve Protected Data from Collections

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections.md

Fetches protected data entries from iExec collections. Results are ordered by creation timestamp in descending order. Requires an initialized IExecDataProtectorSharing instance.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const protectedData = 
  await dataProtectorSharing.getProtectedDataInCollections();
```

--------------------------------

### Protect Data with a Name

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/protectData.md

Demonstrates how to protect data using the iExec Data Protector, specifying a descriptive name for the protected data. The name is public metadata.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const protectedData = await dataProtectorCore.protectData({
  name: 'myEmail', // [!code focus]
  data: {
    email: 'example@gmail.com',
  },
});
```

--------------------------------

### Define Parameters for Removing Protected Data (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/removeProtectedDataFromSubscription.md

Shows how to import the necessary types for defining parameters when removing protected data from an iExec subscription. This includes importing `RemoveProtectedDataFromSubscriptionParams`.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

import { type RemoveProtectedDataFromSubscriptionParams } from '@iexec/dataprotector';
```

--------------------------------

### Time-Based Rental Model

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/monetize-protected-data.md

Allows users to pay a one-time fee for unlimited access to protected data during a specific time period. This is suitable for time-sensitive datasets or scenarios requiring intensive short-term access.

```APIDOC
## Time-Based Rental Model

### Description
Users pay a one-time fee for unlimited access to protected data during a specific time period. This model is ideal for time-sensitive datasets, expensive data requiring intensive short-term access, or content that loses value over time.

### Method
`setProtectedDataToRenting` (Data Owner), `rentProtectedData` (Client/Subscriber)

### Endpoint
N/A (Function calls within the DataProtector library)

### Parameters
#### setProtectedDataToRenting (Data Owner)
- **protectedData** (string) - Required - The address or identifier of the protected data.
- **price** (number) - Required - The rental price in RLC for the entire duration.
- **duration** (number) - Required - The duration of the rental period in seconds.

#### rentProtectedData (Client/Subscriber)
- **protectedData** (string) - Required - The address or identifier of the protected data.
- **price** (number) - Required - The rental price in RLC for the entire duration.
- **duration** (number) - Required - The duration of the rental period in seconds.

### Request Example (Data Owner)
```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

await dataProtectorSharing.setProtectedDataToRenting({
  protectedData: '0x123abc...',
  price: 5000000000, // 5 RLC
  duration: 604800, // 7 days
});
```

### Request Example (Client/Subscriber)
```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const rental = await dataProtectorSharing.rentProtectedData({
  protectedData: '0x123abc...',
  price: 5000000000, // 5 RLC
  duration: 604800, // 7 days
});
```

### Response (Success)
- **rental** (object) - Details of the successful rental agreement.

### Response Example (Client/Subscriber)
```json
{
  "rental": "rental_details_object"
}
```
```

--------------------------------

### Set dataMaxPrice for Web3Mail data payment

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Allows specifying the maximum amount in nRLC to pay the email address owner for using their data. This payment is for the data sharing service.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  dataMaxPrice: 42, // [!code focus]
});
```

--------------------------------

### Grant Access with Specific Protected Data (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/grantAccess.md

Illustrates granting access by focusing on the `protectedData` parameter within the `grantAccess` method. This highlights the requirement for the user to own the data they are granting access to.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...', // [!code focus]
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
});
```

--------------------------------

### Specify Workerpool Address for sendTelegram

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Allows specifying the workerpool that will run the Web3Telegram application. Uses the @iexec/web3telegram SDK.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  senderName: 'Arthur',
  telegramContent: 'My telegram message content',
  workerpoolAddressOrEns: '0xa5de76...', // [!code focus]
});
```

--------------------------------

### Implement Status Update Callback for Data Processing (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Implements a callback function (onStatusUpdate) to receive notifications on the progress of protected data processing. The callback receives status updates with a title and completion status.

```TypeScript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse = await dataProtectorCore.processProtectedData({
  protectedData: '0x123abc...',
  app: '0x456def...',
  onStatusUpdate: ({ title, isDone }) => { // [!code focus]
    console.log(title, isDone); // [!code focus]
  }, // [!code focus]
});
```

--------------------------------

### Time-Based Subscription Model

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/monetize-protected-data.md

Enables users to pay for recurring time-based access to a bundle of data, offering unlimited usage within each subscription period. This is suitable for growing datasets or educational content series.

```APIDOC
## Time-Based Subscription Model

### Description
Users pay for recurring time-based access to a bundle of data, with unlimited usage during each subscription period. This model is well-suited for growing datasets, educational content, research data that expands over time, and SaaS-style data access.

### Method
`setSubscriptionParams`, `setProtectedDataToSubscription`, `subscribeToCollection`

### Endpoint
N/A (Function calls within the DataProtector library)

### Parameters
#### setSubscriptionParams (Data Owner)
- **collectionId** (number) - Required - The ID of the collection to set subscription parameters for.
- **price** (number) - Required - The subscription price in RLC per period.
- **duration** (number) - Required - The duration of each subscription period in seconds.

#### setProtectedDataToSubscription (Data Owner)
- **protectedData** (string) - Required - The address or identifier of the protected data to add to the subscription bundle.

#### subscribeToCollection (Client/Subscriber)
- **collectionId** (number) - Required - The ID of the collection to subscribe to.
- **price** (number) - Required - The subscription price in RLC for the period.
- **duration** (number) - Required - The duration of the subscription period in seconds.

### Request Example (Data Owner - Setting Params)
```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const collection = { collectionId: 123 };

await dataProtectorSharing.setSubscriptionParams({
  collectionId: collection.collectionId,
  price: 20000000000, // 20 RLC per 30-day period
  duration: 2592000, // 30 days
});
```

### Request Example (Data Owner - Adding Data)
```typescript
// ... (previous setup)
await dataProtectorSharing.setProtectedDataToSubscription({
  protectedData: '0x123abc...',
});

await dataProtectorSharing.setProtectedDataToSubscription({
  protectedData: '0x456def...', // Additional dataset
});
```

### Request Example (Client/Subscriber)
```typescript
// ... (previous setup)

const subscription = await dataProtectorSharing.subscribeToCollection({
  collectionId: collection.collectionId,
  price: 20000000000, // 20 RLC
  duration: 2592000, // 30 days
});
```

### Response (Success)
- **subscription** (object) - Details of the successful subscription.

### Response Example (Client/Subscriber)
```json
{
  "subscription": "subscription_details_object"
}
```
```

--------------------------------

### Import SendTelegramResponse Type

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Imports the SendTelegramResponse type from the @iexec/web3telegram SDK for type checking.

```typescript
import { type SendTelegramResponse } from '@iexec/web3telegram';
```

--------------------------------

### Retrieve Protected Data by Address

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getProtectedData.md

This code snippet shows how to retrieve a specific protected data object using its unique address. It initializes the IExecDataProtectorCore and calls getProtectedData with the protectedDataAddress parameter.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const oneProtectedData = await dataProtectorCore.getProtectedData({
  protectedDataAddress: '0x123abc...', // [!code focus]
});
```

--------------------------------

### Specify Protected Data Address for addToCollection

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/collection/addToCollection.md

Illustrates how to provide the protectedData address when adding data to a collection. This address identifies the specific protected data to be transferred.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
const { txHash } = await dataProtectorSharing.addToCollection({
  collectionId: 12,
  protectedData: '0x123abc...', // [!code focus]
  addOnlyAppWhitelist: '0x541abc...',
});
```

--------------------------------

### Configure Web3Mail with Custom IPFS Node URL

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/advanced-configuration.md

Initializes the IExecWeb3mail service with a custom IPFS node URL. This option is for users who wish to utilize their own IPFS node for uploading content, providing greater control over data storage.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3mail = new IExecWeb3mail(web3Provider, {
  ipfsNode: 'ipfs-node-url', // [!code focus]
});
```

--------------------------------

### Worker Pool Restriction Check for App/Dataset - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Ensures that the worker pool adheres to any restrictions imposed by the application or dataset orders regarding compatible worker pools.

```Solidity
require(_checkIdentity(_apporder.workerpoolrestrict, _workerpoolorder.workerpool, GROUPMEMBER_PURPOSE));
require(_checkIdentity(_datasetorder.workerpoolrestrict, _workerpoolorder.workerpool, GROUPMEMBER_PURPOSE));
```

--------------------------------

### Send Email with Specified Workerpool

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Allows specifying a particular workerpool address or ENS name to run the Web3Mail application.

```APIDOC
## POST /sendEmail

### Description
Sends an email using the Web3Mail service, specifying the workerpool to execute the task.

### Method
POST

### Endpoint
/sendEmail

### Parameters
#### Request Body
- **protectedData** (string) - Required - The protected data associated with the recipient.
- **emailSubject** (string) - Required - The subject of the email.
- **emailContent** (string) - Required - The content of the email.
- **workerpoolAddressOrEns** (workerpoolAddressOrEns) - Optional - The address or ENS name of the workerpool. Defaults to iExec's workerpool.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "emailSubject": "My email subject",
  "emailContent": "My email content",
  "workerpoolAddressOrEns": "0xa5de76..."
}
```

### Response
#### Success Response (200)
- **taskId** (Address) - Unique identifier for the email task on the iExec side chain.

#### Response Example
```json
{
  "taskId": "0x123abc..."
}
```
```

--------------------------------

### Unpublish App Order

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Removes a specific app order from the iExec marketplace using its order hash.

```bash
iexec order unpublish --app <orderHash>
```

--------------------------------

### Set pageSize for Protected Data Results - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/getProtectedData.md

Demonstrates how to set the `pageSize` parameter when fetching protected data using the iExec Data Protector core library. This parameter controls the number of records returned per page, with a default of 1000 and a range of 10 to 1000.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const listProtectedData = await dataProtectorCore.getProtectedData({
  owner: '0xa0c15e...',
  createdAfterTimestamp: 1710257612, // March 12, 2024 15:33:32 GMT
  page: 1,
  pageSize: 100, // [!code focus]
});
```

--------------------------------

### Subscribe to a data collection

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/subscribeToCollection.md

This code snippet demonstrates how to subscribe to a data collection using the `IExecDataProtectorSharing` class from the `@iexec/dataprotector` SDK. It requires a Web3 provider, the collection ID, the price in nRLC, and the duration in seconds. The subscription is not automatically renewed.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.subscribeToCollection({
  collectionId: 12,
  price: 1, // 1 nRLC
  duration: 60 * 60 * 24 * 2, // 172,800 sec = 2 days
});
```

--------------------------------

### Configure TDX Workerpool for Protected Data Processing (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Instantiates IExecDataProtectorCore for TDX environment by specifying the SMS URL and a TDX workerpool address. This is for processing protected data in an experimental Intel TDX environment.

```TypeScript
import { IExecDataProtectorCore } from '@iexec/dataprotector';

const web3Provider = window.ethereum;
// Instantiate dataProtector connected to the TDX SMS
const dataProtectorCore = new IExecDataProtectorCore(web3Provider, {
  iexecOptions: {
    smsURL: 'https://sms.labs.iex.ec', // [!code focus]
  },
});

const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    workerpool: 'tdx-labs.pools.iexec.eth', // [!code focus]
  });
```

--------------------------------

### Set Maximum Data Price for Protected Data Processing (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Configures the maximum price (in nRLC) willing to be paid to the protected data owner for using their data during the processing. This is set via the dataMaxPrice option.

```TypeScript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    dataMaxPrice: 42, // [!code focus]
  });
```

--------------------------------

### Implement Status Update Callback for Data Consumption

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/consume/consumeProtectedData.md

Provides a callback function to receive notifications on the progress of the data consumption process. It logs the status title and completion state.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    onStatusUpdate: ({ title, isDone }) => { // [!code focus]
      console.log(title, isDone); // [!code focus]
    }, // [!code focus]
  });
```

--------------------------------

### Set Maximum Price for Data in sendTelegram

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Allows specifying the maximum amount (in nRLC) willing to pay the telegram chat ID owner for using their data. Uses the @iexec/web3telegram SDK.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  senderName: 'Arthur',
  telegramContent: 'My telegram message content',
  dataMaxPrice: 42, // [!code focus]
});
```

--------------------------------

### Remove Collection using IExecDataProtectorSharing

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/collection/removeCollection.md

Demonstrates how to remove a collection by burning its associated NFT using the IExecDataProtectorSharing class. Requires a Web3 provider and specifies the collectionId to be removed.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const { txHash } = await dataProtectorSharing.removeCollection({
  collectionId: 15,
});
```

--------------------------------

### Specify workerpoolAddressOrEns for Web3Mail

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Allows specifying the workerpool that will execute the Web3Mail application. Defaults to iExec's default workerpool if not provided.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  workerpoolAddressOrEns: '0xa5de76...', // [!code focus]
});
```

--------------------------------

### Specify Content Type for sendEmail

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

This snippet shows how to specify the `contentType` for the `sendEmail` method, defaulting to `text/plain`. By setting it to `text/html`, you can enable rich HTML content rendering in the recipient's email client. This is useful for sending formatted email messages.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: '<h1>Hello world!</h1>',
  contentType: 'text/html', // [!code focus]
});
```

--------------------------------

### Configure Web3Mail with Custom iApp Address

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/advanced-configuration.md

Initializes the IExecWeb3mail service with a custom iApp address. This allows users to specify a particular iApp contract on the Ethereum network, overriding the default.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
// ---cut---
const web3mail = new IExecWeb3mail(web3Provider, {
  dappAddressOrENS: '0x456def...', // [!code focus]
});
```

--------------------------------

### Escrow Contract Mechanisms in IExec

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

The Escrow contract manages user balances, separating stake into available and locked states. It provides functions to move funds between these states and to confiscate or award them based on task outcomes.

```text
lock: Moves value from balance.stake to balance.lock
unlock: Moves value from balance.lock back to balance.stake
seize: Confiscates value from balance.lock
reward: Awards value to the balance.stake
```

--------------------------------

### Result Hash and Seal Computation

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Computes the result hash and seal, which are cryptographic proofs of the execution result. The hash is derived from the task ID and result digest, while the seal includes the worker's identity and the result digest.

```Solidity
resultHash == keccak256(abi.encodePacked( taskid, resultDigest))
resultSeal == keccak256(abi.encodePacked(worker, taskid, resultDigest))
```

--------------------------------

### Import ProcessProtectedDataResponse Type - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Imports the TypeScript type definition for the response of a protected data process from the '@iexec/dataprotector' package. This is essential for type-safe handling of iExec results.

```typescript
import { type ProcessProtectedDataResponse } from '@iexec/dataprotector';
```

--------------------------------

### fetchUserContacts

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/fetchUserContacts.md

Fetches the contacts who have authorized a specific Ethereum address to send them Telegram messages. Supports filtering for strict authorization.

```APIDOC
## POST fetchUserContacts

### Description
Retrieves a list of contacts who have previously granted authorization to a specified Ethereum address to send them Telegram messages.

### Method
POST

### Endpoint
/iexecblockchaincomputing/documentation/fetchUserContacts

### Parameters
#### Request Body
- **userAddress** (Address) - Required - The Ethereum address for which to obtain the list of contacts.
- **isUserStrict** (boolean) - Optional - If true, fetches contacts who granted access exclusively to the specified user and no one else.

### Request Example
{
  "userAddress": "0x789cba...",
  "isUserStrict": true
}

### Response
#### Success Response (200)
- **contactsList** (Contact[]) - A list of contact objects, where each contact represents a user who granted authorization. Each contact object includes the contact's ETH address and the ETH address for the `protectedData` containing their Telegram chat ID.

#### Response Example
{
  "contactsList": [
    {
      "userAddress": "0xabcdef...",
      "protectedData": "0x123456..."
    }
  ]
}
```

--------------------------------

### Revoke All Access to Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/revokeAllAccess.md

Demonstrates how to revoke all access permissions for a specified protected data entity using the revokeAllAccess method. This is useful for managing data security by removing all authorizations.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const revokeAllAccessResult = await dataProtectorCore.revokeAllAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
});
```

--------------------------------

### Cancel App Order

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/manage-access.md

Completely invalidates a specific app order on the iExec marketplace using its order hash.

```bash
iexec order cancel --app <orderHash>
```

--------------------------------

### Set Maximum Workerpool Price for Infrastructure Usage (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Defines the maximum payment (in nRLC) to the workerpool provider for using their infrastructure to run the iApp. This is set using the workerpoolMaxPrice option.

```TypeScript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    workerpoolMaxPrice: 42, // [!code focus]
  });
```

--------------------------------

### Transfer Protected Data Ownership

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/transferOwnership.md

Transfers ownership of a protectedData entity to a new owner. Requires the protectedData address and the new owner's ETH address. The method returns a transaction hash confirming the ownership update.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const transferResponse = await dataProtectorCore.transferOwnership({
  protectedData: '0x123abc...',
  newOwner: '0xc5e9f4...',
});
```

--------------------------------

### Revoke App-Specific Access to Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/revokeAllAccess.md

Illustrates revoking access permissions for a specific application linked to a protected data entity. This allows granular control by targeting a particular app's access.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const revokeAllAccessResult = await dataProtectorCore.revokeAllAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...', // [!code focus]
  authorizedUser: '0x789cba...',
});
```

--------------------------------

### Filter Rentable Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections.md

Retrieves protected data entries that are marked as rentable. This allows users to discover data available for rental agreements.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const rentableProtectedData = 
  await dataProtectorSharing.getProtectedDataInCollections({
    isRentable: true, // [!code focus]
  });
```

--------------------------------

### Add custom public label for Web3Mail

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Allows adding a custom public label to an email, which is written on-chain as 'iexec_args' in the deal parameters. This is useful for identifying specific email transactions.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject',
  emailContent: 'My email content',
  label: 'some-custom-id', // [!code focus]
});
```

--------------------------------

### Catching and Inspecting Yup Validation Errors

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Demonstrates how to catch a ValidationError when sending an email using the Web3mail service. It shows how to access the error message and list all specific validation errors if the caught error is an instance of ValidationError.

```typescript
import { ValidationError } from '@iexec/web3mail';

try {
  await web3mail.sendEmail({
    protectedData,
    senderName: 'ab', // Bad input
    emailSubject,
    emailContent,
  });
} catch (err) {
  console.error(err.message); // "senderName must be at least 3 characters"

  // Or list all validation errors:
  if (err instanceof ValidationError) {
    console.error('Validation errors:', (err as ValidationError).errors);
  }
}
```

--------------------------------

### Paginate Protected Data Results

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections.md

Fetches a specific page of protected data entries from collections, along with a specified page size. This is crucial for handling large result sets efficiently.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const protectedData = await dataProtectorSharing.getProtectedDataInCollections({
  collectionId: 12,
  page: 3, // [!code focus]
  pageSize: 25,
});
```

--------------------------------

### Grant Access to Protected Data using DataProtector Core

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/integrate-web3-messaging.md

Grants access permissions for a sender and/or an application to a specific piece of protected data. This function requires the protected data identifier, the authorized application's address, the authorized user's address, and details about the access price and number of allowed accesses.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';
const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const grantedAccess = await dataProtectorCore.grantAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...',
  pricePerAccess: 3,
  numberOfAccess: 10,
});
```

--------------------------------

### setProtectedDataToSubscription

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/setProtectedDataToSubscription.md

Method to set a protected data as part of your subscription. Any user who has an active subscription to your collection will be able to consume this protected data.

```APIDOC
## POST /api/setProtectedDataToSubscription

### Description
Sets a protected data as part of your subscription, allowing active subscribers to consume it.

### Method
POST

### Endpoint
/api/setProtectedDataToSubscription

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - Address of the protected data to be included in the subscription.

### Request Example
```json
{
  "protectedData": "0x123abc..."
}
```

### Response
#### Success Response (200)
- **transactionHash** (string) - The hash of the transaction.

#### Response Example
```json
{
  "transactionHash": "0xabcdef12345..."
}
```
```

--------------------------------

### revokeAllAccess

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/revokeAllAccess.md

Revokes all or specific access permissions for protected data. You can specify authorized applications or users to revoke access from, or revoke all access if neither is specified. Requires ownership of the protected data.

```APIDOC
## POST /revokeAllAccess

### Description
Revokes all or specific access permissions for protected data. You can specify authorized applications or users to revoke access from, or revoke all access if neither is specified. Requires ownership of the protected data.

### Method
POST

### Endpoint
/revokeAllAccess

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - The address of the `protectedData` subject to access revocation.
- **authorizedApp** (AddressOrENS) - Optional - The application address to be removed from the authorization list for the specified `protectedData`. If no address is specified, it will revoke all access from the protected data, regardless of the app.
- **authorizedUser** (AddressOrENS) - Optional - The user address to be removed from the authorization list for the specified `protectedData`. If no address is specified, it will revoke all access from the protected data, regardless of the authorized user.
- **onStatusUpdate** (OnStatusUpdateFn<RevokeAllAccessStatuses>) - Optional - Callback function to be notified at intermediate steps.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "authorizedApp": "0x456def...",
  "authorizedUser": "0x789cba..."
}
```

### Response
#### Success Response (200)
- **RevokedAccess[]** - An array of revoked access objects.

#### Response Example
```json
[
  {
    "data": "0x123abc...",
    "owner": "0xOwnerAddress...",
    "user": "0xUserAddress...",
    "application": "0xAppAddress...",
    "timestamp": 1678886400
  }
]
```
```

--------------------------------

### protectData API

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/protectData.md

Encrypts user data client-side, making it suitable for secure storage or use within iApps. The data is protected as an NFT.

```APIDOC
## POST /protectData

### Description
Encrypts user data client-side, ensuring privacy and security. The encrypted data is stored as an NFT.

### Method
POST

### Endpoint
/protectData

### Parameters
#### Request Body
- **data** (DataObject) - Required - The data to be protected, provided as a JSON object with custom keys. Can be a file converted to a buffer or an array represented as a Record<string, any>.

### Request Example
```json
{
  "data": {
    "email": "example@gmail.com",
    "SMTPserver": {
      "port": 5000,
      "smtp_server": "smtp.gmail.com"
    }
  }
}
```

### Response
#### Success Response (200)
- **schema** (object) - Describes the structure of the protected data.
- **protectedData** (string) - The encrypted data, typically represented as a string.

#### Response Example
```json
{
  "schema": {
    "email": "string",
    "SMTPserver": {
      "port": "number",
      "smtp_server": "string"
    }
  },
  "protectedData": "0x..."
}
```
```

--------------------------------

### Extract Data Values within an iApp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/handle-schemas-dataset-types.md

This TypeScript snippet shows how to use the IExecDataProtectorDeserializer within an iApp to securely extract specific data values based on their schema type. It requires the '@iexec/dataprotector-deserializer' package.

```typescript
import { IExecDataProtectorDeserializer } from '@iexec/dataprotector-deserializer';

const deserializer = new IExecDataProtectorDeserializer();
// ---cut---
// Inside your iApp
const email = await deserializer.getValue('email', 'string');
const preferences = await deserializer.getValue(
  'preferences.newsletter',
  'bool'
);
```

--------------------------------

### PriceOracle Contract State and TimedValue Struct

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/oracle.md

Defines the internal state for the PriceOracle contract, including a TimedValue struct to hold oracle data (call ID, date, value, details) and a mapping to store these values indexed by a unique identifier.

```Solidity
struct TimedValue
{
        bytes32 oracleCallID;
        uint256 date;
        uint256 value;
        string  details;
}

mapping(bytes32 => TimedValue) public values;
```

--------------------------------

### Consume Protected Data API

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/consume/consumeProtectedData.md

Details the parameters for the consumeProtectedData function, including workerpool, maxPrice, encryption keys, and status updates.

```APIDOC
## POST /api/dataprotector/consume

### Description
This endpoint allows a requester to consume protected data by initiating a task on the iExec network. It requires details about the protected data, the application to use, and optionally configuration for the workerpool, pricing, and encryption.

### Method
POST

### Endpoint
/api/dataprotector/consume

### Parameters
#### Request Body
- **protectedData** (string) - Required - The identifier for the protected data to consume.
- **app** (string) - Required - The address of the iExec application to run.
- **workerpool** (AddressOrENS) - Optional - The address or ENS name of the workerpool. Defaults to iExec's workerpool.
- **maxPrice** (number) - Optional - The maximum price (in nRLC) the requester is willing to pay per task. Defaults to 0.
- **pemPublicKey** (string) - Optional - A PEM-encoded public key to use for encryption. If provided, the corresponding private key must also be provided.
- **pemPrivateKey** (string) - Optional - A PEM-encoded private key corresponding to `pemPublicKey`. Required if `pemPublicKey` is provided.
- **onStatusUpdate** (OnStatusUpdateFn) - Optional - A callback function to receive notifications on task status updates.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "app": "0x456def...",
  "workerpool": "0xa5de76...",
  "maxPrice": 10,
  "pemPublicKey": "-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----",
  "pemPrivateKey": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----",
  "onStatusUpdate": "(status) => console.log(status)"
}
```

### Response
#### Success Response (200)
- **txHash** (string) - The transaction hash of the operation.
- **dealId** (string) - The ID of the iExec deal.
- **taskId** (string) - The ID of the iExec task.

#### Response Example
```json
{
  "txHash": "0x...",
  "dealId": "0x...",
  "taskId": "0x..."
}
```
```

--------------------------------

### Protect File Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/handle-schemas-dataset-types.md

Protects file data, including filename, content, and upload date, using the iExec Data Protector. This involves converting the file to an ArrayBuffer and passing it along with the filename to the protectData method.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

// Mock function for the example
function createArrayBufferFromFile(file: File): Promise<ArrayBuffer> {
  return Promise.resolve(new ArrayBuffer(0));
}

// Get file from input element
const file = new File([''], 'example.jpg', { type: 'image/jpeg' });

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const fileBuffer = await createArrayBufferFromFile(file);

const fileData = await dataProtectorCore.protectData({
  data: {
    fileName: file.name,
    fileContent: fileBuffer,
    uploadDate: Date.now(),
  },
});
```

--------------------------------

### Send Telegram Message using Web3Telegram SDK

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/use-iapp/integrate-web3-messaging.md

Sends a message to a Telegram user via the Web3Telegram SDK. This function requires the protected data identifier, the sender's name, and the message content. This is used after the recipient's Telegram Chat ID has been protected and access granted.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  senderName: 'Arthur',
  telegramContent: 'My telegram message content',
});
```

--------------------------------

### Specify Protected Data Address for Removal (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/removeProtectedDataFromRenting.md

Illustrates the specific parameter required for the removeProtectedDataFromRenting method, focusing on the 'protectedData' field. This field takes an AddressOrENS type, representing the address of the protected data to be removed from renting.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const notForRentingAnymoreResult =
  await dataProtectorSharing.removeProtectedDataFromRenting({
    protectedData: '0x123abc...', // [!code focus]
  });
```

--------------------------------

### removeProtectedDataFromRenting

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/renting/removeProtectedDataFromRenting.md

Allows the collection owner to remove a protected data item from being rented. Active rentals will still be honored until their rental period ends.

```APIDOC
## POST /removeProtectedDataFromRenting

### Description
Method to remove a protected data from renting. If there are still active rentals to the protected data, these rentals will be honored until the end of their rental period.

### Method
POST

### Endpoint
/removeProtectedDataFromRenting

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - Address of the protected data you'd like to remove from renting.

### Request Example
```json
{
  "protectedData": "0x123abc..."
}
```

### Response
#### Success Response (200)
- **transactionHash** (string) - The hash of the transaction.

#### Response Example
```json
{
  "transactionHash": "0x..."
}
```
```

--------------------------------

### Fetch Strictly Authorized Contacts with iExec Web3Telegram

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/fetchMyContacts.md

Retrieves a list of contacts who have granted exclusive authorization for message sending using the iExec Web3Telegram library. This utilizes the 'isUserStrict' parameter.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
const contactsList = await web3telegram.fetchMyContacts({
  isUserStrict: true,
});
```

--------------------------------

### iExec Trust Level to Confidence Threshold Conversion

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Illustrates the conversion of an integer trust level to a confidence threshold percentage used in iExec's Proof of Contribution (PoCo) consensus layer. Higher trust values correspond to higher required confidence.

```text
| **Trust** | **PoCo enforced confidence threshold** |
| --------- | -------------------------------------- |
| 0         | 0%                                     |
| 1         | 0%                                     |
| 2         | 50%                                    |
| 100       | 99%                                    |
| 10000     | 99.99%                                 |
| 1000000   | 99.9999%                               |
```

--------------------------------

### Trigger Encrypted Result Task Execution

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/protect-the-result.md

Executes an iExec application with result encryption enabled. It requires the application address, chain, workerpool, TEE framework, and the --encrypt-result flag. The --watch flag monitors the task status.

```bash
iexec app run <0x-your-app-address> \
    --chain {{chainName}}
    --workerpool {{workerpoolAddress}} \
    --tag tee,scone \
    --encrypt-result \
    --watch
```

--------------------------------

### Sale Model

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/manage-data/monetize-protected-data.md

Facilitates the permanent transfer of data ownership from the seller to the buyer. This model is ideal for unique datasets, digital assets, or one-time valuable insights where exiting data ownership is desired.

```APIDOC
## Sale Model

### Description
This model allows for the permanent transfer of ownership of protected data from the seller to the buyer. It is suitable for unique datasets, digital assets, NFTs, one-time valuable insights, or when the seller wishes to exit data ownership.

### Method
`setProtectedDataForSale`, `buyProtectedData`

### Endpoint
N/A (Function calls within the DataProtector library)

### Parameters
#### setProtectedDataForSale (Data Owner)
- **protectedData** (string) - Required - The address or identifier of the protected data to be listed for sale.
- **price** (number) - Required - The purchase price in RLC.

#### buyProtectedData (Client/Buyer)
- **protectedData** (string) - Required - The address or identifier of the protected data to purchase.
- **price** (number) - Required - The purchase price in RLC.

### Request Example (Data Owner)
```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

await dataProtectorSharing.setProtectedDataForSale({
  protectedData: '0x123abc...',
  price: 100000000000, // 100 RLC
});
```

### Request Example (Client/Buyer)
```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const purchase = await dataProtectorSharing.buyProtectedData({
  protectedData: '0x123abc...',
  price: 100000000000,
});
```

### Response (Success)
- **purchase** (object) - Details of the successful data purchase and ownership transfer.

### Response Example (Client/Buyer)
```json
{
  "purchase": "purchase_details_object"
}
```
```

--------------------------------

### Specify Protected Data for Processing

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/processProtectedData.md

Shows how to set the 'protectedData' parameter when calling the processProtectedData method. This parameter specifies the ETH address or ENS reference of the protected data to be processed by the application.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);

const processProtectedDataResponse =
  await dataProtectorCore.processProtectedData({
    protectedData: '0x123abc...', // [!code focus]
    app: '0x456def...',
  });
```

--------------------------------

### revokeOneAccess

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/revokeOneAccess.md

Revokes a specific access authorization for a protected data entity. This operation generates a blockchain transaction and may take at least 5 seconds to confirm.

```APIDOC
## POST /revokeOneAccess

### Description
Revokes a specific access authorization from a `protectedData` entity using the `revokeOneAccess` method. The input parameter is sourced from the `getGrantedAccess` method.

### Method
POST

### Endpoint
/revokeOneAccess

### Parameters
#### Request Body
- **grantedAccess** (GrantedAccess) - Required - The complete `granted access` object retrieved from an invocation of `getGrantedAccess`.
  - **apprestrict** (string) - Required - The application restriction.
  - **dataset** (string) - Required - The dataset identifier.
  - **datasetprice** (string) - Required - The price of the dataset.
  - **requesterrestrict** (string) - Required - The requester restriction.
  - **salt** (string) - Required - The salt used for the access grant.
  - **sign** (string) - Required - The signature for the access grant.
  - **tag** (string) - Required - The tag indicating the asset type (must be `0x0000000000000000000000000000000000000000000000000000000000000003` for protected data).
  - **volume** (string) - Required - The volume of data access.
  - **workerpoolrestrict** (string) - Required - The worker pool restriction.

### Request Example
```json
{
  "grantedAccess": {
    "apprestrict": "0xea...",
    "dataset": "0xA0C...",
    "datasetprice": "0",
    "requesterrestrict": "0xecb..",
    "salt": "0x0147...",
    "sign": "0xc22c1...",
    "tag": "0x0000000000000000000000000000000000000000000000000000000000000003",
    "volume": "1",
    "workerpoolrestrict": "0x000..."
  }
}
```

### Response
#### Success Response (200)
- **RevokedAccess** (object) - An object confirming the revocation, containing details of the transaction.

#### Response Example
```json
{
  "message": "Access revoked successfully.",
  "transactionHash": "0xabc123..."
}
```
```

--------------------------------

### Import GrantedAccess Type - TypeScript

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/grantAccess.md

Imports the `GrantedAccess` type definition from the `@iexec/dataprotector` library, likely for use in type checking or defining return types for functions that interact with iExec's data protector.

```typescript
import { type GrantedAccess } from '@iexec/dataprotector';
```

--------------------------------

### Filter Protected Data for Sale

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections.md

Fetches protected data entries that are currently listed for sale. This helps users find data available for purchase on the iExec marketplace.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const protectedDataForSale = 
  await dataProtectorSharing.getProtectedDataInCollections({
    isForSale: true, // [!code focus]
  });
```

--------------------------------

### Specify Protected Data Address for Removal (TypeScript)

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/removeProtectedDataFromSubscription.md

Illustrates how to specify the `protectedData` parameter, which is the address of the protected data to be removed from the subscription. This is a required parameter.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);

const { txHash } =
  await dataProtectorSharing.removeProtectedDataFromSubscription({
    protectedData: '0x123abc...', // [!code focus]
  });
```

--------------------------------

### Revoke User-Specific Access to Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/revokeAllAccess.md

Demonstrates revoking access permissions for a specific user to a protected data entity. This provides fine-grained control by targeting a particular user's access rights.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const revokeAllAccessResult = await dataProtectorCore.revokeAllAccess({
  protectedData: '0x123abc...',
  authorizedApp: '0x456def...',
  authorizedUser: '0x789cba...', // [!code focus]
});
```

--------------------------------

### Provide PEM Private Key for Data Consumption

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/consume/consumeProtectedData.md

Enables the use of a pre-saved or self-generated RSA private key for data consumption. The corresponding public key must also be provided.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    pemPrivateKey:
      '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----', // [!code focus]
  });
```

--------------------------------

### getValue Method

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/iapp-generator/deserializer/getValue.md

Deserializes a value from protected data given a specified path and type.

```APIDOC
## getValue Method

### Description
Method to deserialize a value given a provided type using the IExecDataProtectorDeserializer.

### Method
POST (Implied by usage, often deserialization methods are part of a service call)

### Endpoint
/iexecblockchaincomputing/documentation/getValue (Assumed based on project structure)

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **path** (string) - Required - The path of the value inside the protected data that you want to deserialize.
- **type** (string) - Required - Type of the desired data. Supported types: `bool`, `f64`, `i128`, `bigint`, `string`, `Uint8Array`, `boolean` (legacy), `number` (legacy).

### Request Example
```json
{
  "path": "path.to.value1",
  "type": "string"
}
```

### Response
#### Success Response (200)
- **value** (any) - The recovered original value.

#### Response Example
```json
{
  "value": "deserialized_string_value"
}
```
```

--------------------------------

### removeProtectedDataForSale

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/selling/removeProtectedDataForSale.md

Method to remove a protected data from sale listing, preventing further purchase transactions.

```APIDOC
## removeProtectedDataForSale

### Description
Method to remove a protected data for sale.

### Method
POST

### Endpoint
/removeProtectedDataForSale

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - Address of the protected data that you'd like to remove for sale.

### Request Example
```json
{
  "protectedData": "0x123abc..."
}
```

### Response
#### Success Response (200)
- **transactionHash** (string) - The hash of the transaction used to remove the data from sale.

#### Response Example
```json
{
  "transactionHash": "0x..."
}
```
```

--------------------------------

### Filter Protected Data by Creation Timestamp

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections.md

Fetches protected data entries created after a specified Unix timestamp. This enables retrieving recently added or updated data within collections.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const latestProtectedData = 
  await dataProtectorSharing.getProtectedDataInCollections({
    createdAfterTimestamp: 1707237580, // Feb 6th, 2024 16:39:40 GMT // [!code focus]
  });
```

--------------------------------

### Transfer Ownership of Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/transferOwnership.md

Allows transferring ownership of a `protectedData` entity to a new owner, identified by their ETH address. The return value provides a transaction hash and confirmation of the new owner of the `protectedData`. Only the current owner of the `protectedData` may invoke this method. When transferring the `protectedData`, the grantedAccess created by the previous owner are revoked automatically. Ownership of the `protectedData` can be renounced by transferring it to the burn address `0x000000000000000000000000000000000000dEaD`.

```APIDOC
## POST /transferOwnership

### Description
Transfers ownership of a protected data entity to a new owner.

### Method
POST

### Endpoint
/transferOwnership

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - ETH address of the `protectedData` owned by you which is to be transferred to a new owner.
- **newOwner** (AddressOrENS) - Required - ETH address for the new owner for the `protectedData`.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "newOwner": "0xc5e9f4..."
}
```

### Response
#### Success Response (200)
- **address** (Address) - The ETH address of the `protectedData` you transferred.
- **to** (AddressOrENS) - The ETH address of the new owner of the `protectedData`.
- **txHash** (string) - The ID of the transaction that happened on iExec's side chain.

#### Response Example
```json
{
  "address": "0x123abc...",
  "to": "0xc5e9f4...",
  "txHash": "0xabcdef1234567890"
}
```
```

--------------------------------

### PriceOracle Contract Process Result Function

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/oracle.md

Handles the processing of results from an Oracle dApp execution. It decodes the results, validates the timestamp against existing data, and updates the internal state with the new price information. Emits a ValueChange event upon successful update.

```Solidity
function processResult(bytes32 _oracleCallID)
public
{
        uint256       date;
        string memory details;
        uint256       value;

        // Parse results
        (date, details, value) = decodeResults(_iexecDoracleGetVerifiedResult(_oracleCallID));

        // Process results
        bytes32 id = keccak256(bytes(details));
        require(values[id].date < date, "new-value-is-too-old");
        emit ValueChange(id, _oracleCallID, values[id].date, values[id].value, date, value);
        values[id].oracleCallID = _oracleCallID;
        values[id].date         = date;
        values[id].value        = value;
        values[id].details      = details;
}
```

--------------------------------

### getProtectedDataInCollections

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections.md

Fetches protected data entries from collections based on specified filters. Results are ordered by creation timestamp in descending order. A protected data item can only belong to one collection at a time.

```APIDOC
## GET /getProtectedDataInCollections

### Description
Retrieves protected data entries from collections. Results are ordered by `creationTimestamp` in descending order. Each protected data can belong to only one collection.

### Method
GET

### Endpoint
/getProtectedDataInCollections

### Parameters
#### Query Parameters
- **protectedData** (AddressOrENS) - Optional - The address or ENS name of the protected data to filter by.
- **collectionId** (number) - Optional - The ID of the collection to filter by.
- **collectionOwner** (AddressOrENS) - Optional - The address or ENS name of the collection owner.
- **createdAfterTimestamp** (number) - Optional - Filters data created after this Unix timestamp.
- **isRentable** (boolean) - Optional - Filters data that are rentable.
- **isForSale** (boolean) - Optional - Filters data that are for sale.
- **isDistributed** (boolean) - Optional - Filters data that are for sale, renting, or part of a subscription.
- **page** (number) - Optional - The page number for pagination.
- **pageSize** (number) - Optional - The number of results per page.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "collectionId": 12,
  "collectionOwner": "0x123...",
  "createdAfterTimestamp": 1707237580,
  "isRentable": true,
  "isForSale": true,
  "isDistributed": true,
  "page": 3,
  "pageSize": 25
}
```

### Response
#### Success Response (200)
- **protectedDataArray** (array) - An array of protected data objects.
  - **address** (string) - The address of the protected data.
  - **collectionId** (number) - The ID of the collection it belongs to.
  - **owner** (string) - The owner of the collection.
  - **creationTimestamp** (number) - The timestamp when the data was created.
  - **isRentable** (boolean) - Indicates if the data is rentable.
  - **isForSale** (boolean) - Indicates if the data is for sale.
  - **isDistributed** (boolean) - Indicates if the data is distributed.

#### Response Example
```json
{
  "protectedDataArray": [
    {
      "address": "0xabcdef...",
      "collectionId": 12,
      "owner": "0x123...",
      "creationTimestamp": 1707237580,
      "isRentable": true,
      "isForSale": false,
      "isDistributed": false
    }
  ]
}
```
```

--------------------------------

### Provide PEM Public Key for Data Consumption

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/consume/consumeProtectedData.md

Allows the use of a pre-saved or self-generated RSA public key for data consumption. If provided, the corresponding private key must also be supplied.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    pemPublicKey: '-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----', // [!code focus]
  });
```

--------------------------------

### Specify protectedData for sendTelegram

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Illustrates how to specify the `protectedData` parameter when calling the sendTelegram method. This parameter is the address of the protected data holding the recipient's Telegram chat ID, which is essential for message delivery.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...', // [!code focus]
  senderName: 'Arthur',
  telegramContent: 'My telegram message content',
});
```

--------------------------------

### Set Email Subject for sendEmail Method

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

This snippet highlights the `emailSubject` parameter for the `sendEmail` function. It demonstrates how to set the subject line for the email, noting that the maximum length is 78 characters and any excess will be truncated.

```typescript
import { IExecWeb3mail, getWeb3Provider } from '@iexec/web3mail';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3mail = new IExecWeb3mail(web3Provider);
// ---cut---
const sendEmail = await web3mail.sendEmail({
  protectedData: '0x123abc...',
  emailSubject: 'My email subject', // [!code focus]
  emailContent: 'My email content',
});
```

--------------------------------

### iExec Oracle Generic Contract Update Settings Function

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/oracle.md

An internal function used to update the settings of the iExec Oracle contract. It allows modification of the authorized application, dataset, worker pool, required tag, and trust level for task validation.

```Solidity
function _iexecDoracleUpdateSettings(
        address _authorizedApp
,       address _authorizedDataset
,       address _authorizedWorkerpoo
,       bytes32 _requiredtag
,       uint256 _requiredtrust
)
internal
```

--------------------------------

### Revoke Access for Specific Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/revokeAllAccess.md

Shows how to revoke access permissions for a specific protected data entity, focusing on the 'protectedData' parameter. This action targets the data itself for access removal.

```typescript
import { IExecDataProtectorCore, getWeb3Provider } from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorCore = new IExecDataProtectorCore(web3Provider);
// ---cut---
const revokeAllAccessResult = await dataProtectorCore.revokeAllAccess({
  protectedData: '0x123abc...', // [!code focus]
});
```

--------------------------------

### Trust Match Requirement - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

Verifies that the worker pool's trust level is greater than or equal to the requester's trust requirement. This relates to the security and reliability of the worker.

```Solidity
require(_requestorder.trust == _workerpoolorder.trust);
```

--------------------------------

### Decrypt Task Result

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/guides/build-iapp/advanced/protect-the-result.md

Decrypts the AES-encrypted result file obtained from an iExec task. This command uses the locally stored private key to decrypt the result.

```bash
iexec result decrypt <0x-your-task-id.zip>
```

--------------------------------

### POST /removeProtectedDataFromCollection

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/collection/removeProtectedDataFromCollection.md

Removes a protected data from a user's collection in the Data Sharing smart contract. This action transfers ownership of the protected data back to the original owner.

```APIDOC
## POST /removeProtectedDataFromCollection

### Description
Removes a protected data from a user's collection in the Data Sharing smart contract. This action transfers ownership of the protected data back to the original owner.

### Method
POST

### Endpoint
/removeProtectedDataFromCollection

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - The address of the protected data to remove from the collection.

### Request Example
```json
{
  "protectedData": "0x123abc..."
}
```

### Response
#### Success Response (200)
- **txHash** (string) - The transaction hash of the operation.

#### Response Example
```json
{
  "txHash": "0x..."
}
```
```

--------------------------------

### Grant Access to Protected Data

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorCore/grantAccess.md

Grants permission to securely access specified protectedData for processing using the processProtectedData method. Authorization is given to a user in the context of an application.

```APIDOC
## POST /grantAccess

### Description
Grants permission to securely access specified protectedData for processing using the processProtectedData method. Authorization is given to a user in the context of an application or a designated list of applications.

### Method
POST

### Endpoint
/grantAccess

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **protectedData** (AddressOrENS) - Required - The ethereum address of the protected data.
- **authorizedApp** (AddressOrENS) - Required - The address of the application to authorize. Can be a single app address or an iExec Whitelist Smart Contract address.
- **authorizedUser** (AddressOrENS) - Required - The address of the user to authorize. Use '0x0000000000000000000000000000000000000000' to authorize all users.
- **pricePerAccess** (number) - Optional - The price per access to the protected data.
- **numberOfAccess** (number) - Optional - The total number of allowed accesses.
- **onStatusUpdate** (function) - Optional - A callback function to receive status updates.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "authorizedApp": "0x456def...",
  "authorizedUser": "0x789cba...",
  "pricePerAccess": 3,
  "numberOfAccess": 10
}
```

### Response
#### Success Response (200)
- **grantAccessResult** (object) - An object containing the result of the grant access operation.

#### Response Example
```json
{
  "grantAccessResult": {
    "message": "Access granted successfully."
  }
}
```
```

--------------------------------

### Set senderName for sendTelegram

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3telegram/methods/sendTelegram.md

Shows how to set the `senderName` parameter when sending a Telegram message using the sendTelegram method. This parameter defines the name displayed as the sender of the message.

```typescript
import { IExecWeb3telegram, getWeb3Provider } from '@iexec/web3telegram';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const web3telegram = new IExecWeb3telegram(web3Provider);
// ---cut---

const sendTelegram = await web3telegram.sendTelegram({
  protectedData: '0x123abc...',
  senderName: 'Arthur', // [!code focus]
  telegramContent: 'My telegram message content',
});
```

--------------------------------

### POST removeProtectedDataFromSubscription

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/subscription/removeProtectedDataFromSubscription.md

This endpoint allows you to remove a protected data from your subscription in iExec. Once removed, the data will no longer be provided to current or future subscribers.

```APIDOC
## POST /removeProtectedDataFromSubscription

### Description
Remove a protected data from your subscription in iExec. Stop providing the data to current and future subscribers, removing it from subscription access.

### Method
POST

### Endpoint
/removeProtectedDataFromSubscription

### Parameters
#### Request Body
- **protectedData** (AddressOrENS) - Required - Address of the protected data you'd like to remove from subscription.

### Request Example
```json
{
  "protectedData": "0x123abc..."
}
```

### Response
#### Success Response (200)
- **txHash** (string) - The transaction hash of the operation.

#### Response Example
```json
{
  "txHash": "0xabc123..."
}
```
```

--------------------------------

### sendEmail

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

This method allows an authorized entity to send an email message to a user without needing to know their email address. The recipient must have authorized the Web3Mail app to access their email via a protectedData entity.

```APIDOC
## POST /sendEmail

### Description
Allows an authorized entity to send an email message to a user without knowing their email address, provided the recipient has granted authorization.

### Method
POST

### Endpoint
/sendEmail

### Parameters
#### Request Body
- **protectedData** (Address) - Required - The address of the `protectedData` holding the contact's email address.
- **emailSubject** (string) - Required - The subject line for the email. Limited to 78 characters.
- **emailContent** (string) - Required - The email content, optionally HTML encoded. Maximum size of 512 kb.
- **useVoucher** (boolean) - Optional - Defaults to `false`. If true, allows payment for the deal using a voucher held by the connected wallet.
- **contentType** (string) - Optional - Defaults to `text/plain`. Can be `text/plain` or `text/html` to enable rich HTML content.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "emailSubject": "My email subject",
  "emailContent": "My email content",
  "useVoucher": false,
  "contentType": "text/plain"
}
```

### Response
#### Success Response (200)
- **status** (string) - Indicates the status of the email sending operation.
- **message** (string) - A confirmation message.

#### Response Example
```json
{
  "status": "success",
  "message": "Email sent successfully"
}
```
```

--------------------------------

### Set Maximum Price for Data Consumption Task

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/consume/consumeProtectedData.md

Defines the maximum price in nRLC that a requester is willing to pay per task. This includes the combined cost of the application, dataset, and workerpool.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
// ---cut---
const consumeProtectedDataResult =
  await dataProtectorSharing.consumeProtectedData({
    protectedData: '0x123abc...',
    app: '0x456def...',
    maxPrice: 10, // [!code focus]
  });
```

--------------------------------

### Unpublish a Workerpool Order

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/worker/manage-access.md

Removes a previously published workerpool order from the iExec Marketplace. This stops new requesters from accessing the workerpool through this specific order.

```bash
iexec order unpublish --workerpool <orderHash>
```

--------------------------------

### Send Email with Custom Sender Name

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/web3mail/methods/sendEmail.md

Allows specifying a custom sender name for the email. The Web3Mail tool appends 'via Web3Mail' to the supplied name.

```APIDOC
## POST /sendEmail

### Description
Sends an email using the Web3Mail service with a customizable sender name.

### Method
POST

### Endpoint
/sendEmail

### Parameters
#### Request Body
- **protectedData** (string) - Required - The protected data associated with the recipient.
- **emailSubject** (string) - Required - The subject of the email.
- **emailContent** (string) - Required - The content of the email.
- **senderName** (string) - Optional - The desired sender name for the email. Defaults to 'Web3Mail'. Max 20 characters.

### Request Example
```json
{
  "protectedData": "0x123abc...",
  "emailSubject": "My email subject",
  "emailContent": "My email content",
  "senderName": "Awesome project team"
}
```

### Response
#### Success Response (200)
- **taskId** (Address) - Unique identifier for the email task on the iExec side chain.

#### Response Example
```json
{
  "taskId": "0x123abc..."
}
```
```

--------------------------------

### Worker Pool Restriction Check - Solidity

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/protocol/proof-of-contribution.md

If the requester has specified a worker pool restriction, this condition checks if the worker pool matches the specified value or belongs to the corresponding group.

```Solidity
require(_checkIdentity(_requestorder.workerpool, _workerpoolorder.workerpool, GROUPMEMBER_PURPOSE));
```

--------------------------------

### Specify Collection ID for addToCollection

Source: https://github.com/iexecblockchaincomputing/documentation/blob/main/src/references/dataProtector/dataProtectorSharing/collection/addToCollection.md

Shows how to specify the collectionId parameter when adding protected data to a collection using the iExec SDK. The collectionId determines which collection the data will be added to.

```typescript
import {
  IExecDataProtectorSharing,
  getWeb3Provider,
} from '@iexec/dataprotector';

const web3Provider = getWeb3Provider('PRIVATE_KEY');
const dataProtectorSharing = new IExecDataProtectorSharing(web3Provider);
const { txHash } = await dataProtectorSharing.addToCollection({
  collectionId: 12, // [!code focus]
  protectedData: '0x123abc...',
  addOnlyAppWhitelist: '0x541abc...',
});
```