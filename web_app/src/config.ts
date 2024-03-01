import {arbitrum, avalanche, base, bsc, fantom, gnosis, mainnet, optimism, polygon, sepolia} from "wagmi/chains";
import {createWeb3Modal} from "@web3modal/wagmi/react";
import {SiweMessage} from 'siwe'
import {createSIWEConfig} from '@web3modal/siwe'
import type {SIWECreateMessageArgs, SIWEVerifyMessageArgs} from '@web3modal/core'
import {getNonce, getSession, signOut, validateMessage} from "./service/authService";
import {defaultWagmiConfig} from "@web3modal/wagmi";
import {useStore} from "./store/store";

const projectId = process.env.PROJECT_ID || 'd74e4c0a6c8b102c3f63ef7066b52612'

const chains = [
    sepolia,
    // mainnet,
    // polygon,
    // avalanche,
    // arbitrum,
    // bsc,
    // optimism,
    // gnosis,
    // fantom,
    // base
] as const

const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

// export const config = createConfig({
//     chains,
//     connectors: [
//         // injected(),
//         walletConnect({ projectId, metadata, showQrModal: false }),
//         // metaMask(),
//         // safe(),
//     ],
//     transports: {
//         [sepolia.id]: http(),
//         [mainnet.id]: http(),
//         [optimism.id]: http(),
//         [arbitrum.id]: http(),
//         [base.id]: http(),
//     },
// })
export const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    enableInjected: false
})

const siweConfig = createSIWEConfig({
    enabled: false,
    createMessage: ({ nonce, address, chainId }: SIWECreateMessageArgs) =>
        new SiweMessage({
            version: '1',
            domain: window.location.host,
            uri: window.location.origin,
            address,
            chainId,
            nonce,
            // Human-readable ASCII assertion that the user will sign, and it must not contain `\n`.
            statement: 'Sign in With Ethereum.'
        }).prepareMessage(),
    getNonce: async () => {

        console.log("getNonce")

        // Fetch nonce from your SIWE server
        const nonce = await getNonce()
        if (!nonce) {
            throw new Error('Failed to get nonce!')
        }

        return nonce
    },
    getSession: async () => {
        // Fetch currently authenticated user
        const session = await getSession()
        if (!session) {
            throw new Error('Failed to get session!')
        }

        console.log("getSession")

        const { address, chainId } = session

        return { address, chainId }
    },
    verifyMessage: async ({ message, signature }: SIWEVerifyMessageArgs) => {
        try {

            console.log("verifyMessage")

            // Use your SIWE server to verify if the message and the signature are valid
            // Your back-end will tipically rely on SiweMessage(message).validate(signature)
            const walletInfo = await validateMessage({ message, signature })
            useStore.setState({walletInfo})

            return true
        } catch (error) {
            return false
        }
    },
    signOut: async () => {
        try {
            // Sign out by calling the relevant endpoint on your back-end
            await signOut()

            console.log("signOut")

            return true
        } catch (error) {
            return false
        }
    }
})

createWeb3Modal({
    siweConfig,
    wagmiConfig: config,
    projectId,
    enableAnalytics: true,
})
