import {config} from "../config";
import {getAccount} from '@wagmi/core'
import {WalletInfo} from "../App";


export async function getNonce() {
    const res = await fetch(`http://localhost:8085/api/nonce`, {
        credentials: 'include',
    })

    return await res.text()
}

export async function validateMessage({message, signature}: any): Promise<WalletInfo> {
    const res = await fetch('http://localhost:8085/api/signin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({message, signature}),
        credentials: 'include',
    })

    return await res.json();
}

export async function getSession() {
    const {address, chainId} = getAccount(config)

    return {address, chainId}
}

export async function getInfo(): Promise<WalletInfo> {
    try {
        const res = await fetch('http://localhost:8085/api/info', {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        console.log(res)

        if (res.ok) {
            return await res.json();
        }

        throw await res.json()
    } catch (err) {
        console.log(err)
        throw err
    }
}

export async function pay() {
    try {
        const res = await fetch('http://localhost:8085/api/paid', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })

        if (res.ok) {
            return
        }

        throw await res.json()
    } catch (err) {
        console.log(err)
        throw err
    }
}

export async function signOut() {
    try {
        await fetch('http://localhost:8085/api/signout', {
            credentials: 'include',
        })

    } catch (err) {
        console.log(err)
        throw err
    }
}
