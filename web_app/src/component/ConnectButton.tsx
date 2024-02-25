import {useAccount, useDisconnect} from "wagmi";
import {useWeb3Modal} from '@web3modal/wagmi/react'

function ConnectButton() {

    const {isConnected, isDisconnected} = useAccount()
    const {disconnect} = useDisconnect()

    const {open} = useWeb3Modal()

    // {
    //     isDisconnected && <button onClick={() => open()}></button>
    // }
    // {
    //     isConnected && <button onClick={() => disconnect()}></button>
    // }

    function handleConnect() {
        open()
    }

    return (
        <div>
            {
                isDisconnected &&
                <button onClick={handleConnect}
                        data-w-id="fe515213-ada7-58ca-3984-dc6eeb4ce466"
                        className="button w-button"
                >
                    Войти и принять участие
                </button>
            }
            {
                isConnected && <div>Вы подали заявку на участие</div>
            }

        </div>
    );
}

export default ConnectButton;
