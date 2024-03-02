import {useAccount, useDisconnect} from "wagmi";
import {useWeb3Modal} from '@web3modal/wagmi/react'
import React, {useEffect} from "react";
import {useLoadStore} from "../store/store";
import SpinnerComponent from "./SpinnerComponent";

function ConnectComponent() {
    const {load, setLoad} = useLoadStore()
    const {open} = useWeb3Modal()

    async function handleConnect() {
        setLoad(true)
        // open({view: "Networks"})
        try {
            await open()
        } catch (e) {
            console.error(e)
        } finally {
            setLoad(false)
        }
    }

    return (
        <div>
            {
                <button onClick={handleConnect}
                        disabled={load}
                        data-w-id="fe515213-ada7-58ca-3984-dc6eeb4ce466"
                        className="button w-button"
                        style={{width: "unset", paddingLeft: "30px", paddingRight: "30px"}}
                >
                    {
                        // load ? <SpinnerComponent ml="53px" width="30px"/> : "Participate"
                        load ? <SpinnerComponent /> : "Participate"
                    }
                </button>
            }
        </div>
    );
}

export default ConnectComponent;
