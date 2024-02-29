import {create} from "zustand";
import {WalletInfo} from "../App";
import {devtools} from "zustand/middleware";

type Store = {
    walletInfo: WalletInfo | null,
    setWalletInfo: (value: WalletInfo) => void,
}
export const useStore = create<Store>()(
    devtools(
        set => ({
            walletInfo: null,
            setWalletInfo: (value: WalletInfo | null) => set({walletInfo: value})
        })
    )
)
