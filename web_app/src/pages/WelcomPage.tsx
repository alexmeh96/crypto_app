// @ts-ignore
import logo from '../assets/logo.png';
// @ts-ignore
import banner from '../assets/wallet.png';
import ConnectButton from "../component/ConnectButton";


export function WelcomePage() {
    return (
        <div>
            <div className="box-banner w-inline-block">
                <img src={logo} loading="lazy" alt="" className="image-5"/>
                <div className="t-20">First round $10% of the total number of participants $</div>
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
                    <div className="div-block" style={{marginTop: "100px", justifyContent: 'center'}}>
                        <ConnectButton/>
                    </div>
                </section>
                <section className="sec-solution">
                    <div className="cont-1260">
                        <h2 className="h2-91 centr">
                            Adaptive <span className="color-orange">BRC-20</span> solution
                            solution
                        </h2>
                        {/*<div className="wrp-text-solution">*/}
                        {/*    <div className="max-w-475">*/}
                        {/*        <p className="p-18">Our team specializes in promoting the BRC-20 network, developing a*/}
                        {/*            fully autonomous crypto wallet and exchange.</p>*/}
                        {/*        <p className="p-18">We aim to make cryptocurrencies*/}
                        {/*            accessible and convenient for all users by offering innovative solutions and secure*/}
                        {/*            technologies</p>*/}
                        {/*    </div>*/}
                        {/*    <img src={logo} loading="lazy" alt="" className="img-mockup hide-mob"/>*/}
                        {/*    /!*<img src={banner} loading="lazy" alt="" className="img-mockup show-mob"/>*!/*/}

                        {/*    /!*<img*!/*/}
                        {/*    /!*    src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655e54283d81f1438834a59e_%D0%B0%D0%BF%201.webp"*!/*/}
                        {/*    /!*    alt="" sizes="(max-width: 479px) 100vw, (max-width: 1439px) 55vw, 792px"*!/*/}
                        {/*    /!*    srcSet="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655e54283d81f1438834a59e_%D0%B0%D0%BF%201-p-500.webp 500w, https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655e54283d81f1438834a59e_%D0%B0%D0%BF%201-p-800.webp 800w, https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655e54283d81f1438834a59e_%D0%B0%D0%BF%201-p-1080.webp 1080w, https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655e54283d81f1438834a59e_%D0%B0%D0%BF%201.webp 1584w"*!/*/}
                        {/*    /!*    className="img-mockup hide-mob"/>*!/*/}
                        {/*    /!*<img*!/*/}
                        {/*    /!*    src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655e54283d81f1438834a59e_%D0%B0%D0%BF%201.webp"*!/*/}
                        {/*    /!*    alt="" sizes="100vw"*!/*/}
                        {/*    /!*    srcSet="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655e54283d81f1438834a59e_%D0%B0%D0%BF%201-p-500.webp 500w, https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655e54283d81f1438834a59e_%D0%B0%D0%BF%201-p-800.webp 800w, https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655e54283d81f1438834a59e_%D0%B0%D0%BF%201-p-1080.webp 1080w, https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655e54283d81f1438834a59e_%D0%B0%D0%BF%201.webp 1584w"*!/*/}
                        {/*    /!*    className="img-mockup show-mob"/>*!/*/}
                        {/*</div>*/}

                        {/*<div className="max-w-475">*/}
                        <div style={{display: "flex", justifyContent: "space-between", marginTop: "50px"}}>
                            <div className="max-w-475">
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
                    <div className="cont-1260 horiz">
                        <div className="max-w-535" style={{marginTop: "40px"}}>
                            <h2 className="h2-91">Associated projects on the BRC-20 network</h2>
                            <div className="box-img show-mob" style={{padding: '0'}}>
                                <img src={banner} loading="lazy" alt="" className="image-4" sizes="100vw"
                                     style={{minHeight: "unset"}}/>

                                {/*<img src={logo} loading="lazy" alt="" className="image-4" sizes="100vw"*/}
                                {/*     style={{minHeight: "unset"}}/>*/}

                                {/*<img*/}
                                {/*    src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8c5649d2df1c692800c_Rectangle%202035.webp"*/}
                                {/*    loading="lazy" sizes="100vw"*/}
                                {/*    srcSet="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8c5649d2df1c692800c_Rectangle%202035-p-500.webp 500w, https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8c5649d2df1c692800c_Rectangle%202035-p-800.webp 800w, https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8c5649d2df1c692800c_Rectangle%202035.webp 958w"*/}
                                {/*    alt="" className="image-4"/>*/}
                                {/*<img*/}
                                {/*    src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8fd94aec99d99cfba79_6.svg"*/}
                                {/*    loading="lazy" alt="" className="img-corner-bringing"/>*/}
                                {/*<img*/}
                                {/*    src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8fd94aec99d99cfba79_6.svg"*/}
                                {/*    loading="lazy" alt="" className="img-corner-bringing _2"/>*/}
                            </div>
                            <div className="max-w-480">
                                <p className="p-18">Token holders of DAPT will have a unique opportunity to participate
                                    in private rounds and airdrops of other projects.</p>
                                {/*<p className="p-18">Stake to participate in new Adapt launches and receive fees from*/}
                                {/*    across the Adapt.com product suite</p>*/}
                            </div>
                        </div>
                        <div className="box-img hide-mob"
                             style={{marginRight: '-50px', marginTop: '20px', padding: 0, maxWidth: "unset"}}>
                            <img src={banner} loading="lazy" alt="" className="image-4"
                                 sizes="(max-width: 479px) 100vw, (max-width: 1439px) 33vw, 479px"/>

                            {/*<img src={logo} loading="lazy" alt="" className="image-4"*/}
                            {/*     sizes="(max-width: 479px) 100vw, (max-width: 1439px) 33vw, 479px"/>*/}

                            {/*<img*/}
                            {/*    src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8c5649d2df1c692800c_Rectangle%202035.webp"*/}
                            {/*    alt="" sizes="(max-width: 479px) 100vw, (max-width: 1439px) 33vw, 479px"*/}
                            {/*    srcSet="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8c5649d2df1c692800c_Rectangle%202035-p-500.webp 500w, https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8c5649d2df1c692800c_Rectangle%202035-p-800.webp 800w, https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8c5649d2df1c692800c_Rectangle%202035.webp 958w"*/}
                            {/*    className="image-4"/>*/}
                            {/*<img*/}
                            {/*    src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8fd94aec99d99cfba79_6.svg"*/}
                            {/*    loading="lazy" alt="" className="img-corner-bringing"/>*/}
                            {/*<img*/}
                            {/*    src="https://assets-global.website-files.com/655764008e28e2e8d3dd2945/655df8fd94aec99d99cfba79_6.svg"*/}
                            {/*    loading="lazy" alt="" className="img-corner-bringing _2"/>*/}
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
                                    <a href="https://twitter.com/BRC20com" target="_blank"
                                       className="text-14px footer-link">Twitter</a>
                                    <a href="https://t.me/brc_20_com" target="_blank"
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
