"use strict";(self.webpackChunkwebpack_app=self.webpackChunkwebpack_app||[]).push([[770],{9770:(e,a,t)=>{t.d(a,{offchainLookup:()=>g,offchainLookupSignature:()=>y});var r=t(3340),s=t(6070),n=t(2027),o=t(8673);class c extends n.G{constructor({callbackSelector:e,cause:a,data:t,extraData:r,sender:s,urls:n}){super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],a.metaMessages?.length?"":[],"Offchain Gateway Call:",n&&["  Gateway URL(s):",...n.map((e=>`    ${(0,o.Gr)(e)}`))],`  Sender: ${s}`,`  Data: ${t}`,`  Callback selector: ${e}`,`  Extra data: ${r}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class d extends n.G{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,o.Gr)(a)}`,`Response: ${(0,s.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class l extends n.G{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var u=t(8863),i=t(6899),f=t(5444),p=t(6087),b=t(9321),h=t(7040),w=t(5102);const y="0x556f1830",m={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function g(e,{blockNumber:a,blockTag:t,data:n,to:o}){const{args:y}=(0,i.p)({data:n,abi:[m]}),[g,k,O,x,G]=y;try{if(!function(e,a){if(!(0,b.U)(e))throw new p.b({address:e});if(!(0,b.U)(a))throw new p.b({address:a});return e.toLowerCase()===a.toLowerCase()}(o,g))throw new l({sender:g,to:o});const n=await async function({data:e,sender:a,urls:t}){let r=new Error("An unknown error occurred.");for(let n=0;n<t.length;n++){const o=t[n],c=o.includes("{data}")?"GET":"POST",l="POST"===c?{data:e,sender:a}:void 0;try{const t=await fetch(o.replace("{sender}",a).replace("{data}",e),{body:JSON.stringify(l),method:c});let n;if(n=t.headers.get("Content-Type")?.startsWith("application/json")?(await t.json()).data:await t.text(),!t.ok){r=new u.Gg({body:l,details:n?.error?(0,s.P)(n.error):t.statusText,headers:t.headers,status:t.status,url:o});continue}if(!(0,w.v)(n)){r=new d({result:n,url:o});continue}return n}catch(e){r=new u.Gg({body:l,details:e.message,url:o})}}throw r}({data:O,sender:g,urls:k}),{data:c}=await(0,r.RE)(e,{blockNumber:a,blockTag:t,data:(0,h.zo)([x,(0,f.E)([{type:"bytes"},{type:"bytes"}],[n,G])]),to:o});return c}catch(e){throw new c({callbackSelector:x,cause:e,data:n,extraData:G,sender:g,urls:k})}}}}]);