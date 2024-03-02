import "../styles/PayModal.scss"
import React, {useEffect, useState} from "react";
import {pay} from "../service/authService";
import {useLoadStore, useStore} from "../store/store";
import {writeContract} from "viem/actions";
import {useAccount, useSendTransaction, useWriteContract} from "wagmi";
import {mainnet, sepolia} from "wagmi/chains";
import {parseEther} from "viem";
import SelectComponent from "./SelectComponent";
import SpinnerComponent from "./SpinnerComponent";

interface PayModalProps {
    visible: boolean,
    setVisible: (v: boolean) => void,
}

function PayModal({visible, setVisible}: PayModalProps) {
    const {walletInfo, setWalletInfo} = useStore()
    const {load, setLoad} = useLoadStore()
    const [dapt, setDapt] = useState<number>()
    const [value, setValue] = useState<string>("1000")
    const {writeContractAsync} = useWriteContract()

    const {data, sendTransaction} = useSendTransaction()
    const {address, isConnected} = useAccount()


    useEffect(() => {
        const num = isNaN(Number(value)) ? 0 : Number(value)
        setDapt(num / 0.1)
    }, [value]);

    function handleChange(e: any) {
        setValue(e.target.value)
    }

    async function handleERC20Pay() {

        const num = Number(value)

        // if (isNaN(num) || num < 300 || num > 1500) {
        if (isNaN(num)) {
            setValue("0")
            return
        }

        setLoad(true)

        try {
            let data = await writeContractAsync({
                // chainId: sepolia.id,
                chainId: mainnet.id,
                // address: '0x779877A7B0D9E8603169DdbD7836e478b4624789',
                address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
                functionName: 'transfer',
                abi: [{
                    "inputs": [{
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    }, {"internalType": "uint256", "name": "amount", "type": "uint256"}],
                    "name": "transfer",
                    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }],
                args: [
                    '0x1c5d021C6eB306e0Aeb4F4d93083BE06B98230e4',
                    // num * 1000000000000000,
                    num * 1000000,
                ],
            });

            console.log(data)

            await pay(address)
            setWalletInfo({address: walletInfo.address, paid: true})
        } catch (e) {
            console.log(e)
        } finally {
            setLoad(false)
        }

    }

    async function handleEthPay() {
        const v = parseEther(String(0.1))
        console.log(v, 'qqq1')
        sendTransaction({to: "0x1c5d021C6eB306e0Aeb4F4d93083BE06B98230e4", value: v})
        // await pay()
        // setWalletInfo({address: walletInfo.address, paid: true})
    }

    console.log(data, 'www1')


    return (
        <div className="modal-pay">
            <div className="modal-wrapper">
                <div className="modal-content">

                    <p className="p-20" style={{marginBottom: "40px"}}>
                        Your wallet has the opportunity to purchase an allocation of 300 USDT - 1500 USDT
                    </p>

                    <p className="p-20 color-orange">
                        The price is 1 DAPT = 0.1 USDT
                    </p>

                    {/*<SelectComponent />*/}

                    <div className="form__group field" style={{textAlign: "center"}}>
                        <input value={value} onChange={handleChange} type="input" className="form__field"
                               placeholder="USDT" name="USDT" id='USDT' required/>
                        <label htmlFor="USDT" className="form__label">USDT</label>
                    </div>

                    <div style={{textAlign: "right"}}>

                        <p className="p-20 color-orange" style={{marginTop: "10px"}}>
                            {dapt} DAPT
                        </p>

                        <div className="pay-panel-button">
                            <button onClick={() => setVisible(false)}
                                    disabled={load}
                                    data-w-id="fe515213-ada7-58ca-3984-dc6eeb4ce466"
                                    className="button w-button pay-modal-button"
                            >
                                Cancel
                            </button>

                            <button onClick={() => handleERC20Pay()}
                                    disabled={load}
                                    data-w-id="fe515213-ada7-58ca-3984-dc6eeb4ce466"
                                    className="button w-button pay-modal-button"
                            >
                                {
                                    load ? <SpinnerComponent ml="53px" width="30px"/> : "Buy"
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PayModal;
