import {pay} from "../service/authService";
import {useStore} from "../store/store";

function PayComponent() {

    const {walletInfo, setWalletInfo} = useStore()


    async function handlePay() {
        try {
            await pay()
            setWalletInfo({address: walletInfo.address, paid: true})
        } catch (e) {

        }
    }

    return (
        <div>
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
