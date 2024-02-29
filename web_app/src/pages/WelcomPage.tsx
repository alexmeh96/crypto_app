// @ts-ignore
import logo from '../assets/logo.png';
// @ts-ignore
import banner from '../assets/banner.png';
import ConnectComponent from "../component/ConnectComponent";
import {useStore} from "../store/store";
import {useEffect, useState} from "react";
import {getInfo, signOut} from "../service/authService";
import {useAccount, useDisconnect} from "wagmi";
import PayComponent from "../component/PayComponent";


export interface WalletInfo {
    address: string;
    paid: boolean;
}

export function WelcomePage() {

    const {walletInfo, setWalletInfo} = useStore()

    const [load, setLoad] = useState(true)
    const {address, isConnected} = useAccount()
    const { disconnect } = useDisconnect()

    async function handleStart() {
        if (isConnected && address) {
            try {
                const data = await getInfo()
                setWalletInfo(data)
            } catch (e) {

            } finally {
                setLoad(false)
            }
        } else {
            setLoad(false)
        }
    }

    async function handleLogout() {
        try {
            await signOut()
            disconnect()
            setWalletInfo(null)
        } catch (e) {

        }
    }

    useEffect(() => {
        handleStart()
    }, []);

    return (
        <div>
            <div className="box-banner w-inline-block">
                <img src={logo} loading="lazy" alt="" className="image-5"/>
                <div className="t-20">First round $10% of the total number of participants $</div>

                {
                    walletInfo && !load &&
                    <div style={{justifyContent: 'right'}}>
                        <button onClick={handleLogout}
                                data-w-id="fe515213-ada7-58ca-3984-dc6eeb4ce466"
                                className="button w-button"
                                style={{width: "unset", paddingLeft: "30px", paddingRight: "30px"}}
                        >
                            logout
                        </button>
                    </div>
                }

            </div>

            <div className="wrp-line">
                <section className="sec-main">
                    <div className="cont-1248-copy centr">
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                            <img src={logo} loading="lazy" style={{maxWidth: "200px"}} alt=""/>
                            <h1 className="h1-186">
                                <span className="text-span">Adaptive</span>
                            </h1>
                        </div>
                    </div>
                    {/*{*/}
                    {/*    load && <div>load...</div>*/}
                    {/*}*/}
                    {
                        !walletInfo && !load &&
                        <div className="div-block" style={{marginTop: "100px", justifyContent: 'center'}}>
                            <ConnectComponent/>
                        </div>
                    }
                    {
                        walletInfo && !load &&
                        <div className="div-block" style={{marginTop: "100px", justifyContent: 'center'}}>
                            <PayComponent/>
                        </div>
                    }
                </section>
                <section className="sec-solution">
                    <div className="cont-1260">
                        <h2 className="h2-91 centr">
                            Adaptive <span className="color-orange">BRC-20</span> solution
                            solution
                        </h2>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "50px",
                            flexWrap: "wrap"
                        }}>
                            <div className="max-w-475" style={{marginBottom: "20px"}}>
                                <p style={{color: "white"}} className="p-18">Our team specializes in promoting
                                    the BRC-20 network, developing a
                                    fully autonomous crypto wallet and exchange.</p>
                            </div>

                            <div className="max-w-475">
                                <p style={{color: "orange"}} className="p-18">We aim to make cryptocurrencies
                                    accessible and convenient for all users by offering innovative solutions and secure
                                    technologies</p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="sec-bridging">
                    <div className="cont-1260 horiz" style={{marginTop: "20px"}}>
                        <div className="max-w-535" style={{marginTop: "40px"}}>
                            <h2 className="h2-91">Associated projects on the BRC-20 network</h2>
                            <div className="box-img show-mob" style={{padding: '0'}}>
                                <img src={banner} loading="lazy" alt="" className="image-4" sizes="100vw"
                                     style={{minHeight: "unset"}}/>
                            </div>
                            <div className="max-w-480">
                                <p className="p-18">Token holders of DAPT will have a unique opportunity to participate
                                    in private rounds and airdrops of other projects.</p>
                            </div>
                        </div>
                        <div className="box-img hide-mob"
                             style={{marginRight: '-50px', marginTop: '20px', padding: 0, maxWidth: "unset"}}>
                            <img src={banner} loading="lazy" alt="" className="image-4"
                                 sizes="(max-width: 479px) 100vw, (max-width: 1439px) 33vw, 479px"/>
                        </div>
                    </div>
                </section>
                <div className="bg-img">
                </div>
            </div>
            <section className="section footer-section">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-left">
                            <div>
                                <img style={{width: "43px"}} src={logo} loading="lazy" alt=""
                                     className="image-contain"/>
                            </div>
                            <div className="text-14px footer-text hide-mob">
                                Copyright © Adapt.com.<br/>All rights reserved.
                            </div>
                        </div>
                        <div className="footer-menu">
                            <div className="footer-menu-col">
                                <div className="text-16px footer-title">Socials</div>
                                <div className="footer-links">
                                    <a href="https://twitter.com/adaptivebrc20" target="_blank"
                                       className="text-14px footer-link">Twitter</a>
                                    <a href="https://t.me/adaptivebrc20" target="_blank"
                                       className="text-14px footer-link">Telegram</a>
                                </div>
                            </div>
                        </div>
                        <div className="text-14px footer-text show-mob">
                            Copyright © Adapt.com.<br/>All rights reserved.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
