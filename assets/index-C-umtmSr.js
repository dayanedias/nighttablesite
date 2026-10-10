const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/App-Z8YyXRVL.js","assets/mui-CncEM2Qp.js","assets/firebase-CNO7A9Xd.js","assets/LoginScreen-B78Jn5Zt.js","assets/InvitePreview-ypDaA_WV.js","assets/Lobby-CzsBz6b1.js","assets/SystemEditor-D9HexNlI.js","assets/AccountDialog-D6AAl0ci.js","assets/OnlineTable-aCQJlW20.js"])))=>i.map(i=>d[i]);
var io=Object.defineProperty;var so=(e,t,a)=>t in e?io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var Ma=(e,t,a)=>so(e,typeof t!="symbol"?t+"":t,a);import{r as co,a as $,j as d,R as K,c as ra,D as lo,b as po,I as fo,d as uo,B as Te}from"./mui-CncEM2Qp.js";import{i as mo,g as go,a as bo,p as ho,b as xo,c as vo,d as ae,e as m,o as C,f as x,h as oa,j as U,q as R,l as te,k as W,w as G,T as na,u as J,s as I,m as yo,n as h,r as q,t as ir,v as wo,x as X,y as So,z as ko,F as Eo,A as Ao,B as Mo,C as ia,D as sr,E as jo,G as zo,H as Io,I as Co,J as To,K as Ro}from"./firebase-CNO7A9Xd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const _o="modulepreload",No=function(e){return"/nighttablesite/"+e},ja={},Xe=function(t,a,r){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(a.map(c=>{if(c=No(c),c in ja)return;ja[c]=!0;const f=c.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":_o,f||(g.as="script"),g.crossOrigin="",g.href=c,s&&g.setAttribute("nonce",s),document.head.appendChild(g),f)return new Promise((y,j)=>{g.addEventListener("load",y),g.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})};var Lt={},za=co;Lt.createRoot=za.createRoot,Lt.hydrateRoot=za.hydrateRoot;const $o={VITE_FIREBASE_API_KEY:"AIzaSyAojCR46U1f6Bivq7ogNUkQMReQZ8RPpmI",VITE_FIREBASE_APP_ID:"1:839551252957:web:f9a1f161e39ab7ebb85e34",VITE_FIREBASE_AUTH_DOMAIN:"nighttable-5621b.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-1Z4XL9CFYE",VITE_FIREBASE_MESSAGING_SENDER_ID:"839551252957",VITE_FIREBASE_PROJECT_ID:"nighttable-5621b",VITE_FIREBASE_STORAGE_BUCKET:"nighttable-5621b.firebasestorage.app",VITE_USE_FIREBASE_EMULATORS:"false"},me=$o,Oo=me.VITE_USE_FIREBASE_EMULATORS==="true",it={apiKey:me.VITE_FIREBASE_API_KEY,authDomain:me.VITE_FIREBASE_AUTH_DOMAIN,projectId:me.VITE_FIREBASE_PROJECT_ID,storageBucket:me.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:me.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:me.VITE_FIREBASE_APP_ID,measurementId:me.VITE_FIREBASE_MEASUREMENT_ID},Po=!!(it.apiKey&&it.projectId&&it.appId),Do=it,st=Po||Oo,Re=st?mo(Do):null,L=Re?go(Re):null,l=Re?bo(Re,{localCache:ho({tabManager:vo()})}):null,Lo="southamerica-east1";Re&&xo(Re,Lo);const Fo={message:"mensagem no chat",move:"movimento de token",state:"estado da mesa"},Ia=()=>typeof performance<"u"?performance.now():Date.now();function Bo(){return{open:null,samples:{message:[],move:[],state:[]},failures:0}}let yt=Bo();function oc({sincePageLoad:e,waitingForData:t=null},a=yt){return a.open||(a.open={sincePageLoad:Math.round(e),waitingForData:t===null?null:Math.round(t)}),a}function Uo(e,t,a=yt){return a.samples[e]&&(a.samples[e]=[...a.samples[e],Math.round(t)].slice(-100)),a}function sa(e,t,a=yt){const r=Ia();return Promise.resolve(t).then(o=>(Uo(e,Ia()-r,a),o),o=>{throw a.failures+=1,o})}function Ca(e,t){return e.length?e[Math.min(e.length-1,Math.ceil(t*e.length)-1)]:null}function Go(e=[]){if(!e.length)return{count:0,median:null,p95:null,max:null};const t=[...e].sort((a,r)=>a-r);return{count:t.length,median:Ca(t,.5),p95:Ca(t,.95),max:t[t.length-1]}}const ot=e=>e==null?"—":e>=1e3?`${(e/1e3).toFixed(1).replace(".",",")} s`:`${e} ms`;function Tt(e=yt){const t=[];e.open&&t.push(`Abrir a mesa: ${ot(e.open.sincePageLoad)} desde o carregamento da página${e.open.waitingForData!==null?` (${ot(e.open.waitingForData)} esperando os dados)`:""}`);for(const[a,r]of Object.entries(Fo)){const{count:o,median:n,p95:i}=Go(e.samples[a]);o&&t.push(`Gravar ${r}: mediana ${ot(n)}, 95% em até ${ot(i)} (${o} amostra${o===1?"":"s"})`)}return e.failures&&t.push(`Gravações que falharam: ${e.failures}`),t}const Vo={map:{maxSize:2048,maxBytes:14e5},portrait:{maxSize:480,maxBytes:9e4},avatar:{maxSize:160,maxBytes:25e3,square:!0},thumb:{maxSize:64,maxBytes:6e3}},qo=9e3;function Wo(e){return typeof e=="string"&&e.startsWith("data:image/")&&e.length<=qo}const Ho=25*1024*1024,Yo=9e5;function cr(e){const t=e.slice(e.indexOf(",")+1),a=t.endsWith("==")?2:t.endsWith("=")?1:0;return Math.floor(t.length*3/4)-a}function dr(e,t=Yo){const a=[];for(let r=0;r<e.length;r+=t)a.push(e.slice(r,r+t));return a}function lr(e){return[...e].sort((t,a)=>t.index-a.index).map(t=>t.data).join("")}function nc(e){return e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1).replace(".",",")} MB`}function Ko(e){return e?String(e.type).startsWith("image/")?e.size>Ho?"Imagem grande demais: o limite é 25 MB.":null:"Escolha um arquivo de imagem (JPG, PNG ou WebP).":"Nenhum arquivo escolhido."}function Jo(e){return new Promise((t,a)=>{const r=URL.createObjectURL(e),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),t(o)},o.onerror=()=>{URL.revokeObjectURL(r),a(new Error("Não foi possível ler esta imagem."))},o.src=r})}let Rt;function Xo(){return Rt===void 0&&(Rt=document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp")),Rt?"image/webp":"image/jpeg"}function pr(e,t,a){const r=document.createElement("canvas"),o=r.getContext("2d"),{naturalWidth:n,naturalHeight:i}=e;if(a){const c=Math.min(n,i),f=Math.min(t,c);return r.width=f,r.height=f,o.drawImage(e,(n-c)/2,(i-c)/2,c,c,0,0,f,f),r}const s=Math.min(1,t/Math.max(n,i));return r.width=Math.max(1,Math.round(n*s)),r.height=Math.max(1,Math.round(i*s)),o.fillStyle="#121419",o.fillRect(0,0,r.width,r.height),o.drawImage(e,0,0,r.width,r.height),r}async function ic(e,{maxSize:t,maxBytes:a}=Vo.thumb){const r=await new Promise((n,i)=>{const s=new Image;s.onload=()=>n(s),s.onerror=()=>i(new Error("Não foi possível ler esta imagem.")),s.src=e}),o=pr(r,t,!1);for(const n of[.7,.55,.4]){const i=o.toDataURL("image/jpeg",n);if(cr(i)<=a)return i}return null}async function sc(e,{maxSize:t,maxBytes:a,square:r=!1}){const o=Ko(e);if(o)throw new Error(o);const n=await Jo(e),i=Xo();let s=t;for(let c=0;c<6;c+=1){const f=pr(n,s,r);for(const u of[.86,.76,.66,.56,.46]){const g=f.toDataURL(i,u),y=cr(g);if(y<=a)return{dataUrl:g,bytes:y,width:f.width,height:f.height}}s=Math.round(s*.8)}throw new Error("Não foi possível reduzir esta imagem o suficiente. Tente uma menor.")}const Zo=1e4,Qo=20;function en(e,t,{windowMs:a=Zo,max:r=Qo}={}){return!e||!Number.isFinite(e.windowStart)?e?"reset":"create":t-e.windowStart>=a?"reset":e.count>=r?"blocked":"increment"}const tn="Muitas mensagens em pouco tempo. Espere alguns segundos.",_e=3,an=["weapons","armor","inventory","abilities","macros","conditions"];function rn(e){if(!e||typeof e!="object")return e;const t={...e};an.forEach(r=>{Array.isArray(t[r])||(t[r]=[])}),t.inventory=t.inventory.filter(r=>r&&String(r.name||"").trim()).map(r=>({...r,quantity:Math.max(1,Math.round(Number(r.quantity)||1)),weight:Math.max(0,Number(r.weight)||0)}));const a=Math.round(Number(t.coins));return t.coins=Number.isFinite(a)&&a>0?a:0,typeof t.condition!="string"&&(t.condition=""),t}const on={chest:"chest",door:"door"};function nn(e){return!e||typeof e!="object"||e.sprite?e:{...e,sprite:on[e.kind]||"object"}}function sn(e){return!e||typeof e!="object"||!(e.door||e.barrier)||typeof e.open=="boolean"?e:{...e,open:!1}}function cn(e){if(!e||typeof e!="object")return e;const t={...e};return Array.isArray(t.markers)&&(t.markers=t.markers.map(nn)),Array.isArray(t.walls)&&(t.walls=t.walls.map(sn)),t}function cc(e){return!e||typeof e!="object"?!1:(Number(e.schemaVersion)||1)<_e}function dn(e){if(!e||typeof e!="object")return{};const t=Number(e.version)||1;if(t>_e)return{...e,futureVersion:!0};let a={...e};return t<3&&(a=cn(a),Array.isArray(a.sheets)&&(a.sheets=a.sheets.map(rn))),{...a,version:_e}}function dc(e){if(!e||typeof e!="object")return{error:"O arquivo não é um backup do NightTable."};const t=Number(e.version);return!Number.isInteger(t)||t<2?{error:"Backup sem versão: exporte de novo pela mesa."}:t>_e?{error:`Backup feito numa versão mais nova do NightTable (v${t}). Atualize o app.`}:!e.scene||!Array.isArray(e.sheets)||e.sheets.length===0||!Array.isArray(e.tokens)||!Array.isArray(e.markers)?{error:"Backup incompleto: faltam cena, fichas, tokens ou objetos."}:{backup:dn(e)}}const ln=[{days:0,label:"Sempre"},{days:365,label:"1 ano"},{days:90,label:"90 dias"},{days:30,label:"30 dias"}],pn=24*36e5;function fn(e){const t=Number(e);return ln.some(a=>a.days===t)?t:0}function lc(e,t=Date.now()){const a=fn(e);return a?t-a*pn:null}function un(e=[]){return{deleteTables:e.filter(t=>t.role==="gm").map(t=>t.tableId),leaveTables:e.filter(t=>t.role!=="gm").map(t=>t.tableId)}}const mn=[{days:0,label:"Sem validade"},{days:1,label:"1 dia"},{days:7,label:"7 dias"},{days:30,label:"30 dias"}],gn=24*36e5;function bn(e,t=Date.now()){const a=Number(e);return mn.some(r=>r.days===a&&a>0)?t+a*gn:null}const fr=e=>{var t;return typeof e=="number"?e:((t=e==null?void 0:e.toMillis)==null?void 0:t.call(e))??null};function ur(e,t=Date.now()){const a=fr(e);return a!==null&&t>=a}function pc(e,t=Date.now()){const a=fr(e);return a===null?"sem validade":t>=a?"vencido":`vale até ${new Date(a).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}`}function mt(e=(a=>(a=globalThis.location)==null?void 0:a.origin)()||"",t="/nighttablesite/"){return`${e}${t.endsWith("/")?t:`${t}/`}`}function fc(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${mt(t,a)}?convite=${encodeURIComponent(e)}`}const Ta={life:"maxLife",effort:"maxEffort",coins:null,xp:null},hn=new Set(["id","updatedAt","history"]),xn=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function Ft(e,t){return[...new Set([...Object.keys(e||{}),...Object.keys(t||{})])].filter(r=>!hn.has(r)&&!xn(e==null?void 0:e[r],t==null?void 0:t[r]))}const Ra=e=>`${e==null?void 0:e.at}|${e==null?void 0:e.by}|${JSON.stringify(e==null?void 0:e.changes)}`;function vn(e,t,a){if(!a)return t;const r={...a};Ft(e,t).forEach(i=>{if(!(i in Ta&&Number.isFinite(Number(e==null?void 0:e[i]))&&Number.isFinite(Number(t==null?void 0:t[i]))&&Number.isFinite(Number(a[i])))){(t==null?void 0:t[i])===void 0?delete r[i]:r[i]=t[i];return}const c=Number(t[i])-Number(e[i]),f=Ta[i],u=f?Number(Ft(e,t).includes(f)?t[f]:a[f]):1/0;r[i]=Math.max(0,Math.min(Number.isFinite(u)?u:1/0,Number(a[i])+c))});const o=new Set(((e==null?void 0:e.history)||[]).map(Ra)),n=((t==null?void 0:t.history)||[]).filter(i=>!o.has(Ra(i)));return n.length&&(r.history=[...a.history||[],...n].slice(-30)),r}const _a="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function mr(e=6){const t=crypto.getRandomValues(new Uint32Array(e));return Array.from(t,a=>_a[a%_a.length]).join("")}function _(){if(!(L!=null&&L.currentUser))throw new Error("Usuário não autenticado.");return L.currentUser}const re=e=>m(l,"tables",e);async function uc({name:e,initialState:t={},campaign:a=null,avatar:r=null}){const o=_(),n=m(x(l,"tables")),i=mr(),s=X(l);return s.set(n,{name:e,...a?{campaign:a}:{},ownerId:o.uid,inviteCode:i,state:{...t,schemaVersion:_e},createdAt:h(),updatedAt:h()}),s.set(m(n,"members",o.uid),{uid:o.uid,role:"gm",displayName:o.displayName||o.email||"Mestre",tableName:e,...r?{avatar:r}:{},joinedAt:h()}),s.set(m(l,"invites",i),{tableId:n.id,tableName:e,gmName:String(o.displayName||"Mestre").slice(0,80),createdBy:o.uid,createdAt:h()}),await s.commit(),{tableId:n.id,inviteCode:i}}async function mc(e){const t=String(e||"").trim().toUpperCase();if(!t)return null;const a=await ae(m(l,"invites",t));if(!a.exists())return null;const{tableName:r,gmName:o,expiresAt:n}=a.data();return{code:t,tableName:r||"Mesa",gmName:o||null,expiresAt:n??null,expired:ur(n)}}async function yn(e,{avatar:t=null}={}){const a=_(),r=String(e||"").trim().toUpperCase(),o=await ae(m(l,"invites",r));if(!o.exists())throw new Error("Convite inválido ou expirado.");const{tableId:n,tableName:i,expiresAt:s}=o.data();if(ur(s))throw new Error("Convite inválido ou expirado.");const c=m(l,"tables",n,"members",a.uid),f=await ae(c).catch(()=>null);return f!=null&&f.exists()?{tableId:n,tableName:i}:(await I(c,{uid:a.uid,role:"player",displayName:a.displayName||a.email||"Jogador",tableName:i,inviteCode:r,guest:!!a.isAnonymous,...t?{avatar:t}:{},joinedAt:h()}),{tableId:n,tableName:i})}async function wn(){const e=_(),a=(await U(R(yo(l,"members"),G("uid","==",e.uid)))).docs.map(r=>({tableId:r.ref.parent.parent.id,...r.data()}));return Promise.all(a.map(async r=>{var i,s;const o=await ae(re(r.tableId)).catch(()=>null),n=o!=null&&o.exists()?o.data():null;return{...r,tableName:(n==null?void 0:n.name)||r.tableName,archived:!!(n!=null&&n.archived),systemName:((s=(i=n==null?void 0:n.state)==null?void 0:i.system)==null?void 0:s.name)||"",campaign:(n==null?void 0:n.campaign)||null}}))}function gc(e,t){return J(re(e),{name:String(t).trim().slice(0,80),updatedAt:h()})}function bc(e,t){return J(re(e),{archived:!!t,updatedAt:h()})}function hc(e,t,a,r=()=>{}){return C(re(e),{includeMetadataChanges:!0},o=>{r({fromCache:o.metadata.fromCache,hasPendingWrites:o.metadata.hasPendingWrites}),t(o.exists()?{id:o.id,...o.data()}:null)},a)}function xc(e,t,a){return C(x(l,"tables",e,"members"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function vc(e,t){return J(re(e),{campaign:t,updatedAt:h()})}function yc(e,t){const a=Object.fromEntries(Object.entries(t).map(([r,o])=>[`state.${r}`,o]));return sa("state",J(re(e),{...a,updatedAt:h()}))}function wc(e,{isGm:t},a,r){const o=x(l,"tables",e,"tokens"),n=t?o:R(o,G("hidden","==",!1));return C(n,i=>a(i.docs.map(s=>({id:s.id,...s.data()}))),r)}function Sc(e,t){const{id:a,...r}=t;return I(m(l,"tables",e,"tokens",a),{hidden:!!r.monster,ownerUid:null,...r})}function kc(e,t,a,r){return sa("move",J(m(l,"tables",e,"tokens",t),{x:a,y:r}))}function Ec(e,t,a){return J(m(l,"tables",e,"tokens",t),{rotation:a})}function Ac(e,t){return q(m(l,"tables",e,"tokens",t))}function Bt({id:e,...t}){return t}async function Mc(e,{tokens:t,sheets:a,currentTokens:r=[],currentSheets:o=[]}){const n=X(l),i=new Set(t.map(c=>c.id)),s=new Set(a.map(c=>c.id));r.filter(c=>!i.has(c.id)).forEach(c=>n.delete(m(l,"tables",e,"tokens",c.id))),o.filter(c=>!s.has(c.id)).forEach(c=>n.delete(m(l,"tables",e,"sheets",c.id))),t.forEach(c=>n.set(m(l,"tables",e,"tokens",c.id),{ownerUid:null,sheetId:null,...Bt(c),hidden:c.hidden??!!c.monster})),a.forEach(c=>n.set(m(l,"tables",e,"sheets",c.id),{ownerUid:null,...Bt(c),updatedAt:h()})),await n.commit()}async function jc(e,t,a,r=[]){const o=(a==null?void 0:a.uid)||null,n=X(l);n.update(m(l,"tables",e,"sheets",t),{ownerUid:o,owner:(a==null?void 0:a.displayName)||"Mestre",updatedAt:h()}),r.filter(i=>i.sheetId===t).forEach(i=>n.update(m(l,"tables",e,"tokens",i.id),{ownerUid:o})),await n.commit()}function zc(e,t,a){return C(x(l,"tables",e,"sheets"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Ic(e,t){const{id:a,...r}=t,o=a?m(l,"tables",e,"sheets",a):m(x(l,"tables",e,"sheets"));return I(o,{ownerUid:null,...r,updatedAt:h()}).then(()=>o.id)}async function Cc(e,t,a){const r=m(l,"tables",e,"sheets",a.id);try{await ir(l,async o=>{const n=await o.get(r),{id:i,...s}=n.exists()?vn(t,a,{id:n.id,...n.data()}):{ownerUid:null,...a};o.set(r,{...s,updatedAt:h()})})}catch(o){if((o==null?void 0:o.code)!=="unavailable"&&(o==null?void 0:o.code)!=="failed-precondition")throw o;const n=Object.fromEntries(Ft(t,a).map(i=>[i,a[i]===void 0?wo():a[i]]));a.history&&a.history!==(t==null?void 0:t.history)&&(n.history=a.history),await J(r,{...n,updatedAt:h()})}}function Tc(e,t,a,r,o){const n=x(l,"tables",e,t,a,"versions");return C(R(n,W("at","desc"),te(20)),i=>r(i.docs.map(s=>({id:s.id,...s.data()}))),o)}async function Rc(e,t,a,r,o){const{id:n,...i}=r,s=x(l,"tables",e,t,a,"versions");await I(m(s,n),i);const f=(await U(R(s,W("at","desc")))).docs.slice(o);if(f.length){const u=X(l);f.forEach(g=>u.delete(g.ref)),await u.commit()}}async function Na(e,t){const a=await U(x(l,"tables",e,t));for(const r of a.docs){const o=await U(x(r.ref,"versions"));await ke(o.docs.map(n=>i=>i.delete(n.ref)))}}async function _c(e,t){return await Promise.all(["player","gm"].map(a=>q(m(l,"tables",e,"sheets",t,"private",a)).catch(()=>{}))),q(m(l,"tables",e,"sheets",t))}function Nc(e,t,a,r,o){return C(m(l,"tables",e,"sheets",t,"private",a),n=>r(n.exists()&&n.data().notes||""),o)}function $c(e,t,a,r){return I(m(l,"tables",e,"sheets",t,"private",a),{notes:String(r||"").slice(0,4e3),updatedAt:h()})}const Ie=new Map;async function Sn(e){var t,a;if(!Ie.has(e)){const r=await ae(m(l,"tables",e,"rate",_().uid)).catch(()=>null),o=r!=null&&r.exists()?r.data():null;Ie.set(e,o?{windowStart:(a=(t=o.windowStart)==null?void 0:t.toMillis)==null?void 0:a.call(t),count:o.count}:null)}return Ie.get(e)}function kn(e,t,a){const r=_().uid,o=m(l,"tables",t,"rate",r);a==="increment"?e.update(o,{count:Ao(1),updatedAt:h()}):e.set(o,{uid:r,windowStart:h(),count:1,updatedAt:h()})}async function gr(e,t){const a=await Sn(e),r=en(a,Date.now()),o=r==="blocked"?"reset":r,n=async i=>{const s=X(l);t(s),kn(s,e,i),await s.commit();const c=Ie.get(e);Ie.set(e,i==="increment"&&c?{...c,count:c.count+1}:{windowStart:Date.now(),count:1})};try{await n(o)}catch(i){if((i==null?void 0:i.code)!=="permission-denied"&&(i==null?void 0:i.code)!=="not-found")throw i;Ie.delete(e);try{await n(o==="increment"?"reset":"increment")}catch(s){throw(s==null?void 0:s.code)==="permission-denied"&&r==="blocked"?Object.assign(new Error(tn),{code:"rate-limited"}):s}}}async function Oc(e,{name:t,mime:a,bytes:r,dataUrl:o,visibility:n="public",to:i=null}){const s=m(x(l,"tables",e,"chatFiles"));return await I(s,{uid:_().uid,name:t,mime:String(a||"").slice(0,80),bytes:r,visibility:n,to:i,dataUrl:o,createdAt:h()}),s.id}async function Pc(e,t){const a=await ae(m(l,"tables",e,"chatFiles",t));if(!a.exists())throw new Error("Este anexo não está mais disponível.");return a.data().dataUrl}function Dc(e,t){return q(m(l,"tables",e,"chatFiles",t))}function Lc(e,{author:t,text:a,type:r="chat",visibility:o="public",roll:n=null,apply:i=null,to:s=null,toName:c=null,character:f=null,sound:u=null,celebrate:g=null,attachment:y=null,channel:j=null,item:S=null}){const v=_(),T=m(x(l,"tables",e,"messages"));return sa("message",gr(e,M=>{g&&M.set(m(l,"tables",e,"celebration","state"),{at:h(),uid:v.uid,by:String(t||"").slice(0,80)}),M.set(T,{uid:v.uid,author:t,text:a,type:r,visibility:o,roll:n,apply:i,to:s,toName:c,...f?{character:f}:{},...u?{sound:String(u).slice(0,60)}:{},...g?{celebrate:g}:{},...y?{attachment:y}:{},...j&&j!=="mesa"?{channel:j}:{},...S?{item:S}:{},createdAt:h()})}).then(()=>T))}function Fc(e,t,a,r){const o=_().uid;return J(m(l,"tables",e,"messages",t),new Eo("reactions",a),r?So(o):ko(o))}async function Bc(e,{isGm:t,uid:a},r,o=500){const n=x(l,"tables",e,"messages"),i=r?[G("createdAt",">=",na.fromMillis(r))]:[],s=u=>u.docs.map(g=>({id:g.id,...g.data({serverTimestamps:"estimate"})})),c=t?[R(n,...i,W("createdAt","desc"),te(o))]:[R(n,G("visibility","==","public"),...i,W("createdAt","desc"),te(o)),R(n,G("uid","==",a),G("visibility","in",["gm","whisper"]),...i,W("createdAt","desc"),te(o)),R(n,G("to","==",a),...i,W("createdAt","desc"),te(o))],f=await Promise.all(c.map(u=>U(u)));return[...new Map(f.flatMap(s).map(u=>[u.id,u])).values()]}function Uc(e,{isGm:t,uid:a},r,o,n=80){const i=x(l,"tables",e,"messages"),s=v=>v.docs.map(T=>({id:T.id,...T.data({serverTimestamps:"estimate"})}));if(t)return C(R(i,W("createdAt","desc"),te(n)),v=>r(s(v).reverse()),o);let c=[],f=[],u=[];const g=()=>r([...new Map([...c,...f,...u].map(v=>[v.id,v])).values()].sort((v,T)=>{var M,b,P,H;return(((b=(M=v.createdAt)==null?void 0:M.toMillis)==null?void 0:b.call(M))||0)-(((H=(P=T.createdAt)==null?void 0:P.toMillis)==null?void 0:H.call(P))||0)}).slice(-n)),y=C(R(i,G("visibility","==","public"),W("createdAt","desc"),te(n)),v=>{c=s(v),g()},o),j=C(R(i,G("uid","==",a),G("visibility","in",["gm","whisper"]),W("createdAt","desc"),te(n)),v=>{f=s(v),g()},o),S=C(R(i,G("to","==",a),W("createdAt","desc"),te(n)),v=>{u=s(v),g()},o);return()=>{y(),j(),S()}}function Gc(e,t,a){return C(m(l,"tables",e,"private","gm"),r=>t(r.data()||{}),a)}function Vc(e,t,a,r){return C(m(l,"tables",e,"playerNotes",t),o=>{var n;return a(((n=o.data())==null?void 0:n.notes)||[])},r)}function qc(e,t,a){return I(m(l,"tables",e,"playerNotes",t),{notes:a,updatedAt:h()})}function Wc(e,t){return I(m(l,"tables",e,"private","gm"),{...t,updatedAt:h()},{merge:!0})}function Hc(e,t,a){return C(x(l,"tables",e,"locks"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Yc(e,t,a){return I(m(l,"tables",e,"locks",t),{...a,updatedAt:h()})}async function Kc(e,t){const a=await U(R(x(l,"tables",e,"locks"),G("markerId","==",t))),r=X(l);a.forEach(o=>r.delete(o.ref)),await r.commit()}function Jc(e,t,a){return I(m(l,"tables",e,"private","gm"),{lockCodes:{[t]:a},updatedAt:h()},{merge:!0})}function Xc(e,t,a){return C(x(l,"tables",e,"scenes"),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function Zc(e,t){const{id:a,...r}=t;return I(m(l,"tables",e,"scenes",a),{...r,savedAt:h()})}function Qc(e,t){return q(m(l,"tables",e,"scenes",t))}async function ed(e,{remove:t,add:a}){const r=X(l);t.forEach(o=>r.delete(m(l,"tables",e,"tokens",o.id))),a.forEach(o=>r.set(m(l,"tables",e,"tokens",o.id),{ownerUid:null,sheetId:null,...Bt(o),hidden:o.hidden??!!o.monster})),await r.commit()}function td(e,{isGm:t,uid:a},r,o){const n=x(l,"tables",e,"handouts"),i=t?n:R(n,G("audience","array-contains-any",["all",a]));return C(i,s=>r(s.docs.map(c=>({id:c.id,...c.data({serverTimestamps:"estimate"})}))),o)}function ad(e,t){const{id:a,...r}=t;return I(m(l,"tables",e,"handouts",a),{...r,createdAt:h()})}function rd(e,t){return q(m(l,"tables",e,"handouts",t))}function od(e,{isGm:t},a,r){const o=x(l,"tables",e,"containers"),n=t?o:R(o,G("opened","==",!0));return C(n,i=>a(Object.fromEntries(i.docs.map(s=>[s.id,s.data()]))),r)}function nd(e,t,{contents:a,opened:r=!1}){return I(m(l,"tables",e,"containers",t),{contents:a,opened:r},{merge:!0})}function id(e,t){return I(m(l,"tables",e,"containers",t),{ensured:!0},{merge:!0})}function sd(e,t){return q(m(l,"tables",e,"containers",t))}function cd(e,t,a){return J(m(l,"tables",e,"containers",t),{opened:!0,openedBy:String(a).slice(0,80),openedAt:h()})}function dd(e,t,a,r){const o=m(l,"tables",e,"containers",t);return ir(l,async n=>{const i=await n.get(o),s=i.exists()?i.data().contents||[]:[],c=s.find(f=>f.id===a);if(!c)throw Object.assign(new Error("Alguém já pegou este item."),{code:"already-taken"});return n.update(o,{contents:s.filter(f=>f.id!==a),takenBy:String(r).slice(0,80)}),c})}function ld(e){const t=Object.fromEntries(Object.entries(e.context||{}).map(([a,r])=>[a,String(r??"").slice(0,80)]).slice(0,10));return oa(x(l,"errorReports"),{at:Number(e.at)||Date.now(),where:String(e.where||"").slice(0,60),message:String(e.message||"").slice(0,300),code:e.code?String(e.code).slice(0,60):null,stack:e.stack?String(e.stack).slice(0,2e3):null,context:t,createdAt:h()})}async function pd(e,t,a=200){const r=await U(R(x(l,"tables",e,"messages"),G("createdAt","<",na.fromMillis(t)),W("createdAt"),te(a)));return await ke(r.docs.map(o=>n=>n.delete(o.ref))),r.size}async function En(e=()=>{}){const t=_().uid,a=un(await wn());for(const o of a.deleteTables)e("Apagando suas mesas…"),await zn(o);for(const o of a.leaveTables)e("Saindo das mesas em que você joga…"),await q(m(l,"tables",o,"members",t)).catch(()=>{});e("Apagando sua biblioteca e seu perfil…");const r=await U(x(l,"users",t,"library"));return await ke(r.docs.map(o=>n=>n.delete(o.ref))),await q(m(l,"users",t)),a}function fd(e,{actor:t,action:a,detail:r=""}){return oa(x(l,"tables",e,"audit"),{uid:_().uid,actor:String(t).slice(0,80),action:String(a).slice(0,40),detail:String(r).slice(0,200),createdAt:h()})}function ud(e,t,a){return C(R(x(l,"tables",e,"audit"),W("createdAt","desc"),te(50)),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function md(e,t,a){return J(m(l,"tables",e,"members",t),{permissions:a})}function gd(e,t,a){return J(m(l,"tables",e,"members",t),{muted:!!a})}async function bd(e,t){return await I(m(l,"tables",e,"bans",t.uid),{uid:t.uid,displayName:String(t.displayName||"").slice(0,80),at:h()}),jn(e,t)}function hd(e,t){return q(m(l,"tables",e,"messages",t))}function xd(e,t,a){return J(m(l,"tables",e,"messages",t),{text:a,editedAt:h()})}function vd(e,t,a){const{displayName:r,color:o,pronouns:n,avatar:i}=a;return J(m(l,"tables",e,"members",t),{...r?{displayName:r}:{},color:o,pronouns:n,avatar:i})}function yd(e,t,a){return J(m(l,"tables",e,"members",t),{role:a})}function wd(e,t){const a=_().uid;return C(x(l,"users",a,"library"),r=>e(r.docs.map(o=>({...o.data(),id:o.id}))),t)}function Sd(e){const t=_().uid,{id:a,...r}=e;return I(m(l,"users",t,"library",a),{...r,createdAt:h()})}function kd(e){return q(m(l,"users",_().uid,"library",e))}function Ed(e,t,a){return C(x(l,"tables",e,"presence"),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function Ad(e,{name:t,activity:a}){const r=_().uid,o={uid:r,name:String(t||"Jogador").slice(0,80),lastSeen:h()};return a!==void 0&&Object.assign(o,{activity:a,activityAt:h()}),I(m(l,"tables",e,"presence",r),o,{merge:!0})}function Md(e,t,a){return C(R(x(l,"tables",e,"journal"),W("createdAt","desc"),te(100)),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function jd(e,{title:t,text:a,author:r}){return oa(x(l,"tables",e,"journal"),{title:t,text:a,author:r,uid:_().uid,createdAt:h()})}function zd(e,t){return q(m(l,"tables",e,"journal",t))}function Id(e,t,a){return I(m(l,"tables",e,"private","gm"),{sceneNotes:{[t]:a},updatedAt:h()},{merge:!0})}function Cd(e,t,a){return C(x(l,"tables",e,"drawings"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Td(e,t){const a=_(),{id:r,...o}=t;return I(m(l,"tables",e,"drawings",r),{...o,uid:a.uid,createdAt:h()})}function Rd(e,t){return q(m(l,"tables",e,"drawings",t))}async function _d(e,t){for(let a=0;a<t.length;a+=450){const r=X(l);t.slice(a,a+450).forEach(o=>r.delete(m(l,"tables",e,"drawings",o.id))),await r.commit()}}async function ke(e,t=400){for(let a=0;a<e.length;a+=t){const r=X(l);e.slice(a,a+t).forEach(o=>o(r)),await r.commit()}}function Nd(e,t,a){return C(R(x(l,"tables",e,"mapImages"),W("createdAt","desc")),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}async function $d(e,{name:t,dataUrl:a,bytes:r,width:o,height:n,thumb:i=null}){const s=m(x(l,"tables",e,"mapImages")),c=dr(a);return await ke(c.map((f,u)=>g=>g.set(m(s,"chunks",String(u)),{index:u,data:f})),4),await I(s,{name:t,bytes:r,width:o,height:n,chunkCount:c.length,...Wo(i)?{thumb:i}:{},uid:_().uid,createdAt:h()}),s.id}async function Od(e,t){const a=await U(x(l,"tables",e,"mapImages",t,"chunks"));if(a.empty)throw new Error("Mapa não encontrado.");return lr(a.docs.map(r=>r.data()))}async function An(e,t){const a=await U(x(l,"tables",e,"mapImages",t,"chunks")),r=X(l);a.forEach(o=>r.delete(o.ref)),r.delete(m(l,"tables",e,"mapImages",t)),await r.commit()}function Pd(e,t,a){return C(R(x(l,"tables",e,"audioFiles"),W("createdAt","desc")),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}async function Dd(e,{name:t,kind:a,dataUrl:r,bytes:o}){const n=m(x(l,"tables",e,"audioFiles")),i=dr(r);return await ke(i.map((s,c)=>f=>f.set(m(n,"chunks",String(c)),{index:c,data:s})),4),await I(n,{name:t,kind:a,bytes:o,chunkCount:i.length,uid:_().uid,createdAt:h()}),n.id}async function Ld(e,t){const a=await U(x(l,"tables",e,"audioFiles",t,"chunks"));if(a.empty)throw new Error("Áudio não encontrado.");return lr(a.docs.map(r=>r.data()))}async function Mn(e,t){const a=await U(x(l,"tables",e,"audioFiles",t,"chunks")),r=X(l);a.forEach(o=>r.delete(o.ref)),r.delete(m(l,"tables",e,"audioFiles",t)),await r.commit()}function Fd(e,t,a){return C(x(l,"tables",e,"sheetImages"),r=>t(Object.fromEntries(r.docs.map(o=>[o.id,o.data()]))),a)}function Bd(e,t,{portrait:a,avatar:r}){return I(m(l,"tables",e,"sheetImages",t),{portrait:a,avatar:r,updatedAt:h()})}function Ud(e,t){return q(m(l,"tables",e,"sheetImages",t))}async function Gd(e,t=0){const a=await ae(re(e)),{inviteCode:r,name:o}=a.data();let n=null;for(let c=0;c<5&&!n;c+=1){const f=mr();(await ae(m(l,"invites",f))).exists()||(n=f)}if(!n)throw new Error("Não foi possível gerar um código. Tente de novo.");const i=X(l),s=bn(t);return i.set(m(l,"invites",n),{tableId:e,tableName:o,gmName:String(_().displayName||"Mestre").slice(0,80),createdBy:_().uid,createdAt:h(),expiresAt:s?na.fromMillis(s):null}),i.update(re(e),{inviteCode:n,inviteExpiresAt:s,updatedAt:h()}),r&&i.delete(m(l,"invites",r)),await i.commit(),n}async function Vd(e){const t=await ae(re(e)),{inviteCode:a}=t.data(),r=X(l);a&&r.delete(m(l,"invites",a)),r.update(re(e),{inviteCode:null,inviteExpiresAt:null,updatedAt:h()}),await r.commit()}async function jn(e,t){const a=re(e),[r,o]=await Promise.all([U(R(x(a,"sheets"),G("ownerUid","==",t.uid))),U(R(x(a,"tokens"),G("ownerUid","==",t.uid)))]);return await gr(e,n=>{n.delete(m(a,"members",t.uid)),r.forEach(i=>n.update(i.ref,{ownerUid:null,owner:"Mestre",updatedAt:h()})),o.forEach(i=>n.update(i.ref,{ownerUid:null})),n.set(m(x(a,"messages")),{uid:_().uid,author:"Sistema",text:`${t.displayName||"Um jogador"} foi removido da mesa`,type:"system",visibility:"public",roll:null,apply:null,to:null,toName:null,createdAt:h()})}),{releasedSheets:r.size,releasedTokens:o.size}}async function zn(e){const t=re(e),a=await ae(t),{inviteCode:r}=a.data(),o=await U(x(t,"mapImages"));for(const s of o.docs)await An(e,s.id);await Na(e,"sheets"),await Na(e,"scenes");const n=await U(x(t,"audioFiles"));for(const s of n.docs)await Mn(e,s.id);for(const s of["tokens","sheets","sheetImages","messages","drawings","private","containers","celebration","bans","locks","handouts","journal","scenes","presence","rate","audit"]){const c=await U(x(t,s));await ke(c.docs.map(f=>u=>u.delete(f.ref)))}r&&await q(m(l,"invites",r));const i=await U(x(t,"members"));await ke(i.docs.map(s=>c=>c.delete(s.ref))),await q(t)}L&&(L.languageCode="pt");async function wt(e,t={}){var o;const a=m(l,"users",e.uid);if((await ae(a)).exists()){await I(a,{lastLoginAt:h()},{merge:!0});return}await I(a,{displayName:t.displayName||e.displayName||((o=e.email)==null?void 0:o.split("@")[0])||"Aventureiro",email:e.email||null,photoURL:e.photoURL||null,createdAt:h(),lastLoginAt:h()})}function In(e){return Ro(L,e)}async function qd(e,t){const{user:a}=await jo(L,e,t);return await wt(a),a}async function Wd({name:e,email:t,password:a}){const{user:r}=await zo(L,t,a);return e&&await ia(r,{displayName:e}),await wt(r,{displayName:e}),r}async function Hd(){const{user:e}=await Co(L,new To);return await wt(e),e}async function Yd({name:e,inviteCode:t}){var n;const a=String(e||"").trim().slice(0,40);if(!a)throw Object.assign(new Error("Informe seu nome."),{code:"guest/no-name"});if(!String(t||"").trim())throw Object.assign(new Error("Informe o código de convite."),{code:"guest/no-code"});const r=(n=L.currentUser)!=null&&n.isAnonymous?L.currentUser:null,o=r||(await Mo(L)).user;await ia(o,{displayName:a}),await wt(o,{displayName:a});try{return await yn(t)}catch(i){throw r||await o.delete().catch(()=>sr(L)),i}}async function Kd(e){const t=L.currentUser;t&&(await En(e),e==null||e("Apagando a conta…"),await t.delete())}function Jd(e){return Io(L,e)}function Cn(){return sr(L)}async function Tn(e){const t=await ae(m(l,"users",e));return t.exists()?t.data():null}async function Rn({displayName:e,photo:t,avatarId:a,avatarColor:r}){const o=L.currentUser;if(!o)throw new Error("Entre na sua conta para editar o perfil.");e&&e!==o.displayName&&await ia(o,{displayName:e}),await I(m(l,"users",o.uid),{displayName:e||o.displayName||null,photo:t,avatarId:a,avatarColor:r,updatedAt:h()},{merge:!0})}const _n={"auth/invalid-email":"E-mail inválido.","auth/invalid-credential":"E-mail ou senha incorretos.","auth/user-not-found":"E-mail ou senha incorretos.","auth/wrong-password":"E-mail ou senha incorretos.","auth/email-already-in-use":"Este e-mail já está cadastrado.","auth/weak-password":"A senha precisa ter pelo menos 6 caracteres.","auth/too-many-requests":"Muitas tentativas. Aguarde um pouco e tente de novo.","auth/popup-closed-by-user":"A janela de login foi fechada antes de concluir.","auth/popup-blocked":"O navegador bloqueou a janela de login. Libere pop-ups para este site.","auth/network-request-failed":"Falha de conexão. Verifique sua internet.","auth/operation-not-allowed":"Este método de login não está ativado no Firebase.","auth/admin-restricted-operation":"A entrada sem conta não está ativada no Firebase (Authentication › Sign-in method › Anônimo).","guest/no-name":"Informe seu nome.","permission-denied":"Não foi possível entrar nesta mesa. Confira o código; se você foi bloqueado pelo Mestre, não dá para voltar.","auth/requires-recent-login":"Por segurança, saia, entre de novo e repita a exclusão.","guest/no-code":"Informe o código de convite."};function Xd(e){return(e==null?void 0:e.message)==="Convite inválido ou expirado."?e.message:_n[e==null?void 0:e.code]||"Não foi possível concluir. Tente novamente."}const Nn=["#6d52be","#2f7280","#b36154","#4d7a3f","#a0742c","#7c4b62","#3d5fa8","#8a3f8f","#4b4f5c"],Zd=["ela/dela","ele/dele","elu/delu"],br=40,$n=24,hr=4e4,On=/^#[0-9a-f]{6}$/i;function ca(e){return typeof e=="string"&&On.test(e)}function Qd(e={}){const t=String(e.displayName||"").trim().slice(0,br),a=String(e.pronouns||"").trim().slice(0,$n),r=typeof e.avatar=="string"&&e.avatar.startsWith("data:image/")&&e.avatar.length<=hr?e.avatar:null;return{displayName:t||null,pronouns:a||null,color:ca(e.color)?e.color.toLowerCase():null,avatar:r}}function el(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"?":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}const Pn=[{id:"dragao",emoji:"🐉",label:"Dragão"},{id:"mago",emoji:"🧙",label:"Mago"},{id:"elfo",emoji:"🧝",label:"Elfo"},{id:"caveira",emoji:"💀",label:"Caveira"},{id:"fantasma",emoji:"👻",label:"Fantasma"},{id:"lobo",emoji:"🐺",label:"Lobo"},{id:"coruja",emoji:"🦉",label:"Coruja"},{id:"gato",emoji:"🐈‍⬛",label:"Gato preto"},{id:"espadas",emoji:"⚔️",label:"Espadas"},{id:"escudo",emoji:"🛡️",label:"Escudo"},{id:"dado",emoji:"🎲",label:"Dado"},{id:"lua",emoji:"🌙",label:"Lua"}],Ut=Nn;function xr(e){return Pn.find(t=>t.id===e)||null}function Dn(e,t=Ut[0]){const a=xr(e);if(!a)return null;const o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${ca(t)?t:Ut[0]}"/><text x="32" y="43" font-size="34" text-anchor="middle">${a.emoji}</text></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(o)}`}function $a(e={}){const t=String(e.displayName||"").trim().slice(0,br)||null,a=xr(e.avatarId)?e.avatarId:null,r=a&&ca(e.avatarColor)?e.avatarColor.toLowerCase():null;let o=typeof e.photo=="string"&&e.photo.startsWith("data:image/")&&e.photo.length<=hr?e.photo:null;return a&&(o=Dn(a,r||Ut[0])),{displayName:t,photo:o,avatarId:a,avatarColor:r}}function tl(e,t){return(e==null?void 0:e.photo)||(t==null?void 0:t.photoURL)||null}function al(e,t){return(e==null?void 0:e.displayName)||(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||""}const vr=$.createContext({user:null,profile:null,loading:!1,enabled:!1,logout:async()=>{},saveProfile:async()=>{}});function Ln({children:e}){const[t,a]=$.useState(null),[r,o]=$.useState(st),[n,i]=$.useState(null);$.useEffect(()=>{if(st)return In(u=>{a(u),o(!1)})},[]),$.useEffect(()=>{if(i(null),!t)return;let u=!0;return Tn(t.uid).then(g=>{u&&g&&i($a({...g,displayName:g.displayName||t.displayName}))}).catch(()=>{}),()=>{u=!1}},[t==null?void 0:t.uid]);const s=async u=>{const g=$a(u);if(!g.displayName)throw new Error("Escolha um nome.");return await Rn(g),i(g),g},c=async()=>{t!=null&&t.isAnonymous&&!window.confirm("Você entrou sem conta. Ao sair, perde o acesso a esta mesa e precisará do convite de novo. Sair mesmo assim?")||await Cn()},f=$.useMemo(()=>({user:t,profile:n,loading:r,enabled:st,logout:c,saveProfile:s}),[t,n,r]);return d.jsx(vr.Provider,{value:f,children:e})}function Fn(){return $.useContext(vr)}const Oa=50,Bn=5,ze=[];let gt={},Gt=null,Pa=0;function Un(e){gt={...gt,...e}}function rl(e){Gt=e}const nt=(e,t)=>String(e||"").slice(0,t);function Gn(e,t,a=gt,r=Date.now()){const o=(e==null?void 0:e.message)||(typeof e=="string"?e:"Erro desconhecido");return{at:r,where:nt(t,60),message:nt(o,300),code:nt(e==null?void 0:e.code,60)||null,stack:nt(e==null?void 0:e.stack,2e3)||null,context:{...a}}}function Vt(e,t="app"){const a=Gn(e,t);return ze.push(a),ze.length>Oa&&ze.splice(0,ze.length-Oa),Gt&&Pa<Bn&&(Pa+=1,Promise.resolve().then(()=>Gt(a)).catch(()=>{})),a}function Da(){return[...ze]}function yr(){return JSON.stringify({geradoEm:new Date().toISOString(),contexto:gt,erros:ze},null,2)}function Vn(e=globalThis.window){!(e!=null&&e.addEventListener)||e.__nighttableErrors||(e.__nighttableErrors=!0,e.addEventListener("error",t=>Vt(t.error||t.message,"janela")),e.addEventListener("unhandledrejection",t=>Vt(t.reason,"promessa")))}class qn extends K.Component{constructor(a){super(a);Ma(this,"copy",async()=>{try{await navigator.clipboard.writeText(yr()),this.setState({copied:!0})}catch{}});this.state={failed:!1,copied:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(a,r){Vt(Object.assign(a||new Error("Falha na tela"),{stack:`${(a==null?void 0:a.stack)||""}
${(r==null?void 0:r.componentStack)||""}`}),"tela")}render(){if(!this.state.failed)return this.props.children;const a={padding:"9px 16px",border:0,borderRadius:9,color:"#fff",background:"var(--c-7358d0)",fontSize:13,cursor:"pointer"};return d.jsx("main",{role:"alert",style:{minHeight:"100dvh",display:"grid",placeItems:"center",padding:24,color:"var(--c-e7e5e2)",background:"var(--c-0a0b0f)",fontFamily:"system-ui, sans-serif"},children:d.jsxs("div",{style:{maxWidth:440,display:"grid",gap:12,textAlign:"center"},children:[d.jsx("h1",{style:{margin:0,fontSize:22},children:"Algo deu errado nesta tela"}),d.jsx("p",{style:{margin:0,color:"var(--c-a9adb6)",fontSize:14,lineHeight:1.5},children:"Seus dados da mesa estão salvos. Recarregue a página; se continuar, copie o relatório e envie para quem cuida do NightTable."}),d.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[d.jsx("button",{type:"button",style:a,onClick:()=>window.location.reload(),children:"Recarregar"}),d.jsx("button",{type:"button",style:{...a,background:"var(--c-2a2d36)"},onClick:this.copy,children:this.state.copied?"Relatório copiado":"Copiar relatório"})]})]})})}}const Wn={development:{label:"DEV",color:"#63d59a"},emulators:{label:"EMULADOR",color:"#7fe3ff"},staging:{label:"STAGING",color:"#f3c48f"},production:{label:null,color:null}};function Hn(e={}){const t=String(e.VITE_APP_ENV||"").trim().toLowerCase();return t in Wn?t:e.VITE_USE_FIREBASE_EMULATORS==="true"?"emulators":e.DEV?"development":"production"}const Yn={BASE_URL:"/nighttablesite/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyAojCR46U1f6Bivq7ogNUkQMReQZ8RPpmI",VITE_FIREBASE_APP_ID:"1:839551252957:web:f9a1f161e39ab7ebb85e34",VITE_FIREBASE_AUTH_DOMAIN:"nighttable-5621b.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-1Z4XL9CFYE",VITE_FIREBASE_MESSAGING_SENDER_ID:"839551252957",VITE_FIREBASE_PROJECT_ID:"nighttable-5621b",VITE_FIREBASE_STORAGE_BUCKET:"nighttable-5621b.firebasestorage.app",VITE_SERVER_ROLLS:"false",VITE_USE_FIREBASE_EMULATORS:"false"},Kn="09/10/2026";function Jn(e=Yn||{}){return String(e.VITE_LEGAL_CONTACT||"").trim()||null}const bt={privacidade:{title:"Política de privacidade",intro:"Esta política explica quais dados o NightTable guarda, para quê e como você pode apagá-los. Ela segue a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018).",sections:[["Quais dados guardamos",["Conta: nome de exibição, e-mail e, se você entrar com Google, a foto do perfil. Senhas ficam só no Firebase Authentication (Google) e nunca são vistas por nós.","Convidado sem conta: o nome que você digitou e um identificador anônimo deste navegador.","Conteúdo da mesa: o que você e os outros participantes criam — mensagens do chat, rolagens, fichas, mapas, imagens, áudios, desenhos, diário, handouts e anotações.","Perfil na mesa: nome, cor, pronome e avatar que você escolher para cada mesa.","Presença: se você está conectado e o que está fazendo no momento (digitando, rolando dados), para mostrar aos outros na mesa.","Registro de auditoria da mesa: ações do Mestre (convites, bloqueios, permissões), visível só aos Mestres."]],["Para que usamos",["Só para fazer a mesa funcionar: entrar, sincronizar em tempo real, guardar o histórico da campanha e aplicar as permissões de cada papel.","Não vendemos dados, não mostramos anúncios e não fazemos perfil de comportamento."]],["Quem vê o quê",["O conteúdo de uma mesa é visível para os participantes dela, conforme o papel (Mestre, co-Mestre, jogador, espectador). Sussurros e handouts privados ficam só com quem os recebe e com os Mestres quando aplicável.","O código de convite mostra o nome da mesa e do Mestre a quem tiver o código."]],["Onde os dados ficam",["No Google Firebase (Authentication e Cloud Firestore), que pode processar dados fora do Brasil, com as garantias contratuais do Google.","Neste navegador (localStorage): preferências, última mesa aberta, personagem escolhido e a biblioteca do modo local."]],["Serviços externos opcionais",["Relatórios de erro: desligados por padrão. Se você ativar em Ajuda e preferências, erros são enviados sem nome, e-mail ou conversas.","Discord: se o Mestre configurar um webhook, as rolagens da mesa são enviadas para o canal do Discord dele, sob a política do Discord.","Link de chamada de voz/vídeo: abre o serviço escolhido pelo Mestre (Discord, Meet etc.), com a política desse serviço."]],["Por quanto tempo",["Enquanto a mesa ou a conta existirem. O Mestre pode definir uma retenção do chat, e mensagens mais antigas são apagadas.","Ao excluir uma mesa, o conteúdo dela é apagado. Cópias em cache do navegador somem ao limpar os dados do site."]],["Seus direitos",['Você pode ver e corrigir seus dados (perfil e fichas), exportar fichas e campanhas em JSON, pedir ao Mestre para sair de uma mesa e excluir a conta em "Excluir minha conta", no lobby — isso apaga as mesas que você criou, sua biblioteca e seu perfil, e tira você das outras mesas.',"Mensagens que você enviou em mesas de outras pessoas ficam com a mesa; peça ao Mestre para apagá-las."]]]},termos:{title:"Termos de uso",intro:"Ao usar o NightTable você concorda com estes termos. Eles valem para quem mestra, joga ou assiste.",sections:[["O serviço",["O NightTable é uma mesa virtual de RPG. Ele é oferecido como está, sem garantia de disponibilidade contínua; faça cópias de segurança das campanhas importantes (Exportar campanha).","Recursos podem mudar ou ser retirados. Recursos experimentais ficam atrás de opções da mesa."]],["Sua conta",["Você é responsável pelo que acontece na sua conta e por guardar sua senha. Convidados sem conta perdem o acesso se apagarem os dados do navegador.","Para criar mesas é preciso ter uma conta cadastrada."]],["Conteúdo",["O que você envia (mapas, imagens, áudios, textos) continua seu. Você declara ter o direito de usá-lo e nos autoriza apenas a guardar e mostrar esse conteúdo aos participantes da mesa.","Não envie material de terceiros sem permissão, conteúdo ilegal, discurso de ódio, assédio, conteúdo sexual envolvendo menores ou dados pessoais de outras pessoas sem consentimento."]],["Convites e moderação",["Quem tem o código de convite entra na mesa. O Mestre é responsável por compartilhar o convite com cuidado e pode revogá-lo, silenciar, remover e bloquear participantes.","Podemos remover conteúdo ou contas que violem estes termos."]],["Limites",["Há limites técnicos de tamanho de imagens, áudios e mensagens, e um limite de mensagens em sequência, para manter o serviço no plano gratuito do Firebase.","Não tente contornar permissões, acessar mesas sem convite ou sobrecarregar o serviço."]],["Mudanças nestes termos",["Quando os termos mudarem, a data no topo será atualizada. Continuar usando depois disso significa aceitar a nova versão."]]]}};function wr(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${mt(t,a)}?pagina=${e}`}function Xn(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{const a=new URLSearchParams(e).get("pagina");return Object.hasOwn(bt,a)?a:null}catch{return null}}const Zn=ra(d.jsx("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded"),Qn=ra(d.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47"}),"HelpOutlineRounded");var z="-ms-",qe="-moz-",A="-webkit-",Sr="comm",St="rule",da="decl",ei="@import",ti="@namespace",kr="@keyframes",ai="@layer",Er=Math.abs,la=String.fromCharCode,qt=Object.assign;function ri(e,t){return D(e,0)^45?(((t<<2^D(e,0))<<2^D(e,1))<<2^D(e,2))<<2^D(e,3):0}function Ar(e){return e.trim()}function de(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,a){return e.replace(t,a)}function ct(e,t,a){return e.indexOf(t,a)}function D(e,t){return e.charCodeAt(t)|0}function Ee(e,t,a){return e.slice(t,a)}function se(e){return e.length}function Mr(e){return e.length}function Ue(e,t){return t.push(e),e}function oi(e,t){return e.map(t).join("")}function La(e,t){return e.filter(function(a){return!de(a,t)})}var kt=1,Ne=1,jr=0,oe=0,O=0,Pe="";function Et(e,t,a,r,o,n,i,s){return{value:e,root:t,parent:a,type:r,props:o,children:n,line:kt,column:Ne,length:i,return:"",siblings:s}}function ge(e,t){return qt(Et("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function je(e){for(;e.root;)e=ge(e.root,{children:[e]});Ue(e,e.siblings)}function ni(){return O}function ii(){return O=oe>0?D(Pe,--oe):0,Ne--,O===10&&(Ne=1,kt--),O}function ce(){return O=oe<jr?D(Pe,oe++):0,Ne++,O===10&&(Ne=1,kt++),O}function be(){return D(Pe,oe)}function dt(){return oe}function At(e,t){return Ee(Pe,e,t)}function Ye(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function si(e){return kt=Ne=1,jr=se(Pe=e),oe=0,[]}function ci(e){return Pe="",e}function _t(e){return Ar(At(oe-1,Wt(e===91?e+2:e===40?e+1:e)))}function di(e){for(;(O=be())&&O<33;)ce();return Ye(e)>2||Ye(O)>3?"":" "}function li(e,t){for(;--t&&ce()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return At(e,dt()+(t<6&&be()==32&&ce()==32))}function Wt(e){for(;ce();)switch(O){case e:return oe;case 34:case 39:e!==34&&e!==39&&Wt(O);break;case 40:e===41&&Wt(e);break;case 92:ce();break}return oe}function pi(e,t){for(;ce()&&e+O!==57;)if(e+O===84&&be()===47)break;return"/*"+At(t,oe-1)+"*"+la(e===47?e:ce())}function fi(e){for(;!Ye(be());)ce();return At(e,oe)}function ui(e){return ci(lt("",null,null,null,[""],e=si(e),0,[0],e))}function lt(e,t,a,r,o,n,i,s,c){for(var f=0,u=0,g=i,y=0,j=0,S=0,v=1,T=1,M=1,b=0,P="",H=o,N=n,B=r,k=P;T;)switch(S=b,b=ce()){case 40:if(S!=108&&D(k,g-1)==58){ct(k+=w(_t(b),"&","&\f"),"&\f",Er(f?s[f-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:k+=_t(b);break;case 9:case 10:case 13:case 32:k+=di(S);break;case 92:k+=li(dt()-1,7);continue;case 47:switch(be()){case 42:case 47:Ue(mi(pi(ce(),dt()),t,a,c),c),(Ye(S||1)==5||Ye(be()||1)==5)&&se(k)&&Ee(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*v:s[f++]=se(k)*M;case 125*v:case 59:case 0:switch(b){case 0:case 125:T=0;case 59+u:M==-1&&(k=w(k,/\f/g,"")),j>0&&(se(k)-g||v===0&&S===47)&&Ue(j>32?Ba(k+";",r,a,g-1,c):Ba(w(k," ","")+";",r,a,g-2,c),c);break;case 59:k+=";";default:if(Ue(B=Fa(k,t,a,f,u,o,s,P,H=[],N=[],g,n),n),b===123)if(u===0)lt(k,t,B,B,H,n,g,s,N);else{switch(y){case 99:if(D(k,3)===110)break;case 108:if(D(k,2)===97)break;default:u=0;case 100:case 109:case 115:}u?lt(e,B,B,r&&Ue(Fa(e,B,B,0,0,o,s,P,o,H=[],g,N),N),o,N,g,s,r?H:N):lt(k,B,B,B,[""],N,0,s,N)}}f=u=j=0,v=M=1,P=k="",g=i;break;case 58:g=1+se(k),j=S;default:if(v<1){if(b==123)--v;else if(b==125&&v++==0&&ii()==125)continue}switch(k+=la(b),b*v){case 38:M=u>0?1:(k+="\f",-1);break;case 44:s[f++]=(se(k)-1)*M,M=1;break;case 64:be()===45&&(k+=_t(ce())),y=be(),u=g=se(P=k+=fi(dt())),b++;break;case 45:S===45&&se(k)==2&&(v=0)}}return n}function Fa(e,t,a,r,o,n,i,s,c,f,u,g){for(var y=o-1,j=o===0?n:[""],S=Mr(j),v=0,T=0,M=0;v<r;++v)for(var b=0,P=Ee(e,y+1,y=Er(T=i[v])),H=e;b<S;++b)(H=Ar(T>0?j[b]+" "+P:w(P,/&\f/g,j[b])))&&(c[M++]=H);return Et(e,t,a,o===0?St:s,c,f,u,g)}function mi(e,t,a,r){return Et(e,t,a,Sr,la(ni()),Ee(e,2,-2),0,r)}function Ba(e,t,a,r,o){return Et(e,t,a,da,Ee(e,0,r),Ee(e,r+1,-1),r,o)}function zr(e,t,a){switch(ri(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return A+e+e;case 4855:return A+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return qe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+qe+e+z+e+e;case 5936:switch(D(e,t+11)){case 114:return A+e+z+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+z+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+z+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+z+e+e;case 6165:return A+e+z+"flex-"+e+e;case 5187:return A+e+w(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+z+"flex-$1$2")+e;case 5443:return A+e+z+"flex-item-"+w(e,/flex-|-self/g,"")+(de(e,/flex-|baseline/)?"":z+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return A+e+z+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+z+w(e,"shrink","negative")+e;case 5292:return A+e+z+w(e,"basis","preferred-size")+e;case 6060:return A+"box-"+w(e,"-grow","")+A+e+z+w(e,"grow","positive")+e;case 4554:return A+w(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+z+"flex-pack:$3"),/space-between/,"justify")+A+e+e;case 4200:if(!de(e,/flex-|baseline/))return z+"grid-column-align"+Ee(e,t)+e;break;case 2592:case 3360:return z+w(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,de(r.props,/grid-\w+-end/)})?~ct(e+(a=a[t].value),"span",0)?e:z+w(e,"-start","")+e+z+"grid-row-span:"+(~ct(a,"span",0)?de(a,/\d+/):+de(a,/\d+/)-+de(e,/\d+/))+";":z+w(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return de(r.props,/grid-\w+-start/)})?e:z+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(D(e,t+1)){case 109:if(D(e,t+4)!==45)break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+qe+(D(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ct(e,"stretch",0)?zr(w(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,n,i,s,c,f){return z+o+":"+n+f+(i?z+o+"-span:"+(s?c:+c-+n)+f:"")+e});case 4949:if(D(e,t+6)===121)return w(e,":",":"+A)+e;break;case 6444:switch(D(e,D(e,14)===45?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(D(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+z+"$2box$3")+e;case 100:return w(e,":",":"+z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function ht(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function gi(e,t,a,r){switch(e.type){case ai:if(e.children.length)break;case ei:case ti:case da:return e.return=e.return||e.value;case Sr:return"";case kr:return e.return=e.value+"{"+ht(e.children,r)+"}";case St:if(!se(e.value=e.props.join(",")))return""}return se(a=ht(e.children,r))?e.return=e.value+"{"+a+"}":""}function bi(e){var t=Mr(e);return function(a,r,o,n){for(var i="",s=0;s<t;s++)i+=e[s](a,r,o,n)||"";return i}}function hi(e){return function(t){t.root||(t=t.return)&&e(t)}}function xi(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case da:e.return=zr(e.value,e.length,a);return;case kr:return ht([ge(e,{value:w(e.value,"@","@"+A)})],r);case St:if(e.length)return oi(a=e.props,function(o){switch(de(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":je(ge(e,{props:[w(o,/:(read-\w+)/,":"+qe+"$1")]})),je(ge(e,{props:[o]})),qt(e,{props:La(a,r)});break;case"::placeholder":je(ge(e,{props:[w(o,/:(plac\w+)/,":"+A+"input-$1")]})),je(ge(e,{props:[w(o,/:(plac\w+)/,":"+qe+"$1")]})),je(ge(e,{props:[w(o,/:(plac\w+)/,z+"input-$1")]})),je(ge(e,{props:[o]})),qt(e,{props:La(a,r)});break}return""})}}var Ce={},Nt,$t;const $e=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",Ir="active",Cr="data-styled-version",Mt="6.5.3",pa=`/*!sc*/
`,We=typeof window<"u"&&typeof document<"u";function Ua(e){if(typeof process<"u"&&Ce!==void 0){const t=Ce[e];if(t!==void 0&&t!=="")return t!=="false"}}const vi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:($t=(Nt=Ua("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Nt!==void 0?Nt:Ua("SC_DISABLE_SPEEDY"))!==null&&$t!==void 0?$t:typeof process<"u"&&Ce!==void 0&&!1),Tr="sc-keyframes-",yi={};function Ze(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let pt=new Map,xt=new Map,ft=1;const Ge=e=>{if(pt.has(e))return pt.get(e);for(;xt.has(ft);)ft++;const t=ft++;return pt.set(e,t),xt.set(t,e),t},wi=e=>xt.get(e),Si=(e,t)=>{ft=t+1,pt.set(e,t),xt.set(t,e)},fa=Object.freeze([]),Oe=Object.freeze({});function Rr(e,t,a=Oe){return e.theme!==a.theme&&e.theme||t||a.theme}const ki=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ei=/(^-|-$)/g;function _r(e){return e.replace(ki,"-").replace(Ei,"")}const Ai=/(a)(d)/gi,Ga=e=>String.fromCharCode(e+(e>25?39:97));function ua(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=Ga(t%52)+a;return(Ga(t%52)+a).replace(Ai,"$1-$2")}const Ht=5381,Se=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},Nr=e=>Se(Ht,e);function ma(e){return ua(Nr(e)>>>0)}function Mi(e){return e.displayName||e.name||"Component"}function Yt(e){return typeof e=="string"&&!0}function ji(e){return Yt(e)?`styled.${e}`:`Styled(${Mi(e)})`}const $r=Symbol.for("react.memo"),zi=Symbol.for("react.forward_ref"),Ii={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Ci={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Or={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ti={[zi]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[$r]:Or};function Va(e){return("type"in(t=e)&&t.type.$$typeof)===$r?Or:"$$typeof"in e?Ti[e.$$typeof]:Ii;var t}const Ri=Object.defineProperty,_i=Object.getOwnPropertyNames,Ni=Object.getOwnPropertySymbols,$i=Object.getOwnPropertyDescriptor,Oi=Object.getPrototypeOf,Pi=Object.prototype;function Pr(e,t,a){if(typeof t!="string"){const r=Oi(t);r&&r!==Pi&&Pr(e,r,a);const o=_i(t).concat(Ni(t)),n=Va(e),i=Va(t);for(let s=0;s<o.length;++s){const c=o[s];if(!(c in Ci||a&&a[c]||i&&c in i||n&&c in n)){const f=$i(t,c);try{Ri(e,c,f)}catch{}}}}return e}function Qe(e){return typeof e=="function"}const Di=Symbol.for("react.forward_ref");function ga(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Di&&"styledComponentId"in e}function Ve(e,t){return e&&t?e+" "+t:e||t||""}function vt(e,t){return e.join("")}function Ke(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Kt(e,t,a=!1){if(!a&&!Ke(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=Kt(e[r],t[r]);else if(Ke(t))for(const r in t)e[r]=Kt(e[r],t[r]);return e}function ba(e,t){Object.defineProperty(e,"toString",{value:t})}const Li=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,n=o.length;let i=n;for(;e>=i;)if(i<<=1,i<0)throw Ze(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(let s=n;s<i;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,n=t.length;o<n;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let n=r;n<o;n++)t+=this.tag.getRule(n)+pa;return t}},Fi=`style[${$e}][${Cr}="${Mt}"]`,Bi=new RegExp(`^${$e}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),qa=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Jt=e=>{if(!e)return document;if(qa(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(qa(t))return t}return document},Ui=(e,t,a)=>{const r=a.split(",");let o;for(let n=0,i=r.length;n<i;n++)(o=r[n])&&e.registerName(t,o)},Gi=(e,t)=>{var a;const r=((a=t.textContent)!==null&&a!==void 0?a:"").split(pa),o=[];for(let n=0,i=r.length;n<i;n++){const s=r[n].trim();if(!s)continue;const c=s.match(Bi);if(c){const f=0|parseInt(c[1],10),u=c[2];f!==0&&(Si(u,f),Ui(e,u,c[3]),e.getTag().insertRules(f,o)),o.length=0}else o.push(s)}},Ot=e=>{const t=Jt(e.options.target).querySelectorAll(Fi);for(let a=0,r=t.length;a<r;a++){const o=t[a];o&&o.getAttribute($e)!==Ir&&(Gi(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let Fe=!1;function Vi(){if(Fe!==!1)return Fe;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Fe=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Fe=t.getAttribute("content")||void 0}return Fe=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Dr=(e,t)=>{const a=document.head,r=e||a,o=document.createElement("style"),n=(c=>{const f=Array.from(c.querySelectorAll(`style[${$e}]`));return f[f.length-1]})(r),i=n!==void 0?n.nextSibling:null;o.setAttribute($e,Ir),o.setAttribute(Cr,Mt);const s=t||Vi();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},qi=class{constructor(e,t){this.element=Dr(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;const o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let n=0,i=o.length;n<i;n++){const s=o[n];if(s.ownerNode===a)return s}throw Ze(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Wi=class{constructor(e,t){this.element=Dr(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Wa=We;const Hi={isServer:!We,useCSSOMInjection:!vi};class et{static registerId(t){return Ge(t)}constructor(t=Oe,a={},r){this.options=Object.assign(Object.assign({},Hi),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&We&&Wa&&(Wa=!1,Ot(this)),ba(this,()=>(o=>{const n=o.getTag(),{length:i}=n;let s="";for(let c=0;c<i;c++){const f=wi(c);if(f===void 0)continue;const u=o.names.get(f);if(u===void 0||!u.size)continue;const g=n.getGroup(c);if(g.length===0)continue;const y=$e+".g"+c+'[id="'+f+'"]';let j="";for(const S of u)S.length>0&&(j+=S+",");s+=g+y+'{content:"'+j+'"}'+pa}return s})(this))}rehydrate(){!this.server&&We&&Ot(this)}reconstructWithOptions(t,a=!0){const r=new et(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&We&&t.target!==this.options.target&&Jt(this.options.target)!==Jt(t.target)&&Ot(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new qi(r,o):new Wi(r,o))(this.options),new Li(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){Ge(t),t.startsWith(Tr)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(Ge(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Ge(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const Lr=new WeakSet,Yi={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ki(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Yi||e.startsWith("--")?String(t).trim():t+"px"}const we=47;function Ha(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){const r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}const Fr=Symbol.for("sc-keyframes");function Ji(e){return typeof e=="object"&&e!==null&&Fr in e}function Br(e){return Qe(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Ur=e=>e==null||e===!1||e==="",Xi=Symbol.for("react.client.reference");function Ya(e){return e.$$typeof===Xi}function Gr(e,t){for(const a in e){const r=e[a];e.hasOwnProperty(a)&&!Ur(r)&&(Array.isArray(r)&&Lr.has(r)||Qe(r)?t.push(Ha(a)+":",r,";"):Ke(r)?(t.push(a+" {"),Gr(r,t),t.push("}")):t.push(Ha(a)+": "+Ki(a,r)+";"))}}function he(e,t,a,r,o=[]){if(Ur(e))return o;const n=typeof e;if(n==="string")return o.push(e),o;if(n==="function"){if(Ya(e))return o;if(Br(e)&&t){const i=e(t);return he(i,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let i=0;i<e.length;i++)he(e[i],t,a,r,o);return o}return ga(e)?(o.push(`.${e.styledComponentId}`),o):Ji(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):Ya(e)?o:Ke(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Gr(e,o),o):(o.push(e.toString()),o)}const Zi=Nr(Mt);class Qi{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=Se(Zi,a),this.baseStyle=r,et.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let n="";for(let i=0;i<this.rules.length;i++){const s=this.rules[i];if(typeof s=="string")n+=s;else if(s)if(Br(s)){const c=s(t);typeof c=="string"?n+=c:c!=null&&c!==!1&&(n+=vt(he(c,t,a,r)))}else n+=vt(he(s,t,a,r))}if(n){this.dynamicNameCache||(this.dynamicNameCache=new Map);const i=r.hash?r.hash+n:n;let s=this.dynamicNameCache.get(i);if(!s){if(s=ua(Se(Se(this.baseHash,r.hash),n)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(i,s)}if(!a.hasNameForId(this.componentId,s)){const c=r(n,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,c)}o=Ve(o,s)}}return o}}const es=/&/g;function Vr(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function Pt(e){const t=e.length;let a="",r=0,o=0,n=0,i=!1,s=!1;for(let c=0;c<t;c++){const f=e.charCodeAt(c);if(n!==0||i||f!==we||e.charCodeAt(c+1)!==42)if(i)f===42&&e.charCodeAt(c+1)===we&&(i=!1,c++);else if(f!==34&&f!==39||Vr(e,c)){if(n===0)if(f===123)o++;else if(f===125){if(o--,o<0){s=!0;let u=c+1;for(;u<t;){const g=e.charCodeAt(u);if(g===59||g===10)break;u++}u<t&&e.charCodeAt(u)===59&&u++,o=0,c=u-1,r=u;continue}o===0&&(a+=e.substring(r,c+1),r=c+1)}else f===59&&o===0&&(a+=e.substring(r,c+1),r=c+1)}else n===0?n=f:n===f&&(n=0);else i=!0,c++}return s||o!==0||n!==0?(r<t&&o===0&&n===0&&(a+=e.substring(r)),a):e}function qr(e,t){const a=t+" ",r=","+a;for(let o=0;o<e.length;o++){const n=e[o];if(n.type==="rule"){n.value=(a+n.value).replaceAll(",",r);const i=n.props,s=[];for(let c=0;c<i.length;c++)s[c]=a+i[c];n.props=s}Array.isArray(n.children)&&n.type!=="@keyframes"&&qr(n.children,t)}return e}function ts({options:e=Oe,plugins:t=fa}=Oe){let a,r,o;const n=(y,j,S)=>S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?`.${a}`:y,i=t.slice();i.push(y=>{y.type===St&&y.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),y.props[0]=y.props[0].replace(es,r).replace(o,n))}),e.prefix&&i.push(xi),i.push(gi);let s=[];const c=bi(i.concat(hi(y=>s.push(y)))),f=(y,j="",S="",v="&")=>{a=v,r=j,o=void 0;const T=function(b){const P=b.indexOf("//")!==-1,H=b.indexOf("}")!==-1;if(!P&&!H)return b;if(!P)return Pt(b);const N=b.length;let B="",k=0,E=0,xe=0,Ae=0,Z=0,De=!1;for(;E<N;){const V=b.charCodeAt(E);if(V!==34&&V!==39||Vr(b,E))if(xe===0)if(V===we&&E+1<N&&b.charCodeAt(E+1)===42){for(E+=2;E+1<N&&(b.charCodeAt(E)!==42||b.charCodeAt(E+1)!==we);)E++;E+=2}else if(V!==40)if(V!==41)if(Ae>0)E++;else if(V===42&&E+1<N&&b.charCodeAt(E+1)===we)B+=b.substring(k,E),E+=2,k=E,De=!0;else if(V===we&&E+1<N&&b.charCodeAt(E+1)===we){for(B+=b.substring(k,E);E<N&&b.charCodeAt(E)!==10;)E++;k=E,De=!0}else V===123?Z++:V===125&&Z--,E++;else Ae>0&&Ae--,E++;else Ae++,E++;else E++;else xe===0?xe=V:xe===V&&(xe=0),E++}return De?(k<N&&(B+=b.substring(k)),Z===0?B:Pt(B)):Z===0?b:Pt(b)}(y);let M=ui(S||j?S+" "+j+" { "+T+" }":T);return e.namespace&&(M=qr(M,e.namespace)),s=[],ht(M,c),s},u=e;let g=Ht;for(let y=0;y<t.length;y++)t[y].name||Ze(15),g=Se(g,t[y].name);return u!=null&&u.namespace&&(g=Se(g,u.namespace)),u!=null&&u.prefix&&(g=Se(g,"p")),f.hash=g!==Ht?g.toString():"",f}const as=new et,Xt=ts(),Wr=K.createContext({shouldForwardProp:void 0,styleSheet:as,stylis:Xt,stylisPlugins:void 0});Wr.Consumer;function Hr(){return K.useContext(Wr)}const ha=K.createContext(void 0);ha.Consumer;const Ka=Object.prototype.hasOwnProperty,Dt={};function rs(e,t){const a=typeof e!="string"?"sc":_r(e);Dt[a]=(Dt[a]||0)+1;const r=a+"-"+ma(Mt+a+Dt[a]);return t?t+"-"+r:r}function os(e,t,a){const r=ga(e),o=e,n=!Yt(e),{attrs:i=fa,componentId:s=rs(t.displayName,t.parentComponentId),displayName:c=ji(e)}=t,f=t.displayName&&t.componentId?_r(t.displayName)+"-"+t.componentId:t.componentId||s,u=r&&o.attrs?o.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:g}=t;if(r&&o.shouldForwardProp){const v=o.shouldForwardProp;if(t.shouldForwardProp){const T=t.shouldForwardProp;g=(M,b)=>v(M,b)&&T(M,b)}else g=v}const y=new Qi(a,f,r?o.componentStyle:void 0);function j(v,T){return function(M,b,P){const{attrs:H,componentStyle:N,defaultProps:B,foldedComponentIds:k,styledComponentId:E,target:xe}=M,Ae=K.useContext(ha),Z=Hr(),De=M.shouldForwardProp||Z.shouldForwardProp,V=Rr(b,Ae,B)||Oe;let pe,Le;{const fe=K.useRef(null),ne=fe.current;if(ne!==null&&ne[1]===V&&ne[2]===Z.styleSheet&&ne[3]===Z.stylis&&ne[7]===N&&function(Me,ie,Q){const ee=Me,Y=ie;let at=0;for(const ve in Y)if(Ka.call(Y,ve)&&(at++,ee[ve]!==Y[ve]))return!1;return at===Q}(ne[0],b,ne[4]))pe=ne[5],Le=ne[6];else{pe=function(ie,Q,ee){const Y=Object.assign(Object.assign({},Q),{className:void 0,theme:ee}),at=ie.length>1;for(let ve=0;ve<ie.length;ve++){const Ct=ie[ve],rt=Qe(Ct)?Ct(at?Object.assign({},Y):Y):Ct;for(const ue in rt)ue==="className"?Y.className=Ve(Y.className,rt[ue]):ue==="style"?Y.style=Object.assign(Object.assign({},Y.style),rt[ue]):ue in Q&&Q[ue]===void 0||(Y[ue]=rt[ue])}return"className"in Q&&typeof Q.className=="string"&&(Y.className=Ve(Y.className,Q.className)),Y}(H,b,V),Le=N.generateAndInjectStyles(pe,Z.styleSheet,Z.stylis);let Me=0;for(const ie in b)Ka.call(b,ie)&&Me++;fe.current=[b,V,Z.styleSheet,Z.stylis,Me,pe,Le,N]}}const tt=pe.as||xe,zt=function(fe,ne,Me,ie){const Q={};for(const ee in fe)fe[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&fe.theme===Me||(ee==="forwardedAs"?Q.as=fe.forwardedAs:ie&&!ie(ee,ne)||(Q[ee]=fe[ee]));return Q}(pe,tt,V,De);let It=Ve(k,E);return Le&&(It+=" "+Le),pe.className&&(It+=" "+pe.className),zt[Yt(tt)&&tt.includes("-")?"class":"className"]=It,P&&(zt.ref=P),$.createElement(tt,zt)}(S,v,T)}j.displayName=c;let S=K.forwardRef(j);return S.attrs=u,S.componentStyle=y,S.displayName=c,S.shouldForwardProp=g,S.foldedComponentIds=r?Ve(o.foldedComponentIds,o.styledComponentId):"",S.styledComponentId=f,S.target=r?o.target:e,Object.defineProperty(S,"defaultProps",{get(){return this._foldedDefaultProps},set(v){this._foldedDefaultProps=r?function(T,...M){for(const b of M)Kt(T,b,!0);return T}({},o.defaultProps,v):v}}),ba(S,()=>`.${S.styledComponentId}`),n&&Pr(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}var ns=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Ja(e,t){const a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}const Xa=e=>(Lr.add(e),e);function xa(e,...t){if(Qe(e)||Ke(e))return Xa(he(Ja(fa,[e,...t])));const a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?he(a):Xa(he(Ja(a,t)))}function Zt(e,t,a=Oe){if(!t)throw Ze(1,t);const r=(o,...n)=>e(t,a,xa(o,...n));return r.attrs=o=>Zt(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>Zt(e,t,Object.assign(Object.assign({},a),o)),r}const Yr=e=>Zt(os,e),p=Yr;ns.forEach(e=>{p[e]=Yr(e)});class is{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const n=r[o];if(Qe(n)&&!ga(n))return!1}return!0}(t),et.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){const n=this.componentId;if(this.isStatic){if(r.hasNameForId(n,n+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{const s=this.computeRules(t,a,r,o);r.insertRules(n,s.name,s.rules)}return}const i=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&i){const s=i.rules,c=this.instanceRules.get(t).rules;if(s.length===c.length){let f=!0;for(let u=0;u<s.length;u++)if(s[u]!==c[u]){f=!1;break}if(f)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){const n=vt(he(this.rules,a,r,o)),i={name:this.componentId+t,rules:o(n,"")};return this.instanceRules.set(t,i),i}rebuildGroup(t){const a=this.componentId;t.clearRules(a);for(const r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}}function Kr(e,...t){const a=xa(e,...t),r=`sc-global-${ma(JSON.stringify(a))}`,o=new is(a,r),n=s=>{const c=Hr(),f=K.useContext(ha);let u;{const g=K.useRef(null);g.current===null&&(g.current=c.styleSheet.allocateGSInstance(r)),u=g.current}c.styleSheet.server&&i(u,s,c.styleSheet,f,c.stylis);{const g=o.isStatic?[u,c.styleSheet,o]:[u,s,c.styleSheet,f,c.stylis,o],y=K.useRef(o);K.useLayoutEffect(()=>{c.styleSheet.server||(y.current!==o&&(c.styleSheet.clearRules(r),y.current=o),i(u,s,c.styleSheet,f,c.stylis))},g),K.useLayoutEffect(()=>()=>{c.styleSheet.server||o.removeStyles(u,c.styleSheet)},[u,c.styleSheet,o])}return c.styleSheet.server&&o.instanceRules.delete(u),null};function i(s,c,f,u,g){if(o.isStatic)o.renderStyles(s,yi,f,g);else{const y=Object.assign(Object.assign({},c),{theme:Rr(c,u,n.defaultProps)});o.renderStyles(s,y,f,g)}}return K.memo(n)}var Jr;class ss{constructor(t,a){this[Jr]=!0,this.inject=(r,o=Xt)=>{const n=this.getName(o);if(!r.hasNameForId(this.id,n)){const i=o(this.rules,n,"@keyframes");r.insertRules(this.id,n,i)}},this.name=t,this.id=Tr+t,this.rules=a,Ge(this.id),ba(this,()=>{throw Ze(12,String(this.name))})}getName(t=Xt){return t.hash?this.name+ua(+t.hash>>>0):this.name}}function ol(e,...t){const a=vt(xa(e,...t)),r=ma(a);return new ss(r,a)}Jr=Fr;const cs=[{keys:["?"],action:"help",label:"Abrir a ajuda e os atalhos"},{keys:["Enter"],action:"focus-chat",label:"Escrever no chat"},{keys:["L"],action:"tool:free",label:"Lápis (desenho livre)"},{keys:["R"],action:"tool:measure",label:"Régua: medir distância"},{keys:["T"],action:"tool:text",label:"Texto no mapa"},{keys:["E"],action:"tool:erase",label:"Borracha"},{keys:["+"],action:"zoom-in",label:"Aproximar o mapa"},{keys:["-"],action:"zoom-out",label:"Afastar o mapa"},{keys:["0"],action:"zoom-reset",label:"Ver o mapa inteiro"},{keys:["M"],action:"toggle-mode",label:"Alternar visão de Mestre e de jogador",gmOnly:!0},{keys:["[","]"],action:null,label:"Girar o seu token (aponta a lanterna de mão)"},{keys:["S"],action:"stream",label:"Modo streaming (visão limpa para transmitir)"},{keys:["Esc"],action:null,label:"Sair da ferramenta ou desmarcar tokens"},{keys:["Ctrl","Z"],action:null,label:"Desfazer desenho"},{keys:["Ctrl","Y"],action:null,label:"Refazer desenho"},{keys:["roda"],action:null,label:"Zoom no ponto do cursor (Shift+roda desloca)"}],ds={"?":"help",enter:"focus-chat",l:"tool:free",r:"tool:measure",t:"tool:text",e:"tool:erase","+":"zoom-in","=":"zoom-in","-":"zoom-out",0:"zoom-reset",m:"toggle-mode",s:"stream","[":"rotate-left","]":"rotate-right"};function ls(e){if(!e)return!1;const t=String(e.tagName||"").toUpperCase();return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||!!e.isContentEditable}function nl(e,{isGm:t=!1}={}){var r,o,n;if(!e||e.ctrlKey||e.metaKey||e.altKey||e.repeat||ls(e.target)||(o=(r=e.target)==null?void 0:r.closest)!=null&&o.call(r,'[role="dialog"]'))return null;const a=ds[String(e.key||"").toLowerCase()]||null;return a==="focus-chat"&&!["BODY","HTML"].includes(String(((n=e.target)==null?void 0:n.tagName)||"").toUpperCase())||a==="toggle-mode"&&!t?null:a}const ps=ra(d.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9"}),"CasinoRounded");function Za(e){let t=String(e).replace("#","");t.length===3&&(t=[...t].map(n=>n+n).join(""));const[a,r,o]=[0,2,4].map(n=>parseInt(t.slice(n,n+2),16)/255).map(n=>n<=.03928?n/12.92:((n+.055)/1.055)**2.4);return .2126*a+.7152*r+.0722*o}const Xr=["06070b","090a0d","0a0b0e","0a0b0f","0b0c10","0d0e12","0e0f13","0f1014","0f1a14","101116","111217","111318","121419","14161b","14161c","15171c","15232d","17191f","191b21","1a1209","1a1c22","1b1915","1b1d23","1b1d25","1d2027","1f2128","1f222a","20232b","211d37","21665f","242730","245a43","252831","26211b","262931","287a73","2a1d22","2a2118","2a2620","2a2d36","2a2e38","2d1e16","2d3038","343846","363943","3a3d46","3a3d48","3a3e48","3aa673","3d2864","3f8f66","434753","4b3777","4b4f5c","4fd1c5","503c1e","554376","555b66","56d28b","57d68d","5b2a30","6249c0","63d59a","666b76","6753bd","6b5a44","6d52be","6f59cf","7358d0","75d49b","7a552a","7d62ce","7e838f","848995","858a95","858b96","888d98","8a6230","8a8f99","8c2228","8c919b","8c919c","8cddb0","8d929d","8e6bff","8e7fd6","8e939e","8f86c9","8fd8b0","8fe3ae","9296a0","9297a3","9677ff","979aa5","9a4a5e","9a7bff","9a9ea8","9a9faa","9b7bff","9b7d7a","9c4ef3","9d93c9","9de4b9","9ea2ac","9edeb8","9fd8ff","9ff0e7","a0a5af","a28af3","a78cff","a795ff","a7abb4","a83a43","a8acb6","a995ff","a9a0ff","a9a4b8","a9adb6","aaa0ef","aeb2ba","b2b5be","b2b5bf","b35a6e","b7bac2","b8aaff","b98b67","b9abff","b9b8b6","b9bbc2","b9bcc5","be4372","beb2ff","bfc0c7","bfc1c7","c4b4ff","c6b9ff","c9c3ff","c9c9ca","cbbcff","cdbfff","cdeedb","cfc4ff","cfc8f5","d0ced0","d4ccff","d6d1c6","d6d4d0","d8cfff","d8d0ff","d8d2ff","d8d4cc","d9ccff","d9d6d3","db9189","dbd1ff","dcd9d2","ddd5ff","ddd8e6","dedbd3","dedbe1","e2b48d","e4e2dc","e58f48","e6dccb","e7e5e2","e7e6e4","e8d8b8","e8dccb","e8e6e1","e9d9ff","e9e3da","e9e4d9","e9e7e2","eab9b3","ebe5ff","ec9741","eceae4","edd8d5","eeece8","ef756a","efb1ab","efbd86","f04f4a","f07970","f09b95","f0a29b","f0ad61","f0bd86","f0e8d9","f0ece4","f0eeea","f1b17e","f1edff","f1efeb","f2ba85","f3a29b","f3b37d","f3b3aa","f3c48f","f3ead7","f4f2ef","f54843","f5f0e9","f8f7f5","fa6357","ffc896","ffd2cc","ffd38e","ffd49a","ffd9a8","ffe1b8","ffffff"],Zr=[{id:"dark",label:"Escuro"},{id:"light",label:"Claro"},{id:"system",label:"Seguir o sistema"}],va=[{id:"violet",label:"Violeta",shift:0,swatch:"#9b7bff"},{id:"blue",label:"Azul",shift:-40,swatch:"#5f95ff"},{id:"teal",label:"Verde-água",shift:-100,swatch:"#3fbdb8"},{id:"green",label:"Verde",shift:-140,swatch:"#5fbf6a"},{id:"pink",label:"Rosa",shift:60,swatch:"#e46fb8"}];function ya(e){return Zr.some(t=>t.id===e)?e:"dark"}function wa(e){return va.some(t=>t.id===e)?e:"violet"}const fs=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,us=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;function Sa(e){const t=e.replace("#",""),[a,r,o]=[0,2,4].map(g=>fs(parseInt(t.slice(g,g+2),16)/255)),n=Math.cbrt(.4122214708*a+.5363325363*r+.0514459929*o),i=Math.cbrt(.2119034982*a+.6806995451*r+.1073969566*o),s=Math.cbrt(.0883024619*a+.2817188376*r+.6299787005*o),c=.2104542553*n+.793617785*i-.0040720468*s,f=1.9779984951*n-2.428592205*i+.4505937099*s,u=.0259040371*n+.7827717662*i-.808675766*s;return{l:c,c:Math.hypot(f,u),h:(Math.atan2(u,f)*180/Math.PI+360)%360}}function Qa({l:e,c:t,h:a}){const r=t*Math.cos(a*Math.PI/180),o=t*Math.sin(a*Math.PI/180),n=(e+.3963377774*r+.2158037573*o)**3,i=(e-.1055613458*r-.0638541728*o)**3,s=(e-.0894841775*r-1.291485548*o)**3;return[4.0767416621*n-3.3077115913*i+.2309699292*s,-1.2684380046*n+2.6097574011*i-.3413193965*s,-.0041960863*n-.7034186147*i+1.707614701*s]}function Qt(e){const t=r=>Qa({...e,c:r}).every(o=>o>=-5e-4&&o<=1.0005);let a=e.c;if(!t(a)){let r=0;for(let o=0;o<24;o+=1){const n=(r+a)/2;t(n)?r=n:a=n}a=r}return`#${Qa({...e,c:a}).map(r=>Math.round(Math.min(1,Math.max(0,us(Math.min(1,Math.max(0,r)))))*255).toString(16).padStart(2,"0")).join("")}`}function ms(e){const{c:t,h:a}=Sa(e);return t>.05&&a>=270&&a<=315}const Be=[[0,1],[.1,.99],[.35,.89],[.5,.6],[.7,.38],[1,.05]];function gs(e){for(let t=1;t<Be.length;t+=1){const[a,r]=Be[t],[o,n]=Be[t-1];if(e<=a)return n+(e-o)/(a-o)*(r-n)}return Be[Be.length-1][1]}function bs(e){const t=Sa(e);if(t.c>.06&&t.l>=.35&&t.l<=.58)return`#${e.replace("#","").toLowerCase()}`;let a=gs(t.l);return t.c>.06&&t.l>.5&&(a=Math.max(a,.47)),Qt({...t,l:a,c:t.l<.35?t.c*.5:t.c})}function hs(e,t){const a=Sa(e),r=Za(e),o=(a.h+t+360)%360;let n=0,i=1,s=Qt({...a,h:o});for(let c=0;c<22;c+=1){const f=(n+i)/2;s=Qt({...a,l:f,h:o}),Za(s)<r?n=f:i=f}return s}function xs(e,{theme:t="dark",accent:a="violet"}={}){const r=va.find(n=>n.id===wa(a)).shift;let o=`#${e.replace("#","").toLowerCase()}`;return r&&ms(o)&&(o=hs(o,r)),t==="light"?bs(o):o}function vs(e,t=!1){const a=ya(e);return a==="system"?t?"light":"dark":a}function ys(e={}){return`:root{${Xr.map(a=>`--c-${a}:${xs(a,e)};`).join("")}}`}const ws=new Set(Xr);function ut(e){if(typeof e!="string"||!/^#[0-9a-fA-F]{6}$/.test(e))return e;const t=e.slice(1).toLowerCase();return ws.has(t)?`var(--c-${t})`:e}function Ss({theme:e,accent:t}={},a=typeof document<"u"?document:null){var i,s;if(!a)return;const r=!!((s=(i=a.defaultView)==null?void 0:i.matchMedia)!=null&&s.call(i,"(prefers-color-scheme: light)").matches),o=vs(e,r);let n=a.getElementById("nighttable-theme");n||(n=a.createElement("style"),n.id="nighttable-theme",a.head.appendChild(n)),n.textContent=ys({theme:o,accent:t}),a.documentElement.dataset.theme=o,a.documentElement.style.colorScheme=o}const ks=Kr`
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
`,il=p.div`
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
`,sl=p.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 20px;
  border-bottom: 1px solid var(--border);
  background: color-mix(in srgb, var(--c-0a0b0f) 95%, transparent);
  position: relative;
  z-index: 10;
`,Es=p.div`
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 220px;
`,As=p.div`
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(135deg, var(--c-fa6357), var(--c-9c4ef3));
  border-radius: 10px 10px 10px 3px;
  box-shadow: 0 8px 22px color-mix(in srgb, var(--c-be4372) 24%, transparent);
`,Ms=p.div`
  display: grid;
  gap: 1px;
  line-height: 1;
  strong { font-size: 15px; letter-spacing: -0.04em; }
  span { color: var(--c-8d929d); font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; }
`,cl=p.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--c-111318);
`,dl=p.button`
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
`,ll=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-width: 220px;
`,pl=p.div`
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
`,fl=p.div`
  min-height: 0;
  display: grid;
  grid-template-columns: var(--dock-width) ${({$leftHidden:e})=>e?"0px":"calc(var(--left-rail) * var(--rail-scale, 1))"} minmax(0, 1fr) ${({$drawerOpen:e})=>e?"calc(var(--right-rail, 332px) * var(--rail-scale, 1) + var(--gm-nav, 0px) * var(--gm-nav-room, 1) * var(--text-zoom, 1))":"calc(54px * var(--text-zoom, 1))"};
  transition: grid-template-columns 220ms ease;
`,ul=p.nav`
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
`,ml=p.aside`
  min-width: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
  background: var(--c-101116);
  /* Em telas baixas as seções não se sobrepõem: a coluna inteira rola. */
  overflow-x: hidden;
  overflow-y: auto;
`,js=p.section`
  flex: 0 0 auto;
  padding: 17px 16px;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 6.5%, transparent);
  @media (max-height: 760px) and (min-width: 761px) { padding-top: 12px; padding-bottom: 12px; }
  /* Com o chat fechado, o log ocupa o espaço que sobra na coluna. */
  ${({$grow:e})=>e&&"flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column;"}
`,gl=p.div`
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
`,bl=p.div`
  display: grid;
  gap: 9px;
  max-height: clamp(96px, 24vh, 260px);
  overflow-y: auto;
  padding-right: 3px;
`,hl=p.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`,xl=p.div`
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
`,vl=p.div`
  min-width: 0;
  flex: 1;
  display: grid;
  gap: 2px;
  strong { overflow: hidden; color: var(--c-e7e6e4); font-size: 12px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { overflow: hidden; color: var(--c-8d929d); font-size: 10px; text-overflow: ellipsis; white-space: nowrap; }
`,yl=p.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({$online:e})=>e?"var(--c-56d28b)":"var(--c-555b66)"};
  box-shadow: ${({$online:e})=>e?"0 0 0 3px color-mix(in srgb, var(--c-56d28b) 10%, transparent)":"none"};
`,wl=p(js)`
  /* Sem min-height: 0 — a seção nunca fica menor que o próprio conteúdo (e não invade o log). */
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`,Sl=p.div`
  flex: 1 1 0;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 3px;
  .chat-older { align-self: center; padding: 4px 10px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent); border-radius: 999px; color: var(--c-b9abff); background: var(--c-17191f); font-size: 10px; cursor: pointer; }
`,kl=p.div`
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
  .reactions { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; min-height: 0; }
  .reactions button { padding: 1px 6px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent); border-radius: 999px; color: var(--c-c9c9ca); background: var(--c-191b21); font-size: 10px; cursor: pointer; }
  .reactions button.mine { border-color: color-mix(in srgb, var(--c-a28af3) 60%, transparent); background: color-mix(in srgb, var(--c-8e6bff) 16%, transparent); }
  .reactions .quick { display: inline-flex; gap: 2px; opacity: 0; transition: opacity .15s; }
  .reactions .quick button { padding: 0 3px; border-color: transparent; background: transparent; }
  &:hover .reactions .quick, .reactions .quick:focus-within { opacity: 1; }
`,El=p.div`
  min-height: 14px;
  margin-top: 8px;
  color: var(--c-8f86c9);
  font-size: 10px;
  font-style: italic;
  &:empty { visibility: hidden; }
`,Al=p.form`
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
`,Ml=p.div`
  max-height: ${({$grow:e})=>e?"none":"clamp(72px, 16vh, 142px)"};
  ${({$grow:e})=>e&&"flex: 1 1 0; min-height: 72px;"}
  display: flex;
  flex-direction: column;
  gap: 9px;
  overflow-y: auto;
`,jl=p.div`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 6px;
  color: var(--c-848995);
  font-size: 10px;
  line-height: 1.35;
  .icon { color: ${({$accent:e})=>ut(e)||"var(--c-9a9faa)"}; margin-top: 1px; }
  time { display: block; margin-top: 3px; color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 8px; }
`,zl=p.main`
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: var(--c-0e0f13);
`,Il=p.div`
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
`,Cl=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 1 180px;
  min-width: 0;
  .scene-icon { width: 31px; height: 31px; display: grid; place-items: center; border-radius: 9px; color: var(--c-e9d9ff); background: color-mix(in srgb, var(--c-9677ff) 14%, transparent); }
  .text { min-width: 0; display: grid; gap: 3px; }
  strong { overflow: hidden; color: var(--c-f1efeb); font-size: 14px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.04em; text-transform: uppercase; }
`,Tl=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,Rl=p.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;p.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
`;const _l=p.span`
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
`,Nl=p.div`
  display: flex;
  gap: 4px;
  margin: -4px 0 9px;
  button { padding: 3px 6px; border: 1px solid transparent; border-radius: 5px; color: var(--c-8d929d); background: transparent; cursor: pointer; font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; }
  button.active { color: var(--c-d8d0ff); border-color: color-mix(in srgb, var(--c-9b7bff) 28%, transparent); background: color-mix(in srgb, var(--c-9b7bff) 10%, transparent); }
`,$l=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
`,Ol=p.div`
  display: grid;
  gap: 6px;
`,Pl=p.div`
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
`,Dl=p.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 5px;
  border-radius: 5px;
  color: var(--c-eab9b3);
  background: color-mix(in srgb, var(--c-f04f4a) 10%, transparent);
  font-size: 8px;
`,Ll=p.button`
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
`,Fl=p.span`
  min-width: 43px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  text-align: center;
`,Bl=p.div`
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 18px;
  background: radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--c-554376) 11%, transparent), transparent 52%), var(--c-0d0e12);
`,Ul=p.div`
  position: relative;
  min-height: 460px;
  height: 100%;
  min-width: 670px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 16px;
  background: #13151a;
  box-shadow: 0 25px 80px rgba(0,0,0,0.34), inset 0 0 0 1px rgba(255,255,255,0.025);
`,Gl=p.div`
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
  &[data-grid='false'] { background-size: auto, auto, auto, auto, auto; background-image: radial-gradient(circle at 20% 20%, rgba(201, 145, 86, 0.19), transparent 27%), radial-gradient(circle at 78% 75%, rgba(96, 73, 143, 0.22), transparent 30%), linear-gradient(135deg, #25201c, #17171b 48%, #151823); }
`,F={objects:2,tokens:3,drawings:4,fog:5,partyAboveFog:6,fogEditor:7,interface:8},Vl=p.svg`
  position: absolute;
  inset: 0;
  z-index: ${F.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .fog-fill { fill: ${({$gm:e})=>e?"rgba(6, 7, 11, 0.5)":"rgba(6, 7, 11, 0.97)"}; }
  .fog-region { fill: none; stroke: rgba(240, 173, 97, 0.65); stroke-width: 1.5; stroke-dasharray: 6 5; }
  .fog-draft { fill: ${({$hide:e})=>e?"rgba(240, 79, 74, 0.16)":"rgba(255, 220, 160, 0.14)"}; stroke: ${({$hide:e})=>e?"#f07970":"#ffd49a"}; stroke-width: 1.5; stroke-dasharray: 4 4; }
`,ql=p.svg`
  position: absolute;
  inset: 0;
  z-index: ${F.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .dark-area { fill: ${({$gm:e})=>e?"rgba(4, 5, 9, 0.55)":"#040509"}; stroke: ${({$gm:e})=>e?"rgba(185, 139, 103, 0.8)":"none"}; stroke-width: 1.5; stroke-dasharray: 6 4; }
  .dark-area.open { fill: rgba(4, 5, 9, 0.12); }
  .dark-area.draft { fill: rgba(4, 5, 9, 0.45); stroke: #e2b48d; }
`,Wl=p.svg`
  position: absolute;
  inset: 0;
  z-index: ${F.drawings};
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
`,Hl=p.svg`
  position: absolute;
  inset: 0;
  z-index: ${F.interface};
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  line, circle, polygon { fill: none; stroke: #ffe1b8; stroke-width: 2; stroke-dasharray: 7 5; }
  circle { fill: rgba(255, 212, 154, 0.07); }
  .aoe { fill: rgba(255, 212, 154, 0.18); }
  .measure-label { fill: #1a1209; font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 700; }
  .measure-badge { fill: #f3c48f; stroke: none; }
`,Yl=p.div`
  position: absolute;
  inset: 0;
  z-index: ${F.fogEditor};
  cursor: ${({$tool:e})=>e==="text"?"text":"crosshair"};
  touch-action: none;
`,Kl=p.div`
  position: absolute;
  top: 86px;
  left: 18px;
  z-index: ${F.interface};
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
`,Jl=p.svg`
  position: absolute;
  inset: 0;
  z-index: ${F.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .vision-dark { fill: ${({$gm:e})=>e?"rgba(4, 5, 9, 0.38)":"rgba(4, 5, 9, 0.95)"}; }
`,Xl=p.svg`
  position: absolute;
  inset: 0;
  z-index: ${F.partyAboveFog};
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
`,Zl=p.div`
  position: absolute;
  z-index: ${F.interface+1};
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
`,Ql=p.div`
  position: absolute;
  z-index: ${F.partyAboveFog};
  border: 2px dashed ${({$fired:e,$draft:t})=>t?"#9ff0e7":e?"rgba(111,116,127,0.7)":"rgba(79,209,197,0.8)"};
  border-radius: 8px;
  background: ${({$fired:e,$draft:t})=>t?"rgba(79,209,197,0.16)":e?"rgba(111,116,127,0.06)":"rgba(79,209,197,0.07)"};
  pointer-events: none;
  span { position: absolute; top: 4px; left: 6px; padding: 2px 6px; border-radius: 5px; color: ${({$fired:e})=>e?"#9a9faa":"#bff6ef"}; background: rgba(8, 20, 20, 0.75); font-family: 'DM Mono', monospace; font-size: 9px; white-space: nowrap; }
`,ep=p.div`
  position: absolute;
  inset: 0;
  z-index: ${F.fogEditor};
  cursor: crosshair;
  touch-action: none;
`,tp=p.div`
  position: absolute;
  left: 18px;
  bottom: 16px;
  z-index: ${F.interface};
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
`,ap=p.span`
  position: absolute;
  left: ${({$x:e})=>`${e}%`};
  top: ${({$y:e})=>`${e}%`};
  z-index: ${F.interface};
  width: 24px;
  height: 24px;
  border: 2px solid #ffd49a;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 8px rgba(240,173,97,.18), 0 0 28px rgba(240,173,97,.75);
  pointer-events: none;
  animation: pingPulse 900ms ease-out both;
  @keyframes pingPulse { from { opacity: .95; transform: translate(-50%, -50%) scale(.5); } to { opacity: 0; transform: translate(-50%, -50%) scale(1.8); } }
`,rp=p.div`
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
`,op=p.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.025) 50%, transparent 75%);
  mix-blend-mode: screen;
`,np=p.div`
  position: absolute;
  top: 22px;
  left: 24px;
  z-index: ${F.interface};
  display: grid;
  gap: 4px;
  pointer-events: none;
  .eyebrow { color: rgba(242, 218, 176, 0.66); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; }
  strong { color: rgba(255, 244, 222, 0.78); font-size: 21px; font-weight: 500; letter-spacing: -0.04em; }
`,ip=p.div`
  position: absolute;
  right: 18px;
  bottom: 16px;
  z-index: ${F.interface};
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
`,sp=p.button`
  position: absolute;
  left: ${({$x:e})=>`${e}%`};
  top: ${({$y:e})=>`${e}%`};
  z-index: ${F.objects};
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
`,er=({$monster:e,$activeTurn:t,$marked:a,$selected:r})=>r?"0 0 0 3px #9b7bff, 0 0 0 8px rgba(155,123,255,0.3)":t?"0 0 0 4px rgba(240,173,97,0.85), 0 0 22px rgba(240,173,97,0.55)":a?"0 0 0 4px rgba(255,212,154,0.55)":`0 0 0 5px ${e?"rgba(240,79,74,0.12)":"rgba(233,228,217,0.11)"}`,cp=p.button`
  position: absolute;
  /* left/top vêm do style do elemento: muda a cada arraste e não deve gerar uma classe nova por posição. */
  z-index: ${({$aboveFog:e})=>e?F.partyAboveFog:F.tokens};
  width: ${({$monster:e,$scale:t=1})=>`${Math.round((e?36:42)*t)}px`};
  height: ${({$monster:e,$scale:t=1})=>`${Math.round((e?36:42)*t)}px`};
  display: grid;
  place-items: center;
  font-size: ${({$scale:e=1})=>`${Math.round(13*Math.min(e,1.6))}px`};
  border: 2px ${({$hiddenToken:e})=>e?"dashed":"solid"} ${({$monster:e})=>e?"#f04f4a":"#e9e4d9"};
  border-radius: 50%;
  color: #fff;
  background: ${({$color:e})=>e||"#6f59cf"};
  box-shadow: ${er}, 0 12px 22px rgba(0,0,0,0.34);
  opacity: ${({$hiddenToken:e})=>e?.72:1};
  filter: ${({$defeated:e})=>e?"grayscale(1) brightness(0.6)":"none"};
  cursor: ${({$draggable:e})=>e?"grab":"default"};
  transform: translate(-50%, -50%);
  /* Quem vê o token de outra pessoa acompanha o movimento suavizado; quem arrasta vê o token preso ao cursor. */
  transition: ${({$dragging:e})=>e?"":"left 140ms linear, top 140ms linear, "}box-shadow 160ms ease, filter 160ms ease, opacity 160ms ease;
  &:active { cursor: ${({$draggable:e})=>e?"grabbing":"default"}; }
  &:hover { box-shadow: ${er}, 0 0 0 9px rgba(233,228,217,0.08), 0 12px 22px rgba(0,0,0,0.42); }
  small { position: absolute; top: calc(100% + 6px); left: 50%; transform: translateX(-50%); color: #dedbd3; font-family: 'DM Mono', monospace; font-size: 8px; white-space: nowrap; opacity: 0.82; pointer-events: none; }
  .token-face { position: absolute; inset: 0; display: grid; place-items: center; overflow: hidden; border-radius: 50%; transition: transform 200ms ease; pointer-events: none; }
  .token-locked { position: absolute; left: -5px; bottom: -5px; width: 15px; height: 15px; display: grid; place-items: center; border-radius: 50%; color: #1a1209; background: #f3b37d; pointer-events: none; }
  .token-avatar { position: absolute; inset: 0; width: 100%; height: 100%; border-radius: 50%; object-fit: cover; pointer-events: none; }
  .token-defeated { position: absolute; inset: -2px; display: grid; place-items: center; border-radius: 50%; color: #f07970; font-size: 22px; font-weight: 700; line-height: 1; pointer-events: none; }
  .token-turn { position: absolute; top: -9px; right: -9px; min-width: 17px; height: 17px; display: grid; place-items: center; padding: 0 4px; border-radius: 999px; color: #1a1209; background: #f3b37d; font-family: 'DM Mono', monospace; font-size: 8px; font-weight: 700; pointer-events: none; }
  .token-conditions { position: absolute; top: calc(100% + 19px); left: 50%; transform: translateX(-50%); display: flex; gap: 3px; pointer-events: none; }
  .token-conditions span { padding: 2px 5px; border-radius: 4px; color: #ffd2cc; background: rgba(140, 34, 40, 0.85); font-size: 7px; white-space: nowrap; }
`,dp=p.div`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: ${F.interface};
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
`,lp=p.aside`
  min-width: 0;
  border-left: 1px solid var(--border);
  background: var(--c-111217);
  overflow: hidden;
`,pp=p.div`
  width: 54px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 18px;
`,fp=p.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,up=p.div`
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
`,mp=p.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  & > :first-child { margin-top: 0; }
`,gp=p.div`
  height: 100%;
  display: flex;
  & > div:first-child { flex: 1; min-width: 0; }
`,bp=p.nav`
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
`,hp=p.label`
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
`,xp=p.div`
  padding: 14px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 12px;
  background: ${({$tint:e})=>e||"var(--c-17191f)"};
`,vp=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .portrait { position: relative; flex-shrink: 0; width: 44px; height: 44px; display: grid; place-items: center; border: 1px solid color-mix(in srgb, var(--c-cbbcff) 42%, transparent); border-radius: 13px; color: var(--c-dbd1ff); background: linear-gradient(145deg, var(--c-3d2864), var(--c-211d37)); }
  .portrait.has-image { width: 64px; height: 64px; }
  .portrait img { width: 100%; height: 100%; border-radius: 12px; object-fit: cover; }
  .portrait button { position: absolute; width: 20px; height: 20px; display: grid; place-items: center; padding: 0; border: 1px solid color-mix(in srgb, var(--c-ffffff) 25%, transparent); border-radius: 50%; color: var(--c-ffffff); background: color-mix(in srgb, var(--c-14161c) 88%, transparent); cursor: pointer; font-size: 10px; }
  .portrait button:hover { background: var(--c-7358d0); }
  .portrait button:disabled { cursor: progress; }
  .portrait .portrait-edit { right: -6px; bottom: -6px; }
  .portrait .portrait-remove { right: -6px; top: -6px; }
  .portrait .portrait-remove:hover { background: var(--c-a83a43); }
  strong { display: block; color: var(--c-f5f0e9); font-size: 14px; }
  span { display: block; margin-top: 4px; color: var(--c-888d98); font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; }
`,yp=p.div`
  display: grid;
  gap: 6px;
  margin-top: 15px;
  .label { display: flex; align-items: center; justify-content: space-between; color: var(--c-8c919c); font-size: 10px; }
  .label strong { color: var(--c-e8e6e1); font-family: 'DM Mono', monospace; font-size: 10px; }
  .track { height: 6px; overflow: hidden; border-radius: 999px; background: var(--c-262931); }
  .fill { width: ${({$value:e})=>`${e}%`}; height: 100%; border-radius: inherit; background: ${({$color:e})=>e||"var(--c-f04f4a)"}; box-shadow: 0 0 14px ${({$glow:e})=>e||"color-mix(in srgb, var(--c-f04f4a) 25%, transparent)"}; }
`,wp=p.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin-top: 16px;
`,zs=p.div`
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
`,Sp=p.button`
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
  ${zs}:hover & { opacity: 1; transform: translateY(0); }
  &:hover { color: var(--c-ffffff); background: color-mix(in srgb, var(--c-9b7bff) 32%, transparent); }
`,kp=p.div`
  margin-top: 18px;
  .section-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; color: var(--c-7e838f); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; }
`,Ep=p.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 5.5%, transparent);
  &:last-child { border-bottom: 0; }
  .skill-icon { width: 24px; height: 24px; display: grid; place-items: center; border-radius: 7px; color: var(--c-a995ff); background: color-mix(in srgb, var(--c-9b7bff) 11%, transparent); }
  .skill-name { flex: 1; color: var(--c-c9c9ca); font-size: 11px; }
`,Is=p.input`
  width: 100%;
  padding: 10px 11px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  outline: none;
  color: var(--c-e9e7e2);
  background: var(--c-15171c);
  font-size: 11px;
  &:focus { border-color: var(--c-b9abff); box-shadow: 0 0 0 3px color-mix(in srgb, var(--c-9b7bff) 10%, transparent); }
`,Ap=p.label`
  display: grid;
  gap: 6px;
  color: var(--c-8c919b);
  font-size: 10px;
`,Mp=p.select`
  width: 100%;
  padding: 9px 10px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  outline: 0;
  color: var(--c-e9e7e2);
  background: var(--c-15171c);
  font-size: 11px;
  &:focus { border-color: color-mix(in srgb, var(--c-9b7bff) 70%, transparent); }
`,jp=p.div`
  display: grid;
  grid-template-columns: 1fr 88px;
  gap: 8px;
`,zp=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,Ip=p.button`
  min-height: 67px;
  padding: 8px;
  border: 1px solid ${({$active:e})=>e?"color-mix(in srgb, var(--c-9b7bff) 72%, transparent)":"color-mix(in srgb, var(--c-ffffff) 8%, transparent)"};
  border-radius: 9px;
  color: ${({$active:e})=>e?"var(--c-ebe5ff)":"var(--c-9a9ea8)"};
  background: ${({$theme:e})=>e==="city"?"var(--c-15232d)":e==="tavern"?"var(--c-2d1e16)":"var(--c-26211b)"};
  cursor: pointer;
  text-align: left;
  transition: 160ms ease;
  &:hover { border-color: color-mix(in srgb, var(--c-ffffff) 28%, transparent); transform: translateY(-1px); }
  strong { display: block; font-size: 10px; font-weight: 600; }
  span { display: block; margin-top: 5px; color: var(--c-8d929d); font-size: 8px; }
`,Cp=p.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 5.5%, transparent);
  .track-icon { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 7px; color: ${({$active:e})=>e?"var(--c-f1b17e)":"var(--c-8e939e)"}; background: ${({$active:e})=>e?"color-mix(in srgb, var(--c-e58f48) 14%, transparent)":"var(--c-1b1d23)"}; }
  .track-name { flex: 1; color: var(--c-c9c9ca); font-size: 11px; }
`,Tp=p.button`
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
`,Rp=p.div`
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
`,_p=p.div`
  height: 100%;
  display: grid;
  place-items: center;
  padding: 24px;
  color: var(--c-8d929d);
  text-align: center;
  font-size: 11px;
`,Np=p.span`
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
`,$p=p.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  > * { flex: 1; }
`,Op=p.p`
  margin: 9px 0 0;
  color: var(--c-8d929d);
  font-size: 9px;
  line-height: 1.45;
`,Pp=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,Dp=p.button`
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
`,Lp=p.div`
  display: grid;
  gap: 7px;
`,Fp=p.button`
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
`,Bp=p.div`
  display: grid;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
`,Up=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,Gp=p.button`
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
`,Vp=p.span`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid ${({$accent:e})=>`color-mix(in srgb, ${ut(e)||"var(--c-9b7bff)"} 40%, transparent)`};
  border-radius: 10px;
  color: ${({$accent:e})=>ut(e)||"var(--c-b9abff)"};
  background: ${({$accent:e})=>`color-mix(in srgb, ${ut(e)||"var(--c-9b7bff)"} 9%, transparent)`};
`,qp=p.div`
  display: grid;
  gap: 6px;
  max-height: 166px;
  overflow-y: auto;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
`,Wp=p.div`
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
`;p(Is)`
  padding: 8px 5px;
  text-align: center;
  font-family: 'DM Mono', monospace;
`;const Hp=p.div`
  position: fixed;
  inset: 0;
  z-index: 1400;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(5, 6, 9, 0.72);
  backdrop-filter: blur(13px);
  animation: diceOverlayIn 180ms ease both;
  @keyframes diceOverlayIn { from { opacity: 0; } to { opacity: 1; } }
`,Yp=p.div`
  position: relative;
  width: min(390px, 100%);
  display: grid;
  justify-items: center;
  gap: 12px;
  padding: 28px 24px 23px;
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
`,Kp=p.div`
  position: relative;
  width: 112px;
  height: 112px;
  margin: 6px 0 4px;
  filter: drop-shadow(0 18px 20px rgba(0,0,0,.4)) drop-shadow(0 0 18px ${({$skin:e})=>e.glow});
  transform: rotate(-8deg);
  animation: ${({$rolling:e})=>e?"diceTumble 620ms cubic-bezier(.3,.8,.4,1) infinite":"diceSettle 340ms ease both"};
  @keyframes diceTumble { 0% { transform: rotate(-8deg) translateY(0) scale(1); } 30% { transform: rotate(92deg) translateY(-13px) scale(1.06); } 65% { transform: rotate(190deg) translateY(4px) scale(.95); } 100% { transform: rotate(352deg) translateY(0) scale(1); } }
  @keyframes diceSettle { from { transform: rotate(-21deg) scale(.72); } to { transform: rotate(-8deg) scale(1); } }
  .die-face { text-shadow: 0 3px 15px rgba(0,0,0,.4); }
`,Jp=p.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
  color: #f4eefe;
  .total { font-size: 30px; font-weight: 700; letter-spacing: -.06em; }
  .math { color: #9da1ac; font-family: 'DM Mono', monospace; font-size: 10px; }
`,Xp=p.div`
  display: grid;
  gap: 14px;
  padding: 0 4px 8px;
  color: var(--c-b9bbc2);
`,Zp=p.div`
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
`;const Qp=Kr`
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
`,Cs=p.main`
  min-height: 100dvh;
  display: grid;
  place-items: center;
  padding: 24px 16px;
  overflow-y: auto;
  background: radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--c-9b7bff) 14%, transparent), transparent 40%), radial-gradient(circle at 75% 80%, color-mix(in srgb, var(--c-f04f4a) 10%, transparent), transparent 38%), var(--c-0a0b0f);
`,Ts=p.form`
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
`,ef=p(Cs)`
  place-items: start center;
  padding: 32px 16px;
  @media (max-width: 760px) { padding: 16px; }
`,tf=p(Ts)`
  width: min(100%, 1120px);
  gap: 18px;
  padding: 24px 28px;
  @media (max-width: 760px) { padding: 18px 16px; }
`,af=p.div`
  display: grid;
  grid-template-columns: minmax(280px, 380px) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: minmax(0, 1fr); gap: 18px; }
`,rf=p.div`
  display: grid;
  gap: 13px;
  min-width: 0;
`,of=p.section`
  display: grid;
  gap: 16px;
  min-width: 0;
  padding: 18px 20px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 12px;
  background: color-mix(in srgb, var(--c-ffffff) 1.5%, transparent);
  h2 { margin: 0; color: var(--c-e9e7e2); font-size: 15px; font-weight: 600; letter-spacing: -0.02em; }
  @media (max-width: 760px) { padding: 14px; }
`,nf=p.div`
  display: grid;
  gap: 3px;
  strong { color: var(--c-d6d4d0); font-size: 12px; font-weight: 600; }
  span { color: var(--c-7e838f); font-size: 11px; line-height: 1.4; }
`,sf=p.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  &::before, &::after { content: ''; flex: 1; height: 1px; background: color-mix(in srgb, var(--c-ffffff) 8%, transparent); }
`,cf=p.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  button { padding: 0; border: 0; color: var(--c-b9abff); background: none; cursor: pointer; font-size: 11px; }
  button:hover { color: var(--c-ddd5ff); text-decoration: underline; }
`,df=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--c-c9c9ca);
  font-size: 11px;
  .user-avatar { width: 26px; height: 26px; display: grid; place-items: center; overflow: hidden; border-radius: 8px; color: #fff; background: var(--c-6d52be); font-size: 10px; font-weight: 700; }
  .user-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .user-name { max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  @media (max-width: 900px) { .user-name { display: none; } }
`;function Rs({kind:e}){const t=bt[e],a=Jn(),r=e==="privacidade"?"termos":"privacidade";return $.useEffect(()=>{document.title=`${t.title} — NightTable`},[t.title]),d.jsxs(d.Fragment,{children:[d.jsx(ks,{}),d.jsx("main",{style:{height:"100vh",boxSizing:"border-box",padding:"32px 16px 56px",background:"var(--c-0a0b0f)",color:"var(--c-d6d4d0)",overflowY:"auto"},children:d.jsxs("article",{style:{maxWidth:720,margin:"0 auto",display:"grid",gap:18,lineHeight:1.6,fontSize:14},children:[d.jsx("a",{href:mt(),style:{textDecoration:"none"},children:d.jsxs(Es,{children:[d.jsx(As,{children:d.jsx(ps,{fontSize:"small"})}),d.jsxs(Ms,{children:[d.jsx("strong",{children:"NightTable"}),d.jsx("span",{children:"virtual tabletop"})]})]})}),d.jsxs("header",{children:[d.jsx("h1",{style:{margin:"0 0 4px",color:"var(--c-f4f2ef)",fontSize:26},children:t.title}),d.jsxs("p",{style:{margin:0,color:"var(--c-7e838f)",fontSize:12},children:["Última atualização: ",Kn]})]}),d.jsx("p",{style:{margin:0},children:t.intro}),t.sections.map(([o,n])=>d.jsxs("section",{children:[d.jsx("h2",{style:{margin:"0 0 6px",color:"var(--c-c9c3ff)",fontSize:16},children:o}),d.jsx("ul",{style:{margin:0,paddingLeft:20,display:"grid",gap:6},children:n.map(i=>d.jsx("li",{children:i},i))})]},o)),d.jsxs("section",{children:[d.jsx("h2",{style:{margin:"0 0 6px",color:"var(--c-c9c3ff)",fontSize:16},children:"Contato"}),d.jsx("p",{style:{margin:0},children:a?d.jsxs(d.Fragment,{children:["Dúvidas, pedidos sobre seus dados ou denúncias: ",d.jsx("a",{href:a.includes("@")?`mailto:${a}`:a,style:{color:"var(--c-b9abff)"},children:a}),"."]}):"Dúvidas, pedidos sobre seus dados ou denúncias: fale com quem administra esta instalação do NightTable."})]}),d.jsxs("nav",{style:{display:"flex",gap:16,fontSize:12},children:[d.jsx("a",{href:wr(r),style:{color:"var(--c-b9abff)"},children:bt[r].title}),d.jsx("a",{href:mt(),style:{color:"var(--c-b9abff)"},children:"Voltar ao NightTable"})]})]})})]})}function Qr({style:e}){return d.jsx("p",{style:{margin:0,display:"flex",gap:12,flexWrap:"wrap",color:"var(--c-7e838f)",fontSize:11,...e},children:Object.entries(bt).map(([t,a])=>d.jsx("a",{href:wr(t),target:"_blank",rel:"noopener",style:{color:"var(--c-9d93c9)"},children:a.title},t))})}const _s=Object.freeze(Object.defineProperty({__proto__:null,LegalLinks:Qr,default:Rs},Symbol.toStringTag,{value:"Module"})),ka={players:{label:"Jogadores na mesa",minimizable:!0},chat:{label:"Chat",minimizable:!0},log:{label:"Log da sessão",minimizable:!0},minimap:{label:"Minimapa",minimizable:!1},legend:{label:"Legenda do mapa",minimizable:!1}},Ns=["players","chat","log"],$s=["open","min","hidden"];function le(e){const t=e&&typeof e=="object"?e:{};return Object.fromEntries(Object.entries(ka).map(([a,r])=>{const o=$s.includes(t[a])?t[a]:"open";return[a,o==="min"&&!r.minimizable?"open":o]}))}function Ea(e,t,a){return le({...le(e),[t]:a})}function lf(e,t){const a=le(e)[t];return Ea(e,t,a==="open"?"min":"open")}function Os(e,t){return le(e)[t]!=="hidden"}function pf(e){const t=le(e);return Ns.every(a=>t[a]==="hidden")}function ff(e){return Object.values(le(e)).filter(t=>t==="hidden").length}function uf(){return Object.fromEntries(Object.keys(ka).map(e=>[e,"hidden"]))}function mf(e,t){return Ea(e,t,Os(e,t)?"hidden":"open")}function Je(e){const t=e&&typeof e=="object"?e:{},a=Number(t.rate);return{narration:t.narration===!0,narrator:t.narrator===!0,voice:String(t.voice||"").slice(0,120),rate:Number.isFinite(a)?Math.min(1.6,Math.max(.6,Math.round(a*10)/10)):1}}function ea(e){const t=a=>/^pt-BR/i.test(a.lang)?0:/^pt/i.test(a.lang)?1:2;return[...e||[]].sort((a,r)=>t(a)-t(r)||String(a.name).localeCompare(String(r.name)))}function Ps(e,t){const a=ea(e);return a.find(r=>r.name===t)||a.find(r=>/^pt/i.test(r.lang))||null}function gf(e){const t=String((e==null?void 0:e.title)||"").trim(),a=String((e==null?void 0:e.text)||"").trim();return t?!a||a===t?t:`${t}. ${a}`:a}const He=()=>typeof window<"u"&&"speechSynthesis"in window&&typeof window.SpeechSynthesisUtterance=="function";function Ds(e,t){const a=String(e||"").trim();if(!a||!He())return!1;const{voice:r,rate:o}=Je(t),n=new window.SpeechSynthesisUtterance(a.slice(0,1200)),i=Ps(window.speechSynthesis.getVoices(),r);return i&&(n.voice=i),n.lang=(i==null?void 0:i.lang)||"pt-BR",n.rate=o,window.speechSynthesis.speak(n),!0}function tr(){He()&&window.speechSynthesis.cancel()}const Aa=[{id:"normal",label:"Normal",zoom:1},{id:"large",label:"Grande",zoom:1.15},{id:"xlarge",label:"Muito grande",zoom:1.3}];function jt(e){return Aa.some(t=>t.id===e)?e:"normal"}function eo(e){return Aa.find(t=>t.id===jt(e)).zoom}function Ls(e){return 1+(eo(e)-1)/2}function Fs(e,t=typeof document<"u"?document.documentElement:null){t&&(t.style.setProperty("--text-zoom",String(eo(e))),t.style.setProperty("--rail-scale",String(Ls(e))),t.dataset.textSize=jt(e))}const ar={player:[{title:"Bem-vindo à mesa",text:"O mapa fica no centro. Arraste o seu token para se mover; o Mestre controla a névoa e o que você enxerga."},{title:"Sua ficha",text:"No painel da direita estão sua ficha, armas e inventário. Clique em um atributo ou perícia para rolar os dados. Duplo clique no seu avatar (no mapa ou na lista) abre a ficha completa."},{title:"Sua tela, do seu jeito",text:"A barra de ícones na beirada esquerda mostra ou oculta jogadores, chat, log, ficha, minimapa e legenda. O modo limpo deixa só o mapa."},{title:"Conversa",text:"No chat, use @nome para chamar alguém, /w Nome para sussurrar e /gm para falar só com o Mestre. Passe o mouse numa mensagem para reagir."},{title:"Ferramentas do mapa",text:"A barra à esquerda do mapa tem lápis, régua e formas. Os desenhos aparecem para todos e somem sozinhos se forem temporários."},{title:"Atalhos",text:"Aperte ? a qualquer momento para ver os atalhos de teclado e reabrir este tutorial pelo botão de ajuda no topo."}],gm:[{title:"Visão do Mestre",text:"O painel da direita reúne tudo o que você controla: cena, tokens, objetos, iniciativa, áudio, handouts e regras."},{title:"Prepare as cenas",text:"Oculte o mapa dos jogadores enquanto prepara, salve o tabuleiro como cena e ative com um clique. O cartão de abertura aparece para todos."},{title:"Tokens e combate",text:"Coloque fichas no mapa, esconda inimigos, marque derrotados e use a iniciativa. Os geradores criam encontros prontos. Duplo clique num token abre a ficha dele."},{title:"Convide o grupo",text:"Compartilhe o código de convite. No lobby da campanha você escreve a descrição e marca as próximas sessões."},{title:"Atalhos e ajuda",text:"Aperte ? para ver os atalhos. M alterna entre a sua visão e a dos jogadores."}]},ta=e=>`nighttable-tutorial-v1:${e}`;function bf(e){try{return window.localStorage.getItem(ta(e))==="done"}catch{return!0}}function hf(e,t){try{t?window.localStorage.setItem(ta(e),"done"):window.localStorage.removeItem(ta(e))}catch{}}const Bs=p.aside`
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
`;function xf({role:e,onFinish:t}){const a=ar[e]||ar.player,[r,o]=$.useState(0),n=a[r],i=r===a.length-1;return d.jsxs(Bs,{role:"dialog","aria-label":"Tutorial do NightTable",children:[d.jsxs("span",{className:"step",children:["primeiros passos · ",r+1,"/",a.length]}),d.jsx("h2",{children:n.title}),d.jsx("p",{children:n.text}),d.jsxs("div",{className:"actions",children:[d.jsx("div",{className:"dots","aria-hidden":"true",children:a.map((s,c)=>d.jsx("span",{className:c===r?"on":""},s.title))}),d.jsx(Te,{onClick:t,size:"small",sx:{textTransform:"none",color:"var(--c-8e939e)",fontSize:11},children:"Pular"}),d.jsx(Te,{onClick:()=>i?t():o(r+1),size:"small",variant:"contained",sx:{textTransform:"none",fontSize:11,bgcolor:"var(--c-7358d0)","&:hover":{bgcolor:"var(--c-6249c0)"}},children:i?"Começar":"Próximo"})]})]})}const Us=p.span`
  display: inline-flex;
  gap: 3px;
  kbd { min-width: 20px; padding: 2px 6px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 14%, transparent); border-bottom-width: 2px; border-radius: 5px; color: var(--c-f4f2ef); background: var(--c-1f222a); font-family: 'DM Mono', monospace; font-size: 10px; text-align: center; }
`,Gs=[["@Nome","Chama alguém (a mensagem fica destacada e toca um aviso para a pessoa)."],["/w Nome texto","Sussurro: só você, a pessoa e o Mestre leem."],["/gm texto","Mensagem privada para o Mestre."],["Falar como","Escolha seu personagem ao lado da caixa de texto para falar em personagem."]],Vs=[["2d6 + 3","Rola dois dados de 6 lados e soma 3."],["d20 + DES","Usa o valor do atributo da sua ficha."],["4d6kh3","Rola 4 e mantém os 3 maiores (kl = menores)."],["Vantagem","Escolha na ficha: o d20 vira 2d20 e fica o maior (desvantagem: o menor)."]],to=[{id:"compact",label:"Compacta"},{id:"normal",label:"Normal"},{id:"comfortable",label:"Confortável"}],ao=[{id:"system",label:"Seguir o sistema"},{id:"reduced",label:"Reduzidas"}],ro=[{id:"full",label:"Completa"},{id:"calm",label:"Discreta"},{id:"off",label:"Desligada"}],rr=[{id:"open",label:"Aberto"},{id:"min",label:"Minimizado"},{id:"hidden",label:"Oculto"}],oo="nighttable-ui-prefs";function no(){try{const e=JSON.parse(window.localStorage.getItem(oo))||{};return{density:to.some(t=>t.id===e.density)?e.density:"normal",textSize:jt(e.textSize),theme:ya(e.theme),accent:wa(e.accent),motion:ao.some(t=>t.id===e.motion)?e.motion:"system",diceAnimation:ro.some(t=>t.id===e.diceAnimation)?e.diceAnimation:"full",telemetry:e.telemetry===!0,panels:le(e.panels),speech:Je(e.speech)}}catch{return{density:"normal",textSize:"normal",theme:"dark",accent:"violet",motion:"system",diceAnimation:"full",telemetry:!1,panels:le(null),speech:Je(null)}}}function vf(e){try{window.localStorage.setItem(oo,JSON.stringify(e))}catch{}}function qs({speech:e,onChange:t}){const[a,r]=$.useState(()=>He()?ea(window.speechSynthesis.getVoices()):[]);if($.useEffect(()=>{var s,c;if(!He())return;const i=()=>r(ea(window.speechSynthesis.getVoices()));return(c=(s=window.speechSynthesis).addEventListener)==null||c.call(s,"voiceschanged",i),()=>{var f,u;return(u=(f=window.speechSynthesis).removeEventListener)==null?void 0:u.call(f,"voiceschanged",i)}},[]),!He())return d.jsx("p",{style:{margin:"8px 0 0",color:"var(--c-7e838f)",fontSize:11},children:"Este navegador não lê texto em voz alta."});const o=Je(e),n=i=>t(Je({...o,...i}));return d.jsxs("div",{role:"group","aria-label":"Narração em voz",style:{display:"grid",gap:6,marginTop:10,color:"var(--c-c9c9ca)",fontSize:12},children:[d.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[d.jsx("input",{type:"checkbox",checked:o.narration,onChange:i=>n({narration:i.target.checked})})," Ler em voz alta as narrações na tela"]}),d.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[d.jsx("input",{type:"checkbox",checked:o.narrator,onChange:i=>n({narrator:i.target.checked})})," Ler as falas do canal #narrador"]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:8},children:[d.jsx("span",{style:{width:120},children:"Voz"}),d.jsxs("select",{value:o.voice,onChange:i=>n({voice:i.target.value}),"aria-label":"Voz da narração",style:{flex:1,minWidth:160,padding:"4px 6px",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:6,color:"var(--c-e7e5e2)",background:"var(--c-1a1c22)",fontSize:11},children:[d.jsx("option",{value:"",children:"Automática (português, se houver)"}),a.map(i=>d.jsxs("option",{value:i.name,children:[i.name," · ",i.lang]},i.name))]})]}),d.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[d.jsxs("span",{style:{width:120},children:["Velocidade ",o.rate.toFixed(1),"×"]}),d.jsx("input",{type:"range",min:"0.6",max:"1.6",step:"0.1",value:o.rate,onChange:i=>n({rate:Number(i.target.value)}),"aria-label":"Velocidade da narração em voz",style:{flex:1}})]}),d.jsxs("div",{style:{display:"flex",gap:8},children:[d.jsx(Te,{size:"small",onClick:()=>{tr(),Ds("A névoa cobre o porto. Ao longe, um sino toca.",o)},sx:{minWidth:0,color:"var(--c-b9abff)",textTransform:"none",fontSize:11},children:"Testar a voz"}),d.jsx(Te,{size:"small",onClick:tr,sx:{minWidth:0,color:"var(--c-8e939e)",textTransform:"none",fontSize:11},children:"Parar"})]})]})}function ye({label:e,value:t,options:a,onChange:r}){return d.jsxs("div",{role:"radiogroup","aria-label":e,style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12},children:[d.jsx("span",{style:{width:120,color:"var(--c-c9c9ca)"},children:e}),a.map(o=>d.jsxs("button",{type:"button",role:"radio","aria-checked":t===o.id,onClick:()=>r(o.id),style:{padding:"5px 10px",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:999,color:t===o.id?"var(--c-f4f2ef)":"var(--c-9a9faa)",background:t===o.id?"color-mix(in srgb, var(--c-8e6bff) 25%, transparent)":"var(--c-1a1c22)",fontSize:11,cursor:"pointer"},children:[o.swatch&&d.jsx("span",{"aria-hidden":"true",style:{display:"inline-block",width:9,height:9,marginRight:5,borderRadius:"50%",background:o.swatch}}),o.label]},o.id))]})}function yf({open:e,isGm:t,onClose:a,onRestartTutorial:r,prefs:o,onPrefsChange:n}){return d.jsxs(lo,{open:e,onClose:a,fullWidth:!0,maxWidth:"sm",PaperProps:{sx:{bgcolor:"var(--c-14161b)",color:"var(--c-e7e5e2)",border:"1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent)"}},children:[d.jsxs(po,{sx:{display:"flex",alignItems:"center",gap:1,fontSize:17},children:[d.jsx(Qn,{sx:{color:"var(--c-b9abff)"}})," Ajuda e preferências",d.jsx(fo,{"aria-label":"Fechar ajuda",onClick:a,sx:{ml:"auto",color:"var(--c-8e939e)"},children:d.jsx(Zn,{})})]}),d.jsxs(uo,{sx:{display:"grid",gap:2,pb:3},children:[o&&d.jsxs("section",{children:[d.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:"preferências deste navegador"}),d.jsxs("div",{style:{display:"grid",gap:8},children:[d.jsx(ye,{label:"Densidade",value:o.density,options:to,onChange:i=>n({...o,density:i})}),d.jsx(ye,{label:"Tema",value:ya(o.theme),options:Zr,onChange:i=>n({...o,theme:i})}),d.jsx(ye,{label:"Cor de destaque",value:wa(o.accent),options:va,onChange:i=>n({...o,accent:i})}),d.jsx(ye,{label:"Tamanho do texto",value:jt(o.textSize),options:Aa,onChange:i=>n({...o,textSize:i})}),d.jsx(ye,{label:"Animações",value:o.motion,options:ao,onChange:i=>n({...o,motion:i})}),d.jsx(ye,{label:"Dados na tela",value:o.diceAnimation||"full",options:ro,onChange:i=>n({...o,diceAnimation:i})}),Object.entries(ka).map(([i,s])=>d.jsx(ye,{label:s.label,value:le(o.panels)[i],options:s.minimizable?rr:rr.filter(c=>c.id!=="min"),onChange:c=>n({...o,panels:Ea(o.panels,i,c)})},i))]}),d.jsx(qs,{speech:o.speech,onChange:i=>n({...o,speech:i})}),d.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10,color:"var(--c-c9c9ca)",fontSize:12},children:[d.jsx("input",{type:"checkbox",checked:!!o.telemetry,onChange:i=>n({...o,telemetry:i.target.checked})})," Enviar relatórios de erro anônimos (sem nome, e-mail ou conversas)"]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,color:"var(--c-7e838f)",fontSize:11},children:["Erros registrados nesta sessão: ",Da().length,Da().length>0&&d.jsx(Te,{size:"small",onClick:()=>{var i;return(i=navigator.clipboard)==null?void 0:i.writeText([yr(),"","Desempenho:",...Tt()].join(`
`)).catch(()=>{})},sx:{minWidth:0,color:"var(--c-b9abff)",textTransform:"none",fontSize:11},children:"Copiar relatório"})]}),d.jsxs("div",{role:"group","aria-label":"Desempenho desta sessão",style:{marginTop:10,color:"var(--c-7e838f)",fontSize:11,lineHeight:1.6},children:[d.jsx("strong",{style:{display:"block",color:"var(--c-c9c9ca)",fontWeight:600},children:"Desempenho desta sessão"}),Tt().length?Tt().map(i=>d.jsx("div",{children:i},i)):d.jsx("div",{children:"Ainda sem medidas."}),d.jsx("div",{children:"Medido só neste navegador; nada é enviado."})]}),d.jsx("p",{style:{margin:"8px 0 0",color:"var(--c-7e838f)",fontSize:11},children:"Gire a roda do mouse sobre o mapa para aproximar e afastar no ponto do cursor. No celular ou tablet, faça a pinça com dois dedos para aproximar entre os dedos e arraste com dois dedos para mover."})]}),d.jsxs("section",{children:[d.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:"atalhos de teclado"}),d.jsx("div",{style:{display:"grid",gap:6},children:cs.filter(i=>t||!i.gmOnly).map(i=>d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,fontSize:12},children:[d.jsx(Us,{style:{width:92},children:i.keys.map(s=>d.jsx("kbd",{children:s},s))}),d.jsx("span",{style:{color:"var(--c-c9c9ca)"},children:i.label})]},i.label))})]}),[["chat",Gs],["dados",Vs]].map(([i,s])=>d.jsxs("section",{children:[d.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:i}),d.jsx("div",{style:{display:"grid",gap:6},children:s.map(([c,f])=>d.jsxs("div",{style:{fontSize:12},children:[d.jsx("code",{style:{color:"var(--c-f3c48f)"},children:c})," ",d.jsxs("span",{style:{color:"var(--c-c9c9ca)"},children:["— ",f]})]},c))})]},i)),d.jsx(Qr,{}),d.jsx(Te,{onClick:r,sx:{justifySelf:"start",textTransform:"none",color:"var(--c-b9abff)"},children:"Ver o tutorial de novo"})]})]})}const Ws={DEV:!1,VITE_USE_FIREBASE_EMULATORS:"false"};Vn();Fs(no().textSize);Ss(no());Un({env:Hn(Ws),dataVersion:_e});const Hs=$.lazy(()=>Xe(()=>import("./App-Z8YyXRVL.js").then(e=>e.a_),__vite__mapDeps([0,1,2]))),Ys=$.lazy(()=>Xe(()=>import("./LoginScreen-B78Jn5Zt.js"),__vite__mapDeps([3,1,4,2]))),Ks=$.lazy(()=>Xe(()=>import("./Lobby-CzsBz6b1.js"),__vite__mapDeps([5,1,0,2,4,6,7]))),Js=$.lazy(()=>Xe(()=>import("./OnlineTable-aCQJlW20.js"),__vite__mapDeps([8,1,0,2]))),Xs=$.lazy(()=>Xe(()=>Promise.resolve().then(()=>_s),void 0));function Zs(){return d.jsx("div",{role:"status",style:{minHeight:"100dvh",display:"grid",placeItems:"center",color:"var(--c-8d929d)",background:"var(--c-090a0d)",fontFamily:"DM Mono, monospace",fontSize:11,letterSpacing:".12em",textTransform:"uppercase"},children:"carregando a mesa…"})}const aa="nighttable-active-table",or=Xn();function Qs(){try{return JSON.parse(window.localStorage.getItem(aa))||null}catch{return null}}function nr(e){try{e?window.localStorage.setItem(aa,JSON.stringify(e)):window.localStorage.removeItem(aa)}catch{}}function ec(){const{enabled:e,loading:t,user:a}=Fn(),[r,o]=$.useState(Qs),n=s=>{const c=s?{uid:a.uid,tableId:s}:null;nr(c),o(c)};if(or)return d.jsx(Xs,{kind:or});if(!e)return d.jsx(Hs,{});if(t)return null;const i=a&&(r==null?void 0:r.uid)===a.uid?r.tableId:null;return!a||a.isAnonymous&&!i?d.jsx(Ys,{onGuestJoined:s=>{var f;const c={uid:(f=L.currentUser)==null?void 0:f.uid,tableId:s};nr(c),o(c)}}):i?d.jsx(Js,{tableId:i,user:a,onLeave:()=>n(null)},i):d.jsx(Ks,{onEnterTable:n})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/nighttablesite/sw.js",{scope:"/nighttablesite/"}).catch(()=>{})});Lt.createRoot(document.getElementById("root")).render(d.jsx(K.StrictMode,{children:d.jsx(qn,{children:d.jsx(Ln,{children:d.jsx($.Suspense,{fallback:d.jsx(Zs,{}),children:d.jsx(ec,{})})})})}));export{Ed as $,Cs as A,Es as B,ps as C,Is as D,_p as E,Ap as F,ks as G,af as H,rf as I,of as J,nf as K,Qr as L,Kd as M,wn as N,uc as O,Mc as P,yn as Q,mc as R,jp as S,pc as T,df as U,zc as V,Cd as W,Nd as X,Fd as Y,Hc as Z,Md as _,Ts as a,Qp as a$,Pd as a0,wc as a1,Uc as a2,Gc as a3,Xc as a4,ud as a5,od as a6,td as a7,oc as a8,rn as a9,Wc as aA,nd as aB,Ld as aC,Rl as aD,Np as aE,yp as aF,wp as aG,zs as aH,Sp as aI,Ep as aJ,no as aK,Fs as aL,Ss as aM,le as aN,Vc as aO,Je as aP,Ds as aQ,gf as aR,wd as aS,Un as aT,rl as aU,ld as aV,lc as aW,pd as aX,Vt as aY,cc as aZ,id as a_,cn as aa,p as ab,xa as ac,ol as ad,kp as ae,xp as af,Op as ag,nc as ah,F as ai,Zn as aj,Od as ak,qp as al,Wp as am,Vp as an,$p as ao,Tp as ap,dc as aq,_e as ar,dn as as,$d as at,Dd as au,yc as av,Bd as aw,Zc as ax,ad as ay,jd as az,As as b,Tc as b$,il as b0,sl as b1,Wn as b2,cl as b3,dl as b4,ll as b5,Qn as b6,pl as b7,fl as b8,ul as b9,Fl as bA,Bl as bB,Ul as bC,Gl as bD,rp as bE,op as bF,np as bG,dp as bH,sp as bI,cp as bJ,Wl as bK,Vl as bL,ep as bM,ql as bN,Jl as bO,Xl as bP,Ql as bQ,Yl as bR,Hl as bS,ap as bT,ip as bU,tp as bV,Kl as bW,Zl as bX,lp as bY,gp as bZ,ln as b_,ka as ba,Os as bb,ff as bc,pf as bd,ml as be,js as bf,gl as bg,bl as bh,hl as bi,xl as bj,vl as bk,yl as bl,md as bm,wl as bn,Nl as bo,Sl as bp,El as bq,kl as br,Al as bs,Ml as bt,jl as bu,zl as bv,Il as bw,Cl as bx,Tl as by,Ll as bz,Ms as c,kd as c$,bp as c0,pp as c1,Xp as c2,Zp as c3,yf as c4,hf as c5,vf as c6,bf as c7,xf as c8,Hp as c9,_d as cA,fp as cB,up as cC,hp as cD,mp as cE,zp as cF,Ip as cG,Bp as cH,Ol as cI,Pl as cJ,Up as cK,Gp as cL,Cp as cM,Rp as cN,$l as cO,zn as cP,mn as cQ,Gd as cR,Vd as cS,sd as cT,An as cU,Vo as cV,ic as cW,rd as cX,zd as cY,Id as cZ,Qc as c_,Yp as ca,Kp as cb,Jp as cc,_l as cd,Ad as ce,nl as cf,Rd as cg,Cc as ch,Ic as ci,Oc as cj,Lc as ck,Hn as cl,lf as cm,Ea as cn,yd as co,fd as cp,gd as cq,bd as cr,jn as cs,Bc as ct,xd as cu,Pc as cv,hd as cw,Fc as cx,kc as cy,ed as cz,sf as d,Mn as d0,vp as d1,Dl as d2,Pp as d3,Dp as d4,qc as d5,dd as d6,vd as d7,Nn as d8,jc as d9,Pn as dA,$a as dB,Ec as da,Rc as db,Xe as dc,Dc as dd,Td as de,fc as df,Sc as dg,Ac as dh,Jc as di,Kc as dj,Sd as dk,Ud as dl,Yc as dm,cd as dn,_c as dp,$c as dq,Nc as dr,mf as ds,uf as dt,br as du,$n as dv,Zd as dw,Qd as dx,Ut as dy,Dn as dz,cf as e,Xd as f,Jd as g,Hd as h,hc as i,Yd as j,xc as k,Lp as l,Fp as m,gc as n,bc as o,vc as p,sc as q,Wd as r,qd as s,Mp as t,Fn as u,ef as v,tf as w,tl as x,el as y,al as z};
