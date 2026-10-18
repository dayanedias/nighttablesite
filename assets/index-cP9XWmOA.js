const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/App--1SGz8W7.js","assets/mui-DuycmXTB.js","assets/TopBarButton-C1NXBNwo.js","assets/firebase-32Cy8xLw.js","assets/LoginScreen-DX4J7e11.js","assets/InvitePreview-Be46DGjs.js","assets/Lobby-DjX-Vy1Y.js","assets/SystemEditor-BwnD4WMc.js","assets/AccountDialog-B0XlWOEJ.js","assets/OnlineTable-eHOTR3M3.js","assets/StreamEntry-BvR4J1fx.js","assets/PublicPage-B9EarB83.js"])))=>i.map(i=>d[i]);
var rn=Object.defineProperty;var on=(e,t,a)=>t in e?rn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var Za=(e,t,a)=>on(e,typeof t!="symbol"?t+"":t,a);import{r as nn,a as O,j as p,R as Z,c as ka,D as sn,I as cn,b as Or,d as ln,e as dn,B as Ne}from"./mui-DuycmXTB.js";import{i as pn,g as fn,a as un,p as mn,b as gn,c as bn,d as L,e as m,f as G,q as j,w as P,h as q,j as F,l as K,k as y,o as _,u as ee,m as Aa,n as Q,r as hn,T as Ea,s as C,t as Pr,v as xn,x as b,y as vn,z as yn,F as wn,A as Sn,B as Lr,C as jt,D as Ta,E as kn,G as An,H as En,I as Tn,J as Mn,K as jn}from"./firebase-32Cy8xLw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const zn="modulepreload",_n=function(e){return"/nighttablesite/"+e},Qa={},ye=function(t,a,r){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(a.map(c=>{if(c=_n(c),c in Qa)return;Qa[c]=!0;const l=c.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const g=document.createElement("link");if(g.rel=l?"stylesheet":zn,l||(g.as="script"),g.crossOrigin="",g.href=c,s&&g.setAttribute("nonce",s),document.head.appendChild(g),l)return new Promise((x,A)=>{g.addEventListener("load",x),g.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})};var na={},er=nn;na.createRoot=er.createRoot,na.hydrateRoot=er.hydrateRoot;const In={VITE_FIREBASE_API_KEY:"AIzaSyAojCR46U1f6Bivq7ogNUkQMReQZ8RPpmI",VITE_FIREBASE_APP_ID:"1:839551252957:web:f9a1f161e39ab7ebb85e34",VITE_FIREBASE_AUTH_DOMAIN:"nighttable-5621b.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-1Z4XL9CFYE",VITE_FIREBASE_MESSAGING_SENDER_ID:"839551252957",VITE_FIREBASE_PROJECT_ID:"nighttable-5621b",VITE_FIREBASE_STORAGE_BUCKET:"nighttable-5621b.firebasestorage.app",VITE_USE_FIREBASE_EMULATORS:"false"},be=In,Cn=be.VITE_USE_FIREBASE_EMULATORS==="true",mt={apiKey:be.VITE_FIREBASE_API_KEY,authDomain:be.VITE_FIREBASE_AUTH_DOMAIN,projectId:be.VITE_FIREBASE_PROJECT_ID,storageBucket:be.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:be.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:be.VITE_FIREBASE_APP_ID,measurementId:be.VITE_FIREBASE_MEASUREMENT_ID},Rn=!!(mt.apiKey&&mt.projectId&&mt.appId),Nn=mt,gt=Rn||Cn,Oe=gt?pn(Nn):null,I=Oe?fn(Oe):null,d=Oe?un(Oe,{localCache:mn({tabManager:bn()})}):null,On="southamerica-east1";Oe&&gn(Oe,On);const Pn={message:"mensagem no chat",move:"movimento de token",state:"estado da mesa"},tr=()=>typeof performance<"u"?performance.now():Date.now();function Ln(){return{open:null,samples:{message:[],move:[],state:[]},failures:0}}let zt=Ln();function vp({sincePageLoad:e,waitingForData:t=null},a=zt){return a.open||(a.open={sincePageLoad:Math.round(e),waitingForData:t===null?null:Math.round(t)}),a}function $n(e,t,a=zt){return a.samples[e]&&(a.samples[e]=[...a.samples[e],Math.round(t)].slice(-100)),a}function Ma(e,t,a=zt){const r=tr();return Promise.resolve(t).then(o=>($n(e,tr()-r,a),o),o=>{throw a.failures+=1,o})}function ar(e,t){return e.length?e[Math.min(e.length-1,Math.ceil(t*e.length)-1)]:null}function Dn(e=[]){if(!e.length)return{count:0,median:null,p95:null,max:null};const t=[...e].sort((a,r)=>a-r);return{count:t.length,median:ar(t,.5),p95:ar(t,.95),max:t[t.length-1]}}const ft=e=>e==null?"—":e>=1e3?`${(e/1e3).toFixed(1).replace(".",",")} s`:`${e} ms`;function Ht(e=zt){const t=[];e.open&&t.push(`Abrir a mesa: ${ft(e.open.sincePageLoad)} desde o carregamento da página${e.open.waitingForData!==null?` (${ft(e.open.waitingForData)} esperando os dados)`:""}`);for(const[a,r]of Object.entries(Pn)){const{count:o,median:n,p95:i}=Dn(e.samples[a]);o&&t.push(`Gravar ${r}: mediana ${ft(n)}, 95% em até ${ft(i)} (${o} amostra${o===1?"":"s"})`)}return e.failures&&t.push(`Gravações que falharam: ${e.failures}`),t}function Fn(e){return new Promise((t,a)=>{const r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>a(new Error("Não foi possível ler o arquivo.")),r.readAsDataURL(e)})}function Bn(e,t){const a=URL.createObjectURL(e),r=document.createElement("a");r.href=a,r.download=t,document.body.appendChild(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(a),1e3)}const Un=(e,t,a)=>Bn(new Blob([e],{type:a}),t),yp=(e,t)=>Un(JSON.stringify(e,null,2),t,"application/json");function wp(e){const t=window.open("","_blank");return t?(t.document.write(e),t.document.close(),t.focus(),window.setTimeout(()=>t.print(),300),!0):!1}const Sp="O navegador bloqueou a janela de impressão. Libere pop-ups para este site.",$r={map:{maxSize:8192,maxBytes:26e5,qualities:[.92,.86,.8,.72]},localMap:{maxSize:8192,maxBytes:14e5,qualities:[.92,.86,.8,.72]},portrait:{maxSize:480,maxBytes:9e4},avatar:{maxSize:160,maxBytes:25e3,square:!0},thumb:{maxSize:64,maxBytes:6e3}},Gn=9e3;function Vn(e){return typeof e=="string"&&e.startsWith("data:image/")&&e.length<=Gn}const qn=25*1024*1024,Wn=9e5;function ja(e){const t=e.slice(e.indexOf(",")+1),a=t.endsWith("==")?2:t.endsWith("=")?1:0;return Math.floor(t.length*3/4)-a}function Hn(e,t=Wn){const a=[];for(let r=0;r<e.length;r+=t)a.push(e.slice(r,r+t));return a}function Yn(e){return[...e].sort((t,a)=>t.index-a.index).map(t=>t.data).join("")}function kp(e){return e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1).replace(".",",")} MB`}function St(e){return e?String(e.type).startsWith("image/")?e.size>qn?"Imagem grande demais: o limite é 25 MB.":null:"Escolha um arquivo de imagem (JPG, PNG ou WebP).":"Nenhum arquivo escolhido."}function za(e){return new Promise((t,a)=>{const r=URL.createObjectURL(e),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),t(o)},o.onerror=()=>{URL.revokeObjectURL(r),a(new Error("Não foi possível ler esta imagem."))},o.src=r})}let Yt;function rr(){return Yt===void 0&&(Yt=document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp")),Yt?"image/webp":"image/jpeg"}function Kn(e,t="Não foi possível ler esta imagem."){return new Promise((a,r)=>{const o=new Image;o.onload=()=>a(o),o.onerror=()=>r(new Error(t)),o.src=e})}function Dr(e,t,a,r=!1){const o=document.createElement("canvas"),n=o.getContext("2d"),i=e.naturalWidth||e.width,s=e.naturalHeight||e.height;if(a){const l=Math.min(i,s),f=Math.min(t,l);return o.width=f,o.height=f,n.drawImage(e,(i-l)/2,(s-l)/2,l,l,0,0,f,f),o}const c=Math.min(1,t/Math.max(i,s));return o.width=Math.max(1,Math.round(i*c)),o.height=Math.max(1,Math.round(s*c)),r||(n.fillStyle="#121419",n.fillRect(0,0,o.width,o.height)),n.drawImage(e,0,0,o.width,o.height),o}async function Ap(e,{maxSize:t,maxBytes:a}=$r.thumb){const r=await Kn(e),o=Dr(r,t,!1);for(const n of[.7,.55,.4]){const i=o.toDataURL("image/jpeg",n);if(ja(i)<=a)return i}return null}async function Ep(e){const t=St(e);if(t)throw new Error(t);return za(e)}async function Jn(e,{maxSize:t,maxBytes:a,square:r=!1,transparent:o=!1,qualities:n=[.86,.76,.66,.56,.46]}){let i=e;if(typeof Blob<"u"&&e instanceof Blob){const l=St(e);if(l)throw new Error(l);i=await za(e)}else if(!e||typeof e!="object"||!("width"in e)){const l=St(e);if(l)throw new Error(l)}const s=o&&rr()!=="image/webp"?"image/png":rr();let c=t;for(let l=0;l<6;l+=1){const f=Dr(i,c,r,o);for(const g of n){const x=f.toDataURL(s,g),A=ja(x);if(A<=a)return{dataUrl:x,bytes:A,width:f.width,height:f.height}}c=Math.round(Math.min(c,Math.max(f.width,f.height))*.8)}throw new Error("Não foi possível reduzir esta imagem o suficiente. Tente uma menor.")}const Xn=["image/jpeg","image/png","image/webp"];async function Tp(e,t=$r.map){const a=St(e);if(a)throw new Error(a);const r=await za(e),o=r.naturalWidth||r.width,n=r.naturalHeight||r.height;if(Xn.includes(e.type)&&e.size<=t.maxBytes&&Math.max(o,n)<=t.maxSize){const i=await Fn(e);return{dataUrl:i,bytes:ja(i),width:o,height:n}}return Jn(r,t)}const Zn=1e4,Qn=20;function ei(e,t,{windowMs:a=Zn,max:r=Qn}={}){return!e||!Number.isFinite(e.windowStart)?e?"reset":"create":t-e.windowStart>=a?"reset":e.count>=r?"blocked":"increment"}const ti="Muitas mensagens em pouco tempo. Espere alguns segundos.",Pe=3,ai=["weapons","armor","inventory","abilities","macros","conditions"];function ri(e){if(!e||typeof e!="object")return e;const t={...e};ai.forEach(r=>{Array.isArray(t[r])||(t[r]=[])}),t.inventory=t.inventory.filter(r=>r&&String(r.name||"").trim()).map(r=>({...r,quantity:Math.max(1,Math.round(Number(r.quantity)||1)),weight:Math.max(0,Number(r.weight)||0)}));const a=Math.round(Number(t.coins));return t.coins=Number.isFinite(a)&&a>0?a:0,typeof t.condition!="string"&&(t.condition=""),t}const oi={chest:"chest",door:"door"};function ni(e){return!e||typeof e!="object"||e.sprite?e:{...e,sprite:oi[e.kind]||"object"}}function ii(e){return!e||typeof e!="object"||!(e.door||e.barrier)||typeof e.open=="boolean"?e:{...e,open:!1}}function si(e){if(!e||typeof e!="object")return e;const t={...e};return Array.isArray(t.markers)&&(t.markers=t.markers.map(ni)),Array.isArray(t.walls)&&(t.walls=t.walls.map(ii)),t}function Mp(e){return!e||typeof e!="object"?!1:(Number(e.schemaVersion)||1)<Pe}function ci(e){if(!e||typeof e!="object")return{};const t=Number(e.version)||1;if(t>Pe)return{...e,futureVersion:!0};let a={...e};return t<3&&(a=si(a),Array.isArray(a.sheets)&&(a.sheets=a.sheets.map(ri))),{...a,version:Pe}}function jp(e){if(!e||typeof e!="object")return{error:"O arquivo não é um backup do NightTable."};const t=Number(e.version);return!Number.isInteger(t)||t<2?{error:"Backup sem versão: exporte de novo pela mesa."}:t>Pe?{error:`Backup feito numa versão mais nova do NightTable (v${t}). Atualize o app.`}:!e.scene||!Array.isArray(e.sheets)||e.sheets.length===0||!Array.isArray(e.tokens)||!Array.isArray(e.markers)?{error:"Backup incompleto: faltam cena, fichas, tokens ou objetos."}:{backup:ci(e)}}const li=[{days:0,label:"Sempre"},{days:365,label:"1 ano"},{days:90,label:"90 dias"},{days:30,label:"30 dias"}],di=24*36e5;function pi(e){const t=Number(e);return li.some(a=>a.days===t)?t:0}function zp(e,t=Date.now()){const a=pi(e);return a?t-a*di:null}function fi(e=[]){return{deleteTables:e.filter(t=>t.role==="gm").map(t=>t.tableId),leaveTables:e.filter(t=>t.role!=="gm").map(t=>t.tableId)}}const ia=e=>String(e??"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),ke=(e,t)=>String(e??"").trim().slice(0,t),_p=(e,t,a)=>Math.max(t,Math.min(a,Math.round(Number(e)||0))),Ip=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ui=e=>String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Cp=e=>ia(e).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");function mi(e){var a;const t=((a=e==null?void 0:e.toDate)==null?void 0:a.call(e))||(e?new Date(e):null);return t?t.toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):""}const gi=[{days:0,label:"Sem validade"},{days:1,label:"1 dia"},{days:7,label:"7 dias"},{days:30,label:"30 dias"}],bi=24*36e5;function Fr(e,t=Date.now()){const a=Number(e);return gi.some(r=>r.days===a&&a>0)?t+a*bi:null}const Br=e=>{var t;return typeof e=="number"?e:((t=e==null?void 0:e.toMillis)==null?void 0:t.call(e))??null};function _a(e,t=Date.now()){const a=Br(e);return a!==null&&t>=a}function Rp(e,t=Date.now()){const a=Br(e);return a===null?"sem validade":t>=a?"vencido":`vale até ${mi(a)}`}function Le(e=(a=>(a=globalThis.location)==null?void 0:a.origin)()||"",t="/nighttablesite/"){return`${e}${t.endsWith("/")?t:`${t}/`}`}function Np(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Le(t,a)}?convite=${encodeURIComponent(e)}`}function Op(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Le(t,a)}?transmissao=${encodeURIComponent(e)}`}function hi(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{return(new URLSearchParams(e).get("transmissao")||"").trim().toUpperCase().slice(0,24)||null}catch{return null}}const Kt={life:"maxLife",effort:"maxEffort",coins:null,xp:null},xi=new Set(["id","updatedAt","history"]),vi=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function yi(e,t){return[...new Set([...Object.keys(e||{}),...Object.keys(t||{})])].filter(r=>!xi.has(r)&&!vi(e==null?void 0:e[r],t==null?void 0:t[r]))}function wi(e,t){return Object.fromEntries(yi(e,t).map(a=>{const r=Number(t==null?void 0:t[a])-Number(e==null?void 0:e[a]),o=Number(t==null?void 0:t[a]),n=Kt[a]?Number(t==null?void 0:t[Kt[a]]):NaN,i=o<=0||Number.isFinite(n)&&o>=n;return a in Kt&&Number.isFinite(r)&&!i?[a,{delta:r}]:[a,(t==null?void 0:t[a])===void 0?{remove:!0}:{value:t[a]}]}))}function Je(e){return Array.isArray(e)?e.filter(t=>t!==void 0).map(Je):!e||typeof e!="object"||Object.getPrototypeOf(e)!==Object.prototype?e:Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0).map(([t,a])=>[t,Je(a)]))}const Si={map:{label:"Mapa",plural:"Mapas"},sheet:{label:"Ficha",plural:"Fichas"},macro:{label:"Macro",plural:"Macros"}},Pp={pending:"em análise",approved:"aprovado",rejected:"recusado",hidden:"fora do ar (denúncias)"},Ur=3,ki=80,Ai=1e3,or=8,Lp={maxSize:1600,maxBytes:6e5},$p={maxSize:1200,maxBytes:3e5},Ei=82e4,Gr="nighttable-gallery",de=(e,t)=>String(e??"").replace(/\s+/g," ").trim().slice(0,t);function Ti(e){const t=Array.isArray(e)?e:String(e||"").split(","),a=new Set;return t.map(r=>de(String(r).replace(/^#/,""),24)).filter(r=>r&&!a.has(r.toLowerCase())&&a.add(r.toLowerCase())).slice(0,8)}function Mi(e,t){var a,r;if(e==="map"){const o=typeof(t==null?void 0:t.image)=="string"&&t.image.startsWith("data:image/")&&t.image.length<=Ei?t.image:null;return o?{image:o,gridFit:t.gridFit&&typeof t.gridFit=="object"?t.gridFit:null}:null}if(e==="sheet"){const o=t==null?void 0:t.sheet;return!o||typeof o!="object"||!de(o.name,60)||!o.attributes?null:{sheet:o}}if(e==="macro"){const o=de((a=t==null?void 0:t.macro)==null?void 0:a.name,40),n=de((r=t==null?void 0:t.macro)==null?void 0:r.expression,80);return!o||!n?null:{macro:{name:o,expression:n,note:de(t.macro.note,140)}}}return null}function Dp({kind:e,title:t,description:a="",tags:r="",payload:o,author:n,thumb:i=null,rightsConfirmed:s},c=Date.now()){if(!Si[e])return{error:"Escolha o tipo do conteúdo."};const l=de(t,ki);if(!l)return{error:"Dê um título ao conteúdo."};if(!s)return{error:"Confirme que você pode compartilhar este conteúdo."};const f=Mi(e,o);return f?{item:{kind:e,title:l,description:String(a||"").trim().slice(0,Ai),tags:Ti(r),authorUid:(n==null?void 0:n.uid)||"local",authorName:de(n==null?void 0:n.name,80)||"Mestre",status:"pending",reports:0,thumb:typeof i=="string"&&i.startsWith("data:image/")&&i.length<=9e3?i:null,createdAt:c},payload:f}:{error:e==="map"?"A mesa não tem um mapa enviado para compartilhar.":"Escolha o que compartilhar."}}function Fp(e,{kind:t="all",query:a=""}={}){const r=ia(a).split(/\s+/).filter(Boolean);return e.filter(o=>t==="all"||o.kind===t).filter(o=>{const n=ia(`${o.title} ${o.description} ${o.tags.join(" ")} ${o.authorName}`);return r.every(i=>n.includes(i))}).sort((o,n)=>(n.createdAt||0)-(o.createdAt||0))}function Bp(e,t,{by:a="moderador",note:r="",now:o=Date.now()}={}){const n={approve:"approved",reject:"rejected",hide:"hidden",restore:"approved"}[t];return n?{...e,status:n,reviewedBy:de(a,80),reviewNote:de(r,300),reviewedAt:o,reports:t==="restore"||t==="approve"?0:e.reports}:e}function Up(e,t,a){if(e.status!=="approved"||t.includes(a))return{item:e,counted:!1};const r=(e.reports||0)+1;return{item:{...e,reports:r,status:r>=Ur?"hidden":"approved"},counted:!0}}function _t(e){try{const t=JSON.parse((e==null?void 0:e.getItem(Gr))||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function Ia(e,t){try{t.setItem(Gr,JSON.stringify(e))}catch{throw new Error("A galeria local encheu este navegador. Apague um envio antigo e tente de novo.")}}function Gp(e=globalThis.localStorage){return _t(e)}function Vp({item:e,payload:t},a=globalThis.localStorage,r=`gal-${Date.now()}-${Math.floor(Math.random()*1e3)}`){const o=_t(a);if(o.length>=or)throw new Error(`A galeria local guarda até ${or} envios. Apague algum antes.`);return Ia([{...e,id:r,payload:t,reporters:[]},...o],a),r}function qp(e,t,a=globalThis.localStorage){const r=_t(a).map(o=>o.id===e?{...o,...t(o)}:o);Ia(r,a)}function Wp(e,t=globalThis.localStorage){Ia(_t(t).filter(a=>a.id!==e),t)}const Xe=()=>y(d,"gallery"),Ca=e=>m(d,"gallery",e,"payload","data"),ji=e=>e.docs.map(t=>({id:t.id,...t.data()}));async function zi(){var t;const e=(t=I.currentUser)==null?void 0:t.uid;if(!e)return!1;try{return(await L(m(d,"moderators",e))).exists()}catch{return!1}}function _i({uid:e,moderator:t},a,r){const o={approved:[],mine:[],review:[]},n=()=>{const c=new Map;for(const l of Object.values(o))for(const f of l)c.set(f.id,f);a([...c.values()])},i=(c,l)=>_(l,f=>{o[c]=ji(f),n()},r),s=[i("approved",j(Xe(),P("status","==","approved"),K(200)))];return e&&s.push(i("mine",j(Xe(),P("authorUid","==",e),K(50)))),t&&s.push(i("review",j(Xe(),P("status","in",["pending","hidden"]),K(100)))),()=>s.forEach(c=>c())}async function Ii({item:e,payload:t}){const a=m(Xe()),r=q(d);return r.set(a,{...e,authorUid:I.currentUser.uid}),r.set(Ca(a.id),t),await r.commit(),a.id}async function Ci(e){const t=await L(Ca(e));return t.exists()?t.data():null}function Ri(e,t){const{status:a,reviewedBy:r,reviewNote:o,reviewedAt:n,reports:i}=t,s=q(d);return s.update(m(d,"gallery",e),{status:a,reviewedBy:r,reviewNote:o,reviewedAt:n,reports:i}),s.commit()}async function Ni(e,t){const a=I.currentUser.uid,r=(e.reports||0)+1,o=q(d);o.set(m(d,"gallery",e.id,"reports",a),{uid:a,reason:String(t||"").slice(0,300),at:Date.now()}),o.update(m(d,"gallery",e.id),{reports:r,status:r>=Ur?"hidden":"approved"}),await o.commit()}async function Vr(e){await F(Ca(e)).catch(()=>{}),await F(m(d,"gallery",e))}async function qr(e){const t=await G(j(Xe(),P("authorUid","==",e)));for(const a of t.docs)await Vr(a.id)}const Hp=Object.freeze(Object.defineProperty({__proto__:null,checkModerator:zi,deleteMyGalleryItems:qr,fetchGalleryPayload:Ci,moderateGalleryItem:Ri,removeGalleryItem:Vr,reportGalleryItem:Ni,submitToGallery:Ii,subscribeGallery:_i},Symbol.toStringTag,{value:"Module"})),nr="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function It(e=6){const t=crypto.getRandomValues(new Uint32Array(e));return Array.from(t,a=>nr[a%nr.length]).join("")}function R(){if(!(I!=null&&I.currentUser))throw new Error("Usuário não autenticado.");return I.currentUser}const H=e=>m(d,"tables",e);async function Oi({name:e,initialState:t={},campaign:a=null,avatar:r=null}){const o=R(),n=m(y(d,"tables")),i=It(),s=q(d);return s.set(n,{name:e,...a?{campaign:a}:{},ownerId:o.uid,inviteCode:i,state:{...t,schemaVersion:Pe},createdAt:b(),updatedAt:b()}),s.set(m(n,"members",o.uid),{uid:o.uid,role:"gm",displayName:o.displayName||o.email||"Mestre",tableName:e,...r?{avatar:r}:{},joinedAt:b()}),s.set(m(d,"invites",i),{tableId:n.id,tableName:e,gmName:String(o.displayName||"Mestre").slice(0,80),createdBy:o.uid,createdAt:b()}),await s.commit(),{tableId:n.id,inviteCode:i}}const Ra=e=>String(e||"").trim().toUpperCase();async function Wr(e,t,a){const r=R(),o=m(d,"tables",e,"members",r.uid),n=await L(o).catch(()=>null);return n!=null&&n.exists()?{tableId:e,tableName:t}:(await C(o,{uid:r.uid,tableName:t,guest:!!r.isAnonymous,joinedAt:b(),...a}),{tableId:e,tableName:t})}async function Pi(e){const t=Ra(e);if(!t)return null;const a=await L(m(d,"invites",t));if(!a.exists())return null;const{tableName:r,gmName:o,expiresAt:n}=a.data();return{code:t,tableName:r||"Mesa",gmName:o||null,expiresAt:n??null,expired:_a(n)}}async function Hr(e,{avatar:t=null}={}){const a=R(),r=Ra(e),o=await L(m(d,"invites",r));if(!o.exists())throw new Error("Convite inválido ou expirado.");const{tableId:n,tableName:i,expiresAt:s,stream:c}=o.data();if(c||_a(s))throw new Error("Convite inválido ou expirado.");return Wr(n,i,{role:"player",displayName:a.displayName||a.email||"Jogador",inviteCode:r,...t?{avatar:t}:{}})}async function Yr(){const e=R(),a=(await G(j(hn(d,"members"),P("uid","==",e.uid)))).docs.map(r=>({tableId:r.ref.parent.parent.id,...r.data()}));return Promise.all(a.map(async r=>{var i,s;const o=await L(H(r.tableId)).catch(()=>null),n=o!=null&&o.exists()?o.data():null;return{...r,tableName:(n==null?void 0:n.name)||r.tableName,archived:!!(n!=null&&n.archived),systemName:((s=(i=n==null?void 0:n.state)==null?void 0:i.system)==null?void 0:s.name)||"",campaign:(n==null?void 0:n.campaign)||null}}))}function Li(e,t){return ee(H(e),{name:String(t).trim().slice(0,80),updatedAt:b()})}function $i(e,t){return ee(H(e),{archived:!!t,updatedAt:b()})}function Di(e,t,a,r=()=>{}){return _(H(e),{includeMetadataChanges:!0},o=>{r({fromCache:o.metadata.fromCache,hasPendingWrites:o.metadata.hasPendingWrites}),t(o.exists()?{id:o.id,...o.data()}:null)},a)}function Fi(e,t,a){return _(y(d,"tables",e,"members"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Bi(e,t){return ee(H(e),{campaign:t,updatedAt:b()})}function Ui(e,t){const a=Object.fromEntries(Object.entries(t).map(([r,o])=>[`state.${r}`,o]));return Ma("state",ee(H(e),{...a,updatedAt:b()}))}function Gi(e,{isGm:t},a,r){const o=y(d,"tables",e,"tokens"),n=t?o:j(o,P("hidden","==",!1));return _(n,i=>a(i.docs.map(s=>({id:s.id,...s.data()}))),r)}function Vi(e,t){const{id:a,...r}=t;return C(m(d,"tables",e,"tokens",a),{hidden:!!r.monster,ownerUid:null,...r})}function qi(e,t,a,r){return Ma("move",ee(m(d,"tables",e,"tokens",t),{x:a,y:r}))}function Wi(e,t,a){return ee(m(d,"tables",e,"tokens",t),{rotation:a})}function Hi(e,t){return F(m(d,"tables",e,"tokens",t))}function sa({id:e,...t}){return t}async function Yi(e,{tokens:t,sheets:a,currentTokens:r=[],currentSheets:o=[]}){const n=q(d),i=new Set(t.map(c=>c.id)),s=new Set(a.map(c=>c.id));r.filter(c=>!i.has(c.id)).forEach(c=>n.delete(m(d,"tables",e,"tokens",c.id))),o.filter(c=>!s.has(c.id)).forEach(c=>n.delete(m(d,"tables",e,"sheets",c.id))),t.forEach(c=>n.set(m(d,"tables",e,"tokens",c.id),{ownerUid:null,sheetId:null,...sa(c),hidden:c.hidden??!!c.monster})),a.forEach(c=>n.set(m(d,"tables",e,"sheets",c.id),{ownerUid:null,...sa(c),updatedAt:b()})),await n.commit()}async function Ki(e,t,a,r=[]){const o=(a==null?void 0:a.uid)||null,n=q(d);n.update(m(d,"tables",e,"sheets",t),{ownerUid:o,owner:(a==null?void 0:a.displayName)||"Mestre",updatedAt:b()}),r.filter(i=>i.sheetId===t).forEach(i=>n.update(m(d,"tables",e,"tokens",i.id),{ownerUid:o})),await n.commit()}function Ji(e,t,a){return _(y(d,"tables",e,"sheets"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Xi(e,t){const{id:a,...r}=t,o=a?m(d,"tables",e,"sheets",a):m(y(d,"tables",e,"sheets"));return C(o,{ownerUid:null,...r,updatedAt:b()}).then(()=>o.id)}async function Zi(e,t,a){const r=m(d,"tables",e,"sheets",a.id),o=Object.fromEntries(Object.entries(wi(t,a)).map(([n,i])=>[n,"delta"in i?Pr(i.delta):i.remove?xn():Je(i.value)]));if(a.history&&a.history!==(t==null?void 0:t.history)&&(o.history=Je(a.history)),!!Object.keys(o).length)try{await ee(r,{...o,updatedAt:b()})}catch(n){if((n==null?void 0:n.code)!=="not-found")throw n;const{id:i,...s}=a;await C(r,{ownerUid:null,...Je(s),updatedAt:b()})}}function Qi(e,t,a,r,o){const n=y(d,"tables",e,t,a,"versions");return _(j(n,Q("at","desc"),K(20)),i=>r(i.docs.map(s=>({id:s.id,...s.data()}))),o)}async function es(e,t,a,r,o){const{id:n,...i}=r,s=y(d,"tables",e,t,a,"versions");await C(m(s,n),i);const l=(await G(j(s,Q("at","desc")))).docs.slice(o);if(l.length){const f=q(d);l.forEach(g=>f.delete(g.ref)),await f.commit()}}async function ir(e,t){const a=await G(y(d,"tables",e,t));for(const r of a.docs){const o=await G(y(r.ref,"versions"));await Te(o.docs.map(n=>i=>i.delete(n.ref)))}}async function ts(e,t){return await Promise.all(["player","gm"].map(a=>F(m(d,"tables",e,"sheets",t,"private",a)).catch(()=>{}))),F(m(d,"tables",e,"sheets",t))}function as(e,t,a,r,o){return _(m(d,"tables",e,"sheets",t,"private",a),n=>r(n.exists()&&n.data().notes||""),o)}function rs(e,t,a,r){return C(m(d,"tables",e,"sheets",t,"private",a),{notes:String(r||"").slice(0,4e3),updatedAt:b()})}const Ce=new Map;async function os(e){var t,a;if(!Ce.has(e)){const r=await L(m(d,"tables",e,"rate",R().uid)).catch(()=>null),o=r!=null&&r.exists()?r.data():null;Ce.set(e,o?{windowStart:(a=(t=o.windowStart)==null?void 0:t.toMillis)==null?void 0:a.call(t),count:o.count}:null)}return Ce.get(e)}function ns(e,t,a){const r=R().uid,o=m(d,"tables",t,"rate",r);a==="increment"?e.update(o,{count:Pr(1),updatedAt:b()}):e.set(o,{uid:r,windowStart:b(),count:1,updatedAt:b()})}async function Kr(e,t){const a=await os(e),r=ei(a,Date.now()),o=r==="blocked"?"reset":r,n=async i=>{const s=q(d);t(s),ns(s,e,i),await s.commit();const c=Ce.get(e);Ce.set(e,i==="increment"&&c?{...c,count:c.count+1}:{windowStart:Date.now(),count:1})};try{await n(o)}catch(i){if((i==null?void 0:i.code)!=="permission-denied"&&(i==null?void 0:i.code)!=="not-found")throw i;Ce.delete(e);try{await n(o==="increment"?"reset":"increment")}catch(s){throw(s==null?void 0:s.code)==="permission-denied"&&r==="blocked"?Object.assign(new Error(ti),{code:"rate-limited"}):s}}}async function is(e,{name:t,mime:a,bytes:r,dataUrl:o,visibility:n="public",to:i=null}){const s=m(y(d,"tables",e,"chatFiles"));return await C(s,{uid:R().uid,name:t,mime:String(a||"").slice(0,80),bytes:r,visibility:n,to:i,dataUrl:o,createdAt:b()}),s.id}async function ss(e,t){const a=await L(m(d,"tables",e,"chatFiles",t));if(!a.exists())throw new Error("Este anexo não está mais disponível.");return a.data().dataUrl}function cs(e,t){return F(m(d,"tables",e,"chatFiles",t))}function ls(e,{author:t,text:a,type:r="chat",visibility:o="public",roll:n=null,apply:i=null,to:s=null,toName:c=null,character:l=null,sound:f=null,celebrate:g=null,attachment:x=null,channel:A=null,item:S=null}){const v=R(),N=m(y(d,"tables",e,"messages"));return Ma("message",Kr(e,M=>{g&&M.set(m(d,"tables",e,"celebration","state"),{at:b(),uid:v.uid,by:String(t||"").slice(0,80)}),M.set(N,{uid:v.uid,author:t,text:a,type:r,visibility:o,roll:n,apply:i,to:s,toName:c,...l?{character:l}:{},...f?{sound:String(f).slice(0,60)}:{},...g?{celebrate:g}:{},...x?{attachment:x}:{},...A&&A!=="mesa"?{channel:A}:{},...S?{item:S}:{},createdAt:b()})}).then(()=>N))}function ds(e,t,a,r){const o=R().uid;return ee(m(d,"tables",e,"messages",t),new wn("reactions",a),r?vn(o):yn(o))}async function ps(e,{isGm:t,uid:a},r,o=500){const n=y(d,"tables",e,"messages"),i=r?[P("createdAt",">=",Ea.fromMillis(r))]:[],s=f=>f.docs.map(g=>({id:g.id,...g.data({serverTimestamps:"estimate"})})),c=t?[j(n,...i,Q("createdAt","desc"),K(o))]:[j(n,P("visibility","==","public"),...i,Q("createdAt","desc"),K(o)),j(n,P("uid","==",a),P("visibility","in",["gm","whisper"]),...i,Q("createdAt","desc"),K(o)),j(n,P("to","==",a),...i,Q("createdAt","desc"),K(o))],l=await Promise.all(c.map(f=>G(f)));return[...new Map(l.flatMap(s).map(f=>[f.id,f])).values()]}function fs(e,{isGm:t,uid:a},r,o,n=80){const i=y(d,"tables",e,"messages"),s=v=>v.docs.map(N=>({id:N.id,...N.data({serverTimestamps:"estimate"})}));if(t)return _(j(i,Q("createdAt","desc"),K(n)),v=>r(s(v).reverse()),o);let c=[],l=[],f=[];const g=()=>r([...new Map([...c,...l,...f].map(v=>[v.id,v])).values()].sort((v,N)=>{var M,h,B,J;return(((h=(M=v.createdAt)==null?void 0:M.toMillis)==null?void 0:h.call(M))||0)-(((J=(B=N.createdAt)==null?void 0:B.toMillis)==null?void 0:J.call(B))||0)}).slice(-n)),x=_(j(i,P("visibility","==","public"),Q("createdAt","desc"),K(n)),v=>{c=s(v),g()},o),A=_(j(i,P("uid","==",a),P("visibility","in",["gm","whisper"]),Q("createdAt","desc"),K(n)),v=>{l=s(v),g()},o),S=_(j(i,P("to","==",a),Q("createdAt","desc"),K(n)),v=>{f=s(v),g()},o);return()=>{x(),A(),S()}}function us(e,t,a){return _(m(d,"tables",e,"private","gm"),r=>t(r.data()||{}),a)}function ms(e,t,a,r){return _(m(d,"tables",e,"playerNotes",t),o=>{var n;return a(((n=o.data())==null?void 0:n.notes)||[])},r)}function gs(e,t,a){return C(m(d,"tables",e,"playerNotes",t),{notes:a,updatedAt:b()})}function bs(e,t){return C(m(d,"tables",e,"private","gm"),{...t,updatedAt:b()},{merge:!0})}function hs(e,t,a){return _(y(d,"tables",e,"locks"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function xs(e,t,a){return C(m(d,"tables",e,"locks",t),{...a,updatedAt:b()})}async function vs(e,t){const a=await G(j(y(d,"tables",e,"locks"),P("markerId","==",t))),r=q(d);a.forEach(o=>r.delete(o.ref)),await r.commit()}function ys(e,t,a){return C(m(d,"tables",e,"private","gm"),{lockCodes:{[t]:a},updatedAt:b()},{merge:!0})}function ws(e,t,a){return _(y(d,"tables",e,"scenes"),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function Ss(e,t){const{id:a,...r}=t;return C(m(d,"tables",e,"scenes",a),{...r,savedAt:b()})}function ks(e,t){return F(m(d,"tables",e,"scenes",t))}async function As(e,{remove:t,add:a}){const r=q(d);t.forEach(o=>r.delete(m(d,"tables",e,"tokens",o.id))),a.forEach(o=>r.set(m(d,"tables",e,"tokens",o.id),{ownerUid:null,sheetId:null,...sa(o),hidden:o.hidden??!!o.monster})),await r.commit()}function Es(e,{isGm:t,uid:a},r,o){const n=y(d,"tables",e,"handouts"),i=t?n:j(n,P("audience","array-contains-any",["all",a]));return _(i,s=>r(s.docs.map(c=>({id:c.id,...c.data({serverTimestamps:"estimate"})}))),o)}function Ts(e,t){const{id:a,...r}=t;return C(m(d,"tables",e,"handouts",a),{...r,createdAt:b()})}function Ms(e,t){return F(m(d,"tables",e,"handouts",t))}function js(e,{isGm:t},a,r){const o=y(d,"tables",e,"containers"),n=t?o:j(o,P("opened","==",!0));return _(n,i=>a(Object.fromEntries(i.docs.map(s=>[s.id,s.data()]))),r)}function zs(e,t,{contents:a,opened:r=!1,reveal:o}){return C(m(d,"tables",e,"containers",t),{contents:a,opened:r,...o!==void 0?{reveal:o}:{}},{merge:!0})}function _s(e,t){return C(m(d,"tables",e,"containers",t),{ensured:!0},{merge:!0})}function Is(e,t){return F(m(d,"tables",e,"containers",t))}function Cs(e,t,a){return ee(m(d,"tables",e,"containers",t),{opened:!0,openedBy:String(a).slice(0,80),openedAt:b()})}function Rs(e,t,a,r){const o=m(d,"tables",e,"containers",t);return Sn(d,async n=>{const i=await n.get(o),s=i.exists()?i.data().contents||[]:[],c=s.find(l=>l.id===a);if(!c)throw Object.assign(new Error("Alguém já pegou este item."),{code:"already-taken"});return n.update(o,{contents:s.filter(l=>l.id!==a),takenBy:String(r).slice(0,80)}),c})}function Ns(e){const t=Object.fromEntries(Object.entries(e.context||{}).map(([a,r])=>[a,String(r??"").slice(0,80)]).slice(0,10));return Aa(y(d,"errorReports"),{at:Number(e.at)||Date.now(),where:String(e.where||"").slice(0,60),message:String(e.message||"").slice(0,300),code:e.code?String(e.code).slice(0,60):null,stack:e.stack?String(e.stack).slice(0,2e3):null,context:t,createdAt:b()})}async function Os(e,t,a=200){const r=await G(j(y(d,"tables",e,"messages"),P("createdAt","<",Ea.fromMillis(t)),Q("createdAt"),K(a)));return await Te(r.docs.map(o=>n=>n.delete(o.ref))),r.size}async function Jr(e=()=>{}){const t=R().uid,a=fi(await Yr());for(const o of a.deleteTables)e("Apagando suas mesas…"),await ro(o);for(const o of a.leaveTables)e("Saindo das mesas em que você joga…"),await F(m(d,"tables",o,"members",t)).catch(()=>{});e("Apagando sua biblioteca e seu perfil…"),await qr(t).catch(()=>{});const r=await G(y(d,"users",t,"library"));return await Te(r.docs.map(o=>n=>n.delete(o.ref))),await F(m(d,"users",t)),a}function Ps(e,{actor:t,action:a,detail:r=""}){return Aa(y(d,"tables",e,"audit"),{uid:R().uid,actor:String(t).slice(0,80),action:String(a).slice(0,40),detail:String(r).slice(0,200),createdAt:b()})}function Ls(e,t,a){return _(j(y(d,"tables",e,"audit"),Q("createdAt","desc"),K(50)),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function $s(e,t,a){return ee(m(d,"tables",e,"members",t),{permissions:a})}function Ds(e,t,a){return ee(m(d,"tables",e,"members",t),{muted:!!a})}async function Fs(e,t){return await C(m(d,"tables",e,"bans",t.uid),{uid:t.uid,displayName:String(t.displayName||"").slice(0,80),at:b()}),ao(e,t)}function Bs(e,t){return F(m(d,"tables",e,"messages",t))}function Us(e,t,a){return ee(m(d,"tables",e,"messages",t),{text:a,editedAt:b()})}function Gs(e,t,a){const{displayName:r,color:o,pronouns:n,avatar:i}=a;return ee(m(d,"tables",e,"members",t),{...r?{displayName:r}:{},color:o,pronouns:n,avatar:i})}function Vs(e,t,a){return ee(m(d,"tables",e,"members",t),{role:a})}function qs(e,t){const a=R().uid;return _(y(d,"users",a,"library"),r=>e(r.docs.map(o=>({...o.data(),id:o.id}))),t)}function Ws(e){const t=R().uid,{id:a,...r}=e;return C(m(d,"users",t,"library",a),{...r,createdAt:b()})}function Hs(e){return F(m(d,"users",R().uid,"library",e))}function Ys(e,t,a){return _(y(d,"tables",e,"presence"),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function Ks(e,{name:t,activity:a}){const r=R().uid,o={uid:r,name:String(t||"Jogador").slice(0,80),lastSeen:b()};return a!==void 0&&Object.assign(o,{activity:a,activityAt:b()}),C(m(d,"tables",e,"presence",r),o,{merge:!0})}function Js(e,t,a){return _(j(y(d,"tables",e,"journal"),Q("createdAt","desc"),K(100)),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function Xs(e,{title:t,text:a,author:r}){return Aa(y(d,"tables",e,"journal"),{title:t,text:a,author:r,uid:R().uid,createdAt:b()})}function Zs(e,t){return F(m(d,"tables",e,"journal",t))}function Qs(e,t,a){return C(m(d,"tables",e,"private","gm"),{sceneNotes:{[t]:a},updatedAt:b()},{merge:!0})}function ec(e,t,a){return _(y(d,"tables",e,"drawings"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function tc(e,t){const a=R(),{id:r,...o}=t;return C(m(d,"tables",e,"drawings",r),{...o,uid:a.uid,createdAt:b()})}function ac(e,t){return F(m(d,"tables",e,"drawings",t))}async function rc(e,t){for(let a=0;a<t.length;a+=450){const r=q(d);t.slice(a,a+450).forEach(o=>r.delete(m(d,"tables",e,"drawings",o.id))),await r.commit()}}async function Te(e,t=400){for(let a=0;a<e.length;a+=t){const r=q(d);e.slice(a,a+t).forEach(o=>o(r)),await r.commit()}}function Na(e,t){const a=o=>y(d,"tables",o,e),r=(o,n)=>y(d,"tables",o,e,n,"chunks");return{subscribe:(o,n,i)=>_(j(a(o),Q("createdAt","desc")),s=>n(s.docs.map(c=>({id:c.id,...c.data({serverTimestamps:"estimate"})}))),i),async upload(o,n,i){const s=m(a(o)),c=Hn(n);return await Te(c.map((l,f)=>g=>g.set(m(s,"chunks",String(f)),{index:f,data:l})),4),await C(s,{...i,chunkCount:c.length,uid:R().uid,createdAt:b()}),s.id},async load(o,n){const i=await G(r(o,n));if(i.empty)throw new Error(t);return Yn(i.docs.map(s=>s.data()))},async remove(o,n){const i=await G(r(o,n)),s=q(d);i.forEach(c=>s.delete(c.ref)),s.delete(m(a(o),n)),await s.commit()}}}const Ct=Na("mapImages","Mapa não encontrado."),oc=Ct.subscribe,nc=(e,{name:t,dataUrl:a,bytes:r,width:o,height:n,thumb:i=null})=>Ct.upload(e,a,{name:t,bytes:r,width:o,height:n,...Vn(i)?{thumb:i}:{}}),ic=Ct.load,Xr=Ct.remove,Rt=Na("audioFiles","Áudio não encontrado."),sc=Rt.subscribe,cc=(e,{name:t,kind:a,dataUrl:r,bytes:o})=>Rt.upload(e,r,{name:t,kind:a,bytes:o}),lc=Rt.load,Zr=Rt.remove,Nt=Na("campaignFiles","Arquivo não encontrado."),dc=Nt.subscribe,pc=(e,{name:t,fileName:a,mime:r,bytes:o,description:n,dataUrl:i})=>Nt.upload(e,i,{name:t,fileName:a,mime:r,bytes:o,description:n}),fc=Nt.load,Qr=Nt.remove;function uc(e,t,a){return _(y(d,"tables",e,"sheetImages"),r=>t(Object.fromEntries(r.docs.map(o=>[o.id,o.data()]))),a)}function mc(e,t,{portrait:a,avatar:r,animated:o=null,cutout:n=!1,frame:i=null,avatarCrop:s=null}){return C(m(d,"tables",e,"sheetImages",t),{portrait:a,avatar:r,...o?{animated:o}:{},...n?{cutout:!0}:{},...i==="whole"?{frame:i}:{},...s?{avatarCrop:s}:{},updatedAt:b()})}function gc(e,t){return F(m(d,"tables",e,"sheetImages",t))}async function bc(e,t=0){const a=await L(H(e)),{inviteCode:r,name:o}=a.data();let n=null;for(let c=0;c<5&&!n;c+=1){const l=It();(await L(m(d,"invites",l))).exists()||(n=l)}if(!n)throw new Error("Não foi possível gerar um código. Tente de novo.");const i=q(d),s=Fr(t);return i.set(m(d,"invites",n),{tableId:e,tableName:o,gmName:String(R().displayName||"Mestre").slice(0,80),createdBy:R().uid,createdAt:b(),expiresAt:s?Ea.fromMillis(s):null}),i.update(H(e),{inviteCode:n,inviteExpiresAt:s,updatedAt:b()}),r&&i.delete(m(d,"invites",r)),await i.commit(),n}async function hc(e){const t=await L(H(e)),{inviteCode:a}=t.data(),r=q(d);a&&r.delete(m(d,"invites",a)),r.update(H(e),{inviteCode:null,inviteExpiresAt:null,updatedAt:b()}),await r.commit()}async function xc(e){const t=await L(H(e)),{streamCode:a,name:r}=t.data(),o=It(16),n=q(d);return n.set(m(d,"invites",o),{tableId:e,tableName:r,gmName:String(R().displayName||"Mestre").slice(0,80),createdBy:R().uid,createdAt:b(),stream:!0}),n.update(H(e),{streamCode:o,updatedAt:b()}),a&&n.delete(m(d,"invites",a)),await n.commit(),a&&await eo(e),o}async function vc(e){const t=await L(H(e)),{streamCode:a}=t.data(),r=q(d);a&&r.delete(m(d,"invites",a)),r.update(H(e),{streamCode:null,updatedAt:b()}),await r.commit(),await eo(e)}async function eo(e){const t=await G(j(y(H(e),"members"),P("stream","==",!0)));await Te(t.docs.map(a=>r=>r.delete(a.ref)))}async function to(e){const t=R(),a=Ra(e),r=await L(m(d,"invites",a));if(!r.exists()||!r.data().stream)throw new Error("Link de transmissão inválido ou revogado.");const{tableId:o,tableName:n}=r.data();return Wr(o,n,{role:"spectator",displayName:t.displayName||"Transmissão",inviteCode:a,stream:!0})}async function ao(e,t){const a=H(e),[r,o]=await Promise.all([G(j(y(a,"sheets"),P("ownerUid","==",t.uid))),G(j(y(a,"tokens"),P("ownerUid","==",t.uid)))]);return await Kr(e,n=>{n.delete(m(a,"members",t.uid)),r.forEach(i=>n.update(i.ref,{ownerUid:null,owner:"Mestre",updatedAt:b()})),o.forEach(i=>n.update(i.ref,{ownerUid:null})),n.set(m(y(a,"messages")),{uid:R().uid,author:"Sistema",text:`${t.displayName||"Um jogador"} foi removido da mesa`,type:"system",visibility:"public",roll:null,apply:null,to:null,toName:null,createdAt:b()})}),{releasedSheets:r.size,releasedTokens:o.size}}async function ro(e){const t=H(e),a=await L(t),{inviteCode:r,streamCode:o}=a.data(),n=await L($e(e));for(const f of n.exists()?n.data().pages||[]:[])await F(m(d,"publicPages",f.code)).catch(()=>{});const i=await G(y(t,"mapImages"));for(const f of i.docs)await Xr(e,f.id);await ir(e,"sheets"),await ir(e,"scenes");const s=await G(y(t,"audioFiles"));for(const f of s.docs)await Zr(e,f.id);const c=await G(y(t,"campaignFiles"));for(const f of c.docs)await Qr(e,f.id);for(const f of["tokens","sheets","sheetImages","messages","drawings","private","containers","celebration","bans","locks","handouts","journal","scenes","presence","rate","audit"]){const g=await G(y(t,f));await Te(g.docs.map(x=>A=>A.delete(x.ref)))}r&&await F(m(d,"invites",r)),o&&await F(m(d,"invites",o));const l=await G(y(t,"members"));await Te(l.docs.map(f=>g=>g.delete(f.ref))),await F(t)}const $e=e=>m(d,"tables",e,"private","publicPages");async function yc(e,t,a){const r=a.code||It(16),o=await L($e(e)),n=[{...a,code:r},...(o.exists()?o.data().pages||[]:[]).filter(s=>s.code!==r)].slice(0,10),i=q(d);return i.set(m(d,"publicPages",r),{...t,tableId:e,createdBy:R().uid,expiresAt:a.expiresAt?new Date(a.expiresAt):null,updatedAt:b()}),i.set($e(e),{pages:n,updatedAt:b()}),await i.commit(),r}async function wc(e,t){const a=await L($e(e)),r=(a.exists()?a.data().pages||[]:[]).filter(n=>n.code!==t),o=q(d);o.delete(m(d,"publicPages",t)),o.set($e(e),{pages:r,updatedAt:b()}),await o.commit()}function Sc(e,t,a){return _($e(e),r=>t(r.exists()?r.data().pages||[]:[]),a)}async function kc(e){try{const t=await L(m(d,"publicPages",e));return t.exists()?t.data():null}catch(t){if((t==null?void 0:t.code)==="permission-denied")return null;throw t}}const Yp=Object.freeze(Object.defineProperty({__proto__:null,addDrawing:tc,addJournalEntry:Xs,assignSheetOwner:Ki,banMember:Fs,clearDrawings:rc,createStreamLink:xc,createTable:Oi,deleteAudioFile:Zr,deleteCampaignFile:Qr,deleteChatFile:cs,deleteContainer:Is,deleteDrawing:ac,deleteHandout:Ms,deleteJournalEntry:Zs,deleteLibraryEntry:Hs,deleteMapImage:Xr,deleteMessage:Bs,deleteMyData:Jr,deleteSceneSnapshot:ks,deleteSheet:ts,deleteSheetImages:gc,deleteTable:ro,deleteToken:Hi,editMessage:Us,ensureContainer:_s,fetchInvitePreview:Pi,fetchPublicPage:kc,fetchSessionMessages:ps,joinTableByInvite:Hr,joinTableByStreamCode:to,listMyTables:Yr,loadAudioFile:lc,loadCampaignFile:fc,loadChatFile:ss,loadMapImage:ic,logAudit:Ps,mergeSaveSheet:Zi,moveToken:qi,openContainer:Cs,pruneMessages:Os,publishPublicPage:yc,reactToMessage:ds,regenerateInvite:bc,removeMember:ao,renameTable:Li,replaceSceneTokens:As,replaceTableContent:Yi,reportError:Ns,resetLock:vs,revokeInvite:hc,revokePublicPage:wc,revokeStreamLink:vc,rotateToken:Wi,saveContainer:zs,saveGmNotes:bs,saveHandout:Ts,saveLibraryEntry:Ws,saveLockCode:ys,saveLockRecord:xs,savePlayerNotes:gs,saveSceneNote:Qs,saveSceneSnapshot:Ss,saveSheet:Xi,saveSheetImages:mc,saveSheetPrivate:rs,saveToken:Vi,saveVersion:es,sendMessage:ls,setMemberMuted:Ds,setMemberPermissions:$s,setMemberRole:Vs,setTableArchived:$i,subscribeAudioFiles:sc,subscribeAudit:Ls,subscribeCampaignFiles:dc,subscribeContainers:js,subscribeDrawings:ec,subscribeGmNotes:us,subscribeHandouts:Es,subscribeJournal:Js,subscribeLibrary:qs,subscribeLocks:hs,subscribeMapImages:oc,subscribeMembers:Fi,subscribeMessages:fs,subscribePlayerNotes:ms,subscribePresence:Ys,subscribePublicPages:Sc,subscribeScenes:ws,subscribeSheetImages:uc,subscribeSheetPrivate:as,subscribeSheets:Ji,subscribeTable:Di,subscribeTokens:Gi,subscribeVersions:Qi,takeFromContainer:Rs,updateCampaign:Bi,updateMemberProfile:Gs,updatePresence:Ks,updateTableState:Ui,uploadAudioFile:cc,uploadCampaignFile:pc,uploadChatFile:is,uploadMapImage:nc},Symbol.toStringTag,{value:"Module"}));I&&(I.languageCode="pt");async function nt(e,t={}){var o;const a=m(d,"users",e.uid);if((await L(a)).exists()){await C(a,{lastLoginAt:b()},{merge:!0});return}await C(a,{displayName:t.displayName||e.displayName||((o=e.email)==null?void 0:o.split("@")[0])||"Aventureiro",email:e.email||null,photoURL:e.photoURL||null,createdAt:b(),lastLoginAt:b()})}function Ac(e){return jn(I,e)}async function Kp(e,t){const{user:a}=await kn(I,e,t);return await nt(a),a}async function Jp({name:e,email:t,password:a}){const{user:r}=await An(I,t,a);return e&&await jt(r,{displayName:e}),await nt(r,{displayName:e}),r}async function Xp(){const{user:e}=await Tn(I,new Mn);return await nt(e),e}async function Zp({name:e,inviteCode:t}){var n;const a=String(e||"").trim().slice(0,40);if(!a)throw Object.assign(new Error("Informe seu nome."),{code:"guest/no-name"});if(!String(t||"").trim())throw Object.assign(new Error("Informe o código de convite."),{code:"guest/no-code"});const r=(n=I.currentUser)!=null&&n.isAnonymous?I.currentUser:null,o=r||(await Lr(I)).user;await jt(o,{displayName:a}),await nt(o,{displayName:a});try{return await Hr(t)}catch(i){throw r||await o.delete().catch(()=>Ta(I)),i}}async function Qp(e){const t=I.currentUser,a=t||(await Lr(I)).user;t||(await jt(a,{displayName:"Transmissão"}),await nt(a,{displayName:"Transmissão"}));try{return await to(e)}catch(r){throw t||await a.delete().catch(()=>Ta(I)),r}}async function ef(e){const t=I.currentUser;t&&(await Jr(e),e==null||e("Apagando a conta…"),await t.delete())}function tf(e){return En(I,e)}function Ec(){return Ta(I)}async function Tc(e){const t=await L(m(d,"users",e));return t.exists()?t.data():null}async function Mc({displayName:e,photo:t,avatarId:a,avatarColor:r}){const o=I.currentUser;if(!o)throw new Error("Entre na sua conta para editar o perfil.");e&&e!==o.displayName&&await jt(o,{displayName:e}),await C(m(d,"users",o.uid),{displayName:e||o.displayName||null,photo:t,avatarId:a,avatarColor:r,updatedAt:b()},{merge:!0})}const jc={"auth/invalid-email":"E-mail inválido.","auth/invalid-credential":"E-mail ou senha incorretos.","auth/user-not-found":"E-mail ou senha incorretos.","auth/wrong-password":"E-mail ou senha incorretos.","auth/email-already-in-use":"Este e-mail já está cadastrado.","auth/weak-password":"A senha precisa ter pelo menos 6 caracteres.","auth/too-many-requests":"Muitas tentativas. Aguarde um pouco e tente de novo.","auth/popup-closed-by-user":"A janela de login foi fechada antes de concluir.","auth/popup-blocked":"O navegador bloqueou a janela de login. Libere pop-ups para este site.","auth/network-request-failed":"Falha de conexão. Verifique sua internet.","auth/operation-not-allowed":"Este método de login não está ativado no Firebase.","auth/admin-restricted-operation":"A entrada sem conta não está ativada no Firebase (Authentication › Sign-in method › Anônimo).","guest/no-name":"Informe seu nome.","permission-denied":"Não foi possível entrar nesta mesa. Confira o código; se você foi bloqueado pelo Mestre, não dá para voltar.","auth/requires-recent-login":"Por segurança, saia, entre de novo e repita a exclusão.","guest/no-code":"Informe o código de convite."};function af(e){return(e==null?void 0:e.message)==="Convite inválido ou expirado."?e.message:jc[e==null?void 0:e.code]||"Não foi possível concluir. Tente novamente."}const zc=["#6d52be","#2f7280","#b36154","#4d7a3f","#a0742c","#7c4b62","#3d5fa8","#8a3f8f","#4b4f5c"],rf=["ela/dela","ele/dele","elu/delu"],oo=40,_c=24,no=4e4,Ic=/^#[0-9a-f]{6}$/i;function Oa(e){return typeof e=="string"&&Ic.test(e)}function of(e={}){const t=String(e.displayName||"").trim().slice(0,oo),a=String(e.pronouns||"").trim().slice(0,_c),r=typeof e.avatar=="string"&&e.avatar.startsWith("data:image/")&&e.avatar.length<=no?e.avatar:null;return{displayName:t||null,pronouns:a||null,color:Oa(e.color)?e.color.toLowerCase():null,avatar:r}}function nf(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"?":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}const Cc=[{id:"dragao",emoji:"🐉",label:"Dragão"},{id:"mago",emoji:"🧙",label:"Mago"},{id:"elfo",emoji:"🧝",label:"Elfo"},{id:"caveira",emoji:"💀",label:"Caveira"},{id:"fantasma",emoji:"👻",label:"Fantasma"},{id:"lobo",emoji:"🐺",label:"Lobo"},{id:"coruja",emoji:"🦉",label:"Coruja"},{id:"gato",emoji:"🐈‍⬛",label:"Gato preto"},{id:"espadas",emoji:"⚔️",label:"Espadas"},{id:"escudo",emoji:"🛡️",label:"Escudo"},{id:"dado",emoji:"🎲",label:"Dado"},{id:"lua",emoji:"🌙",label:"Lua"}],ca=zc;function io(e){return Cc.find(t=>t.id===e)||null}function Rc(e,t=ca[0]){const a=io(e);if(!a)return null;const o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${Oa(t)?t:ca[0]}"/><text x="32" y="43" font-size="34" text-anchor="middle">${a.emoji}</text></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(o)}`}function sr(e={}){const t=String(e.displayName||"").trim().slice(0,oo)||null,a=io(e.avatarId)?e.avatarId:null,r=a&&Oa(e.avatarColor)?e.avatarColor.toLowerCase():null;let o=typeof e.photo=="string"&&e.photo.startsWith("data:image/")&&e.photo.length<=no?e.photo:null;return a&&(o=Rc(a,r||ca[0])),{displayName:t,photo:o,avatarId:a,avatarColor:r}}function sf(e,t){return(e==null?void 0:e.photo)||(t==null?void 0:t.photoURL)||null}function cf(e,t){return(e==null?void 0:e.displayName)||(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||""}const so=O.createContext({user:null,profile:null,loading:!1,enabled:!1,logout:async()=>{},saveProfile:async()=>{}});function Nc({children:e}){const[t,a]=O.useState(null),[r,o]=O.useState(gt),[n,i]=O.useState(null);O.useEffect(()=>{if(gt)return Ac(f=>{a(f),o(!1)})},[]),O.useEffect(()=>{if(i(null),!t)return;let f=!0;return Tc(t.uid).then(g=>{f&&g&&i(sr({...g,displayName:g.displayName||t.displayName}))}).catch(()=>{}),()=>{f=!1}},[t==null?void 0:t.uid]);const s=async f=>{const g=sr(f);if(!g.displayName)throw new Error("Escolha um nome.");return await Mc(g),i(g),g},c=async()=>{t!=null&&t.isAnonymous&&!window.confirm("Você entrou sem conta. Ao sair, perde o acesso a esta mesa e precisará do convite de novo. Sair mesmo assim?")||await Ec()},l=O.useMemo(()=>({user:t,profile:n,loading:r,enabled:gt,logout:c,saveProfile:s}),[t,n,r]);return p.jsx(so.Provider,{value:l,children:e})}function Oc(){return O.useContext(so)}const cr=50,Pc=5,Ie=[];let kt={},la=null,lr=0;function Lc(e){kt={...kt,...e}}function lf(e){la=e}const ut=(e,t)=>String(e||"").slice(0,t);function $c(e,t,a=kt,r=Date.now()){const o=(e==null?void 0:e.message)||(typeof e=="string"?e:"Erro desconhecido");return{at:r,where:ut(t,60),message:ut(o,300),code:ut(e==null?void 0:e.code,60)||null,stack:ut(e==null?void 0:e.stack,2e3)||null,context:{...a}}}function da(e,t="app"){const a=$c(e,t);return Ie.push(a),Ie.length>cr&&Ie.splice(0,Ie.length-cr),la&&lr<Pc&&(lr+=1,Promise.resolve().then(()=>la(a)).catch(()=>{})),a}function dr(){return[...Ie]}function co(){return JSON.stringify({geradoEm:new Date().toISOString(),contexto:kt,erros:Ie},null,2)}function Dc(e=globalThis.window){!(e!=null&&e.addEventListener)||e.__nighttableErrors||(e.__nighttableErrors=!0,e.addEventListener("error",t=>da(t.error||t.message,"janela")),e.addEventListener("unhandledrejection",t=>da(t.reason,"promessa")))}class Fc extends Z.Component{constructor(a){super(a);Za(this,"copy",async()=>{try{await navigator.clipboard.writeText(co()),this.setState({copied:!0})}catch{}});this.state={failed:!1,copied:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(a,r){da(Object.assign(a||new Error("Falha na tela"),{stack:`${(a==null?void 0:a.stack)||""}
${(r==null?void 0:r.componentStack)||""}`}),"tela")}render(){if(!this.state.failed)return this.props.children;const a={padding:"9px 16px",border:0,borderRadius:9,color:"#fff",background:"var(--c-7358d0)",fontSize:13,cursor:"pointer"};return p.jsx("main",{role:"alert",style:{height:"100dvh",overflowY:"auto",display:"grid",placeItems:"center",padding:24,color:"var(--c-e7e5e2)",background:"var(--c-0a0b0f)",fontFamily:"system-ui, sans-serif"},children:p.jsxs("div",{style:{maxWidth:440,display:"grid",gap:12,textAlign:"center"},children:[p.jsx("h1",{style:{margin:0,fontSize:22},children:"Algo deu errado nesta tela"}),p.jsx("p",{style:{margin:0,color:"var(--c-a9adb6)",fontSize:14,lineHeight:1.5},children:"Seus dados da mesa estão salvos. Recarregue a página; se continuar, copie o relatório e envie para quem cuida do NightTable."}),p.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[p.jsx("button",{type:"button",style:a,onClick:()=>window.location.reload(),children:"Recarregar"}),p.jsx("button",{type:"button",style:{...a,background:"var(--c-2a2d36)"},onClick:this.copy,children:this.state.copied?"Relatório copiado":"Copiar relatório"})]})]})})}}const Bc={development:{label:"DEV",color:"#63d59a"},emulators:{label:"EMULADOR",color:"#7fe3ff"},staging:{label:"STAGING",color:"#f3c48f"},production:{label:null,color:null}};function Uc(e={}){const t=String(e.VITE_APP_ENV||"").trim().toLowerCase();return t in Bc?t:e.VITE_USE_FIREBASE_EMULATORS==="true"?"emulators":e.DEV?"development":"production"}const Gc={BASE_URL:"/nighttablesite/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyAojCR46U1f6Bivq7ogNUkQMReQZ8RPpmI",VITE_FIREBASE_APP_ID:"1:839551252957:web:f9a1f161e39ab7ebb85e34",VITE_FIREBASE_AUTH_DOMAIN:"nighttable-5621b.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-1Z4XL9CFYE",VITE_FIREBASE_MESSAGING_SENDER_ID:"839551252957",VITE_FIREBASE_PROJECT_ID:"nighttable-5621b",VITE_FIREBASE_STORAGE_BUCKET:"nighttable-5621b.firebasestorage.app",VITE_SERVER_ROLLS:"false",VITE_USE_FIREBASE_EMULATORS:"false"},Vc="09/10/2026";function qc(e=Gc||{}){return String(e.VITE_LEGAL_CONTACT||"").trim()||null}const At={privacidade:{title:"Política de privacidade",intro:"Esta política explica quais dados o NightTable guarda, para quê e como você pode apagá-los. Ela segue a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018).",sections:[["Quais dados guardamos",["Conta: nome de exibição, e-mail e, se você entrar com Google, a foto do perfil. Senhas ficam só no Firebase Authentication (Google) e nunca são vistas por nós.","Convidado sem conta: o nome que você digitou e um identificador anônimo deste navegador.","Conteúdo da mesa: o que você e os outros participantes criam — mensagens do chat, rolagens, fichas, mapas, imagens, áudios, desenhos, diário, handouts e anotações.","Perfil na mesa: nome, cor, pronome e avatar que você escolher para cada mesa.","Presença: se você está conectado e o que está fazendo no momento (digitando, rolando dados), para mostrar aos outros na mesa.","Registro de auditoria da mesa: ações do Mestre (convites, bloqueios, permissões), visível só aos Mestres."]],["Para que usamos",["Só para fazer a mesa funcionar: entrar, sincronizar em tempo real, guardar o histórico da campanha e aplicar as permissões de cada papel.","Não vendemos dados, não mostramos anúncios e não fazemos perfil de comportamento."]],["Quem vê o quê",["O conteúdo de uma mesa é visível para os participantes dela, conforme o papel (Mestre, co-Mestre, jogador, espectador). Sussurros e handouts privados ficam só com quem os recebe e com os Mestres quando aplicável.","O código de convite mostra o nome da mesa e do Mestre a quem tiver o código."]],["Onde os dados ficam",["No Google Firebase (Authentication e Cloud Firestore), que pode processar dados fora do Brasil, com as garantias contratuais do Google.","Neste navegador (localStorage): preferências, última mesa aberta, personagem escolhido e a biblioteca do modo local."]],["Serviços externos opcionais",["Relatórios de erro: desligados por padrão. Se você ativar em Ajuda e preferências, erros são enviados sem nome, e-mail ou conversas.","Discord: se o Mestre configurar um webhook, as rolagens da mesa são enviadas para o canal do Discord dele, sob a política do Discord.","Link de chamada de voz/vídeo: abre o serviço escolhido pelo Mestre (Discord, Meet etc.), com a política desse serviço."]],["Por quanto tempo",["Enquanto a mesa ou a conta existirem. O Mestre pode definir uma retenção do chat, e mensagens mais antigas são apagadas.","Ao excluir uma mesa, o conteúdo dela é apagado. Cópias em cache do navegador somem ao limpar os dados do site."]],["Seus direitos",['Você pode ver e corrigir seus dados (perfil e fichas), exportar fichas e campanhas em JSON, pedir ao Mestre para sair de uma mesa e excluir a conta em "Excluir minha conta", no lobby — isso apaga as mesas que você criou, sua biblioteca e seu perfil, e tira você das outras mesas.',"Mensagens que você enviou em mesas de outras pessoas ficam com a mesa; peça ao Mestre para apagá-las."]]]},termos:{title:"Termos de uso",intro:"Ao usar o NightTable você concorda com estes termos. Eles valem para quem mestra, joga ou assiste.",sections:[["O serviço",["O NightTable é uma mesa virtual de RPG. Ele é oferecido como está, sem garantia de disponibilidade contínua; faça cópias de segurança das campanhas importantes (Exportar campanha).","Recursos podem mudar ou ser retirados. Recursos experimentais ficam atrás de opções da mesa."]],["Sua conta",["Você é responsável pelo que acontece na sua conta e por guardar sua senha. Convidados sem conta perdem o acesso se apagarem os dados do navegador.","Para criar mesas é preciso ter uma conta cadastrada."]],["Conteúdo",["O que você envia (mapas, imagens, áudios, textos) continua seu. Você declara ter o direito de usá-lo e nos autoriza apenas a guardar e mostrar esse conteúdo aos participantes da mesa.","Não envie material de terceiros sem permissão, conteúdo ilegal, discurso de ódio, assédio, conteúdo sexual envolvendo menores ou dados pessoais de outras pessoas sem consentimento."]],["Convites e moderação",["Quem tem o código de convite entra na mesa. O Mestre é responsável por compartilhar o convite com cuidado e pode revogá-lo, silenciar, remover e bloquear participantes.","Podemos remover conteúdo ou contas que violem estes termos."]],["Limites",["Há limites técnicos de tamanho de imagens, áudios e mensagens, e um limite de mensagens em sequência, para manter o serviço no plano gratuito do Firebase.","Não tente contornar permissões, acessar mesas sem convite ou sobrecarregar o serviço."]],["Mudanças nestes termos",["Quando os termos mudarem, a data no topo será atualizada. Continuar usando depois disso significa aceitar a nova versão."]]]}};function lo(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Le(t,a)}?pagina=${e}`}function Wc(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{const a=new URLSearchParams(e).get("pagina");return Object.hasOwn(At,a)?a:null}catch{return null}}const Hc=8;function Yc(e){const t=Array.isArray(e)?e:String(e||"").split(","),a=new Set;return t.map(r=>String(r||"").replace(/^#/,"").replace(/\s+/g," ").trim().slice(0,24)).filter(r=>r&&!a.has(r.toLowerCase())&&a.add(r.toLowerCase())).slice(0,Hc)}function tt(e){const t=e&&typeof e=="object"?e:{},a=(Array.isArray(t.sessions)?t.sessions:[]).filter(r=>r&&!Number.isNaN(Date.parse(r.at))).map(r=>({id:String(r.id||r.at),at:new Date(r.at).toISOString(),note:String(r.note||"").slice(0,140)})).sort((r,o)=>Date.parse(r.at)-Date.parse(o.at)).slice(-20);return{tagline:String(t.tagline||"").replace(/\s+/g," ").trim().slice(0,120),description:String(t.description||"").slice(0,2e3),image:typeof t.image=="string"&&t.image.startsWith("data:image/")?t.image:null,tags:Yc(t.tags),sessions:a}}function df({campaign:e,systemName:t}={},a=Date.now()){const r=tt(e);return{tagline:r.tagline,systemName:t?String(t).slice(0,40):"",tags:r.tags,nextSession:po(r.sessions,a)[0]||null}}function po(e,t=Date.now(),a=4*36e5){return(e||[]).filter(r=>Date.parse(r.at)+a>t)}function pf(e,{at:t,note:a=""},r=`session-${Date.now()}`){const o=tt(e);return Number.isNaN(Date.parse(t))?o:tt({...o,sessions:[...o.sessions,{id:r,at:t,note:a}]})}function ff(e,t){const a=tt(e);return{...a,sessions:a.sessions.filter(r=>r.id!==t)}}function uf(e,t="pt-BR",a){return new Date(e).toLocaleString(t,{weekday:"short",day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}function mf(e,t=Date.now()){const a=Date.parse(e)-t;if(a<=0)return"agora";const r=a/36e5;if(r<1)return`em ${Math.max(1,Math.round(a/6e4))} min`;if(r<24)return`em ${Math.round(r)} h`;const o=Math.round(r/24);return o===1?"amanhã":`em ${o} dias`}const Jt=e=>e.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),pr=e=>String(e||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n");function gf({uid:e,title:t,description:a="",at:r,durationMinutes:o=240}){const n=new Date(r),i=new Date(n.getTime()+o*6e4);return["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//NightTable//Agenda//PT","BEGIN:VEVENT",`UID:${e}@nighttable`,`DTSTAMP:${Jt(new Date)}`,`DTSTART:${Jt(n)}`,`DTEND:${Jt(i)}`,`SUMMARY:${pr(t)}`,`DESCRIPTION:${pr(a)}`,"END:VEVENT","END:VCALENDAR",""].join(`\r
`)}const Kc={scene:{label:"Apresentação de cena"},campaign:{label:"Página da campanha"}},Jc=4,bf={maxSize:1600,maxBytes:56e4},Xc=8e5,Zc=2e3,Pa="nighttable-public-pages",Qc=e=>{var t;return e==null?null:typeof e=="number"?e:((t=e==null?void 0:e.toMillis)==null?void 0:t.call(e))??(e instanceof Date?e.getTime():null)};function hf(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Le(t,a)}?publico=${encodeURIComponent(e)}`}function el(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{return(new URLSearchParams(e).get("publico")||"").trim().toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,32)||null}catch{return null}}function fo(e){const t=Kc[e==null?void 0:e.kind]?e.kind:null,a=ke(e==null?void 0:e.title,80);if(!t||!a)return null;const r=typeof(e==null?void 0:e.image)=="string"&&e.image.startsWith("data:image/")&&e.image.length<=Xc?e.image:null;return{kind:t,title:a,subtitle:ke(e==null?void 0:e.subtitle,120),text:ke(e==null?void 0:e.text,Zc),image:r,systemName:ke(e==null?void 0:e.systemName,40),tags:(Array.isArray(e==null?void 0:e.tags)?e.tags:[]).map(o=>ke(o,24)).filter(Boolean).slice(0,8),sessions:(Array.isArray(e==null?void 0:e.sessions)?e.sessions:[]).filter(o=>!Number.isNaN(Date.parse(o==null?void 0:o.at))).slice(0,6).map(o=>({at:new Date(o.at).toISOString(),note:ke(o.note,140)})),tableName:ke(e==null?void 0:e.tableName,80)}}function xf({tableName:e,scene:t,opening:a="",image:r=null,includeOpening:o=!0}){return fo({kind:"scene",title:(t==null?void 0:t.name)||"Cena",subtitle:(t==null?void 0:t.subtitle)||"",text:o?a:"",image:r,tableName:e})}function vf({tableName:e,campaign:t,systemName:a="",show:r={}},o=Date.now()){const n=tt(t),{description:i=!0,cover:s=!0,sessions:c=!0}=r;return fo({kind:"campaign",title:e,subtitle:n.tagline,text:i?n.description:"",image:s?n.image:null,systemName:a,tags:n.tags,sessions:c?po(n.sessions,o):[],tableName:e})}function yf(e,t,{validityDays:a=0,now:r=Date.now()}={}){return{code:e,kind:t.kind,title:t.title,createdAt:r,expiresAt:Fr(a,r)}}function wf(e,t=Date.now()){return _a(Qc(e==null?void 0:e.expiresAt),t)}function Sf(e=Math.random){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let a="L";for(let r=0;r<15;r+=1)a+=t[Math.floor(e()*t.length)];return a}function uo(e=globalThis.localStorage){try{const t=JSON.parse((e==null?void 0:e.getItem(Pa))||"{}");return t&&typeof t=="object"?t:{}}catch{return{}}}function kf(e,t,a=globalThis.localStorage){const r={...uo(a),[e]:t};let n=Object.keys(r).sort((i,s)=>(r[s].createdAt||0)-(r[i].createdAt||0)).slice(0,Jc);for(;n.length;)try{return a.setItem(Pa,JSON.stringify(Object.fromEntries(n.map(i=>[i,r[i]])))),n}catch{if(n.length===1)break;n=n.slice(0,-1)}throw new Error("Não coube neste navegador. Revogue um link antigo e tente de novo.")}function Af(e,t=globalThis.localStorage){const a=uo(t);delete a[e];try{t.setItem(Pa,JSON.stringify(a))}catch{}}function Ef(e,t="pt-BR"){return new Date(e).toLocaleString(t,{weekday:"long",day:"2-digit",month:"long",hour:"2-digit",minute:"2-digit"})}const tl=ka(p.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47"}),"HelpOutlineRounded");var z="-ms-",Ze="-moz-",T="-webkit-",mo="comm",Ot="rule",La="decl",al="@import",rl="@namespace",go="@keyframes",ol="@layer",bo=Math.abs,$a=String.fromCharCode,pa=Object.assign;function nl(e,t){return U(e,0)^45?(((t<<2^U(e,0))<<2^U(e,1))<<2^U(e,2))<<2^U(e,3):0}function ho(e){return e.trim()}function le(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,a){return e.replace(t,a)}function bt(e,t,a){return e.indexOf(t,a)}function U(e,t){return e.charCodeAt(t)|0}function Me(e,t,a){return e.slice(t,a)}function se(e){return e.length}function xo(e){return e.length}function He(e,t){return t.push(e),e}function il(e,t){return e.map(t).join("")}function fr(e,t){return e.filter(function(a){return!le(a,t)})}var Pt=1,De=1,vo=0,oe=0,D=0,Ue="";function Lt(e,t,a,r,o,n,i,s){return{value:e,root:t,parent:a,type:r,props:o,children:n,line:Pt,column:De,length:i,return:"",siblings:s}}function he(e,t){return pa(Lt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function _e(e){for(;e.root;)e=he(e.root,{children:[e]});He(e,e.siblings)}function sl(){return D}function cl(){return D=oe>0?U(Ue,--oe):0,De--,D===10&&(De=1,Pt--),D}function ce(){return D=oe<vo?U(Ue,oe++):0,De++,D===10&&(De=1,Pt++),D}function xe(){return U(Ue,oe)}function ht(){return oe}function $t(e,t){return Me(Ue,e,t)}function at(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ll(e){return Pt=De=1,vo=se(Ue=e),oe=0,[]}function dl(e){return Ue="",e}function Xt(e){return ho($t(oe-1,fa(e===91?e+2:e===40?e+1:e)))}function pl(e){for(;(D=xe())&&D<33;)ce();return at(e)>2||at(D)>3?"":" "}function fl(e,t){for(;--t&&ce()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return $t(e,ht()+(t<6&&xe()==32&&ce()==32))}function fa(e){for(;ce();)switch(D){case e:return oe;case 34:case 39:e!==34&&e!==39&&fa(D);break;case 40:e===41&&fa(e);break;case 92:ce();break}return oe}function ul(e,t){for(;ce()&&e+D!==57;)if(e+D===84&&xe()===47)break;return"/*"+$t(t,oe-1)+"*"+$a(e===47?e:ce())}function ml(e){for(;!at(xe());)ce();return $t(e,oe)}function gl(e){return dl(xt("",null,null,null,[""],e=ll(e),0,[0],e))}function xt(e,t,a,r,o,n,i,s,c){for(var l=0,f=0,g=i,x=0,A=0,S=0,v=1,N=1,M=1,h=0,B="",J=o,$=n,W=r,k=B;N;)switch(S=h,h=ce()){case 40:if(S!=108&&U(k,g-1)==58){bt(k+=w(Xt(h),"&","&\f"),"&\f",bo(l?s[l-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:k+=Xt(h);break;case 9:case 10:case 13:case 32:k+=pl(S);break;case 92:k+=fl(ht()-1,7);continue;case 47:switch(xe()){case 42:case 47:He(bl(ul(ce(),ht()),t,a,c),c),(at(S||1)==5||at(xe()||1)==5)&&se(k)&&Me(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*v:s[l++]=se(k)*M;case 125*v:case 59:case 0:switch(h){case 0:case 125:N=0;case 59+f:M==-1&&(k=w(k,/\f/g,"")),A>0&&(se(k)-g||v===0&&S===47)&&He(A>32?mr(k+";",r,a,g-1,c):mr(w(k," ","")+";",r,a,g-2,c),c);break;case 59:k+=";";default:if(He(W=ur(k,t,a,l,f,o,s,B,J=[],$=[],g,n),n),h===123)if(f===0)xt(k,t,W,W,J,n,g,s,$);else{switch(x){case 99:if(U(k,3)===110)break;case 108:if(U(k,2)===97)break;default:f=0;case 100:case 109:case 115:}f?xt(e,W,W,r&&He(ur(e,W,W,0,0,o,s,B,o,J=[],g,$),$),o,$,g,s,r?J:$):xt(k,W,W,W,[""],$,0,s,$)}}l=f=A=0,v=M=1,B=k="",g=i;break;case 58:g=1+se(k),A=S;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&cl()==125)continue}switch(k+=$a(h),h*v){case 38:M=f>0?1:(k+="\f",-1);break;case 44:s[l++]=(se(k)-1)*M,M=1;break;case 64:xe()===45&&(k+=Xt(ce())),x=xe(),f=g=se(B=k+=ml(ht())),h++;break;case 45:S===45&&se(k)==2&&(v=0)}}return n}function ur(e,t,a,r,o,n,i,s,c,l,f,g){for(var x=o-1,A=o===0?n:[""],S=xo(A),v=0,N=0,M=0;v<r;++v)for(var h=0,B=Me(e,x+1,x=bo(N=i[v])),J=e;h<S;++h)(J=ho(N>0?A[h]+" "+B:w(B,/&\f/g,A[h])))&&(c[M++]=J);return Lt(e,t,a,o===0?Ot:s,c,l,f,g)}function bl(e,t,a,r){return Lt(e,t,a,mo,$a(sl()),Me(e,2,-2),0,r)}function mr(e,t,a,r,o){return Lt(e,t,a,La,Me(e,0,r),Me(e,r+1,-1),r,o)}function yo(e,t,a){switch(nl(e,t)){case 5103:return T+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return T+e+e;case 4855:return T+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ze+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return T+e+Ze+e+z+e+e;case 5936:switch(U(e,t+11)){case 114:return T+e+z+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return T+e+z+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return T+e+z+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return T+e+z+e+e;case 6165:return T+e+z+"flex-"+e+e;case 5187:return T+e+w(e,/(\w+).+(:[^]+)/,T+"box-$1$2"+z+"flex-$1$2")+e;case 5443:return T+e+z+"flex-item-"+w(e,/flex-|-self/g,"")+(le(e,/flex-|baseline/)?"":z+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return T+e+z+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return T+e+z+w(e,"shrink","negative")+e;case 5292:return T+e+z+w(e,"basis","preferred-size")+e;case 6060:return T+"box-"+w(e,"-grow","")+T+e+z+w(e,"grow","positive")+e;case 4554:return T+w(e,/([^-])(transform)/g,"$1"+T+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,T+"$1"),/(image-set)/,T+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,T+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,T+"box-pack:$3"+z+"flex-pack:$3"),/space-between/,"justify")+T+e+e;case 4200:if(!le(e,/flex-|baseline/))return z+"grid-column-align"+Me(e,t)+e;break;case 2592:case 3360:return z+w(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,le(r.props,/grid-\w+-end/)})?~bt(e+(a=a[t].value),"span",0)?e:z+w(e,"-start","")+e+z+"grid-row-span:"+(~bt(a,"span",0)?le(a,/\d+/):+le(a,/\d+/)-+le(e,/\d+/))+";":z+w(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return le(r.props,/grid-\w+-start/)})?e:z+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,T+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(U(e,t+1)){case 109:if(U(e,t+4)!==45)break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+T+"$2-$3$1"+Ze+(U(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~bt(e,"stretch",0)?yo(w(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,n,i,s,c,l){return z+o+":"+n+l+(i?z+o+"-span:"+(s?c:+c-+n)+l:"")+e});case 4949:if(U(e,t+6)===121)return w(e,":",":"+T)+e;break;case 6444:switch(U(e,U(e,14)===45?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+T+(U(e,14)===45?"inline-":"")+"box$3$1"+T+"$2$3$1"+z+"$2box$3")+e;case 100:return w(e,":",":"+z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function Et(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function hl(e,t,a,r){switch(e.type){case ol:if(e.children.length)break;case al:case rl:case La:return e.return=e.return||e.value;case mo:return"";case go:return e.return=e.value+"{"+Et(e.children,r)+"}";case Ot:if(!se(e.value=e.props.join(",")))return""}return se(a=Et(e.children,r))?e.return=e.value+"{"+a+"}":""}function xl(e){var t=xo(e);return function(a,r,o,n){for(var i="",s=0;s<t;s++)i+=e[s](a,r,o,n)||"";return i}}function vl(e){return function(t){t.root||(t=t.return)&&e(t)}}function yl(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case La:e.return=yo(e.value,e.length,a);return;case go:return Et([he(e,{value:w(e.value,"@","@"+T)})],r);case Ot:if(e.length)return il(a=e.props,function(o){switch(le(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_e(he(e,{props:[w(o,/:(read-\w+)/,":"+Ze+"$1")]})),_e(he(e,{props:[o]})),pa(e,{props:fr(a,r)});break;case"::placeholder":_e(he(e,{props:[w(o,/:(plac\w+)/,":"+T+"input-$1")]})),_e(he(e,{props:[w(o,/:(plac\w+)/,":"+Ze+"$1")]})),_e(he(e,{props:[w(o,/:(plac\w+)/,z+"input-$1")]})),_e(he(e,{props:[o]})),pa(e,{props:fr(a,r)});break}return""})}}var Re={},Zt,Qt;const Fe=typeof process<"u"&&Re!==void 0&&(Re.REACT_APP_SC_ATTR||Re.SC_ATTR)||"data-styled",wo="active",So="data-styled-version",Dt="6.5.3",Da=`/*!sc*/
`,Qe=typeof window<"u"&&typeof document<"u";function gr(e){if(typeof process<"u"&&Re!==void 0){const t=Re[e];if(t!==void 0&&t!=="")return t!=="false"}}const wl=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Qt=(Zt=gr("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Zt!==void 0?Zt:gr("SC_DISABLE_SPEEDY"))!==null&&Qt!==void 0?Qt:typeof process<"u"&&Re!==void 0&&!1),ko="sc-keyframes-",Sl={};function it(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let vt=new Map,Tt=new Map,yt=1;const Ye=e=>{if(vt.has(e))return vt.get(e);for(;Tt.has(yt);)yt++;const t=yt++;return vt.set(e,t),Tt.set(t,e),t},kl=e=>Tt.get(e),Al=(e,t)=>{yt=t+1,vt.set(e,t),Tt.set(t,e)},Fa=Object.freeze([]),Be=Object.freeze({});function Ao(e,t,a=Be){return e.theme!==a.theme&&e.theme||t||a.theme}const El=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tl=/(^-|-$)/g;function Eo(e){return e.replace(El,"-").replace(Tl,"")}const Ml=/(a)(d)/gi,br=e=>String.fromCharCode(e+(e>25?39:97));function Ba(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=br(t%52)+a;return(br(t%52)+a).replace(Ml,"$1-$2")}const ua=5381,Ee=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},To=e=>Ee(ua,e);function Ua(e){return Ba(To(e)>>>0)}function jl(e){return e.displayName||e.name||"Component"}function ma(e){return typeof e=="string"&&!0}function zl(e){return ma(e)?`styled.${e}`:`Styled(${jl(e)})`}const Mo=Symbol.for("react.memo"),_l=Symbol.for("react.forward_ref"),Il={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Cl={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rl={[_l]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Mo]:jo};function hr(e){return("type"in(t=e)&&t.type.$$typeof)===Mo?jo:"$$typeof"in e?Rl[e.$$typeof]:Il;var t}const Nl=Object.defineProperty,Ol=Object.getOwnPropertyNames,Pl=Object.getOwnPropertySymbols,Ll=Object.getOwnPropertyDescriptor,$l=Object.getPrototypeOf,Dl=Object.prototype;function zo(e,t,a){if(typeof t!="string"){const r=$l(t);r&&r!==Dl&&zo(e,r,a);const o=Ol(t).concat(Pl(t)),n=hr(e),i=hr(t);for(let s=0;s<o.length;++s){const c=o[s];if(!(c in Cl||a&&a[c]||i&&c in i||n&&c in n)){const l=Ll(t,c);try{Nl(e,c,l)}catch{}}}}return e}function st(e){return typeof e=="function"}const Fl=Symbol.for("react.forward_ref");function Ga(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Fl&&"styledComponentId"in e}function Ke(e,t){return e&&t?e+" "+t:e||t||""}function Mt(e,t){return e.join("")}function rt(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ga(e,t,a=!1){if(!a&&!rt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ga(e[r],t[r]);else if(rt(t))for(const r in t)e[r]=ga(e[r],t[r]);return e}function Va(e,t){Object.defineProperty(e,"toString",{value:t})}const Bl=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,n=o.length;let i=n;for(;e>=i;)if(i<<=1,i<0)throw it(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(let s=n;s<i;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,n=t.length;o<n;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let n=r;n<o;n++)t+=this.tag.getRule(n)+Da;return t}},Ul=`style[${Fe}][${So}="${Dt}"]`,Gl=new RegExp(`^${Fe}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),xr=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,ba=e=>{if(!e)return document;if(xr(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(xr(t))return t}return document},Vl=(e,t,a)=>{const r=a.split(",");let o;for(let n=0,i=r.length;n<i;n++)(o=r[n])&&e.registerName(t,o)},ql=(e,t)=>{var a;const r=((a=t.textContent)!==null&&a!==void 0?a:"").split(Da),o=[];for(let n=0,i=r.length;n<i;n++){const s=r[n].trim();if(!s)continue;const c=s.match(Gl);if(c){const l=0|parseInt(c[1],10),f=c[2];l!==0&&(Al(f,l),Vl(e,f,c[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(s)}},ea=e=>{const t=ba(e.options.target).querySelectorAll(Ul);for(let a=0,r=t.length;a<r;a++){const o=t[a];o&&o.getAttribute(Fe)!==wo&&(ql(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let qe=!1;function Wl(){if(qe!==!1)return qe;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return qe=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return qe=t.getAttribute("content")||void 0}return qe=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const _o=(e,t)=>{const a=document.head,r=e||a,o=document.createElement("style"),n=(c=>{const l=Array.from(c.querySelectorAll(`style[${Fe}]`));return l[l.length-1]})(r),i=n!==void 0?n.nextSibling:null;o.setAttribute(Fe,wo),o.setAttribute(So,Dt);const s=t||Wl();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},Hl=class{constructor(e,t){this.element=_o(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;const o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let n=0,i=o.length;n<i;n++){const s=o[n];if(s.ownerNode===a)return s}throw it(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Yl=class{constructor(e,t){this.element=_o(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let vr=Qe;const Kl={isServer:!Qe,useCSSOMInjection:!wl};class ct{static registerId(t){return Ye(t)}constructor(t=Be,a={},r){this.options=Object.assign(Object.assign({},Kl),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Qe&&vr&&(vr=!1,ea(this)),Va(this,()=>(o=>{const n=o.getTag(),{length:i}=n;let s="";for(let c=0;c<i;c++){const l=kl(c);if(l===void 0)continue;const f=o.names.get(l);if(f===void 0||!f.size)continue;const g=n.getGroup(c);if(g.length===0)continue;const x=Fe+".g"+c+'[id="'+l+'"]';let A="";for(const S of f)S.length>0&&(A+=S+",");s+=g+x+'{content:"'+A+'"}'+Da}return s})(this))}rehydrate(){!this.server&&Qe&&ea(this)}reconstructWithOptions(t,a=!0){const r=new ct(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Qe&&t.target!==this.options.target&&ba(this.options.target)!==ba(t.target)&&ea(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new Hl(r,o):new Yl(r,o))(this.options),new Bl(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){Ye(t),t.startsWith(ko)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(Ye(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Ye(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const Io=new WeakSet,Jl={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Xl(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Jl||e.startsWith("--")?String(t).trim():t+"px"}const Ae=47;function yr(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){const r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}const Co=Symbol.for("sc-keyframes");function Zl(e){return typeof e=="object"&&e!==null&&Co in e}function Ro(e){return st(e)&&!(e.prototype&&e.prototype.isReactComponent)}const No=e=>e==null||e===!1||e==="",Ql=Symbol.for("react.client.reference");function wr(e){return e.$$typeof===Ql}function Oo(e,t){for(const a in e){const r=e[a];e.hasOwnProperty(a)&&!No(r)&&(Array.isArray(r)&&Io.has(r)||st(r)?t.push(yr(a)+":",r,";"):rt(r)?(t.push(a+" {"),Oo(r,t),t.push("}")):t.push(yr(a)+": "+Xl(a,r)+";"))}}function ve(e,t,a,r,o=[]){if(No(e))return o;const n=typeof e;if(n==="string")return o.push(e),o;if(n==="function"){if(wr(e))return o;if(Ro(e)&&t){const i=e(t);return ve(i,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let i=0;i<e.length;i++)ve(e[i],t,a,r,o);return o}return Ga(e)?(o.push(`.${e.styledComponentId}`),o):Zl(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):wr(e)?o:rt(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Oo(e,o),o):(o.push(e.toString()),o)}const ed=To(Dt);class td{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=Ee(ed,a),this.baseStyle=r,ct.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let n="";for(let i=0;i<this.rules.length;i++){const s=this.rules[i];if(typeof s=="string")n+=s;else if(s)if(Ro(s)){const c=s(t);typeof c=="string"?n+=c:c!=null&&c!==!1&&(n+=Mt(ve(c,t,a,r)))}else n+=Mt(ve(s,t,a,r))}if(n){this.dynamicNameCache||(this.dynamicNameCache=new Map);const i=r.hash?r.hash+n:n;let s=this.dynamicNameCache.get(i);if(!s){if(s=Ba(Ee(Ee(this.baseHash,r.hash),n)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(i,s)}if(!a.hasNameForId(this.componentId,s)){const c=r(n,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,c)}o=Ke(o,s)}}return o}}const ad=/&/g;function Po(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function ta(e){const t=e.length;let a="",r=0,o=0,n=0,i=!1,s=!1;for(let c=0;c<t;c++){const l=e.charCodeAt(c);if(n!==0||i||l!==Ae||e.charCodeAt(c+1)!==42)if(i)l===42&&e.charCodeAt(c+1)===Ae&&(i=!1,c++);else if(l!==34&&l!==39||Po(e,c)){if(n===0)if(l===123)o++;else if(l===125){if(o--,o<0){s=!0;let f=c+1;for(;f<t;){const g=e.charCodeAt(f);if(g===59||g===10)break;f++}f<t&&e.charCodeAt(f)===59&&f++,o=0,c=f-1,r=f;continue}o===0&&(a+=e.substring(r,c+1),r=c+1)}else l===59&&o===0&&(a+=e.substring(r,c+1),r=c+1)}else n===0?n=l:n===l&&(n=0);else i=!0,c++}return s||o!==0||n!==0?(r<t&&o===0&&n===0&&(a+=e.substring(r)),a):e}function Lo(e,t){const a=t+" ",r=","+a;for(let o=0;o<e.length;o++){const n=e[o];if(n.type==="rule"){n.value=(a+n.value).replaceAll(",",r);const i=n.props,s=[];for(let c=0;c<i.length;c++)s[c]=a+i[c];n.props=s}Array.isArray(n.children)&&n.type!=="@keyframes"&&Lo(n.children,t)}return e}function rd({options:e=Be,plugins:t=Fa}=Be){let a,r,o;const n=(x,A,S)=>S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?`.${a}`:x,i=t.slice();i.push(x=>{x.type===Ot&&x.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),x.props[0]=x.props[0].replace(ad,r).replace(o,n))}),e.prefix&&i.push(yl),i.push(hl);let s=[];const c=xl(i.concat(vl(x=>s.push(x)))),l=(x,A="",S="",v="&")=>{a=v,r=A,o=void 0;const N=function(h){const B=h.indexOf("//")!==-1,J=h.indexOf("}")!==-1;if(!B&&!J)return h;if(!B)return ta(h);const $=h.length;let W="",k=0,E=0,we=0,je=0,te=0,Ge=!1;for(;E<$;){const Y=h.charCodeAt(E);if(Y!==34&&Y!==39||Po(h,E))if(we===0)if(Y===Ae&&E+1<$&&h.charCodeAt(E+1)===42){for(E+=2;E+1<$&&(h.charCodeAt(E)!==42||h.charCodeAt(E+1)!==Ae);)E++;E+=2}else if(Y!==40)if(Y!==41)if(je>0)E++;else if(Y===42&&E+1<$&&h.charCodeAt(E+1)===Ae)W+=h.substring(k,E),E+=2,k=E,Ge=!0;else if(Y===Ae&&E+1<$&&h.charCodeAt(E+1)===Ae){for(W+=h.substring(k,E);E<$&&h.charCodeAt(E)!==10;)E++;k=E,Ge=!0}else Y===123?te++:Y===125&&te--,E++;else je>0&&je--,E++;else je++,E++;else E++;else we===0?we=Y:we===Y&&(we=0),E++}return Ge?(k<$&&(W+=h.substring(k)),te===0?W:ta(W)):te===0?h:ta(h)}(x);let M=gl(S||A?S+" "+A+" { "+N+" }":N);return e.namespace&&(M=Lo(M,e.namespace)),s=[],Et(M,c),s},f=e;let g=ua;for(let x=0;x<t.length;x++)t[x].name||it(15),g=Ee(g,t[x].name);return f!=null&&f.namespace&&(g=Ee(g,f.namespace)),f!=null&&f.prefix&&(g=Ee(g,"p")),l.hash=g!==ua?g.toString():"",l}const od=new ct,ha=rd(),$o=Z.createContext({shouldForwardProp:void 0,styleSheet:od,stylis:ha,stylisPlugins:void 0});$o.Consumer;function Do(){return Z.useContext($o)}const qa=Z.createContext(void 0);qa.Consumer;const Sr=Object.prototype.hasOwnProperty,aa={};function nd(e,t){const a=typeof e!="string"?"sc":Eo(e);aa[a]=(aa[a]||0)+1;const r=a+"-"+Ua(Dt+a+aa[a]);return t?t+"-"+r:r}function id(e,t,a){const r=Ga(e),o=e,n=!ma(e),{attrs:i=Fa,componentId:s=nd(t.displayName,t.parentComponentId),displayName:c=zl(e)}=t,l=t.displayName&&t.componentId?Eo(t.displayName)+"-"+t.componentId:t.componentId||s,f=r&&o.attrs?o.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:g}=t;if(r&&o.shouldForwardProp){const v=o.shouldForwardProp;if(t.shouldForwardProp){const N=t.shouldForwardProp;g=(M,h)=>v(M,h)&&N(M,h)}else g=v}const x=new td(a,l,r?o.componentStyle:void 0);function A(v,N){return function(M,h,B){const{attrs:J,componentStyle:$,defaultProps:W,foldedComponentIds:k,styledComponentId:E,target:we}=M,je=Z.useContext(qa),te=Do(),Ge=M.shouldForwardProp||te.shouldForwardProp,Y=Ao(h,je,W)||Be;let fe,Ve;{const ue=Z.useRef(null),ne=ue.current;if(ne!==null&&ne[1]===Y&&ne[2]===te.styleSheet&&ne[3]===te.stylis&&ne[7]===$&&function(ze,ie,ae){const re=ze,X=ie;let dt=0;for(const Se in X)if(Sr.call(X,Se)&&(dt++,re[Se]!==X[Se]))return!1;return dt===ae}(ne[0],h,ne[4]))fe=ne[5],Ve=ne[6];else{fe=function(ie,ae,re){const X=Object.assign(Object.assign({},ae),{className:void 0,theme:re}),dt=ie.length>1;for(let Se=0;Se<ie.length;Se++){const Wt=ie[Se],pt=st(Wt)?Wt(dt?Object.assign({},X):X):Wt;for(const me in pt)me==="className"?X.className=Ke(X.className,pt[me]):me==="style"?X.style=Object.assign(Object.assign({},X.style),pt[me]):me in ae&&ae[me]===void 0||(X[me]=pt[me])}return"className"in ae&&typeof ae.className=="string"&&(X.className=Ke(X.className,ae.className)),X}(J,h,Y),Ve=$.generateAndInjectStyles(fe,te.styleSheet,te.stylis);let ze=0;for(const ie in h)Sr.call(h,ie)&&ze++;ue.current=[h,Y,te.styleSheet,te.stylis,ze,fe,Ve,$]}}const lt=fe.as||we,Vt=function(ue,ne,ze,ie){const ae={};for(const re in ue)ue[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&ue.theme===ze||(re==="forwardedAs"?ae.as=ue.forwardedAs:ie&&!ie(re,ne)||(ae[re]=ue[re]));return ae}(fe,lt,Y,Ge);let qt=Ke(k,E);return Ve&&(qt+=" "+Ve),fe.className&&(qt+=" "+fe.className),Vt[ma(lt)&&lt.includes("-")?"class":"className"]=qt,B&&(Vt.ref=B),O.createElement(lt,Vt)}(S,v,N)}A.displayName=c;let S=Z.forwardRef(A);return S.attrs=f,S.componentStyle=x,S.displayName=c,S.shouldForwardProp=g,S.foldedComponentIds=r?Ke(o.foldedComponentIds,o.styledComponentId):"",S.styledComponentId=l,S.target=r?o.target:e,Object.defineProperty(S,"defaultProps",{get(){return this._foldedDefaultProps},set(v){this._foldedDefaultProps=r?function(N,...M){for(const h of M)ga(N,h,!0);return N}({},o.defaultProps,v):v}}),Va(S,()=>`.${S.styledComponentId}`),n&&zo(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}var sd=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function kr(e,t){const a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}const Ar=e=>(Io.add(e),e);function Ft(e,...t){if(st(e)||rt(e))return Ar(ve(kr(Fa,[e,...t])));const a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?ve(a):Ar(ve(kr(a,t)))}function xa(e,t,a=Be){if(!t)throw it(1,t);const r=(o,...n)=>e(t,a,Ft(o,...n));return r.attrs=o=>xa(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>xa(e,t,Object.assign(Object.assign({},a),o)),r}const Fo=e=>xa(id,e),u=Fo;sd.forEach(e=>{u[e]=Fo(e)});class cd{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const n=r[o];if(st(n)&&!Ga(n))return!1}return!0}(t),ct.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){const n=this.componentId;if(this.isStatic){if(r.hasNameForId(n,n+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{const s=this.computeRules(t,a,r,o);r.insertRules(n,s.name,s.rules)}return}const i=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&i){const s=i.rules,c=this.instanceRules.get(t).rules;if(s.length===c.length){let l=!0;for(let f=0;f<s.length;f++)if(s[f]!==c[f]){l=!1;break}if(l)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){const n=Mt(ve(this.rules,a,r,o)),i={name:this.componentId+t,rules:o(n,"")};return this.instanceRules.set(t,i),i}rebuildGroup(t){const a=this.componentId;t.clearRules(a);for(const r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}}function Bo(e,...t){const a=Ft(e,...t),r=`sc-global-${Ua(JSON.stringify(a))}`,o=new cd(a,r),n=s=>{const c=Do(),l=Z.useContext(qa);let f;{const g=Z.useRef(null);g.current===null&&(g.current=c.styleSheet.allocateGSInstance(r)),f=g.current}c.styleSheet.server&&i(f,s,c.styleSheet,l,c.stylis);{const g=o.isStatic?[f,c.styleSheet,o]:[f,s,c.styleSheet,l,c.stylis,o],x=Z.useRef(o);Z.useLayoutEffect(()=>{c.styleSheet.server||(x.current!==o&&(c.styleSheet.clearRules(r),x.current=o),i(f,s,c.styleSheet,l,c.stylis))},g),Z.useLayoutEffect(()=>()=>{c.styleSheet.server||o.removeStyles(f,c.styleSheet)},[f,c.styleSheet,o])}return c.styleSheet.server&&o.instanceRules.delete(f),null};function i(s,c,l,f,g){if(o.isStatic)o.renderStyles(s,Sl,l,g);else{const x=Object.assign(Object.assign({},c),{theme:Ao(c,f,n.defaultProps)});o.renderStyles(s,x,l,g)}}return Z.memo(n)}var Uo;class ld{constructor(t,a){this[Uo]=!0,this.inject=(r,o=ha)=>{const n=this.getName(o);if(!r.hasNameForId(this.id,n)){const i=o(this.rules,n,"@keyframes");r.insertRules(this.id,n,i)}},this.name=t,this.id=ko+t,this.rules=a,Ye(this.id),Va(this,()=>{throw it(12,String(this.name))})}getName(t=ha){return t.hash?this.name+Ba(+t.hash>>>0):this.name}}function Tf(e,...t){const a=Mt(Ft(e,...t)),r=Ua(a);return new ld(r,a)}Uo=Co;const dd=[{keys:["?"],action:"help",label:"Abrir a ajuda e os atalhos"},{keys:["Enter"],action:"focus-chat",label:"Escrever no chat"},{keys:["L"],action:"tool:free",label:"Lápis (desenho livre)"},{keys:["R"],action:"tool:measure",label:"Régua: medir distância"},{keys:["T"],action:"tool:text",label:"Texto no mapa"},{keys:["E"],action:"tool:erase",label:"Borracha"},{keys:["+"],action:"zoom-in",label:"Aproximar o mapa"},{keys:["-"],action:"zoom-out",label:"Afastar o mapa"},{keys:["0"],action:"zoom-reset",label:"Ver o mapa inteiro"},{keys:["M"],action:"toggle-mode",label:"Alternar visão de Mestre e de jogador",gmOnly:!0},{keys:["[","]"],action:null,label:"Girar o seu token (aponta a lanterna de mão)"},{keys:[",","."],action:null,label:"Diminuir e aumentar os tokens selecionados (Mestre)",gmOnly:!0},{keys:["S"],action:"stream",label:"Modo streaming (visão limpa para transmitir)"},{keys:["Esc"],action:null,label:"Sair da ferramenta ou desmarcar tokens"},{keys:["Ctrl","Z"],action:null,label:"Desfazer desenho"},{keys:["Ctrl","Y"],action:null,label:"Refazer desenho"},{keys:["roda"],action:null,label:"Zoom no ponto do cursor (Shift+roda desloca)"}],pd={"?":"help",enter:"focus-chat",l:"tool:free",r:"tool:measure",t:"tool:text",e:"tool:erase","+":"zoom-in","=":"zoom-in","-":"zoom-out",0:"zoom-reset",m:"toggle-mode",s:"stream","[":"rotate-left","]":"rotate-right",",":"token-smaller",".":"token-bigger","<":"token-smaller",">":"token-bigger"};function fd(e){if(!e)return!1;const t=String(e.tagName||"").toUpperCase();return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||!!e.isContentEditable}function Mf(e,{isGm:t=!1}={}){var r,o,n;if(!e||e.ctrlKey||e.metaKey||e.altKey||e.repeat||fd(e.target)||(o=(r=e.target)==null?void 0:r.closest)!=null&&o.call(r,'[role="dialog"]'))return null;const a=pd[String(e.key||"").toLowerCase()]||null;return a==="focus-chat"&&!["BODY","HTML"].includes(String(((n=e.target)==null?void 0:n.tagName)||"").toUpperCase())||(a==="toggle-mode"||a==="token-smaller"||a==="token-bigger")&&!t?null:a}const ud=ka(p.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9"}),"CasinoRounded");function Er(e){let t=String(e).replace("#","");t.length===3&&(t=[...t].map(n=>n+n).join(""));const[a,r,o]=[0,2,4].map(n=>parseInt(t.slice(n,n+2),16)/255).map(n=>n<=.03928?n/12.92:((n+.055)/1.055)**2.4);return .2126*a+.7152*r+.0722*o}const Go=["06070b","090a0d","0a0b0e","0a0b0f","0b0c10","0d0e12","0e0f13","0f1014","0f1a14","101116","111217","111318","121419","14161b","14161c","15171c","15232d","17191f","191b21","1a1209","1a1c22","1b1915","1b1d23","1b1d25","1d2027","1f2128","1f222a","20232b","211d37","21665f","242730","245a43","252831","26211b","262931","287a73","2a1d22","2a2118","2a2620","2a2d36","2a2e38","2d1e16","2d3038","343846","363943","3a3d46","3a3d48","3a3e48","3aa673","3d2864","3f8f66","434753","4b3777","4b4f5c","4fd1c5","503c1e","554376","555b66","56d28b","57d68d","5b2a30","6249c0","63d59a","666b76","6753bd","6b5a44","6d52be","6f59cf","7358d0","75d49b","7a552a","7d62ce","7e838f","848995","858a95","858b96","888d98","8a6230","8a8f99","8c2228","8c919b","8c919c","8cddb0","8d929d","8e6bff","8e7fd6","8e939e","8f86c9","8fd8b0","8fe3ae","9296a0","9297a3","9677ff","979aa5","9a4a5e","9a7bff","9a9ea8","9a9faa","9b7bff","9b7d7a","9c4ef3","9d93c9","9de4b9","9ea2ac","9edeb8","9fd8ff","9ff0e7","a0a5af","a28af3","a78cff","a795ff","a7abb4","a83a43","a8acb6","a995ff","a9a0ff","a9a4b8","a9adb6","aaa0ef","aeb2ba","b2b5be","b2b5bf","b35a6e","b7bac2","b8aaff","b98b67","b9abff","b9b8b6","b9bbc2","b9bcc5","be4372","beb2ff","bfc0c7","bfc1c7","c4b4ff","c6b9ff","c9c3ff","c9c9ca","cbbcff","cdbfff","cdeedb","cfc4ff","cfc8f5","d0ced0","d4ccff","d6d1c6","d6d4d0","d8cfff","d8d0ff","d8d2ff","d8d4cc","d9ccff","d9d6d3","db9189","dbd1ff","dcd9d2","ddd5ff","ddd8e6","dedbd3","dedbe1","e2b48d","e4e2dc","e58f48","e6dccb","e7e5e2","e7e6e4","e8d8b8","e8dccb","e8e6e1","e9d9ff","e9e3da","e9e4d9","e9e7e2","eab9b3","ebe5ff","ec9741","eceae4","edd8d5","eeece8","ef756a","efb1ab","efbd86","f04f4a","f07970","f09b95","f0a29b","f0ad61","f0bd86","f0e8d9","f0ece4","f0eeea","f1b17e","f1edff","f1efeb","f2ba85","f3a29b","f3b37d","f3b3aa","f3c48f","f3ead7","f4f2ef","f54843","f5f0e9","f8f7f5","fa6357","ffc896","ffd2cc","ffd38e","ffd49a","ffd9a8","ffe1b8","ffffff"],Vo=[{id:"dark",label:"Escuro"},{id:"light",label:"Claro"},{id:"system",label:"Seguir o sistema"}],Wa=[{id:"violet",label:"Violeta",shift:0,swatch:"#9b7bff"},{id:"blue",label:"Azul",shift:-40,swatch:"#5f95ff"},{id:"teal",label:"Verde-água",shift:-100,swatch:"#3fbdb8"},{id:"green",label:"Verde",shift:-140,swatch:"#5fbf6a"},{id:"pink",label:"Rosa",shift:60,swatch:"#e46fb8"}];function Ha(e){return Vo.some(t=>t.id===e)?e:"dark"}function Ya(e){return Wa.some(t=>t.id===e)?e:"violet"}const md=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,gd=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;function Ka(e){const t=e.replace("#",""),[a,r,o]=[0,2,4].map(g=>md(parseInt(t.slice(g,g+2),16)/255)),n=Math.cbrt(.4122214708*a+.5363325363*r+.0514459929*o),i=Math.cbrt(.2119034982*a+.6806995451*r+.1073969566*o),s=Math.cbrt(.0883024619*a+.2817188376*r+.6299787005*o),c=.2104542553*n+.793617785*i-.0040720468*s,l=1.9779984951*n-2.428592205*i+.4505937099*s,f=.0259040371*n+.7827717662*i-.808675766*s;return{l:c,c:Math.hypot(l,f),h:(Math.atan2(f,l)*180/Math.PI+360)%360}}function Tr({l:e,c:t,h:a}){const r=t*Math.cos(a*Math.PI/180),o=t*Math.sin(a*Math.PI/180),n=(e+.3963377774*r+.2158037573*o)**3,i=(e-.1055613458*r-.0638541728*o)**3,s=(e-.0894841775*r-1.291485548*o)**3;return[4.0767416621*n-3.3077115913*i+.2309699292*s,-1.2684380046*n+2.6097574011*i-.3413193965*s,-.0041960863*n-.7034186147*i+1.707614701*s]}function va(e){const t=r=>Tr({...e,c:r}).every(o=>o>=-5e-4&&o<=1.0005);let a=e.c;if(!t(a)){let r=0;for(let o=0;o<24;o+=1){const n=(r+a)/2;t(n)?r=n:a=n}a=r}return`#${Tr({...e,c:a}).map(r=>Math.round(Math.min(1,Math.max(0,gd(Math.min(1,Math.max(0,r)))))*255).toString(16).padStart(2,"0")).join("")}`}function bd(e){const{c:t,h:a}=Ka(e);return t>.05&&a>=270&&a<=315}const We=[[0,1],[.1,.99],[.35,.89],[.5,.6],[.7,.38],[1,.05]];function hd(e){for(let t=1;t<We.length;t+=1){const[a,r]=We[t],[o,n]=We[t-1];if(e<=a)return n+(e-o)/(a-o)*(r-n)}return We[We.length-1][1]}function xd(e){const t=Ka(e);if(t.c>.06&&t.l>=.35&&t.l<=.58)return`#${e.replace("#","").toLowerCase()}`;let a=hd(t.l);return t.c>.06&&t.l>.5&&(a=Math.max(a,.47)),va({...t,l:a,c:t.l<.35?t.c*.5:t.c})}function vd(e,t){const a=Ka(e),r=Er(e),o=(a.h+t+360)%360;let n=0,i=1,s=va({...a,h:o});for(let c=0;c<22;c+=1){const l=(n+i)/2;s=va({...a,l,h:o}),Er(s)<r?n=l:i=l}return s}function yd(e,{theme:t="dark",accent:a="violet"}={}){const r=Wa.find(n=>n.id===Ya(a)).shift;let o=`#${e.replace("#","").toLowerCase()}`;return r&&bd(o)&&(o=vd(o,r)),t==="light"?xd(o):o}function wd(e,t=!1){const a=Ha(e);return a==="system"?t?"light":"dark":a}function Sd(e={}){return`:root{${Go.map(a=>`--c-${a}:${yd(a,e)};`).join("")}}`}const kd=new Set(Go);function wt(e){if(typeof e!="string"||!/^#[0-9a-fA-F]{6}$/.test(e))return e;const t=e.slice(1).toLowerCase();return kd.has(t)?`var(--c-${t})`:e}function Ad({theme:e,accent:t}={},a=typeof document<"u"?document:null){var i,s;if(!a)return;const r=!!((s=(i=a.defaultView)==null?void 0:i.matchMedia)!=null&&s.call(i,"(prefers-color-scheme: light)").matches),o=wd(e,r);let n=a.getElementById("nighttable-theme");n||(n=a.createElement("style"),n.id="nighttable-theme",a.head.appendChild(n)),n.textContent=Sd({theme:o,accent:t}),a.documentElement.dataset.theme=o,a.documentElement.style.colorScheme=o}const Ed=Bo`
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
`,jf=u.div`
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
`,zf=u.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 20px;
  border-bottom: 1px solid var(--border);
  background: color-mix(in srgb, var(--c-0a0b0f) 95%, transparent);
  position: relative;
  z-index: 10;
`,Td=u.div`
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 220px;
`,Md=u.div`
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(135deg, var(--c-fa6357), var(--c-9c4ef3));
  border-radius: 10px 10px 10px 3px;
  box-shadow: 0 8px 22px color-mix(in srgb, var(--c-be4372) 24%, transparent);
`,jd=u.div`
  display: grid;
  gap: 1px;
  line-height: 1;
  strong { font-size: 15px; letter-spacing: -0.04em; }
  span { color: var(--c-8d929d); font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; }
`,_f=u.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--c-111318);
`,If=u.button`
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
`,Cf=u.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-width: 220px;
`,Rf=u.div`
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
`,Nf=u.div`
  min-height: 0;
  display: grid;
  grid-template-columns: var(--dock-width) ${({$leftHidden:e})=>e?"0px":"calc(var(--left-rail) * var(--rail-scale, 1))"} minmax(0, 1fr) ${({$drawerOpen:e})=>e?"calc(var(--right-rail, 332px) * var(--rail-scale, 1) + var(--gm-nav, 0px) * var(--gm-nav-room, 1) * var(--text-zoom, 1))":"calc(54px * var(--text-zoom, 1))"};
  transition: grid-template-columns 220ms ease;
`,qo=Ft`
  button {
    flex: none;
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
`,Of=u.nav`
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
    width: 34px;
    height: 34px;
  }
  ${qo}
`,Pf=u.aside`
  min-width: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
  background: var(--c-101116);
  /* Em telas baixas as seções não se sobrepõem: a coluna inteira rola. */
  overflow-x: hidden;
  overflow-y: auto;
`,zd=u.section`
  flex: 0 0 auto;
  padding: 17px 16px;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 6.5%, transparent);
  @media (max-height: 760px) and (min-width: 761px) { padding-top: 12px; padding-bottom: 12px; }
  /* Com o chat fechado, o log ocupa o espaço que sobra na coluna. */
  ${({$grow:e})=>e&&"flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column;"}
`,Lf=u.div`
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
`,$f=u.div`
  display: grid;
  gap: 9px;
  max-height: clamp(120px, 30vh, 320px);
  overflow-y: auto;
  padding-right: 3px;
`,Df=u.div`
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
`,Ff=u.div`
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
`,Bf=u.div`
  min-width: 0;
  flex: 1;
  display: grid;
  gap: 2px;
  strong { overflow: hidden; color: var(--c-e7e6e4); font-size: 12px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { overflow: hidden; color: var(--c-8d929d); font-size: 10px; text-overflow: ellipsis; white-space: nowrap; }
`,Uf=u.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({$online:e})=>e?"var(--c-56d28b)":"var(--c-555b66)"};
  box-shadow: ${({$online:e})=>e?"0 0 0 3px color-mix(in srgb, var(--c-56d28b) 10%, transparent)":"none"};
`,Gf=u(zd)`
  /* Sem min-height: 0 — a seção nunca fica menor que o próprio conteúdo (e não invade o log). */
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`,Vf=u.div`
  flex: 1 1 0;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 3px;
  .chat-older { align-self: center; padding: 4px 10px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent); border-radius: 999px; color: var(--c-b9abff); background: var(--c-17191f); font-size: 10px; cursor: pointer; }
`,qf=u.div`
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
`,Wf=u.div`
  min-height: 14px;
  margin-top: 8px;
  color: var(--c-8f86c9);
  font-size: 10px;
  font-style: italic;
  &:empty { visibility: hidden; }
`,Hf=u.form`
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
`,Yf=u.div`
  max-height: ${({$grow:e})=>e?"none":"clamp(72px, 16vh, 142px)"};
  ${({$grow:e})=>e&&"flex: 1 1 0; min-height: 72px;"}
  display: flex;
  flex-direction: column;
  gap: 9px;
  overflow-y: auto;
`,Kf=u.div`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 6px;
  color: var(--c-848995);
  font-size: 10px;
  line-height: 1.35;
  .icon { color: ${({$accent:e})=>wt(e)||"var(--c-9a9faa)"}; margin-top: 1px; }
  time { display: block; margin-top: 3px; color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 8px; }
`,Jf=u.main`
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: var(--c-0e0f13);
`,Xf=u.div`
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
`,Zf=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 1 180px;
  min-width: 0;
  .scene-icon { width: 31px; height: 31px; display: grid; place-items: center; border-radius: 9px; color: var(--c-e9d9ff); background: color-mix(in srgb, var(--c-9677ff) 14%, transparent); }
  .text { min-width: 0; display: grid; gap: 3px; }
  strong { overflow: hidden; color: var(--c-f1efeb); font-size: 14px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.04em; text-transform: uppercase; }
`,Qf=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,eu=u.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
`;const tu=u.span`
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
`,au=u.div`
  display: flex;
  gap: 4px;
  margin: -4px 0 9px;
  button { padding: 3px 6px; border: 1px solid transparent; border-radius: 5px; color: var(--c-8d929d); background: transparent; cursor: pointer; font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; }
  button.active { color: var(--c-d8d0ff); border-color: color-mix(in srgb, var(--c-9b7bff) 28%, transparent); background: color-mix(in srgb, var(--c-9b7bff) 10%, transparent); }
`,ru=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
`,ou=u.div`
  display: grid;
  gap: 6px;
`,nu=u.div`
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
`,iu=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 5px;
  border-radius: 5px;
  color: var(--c-eab9b3);
  background: color-mix(in srgb, var(--c-f04f4a) 10%, transparent);
  font-size: 8px;
`,su=u.button`
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
`,cu=u.span`
  min-width: 43px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  text-align: center;
`,lu=u.div`
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 18px;
  background: radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--c-554376) 11%, transparent), transparent 52%), var(--c-0d0e12);
`,du=u.div`
  position: relative;
  min-height: 460px;
  height: 100%;
  min-width: 670px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 16px;
  background: #13151a;
  box-shadow: 0 25px 80px rgba(0,0,0,0.34), inset 0 0 0 1px rgba(255,255,255,0.025);
`,pu=u.div`
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
`,V={objects:2,tokens:3,drawings:4,fog:5,partyAboveFog:6,fogEditor:7,interface:8},fu=u.svg`
  position: absolute;
  inset: 0;
  z-index: ${V.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .fog-fill { fill: ${({$gm:e})=>e?"rgba(6, 7, 11, 0.5)":"rgba(6, 7, 11, 0.97)"}; }
  .fog-region { fill: none; stroke: rgba(240, 173, 97, 0.65); stroke-width: 1.5; stroke-dasharray: 6 5; }
  .fog-draft { fill: ${({$hide:e})=>e?"rgba(240, 79, 74, 0.16)":"rgba(255, 220, 160, 0.14)"}; stroke: ${({$hide:e})=>e?"#f07970":"#ffd49a"}; stroke-width: 1.5; stroke-dasharray: 4 4; }
`,uu=u.svg`
  position: absolute;
  inset: 0;
  z-index: ${V.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .dark-area { fill: ${({$gm:e})=>e?"rgba(4, 5, 9, 0.55)":"#040509"}; stroke: ${({$gm:e})=>e?"rgba(185, 139, 103, 0.8)":"none"}; stroke-width: 1.5; stroke-dasharray: 6 4; }
  .dark-area.open { fill: rgba(4, 5, 9, 0.12); }
  .dark-area.draft { fill: rgba(4, 5, 9, 0.45); stroke: #e2b48d; }
`,mu=u.svg`
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
`,gu=u.svg`
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
`,bu=u.div`
  position: absolute;
  inset: 0;
  z-index: ${V.fogEditor};
  cursor: ${({$tool:e})=>e==="text"?"text":"crosshair"};
  touch-action: none;
`,hu=u.div`
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
`,xu=u.svg`
  position: absolute;
  inset: 0;
  z-index: ${V.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .vision-dark { fill: ${({$gm:e})=>e?"rgba(4, 5, 9, 0.38)":"rgba(4, 5, 9, 0.95)"}; }
`,vu=u.svg`
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
`,yu=u.div`
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
`,wu=u.div`
  position: absolute;
  z-index: ${V.partyAboveFog};
  border: 2px dashed ${({$fired:e,$draft:t})=>t?"#9ff0e7":e?"rgba(111,116,127,0.7)":"rgba(79,209,197,0.8)"};
  border-radius: 8px;
  background: ${({$fired:e,$draft:t})=>t?"rgba(79,209,197,0.16)":e?"rgba(111,116,127,0.06)":"rgba(79,209,197,0.07)"};
  pointer-events: none;
  span { position: absolute; top: 4px; left: 6px; padding: 2px 6px; border-radius: 5px; color: ${({$fired:e})=>e?"#9a9faa":"#bff6ef"}; background: rgba(8, 20, 20, 0.75); font-family: 'DM Mono', monospace; font-size: 9px; white-space: nowrap; }
`,Su=u.div`
  position: absolute;
  inset: 0;
  z-index: ${V.fogEditor};
  cursor: crosshair;
  touch-action: none;
`,ku=u.div`
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
`,Au=u.span`
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
`,Eu=u.div`
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
`,Tu=u.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.025) 50%, transparent 75%);
  mix-blend-mode: screen;
`,Mu=u.div`
  position: absolute;
  top: 22px;
  left: 24px;
  z-index: ${V.interface};
  display: grid;
  gap: 4px;
  pointer-events: none;
  .eyebrow { color: rgba(242, 218, 176, 0.66); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; }
  strong { color: rgba(255, 244, 222, 0.78); font-size: 21px; font-weight: 500; letter-spacing: -0.04em; }
`,ju=u.div`
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
`,zu=u.button`
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
`,ra=({$monster:e,$activeTurn:t,$marked:a,$selected:r})=>r?"0 0 0 3px #9b7bff, 0 0 0 8px rgba(155,123,255,0.3)":t?"0 0 0 4px rgba(240,173,97,0.85), 0 0 22px rgba(240,173,97,0.55)":a?"0 0 0 4px rgba(255,212,154,0.55)":`0 0 0 5px ${e?"rgba(240,79,74,0.12)":"rgba(233,228,217,0.11)"}`,_u=u.button`
  position: absolute;
  /* left/top vêm do style do elemento: muda a cada arraste e não deve gerar uma classe nova por posição. */
  z-index: ${({$aboveFog:e})=>e?V.partyAboveFog:V.tokens};
  /* --token-scale vem do style do elemento: o tamanho livre muda durante o ajuste sem gerar uma classe por valor. */
  width: calc(${({$monster:e})=>e?36:42}px * var(--token-scale, 1));
  height: calc(${({$monster:e})=>e?36:42}px * var(--token-scale, 1));
  display: grid;
  place-items: center;
  font-size: calc(13px * min(var(--token-scale, 1), 1.6));
  border: 2px ${({$hiddenToken:e})=>e?"dashed":"solid"} ${({$monster:e})=>e?"#f04f4a":"#e9e4d9"};
  border-radius: 50%;
  color: #fff;
  background: ${({$color:e})=>e||"#6f59cf"};
  box-shadow: ${ra}, 0 12px 22px rgba(0,0,0,0.34);
  opacity: ${({$hiddenToken:e})=>e?.72:1};
  filter: ${({$defeated:e})=>e?"grayscale(1) brightness(0.6)":"none"};
  cursor: ${({$draggable:e})=>e?"grab":"default"};
  transform: translate(-50%, -50%);
  /* Quem vê o token de outra pessoa acompanha o movimento suavizado; quem arrasta vê o token preso ao cursor. */
  transition: ${({$dragging:e})=>e?"":"left 140ms linear, top 140ms linear, "}box-shadow 160ms ease, filter 160ms ease, opacity 160ms ease;
  &:active { cursor: ${({$draggable:e})=>e?"grabbing":"default"}; }
  &:hover { box-shadow: ${ra}, 0 0 0 9px rgba(233,228,217,0.08), 0 12px 22px rgba(0,0,0,0.42); }
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
  &[data-bare='true']:not(:hover) { box-shadow: ${e=>e.$selected||e.$activeTurn||e.$marked?ra(e):"none"}; }
  &[data-bare='true'] .token-face { overflow: visible; border-radius: 0; }
  &[data-bare='true'] .token-avatar { border-radius: 0; object-fit: contain; transform: scale(1.2); filter: drop-shadow(0 2px 2px rgb(0 0 0 / 55%)); }
  .token-avatar.cutout { border-radius: 0; object-fit: contain; transform: translateY(-14%) scale(1.25); filter: drop-shadow(0 2px 2px rgb(0 0 0 / 55%)); }
  .token-defeated { position: absolute; inset: -2px; display: grid; place-items: center; border-radius: 50%; color: #f07970; font-size: 22px; font-weight: 700; line-height: 1; pointer-events: none; }
  .token-turn { position: absolute; top: -9px; right: -9px; min-width: 17px; height: 17px; display: grid; place-items: center; padding: 0 4px; border-radius: 999px; color: #1a1209; background: #f3b37d; font-family: 'DM Mono', monospace; font-size: 8px; font-weight: 700; pointer-events: none; }
  .token-conditions { position: absolute; top: calc(100% + 19px); left: 50%; transform: translateX(-50%); display: flex; gap: 3px; pointer-events: none; }
  /* Alça de tamanho (Mestre): aparece ao passar o mouse ou com o token selecionado. */
  .token-resize { position: absolute; right: -4px; bottom: -4px; width: 13px; height: 13px; border: 2px solid #0f1015; border-radius: 4px; background: #9b7bff; cursor: nwse-resize; opacity: 0; touch-action: none; transition: opacity 120ms ease; }
  &:hover .token-resize, &[data-selected='true'] .token-resize, .token-resize[data-active='true'] { opacity: 1; }
  .token-conditions span { padding: 2px 5px; border-radius: 4px; color: #ffd2cc; background: rgba(140, 34, 40, 0.85); font-size: 7px; white-space: nowrap; }
`,Iu=u.div`
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
`,Cu=u.aside`
  min-width: 0;
  border-left: 1px solid var(--border);
  background: var(--c-111217);
  overflow: hidden;
`,Ru=u.div`
  width: 54px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 18px;
`,Nu=u.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Ou=u.div`
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
`,Pu=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  & > :first-child { margin-top: 0; }
  /* Ferramenta aberta pelo índice do Mestre pisca por um instante. */
  [data-flash='true'] { border-radius: 12px; box-shadow: 0 0 0 2px var(--c-9b7bff); transition: box-shadow 200ms ease; }
`,Lu=u.div`
  height: 100%;
  display: flex;
  & > div:first-child { flex: 1; min-width: 0; }
`,$u=u.nav`
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
    width: 36px;
    height: 36px;
    font: inherit;
  }
  ${qo}
  /* Grupos com o nome embaixo do ícone, para achar sem precisar passar o mouse. */
  button.nav-group { width: 48px; height: 44px; align-content: center; gap: 2px; }
  .nav-label { display: block; max-width: 46px; overflow: hidden; font-size: 8.5px; line-height: 1; letter-spacing: 0; text-overflow: ellipsis; white-space: nowrap; }
`,Du=u.nav`
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
`,Fu=u.label`
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
`,Bu=u.div`
  padding: 14px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 12px;
  background: ${({$tint:e})=>e||"var(--c-17191f)"};
`,Uu=u.div`
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
`,Gu=u.div`
  display: grid;
  gap: 6px;
  margin-top: 15px;
  .label { display: flex; align-items: center; justify-content: space-between; color: var(--c-8c919c); font-size: 10px; }
  .label strong { color: var(--c-e8e6e1); font-family: 'DM Mono', monospace; font-size: 10px; }
  .track { height: 6px; overflow: hidden; border-radius: 999px; background: var(--c-262931); }
  .fill { width: ${({$value:e})=>`${e}%`}; height: 100%; border-radius: inherit; background: ${({$color:e})=>e||"var(--c-f04f4a)"}; box-shadow: 0 0 14px ${({$glow:e})=>e||"color-mix(in srgb, var(--c-f04f4a) 25%, transparent)"}; }
`,Vu=u.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin-top: 16px;
`,_d=u.div`
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
`,qu=u.button`
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
  ${_d}:hover & { opacity: 1; transform: translateY(0); }
  &:hover { color: var(--c-ffffff); background: color-mix(in srgb, var(--c-9b7bff) 32%, transparent); }
`,Wu=u.div`
  margin-top: 18px;
  .section-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; color: var(--c-7e838f); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; }
  .section-title button:hover { color: var(--c-d4ccff); }
  /* Recolhida: só o título fica à mostra. */
  &:has(> .section-title[data-collapsed='true']) > :not(.section-title) { display: none; }
  .section-title[data-collapsed='true'] { margin-bottom: 0; }
  /* Em destaque (cenas da campanha). */
  &[data-highlight='true'] { padding: 10px; border: 1px solid color-mix(in srgb, var(--c-f3b37d) 35%, transparent); border-radius: 12px; background: color-mix(in srgb, var(--c-f3b37d) 5%, transparent); }
  &[data-highlight='true'] > .section-title { color: var(--c-f3b37d); }
`,Hu=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 5.5%, transparent);
  &:last-child { border-bottom: 0; }
  .skill-icon { width: 24px; height: 24px; display: grid; place-items: center; border-radius: 7px; color: var(--c-a995ff); background: color-mix(in srgb, var(--c-9b7bff) 11%, transparent); }
  .skill-name { flex: 1; color: var(--c-c9c9ca); font-size: 11px; }
`,Id=u.input`
  width: 100%;
  padding: 10px 11px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  outline: none;
  color: var(--c-e9e7e2);
  background: var(--c-15171c);
  font-size: 11px;
  &:focus { border-color: var(--c-b9abff); box-shadow: 0 0 0 3px color-mix(in srgb, var(--c-9b7bff) 10%, transparent); }
`,Yu=u.label`
  display: grid;
  gap: 6px;
  color: var(--c-8c919b);
  font-size: 10px;
`,Ku=u.select`
  width: 100%;
  padding: 9px 10px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  outline: 0;
  color: var(--c-e9e7e2);
  background: var(--c-15171c);
  font-size: 11px;
  &:focus { border-color: color-mix(in srgb, var(--c-9b7bff) 70%, transparent); }
`,Ju=u.div`
  display: grid;
  grid-template-columns: 1fr 88px;
  gap: 8px;
  /* $stack: em telas estreitas os campos ficam um embaixo do outro (vence o grid-template-columns inline). */
  ${({$stack:e})=>e?"@media (max-width: 560px) { grid-template-columns: minmax(0, 1fr) !important; }":""}
`,Xu=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,Zu=u.button`
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
`,Qu=u.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 5.5%, transparent);
  .track-icon { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 7px; color: ${({$active:e})=>e?"var(--c-f1b17e)":"var(--c-8e939e)"}; background: ${({$active:e})=>e?"color-mix(in srgb, var(--c-e58f48) 14%, transparent)":"var(--c-1b1d23)"}; }
  .track-name { flex: 1; color: var(--c-c9c9ca); font-size: 11px; }
`,em=u.button`
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
`,tm=u.div`
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
`,am=u.div`
  height: 100%;
  display: grid;
  place-items: center;
  padding: 24px;
  color: var(--c-8d929d);
  text-align: center;
  font-size: 11px;
`,rm=u.span`
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
`,om=u.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  > * { flex: 1; }
`,nm=u.p`
  margin: ${({$flush:e})=>e?"0":"9px 0 0"};
  color: var(--c-8d929d);
  font-size: 9px;
  line-height: 1.45;
`,im=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,sm=u.button`
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
`,cm=u.div`
  display: grid;
  gap: 7px;
`,lm=u.button`
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
`,dm=u.div`
  display: grid;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
`,pm=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,fm=u.button`
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
`,um=u.span`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid ${({$accent:e})=>`color-mix(in srgb, ${wt(e)||"var(--c-9b7bff)"} 40%, transparent)`};
  border-radius: 10px;
  color: ${({$accent:e})=>wt(e)||"var(--c-b9abff)"};
  background: ${({$accent:e})=>`color-mix(in srgb, ${wt(e)||"var(--c-9b7bff)"} 9%, transparent)`};
`,mm=u.div`
  display: grid;
  gap: 6px;
  max-height: 166px;
  overflow-y: auto;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
`,gm=u.div`
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
`;u.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
`;u(Id)`
  padding: 8px 5px;
  text-align: center;
  font-family: 'DM Mono', monospace;
`;const bm=u.div`
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
`,hm=u.div`
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
`,xm=u.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
  color: #f4eefe;
  .total { font-size: 30px; font-weight: 700; letter-spacing: -.06em; }
  .math { color: #9da1ac; font-family: 'DM Mono', monospace; font-size: 10px; }
`,vm=u.div`
  display: grid;
  gap: 14px;
  padding: 0 4px 8px;
  color: var(--c-b9bbc2);
`,ym=u.div`
  padding: 15px;
  border: 1px solid ${({$success:e})=>e?"color-mix(in srgb, var(--c-56d28b) 30%, transparent)":"color-mix(in srgb, var(--c-f04f4a) 30%, transparent)"};
  border-radius: 10px;
  background: ${({$success:e})=>e?"color-mix(in srgb, var(--c-56d28b) 9%, transparent)":"color-mix(in srgb, var(--c-f04f4a) 8%, transparent)"};
  .result-kicker { color: ${({$success:e})=>e?"var(--c-8fe3ae)":"var(--c-f09b95)"}; font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; }
  strong { display: block; margin-top: 5px; color: var(--c-f0eeea); font-size: 17px; letter-spacing: -0.03em; }
  p { margin: 7px 0 0; color: var(--c-a9adb6); font-size: 11px; line-height: 1.45; }
`;u.div`
  display: none;
  @media (max-width: 900px) { display: block; }
`;const wm=Bo`
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
`,Cd=u.main`
  height: 100vh;
  height: 100dvh;
  display: grid;
  place-items: center;
  padding: 24px 16px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--c-9b7bff) 14%, transparent), transparent 40%), radial-gradient(circle at 75% 80%, color-mix(in srgb, var(--c-f04f4a) 10%, transparent), transparent 38%), var(--c-0a0b0f);
`,Rd=u.form`
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
`,Sm=u(Cd)`
  place-items: start center;
  padding: 32px 16px;
  @media (max-width: 760px) { padding: 16px; }
`,km=u(Rd)`
  width: min(100%, 1120px);
  gap: 18px;
  padding: 24px 28px;
  @media (max-width: 760px) { padding: 18px 16px; }
`,Am=u.div`
  display: grid;
  grid-template-columns: minmax(280px, 380px) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: minmax(0, 1fr); gap: 18px; }
`,Em=u.div`
  display: grid;
  gap: 13px;
  min-width: 0;
`,Tm=u.section`
  display: grid;
  gap: 16px;
  min-width: 0;
  padding: 18px 20px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 12px;
  background: color-mix(in srgb, var(--c-ffffff) 1.5%, transparent);
  h2 { margin: 0; color: var(--c-e9e7e2); font-size: 15px; font-weight: 600; letter-spacing: -0.02em; }
  @media (max-width: 760px) { padding: 14px; }
`,Mm=u.div`
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
`,jm=u.div`
  display: grid;
  gap: 3px;
  strong { color: var(--c-d6d4d0); font-size: 12px; font-weight: 600; }
  span { color: var(--c-7e838f); font-size: 11px; line-height: 1.4; }
`,zm=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  &::before, &::after { content: ''; flex: 1; height: 1px; background: color-mix(in srgb, var(--c-ffffff) 8%, transparent); }
`,_m=u.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  button { padding: 0; border: 0; color: var(--c-b9abff); background: none; cursor: pointer; font-size: 11px; }
  button:hover { color: var(--c-ddd5ff); text-decoration: underline; }
`,Im=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--c-c9c9ca);
  font-size: 11px;
  .user-avatar { width: 26px; height: 26px; display: grid; place-items: center; overflow: hidden; border-radius: 8px; color: #fff; background: var(--c-6d52be); font-size: 10px; font-weight: 700; }
  .user-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .user-name { max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  @media (max-width: 900px) { .user-name { display: none; } }
`;function Nd({kind:e}){const t=At[e],a=qc(),r=e==="privacidade"?"termos":"privacidade";return O.useEffect(()=>{document.title=`${t.title} — NightTable`},[t.title]),p.jsxs(p.Fragment,{children:[p.jsx(Ed,{}),p.jsx("main",{style:{height:"100dvh",boxSizing:"border-box",padding:"32px 16px 56px",background:"var(--c-0a0b0f)",color:"var(--c-d6d4d0)",overflowY:"auto"},children:p.jsxs("article",{style:{maxWidth:720,margin:"0 auto",display:"grid",gap:18,lineHeight:1.6,fontSize:14},children:[p.jsx("a",{href:Le(),style:{textDecoration:"none"},children:p.jsxs(Td,{children:[p.jsx(Md,{children:p.jsx(ud,{fontSize:"small"})}),p.jsxs(jd,{children:[p.jsx("strong",{children:"NightTable"}),p.jsx("span",{children:"virtual tabletop"})]})]})}),p.jsxs("header",{children:[p.jsx("h1",{style:{margin:"0 0 4px",color:"var(--c-f4f2ef)",fontSize:26},children:t.title}),p.jsxs("p",{style:{margin:0,color:"var(--c-7e838f)",fontSize:12},children:["Última atualização: ",Vc]})]}),p.jsx("p",{style:{margin:0},children:t.intro}),t.sections.map(([o,n])=>p.jsxs("section",{children:[p.jsx("h2",{style:{margin:"0 0 6px",color:"var(--c-c9c3ff)",fontSize:16},children:o}),p.jsx("ul",{style:{margin:0,paddingLeft:20,display:"grid",gap:6},children:n.map(i=>p.jsx("li",{children:i},i))})]},o)),p.jsxs("section",{children:[p.jsx("h2",{style:{margin:"0 0 6px",color:"var(--c-c9c3ff)",fontSize:16},children:"Contato"}),p.jsx("p",{style:{margin:0},children:a?p.jsxs(p.Fragment,{children:["Dúvidas, pedidos sobre seus dados ou denúncias: ",p.jsx("a",{href:a.includes("@")?`mailto:${a}`:a,style:{color:"var(--c-b9abff)"},children:a}),"."]}):"Dúvidas, pedidos sobre seus dados ou denúncias: fale com quem administra esta instalação do NightTable."})]}),p.jsxs("nav",{style:{display:"flex",gap:16,fontSize:12},children:[p.jsx("a",{href:lo(r),style:{color:"var(--c-b9abff)"},children:At[r].title}),p.jsx("a",{href:Le(),style:{color:"var(--c-b9abff)"},children:"Voltar ao NightTable"})]})]})})]})}function Wo({style:e}){return p.jsx("p",{style:{margin:0,display:"flex",gap:12,flexWrap:"wrap",color:"var(--c-7e838f)",fontSize:11,...e},children:Object.entries(At).map(([t,a])=>p.jsx("a",{href:lo(t),target:"_blank",rel:"noopener",style:{color:"var(--c-9d93c9)"},children:a.title},t))})}const Od=Object.freeze(Object.defineProperty({__proto__:null,LegalLinks:Wo,default:Nd},Symbol.toStringTag,{value:"Module"})),Bt={players:{label:"Jogadores na mesa",minimizable:!0},chat:{label:"Chat",minimizable:!0},log:{label:"Log da sessão",minimizable:!0,initial:"hidden"},minimap:{label:"Minimapa",minimizable:!1},legend:{label:"Legenda do mapa",minimizable:!1}},Pd=["players","chat","log"],Ld=["open","min","hidden"];function pe(e){const t=e&&typeof e=="object"?e:{};return Object.fromEntries(Object.entries(Bt).map(([a,r])=>{const o=Ld.includes(t[a])?t[a]:r.initial||"open";return[a,o==="min"&&!r.minimizable?"open":o]}))}function Ja(e,t,a){return pe({...pe(e),[t]:a})}function Cm(e,t){const a=pe(e)[t];return Ja(e,t,a==="open"?"min":"open")}function $d(e,t){return pe(e)[t]!=="hidden"}function Rm(e){const t=pe(e);return Pd.every(a=>t[a]==="hidden")}function Nm(e){return Object.values(pe(e)).filter(t=>t==="hidden").length}function Om(){return Object.fromEntries(Object.keys(Bt).map(e=>[e,"hidden"]))}function Pm(e,t){return Ja(e,t,$d(e,t)?"hidden":"open")}function Lm(){return Object.fromEntries(Object.keys(Bt).map(e=>[e,"open"]))}function ot(e){const t=e&&typeof e=="object"?e:{},a=Number(t.rate);return{narration:t.narration===!0,narrator:t.narrator===!0,voice:String(t.voice||"").slice(0,120),rate:Number.isFinite(a)?Math.min(1.6,Math.max(.6,Math.round(a*10)/10)):1}}function ya(e){const t=a=>/^pt-BR/i.test(a.lang)?0:/^pt/i.test(a.lang)?1:2;return[...e||[]].sort((a,r)=>t(a)-t(r)||String(a.name).localeCompare(String(r.name)))}function Dd(e,t){const a=ya(e);return a.find(r=>r.name===t)||a.find(r=>/^pt/i.test(r.lang))||null}function $m(e){const t=String((e==null?void 0:e.title)||"").trim(),a=String((e==null?void 0:e.text)||"").trim();return t?!a||a===t?t:`${t}. ${a}`:a}const et=()=>typeof window<"u"&&"speechSynthesis"in window&&typeof window.SpeechSynthesisUtterance=="function";function Fd(e,t){const a=String(e||"").trim();if(!a||!et())return!1;const{voice:r,rate:o}=ot(t),n=new window.SpeechSynthesisUtterance(a.slice(0,1200)),i=Dd(window.speechSynthesis.getVoices(),r);return i&&(n.voice=i),n.lang=(i==null?void 0:i.lang)||"pt-BR",n.rate=o,window.speechSynthesis.speak(n),!0}function Mr(){et()&&window.speechSynthesis.cancel()}const Xa=[{id:"normal",label:"Normal",zoom:1},{id:"large",label:"Grande",zoom:1.15},{id:"xlarge",label:"Muito grande",zoom:1.3}];function Ut(e){return Xa.some(t=>t.id===e)?e:"normal"}function Ho(e){return Xa.find(t=>t.id===Ut(e)).zoom}function Bd(e){return 1+(Ho(e)-1)/2}function Ud(e,t=typeof document<"u"?document.documentElement:null){t&&(t.style.setProperty("--text-zoom",String(Ho(e))),t.style.setProperty("--rail-scale",String(Bd(e))),t.dataset.textSize=Ut(e))}const Yo="nighttable-language",Ko=[{value:"pt",label:"Português"},{value:"en",label:"English"}];function Jo(e){return e==="en"?"en":"pt"}function Gt(e=globalThis.localStorage){try{return Jo(e==null?void 0:e.getItem(Yo))}catch{return"pt"}}function Gd(e,t=globalThis.localStorage){try{t==null||t.setItem(Yo,Jo(e))}catch{}}function Vd(e){const t=new Map,a=new Map,r=[];for(const[i,s]of Object.entries(e)){if(!i.includes("{}")){t.set(i,s);continue}const c=i.split("{}"),l={regex:new RegExp(`^${c.map(ui).join("([\\s\\S]*?)")}$`),value:s},f=c[0].slice(0,3);if(f.length<3){r.push(l);continue}a.has(f)||a.set(f,[]),a.get(f).push(l)}const o=(i,s)=>{let c=0;return i.replace(/\{(\d*)\}/g,(l,f)=>{const g=f?s[Number(f)-1]:s[c];return c+=1,n(g??"")??g??""})},n=i=>{if(t.has(i))return t.get(i);const s=a.get(i.slice(0,3));for(const c of[s,r])if(c)for(const l of c){const f=l.regex.exec(i);if(f)return o(l.value,f.slice(1))}return null};return i=>{if(typeof i!="string")return null;const s=i.trim();if(!s||!/[A-Za-zÀ-ú]/.test(s))return null;const c=n(s);if(c==null||c===s)return null;const l=i.indexOf(s);return i.slice(0,l)+c+i.slice(l+s.length)}}const jr=["aria-label","title","placeholder","alt","aria-description","aria-valuetext"],qd=new Set(["SCRIPT","STYLE","TEXTAREA","CODE","PRE","svg"]);function oa(e,t){for(let a=e;a&&a.nodeType===1;a=a.parentElement)if(t&&qd.has(a.tagName)||a.getAttribute("translate")==="no"||a.isContentEditable)return!0;return!1}function Wd(e,t=document.body){const a=s=>{const c=e(s.data);c!=null&&c!==s.data&&!oa(s.parentElement,!0)&&(s.data=c)},r=s=>{if(!oa(s,!1)){for(const c of jr){const l=s.getAttribute(c);if(!l)continue;const f=e(l);f!=null&&f!==l&&s.setAttribute(c,f)}if(s.tagName==="INPUT"&&(s.type==="button"||s.type==="submit")&&s.value){const c=e(s.value);c!=null&&(s.value=c)}}},o=s=>{if(s.nodeType===3){a(s);return}if(s.nodeType!==1||oa(s,!1))return;r(s);const c=document.createTreeWalker(s,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:l=>l.nodeType===1&&l.getAttribute("translate")==="no"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});for(let l=c.nextNode();l;l=c.nextNode())l.nodeType===3?a(l):r(l)};o(t);const n=e(document.title);n&&(document.title=n);const i=new MutationObserver(s=>{for(const c of s)c.type==="characterData"?a(c.target):c.type==="attributes"?r(c.target):c.addedNodes.forEach(o)});return i.observe(t,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[...jr,"value"]}),()=>i.disconnect()}async function Hd(e=Gt()){var r;if(typeof document>"u"||(document.documentElement.lang=e==="en"?"en":"pt-BR",e!=="en"))return;const{default:t}=await ye(async()=>{const{default:o}=await import("./en-CvpJIyIj.js");return{default:o}},[]),a=Vd(t);globalThis.__nighttableTranslate=a;for(const o of["confirm","prompt","alert"]){const n=(r=window[o])==null?void 0:r.bind(window);n&&(window[o]=(i,...s)=>n(typeof i=="string"?a(i)??i:i,...s))}Wd(a,document.body)}function Xo(e){e!==Gt()&&(Gd(e),window.location.reload())}function Dm({style:e}){const t=Gt();return p.jsx("div",{role:"radiogroup","aria-label":"Idioma · Language",translate:"no",style:{display:"inline-flex",gap:2,padding:2,border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:999,...e},children:Ko.map(a=>p.jsx("button",{type:"button",role:"radio","aria-checked":t===a.value,title:a.label,onClick:()=>Xo(a.value),style:{padding:"3px 8px",border:0,borderRadius:999,color:t===a.value?"var(--c-f4f2ef)":"var(--c-9a9faa)",background:t===a.value?"color-mix(in srgb, var(--c-8e6bff) 30%, transparent)":"transparent",fontSize:10,fontWeight:600,letterSpacing:".06em",cursor:"pointer"},children:a.value.toUpperCase()},a.value))})}const Yd={bgcolor:"var(--c-17191f)",color:"var(--c-f4f2ef)",border:"1px solid color-mix(in srgb, var(--c-ffffff) 12%, transparent)",borderRadius:3},Fm=(e,t="minWidth")=>({...Yd,[t]:{xs:"calc(100% - 32px)",sm:e}}),Kd={bgcolor:"var(--c-14161b)",color:"var(--c-e7e5e2)",border:"1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent)"},Bm={bgcolor:"var(--c-1b1d23)",color:"var(--c-e9e7e2)",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)"},Jd={textTransform:"none",bgcolor:"var(--c-7358d0)","&:hover":{bgcolor:"var(--c-6249c0)"}},Um={textTransform:"none",bgcolor:"var(--c-6d52be)","&:hover":{bgcolor:"var(--c-7d62ce)"}},Gm={textTransform:"none",color:"var(--c-b9abff)",borderColor:"color-mix(in srgb, var(--c-9b7bff) 40%, transparent)"},Vm={minWidth:0,px:.8,textTransform:"none",fontSize:9},qm={color:"var(--c-aeb2ba)",textTransform:"none"},Xd=ka(p.jsx("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded"),Zd={main:{gap:1.2,fontSize:18,fontWeight:600},form:{gap:1.2,fontSize:17,fontWeight:600},panel:{gap:1,fontSize:17}};function Qd({icon:e,children:t,onClose:a,closeLabel:r="Fechar",variant:o="main",sx:n,...i}){return p.jsxs(sn,{sx:{display:"flex",alignItems:"center",...Zd[o],...n},...i,children:[e,t,a&&p.jsx(cn,{"aria-label":r,onClick:a,sx:{ml:"auto",color:"var(--c-8e939e)"},children:p.jsx(Xd,{})})]})}const Wm=e=>p.jsx(Or,{dividers:!0,sx:{borderColor:"color-mix(in srgb, var(--c-ffffff) 8%, transparent)"},...e}),Hm=e=>p.jsx(ln,{sx:{px:3,py:2},...e}),zr={player:[{title:"Bem-vindo à mesa",text:"O mapa fica no centro. Arraste o seu token para se mover; o Mestre controla a névoa e o que você enxerga."},{title:"Sua ficha",text:"No painel da direita estão sua ficha, armas e inventário. Clique em um atributo ou perícia para rolar os dados. Duplo clique no seu avatar (no mapa ou na lista) abre a ficha completa."},{title:"Sua tela, do seu jeito",text:"A barra de ícones na beirada esquerda mostra ou oculta jogadores, chat, log, ficha, minimapa e legenda. O modo limpo deixa só o mapa."},{title:"Conversa",text:"No chat, use @nome para chamar alguém, /w Nome para sussurrar e /gm para falar só com o Mestre. Passe o mouse numa mensagem para reagir."},{title:"Ferramentas do mapa",text:"A barra à esquerda do mapa tem lápis, régua e formas. Os desenhos aparecem para todos e somem sozinhos se forem temporários."},{title:"Atalhos",text:"Aperte ? a qualquer momento para ver os atalhos de teclado e reabrir este tutorial pelo botão de ajuda no topo."}],gm:[{title:"Visão do Mestre",text:"O painel da direita reúne tudo o que você controla: cena, tokens, objetos, iniciativa, áudio, handouts e regras."},{title:"Prepare as cenas",text:"Oculte o mapa dos jogadores enquanto prepara, salve o tabuleiro como cena e ative com um clique. O cartão de abertura aparece para todos."},{title:"Tokens e combate",text:"Coloque fichas no mapa, esconda inimigos, marque derrotados e use a iniciativa. Os geradores criam encontros prontos. Duplo clique num token abre a ficha dele."},{title:"Convide o grupo",text:"Compartilhe o código de convite. No lobby da campanha você escreve a descrição e marca as próximas sessões."},{title:"Atalhos e ajuda",text:"Aperte ? para ver os atalhos. M alterna entre a sua visão e a dos jogadores."}]},wa=e=>`nighttable-tutorial-v1:${e}`;function Ym(e){try{return window.localStorage.getItem(wa(e))==="done"}catch{return!0}}function Km(e,t){try{t?window.localStorage.setItem(wa(e),"done"):window.localStorage.removeItem(wa(e))}catch{}}const ep=u.aside`
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
`;function Jm({role:e,onFinish:t}){const a=zr[e]||zr.player,[r,o]=O.useState(0),n=a[r],i=r===a.length-1;return p.jsxs(ep,{role:"dialog","aria-label":"Tutorial do NightTable",children:[p.jsxs("span",{className:"step",children:["primeiros passos · ",r+1,"/",a.length]}),p.jsx("h2",{children:n.title}),p.jsx("p",{children:n.text}),p.jsxs("div",{className:"actions",children:[p.jsx("div",{className:"dots","aria-hidden":"true",children:a.map((s,c)=>p.jsx("span",{className:c===r?"on":""},s.title))}),p.jsx(Ne,{onClick:t,size:"small",sx:{textTransform:"none",color:"var(--c-8e939e)",fontSize:11},children:"Pular"}),p.jsx(Ne,{onClick:()=>i?t():o(r+1),size:"small",variant:"contained",sx:{...Jd,fontSize:11},children:i?"Começar":"Próximo"})]})]})}const tp=u.span`
  display: inline-flex;
  gap: 3px;
  kbd { min-width: 20px; padding: 2px 6px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 14%, transparent); border-bottom-width: 2px; border-radius: 5px; color: var(--c-f4f2ef); background: var(--c-1f222a); font-family: 'DM Mono', monospace; font-size: 10px; text-align: center; }
`,ap=[["@Nome","Chama alguém (a mensagem fica destacada e toca um aviso para a pessoa)."],["/w Nome texto","Sussurro: só você, a pessoa e o Mestre leem."],["/gm texto","Mensagem privada para o Mestre."],["Falar como","Escolha seu personagem ao lado da caixa de texto para falar em personagem."]],rp=[["2d6 + 3","Rola dois dados de 6 lados e soma 3."],["d20 + DES","Usa o valor do atributo da sua ficha."],["4d6kh3","Rola 4 e mantém os 3 maiores (kl = menores)."],["Vantagem","Escolha na ficha: o d20 vira 2d20 e fica o maior (desvantagem: o menor)."]],Zo=[{id:"compact",label:"Compacta"},{id:"normal",label:"Normal"},{id:"comfortable",label:"Confortável"}],Qo=[{id:"system",label:"Seguir o sistema"},{id:"reduced",label:"Reduzidas"}],en=[{id:"full",label:"Completa"},{id:"calm",label:"Discreta"},{id:"off",label:"Desligada"}],_r=[{id:"open",label:"Aberto"},{id:"min",label:"Minimizado"},{id:"hidden",label:"Oculto"}],tn="nighttable-ui-prefs";function an(){try{const e=JSON.parse(window.localStorage.getItem(tn))||{};return{density:Zo.some(t=>t.id===e.density)?e.density:"normal",textSize:Ut(e.textSize),theme:Ha(e.theme),accent:Ya(e.accent),motion:Qo.some(t=>t.id===e.motion)?e.motion:"system",diceAnimation:en.some(t=>t.id===e.diceAnimation)?e.diceAnimation:"full",telemetry:e.telemetry===!0,panels:pe(e.panels),speech:ot(e.speech)}}catch{return{density:"normal",textSize:"normal",theme:"dark",accent:"violet",motion:"system",diceAnimation:"full",telemetry:!1,panels:pe(null),speech:ot(null)}}}function Xm(e){try{window.localStorage.setItem(tn,JSON.stringify(e))}catch{}}function op({speech:e,onChange:t}){const[a,r]=O.useState(()=>et()?ya(window.speechSynthesis.getVoices()):[]);if(O.useEffect(()=>{var s,c;if(!et())return;const i=()=>r(ya(window.speechSynthesis.getVoices()));return(c=(s=window.speechSynthesis).addEventListener)==null||c.call(s,"voiceschanged",i),()=>{var l,f;return(f=(l=window.speechSynthesis).removeEventListener)==null?void 0:f.call(l,"voiceschanged",i)}},[]),!et())return p.jsx("p",{style:{margin:"8px 0 0",color:"var(--c-7e838f)",fontSize:11},children:"Este navegador não lê texto em voz alta."});const o=ot(e),n=i=>t(ot({...o,...i}));return p.jsxs("div",{role:"group","aria-label":"Narração em voz",style:{display:"grid",gap:6,marginTop:10,color:"var(--c-c9c9ca)",fontSize:12},children:[p.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[p.jsx("input",{type:"checkbox",checked:o.narration,onChange:i=>n({narration:i.target.checked})})," Ler em voz alta as narrações na tela"]}),p.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[p.jsx("input",{type:"checkbox",checked:o.narrator,onChange:i=>n({narrator:i.target.checked})})," Ler as falas do canal #narrador"]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:8},children:[p.jsx("span",{style:{width:120},children:"Voz"}),p.jsxs("select",{value:o.voice,onChange:i=>n({voice:i.target.value}),"aria-label":"Voz da narração",style:{flex:1,minWidth:160,padding:"4px 6px",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:6,color:"var(--c-e7e5e2)",background:"var(--c-1a1c22)",fontSize:11},children:[p.jsx("option",{value:"",children:"Automática (português, se houver)"}),a.map(i=>p.jsxs("option",{value:i.name,children:[i.name," · ",i.lang]},i.name))]})]}),p.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[p.jsxs("span",{style:{width:120},children:["Velocidade ",o.rate.toFixed(1),"×"]}),p.jsx("input",{type:"range",min:"0.6",max:"1.6",step:"0.1",value:o.rate,onChange:i=>n({rate:Number(i.target.value)}),"aria-label":"Velocidade da narração em voz",style:{flex:1}})]}),p.jsxs("div",{style:{display:"flex",gap:8},children:[p.jsx(Ne,{size:"small",onClick:()=>{Mr(),Fd("A névoa cobre o porto. Ao longe, um sino toca.",o)},sx:{minWidth:0,color:"var(--c-b9abff)",textTransform:"none",fontSize:11},children:"Testar a voz"}),p.jsx(Ne,{size:"small",onClick:Mr,sx:{minWidth:0,color:"var(--c-8e939e)",textTransform:"none",fontSize:11},children:"Parar"})]})]})}function ge({label:e,value:t,options:a,onChange:r}){return p.jsxs("div",{role:"radiogroup","aria-label":e,style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12},children:[p.jsx("span",{style:{width:120,color:"var(--c-c9c9ca)"},children:e}),a.map(o=>p.jsxs("button",{type:"button",role:"radio","aria-checked":t===o.id,onClick:()=>r(o.id),style:{padding:"5px 10px",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:999,color:t===o.id?"var(--c-f4f2ef)":"var(--c-9a9faa)",background:t===o.id?"color-mix(in srgb, var(--c-8e6bff) 25%, transparent)":"var(--c-1a1c22)",fontSize:11,cursor:"pointer"},children:[o.swatch&&p.jsx("span",{"aria-hidden":"true",style:{display:"inline-block",width:9,height:9,marginRight:5,borderRadius:"50%",background:o.swatch}}),o.label]},o.id))]})}function Zm({open:e,isGm:t,onClose:a,onRestartTutorial:r,prefs:o,onPrefsChange:n}){return p.jsxs(dn,{open:e,onClose:a,fullWidth:!0,maxWidth:"sm",PaperProps:{sx:Kd},children:[p.jsx(Qd,{variant:"panel",icon:p.jsx(tl,{sx:{color:"var(--c-b9abff)"}}),onClose:a,closeLabel:"Fechar ajuda",children:"Ajuda e preferências"}),p.jsxs(Or,{sx:{display:"grid",gap:2,pb:3},children:[o&&p.jsxs("section",{children:[p.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:"preferências deste navegador"}),p.jsxs("div",{style:{display:"grid",gap:8},children:[p.jsx(ge,{label:"Idioma",value:Gt(),options:Ko.map(i=>({id:i.value,label:i.label})),onChange:Xo}),p.jsx(ge,{label:"Densidade",value:o.density,options:Zo,onChange:i=>n({...o,density:i})}),p.jsx(ge,{label:"Tema",value:Ha(o.theme),options:Vo,onChange:i=>n({...o,theme:i})}),p.jsx(ge,{label:"Cor de destaque",value:Ya(o.accent),options:Wa,onChange:i=>n({...o,accent:i})}),p.jsx(ge,{label:"Tamanho do texto",value:Ut(o.textSize),options:Xa,onChange:i=>n({...o,textSize:i})}),p.jsx(ge,{label:"Animações",value:o.motion,options:Qo,onChange:i=>n({...o,motion:i})}),p.jsx(ge,{label:"Dados na tela",value:o.diceAnimation||"full",options:en,onChange:i=>n({...o,diceAnimation:i})}),Object.entries(Bt).map(([i,s])=>p.jsx(ge,{label:s.label,value:pe(o.panels)[i],options:s.minimizable?_r:_r.filter(c=>c.id!=="min"),onChange:c=>n({...o,panels:Ja(o.panels,i,c)})},i))]}),p.jsx(op,{speech:o.speech,onChange:i=>n({...o,speech:i})}),p.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10,color:"var(--c-c9c9ca)",fontSize:12},children:[p.jsx("input",{type:"checkbox",checked:!!o.telemetry,onChange:i=>n({...o,telemetry:i.target.checked})})," Enviar relatórios de erro anônimos (sem nome, e-mail ou conversas)"]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,color:"var(--c-7e838f)",fontSize:11},children:["Erros registrados nesta sessão: ",dr().length,dr().length>0&&p.jsx(Ne,{size:"small",onClick:()=>{var i;return(i=navigator.clipboard)==null?void 0:i.writeText([co(),"","Desempenho:",...Ht()].join(`
`)).catch(()=>{})},sx:{minWidth:0,color:"var(--c-b9abff)",textTransform:"none",fontSize:11},children:"Copiar relatório"})]}),p.jsxs("div",{role:"group","aria-label":"Desempenho desta sessão",style:{marginTop:10,color:"var(--c-7e838f)",fontSize:11,lineHeight:1.6},children:[p.jsx("strong",{style:{display:"block",color:"var(--c-c9c9ca)",fontWeight:600},children:"Desempenho desta sessão"}),Ht().length?Ht().map(i=>p.jsx("div",{children:i},i)):p.jsx("div",{children:"Ainda sem medidas."}),p.jsx("div",{children:"Medido só neste navegador; nada é enviado."})]}),p.jsx("p",{style:{margin:"8px 0 0",color:"var(--c-7e838f)",fontSize:11},children:"Gire a roda do mouse sobre o mapa para aproximar e afastar no ponto do cursor. Com zoom, segure o botão esquerdo num ponto vazio do mapa (fora dos tokens e objetos) e arraste para mover a visão. No celular ou tablet, faça a pinça com dois dedos para aproximar entre os dedos e arraste com dois dedos para mover."})]}),p.jsxs("section",{children:[p.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:"atalhos de teclado"}),p.jsx("div",{style:{display:"grid",gap:6},children:dd.filter(i=>t||!i.gmOnly).map(i=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,fontSize:12},children:[p.jsx(tp,{style:{width:92},children:i.keys.map(s=>p.jsx("kbd",{children:s},s))}),p.jsx("span",{style:{color:"var(--c-c9c9ca)"},children:i.label})]},i.label))})]}),[["chat",ap],["dados",rp]].map(([i,s])=>p.jsxs("section",{children:[p.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:i}),p.jsx("div",{style:{display:"grid",gap:6},children:s.map(([c,l])=>p.jsxs("div",{style:{fontSize:12},children:[p.jsx("code",{style:{color:"var(--c-f3c48f)"},children:c})," ",p.jsxs("span",{style:{color:"var(--c-c9c9ca)"},children:["— ",l]})]},c))})]},i)),p.jsx(Wo,{}),p.jsx(Ne,{onClick:r,sx:{justifySelf:"start",textTransform:"none",color:"var(--c-b9abff)"},children:"Ver o tutorial de novo"})]})]})}const np={DEV:!1,VITE_USE_FIREBASE_EMULATORS:"false"};Dc();Ud(an().textSize);Ad(an());Lc({env:Uc(np),dataVersion:Pe});const ip=O.lazy(()=>ye(()=>import("./App--1SGz8W7.js").then(e=>e.aI),__vite__mapDeps([0,1,2,3]))),sp=O.lazy(()=>ye(()=>import("./LoginScreen-DX4J7e11.js"),__vite__mapDeps([4,1,5,3]))),cp=O.lazy(()=>ye(()=>import("./Lobby-DjX-Vy1Y.js"),__vite__mapDeps([6,1,2,5,7,8,3]))),lp=O.lazy(()=>ye(()=>import("./OnlineTable-eHOTR3M3.js"),__vite__mapDeps([9,1,0,2,3]))),dp=O.lazy(()=>ye(()=>Promise.resolve().then(()=>Od),void 0)),pp=O.lazy(()=>ye(()=>import("./StreamEntry-BvR4J1fx.js"),__vite__mapDeps([10,1,9,0,2,3]))),fp=O.lazy(()=>ye(()=>import("./PublicPage-B9EarB83.js"),__vite__mapDeps([11,1,3])));function up(){return p.jsx("div",{role:"status",style:{minHeight:"100dvh",display:"grid",placeItems:"center",color:"var(--c-8d929d)",background:"var(--c-090a0d)",fontFamily:"DM Mono, monospace",fontSize:11,letterSpacing:".12em",textTransform:"uppercase"},children:"carregando a mesa…"})}const Sa="nighttable-active-table",Ir=Wc(),Cr=hi(),Rr=el();function mp(){try{return JSON.parse(window.localStorage.getItem(Sa))||null}catch{return null}}function Nr(e){try{e?window.localStorage.setItem(Sa,JSON.stringify(e)):window.localStorage.removeItem(Sa)}catch{}}function gp(){const{enabled:e,loading:t,user:a}=Oc(),[r,o]=O.useState(mp),n=s=>{const c=s?{uid:a.uid,tableId:s}:null;Nr(c),o(c)};if(Ir)return p.jsx(dp,{kind:Ir});if(Rr)return p.jsx(fp,{code:Rr});if(!e)return p.jsx(ip,{});if(t)return null;if(Cr)return p.jsx(pp,{code:Cr,user:a});const i=a&&(r==null?void 0:r.uid)===a.uid?r.tableId:null;return!a||a.isAnonymous&&!i?p.jsx(sp,{onGuestJoined:s=>{var l;const c={uid:(l=I.currentUser)==null?void 0:l.uid,tableId:s};Nr(c),o(c)}}):i?p.jsx(lp,{tableId:i,user:a,onLeave:()=>n(null)},i):p.jsx(cp,{onEnterTable:n})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/nighttablesite/sw.js",{scope:"/nighttablesite/"}).catch(()=>{})});Hd().catch(()=>{}).finally(()=>{na.createRoot(document.getElementById("root")).render(p.jsx(Z.StrictMode,{children:p.jsx(Fc,{children:p.jsx(Nc,{children:p.jsx(O.Suspense,{fallback:p.jsx(up,{}),children:p.jsx(gp,{})})})})}))});export{ef as $,Cd as A,Td as B,ud as C,Id as D,am as E,Yu as F,Ed as G,pf as H,gf as I,Un as J,Ku as K,Dm as L,Sm as M,km as N,Gm as O,Jd as P,sf as Q,nf as R,Ju as S,cf as T,Im as U,Am as V,Em as W,df as X,Tm as Y,jm as Z,Mm as _,Rd as a,tm as a$,Yr as a0,Oi as a1,Yi as a2,Hr as a3,Pi as a4,Rp as a5,Qp as a6,Ji as a7,ec as a8,oc as a9,qm as aA,nm as aB,mi as aC,kp as aD,V as aE,Xd as aF,ic as aG,mm as aH,om as aI,em as aJ,gm as aK,um as aL,Vm as aM,eu as aN,rm as aO,Yd as aP,Qd as aQ,Ep as aR,Kn as aS,Fm as aT,Dr as aU,_p as aV,Gu as aW,Vu as aX,_d as aY,qu as aZ,Hu as a_,uc as aa,hs as ab,Js as ac,Ys as ad,sc as ae,dc as af,Gi as ag,fs as ah,us as ai,ws as aj,Ls as ak,js as al,Es as am,vp as an,ri as ao,si as ap,ui as aq,u as ar,ye as as,Ft as at,Tf as au,Ip as av,Cp as aw,ia as ax,Wu as ay,Bu as az,Md as b,Vs as b$,Uu as b0,iu as b1,Wm as b2,vm as b3,Hm as b4,Nu as b5,Ou as b6,Pu as b7,Um as b8,ou as b9,lc as bA,an as bB,Ud as bC,Ad as bD,pe as bE,hi as bF,Bt as bG,Xm as bH,Cm as bI,Ja as bJ,zp as bK,Os as bL,Ks as bM,Bs as bN,Us as bO,ds as bP,ss as bQ,is as bR,ls as bS,wp as bT,Sp as bU,ps as bV,cs as bW,Op as bX,ao as bY,Fs as bZ,Ds as b_,nu as ba,im as bb,sm as bc,Fu as bd,Xu as be,Zu as bf,dm as bg,pm as bh,fm as bi,Qu as bj,ru as bk,li as bl,Du as bm,gi as bn,Bm as bo,gc as bp,ts as bq,Zi as br,Xi as bs,es as bt,Ui as bu,Ps as bv,da as bw,Zr as bx,Fn as by,cc as bz,jd as c,vf as c$,Gs as c0,xc as c1,Np as c2,ro as c3,bc as c4,hc as c5,vc as c6,ke as c7,_s as c8,Is as c9,qi as cA,Wi as cB,Hi as cC,Vi as cD,ac as cE,tc as cF,Xr as cG,Bn as cH,Mf as cI,ms as cJ,Qs as cK,Zs as cL,Xs as cM,gs as cN,Gp as cO,Wp as cP,Bp as cQ,qp as cR,Up as cS,Lp as cT,$p as cU,Dp as cV,Vp as cW,Sc as cX,uo as cY,wc as cZ,Af as c_,zs as ca,Rs as cb,ys as cc,vs as cd,xs as ce,Cs as cf,qs as cg,Hs as ch,Ws as ci,zc as cj,Ki as ck,Qi as cl,rs as cm,as as cn,As as co,rc as cp,ks as cq,Ss as cr,Tp as cs,Ap as ct,nc as cu,$r as cv,Ms as cw,Ts as cx,mc as cy,yp as cz,zm as d,zu as d$,bf as d0,xf as d1,hf as d2,yf as d3,yc as d4,Sf as d5,kf as d6,bs as d7,Qr as d8,fc as d9,$f as dA,Df as dB,Ff as dC,Bf as dD,Uf as dE,$s as dF,Gf as dG,au as dH,Vf as dI,Wf as dJ,qf as dK,Hf as dL,Yf as dM,Kf as dN,Jf as dO,Xf as dP,Zf as dQ,Qf as dR,su as dS,cu as dT,lu as dU,du as dV,pu as dW,Eu as dX,Tu as dY,Mu as dZ,Iu as d_,pc as da,ot as db,Fd as dc,$m as dd,Lc as de,Mp as df,lf as dg,Ns as dh,Pe as di,wm as dj,jf as dk,zf as dl,Bc as dm,_f as dn,If as dp,Cf as dq,tl as dr,Rf as ds,Nf as dt,Of as du,Nm as dv,Rm as dw,Pf as dx,zd as dy,Lf as dz,_m as e,_u as e0,mu as e1,fu as e2,Su as e3,uu as e4,xu as e5,vu as e6,wu as e7,bu as e8,gu as e9,fo as eA,Le as eB,wf as eC,gt as eD,Gt as eE,Ef as eF,Kd as eG,Kc as eH,oo as eI,_c as eJ,rf as eK,of as eL,Fp as eM,Si as eN,Ai as eO,Ur as eP,Pp as eQ,ca as eR,Rc as eS,Cc as eT,sr as eU,Hp as eV,Yp as eW,Au as ea,ju as eb,ku as ec,hu as ed,yu as ee,Cu as ef,Lu as eg,$u as eh,Ru as ei,ym as ej,Zm as ek,Km as el,Ym as em,Jm as en,bm as eo,hm as ep,xm as eq,tu as er,ci as es,Uc as et,$d as eu,Pm as ev,Om as ew,Lm as ex,Yc as ey,jp as ez,Wo as f,af as g,tf as h,Xp as i,Zp as j,Di as k,Fi as l,po as m,tt as n,uf as o,mf as p,ff as q,Jp as r,Kp as s,cm as t,Oc as u,lm as v,Li as w,$i as x,Bi as y,Jn as z};
