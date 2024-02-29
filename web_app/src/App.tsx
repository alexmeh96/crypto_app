import {WagmiProvider} from 'wagmi'

import {config} from "./config";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./index";
import {WelcomePage} from "./pages/WelcomPage";


export interface WalletInfo {
    address: string;
    paid: boolean;
}

export const App = () => {
    return (
        <div>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <WelcomePage />
                </QueryClientProvider>
            </WagmiProvider>
        </div>
    );
};
