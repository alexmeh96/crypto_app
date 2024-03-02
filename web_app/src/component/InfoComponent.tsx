import PayModal from "./PayModal";
import React, {useState} from "react";
import {useLoadStore, useStore} from "../store/store";
import SpinnerComponent from "./SpinnerComponent";

function InfoComponent() {

    const {walletInfo, setWalletInfo} = useStore()
    const {load, setLoad} = useLoadStore()

    const [visible, setVisible] = useState(false)


    async function handlePay() {
        try {
            setVisible(true)
            // await pay()
            // setWalletInfo({address: walletInfo.address, paid: true})
        } catch (e) {

        }
    }

    return (
        <div>
            {
                visible && !walletInfo.paid && <PayModal visible={visible} setVisible={setVisible}/>
            }
            {
                walletInfo.paid ?
                    <div style={{ backgroundColor: "rgba(0, 0, 0, 1)", textAlign: "center", margin: '20px'}}>
                        <p className="p-20 color-orange">
                            Expect the coin claim. Prepare in advance a wallet supporting BRC-20. The date will be announced in official sources.
                        </p>
                    </div>
                    :
                    <button onClick={handlePay}
                            data-w-id="fe515213-ada7-58ca-3984-dc6eeb4ce466"
                            className="button w-button"
                            style={{width: "unset", paddingLeft: "30px", paddingRight: "30px"}}
                    >
                        Get DAPT
                    </button>
            }
        </div>
    );
}

export default InfoComponent;
