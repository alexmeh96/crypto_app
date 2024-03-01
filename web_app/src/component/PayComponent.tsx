import {pay} from "../service/authService";
import {useStore} from "../store/store";
import PayModal from "./PayModal";
import React, {useState} from "react";

function PayComponent() {

    const {walletInfo, setWalletInfo} = useStore()

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
                visible && <PayModal visible={visible} setVisible={setVisible}/>
            }
            {
                <button onClick={handlePay}
                        data-w-id="fe515213-ada7-58ca-3984-dc6eeb4ce466"
                        className="button w-button"
                        style={{width: "unset", paddingLeft: "30px", paddingRight: "30px"}}
                >
                    Pay
                </button>
            }
        </div>
    );
}

export default PayComponent;
