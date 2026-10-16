const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/App-DwxBaxNN.js","assets/mui-4wRy_xzn.js","assets/campaignTransfer-Bap75fqK.js","assets/firebase-Cg8zSBzx.js","assets/LoginScreen-DVWOE8uQ.js","assets/InvitePreview-BNMY0cGR.js","assets/Lobby-BBzEj__7.js","assets/SystemEditor-FJCzZFtX.js","assets/AccountDialog-Dm51S3az.js","assets/OnlineTable-CCsrdTT3.js","assets/StreamEntry-DhLWC_MQ.js","assets/PublicPage-Cp7Tyz13.js"])))=>i.map(i=>d[i]);
var un=Object.defineProperty;var fn=(e,t,a)=>t in e?un(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var er=(e,t,a)=>fn(e,typeof t!="symbol"?t+"":t,a);import{r as mn,a as O,j as u,R as Q,c as ya,D as gn,b as bn,I as hn,d as xn,B as $e}from"./mui-4wRy_xzn.js";import{i as vn,g as yn,a as wn,p as Sn,b as kn,c as An,d as L,e as m,f as $,q as j,w as P,h as D,j as U,l as J,k as h,o as z,u as ee,m as wa,n as K,r as En,T as Sa,s as I,t as Br,v as b,x as Mn,y as Tn,z as jn,F as zn,A as In,B as Ur,C as zt,D as ka,E as _n,G as Cn,H as Nn,I as Rn,J as $n,K as On}from"./firebase-Cg8zSBzx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const Pn="modulepreload",Ln=function(e){return"/nighttablesite/"+e},tr={},Se=function(t,a,r){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(a.map(c=>{if(c=Ln(c),c in tr)return;tr[c]=!0;const d=c.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Pn,d||(g.as="script"),g.crossOrigin="",g.href=c,s&&g.setAttribute("nonce",s),document.head.appendChild(g),d)return new Promise((v,A)=>{g.addEventListener("load",v),g.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})};var aa={},ar=mn;aa.createRoot=ar.createRoot,aa.hydrateRoot=ar.hydrateRoot;const Dn={VITE_FIREBASE_API_KEY:"AIzaSyAojCR46U1f6Bivq7ogNUkQMReQZ8RPpmI",VITE_FIREBASE_APP_ID:"1:839551252957:web:f9a1f161e39ab7ebb85e34",VITE_FIREBASE_AUTH_DOMAIN:"nighttable-5621b.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-1Z4XL9CFYE",VITE_FIREBASE_MESSAGING_SENDER_ID:"839551252957",VITE_FIREBASE_PROJECT_ID:"nighttable-5621b",VITE_FIREBASE_STORAGE_BUCKET:"nighttable-5621b.firebasestorage.app",VITE_USE_FIREBASE_EMULATORS:"false"},xe=Dn,Fn=xe.VITE_USE_FIREBASE_EMULATORS==="true",gt={apiKey:xe.VITE_FIREBASE_API_KEY,authDomain:xe.VITE_FIREBASE_AUTH_DOMAIN,projectId:xe.VITE_FIREBASE_PROJECT_ID,storageBucket:xe.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:xe.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:xe.VITE_FIREBASE_APP_ID,measurementId:xe.VITE_FIREBASE_MEASUREMENT_ID},Bn=!!(gt.apiKey&&gt.projectId&&gt.appId),Un=gt,bt=Bn||Fn,Oe=bt?vn(Un):null,N=Oe?yn(Oe):null,l=Oe?wn(Oe,{localCache:Sn({tabManager:An()})}):null,Gn="southamerica-east1";Oe&&kn(Oe,Gn);const qn={message:"mensagem no chat",move:"movimento de token",state:"estado da mesa"},rr=()=>typeof performance<"u"?performance.now():Date.now();function Vn(){return{open:null,samples:{message:[],move:[],state:[]},failures:0}}let It=Vn();function Ep({sincePageLoad:e,waitingForData:t=null},a=It){return a.open||(a.open={sincePageLoad:Math.round(e),waitingForData:t===null?null:Math.round(t)}),a}function Wn(e,t,a=It){return a.samples[e]&&(a.samples[e]=[...a.samples[e],Math.round(t)].slice(-100)),a}function Aa(e,t,a=It){const r=rr();return Promise.resolve(t).then(o=>(Wn(e,rr()-r,a),o),o=>{throw a.failures+=1,o})}function or(e,t){return e.length?e[Math.min(e.length-1,Math.ceil(t*e.length)-1)]:null}function Yn(e=[]){if(!e.length)return{count:0,median:null,p95:null,max:null};const t=[...e].sort((a,r)=>a-r);return{count:t.length,median:or(t,.5),p95:or(t,.95),max:t[t.length-1]}}const ut=e=>e==null?"—":e>=1e3?`${(e/1e3).toFixed(1).replace(".",",")} s`:`${e} ms`;function Vt(e=It){const t=[];e.open&&t.push(`Abrir a mesa: ${ut(e.open.sincePageLoad)} desde o carregamento da página${e.open.waitingForData!==null?` (${ut(e.open.waitingForData)} esperando os dados)`:""}`);for(const[a,r]of Object.entries(qn)){const{count:o,median:n,p95:i}=Yn(e.samples[a]);o&&t.push(`Gravar ${r}: mediana ${ut(n)}, 95% em até ${ut(i)} (${o} amostra${o===1?"":"s"})`)}return e.failures&&t.push(`Gravações que falharam: ${e.failures}`),t}const Gr={map:{maxSize:8192,maxBytes:26e5,qualities:[.92,.86,.8,.72]},localMap:{maxSize:8192,maxBytes:14e5,qualities:[.92,.86,.8,.72]},portrait:{maxSize:480,maxBytes:9e4},avatar:{maxSize:160,maxBytes:25e3,square:!0},thumb:{maxSize:64,maxBytes:6e3}},Hn=9e3;function Kn(e){return typeof e=="string"&&e.startsWith("data:image/")&&e.length<=Hn}const Jn=25*1024*1024,Xn=9e5;function Ea(e){const t=e.slice(e.indexOf(",")+1),a=t.endsWith("==")?2:t.endsWith("=")?1:0;return Math.floor(t.length*3/4)-a}function Ma(e,t=Xn){const a=[];for(let r=0;r<e.length;r+=t)a.push(e.slice(r,r+t));return a}function Ta(e){return[...e].sort((t,a)=>t.index-a.index).map(t=>t.data).join("")}function Mp(e){return e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1).replace(".",",")} MB`}function kt(e){return e?String(e.type).startsWith("image/")?e.size>Jn?"Imagem grande demais: o limite é 25 MB.":null:"Escolha um arquivo de imagem (JPG, PNG ou WebP).":"Nenhum arquivo escolhido."}function ja(e){return new Promise((t,a)=>{const r=URL.createObjectURL(e),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),t(o)},o.onerror=()=>{URL.revokeObjectURL(r),a(new Error("Não foi possível ler esta imagem."))},o.src=r})}let Wt;function nr(){return Wt===void 0&&(Wt=document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp")),Wt?"image/webp":"image/jpeg"}function qr(e,t,a,r=!1){const o=document.createElement("canvas"),n=o.getContext("2d"),i=e.naturalWidth||e.width,s=e.naturalHeight||e.height;if(a){const d=Math.min(i,s),p=Math.min(t,d);return o.width=p,o.height=p,n.drawImage(e,(i-d)/2,(s-d)/2,d,d,0,0,p,p),o}const c=Math.min(1,t/Math.max(i,s));return o.width=Math.max(1,Math.round(i*c)),o.height=Math.max(1,Math.round(s*c)),r||(n.fillStyle="#121419",n.fillRect(0,0,o.width,o.height)),n.drawImage(e,0,0,o.width,o.height),o}async function Tp(e,{maxSize:t,maxBytes:a}=Gr.thumb){const r=await new Promise((n,i)=>{const s=new Image;s.onload=()=>n(s),s.onerror=()=>i(new Error("Não foi possível ler esta imagem.")),s.src=e}),o=qr(r,t,!1);for(const n of[.7,.55,.4]){const i=o.toDataURL("image/jpeg",n);if(Ea(i)<=a)return i}return null}async function jp(e){const t=kt(e);if(t)throw new Error(t);return ja(e)}function Zn(e){return new Promise((t,a)=>{const r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>a(new Error("Não foi possível ler este arquivo.")),r.readAsDataURL(e)})}async function Qn(e,{maxSize:t,maxBytes:a,square:r=!1,transparent:o=!1,qualities:n=[.86,.76,.66,.56,.46]}){let i=e;if(typeof Blob<"u"&&e instanceof Blob){const d=kt(e);if(d)throw new Error(d);i=await ja(e)}else if(!e||typeof e!="object"||!("width"in e)){const d=kt(e);if(d)throw new Error(d)}const s=o&&nr()!=="image/webp"?"image/png":nr();let c=t;for(let d=0;d<6;d+=1){const p=qr(i,c,r,o);for(const g of n){const v=p.toDataURL(s,g),A=Ea(v);if(A<=a)return{dataUrl:v,bytes:A,width:p.width,height:p.height}}c=Math.round(Math.min(c,Math.max(p.width,p.height))*.8)}throw new Error("Não foi possível reduzir esta imagem o suficiente. Tente uma menor.")}const ei=["image/jpeg","image/png","image/webp"];async function zp(e,t=Gr.map){const a=kt(e);if(a)throw new Error(a);const r=await ja(e),o=r.naturalWidth||r.width,n=r.naturalHeight||r.height;if(ei.includes(e.type)&&e.size<=t.maxBytes&&Math.max(o,n)<=t.maxSize){const i=await Zn(e);return{dataUrl:i,bytes:Ea(i),width:o,height:n}}return Qn(r,t)}const ti=1e4,ai=20;function ri(e,t,{windowMs:a=ti,max:r=ai}={}){return!e||!Number.isFinite(e.windowStart)?e?"reset":"create":t-e.windowStart>=a?"reset":e.count>=r?"blocked":"increment"}const oi="Muitas mensagens em pouco tempo. Espere alguns segundos.",Pe=3,ni=["weapons","armor","inventory","abilities","macros","conditions"];function ii(e){if(!e||typeof e!="object")return e;const t={...e};ni.forEach(r=>{Array.isArray(t[r])||(t[r]=[])}),t.inventory=t.inventory.filter(r=>r&&String(r.name||"").trim()).map(r=>({...r,quantity:Math.max(1,Math.round(Number(r.quantity)||1)),weight:Math.max(0,Number(r.weight)||0)}));const a=Math.round(Number(t.coins));return t.coins=Number.isFinite(a)&&a>0?a:0,typeof t.condition!="string"&&(t.condition=""),t}const si={chest:"chest",door:"door"};function ci(e){return!e||typeof e!="object"||e.sprite?e:{...e,sprite:si[e.kind]||"object"}}function li(e){return!e||typeof e!="object"||!(e.door||e.barrier)||typeof e.open=="boolean"?e:{...e,open:!1}}function di(e){if(!e||typeof e!="object")return e;const t={...e};return Array.isArray(t.markers)&&(t.markers=t.markers.map(ci)),Array.isArray(t.walls)&&(t.walls=t.walls.map(li)),t}function Ip(e){return!e||typeof e!="object"?!1:(Number(e.schemaVersion)||1)<Pe}function pi(e){if(!e||typeof e!="object")return{};const t=Number(e.version)||1;if(t>Pe)return{...e,futureVersion:!0};let a={...e};return t<3&&(a=di(a),Array.isArray(a.sheets)&&(a.sheets=a.sheets.map(ii))),{...a,version:Pe}}function _p(e){if(!e||typeof e!="object")return{error:"O arquivo não é um backup do NightTable."};const t=Number(e.version);return!Number.isInteger(t)||t<2?{error:"Backup sem versão: exporte de novo pela mesa."}:t>Pe?{error:`Backup feito numa versão mais nova do NightTable (v${t}). Atualize o app.`}:!e.scene||!Array.isArray(e.sheets)||e.sheets.length===0||!Array.isArray(e.tokens)||!Array.isArray(e.markers)?{error:"Backup incompleto: faltam cena, fichas, tokens ou objetos."}:{backup:pi(e)}}const ui=[{days:0,label:"Sempre"},{days:365,label:"1 ano"},{days:90,label:"90 dias"},{days:30,label:"30 dias"}],fi=24*36e5;function mi(e){const t=Number(e);return ui.some(a=>a.days===t)?t:0}function Cp(e,t=Date.now()){const a=mi(e);return a?t-a*fi:null}function gi(e=[]){return{deleteTables:e.filter(t=>t.role==="gm").map(t=>t.tableId),leaveTables:e.filter(t=>t.role!=="gm").map(t=>t.tableId)}}const bi=[{days:0,label:"Sem validade"},{days:1,label:"1 dia"},{days:7,label:"7 dias"},{days:30,label:"30 dias"}],hi=24*36e5;function Vr(e,t=Date.now()){const a=Number(e);return bi.some(r=>r.days===a&&a>0)?t+a*hi:null}const Wr=e=>{var t;return typeof e=="number"?e:((t=e==null?void 0:e.toMillis)==null?void 0:t.call(e))??null};function za(e,t=Date.now()){const a=Wr(e);return a!==null&&t>=a}function Np(e,t=Date.now()){const a=Wr(e);return a===null?"sem validade":t>=a?"vencido":`vale até ${new Date(a).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}`}function Le(e=(a=>(a=globalThis.location)==null?void 0:a.origin)()||"",t="/nighttablesite/"){return`${e}${t.endsWith("/")?t:`${t}/`}`}function Rp(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Le(t,a)}?convite=${encodeURIComponent(e)}`}function $p(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Le(t,a)}?transmissao=${encodeURIComponent(e)}`}function xi(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{return(new URLSearchParams(e).get("transmissao")||"").trim().toUpperCase().slice(0,24)||null}catch{return null}}const Yr={weapon:{label:"Arma",limit:null},armor:{label:"Armadura",limit:1},gear:{label:"Outro equipável",limit:null}},vi=12,pe=(e,t)=>Array.isArray(e==null?void 0:e[t])?e[t]:[],ft=(e,t,a)=>Math.max(t,Math.min(a,Math.round(Number(e)||0)));function yi(e){const t=Math.round(Number(e==null?void 0:e.weapon));return{weapon:Number.isFinite(t)&&t>=1?Math.min(vi,t):null}}function Op(e){return{spend:(e==null?void 0:e.spend)!==!1,jamOnFumble:!!(e!=null&&e.jamOnFumble)}}const wi=(e,t)=>e==="weapon"?yi(t).weapon:Yr[e].limit,Hr=e=>(e==null?void 0:e.equipped)!==!1;function Ia(e){if(!e||typeof e!="object"||!Yr[e.slot])return null;if(e.slot==="weapon"){const t=e.weapon||{},a=String(t.critical||"").trim().slice(0,12),r=t.ranged&&Number(t.dc)?ft(t.dc,1,60):0,o=ft(t.magazine,0,200),n=String(t.ammo||"").trim().slice(0,40);return{slot:"weapon",weapon:{attribute:String(t.attribute||"").trim().toUpperCase().slice(0,12),bonus:ft(t.bonus,-20,30),damage:String(t.damage||"1d4").trim().slice(0,30),...a?{critical:a}:{},...t.ranged?{ranged:!0}:{},...r?{dc:r}:{},...o?{magazine:o,...n?{ammo:n}:{},...t.ammoOff?{ammoOff:!0}:{}}:{}}}}return e.slot==="armor"?{slot:"armor",defense:ft(e.defense,0,20)}:{slot:"gear"}}const _a=e=>{var t;return((t=Ia(e==null?void 0:e.equip))==null?void 0:t.slot)||null},Si=e=>!_a(e)||!!e.equipped;function Ca(e,t){return pe(e,"inventory").filter(a=>a.equipped&&_a(a)===t)}function ki(e,t){const a=Ca(e,t).map(r=>({id:r.id,name:r.name}));return t==="armor"?[...pe(e,"armor").filter(r=>r.equipped).map(r=>({id:r.id,name:r.name})),...a]:t==="weapon"?[...pe(e,"weapons").filter(Hr).map(r=>({id:r.id,name:r.name})),...a]:a}function _t(e,t,a,r){const o=wi(t,r);if(!o)return null;const n=ki(e,t).filter(s=>s.id!==a);if(n.length<o)return null;const i=n.map(s=>s.name).join(", ");return t==="armor"?`Só dá para vestir uma armadura por vez: tire ${i} primeiro.`:o===1?`Nesta mesa só dá para ter 1 arma equipada (${i}): desequipe primeiro.`:`Nesta mesa só dá para ter ${o} armas equipadas (${i}): desequipe uma primeiro.`}const Pp=(e,t)=>!_t(e,"weapon",null,t);function Lp(e,t,a){const r=pe(e,"inventory").find(i=>i.id===t);if(!r)return{error:"Item não encontrado."};const o=_a(r);if(!o)return{error:`${r.name} não é equipável.`};if(!r.equipped){const i=_t(e,o,r.id,a);if(i)return{error:i}}const n=!r.equipped;return{sheet:{...e,inventory:pe(e,"inventory").map(i=>i.id===t?{...i,equipped:n}:i)},equipped:n,item:r}}function Dp(e,t){const a=pe(e,"armor").find(r=>r.id===t);if(!a)return{error:"Armadura não encontrada."};if(!a.equipped){const r=_t(e,"armor",a.id);if(r)return{error:r}}return{sheet:{...e,armor:pe(e,"armor").map(r=>r.id===t?{...r,equipped:!r.equipped}:r)},equipped:!a.equipped}}function Fp(e,t,a){const r=pe(e,"weapons").find(n=>n.id===t);if(!r)return{error:"Arma não encontrada."};const o=!Hr(r);if(o){const n=_t(e,"weapon",r.id,a);if(n)return{error:n}}return{sheet:{...e,weapons:pe(e,"weapons").map(n=>n.id===t?{...n,equipped:o}:n)},equipped:o,weapon:r}}function Bp(e){return Ca(e,"weapon").map(t=>{const a=Ia(t.equip).weapon,r=a.magazine?{loaded:t.loaded??a.magazine,...t.jammed?{jammed:!0}:{}}:{};return{id:t.id,name:t.name,...a,...r,fromInventory:!0}})}function Up(e){return Ca(e,"armor").reduce((t,a)=>t+(Ia(a.equip).defense||0),0)}const Ai=[{id:"reforcada",name:"Reforçada",defense:2,summary:"+2 na Defesa; +1 espaço"},{id:"sobMedida",name:"Sob medida",skills:{Reflexos:2},summary:"+2 em Reflexos"},{id:"blindada",name:"Blindada",summary:"resistência a dano maior; +1 espaço"},{id:"antibombas",name:"Antibombas",summary:"+5 na resistência contra efeitos de área (aplique na hora)"},{id:"discreta",name:"Discreta",summary:"mais fácil de esconder; −1 espaço"}],Ei=[{id:"aprimorado",name:"Aprimorado",bonusTo:5,summary:"o bônus na perícia passa a +5"},{id:"funcaoAdicional",name:"Função adicional",extra:2,summary:"+2 numa segunda perícia"},{id:"instrumental",name:"Instrumental",summary:"também serve de kit de perícia"},{id:"discreto",name:"Discreto",summary:"mais fácil de esconder; −1 espaço"}],Kr=e=>Object.fromEntries(e.map(t=>[t.id,t])),Jr=Kr(Ai),Xr=Kr(Ei),Mi=2,ir=(e,t)=>Array.isArray(e==null?void 0:e[t])?e[t]:[],Na=(e,t)=>(Array.isArray(e==null?void 0:e.mods)?e.mods:[]).map(a=>t[a]).filter(Boolean);function Gp(e){return(Number(e==null?void 0:e.defense)||0)+Na(e,Jr).reduce((t,a)=>t+(a.defense||0),0)}function Ti(e){if(!e||typeof e!="object")return null;const t=String(e.skill||"").trim().slice(0,40),a=(Array.isArray(e.mods)?e.mods:[]).filter(n=>Xr[n]),r=String(e.extraSkill||"").trim().slice(0,40),o=Math.max(0,Math.min(20,Math.round(Number(e.bonus??Mi)||0)));return{skill:t,bonus:o,mods:[...new Set(a)],...r?{extraSkill:r}:{}}}function ji(e){const t=Ti(e==null?void 0:e.gear);if(!t)return{};const a=Na(t,Xr),r={},o=(i,s)=>{i&&s&&(r[i]=Math.max(r[i]||0,s))},n=a.reduce((i,s)=>Math.max(i,s.bonusTo||0),0);return o(t.skill,Math.max(t.bonus,n)),a.some(i=>i.extra)&&o(t.extraSkill,a.find(i=>i.extra).extra),r}function qp(e,t){if(!t)return{bonus:0,sources:[]};const a=[];for(const r of ir(e,"armor").filter(o=>o.equipped)){const o=Na(r,Jr).reduce((n,i)=>{var s;return n+(((s=i.skills)==null?void 0:s[t])||0)},0);o&&a.push({name:r.name,bonus:o})}for(const r of ir(e,"inventory").filter(Si)){const o=ji(r)[t]||0;o&&a.push({name:r.name,bonus:o})}return{bonus:a.reduce((r,o)=>r+o.bonus,0),sources:a}}const sr={life:"maxLife",effort:"maxEffort",coins:null,xp:null},zi=new Set(["id","updatedAt","history"]),Ii=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function ra(e,t){return[...new Set([...Object.keys(e||{}),...Object.keys(t||{})])].filter(r=>!zi.has(r)&&!Ii(e==null?void 0:e[r],t==null?void 0:t[r]))}const cr=e=>`${e==null?void 0:e.at}|${e==null?void 0:e.by}|${JSON.stringify(e==null?void 0:e.changes)}`;function _i(e,t,a){if(!a)return t;const r={...a};ra(e,t).forEach(i=>{if(!(i in sr&&Number.isFinite(Number(e==null?void 0:e[i]))&&Number.isFinite(Number(t==null?void 0:t[i]))&&Number.isFinite(Number(a[i])))){(t==null?void 0:t[i])===void 0?delete r[i]:r[i]=t[i];return}const c=Number(t[i])-Number(e[i]),d=sr[i],p=d?Number(ra(e,t).includes(d)?t[d]:a[d]):1/0;r[i]=Math.max(0,Math.min(Number.isFinite(p)?p:1/0,Number(a[i])+c))});const o=new Set(((e==null?void 0:e.history)||[]).map(cr)),n=((t==null?void 0:t.history)||[]).filter(i=>!o.has(cr(i)));return n.length&&(r.history=[...a.history||[],...n].slice(-30)),r}const Ci={map:{label:"Mapa",plural:"Mapas"},sheet:{label:"Ficha",plural:"Fichas"},macro:{label:"Macro",plural:"Macros"}},Vp={pending:"em análise",approved:"aprovado",rejected:"recusado",hidden:"fora do ar (denúncias)"},Zr=3,Ni=80,Ri=1e3,lr=8,Wp={maxSize:1600,maxBytes:6e5},Yp={maxSize:1200,maxBytes:3e5},$i=82e4,Qr="nighttable-gallery",de=(e,t)=>String(e??"").replace(/\s+/g," ").trim().slice(0,t),dr=e=>String(e||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();function Oi(e){const t=Array.isArray(e)?e:String(e||"").split(","),a=new Set;return t.map(r=>de(String(r).replace(/^#/,""),24)).filter(r=>r&&!a.has(r.toLowerCase())&&a.add(r.toLowerCase())).slice(0,8)}function Pi(e,t){var a,r;if(e==="map"){const o=typeof(t==null?void 0:t.image)=="string"&&t.image.startsWith("data:image/")&&t.image.length<=$i?t.image:null;return o?{image:o,gridFit:t.gridFit&&typeof t.gridFit=="object"?t.gridFit:null}:null}if(e==="sheet"){const o=t==null?void 0:t.sheet;return!o||typeof o!="object"||!de(o.name,60)||!o.attributes?null:{sheet:o}}if(e==="macro"){const o=de((a=t==null?void 0:t.macro)==null?void 0:a.name,40),n=de((r=t==null?void 0:t.macro)==null?void 0:r.expression,80);return!o||!n?null:{macro:{name:o,expression:n,note:de(t.macro.note,140)}}}return null}function Hp({kind:e,title:t,description:a="",tags:r="",payload:o,author:n,thumb:i=null,rightsConfirmed:s},c=Date.now()){if(!Ci[e])return{error:"Escolha o tipo do conteúdo."};const d=de(t,Ni);if(!d)return{error:"Dê um título ao conteúdo."};if(!s)return{error:"Confirme que você pode compartilhar este conteúdo."};const p=Pi(e,o);return p?{item:{kind:e,title:d,description:String(a||"").trim().slice(0,Ri),tags:Oi(r),authorUid:(n==null?void 0:n.uid)||"local",authorName:de(n==null?void 0:n.name,80)||"Mestre",status:"pending",reports:0,thumb:typeof i=="string"&&i.startsWith("data:image/")&&i.length<=9e3?i:null,createdAt:c},payload:p}:{error:e==="map"?"A mesa não tem um mapa enviado para compartilhar.":"Escolha o que compartilhar."}}function Kp(e,{kind:t="all",query:a=""}={}){const r=dr(a).split(/\s+/).filter(Boolean);return e.filter(o=>t==="all"||o.kind===t).filter(o=>{const n=dr(`${o.title} ${o.description} ${o.tags.join(" ")} ${o.authorName}`);return r.every(i=>n.includes(i))}).sort((o,n)=>(n.createdAt||0)-(o.createdAt||0))}function Jp(e,t,{by:a="moderador",note:r="",now:o=Date.now()}={}){const n={approve:"approved",reject:"rejected",hide:"hidden",restore:"approved"}[t];return n?{...e,status:n,reviewedBy:de(a,80),reviewNote:de(r,300),reviewedAt:o,reports:t==="restore"||t==="approve"?0:e.reports}:e}function Xp(e,t,a){if(e.status!=="approved"||t.includes(a))return{item:e,counted:!1};const r=(e.reports||0)+1;return{item:{...e,reports:r,status:r>=Zr?"hidden":"approved"},counted:!0}}function Ct(e){try{const t=JSON.parse((e==null?void 0:e.getItem(Qr))||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function Ra(e,t){try{t.setItem(Qr,JSON.stringify(e))}catch{throw new Error("A galeria local encheu este navegador. Apague um envio antigo e tente de novo.")}}function Zp(e=globalThis.localStorage){return Ct(e)}function Qp({item:e,payload:t},a=globalThis.localStorage,r=`gal-${Date.now()}-${Math.floor(Math.random()*1e3)}`){const o=Ct(a);if(o.length>=lr)throw new Error(`A galeria local guarda até ${lr} envios. Apague algum antes.`);return Ra([{...e,id:r,payload:t,reporters:[]},...o],a),r}function eu(e,t,a=globalThis.localStorage){const r=Ct(a).map(o=>o.id===e?{...o,...t(o)}:o);Ra(r,a)}function tu(e,t=globalThis.localStorage){Ra(Ct(t).filter(a=>a.id!==e),t)}const Xe=()=>h(l,"gallery"),$a=e=>m(l,"gallery",e,"payload","data"),Li=e=>e.docs.map(t=>({id:t.id,...t.data()}));async function Di(){var t;const e=(t=N.currentUser)==null?void 0:t.uid;if(!e)return!1;try{return(await L(m(l,"moderators",e))).exists()}catch{return!1}}function Fi({uid:e,moderator:t},a,r){const o={approved:[],mine:[],review:[]},n=()=>{const c=new Map;for(const d of Object.values(o))for(const p of d)c.set(p.id,p);a([...c.values()])},i=(c,d)=>z(d,p=>{o[c]=Li(p),n()},r),s=[i("approved",j(Xe(),P("status","==","approved"),J(200)))];return e&&s.push(i("mine",j(Xe(),P("authorUid","==",e),J(50)))),t&&s.push(i("review",j(Xe(),P("status","in",["pending","hidden"]),J(100)))),()=>s.forEach(c=>c())}async function Bi({item:e,payload:t}){const a=m(Xe()),r=D(l);return r.set(a,{...e,authorUid:N.currentUser.uid}),r.set($a(a.id),t),await r.commit(),a.id}async function Ui(e){const t=await L($a(e));return t.exists()?t.data():null}function Gi(e,t){const{status:a,reviewedBy:r,reviewNote:o,reviewedAt:n,reports:i}=t,s=D(l);return s.update(m(l,"gallery",e),{status:a,reviewedBy:r,reviewNote:o,reviewedAt:n,reports:i}),s.commit()}async function qi(e,t){const a=N.currentUser.uid,r=(e.reports||0)+1,o=D(l);o.set(m(l,"gallery",e.id,"reports",a),{uid:a,reason:String(t||"").slice(0,300),at:Date.now()}),o.update(m(l,"gallery",e.id),{reports:r,status:r>=Zr?"hidden":"approved"}),await o.commit()}async function eo(e){await U($a(e)).catch(()=>{}),await U(m(l,"gallery",e))}async function to(e){const t=await $(j(Xe(),P("authorUid","==",e)));for(const a of t.docs)await eo(a.id)}const au=Object.freeze(Object.defineProperty({__proto__:null,checkModerator:Di,deleteMyGalleryItems:to,fetchGalleryPayload:Ui,moderateGalleryItem:Gi,removeGalleryItem:eo,reportGalleryItem:qi,submitToGallery:Bi,subscribeGallery:Fi},Symbol.toStringTag,{value:"Module"})),pr="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function Nt(e=6){const t=crypto.getRandomValues(new Uint32Array(e));return Array.from(t,a=>pr[a%pr.length]).join("")}function _(){if(!(N!=null&&N.currentUser))throw new Error("Usuário não autenticado.");return N.currentUser}const Y=e=>m(l,"tables",e);async function Vi({name:e,initialState:t={},campaign:a=null,avatar:r=null}){const o=_(),n=m(h(l,"tables")),i=Nt(),s=D(l);return s.set(n,{name:e,...a?{campaign:a}:{},ownerId:o.uid,inviteCode:i,state:{...t,schemaVersion:Pe},createdAt:b(),updatedAt:b()}),s.set(m(n,"members",o.uid),{uid:o.uid,role:"gm",displayName:o.displayName||o.email||"Mestre",tableName:e,...r?{avatar:r}:{},joinedAt:b()}),s.set(m(l,"invites",i),{tableId:n.id,tableName:e,gmName:String(o.displayName||"Mestre").slice(0,80),createdBy:o.uid,createdAt:b()}),await s.commit(),{tableId:n.id,inviteCode:i}}async function Wi(e){const t=String(e||"").trim().toUpperCase();if(!t)return null;const a=await L(m(l,"invites",t));if(!a.exists())return null;const{tableName:r,gmName:o,expiresAt:n}=a.data();return{code:t,tableName:r||"Mesa",gmName:o||null,expiresAt:n??null,expired:za(n)}}async function ao(e,{avatar:t=null}={}){const a=_(),r=String(e||"").trim().toUpperCase(),o=await L(m(l,"invites",r));if(!o.exists())throw new Error("Convite inválido ou expirado.");const{tableId:n,tableName:i,expiresAt:s,stream:c}=o.data();if(c||za(s))throw new Error("Convite inválido ou expirado.");const d=m(l,"tables",n,"members",a.uid),p=await L(d).catch(()=>null);return p!=null&&p.exists()?{tableId:n,tableName:i}:(await I(d,{uid:a.uid,role:"player",displayName:a.displayName||a.email||"Jogador",tableName:i,inviteCode:r,guest:!!a.isAnonymous,...t?{avatar:t}:{},joinedAt:b()}),{tableId:n,tableName:i})}async function ro(){const e=_(),a=(await $(j(En(l,"members"),P("uid","==",e.uid)))).docs.map(r=>({tableId:r.ref.parent.parent.id,...r.data()}));return Promise.all(a.map(async r=>{var i,s;const o=await L(Y(r.tableId)).catch(()=>null),n=o!=null&&o.exists()?o.data():null;return{...r,tableName:(n==null?void 0:n.name)||r.tableName,archived:!!(n!=null&&n.archived),systemName:((s=(i=n==null?void 0:n.state)==null?void 0:i.system)==null?void 0:s.name)||"",campaign:(n==null?void 0:n.campaign)||null}}))}function Yi(e,t){return ee(Y(e),{name:String(t).trim().slice(0,80),updatedAt:b()})}function Hi(e,t){return ee(Y(e),{archived:!!t,updatedAt:b()})}function Ki(e,t,a,r=()=>{}){return z(Y(e),{includeMetadataChanges:!0},o=>{r({fromCache:o.metadata.fromCache,hasPendingWrites:o.metadata.hasPendingWrites}),t(o.exists()?{id:o.id,...o.data()}:null)},a)}function Ji(e,t,a){return z(h(l,"tables",e,"members"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Xi(e,t){return ee(Y(e),{campaign:t,updatedAt:b()})}function Zi(e,t){const a=Object.fromEntries(Object.entries(t).map(([r,o])=>[`state.${r}`,o]));return Aa("state",ee(Y(e),{...a,updatedAt:b()}))}function Qi(e,{isGm:t},a,r){const o=h(l,"tables",e,"tokens"),n=t?o:j(o,P("hidden","==",!1));return z(n,i=>a(i.docs.map(s=>({id:s.id,...s.data()}))),r)}function es(e,t){const{id:a,...r}=t;return I(m(l,"tables",e,"tokens",a),{hidden:!!r.monster,ownerUid:null,...r})}function ts(e,t,a,r){return Aa("move",ee(m(l,"tables",e,"tokens",t),{x:a,y:r}))}function as(e,t,a){return ee(m(l,"tables",e,"tokens",t),{rotation:a})}function rs(e,t){return U(m(l,"tables",e,"tokens",t))}function oa({id:e,...t}){return t}async function os(e,{tokens:t,sheets:a,currentTokens:r=[],currentSheets:o=[]}){const n=D(l),i=new Set(t.map(c=>c.id)),s=new Set(a.map(c=>c.id));r.filter(c=>!i.has(c.id)).forEach(c=>n.delete(m(l,"tables",e,"tokens",c.id))),o.filter(c=>!s.has(c.id)).forEach(c=>n.delete(m(l,"tables",e,"sheets",c.id))),t.forEach(c=>n.set(m(l,"tables",e,"tokens",c.id),{ownerUid:null,sheetId:null,...oa(c),hidden:c.hidden??!!c.monster})),a.forEach(c=>n.set(m(l,"tables",e,"sheets",c.id),{ownerUid:null,...oa(c),updatedAt:b()})),await n.commit()}async function ns(e,t,a,r=[]){const o=(a==null?void 0:a.uid)||null,n=D(l);n.update(m(l,"tables",e,"sheets",t),{ownerUid:o,owner:(a==null?void 0:a.displayName)||"Mestre",updatedAt:b()}),r.filter(i=>i.sheetId===t).forEach(i=>n.update(m(l,"tables",e,"tokens",i.id),{ownerUid:o})),await n.commit()}function is(e,t,a){return z(h(l,"tables",e,"sheets"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function ss(e,t){const{id:a,...r}=t,o=a?m(l,"tables",e,"sheets",a):m(h(l,"tables",e,"sheets"));return I(o,{ownerUid:null,...r,updatedAt:b()}).then(()=>o.id)}async function cs(e,t,a){const r=m(l,"tables",e,"sheets",a.id);try{await Br(l,async o=>{const n=await o.get(r),{id:i,...s}=n.exists()?_i(t,a,{id:n.id,...n.data()}):{ownerUid:null,...a};o.set(r,{...s,updatedAt:b()})})}catch(o){if((o==null?void 0:o.code)!=="unavailable"&&(o==null?void 0:o.code)!=="failed-precondition")throw o;const n=Object.fromEntries(ra(t,a).map(i=>[i,a[i]===void 0?Mn():a[i]]));a.history&&a.history!==(t==null?void 0:t.history)&&(n.history=a.history),await ee(r,{...n,updatedAt:b()})}}function ls(e,t,a,r,o){const n=h(l,"tables",e,t,a,"versions");return z(j(n,K("at","desc"),J(20)),i=>r(i.docs.map(s=>({id:s.id,...s.data()}))),o)}async function ds(e,t,a,r,o){const{id:n,...i}=r,s=h(l,"tables",e,t,a,"versions");await I(m(s,n),i);const d=(await $(j(s,K("at","desc")))).docs.slice(o);if(d.length){const p=D(l);d.forEach(g=>p.delete(g.ref)),await p.commit()}}async function ur(e,t){const a=await $(h(l,"tables",e,t));for(const r of a.docs){const o=await $(h(r.ref,"versions"));await ue(o.docs.map(n=>i=>i.delete(n.ref)))}}async function ps(e,t){return await Promise.all(["player","gm"].map(a=>U(m(l,"tables",e,"sheets",t,"private",a)).catch(()=>{}))),U(m(l,"tables",e,"sheets",t))}function us(e,t,a,r,o){return z(m(l,"tables",e,"sheets",t,"private",a),n=>r(n.exists()&&n.data().notes||""),o)}function fs(e,t,a,r){return I(m(l,"tables",e,"sheets",t,"private",a),{notes:String(r||"").slice(0,4e3),updatedAt:b()})}const Ne=new Map;async function ms(e){var t,a;if(!Ne.has(e)){const r=await L(m(l,"tables",e,"rate",_().uid)).catch(()=>null),o=r!=null&&r.exists()?r.data():null;Ne.set(e,o?{windowStart:(a=(t=o.windowStart)==null?void 0:t.toMillis)==null?void 0:a.call(t),count:o.count}:null)}return Ne.get(e)}function gs(e,t,a){const r=_().uid,o=m(l,"tables",t,"rate",r);a==="increment"?e.update(o,{count:In(1),updatedAt:b()}):e.set(o,{uid:r,windowStart:b(),count:1,updatedAt:b()})}async function oo(e,t){const a=await ms(e),r=ri(a,Date.now()),o=r==="blocked"?"reset":r,n=async i=>{const s=D(l);t(s),gs(s,e,i),await s.commit();const c=Ne.get(e);Ne.set(e,i==="increment"&&c?{...c,count:c.count+1}:{windowStart:Date.now(),count:1})};try{await n(o)}catch(i){if((i==null?void 0:i.code)!=="permission-denied"&&(i==null?void 0:i.code)!=="not-found")throw i;Ne.delete(e);try{await n(o==="increment"?"reset":"increment")}catch(s){throw(s==null?void 0:s.code)==="permission-denied"&&r==="blocked"?Object.assign(new Error(oi),{code:"rate-limited"}):s}}}async function bs(e,{name:t,mime:a,bytes:r,dataUrl:o,visibility:n="public",to:i=null}){const s=m(h(l,"tables",e,"chatFiles"));return await I(s,{uid:_().uid,name:t,mime:String(a||"").slice(0,80),bytes:r,visibility:n,to:i,dataUrl:o,createdAt:b()}),s.id}async function hs(e,t){const a=await L(m(l,"tables",e,"chatFiles",t));if(!a.exists())throw new Error("Este anexo não está mais disponível.");return a.data().dataUrl}function xs(e,t){return U(m(l,"tables",e,"chatFiles",t))}function vs(e,{author:t,text:a,type:r="chat",visibility:o="public",roll:n=null,apply:i=null,to:s=null,toName:c=null,character:d=null,sound:p=null,celebrate:g=null,attachment:v=null,channel:A=null,item:S=null}){const y=_(),R=m(h(l,"tables",e,"messages"));return Aa("message",oo(e,T=>{g&&T.set(m(l,"tables",e,"celebration","state"),{at:b(),uid:y.uid,by:String(t||"").slice(0,80)}),T.set(R,{uid:y.uid,author:t,text:a,type:r,visibility:o,roll:n,apply:i,to:s,toName:c,...d?{character:d}:{},...p?{sound:String(p).slice(0,60)}:{},...g?{celebrate:g}:{},...v?{attachment:v}:{},...A&&A!=="mesa"?{channel:A}:{},...S?{item:S}:{},createdAt:b()})}).then(()=>R))}function ys(e,t,a,r){const o=_().uid;return ee(m(l,"tables",e,"messages",t),new zn("reactions",a),r?Tn(o):jn(o))}async function ws(e,{isGm:t,uid:a},r,o=500){const n=h(l,"tables",e,"messages"),i=r?[P("createdAt",">=",Sa.fromMillis(r))]:[],s=p=>p.docs.map(g=>({id:g.id,...g.data({serverTimestamps:"estimate"})})),c=t?[j(n,...i,K("createdAt","desc"),J(o))]:[j(n,P("visibility","==","public"),...i,K("createdAt","desc"),J(o)),j(n,P("uid","==",a),P("visibility","in",["gm","whisper"]),...i,K("createdAt","desc"),J(o)),j(n,P("to","==",a),...i,K("createdAt","desc"),J(o))],d=await Promise.all(c.map(p=>$(p)));return[...new Map(d.flatMap(s).map(p=>[p.id,p])).values()]}function Ss(e,{isGm:t,uid:a},r,o,n=80){const i=h(l,"tables",e,"messages"),s=y=>y.docs.map(R=>({id:R.id,...R.data({serverTimestamps:"estimate"})}));if(t)return z(j(i,K("createdAt","desc"),J(n)),y=>r(s(y).reverse()),o);let c=[],d=[],p=[];const g=()=>r([...new Map([...c,...d,...p].map(y=>[y.id,y])).values()].sort((y,R)=>{var T,x,G,X;return(((x=(T=y.createdAt)==null?void 0:T.toMillis)==null?void 0:x.call(T))||0)-(((X=(G=R.createdAt)==null?void 0:G.toMillis)==null?void 0:X.call(G))||0)}).slice(-n)),v=z(j(i,P("visibility","==","public"),K("createdAt","desc"),J(n)),y=>{c=s(y),g()},o),A=z(j(i,P("uid","==",a),P("visibility","in",["gm","whisper"]),K("createdAt","desc"),J(n)),y=>{d=s(y),g()},o),S=z(j(i,P("to","==",a),K("createdAt","desc"),J(n)),y=>{p=s(y),g()},o);return()=>{v(),A(),S()}}function ks(e,t,a){return z(m(l,"tables",e,"private","gm"),r=>t(r.data()||{}),a)}function As(e,t,a,r){return z(m(l,"tables",e,"playerNotes",t),o=>{var n;return a(((n=o.data())==null?void 0:n.notes)||[])},r)}function Es(e,t,a){return I(m(l,"tables",e,"playerNotes",t),{notes:a,updatedAt:b()})}function Ms(e,t){return I(m(l,"tables",e,"private","gm"),{...t,updatedAt:b()},{merge:!0})}function Ts(e,t,a){return z(h(l,"tables",e,"locks"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function js(e,t,a){return I(m(l,"tables",e,"locks",t),{...a,updatedAt:b()})}async function zs(e,t){const a=await $(j(h(l,"tables",e,"locks"),P("markerId","==",t))),r=D(l);a.forEach(o=>r.delete(o.ref)),await r.commit()}function Is(e,t,a){return I(m(l,"tables",e,"private","gm"),{lockCodes:{[t]:a},updatedAt:b()},{merge:!0})}function _s(e,t,a){return z(h(l,"tables",e,"scenes"),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function Cs(e,t){const{id:a,...r}=t;return I(m(l,"tables",e,"scenes",a),{...r,savedAt:b()})}function Ns(e,t){return U(m(l,"tables",e,"scenes",t))}async function Rs(e,{remove:t,add:a}){const r=D(l);t.forEach(o=>r.delete(m(l,"tables",e,"tokens",o.id))),a.forEach(o=>r.set(m(l,"tables",e,"tokens",o.id),{ownerUid:null,sheetId:null,...oa(o),hidden:o.hidden??!!o.monster})),await r.commit()}function $s(e,{isGm:t,uid:a},r,o){const n=h(l,"tables",e,"handouts"),i=t?n:j(n,P("audience","array-contains-any",["all",a]));return z(i,s=>r(s.docs.map(c=>({id:c.id,...c.data({serverTimestamps:"estimate"})}))),o)}function Os(e,t){const{id:a,...r}=t;return I(m(l,"tables",e,"handouts",a),{...r,createdAt:b()})}function Ps(e,t){return U(m(l,"tables",e,"handouts",t))}function Ls(e,{isGm:t},a,r){const o=h(l,"tables",e,"containers"),n=t?o:j(o,P("opened","==",!0));return z(n,i=>a(Object.fromEntries(i.docs.map(s=>[s.id,s.data()]))),r)}function Ds(e,t,{contents:a,opened:r=!1}){return I(m(l,"tables",e,"containers",t),{contents:a,opened:r},{merge:!0})}function Fs(e,t){return I(m(l,"tables",e,"containers",t),{ensured:!0},{merge:!0})}function Bs(e,t){return U(m(l,"tables",e,"containers",t))}function Us(e,t,a){return ee(m(l,"tables",e,"containers",t),{opened:!0,openedBy:String(a).slice(0,80),openedAt:b()})}function Gs(e,t,a,r){const o=m(l,"tables",e,"containers",t);return Br(l,async n=>{const i=await n.get(o),s=i.exists()?i.data().contents||[]:[],c=s.find(d=>d.id===a);if(!c)throw Object.assign(new Error("Alguém já pegou este item."),{code:"already-taken"});return n.update(o,{contents:s.filter(d=>d.id!==a),takenBy:String(r).slice(0,80)}),c})}function qs(e){const t=Object.fromEntries(Object.entries(e.context||{}).map(([a,r])=>[a,String(r??"").slice(0,80)]).slice(0,10));return wa(h(l,"errorReports"),{at:Number(e.at)||Date.now(),where:String(e.where||"").slice(0,60),message:String(e.message||"").slice(0,300),code:e.code?String(e.code).slice(0,60):null,stack:e.stack?String(e.stack).slice(0,2e3):null,context:t,createdAt:b()})}async function Vs(e,t,a=200){const r=await $(j(h(l,"tables",e,"messages"),P("createdAt","<",Sa.fromMillis(t)),K("createdAt"),J(a)));return await ue(r.docs.map(o=>n=>n.delete(o.ref))),r.size}async function no(e=()=>{}){const t=_().uid,a=gi(await ro());for(const o of a.deleteTables)e("Apagando suas mesas…"),await fo(o);for(const o of a.leaveTables)e("Saindo das mesas em que você joga…"),await U(m(l,"tables",o,"members",t)).catch(()=>{});e("Apagando sua biblioteca e seu perfil…"),await to(t).catch(()=>{});const r=await $(h(l,"users",t,"library"));return await ue(r.docs.map(o=>n=>n.delete(o.ref))),await U(m(l,"users",t)),a}function Ws(e,{actor:t,action:a,detail:r=""}){return wa(h(l,"tables",e,"audit"),{uid:_().uid,actor:String(t).slice(0,80),action:String(a).slice(0,40),detail:String(r).slice(0,200),createdAt:b()})}function Ys(e,t,a){return z(j(h(l,"tables",e,"audit"),K("createdAt","desc"),J(50)),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function Hs(e,t,a){return ee(m(l,"tables",e,"members",t),{permissions:a})}function Ks(e,t,a){return ee(m(l,"tables",e,"members",t),{muted:!!a})}async function Js(e,t){return await I(m(l,"tables",e,"bans",t.uid),{uid:t.uid,displayName:String(t.displayName||"").slice(0,80),at:b()}),uo(e,t)}function Xs(e,t){return U(m(l,"tables",e,"messages",t))}function Zs(e,t,a){return ee(m(l,"tables",e,"messages",t),{text:a,editedAt:b()})}function Qs(e,t,a){const{displayName:r,color:o,pronouns:n,avatar:i}=a;return ee(m(l,"tables",e,"members",t),{...r?{displayName:r}:{},color:o,pronouns:n,avatar:i})}function ec(e,t,a){return ee(m(l,"tables",e,"members",t),{role:a})}function tc(e,t){const a=_().uid;return z(h(l,"users",a,"library"),r=>e(r.docs.map(o=>({...o.data(),id:o.id}))),t)}function ac(e){const t=_().uid,{id:a,...r}=e;return I(m(l,"users",t,"library",a),{...r,createdAt:b()})}function rc(e){return U(m(l,"users",_().uid,"library",e))}function oc(e,t,a){return z(h(l,"tables",e,"presence"),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function nc(e,{name:t,activity:a}){const r=_().uid,o={uid:r,name:String(t||"Jogador").slice(0,80),lastSeen:b()};return a!==void 0&&Object.assign(o,{activity:a,activityAt:b()}),I(m(l,"tables",e,"presence",r),o,{merge:!0})}function ic(e,t,a){return z(j(h(l,"tables",e,"journal"),K("createdAt","desc"),J(100)),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function sc(e,{title:t,text:a,author:r}){return wa(h(l,"tables",e,"journal"),{title:t,text:a,author:r,uid:_().uid,createdAt:b()})}function cc(e,t){return U(m(l,"tables",e,"journal",t))}function lc(e,t,a){return I(m(l,"tables",e,"private","gm"),{sceneNotes:{[t]:a},updatedAt:b()},{merge:!0})}function dc(e,t,a){return z(h(l,"tables",e,"drawings"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function pc(e,t){const a=_(),{id:r,...o}=t;return I(m(l,"tables",e,"drawings",r),{...o,uid:a.uid,createdAt:b()})}function uc(e,t){return U(m(l,"tables",e,"drawings",t))}async function fc(e,t){for(let a=0;a<t.length;a+=450){const r=D(l);t.slice(a,a+450).forEach(o=>r.delete(m(l,"tables",e,"drawings",o.id))),await r.commit()}}async function ue(e,t=400){for(let a=0;a<e.length;a+=t){const r=D(l);e.slice(a,a+t).forEach(o=>o(r)),await r.commit()}}function mc(e,t,a){return z(j(h(l,"tables",e,"mapImages"),K("createdAt","desc")),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}async function gc(e,{name:t,dataUrl:a,bytes:r,width:o,height:n,thumb:i=null}){const s=m(h(l,"tables",e,"mapImages")),c=Ma(a);return await ue(c.map((d,p)=>g=>g.set(m(s,"chunks",String(p)),{index:p,data:d})),4),await I(s,{name:t,bytes:r,width:o,height:n,chunkCount:c.length,...Kn(i)?{thumb:i}:{},uid:_().uid,createdAt:b()}),s.id}async function bc(e,t){const a=await $(h(l,"tables",e,"mapImages",t,"chunks"));if(a.empty)throw new Error("Mapa não encontrado.");return Ta(a.docs.map(r=>r.data()))}async function io(e,t){const a=await $(h(l,"tables",e,"mapImages",t,"chunks")),r=D(l);a.forEach(o=>r.delete(o.ref)),r.delete(m(l,"tables",e,"mapImages",t)),await r.commit()}function hc(e,t,a){return z(j(h(l,"tables",e,"audioFiles"),K("createdAt","desc")),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}async function xc(e,{name:t,kind:a,dataUrl:r,bytes:o}){const n=m(h(l,"tables",e,"audioFiles")),i=Ma(r);return await ue(i.map((s,c)=>d=>d.set(m(n,"chunks",String(c)),{index:c,data:s})),4),await I(n,{name:t,kind:a,bytes:o,chunkCount:i.length,uid:_().uid,createdAt:b()}),n.id}async function vc(e,t){const a=await $(h(l,"tables",e,"audioFiles",t,"chunks"));if(a.empty)throw new Error("Áudio não encontrado.");return Ta(a.docs.map(r=>r.data()))}async function so(e,t){const a=await $(h(l,"tables",e,"audioFiles",t,"chunks")),r=D(l);a.forEach(o=>r.delete(o.ref)),r.delete(m(l,"tables",e,"audioFiles",t)),await r.commit()}function yc(e,t,a){return z(j(h(l,"tables",e,"campaignFiles"),K("createdAt","desc")),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}async function wc(e,{name:t,fileName:a,mime:r,bytes:o,description:n,dataUrl:i}){const s=m(h(l,"tables",e,"campaignFiles")),c=Ma(i);return await ue(c.map((d,p)=>g=>g.set(m(s,"chunks",String(p)),{index:p,data:d})),4),await I(s,{name:t,fileName:a,mime:r,bytes:o,description:n,chunkCount:c.length,uid:_().uid,createdAt:b()}),s.id}async function Sc(e,t){const a=await $(h(l,"tables",e,"campaignFiles",t,"chunks"));if(a.empty)throw new Error("Arquivo não encontrado.");return Ta(a.docs.map(r=>r.data()))}async function co(e,t){const a=await $(h(l,"tables",e,"campaignFiles",t,"chunks")),r=D(l);a.forEach(o=>r.delete(o.ref)),r.delete(m(l,"tables",e,"campaignFiles",t)),await r.commit()}function kc(e,t,a){return z(h(l,"tables",e,"sheetImages"),r=>t(Object.fromEntries(r.docs.map(o=>[o.id,o.data()]))),a)}function Ac(e,t,{portrait:a,avatar:r,animated:o=null,cutout:n=!1,frame:i=null,avatarCrop:s=null}){return I(m(l,"tables",e,"sheetImages",t),{portrait:a,avatar:r,...o?{animated:o}:{},...n?{cutout:!0}:{},...i==="whole"?{frame:i}:{},...s?{avatarCrop:s}:{},updatedAt:b()})}function Ec(e,t){return U(m(l,"tables",e,"sheetImages",t))}async function Mc(e,t=0){const a=await L(Y(e)),{inviteCode:r,name:o}=a.data();let n=null;for(let c=0;c<5&&!n;c+=1){const d=Nt();(await L(m(l,"invites",d))).exists()||(n=d)}if(!n)throw new Error("Não foi possível gerar um código. Tente de novo.");const i=D(l),s=Vr(t);return i.set(m(l,"invites",n),{tableId:e,tableName:o,gmName:String(_().displayName||"Mestre").slice(0,80),createdBy:_().uid,createdAt:b(),expiresAt:s?Sa.fromMillis(s):null}),i.update(Y(e),{inviteCode:n,inviteExpiresAt:s,updatedAt:b()}),r&&i.delete(m(l,"invites",r)),await i.commit(),n}async function Tc(e){const t=await L(Y(e)),{inviteCode:a}=t.data(),r=D(l);a&&r.delete(m(l,"invites",a)),r.update(Y(e),{inviteCode:null,inviteExpiresAt:null,updatedAt:b()}),await r.commit()}async function jc(e){const t=await L(Y(e)),{streamCode:a,name:r}=t.data(),o=Nt(16),n=D(l);return n.set(m(l,"invites",o),{tableId:e,tableName:r,gmName:String(_().displayName||"Mestre").slice(0,80),createdBy:_().uid,createdAt:b(),stream:!0}),n.update(Y(e),{streamCode:o,updatedAt:b()}),a&&n.delete(m(l,"invites",a)),await n.commit(),a&&await lo(e),o}async function zc(e){const t=await L(Y(e)),{streamCode:a}=t.data(),r=D(l);a&&r.delete(m(l,"invites",a)),r.update(Y(e),{streamCode:null,updatedAt:b()}),await r.commit(),await lo(e)}async function lo(e){const t=await $(j(h(Y(e),"members"),P("stream","==",!0)));await ue(t.docs.map(a=>r=>r.delete(a.ref)))}async function po(e){const t=_(),a=String(e||"").trim().toUpperCase(),r=await L(m(l,"invites",a));if(!r.exists()||!r.data().stream)throw new Error("Link de transmissão inválido ou revogado.");const{tableId:o,tableName:n}=r.data(),i=m(l,"tables",o,"members",t.uid),s=await L(i).catch(()=>null);return s!=null&&s.exists()?{tableId:o,tableName:n}:(await I(i,{uid:t.uid,role:"spectator",displayName:t.displayName||"Transmissão",tableName:n,inviteCode:a,guest:!!t.isAnonymous,stream:!0,joinedAt:b()}),{tableId:o,tableName:n})}async function uo(e,t){const a=Y(e),[r,o]=await Promise.all([$(j(h(a,"sheets"),P("ownerUid","==",t.uid))),$(j(h(a,"tokens"),P("ownerUid","==",t.uid)))]);return await oo(e,n=>{n.delete(m(a,"members",t.uid)),r.forEach(i=>n.update(i.ref,{ownerUid:null,owner:"Mestre",updatedAt:b()})),o.forEach(i=>n.update(i.ref,{ownerUid:null})),n.set(m(h(a,"messages")),{uid:_().uid,author:"Sistema",text:`${t.displayName||"Um jogador"} foi removido da mesa`,type:"system",visibility:"public",roll:null,apply:null,to:null,toName:null,createdAt:b()})}),{releasedSheets:r.size,releasedTokens:o.size}}async function fo(e){const t=Y(e),a=await L(t),{inviteCode:r,streamCode:o}=a.data(),n=await L(De(e));for(const p of n.exists()?n.data().pages||[]:[])await U(m(l,"publicPages",p.code)).catch(()=>{});const i=await $(h(t,"mapImages"));for(const p of i.docs)await io(e,p.id);await ur(e,"sheets"),await ur(e,"scenes");const s=await $(h(t,"audioFiles"));for(const p of s.docs)await so(e,p.id);const c=await $(h(t,"campaignFiles"));for(const p of c.docs)await co(e,p.id);for(const p of["tokens","sheets","sheetImages","messages","drawings","private","containers","celebration","bans","locks","handouts","journal","scenes","presence","rate","audit"]){const g=await $(h(t,p));await ue(g.docs.map(v=>A=>A.delete(v.ref)))}r&&await U(m(l,"invites",r)),o&&await U(m(l,"invites",o));const d=await $(h(t,"members"));await ue(d.docs.map(p=>g=>g.delete(p.ref))),await U(t)}const De=e=>m(l,"tables",e,"private","publicPages");async function Ic(e,t,a){const r=a.code||Nt(16),o=await L(De(e)),n=[{...a,code:r},...(o.exists()?o.data().pages||[]:[]).filter(s=>s.code!==r)].slice(0,10),i=D(l);return i.set(m(l,"publicPages",r),{...t,tableId:e,createdBy:_().uid,expiresAt:a.expiresAt?new Date(a.expiresAt):null,updatedAt:b()}),i.set(De(e),{pages:n,updatedAt:b()}),await i.commit(),r}async function _c(e,t){const a=await L(De(e)),r=(a.exists()?a.data().pages||[]:[]).filter(n=>n.code!==t),o=D(l);o.delete(m(l,"publicPages",t)),o.set(De(e),{pages:r,updatedAt:b()}),await o.commit()}function Cc(e,t,a){return z(De(e),r=>t(r.exists()?r.data().pages||[]:[]),a)}async function Nc(e){try{const t=await L(m(l,"publicPages",e));return t.exists()?t.data():null}catch(t){if((t==null?void 0:t.code)==="permission-denied")return null;throw t}}const ru=Object.freeze(Object.defineProperty({__proto__:null,addDrawing:pc,addJournalEntry:sc,assignSheetOwner:ns,banMember:Js,clearDrawings:fc,createStreamLink:jc,createTable:Vi,deleteAudioFile:so,deleteCampaignFile:co,deleteChatFile:xs,deleteContainer:Bs,deleteDrawing:uc,deleteHandout:Ps,deleteJournalEntry:cc,deleteLibraryEntry:rc,deleteMapImage:io,deleteMessage:Xs,deleteMyData:no,deleteSceneSnapshot:Ns,deleteSheet:ps,deleteSheetImages:Ec,deleteTable:fo,deleteToken:rs,editMessage:Zs,ensureContainer:Fs,fetchInvitePreview:Wi,fetchPublicPage:Nc,fetchSessionMessages:ws,joinTableByInvite:ao,joinTableByStreamCode:po,listMyTables:ro,loadAudioFile:vc,loadCampaignFile:Sc,loadChatFile:hs,loadMapImage:bc,logAudit:Ws,mergeSaveSheet:cs,moveToken:ts,openContainer:Us,pruneMessages:Vs,publishPublicPage:Ic,reactToMessage:ys,regenerateInvite:Mc,removeMember:uo,renameTable:Yi,replaceSceneTokens:Rs,replaceTableContent:os,reportError:qs,resetLock:zs,revokeInvite:Tc,revokePublicPage:_c,revokeStreamLink:zc,rotateToken:as,saveContainer:Ds,saveGmNotes:Ms,saveHandout:Os,saveLibraryEntry:ac,saveLockCode:Is,saveLockRecord:js,savePlayerNotes:Es,saveSceneNote:lc,saveSceneSnapshot:Cs,saveSheet:ss,saveSheetImages:Ac,saveSheetPrivate:fs,saveToken:es,saveVersion:ds,sendMessage:vs,setMemberMuted:Ks,setMemberPermissions:Hs,setMemberRole:ec,setTableArchived:Hi,subscribeAudioFiles:hc,subscribeAudit:Ys,subscribeCampaignFiles:yc,subscribeContainers:Ls,subscribeDrawings:dc,subscribeGmNotes:ks,subscribeHandouts:$s,subscribeJournal:ic,subscribeLibrary:tc,subscribeLocks:Ts,subscribeMapImages:mc,subscribeMembers:Ji,subscribeMessages:Ss,subscribePlayerNotes:As,subscribePresence:oc,subscribePublicPages:Cc,subscribeScenes:_s,subscribeSheetImages:kc,subscribeSheetPrivate:us,subscribeSheets:is,subscribeTable:Ki,subscribeTokens:Qi,subscribeVersions:ls,takeFromContainer:Gs,updateCampaign:Xi,updateMemberProfile:Qs,updatePresence:nc,updateTableState:Zi,uploadAudioFile:xc,uploadCampaignFile:wc,uploadChatFile:bs,uploadMapImage:gc},Symbol.toStringTag,{value:"Module"}));N&&(N.languageCode="pt");async function nt(e,t={}){var o;const a=m(l,"users",e.uid);if((await L(a)).exists()){await I(a,{lastLoginAt:b()},{merge:!0});return}await I(a,{displayName:t.displayName||e.displayName||((o=e.email)==null?void 0:o.split("@")[0])||"Aventureiro",email:e.email||null,photoURL:e.photoURL||null,createdAt:b(),lastLoginAt:b()})}function Rc(e){return On(N,e)}async function ou(e,t){const{user:a}=await _n(N,e,t);return await nt(a),a}async function nu({name:e,email:t,password:a}){const{user:r}=await Cn(N,t,a);return e&&await zt(r,{displayName:e}),await nt(r,{displayName:e}),r}async function iu(){const{user:e}=await Rn(N,new $n);return await nt(e),e}async function su({name:e,inviteCode:t}){var n;const a=String(e||"").trim().slice(0,40);if(!a)throw Object.assign(new Error("Informe seu nome."),{code:"guest/no-name"});if(!String(t||"").trim())throw Object.assign(new Error("Informe o código de convite."),{code:"guest/no-code"});const r=(n=N.currentUser)!=null&&n.isAnonymous?N.currentUser:null,o=r||(await Ur(N)).user;await zt(o,{displayName:a}),await nt(o,{displayName:a});try{return await ao(t)}catch(i){throw r||await o.delete().catch(()=>ka(N)),i}}async function cu(e){const t=N.currentUser,a=t||(await Ur(N)).user;t||(await zt(a,{displayName:"Transmissão"}),await nt(a,{displayName:"Transmissão"}));try{return await po(e)}catch(r){throw t||await a.delete().catch(()=>ka(N)),r}}async function lu(e){const t=N.currentUser;t&&(await no(e),e==null||e("Apagando a conta…"),await t.delete())}function du(e){return Nn(N,e)}function $c(){return ka(N)}async function Oc(e){const t=await L(m(l,"users",e));return t.exists()?t.data():null}async function Pc({displayName:e,photo:t,avatarId:a,avatarColor:r}){const o=N.currentUser;if(!o)throw new Error("Entre na sua conta para editar o perfil.");e&&e!==o.displayName&&await zt(o,{displayName:e}),await I(m(l,"users",o.uid),{displayName:e||o.displayName||null,photo:t,avatarId:a,avatarColor:r,updatedAt:b()},{merge:!0})}const Lc={"auth/invalid-email":"E-mail inválido.","auth/invalid-credential":"E-mail ou senha incorretos.","auth/user-not-found":"E-mail ou senha incorretos.","auth/wrong-password":"E-mail ou senha incorretos.","auth/email-already-in-use":"Este e-mail já está cadastrado.","auth/weak-password":"A senha precisa ter pelo menos 6 caracteres.","auth/too-many-requests":"Muitas tentativas. Aguarde um pouco e tente de novo.","auth/popup-closed-by-user":"A janela de login foi fechada antes de concluir.","auth/popup-blocked":"O navegador bloqueou a janela de login. Libere pop-ups para este site.","auth/network-request-failed":"Falha de conexão. Verifique sua internet.","auth/operation-not-allowed":"Este método de login não está ativado no Firebase.","auth/admin-restricted-operation":"A entrada sem conta não está ativada no Firebase (Authentication › Sign-in method › Anônimo).","guest/no-name":"Informe seu nome.","permission-denied":"Não foi possível entrar nesta mesa. Confira o código; se você foi bloqueado pelo Mestre, não dá para voltar.","auth/requires-recent-login":"Por segurança, saia, entre de novo e repita a exclusão.","guest/no-code":"Informe o código de convite."};function pu(e){return(e==null?void 0:e.message)==="Convite inválido ou expirado."?e.message:Lc[e==null?void 0:e.code]||"Não foi possível concluir. Tente novamente."}const Dc=["#6d52be","#2f7280","#b36154","#4d7a3f","#a0742c","#7c4b62","#3d5fa8","#8a3f8f","#4b4f5c"],uu=["ela/dela","ele/dele","elu/delu"],mo=40,Fc=24,go=4e4,Bc=/^#[0-9a-f]{6}$/i;function Oa(e){return typeof e=="string"&&Bc.test(e)}function fu(e={}){const t=String(e.displayName||"").trim().slice(0,mo),a=String(e.pronouns||"").trim().slice(0,Fc),r=typeof e.avatar=="string"&&e.avatar.startsWith("data:image/")&&e.avatar.length<=go?e.avatar:null;return{displayName:t||null,pronouns:a||null,color:Oa(e.color)?e.color.toLowerCase():null,avatar:r}}function mu(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"?":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}const Uc=[{id:"dragao",emoji:"🐉",label:"Dragão"},{id:"mago",emoji:"🧙",label:"Mago"},{id:"elfo",emoji:"🧝",label:"Elfo"},{id:"caveira",emoji:"💀",label:"Caveira"},{id:"fantasma",emoji:"👻",label:"Fantasma"},{id:"lobo",emoji:"🐺",label:"Lobo"},{id:"coruja",emoji:"🦉",label:"Coruja"},{id:"gato",emoji:"🐈‍⬛",label:"Gato preto"},{id:"espadas",emoji:"⚔️",label:"Espadas"},{id:"escudo",emoji:"🛡️",label:"Escudo"},{id:"dado",emoji:"🎲",label:"Dado"},{id:"lua",emoji:"🌙",label:"Lua"}],na=Dc;function bo(e){return Uc.find(t=>t.id===e)||null}function Gc(e,t=na[0]){const a=bo(e);if(!a)return null;const o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${Oa(t)?t:na[0]}"/><text x="32" y="43" font-size="34" text-anchor="middle">${a.emoji}</text></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(o)}`}function fr(e={}){const t=String(e.displayName||"").trim().slice(0,mo)||null,a=bo(e.avatarId)?e.avatarId:null,r=a&&Oa(e.avatarColor)?e.avatarColor.toLowerCase():null;let o=typeof e.photo=="string"&&e.photo.startsWith("data:image/")&&e.photo.length<=go?e.photo:null;return a&&(o=Gc(a,r||na[0])),{displayName:t,photo:o,avatarId:a,avatarColor:r}}function gu(e,t){return(e==null?void 0:e.photo)||(t==null?void 0:t.photoURL)||null}function bu(e,t){return(e==null?void 0:e.displayName)||(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||""}const ho=O.createContext({user:null,profile:null,loading:!1,enabled:!1,logout:async()=>{},saveProfile:async()=>{}});function qc({children:e}){const[t,a]=O.useState(null),[r,o]=O.useState(bt),[n,i]=O.useState(null);O.useEffect(()=>{if(bt)return Rc(p=>{a(p),o(!1)})},[]),O.useEffect(()=>{if(i(null),!t)return;let p=!0;return Oc(t.uid).then(g=>{p&&g&&i(fr({...g,displayName:g.displayName||t.displayName}))}).catch(()=>{}),()=>{p=!1}},[t==null?void 0:t.uid]);const s=async p=>{const g=fr(p);if(!g.displayName)throw new Error("Escolha um nome.");return await Pc(g),i(g),g},c=async()=>{t!=null&&t.isAnonymous&&!window.confirm("Você entrou sem conta. Ao sair, perde o acesso a esta mesa e precisará do convite de novo. Sair mesmo assim?")||await $c()},d=O.useMemo(()=>({user:t,profile:n,loading:r,enabled:bt,logout:c,saveProfile:s}),[t,n,r]);return u.jsx(ho.Provider,{value:d,children:e})}function Vc(){return O.useContext(ho)}const mr=50,Wc=5,Ce=[];let At={},ia=null,gr=0;function Yc(e){At={...At,...e}}function hu(e){ia=e}const mt=(e,t)=>String(e||"").slice(0,t);function Hc(e,t,a=At,r=Date.now()){const o=(e==null?void 0:e.message)||(typeof e=="string"?e:"Erro desconhecido");return{at:r,where:mt(t,60),message:mt(o,300),code:mt(e==null?void 0:e.code,60)||null,stack:mt(e==null?void 0:e.stack,2e3)||null,context:{...a}}}function sa(e,t="app"){const a=Hc(e,t);return Ce.push(a),Ce.length>mr&&Ce.splice(0,Ce.length-mr),ia&&gr<Wc&&(gr+=1,Promise.resolve().then(()=>ia(a)).catch(()=>{})),a}function br(){return[...Ce]}function xo(){return JSON.stringify({geradoEm:new Date().toISOString(),contexto:At,erros:Ce},null,2)}function Kc(e=globalThis.window){!(e!=null&&e.addEventListener)||e.__nighttableErrors||(e.__nighttableErrors=!0,e.addEventListener("error",t=>sa(t.error||t.message,"janela")),e.addEventListener("unhandledrejection",t=>sa(t.reason,"promessa")))}class Jc extends Q.Component{constructor(a){super(a);er(this,"copy",async()=>{try{await navigator.clipboard.writeText(xo()),this.setState({copied:!0})}catch{}});this.state={failed:!1,copied:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(a,r){sa(Object.assign(a||new Error("Falha na tela"),{stack:`${(a==null?void 0:a.stack)||""}
${(r==null?void 0:r.componentStack)||""}`}),"tela")}render(){if(!this.state.failed)return this.props.children;const a={padding:"9px 16px",border:0,borderRadius:9,color:"#fff",background:"var(--c-7358d0)",fontSize:13,cursor:"pointer"};return u.jsx("main",{role:"alert",style:{height:"100dvh",overflowY:"auto",display:"grid",placeItems:"center",padding:24,color:"var(--c-e7e5e2)",background:"var(--c-0a0b0f)",fontFamily:"system-ui, sans-serif"},children:u.jsxs("div",{style:{maxWidth:440,display:"grid",gap:12,textAlign:"center"},children:[u.jsx("h1",{style:{margin:0,fontSize:22},children:"Algo deu errado nesta tela"}),u.jsx("p",{style:{margin:0,color:"var(--c-a9adb6)",fontSize:14,lineHeight:1.5},children:"Seus dados da mesa estão salvos. Recarregue a página; se continuar, copie o relatório e envie para quem cuida do NightTable."}),u.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[u.jsx("button",{type:"button",style:a,onClick:()=>window.location.reload(),children:"Recarregar"}),u.jsx("button",{type:"button",style:{...a,background:"var(--c-2a2d36)"},onClick:this.copy,children:this.state.copied?"Relatório copiado":"Copiar relatório"})]})]})})}}const Xc={development:{label:"DEV",color:"#63d59a"},emulators:{label:"EMULADOR",color:"#7fe3ff"},staging:{label:"STAGING",color:"#f3c48f"},production:{label:null,color:null}};function Zc(e={}){const t=String(e.VITE_APP_ENV||"").trim().toLowerCase();return t in Xc?t:e.VITE_USE_FIREBASE_EMULATORS==="true"?"emulators":e.DEV?"development":"production"}const Qc={BASE_URL:"/nighttablesite/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyAojCR46U1f6Bivq7ogNUkQMReQZ8RPpmI",VITE_FIREBASE_APP_ID:"1:839551252957:web:f9a1f161e39ab7ebb85e34",VITE_FIREBASE_AUTH_DOMAIN:"nighttable-5621b.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-1Z4XL9CFYE",VITE_FIREBASE_MESSAGING_SENDER_ID:"839551252957",VITE_FIREBASE_PROJECT_ID:"nighttable-5621b",VITE_FIREBASE_STORAGE_BUCKET:"nighttable-5621b.firebasestorage.app",VITE_SERVER_ROLLS:"false",VITE_USE_FIREBASE_EMULATORS:"false"},el="09/10/2026";function tl(e=Qc||{}){return String(e.VITE_LEGAL_CONTACT||"").trim()||null}const Et={privacidade:{title:"Política de privacidade",intro:"Esta política explica quais dados o NightTable guarda, para quê e como você pode apagá-los. Ela segue a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018).",sections:[["Quais dados guardamos",["Conta: nome de exibição, e-mail e, se você entrar com Google, a foto do perfil. Senhas ficam só no Firebase Authentication (Google) e nunca são vistas por nós.","Convidado sem conta: o nome que você digitou e um identificador anônimo deste navegador.","Conteúdo da mesa: o que você e os outros participantes criam — mensagens do chat, rolagens, fichas, mapas, imagens, áudios, desenhos, diário, handouts e anotações.","Perfil na mesa: nome, cor, pronome e avatar que você escolher para cada mesa.","Presença: se você está conectado e o que está fazendo no momento (digitando, rolando dados), para mostrar aos outros na mesa.","Registro de auditoria da mesa: ações do Mestre (convites, bloqueios, permissões), visível só aos Mestres."]],["Para que usamos",["Só para fazer a mesa funcionar: entrar, sincronizar em tempo real, guardar o histórico da campanha e aplicar as permissões de cada papel.","Não vendemos dados, não mostramos anúncios e não fazemos perfil de comportamento."]],["Quem vê o quê",["O conteúdo de uma mesa é visível para os participantes dela, conforme o papel (Mestre, co-Mestre, jogador, espectador). Sussurros e handouts privados ficam só com quem os recebe e com os Mestres quando aplicável.","O código de convite mostra o nome da mesa e do Mestre a quem tiver o código."]],["Onde os dados ficam",["No Google Firebase (Authentication e Cloud Firestore), que pode processar dados fora do Brasil, com as garantias contratuais do Google.","Neste navegador (localStorage): preferências, última mesa aberta, personagem escolhido e a biblioteca do modo local."]],["Serviços externos opcionais",["Relatórios de erro: desligados por padrão. Se você ativar em Ajuda e preferências, erros são enviados sem nome, e-mail ou conversas.","Discord: se o Mestre configurar um webhook, as rolagens da mesa são enviadas para o canal do Discord dele, sob a política do Discord.","Link de chamada de voz/vídeo: abre o serviço escolhido pelo Mestre (Discord, Meet etc.), com a política desse serviço."]],["Por quanto tempo",["Enquanto a mesa ou a conta existirem. O Mestre pode definir uma retenção do chat, e mensagens mais antigas são apagadas.","Ao excluir uma mesa, o conteúdo dela é apagado. Cópias em cache do navegador somem ao limpar os dados do site."]],["Seus direitos",['Você pode ver e corrigir seus dados (perfil e fichas), exportar fichas e campanhas em JSON, pedir ao Mestre para sair de uma mesa e excluir a conta em "Excluir minha conta", no lobby — isso apaga as mesas que você criou, sua biblioteca e seu perfil, e tira você das outras mesas.',"Mensagens que você enviou em mesas de outras pessoas ficam com a mesa; peça ao Mestre para apagá-las."]]]},termos:{title:"Termos de uso",intro:"Ao usar o NightTable você concorda com estes termos. Eles valem para quem mestra, joga ou assiste.",sections:[["O serviço",["O NightTable é uma mesa virtual de RPG. Ele é oferecido como está, sem garantia de disponibilidade contínua; faça cópias de segurança das campanhas importantes (Exportar campanha).","Recursos podem mudar ou ser retirados. Recursos experimentais ficam atrás de opções da mesa."]],["Sua conta",["Você é responsável pelo que acontece na sua conta e por guardar sua senha. Convidados sem conta perdem o acesso se apagarem os dados do navegador.","Para criar mesas é preciso ter uma conta cadastrada."]],["Conteúdo",["O que você envia (mapas, imagens, áudios, textos) continua seu. Você declara ter o direito de usá-lo e nos autoriza apenas a guardar e mostrar esse conteúdo aos participantes da mesa.","Não envie material de terceiros sem permissão, conteúdo ilegal, discurso de ódio, assédio, conteúdo sexual envolvendo menores ou dados pessoais de outras pessoas sem consentimento."]],["Convites e moderação",["Quem tem o código de convite entra na mesa. O Mestre é responsável por compartilhar o convite com cuidado e pode revogá-lo, silenciar, remover e bloquear participantes.","Podemos remover conteúdo ou contas que violem estes termos."]],["Limites",["Há limites técnicos de tamanho de imagens, áudios e mensagens, e um limite de mensagens em sequência, para manter o serviço no plano gratuito do Firebase.","Não tente contornar permissões, acessar mesas sem convite ou sobrecarregar o serviço."]],["Mudanças nestes termos",["Quando os termos mudarem, a data no topo será atualizada. Continuar usando depois disso significa aceitar a nova versão."]]]}};function vo(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Le(t,a)}?pagina=${e}`}function al(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{const a=new URLSearchParams(e).get("pagina");return Object.hasOwn(Et,a)?a:null}catch{return null}}const rl=8;function ol(e){const t=Array.isArray(e)?e:String(e||"").split(","),a=new Set;return t.map(r=>String(r||"").replace(/^#/,"").replace(/\s+/g," ").trim().slice(0,24)).filter(r=>r&&!a.has(r.toLowerCase())&&a.add(r.toLowerCase())).slice(0,rl)}function tt(e){const t=e&&typeof e=="object"?e:{},a=(Array.isArray(t.sessions)?t.sessions:[]).filter(r=>r&&!Number.isNaN(Date.parse(r.at))).map(r=>({id:String(r.id||r.at),at:new Date(r.at).toISOString(),note:String(r.note||"").slice(0,140)})).sort((r,o)=>Date.parse(r.at)-Date.parse(o.at)).slice(-20);return{tagline:String(t.tagline||"").replace(/\s+/g," ").trim().slice(0,120),description:String(t.description||"").slice(0,2e3),image:typeof t.image=="string"&&t.image.startsWith("data:image/")?t.image:null,tags:ol(t.tags),sessions:a}}function xu({campaign:e,systemName:t}={},a=Date.now()){const r=tt(e);return{tagline:r.tagline,systemName:t?String(t).slice(0,40):"",tags:r.tags,nextSession:yo(r.sessions,a)[0]||null}}function yo(e,t=Date.now(),a=4*36e5){return(e||[]).filter(r=>Date.parse(r.at)+a>t)}function vu(e,{at:t,note:a=""},r=`session-${Date.now()}`){const o=tt(e);return Number.isNaN(Date.parse(t))?o:tt({...o,sessions:[...o.sessions,{id:r,at:t,note:a}]})}function yu(e,t){const a=tt(e);return{...a,sessions:a.sessions.filter(r=>r.id!==t)}}function wu(e,t="pt-BR",a){return new Date(e).toLocaleString(t,{weekday:"short",day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}function Su(e,t=Date.now()){const a=Date.parse(e)-t;if(a<=0)return"agora";const r=a/36e5;if(r<1)return`em ${Math.max(1,Math.round(a/6e4))} min`;if(r<24)return`em ${Math.round(r)} h`;const o=Math.round(r/24);return o===1?"amanhã":`em ${o} dias`}const Yt=e=>e.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),hr=e=>String(e||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n");function ku({uid:e,title:t,description:a="",at:r,durationMinutes:o=240}){const n=new Date(r),i=new Date(n.getTime()+o*6e4);return["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//NightTable//Agenda//PT","BEGIN:VEVENT",`UID:${e}@nighttable`,`DTSTAMP:${Yt(new Date)}`,`DTSTART:${Yt(n)}`,`DTEND:${Yt(i)}`,`SUMMARY:${hr(t)}`,`DESCRIPTION:${hr(a)}`,"END:VEVENT","END:VCALENDAR",""].join(`\r
`)}const nl={scene:{label:"Apresentação de cena"},campaign:{label:"Página da campanha"}},il=4,Au={maxSize:1600,maxBytes:56e4},sl=8e5,cl=2e3,Pa="nighttable-public-pages",Ee=(e,t)=>String(e??"").trim().slice(0,t),ll=e=>{var t;return e==null?null:typeof e=="number"?e:((t=e==null?void 0:e.toMillis)==null?void 0:t.call(e))??(e instanceof Date?e.getTime():null)};function Eu(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Le(t,a)}?publico=${encodeURIComponent(e)}`}function dl(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{return(new URLSearchParams(e).get("publico")||"").trim().toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,32)||null}catch{return null}}function wo(e){const t=nl[e==null?void 0:e.kind]?e.kind:null,a=Ee(e==null?void 0:e.title,80);if(!t||!a)return null;const r=typeof(e==null?void 0:e.image)=="string"&&e.image.startsWith("data:image/")&&e.image.length<=sl?e.image:null;return{kind:t,title:a,subtitle:Ee(e==null?void 0:e.subtitle,120),text:Ee(e==null?void 0:e.text,cl),image:r,systemName:Ee(e==null?void 0:e.systemName,40),tags:(Array.isArray(e==null?void 0:e.tags)?e.tags:[]).map(o=>Ee(o,24)).filter(Boolean).slice(0,8),sessions:(Array.isArray(e==null?void 0:e.sessions)?e.sessions:[]).filter(o=>!Number.isNaN(Date.parse(o==null?void 0:o.at))).slice(0,6).map(o=>({at:new Date(o.at).toISOString(),note:Ee(o.note,140)})),tableName:Ee(e==null?void 0:e.tableName,80)}}function Mu({tableName:e,scene:t,opening:a="",image:r=null,includeOpening:o=!0}){return wo({kind:"scene",title:(t==null?void 0:t.name)||"Cena",subtitle:(t==null?void 0:t.subtitle)||"",text:o?a:"",image:r,tableName:e})}function Tu({tableName:e,campaign:t,systemName:a="",show:r={}},o=Date.now()){const n=tt(t),{description:i=!0,cover:s=!0,sessions:c=!0}=r;return wo({kind:"campaign",title:e,subtitle:n.tagline,text:i?n.description:"",image:s?n.image:null,systemName:a,tags:n.tags,sessions:c?yo(n.sessions,o):[],tableName:e})}function ju(e,t,{validityDays:a=0,now:r=Date.now()}={}){return{code:e,kind:t.kind,title:t.title,createdAt:r,expiresAt:Vr(a,r)}}function zu(e,t=Date.now()){return za(ll(e==null?void 0:e.expiresAt),t)}function Iu(e=Math.random){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let a="L";for(let r=0;r<15;r+=1)a+=t[Math.floor(e()*t.length)];return a}function So(e=globalThis.localStorage){try{const t=JSON.parse((e==null?void 0:e.getItem(Pa))||"{}");return t&&typeof t=="object"?t:{}}catch{return{}}}function _u(e,t,a=globalThis.localStorage){const r={...So(a),[e]:t};let n=Object.keys(r).sort((i,s)=>(r[s].createdAt||0)-(r[i].createdAt||0)).slice(0,il);for(;n.length;)try{return a.setItem(Pa,JSON.stringify(Object.fromEntries(n.map(i=>[i,r[i]])))),n}catch{if(n.length===1)break;n=n.slice(0,-1)}throw new Error("Não coube neste navegador. Revogue um link antigo e tente de novo.")}function Cu(e,t=globalThis.localStorage){const a=So(t);delete a[e];try{t.setItem(Pa,JSON.stringify(a))}catch{}}function Nu(e,t="pt-BR"){return new Date(e).toLocaleString(t,{weekday:"long",day:"2-digit",month:"long",hour:"2-digit",minute:"2-digit"})}const pl=ya(u.jsx("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded"),ul=ya(u.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47"}),"HelpOutlineRounded");var C="-ms-",Ze="-moz-",M="-webkit-",ko="comm",Rt="rule",La="decl",fl="@import",ml="@namespace",Ao="@keyframes",gl="@layer",Eo=Math.abs,Da=String.fromCharCode,ca=Object.assign;function bl(e,t){return q(e,0)^45?(((t<<2^q(e,0))<<2^q(e,1))<<2^q(e,2))<<2^q(e,3):0}function Mo(e){return e.trim()}function le(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,a){return e.replace(t,a)}function ht(e,t,a){return e.indexOf(t,a)}function q(e,t){return e.charCodeAt(t)|0}function je(e,t,a){return e.slice(t,a)}function se(e){return e.length}function To(e){return e.length}function He(e,t){return t.push(e),e}function hl(e,t){return e.map(t).join("")}function xr(e,t){return e.filter(function(a){return!le(a,t)})}var $t=1,Fe=1,jo=0,oe=0,B=0,Ge="";function Ot(e,t,a,r,o,n,i,s){return{value:e,root:t,parent:a,type:r,props:o,children:n,line:$t,column:Fe,length:i,return:"",siblings:s}}function ve(e,t){return ca(Ot("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function _e(e){for(;e.root;)e=ve(e.root,{children:[e]});He(e,e.siblings)}function xl(){return B}function vl(){return B=oe>0?q(Ge,--oe):0,Fe--,B===10&&(Fe=1,$t--),B}function ce(){return B=oe<jo?q(Ge,oe++):0,Fe++,B===10&&(Fe=1,$t++),B}function ye(){return q(Ge,oe)}function xt(){return oe}function Pt(e,t){return je(Ge,e,t)}function at(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yl(e){return $t=Fe=1,jo=se(Ge=e),oe=0,[]}function wl(e){return Ge="",e}function Ht(e){return Mo(Pt(oe-1,la(e===91?e+2:e===40?e+1:e)))}function Sl(e){for(;(B=ye())&&B<33;)ce();return at(e)>2||at(B)>3?"":" "}function kl(e,t){for(;--t&&ce()&&!(B<48||B>102||B>57&&B<65||B>70&&B<97););return Pt(e,xt()+(t<6&&ye()==32&&ce()==32))}function la(e){for(;ce();)switch(B){case e:return oe;case 34:case 39:e!==34&&e!==39&&la(B);break;case 40:e===41&&la(e);break;case 92:ce();break}return oe}function Al(e,t){for(;ce()&&e+B!==57;)if(e+B===84&&ye()===47)break;return"/*"+Pt(t,oe-1)+"*"+Da(e===47?e:ce())}function El(e){for(;!at(ye());)ce();return Pt(e,oe)}function Ml(e){return wl(vt("",null,null,null,[""],e=yl(e),0,[0],e))}function vt(e,t,a,r,o,n,i,s,c){for(var d=0,p=0,g=i,v=0,A=0,S=0,y=1,R=1,T=1,x=0,G="",X=o,F=n,W=r,k=G;R;)switch(S=x,x=ce()){case 40:if(S!=108&&q(k,g-1)==58){ht(k+=w(Ht(x),"&","&\f"),"&\f",Eo(d?s[d-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:k+=Ht(x);break;case 9:case 10:case 13:case 32:k+=Sl(S);break;case 92:k+=kl(xt()-1,7);continue;case 47:switch(ye()){case 42:case 47:He(Tl(Al(ce(),xt()),t,a,c),c),(at(S||1)==5||at(ye()||1)==5)&&se(k)&&je(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*y:s[d++]=se(k)*T;case 125*y:case 59:case 0:switch(x){case 0:case 125:R=0;case 59+p:T==-1&&(k=w(k,/\f/g,"")),A>0&&(se(k)-g||y===0&&S===47)&&He(A>32?yr(k+";",r,a,g-1,c):yr(w(k," ","")+";",r,a,g-2,c),c);break;case 59:k+=";";default:if(He(W=vr(k,t,a,d,p,o,s,G,X=[],F=[],g,n),n),x===123)if(p===0)vt(k,t,W,W,X,n,g,s,F);else{switch(v){case 99:if(q(k,3)===110)break;case 108:if(q(k,2)===97)break;default:p=0;case 100:case 109:case 115:}p?vt(e,W,W,r&&He(vr(e,W,W,0,0,o,s,G,o,X=[],g,F),F),o,F,g,s,r?X:F):vt(k,W,W,W,[""],F,0,s,F)}}d=p=A=0,y=T=1,G=k="",g=i;break;case 58:g=1+se(k),A=S;default:if(y<1){if(x==123)--y;else if(x==125&&y++==0&&vl()==125)continue}switch(k+=Da(x),x*y){case 38:T=p>0?1:(k+="\f",-1);break;case 44:s[d++]=(se(k)-1)*T,T=1;break;case 64:ye()===45&&(k+=Ht(ce())),v=ye(),p=g=se(G=k+=El(xt())),x++;break;case 45:S===45&&se(k)==2&&(y=0)}}return n}function vr(e,t,a,r,o,n,i,s,c,d,p,g){for(var v=o-1,A=o===0?n:[""],S=To(A),y=0,R=0,T=0;y<r;++y)for(var x=0,G=je(e,v+1,v=Eo(R=i[y])),X=e;x<S;++x)(X=Mo(R>0?A[x]+" "+G:w(G,/&\f/g,A[x])))&&(c[T++]=X);return Ot(e,t,a,o===0?Rt:s,c,d,p,g)}function Tl(e,t,a,r){return Ot(e,t,a,ko,Da(xl()),je(e,2,-2),0,r)}function yr(e,t,a,r,o){return Ot(e,t,a,La,je(e,0,r),je(e,r+1,-1),r,o)}function zo(e,t,a){switch(bl(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return M+e+e;case 4855:return M+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ze+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Ze+e+C+e+e;case 5936:switch(q(e,t+11)){case 114:return M+e+C+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+C+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+C+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+C+e+e;case 6165:return M+e+C+"flex-"+e+e;case 5187:return M+e+w(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+C+"flex-$1$2")+e;case 5443:return M+e+C+"flex-item-"+w(e,/flex-|-self/g,"")+(le(e,/flex-|baseline/)?"":C+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return M+e+C+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+C+w(e,"shrink","negative")+e;case 5292:return M+e+C+w(e,"basis","preferred-size")+e;case 6060:return M+"box-"+w(e,"-grow","")+M+e+C+w(e,"grow","positive")+e;case 4554:return M+w(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+C+"flex-pack:$3"),/space-between/,"justify")+M+e+e;case 4200:if(!le(e,/flex-|baseline/))return C+"grid-column-align"+je(e,t)+e;break;case 2592:case 3360:return C+w(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,le(r.props,/grid-\w+-end/)})?~ht(e+(a=a[t].value),"span",0)?e:C+w(e,"-start","")+e+C+"grid-row-span:"+(~ht(a,"span",0)?le(a,/\d+/):+le(a,/\d+/)-+le(e,/\d+/))+";":C+w(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return le(r.props,/grid-\w+-start/)})?e:C+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(q(e,t+1)){case 109:if(q(e,t+4)!==45)break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Ze+(q(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ht(e,"stretch",0)?zo(w(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,n,i,s,c,d){return C+o+":"+n+d+(i?C+o+"-span:"+(s?c:+c-+n)+d:"")+e});case 4949:if(q(e,t+6)===121)return w(e,":",":"+M)+e;break;case 6444:switch(q(e,q(e,14)===45?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(q(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+C+"$2box$3")+e;case 100:return w(e,":",":"+C)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function Mt(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function jl(e,t,a,r){switch(e.type){case gl:if(e.children.length)break;case fl:case ml:case La:return e.return=e.return||e.value;case ko:return"";case Ao:return e.return=e.value+"{"+Mt(e.children,r)+"}";case Rt:if(!se(e.value=e.props.join(",")))return""}return se(a=Mt(e.children,r))?e.return=e.value+"{"+a+"}":""}function zl(e){var t=To(e);return function(a,r,o,n){for(var i="",s=0;s<t;s++)i+=e[s](a,r,o,n)||"";return i}}function Il(e){return function(t){t.root||(t=t.return)&&e(t)}}function _l(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case La:e.return=zo(e.value,e.length,a);return;case Ao:return Mt([ve(e,{value:w(e.value,"@","@"+M)})],r);case Rt:if(e.length)return hl(a=e.props,function(o){switch(le(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_e(ve(e,{props:[w(o,/:(read-\w+)/,":"+Ze+"$1")]})),_e(ve(e,{props:[o]})),ca(e,{props:xr(a,r)});break;case"::placeholder":_e(ve(e,{props:[w(o,/:(plac\w+)/,":"+M+"input-$1")]})),_e(ve(e,{props:[w(o,/:(plac\w+)/,":"+Ze+"$1")]})),_e(ve(e,{props:[w(o,/:(plac\w+)/,C+"input-$1")]})),_e(ve(e,{props:[o]})),ca(e,{props:xr(a,r)});break}return""})}}var Re={},Kt,Jt;const Be=typeof process<"u"&&Re!==void 0&&(Re.REACT_APP_SC_ATTR||Re.SC_ATTR)||"data-styled",Io="active",_o="data-styled-version",Lt="6.5.3",Fa=`/*!sc*/
`,Qe=typeof window<"u"&&typeof document<"u";function wr(e){if(typeof process<"u"&&Re!==void 0){const t=Re[e];if(t!==void 0&&t!=="")return t!=="false"}}const Cl=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Jt=(Kt=wr("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Kt!==void 0?Kt:wr("SC_DISABLE_SPEEDY"))!==null&&Jt!==void 0?Jt:typeof process<"u"&&Re!==void 0&&!1),Co="sc-keyframes-",Nl={};function it(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let yt=new Map,Tt=new Map,wt=1;const Ke=e=>{if(yt.has(e))return yt.get(e);for(;Tt.has(wt);)wt++;const t=wt++;return yt.set(e,t),Tt.set(t,e),t},Rl=e=>Tt.get(e),$l=(e,t)=>{wt=t+1,yt.set(e,t),Tt.set(t,e)},Ba=Object.freeze([]),Ue=Object.freeze({});function No(e,t,a=Ue){return e.theme!==a.theme&&e.theme||t||a.theme}const Ol=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Pl=/(^-|-$)/g;function Ro(e){return e.replace(Ol,"-").replace(Pl,"")}const Ll=/(a)(d)/gi,Sr=e=>String.fromCharCode(e+(e>25?39:97));function Ua(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=Sr(t%52)+a;return(Sr(t%52)+a).replace(Ll,"$1-$2")}const da=5381,Te=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},$o=e=>Te(da,e);function Ga(e){return Ua($o(e)>>>0)}function Dl(e){return e.displayName||e.name||"Component"}function pa(e){return typeof e=="string"&&!0}function Fl(e){return pa(e)?`styled.${e}`:`Styled(${Dl(e)})`}const Oo=Symbol.for("react.memo"),Bl=Symbol.for("react.forward_ref"),Ul={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Gl={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Po={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ql={[Bl]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Oo]:Po};function kr(e){return("type"in(t=e)&&t.type.$$typeof)===Oo?Po:"$$typeof"in e?ql[e.$$typeof]:Ul;var t}const Vl=Object.defineProperty,Wl=Object.getOwnPropertyNames,Yl=Object.getOwnPropertySymbols,Hl=Object.getOwnPropertyDescriptor,Kl=Object.getPrototypeOf,Jl=Object.prototype;function Lo(e,t,a){if(typeof t!="string"){const r=Kl(t);r&&r!==Jl&&Lo(e,r,a);const o=Wl(t).concat(Yl(t)),n=kr(e),i=kr(t);for(let s=0;s<o.length;++s){const c=o[s];if(!(c in Gl||a&&a[c]||i&&c in i||n&&c in n)){const d=Hl(t,c);try{Vl(e,c,d)}catch{}}}}return e}function st(e){return typeof e=="function"}const Xl=Symbol.for("react.forward_ref");function qa(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Xl&&"styledComponentId"in e}function Je(e,t){return e&&t?e+" "+t:e||t||""}function jt(e,t){return e.join("")}function rt(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ua(e,t,a=!1){if(!a&&!rt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ua(e[r],t[r]);else if(rt(t))for(const r in t)e[r]=ua(e[r],t[r]);return e}function Va(e,t){Object.defineProperty(e,"toString",{value:t})}const Zl=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,n=o.length;let i=n;for(;e>=i;)if(i<<=1,i<0)throw it(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(let s=n;s<i;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,n=t.length;o<n;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let n=r;n<o;n++)t+=this.tag.getRule(n)+Fa;return t}},Ql=`style[${Be}][${_o}="${Lt}"]`,ed=new RegExp(`^${Be}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Ar=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,fa=e=>{if(!e)return document;if(Ar(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Ar(t))return t}return document},td=(e,t,a)=>{const r=a.split(",");let o;for(let n=0,i=r.length;n<i;n++)(o=r[n])&&e.registerName(t,o)},ad=(e,t)=>{var a;const r=((a=t.textContent)!==null&&a!==void 0?a:"").split(Fa),o=[];for(let n=0,i=r.length;n<i;n++){const s=r[n].trim();if(!s)continue;const c=s.match(ed);if(c){const d=0|parseInt(c[1],10),p=c[2];d!==0&&($l(p,d),td(e,p,c[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}},Xt=e=>{const t=fa(e.options.target).querySelectorAll(Ql);for(let a=0,r=t.length;a<r;a++){const o=t[a];o&&o.getAttribute(Be)!==Io&&(ad(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let We=!1;function rd(){if(We!==!1)return We;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return We=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return We=t.getAttribute("content")||void 0}return We=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Do=(e,t)=>{const a=document.head,r=e||a,o=document.createElement("style"),n=(c=>{const d=Array.from(c.querySelectorAll(`style[${Be}]`));return d[d.length-1]})(r),i=n!==void 0?n.nextSibling:null;o.setAttribute(Be,Io),o.setAttribute(_o,Lt);const s=t||rd();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},od=class{constructor(e,t){this.element=Do(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;const o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let n=0,i=o.length;n<i;n++){const s=o[n];if(s.ownerNode===a)return s}throw it(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},nd=class{constructor(e,t){this.element=Do(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Er=Qe;const id={isServer:!Qe,useCSSOMInjection:!Cl};class ct{static registerId(t){return Ke(t)}constructor(t=Ue,a={},r){this.options=Object.assign(Object.assign({},id),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Qe&&Er&&(Er=!1,Xt(this)),Va(this,()=>(o=>{const n=o.getTag(),{length:i}=n;let s="";for(let c=0;c<i;c++){const d=Rl(c);if(d===void 0)continue;const p=o.names.get(d);if(p===void 0||!p.size)continue;const g=n.getGroup(c);if(g.length===0)continue;const v=Be+".g"+c+'[id="'+d+'"]';let A="";for(const S of p)S.length>0&&(A+=S+",");s+=g+v+'{content:"'+A+'"}'+Fa}return s})(this))}rehydrate(){!this.server&&Qe&&Xt(this)}reconstructWithOptions(t,a=!0){const r=new ct(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Qe&&t.target!==this.options.target&&fa(this.options.target)!==fa(t.target)&&Xt(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new od(r,o):new nd(r,o))(this.options),new Zl(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){Ke(t),t.startsWith(Co)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(Ke(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Ke(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const Fo=new WeakSet,sd={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function cd(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in sd||e.startsWith("--")?String(t).trim():t+"px"}const Me=47;function Mr(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){const r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}const Bo=Symbol.for("sc-keyframes");function ld(e){return typeof e=="object"&&e!==null&&Bo in e}function Uo(e){return st(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Go=e=>e==null||e===!1||e==="",dd=Symbol.for("react.client.reference");function Tr(e){return e.$$typeof===dd}function qo(e,t){for(const a in e){const r=e[a];e.hasOwnProperty(a)&&!Go(r)&&(Array.isArray(r)&&Fo.has(r)||st(r)?t.push(Mr(a)+":",r,";"):rt(r)?(t.push(a+" {"),qo(r,t),t.push("}")):t.push(Mr(a)+": "+cd(a,r)+";"))}}function we(e,t,a,r,o=[]){if(Go(e))return o;const n=typeof e;if(n==="string")return o.push(e),o;if(n==="function"){if(Tr(e))return o;if(Uo(e)&&t){const i=e(t);return we(i,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let i=0;i<e.length;i++)we(e[i],t,a,r,o);return o}return qa(e)?(o.push(`.${e.styledComponentId}`),o):ld(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):Tr(e)?o:rt(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(qo(e,o),o):(o.push(e.toString()),o)}const pd=$o(Lt);class ud{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=Te(pd,a),this.baseStyle=r,ct.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let n="";for(let i=0;i<this.rules.length;i++){const s=this.rules[i];if(typeof s=="string")n+=s;else if(s)if(Uo(s)){const c=s(t);typeof c=="string"?n+=c:c!=null&&c!==!1&&(n+=jt(we(c,t,a,r)))}else n+=jt(we(s,t,a,r))}if(n){this.dynamicNameCache||(this.dynamicNameCache=new Map);const i=r.hash?r.hash+n:n;let s=this.dynamicNameCache.get(i);if(!s){if(s=Ua(Te(Te(this.baseHash,r.hash),n)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(i,s)}if(!a.hasNameForId(this.componentId,s)){const c=r(n,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,c)}o=Je(o,s)}}return o}}const fd=/&/g;function Vo(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function Zt(e){const t=e.length;let a="",r=0,o=0,n=0,i=!1,s=!1;for(let c=0;c<t;c++){const d=e.charCodeAt(c);if(n!==0||i||d!==Me||e.charCodeAt(c+1)!==42)if(i)d===42&&e.charCodeAt(c+1)===Me&&(i=!1,c++);else if(d!==34&&d!==39||Vo(e,c)){if(n===0)if(d===123)o++;else if(d===125){if(o--,o<0){s=!0;let p=c+1;for(;p<t;){const g=e.charCodeAt(p);if(g===59||g===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,c=p-1,r=p;continue}o===0&&(a+=e.substring(r,c+1),r=c+1)}else d===59&&o===0&&(a+=e.substring(r,c+1),r=c+1)}else n===0?n=d:n===d&&(n=0);else i=!0,c++}return s||o!==0||n!==0?(r<t&&o===0&&n===0&&(a+=e.substring(r)),a):e}function Wo(e,t){const a=t+" ",r=","+a;for(let o=0;o<e.length;o++){const n=e[o];if(n.type==="rule"){n.value=(a+n.value).replaceAll(",",r);const i=n.props,s=[];for(let c=0;c<i.length;c++)s[c]=a+i[c];n.props=s}Array.isArray(n.children)&&n.type!=="@keyframes"&&Wo(n.children,t)}return e}function md({options:e=Ue,plugins:t=Ba}=Ue){let a,r,o;const n=(v,A,S)=>S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?`.${a}`:v,i=t.slice();i.push(v=>{v.type===Rt&&v.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),v.props[0]=v.props[0].replace(fd,r).replace(o,n))}),e.prefix&&i.push(_l),i.push(jl);let s=[];const c=zl(i.concat(Il(v=>s.push(v)))),d=(v,A="",S="",y="&")=>{a=y,r=A,o=void 0;const R=function(x){const G=x.indexOf("//")!==-1,X=x.indexOf("}")!==-1;if(!G&&!X)return x;if(!G)return Zt(x);const F=x.length;let W="",k=0,E=0,ke=0,ze=0,te=0,qe=!1;for(;E<F;){const H=x.charCodeAt(E);if(H!==34&&H!==39||Vo(x,E))if(ke===0)if(H===Me&&E+1<F&&x.charCodeAt(E+1)===42){for(E+=2;E+1<F&&(x.charCodeAt(E)!==42||x.charCodeAt(E+1)!==Me);)E++;E+=2}else if(H!==40)if(H!==41)if(ze>0)E++;else if(H===42&&E+1<F&&x.charCodeAt(E+1)===Me)W+=x.substring(k,E),E+=2,k=E,qe=!0;else if(H===Me&&E+1<F&&x.charCodeAt(E+1)===Me){for(W+=x.substring(k,E);E<F&&x.charCodeAt(E)!==10;)E++;k=E,qe=!0}else H===123?te++:H===125&&te--,E++;else ze>0&&ze--,E++;else ze++,E++;else E++;else ke===0?ke=H:ke===H&&(ke=0),E++}return qe?(k<F&&(W+=x.substring(k)),te===0?W:Zt(W)):te===0?x:Zt(x)}(v);let T=Ml(S||A?S+" "+A+" { "+R+" }":R);return e.namespace&&(T=Wo(T,e.namespace)),s=[],Mt(T,c),s},p=e;let g=da;for(let v=0;v<t.length;v++)t[v].name||it(15),g=Te(g,t[v].name);return p!=null&&p.namespace&&(g=Te(g,p.namespace)),p!=null&&p.prefix&&(g=Te(g,"p")),d.hash=g!==da?g.toString():"",d}const gd=new ct,ma=md(),Yo=Q.createContext({shouldForwardProp:void 0,styleSheet:gd,stylis:ma,stylisPlugins:void 0});Yo.Consumer;function Ho(){return Q.useContext(Yo)}const Wa=Q.createContext(void 0);Wa.Consumer;const jr=Object.prototype.hasOwnProperty,Qt={};function bd(e,t){const a=typeof e!="string"?"sc":Ro(e);Qt[a]=(Qt[a]||0)+1;const r=a+"-"+Ga(Lt+a+Qt[a]);return t?t+"-"+r:r}function hd(e,t,a){const r=qa(e),o=e,n=!pa(e),{attrs:i=Ba,componentId:s=bd(t.displayName,t.parentComponentId),displayName:c=Fl(e)}=t,d=t.displayName&&t.componentId?Ro(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&o.attrs?o.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:g}=t;if(r&&o.shouldForwardProp){const y=o.shouldForwardProp;if(t.shouldForwardProp){const R=t.shouldForwardProp;g=(T,x)=>y(T,x)&&R(T,x)}else g=y}const v=new ud(a,d,r?o.componentStyle:void 0);function A(y,R){return function(T,x,G){const{attrs:X,componentStyle:F,defaultProps:W,foldedComponentIds:k,styledComponentId:E,target:ke}=T,ze=Q.useContext(Wa),te=Ho(),qe=T.shouldForwardProp||te.shouldForwardProp,H=No(x,ze,W)||Ue;let me,Ve;{const ge=Q.useRef(null),ne=ge.current;if(ne!==null&&ne[1]===H&&ne[2]===te.styleSheet&&ne[3]===te.stylis&&ne[7]===F&&function(Ie,ie,ae){const re=Ie,Z=ie;let dt=0;for(const Ae in Z)if(jr.call(Z,Ae)&&(dt++,re[Ae]!==Z[Ae]))return!1;return dt===ae}(ne[0],x,ne[4]))me=ne[5],Ve=ne[6];else{me=function(ie,ae,re){const Z=Object.assign(Object.assign({},ae),{className:void 0,theme:re}),dt=ie.length>1;for(let Ae=0;Ae<ie.length;Ae++){const qt=ie[Ae],pt=st(qt)?qt(dt?Object.assign({},Z):Z):qt;for(const be in pt)be==="className"?Z.className=Je(Z.className,pt[be]):be==="style"?Z.style=Object.assign(Object.assign({},Z.style),pt[be]):be in ae&&ae[be]===void 0||(Z[be]=pt[be])}return"className"in ae&&typeof ae.className=="string"&&(Z.className=Je(Z.className,ae.className)),Z}(X,x,H),Ve=F.generateAndInjectStyles(me,te.styleSheet,te.stylis);let Ie=0;for(const ie in x)jr.call(x,ie)&&Ie++;ge.current=[x,H,te.styleSheet,te.stylis,Ie,me,Ve,F]}}const lt=me.as||ke,Ut=function(ge,ne,Ie,ie){const ae={};for(const re in ge)ge[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&ge.theme===Ie||(re==="forwardedAs"?ae.as=ge.forwardedAs:ie&&!ie(re,ne)||(ae[re]=ge[re]));return ae}(me,lt,H,qe);let Gt=Je(k,E);return Ve&&(Gt+=" "+Ve),me.className&&(Gt+=" "+me.className),Ut[pa(lt)&&lt.includes("-")?"class":"className"]=Gt,G&&(Ut.ref=G),O.createElement(lt,Ut)}(S,y,R)}A.displayName=c;let S=Q.forwardRef(A);return S.attrs=p,S.componentStyle=v,S.displayName=c,S.shouldForwardProp=g,S.foldedComponentIds=r?Je(o.foldedComponentIds,o.styledComponentId):"",S.styledComponentId=d,S.target=r?o.target:e,Object.defineProperty(S,"defaultProps",{get(){return this._foldedDefaultProps},set(y){this._foldedDefaultProps=r?function(R,...T){for(const x of T)ua(R,x,!0);return R}({},o.defaultProps,y):y}}),Va(S,()=>`.${S.styledComponentId}`),n&&Lo(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}var xd=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function zr(e,t){const a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}const Ir=e=>(Fo.add(e),e);function Ya(e,...t){if(st(e)||rt(e))return Ir(we(zr(Ba,[e,...t])));const a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?we(a):Ir(we(zr(a,t)))}function ga(e,t,a=Ue){if(!t)throw it(1,t);const r=(o,...n)=>e(t,a,Ya(o,...n));return r.attrs=o=>ga(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>ga(e,t,Object.assign(Object.assign({},a),o)),r}const Ko=e=>ga(hd,e),f=Ko;xd.forEach(e=>{f[e]=Ko(e)});class vd{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const n=r[o];if(st(n)&&!qa(n))return!1}return!0}(t),ct.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){const n=this.componentId;if(this.isStatic){if(r.hasNameForId(n,n+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{const s=this.computeRules(t,a,r,o);r.insertRules(n,s.name,s.rules)}return}const i=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&i){const s=i.rules,c=this.instanceRules.get(t).rules;if(s.length===c.length){let d=!0;for(let p=0;p<s.length;p++)if(s[p]!==c[p]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){const n=jt(we(this.rules,a,r,o)),i={name:this.componentId+t,rules:o(n,"")};return this.instanceRules.set(t,i),i}rebuildGroup(t){const a=this.componentId;t.clearRules(a);for(const r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}}function Jo(e,...t){const a=Ya(e,...t),r=`sc-global-${Ga(JSON.stringify(a))}`,o=new vd(a,r),n=s=>{const c=Ho(),d=Q.useContext(Wa);let p;{const g=Q.useRef(null);g.current===null&&(g.current=c.styleSheet.allocateGSInstance(r)),p=g.current}c.styleSheet.server&&i(p,s,c.styleSheet,d,c.stylis);{const g=o.isStatic?[p,c.styleSheet,o]:[p,s,c.styleSheet,d,c.stylis,o],v=Q.useRef(o);Q.useLayoutEffect(()=>{c.styleSheet.server||(v.current!==o&&(c.styleSheet.clearRules(r),v.current=o),i(p,s,c.styleSheet,d,c.stylis))},g),Q.useLayoutEffect(()=>()=>{c.styleSheet.server||o.removeStyles(p,c.styleSheet)},[p,c.styleSheet,o])}return c.styleSheet.server&&o.instanceRules.delete(p),null};function i(s,c,d,p,g){if(o.isStatic)o.renderStyles(s,Nl,d,g);else{const v=Object.assign(Object.assign({},c),{theme:No(c,p,n.defaultProps)});o.renderStyles(s,v,d,g)}}return Q.memo(n)}var Xo;class yd{constructor(t,a){this[Xo]=!0,this.inject=(r,o=ma)=>{const n=this.getName(o);if(!r.hasNameForId(this.id,n)){const i=o(this.rules,n,"@keyframes");r.insertRules(this.id,n,i)}},this.name=t,this.id=Co+t,this.rules=a,Ke(this.id),Va(this,()=>{throw it(12,String(this.name))})}getName(t=ma){return t.hash?this.name+Ua(+t.hash>>>0):this.name}}function Ru(e,...t){const a=jt(Ya(e,...t)),r=Ga(a);return new yd(r,a)}Xo=Bo;const wd=[{keys:["?"],action:"help",label:"Abrir a ajuda e os atalhos"},{keys:["Enter"],action:"focus-chat",label:"Escrever no chat"},{keys:["L"],action:"tool:free",label:"Lápis (desenho livre)"},{keys:["R"],action:"tool:measure",label:"Régua: medir distância"},{keys:["T"],action:"tool:text",label:"Texto no mapa"},{keys:["E"],action:"tool:erase",label:"Borracha"},{keys:["+"],action:"zoom-in",label:"Aproximar o mapa"},{keys:["-"],action:"zoom-out",label:"Afastar o mapa"},{keys:["0"],action:"zoom-reset",label:"Ver o mapa inteiro"},{keys:["M"],action:"toggle-mode",label:"Alternar visão de Mestre e de jogador",gmOnly:!0},{keys:["[","]"],action:null,label:"Girar o seu token (aponta a lanterna de mão)"},{keys:["S"],action:"stream",label:"Modo streaming (visão limpa para transmitir)"},{keys:["Esc"],action:null,label:"Sair da ferramenta ou desmarcar tokens"},{keys:["Ctrl","Z"],action:null,label:"Desfazer desenho"},{keys:["Ctrl","Y"],action:null,label:"Refazer desenho"},{keys:["roda"],action:null,label:"Zoom no ponto do cursor (Shift+roda desloca)"}],Sd={"?":"help",enter:"focus-chat",l:"tool:free",r:"tool:measure",t:"tool:text",e:"tool:erase","+":"zoom-in","=":"zoom-in","-":"zoom-out",0:"zoom-reset",m:"toggle-mode",s:"stream","[":"rotate-left","]":"rotate-right"};function kd(e){if(!e)return!1;const t=String(e.tagName||"").toUpperCase();return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||!!e.isContentEditable}function $u(e,{isGm:t=!1}={}){var r,o,n;if(!e||e.ctrlKey||e.metaKey||e.altKey||e.repeat||kd(e.target)||(o=(r=e.target)==null?void 0:r.closest)!=null&&o.call(r,'[role="dialog"]'))return null;const a=Sd[String(e.key||"").toLowerCase()]||null;return a==="focus-chat"&&!["BODY","HTML"].includes(String(((n=e.target)==null?void 0:n.tagName)||"").toUpperCase())||a==="toggle-mode"&&!t?null:a}const Ad=ya(u.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9"}),"CasinoRounded");function _r(e){let t=String(e).replace("#","");t.length===3&&(t=[...t].map(n=>n+n).join(""));const[a,r,o]=[0,2,4].map(n=>parseInt(t.slice(n,n+2),16)/255).map(n=>n<=.03928?n/12.92:((n+.055)/1.055)**2.4);return .2126*a+.7152*r+.0722*o}const Zo=["06070b","090a0d","0a0b0e","0a0b0f","0b0c10","0d0e12","0e0f13","0f1014","0f1a14","101116","111217","111318","121419","14161b","14161c","15171c","15232d","17191f","191b21","1a1209","1a1c22","1b1915","1b1d23","1b1d25","1d2027","1f2128","1f222a","20232b","211d37","21665f","242730","245a43","252831","26211b","262931","287a73","2a1d22","2a2118","2a2620","2a2d36","2a2e38","2d1e16","2d3038","343846","363943","3a3d46","3a3d48","3a3e48","3aa673","3d2864","3f8f66","434753","4b3777","4b4f5c","4fd1c5","503c1e","554376","555b66","56d28b","57d68d","5b2a30","6249c0","63d59a","666b76","6753bd","6b5a44","6d52be","6f59cf","7358d0","75d49b","7a552a","7d62ce","7e838f","848995","858a95","858b96","888d98","8a6230","8a8f99","8c2228","8c919b","8c919c","8cddb0","8d929d","8e6bff","8e7fd6","8e939e","8f86c9","8fd8b0","8fe3ae","9296a0","9297a3","9677ff","979aa5","9a4a5e","9a7bff","9a9ea8","9a9faa","9b7bff","9b7d7a","9c4ef3","9d93c9","9de4b9","9ea2ac","9edeb8","9fd8ff","9ff0e7","a0a5af","a28af3","a78cff","a795ff","a7abb4","a83a43","a8acb6","a995ff","a9a0ff","a9a4b8","a9adb6","aaa0ef","aeb2ba","b2b5be","b2b5bf","b35a6e","b7bac2","b8aaff","b98b67","b9abff","b9b8b6","b9bbc2","b9bcc5","be4372","beb2ff","bfc0c7","bfc1c7","c4b4ff","c6b9ff","c9c3ff","c9c9ca","cbbcff","cdbfff","cdeedb","cfc4ff","cfc8f5","d0ced0","d4ccff","d6d1c6","d6d4d0","d8cfff","d8d0ff","d8d2ff","d8d4cc","d9ccff","d9d6d3","db9189","dbd1ff","dcd9d2","ddd5ff","ddd8e6","dedbd3","dedbe1","e2b48d","e4e2dc","e58f48","e6dccb","e7e5e2","e7e6e4","e8d8b8","e8dccb","e8e6e1","e9d9ff","e9e3da","e9e4d9","e9e7e2","eab9b3","ebe5ff","ec9741","eceae4","edd8d5","eeece8","ef756a","efb1ab","efbd86","f04f4a","f07970","f09b95","f0a29b","f0ad61","f0bd86","f0e8d9","f0ece4","f0eeea","f1b17e","f1edff","f1efeb","f2ba85","f3a29b","f3b37d","f3b3aa","f3c48f","f3ead7","f4f2ef","f54843","f5f0e9","f8f7f5","fa6357","ffc896","ffd2cc","ffd38e","ffd49a","ffd9a8","ffe1b8","ffffff"],Qo=[{id:"dark",label:"Escuro"},{id:"light",label:"Claro"},{id:"system",label:"Seguir o sistema"}],Ha=[{id:"violet",label:"Violeta",shift:0,swatch:"#9b7bff"},{id:"blue",label:"Azul",shift:-40,swatch:"#5f95ff"},{id:"teal",label:"Verde-água",shift:-100,swatch:"#3fbdb8"},{id:"green",label:"Verde",shift:-140,swatch:"#5fbf6a"},{id:"pink",label:"Rosa",shift:60,swatch:"#e46fb8"}];function Ka(e){return Qo.some(t=>t.id===e)?e:"dark"}function Ja(e){return Ha.some(t=>t.id===e)?e:"violet"}const Ed=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,Md=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;function Xa(e){const t=e.replace("#",""),[a,r,o]=[0,2,4].map(g=>Ed(parseInt(t.slice(g,g+2),16)/255)),n=Math.cbrt(.4122214708*a+.5363325363*r+.0514459929*o),i=Math.cbrt(.2119034982*a+.6806995451*r+.1073969566*o),s=Math.cbrt(.0883024619*a+.2817188376*r+.6299787005*o),c=.2104542553*n+.793617785*i-.0040720468*s,d=1.9779984951*n-2.428592205*i+.4505937099*s,p=.0259040371*n+.7827717662*i-.808675766*s;return{l:c,c:Math.hypot(d,p),h:(Math.atan2(p,d)*180/Math.PI+360)%360}}function Cr({l:e,c:t,h:a}){const r=t*Math.cos(a*Math.PI/180),o=t*Math.sin(a*Math.PI/180),n=(e+.3963377774*r+.2158037573*o)**3,i=(e-.1055613458*r-.0638541728*o)**3,s=(e-.0894841775*r-1.291485548*o)**3;return[4.0767416621*n-3.3077115913*i+.2309699292*s,-1.2684380046*n+2.6097574011*i-.3413193965*s,-.0041960863*n-.7034186147*i+1.707614701*s]}function ba(e){const t=r=>Cr({...e,c:r}).every(o=>o>=-5e-4&&o<=1.0005);let a=e.c;if(!t(a)){let r=0;for(let o=0;o<24;o+=1){const n=(r+a)/2;t(n)?r=n:a=n}a=r}return`#${Cr({...e,c:a}).map(r=>Math.round(Math.min(1,Math.max(0,Md(Math.min(1,Math.max(0,r)))))*255).toString(16).padStart(2,"0")).join("")}`}function Td(e){const{c:t,h:a}=Xa(e);return t>.05&&a>=270&&a<=315}const Ye=[[0,1],[.1,.99],[.35,.89],[.5,.6],[.7,.38],[1,.05]];function jd(e){for(let t=1;t<Ye.length;t+=1){const[a,r]=Ye[t],[o,n]=Ye[t-1];if(e<=a)return n+(e-o)/(a-o)*(r-n)}return Ye[Ye.length-1][1]}function zd(e){const t=Xa(e);if(t.c>.06&&t.l>=.35&&t.l<=.58)return`#${e.replace("#","").toLowerCase()}`;let a=jd(t.l);return t.c>.06&&t.l>.5&&(a=Math.max(a,.47)),ba({...t,l:a,c:t.l<.35?t.c*.5:t.c})}function Id(e,t){const a=Xa(e),r=_r(e),o=(a.h+t+360)%360;let n=0,i=1,s=ba({...a,h:o});for(let c=0;c<22;c+=1){const d=(n+i)/2;s=ba({...a,l:d,h:o}),_r(s)<r?n=d:i=d}return s}function _d(e,{theme:t="dark",accent:a="violet"}={}){const r=Ha.find(n=>n.id===Ja(a)).shift;let o=`#${e.replace("#","").toLowerCase()}`;return r&&Td(o)&&(o=Id(o,r)),t==="light"?zd(o):o}function Cd(e,t=!1){const a=Ka(e);return a==="system"?t?"light":"dark":a}function Nd(e={}){return`:root{${Zo.map(a=>`--c-${a}:${_d(a,e)};`).join("")}}`}const Rd=new Set(Zo);function St(e){if(typeof e!="string"||!/^#[0-9a-fA-F]{6}$/.test(e))return e;const t=e.slice(1).toLowerCase();return Rd.has(t)?`var(--c-${t})`:e}function $d({theme:e,accent:t}={},a=typeof document<"u"?document:null){var i,s;if(!a)return;const r=!!((s=(i=a.defaultView)==null?void 0:i.matchMedia)!=null&&s.call(i,"(prefers-color-scheme: light)").matches),o=Cd(e,r);let n=a.getElementById("nighttable-theme");n||(n=a.createElement("style"),n.id="nighttable-theme",a.head.appendChild(n)),n.textContent=Nd({theme:o,accent:t}),a.documentElement.dataset.theme=o,a.documentElement.style.colorScheme=o}const Od=Jo`
  :root {
    color-scheme: dark;
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--c-090a0d);
    color: var(--c-f4f2ef);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  * { box-sizing: border-box; }
  html, body, #root { margin: 0; min-width: 320px; min-height: 100%; width: 100%; height: 100%; }
  body { overflow: hidden; background: var(--c-090a0d); }
  button, input, textarea, select { font: inherit; }
  button { -webkit-tap-highlight-color: transparent; }
  :focus-visible { outline: 2px solid var(--c-c4b4ff); outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: 0.01ms !important; }
  }
  /* Contraste (WCAG 1.4.11): a borda dos campos tem 3:1 com o fundo escuro, mesmo nos estilos inline. */
  input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=color]):not([type=file]):not([type=hidden]), select, textarea { border-color: var(--c-666b76) !important; }
  input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=color]):not([type=file]):not([type=hidden]):focus, select:focus, textarea:focus { border-color: var(--c-b9abff) !important; }
  ::placeholder { color: var(--c-8d929d); opacity: 1; }
  /* Tamanho do texto: janelas, menus e dicas (abrem fora do #nighttable) crescem sem passar da tela. */
  .MuiDialog-paper, .MuiPopover-paper, .MuiTooltip-tooltip { zoom: var(--text-zoom, 1); }
  .MuiDialog-paper:not(.MuiDialog-paperFullScreen) { max-height: calc((100% - 64px) / var(--text-zoom, 1)) !important; }
  .MuiDialog-paperFullWidth { width: calc((100% - 64px) / var(--text-zoom, 1)) !important; }
  .MuiDialog-paperFullScreen { width: calc(100% / var(--text-zoom, 1)) !important; height: calc(100% / var(--text-zoom, 1)) !important; }
  .MuiPopover-paper { max-width: calc((100% - 32px) / var(--text-zoom, 1)) !important; max-height: calc((100% - 32px) / var(--text-zoom, 1)) !important; }
  @media (max-width: 900px) { .MuiDialog-paper:not(.MuiDialog-paperFullScreen) { max-width: calc((100% - 32px) / var(--text-zoom, 1)) !important; } }
  ::selection { background: color-mix(in srgb, var(--c-f54843) 38%, transparent); color: var(--c-ffffff); }
  /* Desenhos temporários do mapa: firmes quase o tempo todo, esmaecendo no fim. */
  @keyframes drawingFade { 0%, 78% { opacity: 1; } 100% { opacity: 0; } }
  ::-webkit-scrollbar { width: 7px; height: 7px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--c-2d3038); border-radius: 999px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--c-434753); }
`,Ou=f.div`
  --topbar-height: 72px;
  --left-rail: 278px;
  --dock-width: 46px;
  --border: color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  --muted: var(--c-8d929d);
  --panel: var(--c-121419);
  --panel-2: var(--c-17191f);
  --signal: var(--c-f04f4a);
  --violet: var(--c-9b7bff);
  height: 100dvh;
  display: grid;
  grid-template-rows: var(--topbar-height) minmax(0, 1fr);
  background: var(--c-0a0b0f);
  overflow: hidden;
`,Pu=f.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 20px;
  border-bottom: 1px solid var(--border);
  background: color-mix(in srgb, var(--c-0a0b0f) 95%, transparent);
  position: relative;
  z-index: 10;
`,Pd=f.div`
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 220px;
`,Ld=f.div`
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(135deg, var(--c-fa6357), var(--c-9c4ef3));
  border-radius: 10px 10px 10px 3px;
  box-shadow: 0 8px 22px color-mix(in srgb, var(--c-be4372) 24%, transparent);
`,Dd=f.div`
  display: grid;
  gap: 1px;
  line-height: 1;
  strong { font-size: 15px; letter-spacing: -0.04em; }
  span { color: var(--c-8d929d); font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; }
`,Lu=f.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--c-111318);
`,Du=f.button`
  appearance: none;
  border: 0;
  border-radius: 8px;
  padding: 8px 13px;
  color: ${({$active:e})=>e?"var(--c-f8f7f5)":"var(--c-8d929d)"};
  background: ${({$active:e})=>e?"var(--c-252831)":"transparent"};
  box-shadow: ${({$active:e})=>e?"inset 0 0 0 1px color-mix(in srgb, var(--c-ffffff) 9%, transparent), 0 4px 15px rgba(0,0,0,0.18)":"none"};
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: 160ms ease;
  &:hover { color: var(--c-ffffff); background: ${({$active:e})=>e?"var(--c-252831)":"var(--c-1a1c22)"}; }
`,Fu=f.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-width: 220px;
`,Bu=f.div`
  display: flex;
  align-items: center;
  gap: 7px;
  min-width: 0;
  max-width: 240px;
  overflow: hidden;
  color: var(--c-aeb2ba);
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
  .dot { flex: none; width: 7px; height: 7px; border-radius: 50%; background: var(--status-color, var(--c-57d68d)); box-shadow: 0 0 0 4px color-mix(in srgb, var(--status-color, var(--c-57d68d)) 14%, transparent); }
  .state { color: var(--status-color, var(--c-57d68d)); }
`,Uu=f.div`
  min-height: 0;
  display: grid;
  grid-template-columns: var(--dock-width) ${({$leftHidden:e})=>e?"0px":"calc(var(--left-rail) * var(--rail-scale, 1))"} minmax(0, 1fr) ${({$drawerOpen:e})=>e?"calc(var(--right-rail, 332px) * var(--rail-scale, 1) + var(--gm-nav, 0px) * var(--gm-nav-room, 1) * var(--text-zoom, 1))":"calc(54px * var(--text-zoom, 1))"};
  transition: grid-template-columns 220ms ease;
`,Gu=f.nav`
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 0;
  border-right: 1px solid var(--border);
  background: var(--c-0e0f13);
  overflow-y: auto;
  scrollbar-width: none;
  .dock-divider { flex: none; width: 22px; height: 1px; margin: 4px 0; background: var(--border); }
  .dock-spacer { flex: 1; }
  button {
    position: relative;
    flex: none;
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    padding: 0;
    border: 1px solid transparent;
    border-radius: 9px;
    color: var(--c-8d929d);
    background: transparent;
    cursor: pointer;
    transition: color 140ms ease, background 140ms ease, border-color 140ms ease;
  }
  button:hover { color: var(--c-e9e7e2); background: color-mix(in srgb, var(--c-ffffff) 6%, transparent); }
  button[aria-pressed='true'] { color: var(--c-b9abff); background: color-mix(in srgb, var(--c-9b7bff) 15%, transparent); border-color: color-mix(in srgb, var(--c-9b7bff) 30%, transparent); }
  button:focus-visible { outline: 2px solid var(--c-9b7bff); outline-offset: 1px; }
`,qu=f.aside`
  min-width: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
  background: var(--c-101116);
  /* Em telas baixas as seções não se sobrepõem: a coluna inteira rola. */
  overflow-x: hidden;
  overflow-y: auto;
`,Fd=f.section`
  flex: 0 0 auto;
  padding: 17px 16px;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 6.5%, transparent);
  @media (max-height: 760px) and (min-width: 761px) { padding-top: 12px; padding-bottom: 12px; }
  /* Com o chat fechado, o log ocupa o espaço que sobra na coluna. */
  ${({$grow:e})=>e&&"flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column;"}
`,Vu=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 12px;
  .count { color: var(--c-b7bac2); }
`,Wu=f.div`
  display: grid;
  gap: 9px;
  max-height: clamp(120px, 30vh, 320px);
  overflow-y: auto;
  padding-right: 3px;
`,Yu=f.div`
  display: grid;
  gap: 5px;
  min-width: 0;
  .player-line { display: flex; align-items: center; gap: 10px; min-width: 0; }
  .player-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    padding-left: 40px;
  }
  .player-actions select { min-width: 0; max-width: 112px; padding: 2px 4px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent); border-radius: 6px; color: var(--c-c9c9ca); background: var(--c-14161b); font-size: 10px; }
  .presence-label { display: inline-flex; align-items: center; gap: 4px; flex: 0 0 auto; color: var(--c-8d929d); font-size: 9px; }
`,Hu=f.div`
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  background: ${({$color:e})=>e||"#3a3e48"};
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--c-ffffff) 14%, transparent);
`,Ku=f.div`
  min-width: 0;
  flex: 1;
  display: grid;
  gap: 2px;
  strong { overflow: hidden; color: var(--c-e7e6e4); font-size: 12px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { overflow: hidden; color: var(--c-8d929d); font-size: 10px; text-overflow: ellipsis; white-space: nowrap; }
`,Ju=f.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({$online:e})=>e?"var(--c-56d28b)":"var(--c-555b66)"};
  box-shadow: ${({$online:e})=>e?"0 0 0 3px color-mix(in srgb, var(--c-56d28b) 10%, transparent)":"none"};
`,Xu=f(Fd)`
  /* Sem min-height: 0 — a seção nunca fica menor que o próprio conteúdo (e não invade o log). */
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`,Zu=f.div`
  flex: 1 1 0;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 3px;
  .chat-older { align-self: center; padding: 4px 10px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent); border-radius: 999px; color: var(--c-b9abff); background: var(--c-17191f); font-size: 10px; cursor: pointer; }
`,Qu=f.div`
  display: grid;
  gap: 3px;
  /* Mensagens fora da tela não são desenhadas pelo navegador até aparecerem. */
  content-visibility: auto;
  contain-intrinsic-size: auto 48px;
  .meta { display: flex; flex-wrap: wrap; align-items: center; gap: 3px 7px; color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.06em; }
  .bubble { color: var(--c-bfc1c7); font-size: 11px; line-height: 1.45; white-space: pre-wrap; overflow-wrap: anywhere; }
  .bubble strong { color: var(--c-efb1ab); font-weight: 600; }
  ${({$mentioned:e})=>e&&"margin: 0 -6px; padding: 4px 6px; border-left: 2px solid var(--c-f0ad61); border-radius: 6px; background: color-mix(in srgb, var(--c-f0ad61) 8%, transparent);"}
  ${({$whisper:e})=>e&&".bubble { color: var(--c-cdbfff); font-style: italic; }"}
  .whisper { color: var(--c-b9abff); text-transform: none; letter-spacing: 0; }
  .speaker { display: flex; align-items: center; gap: 7px; }
  .speaker img, .speaker .initials { width: 22px; height: 22px; flex: none; border-radius: 50%; object-fit: cover; }
  .speaker .initials { display: grid; place-items: center; color: #fff; font-size: 8px; font-weight: 700; }
  .speaker strong { color: var(--c-f3c48f); font-family: Georgia, serif; font-size: 11px; text-transform: none; letter-spacing: 0; }
  .speaker small { color: var(--c-8d929d); text-transform: none; letter-spacing: 0; }
  .bubble.in-character { padding-left: 29px; color: var(--c-e6dccb); font-family: Georgia, serif; font-size: 12px; }
  .bubble mark { padding: 0 2px; border-radius: 4px; color: var(--c-d8cfff); background: color-mix(in srgb, var(--c-8e6bff) 18%, transparent); }
  .bubble mark.me { color: var(--c-ffd9a8); background: color-mix(in srgb, var(--c-f0ad61) 22%, transparent); }
  .roll-dice { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; margin-top: 2px; }
  .roll-dice .die { min-width: 24px; height: 24px; padding: 0 5px; display: inline-grid; place-items: center; border: 1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent); border-radius: 5px; color: var(--c-e7e5e2); background: var(--c-1f222a); font-size: 12px; font-weight: 700; font-variant-numeric: tabular-nums; }
  .roll-dice .die.max { border-color: var(--c-63d59a); color: var(--c-63d59a); background: color-mix(in srgb, var(--c-63d59a) 14%, transparent); }
  .roll-dice .die.min { border-color: var(--c-f07970); color: var(--c-f07970); background: color-mix(in srgb, var(--c-f07970) 14%, transparent); }
  .roll-dice .die.dropped { opacity: 0.35; text-decoration: line-through; }
  .roll-dice .mod { color: var(--c-bfc1c7); font-size: 12px; font-weight: 600; }
  .roll-dice .total { margin-left: 2px; color: var(--c-8d929d); font-size: 12px; }
  .roll-dice .total strong { color: var(--c-e7e5e2); font-size: 16px; font-weight: 700; }
  .reactions { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; min-height: 0; }
  .reactions button { padding: 1px 6px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent); border-radius: 999px; color: var(--c-c9c9ca); background: var(--c-191b21); font-size: 10px; cursor: pointer; }
  .reactions button.mine { border-color: color-mix(in srgb, var(--c-a28af3) 60%, transparent); background: color-mix(in srgb, var(--c-8e6bff) 16%, transparent); }
  .reactions .quick { display: inline-flex; gap: 2px; opacity: 0; transition: opacity .15s; }
  .reactions .quick button { padding: 0 3px; border-color: transparent; background: transparent; }
  &:hover .reactions .quick, .reactions .quick:focus-within { opacity: 1; }
`,ef=f.div`
  min-height: 14px;
  margin-top: 8px;
  color: var(--c-8f86c9);
  font-size: 10px;
  font-style: italic;
  &:empty { visibility: hidden; }
`,tf=f.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 14px;
  padding: 7px 5px 4px 11px;
  border: 1px solid var(--c-666b76);
  border-radius: 10px;
  background: var(--c-191b21);
  &:focus-within { border-color: var(--c-b9abff); }
  textarea { width: 100%; min-width: 0; min-height: 34px; max-height: 120px; padding: 0 6px 0 0; border: 0; outline: 0; resize: vertical; color: var(--c-e7e5e2); background: transparent; font: inherit; font-size: 11px; line-height: 1.5; }
  textarea::placeholder { color: var(--c-8d929d); }
  .composer-tools { display: flex; align-items: center; gap: 6px; min-height: 26px; border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent); padding-top: 3px; }
  .composer-hint { flex: 1; min-width: 0; overflow: hidden; color: var(--c-8d929d); font-size: 9px; text-overflow: ellipsis; white-space: nowrap; }
  select { max-width: 92px; border: 0; border-right: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent); outline: 0; padding-right: 4px; color: var(--c-f3c48f); background: transparent; font-size: 10px; }
  select option { color: var(--c-e7e5e2); background: var(--c-191b21); }
  button { border: 0; color: var(--c-a9a0ff); background: transparent; cursor: pointer; display: grid; place-items: center; padding: 4px; }
`,af=f.div`
  max-height: ${({$grow:e})=>e?"none":"clamp(72px, 16vh, 142px)"};
  ${({$grow:e})=>e&&"flex: 1 1 0; min-height: 72px;"}
  display: flex;
  flex-direction: column;
  gap: 9px;
  overflow-y: auto;
`,rf=f.div`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 6px;
  color: var(--c-848995);
  font-size: 10px;
  line-height: 1.35;
  .icon { color: ${({$accent:e})=>St(e)||"var(--c-9a9faa)"}; margin-top: 1px; }
  time { display: block; margin-top: 3px; color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 8px; }
`,of=f.main`
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: var(--c-0e0f13);
`,nf=f.div`
  min-height: 59px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 12px;
  padding: 11px 18px;
  border-bottom: 1px solid var(--border);
  background: var(--c-111217);
  @media (max-height: 760px) and (min-width: 761px) { min-height: 50px; padding-top: 7px; padding-bottom: 7px; }
`,sf=f.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 1 180px;
  min-width: 0;
  .scene-icon { width: 31px; height: 31px; display: grid; place-items: center; border-radius: 9px; color: var(--c-e9d9ff); background: color-mix(in srgb, var(--c-9677ff) 14%, transparent); }
  .text { min-width: 0; display: grid; gap: 3px; }
  strong { overflow: hidden; color: var(--c-f1efeb); font-size: 14px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.04em; text-transform: uppercase; }
`,cf=f.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,lf=f.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;f.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
`;const df=f.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 7px;
  border: 1px solid ${({$tone:e})=>e==="warning"?"color-mix(in srgb, var(--c-f0ad61) 30%, transparent)":"color-mix(in srgb, var(--c-56d28b) 25%, transparent)"};
  border-radius: 6px;
  color: ${({$tone:e})=>e==="warning"?"var(--c-efbd86)":"var(--c-8cddb0)"};
  background: ${({$tone:e})=>e==="warning"?"color-mix(in srgb, var(--c-f0ad61) 8%, transparent)":"color-mix(in srgb, var(--c-56d28b) 7%, transparent)"};
  font-family: 'DM Mono', monospace;
  font-size: 8px;
  text-transform: uppercase;
`,pf=f.div`
  display: flex;
  gap: 4px;
  margin: -4px 0 9px;
  button { padding: 3px 6px; border: 1px solid transparent; border-radius: 5px; color: var(--c-8d929d); background: transparent; cursor: pointer; font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; }
  button.active { color: var(--c-d8d0ff); border-color: color-mix(in srgb, var(--c-9b7bff) 28%, transparent); background: color-mix(in srgb, var(--c-9b7bff) 10%, transparent); }
`,uf=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
`,ff=f.div`
  display: grid;
  gap: 6px;
`,mf=f.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 8px;
  border: 1px solid ${({$active:e})=>e?"color-mix(in srgb, var(--c-f0ad61) 45%, transparent)":"color-mix(in srgb, var(--c-ffffff) 6%, transparent)"};
  border-radius: 8px;
  background: ${({$active:e})=>e?"color-mix(in srgb, var(--c-f0ad61) 9%, transparent)":"var(--c-14161b)"};
  opacity: ${({$defeated:e})=>e?.5:1};
  .initiative-name s { color: var(--c-8a8f99); }
  .initiative-order { width: 14px; color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 8px; text-align: right; }
  .initiative-avatar { width: 22px; height: 22px; display: grid; place-items: center; border-radius: 6px; color: #fff; background: ${({$color:e})=>e||"#6753bd"}; font-size: 9px; font-weight: 700; }
  .initiative-name { min-width: 0; flex: 1; overflow: hidden; color: var(--c-d9d6d3); font-size: 9px; text-overflow: ellipsis; white-space: nowrap; }
  input { width: 40px; padding: 4px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent); border-radius: 5px; color: var(--c-f0e8d9); background: var(--c-1d2027); font-family: 'DM Mono', monospace; font-size: 9px; text-align: center; }
`,gf=f.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 5px;
  border-radius: 5px;
  color: var(--c-eab9b3);
  background: color-mix(in srgb, var(--c-f04f4a) 10%, transparent);
  font-size: 8px;
`,bf=f.button`
  width: 31px;
  height: 31px;
  display: grid;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 8px;
  color: var(--c-a0a5af);
  background: var(--c-191b21);
  cursor: pointer;
  transition: 160ms ease;
  &:hover { color: var(--c-ffffff); border-color: color-mix(in srgb, var(--c-ffffff) 18%, transparent); background: var(--c-242730); }
`,hf=f.span`
  min-width: 43px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  text-align: center;
`,xf=f.div`
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 18px;
  background: radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--c-554376) 11%, transparent), transparent 52%), var(--c-0d0e12);
`,vf=f.div`
  position: relative;
  min-height: 460px;
  height: 100%;
  min-width: 670px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 16px;
  background: #13151a;
  box-shadow: 0 25px 80px rgba(0,0,0,0.34), inset 0 0 0 1px rgba(255,255,255,0.025);
`,yf=f.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  transform-origin: center;
  transition: transform 180ms ease;
  background-color: #17171a;
  background-image:
    linear-gradient(rgba(188, 161, 118, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(188, 161, 118, 0.08) 1px, transparent 1px),
    radial-gradient(circle at 20% 20%, rgba(201, 145, 86, 0.19), transparent 27%),
    radial-gradient(circle at 78% 75%, rgba(96, 73, 143, 0.22), transparent 30%),
    linear-gradient(135deg, #25201c, #17171b 48%, #151823);
  background-size: 52px 52px, 52px 52px, auto, auto, auto;
  &[data-theme='city'] { background-image: linear-gradient(rgba(91, 157, 192, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(91, 157, 192, 0.09) 1px, transparent 1px), radial-gradient(circle at 50% 50%, rgba(57, 142, 179, 0.26), transparent 35%), linear-gradient(135deg, #14202a, #12161f 53%, #1a1523); }
  &[data-theme='tavern'] { background-image: linear-gradient(rgba(206, 148, 71, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(206, 148, 71, 0.08) 1px, transparent 1px), radial-gradient(circle at 35% 58%, rgba(216, 132, 51, 0.23), transparent 24%), linear-gradient(135deg, #2b1c16, #171514 56%, #211823); }
  /* Vista isométrica: tokens e objetos desfazem a rotação do chão e ficam de pé sobre o ponto. */
  &[data-view='iso'] .iso-upright { transform-origin: 0 0; transform: rotate(-45deg) scale(var(--iso-sx, 1), var(--iso-sy, 2)) translate(-50%, -82%); filter: drop-shadow(0 10px 6px rgba(0,0,0,.45)); }
  /* Mesa vazia: fundo liso, sem cenário pronto, até o Mestre enviar um mapa. */
  &[data-theme='blank'] { background-image: linear-gradient(135deg, #1a1b21, #15161b); }
  &[data-grid='false'] { background-size: auto, auto, auto, auto, auto; background-image: radial-gradient(circle at 20% 20%, rgba(201, 145, 86, 0.19), transparent 27%), radial-gradient(circle at 78% 75%, rgba(96, 73, 143, 0.22), transparent 30%), linear-gradient(135deg, #25201c, #17171b 48%, #151823); }
  &[data-theme='blank'][data-grid='false'] { background-image: linear-gradient(135deg, #1a1b21, #15161b); }
  /* Com mapa enviado: o espaço em volta da imagem fica como fundo vazio, sem o cenário decorativo. */
  &[data-map='true'][data-theme] { background-image: none; background-color: #121419; }
  /* Com zoom, o mapa pode ser arrastado com o botão esquerdo num ponto vazio. */
  &[data-pannable='true'] { cursor: grab; }
  &[data-panning='true'] { cursor: grabbing; transition: none; }
`,V={objects:2,tokens:3,drawings:4,fog:5,partyAboveFog:6,fogEditor:7,interface:8},wf=f.svg`
  position: absolute;
  inset: 0;
  z-index: ${V.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .fog-fill { fill: ${({$gm:e})=>e?"rgba(6, 7, 11, 0.5)":"rgba(6, 7, 11, 0.97)"}; }
  .fog-region { fill: none; stroke: rgba(240, 173, 97, 0.65); stroke-width: 1.5; stroke-dasharray: 6 5; }
  .fog-draft { fill: ${({$hide:e})=>e?"rgba(240, 79, 74, 0.16)":"rgba(255, 220, 160, 0.14)"}; stroke: ${({$hide:e})=>e?"#f07970":"#ffd49a"}; stroke-width: 1.5; stroke-dasharray: 4 4; }
`,Sf=f.svg`
  position: absolute;
  inset: 0;
  z-index: ${V.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .dark-area { fill: ${({$gm:e})=>e?"rgba(4, 5, 9, 0.55)":"#040509"}; stroke: ${({$gm:e})=>e?"rgba(185, 139, 103, 0.8)":"none"}; stroke-width: 1.5; stroke-dasharray: 6 4; }
  .dark-area.open { fill: rgba(4, 5, 9, 0.12); }
  .dark-area.draft { fill: rgba(4, 5, 9, 0.45); stroke: #e2b48d; }
`,kf=f.svg`
  position: absolute;
  inset: 0;
  z-index: ${V.drawings};
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  .drawing { fill: none; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
  .drawing-fill { stroke: none; }
  .drawing-aoe { stroke-width: 2; stroke-dasharray: 8 5; }
  .drawing-text { font-family: 'Space Grotesk', sans-serif; font-size: 15px; font-weight: 600; paint-order: stroke; stroke: rgba(8, 9, 12, 0.85); stroke-width: 4px; }
  &[data-erasing='true'] .erasable { pointer-events: visiblePainted; cursor: pointer; }
  &[data-erasing='true'] .erasable:hover { opacity: 0.45; }
`,Af=f.svg`
  position: absolute;
  inset: 0;
  z-index: ${V.interface};
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  line, circle, polygon { fill: none; stroke: #ffe1b8; stroke-width: 2; stroke-dasharray: 7 5; }
  circle { fill: rgba(255, 212, 154, 0.07); }
  .aoe { fill: rgba(255, 212, 154, 0.18); }
  .measure-label { fill: #1a1209; font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 700; }
  .measure-badge { fill: #f3c48f; stroke: none; }
`,Ef=f.div`
  position: absolute;
  inset: 0;
  z-index: ${V.fogEditor};
  cursor: ${({$tool:e})=>e==="text"?"text":"crosshair"};
  touch-action: none;
`,Mf=f.div`
  position: absolute;
  top: 86px;
  left: 18px;
  z-index: ${V.interface};
  display: grid;
  grid-template-columns: repeat(2, 30px);
  gap: 4px;
  padding: 5px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--c-0e0f13) 86%, transparent);
  backdrop-filter: blur(12px);
  .draw-divider { grid-column: 1 / -1; }
  &[data-open='false'] { grid-template-columns: 30px; }
  .draw-toggle { grid-column: 1 / -1; justify-self: center; }
  button { width: 30px; height: 30px; display: grid; place-items: center; border: 1px solid transparent; border-radius: 7px; color: var(--c-9ea2ac); background: transparent; cursor: pointer; transition: 140ms ease; }
  button:hover { color: var(--c-ffffff); background: var(--c-1f2128); }
  button[aria-pressed='true'] { color: var(--c-ebe5ff); border-color: color-mix(in srgb, var(--c-9b7bff) 60%, transparent); background: color-mix(in srgb, var(--c-9b7bff) 16%, transparent); }
  button:disabled { opacity: 0.35; cursor: default; background: transparent; }
  .draw-divider { height: 1px; margin: 2px 3px; background: color-mix(in srgb, var(--c-ffffff) 8%, transparent); }
  /* A cor ativa, sozinha numa linha; o clique abre a roda cromática. */
  .draw-swatch { grid-column: 1 / -1; justify-self: center; width: 24px; height: 24px; border-radius: 50%; border: 2px solid var(--c-ffffff); box-shadow: 0 0 0 2px color-mix(in srgb, var(--c-ffffff) 18%, transparent); cursor: pointer; }
  .draw-swatch:hover { filter: brightness(1.1); }
`,Tf=f.svg`
  position: absolute;
  inset: 0;
  z-index: ${V.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .vision-dark { fill: ${({$gm:e})=>e?"rgba(4, 5, 9, 0.38)":"rgba(4, 5, 9, 0.95)"}; }
`,jf=f.svg`
  position: absolute;
  inset: 0;
  z-index: ${V.partyAboveFog};
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  .wall-line { stroke: #f0a35f; stroke-width: 4; stroke-linecap: round; }
  .wall-line.door { stroke: #b98b67; stroke-width: 6; }
  .wall-line.door.open { stroke-dasharray: 5 6; opacity: 0.6; }
  .wall-line.draft { opacity: 0.65; stroke-dasharray: 8 6; }
  .wall-hit { stroke: transparent; stroke-width: 16; stroke-linecap: round; pointer-events: stroke; cursor: pointer; }
  &[data-erasing='true'] .wall-line { stroke: #f07970; }
  .door-toggle { pointer-events: all; cursor: pointer; }
  .door-toggle circle { fill: #2b1d14; stroke: #e2b48d; stroke-width: 2; }
  .door-toggle text { fill: #ffe1b8; font-size: 10px; pointer-events: none; }
  .door-toggle:hover circle { fill: #4a3020; }
  .wall-line.barrier { stroke: #f07970; stroke-width: 4; stroke-dasharray: 3 5; }
  .wall-line.barrier.open { opacity: 0.35; }
  .wall-line.locked { stroke: #e2b48d; }
  .lock-toggle { pointer-events: all; cursor: pointer; }
  .lock-toggle circle { fill: #1d1a24; stroke: #b9abff; stroke-width: 1.5; }
  .lock-toggle.on circle { fill: #3a2430; stroke: #f07970; }
  .lock-toggle text { fill: #f4f2ef; font-size: 8px; pointer-events: none; }
`,zf=f.div`
  position: absolute;
  z-index: ${V.interface+1};
  ${({$banner:e})=>e?`
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 12px;
    border: 1px solid rgba(79,209,197,0.45);
    border-radius: 999px;
    color: #bff6ef;
    background: rgba(8, 20, 20, 0.88);
    font-size: 11px;
    white-space: nowrap;
    button { padding: 0; border: 0; color: #4fd1c5; background: none; cursor: pointer; font: inherit; font-weight: 600; text-decoration: underline; }
  `:`
    inset: 0;
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 8px;
    color: #bfc3cc;
    background: radial-gradient(circle at 50% 45%, #1a1d26, #0b0c10 70%);
    text-align: center;
    strong { color: #f4f2ef; font-size: 16px; font-weight: 600; }
    span { font-size: 12px; }
  `}
`,If=f.div`
  position: absolute;
  z-index: ${V.partyAboveFog};
  border: 2px dashed ${({$fired:e,$draft:t})=>t?"#9ff0e7":e?"rgba(111,116,127,0.7)":"rgba(79,209,197,0.8)"};
  border-radius: 8px;
  background: ${({$fired:e,$draft:t})=>t?"rgba(79,209,197,0.16)":e?"rgba(111,116,127,0.06)":"rgba(79,209,197,0.07)"};
  pointer-events: none;
  span { position: absolute; top: 4px; left: 6px; padding: 2px 6px; border-radius: 5px; color: ${({$fired:e})=>e?"#9a9faa":"#bff6ef"}; background: rgba(8, 20, 20, 0.75); font-family: 'DM Mono', monospace; font-size: 9px; white-space: nowrap; }
`,_f=f.div`
  position: absolute;
  inset: 0;
  z-index: ${V.fogEditor};
  cursor: crosshair;
  touch-action: none;
`,Cf=f.div`
  position: absolute;
  left: 18px;
  bottom: 16px;
  z-index: ${V.interface};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  max-width: calc(100% - 36px);
  padding: 6px;
  border: 1px solid color-mix(in srgb, var(--c-f0ad61) 28%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--c-0e0f13) 86%, transparent);
  backdrop-filter: blur(12px);
  .fog-title { padding: 0 6px; color: var(--c-f3c48f); font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.12em; }
  button { display: inline-flex; align-items: center; gap: 4px; padding: 6px 8px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent); border-radius: 7px; color: var(--c-b9bcc5); background: var(--c-191b21); cursor: pointer; font-size: 10px; transition: 160ms ease; }
  button:hover { color: var(--c-ffffff); border-color: color-mix(in srgb, var(--c-ffffff) 20%, transparent); }
  button[aria-pressed='true'] { color: var(--c-ffe1b8); border-color: color-mix(in srgb, var(--c-f0ad61) 60%, transparent); background: color-mix(in srgb, var(--c-f0ad61) 14%, transparent); }
`,Nf=f.span`
  position: absolute;
  left: ${({$x:e})=>`${e}%`};
  top: ${({$y:e})=>`${e}%`};
  z-index: ${V.interface};
  width: 24px;
  height: 24px;
  border: 2px solid #ffd49a;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 8px rgba(240,173,97,.18), 0 0 28px rgba(240,173,97,.75);
  pointer-events: none;
  animation: pingPulse 900ms ease-out both;
  @keyframes pingPulse { from { opacity: .95; transform: translate(-50%, -50%) scale(.5); } to { opacity: 0; transform: translate(-50%, -50%) scale(1.8); } }
`,Rf=f.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  /* O mapa aparece inteiro e com as cores originais: sem corte, sem distorção e sem escurecer. */
  background-image: ${({$image:e})=>`url(${JSON.stringify(e)})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  /* Prévia: miniatura desfocada até o mapa inteiro chegar. */
  ${({$preview:e})=>e?"filter: blur(14px); transform: scale(1.06);":""}
`,$f=f.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.025) 50%, transparent 75%);
  mix-blend-mode: screen;
`,Of=f.div`
  position: absolute;
  top: 22px;
  left: 24px;
  z-index: ${V.interface};
  display: grid;
  gap: 4px;
  pointer-events: none;
  .eyebrow { color: rgba(242, 218, 176, 0.66); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; }
  strong { color: rgba(255, 244, 222, 0.78); font-size: 21px; font-weight: 500; letter-spacing: -0.04em; }
`,Pf=f.div`
  position: absolute;
  right: 18px;
  bottom: 16px;
  z-index: ${V.interface};
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 10px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent);
  border-radius: 8px;
  color: var(--c-979aa5);
  background: color-mix(in srgb, var(--c-0a0b0f) 69%, transparent);
  backdrop-filter: blur(12px);
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  pointer-events: none;
`,Lf=f.button`
  position: absolute;
  left: ${({$x:e})=>`${e}%`};
  top: ${({$y:e})=>`${e}%`};
  z-index: ${V.objects};
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border: 1px solid ${({$kind:e})=>e==="chest"?"rgba(245, 178, 92, 0.7)":"rgba(154, 123, 255, 0.75)"};
  border-radius: 13px;
  color: ${({$kind:e})=>e==="chest"?"#ffd38e":"#c6b9ff"};
  background: ${({$kind:e})=>e==="chest"?"rgba(92, 53, 28, 0.92)":"rgba(56, 42, 105, 0.94)"};
  box-shadow: 0 0 0 5px ${({$kind:e})=>e==="chest"?"rgba(236, 151, 65, 0.1)":"rgba(154, 123, 255, 0.1)"}, 0 12px 28px rgba(0,0,0,0.3);
  cursor: ${({$draggable:e,$dragging:t})=>t?"grabbing":e?"grab":"pointer"};
  touch-action: ${({$draggable:e})=>e?"none":"auto"};
  opacity: ${({$dragging:e})=>e?.85:1};
  transform: translate(-50%, -50%);
  transition: transform 160ms ease, box-shadow 160ms ease;
  &:hover { transform: translate(-50%, -50%) scale(1.08); box-shadow: 0 0 0 7px ${({$kind:e})=>e==="chest"?"rgba(236, 151, 65, 0.14)":"rgba(154, 123, 255, 0.15)"}, 0 12px 28px rgba(0,0,0,0.4); }
  small { position: absolute; top: calc(100% + 7px); left: 50%; transform: translateX(-50%); padding: 4px 7px; border-radius: 5px; color: #e7e3da; background: rgba(13, 14, 18, 0.86); font-family: 'DM Mono', monospace; font-size: 8px; white-space: nowrap; opacity: 0; transition: opacity 160ms ease; pointer-events: none; }
  &:hover small { opacity: 1; }
  .marker-pinned { position: absolute; left: -6px; bottom: -6px; width: 16px; height: 16px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; color: #e7e3da; background: #3a3f4b; }
  .marker-lock { position: absolute; right: -6px; bottom: -6px; width: 18px; height: 18px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; color: #1a1209; background: #f3b37d; }
`,ea=({$monster:e,$activeTurn:t,$marked:a,$selected:r})=>r?"0 0 0 3px #9b7bff, 0 0 0 8px rgba(155,123,255,0.3)":t?"0 0 0 4px rgba(240,173,97,0.85), 0 0 22px rgba(240,173,97,0.55)":a?"0 0 0 4px rgba(255,212,154,0.55)":`0 0 0 5px ${e?"rgba(240,79,74,0.12)":"rgba(233,228,217,0.11)"}`,Df=f.button`
  position: absolute;
  /* left/top vêm do style do elemento: muda a cada arraste e não deve gerar uma classe nova por posição. */
  z-index: ${({$aboveFog:e})=>e?V.partyAboveFog:V.tokens};
  width: ${({$monster:e,$scale:t=1})=>`${Math.round((e?36:42)*t)}px`};
  height: ${({$monster:e,$scale:t=1})=>`${Math.round((e?36:42)*t)}px`};
  display: grid;
  place-items: center;
  font-size: ${({$scale:e=1})=>`${Math.round(13*Math.min(e,1.6))}px`};
  border: 2px ${({$hiddenToken:e})=>e?"dashed":"solid"} ${({$monster:e})=>e?"#f04f4a":"#e9e4d9"};
  border-radius: 50%;
  color: #fff;
  background: ${({$color:e})=>e||"#6f59cf"};
  box-shadow: ${ea}, 0 12px 22px rgba(0,0,0,0.34);
  opacity: ${({$hiddenToken:e})=>e?.72:1};
  filter: ${({$defeated:e})=>e?"grayscale(1) brightness(0.6)":"none"};
  cursor: ${({$draggable:e})=>e?"grab":"default"};
  transform: translate(-50%, -50%);
  /* Quem vê o token de outra pessoa acompanha o movimento suavizado; quem arrasta vê o token preso ao cursor. */
  transition: ${({$dragging:e})=>e?"":"left 140ms linear, top 140ms linear, "}box-shadow 160ms ease, filter 160ms ease, opacity 160ms ease;
  &:active { cursor: ${({$draggable:e})=>e?"grabbing":"default"}; }
  &:hover { box-shadow: ${ea}, 0 0 0 9px rgba(233,228,217,0.08), 0 12px 22px rgba(0,0,0,0.42); }
  /* Nome do token: contorno escuro para ler sobre mapas claros; cor e fundo podem vir da ficha. */
  small { position: absolute; top: calc(100% + 6px); left: 50%; transform: translateX(-50%); color: #dedbd3; font-family: 'DM Mono', monospace; font-size: 8px; white-space: nowrap; opacity: 0.92; pointer-events: none; text-shadow: 0 1px 2px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.7); }
  small.label-backdrop { padding: 1px 4px; border-radius: 4px; background: rgba(10,11,14,0.78); opacity: 1; }
  .token-face { position: absolute; inset: 0; display: grid; place-items: center; overflow: hidden; border-radius: 50%; transition: transform 200ms ease; pointer-events: none; }
  .token-locked { position: absolute; left: -5px; bottom: -5px; width: 15px; height: 15px; display: grid; place-items: center; border-radius: 50%; color: #1a1209; background: #f3b37d; pointer-events: none; }
  .token-avatar { position: absolute; inset: 0; width: 100%; height: 100%; border-radius: 50%; object-fit: cover; pointer-events: none; }
  /* Avatar com o fundo recortado: o personagem sai um pouco do círculo, com sombra própria. */
  .token-face:has(.token-avatar.cutout) { overflow: visible; }
  /* Personagem inteiro: sem a borda e o fundo redondo; o anel aparece só ao selecionar ou no turno. */
  &[data-bare='true'] { border-color: transparent; background: transparent; }
  &[data-bare='true']:not(:hover) { box-shadow: ${e=>e.$selected||e.$activeTurn||e.$marked?ea(e):"none"}; }
  &[data-bare='true'] .token-face { overflow: visible; border-radius: 0; }
  &[data-bare='true'] .token-avatar { border-radius: 0; object-fit: contain; transform: scale(1.2); filter: drop-shadow(0 2px 2px rgb(0 0 0 / 55%)); }
  .token-avatar.cutout { border-radius: 0; object-fit: contain; transform: translateY(-14%) scale(1.25); filter: drop-shadow(0 2px 2px rgb(0 0 0 / 55%)); }
  .token-defeated { position: absolute; inset: -2px; display: grid; place-items: center; border-radius: 50%; color: #f07970; font-size: 22px; font-weight: 700; line-height: 1; pointer-events: none; }
  .token-turn { position: absolute; top: -9px; right: -9px; min-width: 17px; height: 17px; display: grid; place-items: center; padding: 0 4px; border-radius: 999px; color: #1a1209; background: #f3b37d; font-family: 'DM Mono', monospace; font-size: 8px; font-weight: 700; pointer-events: none; }
  .token-conditions { position: absolute; top: calc(100% + 19px); left: 50%; transform: translateX(-50%); display: flex; gap: 3px; pointer-events: none; }
  .token-conditions span { padding: 2px 5px; border-radius: 4px; color: #ffd2cc; background: rgba(140, 34, 40, 0.85); font-size: 7px; white-space: nowrap; }
`,Ff=f.div`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: ${V.interface};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  color: var(--c-9296a0);
  background: color-mix(in srgb, var(--c-0e0f13) 69%, transparent);
  backdrop-filter: blur(12px);
  font-size: 9px;
  .legend-item { display: flex; align-items: center; gap: 5px; }
  .legend-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--c-9b7bff); }
  .legend-dot.monster { background: var(--c-f04f4a); }
`,Bf=f.aside`
  min-width: 0;
  border-left: 1px solid var(--border);
  background: var(--c-111217);
  overflow: hidden;
`,Uf=f.div`
  width: 54px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 18px;
`,Gf=f.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,qf=f.div`
  min-height: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 16px;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 6.5%, transparent);
  .title { display: flex; align-items: center; gap: 10px; min-width: 0; }
  .title-icon { width: 30px; height: 30px; display: grid; place-items: center; border-radius: 9px; color: var(--c-f3b3aa); background: color-mix(in srgb, var(--c-f04f4a) 13%, transparent); }
  strong { color: var(--c-eeece8); font-size: 13px; font-weight: 600; }
  span { display: block; margin-top: 2px; color: var(--c-8d929d); font-size: 9px; }
`,Vf=f.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  & > :first-child { margin-top: 0; }
  /* Ferramenta aberta pelo índice do Mestre pisca por um instante. */
  [data-flash='true'] { border-radius: 12px; box-shadow: 0 0 0 2px var(--c-9b7bff); transition: box-shadow 200ms ease; }
`,Wf=f.div`
  height: 100%;
  display: flex;
  & > div:first-child { flex: 1; min-width: 0; }
`,Yf=f.nav`
  flex: none;
  width: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 0 10px;
  border-left: 1px solid var(--border);
  background: var(--c-0e0f13);
  overflow-y: auto;
  scrollbar-width: none;
  .nav-spacer { flex: 1; }
  button {
    flex: none;
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    padding: 0;
    border: 1px solid transparent;
    border-radius: 9px;
    color: var(--c-8d929d);
    font: inherit;
    background: transparent;
    cursor: pointer;
    transition: color 140ms ease, background 140ms ease, border-color 140ms ease;
  }
  button:hover { color: var(--c-e9e7e2); background: color-mix(in srgb, var(--c-ffffff) 6%, transparent); }
  button[aria-pressed='true'] { color: var(--c-b9abff); background: color-mix(in srgb, var(--c-9b7bff) 15%, transparent); border-color: color-mix(in srgb, var(--c-9b7bff) 30%, transparent); }
  button:focus-visible { outline: 2px solid var(--c-9b7bff); outline-offset: 1px; }
  /* Grupos com o nome embaixo do ícone, para achar sem precisar passar o mouse. */
  button.nav-group { width: 48px; height: 44px; align-content: center; gap: 2px; }
  .nav-label { display: block; max-width: 46px; overflow: hidden; font-size: 8.5px; line-height: 1; letter-spacing: 0; text-overflow: ellipsis; white-space: nowrap; }
`,Hf=f.nav`
  display: grid;
  gap: 5px;
  margin: 8px 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 6.5%, transparent);
  max-height: 128px;
  overflow-y: auto;
  .index-label { color: var(--c-8d929d); font-size: 9px; }
  .index-row { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; }
  .index-row strong { min-width: 44px; color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 8.5px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; }
  button { display: inline-flex; align-items: center; gap: 4px; padding: 3px 8px; border: 1px solid color-mix(in srgb, var(--c-9b7bff) 26%, transparent); border-radius: 999px; color: var(--c-d4ccff); background: color-mix(in srgb, var(--c-9b7bff) 8%, transparent); font: inherit; font-size: 10px; cursor: pointer; }
  button:hover { color: var(--c-ffffff); background: color-mix(in srgb, var(--c-9b7bff) 22%, transparent); }
  button:focus-visible { outline: 2px solid var(--c-9b7bff); outline-offset: 1px; }
  button[data-collapsed='true'] { border-style: dashed; }
  button em { color: var(--c-8d929d); font-size: 8.5px; font-style: normal; }
`,Kf=f.label`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 10px 16px 0;
  padding: 0 8px;
  border: 1px solid var(--c-666b76);
  border-radius: 9px;
  color: var(--c-8d929d);
  background: var(--c-17191f);
  &:focus-within { border-color: var(--c-9b7bff); }
  input { flex: 1; min-width: 0; height: 32px; border: 0; outline: 0; color: var(--c-e9e7e2); background: transparent; font: inherit; font-size: 11px; }
  input::placeholder { color: var(--c-8d929d); }
  input::-webkit-search-cancel-button { display: none; }
  button { display: grid; place-items: center; padding: 2px; border: 0; color: var(--c-8d929d); background: transparent; cursor: pointer; }
  button:hover { color: var(--c-e9e7e2); }
`,Jf=f.div`
  padding: 14px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 12px;
  background: ${({$tint:e})=>e||"var(--c-17191f)"};
`,Xf=f.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .portrait { position: relative; flex-shrink: 0; width: 44px; height: 44px; display: grid; place-items: center; border: 1px solid color-mix(in srgb, var(--c-cbbcff) 42%, transparent); border-radius: 13px; color: var(--c-dbd1ff); background: linear-gradient(145deg, var(--c-3d2864), var(--c-211d37)); }
  .portrait.has-image { width: 64px; height: 64px; }
  .portrait img { width: 100%; height: 100%; border-radius: 12px; object-fit: cover; }
  .portrait.cutout img { object-fit: contain; filter: drop-shadow(0 3px 4px rgb(0 0 0 / 50%)); }
  .portrait button { position: absolute; width: 20px; height: 20px; display: grid; place-items: center; padding: 0; border: 1px solid color-mix(in srgb, var(--c-ffffff) 25%, transparent); border-radius: 50%; color: var(--c-ffffff); background: color-mix(in srgb, var(--c-14161c) 88%, transparent); cursor: pointer; font-size: 10px; }
  .portrait button:hover { background: var(--c-7358d0); }
  .portrait button:disabled { cursor: progress; }
  .portrait .portrait-edit { right: -6px; bottom: -6px; }
  .portrait .portrait-remove { right: -6px; top: -6px; }
  .portrait .portrait-adjust { left: -6px; bottom: -6px; }
  .portrait.whole img { object-fit: contain; }
  .portrait .portrait-remove:hover { background: var(--c-a83a43); }
  strong { display: block; color: var(--c-f5f0e9); font-size: 14px; }
  span { display: block; margin-top: 4px; color: var(--c-888d98); font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; }
`,Zf=f.div`
  display: grid;
  gap: 6px;
  margin-top: 15px;
  .label { display: flex; align-items: center; justify-content: space-between; color: var(--c-8c919c); font-size: 10px; }
  .label strong { color: var(--c-e8e6e1); font-family: 'DM Mono', monospace; font-size: 10px; }
  .track { height: 6px; overflow: hidden; border-radius: 999px; background: var(--c-262931); }
  .fill { width: ${({$value:e})=>`${e}%`}; height: 100%; border-radius: inherit; background: ${({$color:e})=>e||"var(--c-f04f4a)"}; box-shadow: 0 0 14px ${({$glow:e})=>e||"color-mix(in srgb, var(--c-f04f4a) 25%, transparent)"}; }
`,Qf=f.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin-top: 16px;
`,Bd=f.div`
  position: relative;
  display: grid;
  justify-items: center;
  gap: 5px;
  padding: 8px 4px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 6.5%, transparent);
  border-radius: 8px;
  background: var(--c-14161b);
  .name { color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; }
  .value { color: var(--c-e9e3da); font-size: 17px; font-weight: 600; }
  .pip { display: flex; gap: 2px; }
  i { width: 4px; height: 4px; border-radius: 50%; background: var(--c-363943); }
  i.on { background: var(--c-a78cff); }
`,em=f.button`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 16px;
  height: 16px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 5px;
  color: var(--c-b9abff);
  background: color-mix(in srgb, var(--c-9b7bff) 12%, transparent);
  cursor: pointer;
  opacity: 0.72;
  transform: translateY(0);
  transition: 160ms ease;
  ${Bd}:hover & { opacity: 1; transform: translateY(0); }
  &:hover { color: var(--c-ffffff); background: color-mix(in srgb, var(--c-9b7bff) 32%, transparent); }
`,tm=f.div`
  margin-top: 18px;
  .section-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; color: var(--c-7e838f); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; }
  .section-title button:hover { color: var(--c-d4ccff); }
  /* Recolhida: só o título fica à mostra. */
  &:has(> .section-title[data-collapsed='true']) > :not(.section-title) { display: none; }
  .section-title[data-collapsed='true'] { margin-bottom: 0; }
  /* Em destaque (cenas da campanha). */
  &[data-highlight='true'] { padding: 10px; border: 1px solid color-mix(in srgb, var(--c-f3b37d) 35%, transparent); border-radius: 12px; background: color-mix(in srgb, var(--c-f3b37d) 5%, transparent); }
  &[data-highlight='true'] > .section-title { color: var(--c-f3b37d); }
`,am=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 5.5%, transparent);
  &:last-child { border-bottom: 0; }
  .skill-icon { width: 24px; height: 24px; display: grid; place-items: center; border-radius: 7px; color: var(--c-a995ff); background: color-mix(in srgb, var(--c-9b7bff) 11%, transparent); }
  .skill-name { flex: 1; color: var(--c-c9c9ca); font-size: 11px; }
`,Ud=f.input`
  width: 100%;
  padding: 10px 11px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  outline: none;
  color: var(--c-e9e7e2);
  background: var(--c-15171c);
  font-size: 11px;
  &:focus { border-color: var(--c-b9abff); box-shadow: 0 0 0 3px color-mix(in srgb, var(--c-9b7bff) 10%, transparent); }
`,rm=f.label`
  display: grid;
  gap: 6px;
  color: var(--c-8c919b);
  font-size: 10px;
`,om=f.select`
  width: 100%;
  padding: 9px 10px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  outline: 0;
  color: var(--c-e9e7e2);
  background: var(--c-15171c);
  font-size: 11px;
  &:focus { border-color: color-mix(in srgb, var(--c-9b7bff) 70%, transparent); }
`,nm=f.div`
  display: grid;
  grid-template-columns: 1fr 88px;
  gap: 8px;
  /* $stack: em telas estreitas os campos ficam um embaixo do outro (vence o grid-template-columns inline). */
  ${({$stack:e})=>e?"@media (max-width: 560px) { grid-template-columns: minmax(0, 1fr) !important; }":""}
`,im=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,sm=f.button`
  min-height: 67px;
  padding: 8px;
  border: 1px solid ${({$active:e})=>e?"color-mix(in srgb, var(--c-9b7bff) 72%, transparent)":"color-mix(in srgb, var(--c-ffffff) 8%, transparent)"};
  border-radius: 9px;
  color: ${({$active:e})=>e?"var(--c-ebe5ff)":"var(--c-9a9ea8)"};
  background: ${({$theme:e})=>e==="city"?"var(--c-15232d)":e==="tavern"?"var(--c-2d1e16)":e==="blank"?"var(--c-14161b)":"var(--c-26211b)"};
  cursor: pointer;
  text-align: left;
  transition: 160ms ease;
  &:hover { border-color: color-mix(in srgb, var(--c-ffffff) 28%, transparent); transform: translateY(-1px); }
  strong { display: block; font-size: 10px; font-weight: 600; }
  span { display: block; margin-top: 5px; color: var(--c-8d929d); font-size: 8px; }
`,cm=f.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 5.5%, transparent);
  .track-icon { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 7px; color: ${({$active:e})=>e?"var(--c-f1b17e)":"var(--c-8e939e)"}; background: ${({$active:e})=>e?"color-mix(in srgb, var(--c-e58f48) 14%, transparent)":"var(--c-1b1d23)"}; }
  .track-name { flex: 1; color: var(--c-c9c9ca); font-size: 11px; }
`,lm=f.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 10px 12px;
  border: 1px dashed color-mix(in srgb, var(--c-9b7bff) 44%, transparent);
  border-radius: 8px;
  color: var(--c-b9abff);
  background: color-mix(in srgb, var(--c-9b7bff) 7%, transparent);
  cursor: pointer;
  font-size: 10px;
  font-weight: 600;
  transition: 160ms ease;
  &:hover { border-color: color-mix(in srgb, var(--c-9b7bff) 80%, transparent); background: color-mix(in srgb, var(--c-9b7bff) 12%, transparent); }
`,dm=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  padding: 9px 10px;
  border: 1px solid color-mix(in srgb, var(--c-56d28b) 24%, transparent);
  border-radius: 8px;
  color: var(--c-9de4b9);
  background: color-mix(in srgb, var(--c-56d28b) 8%, transparent);
  font-size: 10px;
`,pm=f.div`
  height: 100%;
  display: grid;
  place-items: center;
  padding: 24px;
  color: var(--c-8d929d);
  text-align: center;
  font-size: 11px;
`,um=f.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 7px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 6px;
  color: var(--c-9297a3);
  background: var(--c-191b21);
  font-family: 'DM Mono', monospace;
  font-size: 9px;
`,fm=f.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  > * { flex: 1; }
`,mm=f.p`
  margin: 9px 0 0;
  color: var(--c-8d929d);
  font-size: 9px;
  line-height: 1.45;
`,gm=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,bm=f.button`
  display: grid;
  justify-items: center;
  gap: 5px;
  padding: 8px 5px;
  border: 1px solid ${({$active:e})=>e?"rgba(155,123,255,0.8)":"rgba(255,255,255,0.08)"};
  border-radius: 9px;
  color: ${({$active:e})=>e?"#f0ebff":"#9297a3"};
  background: ${({$skin:e})=>e||"#191b21"};
  cursor: pointer;
  transition: 160ms ease;
  &:hover { border-color: rgba(255,255,255,0.28); transform: translateY(-1px); }
  .swatch { width: 24px; height: 24px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,.3); border-radius: 7px; color: #fff; font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 700; box-shadow: inset 0 0 12px rgba(255,255,255,.12), 0 5px 12px rgba(0,0,0,.2); }
  span { font-size: 8px; }
`,hm=f.div`
  display: grid;
  gap: 7px;
`,xm=f.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 8px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 6.5%, transparent);
  border-radius: 9px;
  color: var(--c-d0ced0);
  background: var(--c-14161b);
  cursor: pointer;
  text-align: left;
  transition: 160ms ease;
  &:hover { border-color: color-mix(in srgb, var(--c-9b7bff) 50%, transparent); background: var(--c-1b1d25); transform: translateX(2px); }
  .sheet-avatar { width: 28px; height: 28px; display: grid; place-items: center; border-radius: 8px; color: #fff; background: ${({$color:e})=>e||"#6753bd"}; font-size: 10px; font-weight: 700; }
  .sheet-copy { min-width: 0; flex: 1; }
  strong { display: block; overflow: hidden; font-size: 10px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { display: block; margin-top: 3px; overflow: hidden; color: var(--c-8d929d); font-size: 8px; text-overflow: ellipsis; white-space: nowrap; }
  .sheet-kind { padding: 4px 5px; border-radius: 5px; color: var(--c-a9a0ff); background: color-mix(in srgb, var(--c-9b7bff) 10%, transparent); font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; }
`,vm=f.div`
  display: grid;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
`,ym=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,wm=f.button`
  min-width: 0;
  display: grid;
  justify-items: center;
  gap: 6px;
  padding: 9px 5px 8px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 7%, transparent);
  border-radius: 9px;
  color: var(--c-bfc0c7);
  background: var(--c-14161b);
  cursor: pointer;
  text-align: center;
  transition: 160ms ease;
  &:hover { border-color: color-mix(in srgb, var(--c-9b7bff) 60%, transparent); background: var(--c-1b1d25); transform: translateY(-2px); }
  strong { display: block; overflow: hidden; max-width: 100%; color: var(--c-dedbe1); font-size: 9px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  small { display: block; overflow: hidden; max-width: 100%; color: var(--c-8d929d); font-size: 7px; text-overflow: ellipsis; white-space: nowrap; }
`,Sm=f.span`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid ${({$accent:e})=>`color-mix(in srgb, ${St(e)||"var(--c-9b7bff)"} 40%, transparent)`};
  border-radius: 10px;
  color: ${({$accent:e})=>St(e)||"var(--c-b9abff)"};
  background: ${({$accent:e})=>`color-mix(in srgb, ${St(e)||"var(--c-9b7bff)"} 9%, transparent)`};
`,km=f.div`
  display: grid;
  gap: 6px;
  max-height: 166px;
  overflow-y: auto;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
`,Am=f.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
  border-radius: 8px;
  background: var(--c-14161b);
  .object-info { min-width: 0; flex: 1; }
  strong { display: block; overflow: hidden; color: var(--c-d9d6d3); font-size: 9px; text-overflow: ellipsis; white-space: nowrap; }
  small { display: block; margin-top: 3px; color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 8px; }
  .object-actions { display: flex; gap: 2px; }
`;f.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
`;f(Ud)`
  padding: 8px 5px;
  text-align: center;
  font-family: 'DM Mono', monospace;
`;const Em=f.div`
  position: fixed;
  inset: 0;
  z-index: 1400;
  display: grid;
  place-items: end center;
  padding: 24px 16px calc(96px + env(safe-area-inset-bottom));
  pointer-events: none;
  > * { pointer-events: auto; }
  animation: diceOverlayIn 180ms ease both;
  @keyframes diceOverlayIn { from { opacity: 0; } to { opacity: 1; } }
`,Mm=f.div`
  position: relative;
  width: min(390px, 100%);
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 20px 22px 18px;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 20px;
  color: #f5f1ea;
  background: linear-gradient(150deg, #1d1b2b, #12141a 62%);
  box-shadow: 0 30px 90px rgba(0,0,0,.55), 0 0 0 1px rgba(155,123,255,.1);
  animation: diceCardIn 260ms cubic-bezier(.2,.8,.2,1) both;
  @keyframes diceCardIn { from { opacity: 0; transform: translateY(14px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
  .eyebrow { color: #a39abf; font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: .16em; text-transform: uppercase; }
  h3 { margin: 0; font-size: 20px; letter-spacing: -.04em; }
  .subline { color: #9297a3; font-size: 11px; }
`,Tm=f.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
  color: #f4eefe;
  .total { font-size: 30px; font-weight: 700; letter-spacing: -.06em; }
  .math { color: #9da1ac; font-family: 'DM Mono', monospace; font-size: 10px; }
`,jm=f.div`
  display: grid;
  gap: 14px;
  padding: 0 4px 8px;
  color: var(--c-b9bbc2);
`,zm=f.div`
  padding: 15px;
  border: 1px solid ${({$success:e})=>e?"color-mix(in srgb, var(--c-56d28b) 30%, transparent)":"color-mix(in srgb, var(--c-f04f4a) 30%, transparent)"};
  border-radius: 10px;
  background: ${({$success:e})=>e?"color-mix(in srgb, var(--c-56d28b) 9%, transparent)":"color-mix(in srgb, var(--c-f04f4a) 8%, transparent)"};
  .result-kicker { color: ${({$success:e})=>e?"var(--c-8fe3ae)":"var(--c-f09b95)"}; font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; }
  strong { display: block; margin-top: 5px; color: var(--c-f0eeea); font-size: 17px; letter-spacing: -0.03em; }
  p { margin: 7px 0 0; color: var(--c-a9adb6); font-size: 11px; line-height: 1.45; }
`;f.div`
  display: none;
  @media (max-width: 900px) { display: block; }
`;const Im=Jo`
  /* Monitores médios: o cabeçalho encolhe antes de sobrepor os botões. */
  @media (max-width: 1280px) {
    #nighttable > header { gap: 10px; padding: 0 14px; }
    #nighttable > header > div:first-child { min-width: auto; }
    #nighttable > header > div:last-child { min-width: 0; }
    #nighttable > header .user-name { display: none; }
  }

  /* Monitores baixos (notebooks, zoom do sistema): cabeçalho mais fino. */
  @media (max-height: 760px) and (min-width: 761px) {
    #nighttable { --topbar-height: 58px; }
  }

  @media (max-width: 1050px) {
    #nighttable > header .dot { display: none; }
    #nighttable > header > div:first-child > div:last-child > span { display: none; }
    #nighttable { --left-rail: 220px; --right-rail: 300px; --dock-width: 40px; }
  }

  /* Até 1400 px a barra do Mestre fica dentro da largura do painel, sem tirar espaço do mapa. */
  @media (max-width: 1400px) {
    #nighttable { --gm-nav-room: 0; }
  }

  /* Tablets: o mapa cabe na largura em vez de pedir rolagem lateral. */
  @media (max-width: 1100px) {
    #nighttable .board-canvas { min-width: 0; }
  }

  /* Tablet em retrato: o painel direito abre por cima do mapa, sem roubar a largura dele. */
  @media (min-width: 761px) and (max-width: 1050px) and (orientation: portrait) {
    #nighttable > div { position: relative; grid-template-columns: var(--dock-width) calc(var(--left-rail) * var(--rail-scale, 1)) minmax(0, 1fr) calc(54px * var(--text-zoom, 1)) !important; }
    #nighttable > div[data-left='hidden'] { grid-template-columns: var(--dock-width) 0px minmax(0, 1fr) calc(54px * var(--text-zoom, 1)) !important; }
    #nighttable > div[data-drawer='open'] > aside:last-child { position: absolute; top: 0; right: 0; bottom: 0; z-index: 30; width: min(calc(var(--right-rail) * var(--rail-scale, 1) + var(--gm-nav, 0px) * var(--gm-nav-room, 1) * var(--text-zoom, 1)), 86vw); box-shadow: -18px 0 40px rgba(0, 0, 0, 0.35); }
  }

  @media (max-width: 760px) {
    body { overflow: auto; }
    #nighttable { height: auto; min-height: 100dvh; overflow: visible; grid-template-rows: auto minmax(0, 1fr); }
    #nighttable > header { position: sticky; top: 0; min-height: 64px; height: auto; flex-wrap: wrap; padding: 10px 12px; }
    #nighttable > header > div:nth-child(2) { order: 3; width: 100%; }
    #nighttable > header > div:nth-child(2) button { flex: 1; }
    #nighttable > div { min-height: calc(100dvh - 116px); display: flex; flex-direction: column; }
    #nighttable > div[data-left='hidden'] > aside:first-of-type { display: none; }
    /* No celular a barra de ícones vira uma faixa horizontal acima do mapa. */
    #nighttable > div > nav { order: 0; flex-direction: row; justify-content: center; flex-wrap: wrap; padding: 6px 10px; border-right: 0; border-bottom: 1px solid var(--border); }
    #nighttable > div > nav .dock-divider { width: 1px; height: 22px; margin: 0 4px; }
    #nighttable > div > nav .dock-spacer { display: none; }
    #nighttable > div > aside:first-of-type { order: 2; min-height: 420px; border-right: 0; border-top: 1px solid var(--border); }
    #nighttable > div > main { order: 1; min-height: 620px; }
    #nighttable > div > aside:last-child { order: 3; min-height: 520px; border-left: 0; border-top: 1px solid var(--border); }
    #nighttable > div > aside:last-child > div:first-child { display: none; }
    /* Mestre no celular: a barra de grupos vira uma faixa acima do painel. */
    #nighttable > div > aside:last-child > div.gm-shell { display: flex; flex-direction: column-reverse; height: 85dvh; }
    #nighttable > div > aside:last-child > div.gm-shell > nav { width: auto; flex-direction: row; justify-content: center; flex-wrap: wrap; padding: 6px 10px; border-left: 0; border-bottom: 1px solid var(--border); }
    #nighttable > div > aside:last-child > div.gm-shell > nav .nav-spacer { display: none; }
    #nighttable .scene-header { padding: 10px 12px; }
    #nighttable .board-area { padding: 10px; }
    /* No celular o mapa cabe na tela; use dois dedos para aproximar e mover. */
    #nighttable .board-canvas { min-width: 0; }
  }

  /* Telas de toque: botões das ferramentas maiores e sem atraso de toque. */
  @media (pointer: coarse) {
    #nighttable button { touch-action: manipulation; }
    /* Token ou objeto que a pessoa pode arrastar: o dedo move a peça, não o mapa. */
    #nighttable [data-draggable='true'] { touch-action: none; }
    #nighttable [role='toolbar'] { grid-template-columns: repeat(2, 36px); }
    #nighttable [role='toolbar'] button { width: 36px; height: 36px; }
    #nighttable [role='toolbar'][data-open='false'] { grid-template-columns: 36px; }
    /* Um dedo rola a página; a pinça com dois dedos fica com o mapa (tokens arrastáveis têm touch-action próprio). */
    #nighttable .board-area { touch-action: pan-x pan-y; }
  }

  /* Modo streaming: só o mapa, sem cabeçalho, painéis e ferramentas. */
  #nighttable[data-stream='on'] { grid-template-rows: minmax(0, 1fr); }
  #nighttable[data-stream='on'] > header,
  #nighttable[data-stream='on'] > div > aside,
  #nighttable[data-stream='on'] > div > nav,
  #nighttable[data-stream='on'] main > div:first-child,
  #nighttable[data-stream='on'] [role='toolbar'] { display: none !important; }
  #nighttable[data-stream='on'] > div { display: grid !important; grid-template-columns: minmax(0, 1fr) !important; min-height: 100dvh; }

  /* Preferências de cada pessoa (densidade dos painéis e animações). */
  /* O tamanho do texto (--text-zoom) multiplica a densidade nos painéis. */
  #nighttable > div > aside { zoom: var(--text-zoom, 1); }
  #nighttable[data-density='compact'] > div > aside { zoom: calc(0.9 * var(--text-zoom, 1)); }
  #nighttable[data-density='comfortable'] > div > aside { zoom: calc(1.1 * var(--text-zoom, 1)); }
  #nighttable[data-motion='reduced'] *, #nighttable[data-motion='reduced'] *::before, #nighttable[data-motion='reduced'] *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
`,Gd=f.main`
  height: 100vh;
  height: 100dvh;
  display: grid;
  place-items: center;
  padding: 24px 16px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--c-9b7bff) 14%, transparent), transparent 40%), radial-gradient(circle at 75% 80%, color-mix(in srgb, var(--c-f04f4a) 10%, transparent), transparent 38%), var(--c-0a0b0f);
`,qd=f.form`
  width: min(100%, 380px);
  display: grid;
  gap: 13px;
  padding: 26px 24px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent);
  border-radius: 16px;
  background: var(--c-121419);
  box-shadow: 0 30px 90px rgba(0,0,0,0.45);
  h1 { margin: 6px 0 0; font-size: 20px; font-weight: 600; letter-spacing: -0.03em; }
  p { margin: 0; color: var(--c-8d929d); font-size: 12px; line-height: 1.5; }
`,_m=f(Gd)`
  place-items: start center;
  padding: 32px 16px;
  @media (max-width: 760px) { padding: 16px; }
`,Cm=f(qd)`
  width: min(100%, 1120px);
  gap: 18px;
  padding: 24px 28px;
  @media (max-width: 760px) { padding: 18px 16px; }
`,Nm=f.div`
  display: grid;
  grid-template-columns: minmax(280px, 380px) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: minmax(0, 1fr); gap: 18px; }
`,Rm=f.div`
  display: grid;
  gap: 13px;
  min-width: 0;
`,$m=f.section`
  display: grid;
  gap: 16px;
  min-width: 0;
  padding: 18px 20px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 12px;
  background: color-mix(in srgb, var(--c-ffffff) 1.5%, transparent);
  h2 { margin: 0; color: var(--c-e9e7e2); font-size: 15px; font-weight: 600; letter-spacing: -0.02em; }
  @media (max-width: 760px) { padding: 14px; }
`,Om=f.div`
  position: sticky;
  /* O sticky desconta o padding do LobbyScreen; o deslocamento negativo leva o rodapé até a borda da tela. */
  bottom: -32px;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  margin: 0 -20px;
  padding: 12px 20px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
  background: var(--c-121419);
  @media (max-width: 760px) { bottom: -16px; margin: 0 -14px; padding: 12px 14px; }
  @media (max-width: 420px) { button[type='submit'] { flex: 1; } }
`,Pm=f.div`
  display: grid;
  gap: 3px;
  strong { color: var(--c-d6d4d0); font-size: 12px; font-weight: 600; }
  span { color: var(--c-7e838f); font-size: 11px; line-height: 1.4; }
`,Lm=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  &::before, &::after { content: ''; flex: 1; height: 1px; background: color-mix(in srgb, var(--c-ffffff) 8%, transparent); }
`,Dm=f.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  button { padding: 0; border: 0; color: var(--c-b9abff); background: none; cursor: pointer; font-size: 11px; }
  button:hover { color: var(--c-ddd5ff); text-decoration: underline; }
`,Fm=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--c-c9c9ca);
  font-size: 11px;
  .user-avatar { width: 26px; height: 26px; display: grid; place-items: center; overflow: hidden; border-radius: 8px; color: #fff; background: var(--c-6d52be); font-size: 10px; font-weight: 700; }
  .user-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .user-name { max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  @media (max-width: 900px) { .user-name { display: none; } }
`;function Vd({kind:e}){const t=Et[e],a=tl(),r=e==="privacidade"?"termos":"privacidade";return O.useEffect(()=>{document.title=`${t.title} — NightTable`},[t.title]),u.jsxs(u.Fragment,{children:[u.jsx(Od,{}),u.jsx("main",{style:{height:"100dvh",boxSizing:"border-box",padding:"32px 16px 56px",background:"var(--c-0a0b0f)",color:"var(--c-d6d4d0)",overflowY:"auto"},children:u.jsxs("article",{style:{maxWidth:720,margin:"0 auto",display:"grid",gap:18,lineHeight:1.6,fontSize:14},children:[u.jsx("a",{href:Le(),style:{textDecoration:"none"},children:u.jsxs(Pd,{children:[u.jsx(Ld,{children:u.jsx(Ad,{fontSize:"small"})}),u.jsxs(Dd,{children:[u.jsx("strong",{children:"NightTable"}),u.jsx("span",{children:"virtual tabletop"})]})]})}),u.jsxs("header",{children:[u.jsx("h1",{style:{margin:"0 0 4px",color:"var(--c-f4f2ef)",fontSize:26},children:t.title}),u.jsxs("p",{style:{margin:0,color:"var(--c-7e838f)",fontSize:12},children:["Última atualização: ",el]})]}),u.jsx("p",{style:{margin:0},children:t.intro}),t.sections.map(([o,n])=>u.jsxs("section",{children:[u.jsx("h2",{style:{margin:"0 0 6px",color:"var(--c-c9c3ff)",fontSize:16},children:o}),u.jsx("ul",{style:{margin:0,paddingLeft:20,display:"grid",gap:6},children:n.map(i=>u.jsx("li",{children:i},i))})]},o)),u.jsxs("section",{children:[u.jsx("h2",{style:{margin:"0 0 6px",color:"var(--c-c9c3ff)",fontSize:16},children:"Contato"}),u.jsx("p",{style:{margin:0},children:a?u.jsxs(u.Fragment,{children:["Dúvidas, pedidos sobre seus dados ou denúncias: ",u.jsx("a",{href:a.includes("@")?`mailto:${a}`:a,style:{color:"var(--c-b9abff)"},children:a}),"."]}):"Dúvidas, pedidos sobre seus dados ou denúncias: fale com quem administra esta instalação do NightTable."})]}),u.jsxs("nav",{style:{display:"flex",gap:16,fontSize:12},children:[u.jsx("a",{href:vo(r),style:{color:"var(--c-b9abff)"},children:Et[r].title}),u.jsx("a",{href:Le(),style:{color:"var(--c-b9abff)"},children:"Voltar ao NightTable"})]})]})})]})}function en({style:e}){return u.jsx("p",{style:{margin:0,display:"flex",gap:12,flexWrap:"wrap",color:"var(--c-7e838f)",fontSize:11,...e},children:Object.entries(Et).map(([t,a])=>u.jsx("a",{href:vo(t),target:"_blank",rel:"noopener",style:{color:"var(--c-9d93c9)"},children:a.title},t))})}const Wd=Object.freeze(Object.defineProperty({__proto__:null,LegalLinks:en,default:Vd},Symbol.toStringTag,{value:"Module"})),Dt={players:{label:"Jogadores na mesa",minimizable:!0},chat:{label:"Chat",minimizable:!0},log:{label:"Log da sessão",minimizable:!0,initial:"hidden"},minimap:{label:"Minimapa",minimizable:!1},legend:{label:"Legenda do mapa",minimizable:!1}},Yd=["players","chat","log"],Hd=["open","min","hidden"];function fe(e){const t=e&&typeof e=="object"?e:{};return Object.fromEntries(Object.entries(Dt).map(([a,r])=>{const o=Hd.includes(t[a])?t[a]:r.initial||"open";return[a,o==="min"&&!r.minimizable?"open":o]}))}function Za(e,t,a){return fe({...fe(e),[t]:a})}function Bm(e,t){const a=fe(e)[t];return Za(e,t,a==="open"?"min":"open")}function Kd(e,t){return fe(e)[t]!=="hidden"}function Um(e){const t=fe(e);return Yd.every(a=>t[a]==="hidden")}function Gm(e){return Object.values(fe(e)).filter(t=>t==="hidden").length}function qm(){return Object.fromEntries(Object.keys(Dt).map(e=>[e,"hidden"]))}function Vm(e,t){return Za(e,t,Kd(e,t)?"hidden":"open")}function Wm(){return Object.fromEntries(Object.keys(Dt).map(e=>[e,"open"]))}function ot(e){const t=e&&typeof e=="object"?e:{},a=Number(t.rate);return{narration:t.narration===!0,narrator:t.narrator===!0,voice:String(t.voice||"").slice(0,120),rate:Number.isFinite(a)?Math.min(1.6,Math.max(.6,Math.round(a*10)/10)):1}}function ha(e){const t=a=>/^pt-BR/i.test(a.lang)?0:/^pt/i.test(a.lang)?1:2;return[...e||[]].sort((a,r)=>t(a)-t(r)||String(a.name).localeCompare(String(r.name)))}function Jd(e,t){const a=ha(e);return a.find(r=>r.name===t)||a.find(r=>/^pt/i.test(r.lang))||null}function Ym(e){const t=String((e==null?void 0:e.title)||"").trim(),a=String((e==null?void 0:e.text)||"").trim();return t?!a||a===t?t:`${t}. ${a}`:a}const et=()=>typeof window<"u"&&"speechSynthesis"in window&&typeof window.SpeechSynthesisUtterance=="function";function Xd(e,t){const a=String(e||"").trim();if(!a||!et())return!1;const{voice:r,rate:o}=ot(t),n=new window.SpeechSynthesisUtterance(a.slice(0,1200)),i=Jd(window.speechSynthesis.getVoices(),r);return i&&(n.voice=i),n.lang=(i==null?void 0:i.lang)||"pt-BR",n.rate=o,window.speechSynthesis.speak(n),!0}function Nr(){et()&&window.speechSynthesis.cancel()}const Qa=[{id:"normal",label:"Normal",zoom:1},{id:"large",label:"Grande",zoom:1.15},{id:"xlarge",label:"Muito grande",zoom:1.3}];function Ft(e){return Qa.some(t=>t.id===e)?e:"normal"}function tn(e){return Qa.find(t=>t.id===Ft(e)).zoom}function Zd(e){return 1+(tn(e)-1)/2}function Qd(e,t=typeof document<"u"?document.documentElement:null){t&&(t.style.setProperty("--text-zoom",String(tn(e))),t.style.setProperty("--rail-scale",String(Zd(e))),t.dataset.textSize=Ft(e))}const an="nighttable-language",rn=[{value:"pt",label:"Português"},{value:"en",label:"English"}];function on(e){return e==="en"?"en":"pt"}function Bt(e=globalThis.localStorage){try{return on(e==null?void 0:e.getItem(an))}catch{return"pt"}}function ep(e,t=globalThis.localStorage){try{t==null||t.setItem(an,on(e))}catch{}}const tp=e=>e.replace(/[.*+?^$()|[\]\\]/g,"\\$&");function ap(e){const t=new Map,a=new Map,r=[];for(const[i,s]of Object.entries(e)){if(!i.includes("{}")){t.set(i,s);continue}const c=i.split("{}"),d={regex:new RegExp(`^${c.map(tp).join("([\\s\\S]*?)")}$`),value:s},p=c[0].slice(0,3);if(p.length<3){r.push(d);continue}a.has(p)||a.set(p,[]),a.get(p).push(d)}const o=(i,s)=>{let c=0;return i.replace(/\{(\d*)\}/g,(d,p)=>{const g=p?s[Number(p)-1]:s[c];return c+=1,n(g??"")??g??""})},n=i=>{if(t.has(i))return t.get(i);const s=a.get(i.slice(0,3));for(const c of[s,r])if(c)for(const d of c){const p=d.regex.exec(i);if(p)return o(d.value,p.slice(1))}return null};return i=>{if(typeof i!="string")return null;const s=i.trim();if(!s||!/[A-Za-zÀ-ú]/.test(s))return null;const c=n(s);if(c==null||c===s)return null;const d=i.indexOf(s);return i.slice(0,d)+c+i.slice(d+s.length)}}const Rr=["aria-label","title","placeholder","alt","aria-description","aria-valuetext"],rp=new Set(["SCRIPT","STYLE","TEXTAREA","CODE","PRE","svg"]);function ta(e,t){for(let a=e;a&&a.nodeType===1;a=a.parentElement)if(t&&rp.has(a.tagName)||a.getAttribute("translate")==="no"||a.isContentEditable)return!0;return!1}function op(e,t=document.body){const a=s=>{const c=e(s.data);c!=null&&c!==s.data&&!ta(s.parentElement,!0)&&(s.data=c)},r=s=>{if(!ta(s,!1)){for(const c of Rr){const d=s.getAttribute(c);if(!d)continue;const p=e(d);p!=null&&p!==d&&s.setAttribute(c,p)}if(s.tagName==="INPUT"&&(s.type==="button"||s.type==="submit")&&s.value){const c=e(s.value);c!=null&&(s.value=c)}}},o=s=>{if(s.nodeType===3){a(s);return}if(s.nodeType!==1||ta(s,!1))return;r(s);const c=document.createTreeWalker(s,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:d=>d.nodeType===1&&d.getAttribute("translate")==="no"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});for(let d=c.nextNode();d;d=c.nextNode())d.nodeType===3?a(d):r(d)};o(t);const n=e(document.title);n&&(document.title=n);const i=new MutationObserver(s=>{for(const c of s)c.type==="characterData"?a(c.target):c.type==="attributes"?r(c.target):c.addedNodes.forEach(o)});return i.observe(t,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[...Rr,"value"]}),()=>i.disconnect()}async function np(e=Bt()){var r;if(typeof document>"u"||(document.documentElement.lang=e==="en"?"en":"pt-BR",e!=="en"))return;const{default:t}=await Se(async()=>{const{default:o}=await import("./en-DPXuE5Um.js");return{default:o}},[]),a=ap(t);globalThis.__nighttableTranslate=a;for(const o of["confirm","prompt","alert"]){const n=(r=window[o])==null?void 0:r.bind(window);n&&(window[o]=(i,...s)=>n(typeof i=="string"?a(i)??i:i,...s))}op(a,document.body)}function nn(e){e!==Bt()&&(ep(e),window.location.reload())}function Hm({style:e}){const t=Bt();return u.jsx("div",{role:"radiogroup","aria-label":"Idioma · Language",translate:"no",style:{display:"inline-flex",gap:2,padding:2,border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:999,...e},children:rn.map(a=>u.jsx("button",{type:"button",role:"radio","aria-checked":t===a.value,title:a.label,onClick:()=>nn(a.value),style:{padding:"3px 8px",border:0,borderRadius:999,color:t===a.value?"var(--c-f4f2ef)":"var(--c-9a9faa)",background:t===a.value?"color-mix(in srgb, var(--c-8e6bff) 30%, transparent)":"transparent",fontSize:10,fontWeight:600,letterSpacing:".06em",cursor:"pointer"},children:a.value.toUpperCase()},a.value))})}const $r={player:[{title:"Bem-vindo à mesa",text:"O mapa fica no centro. Arraste o seu token para se mover; o Mestre controla a névoa e o que você enxerga."},{title:"Sua ficha",text:"No painel da direita estão sua ficha, armas e inventário. Clique em um atributo ou perícia para rolar os dados. Duplo clique no seu avatar (no mapa ou na lista) abre a ficha completa."},{title:"Sua tela, do seu jeito",text:"A barra de ícones na beirada esquerda mostra ou oculta jogadores, chat, log, ficha, minimapa e legenda. O modo limpo deixa só o mapa."},{title:"Conversa",text:"No chat, use @nome para chamar alguém, /w Nome para sussurrar e /gm para falar só com o Mestre. Passe o mouse numa mensagem para reagir."},{title:"Ferramentas do mapa",text:"A barra à esquerda do mapa tem lápis, régua e formas. Os desenhos aparecem para todos e somem sozinhos se forem temporários."},{title:"Atalhos",text:"Aperte ? a qualquer momento para ver os atalhos de teclado e reabrir este tutorial pelo botão de ajuda no topo."}],gm:[{title:"Visão do Mestre",text:"O painel da direita reúne tudo o que você controla: cena, tokens, objetos, iniciativa, áudio, handouts e regras."},{title:"Prepare as cenas",text:"Oculte o mapa dos jogadores enquanto prepara, salve o tabuleiro como cena e ative com um clique. O cartão de abertura aparece para todos."},{title:"Tokens e combate",text:"Coloque fichas no mapa, esconda inimigos, marque derrotados e use a iniciativa. Os geradores criam encontros prontos. Duplo clique num token abre a ficha dele."},{title:"Convide o grupo",text:"Compartilhe o código de convite. No lobby da campanha você escreve a descrição e marca as próximas sessões."},{title:"Atalhos e ajuda",text:"Aperte ? para ver os atalhos. M alterna entre a sua visão e a dos jogadores."}]},xa=e=>`nighttable-tutorial-v1:${e}`;function Km(e){try{return window.localStorage.getItem(xa(e))==="done"}catch{return!0}}function Jm(e,t){try{t?window.localStorage.setItem(xa(e),"done"):window.localStorage.removeItem(xa(e))}catch{}}const ip=f.aside`
  position: fixed;
  left: 18px;
  bottom: 18px;
  z-index: 1200;
  width: min(340px, calc(100vw - 36px));
  padding: 14px 16px 12px;
  border: 1px solid color-mix(in srgb, var(--c-a28af3) 40%, transparent);
  border-radius: 14px;
  color: var(--c-e7e5e2);
  background: var(--c-17191f);
  box-shadow: 0 24px 70px rgba(0,0,0,.55);
  .step { color: var(--c-8f86c9); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: .14em; text-transform: uppercase; }
  h2 { margin: 6px 0 0; font-size: 15px; font-weight: 600; }
  p { margin: 6px 0 0; color: var(--c-c9c9ca); font-size: 12px; line-height: 1.55; }
  .actions { display: flex; align-items: center; gap: 8px; margin-top: 12px; }
  .dots { display: flex; gap: 4px; margin-right: auto; }
  .dots span { width: 6px; height: 6px; border-radius: 50%; background: var(--c-3a3d48); }
  .dots span.on { background: var(--c-a28af3); }
`;function Xm({role:e,onFinish:t}){const a=$r[e]||$r.player,[r,o]=O.useState(0),n=a[r],i=r===a.length-1;return u.jsxs(ip,{role:"dialog","aria-label":"Tutorial do NightTable",children:[u.jsxs("span",{className:"step",children:["primeiros passos · ",r+1,"/",a.length]}),u.jsx("h2",{children:n.title}),u.jsx("p",{children:n.text}),u.jsxs("div",{className:"actions",children:[u.jsx("div",{className:"dots","aria-hidden":"true",children:a.map((s,c)=>u.jsx("span",{className:c===r?"on":""},s.title))}),u.jsx($e,{onClick:t,size:"small",sx:{textTransform:"none",color:"var(--c-8e939e)",fontSize:11},children:"Pular"}),u.jsx($e,{onClick:()=>i?t():o(r+1),size:"small",variant:"contained",sx:{textTransform:"none",fontSize:11,bgcolor:"var(--c-7358d0)","&:hover":{bgcolor:"var(--c-6249c0)"}},children:i?"Começar":"Próximo"})]})]})}const sp=f.span`
  display: inline-flex;
  gap: 3px;
  kbd { min-width: 20px; padding: 2px 6px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 14%, transparent); border-bottom-width: 2px; border-radius: 5px; color: var(--c-f4f2ef); background: var(--c-1f222a); font-family: 'DM Mono', monospace; font-size: 10px; text-align: center; }
`,cp=[["@Nome","Chama alguém (a mensagem fica destacada e toca um aviso para a pessoa)."],["/w Nome texto","Sussurro: só você, a pessoa e o Mestre leem."],["/gm texto","Mensagem privada para o Mestre."],["Falar como","Escolha seu personagem ao lado da caixa de texto para falar em personagem."]],lp=[["2d6 + 3","Rola dois dados de 6 lados e soma 3."],["d20 + DES","Usa o valor do atributo da sua ficha."],["4d6kh3","Rola 4 e mantém os 3 maiores (kl = menores)."],["Vantagem","Escolha na ficha: o d20 vira 2d20 e fica o maior (desvantagem: o menor)."]],sn=[{id:"compact",label:"Compacta"},{id:"normal",label:"Normal"},{id:"comfortable",label:"Confortável"}],cn=[{id:"system",label:"Seguir o sistema"},{id:"reduced",label:"Reduzidas"}],ln=[{id:"full",label:"Completa"},{id:"calm",label:"Discreta"},{id:"off",label:"Desligada"}],Or=[{id:"open",label:"Aberto"},{id:"min",label:"Minimizado"},{id:"hidden",label:"Oculto"}],dn="nighttable-ui-prefs";function pn(){try{const e=JSON.parse(window.localStorage.getItem(dn))||{};return{density:sn.some(t=>t.id===e.density)?e.density:"normal",textSize:Ft(e.textSize),theme:Ka(e.theme),accent:Ja(e.accent),motion:cn.some(t=>t.id===e.motion)?e.motion:"system",diceAnimation:ln.some(t=>t.id===e.diceAnimation)?e.diceAnimation:"full",telemetry:e.telemetry===!0,panels:fe(e.panels),speech:ot(e.speech)}}catch{return{density:"normal",textSize:"normal",theme:"dark",accent:"violet",motion:"system",diceAnimation:"full",telemetry:!1,panels:fe(null),speech:ot(null)}}}function Zm(e){try{window.localStorage.setItem(dn,JSON.stringify(e))}catch{}}function dp({speech:e,onChange:t}){const[a,r]=O.useState(()=>et()?ha(window.speechSynthesis.getVoices()):[]);if(O.useEffect(()=>{var s,c;if(!et())return;const i=()=>r(ha(window.speechSynthesis.getVoices()));return(c=(s=window.speechSynthesis).addEventListener)==null||c.call(s,"voiceschanged",i),()=>{var d,p;return(p=(d=window.speechSynthesis).removeEventListener)==null?void 0:p.call(d,"voiceschanged",i)}},[]),!et())return u.jsx("p",{style:{margin:"8px 0 0",color:"var(--c-7e838f)",fontSize:11},children:"Este navegador não lê texto em voz alta."});const o=ot(e),n=i=>t(ot({...o,...i}));return u.jsxs("div",{role:"group","aria-label":"Narração em voz",style:{display:"grid",gap:6,marginTop:10,color:"var(--c-c9c9ca)",fontSize:12},children:[u.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("input",{type:"checkbox",checked:o.narration,onChange:i=>n({narration:i.target.checked})})," Ler em voz alta as narrações na tela"]}),u.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("input",{type:"checkbox",checked:o.narrator,onChange:i=>n({narrator:i.target.checked})})," Ler as falas do canal #narrador"]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:8},children:[u.jsx("span",{style:{width:120},children:"Voz"}),u.jsxs("select",{value:o.voice,onChange:i=>n({voice:i.target.value}),"aria-label":"Voz da narração",style:{flex:1,minWidth:160,padding:"4px 6px",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:6,color:"var(--c-e7e5e2)",background:"var(--c-1a1c22)",fontSize:11},children:[u.jsx("option",{value:"",children:"Automática (português, se houver)"}),a.map(i=>u.jsxs("option",{value:i.name,children:[i.name," · ",i.lang]},i.name))]})]}),u.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsxs("span",{style:{width:120},children:["Velocidade ",o.rate.toFixed(1),"×"]}),u.jsx("input",{type:"range",min:"0.6",max:"1.6",step:"0.1",value:o.rate,onChange:i=>n({rate:Number(i.target.value)}),"aria-label":"Velocidade da narração em voz",style:{flex:1}})]}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx($e,{size:"small",onClick:()=>{Nr(),Xd("A névoa cobre o porto. Ao longe, um sino toca.",o)},sx:{minWidth:0,color:"var(--c-b9abff)",textTransform:"none",fontSize:11},children:"Testar a voz"}),u.jsx($e,{size:"small",onClick:Nr,sx:{minWidth:0,color:"var(--c-8e939e)",textTransform:"none",fontSize:11},children:"Parar"})]})]})}function he({label:e,value:t,options:a,onChange:r}){return u.jsxs("div",{role:"radiogroup","aria-label":e,style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12},children:[u.jsx("span",{style:{width:120,color:"var(--c-c9c9ca)"},children:e}),a.map(o=>u.jsxs("button",{type:"button",role:"radio","aria-checked":t===o.id,onClick:()=>r(o.id),style:{padding:"5px 10px",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:999,color:t===o.id?"var(--c-f4f2ef)":"var(--c-9a9faa)",background:t===o.id?"color-mix(in srgb, var(--c-8e6bff) 25%, transparent)":"var(--c-1a1c22)",fontSize:11,cursor:"pointer"},children:[o.swatch&&u.jsx("span",{"aria-hidden":"true",style:{display:"inline-block",width:9,height:9,marginRight:5,borderRadius:"50%",background:o.swatch}}),o.label]},o.id))]})}function Qm({open:e,isGm:t,onClose:a,onRestartTutorial:r,prefs:o,onPrefsChange:n}){return u.jsxs(gn,{open:e,onClose:a,fullWidth:!0,maxWidth:"sm",PaperProps:{sx:{bgcolor:"var(--c-14161b)",color:"var(--c-e7e5e2)",border:"1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent)"}},children:[u.jsxs(bn,{sx:{display:"flex",alignItems:"center",gap:1,fontSize:17},children:[u.jsx(ul,{sx:{color:"var(--c-b9abff)"}})," Ajuda e preferências",u.jsx(hn,{"aria-label":"Fechar ajuda",onClick:a,sx:{ml:"auto",color:"var(--c-8e939e)"},children:u.jsx(pl,{})})]}),u.jsxs(xn,{sx:{display:"grid",gap:2,pb:3},children:[o&&u.jsxs("section",{children:[u.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:"preferências deste navegador"}),u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(he,{label:"Idioma",value:Bt(),options:rn.map(i=>({id:i.value,label:i.label})),onChange:nn}),u.jsx(he,{label:"Densidade",value:o.density,options:sn,onChange:i=>n({...o,density:i})}),u.jsx(he,{label:"Tema",value:Ka(o.theme),options:Qo,onChange:i=>n({...o,theme:i})}),u.jsx(he,{label:"Cor de destaque",value:Ja(o.accent),options:Ha,onChange:i=>n({...o,accent:i})}),u.jsx(he,{label:"Tamanho do texto",value:Ft(o.textSize),options:Qa,onChange:i=>n({...o,textSize:i})}),u.jsx(he,{label:"Animações",value:o.motion,options:cn,onChange:i=>n({...o,motion:i})}),u.jsx(he,{label:"Dados na tela",value:o.diceAnimation||"full",options:ln,onChange:i=>n({...o,diceAnimation:i})}),Object.entries(Dt).map(([i,s])=>u.jsx(he,{label:s.label,value:fe(o.panels)[i],options:s.minimizable?Or:Or.filter(c=>c.id!=="min"),onChange:c=>n({...o,panels:Za(o.panels,i,c)})},i))]}),u.jsx(dp,{speech:o.speech,onChange:i=>n({...o,speech:i})}),u.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10,color:"var(--c-c9c9ca)",fontSize:12},children:[u.jsx("input",{type:"checkbox",checked:!!o.telemetry,onChange:i=>n({...o,telemetry:i.target.checked})})," Enviar relatórios de erro anônimos (sem nome, e-mail ou conversas)"]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,color:"var(--c-7e838f)",fontSize:11},children:["Erros registrados nesta sessão: ",br().length,br().length>0&&u.jsx($e,{size:"small",onClick:()=>{var i;return(i=navigator.clipboard)==null?void 0:i.writeText([xo(),"","Desempenho:",...Vt()].join(`
`)).catch(()=>{})},sx:{minWidth:0,color:"var(--c-b9abff)",textTransform:"none",fontSize:11},children:"Copiar relatório"})]}),u.jsxs("div",{role:"group","aria-label":"Desempenho desta sessão",style:{marginTop:10,color:"var(--c-7e838f)",fontSize:11,lineHeight:1.6},children:[u.jsx("strong",{style:{display:"block",color:"var(--c-c9c9ca)",fontWeight:600},children:"Desempenho desta sessão"}),Vt().length?Vt().map(i=>u.jsx("div",{children:i},i)):u.jsx("div",{children:"Ainda sem medidas."}),u.jsx("div",{children:"Medido só neste navegador; nada é enviado."})]}),u.jsx("p",{style:{margin:"8px 0 0",color:"var(--c-7e838f)",fontSize:11},children:"Gire a roda do mouse sobre o mapa para aproximar e afastar no ponto do cursor. Com zoom, segure o botão esquerdo num ponto vazio do mapa (fora dos tokens e objetos) e arraste para mover a visão. No celular ou tablet, faça a pinça com dois dedos para aproximar entre os dedos e arraste com dois dedos para mover."})]}),u.jsxs("section",{children:[u.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:"atalhos de teclado"}),u.jsx("div",{style:{display:"grid",gap:6},children:wd.filter(i=>t||!i.gmOnly).map(i=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,fontSize:12},children:[u.jsx(sp,{style:{width:92},children:i.keys.map(s=>u.jsx("kbd",{children:s},s))}),u.jsx("span",{style:{color:"var(--c-c9c9ca)"},children:i.label})]},i.label))})]}),[["chat",cp],["dados",lp]].map(([i,s])=>u.jsxs("section",{children:[u.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:i}),u.jsx("div",{style:{display:"grid",gap:6},children:s.map(([c,d])=>u.jsxs("div",{style:{fontSize:12},children:[u.jsx("code",{style:{color:"var(--c-f3c48f)"},children:c})," ",u.jsxs("span",{style:{color:"var(--c-c9c9ca)"},children:["— ",d]})]},c))})]},i)),u.jsx(en,{}),u.jsx($e,{onClick:r,sx:{justifySelf:"start",textTransform:"none",color:"var(--c-b9abff)"},children:"Ver o tutorial de novo"})]})]})}const pp={DEV:!1,VITE_USE_FIREBASE_EMULATORS:"false"};Kc();Qd(pn().textSize);$d(pn());Yc({env:Zc(pp),dataVersion:Pe});const up=O.lazy(()=>Se(()=>import("./App-DwxBaxNN.js").then(e=>e.aB),__vite__mapDeps([0,1,2,3]))),fp=O.lazy(()=>Se(()=>import("./LoginScreen-DVWOE8uQ.js"),__vite__mapDeps([4,1,5,3]))),mp=O.lazy(()=>Se(()=>import("./Lobby-BBzEj__7.js"),__vite__mapDeps([6,1,2,5,7,8,3]))),gp=O.lazy(()=>Se(()=>import("./OnlineTable-CCsrdTT3.js"),__vite__mapDeps([9,1,0,2,3]))),bp=O.lazy(()=>Se(()=>Promise.resolve().then(()=>Wd),void 0)),hp=O.lazy(()=>Se(()=>import("./StreamEntry-DhLWC_MQ.js"),__vite__mapDeps([10,1,9,0,2,3]))),xp=O.lazy(()=>Se(()=>import("./PublicPage-Cp7Tyz13.js"),__vite__mapDeps([11,1,3])));function vp(){return u.jsx("div",{role:"status",style:{minHeight:"100dvh",display:"grid",placeItems:"center",color:"var(--c-8d929d)",background:"var(--c-090a0d)",fontFamily:"DM Mono, monospace",fontSize:11,letterSpacing:".12em",textTransform:"uppercase"},children:"carregando a mesa…"})}const va="nighttable-active-table",Pr=al(),Lr=xi(),Dr=dl();function yp(){try{return JSON.parse(window.localStorage.getItem(va))||null}catch{return null}}function Fr(e){try{e?window.localStorage.setItem(va,JSON.stringify(e)):window.localStorage.removeItem(va)}catch{}}function wp(){const{enabled:e,loading:t,user:a}=Vc(),[r,o]=O.useState(yp),n=s=>{const c=s?{uid:a.uid,tableId:s}:null;Fr(c),o(c)};if(Pr)return u.jsx(bp,{kind:Pr});if(Dr)return u.jsx(xp,{code:Dr});if(!e)return u.jsx(up,{});if(t)return null;if(Lr)return u.jsx(hp,{code:Lr,user:a});const i=a&&(r==null?void 0:r.uid)===a.uid?r.tableId:null;return!a||a.isAnonymous&&!i?u.jsx(fp,{onGuestJoined:s=>{var d;const c={uid:(d=N.currentUser)==null?void 0:d.uid,tableId:s};Fr(c),o(c)}}):i?u.jsx(gp,{tableId:i,user:a,onLeave:()=>n(null)},i):u.jsx(mp,{onEnterTable:n})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/nighttablesite/sw.js",{scope:"/nighttablesite/"}).catch(()=>{})});np().catch(()=>{}).finally(()=>{aa.createRoot(document.getElementById("root")).render(u.jsx(Q.StrictMode,{children:u.jsx(Jc,{children:u.jsx(qc,{children:u.jsx(O.Suspense,{fallback:u.jsx(vp,{}),children:u.jsx(wp,{})})})})}))});export{os as $,Gd as A,Pd as B,Ad as C,Ud as D,pm as E,rm as F,Od as G,vu as H,ku as I,om as J,_m as K,Hm as L,Cm as M,gu as N,mu as O,bu as P,Nm as Q,Rm as R,nm as S,xu as T,Fm as U,$m as V,Pm as W,Om as X,lu as Y,ro as Z,Vi as _,qd as a,gm as a$,ao as a0,Wi as a1,Np as a2,cu as a3,is as a4,dc as a5,mc as a6,kc as a7,Ts as a8,ic as a9,Sm as aA,fm as aB,lm as aC,lf as aD,um as aE,ol as aF,Ti as aG,Ia as aH,Mi as aI,Xr as aJ,Yr as aK,Ei as aL,jp as aM,Zf as aN,Qf as aO,Bd as aP,em as aQ,am as aR,dm as aS,jm as aT,Xf as aU,gf as aV,Gf as aW,qf as aX,Vf as aY,ff as aZ,mf as a_,oc as aa,hc as ab,yc as ac,Qi as ad,Ss as ae,ks as af,_s as ag,Ys as ah,Ls as ai,$s as aj,Ep as ak,ii as al,di as am,f as an,Se as ao,Ya as ap,Ru as aq,tm as ar,Jf as as,mm as at,Mp as au,V as av,pl as aw,bc as ax,km as ay,Am as az,Ld as b,Us as b$,bm as b0,Kf as b1,im as b2,sm as b3,vm as b4,ym as b5,wm as b6,cm as b7,uf as b8,ui as b9,Zs as bA,ys as bB,hs as bC,bs as bD,vs as bE,ws as bF,xs as bG,$p as bH,uo as bI,Js as bJ,Ks as bK,ec as bL,Qs as bM,jc as bN,Rp as bO,fo as bP,Mc as bQ,Tc as bR,zc as bS,qp as bT,Fs as bU,Bs as bV,Ds as bW,Gs as bX,Is as bY,zs as bZ,js as b_,Hf as ba,bi as bb,Ec as bc,ps as bd,cs as be,ss as bf,ds as bg,Zi as bh,Ws as bi,sa as bj,so as bk,xc as bl,vc as bm,pn as bn,Qd as bo,$d as bp,fe as bq,xi as br,Dt as bs,Zm as bt,Bm as bu,Za as bv,Cp as bw,Vs as bx,nc as by,Xs as bz,Dd as c,Eu as c$,tc as c0,rc as c1,ac as c2,Dc as c3,ns as c4,ls as c5,fs as c6,us as c7,Rs as c8,fc as c9,Ai as cA,Op as cB,uc as cC,pc as cD,io as cE,$u as cF,As as cG,lc as cH,cc as cI,sc as cJ,Es as cK,Zp as cL,tu as cM,Jp as cN,eu as cO,Xp as cP,Wp as cQ,Yp as cR,Hp as cS,Qp as cT,Cc as cU,So as cV,_c as cW,Cu as cX,Tu as cY,Au as cZ,Mu as c_,Ns as ca,zp as cb,Gr as cc,Tp as cd,gc as ce,Cs as cf,Ps as cg,Os as ch,Ac as ci,ts as cj,as as ck,rs as cl,es as cm,Hr as cn,yi as co,Bp as cp,Ca as cq,Dp as cr,Gp as cs,Jr as ct,_a as cu,Si as cv,ji as cw,Lp as cx,Fp as cy,Pp as cz,Lm as d,kf as d$,ju as d0,Ic as d1,Iu as d2,_u as d3,Ms as d4,co as d5,Sc as d6,wc as d7,ot as d8,Xd as d9,Hu as dA,Ku as dB,Ju as dC,Hs as dD,Xu as dE,pf as dF,Zu as dG,ef as dH,Qu as dI,tf as dJ,af as dK,rf as dL,of as dM,nf as dN,sf as dO,cf as dP,bf as dQ,hf as dR,xf as dS,vf as dT,yf as dU,Rf as dV,$f as dW,Of as dX,Ff as dY,Lf as dZ,Df as d_,Ym as da,Yc as db,Ip as dc,hu as dd,qs as de,Pe as df,Im as dg,Ou as dh,Pu as di,Xc as dj,Lu as dk,Du as dl,Fu as dm,ul as dn,Bu as dp,Uu as dq,Gu as dr,Kd as ds,Gm as dt,Um as du,qu as dv,Fd as dw,Vu as dx,Wu as dy,Yu as dz,Dm as e,wf as e0,_f as e1,Sf as e2,Tf as e3,jf as e4,If as e5,Ef as e6,Af as e7,Nf as e8,Pf as e9,bt as eA,Bt as eB,Nu as eC,nl as eD,vi as eE,mo as eF,Fc as eG,uu as eH,fu as eI,Zn as eJ,Kp as eK,Ci as eL,Ri as eM,Zr as eN,Vp as eO,na as eP,Gc as eQ,Uc as eR,fr as eS,au as eT,ru as eU,Cf as ea,Mf as eb,zf as ec,Bf as ed,Wf as ee,Yf as ef,Uf as eg,zm as eh,Qm as ei,Jm as ej,Km as ek,Xm as el,Em as em,Mm as en,Tm as eo,df as ep,pi as eq,Zc as er,Vm as es,qm as et,Wm as eu,Up as ev,_p as ew,wo as ex,Le as ey,zu as ez,en as f,pu as g,du as h,iu as i,su as j,Ki as k,Ji as l,yo as m,tt as n,wu as o,Su as p,yu as q,nu as r,ou as s,hm as t,Vc as u,xm as v,Yi as w,Hi as x,Xi as y,Qn as z};
