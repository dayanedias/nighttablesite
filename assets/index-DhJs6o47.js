const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/App-DJkA2Qgz.js","assets/mui-CncEM2Qp.js","assets/firebase-CNO7A9Xd.js","assets/LoginScreen-a3dPcwV9.js","assets/InvitePreview-CvwPBwJB.js","assets/Lobby-CCdCxPPz.js","assets/SystemEditor-AdIldzLV.js","assets/AccountDialog-DGVBXgAD.js","assets/OnlineTable-DPFgKbBr.js","assets/StreamEntry-DtRhGbtY.js"])))=>i.map(i=>d[i]);
var uo=Object.defineProperty;var mo=(e,t,a)=>t in e?uo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var Ia=(e,t,a)=>mo(e,typeof t!="symbol"?t+"":t,a);import{r as go,a as $,j as l,R as Z,c as na,D as bo,b as ho,I as xo,d as vo,B as Te}from"./mui-CncEM2Qp.js";import{i as yo,g as wo,a as So,p as ko,b as Eo,c as Ao,d as H,e as m,o as C,f as x,h as ia,j as F,q as N,l as re,k as Y,w as G,T as sa,u as Q,s as z,m as jo,n as b,r as V,t as pr,v as Mo,x as K,y as zo,z as Io,F as Co,A as To,B as fr,C as wt,D as ca,E as Ro,G as No,H as _o,I as $o,J as Oo,K as Po}from"./firebase-CNO7A9Xd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const Do="modulepreload",Lo=function(e){return"/nighttablesite/"+e},Ca={},Pe=function(t,a,r){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(a.map(c=>{if(c=Lo(c),c in Ca)return;Ca[c]=!0;const f=c.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":Do,f||(g.as="script"),g.crossOrigin="",g.href=c,s&&g.setAttribute("nonce",s),document.head.appendChild(g),f)return new Promise((y,M)=>{g.addEventListener("load",y),g.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})};var Ft={},Ta=go;Ft.createRoot=Ta.createRoot,Ft.hydrateRoot=Ta.hydrateRoot;const Fo={VITE_FIREBASE_API_KEY:"AIzaSyAojCR46U1f6Bivq7ogNUkQMReQZ8RPpmI",VITE_FIREBASE_APP_ID:"1:839551252957:web:f9a1f161e39ab7ebb85e34",VITE_FIREBASE_AUTH_DOMAIN:"nighttable-5621b.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-1Z4XL9CFYE",VITE_FIREBASE_MESSAGING_SENDER_ID:"839551252957",VITE_FIREBASE_PROJECT_ID:"nighttable-5621b",VITE_FIREBASE_STORAGE_BUCKET:"nighttable-5621b.firebasestorage.app",VITE_USE_FIREBASE_EMULATORS:"false"},me=Fo,Bo=me.VITE_USE_FIREBASE_EMULATORS==="true",ct={apiKey:me.VITE_FIREBASE_API_KEY,authDomain:me.VITE_FIREBASE_AUTH_DOMAIN,projectId:me.VITE_FIREBASE_PROJECT_ID,storageBucket:me.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:me.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:me.VITE_FIREBASE_APP_ID,measurementId:me.VITE_FIREBASE_MEASUREMENT_ID},Uo=!!(ct.apiKey&&ct.projectId&&ct.appId),Go=ct,dt=Uo||Bo,Re=dt?yo(Go):null,_=Re?wo(Re):null,d=Re?So(Re,{localCache:ko({tabManager:Ao()})}):null,Vo="southamerica-east1";Re&&Eo(Re,Vo);const qo={message:"mensagem no chat",move:"movimento de token",state:"estado da mesa"},Ra=()=>typeof performance<"u"?performance.now():Date.now();function Wo(){return{open:null,samples:{message:[],move:[],state:[]},failures:0}}let St=Wo();function dc({sincePageLoad:e,waitingForData:t=null},a=St){return a.open||(a.open={sincePageLoad:Math.round(e),waitingForData:t===null?null:Math.round(t)}),a}function Ho(e,t,a=St){return a.samples[e]&&(a.samples[e]=[...a.samples[e],Math.round(t)].slice(-100)),a}function da(e,t,a=St){const r=Ra();return Promise.resolve(t).then(o=>(Ho(e,Ra()-r,a),o),o=>{throw a.failures+=1,o})}function Na(e,t){return e.length?e[Math.min(e.length-1,Math.ceil(t*e.length)-1)]:null}function Yo(e=[]){if(!e.length)return{count:0,median:null,p95:null,max:null};const t=[...e].sort((a,r)=>a-r);return{count:t.length,median:Na(t,.5),p95:Na(t,.95),max:t[t.length-1]}}const it=e=>e==null?"—":e>=1e3?`${(e/1e3).toFixed(1).replace(".",",")} s`:`${e} ms`;function Rt(e=St){const t=[];e.open&&t.push(`Abrir a mesa: ${it(e.open.sincePageLoad)} desde o carregamento da página${e.open.waitingForData!==null?` (${it(e.open.waitingForData)} esperando os dados)`:""}`);for(const[a,r]of Object.entries(qo)){const{count:o,median:n,p95:i}=Yo(e.samples[a]);o&&t.push(`Gravar ${r}: mediana ${it(n)}, 95% em até ${it(i)} (${o} amostra${o===1?"":"s"})`)}return e.failures&&t.push(`Gravações que falharam: ${e.failures}`),t}const Ko={map:{maxSize:2048,maxBytes:14e5},portrait:{maxSize:480,maxBytes:9e4},avatar:{maxSize:160,maxBytes:25e3,square:!0},thumb:{maxSize:64,maxBytes:6e3}},Jo=9e3;function Xo(e){return typeof e=="string"&&e.startsWith("data:image/")&&e.length<=Jo}const Zo=25*1024*1024,Qo=9e5;function ur(e){const t=e.slice(e.indexOf(",")+1),a=t.endsWith("==")?2:t.endsWith("=")?1:0;return Math.floor(t.length*3/4)-a}function mr(e,t=Qo){const a=[];for(let r=0;r<e.length;r+=t)a.push(e.slice(r,r+t));return a}function gr(e){return[...e].sort((t,a)=>t.index-a.index).map(t=>t.data).join("")}function lc(e){return e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1).replace(".",",")} MB`}function Bt(e){return e?String(e.type).startsWith("image/")?e.size>Zo?"Imagem grande demais: o limite é 25 MB.":null:"Escolha um arquivo de imagem (JPG, PNG ou WebP).":"Nenhum arquivo escolhido."}function br(e){return new Promise((t,a)=>{const r=URL.createObjectURL(e),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),t(o)},o.onerror=()=>{URL.revokeObjectURL(r),a(new Error("Não foi possível ler esta imagem."))},o.src=r})}let Nt;function _a(){return Nt===void 0&&(Nt=document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp")),Nt?"image/webp":"image/jpeg"}function hr(e,t,a,r=!1){const o=document.createElement("canvas"),n=o.getContext("2d"),i=e.naturalWidth||e.width,s=e.naturalHeight||e.height;if(a){const f=Math.min(i,s),u=Math.min(t,f);return o.width=u,o.height=u,n.drawImage(e,(i-f)/2,(s-f)/2,f,f,0,0,u,u),o}const c=Math.min(1,t/Math.max(i,s));return o.width=Math.max(1,Math.round(i*c)),o.height=Math.max(1,Math.round(s*c)),r||(n.fillStyle="#121419",n.fillRect(0,0,o.width,o.height)),n.drawImage(e,0,0,o.width,o.height),o}async function pc(e,{maxSize:t,maxBytes:a}=Ko.thumb){const r=await new Promise((n,i)=>{const s=new Image;s.onload=()=>n(s),s.onerror=()=>i(new Error("Não foi possível ler esta imagem.")),s.src=e}),o=hr(r,t,!1);for(const n of[.7,.55,.4]){const i=o.toDataURL("image/jpeg",n);if(ur(i)<=a)return i}return null}async function fc(e){const t=Bt(e);if(t)throw new Error(t);return br(e)}function uc(e){return new Promise((t,a)=>{const r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>a(new Error("Não foi possível ler este arquivo.")),r.readAsDataURL(e)})}async function mc(e,{maxSize:t,maxBytes:a,square:r=!1,transparent:o=!1}){let n=e;if(typeof Blob<"u"&&e instanceof Blob){const c=Bt(e);if(c)throw new Error(c);n=await br(e)}else if(!e||typeof e!="object"||!("width"in e)){const c=Bt(e);if(c)throw new Error(c)}const i=o&&_a()!=="image/webp"?"image/png":_a();let s=t;for(let c=0;c<6;c+=1){const f=hr(n,s,r,o);for(const u of[.86,.76,.66,.56,.46]){const g=f.toDataURL(i,u),y=ur(g);if(y<=a)return{dataUrl:g,bytes:y,width:f.width,height:f.height}}s=Math.round(s*.8)}throw new Error("Não foi possível reduzir esta imagem o suficiente. Tente uma menor.")}const en=1e4,tn=20;function an(e,t,{windowMs:a=en,max:r=tn}={}){return!e||!Number.isFinite(e.windowStart)?e?"reset":"create":t-e.windowStart>=a?"reset":e.count>=r?"blocked":"increment"}const rn="Muitas mensagens em pouco tempo. Espere alguns segundos.",Ne=3,on=["weapons","armor","inventory","abilities","macros","conditions"];function nn(e){if(!e||typeof e!="object")return e;const t={...e};on.forEach(r=>{Array.isArray(t[r])||(t[r]=[])}),t.inventory=t.inventory.filter(r=>r&&String(r.name||"").trim()).map(r=>({...r,quantity:Math.max(1,Math.round(Number(r.quantity)||1)),weight:Math.max(0,Number(r.weight)||0)}));const a=Math.round(Number(t.coins));return t.coins=Number.isFinite(a)&&a>0?a:0,typeof t.condition!="string"&&(t.condition=""),t}const sn={chest:"chest",door:"door"};function cn(e){return!e||typeof e!="object"||e.sprite?e:{...e,sprite:sn[e.kind]||"object"}}function dn(e){return!e||typeof e!="object"||!(e.door||e.barrier)||typeof e.open=="boolean"?e:{...e,open:!1}}function ln(e){if(!e||typeof e!="object")return e;const t={...e};return Array.isArray(t.markers)&&(t.markers=t.markers.map(cn)),Array.isArray(t.walls)&&(t.walls=t.walls.map(dn)),t}function gc(e){return!e||typeof e!="object"?!1:(Number(e.schemaVersion)||1)<Ne}function pn(e){if(!e||typeof e!="object")return{};const t=Number(e.version)||1;if(t>Ne)return{...e,futureVersion:!0};let a={...e};return t<3&&(a=ln(a),Array.isArray(a.sheets)&&(a.sheets=a.sheets.map(nn))),{...a,version:Ne}}function bc(e){if(!e||typeof e!="object")return{error:"O arquivo não é um backup do NightTable."};const t=Number(e.version);return!Number.isInteger(t)||t<2?{error:"Backup sem versão: exporte de novo pela mesa."}:t>Ne?{error:`Backup feito numa versão mais nova do NightTable (v${t}). Atualize o app.`}:!e.scene||!Array.isArray(e.sheets)||e.sheets.length===0||!Array.isArray(e.tokens)||!Array.isArray(e.markers)?{error:"Backup incompleto: faltam cena, fichas, tokens ou objetos."}:{backup:pn(e)}}const fn=[{days:0,label:"Sempre"},{days:365,label:"1 ano"},{days:90,label:"90 dias"},{days:30,label:"30 dias"}],un=24*36e5;function mn(e){const t=Number(e);return fn.some(a=>a.days===t)?t:0}function hc(e,t=Date.now()){const a=mn(e);return a?t-a*un:null}function gn(e=[]){return{deleteTables:e.filter(t=>t.role==="gm").map(t=>t.tableId),leaveTables:e.filter(t=>t.role!=="gm").map(t=>t.tableId)}}const bn=[{days:0,label:"Sem validade"},{days:1,label:"1 dia"},{days:7,label:"7 dias"},{days:30,label:"30 dias"}],hn=24*36e5;function xn(e,t=Date.now()){const a=Number(e);return bn.some(r=>r.days===a&&a>0)?t+a*hn:null}const xr=e=>{var t;return typeof e=="number"?e:((t=e==null?void 0:e.toMillis)==null?void 0:t.call(e))??null};function vr(e,t=Date.now()){const a=xr(e);return a!==null&&t>=a}function xc(e,t=Date.now()){const a=xr(e);return a===null?"sem validade":t>=a?"vencido":`vale até ${new Date(a).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}`}function Ke(e=(a=>(a=globalThis.location)==null?void 0:a.origin)()||"",t="/nighttablesite/"){return`${e}${t.endsWith("/")?t:`${t}/`}`}function vc(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Ke(t,a)}?convite=${encodeURIComponent(e)}`}function yc(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Ke(t,a)}?transmissao=${encodeURIComponent(e)}`}function vn(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{return(new URLSearchParams(e).get("transmissao")||"").trim().toUpperCase().slice(0,24)||null}catch{return null}}const $a={life:"maxLife",effort:"maxEffort",coins:null,xp:null},yn=new Set(["id","updatedAt","history"]),wn=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function Ut(e,t){return[...new Set([...Object.keys(e||{}),...Object.keys(t||{})])].filter(r=>!yn.has(r)&&!wn(e==null?void 0:e[r],t==null?void 0:t[r]))}const Oa=e=>`${e==null?void 0:e.at}|${e==null?void 0:e.by}|${JSON.stringify(e==null?void 0:e.changes)}`;function Sn(e,t,a){if(!a)return t;const r={...a};Ut(e,t).forEach(i=>{if(!(i in $a&&Number.isFinite(Number(e==null?void 0:e[i]))&&Number.isFinite(Number(t==null?void 0:t[i]))&&Number.isFinite(Number(a[i])))){(t==null?void 0:t[i])===void 0?delete r[i]:r[i]=t[i];return}const c=Number(t[i])-Number(e[i]),f=$a[i],u=f?Number(Ut(e,t).includes(f)?t[f]:a[f]):1/0;r[i]=Math.max(0,Math.min(Number.isFinite(u)?u:1/0,Number(a[i])+c))});const o=new Set(((e==null?void 0:e.history)||[]).map(Oa)),n=((t==null?void 0:t.history)||[]).filter(i=>!o.has(Oa(i)));return n.length&&(r.history=[...a.history||[],...n].slice(-30)),r}const Pa="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function la(e=6){const t=crypto.getRandomValues(new Uint32Array(e));return Array.from(t,a=>Pa[a%Pa.length]).join("")}function T(){if(!(_!=null&&_.currentUser))throw new Error("Usuário não autenticado.");return _.currentUser}const q=e=>m(d,"tables",e);async function wc({name:e,initialState:t={},campaign:a=null,avatar:r=null}){const o=T(),n=m(x(d,"tables")),i=la(),s=K(d);return s.set(n,{name:e,...a?{campaign:a}:{},ownerId:o.uid,inviteCode:i,state:{...t,schemaVersion:Ne},createdAt:b(),updatedAt:b()}),s.set(m(n,"members",o.uid),{uid:o.uid,role:"gm",displayName:o.displayName||o.email||"Mestre",tableName:e,...r?{avatar:r}:{},joinedAt:b()}),s.set(m(d,"invites",i),{tableId:n.id,tableName:e,gmName:String(o.displayName||"Mestre").slice(0,80),createdBy:o.uid,createdAt:b()}),await s.commit(),{tableId:n.id,inviteCode:i}}async function Sc(e){const t=String(e||"").trim().toUpperCase();if(!t)return null;const a=await H(m(d,"invites",t));if(!a.exists())return null;const{tableName:r,gmName:o,expiresAt:n}=a.data();return{code:t,tableName:r||"Mesa",gmName:o||null,expiresAt:n??null,expired:vr(n)}}async function kn(e,{avatar:t=null}={}){const a=T(),r=String(e||"").trim().toUpperCase(),o=await H(m(d,"invites",r));if(!o.exists())throw new Error("Convite inválido ou expirado.");const{tableId:n,tableName:i,expiresAt:s,stream:c}=o.data();if(c||vr(s))throw new Error("Convite inválido ou expirado.");const f=m(d,"tables",n,"members",a.uid),u=await H(f).catch(()=>null);return u!=null&&u.exists()?{tableId:n,tableName:i}:(await z(f,{uid:a.uid,role:"player",displayName:a.displayName||a.email||"Jogador",tableName:i,inviteCode:r,guest:!!a.isAnonymous,...t?{avatar:t}:{},joinedAt:b()}),{tableId:n,tableName:i})}async function En(){const e=T(),a=(await F(N(jo(d,"members"),G("uid","==",e.uid)))).docs.map(r=>({tableId:r.ref.parent.parent.id,...r.data()}));return Promise.all(a.map(async r=>{var i,s;const o=await H(q(r.tableId)).catch(()=>null),n=o!=null&&o.exists()?o.data():null;return{...r,tableName:(n==null?void 0:n.name)||r.tableName,archived:!!(n!=null&&n.archived),systemName:((s=(i=n==null?void 0:n.state)==null?void 0:i.system)==null?void 0:s.name)||"",campaign:(n==null?void 0:n.campaign)||null}}))}function kc(e,t){return Q(q(e),{name:String(t).trim().slice(0,80),updatedAt:b()})}function Ec(e,t){return Q(q(e),{archived:!!t,updatedAt:b()})}function Ac(e,t,a,r=()=>{}){return C(q(e),{includeMetadataChanges:!0},o=>{r({fromCache:o.metadata.fromCache,hasPendingWrites:o.metadata.hasPendingWrites}),t(o.exists()?{id:o.id,...o.data()}:null)},a)}function jc(e,t,a){return C(x(d,"tables",e,"members"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Mc(e,t){return Q(q(e),{campaign:t,updatedAt:b()})}function zc(e,t){const a=Object.fromEntries(Object.entries(t).map(([r,o])=>[`state.${r}`,o]));return da("state",Q(q(e),{...a,updatedAt:b()}))}function Ic(e,{isGm:t},a,r){const o=x(d,"tables",e,"tokens"),n=t?o:N(o,G("hidden","==",!1));return C(n,i=>a(i.docs.map(s=>({id:s.id,...s.data()}))),r)}function Cc(e,t){const{id:a,...r}=t;return z(m(d,"tables",e,"tokens",a),{hidden:!!r.monster,ownerUid:null,...r})}function Tc(e,t,a,r){return da("move",Q(m(d,"tables",e,"tokens",t),{x:a,y:r}))}function Rc(e,t,a){return Q(m(d,"tables",e,"tokens",t),{rotation:a})}function Nc(e,t){return V(m(d,"tables",e,"tokens",t))}function Gt({id:e,...t}){return t}async function _c(e,{tokens:t,sheets:a,currentTokens:r=[],currentSheets:o=[]}){const n=K(d),i=new Set(t.map(c=>c.id)),s=new Set(a.map(c=>c.id));r.filter(c=>!i.has(c.id)).forEach(c=>n.delete(m(d,"tables",e,"tokens",c.id))),o.filter(c=>!s.has(c.id)).forEach(c=>n.delete(m(d,"tables",e,"sheets",c.id))),t.forEach(c=>n.set(m(d,"tables",e,"tokens",c.id),{ownerUid:null,sheetId:null,...Gt(c),hidden:c.hidden??!!c.monster})),a.forEach(c=>n.set(m(d,"tables",e,"sheets",c.id),{ownerUid:null,...Gt(c),updatedAt:b()})),await n.commit()}async function $c(e,t,a,r=[]){const o=(a==null?void 0:a.uid)||null,n=K(d);n.update(m(d,"tables",e,"sheets",t),{ownerUid:o,owner:(a==null?void 0:a.displayName)||"Mestre",updatedAt:b()}),r.filter(i=>i.sheetId===t).forEach(i=>n.update(m(d,"tables",e,"tokens",i.id),{ownerUid:o})),await n.commit()}function Oc(e,t,a){return C(x(d,"tables",e,"sheets"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Pc(e,t){const{id:a,...r}=t,o=a?m(d,"tables",e,"sheets",a):m(x(d,"tables",e,"sheets"));return z(o,{ownerUid:null,...r,updatedAt:b()}).then(()=>o.id)}async function Dc(e,t,a){const r=m(d,"tables",e,"sheets",a.id);try{await pr(d,async o=>{const n=await o.get(r),{id:i,...s}=n.exists()?Sn(t,a,{id:n.id,...n.data()}):{ownerUid:null,...a};o.set(r,{...s,updatedAt:b()})})}catch(o){if((o==null?void 0:o.code)!=="unavailable"&&(o==null?void 0:o.code)!=="failed-precondition")throw o;const n=Object.fromEntries(Ut(t,a).map(i=>[i,a[i]===void 0?Mo():a[i]]));a.history&&a.history!==(t==null?void 0:t.history)&&(n.history=a.history),await Q(r,{...n,updatedAt:b()})}}function Lc(e,t,a,r,o){const n=x(d,"tables",e,t,a,"versions");return C(N(n,Y("at","desc"),re(20)),i=>r(i.docs.map(s=>({id:s.id,...s.data()}))),o)}async function Fc(e,t,a,r,o){const{id:n,...i}=r,s=x(d,"tables",e,t,a,"versions");await z(m(s,n),i);const f=(await F(N(s,Y("at","desc")))).docs.slice(o);if(f.length){const u=K(d);f.forEach(g=>u.delete(g.ref)),await u.commit()}}async function Da(e,t){const a=await F(x(d,"tables",e,t));for(const r of a.docs){const o=await F(x(r.ref,"versions"));await xe(o.docs.map(n=>i=>i.delete(n.ref)))}}async function Bc(e,t){return await Promise.all(["player","gm"].map(a=>V(m(d,"tables",e,"sheets",t,"private",a)).catch(()=>{}))),V(m(d,"tables",e,"sheets",t))}function Uc(e,t,a,r,o){return C(m(d,"tables",e,"sheets",t,"private",a),n=>r(n.exists()&&n.data().notes||""),o)}function Gc(e,t,a,r){return z(m(d,"tables",e,"sheets",t,"private",a),{notes:String(r||"").slice(0,4e3),updatedAt:b()})}const Ie=new Map;async function An(e){var t,a;if(!Ie.has(e)){const r=await H(m(d,"tables",e,"rate",T().uid)).catch(()=>null),o=r!=null&&r.exists()?r.data():null;Ie.set(e,o?{windowStart:(a=(t=o.windowStart)==null?void 0:t.toMillis)==null?void 0:a.call(t),count:o.count}:null)}return Ie.get(e)}function jn(e,t,a){const r=T().uid,o=m(d,"tables",t,"rate",r);a==="increment"?e.update(o,{count:To(1),updatedAt:b()}):e.set(o,{uid:r,windowStart:b(),count:1,updatedAt:b()})}async function yr(e,t){const a=await An(e),r=an(a,Date.now()),o=r==="blocked"?"reset":r,n=async i=>{const s=K(d);t(s),jn(s,e,i),await s.commit();const c=Ie.get(e);Ie.set(e,i==="increment"&&c?{...c,count:c.count+1}:{windowStart:Date.now(),count:1})};try{await n(o)}catch(i){if((i==null?void 0:i.code)!=="permission-denied"&&(i==null?void 0:i.code)!=="not-found")throw i;Ie.delete(e);try{await n(o==="increment"?"reset":"increment")}catch(s){throw(s==null?void 0:s.code)==="permission-denied"&&r==="blocked"?Object.assign(new Error(rn),{code:"rate-limited"}):s}}}async function Vc(e,{name:t,mime:a,bytes:r,dataUrl:o,visibility:n="public",to:i=null}){const s=m(x(d,"tables",e,"chatFiles"));return await z(s,{uid:T().uid,name:t,mime:String(a||"").slice(0,80),bytes:r,visibility:n,to:i,dataUrl:o,createdAt:b()}),s.id}async function qc(e,t){const a=await H(m(d,"tables",e,"chatFiles",t));if(!a.exists())throw new Error("Este anexo não está mais disponível.");return a.data().dataUrl}function Wc(e,t){return V(m(d,"tables",e,"chatFiles",t))}function Hc(e,{author:t,text:a,type:r="chat",visibility:o="public",roll:n=null,apply:i=null,to:s=null,toName:c=null,character:f=null,sound:u=null,celebrate:g=null,attachment:y=null,channel:M=null,item:S=null}){const v=T(),R=m(x(d,"tables",e,"messages"));return da("message",yr(e,j=>{g&&j.set(m(d,"tables",e,"celebration","state"),{at:b(),uid:v.uid,by:String(t||"").slice(0,80)}),j.set(R,{uid:v.uid,author:t,text:a,type:r,visibility:o,roll:n,apply:i,to:s,toName:c,...f?{character:f}:{},...u?{sound:String(u).slice(0,60)}:{},...g?{celebrate:g}:{},...y?{attachment:y}:{},...M&&M!=="mesa"?{channel:M}:{},...S?{item:S}:{},createdAt:b()})}).then(()=>R))}function Yc(e,t,a,r){const o=T().uid;return Q(m(d,"tables",e,"messages",t),new Co("reactions",a),r?zo(o):Io(o))}async function Kc(e,{isGm:t,uid:a},r,o=500){const n=x(d,"tables",e,"messages"),i=r?[G("createdAt",">=",sa.fromMillis(r))]:[],s=u=>u.docs.map(g=>({id:g.id,...g.data({serverTimestamps:"estimate"})})),c=t?[N(n,...i,Y("createdAt","desc"),re(o))]:[N(n,G("visibility","==","public"),...i,Y("createdAt","desc"),re(o)),N(n,G("uid","==",a),G("visibility","in",["gm","whisper"]),...i,Y("createdAt","desc"),re(o)),N(n,G("to","==",a),...i,Y("createdAt","desc"),re(o))],f=await Promise.all(c.map(u=>F(u)));return[...new Map(f.flatMap(s).map(u=>[u.id,u])).values()]}function Jc(e,{isGm:t,uid:a},r,o,n=80){const i=x(d,"tables",e,"messages"),s=v=>v.docs.map(R=>({id:R.id,...R.data({serverTimestamps:"estimate"})}));if(t)return C(N(i,Y("createdAt","desc"),re(n)),v=>r(s(v).reverse()),o);let c=[],f=[],u=[];const g=()=>r([...new Map([...c,...f,...u].map(v=>[v.id,v])).values()].sort((v,R)=>{var j,h,D,J;return(((h=(j=v.createdAt)==null?void 0:j.toMillis)==null?void 0:h.call(j))||0)-(((J=(D=R.createdAt)==null?void 0:D.toMillis)==null?void 0:J.call(D))||0)}).slice(-n)),y=C(N(i,G("visibility","==","public"),Y("createdAt","desc"),re(n)),v=>{c=s(v),g()},o),M=C(N(i,G("uid","==",a),G("visibility","in",["gm","whisper"]),Y("createdAt","desc"),re(n)),v=>{f=s(v),g()},o),S=C(N(i,G("to","==",a),Y("createdAt","desc"),re(n)),v=>{u=s(v),g()},o);return()=>{y(),M(),S()}}function Xc(e,t,a){return C(m(d,"tables",e,"private","gm"),r=>t(r.data()||{}),a)}function Zc(e,t,a,r){return C(m(d,"tables",e,"playerNotes",t),o=>{var n;return a(((n=o.data())==null?void 0:n.notes)||[])},r)}function Qc(e,t,a){return z(m(d,"tables",e,"playerNotes",t),{notes:a,updatedAt:b()})}function ed(e,t){return z(m(d,"tables",e,"private","gm"),{...t,updatedAt:b()},{merge:!0})}function td(e,t,a){return C(x(d,"tables",e,"locks"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function ad(e,t,a){return z(m(d,"tables",e,"locks",t),{...a,updatedAt:b()})}async function rd(e,t){const a=await F(N(x(d,"tables",e,"locks"),G("markerId","==",t))),r=K(d);a.forEach(o=>r.delete(o.ref)),await r.commit()}function od(e,t,a){return z(m(d,"tables",e,"private","gm"),{lockCodes:{[t]:a},updatedAt:b()},{merge:!0})}function nd(e,t,a){return C(x(d,"tables",e,"scenes"),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function id(e,t){const{id:a,...r}=t;return z(m(d,"tables",e,"scenes",a),{...r,savedAt:b()})}function sd(e,t){return V(m(d,"tables",e,"scenes",t))}async function cd(e,{remove:t,add:a}){const r=K(d);t.forEach(o=>r.delete(m(d,"tables",e,"tokens",o.id))),a.forEach(o=>r.set(m(d,"tables",e,"tokens",o.id),{ownerUid:null,sheetId:null,...Gt(o),hidden:o.hidden??!!o.monster})),await r.commit()}function dd(e,{isGm:t,uid:a},r,o){const n=x(d,"tables",e,"handouts"),i=t?n:N(n,G("audience","array-contains-any",["all",a]));return C(i,s=>r(s.docs.map(c=>({id:c.id,...c.data({serverTimestamps:"estimate"})}))),o)}function ld(e,t){const{id:a,...r}=t;return z(m(d,"tables",e,"handouts",a),{...r,createdAt:b()})}function pd(e,t){return V(m(d,"tables",e,"handouts",t))}function fd(e,{isGm:t},a,r){const o=x(d,"tables",e,"containers"),n=t?o:N(o,G("opened","==",!0));return C(n,i=>a(Object.fromEntries(i.docs.map(s=>[s.id,s.data()]))),r)}function ud(e,t,{contents:a,opened:r=!1}){return z(m(d,"tables",e,"containers",t),{contents:a,opened:r},{merge:!0})}function md(e,t){return z(m(d,"tables",e,"containers",t),{ensured:!0},{merge:!0})}function gd(e,t){return V(m(d,"tables",e,"containers",t))}function bd(e,t,a){return Q(m(d,"tables",e,"containers",t),{opened:!0,openedBy:String(a).slice(0,80),openedAt:b()})}function hd(e,t,a,r){const o=m(d,"tables",e,"containers",t);return pr(d,async n=>{const i=await n.get(o),s=i.exists()?i.data().contents||[]:[],c=s.find(f=>f.id===a);if(!c)throw Object.assign(new Error("Alguém já pegou este item."),{code:"already-taken"});return n.update(o,{contents:s.filter(f=>f.id!==a),takenBy:String(r).slice(0,80)}),c})}function xd(e){const t=Object.fromEntries(Object.entries(e.context||{}).map(([a,r])=>[a,String(r??"").slice(0,80)]).slice(0,10));return ia(x(d,"errorReports"),{at:Number(e.at)||Date.now(),where:String(e.where||"").slice(0,60),message:String(e.message||"").slice(0,300),code:e.code?String(e.code).slice(0,60):null,stack:e.stack?String(e.stack).slice(0,2e3):null,context:t,createdAt:b()})}async function vd(e,t,a=200){const r=await F(N(x(d,"tables",e,"messages"),G("createdAt","<",sa.fromMillis(t)),Y("createdAt"),re(a)));return await xe(r.docs.map(o=>n=>n.delete(o.ref))),r.size}async function Mn(e=()=>{}){const t=T().uid,a=gn(await En());for(const o of a.deleteTables)e("Apagando suas mesas…"),await Rn(o);for(const o of a.leaveTables)e("Saindo das mesas em que você joga…"),await V(m(d,"tables",o,"members",t)).catch(()=>{});e("Apagando sua biblioteca e seu perfil…");const r=await F(x(d,"users",t,"library"));return await xe(r.docs.map(o=>n=>n.delete(o.ref))),await V(m(d,"users",t)),a}function yd(e,{actor:t,action:a,detail:r=""}){return ia(x(d,"tables",e,"audit"),{uid:T().uid,actor:String(t).slice(0,80),action:String(a).slice(0,40),detail:String(r).slice(0,200),createdAt:b()})}function wd(e,t,a){return C(N(x(d,"tables",e,"audit"),Y("createdAt","desc"),re(50)),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function Sd(e,t,a){return Q(m(d,"tables",e,"members",t),{permissions:a})}function kd(e,t,a){return Q(m(d,"tables",e,"members",t),{muted:!!a})}async function Ed(e,t){return await z(m(d,"tables",e,"bans",t.uid),{uid:t.uid,displayName:String(t.displayName||"").slice(0,80),at:b()}),Tn(e,t)}function Ad(e,t){return V(m(d,"tables",e,"messages",t))}function jd(e,t,a){return Q(m(d,"tables",e,"messages",t),{text:a,editedAt:b()})}function Md(e,t,a){const{displayName:r,color:o,pronouns:n,avatar:i}=a;return Q(m(d,"tables",e,"members",t),{...r?{displayName:r}:{},color:o,pronouns:n,avatar:i})}function zd(e,t,a){return Q(m(d,"tables",e,"members",t),{role:a})}function Id(e,t){const a=T().uid;return C(x(d,"users",a,"library"),r=>e(r.docs.map(o=>({...o.data(),id:o.id}))),t)}function Cd(e){const t=T().uid,{id:a,...r}=e;return z(m(d,"users",t,"library",a),{...r,createdAt:b()})}function Td(e){return V(m(d,"users",T().uid,"library",e))}function Rd(e,t,a){return C(x(d,"tables",e,"presence"),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function Nd(e,{name:t,activity:a}){const r=T().uid,o={uid:r,name:String(t||"Jogador").slice(0,80),lastSeen:b()};return a!==void 0&&Object.assign(o,{activity:a,activityAt:b()}),z(m(d,"tables",e,"presence",r),o,{merge:!0})}function _d(e,t,a){return C(N(x(d,"tables",e,"journal"),Y("createdAt","desc"),re(100)),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function $d(e,{title:t,text:a,author:r}){return ia(x(d,"tables",e,"journal"),{title:t,text:a,author:r,uid:T().uid,createdAt:b()})}function Od(e,t){return V(m(d,"tables",e,"journal",t))}function Pd(e,t,a){return z(m(d,"tables",e,"private","gm"),{sceneNotes:{[t]:a},updatedAt:b()},{merge:!0})}function Dd(e,t,a){return C(x(d,"tables",e,"drawings"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Ld(e,t){const a=T(),{id:r,...o}=t;return z(m(d,"tables",e,"drawings",r),{...o,uid:a.uid,createdAt:b()})}function Fd(e,t){return V(m(d,"tables",e,"drawings",t))}async function Bd(e,t){for(let a=0;a<t.length;a+=450){const r=K(d);t.slice(a,a+450).forEach(o=>r.delete(m(d,"tables",e,"drawings",o.id))),await r.commit()}}async function xe(e,t=400){for(let a=0;a<e.length;a+=t){const r=K(d);e.slice(a,a+t).forEach(o=>o(r)),await r.commit()}}function Ud(e,t,a){return C(N(x(d,"tables",e,"mapImages"),Y("createdAt","desc")),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}async function Gd(e,{name:t,dataUrl:a,bytes:r,width:o,height:n,thumb:i=null}){const s=m(x(d,"tables",e,"mapImages")),c=mr(a);return await xe(c.map((f,u)=>g=>g.set(m(s,"chunks",String(u)),{index:u,data:f})),4),await z(s,{name:t,bytes:r,width:o,height:n,chunkCount:c.length,...Xo(i)?{thumb:i}:{},uid:T().uid,createdAt:b()}),s.id}async function Vd(e,t){const a=await F(x(d,"tables",e,"mapImages",t,"chunks"));if(a.empty)throw new Error("Mapa não encontrado.");return gr(a.docs.map(r=>r.data()))}async function zn(e,t){const a=await F(x(d,"tables",e,"mapImages",t,"chunks")),r=K(d);a.forEach(o=>r.delete(o.ref)),r.delete(m(d,"tables",e,"mapImages",t)),await r.commit()}function qd(e,t,a){return C(N(x(d,"tables",e,"audioFiles"),Y("createdAt","desc")),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}async function Wd(e,{name:t,kind:a,dataUrl:r,bytes:o}){const n=m(x(d,"tables",e,"audioFiles")),i=mr(r);return await xe(i.map((s,c)=>f=>f.set(m(n,"chunks",String(c)),{index:c,data:s})),4),await z(n,{name:t,kind:a,bytes:o,chunkCount:i.length,uid:T().uid,createdAt:b()}),n.id}async function Hd(e,t){const a=await F(x(d,"tables",e,"audioFiles",t,"chunks"));if(a.empty)throw new Error("Áudio não encontrado.");return gr(a.docs.map(r=>r.data()))}async function In(e,t){const a=await F(x(d,"tables",e,"audioFiles",t,"chunks")),r=K(d);a.forEach(o=>r.delete(o.ref)),r.delete(m(d,"tables",e,"audioFiles",t)),await r.commit()}function Yd(e,t,a){return C(x(d,"tables",e,"sheetImages"),r=>t(Object.fromEntries(r.docs.map(o=>[o.id,o.data()]))),a)}function Kd(e,t,{portrait:a,avatar:r,animated:o=null,cutout:n=!1}){return z(m(d,"tables",e,"sheetImages",t),{portrait:a,avatar:r,...o?{animated:o}:{},...n?{cutout:!0}:{},updatedAt:b()})}function Jd(e,t){return V(m(d,"tables",e,"sheetImages",t))}async function Xd(e,t=0){const a=await H(q(e)),{inviteCode:r,name:o}=a.data();let n=null;for(let c=0;c<5&&!n;c+=1){const f=la();(await H(m(d,"invites",f))).exists()||(n=f)}if(!n)throw new Error("Não foi possível gerar um código. Tente de novo.");const i=K(d),s=xn(t);return i.set(m(d,"invites",n),{tableId:e,tableName:o,gmName:String(T().displayName||"Mestre").slice(0,80),createdBy:T().uid,createdAt:b(),expiresAt:s?sa.fromMillis(s):null}),i.update(q(e),{inviteCode:n,inviteExpiresAt:s,updatedAt:b()}),r&&i.delete(m(d,"invites",r)),await i.commit(),n}async function Zd(e){const t=await H(q(e)),{inviteCode:a}=t.data(),r=K(d);a&&r.delete(m(d,"invites",a)),r.update(q(e),{inviteCode:null,inviteExpiresAt:null,updatedAt:b()}),await r.commit()}async function Qd(e){const t=await H(q(e)),{streamCode:a,name:r}=t.data(),o=la(16),n=K(d);return n.set(m(d,"invites",o),{tableId:e,tableName:r,gmName:String(T().displayName||"Mestre").slice(0,80),createdBy:T().uid,createdAt:b(),stream:!0}),n.update(q(e),{streamCode:o,updatedAt:b()}),a&&n.delete(m(d,"invites",a)),await n.commit(),a&&await wr(e),o}async function el(e){const t=await H(q(e)),{streamCode:a}=t.data(),r=K(d);a&&r.delete(m(d,"invites",a)),r.update(q(e),{streamCode:null,updatedAt:b()}),await r.commit(),await wr(e)}async function wr(e){const t=await F(N(x(q(e),"members"),G("stream","==",!0)));await xe(t.docs.map(a=>r=>r.delete(a.ref)))}async function Cn(e){const t=T(),a=String(e||"").trim().toUpperCase(),r=await H(m(d,"invites",a));if(!r.exists()||!r.data().stream)throw new Error("Link de transmissão inválido ou revogado.");const{tableId:o,tableName:n}=r.data(),i=m(d,"tables",o,"members",t.uid),s=await H(i).catch(()=>null);return s!=null&&s.exists()?{tableId:o,tableName:n}:(await z(i,{uid:t.uid,role:"spectator",displayName:t.displayName||"Transmissão",tableName:n,inviteCode:a,guest:!!t.isAnonymous,stream:!0,joinedAt:b()}),{tableId:o,tableName:n})}async function Tn(e,t){const a=q(e),[r,o]=await Promise.all([F(N(x(a,"sheets"),G("ownerUid","==",t.uid))),F(N(x(a,"tokens"),G("ownerUid","==",t.uid)))]);return await yr(e,n=>{n.delete(m(a,"members",t.uid)),r.forEach(i=>n.update(i.ref,{ownerUid:null,owner:"Mestre",updatedAt:b()})),o.forEach(i=>n.update(i.ref,{ownerUid:null})),n.set(m(x(a,"messages")),{uid:T().uid,author:"Sistema",text:`${t.displayName||"Um jogador"} foi removido da mesa`,type:"system",visibility:"public",roll:null,apply:null,to:null,toName:null,createdAt:b()})}),{releasedSheets:r.size,releasedTokens:o.size}}async function Rn(e){const t=q(e),a=await H(t),{inviteCode:r,streamCode:o}=a.data(),n=await F(x(t,"mapImages"));for(const c of n.docs)await zn(e,c.id);await Da(e,"sheets"),await Da(e,"scenes");const i=await F(x(t,"audioFiles"));for(const c of i.docs)await In(e,c.id);for(const c of["tokens","sheets","sheetImages","messages","drawings","private","containers","celebration","bans","locks","handouts","journal","scenes","presence","rate","audit"]){const f=await F(x(t,c));await xe(f.docs.map(u=>g=>g.delete(u.ref)))}r&&await V(m(d,"invites",r)),o&&await V(m(d,"invites",o));const s=await F(x(t,"members"));await xe(s.docs.map(c=>f=>f.delete(c.ref))),await V(t)}_&&(_.languageCode="pt");async function Qe(e,t={}){var o;const a=m(d,"users",e.uid);if((await H(a)).exists()){await z(a,{lastLoginAt:b()},{merge:!0});return}await z(a,{displayName:t.displayName||e.displayName||((o=e.email)==null?void 0:o.split("@")[0])||"Aventureiro",email:e.email||null,photoURL:e.photoURL||null,createdAt:b(),lastLoginAt:b()})}function Nn(e){return Po(_,e)}async function tl(e,t){const{user:a}=await Ro(_,e,t);return await Qe(a),a}async function al({name:e,email:t,password:a}){const{user:r}=await No(_,t,a);return e&&await wt(r,{displayName:e}),await Qe(r,{displayName:e}),r}async function rl(){const{user:e}=await $o(_,new Oo);return await Qe(e),e}async function ol({name:e,inviteCode:t}){var n;const a=String(e||"").trim().slice(0,40);if(!a)throw Object.assign(new Error("Informe seu nome."),{code:"guest/no-name"});if(!String(t||"").trim())throw Object.assign(new Error("Informe o código de convite."),{code:"guest/no-code"});const r=(n=_.currentUser)!=null&&n.isAnonymous?_.currentUser:null,o=r||(await fr(_)).user;await wt(o,{displayName:a}),await Qe(o,{displayName:a});try{return await kn(t)}catch(i){throw r||await o.delete().catch(()=>ca(_)),i}}async function nl(e){const t=_.currentUser,a=t||(await fr(_)).user;t||(await wt(a,{displayName:"Transmissão"}),await Qe(a,{displayName:"Transmissão"}));try{return await Cn(e)}catch(r){throw t||await a.delete().catch(()=>ca(_)),r}}async function il(e){const t=_.currentUser;t&&(await Mn(e),e==null||e("Apagando a conta…"),await t.delete())}function sl(e){return _o(_,e)}function _n(){return ca(_)}async function $n(e){const t=await H(m(d,"users",e));return t.exists()?t.data():null}async function On({displayName:e,photo:t,avatarId:a,avatarColor:r}){const o=_.currentUser;if(!o)throw new Error("Entre na sua conta para editar o perfil.");e&&e!==o.displayName&&await wt(o,{displayName:e}),await z(m(d,"users",o.uid),{displayName:e||o.displayName||null,photo:t,avatarId:a,avatarColor:r,updatedAt:b()},{merge:!0})}const Pn={"auth/invalid-email":"E-mail inválido.","auth/invalid-credential":"E-mail ou senha incorretos.","auth/user-not-found":"E-mail ou senha incorretos.","auth/wrong-password":"E-mail ou senha incorretos.","auth/email-already-in-use":"Este e-mail já está cadastrado.","auth/weak-password":"A senha precisa ter pelo menos 6 caracteres.","auth/too-many-requests":"Muitas tentativas. Aguarde um pouco e tente de novo.","auth/popup-closed-by-user":"A janela de login foi fechada antes de concluir.","auth/popup-blocked":"O navegador bloqueou a janela de login. Libere pop-ups para este site.","auth/network-request-failed":"Falha de conexão. Verifique sua internet.","auth/operation-not-allowed":"Este método de login não está ativado no Firebase.","auth/admin-restricted-operation":"A entrada sem conta não está ativada no Firebase (Authentication › Sign-in method › Anônimo).","guest/no-name":"Informe seu nome.","permission-denied":"Não foi possível entrar nesta mesa. Confira o código; se você foi bloqueado pelo Mestre, não dá para voltar.","auth/requires-recent-login":"Por segurança, saia, entre de novo e repita a exclusão.","guest/no-code":"Informe o código de convite."};function cl(e){return(e==null?void 0:e.message)==="Convite inválido ou expirado."?e.message:Pn[e==null?void 0:e.code]||"Não foi possível concluir. Tente novamente."}const Dn=["#6d52be","#2f7280","#b36154","#4d7a3f","#a0742c","#7c4b62","#3d5fa8","#8a3f8f","#4b4f5c"],dl=["ela/dela","ele/dele","elu/delu"],Sr=40,Ln=24,kr=4e4,Fn=/^#[0-9a-f]{6}$/i;function pa(e){return typeof e=="string"&&Fn.test(e)}function ll(e={}){const t=String(e.displayName||"").trim().slice(0,Sr),a=String(e.pronouns||"").trim().slice(0,Ln),r=typeof e.avatar=="string"&&e.avatar.startsWith("data:image/")&&e.avatar.length<=kr?e.avatar:null;return{displayName:t||null,pronouns:a||null,color:pa(e.color)?e.color.toLowerCase():null,avatar:r}}function pl(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"?":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}const Bn=[{id:"dragao",emoji:"🐉",label:"Dragão"},{id:"mago",emoji:"🧙",label:"Mago"},{id:"elfo",emoji:"🧝",label:"Elfo"},{id:"caveira",emoji:"💀",label:"Caveira"},{id:"fantasma",emoji:"👻",label:"Fantasma"},{id:"lobo",emoji:"🐺",label:"Lobo"},{id:"coruja",emoji:"🦉",label:"Coruja"},{id:"gato",emoji:"🐈‍⬛",label:"Gato preto"},{id:"espadas",emoji:"⚔️",label:"Espadas"},{id:"escudo",emoji:"🛡️",label:"Escudo"},{id:"dado",emoji:"🎲",label:"Dado"},{id:"lua",emoji:"🌙",label:"Lua"}],Vt=Dn;function Er(e){return Bn.find(t=>t.id===e)||null}function Un(e,t=Vt[0]){const a=Er(e);if(!a)return null;const o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${pa(t)?t:Vt[0]}"/><text x="32" y="43" font-size="34" text-anchor="middle">${a.emoji}</text></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(o)}`}function La(e={}){const t=String(e.displayName||"").trim().slice(0,Sr)||null,a=Er(e.avatarId)?e.avatarId:null,r=a&&pa(e.avatarColor)?e.avatarColor.toLowerCase():null;let o=typeof e.photo=="string"&&e.photo.startsWith("data:image/")&&e.photo.length<=kr?e.photo:null;return a&&(o=Un(a,r||Vt[0])),{displayName:t,photo:o,avatarId:a,avatarColor:r}}function fl(e,t){return(e==null?void 0:e.photo)||(t==null?void 0:t.photoURL)||null}function ul(e,t){return(e==null?void 0:e.displayName)||(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||""}const Ar=$.createContext({user:null,profile:null,loading:!1,enabled:!1,logout:async()=>{},saveProfile:async()=>{}});function Gn({children:e}){const[t,a]=$.useState(null),[r,o]=$.useState(dt),[n,i]=$.useState(null);$.useEffect(()=>{if(dt)return Nn(u=>{a(u),o(!1)})},[]),$.useEffect(()=>{if(i(null),!t)return;let u=!0;return $n(t.uid).then(g=>{u&&g&&i(La({...g,displayName:g.displayName||t.displayName}))}).catch(()=>{}),()=>{u=!1}},[t==null?void 0:t.uid]);const s=async u=>{const g=La(u);if(!g.displayName)throw new Error("Escolha um nome.");return await On(g),i(g),g},c=async()=>{t!=null&&t.isAnonymous&&!window.confirm("Você entrou sem conta. Ao sair, perde o acesso a esta mesa e precisará do convite de novo. Sair mesmo assim?")||await _n()},f=$.useMemo(()=>({user:t,profile:n,loading:r,enabled:dt,logout:c,saveProfile:s}),[t,n,r]);return l.jsx(Ar.Provider,{value:f,children:e})}function Vn(){return $.useContext(Ar)}const Fa=50,qn=5,ze=[];let bt={},qt=null,Ba=0;function Wn(e){bt={...bt,...e}}function ml(e){qt=e}const st=(e,t)=>String(e||"").slice(0,t);function Hn(e,t,a=bt,r=Date.now()){const o=(e==null?void 0:e.message)||(typeof e=="string"?e:"Erro desconhecido");return{at:r,where:st(t,60),message:st(o,300),code:st(e==null?void 0:e.code,60)||null,stack:st(e==null?void 0:e.stack,2e3)||null,context:{...a}}}function Wt(e,t="app"){const a=Hn(e,t);return ze.push(a),ze.length>Fa&&ze.splice(0,ze.length-Fa),qt&&Ba<qn&&(Ba+=1,Promise.resolve().then(()=>qt(a)).catch(()=>{})),a}function Ua(){return[...ze]}function jr(){return JSON.stringify({geradoEm:new Date().toISOString(),contexto:bt,erros:ze},null,2)}function Yn(e=globalThis.window){!(e!=null&&e.addEventListener)||e.__nighttableErrors||(e.__nighttableErrors=!0,e.addEventListener("error",t=>Wt(t.error||t.message,"janela")),e.addEventListener("unhandledrejection",t=>Wt(t.reason,"promessa")))}class Kn extends Z.Component{constructor(a){super(a);Ia(this,"copy",async()=>{try{await navigator.clipboard.writeText(jr()),this.setState({copied:!0})}catch{}});this.state={failed:!1,copied:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(a,r){Wt(Object.assign(a||new Error("Falha na tela"),{stack:`${(a==null?void 0:a.stack)||""}
${(r==null?void 0:r.componentStack)||""}`}),"tela")}render(){if(!this.state.failed)return this.props.children;const a={padding:"9px 16px",border:0,borderRadius:9,color:"#fff",background:"var(--c-7358d0)",fontSize:13,cursor:"pointer"};return l.jsx("main",{role:"alert",style:{height:"100dvh",overflowY:"auto",display:"grid",placeItems:"center",padding:24,color:"var(--c-e7e5e2)",background:"var(--c-0a0b0f)",fontFamily:"system-ui, sans-serif"},children:l.jsxs("div",{style:{maxWidth:440,display:"grid",gap:12,textAlign:"center"},children:[l.jsx("h1",{style:{margin:0,fontSize:22},children:"Algo deu errado nesta tela"}),l.jsx("p",{style:{margin:0,color:"var(--c-a9adb6)",fontSize:14,lineHeight:1.5},children:"Seus dados da mesa estão salvos. Recarregue a página; se continuar, copie o relatório e envie para quem cuida do NightTable."}),l.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[l.jsx("button",{type:"button",style:a,onClick:()=>window.location.reload(),children:"Recarregar"}),l.jsx("button",{type:"button",style:{...a,background:"var(--c-2a2d36)"},onClick:this.copy,children:this.state.copied?"Relatório copiado":"Copiar relatório"})]})]})})}}const Jn={development:{label:"DEV",color:"#63d59a"},emulators:{label:"EMULADOR",color:"#7fe3ff"},staging:{label:"STAGING",color:"#f3c48f"},production:{label:null,color:null}};function Xn(e={}){const t=String(e.VITE_APP_ENV||"").trim().toLowerCase();return t in Jn?t:e.VITE_USE_FIREBASE_EMULATORS==="true"?"emulators":e.DEV?"development":"production"}const Zn={BASE_URL:"/nighttablesite/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyAojCR46U1f6Bivq7ogNUkQMReQZ8RPpmI",VITE_FIREBASE_APP_ID:"1:839551252957:web:f9a1f161e39ab7ebb85e34",VITE_FIREBASE_AUTH_DOMAIN:"nighttable-5621b.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-1Z4XL9CFYE",VITE_FIREBASE_MESSAGING_SENDER_ID:"839551252957",VITE_FIREBASE_PROJECT_ID:"nighttable-5621b",VITE_FIREBASE_STORAGE_BUCKET:"nighttable-5621b.firebasestorage.app",VITE_SERVER_ROLLS:"false",VITE_USE_FIREBASE_EMULATORS:"false"},Qn="09/10/2026";function ei(e=Zn||{}){return String(e.VITE_LEGAL_CONTACT||"").trim()||null}const ht={privacidade:{title:"Política de privacidade",intro:"Esta política explica quais dados o NightTable guarda, para quê e como você pode apagá-los. Ela segue a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018).",sections:[["Quais dados guardamos",["Conta: nome de exibição, e-mail e, se você entrar com Google, a foto do perfil. Senhas ficam só no Firebase Authentication (Google) e nunca são vistas por nós.","Convidado sem conta: o nome que você digitou e um identificador anônimo deste navegador.","Conteúdo da mesa: o que você e os outros participantes criam — mensagens do chat, rolagens, fichas, mapas, imagens, áudios, desenhos, diário, handouts e anotações.","Perfil na mesa: nome, cor, pronome e avatar que você escolher para cada mesa.","Presença: se você está conectado e o que está fazendo no momento (digitando, rolando dados), para mostrar aos outros na mesa.","Registro de auditoria da mesa: ações do Mestre (convites, bloqueios, permissões), visível só aos Mestres."]],["Para que usamos",["Só para fazer a mesa funcionar: entrar, sincronizar em tempo real, guardar o histórico da campanha e aplicar as permissões de cada papel.","Não vendemos dados, não mostramos anúncios e não fazemos perfil de comportamento."]],["Quem vê o quê",["O conteúdo de uma mesa é visível para os participantes dela, conforme o papel (Mestre, co-Mestre, jogador, espectador). Sussurros e handouts privados ficam só com quem os recebe e com os Mestres quando aplicável.","O código de convite mostra o nome da mesa e do Mestre a quem tiver o código."]],["Onde os dados ficam",["No Google Firebase (Authentication e Cloud Firestore), que pode processar dados fora do Brasil, com as garantias contratuais do Google.","Neste navegador (localStorage): preferências, última mesa aberta, personagem escolhido e a biblioteca do modo local."]],["Serviços externos opcionais",["Relatórios de erro: desligados por padrão. Se você ativar em Ajuda e preferências, erros são enviados sem nome, e-mail ou conversas.","Discord: se o Mestre configurar um webhook, as rolagens da mesa são enviadas para o canal do Discord dele, sob a política do Discord.","Link de chamada de voz/vídeo: abre o serviço escolhido pelo Mestre (Discord, Meet etc.), com a política desse serviço."]],["Por quanto tempo",["Enquanto a mesa ou a conta existirem. O Mestre pode definir uma retenção do chat, e mensagens mais antigas são apagadas.","Ao excluir uma mesa, o conteúdo dela é apagado. Cópias em cache do navegador somem ao limpar os dados do site."]],["Seus direitos",['Você pode ver e corrigir seus dados (perfil e fichas), exportar fichas e campanhas em JSON, pedir ao Mestre para sair de uma mesa e excluir a conta em "Excluir minha conta", no lobby — isso apaga as mesas que você criou, sua biblioteca e seu perfil, e tira você das outras mesas.',"Mensagens que você enviou em mesas de outras pessoas ficam com a mesa; peça ao Mestre para apagá-las."]]]},termos:{title:"Termos de uso",intro:"Ao usar o NightTable você concorda com estes termos. Eles valem para quem mestra, joga ou assiste.",sections:[["O serviço",["O NightTable é uma mesa virtual de RPG. Ele é oferecido como está, sem garantia de disponibilidade contínua; faça cópias de segurança das campanhas importantes (Exportar campanha).","Recursos podem mudar ou ser retirados. Recursos experimentais ficam atrás de opções da mesa."]],["Sua conta",["Você é responsável pelo que acontece na sua conta e por guardar sua senha. Convidados sem conta perdem o acesso se apagarem os dados do navegador.","Para criar mesas é preciso ter uma conta cadastrada."]],["Conteúdo",["O que você envia (mapas, imagens, áudios, textos) continua seu. Você declara ter o direito de usá-lo e nos autoriza apenas a guardar e mostrar esse conteúdo aos participantes da mesa.","Não envie material de terceiros sem permissão, conteúdo ilegal, discurso de ódio, assédio, conteúdo sexual envolvendo menores ou dados pessoais de outras pessoas sem consentimento."]],["Convites e moderação",["Quem tem o código de convite entra na mesa. O Mestre é responsável por compartilhar o convite com cuidado e pode revogá-lo, silenciar, remover e bloquear participantes.","Podemos remover conteúdo ou contas que violem estes termos."]],["Limites",["Há limites técnicos de tamanho de imagens, áudios e mensagens, e um limite de mensagens em sequência, para manter o serviço no plano gratuito do Firebase.","Não tente contornar permissões, acessar mesas sem convite ou sobrecarregar o serviço."]],["Mudanças nestes termos",["Quando os termos mudarem, a data no topo será atualizada. Continuar usando depois disso significa aceitar a nova versão."]]]}};function Mr(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Ke(t,a)}?pagina=${e}`}function ti(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{const a=new URLSearchParams(e).get("pagina");return Object.hasOwn(ht,a)?a:null}catch{return null}}const ai=na(l.jsx("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded"),ri=na(l.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47"}),"HelpOutlineRounded");var I="-ms-",We="-moz-",A="-webkit-",zr="comm",kt="rule",fa="decl",oi="@import",ni="@namespace",Ir="@keyframes",ii="@layer",Cr=Math.abs,ua=String.fromCharCode,Ht=Object.assign;function si(e,t){return L(e,0)^45?(((t<<2^L(e,0))<<2^L(e,1))<<2^L(e,2))<<2^L(e,3):0}function Tr(e){return e.trim()}function de(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,a){return e.replace(t,a)}function lt(e,t,a){return e.indexOf(t,a)}function L(e,t){return e.charCodeAt(t)|0}function Ee(e,t,a){return e.slice(t,a)}function se(e){return e.length}function Rr(e){return e.length}function Ge(e,t){return t.push(e),e}function ci(e,t){return e.map(t).join("")}function Ga(e,t){return e.filter(function(a){return!de(a,t)})}var Et=1,_e=1,Nr=0,oe=0,P=0,De="";function At(e,t,a,r,o,n,i,s){return{value:e,root:t,parent:a,type:r,props:o,children:n,line:Et,column:_e,length:i,return:"",siblings:s}}function ge(e,t){return Ht(At("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Me(e){for(;e.root;)e=ge(e.root,{children:[e]});Ge(e,e.siblings)}function di(){return P}function li(){return P=oe>0?L(De,--oe):0,_e--,P===10&&(_e=1,Et--),P}function ce(){return P=oe<Nr?L(De,oe++):0,_e++,P===10&&(_e=1,Et++),P}function be(){return L(De,oe)}function pt(){return oe}function jt(e,t){return Ee(De,e,t)}function Je(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pi(e){return Et=_e=1,Nr=se(De=e),oe=0,[]}function fi(e){return De="",e}function _t(e){return Tr(jt(oe-1,Yt(e===91?e+2:e===40?e+1:e)))}function ui(e){for(;(P=be())&&P<33;)ce();return Je(e)>2||Je(P)>3?"":" "}function mi(e,t){for(;--t&&ce()&&!(P<48||P>102||P>57&&P<65||P>70&&P<97););return jt(e,pt()+(t<6&&be()==32&&ce()==32))}function Yt(e){for(;ce();)switch(P){case e:return oe;case 34:case 39:e!==34&&e!==39&&Yt(P);break;case 40:e===41&&Yt(e);break;case 92:ce();break}return oe}function gi(e,t){for(;ce()&&e+P!==57;)if(e+P===84&&be()===47)break;return"/*"+jt(t,oe-1)+"*"+ua(e===47?e:ce())}function bi(e){for(;!Je(be());)ce();return jt(e,oe)}function hi(e){return fi(ft("",null,null,null,[""],e=pi(e),0,[0],e))}function ft(e,t,a,r,o,n,i,s,c){for(var f=0,u=0,g=i,y=0,M=0,S=0,v=1,R=1,j=1,h=0,D="",J=o,O=n,U=r,k=D;R;)switch(S=h,h=ce()){case 40:if(S!=108&&L(k,g-1)==58){lt(k+=w(_t(h),"&","&\f"),"&\f",Cr(f?s[f-1]:0))!=-1&&(j=-1);break}case 34:case 39:case 91:k+=_t(h);break;case 9:case 10:case 13:case 32:k+=ui(S);break;case 92:k+=mi(pt()-1,7);continue;case 47:switch(be()){case 42:case 47:Ge(xi(gi(ce(),pt()),t,a,c),c),(Je(S||1)==5||Je(be()||1)==5)&&se(k)&&Ee(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*v:s[f++]=se(k)*j;case 125*v:case 59:case 0:switch(h){case 0:case 125:R=0;case 59+u:j==-1&&(k=w(k,/\f/g,"")),M>0&&(se(k)-g||v===0&&S===47)&&Ge(M>32?qa(k+";",r,a,g-1,c):qa(w(k," ","")+";",r,a,g-2,c),c);break;case 59:k+=";";default:if(Ge(U=Va(k,t,a,f,u,o,s,D,J=[],O=[],g,n),n),h===123)if(u===0)ft(k,t,U,U,J,n,g,s,O);else{switch(y){case 99:if(L(k,3)===110)break;case 108:if(L(k,2)===97)break;default:u=0;case 100:case 109:case 115:}u?ft(e,U,U,r&&Ge(Va(e,U,U,0,0,o,s,D,o,J=[],g,O),O),o,O,g,s,r?J:O):ft(k,U,U,U,[""],O,0,s,O)}}f=u=M=0,v=j=1,D=k="",g=i;break;case 58:g=1+se(k),M=S;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&li()==125)continue}switch(k+=ua(h),h*v){case 38:j=u>0?1:(k+="\f",-1);break;case 44:s[f++]=(se(k)-1)*j,j=1;break;case 64:be()===45&&(k+=_t(ce())),y=be(),u=g=se(D=k+=bi(pt())),h++;break;case 45:S===45&&se(k)==2&&(v=0)}}return n}function Va(e,t,a,r,o,n,i,s,c,f,u,g){for(var y=o-1,M=o===0?n:[""],S=Rr(M),v=0,R=0,j=0;v<r;++v)for(var h=0,D=Ee(e,y+1,y=Cr(R=i[v])),J=e;h<S;++h)(J=Tr(R>0?M[h]+" "+D:w(D,/&\f/g,M[h])))&&(c[j++]=J);return At(e,t,a,o===0?kt:s,c,f,u,g)}function xi(e,t,a,r){return At(e,t,a,zr,ua(di()),Ee(e,2,-2),0,r)}function qa(e,t,a,r,o){return At(e,t,a,fa,Ee(e,0,r),Ee(e,r+1,-1),r,o)}function _r(e,t,a){switch(si(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return A+e+e;case 4855:return A+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return We+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+We+e+I+e+e;case 5936:switch(L(e,t+11)){case 114:return A+e+I+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+I+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+I+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+I+e+e;case 6165:return A+e+I+"flex-"+e+e;case 5187:return A+e+w(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+I+"flex-$1$2")+e;case 5443:return A+e+I+"flex-item-"+w(e,/flex-|-self/g,"")+(de(e,/flex-|baseline/)?"":I+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return A+e+I+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+I+w(e,"shrink","negative")+e;case 5292:return A+e+I+w(e,"basis","preferred-size")+e;case 6060:return A+"box-"+w(e,"-grow","")+A+e+I+w(e,"grow","positive")+e;case 4554:return A+w(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+I+"flex-pack:$3"),/space-between/,"justify")+A+e+e;case 4200:if(!de(e,/flex-|baseline/))return I+"grid-column-align"+Ee(e,t)+e;break;case 2592:case 3360:return I+w(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,de(r.props,/grid-\w+-end/)})?~lt(e+(a=a[t].value),"span",0)?e:I+w(e,"-start","")+e+I+"grid-row-span:"+(~lt(a,"span",0)?de(a,/\d+/):+de(a,/\d+/)-+de(e,/\d+/))+";":I+w(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return de(r.props,/grid-\w+-start/)})?e:I+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(L(e,t+1)){case 109:if(L(e,t+4)!==45)break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+We+(L(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~lt(e,"stretch",0)?_r(w(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,n,i,s,c,f){return I+o+":"+n+f+(i?I+o+"-span:"+(s?c:+c-+n)+f:"")+e});case 4949:if(L(e,t+6)===121)return w(e,":",":"+A)+e;break;case 6444:switch(L(e,L(e,14)===45?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(L(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+I+"$2box$3")+e;case 100:return w(e,":",":"+I)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function xt(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function vi(e,t,a,r){switch(e.type){case ii:if(e.children.length)break;case oi:case ni:case fa:return e.return=e.return||e.value;case zr:return"";case Ir:return e.return=e.value+"{"+xt(e.children,r)+"}";case kt:if(!se(e.value=e.props.join(",")))return""}return se(a=xt(e.children,r))?e.return=e.value+"{"+a+"}":""}function yi(e){var t=Rr(e);return function(a,r,o,n){for(var i="",s=0;s<t;s++)i+=e[s](a,r,o,n)||"";return i}}function wi(e){return function(t){t.root||(t=t.return)&&e(t)}}function Si(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case fa:e.return=_r(e.value,e.length,a);return;case Ir:return xt([ge(e,{value:w(e.value,"@","@"+A)})],r);case kt:if(e.length)return ci(a=e.props,function(o){switch(de(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Me(ge(e,{props:[w(o,/:(read-\w+)/,":"+We+"$1")]})),Me(ge(e,{props:[o]})),Ht(e,{props:Ga(a,r)});break;case"::placeholder":Me(ge(e,{props:[w(o,/:(plac\w+)/,":"+A+"input-$1")]})),Me(ge(e,{props:[w(o,/:(plac\w+)/,":"+We+"$1")]})),Me(ge(e,{props:[w(o,/:(plac\w+)/,I+"input-$1")]})),Me(ge(e,{props:[o]})),Ht(e,{props:Ga(a,r)});break}return""})}}var Ce={},$t,Ot;const $e=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",$r="active",Or="data-styled-version",Mt="6.5.3",ma=`/*!sc*/
`,He=typeof window<"u"&&typeof document<"u";function Wa(e){if(typeof process<"u"&&Ce!==void 0){const t=Ce[e];if(t!==void 0&&t!=="")return t!=="false"}}const ki=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Ot=($t=Wa("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&$t!==void 0?$t:Wa("SC_DISABLE_SPEEDY"))!==null&&Ot!==void 0?Ot:typeof process<"u"&&Ce!==void 0&&!1),Pr="sc-keyframes-",Ei={};function et(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let ut=new Map,vt=new Map,mt=1;const Ve=e=>{if(ut.has(e))return ut.get(e);for(;vt.has(mt);)mt++;const t=mt++;return ut.set(e,t),vt.set(t,e),t},Ai=e=>vt.get(e),ji=(e,t)=>{mt=t+1,ut.set(e,t),vt.set(t,e)},ga=Object.freeze([]),Oe=Object.freeze({});function Dr(e,t,a=Oe){return e.theme!==a.theme&&e.theme||t||a.theme}const Mi=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zi=/(^-|-$)/g;function Lr(e){return e.replace(Mi,"-").replace(zi,"")}const Ii=/(a)(d)/gi,Ha=e=>String.fromCharCode(e+(e>25?39:97));function ba(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=Ha(t%52)+a;return(Ha(t%52)+a).replace(Ii,"$1-$2")}const Kt=5381,ke=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},Fr=e=>ke(Kt,e);function ha(e){return ba(Fr(e)>>>0)}function Ci(e){return e.displayName||e.name||"Component"}function Jt(e){return typeof e=="string"&&!0}function Ti(e){return Jt(e)?`styled.${e}`:`Styled(${Ci(e)})`}const Br=Symbol.for("react.memo"),Ri=Symbol.for("react.forward_ref"),Ni={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},_i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ur={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$i={[Ri]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Br]:Ur};function Ya(e){return("type"in(t=e)&&t.type.$$typeof)===Br?Ur:"$$typeof"in e?$i[e.$$typeof]:Ni;var t}const Oi=Object.defineProperty,Pi=Object.getOwnPropertyNames,Di=Object.getOwnPropertySymbols,Li=Object.getOwnPropertyDescriptor,Fi=Object.getPrototypeOf,Bi=Object.prototype;function Gr(e,t,a){if(typeof t!="string"){const r=Fi(t);r&&r!==Bi&&Gr(e,r,a);const o=Pi(t).concat(Di(t)),n=Ya(e),i=Ya(t);for(let s=0;s<o.length;++s){const c=o[s];if(!(c in _i||a&&a[c]||i&&c in i||n&&c in n)){const f=Li(t,c);try{Oi(e,c,f)}catch{}}}}return e}function tt(e){return typeof e=="function"}const Ui=Symbol.for("react.forward_ref");function xa(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Ui&&"styledComponentId"in e}function qe(e,t){return e&&t?e+" "+t:e||t||""}function yt(e,t){return e.join("")}function Xe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xt(e,t,a=!1){if(!a&&!Xe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=Xt(e[r],t[r]);else if(Xe(t))for(const r in t)e[r]=Xt(e[r],t[r]);return e}function va(e,t){Object.defineProperty(e,"toString",{value:t})}const Gi=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,n=o.length;let i=n;for(;e>=i;)if(i<<=1,i<0)throw et(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(let s=n;s<i;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,n=t.length;o<n;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let n=r;n<o;n++)t+=this.tag.getRule(n)+ma;return t}},Vi=`style[${$e}][${Or}="${Mt}"]`,qi=new RegExp(`^${$e}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Ka=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Zt=e=>{if(!e)return document;if(Ka(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Ka(t))return t}return document},Wi=(e,t,a)=>{const r=a.split(",");let o;for(let n=0,i=r.length;n<i;n++)(o=r[n])&&e.registerName(t,o)},Hi=(e,t)=>{var a;const r=((a=t.textContent)!==null&&a!==void 0?a:"").split(ma),o=[];for(let n=0,i=r.length;n<i;n++){const s=r[n].trim();if(!s)continue;const c=s.match(qi);if(c){const f=0|parseInt(c[1],10),u=c[2];f!==0&&(ji(u,f),Wi(e,u,c[3]),e.getTag().insertRules(f,o)),o.length=0}else o.push(s)}},Pt=e=>{const t=Zt(e.options.target).querySelectorAll(Vi);for(let a=0,r=t.length;a<r;a++){const o=t[a];o&&o.getAttribute($e)!==$r&&(Hi(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let Be=!1;function Yi(){if(Be!==!1)return Be;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Be=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Be=t.getAttribute("content")||void 0}return Be=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Vr=(e,t)=>{const a=document.head,r=e||a,o=document.createElement("style"),n=(c=>{const f=Array.from(c.querySelectorAll(`style[${$e}]`));return f[f.length-1]})(r),i=n!==void 0?n.nextSibling:null;o.setAttribute($e,$r),o.setAttribute(Or,Mt);const s=t||Yi();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},Ki=class{constructor(e,t){this.element=Vr(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;const o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let n=0,i=o.length;n<i;n++){const s=o[n];if(s.ownerNode===a)return s}throw et(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Ji=class{constructor(e,t){this.element=Vr(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Ja=He;const Xi={isServer:!He,useCSSOMInjection:!ki};class at{static registerId(t){return Ve(t)}constructor(t=Oe,a={},r){this.options=Object.assign(Object.assign({},Xi),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&He&&Ja&&(Ja=!1,Pt(this)),va(this,()=>(o=>{const n=o.getTag(),{length:i}=n;let s="";for(let c=0;c<i;c++){const f=Ai(c);if(f===void 0)continue;const u=o.names.get(f);if(u===void 0||!u.size)continue;const g=n.getGroup(c);if(g.length===0)continue;const y=$e+".g"+c+'[id="'+f+'"]';let M="";for(const S of u)S.length>0&&(M+=S+",");s+=g+y+'{content:"'+M+'"}'+ma}return s})(this))}rehydrate(){!this.server&&He&&Pt(this)}reconstructWithOptions(t,a=!0){const r=new at(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&He&&t.target!==this.options.target&&Zt(this.options.target)!==Zt(t.target)&&Pt(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new Ki(r,o):new Ji(r,o))(this.options),new Gi(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){Ve(t),t.startsWith(Pr)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(Ve(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Ve(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const qr=new WeakSet,Zi={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Qi(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Zi||e.startsWith("--")?String(t).trim():t+"px"}const Se=47;function Xa(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){const r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}const Wr=Symbol.for("sc-keyframes");function es(e){return typeof e=="object"&&e!==null&&Wr in e}function Hr(e){return tt(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Yr=e=>e==null||e===!1||e==="",ts=Symbol.for("react.client.reference");function Za(e){return e.$$typeof===ts}function Kr(e,t){for(const a in e){const r=e[a];e.hasOwnProperty(a)&&!Yr(r)&&(Array.isArray(r)&&qr.has(r)||tt(r)?t.push(Xa(a)+":",r,";"):Xe(r)?(t.push(a+" {"),Kr(r,t),t.push("}")):t.push(Xa(a)+": "+Qi(a,r)+";"))}}function he(e,t,a,r,o=[]){if(Yr(e))return o;const n=typeof e;if(n==="string")return o.push(e),o;if(n==="function"){if(Za(e))return o;if(Hr(e)&&t){const i=e(t);return he(i,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let i=0;i<e.length;i++)he(e[i],t,a,r,o);return o}return xa(e)?(o.push(`.${e.styledComponentId}`),o):es(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):Za(e)?o:Xe(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Kr(e,o),o):(o.push(e.toString()),o)}const as=Fr(Mt);class rs{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=ke(as,a),this.baseStyle=r,at.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let n="";for(let i=0;i<this.rules.length;i++){const s=this.rules[i];if(typeof s=="string")n+=s;else if(s)if(Hr(s)){const c=s(t);typeof c=="string"?n+=c:c!=null&&c!==!1&&(n+=yt(he(c,t,a,r)))}else n+=yt(he(s,t,a,r))}if(n){this.dynamicNameCache||(this.dynamicNameCache=new Map);const i=r.hash?r.hash+n:n;let s=this.dynamicNameCache.get(i);if(!s){if(s=ba(ke(ke(this.baseHash,r.hash),n)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(i,s)}if(!a.hasNameForId(this.componentId,s)){const c=r(n,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,c)}o=qe(o,s)}}return o}}const os=/&/g;function Jr(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function Dt(e){const t=e.length;let a="",r=0,o=0,n=0,i=!1,s=!1;for(let c=0;c<t;c++){const f=e.charCodeAt(c);if(n!==0||i||f!==Se||e.charCodeAt(c+1)!==42)if(i)f===42&&e.charCodeAt(c+1)===Se&&(i=!1,c++);else if(f!==34&&f!==39||Jr(e,c)){if(n===0)if(f===123)o++;else if(f===125){if(o--,o<0){s=!0;let u=c+1;for(;u<t;){const g=e.charCodeAt(u);if(g===59||g===10)break;u++}u<t&&e.charCodeAt(u)===59&&u++,o=0,c=u-1,r=u;continue}o===0&&(a+=e.substring(r,c+1),r=c+1)}else f===59&&o===0&&(a+=e.substring(r,c+1),r=c+1)}else n===0?n=f:n===f&&(n=0);else i=!0,c++}return s||o!==0||n!==0?(r<t&&o===0&&n===0&&(a+=e.substring(r)),a):e}function Xr(e,t){const a=t+" ",r=","+a;for(let o=0;o<e.length;o++){const n=e[o];if(n.type==="rule"){n.value=(a+n.value).replaceAll(",",r);const i=n.props,s=[];for(let c=0;c<i.length;c++)s[c]=a+i[c];n.props=s}Array.isArray(n.children)&&n.type!=="@keyframes"&&Xr(n.children,t)}return e}function ns({options:e=Oe,plugins:t=ga}=Oe){let a,r,o;const n=(y,M,S)=>S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?`.${a}`:y,i=t.slice();i.push(y=>{y.type===kt&&y.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),y.props[0]=y.props[0].replace(os,r).replace(o,n))}),e.prefix&&i.push(Si),i.push(vi);let s=[];const c=yi(i.concat(wi(y=>s.push(y)))),f=(y,M="",S="",v="&")=>{a=v,r=M,o=void 0;const R=function(h){const D=h.indexOf("//")!==-1,J=h.indexOf("}")!==-1;if(!D&&!J)return h;if(!D)return Dt(h);const O=h.length;let U="",k=0,E=0,ve=0,Ae=0,ee=0,Le=!1;for(;E<O;){const W=h.charCodeAt(E);if(W!==34&&W!==39||Jr(h,E))if(ve===0)if(W===Se&&E+1<O&&h.charCodeAt(E+1)===42){for(E+=2;E+1<O&&(h.charCodeAt(E)!==42||h.charCodeAt(E+1)!==Se);)E++;E+=2}else if(W!==40)if(W!==41)if(Ae>0)E++;else if(W===42&&E+1<O&&h.charCodeAt(E+1)===Se)U+=h.substring(k,E),E+=2,k=E,Le=!0;else if(W===Se&&E+1<O&&h.charCodeAt(E+1)===Se){for(U+=h.substring(k,E);E<O&&h.charCodeAt(E)!==10;)E++;k=E,Le=!0}else W===123?ee++:W===125&&ee--,E++;else Ae>0&&Ae--,E++;else Ae++,E++;else E++;else ve===0?ve=W:ve===W&&(ve=0),E++}return Le?(k<O&&(U+=h.substring(k)),ee===0?U:Dt(U)):ee===0?h:Dt(h)}(y);let j=hi(S||M?S+" "+M+" { "+R+" }":R);return e.namespace&&(j=Xr(j,e.namespace)),s=[],xt(j,c),s},u=e;let g=Kt;for(let y=0;y<t.length;y++)t[y].name||et(15),g=ke(g,t[y].name);return u!=null&&u.namespace&&(g=ke(g,u.namespace)),u!=null&&u.prefix&&(g=ke(g,"p")),f.hash=g!==Kt?g.toString():"",f}const is=new at,Qt=ns(),Zr=Z.createContext({shouldForwardProp:void 0,styleSheet:is,stylis:Qt,stylisPlugins:void 0});Zr.Consumer;function Qr(){return Z.useContext(Zr)}const ya=Z.createContext(void 0);ya.Consumer;const Qa=Object.prototype.hasOwnProperty,Lt={};function ss(e,t){const a=typeof e!="string"?"sc":Lr(e);Lt[a]=(Lt[a]||0)+1;const r=a+"-"+ha(Mt+a+Lt[a]);return t?t+"-"+r:r}function cs(e,t,a){const r=xa(e),o=e,n=!Jt(e),{attrs:i=ga,componentId:s=ss(t.displayName,t.parentComponentId),displayName:c=Ti(e)}=t,f=t.displayName&&t.componentId?Lr(t.displayName)+"-"+t.componentId:t.componentId||s,u=r&&o.attrs?o.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:g}=t;if(r&&o.shouldForwardProp){const v=o.shouldForwardProp;if(t.shouldForwardProp){const R=t.shouldForwardProp;g=(j,h)=>v(j,h)&&R(j,h)}else g=v}const y=new rs(a,f,r?o.componentStyle:void 0);function M(v,R){return function(j,h,D){const{attrs:J,componentStyle:O,defaultProps:U,foldedComponentIds:k,styledComponentId:E,target:ve}=j,Ae=Z.useContext(ya),ee=Qr(),Le=j.shouldForwardProp||ee.shouldForwardProp,W=Dr(h,Ae,U)||Oe;let pe,Fe;{const fe=Z.useRef(null),ne=fe.current;if(ne!==null&&ne[1]===W&&ne[2]===ee.styleSheet&&ne[3]===ee.stylis&&ne[7]===O&&function(je,ie,te){const ae=je,X=ie;let ot=0;for(const ye in X)if(Qa.call(X,ye)&&(ot++,ae[ye]!==X[ye]))return!1;return ot===te}(ne[0],h,ne[4]))pe=ne[5],Fe=ne[6];else{pe=function(ie,te,ae){const X=Object.assign(Object.assign({},te),{className:void 0,theme:ae}),ot=ie.length>1;for(let ye=0;ye<ie.length;ye++){const Tt=ie[ye],nt=tt(Tt)?Tt(ot?Object.assign({},X):X):Tt;for(const ue in nt)ue==="className"?X.className=qe(X.className,nt[ue]):ue==="style"?X.style=Object.assign(Object.assign({},X.style),nt[ue]):ue in te&&te[ue]===void 0||(X[ue]=nt[ue])}return"className"in te&&typeof te.className=="string"&&(X.className=qe(X.className,te.className)),X}(J,h,W),Fe=O.generateAndInjectStyles(pe,ee.styleSheet,ee.stylis);let je=0;for(const ie in h)Qa.call(h,ie)&&je++;fe.current=[h,W,ee.styleSheet,ee.stylis,je,pe,Fe,O]}}const rt=pe.as||ve,It=function(fe,ne,je,ie){const te={};for(const ae in fe)fe[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&fe.theme===je||(ae==="forwardedAs"?te.as=fe.forwardedAs:ie&&!ie(ae,ne)||(te[ae]=fe[ae]));return te}(pe,rt,W,Le);let Ct=qe(k,E);return Fe&&(Ct+=" "+Fe),pe.className&&(Ct+=" "+pe.className),It[Jt(rt)&&rt.includes("-")?"class":"className"]=Ct,D&&(It.ref=D),$.createElement(rt,It)}(S,v,R)}M.displayName=c;let S=Z.forwardRef(M);return S.attrs=u,S.componentStyle=y,S.displayName=c,S.shouldForwardProp=g,S.foldedComponentIds=r?qe(o.foldedComponentIds,o.styledComponentId):"",S.styledComponentId=f,S.target=r?o.target:e,Object.defineProperty(S,"defaultProps",{get(){return this._foldedDefaultProps},set(v){this._foldedDefaultProps=r?function(R,...j){for(const h of j)Xt(R,h,!0);return R}({},o.defaultProps,v):v}}),va(S,()=>`.${S.styledComponentId}`),n&&Gr(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}var ds=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function er(e,t){const a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}const tr=e=>(qr.add(e),e);function wa(e,...t){if(tt(e)||Xe(e))return tr(he(er(ga,[e,...t])));const a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?he(a):tr(he(er(a,t)))}function ea(e,t,a=Oe){if(!t)throw et(1,t);const r=(o,...n)=>e(t,a,wa(o,...n));return r.attrs=o=>ea(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>ea(e,t,Object.assign(Object.assign({},a),o)),r}const eo=e=>ea(cs,e),p=eo;ds.forEach(e=>{p[e]=eo(e)});class ls{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const n=r[o];if(tt(n)&&!xa(n))return!1}return!0}(t),at.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){const n=this.componentId;if(this.isStatic){if(r.hasNameForId(n,n+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{const s=this.computeRules(t,a,r,o);r.insertRules(n,s.name,s.rules)}return}const i=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&i){const s=i.rules,c=this.instanceRules.get(t).rules;if(s.length===c.length){let f=!0;for(let u=0;u<s.length;u++)if(s[u]!==c[u]){f=!1;break}if(f)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){const n=yt(he(this.rules,a,r,o)),i={name:this.componentId+t,rules:o(n,"")};return this.instanceRules.set(t,i),i}rebuildGroup(t){const a=this.componentId;t.clearRules(a);for(const r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}}function to(e,...t){const a=wa(e,...t),r=`sc-global-${ha(JSON.stringify(a))}`,o=new ls(a,r),n=s=>{const c=Qr(),f=Z.useContext(ya);let u;{const g=Z.useRef(null);g.current===null&&(g.current=c.styleSheet.allocateGSInstance(r)),u=g.current}c.styleSheet.server&&i(u,s,c.styleSheet,f,c.stylis);{const g=o.isStatic?[u,c.styleSheet,o]:[u,s,c.styleSheet,f,c.stylis,o],y=Z.useRef(o);Z.useLayoutEffect(()=>{c.styleSheet.server||(y.current!==o&&(c.styleSheet.clearRules(r),y.current=o),i(u,s,c.styleSheet,f,c.stylis))},g),Z.useLayoutEffect(()=>()=>{c.styleSheet.server||o.removeStyles(u,c.styleSheet)},[u,c.styleSheet,o])}return c.styleSheet.server&&o.instanceRules.delete(u),null};function i(s,c,f,u,g){if(o.isStatic)o.renderStyles(s,Ei,f,g);else{const y=Object.assign(Object.assign({},c),{theme:Dr(c,u,n.defaultProps)});o.renderStyles(s,y,f,g)}}return Z.memo(n)}var ao;class ps{constructor(t,a){this[ao]=!0,this.inject=(r,o=Qt)=>{const n=this.getName(o);if(!r.hasNameForId(this.id,n)){const i=o(this.rules,n,"@keyframes");r.insertRules(this.id,n,i)}},this.name=t,this.id=Pr+t,this.rules=a,Ve(this.id),va(this,()=>{throw et(12,String(this.name))})}getName(t=Qt){return t.hash?this.name+ba(+t.hash>>>0):this.name}}function gl(e,...t){const a=yt(wa(e,...t)),r=ha(a);return new ps(r,a)}ao=Wr;const fs=[{keys:["?"],action:"help",label:"Abrir a ajuda e os atalhos"},{keys:["Enter"],action:"focus-chat",label:"Escrever no chat"},{keys:["L"],action:"tool:free",label:"Lápis (desenho livre)"},{keys:["R"],action:"tool:measure",label:"Régua: medir distância"},{keys:["T"],action:"tool:text",label:"Texto no mapa"},{keys:["E"],action:"tool:erase",label:"Borracha"},{keys:["+"],action:"zoom-in",label:"Aproximar o mapa"},{keys:["-"],action:"zoom-out",label:"Afastar o mapa"},{keys:["0"],action:"zoom-reset",label:"Ver o mapa inteiro"},{keys:["M"],action:"toggle-mode",label:"Alternar visão de Mestre e de jogador",gmOnly:!0},{keys:["[","]"],action:null,label:"Girar o seu token (aponta a lanterna de mão)"},{keys:["S"],action:"stream",label:"Modo streaming (visão limpa para transmitir)"},{keys:["Esc"],action:null,label:"Sair da ferramenta ou desmarcar tokens"},{keys:["Ctrl","Z"],action:null,label:"Desfazer desenho"},{keys:["Ctrl","Y"],action:null,label:"Refazer desenho"},{keys:["roda"],action:null,label:"Zoom no ponto do cursor (Shift+roda desloca)"}],us={"?":"help",enter:"focus-chat",l:"tool:free",r:"tool:measure",t:"tool:text",e:"tool:erase","+":"zoom-in","=":"zoom-in","-":"zoom-out",0:"zoom-reset",m:"toggle-mode",s:"stream","[":"rotate-left","]":"rotate-right"};function ms(e){if(!e)return!1;const t=String(e.tagName||"").toUpperCase();return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||!!e.isContentEditable}function bl(e,{isGm:t=!1}={}){var r,o,n;if(!e||e.ctrlKey||e.metaKey||e.altKey||e.repeat||ms(e.target)||(o=(r=e.target)==null?void 0:r.closest)!=null&&o.call(r,'[role="dialog"]'))return null;const a=us[String(e.key||"").toLowerCase()]||null;return a==="focus-chat"&&!["BODY","HTML"].includes(String(((n=e.target)==null?void 0:n.tagName)||"").toUpperCase())||a==="toggle-mode"&&!t?null:a}const gs=na(l.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9"}),"CasinoRounded");function ar(e){let t=String(e).replace("#","");t.length===3&&(t=[...t].map(n=>n+n).join(""));const[a,r,o]=[0,2,4].map(n=>parseInt(t.slice(n,n+2),16)/255).map(n=>n<=.03928?n/12.92:((n+.055)/1.055)**2.4);return .2126*a+.7152*r+.0722*o}const ro=["06070b","090a0d","0a0b0e","0a0b0f","0b0c10","0d0e12","0e0f13","0f1014","0f1a14","101116","111217","111318","121419","14161b","14161c","15171c","15232d","17191f","191b21","1a1209","1a1c22","1b1915","1b1d23","1b1d25","1d2027","1f2128","1f222a","20232b","211d37","21665f","242730","245a43","252831","26211b","262931","287a73","2a1d22","2a2118","2a2620","2a2d36","2a2e38","2d1e16","2d3038","343846","363943","3a3d46","3a3d48","3a3e48","3aa673","3d2864","3f8f66","434753","4b3777","4b4f5c","4fd1c5","503c1e","554376","555b66","56d28b","57d68d","5b2a30","6249c0","63d59a","666b76","6753bd","6b5a44","6d52be","6f59cf","7358d0","75d49b","7a552a","7d62ce","7e838f","848995","858a95","858b96","888d98","8a6230","8a8f99","8c2228","8c919b","8c919c","8cddb0","8d929d","8e6bff","8e7fd6","8e939e","8f86c9","8fd8b0","8fe3ae","9296a0","9297a3","9677ff","979aa5","9a4a5e","9a7bff","9a9ea8","9a9faa","9b7bff","9b7d7a","9c4ef3","9d93c9","9de4b9","9ea2ac","9edeb8","9fd8ff","9ff0e7","a0a5af","a28af3","a78cff","a795ff","a7abb4","a83a43","a8acb6","a995ff","a9a0ff","a9a4b8","a9adb6","aaa0ef","aeb2ba","b2b5be","b2b5bf","b35a6e","b7bac2","b8aaff","b98b67","b9abff","b9b8b6","b9bbc2","b9bcc5","be4372","beb2ff","bfc0c7","bfc1c7","c4b4ff","c6b9ff","c9c3ff","c9c9ca","cbbcff","cdbfff","cdeedb","cfc4ff","cfc8f5","d0ced0","d4ccff","d6d1c6","d6d4d0","d8cfff","d8d0ff","d8d2ff","d8d4cc","d9ccff","d9d6d3","db9189","dbd1ff","dcd9d2","ddd5ff","ddd8e6","dedbd3","dedbe1","e2b48d","e4e2dc","e58f48","e6dccb","e7e5e2","e7e6e4","e8d8b8","e8dccb","e8e6e1","e9d9ff","e9e3da","e9e4d9","e9e7e2","eab9b3","ebe5ff","ec9741","eceae4","edd8d5","eeece8","ef756a","efb1ab","efbd86","f04f4a","f07970","f09b95","f0a29b","f0ad61","f0bd86","f0e8d9","f0ece4","f0eeea","f1b17e","f1edff","f1efeb","f2ba85","f3a29b","f3b37d","f3b3aa","f3c48f","f3ead7","f4f2ef","f54843","f5f0e9","f8f7f5","fa6357","ffc896","ffd2cc","ffd38e","ffd49a","ffd9a8","ffe1b8","ffffff"],oo=[{id:"dark",label:"Escuro"},{id:"light",label:"Claro"},{id:"system",label:"Seguir o sistema"}],Sa=[{id:"violet",label:"Violeta",shift:0,swatch:"#9b7bff"},{id:"blue",label:"Azul",shift:-40,swatch:"#5f95ff"},{id:"teal",label:"Verde-água",shift:-100,swatch:"#3fbdb8"},{id:"green",label:"Verde",shift:-140,swatch:"#5fbf6a"},{id:"pink",label:"Rosa",shift:60,swatch:"#e46fb8"}];function ka(e){return oo.some(t=>t.id===e)?e:"dark"}function Ea(e){return Sa.some(t=>t.id===e)?e:"violet"}const bs=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,hs=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;function Aa(e){const t=e.replace("#",""),[a,r,o]=[0,2,4].map(g=>bs(parseInt(t.slice(g,g+2),16)/255)),n=Math.cbrt(.4122214708*a+.5363325363*r+.0514459929*o),i=Math.cbrt(.2119034982*a+.6806995451*r+.1073969566*o),s=Math.cbrt(.0883024619*a+.2817188376*r+.6299787005*o),c=.2104542553*n+.793617785*i-.0040720468*s,f=1.9779984951*n-2.428592205*i+.4505937099*s,u=.0259040371*n+.7827717662*i-.808675766*s;return{l:c,c:Math.hypot(f,u),h:(Math.atan2(u,f)*180/Math.PI+360)%360}}function rr({l:e,c:t,h:a}){const r=t*Math.cos(a*Math.PI/180),o=t*Math.sin(a*Math.PI/180),n=(e+.3963377774*r+.2158037573*o)**3,i=(e-.1055613458*r-.0638541728*o)**3,s=(e-.0894841775*r-1.291485548*o)**3;return[4.0767416621*n-3.3077115913*i+.2309699292*s,-1.2684380046*n+2.6097574011*i-.3413193965*s,-.0041960863*n-.7034186147*i+1.707614701*s]}function ta(e){const t=r=>rr({...e,c:r}).every(o=>o>=-5e-4&&o<=1.0005);let a=e.c;if(!t(a)){let r=0;for(let o=0;o<24;o+=1){const n=(r+a)/2;t(n)?r=n:a=n}a=r}return`#${rr({...e,c:a}).map(r=>Math.round(Math.min(1,Math.max(0,hs(Math.min(1,Math.max(0,r)))))*255).toString(16).padStart(2,"0")).join("")}`}function xs(e){const{c:t,h:a}=Aa(e);return t>.05&&a>=270&&a<=315}const Ue=[[0,1],[.1,.99],[.35,.89],[.5,.6],[.7,.38],[1,.05]];function vs(e){for(let t=1;t<Ue.length;t+=1){const[a,r]=Ue[t],[o,n]=Ue[t-1];if(e<=a)return n+(e-o)/(a-o)*(r-n)}return Ue[Ue.length-1][1]}function ys(e){const t=Aa(e);if(t.c>.06&&t.l>=.35&&t.l<=.58)return`#${e.replace("#","").toLowerCase()}`;let a=vs(t.l);return t.c>.06&&t.l>.5&&(a=Math.max(a,.47)),ta({...t,l:a,c:t.l<.35?t.c*.5:t.c})}function ws(e,t){const a=Aa(e),r=ar(e),o=(a.h+t+360)%360;let n=0,i=1,s=ta({...a,h:o});for(let c=0;c<22;c+=1){const f=(n+i)/2;s=ta({...a,l:f,h:o}),ar(s)<r?n=f:i=f}return s}function Ss(e,{theme:t="dark",accent:a="violet"}={}){const r=Sa.find(n=>n.id===Ea(a)).shift;let o=`#${e.replace("#","").toLowerCase()}`;return r&&xs(o)&&(o=ws(o,r)),t==="light"?ys(o):o}function ks(e,t=!1){const a=ka(e);return a==="system"?t?"light":"dark":a}function Es(e={}){return`:root{${ro.map(a=>`--c-${a}:${Ss(a,e)};`).join("")}}`}const As=new Set(ro);function gt(e){if(typeof e!="string"||!/^#[0-9a-fA-F]{6}$/.test(e))return e;const t=e.slice(1).toLowerCase();return As.has(t)?`var(--c-${t})`:e}function js({theme:e,accent:t}={},a=typeof document<"u"?document:null){var i,s;if(!a)return;const r=!!((s=(i=a.defaultView)==null?void 0:i.matchMedia)!=null&&s.call(i,"(prefers-color-scheme: light)").matches),o=ks(e,r);let n=a.getElementById("nighttable-theme");n||(n=a.createElement("style"),n.id="nighttable-theme",a.head.appendChild(n)),n.textContent=Es({theme:o,accent:t}),a.documentElement.dataset.theme=o,a.documentElement.style.colorScheme=o}const Ms=to`
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
`,hl=p.div`
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
`,xl=p.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 20px;
  border-bottom: 1px solid var(--border);
  background: color-mix(in srgb, var(--c-0a0b0f) 95%, transparent);
  position: relative;
  z-index: 10;
`,zs=p.div`
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 220px;
`,Is=p.div`
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(135deg, var(--c-fa6357), var(--c-9c4ef3));
  border-radius: 10px 10px 10px 3px;
  box-shadow: 0 8px 22px color-mix(in srgb, var(--c-be4372) 24%, transparent);
`,Cs=p.div`
  display: grid;
  gap: 1px;
  line-height: 1;
  strong { font-size: 15px; letter-spacing: -0.04em; }
  span { color: var(--c-8d929d); font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; }
`,vl=p.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--c-111318);
`,yl=p.button`
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
`,wl=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-width: 220px;
`,Sl=p.div`
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
`,kl=p.div`
  min-height: 0;
  display: grid;
  grid-template-columns: var(--dock-width) ${({$leftHidden:e})=>e?"0px":"calc(var(--left-rail) * var(--rail-scale, 1))"} minmax(0, 1fr) ${({$drawerOpen:e})=>e?"calc(var(--right-rail, 332px) * var(--rail-scale, 1) + var(--gm-nav, 0px) * var(--gm-nav-room, 1) * var(--text-zoom, 1))":"calc(54px * var(--text-zoom, 1))"};
  transition: grid-template-columns 220ms ease;
`,El=p.nav`
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
`,Al=p.aside`
  min-width: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
  background: var(--c-101116);
  /* Em telas baixas as seções não se sobrepõem: a coluna inteira rola. */
  overflow-x: hidden;
  overflow-y: auto;
`,Ts=p.section`
  flex: 0 0 auto;
  padding: 17px 16px;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 6.5%, transparent);
  @media (max-height: 760px) and (min-width: 761px) { padding-top: 12px; padding-bottom: 12px; }
  /* Com o chat fechado, o log ocupa o espaço que sobra na coluna. */
  ${({$grow:e})=>e&&"flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column;"}
`,jl=p.div`
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
`,Ml=p.div`
  display: grid;
  gap: 9px;
  max-height: clamp(96px, 24vh, 260px);
  overflow-y: auto;
  padding-right: 3px;
`,zl=p.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`,Il=p.div`
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
`,Cl=p.div`
  min-width: 0;
  flex: 1;
  display: grid;
  gap: 2px;
  strong { overflow: hidden; color: var(--c-e7e6e4); font-size: 12px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { overflow: hidden; color: var(--c-8d929d); font-size: 10px; text-overflow: ellipsis; white-space: nowrap; }
`,Tl=p.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({$online:e})=>e?"var(--c-56d28b)":"var(--c-555b66)"};
  box-shadow: ${({$online:e})=>e?"0 0 0 3px color-mix(in srgb, var(--c-56d28b) 10%, transparent)":"none"};
`,Rl=p(Ts)`
  /* Sem min-height: 0 — a seção nunca fica menor que o próprio conteúdo (e não invade o log). */
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`,Nl=p.div`
  flex: 1 1 0;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 3px;
  .chat-older { align-self: center; padding: 4px 10px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent); border-radius: 999px; color: var(--c-b9abff); background: var(--c-17191f); font-size: 10px; cursor: pointer; }
`,_l=p.div`
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
`,$l=p.div`
  min-height: 14px;
  margin-top: 8px;
  color: var(--c-8f86c9);
  font-size: 10px;
  font-style: italic;
  &:empty { visibility: hidden; }
`,Ol=p.form`
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
`,Pl=p.div`
  max-height: ${({$grow:e})=>e?"none":"clamp(72px, 16vh, 142px)"};
  ${({$grow:e})=>e&&"flex: 1 1 0; min-height: 72px;"}
  display: flex;
  flex-direction: column;
  gap: 9px;
  overflow-y: auto;
`,Dl=p.div`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 6px;
  color: var(--c-848995);
  font-size: 10px;
  line-height: 1.35;
  .icon { color: ${({$accent:e})=>gt(e)||"var(--c-9a9faa)"}; margin-top: 1px; }
  time { display: block; margin-top: 3px; color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 8px; }
`,Ll=p.main`
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: var(--c-0e0f13);
`,Fl=p.div`
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
`,Bl=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 1 180px;
  min-width: 0;
  .scene-icon { width: 31px; height: 31px; display: grid; place-items: center; border-radius: 9px; color: var(--c-e9d9ff); background: color-mix(in srgb, var(--c-9677ff) 14%, transparent); }
  .text { min-width: 0; display: grid; gap: 3px; }
  strong { overflow: hidden; color: var(--c-f1efeb); font-size: 14px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.04em; text-transform: uppercase; }
`,Ul=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,Gl=p.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;p.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
`;const Vl=p.span`
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
`,ql=p.div`
  display: flex;
  gap: 4px;
  margin: -4px 0 9px;
  button { padding: 3px 6px; border: 1px solid transparent; border-radius: 5px; color: var(--c-8d929d); background: transparent; cursor: pointer; font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; }
  button.active { color: var(--c-d8d0ff); border-color: color-mix(in srgb, var(--c-9b7bff) 28%, transparent); background: color-mix(in srgb, var(--c-9b7bff) 10%, transparent); }
`,Wl=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
`,Hl=p.div`
  display: grid;
  gap: 6px;
`,Yl=p.div`
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
`,Kl=p.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 5px;
  border-radius: 5px;
  color: var(--c-eab9b3);
  background: color-mix(in srgb, var(--c-f04f4a) 10%, transparent);
  font-size: 8px;
`,Jl=p.button`
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
`,Xl=p.span`
  min-width: 43px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  text-align: center;
`,Zl=p.div`
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 18px;
  background: radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--c-554376) 11%, transparent), transparent 52%), var(--c-0d0e12);
`,Ql=p.div`
  position: relative;
  min-height: 460px;
  height: 100%;
  min-width: 670px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 16px;
  background: #13151a;
  box-shadow: 0 25px 80px rgba(0,0,0,0.34), inset 0 0 0 1px rgba(255,255,255,0.025);
`,ep=p.div`
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
`,B={objects:2,tokens:3,drawings:4,fog:5,partyAboveFog:6,fogEditor:7,interface:8},tp=p.svg`
  position: absolute;
  inset: 0;
  z-index: ${B.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .fog-fill { fill: ${({$gm:e})=>e?"rgba(6, 7, 11, 0.5)":"rgba(6, 7, 11, 0.97)"}; }
  .fog-region { fill: none; stroke: rgba(240, 173, 97, 0.65); stroke-width: 1.5; stroke-dasharray: 6 5; }
  .fog-draft { fill: ${({$hide:e})=>e?"rgba(240, 79, 74, 0.16)":"rgba(255, 220, 160, 0.14)"}; stroke: ${({$hide:e})=>e?"#f07970":"#ffd49a"}; stroke-width: 1.5; stroke-dasharray: 4 4; }
`,ap=p.svg`
  position: absolute;
  inset: 0;
  z-index: ${B.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .dark-area { fill: ${({$gm:e})=>e?"rgba(4, 5, 9, 0.55)":"#040509"}; stroke: ${({$gm:e})=>e?"rgba(185, 139, 103, 0.8)":"none"}; stroke-width: 1.5; stroke-dasharray: 6 4; }
  .dark-area.open { fill: rgba(4, 5, 9, 0.12); }
  .dark-area.draft { fill: rgba(4, 5, 9, 0.45); stroke: #e2b48d; }
`,rp=p.svg`
  position: absolute;
  inset: 0;
  z-index: ${B.drawings};
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
`,op=p.svg`
  position: absolute;
  inset: 0;
  z-index: ${B.interface};
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  line, circle, polygon { fill: none; stroke: #ffe1b8; stroke-width: 2; stroke-dasharray: 7 5; }
  circle { fill: rgba(255, 212, 154, 0.07); }
  .aoe { fill: rgba(255, 212, 154, 0.18); }
  .measure-label { fill: #1a1209; font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 700; }
  .measure-badge { fill: #f3c48f; stroke: none; }
`,np=p.div`
  position: absolute;
  inset: 0;
  z-index: ${B.fogEditor};
  cursor: ${({$tool:e})=>e==="text"?"text":"crosshair"};
  touch-action: none;
`,ip=p.div`
  position: absolute;
  top: 86px;
  left: 18px;
  z-index: ${B.interface};
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
`,sp=p.svg`
  position: absolute;
  inset: 0;
  z-index: ${B.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .vision-dark { fill: ${({$gm:e})=>e?"rgba(4, 5, 9, 0.38)":"rgba(4, 5, 9, 0.95)"}; }
`,cp=p.svg`
  position: absolute;
  inset: 0;
  z-index: ${B.partyAboveFog};
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
`,dp=p.div`
  position: absolute;
  z-index: ${B.interface+1};
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
`,lp=p.div`
  position: absolute;
  z-index: ${B.partyAboveFog};
  border: 2px dashed ${({$fired:e,$draft:t})=>t?"#9ff0e7":e?"rgba(111,116,127,0.7)":"rgba(79,209,197,0.8)"};
  border-radius: 8px;
  background: ${({$fired:e,$draft:t})=>t?"rgba(79,209,197,0.16)":e?"rgba(111,116,127,0.06)":"rgba(79,209,197,0.07)"};
  pointer-events: none;
  span { position: absolute; top: 4px; left: 6px; padding: 2px 6px; border-radius: 5px; color: ${({$fired:e})=>e?"#9a9faa":"#bff6ef"}; background: rgba(8, 20, 20, 0.75); font-family: 'DM Mono', monospace; font-size: 9px; white-space: nowrap; }
`,pp=p.div`
  position: absolute;
  inset: 0;
  z-index: ${B.fogEditor};
  cursor: crosshair;
  touch-action: none;
`,fp=p.div`
  position: absolute;
  left: 18px;
  bottom: 16px;
  z-index: ${B.interface};
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
`,up=p.span`
  position: absolute;
  left: ${({$x:e})=>`${e}%`};
  top: ${({$y:e})=>`${e}%`};
  z-index: ${B.interface};
  width: 24px;
  height: 24px;
  border: 2px solid #ffd49a;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 8px rgba(240,173,97,.18), 0 0 28px rgba(240,173,97,.75);
  pointer-events: none;
  animation: pingPulse 900ms ease-out both;
  @keyframes pingPulse { from { opacity: .95; transform: translate(-50%, -50%) scale(.5); } to { opacity: 0; transform: translate(-50%, -50%) scale(1.8); } }
`,mp=p.div`
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
`,gp=p.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.025) 50%, transparent 75%);
  mix-blend-mode: screen;
`,bp=p.div`
  position: absolute;
  top: 22px;
  left: 24px;
  z-index: ${B.interface};
  display: grid;
  gap: 4px;
  pointer-events: none;
  .eyebrow { color: rgba(242, 218, 176, 0.66); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; }
  strong { color: rgba(255, 244, 222, 0.78); font-size: 21px; font-weight: 500; letter-spacing: -0.04em; }
`,hp=p.div`
  position: absolute;
  right: 18px;
  bottom: 16px;
  z-index: ${B.interface};
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
`,xp=p.button`
  position: absolute;
  left: ${({$x:e})=>`${e}%`};
  top: ${({$y:e})=>`${e}%`};
  z-index: ${B.objects};
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
`,or=({$monster:e,$activeTurn:t,$marked:a,$selected:r})=>r?"0 0 0 3px #9b7bff, 0 0 0 8px rgba(155,123,255,0.3)":t?"0 0 0 4px rgba(240,173,97,0.85), 0 0 22px rgba(240,173,97,0.55)":a?"0 0 0 4px rgba(255,212,154,0.55)":`0 0 0 5px ${e?"rgba(240,79,74,0.12)":"rgba(233,228,217,0.11)"}`,vp=p.button`
  position: absolute;
  /* left/top vêm do style do elemento: muda a cada arraste e não deve gerar uma classe nova por posição. */
  z-index: ${({$aboveFog:e})=>e?B.partyAboveFog:B.tokens};
  width: ${({$monster:e,$scale:t=1})=>`${Math.round((e?36:42)*t)}px`};
  height: ${({$monster:e,$scale:t=1})=>`${Math.round((e?36:42)*t)}px`};
  display: grid;
  place-items: center;
  font-size: ${({$scale:e=1})=>`${Math.round(13*Math.min(e,1.6))}px`};
  border: 2px ${({$hiddenToken:e})=>e?"dashed":"solid"} ${({$monster:e})=>e?"#f04f4a":"#e9e4d9"};
  border-radius: 50%;
  color: #fff;
  background: ${({$color:e})=>e||"#6f59cf"};
  box-shadow: ${or}, 0 12px 22px rgba(0,0,0,0.34);
  opacity: ${({$hiddenToken:e})=>e?.72:1};
  filter: ${({$defeated:e})=>e?"grayscale(1) brightness(0.6)":"none"};
  cursor: ${({$draggable:e})=>e?"grab":"default"};
  transform: translate(-50%, -50%);
  /* Quem vê o token de outra pessoa acompanha o movimento suavizado; quem arrasta vê o token preso ao cursor. */
  transition: ${({$dragging:e})=>e?"":"left 140ms linear, top 140ms linear, "}box-shadow 160ms ease, filter 160ms ease, opacity 160ms ease;
  &:active { cursor: ${({$draggable:e})=>e?"grabbing":"default"}; }
  &:hover { box-shadow: ${or}, 0 0 0 9px rgba(233,228,217,0.08), 0 12px 22px rgba(0,0,0,0.42); }
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
`,yp=p.div`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: ${B.interface};
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
`,wp=p.aside`
  min-width: 0;
  border-left: 1px solid var(--border);
  background: var(--c-111217);
  overflow: hidden;
`,Sp=p.div`
  width: 54px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 18px;
`,kp=p.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Ep=p.div`
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
`,Ap=p.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  & > :first-child { margin-top: 0; }
`,jp=p.div`
  height: 100%;
  display: flex;
  & > div:first-child { flex: 1; min-width: 0; }
`,Mp=p.nav`
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
`,zp=p.label`
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
`,Ip=p.div`
  padding: 14px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 12px;
  background: ${({$tint:e})=>e||"var(--c-17191f)"};
`,Cp=p.div`
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
`,Tp=p.div`
  display: grid;
  gap: 6px;
  margin-top: 15px;
  .label { display: flex; align-items: center; justify-content: space-between; color: var(--c-8c919c); font-size: 10px; }
  .label strong { color: var(--c-e8e6e1); font-family: 'DM Mono', monospace; font-size: 10px; }
  .track { height: 6px; overflow: hidden; border-radius: 999px; background: var(--c-262931); }
  .fill { width: ${({$value:e})=>`${e}%`}; height: 100%; border-radius: inherit; background: ${({$color:e})=>e||"var(--c-f04f4a)"}; box-shadow: 0 0 14px ${({$glow:e})=>e||"color-mix(in srgb, var(--c-f04f4a) 25%, transparent)"}; }
`,Rp=p.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin-top: 16px;
`,Rs=p.div`
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
`,Np=p.button`
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
  ${Rs}:hover & { opacity: 1; transform: translateY(0); }
  &:hover { color: var(--c-ffffff); background: color-mix(in srgb, var(--c-9b7bff) 32%, transparent); }
`,_p=p.div`
  margin-top: 18px;
  .section-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; color: var(--c-7e838f); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; }
`,$p=p.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 5.5%, transparent);
  &:last-child { border-bottom: 0; }
  .skill-icon { width: 24px; height: 24px; display: grid; place-items: center; border-radius: 7px; color: var(--c-a995ff); background: color-mix(in srgb, var(--c-9b7bff) 11%, transparent); }
  .skill-name { flex: 1; color: var(--c-c9c9ca); font-size: 11px; }
`,Ns=p.input`
  width: 100%;
  padding: 10px 11px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  outline: none;
  color: var(--c-e9e7e2);
  background: var(--c-15171c);
  font-size: 11px;
  &:focus { border-color: var(--c-b9abff); box-shadow: 0 0 0 3px color-mix(in srgb, var(--c-9b7bff) 10%, transparent); }
`,Op=p.label`
  display: grid;
  gap: 6px;
  color: var(--c-8c919b);
  font-size: 10px;
`,Pp=p.select`
  width: 100%;
  padding: 9px 10px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  outline: 0;
  color: var(--c-e9e7e2);
  background: var(--c-15171c);
  font-size: 11px;
  &:focus { border-color: color-mix(in srgb, var(--c-9b7bff) 70%, transparent); }
`,Dp=p.div`
  display: grid;
  grid-template-columns: 1fr 88px;
  gap: 8px;
  /* $stack: em telas estreitas os campos ficam um embaixo do outro (vence o grid-template-columns inline). */
  ${({$stack:e})=>e?"@media (max-width: 560px) { grid-template-columns: minmax(0, 1fr) !important; }":""}
`,Lp=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,Fp=p.button`
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
`,Bp=p.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 5.5%, transparent);
  .track-icon { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 7px; color: ${({$active:e})=>e?"var(--c-f1b17e)":"var(--c-8e939e)"}; background: ${({$active:e})=>e?"color-mix(in srgb, var(--c-e58f48) 14%, transparent)":"var(--c-1b1d23)"}; }
  .track-name { flex: 1; color: var(--c-c9c9ca); font-size: 11px; }
`,Up=p.button`
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
`,Gp=p.div`
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
`,Vp=p.div`
  height: 100%;
  display: grid;
  place-items: center;
  padding: 24px;
  color: var(--c-8d929d);
  text-align: center;
  font-size: 11px;
`,qp=p.span`
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
`,Wp=p.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  > * { flex: 1; }
`,Hp=p.p`
  margin: 9px 0 0;
  color: var(--c-8d929d);
  font-size: 9px;
  line-height: 1.45;
`,Yp=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,Kp=p.button`
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
`,Jp=p.div`
  display: grid;
  gap: 7px;
`,Xp=p.button`
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
`,Zp=p.div`
  display: grid;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
`,Qp=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,ef=p.button`
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
`,tf=p.span`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid ${({$accent:e})=>`color-mix(in srgb, ${gt(e)||"var(--c-9b7bff)"} 40%, transparent)`};
  border-radius: 10px;
  color: ${({$accent:e})=>gt(e)||"var(--c-b9abff)"};
  background: ${({$accent:e})=>`color-mix(in srgb, ${gt(e)||"var(--c-9b7bff)"} 9%, transparent)`};
`,af=p.div`
  display: grid;
  gap: 6px;
  max-height: 166px;
  overflow-y: auto;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
`,rf=p.div`
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
`;p.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
`;p(Ns)`
  padding: 8px 5px;
  text-align: center;
  font-family: 'DM Mono', monospace;
`;const of=p.div`
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
`,nf=p.div`
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
`,sf=p.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
  color: #f4eefe;
  .total { font-size: 30px; font-weight: 700; letter-spacing: -.06em; }
  .math { color: #9da1ac; font-family: 'DM Mono', monospace; font-size: 10px; }
`,cf=p.div`
  display: grid;
  gap: 14px;
  padding: 0 4px 8px;
  color: var(--c-b9bbc2);
`,df=p.div`
  padding: 15px;
  border: 1px solid ${({$success:e})=>e?"color-mix(in srgb, var(--c-56d28b) 30%, transparent)":"color-mix(in srgb, var(--c-f04f4a) 30%, transparent)"};
  border-radius: 10px;
  background: ${({$success:e})=>e?"color-mix(in srgb, var(--c-56d28b) 9%, transparent)":"color-mix(in srgb, var(--c-f04f4a) 8%, transparent)"};
  .result-kicker { color: ${({$success:e})=>e?"var(--c-8fe3ae)":"var(--c-f09b95)"}; font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; }
  strong { display: block; margin-top: 5px; color: var(--c-f0eeea); font-size: 17px; letter-spacing: -0.03em; }
  p { margin: 7px 0 0; color: var(--c-a9adb6); font-size: 11px; line-height: 1.45; }
`;p.div`
  display: none;
  @media (max-width: 900px) { display: block; }
`;const lf=to`
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
`,_s=p.main`
  height: 100vh;
  height: 100dvh;
  display: grid;
  place-items: center;
  padding: 24px 16px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--c-9b7bff) 14%, transparent), transparent 40%), radial-gradient(circle at 75% 80%, color-mix(in srgb, var(--c-f04f4a) 10%, transparent), transparent 38%), var(--c-0a0b0f);
`,$s=p.form`
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
`,pf=p(_s)`
  place-items: start center;
  padding: 32px 16px;
  @media (max-width: 760px) { padding: 16px; }
`,ff=p($s)`
  width: min(100%, 1120px);
  gap: 18px;
  padding: 24px 28px;
  @media (max-width: 760px) { padding: 18px 16px; }
`,uf=p.div`
  display: grid;
  grid-template-columns: minmax(280px, 380px) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: minmax(0, 1fr); gap: 18px; }
`,mf=p.div`
  display: grid;
  gap: 13px;
  min-width: 0;
`,gf=p.section`
  display: grid;
  gap: 16px;
  min-width: 0;
  padding: 18px 20px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 12px;
  background: color-mix(in srgb, var(--c-ffffff) 1.5%, transparent);
  h2 { margin: 0; color: var(--c-e9e7e2); font-size: 15px; font-weight: 600; letter-spacing: -0.02em; }
  @media (max-width: 760px) { padding: 14px; }
`,bf=p.div`
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
`,hf=p.div`
  display: grid;
  gap: 3px;
  strong { color: var(--c-d6d4d0); font-size: 12px; font-weight: 600; }
  span { color: var(--c-7e838f); font-size: 11px; line-height: 1.4; }
`,xf=p.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  &::before, &::after { content: ''; flex: 1; height: 1px; background: color-mix(in srgb, var(--c-ffffff) 8%, transparent); }
`,vf=p.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  button { padding: 0; border: 0; color: var(--c-b9abff); background: none; cursor: pointer; font-size: 11px; }
  button:hover { color: var(--c-ddd5ff); text-decoration: underline; }
`,yf=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--c-c9c9ca);
  font-size: 11px;
  .user-avatar { width: 26px; height: 26px; display: grid; place-items: center; overflow: hidden; border-radius: 8px; color: #fff; background: var(--c-6d52be); font-size: 10px; font-weight: 700; }
  .user-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .user-name { max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  @media (max-width: 900px) { .user-name { display: none; } }
`;function Os({kind:e}){const t=ht[e],a=ei(),r=e==="privacidade"?"termos":"privacidade";return $.useEffect(()=>{document.title=`${t.title} — NightTable`},[t.title]),l.jsxs(l.Fragment,{children:[l.jsx(Ms,{}),l.jsx("main",{style:{height:"100dvh",boxSizing:"border-box",padding:"32px 16px 56px",background:"var(--c-0a0b0f)",color:"var(--c-d6d4d0)",overflowY:"auto"},children:l.jsxs("article",{style:{maxWidth:720,margin:"0 auto",display:"grid",gap:18,lineHeight:1.6,fontSize:14},children:[l.jsx("a",{href:Ke(),style:{textDecoration:"none"},children:l.jsxs(zs,{children:[l.jsx(Is,{children:l.jsx(gs,{fontSize:"small"})}),l.jsxs(Cs,{children:[l.jsx("strong",{children:"NightTable"}),l.jsx("span",{children:"virtual tabletop"})]})]})}),l.jsxs("header",{children:[l.jsx("h1",{style:{margin:"0 0 4px",color:"var(--c-f4f2ef)",fontSize:26},children:t.title}),l.jsxs("p",{style:{margin:0,color:"var(--c-7e838f)",fontSize:12},children:["Última atualização: ",Qn]})]}),l.jsx("p",{style:{margin:0},children:t.intro}),t.sections.map(([o,n])=>l.jsxs("section",{children:[l.jsx("h2",{style:{margin:"0 0 6px",color:"var(--c-c9c3ff)",fontSize:16},children:o}),l.jsx("ul",{style:{margin:0,paddingLeft:20,display:"grid",gap:6},children:n.map(i=>l.jsx("li",{children:i},i))})]},o)),l.jsxs("section",{children:[l.jsx("h2",{style:{margin:"0 0 6px",color:"var(--c-c9c3ff)",fontSize:16},children:"Contato"}),l.jsx("p",{style:{margin:0},children:a?l.jsxs(l.Fragment,{children:["Dúvidas, pedidos sobre seus dados ou denúncias: ",l.jsx("a",{href:a.includes("@")?`mailto:${a}`:a,style:{color:"var(--c-b9abff)"},children:a}),"."]}):"Dúvidas, pedidos sobre seus dados ou denúncias: fale com quem administra esta instalação do NightTable."})]}),l.jsxs("nav",{style:{display:"flex",gap:16,fontSize:12},children:[l.jsx("a",{href:Mr(r),style:{color:"var(--c-b9abff)"},children:ht[r].title}),l.jsx("a",{href:Ke(),style:{color:"var(--c-b9abff)"},children:"Voltar ao NightTable"})]})]})})]})}function no({style:e}){return l.jsx("p",{style:{margin:0,display:"flex",gap:12,flexWrap:"wrap",color:"var(--c-7e838f)",fontSize:11,...e},children:Object.entries(ht).map(([t,a])=>l.jsx("a",{href:Mr(t),target:"_blank",rel:"noopener",style:{color:"var(--c-9d93c9)"},children:a.title},t))})}const Ps=Object.freeze(Object.defineProperty({__proto__:null,LegalLinks:no,default:Os},Symbol.toStringTag,{value:"Module"})),ja={players:{label:"Jogadores na mesa",minimizable:!0},chat:{label:"Chat",minimizable:!0},log:{label:"Log da sessão",minimizable:!0},minimap:{label:"Minimapa",minimizable:!1},legend:{label:"Legenda do mapa",minimizable:!1}},Ds=["players","chat","log"],Ls=["open","min","hidden"];function le(e){const t=e&&typeof e=="object"?e:{};return Object.fromEntries(Object.entries(ja).map(([a,r])=>{const o=Ls.includes(t[a])?t[a]:"open";return[a,o==="min"&&!r.minimizable?"open":o]}))}function Ma(e,t,a){return le({...le(e),[t]:a})}function wf(e,t){const a=le(e)[t];return Ma(e,t,a==="open"?"min":"open")}function Fs(e,t){return le(e)[t]!=="hidden"}function Sf(e){const t=le(e);return Ds.every(a=>t[a]==="hidden")}function kf(e){return Object.values(le(e)).filter(t=>t==="hidden").length}function Ef(){return Object.fromEntries(Object.keys(ja).map(e=>[e,"hidden"]))}function Af(e,t){return Ma(e,t,Fs(e,t)?"hidden":"open")}function Ze(e){const t=e&&typeof e=="object"?e:{},a=Number(t.rate);return{narration:t.narration===!0,narrator:t.narrator===!0,voice:String(t.voice||"").slice(0,120),rate:Number.isFinite(a)?Math.min(1.6,Math.max(.6,Math.round(a*10)/10)):1}}function aa(e){const t=a=>/^pt-BR/i.test(a.lang)?0:/^pt/i.test(a.lang)?1:2;return[...e||[]].sort((a,r)=>t(a)-t(r)||String(a.name).localeCompare(String(r.name)))}function Bs(e,t){const a=aa(e);return a.find(r=>r.name===t)||a.find(r=>/^pt/i.test(r.lang))||null}function jf(e){const t=String((e==null?void 0:e.title)||"").trim(),a=String((e==null?void 0:e.text)||"").trim();return t?!a||a===t?t:`${t}. ${a}`:a}const Ye=()=>typeof window<"u"&&"speechSynthesis"in window&&typeof window.SpeechSynthesisUtterance=="function";function Us(e,t){const a=String(e||"").trim();if(!a||!Ye())return!1;const{voice:r,rate:o}=Ze(t),n=new window.SpeechSynthesisUtterance(a.slice(0,1200)),i=Bs(window.speechSynthesis.getVoices(),r);return i&&(n.voice=i),n.lang=(i==null?void 0:i.lang)||"pt-BR",n.rate=o,window.speechSynthesis.speak(n),!0}function nr(){Ye()&&window.speechSynthesis.cancel()}const za=[{id:"normal",label:"Normal",zoom:1},{id:"large",label:"Grande",zoom:1.15},{id:"xlarge",label:"Muito grande",zoom:1.3}];function zt(e){return za.some(t=>t.id===e)?e:"normal"}function io(e){return za.find(t=>t.id===zt(e)).zoom}function Gs(e){return 1+(io(e)-1)/2}function Vs(e,t=typeof document<"u"?document.documentElement:null){t&&(t.style.setProperty("--text-zoom",String(io(e))),t.style.setProperty("--rail-scale",String(Gs(e))),t.dataset.textSize=zt(e))}const ir={player:[{title:"Bem-vindo à mesa",text:"O mapa fica no centro. Arraste o seu token para se mover; o Mestre controla a névoa e o que você enxerga."},{title:"Sua ficha",text:"No painel da direita estão sua ficha, armas e inventário. Clique em um atributo ou perícia para rolar os dados. Duplo clique no seu avatar (no mapa ou na lista) abre a ficha completa."},{title:"Sua tela, do seu jeito",text:"A barra de ícones na beirada esquerda mostra ou oculta jogadores, chat, log, ficha, minimapa e legenda. O modo limpo deixa só o mapa."},{title:"Conversa",text:"No chat, use @nome para chamar alguém, /w Nome para sussurrar e /gm para falar só com o Mestre. Passe o mouse numa mensagem para reagir."},{title:"Ferramentas do mapa",text:"A barra à esquerda do mapa tem lápis, régua e formas. Os desenhos aparecem para todos e somem sozinhos se forem temporários."},{title:"Atalhos",text:"Aperte ? a qualquer momento para ver os atalhos de teclado e reabrir este tutorial pelo botão de ajuda no topo."}],gm:[{title:"Visão do Mestre",text:"O painel da direita reúne tudo o que você controla: cena, tokens, objetos, iniciativa, áudio, handouts e regras."},{title:"Prepare as cenas",text:"Oculte o mapa dos jogadores enquanto prepara, salve o tabuleiro como cena e ative com um clique. O cartão de abertura aparece para todos."},{title:"Tokens e combate",text:"Coloque fichas no mapa, esconda inimigos, marque derrotados e use a iniciativa. Os geradores criam encontros prontos. Duplo clique num token abre a ficha dele."},{title:"Convide o grupo",text:"Compartilhe o código de convite. No lobby da campanha você escreve a descrição e marca as próximas sessões."},{title:"Atalhos e ajuda",text:"Aperte ? para ver os atalhos. M alterna entre a sua visão e a dos jogadores."}]},ra=e=>`nighttable-tutorial-v1:${e}`;function Mf(e){try{return window.localStorage.getItem(ra(e))==="done"}catch{return!0}}function zf(e,t){try{t?window.localStorage.setItem(ra(e),"done"):window.localStorage.removeItem(ra(e))}catch{}}const qs=p.aside`
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
`;function If({role:e,onFinish:t}){const a=ir[e]||ir.player,[r,o]=$.useState(0),n=a[r],i=r===a.length-1;return l.jsxs(qs,{role:"dialog","aria-label":"Tutorial do NightTable",children:[l.jsxs("span",{className:"step",children:["primeiros passos · ",r+1,"/",a.length]}),l.jsx("h2",{children:n.title}),l.jsx("p",{children:n.text}),l.jsxs("div",{className:"actions",children:[l.jsx("div",{className:"dots","aria-hidden":"true",children:a.map((s,c)=>l.jsx("span",{className:c===r?"on":""},s.title))}),l.jsx(Te,{onClick:t,size:"small",sx:{textTransform:"none",color:"var(--c-8e939e)",fontSize:11},children:"Pular"}),l.jsx(Te,{onClick:()=>i?t():o(r+1),size:"small",variant:"contained",sx:{textTransform:"none",fontSize:11,bgcolor:"var(--c-7358d0)","&:hover":{bgcolor:"var(--c-6249c0)"}},children:i?"Começar":"Próximo"})]})]})}const Ws=p.span`
  display: inline-flex;
  gap: 3px;
  kbd { min-width: 20px; padding: 2px 6px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 14%, transparent); border-bottom-width: 2px; border-radius: 5px; color: var(--c-f4f2ef); background: var(--c-1f222a); font-family: 'DM Mono', monospace; font-size: 10px; text-align: center; }
`,Hs=[["@Nome","Chama alguém (a mensagem fica destacada e toca um aviso para a pessoa)."],["/w Nome texto","Sussurro: só você, a pessoa e o Mestre leem."],["/gm texto","Mensagem privada para o Mestre."],["Falar como","Escolha seu personagem ao lado da caixa de texto para falar em personagem."]],Ys=[["2d6 + 3","Rola dois dados de 6 lados e soma 3."],["d20 + DES","Usa o valor do atributo da sua ficha."],["4d6kh3","Rola 4 e mantém os 3 maiores (kl = menores)."],["Vantagem","Escolha na ficha: o d20 vira 2d20 e fica o maior (desvantagem: o menor)."]],so=[{id:"compact",label:"Compacta"},{id:"normal",label:"Normal"},{id:"comfortable",label:"Confortável"}],co=[{id:"system",label:"Seguir o sistema"},{id:"reduced",label:"Reduzidas"}],lo=[{id:"full",label:"Completa"},{id:"calm",label:"Discreta"},{id:"off",label:"Desligada"}],sr=[{id:"open",label:"Aberto"},{id:"min",label:"Minimizado"},{id:"hidden",label:"Oculto"}],po="nighttable-ui-prefs";function fo(){try{const e=JSON.parse(window.localStorage.getItem(po))||{};return{density:so.some(t=>t.id===e.density)?e.density:"normal",textSize:zt(e.textSize),theme:ka(e.theme),accent:Ea(e.accent),motion:co.some(t=>t.id===e.motion)?e.motion:"system",diceAnimation:lo.some(t=>t.id===e.diceAnimation)?e.diceAnimation:"full",telemetry:e.telemetry===!0,panels:le(e.panels),speech:Ze(e.speech)}}catch{return{density:"normal",textSize:"normal",theme:"dark",accent:"violet",motion:"system",diceAnimation:"full",telemetry:!1,panels:le(null),speech:Ze(null)}}}function Cf(e){try{window.localStorage.setItem(po,JSON.stringify(e))}catch{}}function Ks({speech:e,onChange:t}){const[a,r]=$.useState(()=>Ye()?aa(window.speechSynthesis.getVoices()):[]);if($.useEffect(()=>{var s,c;if(!Ye())return;const i=()=>r(aa(window.speechSynthesis.getVoices()));return(c=(s=window.speechSynthesis).addEventListener)==null||c.call(s,"voiceschanged",i),()=>{var f,u;return(u=(f=window.speechSynthesis).removeEventListener)==null?void 0:u.call(f,"voiceschanged",i)}},[]),!Ye())return l.jsx("p",{style:{margin:"8px 0 0",color:"var(--c-7e838f)",fontSize:11},children:"Este navegador não lê texto em voz alta."});const o=Ze(e),n=i=>t(Ze({...o,...i}));return l.jsxs("div",{role:"group","aria-label":"Narração em voz",style:{display:"grid",gap:6,marginTop:10,color:"var(--c-c9c9ca)",fontSize:12},children:[l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("input",{type:"checkbox",checked:o.narration,onChange:i=>n({narration:i.target.checked})})," Ler em voz alta as narrações na tela"]}),l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("input",{type:"checkbox",checked:o.narrator,onChange:i=>n({narrator:i.target.checked})})," Ler as falas do canal #narrador"]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:8},children:[l.jsx("span",{style:{width:120},children:"Voz"}),l.jsxs("select",{value:o.voice,onChange:i=>n({voice:i.target.value}),"aria-label":"Voz da narração",style:{flex:1,minWidth:160,padding:"4px 6px",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:6,color:"var(--c-e7e5e2)",background:"var(--c-1a1c22)",fontSize:11},children:[l.jsx("option",{value:"",children:"Automática (português, se houver)"}),a.map(i=>l.jsxs("option",{value:i.name,children:[i.name," · ",i.lang]},i.name))]})]}),l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsxs("span",{style:{width:120},children:["Velocidade ",o.rate.toFixed(1),"×"]}),l.jsx("input",{type:"range",min:"0.6",max:"1.6",step:"0.1",value:o.rate,onChange:i=>n({rate:Number(i.target.value)}),"aria-label":"Velocidade da narração em voz",style:{flex:1}})]}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx(Te,{size:"small",onClick:()=>{nr(),Us("A névoa cobre o porto. Ao longe, um sino toca.",o)},sx:{minWidth:0,color:"var(--c-b9abff)",textTransform:"none",fontSize:11},children:"Testar a voz"}),l.jsx(Te,{size:"small",onClick:nr,sx:{minWidth:0,color:"var(--c-8e939e)",textTransform:"none",fontSize:11},children:"Parar"})]})]})}function we({label:e,value:t,options:a,onChange:r}){return l.jsxs("div",{role:"radiogroup","aria-label":e,style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12},children:[l.jsx("span",{style:{width:120,color:"var(--c-c9c9ca)"},children:e}),a.map(o=>l.jsxs("button",{type:"button",role:"radio","aria-checked":t===o.id,onClick:()=>r(o.id),style:{padding:"5px 10px",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:999,color:t===o.id?"var(--c-f4f2ef)":"var(--c-9a9faa)",background:t===o.id?"color-mix(in srgb, var(--c-8e6bff) 25%, transparent)":"var(--c-1a1c22)",fontSize:11,cursor:"pointer"},children:[o.swatch&&l.jsx("span",{"aria-hidden":"true",style:{display:"inline-block",width:9,height:9,marginRight:5,borderRadius:"50%",background:o.swatch}}),o.label]},o.id))]})}function Tf({open:e,isGm:t,onClose:a,onRestartTutorial:r,prefs:o,onPrefsChange:n}){return l.jsxs(bo,{open:e,onClose:a,fullWidth:!0,maxWidth:"sm",PaperProps:{sx:{bgcolor:"var(--c-14161b)",color:"var(--c-e7e5e2)",border:"1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent)"}},children:[l.jsxs(ho,{sx:{display:"flex",alignItems:"center",gap:1,fontSize:17},children:[l.jsx(ri,{sx:{color:"var(--c-b9abff)"}})," Ajuda e preferências",l.jsx(xo,{"aria-label":"Fechar ajuda",onClick:a,sx:{ml:"auto",color:"var(--c-8e939e)"},children:l.jsx(ai,{})})]}),l.jsxs(vo,{sx:{display:"grid",gap:2,pb:3},children:[o&&l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:"preferências deste navegador"}),l.jsxs("div",{style:{display:"grid",gap:8},children:[l.jsx(we,{label:"Densidade",value:o.density,options:so,onChange:i=>n({...o,density:i})}),l.jsx(we,{label:"Tema",value:ka(o.theme),options:oo,onChange:i=>n({...o,theme:i})}),l.jsx(we,{label:"Cor de destaque",value:Ea(o.accent),options:Sa,onChange:i=>n({...o,accent:i})}),l.jsx(we,{label:"Tamanho do texto",value:zt(o.textSize),options:za,onChange:i=>n({...o,textSize:i})}),l.jsx(we,{label:"Animações",value:o.motion,options:co,onChange:i=>n({...o,motion:i})}),l.jsx(we,{label:"Dados na tela",value:o.diceAnimation||"full",options:lo,onChange:i=>n({...o,diceAnimation:i})}),Object.entries(ja).map(([i,s])=>l.jsx(we,{label:s.label,value:le(o.panels)[i],options:s.minimizable?sr:sr.filter(c=>c.id!=="min"),onChange:c=>n({...o,panels:Ma(o.panels,i,c)})},i))]}),l.jsx(Ks,{speech:o.speech,onChange:i=>n({...o,speech:i})}),l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10,color:"var(--c-c9c9ca)",fontSize:12},children:[l.jsx("input",{type:"checkbox",checked:!!o.telemetry,onChange:i=>n({...o,telemetry:i.target.checked})})," Enviar relatórios de erro anônimos (sem nome, e-mail ou conversas)"]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,color:"var(--c-7e838f)",fontSize:11},children:["Erros registrados nesta sessão: ",Ua().length,Ua().length>0&&l.jsx(Te,{size:"small",onClick:()=>{var i;return(i=navigator.clipboard)==null?void 0:i.writeText([jr(),"","Desempenho:",...Rt()].join(`
`)).catch(()=>{})},sx:{minWidth:0,color:"var(--c-b9abff)",textTransform:"none",fontSize:11},children:"Copiar relatório"})]}),l.jsxs("div",{role:"group","aria-label":"Desempenho desta sessão",style:{marginTop:10,color:"var(--c-7e838f)",fontSize:11,lineHeight:1.6},children:[l.jsx("strong",{style:{display:"block",color:"var(--c-c9c9ca)",fontWeight:600},children:"Desempenho desta sessão"}),Rt().length?Rt().map(i=>l.jsx("div",{children:i},i)):l.jsx("div",{children:"Ainda sem medidas."}),l.jsx("div",{children:"Medido só neste navegador; nada é enviado."})]}),l.jsx("p",{style:{margin:"8px 0 0",color:"var(--c-7e838f)",fontSize:11},children:"Gire a roda do mouse sobre o mapa para aproximar e afastar no ponto do cursor. No celular ou tablet, faça a pinça com dois dedos para aproximar entre os dedos e arraste com dois dedos para mover."})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:"atalhos de teclado"}),l.jsx("div",{style:{display:"grid",gap:6},children:fs.filter(i=>t||!i.gmOnly).map(i=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,fontSize:12},children:[l.jsx(Ws,{style:{width:92},children:i.keys.map(s=>l.jsx("kbd",{children:s},s))}),l.jsx("span",{style:{color:"var(--c-c9c9ca)"},children:i.label})]},i.label))})]}),[["chat",Hs],["dados",Ys]].map(([i,s])=>l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:i}),l.jsx("div",{style:{display:"grid",gap:6},children:s.map(([c,f])=>l.jsxs("div",{style:{fontSize:12},children:[l.jsx("code",{style:{color:"var(--c-f3c48f)"},children:c})," ",l.jsxs("span",{style:{color:"var(--c-c9c9ca)"},children:["— ",f]})]},c))})]},i)),l.jsx(no,{}),l.jsx(Te,{onClick:r,sx:{justifySelf:"start",textTransform:"none",color:"var(--c-b9abff)"},children:"Ver o tutorial de novo"})]})]})}const Js={DEV:!1,VITE_USE_FIREBASE_EMULATORS:"false"};Yn();Vs(fo().textSize);js(fo());Wn({env:Xn(Js),dataVersion:Ne});const Xs=$.lazy(()=>Pe(()=>import("./App-DJkA2Qgz.js").then(e=>e.b5),__vite__mapDeps([0,1,2]))),Zs=$.lazy(()=>Pe(()=>import("./LoginScreen-a3dPcwV9.js"),__vite__mapDeps([3,1,4,2]))),Qs=$.lazy(()=>Pe(()=>import("./Lobby-CCdCxPPz.js"),__vite__mapDeps([5,1,0,2,4,6,7]))),ec=$.lazy(()=>Pe(()=>import("./OnlineTable-DPFgKbBr.js"),__vite__mapDeps([8,1,0,2]))),tc=$.lazy(()=>Pe(()=>Promise.resolve().then(()=>Ps),void 0)),ac=$.lazy(()=>Pe(()=>import("./StreamEntry-DtRhGbtY.js"),__vite__mapDeps([9,1,8,0,2])));function rc(){return l.jsx("div",{role:"status",style:{minHeight:"100dvh",display:"grid",placeItems:"center",color:"var(--c-8d929d)",background:"var(--c-090a0d)",fontFamily:"DM Mono, monospace",fontSize:11,letterSpacing:".12em",textTransform:"uppercase"},children:"carregando a mesa…"})}const oa="nighttable-active-table",cr=ti(),dr=vn();function oc(){try{return JSON.parse(window.localStorage.getItem(oa))||null}catch{return null}}function lr(e){try{e?window.localStorage.setItem(oa,JSON.stringify(e)):window.localStorage.removeItem(oa)}catch{}}function nc(){const{enabled:e,loading:t,user:a}=Vn(),[r,o]=$.useState(oc),n=s=>{const c=s?{uid:a.uid,tableId:s}:null;lr(c),o(c)};if(cr)return l.jsx(tc,{kind:cr});if(!e)return l.jsx(Xs,{});if(t)return null;if(dr)return l.jsx(ac,{code:dr,user:a});const i=a&&(r==null?void 0:r.uid)===a.uid?r.tableId:null;return!a||a.isAnonymous&&!i?l.jsx(Zs,{onGuestJoined:s=>{var f;const c={uid:(f=_.currentUser)==null?void 0:f.uid,tableId:s};lr(c),o(c)}}):i?l.jsx(ec,{tableId:i,user:a,onLeave:()=>n(null)},i):l.jsx(Qs,{onEnterTable:n})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/nighttablesite/sw.js",{scope:"/nighttablesite/"}).catch(()=>{})});Ft.createRoot(document.getElementById("root")).render(l.jsx(Z.StrictMode,{children:l.jsx(Kn,{children:l.jsx(Gn,{children:l.jsx($.Suspense,{fallback:l.jsx(rc,{}),children:l.jsx(nc,{})})})})}));export{td as $,_s as A,zs as B,gs as C,Ns as D,Vp as E,Op as F,Ms as G,uf as H,mf as I,gf as J,hf as K,no as L,bf as M,il as N,En as O,wc as P,_c as Q,kn as R,Dp as S,Sc as T,yf as U,xc as V,nl as W,Oc as X,Dd as Y,Ud as Z,Yd as _,$s as a,hc as a$,_d as a0,Rd as a1,qd as a2,Ic as a3,Jc as a4,Xc as a5,nd as a6,wd as a7,fd as a8,dd as a9,id as aA,ld as aB,$d as aC,ed as aD,ud as aE,Hd as aF,Gl as aG,qp as aH,Tp as aI,Rp as aJ,Rs as aK,Np as aL,$p as aM,vn as aN,fo as aO,Vs as aP,js as aQ,le as aR,Zc as aS,yc as aT,Ze as aU,Us as aV,jf as aW,Id as aX,Wn as aY,ml as aZ,xd as a_,dc as aa,nn as ab,ln as ac,p as ad,Pe as ae,wa as af,gl as ag,_p as ah,Ip as ai,Hp as aj,lc as ak,B as al,ai as am,Vd as an,af as ao,rf as ap,tf as aq,Wp as ar,Up as as,bc as at,Ne as au,pn as av,Gd as aw,Wd as ax,zc as ay,Kd as az,Is as b,ip as b$,vd as b0,Wt as b1,gc as b2,md as b3,lf as b4,hl as b5,xl as b6,Jn as b7,vl as b8,yl as b9,Ll as bA,Fl as bB,Bl as bC,Ul as bD,Jl as bE,Xl as bF,Zl as bG,Ql as bH,ep as bI,mp as bJ,gp as bK,bp as bL,yp as bM,xp as bN,vp as bO,rp as bP,tp as bQ,pp as bR,ap as bS,sp as bT,cp as bU,lp as bV,np as bW,op as bX,up as bY,hp as bZ,fp as b_,wl as ba,ri as bb,Sl as bc,kl as bd,El as be,ja as bf,Fs as bg,kf as bh,Sf as bi,Al as bj,Ts as bk,jl as bl,Ml as bm,zl as bn,Il as bo,Cl as bp,Tl as bq,Sd as br,Rl as bs,ql as bt,Nl as bu,$l as bv,_l as bw,Ol as bx,Pl as by,Dl as bz,Cs as c,pd as c$,dp as c0,wp as c1,jp as c2,fn as c3,Lc as c4,Mp as c5,Sp as c6,cf as c7,df as c8,Tf as c9,Ad as cA,Yc as cB,Tc as cC,cd as cD,Bd as cE,kp as cF,Ep as cG,zp as cH,Ap as cI,Lp as cJ,Fp as cK,Zp as cL,Hl as cM,Yl as cN,Qp as cO,ef as cP,Bp as cQ,Gp as cR,Wl as cS,Rn as cT,bn as cU,Xd as cV,Zd as cW,gd as cX,zn as cY,Ko as cZ,pc as c_,zf as ca,Cf as cb,Mf as cc,If as cd,of as ce,nf as cf,sf as cg,Vl as ch,Nd as ci,bl as cj,Fd as ck,Dc as cl,Pc as cm,Vc as cn,Hc as co,Xn as cp,wf as cq,Ma as cr,zd as cs,yd as ct,kd as cu,Ed as cv,Tn as cw,Kc as cx,jd as cy,qc as cz,xf as d,Od as d0,Pd as d1,sd as d2,Td as d3,In as d4,Cp as d5,Kl as d6,Qc as d7,hd as d8,Md as d9,Ln as dA,dl as dB,ll as dC,uc as dD,fc as dE,Vt as dF,Un as dG,Bn as dH,La as dI,el as da,Qd as db,Dn as dc,$c as dd,Rc as de,Fc as df,Wc as dg,Ld as dh,Yp as di,Kp as dj,vc as dk,Nc as dl,Jd as dm,Bc as dn,Cc as dp,od as dq,rd as dr,Cd as ds,ad as dt,bd as du,Gc as dv,Uc as dw,Af as dx,Ef as dy,Sr as dz,vf as e,cl as f,sl as g,rl as h,Ac as i,ol as j,jc as k,Jp as l,Xp as m,kc as n,Ec as o,Mc as p,mc as q,al as r,tl as s,Pp as t,Vn as u,pf as v,ff as w,fl as x,pl as y,ul as z};
