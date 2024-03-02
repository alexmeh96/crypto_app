import {config} from "../config";
import {getAccount} from '@wagmi/core'
import {WalletInfo} from "../App";


const API = "http://109.71.244.176:8085"
// const API = "http://localhost:8085"

export async function getNonce() {
    const res = await fetch(`${API}/api/nonce`, {
        credentials: 'include',
    })

    return await res.text()
}

export async function validateMessage({message, signature}: any): Promise<WalletInfo> {
    const res = await fetch(`${API}/api/signin`, {
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
        const res = await fetch(`${API}/api/info`, {
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

export async function getInfoWithoutLogin(address: string): Promise<WalletInfo> {
    console.log("ttt1")

    // await new Promise(res => setTimeout(res, 1000))
    try {
        const res = await fetch(`${API}/api/info-without-login?address=${address}`, {
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

export async function pay(address: string) {
    // await new Promise(res => setTimeout(res, 1000))
    try {
        // const res = await fetch(`${API}/api/paid`, {
        const res = await fetch(`${API}/api/paid?address=${address}`, {
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
        await fetch(`${API}/api/signout`, {
            credentials: 'include',
        })

    } catch (err) {
        console.log(err)
        throw err
    }
}
