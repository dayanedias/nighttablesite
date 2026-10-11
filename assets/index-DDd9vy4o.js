const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/App-CDNgvRQQ.js","assets/mui-CncEM2Qp.js","assets/firebase-BfOQFdAU.js","assets/LoginScreen-xxcH8QQF.js","assets/InvitePreview-fGE1ugEU.js","assets/Lobby-B_kSV0Fi.js","assets/SystemEditor-CXRcYLAg.js","assets/AccountDialog-DzrR8kDe.js","assets/OnlineTable-Df2fPAPM.js","assets/StreamEntry-Bqos0uLV.js","assets/PublicPage-DD5CGVEM.js"])))=>i.map(i=>d[i]);
var Xo=Object.defineProperty;var Zo=(e,t,a)=>t in e?Xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var Va=(e,t,a)=>Zo(e,typeof t!="symbol"?t+"":t,a);import{r as Qo,a as L,j as f,R as Q,c as ga,D as en,b as tn,I as an,d as rn,B as Re}from"./mui-CncEM2Qp.js";import{i as on,g as nn,a as sn,p as cn,b as ln,c as dn,d as O,e as m,f as $,q as I,w as P,h as D,j as U,l as J,k as h,o as j,m as ba,n as K,T as ha,u as ee,s as C,r as pn,t as b,v as _r,x as fn,y as un,z as mn,F as gn,A as bn,B as zr,C as Mt,D as xa,E as hn,G as xn,H as vn,I as yn,J as wn,K as Sn}from"./firebase-BfOQFdAU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const kn="modulepreload",An=function(e){return"/nighttablesite/"+e},qa={},we=function(t,a,r){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(a.map(c=>{if(c=An(c),c in qa)return;qa[c]=!0;const d=c.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":kn,d||(g.as="script"),g.crossOrigin="",g.href=c,s&&g.setAttribute("nonce",s),document.head.appendChild(g),d)return new Promise((v,M)=>{g.addEventListener("load",v),g.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})};var Jt={},Wa=Qo;Jt.createRoot=Wa.createRoot,Jt.hydrateRoot=Wa.hydrateRoot;const En={VITE_FIREBASE_API_KEY:"AIzaSyAojCR46U1f6Bivq7ogNUkQMReQZ8RPpmI",VITE_FIREBASE_APP_ID:"1:839551252957:web:f9a1f161e39ab7ebb85e34",VITE_FIREBASE_AUTH_DOMAIN:"nighttable-5621b.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-1Z4XL9CFYE",VITE_FIREBASE_MESSAGING_SENDER_ID:"839551252957",VITE_FIREBASE_PROJECT_ID:"nighttable-5621b",VITE_FIREBASE_STORAGE_BUCKET:"nighttable-5621b.firebasestorage.app",VITE_USE_FIREBASE_EMULATORS:"false"},he=En,Mn=he.VITE_USE_FIREBASE_EMULATORS==="true",ut={apiKey:he.VITE_FIREBASE_API_KEY,authDomain:he.VITE_FIREBASE_AUTH_DOMAIN,projectId:he.VITE_FIREBASE_PROJECT_ID,storageBucket:he.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:he.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:he.VITE_FIREBASE_APP_ID,measurementId:he.VITE_FIREBASE_MEASUREMENT_ID},Tn=!!(ut.apiKey&&ut.projectId&&ut.appId),In=ut,mt=Tn||Mn,$e=mt?on(In):null,N=$e?nn($e):null,l=$e?sn($e,{localCache:cn({tabManager:dn()})}):null,jn="southamerica-east1";$e&&ln($e,jn);const Cn={message:"mensagem no chat",move:"movimento de token",state:"estado da mesa"},Ya=()=>typeof performance<"u"?performance.now():Date.now();function _n(){return{open:null,samples:{message:[],move:[],state:[]},failures:0}}let Tt=_n();function Qd({sincePageLoad:e,waitingForData:t=null},a=Tt){return a.open||(a.open={sincePageLoad:Math.round(e),waitingForData:t===null?null:Math.round(t)}),a}function zn(e,t,a=Tt){return a.samples[e]&&(a.samples[e]=[...a.samples[e],Math.round(t)].slice(-100)),a}function va(e,t,a=Tt){const r=Ya();return Promise.resolve(t).then(o=>(zn(e,Ya()-r,a),o),o=>{throw a.failures+=1,o})}function Ha(e,t){return e.length?e[Math.min(e.length-1,Math.ceil(t*e.length)-1)]:null}function Nn(e=[]){if(!e.length)return{count:0,median:null,p95:null,max:null};const t=[...e].sort((a,r)=>a-r);return{count:t.length,median:Ha(t,.5),p95:Ha(t,.95),max:t[t.length-1]}}const pt=e=>e==null?"—":e>=1e3?`${(e/1e3).toFixed(1).replace(".",",")} s`:`${e} ms`;function Ft(e=Tt){const t=[];e.open&&t.push(`Abrir a mesa: ${pt(e.open.sincePageLoad)} desde o carregamento da página${e.open.waitingForData!==null?` (${pt(e.open.waitingForData)} esperando os dados)`:""}`);for(const[a,r]of Object.entries(Cn)){const{count:o,median:n,p95:i}=Nn(e.samples[a]);o&&t.push(`Gravar ${r}: mediana ${pt(n)}, 95% em até ${pt(i)} (${o} amostra${o===1?"":"s"})`)}return e.failures&&t.push(`Gravações que falharam: ${e.failures}`),t}const Rn={map:{maxSize:2048,maxBytes:14e5},portrait:{maxSize:480,maxBytes:9e4},avatar:{maxSize:160,maxBytes:25e3,square:!0},thumb:{maxSize:64,maxBytes:6e3}},$n=9e3;function Ln(e){return typeof e=="string"&&e.startsWith("data:image/")&&e.length<=$n}const Pn=25*1024*1024,On=9e5;function Nr(e){const t=e.slice(e.indexOf(",")+1),a=t.endsWith("==")?2:t.endsWith("=")?1:0;return Math.floor(t.length*3/4)-a}function ya(e,t=On){const a=[];for(let r=0;r<e.length;r+=t)a.push(e.slice(r,r+t));return a}function wa(e){return[...e].sort((t,a)=>t.index-a.index).map(t=>t.data).join("")}function ep(e){return e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1).replace(".",",")} MB`}function Xt(e){return e?String(e.type).startsWith("image/")?e.size>Pn?"Imagem grande demais: o limite é 25 MB.":null:"Escolha um arquivo de imagem (JPG, PNG ou WebP).":"Nenhum arquivo escolhido."}function Rr(e){return new Promise((t,a)=>{const r=URL.createObjectURL(e),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),t(o)},o.onerror=()=>{URL.revokeObjectURL(r),a(new Error("Não foi possível ler esta imagem."))},o.src=r})}let Bt;function Ka(){return Bt===void 0&&(Bt=document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp")),Bt?"image/webp":"image/jpeg"}function $r(e,t,a,r=!1){const o=document.createElement("canvas"),n=o.getContext("2d"),i=e.naturalWidth||e.width,s=e.naturalHeight||e.height;if(a){const d=Math.min(i,s),p=Math.min(t,d);return o.width=p,o.height=p,n.drawImage(e,(i-d)/2,(s-d)/2,d,d,0,0,p,p),o}const c=Math.min(1,t/Math.max(i,s));return o.width=Math.max(1,Math.round(i*c)),o.height=Math.max(1,Math.round(s*c)),r||(n.fillStyle="#121419",n.fillRect(0,0,o.width,o.height)),n.drawImage(e,0,0,o.width,o.height),o}async function tp(e,{maxSize:t,maxBytes:a}=Rn.thumb){const r=await new Promise((n,i)=>{const s=new Image;s.onload=()=>n(s),s.onerror=()=>i(new Error("Não foi possível ler esta imagem.")),s.src=e}),o=$r(r,t,!1);for(const n of[.7,.55,.4]){const i=o.toDataURL("image/jpeg",n);if(Nr(i)<=a)return i}return null}async function ap(e){const t=Xt(e);if(t)throw new Error(t);return Rr(e)}function rp(e){return new Promise((t,a)=>{const r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>a(new Error("Não foi possível ler este arquivo.")),r.readAsDataURL(e)})}async function op(e,{maxSize:t,maxBytes:a,square:r=!1,transparent:o=!1}){let n=e;if(typeof Blob<"u"&&e instanceof Blob){const c=Xt(e);if(c)throw new Error(c);n=await Rr(e)}else if(!e||typeof e!="object"||!("width"in e)){const c=Xt(e);if(c)throw new Error(c)}const i=o&&Ka()!=="image/webp"?"image/png":Ka();let s=t;for(let c=0;c<6;c+=1){const d=$r(n,s,r,o);for(const p of[.86,.76,.66,.56,.46]){const g=d.toDataURL(i,p),v=Nr(g);if(v<=a)return{dataUrl:g,bytes:v,width:d.width,height:d.height}}s=Math.round(s*.8)}throw new Error("Não foi possível reduzir esta imagem o suficiente. Tente uma menor.")}const Dn=1e4,Fn=20;function Bn(e,t,{windowMs:a=Dn,max:r=Fn}={}){return!e||!Number.isFinite(e.windowStart)?e?"reset":"create":t-e.windowStart>=a?"reset":e.count>=r?"blocked":"increment"}const Un="Muitas mensagens em pouco tempo. Espere alguns segundos.",Le=3,Gn=["weapons","armor","inventory","abilities","macros","conditions"];function Vn(e){if(!e||typeof e!="object")return e;const t={...e};Gn.forEach(r=>{Array.isArray(t[r])||(t[r]=[])}),t.inventory=t.inventory.filter(r=>r&&String(r.name||"").trim()).map(r=>({...r,quantity:Math.max(1,Math.round(Number(r.quantity)||1)),weight:Math.max(0,Number(r.weight)||0)}));const a=Math.round(Number(t.coins));return t.coins=Number.isFinite(a)&&a>0?a:0,typeof t.condition!="string"&&(t.condition=""),t}const qn={chest:"chest",door:"door"};function Wn(e){return!e||typeof e!="object"||e.sprite?e:{...e,sprite:qn[e.kind]||"object"}}function Yn(e){return!e||typeof e!="object"||!(e.door||e.barrier)||typeof e.open=="boolean"?e:{...e,open:!1}}function Hn(e){if(!e||typeof e!="object")return e;const t={...e};return Array.isArray(t.markers)&&(t.markers=t.markers.map(Wn)),Array.isArray(t.walls)&&(t.walls=t.walls.map(Yn)),t}function np(e){return!e||typeof e!="object"?!1:(Number(e.schemaVersion)||1)<Le}function Kn(e){if(!e||typeof e!="object")return{};const t=Number(e.version)||1;if(t>Le)return{...e,futureVersion:!0};let a={...e};return t<3&&(a=Hn(a),Array.isArray(a.sheets)&&(a.sheets=a.sheets.map(Vn))),{...a,version:Le}}function ip(e){if(!e||typeof e!="object")return{error:"O arquivo não é um backup do NightTable."};const t=Number(e.version);return!Number.isInteger(t)||t<2?{error:"Backup sem versão: exporte de novo pela mesa."}:t>Le?{error:`Backup feito numa versão mais nova do NightTable (v${t}). Atualize o app.`}:!e.scene||!Array.isArray(e.sheets)||e.sheets.length===0||!Array.isArray(e.tokens)||!Array.isArray(e.markers)?{error:"Backup incompleto: faltam cena, fichas, tokens ou objetos."}:{backup:Kn(e)}}const Jn=[{days:0,label:"Sempre"},{days:365,label:"1 ano"},{days:90,label:"90 dias"},{days:30,label:"30 dias"}],Xn=24*36e5;function Zn(e){const t=Number(e);return Jn.some(a=>a.days===t)?t:0}function sp(e,t=Date.now()){const a=Zn(e);return a?t-a*Xn:null}function Qn(e=[]){return{deleteTables:e.filter(t=>t.role==="gm").map(t=>t.tableId),leaveTables:e.filter(t=>t.role!=="gm").map(t=>t.tableId)}}const ei=[{days:0,label:"Sem validade"},{days:1,label:"1 dia"},{days:7,label:"7 dias"},{days:30,label:"30 dias"}],ti=24*36e5;function Lr(e,t=Date.now()){const a=Number(e);return ei.some(r=>r.days===a&&a>0)?t+a*ti:null}const Pr=e=>{var t;return typeof e=="number"?e:((t=e==null?void 0:e.toMillis)==null?void 0:t.call(e))??null};function Sa(e,t=Date.now()){const a=Pr(e);return a!==null&&t>=a}function cp(e,t=Date.now()){const a=Pr(e);return a===null?"sem validade":t>=a?"vencido":`vale até ${new Date(a).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}`}function Pe(e=(a=>(a=globalThis.location)==null?void 0:a.origin)()||"",t="/nighttablesite/"){return`${e}${t.endsWith("/")?t:`${t}/`}`}function lp(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Pe(t,a)}?convite=${encodeURIComponent(e)}`}function dp(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Pe(t,a)}?transmissao=${encodeURIComponent(e)}`}function ai(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{return(new URLSearchParams(e).get("transmissao")||"").trim().toUpperCase().slice(0,24)||null}catch{return null}}const Ja={life:"maxLife",effort:"maxEffort",coins:null,xp:null},ri=new Set(["id","updatedAt","history"]),oi=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function Zt(e,t){return[...new Set([...Object.keys(e||{}),...Object.keys(t||{})])].filter(r=>!ri.has(r)&&!oi(e==null?void 0:e[r],t==null?void 0:t[r]))}const Xa=e=>`${e==null?void 0:e.at}|${e==null?void 0:e.by}|${JSON.stringify(e==null?void 0:e.changes)}`;function ni(e,t,a){if(!a)return t;const r={...a};Zt(e,t).forEach(i=>{if(!(i in Ja&&Number.isFinite(Number(e==null?void 0:e[i]))&&Number.isFinite(Number(t==null?void 0:t[i]))&&Number.isFinite(Number(a[i])))){(t==null?void 0:t[i])===void 0?delete r[i]:r[i]=t[i];return}const c=Number(t[i])-Number(e[i]),d=Ja[i],p=d?Number(Zt(e,t).includes(d)?t[d]:a[d]):1/0;r[i]=Math.max(0,Math.min(Number.isFinite(p)?p:1/0,Number(a[i])+c))});const o=new Set(((e==null?void 0:e.history)||[]).map(Xa)),n=((t==null?void 0:t.history)||[]).filter(i=>!o.has(Xa(i)));return n.length&&(r.history=[...a.history||[],...n].slice(-30)),r}const ii={map:{label:"Mapa",plural:"Mapas"},sheet:{label:"Ficha",plural:"Fichas"},macro:{label:"Macro",plural:"Macros"}},pp={pending:"em análise",approved:"aprovado",rejected:"recusado",hidden:"fora do ar (denúncias)"},Or=3,si=80,ci=1e3,Za=8,fp={maxSize:1600,maxBytes:6e5},up={maxSize:1200,maxBytes:3e5},li=82e4,Dr="nighttable-gallery",de=(e,t)=>String(e??"").replace(/\s+/g," ").trim().slice(0,t),Qa=e=>String(e||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();function di(e){const t=Array.isArray(e)?e:String(e||"").split(","),a=new Set;return t.map(r=>de(String(r).replace(/^#/,""),24)).filter(r=>r&&!a.has(r.toLowerCase())&&a.add(r.toLowerCase())).slice(0,8)}function pi(e,t){var a,r;if(e==="map"){const o=typeof(t==null?void 0:t.image)=="string"&&t.image.startsWith("data:image/")&&t.image.length<=li?t.image:null;return o?{image:o,gridFit:t.gridFit&&typeof t.gridFit=="object"?t.gridFit:null}:null}if(e==="sheet"){const o=t==null?void 0:t.sheet;return!o||typeof o!="object"||!de(o.name,60)||!o.attributes?null:{sheet:o}}if(e==="macro"){const o=de((a=t==null?void 0:t.macro)==null?void 0:a.name,40),n=de((r=t==null?void 0:t.macro)==null?void 0:r.expression,80);return!o||!n?null:{macro:{name:o,expression:n,note:de(t.macro.note,140)}}}return null}function mp({kind:e,title:t,description:a="",tags:r="",payload:o,author:n,thumb:i=null,rightsConfirmed:s},c=Date.now()){if(!ii[e])return{error:"Escolha o tipo do conteúdo."};const d=de(t,si);if(!d)return{error:"Dê um título ao conteúdo."};if(!s)return{error:"Confirme que você pode compartilhar este conteúdo."};const p=pi(e,o);return p?{item:{kind:e,title:d,description:String(a||"").trim().slice(0,ci),tags:di(r),authorUid:(n==null?void 0:n.uid)||"local",authorName:de(n==null?void 0:n.name,80)||"Mestre",status:"pending",reports:0,thumb:typeof i=="string"&&i.startsWith("data:image/")&&i.length<=9e3?i:null,createdAt:c},payload:p}:{error:e==="map"?"A mesa não tem um mapa enviado para compartilhar.":"Escolha o que compartilhar."}}function gp(e,{kind:t="all",query:a=""}={}){const r=Qa(a).split(/\s+/).filter(Boolean);return e.filter(o=>t==="all"||o.kind===t).filter(o=>{const n=Qa(`${o.title} ${o.description} ${o.tags.join(" ")} ${o.authorName}`);return r.every(i=>n.includes(i))}).sort((o,n)=>(n.createdAt||0)-(o.createdAt||0))}function bp(e,t,{by:a="moderador",note:r="",now:o=Date.now()}={}){const n={approve:"approved",reject:"rejected",hide:"hidden",restore:"approved"}[t];return n?{...e,status:n,reviewedBy:de(a,80),reviewNote:de(r,300),reviewedAt:o,reports:t==="restore"||t==="approve"?0:e.reports}:e}function hp(e,t,a){if(e.status!=="approved"||t.includes(a))return{item:e,counted:!1};const r=(e.reports||0)+1;return{item:{...e,reports:r,status:r>=Or?"hidden":"approved"},counted:!0}}function It(e){try{const t=JSON.parse((e==null?void 0:e.getItem(Dr))||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function ka(e,t){try{t.setItem(Dr,JSON.stringify(e))}catch{throw new Error("A galeria local encheu este navegador. Apague um envio antigo e tente de novo.")}}function xp(e=globalThis.localStorage){return It(e)}function vp({item:e,payload:t},a=globalThis.localStorage,r=`gal-${Date.now()}-${Math.floor(Math.random()*1e3)}`){const o=It(a);if(o.length>=Za)throw new Error(`A galeria local guarda até ${Za} envios. Apague algum antes.`);return ka([{...e,id:r,payload:t,reporters:[]},...o],a),r}function yp(e,t,a=globalThis.localStorage){const r=It(a).map(o=>o.id===e?{...o,...t(o)}:o);ka(r,a)}function wp(e,t=globalThis.localStorage){ka(It(t).filter(a=>a.id!==e),t)}const Je=()=>h(l,"gallery"),Aa=e=>m(l,"gallery",e,"payload","data"),fi=e=>e.docs.map(t=>({id:t.id,...t.data()}));async function ui(){var t;const e=(t=N.currentUser)==null?void 0:t.uid;if(!e)return!1;try{return(await O(m(l,"moderators",e))).exists()}catch{return!1}}function mi({uid:e,moderator:t},a,r){const o={approved:[],mine:[],review:[]},n=()=>{const c=new Map;for(const d of Object.values(o))for(const p of d)c.set(p.id,p);a([...c.values()])},i=(c,d)=>j(d,p=>{o[c]=fi(p),n()},r),s=[i("approved",I(Je(),P("status","==","approved"),J(200)))];return e&&s.push(i("mine",I(Je(),P("authorUid","==",e),J(50)))),t&&s.push(i("review",I(Je(),P("status","in",["pending","hidden"]),J(100)))),()=>s.forEach(c=>c())}async function gi({item:e,payload:t}){const a=m(Je()),r=D(l);return r.set(a,{...e,authorUid:N.currentUser.uid}),r.set(Aa(a.id),t),await r.commit(),a.id}async function bi(e){const t=await O(Aa(e));return t.exists()?t.data():null}function hi(e,t){const{status:a,reviewedBy:r,reviewNote:o,reviewedAt:n,reports:i}=t,s=D(l);return s.update(m(l,"gallery",e),{status:a,reviewedBy:r,reviewNote:o,reviewedAt:n,reports:i}),s.commit()}async function xi(e,t){const a=N.currentUser.uid,r=(e.reports||0)+1,o=D(l);o.set(m(l,"gallery",e.id,"reports",a),{uid:a,reason:String(t||"").slice(0,300),at:Date.now()}),o.update(m(l,"gallery",e.id),{reports:r,status:r>=Or?"hidden":"approved"}),await o.commit()}async function Fr(e){await U(Aa(e)).catch(()=>{}),await U(m(l,"gallery",e))}async function Br(e){const t=await $(I(Je(),P("authorUid","==",e)));for(const a of t.docs)await Fr(a.id)}const Sp=Object.freeze(Object.defineProperty({__proto__:null,checkModerator:ui,deleteMyGalleryItems:Br,fetchGalleryPayload:bi,moderateGalleryItem:hi,removeGalleryItem:Fr,reportGalleryItem:xi,submitToGallery:gi,subscribeGallery:mi},Symbol.toStringTag,{value:"Module"})),er="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function jt(e=6){const t=crypto.getRandomValues(new Uint32Array(e));return Array.from(t,a=>er[a%er.length]).join("")}function _(){if(!(N!=null&&N.currentUser))throw new Error("Usuário não autenticado.");return N.currentUser}const Y=e=>m(l,"tables",e);async function vi({name:e,initialState:t={},campaign:a=null,avatar:r=null}){const o=_(),n=m(h(l,"tables")),i=jt(),s=D(l);return s.set(n,{name:e,...a?{campaign:a}:{},ownerId:o.uid,inviteCode:i,state:{...t,schemaVersion:Le},createdAt:b(),updatedAt:b()}),s.set(m(n,"members",o.uid),{uid:o.uid,role:"gm",displayName:o.displayName||o.email||"Mestre",tableName:e,...r?{avatar:r}:{},joinedAt:b()}),s.set(m(l,"invites",i),{tableId:n.id,tableName:e,gmName:String(o.displayName||"Mestre").slice(0,80),createdBy:o.uid,createdAt:b()}),await s.commit(),{tableId:n.id,inviteCode:i}}async function yi(e){const t=String(e||"").trim().toUpperCase();if(!t)return null;const a=await O(m(l,"invites",t));if(!a.exists())return null;const{tableName:r,gmName:o,expiresAt:n}=a.data();return{code:t,tableName:r||"Mesa",gmName:o||null,expiresAt:n??null,expired:Sa(n)}}async function Ur(e,{avatar:t=null}={}){const a=_(),r=String(e||"").trim().toUpperCase(),o=await O(m(l,"invites",r));if(!o.exists())throw new Error("Convite inválido ou expirado.");const{tableId:n,tableName:i,expiresAt:s,stream:c}=o.data();if(c||Sa(s))throw new Error("Convite inválido ou expirado.");const d=m(l,"tables",n,"members",a.uid),p=await O(d).catch(()=>null);return p!=null&&p.exists()?{tableId:n,tableName:i}:(await C(d,{uid:a.uid,role:"player",displayName:a.displayName||a.email||"Jogador",tableName:i,inviteCode:r,guest:!!a.isAnonymous,...t?{avatar:t}:{},joinedAt:b()}),{tableId:n,tableName:i})}async function Gr(){const e=_(),a=(await $(I(pn(l,"members"),P("uid","==",e.uid)))).docs.map(r=>({tableId:r.ref.parent.parent.id,...r.data()}));return Promise.all(a.map(async r=>{var i,s;const o=await O(Y(r.tableId)).catch(()=>null),n=o!=null&&o.exists()?o.data():null;return{...r,tableName:(n==null?void 0:n.name)||r.tableName,archived:!!(n!=null&&n.archived),systemName:((s=(i=n==null?void 0:n.state)==null?void 0:i.system)==null?void 0:s.name)||"",campaign:(n==null?void 0:n.campaign)||null}}))}function wi(e,t){return ee(Y(e),{name:String(t).trim().slice(0,80),updatedAt:b()})}function Si(e,t){return ee(Y(e),{archived:!!t,updatedAt:b()})}function ki(e,t,a,r=()=>{}){return j(Y(e),{includeMetadataChanges:!0},o=>{r({fromCache:o.metadata.fromCache,hasPendingWrites:o.metadata.hasPendingWrites}),t(o.exists()?{id:o.id,...o.data()}:null)},a)}function Ai(e,t,a){return j(h(l,"tables",e,"members"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Ei(e,t){return ee(Y(e),{campaign:t,updatedAt:b()})}function Mi(e,t){const a=Object.fromEntries(Object.entries(t).map(([r,o])=>[`state.${r}`,o]));return va("state",ee(Y(e),{...a,updatedAt:b()}))}function Ti(e,{isGm:t},a,r){const o=h(l,"tables",e,"tokens"),n=t?o:I(o,P("hidden","==",!1));return j(n,i=>a(i.docs.map(s=>({id:s.id,...s.data()}))),r)}function Ii(e,t){const{id:a,...r}=t;return C(m(l,"tables",e,"tokens",a),{hidden:!!r.monster,ownerUid:null,...r})}function ji(e,t,a,r){return va("move",ee(m(l,"tables",e,"tokens",t),{x:a,y:r}))}function Ci(e,t,a){return ee(m(l,"tables",e,"tokens",t),{rotation:a})}function _i(e,t){return U(m(l,"tables",e,"tokens",t))}function Qt({id:e,...t}){return t}async function zi(e,{tokens:t,sheets:a,currentTokens:r=[],currentSheets:o=[]}){const n=D(l),i=new Set(t.map(c=>c.id)),s=new Set(a.map(c=>c.id));r.filter(c=>!i.has(c.id)).forEach(c=>n.delete(m(l,"tables",e,"tokens",c.id))),o.filter(c=>!s.has(c.id)).forEach(c=>n.delete(m(l,"tables",e,"sheets",c.id))),t.forEach(c=>n.set(m(l,"tables",e,"tokens",c.id),{ownerUid:null,sheetId:null,...Qt(c),hidden:c.hidden??!!c.monster})),a.forEach(c=>n.set(m(l,"tables",e,"sheets",c.id),{ownerUid:null,...Qt(c),updatedAt:b()})),await n.commit()}async function Ni(e,t,a,r=[]){const o=(a==null?void 0:a.uid)||null,n=D(l);n.update(m(l,"tables",e,"sheets",t),{ownerUid:o,owner:(a==null?void 0:a.displayName)||"Mestre",updatedAt:b()}),r.filter(i=>i.sheetId===t).forEach(i=>n.update(m(l,"tables",e,"tokens",i.id),{ownerUid:o})),await n.commit()}function Ri(e,t,a){return j(h(l,"tables",e,"sheets"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function $i(e,t){const{id:a,...r}=t,o=a?m(l,"tables",e,"sheets",a):m(h(l,"tables",e,"sheets"));return C(o,{ownerUid:null,...r,updatedAt:b()}).then(()=>o.id)}async function Li(e,t,a){const r=m(l,"tables",e,"sheets",a.id);try{await _r(l,async o=>{const n=await o.get(r),{id:i,...s}=n.exists()?ni(t,a,{id:n.id,...n.data()}):{ownerUid:null,...a};o.set(r,{...s,updatedAt:b()})})}catch(o){if((o==null?void 0:o.code)!=="unavailable"&&(o==null?void 0:o.code)!=="failed-precondition")throw o;const n=Object.fromEntries(Zt(t,a).map(i=>[i,a[i]===void 0?fn():a[i]]));a.history&&a.history!==(t==null?void 0:t.history)&&(n.history=a.history),await ee(r,{...n,updatedAt:b()})}}function Pi(e,t,a,r,o){const n=h(l,"tables",e,t,a,"versions");return j(I(n,K("at","desc"),J(20)),i=>r(i.docs.map(s=>({id:s.id,...s.data()}))),o)}async function Oi(e,t,a,r,o){const{id:n,...i}=r,s=h(l,"tables",e,t,a,"versions");await C(m(s,n),i);const d=(await $(I(s,K("at","desc")))).docs.slice(o);if(d.length){const p=D(l);d.forEach(g=>p.delete(g.ref)),await p.commit()}}async function tr(e,t){const a=await $(h(l,"tables",e,t));for(const r of a.docs){const o=await $(h(r.ref,"versions"));await pe(o.docs.map(n=>i=>i.delete(n.ref)))}}async function Di(e,t){return await Promise.all(["player","gm"].map(a=>U(m(l,"tables",e,"sheets",t,"private",a)).catch(()=>{}))),U(m(l,"tables",e,"sheets",t))}function Fi(e,t,a,r,o){return j(m(l,"tables",e,"sheets",t,"private",a),n=>r(n.exists()&&n.data().notes||""),o)}function Bi(e,t,a,r){return C(m(l,"tables",e,"sheets",t,"private",a),{notes:String(r||"").slice(0,4e3),updatedAt:b()})}const ze=new Map;async function Ui(e){var t,a;if(!ze.has(e)){const r=await O(m(l,"tables",e,"rate",_().uid)).catch(()=>null),o=r!=null&&r.exists()?r.data():null;ze.set(e,o?{windowStart:(a=(t=o.windowStart)==null?void 0:t.toMillis)==null?void 0:a.call(t),count:o.count}:null)}return ze.get(e)}function Gi(e,t,a){const r=_().uid,o=m(l,"tables",t,"rate",r);a==="increment"?e.update(o,{count:bn(1),updatedAt:b()}):e.set(o,{uid:r,windowStart:b(),count:1,updatedAt:b()})}async function Vr(e,t){const a=await Ui(e),r=Bn(a,Date.now()),o=r==="blocked"?"reset":r,n=async i=>{const s=D(l);t(s),Gi(s,e,i),await s.commit();const c=ze.get(e);ze.set(e,i==="increment"&&c?{...c,count:c.count+1}:{windowStart:Date.now(),count:1})};try{await n(o)}catch(i){if((i==null?void 0:i.code)!=="permission-denied"&&(i==null?void 0:i.code)!=="not-found")throw i;ze.delete(e);try{await n(o==="increment"?"reset":"increment")}catch(s){throw(s==null?void 0:s.code)==="permission-denied"&&r==="blocked"?Object.assign(new Error(Un),{code:"rate-limited"}):s}}}async function Vi(e,{name:t,mime:a,bytes:r,dataUrl:o,visibility:n="public",to:i=null}){const s=m(h(l,"tables",e,"chatFiles"));return await C(s,{uid:_().uid,name:t,mime:String(a||"").slice(0,80),bytes:r,visibility:n,to:i,dataUrl:o,createdAt:b()}),s.id}async function qi(e,t){const a=await O(m(l,"tables",e,"chatFiles",t));if(!a.exists())throw new Error("Este anexo não está mais disponível.");return a.data().dataUrl}function Wi(e,t){return U(m(l,"tables",e,"chatFiles",t))}function Yi(e,{author:t,text:a,type:r="chat",visibility:o="public",roll:n=null,apply:i=null,to:s=null,toName:c=null,character:d=null,sound:p=null,celebrate:g=null,attachment:v=null,channel:M=null,item:S=null}){const y=_(),R=m(h(l,"tables",e,"messages"));return va("message",Vr(e,T=>{g&&T.set(m(l,"tables",e,"celebration","state"),{at:b(),uid:y.uid,by:String(t||"").slice(0,80)}),T.set(R,{uid:y.uid,author:t,text:a,type:r,visibility:o,roll:n,apply:i,to:s,toName:c,...d?{character:d}:{},...p?{sound:String(p).slice(0,60)}:{},...g?{celebrate:g}:{},...v?{attachment:v}:{},...M&&M!=="mesa"?{channel:M}:{},...S?{item:S}:{},createdAt:b()})}).then(()=>R))}function Hi(e,t,a,r){const o=_().uid;return ee(m(l,"tables",e,"messages",t),new gn("reactions",a),r?un(o):mn(o))}async function Ki(e,{isGm:t,uid:a},r,o=500){const n=h(l,"tables",e,"messages"),i=r?[P("createdAt",">=",ha.fromMillis(r))]:[],s=p=>p.docs.map(g=>({id:g.id,...g.data({serverTimestamps:"estimate"})})),c=t?[I(n,...i,K("createdAt","desc"),J(o))]:[I(n,P("visibility","==","public"),...i,K("createdAt","desc"),J(o)),I(n,P("uid","==",a),P("visibility","in",["gm","whisper"]),...i,K("createdAt","desc"),J(o)),I(n,P("to","==",a),...i,K("createdAt","desc"),J(o))],d=await Promise.all(c.map(p=>$(p)));return[...new Map(d.flatMap(s).map(p=>[p.id,p])).values()]}function Ji(e,{isGm:t,uid:a},r,o,n=80){const i=h(l,"tables",e,"messages"),s=y=>y.docs.map(R=>({id:R.id,...R.data({serverTimestamps:"estimate"})}));if(t)return j(I(i,K("createdAt","desc"),J(n)),y=>r(s(y).reverse()),o);let c=[],d=[],p=[];const g=()=>r([...new Map([...c,...d,...p].map(y=>[y.id,y])).values()].sort((y,R)=>{var T,x,G,X;return(((x=(T=y.createdAt)==null?void 0:T.toMillis)==null?void 0:x.call(T))||0)-(((X=(G=R.createdAt)==null?void 0:G.toMillis)==null?void 0:X.call(G))||0)}).slice(-n)),v=j(I(i,P("visibility","==","public"),K("createdAt","desc"),J(n)),y=>{c=s(y),g()},o),M=j(I(i,P("uid","==",a),P("visibility","in",["gm","whisper"]),K("createdAt","desc"),J(n)),y=>{d=s(y),g()},o),S=j(I(i,P("to","==",a),K("createdAt","desc"),J(n)),y=>{p=s(y),g()},o);return()=>{v(),M(),S()}}function Xi(e,t,a){return j(m(l,"tables",e,"private","gm"),r=>t(r.data()||{}),a)}function Zi(e,t,a,r){return j(m(l,"tables",e,"playerNotes",t),o=>{var n;return a(((n=o.data())==null?void 0:n.notes)||[])},r)}function Qi(e,t,a){return C(m(l,"tables",e,"playerNotes",t),{notes:a,updatedAt:b()})}function es(e,t){return C(m(l,"tables",e,"private","gm"),{...t,updatedAt:b()},{merge:!0})}function ts(e,t,a){return j(h(l,"tables",e,"locks"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function as(e,t,a){return C(m(l,"tables",e,"locks",t),{...a,updatedAt:b()})}async function rs(e,t){const a=await $(I(h(l,"tables",e,"locks"),P("markerId","==",t))),r=D(l);a.forEach(o=>r.delete(o.ref)),await r.commit()}function os(e,t,a){return C(m(l,"tables",e,"private","gm"),{lockCodes:{[t]:a},updatedAt:b()},{merge:!0})}function ns(e,t,a){return j(h(l,"tables",e,"scenes"),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function is(e,t){const{id:a,...r}=t;return C(m(l,"tables",e,"scenes",a),{...r,savedAt:b()})}function ss(e,t){return U(m(l,"tables",e,"scenes",t))}async function cs(e,{remove:t,add:a}){const r=D(l);t.forEach(o=>r.delete(m(l,"tables",e,"tokens",o.id))),a.forEach(o=>r.set(m(l,"tables",e,"tokens",o.id),{ownerUid:null,sheetId:null,...Qt(o),hidden:o.hidden??!!o.monster})),await r.commit()}function ls(e,{isGm:t,uid:a},r,o){const n=h(l,"tables",e,"handouts"),i=t?n:I(n,P("audience","array-contains-any",["all",a]));return j(i,s=>r(s.docs.map(c=>({id:c.id,...c.data({serverTimestamps:"estimate"})}))),o)}function ds(e,t){const{id:a,...r}=t;return C(m(l,"tables",e,"handouts",a),{...r,createdAt:b()})}function ps(e,t){return U(m(l,"tables",e,"handouts",t))}function fs(e,{isGm:t},a,r){const o=h(l,"tables",e,"containers"),n=t?o:I(o,P("opened","==",!0));return j(n,i=>a(Object.fromEntries(i.docs.map(s=>[s.id,s.data()]))),r)}function us(e,t,{contents:a,opened:r=!1}){return C(m(l,"tables",e,"containers",t),{contents:a,opened:r},{merge:!0})}function ms(e,t){return C(m(l,"tables",e,"containers",t),{ensured:!0},{merge:!0})}function gs(e,t){return U(m(l,"tables",e,"containers",t))}function bs(e,t,a){return ee(m(l,"tables",e,"containers",t),{opened:!0,openedBy:String(a).slice(0,80),openedAt:b()})}function hs(e,t,a,r){const o=m(l,"tables",e,"containers",t);return _r(l,async n=>{const i=await n.get(o),s=i.exists()?i.data().contents||[]:[],c=s.find(d=>d.id===a);if(!c)throw Object.assign(new Error("Alguém já pegou este item."),{code:"already-taken"});return n.update(o,{contents:s.filter(d=>d.id!==a),takenBy:String(r).slice(0,80)}),c})}function xs(e){const t=Object.fromEntries(Object.entries(e.context||{}).map(([a,r])=>[a,String(r??"").slice(0,80)]).slice(0,10));return ba(h(l,"errorReports"),{at:Number(e.at)||Date.now(),where:String(e.where||"").slice(0,60),message:String(e.message||"").slice(0,300),code:e.code?String(e.code).slice(0,60):null,stack:e.stack?String(e.stack).slice(0,2e3):null,context:t,createdAt:b()})}async function vs(e,t,a=200){const r=await $(I(h(l,"tables",e,"messages"),P("createdAt","<",ha.fromMillis(t)),K("createdAt"),J(a)));return await pe(r.docs.map(o=>n=>n.delete(o.ref))),r.size}async function qr(e=()=>{}){const t=_().uid,a=Qn(await Gr());for(const o of a.deleteTables)e("Apagando suas mesas…"),await Zr(o);for(const o of a.leaveTables)e("Saindo das mesas em que você joga…"),await U(m(l,"tables",o,"members",t)).catch(()=>{});e("Apagando sua biblioteca e seu perfil…"),await Br(t).catch(()=>{});const r=await $(h(l,"users",t,"library"));return await pe(r.docs.map(o=>n=>n.delete(o.ref))),await U(m(l,"users",t)),a}function ys(e,{actor:t,action:a,detail:r=""}){return ba(h(l,"tables",e,"audit"),{uid:_().uid,actor:String(t).slice(0,80),action:String(a).slice(0,40),detail:String(r).slice(0,200),createdAt:b()})}function ws(e,t,a){return j(I(h(l,"tables",e,"audit"),K("createdAt","desc"),J(50)),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function Ss(e,t,a){return ee(m(l,"tables",e,"members",t),{permissions:a})}function ks(e,t,a){return ee(m(l,"tables",e,"members",t),{muted:!!a})}async function As(e,t){return await C(m(l,"tables",e,"bans",t.uid),{uid:t.uid,displayName:String(t.displayName||"").slice(0,80),at:b()}),Xr(e,t)}function Es(e,t){return U(m(l,"tables",e,"messages",t))}function Ms(e,t,a){return ee(m(l,"tables",e,"messages",t),{text:a,editedAt:b()})}function Ts(e,t,a){const{displayName:r,color:o,pronouns:n,avatar:i}=a;return ee(m(l,"tables",e,"members",t),{...r?{displayName:r}:{},color:o,pronouns:n,avatar:i})}function Is(e,t,a){return ee(m(l,"tables",e,"members",t),{role:a})}function js(e,t){const a=_().uid;return j(h(l,"users",a,"library"),r=>e(r.docs.map(o=>({...o.data(),id:o.id}))),t)}function Cs(e){const t=_().uid,{id:a,...r}=e;return C(m(l,"users",t,"library",a),{...r,createdAt:b()})}function _s(e){return U(m(l,"users",_().uid,"library",e))}function zs(e,t,a){return j(h(l,"tables",e,"presence"),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function Ns(e,{name:t,activity:a}){const r=_().uid,o={uid:r,name:String(t||"Jogador").slice(0,80),lastSeen:b()};return a!==void 0&&Object.assign(o,{activity:a,activityAt:b()}),C(m(l,"tables",e,"presence",r),o,{merge:!0})}function Rs(e,t,a){return j(I(h(l,"tables",e,"journal"),K("createdAt","desc"),J(100)),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function $s(e,{title:t,text:a,author:r}){return ba(h(l,"tables",e,"journal"),{title:t,text:a,author:r,uid:_().uid,createdAt:b()})}function Ls(e,t){return U(m(l,"tables",e,"journal",t))}function Ps(e,t,a){return C(m(l,"tables",e,"private","gm"),{sceneNotes:{[t]:a},updatedAt:b()},{merge:!0})}function Os(e,t,a){return j(h(l,"tables",e,"drawings"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Ds(e,t){const a=_(),{id:r,...o}=t;return C(m(l,"tables",e,"drawings",r),{...o,uid:a.uid,createdAt:b()})}function Fs(e,t){return U(m(l,"tables",e,"drawings",t))}async function Bs(e,t){for(let a=0;a<t.length;a+=450){const r=D(l);t.slice(a,a+450).forEach(o=>r.delete(m(l,"tables",e,"drawings",o.id))),await r.commit()}}async function pe(e,t=400){for(let a=0;a<e.length;a+=t){const r=D(l);e.slice(a,a+t).forEach(o=>o(r)),await r.commit()}}function Us(e,t,a){return j(I(h(l,"tables",e,"mapImages"),K("createdAt","desc")),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}async function Gs(e,{name:t,dataUrl:a,bytes:r,width:o,height:n,thumb:i=null}){const s=m(h(l,"tables",e,"mapImages")),c=ya(a);return await pe(c.map((d,p)=>g=>g.set(m(s,"chunks",String(p)),{index:p,data:d})),4),await C(s,{name:t,bytes:r,width:o,height:n,chunkCount:c.length,...Ln(i)?{thumb:i}:{},uid:_().uid,createdAt:b()}),s.id}async function Vs(e,t){const a=await $(h(l,"tables",e,"mapImages",t,"chunks"));if(a.empty)throw new Error("Mapa não encontrado.");return wa(a.docs.map(r=>r.data()))}async function Wr(e,t){const a=await $(h(l,"tables",e,"mapImages",t,"chunks")),r=D(l);a.forEach(o=>r.delete(o.ref)),r.delete(m(l,"tables",e,"mapImages",t)),await r.commit()}function qs(e,t,a){return j(I(h(l,"tables",e,"audioFiles"),K("createdAt","desc")),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}async function Ws(e,{name:t,kind:a,dataUrl:r,bytes:o}){const n=m(h(l,"tables",e,"audioFiles")),i=ya(r);return await pe(i.map((s,c)=>d=>d.set(m(n,"chunks",String(c)),{index:c,data:s})),4),await C(n,{name:t,kind:a,bytes:o,chunkCount:i.length,uid:_().uid,createdAt:b()}),n.id}async function Ys(e,t){const a=await $(h(l,"tables",e,"audioFiles",t,"chunks"));if(a.empty)throw new Error("Áudio não encontrado.");return wa(a.docs.map(r=>r.data()))}async function Yr(e,t){const a=await $(h(l,"tables",e,"audioFiles",t,"chunks")),r=D(l);a.forEach(o=>r.delete(o.ref)),r.delete(m(l,"tables",e,"audioFiles",t)),await r.commit()}function Hs(e,t,a){return j(I(h(l,"tables",e,"campaignFiles"),K("createdAt","desc")),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}async function Ks(e,{name:t,fileName:a,mime:r,bytes:o,description:n,dataUrl:i}){const s=m(h(l,"tables",e,"campaignFiles")),c=ya(i);return await pe(c.map((d,p)=>g=>g.set(m(s,"chunks",String(p)),{index:p,data:d})),4),await C(s,{name:t,fileName:a,mime:r,bytes:o,description:n,chunkCount:c.length,uid:_().uid,createdAt:b()}),s.id}async function Js(e,t){const a=await $(h(l,"tables",e,"campaignFiles",t,"chunks"));if(a.empty)throw new Error("Arquivo não encontrado.");return wa(a.docs.map(r=>r.data()))}async function Hr(e,t){const a=await $(h(l,"tables",e,"campaignFiles",t,"chunks")),r=D(l);a.forEach(o=>r.delete(o.ref)),r.delete(m(l,"tables",e,"campaignFiles",t)),await r.commit()}function Xs(e,t,a){return j(h(l,"tables",e,"sheetImages"),r=>t(Object.fromEntries(r.docs.map(o=>[o.id,o.data()]))),a)}function Zs(e,t,{portrait:a,avatar:r,animated:o=null,cutout:n=!1}){return C(m(l,"tables",e,"sheetImages",t),{portrait:a,avatar:r,...o?{animated:o}:{},...n?{cutout:!0}:{},updatedAt:b()})}function Qs(e,t){return U(m(l,"tables",e,"sheetImages",t))}async function ec(e,t=0){const a=await O(Y(e)),{inviteCode:r,name:o}=a.data();let n=null;for(let c=0;c<5&&!n;c+=1){const d=jt();(await O(m(l,"invites",d))).exists()||(n=d)}if(!n)throw new Error("Não foi possível gerar um código. Tente de novo.");const i=D(l),s=Lr(t);return i.set(m(l,"invites",n),{tableId:e,tableName:o,gmName:String(_().displayName||"Mestre").slice(0,80),createdBy:_().uid,createdAt:b(),expiresAt:s?ha.fromMillis(s):null}),i.update(Y(e),{inviteCode:n,inviteExpiresAt:s,updatedAt:b()}),r&&i.delete(m(l,"invites",r)),await i.commit(),n}async function tc(e){const t=await O(Y(e)),{inviteCode:a}=t.data(),r=D(l);a&&r.delete(m(l,"invites",a)),r.update(Y(e),{inviteCode:null,inviteExpiresAt:null,updatedAt:b()}),await r.commit()}async function ac(e){const t=await O(Y(e)),{streamCode:a,name:r}=t.data(),o=jt(16),n=D(l);return n.set(m(l,"invites",o),{tableId:e,tableName:r,gmName:String(_().displayName||"Mestre").slice(0,80),createdBy:_().uid,createdAt:b(),stream:!0}),n.update(Y(e),{streamCode:o,updatedAt:b()}),a&&n.delete(m(l,"invites",a)),await n.commit(),a&&await Kr(e),o}async function rc(e){const t=await O(Y(e)),{streamCode:a}=t.data(),r=D(l);a&&r.delete(m(l,"invites",a)),r.update(Y(e),{streamCode:null,updatedAt:b()}),await r.commit(),await Kr(e)}async function Kr(e){const t=await $(I(h(Y(e),"members"),P("stream","==",!0)));await pe(t.docs.map(a=>r=>r.delete(a.ref)))}async function Jr(e){const t=_(),a=String(e||"").trim().toUpperCase(),r=await O(m(l,"invites",a));if(!r.exists()||!r.data().stream)throw new Error("Link de transmissão inválido ou revogado.");const{tableId:o,tableName:n}=r.data(),i=m(l,"tables",o,"members",t.uid),s=await O(i).catch(()=>null);return s!=null&&s.exists()?{tableId:o,tableName:n}:(await C(i,{uid:t.uid,role:"spectator",displayName:t.displayName||"Transmissão",tableName:n,inviteCode:a,guest:!!t.isAnonymous,stream:!0,joinedAt:b()}),{tableId:o,tableName:n})}async function Xr(e,t){const a=Y(e),[r,o]=await Promise.all([$(I(h(a,"sheets"),P("ownerUid","==",t.uid))),$(I(h(a,"tokens"),P("ownerUid","==",t.uid)))]);return await Vr(e,n=>{n.delete(m(a,"members",t.uid)),r.forEach(i=>n.update(i.ref,{ownerUid:null,owner:"Mestre",updatedAt:b()})),o.forEach(i=>n.update(i.ref,{ownerUid:null})),n.set(m(h(a,"messages")),{uid:_().uid,author:"Sistema",text:`${t.displayName||"Um jogador"} foi removido da mesa`,type:"system",visibility:"public",roll:null,apply:null,to:null,toName:null,createdAt:b()})}),{releasedSheets:r.size,releasedTokens:o.size}}async function Zr(e){const t=Y(e),a=await O(t),{inviteCode:r,streamCode:o}=a.data(),n=await O(Oe(e));for(const p of n.exists()?n.data().pages||[]:[])await U(m(l,"publicPages",p.code)).catch(()=>{});const i=await $(h(t,"mapImages"));for(const p of i.docs)await Wr(e,p.id);await tr(e,"sheets"),await tr(e,"scenes");const s=await $(h(t,"audioFiles"));for(const p of s.docs)await Yr(e,p.id);const c=await $(h(t,"campaignFiles"));for(const p of c.docs)await Hr(e,p.id);for(const p of["tokens","sheets","sheetImages","messages","drawings","private","containers","celebration","bans","locks","handouts","journal","scenes","presence","rate","audit"]){const g=await $(h(t,p));await pe(g.docs.map(v=>M=>M.delete(v.ref)))}r&&await U(m(l,"invites",r)),o&&await U(m(l,"invites",o));const d=await $(h(t,"members"));await pe(d.docs.map(p=>g=>g.delete(p.ref))),await U(t)}const Oe=e=>m(l,"tables",e,"private","publicPages");async function oc(e,t,a){const r=a.code||jt(16),o=await O(Oe(e)),n=[{...a,code:r},...(o.exists()?o.data().pages||[]:[]).filter(s=>s.code!==r)].slice(0,10),i=D(l);return i.set(m(l,"publicPages",r),{...t,tableId:e,createdBy:_().uid,expiresAt:a.expiresAt?new Date(a.expiresAt):null,updatedAt:b()}),i.set(Oe(e),{pages:n,updatedAt:b()}),await i.commit(),r}async function nc(e,t){const a=await O(Oe(e)),r=(a.exists()?a.data().pages||[]:[]).filter(n=>n.code!==t),o=D(l);o.delete(m(l,"publicPages",t)),o.set(Oe(e),{pages:r,updatedAt:b()}),await o.commit()}function ic(e,t,a){return j(Oe(e),r=>t(r.exists()?r.data().pages||[]:[]),a)}async function sc(e){try{const t=await O(m(l,"publicPages",e));return t.exists()?t.data():null}catch(t){if((t==null?void 0:t.code)==="permission-denied")return null;throw t}}const kp=Object.freeze(Object.defineProperty({__proto__:null,addDrawing:Ds,addJournalEntry:$s,assignSheetOwner:Ni,banMember:As,clearDrawings:Bs,createStreamLink:ac,createTable:vi,deleteAudioFile:Yr,deleteCampaignFile:Hr,deleteChatFile:Wi,deleteContainer:gs,deleteDrawing:Fs,deleteHandout:ps,deleteJournalEntry:Ls,deleteLibraryEntry:_s,deleteMapImage:Wr,deleteMessage:Es,deleteMyData:qr,deleteSceneSnapshot:ss,deleteSheet:Di,deleteSheetImages:Qs,deleteTable:Zr,deleteToken:_i,editMessage:Ms,ensureContainer:ms,fetchInvitePreview:yi,fetchPublicPage:sc,fetchSessionMessages:Ki,joinTableByInvite:Ur,joinTableByStreamCode:Jr,listMyTables:Gr,loadAudioFile:Ys,loadCampaignFile:Js,loadChatFile:qi,loadMapImage:Vs,logAudit:ys,mergeSaveSheet:Li,moveToken:ji,openContainer:bs,pruneMessages:vs,publishPublicPage:oc,reactToMessage:Hi,regenerateInvite:ec,removeMember:Xr,renameTable:wi,replaceSceneTokens:cs,replaceTableContent:zi,reportError:xs,resetLock:rs,revokeInvite:tc,revokePublicPage:nc,revokeStreamLink:rc,rotateToken:Ci,saveContainer:us,saveGmNotes:es,saveHandout:ds,saveLibraryEntry:Cs,saveLockCode:os,saveLockRecord:as,savePlayerNotes:Qi,saveSceneNote:Ps,saveSceneSnapshot:is,saveSheet:$i,saveSheetImages:Zs,saveSheetPrivate:Bi,saveToken:Ii,saveVersion:Oi,sendMessage:Yi,setMemberMuted:ks,setMemberPermissions:Ss,setMemberRole:Is,setTableArchived:Si,subscribeAudioFiles:qs,subscribeAudit:ws,subscribeCampaignFiles:Hs,subscribeContainers:fs,subscribeDrawings:Os,subscribeGmNotes:Xi,subscribeHandouts:ls,subscribeJournal:Rs,subscribeLibrary:js,subscribeLocks:ts,subscribeMapImages:Us,subscribeMembers:Ai,subscribeMessages:Ji,subscribePlayerNotes:Zi,subscribePresence:zs,subscribePublicPages:ic,subscribeScenes:ns,subscribeSheetImages:Xs,subscribeSheetPrivate:Fi,subscribeSheets:Ri,subscribeTable:ki,subscribeTokens:Ti,subscribeVersions:Pi,takeFromContainer:hs,updateCampaign:Ei,updateMemberProfile:Ts,updatePresence:Ns,updateTableState:Mi,uploadAudioFile:Ws,uploadCampaignFile:Ks,uploadChatFile:Vi,uploadMapImage:Gs},Symbol.toStringTag,{value:"Module"}));N&&(N.languageCode="pt");async function ot(e,t={}){var o;const a=m(l,"users",e.uid);if((await O(a)).exists()){await C(a,{lastLoginAt:b()},{merge:!0});return}await C(a,{displayName:t.displayName||e.displayName||((o=e.email)==null?void 0:o.split("@")[0])||"Aventureiro",email:e.email||null,photoURL:e.photoURL||null,createdAt:b(),lastLoginAt:b()})}function cc(e){return Sn(N,e)}async function Ap(e,t){const{user:a}=await hn(N,e,t);return await ot(a),a}async function Ep({name:e,email:t,password:a}){const{user:r}=await xn(N,t,a);return e&&await Mt(r,{displayName:e}),await ot(r,{displayName:e}),r}async function Mp(){const{user:e}=await yn(N,new wn);return await ot(e),e}async function Tp({name:e,inviteCode:t}){var n;const a=String(e||"").trim().slice(0,40);if(!a)throw Object.assign(new Error("Informe seu nome."),{code:"guest/no-name"});if(!String(t||"").trim())throw Object.assign(new Error("Informe o código de convite."),{code:"guest/no-code"});const r=(n=N.currentUser)!=null&&n.isAnonymous?N.currentUser:null,o=r||(await zr(N)).user;await Mt(o,{displayName:a}),await ot(o,{displayName:a});try{return await Ur(t)}catch(i){throw r||await o.delete().catch(()=>xa(N)),i}}async function Ip(e){const t=N.currentUser,a=t||(await zr(N)).user;t||(await Mt(a,{displayName:"Transmissão"}),await ot(a,{displayName:"Transmissão"}));try{return await Jr(e)}catch(r){throw t||await a.delete().catch(()=>xa(N)),r}}async function jp(e){const t=N.currentUser;t&&(await qr(e),e==null||e("Apagando a conta…"),await t.delete())}function Cp(e){return vn(N,e)}function lc(){return xa(N)}async function dc(e){const t=await O(m(l,"users",e));return t.exists()?t.data():null}async function pc({displayName:e,photo:t,avatarId:a,avatarColor:r}){const o=N.currentUser;if(!o)throw new Error("Entre na sua conta para editar o perfil.");e&&e!==o.displayName&&await Mt(o,{displayName:e}),await C(m(l,"users",o.uid),{displayName:e||o.displayName||null,photo:t,avatarId:a,avatarColor:r,updatedAt:b()},{merge:!0})}const fc={"auth/invalid-email":"E-mail inválido.","auth/invalid-credential":"E-mail ou senha incorretos.","auth/user-not-found":"E-mail ou senha incorretos.","auth/wrong-password":"E-mail ou senha incorretos.","auth/email-already-in-use":"Este e-mail já está cadastrado.","auth/weak-password":"A senha precisa ter pelo menos 6 caracteres.","auth/too-many-requests":"Muitas tentativas. Aguarde um pouco e tente de novo.","auth/popup-closed-by-user":"A janela de login foi fechada antes de concluir.","auth/popup-blocked":"O navegador bloqueou a janela de login. Libere pop-ups para este site.","auth/network-request-failed":"Falha de conexão. Verifique sua internet.","auth/operation-not-allowed":"Este método de login não está ativado no Firebase.","auth/admin-restricted-operation":"A entrada sem conta não está ativada no Firebase (Authentication › Sign-in method › Anônimo).","guest/no-name":"Informe seu nome.","permission-denied":"Não foi possível entrar nesta mesa. Confira o código; se você foi bloqueado pelo Mestre, não dá para voltar.","auth/requires-recent-login":"Por segurança, saia, entre de novo e repita a exclusão.","guest/no-code":"Informe o código de convite."};function _p(e){return(e==null?void 0:e.message)==="Convite inválido ou expirado."?e.message:fc[e==null?void 0:e.code]||"Não foi possível concluir. Tente novamente."}const uc=["#6d52be","#2f7280","#b36154","#4d7a3f","#a0742c","#7c4b62","#3d5fa8","#8a3f8f","#4b4f5c"],zp=["ela/dela","ele/dele","elu/delu"],Qr=40,mc=24,eo=4e4,gc=/^#[0-9a-f]{6}$/i;function Ea(e){return typeof e=="string"&&gc.test(e)}function Np(e={}){const t=String(e.displayName||"").trim().slice(0,Qr),a=String(e.pronouns||"").trim().slice(0,mc),r=typeof e.avatar=="string"&&e.avatar.startsWith("data:image/")&&e.avatar.length<=eo?e.avatar:null;return{displayName:t||null,pronouns:a||null,color:Ea(e.color)?e.color.toLowerCase():null,avatar:r}}function Rp(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"?":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}const bc=[{id:"dragao",emoji:"🐉",label:"Dragão"},{id:"mago",emoji:"🧙",label:"Mago"},{id:"elfo",emoji:"🧝",label:"Elfo"},{id:"caveira",emoji:"💀",label:"Caveira"},{id:"fantasma",emoji:"👻",label:"Fantasma"},{id:"lobo",emoji:"🐺",label:"Lobo"},{id:"coruja",emoji:"🦉",label:"Coruja"},{id:"gato",emoji:"🐈‍⬛",label:"Gato preto"},{id:"espadas",emoji:"⚔️",label:"Espadas"},{id:"escudo",emoji:"🛡️",label:"Escudo"},{id:"dado",emoji:"🎲",label:"Dado"},{id:"lua",emoji:"🌙",label:"Lua"}],ea=uc;function to(e){return bc.find(t=>t.id===e)||null}function hc(e,t=ea[0]){const a=to(e);if(!a)return null;const o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${Ea(t)?t:ea[0]}"/><text x="32" y="43" font-size="34" text-anchor="middle">${a.emoji}</text></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(o)}`}function ar(e={}){const t=String(e.displayName||"").trim().slice(0,Qr)||null,a=to(e.avatarId)?e.avatarId:null,r=a&&Ea(e.avatarColor)?e.avatarColor.toLowerCase():null;let o=typeof e.photo=="string"&&e.photo.startsWith("data:image/")&&e.photo.length<=eo?e.photo:null;return a&&(o=hc(a,r||ea[0])),{displayName:t,photo:o,avatarId:a,avatarColor:r}}function $p(e,t){return(e==null?void 0:e.photo)||(t==null?void 0:t.photoURL)||null}function Lp(e,t){return(e==null?void 0:e.displayName)||(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||""}const ao=L.createContext({user:null,profile:null,loading:!1,enabled:!1,logout:async()=>{},saveProfile:async()=>{}});function xc({children:e}){const[t,a]=L.useState(null),[r,o]=L.useState(mt),[n,i]=L.useState(null);L.useEffect(()=>{if(mt)return cc(p=>{a(p),o(!1)})},[]),L.useEffect(()=>{if(i(null),!t)return;let p=!0;return dc(t.uid).then(g=>{p&&g&&i(ar({...g,displayName:g.displayName||t.displayName}))}).catch(()=>{}),()=>{p=!1}},[t==null?void 0:t.uid]);const s=async p=>{const g=ar(p);if(!g.displayName)throw new Error("Escolha um nome.");return await pc(g),i(g),g},c=async()=>{t!=null&&t.isAnonymous&&!window.confirm("Você entrou sem conta. Ao sair, perde o acesso a esta mesa e precisará do convite de novo. Sair mesmo assim?")||await lc()},d=L.useMemo(()=>({user:t,profile:n,loading:r,enabled:mt,logout:c,saveProfile:s}),[t,n,r]);return f.jsx(ao.Provider,{value:d,children:e})}function vc(){return L.useContext(ao)}const rr=50,yc=5,_e=[];let wt={},ta=null,or=0;function wc(e){wt={...wt,...e}}function Pp(e){ta=e}const ft=(e,t)=>String(e||"").slice(0,t);function Sc(e,t,a=wt,r=Date.now()){const o=(e==null?void 0:e.message)||(typeof e=="string"?e:"Erro desconhecido");return{at:r,where:ft(t,60),message:ft(o,300),code:ft(e==null?void 0:e.code,60)||null,stack:ft(e==null?void 0:e.stack,2e3)||null,context:{...a}}}function aa(e,t="app"){const a=Sc(e,t);return _e.push(a),_e.length>rr&&_e.splice(0,_e.length-rr),ta&&or<yc&&(or+=1,Promise.resolve().then(()=>ta(a)).catch(()=>{})),a}function nr(){return[..._e]}function ro(){return JSON.stringify({geradoEm:new Date().toISOString(),contexto:wt,erros:_e},null,2)}function kc(e=globalThis.window){!(e!=null&&e.addEventListener)||e.__nighttableErrors||(e.__nighttableErrors=!0,e.addEventListener("error",t=>aa(t.error||t.message,"janela")),e.addEventListener("unhandledrejection",t=>aa(t.reason,"promessa")))}class Ac extends Q.Component{constructor(a){super(a);Va(this,"copy",async()=>{try{await navigator.clipboard.writeText(ro()),this.setState({copied:!0})}catch{}});this.state={failed:!1,copied:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(a,r){aa(Object.assign(a||new Error("Falha na tela"),{stack:`${(a==null?void 0:a.stack)||""}
${(r==null?void 0:r.componentStack)||""}`}),"tela")}render(){if(!this.state.failed)return this.props.children;const a={padding:"9px 16px",border:0,borderRadius:9,color:"#fff",background:"var(--c-7358d0)",fontSize:13,cursor:"pointer"};return f.jsx("main",{role:"alert",style:{height:"100dvh",overflowY:"auto",display:"grid",placeItems:"center",padding:24,color:"var(--c-e7e5e2)",background:"var(--c-0a0b0f)",fontFamily:"system-ui, sans-serif"},children:f.jsxs("div",{style:{maxWidth:440,display:"grid",gap:12,textAlign:"center"},children:[f.jsx("h1",{style:{margin:0,fontSize:22},children:"Algo deu errado nesta tela"}),f.jsx("p",{style:{margin:0,color:"var(--c-a9adb6)",fontSize:14,lineHeight:1.5},children:"Seus dados da mesa estão salvos. Recarregue a página; se continuar, copie o relatório e envie para quem cuida do NightTable."}),f.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[f.jsx("button",{type:"button",style:a,onClick:()=>window.location.reload(),children:"Recarregar"}),f.jsx("button",{type:"button",style:{...a,background:"var(--c-2a2d36)"},onClick:this.copy,children:this.state.copied?"Relatório copiado":"Copiar relatório"})]})]})})}}const Ec={development:{label:"DEV",color:"#63d59a"},emulators:{label:"EMULADOR",color:"#7fe3ff"},staging:{label:"STAGING",color:"#f3c48f"},production:{label:null,color:null}};function Mc(e={}){const t=String(e.VITE_APP_ENV||"").trim().toLowerCase();return t in Ec?t:e.VITE_USE_FIREBASE_EMULATORS==="true"?"emulators":e.DEV?"development":"production"}const Tc={BASE_URL:"/nighttablesite/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyAojCR46U1f6Bivq7ogNUkQMReQZ8RPpmI",VITE_FIREBASE_APP_ID:"1:839551252957:web:f9a1f161e39ab7ebb85e34",VITE_FIREBASE_AUTH_DOMAIN:"nighttable-5621b.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-1Z4XL9CFYE",VITE_FIREBASE_MESSAGING_SENDER_ID:"839551252957",VITE_FIREBASE_PROJECT_ID:"nighttable-5621b",VITE_FIREBASE_STORAGE_BUCKET:"nighttable-5621b.firebasestorage.app",VITE_SERVER_ROLLS:"false",VITE_USE_FIREBASE_EMULATORS:"false"},Ic="09/10/2026";function jc(e=Tc||{}){return String(e.VITE_LEGAL_CONTACT||"").trim()||null}const St={privacidade:{title:"Política de privacidade",intro:"Esta política explica quais dados o NightTable guarda, para quê e como você pode apagá-los. Ela segue a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018).",sections:[["Quais dados guardamos",["Conta: nome de exibição, e-mail e, se você entrar com Google, a foto do perfil. Senhas ficam só no Firebase Authentication (Google) e nunca são vistas por nós.","Convidado sem conta: o nome que você digitou e um identificador anônimo deste navegador.","Conteúdo da mesa: o que você e os outros participantes criam — mensagens do chat, rolagens, fichas, mapas, imagens, áudios, desenhos, diário, handouts e anotações.","Perfil na mesa: nome, cor, pronome e avatar que você escolher para cada mesa.","Presença: se você está conectado e o que está fazendo no momento (digitando, rolando dados), para mostrar aos outros na mesa.","Registro de auditoria da mesa: ações do Mestre (convites, bloqueios, permissões), visível só aos Mestres."]],["Para que usamos",["Só para fazer a mesa funcionar: entrar, sincronizar em tempo real, guardar o histórico da campanha e aplicar as permissões de cada papel.","Não vendemos dados, não mostramos anúncios e não fazemos perfil de comportamento."]],["Quem vê o quê",["O conteúdo de uma mesa é visível para os participantes dela, conforme o papel (Mestre, co-Mestre, jogador, espectador). Sussurros e handouts privados ficam só com quem os recebe e com os Mestres quando aplicável.","O código de convite mostra o nome da mesa e do Mestre a quem tiver o código."]],["Onde os dados ficam",["No Google Firebase (Authentication e Cloud Firestore), que pode processar dados fora do Brasil, com as garantias contratuais do Google.","Neste navegador (localStorage): preferências, última mesa aberta, personagem escolhido e a biblioteca do modo local."]],["Serviços externos opcionais",["Relatórios de erro: desligados por padrão. Se você ativar em Ajuda e preferências, erros são enviados sem nome, e-mail ou conversas.","Discord: se o Mestre configurar um webhook, as rolagens da mesa são enviadas para o canal do Discord dele, sob a política do Discord.","Link de chamada de voz/vídeo: abre o serviço escolhido pelo Mestre (Discord, Meet etc.), com a política desse serviço."]],["Por quanto tempo",["Enquanto a mesa ou a conta existirem. O Mestre pode definir uma retenção do chat, e mensagens mais antigas são apagadas.","Ao excluir uma mesa, o conteúdo dela é apagado. Cópias em cache do navegador somem ao limpar os dados do site."]],["Seus direitos",['Você pode ver e corrigir seus dados (perfil e fichas), exportar fichas e campanhas em JSON, pedir ao Mestre para sair de uma mesa e excluir a conta em "Excluir minha conta", no lobby — isso apaga as mesas que você criou, sua biblioteca e seu perfil, e tira você das outras mesas.',"Mensagens que você enviou em mesas de outras pessoas ficam com a mesa; peça ao Mestre para apagá-las."]]]},termos:{title:"Termos de uso",intro:"Ao usar o NightTable você concorda com estes termos. Eles valem para quem mestra, joga ou assiste.",sections:[["O serviço",["O NightTable é uma mesa virtual de RPG. Ele é oferecido como está, sem garantia de disponibilidade contínua; faça cópias de segurança das campanhas importantes (Exportar campanha).","Recursos podem mudar ou ser retirados. Recursos experimentais ficam atrás de opções da mesa."]],["Sua conta",["Você é responsável pelo que acontece na sua conta e por guardar sua senha. Convidados sem conta perdem o acesso se apagarem os dados do navegador.","Para criar mesas é preciso ter uma conta cadastrada."]],["Conteúdo",["O que você envia (mapas, imagens, áudios, textos) continua seu. Você declara ter o direito de usá-lo e nos autoriza apenas a guardar e mostrar esse conteúdo aos participantes da mesa.","Não envie material de terceiros sem permissão, conteúdo ilegal, discurso de ódio, assédio, conteúdo sexual envolvendo menores ou dados pessoais de outras pessoas sem consentimento."]],["Convites e moderação",["Quem tem o código de convite entra na mesa. O Mestre é responsável por compartilhar o convite com cuidado e pode revogá-lo, silenciar, remover e bloquear participantes.","Podemos remover conteúdo ou contas que violem estes termos."]],["Limites",["Há limites técnicos de tamanho de imagens, áudios e mensagens, e um limite de mensagens em sequência, para manter o serviço no plano gratuito do Firebase.","Não tente contornar permissões, acessar mesas sem convite ou sobrecarregar o serviço."]],["Mudanças nestes termos",["Quando os termos mudarem, a data no topo será atualizada. Continuar usando depois disso significa aceitar a nova versão."]]]}};function oo(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Pe(t,a)}?pagina=${e}`}function Cc(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{const a=new URLSearchParams(e).get("pagina");return Object.hasOwn(St,a)?a:null}catch{return null}}const _c=8;function zc(e){const t=Array.isArray(e)?e:String(e||"").split(","),a=new Set;return t.map(r=>String(r||"").replace(/^#/,"").replace(/\s+/g," ").trim().slice(0,24)).filter(r=>r&&!a.has(r.toLowerCase())&&a.add(r.toLowerCase())).slice(0,_c)}function et(e){const t=e&&typeof e=="object"?e:{},a=(Array.isArray(t.sessions)?t.sessions:[]).filter(r=>r&&!Number.isNaN(Date.parse(r.at))).map(r=>({id:String(r.id||r.at),at:new Date(r.at).toISOString(),note:String(r.note||"").slice(0,140)})).sort((r,o)=>Date.parse(r.at)-Date.parse(o.at)).slice(-20);return{tagline:String(t.tagline||"").replace(/\s+/g," ").trim().slice(0,120),description:String(t.description||"").slice(0,2e3),image:typeof t.image=="string"&&t.image.startsWith("data:image/")?t.image:null,tags:zc(t.tags),sessions:a}}function Op({campaign:e,systemName:t}={},a=Date.now()){const r=et(e);return{tagline:r.tagline,systemName:t?String(t).slice(0,40):"",tags:r.tags,nextSession:no(r.sessions,a)[0]||null}}function no(e,t=Date.now(),a=4*36e5){return(e||[]).filter(r=>Date.parse(r.at)+a>t)}function Dp(e,{at:t,note:a=""},r=`session-${Date.now()}`){const o=et(e);return Number.isNaN(Date.parse(t))?o:et({...o,sessions:[...o.sessions,{id:r,at:t,note:a}]})}function Fp(e,t){const a=et(e);return{...a,sessions:a.sessions.filter(r=>r.id!==t)}}function Bp(e,t="pt-BR",a){return new Date(e).toLocaleString(t,{weekday:"short",day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}function Up(e,t=Date.now()){const a=Date.parse(e)-t;if(a<=0)return"agora";const r=a/36e5;if(r<1)return`em ${Math.max(1,Math.round(a/6e4))} min`;if(r<24)return`em ${Math.round(r)} h`;const o=Math.round(r/24);return o===1?"amanhã":`em ${o} dias`}const Ut=e=>e.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),ir=e=>String(e||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n");function Gp({uid:e,title:t,description:a="",at:r,durationMinutes:o=240}){const n=new Date(r),i=new Date(n.getTime()+o*6e4);return["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//NightTable//Agenda//PT","BEGIN:VEVENT",`UID:${e}@nighttable`,`DTSTAMP:${Ut(new Date)}`,`DTSTART:${Ut(n)}`,`DTEND:${Ut(i)}`,`SUMMARY:${ir(t)}`,`DESCRIPTION:${ir(a)}`,"END:VEVENT","END:VCALENDAR",""].join(`\r
`)}const Nc={scene:{label:"Apresentação de cena"},campaign:{label:"Página da campanha"}},Rc=4,Vp={maxSize:1600,maxBytes:56e4},$c=8e5,Lc=2e3,Ma="nighttable-public-pages",Ae=(e,t)=>String(e??"").trim().slice(0,t),Pc=e=>{var t;return e==null?null:typeof e=="number"?e:((t=e==null?void 0:e.toMillis)==null?void 0:t.call(e))??(e instanceof Date?e.getTime():null)};function qp(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Pe(t,a)}?publico=${encodeURIComponent(e)}`}function Oc(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{return(new URLSearchParams(e).get("publico")||"").trim().toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,32)||null}catch{return null}}function io(e){const t=Nc[e==null?void 0:e.kind]?e.kind:null,a=Ae(e==null?void 0:e.title,80);if(!t||!a)return null;const r=typeof(e==null?void 0:e.image)=="string"&&e.image.startsWith("data:image/")&&e.image.length<=$c?e.image:null;return{kind:t,title:a,subtitle:Ae(e==null?void 0:e.subtitle,120),text:Ae(e==null?void 0:e.text,Lc),image:r,systemName:Ae(e==null?void 0:e.systemName,40),tags:(Array.isArray(e==null?void 0:e.tags)?e.tags:[]).map(o=>Ae(o,24)).filter(Boolean).slice(0,8),sessions:(Array.isArray(e==null?void 0:e.sessions)?e.sessions:[]).filter(o=>!Number.isNaN(Date.parse(o==null?void 0:o.at))).slice(0,6).map(o=>({at:new Date(o.at).toISOString(),note:Ae(o.note,140)})),tableName:Ae(e==null?void 0:e.tableName,80)}}function Wp({tableName:e,scene:t,opening:a="",image:r=null,includeOpening:o=!0}){return io({kind:"scene",title:(t==null?void 0:t.name)||"Cena",subtitle:(t==null?void 0:t.subtitle)||"",text:o?a:"",image:r,tableName:e})}function Yp({tableName:e,campaign:t,systemName:a="",show:r={}},o=Date.now()){const n=et(t),{description:i=!0,cover:s=!0,sessions:c=!0}=r;return io({kind:"campaign",title:e,subtitle:n.tagline,text:i?n.description:"",image:s?n.image:null,systemName:a,tags:n.tags,sessions:c?no(n.sessions,o):[],tableName:e})}function Hp(e,t,{validityDays:a=0,now:r=Date.now()}={}){return{code:e,kind:t.kind,title:t.title,createdAt:r,expiresAt:Lr(a,r)}}function Kp(e,t=Date.now()){return Sa(Pc(e==null?void 0:e.expiresAt),t)}function Jp(e=Math.random){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let a="L";for(let r=0;r<15;r+=1)a+=t[Math.floor(e()*t.length)];return a}function so(e=globalThis.localStorage){try{const t=JSON.parse((e==null?void 0:e.getItem(Ma))||"{}");return t&&typeof t=="object"?t:{}}catch{return{}}}function Xp(e,t,a=globalThis.localStorage){const r={...so(a),[e]:t};let n=Object.keys(r).sort((i,s)=>(r[s].createdAt||0)-(r[i].createdAt||0)).slice(0,Rc);for(;n.length;)try{return a.setItem(Ma,JSON.stringify(Object.fromEntries(n.map(i=>[i,r[i]])))),n}catch{if(n.length===1)break;n=n.slice(0,-1)}throw new Error("Não coube neste navegador. Revogue um link antigo e tente de novo.")}function Zp(e,t=globalThis.localStorage){const a=so(t);delete a[e];try{t.setItem(Ma,JSON.stringify(a))}catch{}}function Qp(e,t="pt-BR"){return new Date(e).toLocaleString(t,{weekday:"long",day:"2-digit",month:"long",hour:"2-digit",minute:"2-digit"})}const Dc=ga(f.jsx("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded"),Fc=ga(f.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47"}),"HelpOutlineRounded");var z="-ms-",Xe="-moz-",E="-webkit-",co="comm",Ct="rule",Ta="decl",Bc="@import",Uc="@namespace",lo="@keyframes",Gc="@layer",po=Math.abs,Ia=String.fromCharCode,ra=Object.assign;function Vc(e,t){return V(e,0)^45?(((t<<2^V(e,0))<<2^V(e,1))<<2^V(e,2))<<2^V(e,3):0}function fo(e){return e.trim()}function le(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,a){return e.replace(t,a)}function gt(e,t,a){return e.indexOf(t,a)}function V(e,t){return e.charCodeAt(t)|0}function Te(e,t,a){return e.slice(t,a)}function se(e){return e.length}function uo(e){return e.length}function Ye(e,t){return t.push(e),e}function qc(e,t){return e.map(t).join("")}function sr(e,t){return e.filter(function(a){return!le(a,t)})}var _t=1,De=1,mo=0,oe=0,B=0,Ue="";function zt(e,t,a,r,o,n,i,s){return{value:e,root:t,parent:a,type:r,props:o,children:n,line:_t,column:De,length:i,return:"",siblings:s}}function xe(e,t){return ra(zt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ce(e){for(;e.root;)e=xe(e.root,{children:[e]});Ye(e,e.siblings)}function Wc(){return B}function Yc(){return B=oe>0?V(Ue,--oe):0,De--,B===10&&(De=1,_t--),B}function ce(){return B=oe<mo?V(Ue,oe++):0,De++,B===10&&(De=1,_t++),B}function ve(){return V(Ue,oe)}function bt(){return oe}function Nt(e,t){return Te(Ue,e,t)}function tt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hc(e){return _t=De=1,mo=se(Ue=e),oe=0,[]}function Kc(e){return Ue="",e}function Gt(e){return fo(Nt(oe-1,oa(e===91?e+2:e===40?e+1:e)))}function Jc(e){for(;(B=ve())&&B<33;)ce();return tt(e)>2||tt(B)>3?"":" "}function Xc(e,t){for(;--t&&ce()&&!(B<48||B>102||B>57&&B<65||B>70&&B<97););return Nt(e,bt()+(t<6&&ve()==32&&ce()==32))}function oa(e){for(;ce();)switch(B){case e:return oe;case 34:case 39:e!==34&&e!==39&&oa(B);break;case 40:e===41&&oa(e);break;case 92:ce();break}return oe}function Zc(e,t){for(;ce()&&e+B!==57;)if(e+B===84&&ve()===47)break;return"/*"+Nt(t,oe-1)+"*"+Ia(e===47?e:ce())}function Qc(e){for(;!tt(ve());)ce();return Nt(e,oe)}function el(e){return Kc(ht("",null,null,null,[""],e=Hc(e),0,[0],e))}function ht(e,t,a,r,o,n,i,s,c){for(var d=0,p=0,g=i,v=0,M=0,S=0,y=1,R=1,T=1,x=0,G="",X=o,F=n,W=r,k=G;R;)switch(S=x,x=ce()){case 40:if(S!=108&&V(k,g-1)==58){gt(k+=w(Gt(x),"&","&\f"),"&\f",po(d?s[d-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:k+=Gt(x);break;case 9:case 10:case 13:case 32:k+=Jc(S);break;case 92:k+=Xc(bt()-1,7);continue;case 47:switch(ve()){case 42:case 47:Ye(tl(Zc(ce(),bt()),t,a,c),c),(tt(S||1)==5||tt(ve()||1)==5)&&se(k)&&Te(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*y:s[d++]=se(k)*T;case 125*y:case 59:case 0:switch(x){case 0:case 125:R=0;case 59+p:T==-1&&(k=w(k,/\f/g,"")),M>0&&(se(k)-g||y===0&&S===47)&&Ye(M>32?lr(k+";",r,a,g-1,c):lr(w(k," ","")+";",r,a,g-2,c),c);break;case 59:k+=";";default:if(Ye(W=cr(k,t,a,d,p,o,s,G,X=[],F=[],g,n),n),x===123)if(p===0)ht(k,t,W,W,X,n,g,s,F);else{switch(v){case 99:if(V(k,3)===110)break;case 108:if(V(k,2)===97)break;default:p=0;case 100:case 109:case 115:}p?ht(e,W,W,r&&Ye(cr(e,W,W,0,0,o,s,G,o,X=[],g,F),F),o,F,g,s,r?X:F):ht(k,W,W,W,[""],F,0,s,F)}}d=p=M=0,y=T=1,G=k="",g=i;break;case 58:g=1+se(k),M=S;default:if(y<1){if(x==123)--y;else if(x==125&&y++==0&&Yc()==125)continue}switch(k+=Ia(x),x*y){case 38:T=p>0?1:(k+="\f",-1);break;case 44:s[d++]=(se(k)-1)*T,T=1;break;case 64:ve()===45&&(k+=Gt(ce())),v=ve(),p=g=se(G=k+=Qc(bt())),x++;break;case 45:S===45&&se(k)==2&&(y=0)}}return n}function cr(e,t,a,r,o,n,i,s,c,d,p,g){for(var v=o-1,M=o===0?n:[""],S=uo(M),y=0,R=0,T=0;y<r;++y)for(var x=0,G=Te(e,v+1,v=po(R=i[y])),X=e;x<S;++x)(X=fo(R>0?M[x]+" "+G:w(G,/&\f/g,M[x])))&&(c[T++]=X);return zt(e,t,a,o===0?Ct:s,c,d,p,g)}function tl(e,t,a,r){return zt(e,t,a,co,Ia(Wc()),Te(e,2,-2),0,r)}function lr(e,t,a,r,o){return zt(e,t,a,Ta,Te(e,0,r),Te(e,r+1,-1),r,o)}function go(e,t,a){switch(Vc(e,t)){case 5103:return E+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return E+e+e;case 4855:return E+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Xe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return E+e+Xe+e+z+e+e;case 5936:switch(V(e,t+11)){case 114:return E+e+z+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return E+e+z+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return E+e+z+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return E+e+z+e+e;case 6165:return E+e+z+"flex-"+e+e;case 5187:return E+e+w(e,/(\w+).+(:[^]+)/,E+"box-$1$2"+z+"flex-$1$2")+e;case 5443:return E+e+z+"flex-item-"+w(e,/flex-|-self/g,"")+(le(e,/flex-|baseline/)?"":z+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return E+e+z+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return E+e+z+w(e,"shrink","negative")+e;case 5292:return E+e+z+w(e,"basis","preferred-size")+e;case 6060:return E+"box-"+w(e,"-grow","")+E+e+z+w(e,"grow","positive")+e;case 4554:return E+w(e,/([^-])(transform)/g,"$1"+E+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,E+"$1"),/(image-set)/,E+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,E+"box-pack:$3"+z+"flex-pack:$3"),/space-between/,"justify")+E+e+e;case 4200:if(!le(e,/flex-|baseline/))return z+"grid-column-align"+Te(e,t)+e;break;case 2592:case 3360:return z+w(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,le(r.props,/grid-\w+-end/)})?~gt(e+(a=a[t].value),"span",0)?e:z+w(e,"-start","")+e+z+"grid-row-span:"+(~gt(a,"span",0)?le(a,/\d+/):+le(a,/\d+/)-+le(e,/\d+/))+";":z+w(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return le(r.props,/grid-\w+-start/)})?e:z+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,E+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(V(e,t+1)){case 109:if(V(e,t+4)!==45)break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+E+"$2-$3$1"+Xe+(V(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gt(e,"stretch",0)?go(w(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,n,i,s,c,d){return z+o+":"+n+d+(i?z+o+"-span:"+(s?c:+c-+n)+d:"")+e});case 4949:if(V(e,t+6)===121)return w(e,":",":"+E)+e;break;case 6444:switch(V(e,V(e,14)===45?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+E+(V(e,14)===45?"inline-":"")+"box$3$1"+E+"$2$3$1"+z+"$2box$3")+e;case 100:return w(e,":",":"+z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function kt(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function al(e,t,a,r){switch(e.type){case Gc:if(e.children.length)break;case Bc:case Uc:case Ta:return e.return=e.return||e.value;case co:return"";case lo:return e.return=e.value+"{"+kt(e.children,r)+"}";case Ct:if(!se(e.value=e.props.join(",")))return""}return se(a=kt(e.children,r))?e.return=e.value+"{"+a+"}":""}function rl(e){var t=uo(e);return function(a,r,o,n){for(var i="",s=0;s<t;s++)i+=e[s](a,r,o,n)||"";return i}}function ol(e){return function(t){t.root||(t=t.return)&&e(t)}}function nl(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case Ta:e.return=go(e.value,e.length,a);return;case lo:return kt([xe(e,{value:w(e.value,"@","@"+E)})],r);case Ct:if(e.length)return qc(a=e.props,function(o){switch(le(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ce(xe(e,{props:[w(o,/:(read-\w+)/,":"+Xe+"$1")]})),Ce(xe(e,{props:[o]})),ra(e,{props:sr(a,r)});break;case"::placeholder":Ce(xe(e,{props:[w(o,/:(plac\w+)/,":"+E+"input-$1")]})),Ce(xe(e,{props:[w(o,/:(plac\w+)/,":"+Xe+"$1")]})),Ce(xe(e,{props:[w(o,/:(plac\w+)/,z+"input-$1")]})),Ce(xe(e,{props:[o]})),ra(e,{props:sr(a,r)});break}return""})}}var Ne={},Vt,qt;const Fe=typeof process<"u"&&Ne!==void 0&&(Ne.REACT_APP_SC_ATTR||Ne.SC_ATTR)||"data-styled",bo="active",ho="data-styled-version",Rt="6.5.3",ja=`/*!sc*/
`,Ze=typeof window<"u"&&typeof document<"u";function dr(e){if(typeof process<"u"&&Ne!==void 0){const t=Ne[e];if(t!==void 0&&t!=="")return t!=="false"}}const il=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(qt=(Vt=dr("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Vt!==void 0?Vt:dr("SC_DISABLE_SPEEDY"))!==null&&qt!==void 0?qt:typeof process<"u"&&Ne!==void 0&&!1),xo="sc-keyframes-",sl={};function nt(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let xt=new Map,At=new Map,vt=1;const He=e=>{if(xt.has(e))return xt.get(e);for(;At.has(vt);)vt++;const t=vt++;return xt.set(e,t),At.set(t,e),t},cl=e=>At.get(e),ll=(e,t)=>{vt=t+1,xt.set(e,t),At.set(t,e)},Ca=Object.freeze([]),Be=Object.freeze({});function vo(e,t,a=Be){return e.theme!==a.theme&&e.theme||t||a.theme}const dl=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pl=/(^-|-$)/g;function yo(e){return e.replace(dl,"-").replace(pl,"")}const fl=/(a)(d)/gi,pr=e=>String.fromCharCode(e+(e>25?39:97));function _a(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=pr(t%52)+a;return(pr(t%52)+a).replace(fl,"$1-$2")}const na=5381,Me=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},wo=e=>Me(na,e);function za(e){return _a(wo(e)>>>0)}function ul(e){return e.displayName||e.name||"Component"}function ia(e){return typeof e=="string"&&!0}function ml(e){return ia(e)?`styled.${e}`:`Styled(${ul(e)})`}const So=Symbol.for("react.memo"),gl=Symbol.for("react.forward_ref"),bl={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},hl={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ko={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xl={[gl]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[So]:ko};function fr(e){return("type"in(t=e)&&t.type.$$typeof)===So?ko:"$$typeof"in e?xl[e.$$typeof]:bl;var t}const vl=Object.defineProperty,yl=Object.getOwnPropertyNames,wl=Object.getOwnPropertySymbols,Sl=Object.getOwnPropertyDescriptor,kl=Object.getPrototypeOf,Al=Object.prototype;function Ao(e,t,a){if(typeof t!="string"){const r=kl(t);r&&r!==Al&&Ao(e,r,a);const o=yl(t).concat(wl(t)),n=fr(e),i=fr(t);for(let s=0;s<o.length;++s){const c=o[s];if(!(c in hl||a&&a[c]||i&&c in i||n&&c in n)){const d=Sl(t,c);try{vl(e,c,d)}catch{}}}}return e}function it(e){return typeof e=="function"}const El=Symbol.for("react.forward_ref");function Na(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===El&&"styledComponentId"in e}function Ke(e,t){return e&&t?e+" "+t:e||t||""}function Et(e,t){return e.join("")}function at(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function sa(e,t,a=!1){if(!a&&!at(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=sa(e[r],t[r]);else if(at(t))for(const r in t)e[r]=sa(e[r],t[r]);return e}function Ra(e,t){Object.defineProperty(e,"toString",{value:t})}const Ml=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,n=o.length;let i=n;for(;e>=i;)if(i<<=1,i<0)throw nt(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(let s=n;s<i;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,n=t.length;o<n;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let n=r;n<o;n++)t+=this.tag.getRule(n)+ja;return t}},Tl=`style[${Fe}][${ho}="${Rt}"]`,Il=new RegExp(`^${Fe}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),ur=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,ca=e=>{if(!e)return document;if(ur(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(ur(t))return t}return document},jl=(e,t,a)=>{const r=a.split(",");let o;for(let n=0,i=r.length;n<i;n++)(o=r[n])&&e.registerName(t,o)},Cl=(e,t)=>{var a;const r=((a=t.textContent)!==null&&a!==void 0?a:"").split(ja),o=[];for(let n=0,i=r.length;n<i;n++){const s=r[n].trim();if(!s)continue;const c=s.match(Il);if(c){const d=0|parseInt(c[1],10),p=c[2];d!==0&&(ll(p,d),jl(e,p,c[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}},Wt=e=>{const t=ca(e.options.target).querySelectorAll(Tl);for(let a=0,r=t.length;a<r;a++){const o=t[a];o&&o.getAttribute(Fe)!==bo&&(Cl(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let qe=!1;function _l(){if(qe!==!1)return qe;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return qe=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return qe=t.getAttribute("content")||void 0}return qe=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Eo=(e,t)=>{const a=document.head,r=e||a,o=document.createElement("style"),n=(c=>{const d=Array.from(c.querySelectorAll(`style[${Fe}]`));return d[d.length-1]})(r),i=n!==void 0?n.nextSibling:null;o.setAttribute(Fe,bo),o.setAttribute(ho,Rt);const s=t||_l();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},zl=class{constructor(e,t){this.element=Eo(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;const o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let n=0,i=o.length;n<i;n++){const s=o[n];if(s.ownerNode===a)return s}throw nt(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Nl=class{constructor(e,t){this.element=Eo(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let mr=Ze;const Rl={isServer:!Ze,useCSSOMInjection:!il};class st{static registerId(t){return He(t)}constructor(t=Be,a={},r){this.options=Object.assign(Object.assign({},Rl),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ze&&mr&&(mr=!1,Wt(this)),Ra(this,()=>(o=>{const n=o.getTag(),{length:i}=n;let s="";for(let c=0;c<i;c++){const d=cl(c);if(d===void 0)continue;const p=o.names.get(d);if(p===void 0||!p.size)continue;const g=n.getGroup(c);if(g.length===0)continue;const v=Fe+".g"+c+'[id="'+d+'"]';let M="";for(const S of p)S.length>0&&(M+=S+",");s+=g+v+'{content:"'+M+'"}'+ja}return s})(this))}rehydrate(){!this.server&&Ze&&Wt(this)}reconstructWithOptions(t,a=!0){const r=new st(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Ze&&t.target!==this.options.target&&ca(this.options.target)!==ca(t.target)&&Wt(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new zl(r,o):new Nl(r,o))(this.options),new Ml(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){He(t),t.startsWith(xo)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(He(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(He(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const Mo=new WeakSet,$l={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ll(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in $l||e.startsWith("--")?String(t).trim():t+"px"}const Ee=47;function gr(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){const r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}const To=Symbol.for("sc-keyframes");function Pl(e){return typeof e=="object"&&e!==null&&To in e}function Io(e){return it(e)&&!(e.prototype&&e.prototype.isReactComponent)}const jo=e=>e==null||e===!1||e==="",Ol=Symbol.for("react.client.reference");function br(e){return e.$$typeof===Ol}function Co(e,t){for(const a in e){const r=e[a];e.hasOwnProperty(a)&&!jo(r)&&(Array.isArray(r)&&Mo.has(r)||it(r)?t.push(gr(a)+":",r,";"):at(r)?(t.push(a+" {"),Co(r,t),t.push("}")):t.push(gr(a)+": "+Ll(a,r)+";"))}}function ye(e,t,a,r,o=[]){if(jo(e))return o;const n=typeof e;if(n==="string")return o.push(e),o;if(n==="function"){if(br(e))return o;if(Io(e)&&t){const i=e(t);return ye(i,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let i=0;i<e.length;i++)ye(e[i],t,a,r,o);return o}return Na(e)?(o.push(`.${e.styledComponentId}`),o):Pl(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):br(e)?o:at(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Co(e,o),o):(o.push(e.toString()),o)}const Dl=wo(Rt);class Fl{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=Me(Dl,a),this.baseStyle=r,st.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let n="";for(let i=0;i<this.rules.length;i++){const s=this.rules[i];if(typeof s=="string")n+=s;else if(s)if(Io(s)){const c=s(t);typeof c=="string"?n+=c:c!=null&&c!==!1&&(n+=Et(ye(c,t,a,r)))}else n+=Et(ye(s,t,a,r))}if(n){this.dynamicNameCache||(this.dynamicNameCache=new Map);const i=r.hash?r.hash+n:n;let s=this.dynamicNameCache.get(i);if(!s){if(s=_a(Me(Me(this.baseHash,r.hash),n)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(i,s)}if(!a.hasNameForId(this.componentId,s)){const c=r(n,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,c)}o=Ke(o,s)}}return o}}const Bl=/&/g;function _o(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function Yt(e){const t=e.length;let a="",r=0,o=0,n=0,i=!1,s=!1;for(let c=0;c<t;c++){const d=e.charCodeAt(c);if(n!==0||i||d!==Ee||e.charCodeAt(c+1)!==42)if(i)d===42&&e.charCodeAt(c+1)===Ee&&(i=!1,c++);else if(d!==34&&d!==39||_o(e,c)){if(n===0)if(d===123)o++;else if(d===125){if(o--,o<0){s=!0;let p=c+1;for(;p<t;){const g=e.charCodeAt(p);if(g===59||g===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,c=p-1,r=p;continue}o===0&&(a+=e.substring(r,c+1),r=c+1)}else d===59&&o===0&&(a+=e.substring(r,c+1),r=c+1)}else n===0?n=d:n===d&&(n=0);else i=!0,c++}return s||o!==0||n!==0?(r<t&&o===0&&n===0&&(a+=e.substring(r)),a):e}function zo(e,t){const a=t+" ",r=","+a;for(let o=0;o<e.length;o++){const n=e[o];if(n.type==="rule"){n.value=(a+n.value).replaceAll(",",r);const i=n.props,s=[];for(let c=0;c<i.length;c++)s[c]=a+i[c];n.props=s}Array.isArray(n.children)&&n.type!=="@keyframes"&&zo(n.children,t)}return e}function Ul({options:e=Be,plugins:t=Ca}=Be){let a,r,o;const n=(v,M,S)=>S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?`.${a}`:v,i=t.slice();i.push(v=>{v.type===Ct&&v.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),v.props[0]=v.props[0].replace(Bl,r).replace(o,n))}),e.prefix&&i.push(nl),i.push(al);let s=[];const c=rl(i.concat(ol(v=>s.push(v)))),d=(v,M="",S="",y="&")=>{a=y,r=M,o=void 0;const R=function(x){const G=x.indexOf("//")!==-1,X=x.indexOf("}")!==-1;if(!G&&!X)return x;if(!G)return Yt(x);const F=x.length;let W="",k=0,A=0,Se=0,Ie=0,te=0,Ge=!1;for(;A<F;){const H=x.charCodeAt(A);if(H!==34&&H!==39||_o(x,A))if(Se===0)if(H===Ee&&A+1<F&&x.charCodeAt(A+1)===42){for(A+=2;A+1<F&&(x.charCodeAt(A)!==42||x.charCodeAt(A+1)!==Ee);)A++;A+=2}else if(H!==40)if(H!==41)if(Ie>0)A++;else if(H===42&&A+1<F&&x.charCodeAt(A+1)===Ee)W+=x.substring(k,A),A+=2,k=A,Ge=!0;else if(H===Ee&&A+1<F&&x.charCodeAt(A+1)===Ee){for(W+=x.substring(k,A);A<F&&x.charCodeAt(A)!==10;)A++;k=A,Ge=!0}else H===123?te++:H===125&&te--,A++;else Ie>0&&Ie--,A++;else Ie++,A++;else A++;else Se===0?Se=H:Se===H&&(Se=0),A++}return Ge?(k<F&&(W+=x.substring(k)),te===0?W:Yt(W)):te===0?x:Yt(x)}(v);let T=el(S||M?S+" "+M+" { "+R+" }":R);return e.namespace&&(T=zo(T,e.namespace)),s=[],kt(T,c),s},p=e;let g=na;for(let v=0;v<t.length;v++)t[v].name||nt(15),g=Me(g,t[v].name);return p!=null&&p.namespace&&(g=Me(g,p.namespace)),p!=null&&p.prefix&&(g=Me(g,"p")),d.hash=g!==na?g.toString():"",d}const Gl=new st,la=Ul(),No=Q.createContext({shouldForwardProp:void 0,styleSheet:Gl,stylis:la,stylisPlugins:void 0});No.Consumer;function Ro(){return Q.useContext(No)}const $a=Q.createContext(void 0);$a.Consumer;const hr=Object.prototype.hasOwnProperty,Ht={};function Vl(e,t){const a=typeof e!="string"?"sc":yo(e);Ht[a]=(Ht[a]||0)+1;const r=a+"-"+za(Rt+a+Ht[a]);return t?t+"-"+r:r}function ql(e,t,a){const r=Na(e),o=e,n=!ia(e),{attrs:i=Ca,componentId:s=Vl(t.displayName,t.parentComponentId),displayName:c=ml(e)}=t,d=t.displayName&&t.componentId?yo(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&o.attrs?o.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:g}=t;if(r&&o.shouldForwardProp){const y=o.shouldForwardProp;if(t.shouldForwardProp){const R=t.shouldForwardProp;g=(T,x)=>y(T,x)&&R(T,x)}else g=y}const v=new Fl(a,d,r?o.componentStyle:void 0);function M(y,R){return function(T,x,G){const{attrs:X,componentStyle:F,defaultProps:W,foldedComponentIds:k,styledComponentId:A,target:Se}=T,Ie=Q.useContext($a),te=Ro(),Ge=T.shouldForwardProp||te.shouldForwardProp,H=vo(x,Ie,W)||Be;let ue,Ve;{const me=Q.useRef(null),ne=me.current;if(ne!==null&&ne[1]===H&&ne[2]===te.styleSheet&&ne[3]===te.stylis&&ne[7]===F&&function(je,ie,ae){const re=je,Z=ie;let lt=0;for(const ke in Z)if(hr.call(Z,ke)&&(lt++,re[ke]!==Z[ke]))return!1;return lt===ae}(ne[0],x,ne[4]))ue=ne[5],Ve=ne[6];else{ue=function(ie,ae,re){const Z=Object.assign(Object.assign({},ae),{className:void 0,theme:re}),lt=ie.length>1;for(let ke=0;ke<ie.length;ke++){const Dt=ie[ke],dt=it(Dt)?Dt(lt?Object.assign({},Z):Z):Dt;for(const ge in dt)ge==="className"?Z.className=Ke(Z.className,dt[ge]):ge==="style"?Z.style=Object.assign(Object.assign({},Z.style),dt[ge]):ge in ae&&ae[ge]===void 0||(Z[ge]=dt[ge])}return"className"in ae&&typeof ae.className=="string"&&(Z.className=Ke(Z.className,ae.className)),Z}(X,x,H),Ve=F.generateAndInjectStyles(ue,te.styleSheet,te.stylis);let je=0;for(const ie in x)hr.call(x,ie)&&je++;me.current=[x,H,te.styleSheet,te.stylis,je,ue,Ve,F]}}const ct=ue.as||Se,Pt=function(me,ne,je,ie){const ae={};for(const re in me)me[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&me.theme===je||(re==="forwardedAs"?ae.as=me.forwardedAs:ie&&!ie(re,ne)||(ae[re]=me[re]));return ae}(ue,ct,H,Ge);let Ot=Ke(k,A);return Ve&&(Ot+=" "+Ve),ue.className&&(Ot+=" "+ue.className),Pt[ia(ct)&&ct.includes("-")?"class":"className"]=Ot,G&&(Pt.ref=G),L.createElement(ct,Pt)}(S,y,R)}M.displayName=c;let S=Q.forwardRef(M);return S.attrs=p,S.componentStyle=v,S.displayName=c,S.shouldForwardProp=g,S.foldedComponentIds=r?Ke(o.foldedComponentIds,o.styledComponentId):"",S.styledComponentId=d,S.target=r?o.target:e,Object.defineProperty(S,"defaultProps",{get(){return this._foldedDefaultProps},set(y){this._foldedDefaultProps=r?function(R,...T){for(const x of T)sa(R,x,!0);return R}({},o.defaultProps,y):y}}),Ra(S,()=>`.${S.styledComponentId}`),n&&Ao(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}var Wl=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function xr(e,t){const a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}const vr=e=>(Mo.add(e),e);function La(e,...t){if(it(e)||at(e))return vr(ye(xr(Ca,[e,...t])));const a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?ye(a):vr(ye(xr(a,t)))}function da(e,t,a=Be){if(!t)throw nt(1,t);const r=(o,...n)=>e(t,a,La(o,...n));return r.attrs=o=>da(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>da(e,t,Object.assign(Object.assign({},a),o)),r}const $o=e=>da(ql,e),u=$o;Wl.forEach(e=>{u[e]=$o(e)});class Yl{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const n=r[o];if(it(n)&&!Na(n))return!1}return!0}(t),st.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){const n=this.componentId;if(this.isStatic){if(r.hasNameForId(n,n+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{const s=this.computeRules(t,a,r,o);r.insertRules(n,s.name,s.rules)}return}const i=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&i){const s=i.rules,c=this.instanceRules.get(t).rules;if(s.length===c.length){let d=!0;for(let p=0;p<s.length;p++)if(s[p]!==c[p]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){const n=Et(ye(this.rules,a,r,o)),i={name:this.componentId+t,rules:o(n,"")};return this.instanceRules.set(t,i),i}rebuildGroup(t){const a=this.componentId;t.clearRules(a);for(const r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}}function Lo(e,...t){const a=La(e,...t),r=`sc-global-${za(JSON.stringify(a))}`,o=new Yl(a,r),n=s=>{const c=Ro(),d=Q.useContext($a);let p;{const g=Q.useRef(null);g.current===null&&(g.current=c.styleSheet.allocateGSInstance(r)),p=g.current}c.styleSheet.server&&i(p,s,c.styleSheet,d,c.stylis);{const g=o.isStatic?[p,c.styleSheet,o]:[p,s,c.styleSheet,d,c.stylis,o],v=Q.useRef(o);Q.useLayoutEffect(()=>{c.styleSheet.server||(v.current!==o&&(c.styleSheet.clearRules(r),v.current=o),i(p,s,c.styleSheet,d,c.stylis))},g),Q.useLayoutEffect(()=>()=>{c.styleSheet.server||o.removeStyles(p,c.styleSheet)},[p,c.styleSheet,o])}return c.styleSheet.server&&o.instanceRules.delete(p),null};function i(s,c,d,p,g){if(o.isStatic)o.renderStyles(s,sl,d,g);else{const v=Object.assign(Object.assign({},c),{theme:vo(c,p,n.defaultProps)});o.renderStyles(s,v,d,g)}}return Q.memo(n)}var Po;class Hl{constructor(t,a){this[Po]=!0,this.inject=(r,o=la)=>{const n=this.getName(o);if(!r.hasNameForId(this.id,n)){const i=o(this.rules,n,"@keyframes");r.insertRules(this.id,n,i)}},this.name=t,this.id=xo+t,this.rules=a,He(this.id),Ra(this,()=>{throw nt(12,String(this.name))})}getName(t=la){return t.hash?this.name+_a(+t.hash>>>0):this.name}}function ef(e,...t){const a=Et(La(e,...t)),r=za(a);return new Hl(r,a)}Po=To;const Kl=[{keys:["?"],action:"help",label:"Abrir a ajuda e os atalhos"},{keys:["Enter"],action:"focus-chat",label:"Escrever no chat"},{keys:["L"],action:"tool:free",label:"Lápis (desenho livre)"},{keys:["R"],action:"tool:measure",label:"Régua: medir distância"},{keys:["T"],action:"tool:text",label:"Texto no mapa"},{keys:["E"],action:"tool:erase",label:"Borracha"},{keys:["+"],action:"zoom-in",label:"Aproximar o mapa"},{keys:["-"],action:"zoom-out",label:"Afastar o mapa"},{keys:["0"],action:"zoom-reset",label:"Ver o mapa inteiro"},{keys:["M"],action:"toggle-mode",label:"Alternar visão de Mestre e de jogador",gmOnly:!0},{keys:["[","]"],action:null,label:"Girar o seu token (aponta a lanterna de mão)"},{keys:["S"],action:"stream",label:"Modo streaming (visão limpa para transmitir)"},{keys:["Esc"],action:null,label:"Sair da ferramenta ou desmarcar tokens"},{keys:["Ctrl","Z"],action:null,label:"Desfazer desenho"},{keys:["Ctrl","Y"],action:null,label:"Refazer desenho"},{keys:["roda"],action:null,label:"Zoom no ponto do cursor (Shift+roda desloca)"}],Jl={"?":"help",enter:"focus-chat",l:"tool:free",r:"tool:measure",t:"tool:text",e:"tool:erase","+":"zoom-in","=":"zoom-in","-":"zoom-out",0:"zoom-reset",m:"toggle-mode",s:"stream","[":"rotate-left","]":"rotate-right"};function Xl(e){if(!e)return!1;const t=String(e.tagName||"").toUpperCase();return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||!!e.isContentEditable}function tf(e,{isGm:t=!1}={}){var r,o,n;if(!e||e.ctrlKey||e.metaKey||e.altKey||e.repeat||Xl(e.target)||(o=(r=e.target)==null?void 0:r.closest)!=null&&o.call(r,'[role="dialog"]'))return null;const a=Jl[String(e.key||"").toLowerCase()]||null;return a==="focus-chat"&&!["BODY","HTML"].includes(String(((n=e.target)==null?void 0:n.tagName)||"").toUpperCase())||a==="toggle-mode"&&!t?null:a}const Zl=ga(f.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9"}),"CasinoRounded");function yr(e){let t=String(e).replace("#","");t.length===3&&(t=[...t].map(n=>n+n).join(""));const[a,r,o]=[0,2,4].map(n=>parseInt(t.slice(n,n+2),16)/255).map(n=>n<=.03928?n/12.92:((n+.055)/1.055)**2.4);return .2126*a+.7152*r+.0722*o}const Oo=["06070b","090a0d","0a0b0e","0a0b0f","0b0c10","0d0e12","0e0f13","0f1014","0f1a14","101116","111217","111318","121419","14161b","14161c","15171c","15232d","17191f","191b21","1a1209","1a1c22","1b1915","1b1d23","1b1d25","1d2027","1f2128","1f222a","20232b","211d37","21665f","242730","245a43","252831","26211b","262931","287a73","2a1d22","2a2118","2a2620","2a2d36","2a2e38","2d1e16","2d3038","343846","363943","3a3d46","3a3d48","3a3e48","3aa673","3d2864","3f8f66","434753","4b3777","4b4f5c","4fd1c5","503c1e","554376","555b66","56d28b","57d68d","5b2a30","6249c0","63d59a","666b76","6753bd","6b5a44","6d52be","6f59cf","7358d0","75d49b","7a552a","7d62ce","7e838f","848995","858a95","858b96","888d98","8a6230","8a8f99","8c2228","8c919b","8c919c","8cddb0","8d929d","8e6bff","8e7fd6","8e939e","8f86c9","8fd8b0","8fe3ae","9296a0","9297a3","9677ff","979aa5","9a4a5e","9a7bff","9a9ea8","9a9faa","9b7bff","9b7d7a","9c4ef3","9d93c9","9de4b9","9ea2ac","9edeb8","9fd8ff","9ff0e7","a0a5af","a28af3","a78cff","a795ff","a7abb4","a83a43","a8acb6","a995ff","a9a0ff","a9a4b8","a9adb6","aaa0ef","aeb2ba","b2b5be","b2b5bf","b35a6e","b7bac2","b8aaff","b98b67","b9abff","b9b8b6","b9bbc2","b9bcc5","be4372","beb2ff","bfc0c7","bfc1c7","c4b4ff","c6b9ff","c9c3ff","c9c9ca","cbbcff","cdbfff","cdeedb","cfc4ff","cfc8f5","d0ced0","d4ccff","d6d1c6","d6d4d0","d8cfff","d8d0ff","d8d2ff","d8d4cc","d9ccff","d9d6d3","db9189","dbd1ff","dcd9d2","ddd5ff","ddd8e6","dedbd3","dedbe1","e2b48d","e4e2dc","e58f48","e6dccb","e7e5e2","e7e6e4","e8d8b8","e8dccb","e8e6e1","e9d9ff","e9e3da","e9e4d9","e9e7e2","eab9b3","ebe5ff","ec9741","eceae4","edd8d5","eeece8","ef756a","efb1ab","efbd86","f04f4a","f07970","f09b95","f0a29b","f0ad61","f0bd86","f0e8d9","f0ece4","f0eeea","f1b17e","f1edff","f1efeb","f2ba85","f3a29b","f3b37d","f3b3aa","f3c48f","f3ead7","f4f2ef","f54843","f5f0e9","f8f7f5","fa6357","ffc896","ffd2cc","ffd38e","ffd49a","ffd9a8","ffe1b8","ffffff"],Do=[{id:"dark",label:"Escuro"},{id:"light",label:"Claro"},{id:"system",label:"Seguir o sistema"}],Pa=[{id:"violet",label:"Violeta",shift:0,swatch:"#9b7bff"},{id:"blue",label:"Azul",shift:-40,swatch:"#5f95ff"},{id:"teal",label:"Verde-água",shift:-100,swatch:"#3fbdb8"},{id:"green",label:"Verde",shift:-140,swatch:"#5fbf6a"},{id:"pink",label:"Rosa",shift:60,swatch:"#e46fb8"}];function Oa(e){return Do.some(t=>t.id===e)?e:"dark"}function Da(e){return Pa.some(t=>t.id===e)?e:"violet"}const Ql=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,ed=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;function Fa(e){const t=e.replace("#",""),[a,r,o]=[0,2,4].map(g=>Ql(parseInt(t.slice(g,g+2),16)/255)),n=Math.cbrt(.4122214708*a+.5363325363*r+.0514459929*o),i=Math.cbrt(.2119034982*a+.6806995451*r+.1073969566*o),s=Math.cbrt(.0883024619*a+.2817188376*r+.6299787005*o),c=.2104542553*n+.793617785*i-.0040720468*s,d=1.9779984951*n-2.428592205*i+.4505937099*s,p=.0259040371*n+.7827717662*i-.808675766*s;return{l:c,c:Math.hypot(d,p),h:(Math.atan2(p,d)*180/Math.PI+360)%360}}function wr({l:e,c:t,h:a}){const r=t*Math.cos(a*Math.PI/180),o=t*Math.sin(a*Math.PI/180),n=(e+.3963377774*r+.2158037573*o)**3,i=(e-.1055613458*r-.0638541728*o)**3,s=(e-.0894841775*r-1.291485548*o)**3;return[4.0767416621*n-3.3077115913*i+.2309699292*s,-1.2684380046*n+2.6097574011*i-.3413193965*s,-.0041960863*n-.7034186147*i+1.707614701*s]}function pa(e){const t=r=>wr({...e,c:r}).every(o=>o>=-5e-4&&o<=1.0005);let a=e.c;if(!t(a)){let r=0;for(let o=0;o<24;o+=1){const n=(r+a)/2;t(n)?r=n:a=n}a=r}return`#${wr({...e,c:a}).map(r=>Math.round(Math.min(1,Math.max(0,ed(Math.min(1,Math.max(0,r)))))*255).toString(16).padStart(2,"0")).join("")}`}function td(e){const{c:t,h:a}=Fa(e);return t>.05&&a>=270&&a<=315}const We=[[0,1],[.1,.99],[.35,.89],[.5,.6],[.7,.38],[1,.05]];function ad(e){for(let t=1;t<We.length;t+=1){const[a,r]=We[t],[o,n]=We[t-1];if(e<=a)return n+(e-o)/(a-o)*(r-n)}return We[We.length-1][1]}function rd(e){const t=Fa(e);if(t.c>.06&&t.l>=.35&&t.l<=.58)return`#${e.replace("#","").toLowerCase()}`;let a=ad(t.l);return t.c>.06&&t.l>.5&&(a=Math.max(a,.47)),pa({...t,l:a,c:t.l<.35?t.c*.5:t.c})}function od(e,t){const a=Fa(e),r=yr(e),o=(a.h+t+360)%360;let n=0,i=1,s=pa({...a,h:o});for(let c=0;c<22;c+=1){const d=(n+i)/2;s=pa({...a,l:d,h:o}),yr(s)<r?n=d:i=d}return s}function nd(e,{theme:t="dark",accent:a="violet"}={}){const r=Pa.find(n=>n.id===Da(a)).shift;let o=`#${e.replace("#","").toLowerCase()}`;return r&&td(o)&&(o=od(o,r)),t==="light"?rd(o):o}function id(e,t=!1){const a=Oa(e);return a==="system"?t?"light":"dark":a}function sd(e={}){return`:root{${Oo.map(a=>`--c-${a}:${nd(a,e)};`).join("")}}`}const cd=new Set(Oo);function yt(e){if(typeof e!="string"||!/^#[0-9a-fA-F]{6}$/.test(e))return e;const t=e.slice(1).toLowerCase();return cd.has(t)?`var(--c-${t})`:e}function ld({theme:e,accent:t}={},a=typeof document<"u"?document:null){var i,s;if(!a)return;const r=!!((s=(i=a.defaultView)==null?void 0:i.matchMedia)!=null&&s.call(i,"(prefers-color-scheme: light)").matches),o=id(e,r);let n=a.getElementById("nighttable-theme");n||(n=a.createElement("style"),n.id="nighttable-theme",a.head.appendChild(n)),n.textContent=sd({theme:o,accent:t}),a.documentElement.dataset.theme=o,a.documentElement.style.colorScheme=o}const dd=Lo`
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
`,af=u.div`
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
`,rf=u.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 20px;
  border-bottom: 1px solid var(--border);
  background: color-mix(in srgb, var(--c-0a0b0f) 95%, transparent);
  position: relative;
  z-index: 10;
`,pd=u.div`
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 220px;
`,fd=u.div`
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(135deg, var(--c-fa6357), var(--c-9c4ef3));
  border-radius: 10px 10px 10px 3px;
  box-shadow: 0 8px 22px color-mix(in srgb, var(--c-be4372) 24%, transparent);
`,ud=u.div`
  display: grid;
  gap: 1px;
  line-height: 1;
  strong { font-size: 15px; letter-spacing: -0.04em; }
  span { color: var(--c-8d929d); font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; }
`,of=u.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--c-111318);
`,nf=u.button`
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
`,sf=u.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-width: 220px;
`,cf=u.div`
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
`,lf=u.div`
  min-height: 0;
  display: grid;
  grid-template-columns: var(--dock-width) ${({$leftHidden:e})=>e?"0px":"calc(var(--left-rail) * var(--rail-scale, 1))"} minmax(0, 1fr) ${({$drawerOpen:e})=>e?"calc(var(--right-rail, 332px) * var(--rail-scale, 1) + var(--gm-nav, 0px) * var(--gm-nav-room, 1) * var(--text-zoom, 1))":"calc(54px * var(--text-zoom, 1))"};
  transition: grid-template-columns 220ms ease;
`,df=u.nav`
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
`,pf=u.aside`
  min-width: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
  background: var(--c-101116);
  /* Em telas baixas as seções não se sobrepõem: a coluna inteira rola. */
  overflow-x: hidden;
  overflow-y: auto;
`,md=u.section`
  flex: 0 0 auto;
  padding: 17px 16px;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 6.5%, transparent);
  @media (max-height: 760px) and (min-width: 761px) { padding-top: 12px; padding-bottom: 12px; }
  /* Com o chat fechado, o log ocupa o espaço que sobra na coluna. */
  ${({$grow:e})=>e&&"flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column;"}
`,ff=u.div`
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
`,uf=u.div`
  display: grid;
  gap: 9px;
  max-height: clamp(96px, 24vh, 260px);
  overflow-y: auto;
  padding-right: 3px;
`,mf=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`,gf=u.div`
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
`,bf=u.div`
  min-width: 0;
  flex: 1;
  display: grid;
  gap: 2px;
  strong { overflow: hidden; color: var(--c-e7e6e4); font-size: 12px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { overflow: hidden; color: var(--c-8d929d); font-size: 10px; text-overflow: ellipsis; white-space: nowrap; }
`,hf=u.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({$online:e})=>e?"var(--c-56d28b)":"var(--c-555b66)"};
  box-shadow: ${({$online:e})=>e?"0 0 0 3px color-mix(in srgb, var(--c-56d28b) 10%, transparent)":"none"};
`,xf=u(md)`
  /* Sem min-height: 0 — a seção nunca fica menor que o próprio conteúdo (e não invade o log). */
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`,vf=u.div`
  flex: 1 1 0;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 3px;
  .chat-older { align-self: center; padding: 4px 10px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent); border-radius: 999px; color: var(--c-b9abff); background: var(--c-17191f); font-size: 10px; cursor: pointer; }
`,yf=u.div`
  display: grid;
  gap: 3px;
  /* Mensagens fora da tela não são desenhadas pelo navegador até aparecerem. */
  content-visibility: auto;
  contain-intrinsic-size: auto 48px;
  .meta { display: flex; align-items: center; gap: 7px; color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.06em; }
  .bubble { color: var(--c-bfc1c7); font-size: 11px; line-height: 1.45; }
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
`,wf=u.div`
  min-height: 14px;
  margin-top: 8px;
  color: var(--c-8f86c9);
  font-size: 10px;
  font-style: italic;
  &:empty { visibility: hidden; }
`,Sf=u.form`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  padding: 5px 5px 5px 11px;
  border: 1px solid var(--c-666b76);
  border-radius: 10px;
  background: var(--c-191b21);
  &:focus-within { border-color: var(--c-b9abff); }
  input { min-width: 0; flex: 1; border: 0; outline: 0; color: var(--c-e7e5e2); background: transparent; font-size: 11px; }
  input::placeholder { color: var(--c-8d929d); }
  select { max-width: 92px; border: 0; border-right: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent); outline: 0; padding-right: 4px; color: var(--c-f3c48f); background: transparent; font-size: 10px; }
  select option { color: var(--c-e7e5e2); background: var(--c-191b21); }
  button { border: 0; color: var(--c-a9a0ff); background: transparent; cursor: pointer; display: grid; place-items: center; padding: 4px; }
`,kf=u.div`
  max-height: ${({$grow:e})=>e?"none":"clamp(72px, 16vh, 142px)"};
  ${({$grow:e})=>e&&"flex: 1 1 0; min-height: 72px;"}
  display: flex;
  flex-direction: column;
  gap: 9px;
  overflow-y: auto;
`,Af=u.div`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 6px;
  color: var(--c-848995);
  font-size: 10px;
  line-height: 1.35;
  .icon { color: ${({$accent:e})=>yt(e)||"var(--c-9a9faa)"}; margin-top: 1px; }
  time { display: block; margin-top: 3px; color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 8px; }
`,Ef=u.main`
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: var(--c-0e0f13);
`,Mf=u.div`
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
`,Tf=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 1 180px;
  min-width: 0;
  .scene-icon { width: 31px; height: 31px; display: grid; place-items: center; border-radius: 9px; color: var(--c-e9d9ff); background: color-mix(in srgb, var(--c-9677ff) 14%, transparent); }
  .text { min-width: 0; display: grid; gap: 3px; }
  strong { overflow: hidden; color: var(--c-f1efeb); font-size: 14px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.04em; text-transform: uppercase; }
`,If=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,jf=u.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
`;const Cf=u.span`
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
`,_f=u.div`
  display: flex;
  gap: 4px;
  margin: -4px 0 9px;
  button { padding: 3px 6px; border: 1px solid transparent; border-radius: 5px; color: var(--c-8d929d); background: transparent; cursor: pointer; font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; }
  button.active { color: var(--c-d8d0ff); border-color: color-mix(in srgb, var(--c-9b7bff) 28%, transparent); background: color-mix(in srgb, var(--c-9b7bff) 10%, transparent); }
`,zf=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
`,Nf=u.div`
  display: grid;
  gap: 6px;
`,Rf=u.div`
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
`,$f=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 5px;
  border-radius: 5px;
  color: var(--c-eab9b3);
  background: color-mix(in srgb, var(--c-f04f4a) 10%, transparent);
  font-size: 8px;
`,Lf=u.button`
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
`,Pf=u.span`
  min-width: 43px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  text-align: center;
`,Of=u.div`
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 18px;
  background: radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--c-554376) 11%, transparent), transparent 52%), var(--c-0d0e12);
`,Df=u.div`
  position: relative;
  min-height: 460px;
  height: 100%;
  min-width: 670px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 16px;
  background: #13151a;
  box-shadow: 0 25px 80px rgba(0,0,0,0.34), inset 0 0 0 1px rgba(255,255,255,0.025);
`,Ff=u.div`
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
`,q={objects:2,tokens:3,drawings:4,fog:5,partyAboveFog:6,fogEditor:7,interface:8},Bf=u.svg`
  position: absolute;
  inset: 0;
  z-index: ${q.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .fog-fill { fill: ${({$gm:e})=>e?"rgba(6, 7, 11, 0.5)":"rgba(6, 7, 11, 0.97)"}; }
  .fog-region { fill: none; stroke: rgba(240, 173, 97, 0.65); stroke-width: 1.5; stroke-dasharray: 6 5; }
  .fog-draft { fill: ${({$hide:e})=>e?"rgba(240, 79, 74, 0.16)":"rgba(255, 220, 160, 0.14)"}; stroke: ${({$hide:e})=>e?"#f07970":"#ffd49a"}; stroke-width: 1.5; stroke-dasharray: 4 4; }
`,Uf=u.svg`
  position: absolute;
  inset: 0;
  z-index: ${q.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .dark-area { fill: ${({$gm:e})=>e?"rgba(4, 5, 9, 0.55)":"#040509"}; stroke: ${({$gm:e})=>e?"rgba(185, 139, 103, 0.8)":"none"}; stroke-width: 1.5; stroke-dasharray: 6 4; }
  .dark-area.open { fill: rgba(4, 5, 9, 0.12); }
  .dark-area.draft { fill: rgba(4, 5, 9, 0.45); stroke: #e2b48d; }
`,Gf=u.svg`
  position: absolute;
  inset: 0;
  z-index: ${q.drawings};
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
`,Vf=u.svg`
  position: absolute;
  inset: 0;
  z-index: ${q.interface};
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  line, circle, polygon { fill: none; stroke: #ffe1b8; stroke-width: 2; stroke-dasharray: 7 5; }
  circle { fill: rgba(255, 212, 154, 0.07); }
  .aoe { fill: rgba(255, 212, 154, 0.18); }
  .measure-label { fill: #1a1209; font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 700; }
  .measure-badge { fill: #f3c48f; stroke: none; }
`,qf=u.div`
  position: absolute;
  inset: 0;
  z-index: ${q.fogEditor};
  cursor: ${({$tool:e})=>e==="text"?"text":"crosshair"};
  touch-action: none;
`,Wf=u.div`
  position: absolute;
  top: 86px;
  left: 18px;
  z-index: ${q.interface};
  display: grid;
  grid-template-columns: repeat(2, 30px);
  gap: 4px;
  padding: 5px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--c-0e0f13) 86%, transparent);
  backdrop-filter: blur(12px);
  .draw-divider { grid-column: 1 / -1; }
  button { width: 30px; height: 30px; display: grid; place-items: center; border: 1px solid transparent; border-radius: 7px; color: var(--c-9ea2ac); background: transparent; cursor: pointer; transition: 140ms ease; }
  button:hover { color: var(--c-ffffff); background: var(--c-1f2128); }
  button[aria-pressed='true'] { color: var(--c-ebe5ff); border-color: color-mix(in srgb, var(--c-9b7bff) 60%, transparent); background: color-mix(in srgb, var(--c-9b7bff) 16%, transparent); }
  button:disabled { opacity: 0.35; cursor: default; background: transparent; }
  .draw-divider { height: 1px; margin: 2px 3px; background: color-mix(in srgb, var(--c-ffffff) 8%, transparent); }
  .draw-swatch { width: 18px; height: 18px; margin: 0 auto; border-radius: 50%; border: 2px solid color-mix(in srgb, var(--c-ffffff) 15%, transparent); cursor: pointer; }
  .draw-swatch[aria-pressed='true'] { border-color: var(--c-ffffff); box-shadow: 0 0 0 2px color-mix(in srgb, var(--c-ffffff) 18%, transparent); }
`,Yf=u.svg`
  position: absolute;
  inset: 0;
  z-index: ${q.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .vision-dark { fill: ${({$gm:e})=>e?"rgba(4, 5, 9, 0.38)":"rgba(4, 5, 9, 0.95)"}; }
`,Hf=u.svg`
  position: absolute;
  inset: 0;
  z-index: ${q.partyAboveFog};
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
`,Kf=u.div`
  position: absolute;
  z-index: ${q.interface+1};
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
`,Jf=u.div`
  position: absolute;
  z-index: ${q.partyAboveFog};
  border: 2px dashed ${({$fired:e,$draft:t})=>t?"#9ff0e7":e?"rgba(111,116,127,0.7)":"rgba(79,209,197,0.8)"};
  border-radius: 8px;
  background: ${({$fired:e,$draft:t})=>t?"rgba(79,209,197,0.16)":e?"rgba(111,116,127,0.06)":"rgba(79,209,197,0.07)"};
  pointer-events: none;
  span { position: absolute; top: 4px; left: 6px; padding: 2px 6px; border-radius: 5px; color: ${({$fired:e})=>e?"#9a9faa":"#bff6ef"}; background: rgba(8, 20, 20, 0.75); font-family: 'DM Mono', monospace; font-size: 9px; white-space: nowrap; }
`,Xf=u.div`
  position: absolute;
  inset: 0;
  z-index: ${q.fogEditor};
  cursor: crosshair;
  touch-action: none;
`,Zf=u.div`
  position: absolute;
  left: 18px;
  bottom: 16px;
  z-index: ${q.interface};
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
`,Qf=u.span`
  position: absolute;
  left: ${({$x:e})=>`${e}%`};
  top: ${({$y:e})=>`${e}%`};
  z-index: ${q.interface};
  width: 24px;
  height: 24px;
  border: 2px solid #ffd49a;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 8px rgba(240,173,97,.18), 0 0 28px rgba(240,173,97,.75);
  pointer-events: none;
  animation: pingPulse 900ms ease-out both;
  @keyframes pingPulse { from { opacity: .95; transform: translate(-50%, -50%) scale(.5); } to { opacity: 0; transform: translate(-50%, -50%) scale(1.8); } }
`,eu=u.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: ${({$image:e})=>`linear-gradient(rgba(9,10,13,.2), rgba(9,10,13,.42)), url(${JSON.stringify(e)})`};
  background-size: cover;
  background-position: center;
  opacity: .9;
  mix-blend-mode: screen;
  /* Prévia: miniatura desfocada até o mapa inteiro chegar. */
  ${({$preview:e})=>e?"filter: blur(14px); transform: scale(1.06);":""}
`,tu=u.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.025) 50%, transparent 75%);
  mix-blend-mode: screen;
`,au=u.div`
  position: absolute;
  top: 22px;
  left: 24px;
  z-index: ${q.interface};
  display: grid;
  gap: 4px;
  pointer-events: none;
  .eyebrow { color: rgba(242, 218, 176, 0.66); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; }
  strong { color: rgba(255, 244, 222, 0.78); font-size: 21px; font-weight: 500; letter-spacing: -0.04em; }
`,ru=u.div`
  position: absolute;
  right: 18px;
  bottom: 16px;
  z-index: ${q.interface};
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
`,ou=u.button`
  position: absolute;
  left: ${({$x:e})=>`${e}%`};
  top: ${({$y:e})=>`${e}%`};
  z-index: ${q.objects};
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
  .marker-lock { position: absolute; right: -6px; bottom: -6px; width: 18px; height: 18px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; color: #1a1209; background: #f3b37d; }
`,Sr=({$monster:e,$activeTurn:t,$marked:a,$selected:r})=>r?"0 0 0 3px #9b7bff, 0 0 0 8px rgba(155,123,255,0.3)":t?"0 0 0 4px rgba(240,173,97,0.85), 0 0 22px rgba(240,173,97,0.55)":a?"0 0 0 4px rgba(255,212,154,0.55)":`0 0 0 5px ${e?"rgba(240,79,74,0.12)":"rgba(233,228,217,0.11)"}`,nu=u.button`
  position: absolute;
  /* left/top vêm do style do elemento: muda a cada arraste e não deve gerar uma classe nova por posição. */
  z-index: ${({$aboveFog:e})=>e?q.partyAboveFog:q.tokens};
  width: ${({$monster:e,$scale:t=1})=>`${Math.round((e?36:42)*t)}px`};
  height: ${({$monster:e,$scale:t=1})=>`${Math.round((e?36:42)*t)}px`};
  display: grid;
  place-items: center;
  font-size: ${({$scale:e=1})=>`${Math.round(13*Math.min(e,1.6))}px`};
  border: 2px ${({$hiddenToken:e})=>e?"dashed":"solid"} ${({$monster:e})=>e?"#f04f4a":"#e9e4d9"};
  border-radius: 50%;
  color: #fff;
  background: ${({$color:e})=>e||"#6f59cf"};
  box-shadow: ${Sr}, 0 12px 22px rgba(0,0,0,0.34);
  opacity: ${({$hiddenToken:e})=>e?.72:1};
  filter: ${({$defeated:e})=>e?"grayscale(1) brightness(0.6)":"none"};
  cursor: ${({$draggable:e})=>e?"grab":"default"};
  transform: translate(-50%, -50%);
  /* Quem vê o token de outra pessoa acompanha o movimento suavizado; quem arrasta vê o token preso ao cursor. */
  transition: ${({$dragging:e})=>e?"":"left 140ms linear, top 140ms linear, "}box-shadow 160ms ease, filter 160ms ease, opacity 160ms ease;
  &:active { cursor: ${({$draggable:e})=>e?"grabbing":"default"}; }
  &:hover { box-shadow: ${Sr}, 0 0 0 9px rgba(233,228,217,0.08), 0 12px 22px rgba(0,0,0,0.42); }
  small { position: absolute; top: calc(100% + 6px); left: 50%; transform: translateX(-50%); color: #dedbd3; font-family: 'DM Mono', monospace; font-size: 8px; white-space: nowrap; opacity: 0.82; pointer-events: none; }
  .token-face { position: absolute; inset: 0; display: grid; place-items: center; overflow: hidden; border-radius: 50%; transition: transform 200ms ease; pointer-events: none; }
  .token-locked { position: absolute; left: -5px; bottom: -5px; width: 15px; height: 15px; display: grid; place-items: center; border-radius: 50%; color: #1a1209; background: #f3b37d; pointer-events: none; }
  .token-avatar { position: absolute; inset: 0; width: 100%; height: 100%; border-radius: 50%; object-fit: cover; pointer-events: none; }
  /* Avatar com o fundo recortado: o personagem sai um pouco do círculo, com sombra própria. */
  .token-face:has(.token-avatar.cutout) { overflow: visible; }
  .token-avatar.cutout { border-radius: 0; object-fit: contain; transform: translateY(-14%) scale(1.25); filter: drop-shadow(0 2px 2px rgb(0 0 0 / 55%)); }
  .token-defeated { position: absolute; inset: -2px; display: grid; place-items: center; border-radius: 50%; color: #f07970; font-size: 22px; font-weight: 700; line-height: 1; pointer-events: none; }
  .token-turn { position: absolute; top: -9px; right: -9px; min-width: 17px; height: 17px; display: grid; place-items: center; padding: 0 4px; border-radius: 999px; color: #1a1209; background: #f3b37d; font-family: 'DM Mono', monospace; font-size: 8px; font-weight: 700; pointer-events: none; }
  .token-conditions { position: absolute; top: calc(100% + 19px); left: 50%; transform: translateX(-50%); display: flex; gap: 3px; pointer-events: none; }
  .token-conditions span { padding: 2px 5px; border-radius: 4px; color: #ffd2cc; background: rgba(140, 34, 40, 0.85); font-size: 7px; white-space: nowrap; }
`,iu=u.div`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: ${q.interface};
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
`,su=u.aside`
  min-width: 0;
  border-left: 1px solid var(--border);
  background: var(--c-111217);
  overflow: hidden;
`,cu=u.div`
  width: 54px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 18px;
`,lu=u.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,du=u.div`
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
`,pu=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  & > :first-child { margin-top: 0; }
`,fu=u.div`
  height: 100%;
  display: flex;
  & > div:first-child { flex: 1; min-width: 0; }
`,uu=u.nav`
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
    background: transparent;
    cursor: pointer;
    transition: color 140ms ease, background 140ms ease, border-color 140ms ease;
  }
  button:hover { color: var(--c-e9e7e2); background: color-mix(in srgb, var(--c-ffffff) 6%, transparent); }
  button[aria-pressed='true'] { color: var(--c-b9abff); background: color-mix(in srgb, var(--c-9b7bff) 15%, transparent); border-color: color-mix(in srgb, var(--c-9b7bff) 30%, transparent); }
  button:focus-visible { outline: 2px solid var(--c-9b7bff); outline-offset: 1px; }
`,mu=u.label`
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
`,gu=u.div`
  padding: 14px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 12px;
  background: ${({$tint:e})=>e||"var(--c-17191f)"};
`,bu=u.div`
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
  .portrait .portrait-remove:hover { background: var(--c-a83a43); }
  strong { display: block; color: var(--c-f5f0e9); font-size: 14px; }
  span { display: block; margin-top: 4px; color: var(--c-888d98); font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; }
`,hu=u.div`
  display: grid;
  gap: 6px;
  margin-top: 15px;
  .label { display: flex; align-items: center; justify-content: space-between; color: var(--c-8c919c); font-size: 10px; }
  .label strong { color: var(--c-e8e6e1); font-family: 'DM Mono', monospace; font-size: 10px; }
  .track { height: 6px; overflow: hidden; border-radius: 999px; background: var(--c-262931); }
  .fill { width: ${({$value:e})=>`${e}%`}; height: 100%; border-radius: inherit; background: ${({$color:e})=>e||"var(--c-f04f4a)"}; box-shadow: 0 0 14px ${({$glow:e})=>e||"color-mix(in srgb, var(--c-f04f4a) 25%, transparent)"}; }
`,xu=u.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin-top: 16px;
`,gd=u.div`
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
`,vu=u.button`
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
  ${gd}:hover & { opacity: 1; transform: translateY(0); }
  &:hover { color: var(--c-ffffff); background: color-mix(in srgb, var(--c-9b7bff) 32%, transparent); }
`,yu=u.div`
  margin-top: 18px;
  .section-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; color: var(--c-7e838f); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; }
`,wu=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 5.5%, transparent);
  &:last-child { border-bottom: 0; }
  .skill-icon { width: 24px; height: 24px; display: grid; place-items: center; border-radius: 7px; color: var(--c-a995ff); background: color-mix(in srgb, var(--c-9b7bff) 11%, transparent); }
  .skill-name { flex: 1; color: var(--c-c9c9ca); font-size: 11px; }
`,bd=u.input`
  width: 100%;
  padding: 10px 11px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  outline: none;
  color: var(--c-e9e7e2);
  background: var(--c-15171c);
  font-size: 11px;
  &:focus { border-color: var(--c-b9abff); box-shadow: 0 0 0 3px color-mix(in srgb, var(--c-9b7bff) 10%, transparent); }
`,Su=u.label`
  display: grid;
  gap: 6px;
  color: var(--c-8c919b);
  font-size: 10px;
`,ku=u.select`
  width: 100%;
  padding: 9px 10px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  outline: 0;
  color: var(--c-e9e7e2);
  background: var(--c-15171c);
  font-size: 11px;
  &:focus { border-color: color-mix(in srgb, var(--c-9b7bff) 70%, transparent); }
`,Au=u.div`
  display: grid;
  grid-template-columns: 1fr 88px;
  gap: 8px;
  /* $stack: em telas estreitas os campos ficam um embaixo do outro (vence o grid-template-columns inline). */
  ${({$stack:e})=>e?"@media (max-width: 560px) { grid-template-columns: minmax(0, 1fr) !important; }":""}
`,Eu=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,Mu=u.button`
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
`,Tu=u.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 5.5%, transparent);
  .track-icon { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 7px; color: ${({$active:e})=>e?"var(--c-f1b17e)":"var(--c-8e939e)"}; background: ${({$active:e})=>e?"color-mix(in srgb, var(--c-e58f48) 14%, transparent)":"var(--c-1b1d23)"}; }
  .track-name { flex: 1; color: var(--c-c9c9ca); font-size: 11px; }
`,Iu=u.button`
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
`,ju=u.div`
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
`,Cu=u.div`
  height: 100%;
  display: grid;
  place-items: center;
  padding: 24px;
  color: var(--c-8d929d);
  text-align: center;
  font-size: 11px;
`,_u=u.span`
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
`,zu=u.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  > * { flex: 1; }
`,Nu=u.p`
  margin: 9px 0 0;
  color: var(--c-8d929d);
  font-size: 9px;
  line-height: 1.45;
`,Ru=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,$u=u.button`
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
`,Lu=u.div`
  display: grid;
  gap: 7px;
`,Pu=u.button`
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
`,Ou=u.div`
  display: grid;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
`,Du=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,Fu=u.button`
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
`,Bu=u.span`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid ${({$accent:e})=>`color-mix(in srgb, ${yt(e)||"var(--c-9b7bff)"} 40%, transparent)`};
  border-radius: 10px;
  color: ${({$accent:e})=>yt(e)||"var(--c-b9abff)"};
  background: ${({$accent:e})=>`color-mix(in srgb, ${yt(e)||"var(--c-9b7bff)"} 9%, transparent)`};
`,Uu=u.div`
  display: grid;
  gap: 6px;
  max-height: 166px;
  overflow-y: auto;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
`,Gu=u.div`
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
`;u(bd)`
  padding: 8px 5px;
  text-align: center;
  font-family: 'DM Mono', monospace;
`;const Vu=u.div`
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
`,qu=u.div`
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
`,Wu=u.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
  color: #f4eefe;
  .total { font-size: 30px; font-weight: 700; letter-spacing: -.06em; }
  .math { color: #9da1ac; font-family: 'DM Mono', monospace; font-size: 10px; }
`,Yu=u.div`
  display: grid;
  gap: 14px;
  padding: 0 4px 8px;
  color: var(--c-b9bbc2);
`,Hu=u.div`
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
`;const Ku=Lo`
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
    #nighttable [role='toolbar'] { grid-template-columns: repeat(2, 40px); }
    #nighttable [role='toolbar'] button { width: 40px; height: 40px; }
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
`,hd=u.main`
  height: 100vh;
  height: 100dvh;
  display: grid;
  place-items: center;
  padding: 24px 16px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--c-9b7bff) 14%, transparent), transparent 40%), radial-gradient(circle at 75% 80%, color-mix(in srgb, var(--c-f04f4a) 10%, transparent), transparent 38%), var(--c-0a0b0f);
`,xd=u.form`
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
`,Ju=u(hd)`
  place-items: start center;
  padding: 32px 16px;
  @media (max-width: 760px) { padding: 16px; }
`,Xu=u(xd)`
  width: min(100%, 1120px);
  gap: 18px;
  padding: 24px 28px;
  @media (max-width: 760px) { padding: 18px 16px; }
`,Zu=u.div`
  display: grid;
  grid-template-columns: minmax(280px, 380px) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: minmax(0, 1fr); gap: 18px; }
`,Qu=u.div`
  display: grid;
  gap: 13px;
  min-width: 0;
`,em=u.section`
  display: grid;
  gap: 16px;
  min-width: 0;
  padding: 18px 20px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 12px;
  background: color-mix(in srgb, var(--c-ffffff) 1.5%, transparent);
  h2 { margin: 0; color: var(--c-e9e7e2); font-size: 15px; font-weight: 600; letter-spacing: -0.02em; }
  @media (max-width: 760px) { padding: 14px; }
`,tm=u.div`
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
`,am=u.div`
  display: grid;
  gap: 3px;
  strong { color: var(--c-d6d4d0); font-size: 12px; font-weight: 600; }
  span { color: var(--c-7e838f); font-size: 11px; line-height: 1.4; }
`,rm=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  &::before, &::after { content: ''; flex: 1; height: 1px; background: color-mix(in srgb, var(--c-ffffff) 8%, transparent); }
`,om=u.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  button { padding: 0; border: 0; color: var(--c-b9abff); background: none; cursor: pointer; font-size: 11px; }
  button:hover { color: var(--c-ddd5ff); text-decoration: underline; }
`,nm=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--c-c9c9ca);
  font-size: 11px;
  .user-avatar { width: 26px; height: 26px; display: grid; place-items: center; overflow: hidden; border-radius: 8px; color: #fff; background: var(--c-6d52be); font-size: 10px; font-weight: 700; }
  .user-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .user-name { max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  @media (max-width: 900px) { .user-name { display: none; } }
`;function vd({kind:e}){const t=St[e],a=jc(),r=e==="privacidade"?"termos":"privacidade";return L.useEffect(()=>{document.title=`${t.title} — NightTable`},[t.title]),f.jsxs(f.Fragment,{children:[f.jsx(dd,{}),f.jsx("main",{style:{height:"100dvh",boxSizing:"border-box",padding:"32px 16px 56px",background:"var(--c-0a0b0f)",color:"var(--c-d6d4d0)",overflowY:"auto"},children:f.jsxs("article",{style:{maxWidth:720,margin:"0 auto",display:"grid",gap:18,lineHeight:1.6,fontSize:14},children:[f.jsx("a",{href:Pe(),style:{textDecoration:"none"},children:f.jsxs(pd,{children:[f.jsx(fd,{children:f.jsx(Zl,{fontSize:"small"})}),f.jsxs(ud,{children:[f.jsx("strong",{children:"NightTable"}),f.jsx("span",{children:"virtual tabletop"})]})]})}),f.jsxs("header",{children:[f.jsx("h1",{style:{margin:"0 0 4px",color:"var(--c-f4f2ef)",fontSize:26},children:t.title}),f.jsxs("p",{style:{margin:0,color:"var(--c-7e838f)",fontSize:12},children:["Última atualização: ",Ic]})]}),f.jsx("p",{style:{margin:0},children:t.intro}),t.sections.map(([o,n])=>f.jsxs("section",{children:[f.jsx("h2",{style:{margin:"0 0 6px",color:"var(--c-c9c3ff)",fontSize:16},children:o}),f.jsx("ul",{style:{margin:0,paddingLeft:20,display:"grid",gap:6},children:n.map(i=>f.jsx("li",{children:i},i))})]},o)),f.jsxs("section",{children:[f.jsx("h2",{style:{margin:"0 0 6px",color:"var(--c-c9c3ff)",fontSize:16},children:"Contato"}),f.jsx("p",{style:{margin:0},children:a?f.jsxs(f.Fragment,{children:["Dúvidas, pedidos sobre seus dados ou denúncias: ",f.jsx("a",{href:a.includes("@")?`mailto:${a}`:a,style:{color:"var(--c-b9abff)"},children:a}),"."]}):"Dúvidas, pedidos sobre seus dados ou denúncias: fale com quem administra esta instalação do NightTable."})]}),f.jsxs("nav",{style:{display:"flex",gap:16,fontSize:12},children:[f.jsx("a",{href:oo(r),style:{color:"var(--c-b9abff)"},children:St[r].title}),f.jsx("a",{href:Pe(),style:{color:"var(--c-b9abff)"},children:"Voltar ao NightTable"})]})]})})]})}function Fo({style:e}){return f.jsx("p",{style:{margin:0,display:"flex",gap:12,flexWrap:"wrap",color:"var(--c-7e838f)",fontSize:11,...e},children:Object.entries(St).map(([t,a])=>f.jsx("a",{href:oo(t),target:"_blank",rel:"noopener",style:{color:"var(--c-9d93c9)"},children:a.title},t))})}const yd=Object.freeze(Object.defineProperty({__proto__:null,LegalLinks:Fo,default:vd},Symbol.toStringTag,{value:"Module"})),Ba={players:{label:"Jogadores na mesa",minimizable:!0},chat:{label:"Chat",minimizable:!0},log:{label:"Log da sessão",minimizable:!0},minimap:{label:"Minimapa",minimizable:!1},legend:{label:"Legenda do mapa",minimizable:!1}},wd=["players","chat","log"],Sd=["open","min","hidden"];function fe(e){const t=e&&typeof e=="object"?e:{};return Object.fromEntries(Object.entries(Ba).map(([a,r])=>{const o=Sd.includes(t[a])?t[a]:"open";return[a,o==="min"&&!r.minimizable?"open":o]}))}function Ua(e,t,a){return fe({...fe(e),[t]:a})}function im(e,t){const a=fe(e)[t];return Ua(e,t,a==="open"?"min":"open")}function kd(e,t){return fe(e)[t]!=="hidden"}function sm(e){const t=fe(e);return wd.every(a=>t[a]==="hidden")}function cm(e){return Object.values(fe(e)).filter(t=>t==="hidden").length}function lm(){return Object.fromEntries(Object.keys(Ba).map(e=>[e,"hidden"]))}function dm(e,t){return Ua(e,t,kd(e,t)?"hidden":"open")}function rt(e){const t=e&&typeof e=="object"?e:{},a=Number(t.rate);return{narration:t.narration===!0,narrator:t.narrator===!0,voice:String(t.voice||"").slice(0,120),rate:Number.isFinite(a)?Math.min(1.6,Math.max(.6,Math.round(a*10)/10)):1}}function fa(e){const t=a=>/^pt-BR/i.test(a.lang)?0:/^pt/i.test(a.lang)?1:2;return[...e||[]].sort((a,r)=>t(a)-t(r)||String(a.name).localeCompare(String(r.name)))}function Ad(e,t){const a=fa(e);return a.find(r=>r.name===t)||a.find(r=>/^pt/i.test(r.lang))||null}function pm(e){const t=String((e==null?void 0:e.title)||"").trim(),a=String((e==null?void 0:e.text)||"").trim();return t?!a||a===t?t:`${t}. ${a}`:a}const Qe=()=>typeof window<"u"&&"speechSynthesis"in window&&typeof window.SpeechSynthesisUtterance=="function";function Ed(e,t){const a=String(e||"").trim();if(!a||!Qe())return!1;const{voice:r,rate:o}=rt(t),n=new window.SpeechSynthesisUtterance(a.slice(0,1200)),i=Ad(window.speechSynthesis.getVoices(),r);return i&&(n.voice=i),n.lang=(i==null?void 0:i.lang)||"pt-BR",n.rate=o,window.speechSynthesis.speak(n),!0}function kr(){Qe()&&window.speechSynthesis.cancel()}const Ga=[{id:"normal",label:"Normal",zoom:1},{id:"large",label:"Grande",zoom:1.15},{id:"xlarge",label:"Muito grande",zoom:1.3}];function $t(e){return Ga.some(t=>t.id===e)?e:"normal"}function Bo(e){return Ga.find(t=>t.id===$t(e)).zoom}function Md(e){return 1+(Bo(e)-1)/2}function Td(e,t=typeof document<"u"?document.documentElement:null){t&&(t.style.setProperty("--text-zoom",String(Bo(e))),t.style.setProperty("--rail-scale",String(Md(e))),t.dataset.textSize=$t(e))}const Uo="nighttable-language",Go=[{value:"pt",label:"Português"},{value:"en",label:"English"}];function Vo(e){return e==="en"?"en":"pt"}function Lt(e=globalThis.localStorage){try{return Vo(e==null?void 0:e.getItem(Uo))}catch{return"pt"}}function Id(e,t=globalThis.localStorage){try{t==null||t.setItem(Uo,Vo(e))}catch{}}const jd=e=>e.replace(/[.*+?^$()|[\]\\]/g,"\\$&");function Cd(e){const t=new Map,a=new Map,r=[];for(const[i,s]of Object.entries(e)){if(!i.includes("{}")){t.set(i,s);continue}const c=i.split("{}"),d={regex:new RegExp(`^${c.map(jd).join("([\\s\\S]*?)")}$`),value:s},p=c[0].slice(0,3);if(p.length<3){r.push(d);continue}a.has(p)||a.set(p,[]),a.get(p).push(d)}const o=(i,s)=>{let c=0;return i.replace(/\{(\d*)\}/g,(d,p)=>{const g=p?s[Number(p)-1]:s[c];return c+=1,n(g??"")??g??""})},n=i=>{if(t.has(i))return t.get(i);const s=a.get(i.slice(0,3));for(const c of[s,r])if(c)for(const d of c){const p=d.regex.exec(i);if(p)return o(d.value,p.slice(1))}return null};return i=>{if(typeof i!="string")return null;const s=i.trim();if(!s||!/[A-Za-zÀ-ú]/.test(s))return null;const c=n(s);if(c==null||c===s)return null;const d=i.indexOf(s);return i.slice(0,d)+c+i.slice(d+s.length)}}const Ar=["aria-label","title","placeholder","alt","aria-description","aria-valuetext"],_d=new Set(["SCRIPT","STYLE","TEXTAREA","CODE","PRE","svg"]);function Kt(e,t){for(let a=e;a&&a.nodeType===1;a=a.parentElement)if(t&&_d.has(a.tagName)||a.getAttribute("translate")==="no"||a.isContentEditable)return!0;return!1}function zd(e,t=document.body){const a=s=>{const c=e(s.data);c!=null&&c!==s.data&&!Kt(s.parentElement,!0)&&(s.data=c)},r=s=>{if(!Kt(s,!1)){for(const c of Ar){const d=s.getAttribute(c);if(!d)continue;const p=e(d);p!=null&&p!==d&&s.setAttribute(c,p)}if(s.tagName==="INPUT"&&(s.type==="button"||s.type==="submit")&&s.value){const c=e(s.value);c!=null&&(s.value=c)}}},o=s=>{if(s.nodeType===3){a(s);return}if(s.nodeType!==1||Kt(s,!1))return;r(s);const c=document.createTreeWalker(s,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:d=>d.nodeType===1&&d.getAttribute("translate")==="no"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});for(let d=c.nextNode();d;d=c.nextNode())d.nodeType===3?a(d):r(d)};o(t);const n=e(document.title);n&&(document.title=n);const i=new MutationObserver(s=>{for(const c of s)c.type==="characterData"?a(c.target):c.type==="attributes"?r(c.target):c.addedNodes.forEach(o)});return i.observe(t,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[...Ar,"value"]}),()=>i.disconnect()}async function Nd(e=Lt()){var r;if(typeof document>"u"||(document.documentElement.lang=e==="en"?"en":"pt-BR",e!=="en"))return;const{default:t}=await we(async()=>{const{default:o}=await import("./en-BZnHRFcz.js");return{default:o}},[]),a=Cd(t);globalThis.__nighttableTranslate=a;for(const o of["confirm","prompt","alert"]){const n=(r=window[o])==null?void 0:r.bind(window);n&&(window[o]=(i,...s)=>n(typeof i=="string"?a(i)??i:i,...s))}zd(a,document.body)}function qo(e){e!==Lt()&&(Id(e),window.location.reload())}function fm({style:e}){const t=Lt();return f.jsx("div",{role:"radiogroup","aria-label":"Idioma · Language",translate:"no",style:{display:"inline-flex",gap:2,padding:2,border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:999,...e},children:Go.map(a=>f.jsx("button",{type:"button",role:"radio","aria-checked":t===a.value,title:a.label,onClick:()=>qo(a.value),style:{padding:"3px 8px",border:0,borderRadius:999,color:t===a.value?"var(--c-f4f2ef)":"var(--c-9a9faa)",background:t===a.value?"color-mix(in srgb, var(--c-8e6bff) 30%, transparent)":"transparent",fontSize:10,fontWeight:600,letterSpacing:".06em",cursor:"pointer"},children:a.value.toUpperCase()},a.value))})}const Er={player:[{title:"Bem-vindo à mesa",text:"O mapa fica no centro. Arraste o seu token para se mover; o Mestre controla a névoa e o que você enxerga."},{title:"Sua ficha",text:"No painel da direita estão sua ficha, armas e inventário. Clique em um atributo ou perícia para rolar os dados. Duplo clique no seu avatar (no mapa ou na lista) abre a ficha completa."},{title:"Sua tela, do seu jeito",text:"A barra de ícones na beirada esquerda mostra ou oculta jogadores, chat, log, ficha, minimapa e legenda. O modo limpo deixa só o mapa."},{title:"Conversa",text:"No chat, use @nome para chamar alguém, /w Nome para sussurrar e /gm para falar só com o Mestre. Passe o mouse numa mensagem para reagir."},{title:"Ferramentas do mapa",text:"A barra à esquerda do mapa tem lápis, régua e formas. Os desenhos aparecem para todos e somem sozinhos se forem temporários."},{title:"Atalhos",text:"Aperte ? a qualquer momento para ver os atalhos de teclado e reabrir este tutorial pelo botão de ajuda no topo."}],gm:[{title:"Visão do Mestre",text:"O painel da direita reúne tudo o que você controla: cena, tokens, objetos, iniciativa, áudio, handouts e regras."},{title:"Prepare as cenas",text:"Oculte o mapa dos jogadores enquanto prepara, salve o tabuleiro como cena e ative com um clique. O cartão de abertura aparece para todos."},{title:"Tokens e combate",text:"Coloque fichas no mapa, esconda inimigos, marque derrotados e use a iniciativa. Os geradores criam encontros prontos. Duplo clique num token abre a ficha dele."},{title:"Convide o grupo",text:"Compartilhe o código de convite. No lobby da campanha você escreve a descrição e marca as próximas sessões."},{title:"Atalhos e ajuda",text:"Aperte ? para ver os atalhos. M alterna entre a sua visão e a dos jogadores."}]},ua=e=>`nighttable-tutorial-v1:${e}`;function um(e){try{return window.localStorage.getItem(ua(e))==="done"}catch{return!0}}function mm(e,t){try{t?window.localStorage.setItem(ua(e),"done"):window.localStorage.removeItem(ua(e))}catch{}}const Rd=u.aside`
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
`;function gm({role:e,onFinish:t}){const a=Er[e]||Er.player,[r,o]=L.useState(0),n=a[r],i=r===a.length-1;return f.jsxs(Rd,{role:"dialog","aria-label":"Tutorial do NightTable",children:[f.jsxs("span",{className:"step",children:["primeiros passos · ",r+1,"/",a.length]}),f.jsx("h2",{children:n.title}),f.jsx("p",{children:n.text}),f.jsxs("div",{className:"actions",children:[f.jsx("div",{className:"dots","aria-hidden":"true",children:a.map((s,c)=>f.jsx("span",{className:c===r?"on":""},s.title))}),f.jsx(Re,{onClick:t,size:"small",sx:{textTransform:"none",color:"var(--c-8e939e)",fontSize:11},children:"Pular"}),f.jsx(Re,{onClick:()=>i?t():o(r+1),size:"small",variant:"contained",sx:{textTransform:"none",fontSize:11,bgcolor:"var(--c-7358d0)","&:hover":{bgcolor:"var(--c-6249c0)"}},children:i?"Começar":"Próximo"})]})]})}const $d=u.span`
  display: inline-flex;
  gap: 3px;
  kbd { min-width: 20px; padding: 2px 6px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 14%, transparent); border-bottom-width: 2px; border-radius: 5px; color: var(--c-f4f2ef); background: var(--c-1f222a); font-family: 'DM Mono', monospace; font-size: 10px; text-align: center; }
`,Ld=[["@Nome","Chama alguém (a mensagem fica destacada e toca um aviso para a pessoa)."],["/w Nome texto","Sussurro: só você, a pessoa e o Mestre leem."],["/gm texto","Mensagem privada para o Mestre."],["Falar como","Escolha seu personagem ao lado da caixa de texto para falar em personagem."]],Pd=[["2d6 + 3","Rola dois dados de 6 lados e soma 3."],["d20 + DES","Usa o valor do atributo da sua ficha."],["4d6kh3","Rola 4 e mantém os 3 maiores (kl = menores)."],["Vantagem","Escolha na ficha: o d20 vira 2d20 e fica o maior (desvantagem: o menor)."]],Wo=[{id:"compact",label:"Compacta"},{id:"normal",label:"Normal"},{id:"comfortable",label:"Confortável"}],Yo=[{id:"system",label:"Seguir o sistema"},{id:"reduced",label:"Reduzidas"}],Ho=[{id:"full",label:"Completa"},{id:"calm",label:"Discreta"},{id:"off",label:"Desligada"}],Mr=[{id:"open",label:"Aberto"},{id:"min",label:"Minimizado"},{id:"hidden",label:"Oculto"}],Ko="nighttable-ui-prefs";function Jo(){try{const e=JSON.parse(window.localStorage.getItem(Ko))||{};return{density:Wo.some(t=>t.id===e.density)?e.density:"normal",textSize:$t(e.textSize),theme:Oa(e.theme),accent:Da(e.accent),motion:Yo.some(t=>t.id===e.motion)?e.motion:"system",diceAnimation:Ho.some(t=>t.id===e.diceAnimation)?e.diceAnimation:"full",telemetry:e.telemetry===!0,panels:fe(e.panels),speech:rt(e.speech)}}catch{return{density:"normal",textSize:"normal",theme:"dark",accent:"violet",motion:"system",diceAnimation:"full",telemetry:!1,panels:fe(null),speech:rt(null)}}}function bm(e){try{window.localStorage.setItem(Ko,JSON.stringify(e))}catch{}}function Od({speech:e,onChange:t}){const[a,r]=L.useState(()=>Qe()?fa(window.speechSynthesis.getVoices()):[]);if(L.useEffect(()=>{var s,c;if(!Qe())return;const i=()=>r(fa(window.speechSynthesis.getVoices()));return(c=(s=window.speechSynthesis).addEventListener)==null||c.call(s,"voiceschanged",i),()=>{var d,p;return(p=(d=window.speechSynthesis).removeEventListener)==null?void 0:p.call(d,"voiceschanged",i)}},[]),!Qe())return f.jsx("p",{style:{margin:"8px 0 0",color:"var(--c-7e838f)",fontSize:11},children:"Este navegador não lê texto em voz alta."});const o=rt(e),n=i=>t(rt({...o,...i}));return f.jsxs("div",{role:"group","aria-label":"Narração em voz",style:{display:"grid",gap:6,marginTop:10,color:"var(--c-c9c9ca)",fontSize:12},children:[f.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[f.jsx("input",{type:"checkbox",checked:o.narration,onChange:i=>n({narration:i.target.checked})})," Ler em voz alta as narrações na tela"]}),f.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[f.jsx("input",{type:"checkbox",checked:o.narrator,onChange:i=>n({narrator:i.target.checked})})," Ler as falas do canal #narrador"]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:8},children:[f.jsx("span",{style:{width:120},children:"Voz"}),f.jsxs("select",{value:o.voice,onChange:i=>n({voice:i.target.value}),"aria-label":"Voz da narração",style:{flex:1,minWidth:160,padding:"4px 6px",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:6,color:"var(--c-e7e5e2)",background:"var(--c-1a1c22)",fontSize:11},children:[f.jsx("option",{value:"",children:"Automática (português, se houver)"}),a.map(i=>f.jsxs("option",{value:i.name,children:[i.name," · ",i.lang]},i.name))]})]}),f.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[f.jsxs("span",{style:{width:120},children:["Velocidade ",o.rate.toFixed(1),"×"]}),f.jsx("input",{type:"range",min:"0.6",max:"1.6",step:"0.1",value:o.rate,onChange:i=>n({rate:Number(i.target.value)}),"aria-label":"Velocidade da narração em voz",style:{flex:1}})]}),f.jsxs("div",{style:{display:"flex",gap:8},children:[f.jsx(Re,{size:"small",onClick:()=>{kr(),Ed("A névoa cobre o porto. Ao longe, um sino toca.",o)},sx:{minWidth:0,color:"var(--c-b9abff)",textTransform:"none",fontSize:11},children:"Testar a voz"}),f.jsx(Re,{size:"small",onClick:kr,sx:{minWidth:0,color:"var(--c-8e939e)",textTransform:"none",fontSize:11},children:"Parar"})]})]})}function be({label:e,value:t,options:a,onChange:r}){return f.jsxs("div",{role:"radiogroup","aria-label":e,style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12},children:[f.jsx("span",{style:{width:120,color:"var(--c-c9c9ca)"},children:e}),a.map(o=>f.jsxs("button",{type:"button",role:"radio","aria-checked":t===o.id,onClick:()=>r(o.id),style:{padding:"5px 10px",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:999,color:t===o.id?"var(--c-f4f2ef)":"var(--c-9a9faa)",background:t===o.id?"color-mix(in srgb, var(--c-8e6bff) 25%, transparent)":"var(--c-1a1c22)",fontSize:11,cursor:"pointer"},children:[o.swatch&&f.jsx("span",{"aria-hidden":"true",style:{display:"inline-block",width:9,height:9,marginRight:5,borderRadius:"50%",background:o.swatch}}),o.label]},o.id))]})}function hm({open:e,isGm:t,onClose:a,onRestartTutorial:r,prefs:o,onPrefsChange:n}){return f.jsxs(en,{open:e,onClose:a,fullWidth:!0,maxWidth:"sm",PaperProps:{sx:{bgcolor:"var(--c-14161b)",color:"var(--c-e7e5e2)",border:"1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent)"}},children:[f.jsxs(tn,{sx:{display:"flex",alignItems:"center",gap:1,fontSize:17},children:[f.jsx(Fc,{sx:{color:"var(--c-b9abff)"}})," Ajuda e preferências",f.jsx(an,{"aria-label":"Fechar ajuda",onClick:a,sx:{ml:"auto",color:"var(--c-8e939e)"},children:f.jsx(Dc,{})})]}),f.jsxs(rn,{sx:{display:"grid",gap:2,pb:3},children:[o&&f.jsxs("section",{children:[f.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:"preferências deste navegador"}),f.jsxs("div",{style:{display:"grid",gap:8},children:[f.jsx(be,{label:"Idioma",value:Lt(),options:Go.map(i=>({id:i.value,label:i.label})),onChange:qo}),f.jsx(be,{label:"Densidade",value:o.density,options:Wo,onChange:i=>n({...o,density:i})}),f.jsx(be,{label:"Tema",value:Oa(o.theme),options:Do,onChange:i=>n({...o,theme:i})}),f.jsx(be,{label:"Cor de destaque",value:Da(o.accent),options:Pa,onChange:i=>n({...o,accent:i})}),f.jsx(be,{label:"Tamanho do texto",value:$t(o.textSize),options:Ga,onChange:i=>n({...o,textSize:i})}),f.jsx(be,{label:"Animações",value:o.motion,options:Yo,onChange:i=>n({...o,motion:i})}),f.jsx(be,{label:"Dados na tela",value:o.diceAnimation||"full",options:Ho,onChange:i=>n({...o,diceAnimation:i})}),Object.entries(Ba).map(([i,s])=>f.jsx(be,{label:s.label,value:fe(o.panels)[i],options:s.minimizable?Mr:Mr.filter(c=>c.id!=="min"),onChange:c=>n({...o,panels:Ua(o.panels,i,c)})},i))]}),f.jsx(Od,{speech:o.speech,onChange:i=>n({...o,speech:i})}),f.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10,color:"var(--c-c9c9ca)",fontSize:12},children:[f.jsx("input",{type:"checkbox",checked:!!o.telemetry,onChange:i=>n({...o,telemetry:i.target.checked})})," Enviar relatórios de erro anônimos (sem nome, e-mail ou conversas)"]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,color:"var(--c-7e838f)",fontSize:11},children:["Erros registrados nesta sessão: ",nr().length,nr().length>0&&f.jsx(Re,{size:"small",onClick:()=>{var i;return(i=navigator.clipboard)==null?void 0:i.writeText([ro(),"","Desempenho:",...Ft()].join(`
`)).catch(()=>{})},sx:{minWidth:0,color:"var(--c-b9abff)",textTransform:"none",fontSize:11},children:"Copiar relatório"})]}),f.jsxs("div",{role:"group","aria-label":"Desempenho desta sessão",style:{marginTop:10,color:"var(--c-7e838f)",fontSize:11,lineHeight:1.6},children:[f.jsx("strong",{style:{display:"block",color:"var(--c-c9c9ca)",fontWeight:600},children:"Desempenho desta sessão"}),Ft().length?Ft().map(i=>f.jsx("div",{children:i},i)):f.jsx("div",{children:"Ainda sem medidas."}),f.jsx("div",{children:"Medido só neste navegador; nada é enviado."})]}),f.jsx("p",{style:{margin:"8px 0 0",color:"var(--c-7e838f)",fontSize:11},children:"Gire a roda do mouse sobre o mapa para aproximar e afastar no ponto do cursor. No celular ou tablet, faça a pinça com dois dedos para aproximar entre os dedos e arraste com dois dedos para mover."})]}),f.jsxs("section",{children:[f.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:"atalhos de teclado"}),f.jsx("div",{style:{display:"grid",gap:6},children:Kl.filter(i=>t||!i.gmOnly).map(i=>f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,fontSize:12},children:[f.jsx($d,{style:{width:92},children:i.keys.map(s=>f.jsx("kbd",{children:s},s))}),f.jsx("span",{style:{color:"var(--c-c9c9ca)"},children:i.label})]},i.label))})]}),[["chat",Ld],["dados",Pd]].map(([i,s])=>f.jsxs("section",{children:[f.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:i}),f.jsx("div",{style:{display:"grid",gap:6},children:s.map(([c,d])=>f.jsxs("div",{style:{fontSize:12},children:[f.jsx("code",{style:{color:"var(--c-f3c48f)"},children:c})," ",f.jsxs("span",{style:{color:"var(--c-c9c9ca)"},children:["— ",d]})]},c))})]},i)),f.jsx(Fo,{}),f.jsx(Re,{onClick:r,sx:{justifySelf:"start",textTransform:"none",color:"var(--c-b9abff)"},children:"Ver o tutorial de novo"})]})]})}const Dd={DEV:!1,VITE_USE_FIREBASE_EMULATORS:"false"};kc();Td(Jo().textSize);ld(Jo());wc({env:Mc(Dd),dataVersion:Le});const Fd=L.lazy(()=>we(()=>import("./App-CDNgvRQQ.js").then(e=>e.bc),__vite__mapDeps([0,1,2]))),Bd=L.lazy(()=>we(()=>import("./LoginScreen-xxcH8QQF.js"),__vite__mapDeps([3,1,4,2]))),Ud=L.lazy(()=>we(()=>import("./Lobby-B_kSV0Fi.js"),__vite__mapDeps([5,1,0,2,4,6,7]))),Gd=L.lazy(()=>we(()=>import("./OnlineTable-Df2fPAPM.js"),__vite__mapDeps([8,1,0,2]))),Vd=L.lazy(()=>we(()=>Promise.resolve().then(()=>yd),void 0)),qd=L.lazy(()=>we(()=>import("./StreamEntry-Bqos0uLV.js"),__vite__mapDeps([9,1,8,0,2]))),Wd=L.lazy(()=>we(()=>import("./PublicPage-DD5CGVEM.js"),__vite__mapDeps([10,1,2])));function Yd(){return f.jsx("div",{role:"status",style:{minHeight:"100dvh",display:"grid",placeItems:"center",color:"var(--c-8d929d)",background:"var(--c-090a0d)",fontFamily:"DM Mono, monospace",fontSize:11,letterSpacing:".12em",textTransform:"uppercase"},children:"carregando a mesa…"})}const ma="nighttable-active-table",Tr=Cc(),Ir=ai(),jr=Oc();function Hd(){try{return JSON.parse(window.localStorage.getItem(ma))||null}catch{return null}}function Cr(e){try{e?window.localStorage.setItem(ma,JSON.stringify(e)):window.localStorage.removeItem(ma)}catch{}}function Kd(){const{enabled:e,loading:t,user:a}=vc(),[r,o]=L.useState(Hd),n=s=>{const c=s?{uid:a.uid,tableId:s}:null;Cr(c),o(c)};if(Tr)return f.jsx(Vd,{kind:Tr});if(jr)return f.jsx(Wd,{code:jr});if(!e)return f.jsx(Fd,{});if(t)return null;if(Ir)return f.jsx(qd,{code:Ir,user:a});const i=a&&(r==null?void 0:r.uid)===a.uid?r.tableId:null;return!a||a.isAnonymous&&!i?f.jsx(Bd,{onGuestJoined:s=>{var d;const c={uid:(d=N.currentUser)==null?void 0:d.uid,tableId:s};Cr(c),o(c)}}):i?f.jsx(Gd,{tableId:i,user:a,onLeave:()=>n(null)},i):f.jsx(Ud,{onEnterTable:n})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/nighttablesite/sw.js",{scope:"/nighttablesite/"}).catch(()=>{})});Nd().catch(()=>{}).finally(()=>{Jt.createRoot(document.getElementById("root")).render(f.jsx(Q.StrictMode,{children:f.jsx(Ac,{children:f.jsx(xc,{children:f.jsx(L.Suspense,{fallback:f.jsx(Yd,{}),children:f.jsx(Kd,{})})})})}))});export{zi as $,hd as A,pd as B,Zl as C,bd as D,Cu as E,Su as F,dd as G,Dp as H,Gp as I,ku as J,Ju as K,fm as L,Xu as M,$p as N,Rp as O,Lp as P,Zu as Q,Qu as R,Au as S,Op as T,nm as U,em as V,am as W,tm as X,jp as Y,Gr as Z,vi as _,xd as a,ld as a$,Ur as a0,yi as a1,cp as a2,Ip as a3,Ri as a4,Os as a5,Us as a6,Xs as a7,ts as a8,Rs as a9,Bu as aA,zu as aB,Iu as aC,ip as aD,Le as aE,Kn as aF,Gs as aG,Ws as aH,Mi as aI,Zs as aJ,is as aK,ds as aL,$s as aM,es as aN,us as aO,Ys as aP,jf as aQ,_u as aR,zc as aS,hu as aT,xu as aU,gd as aV,vu as aW,wu as aX,ai as aY,Jo as aZ,Td as a_,zs as aa,qs as ab,Hs as ac,Ti as ad,Ji as ae,Xi as af,ns as ag,ws as ah,fs as ai,ls as aj,Qd as ak,Vn as al,Hn as am,u as an,we as ao,La as ap,ef as aq,yu as ar,gu as as,Nu as at,ep as au,q as av,Dc as aw,Vs as ax,Uu as ay,Gu as az,fd as b,nu as b$,fe as b0,Zi as b1,dp as b2,xp as b3,ic as b4,rt as b5,Ed as b6,pm as b7,js as b8,wc as b9,mf as bA,gf as bB,bf as bC,hf as bD,Ss as bE,xf as bF,_f as bG,vf as bH,wf as bI,yf as bJ,Sf as bK,kf as bL,Af as bM,Ef as bN,Mf as bO,Tf as bP,If as bQ,Lf as bR,Pf as bS,Of as bT,Df as bU,Ff as bV,eu as bW,tu as bX,au as bY,iu as bZ,ou as b_,Pp as ba,xs as bb,sp as bc,vs as bd,aa as be,np as bf,ms as bg,Ku as bh,af as bi,rf as bj,Ec as bk,of as bl,nf as bm,sf as bn,Fc as bo,cf as bp,lf as bq,df as br,Ba as bs,kd as bt,cm as bu,sm as bv,pf as bw,md as bx,ff as by,uf as bz,ud as c,Rf as c$,Gf as c0,Bf as c1,Xf as c2,Uf as c3,Yf as c4,Hf as c5,Jf as c6,qf as c7,Vf as c8,Qf as c9,so as cA,Vi as cB,Yi as cC,Mc as cD,im as cE,Ua as cF,Is as cG,ys as cH,ks as cI,As as cJ,Xr as cK,Ki as cL,Ms as cM,qi as cN,Es as cO,Hi as cP,ji as cQ,cs as cR,Bs as cS,lu as cT,du as cU,mu as cV,pu as cW,Eu as cX,Mu as cY,Ou as cZ,Nf as c_,ru as ca,Zf as cb,Wf as cc,Kf as cd,su as ce,fu as cf,Jn as cg,Pi as ch,uu as ci,cu as cj,Yu as ck,Hu as cl,hm as cm,mm as cn,bm as co,um as cp,gm as cq,Vu as cr,qu as cs,Wu as ct,Cf as cu,Ns as cv,tf as cw,Fs as cx,Li as cy,$i as cz,rm as d,Cs as d$,Du as d0,Fu as d1,Tu as d2,ju as d3,zf as d4,Zr as d5,ei as d6,ec as d7,tc as d8,gs as d9,up as dA,mp as dB,vp as dC,Ts as dD,Hr as dE,Ks as dF,rc as dG,ac as dH,uc as dI,Ni as dJ,Ci as dK,Oi as dL,Wi as dM,Ds as dN,Ru as dO,$u as dP,lp as dQ,_i as dR,Qs as dS,Di as dT,Ii as dU,os as dV,rs as dW,Hp as dX,oc as dY,Jp as dZ,Xp as d_,Wr as da,Rn as db,tp as dc,ps as dd,Ls as de,Ps as df,ss as dg,qp as dh,nc as di,Zp as dj,Yp as dk,Vp as dl,Wp as dm,_s as dn,Yr as dp,bu as dq,$f as dr,Js as ds,Qi as dt,hs as du,wp as dv,bp as dw,yp as dx,hp as dy,fp as dz,om as e,as as e0,bs as e1,Bi as e2,Fi as e3,dm as e4,lm as e5,io as e6,Pe as e7,Kp as e8,mt as e9,Lt as ea,Qp as eb,Nc as ec,Qr as ed,mc as ee,zp as ef,Np as eg,rp as eh,ap as ei,gp as ej,ii as ek,ci as el,Or as em,pp as en,ea as eo,hc as ep,bc as eq,ar as er,Sp as es,kp as et,Fo as f,_p as g,Cp as h,Mp as i,Tp as j,ki as k,Ai as l,no as m,et as n,Bp as o,Up as p,Fp as q,Ep as r,Ap as s,Lu as t,vc as u,Pu as v,wi as w,Si as x,Ei as y,op as z};
