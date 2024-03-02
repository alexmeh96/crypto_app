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

        if (isNaN(num) || num < 300 || num > 1500) {
        // if (isNaN(num)) {
            setValue("0")
            return
        }

        setLoad(true)

        console.log(num, 'hhh1')

        try {
            let data = await writeContractAsync({
                // chainId: sepolia.id,
                chainId: mainnet.id,
                // address: '0x779877A7B0D9E8603169DdbD7836e478b4624789',
                address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
                functionName: 'transfer',
                abi: [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}],
                args: [
                    // '0x1c5d021C6eB306e0Aeb4F4d93083BE06B98230e4',
                    '0x26d51B87C113E715C0d6dA6384264e15D9f4AD72',
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
