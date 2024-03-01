import "../styles/PayModal.scss"
import React, {useEffect, useState} from "react";
import {pay} from "../service/authService";
import {useStore} from "../store/store";

interface PayModalProps {
    visible: boolean,
    setVisible: (v: boolean) => void,
}

function PayModal({visible, setVisible}: PayModalProps) {
    const {walletInfo, setWalletInfo} = useStore()
    const [dapt, setDapt] = useState<number>()
    const [value, setValue] = useState<number>(1000)

    useEffect(() => {
        setDapt(value / 0.1)
    }, [value]);

    function handleChange(e: any) {
        const num = isNaN(e.target.value) ? 0 : Number(e.target.value)
        setValue(num)
    }

    async function handlePay() {
        await pay()
        setWalletInfo({address: walletInfo.address, paid: true})
    }

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
                                    data-w-id="fe515213-ada7-58ca-3984-dc6eeb4ce466"
                                    className="button w-button pay-modal-button"
                            >
                                Cancel
                            </button>

                            <button onClick={() => handlePay()}
                                    data-w-id="fe515213-ada7-58ca-3984-dc6eeb4ce466"
                                    className="button w-button pay-modal-button"
                            >
                                Buy
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default PayModal;
