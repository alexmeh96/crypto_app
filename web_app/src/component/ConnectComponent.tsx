import {useAccount, useDisconnect} from "wagmi";
import {useWeb3Modal} from '@web3modal/wagmi/react'
import {useEffect} from "react";

function ConnectComponent() {

    const {isConnected} = useAccount()
    const { disconnect } = useDisconnect()

    const {open} = useWeb3Modal()

    // useEffect(() => {
    //     if (isConnected) {
    //         console.log("WWW")
    //         disconnect()
    //     }
    // }, []);

    function handleConnect() {
        // open({view: "Networks"})
        open()
    }

    return (
        <div>
            {
                <button onClick={handleConnect}
                        data-w-id="fe515213-ada7-58ca-3984-dc6eeb4ce466"
                        className="button w-button"
                        style={{width: "unset", paddingLeft: "30px", paddingRight: "30px"}}
                >
                    Participate
                </button>
            }
        </div>
    );
}

export default ConnectComponent;
