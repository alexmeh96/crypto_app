"use strict";(self.webpackChunkwebpack_app=self.webpackChunkwebpack_app||[]).push([[343],{70672:(e,t,s)=>{s.d(t,{AV:()=>n,ConfigCtrl:()=>m,ExplorerCtrl:()=>S,OptionsCtrl:()=>p,ThemeCtrl:()=>K,ToastCtrl:()=>J,jb:()=>_,uA:()=>c,zv:()=>i});var o=s(96828);const a=(0,o.sj)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),n={state:a,subscribe:e=>(0,o.Ld)(a,(()=>e(a))),push(e,t){e!==a.view&&(a.view=e,t&&(a.data=t),a.history.push(e))},reset(e){a.view=e,a.history=[e]},replace(e){a.history.length>1&&(a.history[a.history.length-1]=e,a.view=e)},goBack(){if(a.history.length>1){a.history.pop();const[e]=a.history.slice(-1);a.view=e}},setData(e){a.data=e}},i={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>i.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return i.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(i.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;return o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s),`${o}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!i.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;return o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s),`${o}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(i.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(i.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(i.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(i.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=n.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},r=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),l=(0,o.sj)({enabled:r,userSessionId:"",events:[],connectedWalletId:void 0}),c={state:l,subscribe:e=>(0,o.Ld)(l.events,(()=>e((0,o.CO)(l.events[l.events.length-1])))),initialize(){l.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(l.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){l.connectedWalletId=e},click(e){if(l.enabled){const t={type:"CLICK",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}},track(e){if(l.enabled){const t={type:"TRACK",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}},view(e){if(l.enabled){const t={type:"VIEW",name:e.name,userSessionId:l.userSessionId,timestamp:Date.now(),data:e};l.events.push(t)}}},d=(0,o.sj)({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),p={state:d,subscribe:e=>(0,o.Ld)(d,(()=>e(d))),setChains(e){d.chains=e},setWalletConnectUri(e){d.walletConnectUri=e},setIsCustomDesktop(e){d.isCustomDesktop=e},setIsCustomMobile(e){d.isCustomMobile=e},setIsDataLoaded(e){d.isDataLoaded=e},setIsUiLoaded(e){d.isUiLoaded=e},setIsAuth(e){d.isAuth=e}},u=(0,o.sj)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),m={state:u,subscribe:e=>(0,o.Ld)(u,(()=>e(u))),setConfig(e){var t,s;c.initialize(),p.setChains(e.chains),p.setIsAuth(Boolean(e.enableAuthMode)),p.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),p.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),i.setModalVersionInStorage(),Object.assign(u,e)}};var h=Object.defineProperty,b=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,s)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const I="https://explorer-api.walletconnect.com",y="wcm",f="js-2.6.2";async function w(e,t){const s=((e,t)=>{for(var s in t||(t={}))C.call(t,s)&&g(e,s,t[s]);if(b)for(var s of b(t))v.call(t,s)&&g(e,s,t[s]);return e})({sdkType:y,sdkVersion:f},t),o=new URL(e,I);return o.searchParams.append("projectId",m.state.projectId),Object.entries(s).forEach((([e,t])=>{t&&o.searchParams.append(e,String(t))})),(await fetch(o)).json()}const W=async e=>w("/w3m/v1/getDesktopListings",e),L=async e=>w("/w3m/v1/getMobileListings",e),O=async e=>w("/w3m/v1/getAllListings",e),E=e=>`${I}/w3m/v1/getWalletImage/${e}?projectId=${m.state.projectId}&sdkType=${y}&sdkVersion=${f}`,j=e=>`${I}/w3m/v1/getAssetImage/${e}?projectId=${m.state.projectId}&sdkType=${y}&sdkVersion=${f}`;var A=Object.defineProperty,U=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,D=(e,t,s)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const T=i.isMobile(),N=(0,o.sj)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),S={state:N,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=m.state;if("NONE"===e||"ALL"===t&&!e)return N.recomendedWallets;if(i.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await O(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),N.recomendedWallets=o}else{const{chains:e,isAuth:s}=p.state,o=e?.join(","),a=i.isArray(t),n={page:1,sdks:s?"auth_v1":void 0,entries:i.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:a?t.join(","):void 0},{listings:r}=T?await L(n):await W(n);N.recomendedWallets=Object.values(r)}return N.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))k.call(t,s)&&D(e,s,t[s]);if(U)for(var s of U(t))M.call(t,s)&&D(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=m.state,{recomendedWallets:a}=N;if("ALL"===o)return N.wallets;a.length?t.excludedIds=a.map((e=>e.id)).join(","):i.isArray(s)&&(t.excludedIds=s.join(",")),i.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),p.state.isAuth&&(t.sdks="auth_v1");const{page:n,search:r}=e,{listings:l,total:c}=T?await L(t):await W(t),d=Object.values(l),u=r?"search":"wallets";return N[u]={listings:[...N[u].listings,...d],total:c,page:n??1},{listings:d,total:c}},getWalletImageUrl:e=>E(e),getAssetImageUrl:e=>j(e),resetSearch(){N.search={listings:[],total:0,page:1}}},P=(0,o.sj)({open:!1}),_={state:P,subscribe:e=>(0,o.Ld)(P,(()=>e(P))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=p.state;if(i.removeWalletConnectDeepLink(),p.setWalletConnectUri(e?.uri),p.setChains(e?.chains),n.reset("ConnectWallet"),s&&o)P.open=!0,t();else{const e=setInterval((()=>{const s=p.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),P.open=!0,t())}),200)}})),close(){P.open=!1}};var x=Object.defineProperty,$=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,H=(e,t,s)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const B=(0,o.sj)({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),K={state:B,subscribe:e=>(0,o.Ld)(B,(()=>e(B))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(B.themeMode=t),s&&(B.themeVariables=((e,t)=>{for(var s in t||(t={}))R.call(t,s)&&H(e,s,t[s]);if($)for(var s of $(t))V.call(t,s)&&H(e,s,t[s]);return e})({},s))}},z=(0,o.sj)({open:!1,message:"",variant:"success"}),J={state:z,subscribe:e=>(0,o.Ld)(z,(()=>e(z))),openToast(e,t){z.open=!0,z.message=e,z.variant=t},closeToast(){z.open=!1}}},59343:(e,t,s)=>{s.d(t,{WalletConnectModal:()=>a});var o=s(70672);class a{constructor(e){this.openModal=o.jb.open,this.closeModal=o.jb.close,this.subscribeModal=o.jb.subscribe,this.setTheme=o.ThemeCtrl.setThemeConfig,o.ThemeCtrl.setThemeConfig(e),o.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(663).then(s.bind(s,30663));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);