const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/App-BKjNMTTP.js","assets/mui-DuycmXTB.js","assets/TopBarButton-gZ9MjpFr.js","assets/firebase-Cg8zSBzx.js","assets/LoginScreen-AzZoBcJ6.js","assets/InvitePreview-BwcxvIVp.js","assets/Lobby-IDfXzvSl.js","assets/SystemEditor-B_vGHJ8T.js","assets/AccountDialog-BShyS-b8.js","assets/OnlineTable-BGi17A2e.js","assets/StreamEntry-KDuD-tpk.js","assets/PublicPage-D7SISIFK.js"])))=>i.map(i=>d[i]);
var xn=Object.defineProperty;var vn=(e,t,a)=>t in e?xn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var or=(e,t,a)=>vn(e,typeof t!="symbol"?t+"":t,a);import{r as yn,a as O,j as f,R as Z,c as Ea,D as wn,I as Sn,b as qr,d as kn,e as An,B as Oe}from"./mui-DuycmXTB.js";import{i as En,g as Mn,a as Tn,p as _n,b as jn,c as zn,d as P,e as m,f as G,q as _,w as $,h as V,j as F,l as K,k as y,o as z,u as ee,m as Ma,n as Q,r as In,T as Ta,s as R,t as Vr,v as b,x as Cn,y as Rn,z as Nn,F as On,A as $n,B as Wr,C as jt,D as _a,E as Pn,G as Ln,H as Dn,I as Fn,J as Bn,K as Un}from"./firebase-Cg8zSBzx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const Gn="modulepreload",qn=function(e){return"/nighttablesite/"+e},nr={},we=function(t,a,r){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(a.map(c=>{if(c=qn(c),c in nr)return;nr[c]=!0;const l=c.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const g=document.createElement("link");if(g.rel=l?"stylesheet":Gn,l||(g.as="script"),g.crossOrigin="",g.href=c,s&&g.setAttribute("nonce",s),document.head.appendChild(g),l)return new Promise((x,A)=>{g.addEventListener("load",x),g.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})};var ia={},ir=yn;ia.createRoot=ir.createRoot,ia.hydrateRoot=ir.hydrateRoot;const Vn={VITE_FIREBASE_API_KEY:"AIzaSyAojCR46U1f6Bivq7ogNUkQMReQZ8RPpmI",VITE_FIREBASE_APP_ID:"1:839551252957:web:f9a1f161e39ab7ebb85e34",VITE_FIREBASE_AUTH_DOMAIN:"nighttable-5621b.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-1Z4XL9CFYE",VITE_FIREBASE_MESSAGING_SENDER_ID:"839551252957",VITE_FIREBASE_PROJECT_ID:"nighttable-5621b",VITE_FIREBASE_STORAGE_BUCKET:"nighttable-5621b.firebasestorage.app",VITE_USE_FIREBASE_EMULATORS:"false"},he=Vn,Wn=he.VITE_USE_FIREBASE_EMULATORS==="true",gt={apiKey:he.VITE_FIREBASE_API_KEY,authDomain:he.VITE_FIREBASE_AUTH_DOMAIN,projectId:he.VITE_FIREBASE_PROJECT_ID,storageBucket:he.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:he.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:he.VITE_FIREBASE_APP_ID,measurementId:he.VITE_FIREBASE_MEASUREMENT_ID},Yn=!!(gt.apiKey&&gt.projectId&&gt.appId),Hn=gt,bt=Yn||Wn,$e=bt?En(Hn):null,I=$e?Mn($e):null,d=$e?Tn($e,{localCache:_n({tabManager:zn()})}):null,Kn="southamerica-east1";$e&&jn($e,Kn);const Xn={message:"mensagem no chat",move:"movimento de token",state:"estado da mesa"},sr=()=>typeof performance<"u"?performance.now():Date.now();function Jn(){return{open:null,samples:{message:[],move:[],state:[]},failures:0}}let zt=Jn();function Up({sincePageLoad:e,waitingForData:t=null},a=zt){return a.open||(a.open={sincePageLoad:Math.round(e),waitingForData:t===null?null:Math.round(t)}),a}function Zn(e,t,a=zt){return a.samples[e]&&(a.samples[e]=[...a.samples[e],Math.round(t)].slice(-100)),a}function ja(e,t,a=zt){const r=sr();return Promise.resolve(t).then(o=>(Zn(e,sr()-r,a),o),o=>{throw a.failures+=1,o})}function cr(e,t){return e.length?e[Math.min(e.length-1,Math.ceil(t*e.length)-1)]:null}function Qn(e=[]){if(!e.length)return{count:0,median:null,p95:null,max:null};const t=[...e].sort((a,r)=>a-r);return{count:t.length,median:cr(t,.5),p95:cr(t,.95),max:t[t.length-1]}}const ut=e=>e==null?"—":e>=1e3?`${(e/1e3).toFixed(1).replace(".",",")} s`:`${e} ms`;function Kt(e=zt){const t=[];e.open&&t.push(`Abrir a mesa: ${ut(e.open.sincePageLoad)} desde o carregamento da página${e.open.waitingForData!==null?` (${ut(e.open.waitingForData)} esperando os dados)`:""}`);for(const[a,r]of Object.entries(Xn)){const{count:o,median:n,p95:i}=Qn(e.samples[a]);o&&t.push(`Gravar ${r}: mediana ${ut(n)}, 95% em até ${ut(i)} (${o} amostra${o===1?"":"s"})`)}return e.failures&&t.push(`Gravações que falharam: ${e.failures}`),t}function ei(e){return new Promise((t,a)=>{const r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>a(new Error("Não foi possível ler o arquivo.")),r.readAsDataURL(e)})}function ti(e,t){const a=URL.createObjectURL(e),r=document.createElement("a");r.href=a,r.download=t,document.body.appendChild(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(a),1e3)}const ai=(e,t,a)=>ti(new Blob([e],{type:a}),t),Gp=(e,t)=>ai(JSON.stringify(e,null,2),t,"application/json");function qp(e){const t=window.open("","_blank");return t?(t.document.write(e),t.document.close(),t.focus(),window.setTimeout(()=>t.print(),300),!0):!1}const Vp="O navegador bloqueou a janela de impressão. Libere pop-ups para este site.",Yr={map:{maxSize:8192,maxBytes:26e5,qualities:[.92,.86,.8,.72]},localMap:{maxSize:8192,maxBytes:14e5,qualities:[.92,.86,.8,.72]},portrait:{maxSize:480,maxBytes:9e4},avatar:{maxSize:160,maxBytes:25e3,square:!0},thumb:{maxSize:64,maxBytes:6e3}},ri=9e3;function oi(e){return typeof e=="string"&&e.startsWith("data:image/")&&e.length<=ri}const ni=25*1024*1024,ii=9e5;function za(e){const t=e.slice(e.indexOf(",")+1),a=t.endsWith("==")?2:t.endsWith("=")?1:0;return Math.floor(t.length*3/4)-a}function si(e,t=ii){const a=[];for(let r=0;r<e.length;r+=t)a.push(e.slice(r,r+t));return a}function ci(e){return[...e].sort((t,a)=>t.index-a.index).map(t=>t.data).join("")}function Wp(e){return e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1).replace(".",",")} MB`}function kt(e){return e?String(e.type).startsWith("image/")?e.size>ni?"Imagem grande demais: o limite é 25 MB.":null:"Escolha um arquivo de imagem (JPG, PNG ou WebP).":"Nenhum arquivo escolhido."}function Ia(e){return new Promise((t,a)=>{const r=URL.createObjectURL(e),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),t(o)},o.onerror=()=>{URL.revokeObjectURL(r),a(new Error("Não foi possível ler esta imagem."))},o.src=r})}let Xt;function lr(){return Xt===void 0&&(Xt=document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp")),Xt?"image/webp":"image/jpeg"}function li(e,t="Não foi possível ler esta imagem."){return new Promise((a,r)=>{const o=new Image;o.onload=()=>a(o),o.onerror=()=>r(new Error(t)),o.src=e})}function Hr(e,t,a,r=!1){const o=document.createElement("canvas"),n=o.getContext("2d"),i=e.naturalWidth||e.width,s=e.naturalHeight||e.height;if(a){const l=Math.min(i,s),p=Math.min(t,l);return o.width=p,o.height=p,n.drawImage(e,(i-l)/2,(s-l)/2,l,l,0,0,p,p),o}const c=Math.min(1,t/Math.max(i,s));return o.width=Math.max(1,Math.round(i*c)),o.height=Math.max(1,Math.round(s*c)),r||(n.fillStyle="#121419",n.fillRect(0,0,o.width,o.height)),n.drawImage(e,0,0,o.width,o.height),o}async function Yp(e,{maxSize:t,maxBytes:a}=Yr.thumb){const r=await li(e),o=Hr(r,t,!1);for(const n of[.7,.55,.4]){const i=o.toDataURL("image/jpeg",n);if(za(i)<=a)return i}return null}async function Hp(e){const t=kt(e);if(t)throw new Error(t);return Ia(e)}async function di(e,{maxSize:t,maxBytes:a,square:r=!1,transparent:o=!1,qualities:n=[.86,.76,.66,.56,.46]}){let i=e;if(typeof Blob<"u"&&e instanceof Blob){const l=kt(e);if(l)throw new Error(l);i=await Ia(e)}else if(!e||typeof e!="object"||!("width"in e)){const l=kt(e);if(l)throw new Error(l)}const s=o&&lr()!=="image/webp"?"image/png":lr();let c=t;for(let l=0;l<6;l+=1){const p=Hr(i,c,r,o);for(const g of n){const x=p.toDataURL(s,g),A=za(x);if(A<=a)return{dataUrl:x,bytes:A,width:p.width,height:p.height}}c=Math.round(Math.min(c,Math.max(p.width,p.height))*.8)}throw new Error("Não foi possível reduzir esta imagem o suficiente. Tente uma menor.")}const pi=["image/jpeg","image/png","image/webp"];async function Kp(e,t=Yr.map){const a=kt(e);if(a)throw new Error(a);const r=await Ia(e),o=r.naturalWidth||r.width,n=r.naturalHeight||r.height;if(pi.includes(e.type)&&e.size<=t.maxBytes&&Math.max(o,n)<=t.maxSize){const i=await ei(e);return{dataUrl:i,bytes:za(i),width:o,height:n}}return di(r,t)}const fi=1e4,ui=20;function mi(e,t,{windowMs:a=fi,max:r=ui}={}){return!e||!Number.isFinite(e.windowStart)?e?"reset":"create":t-e.windowStart>=a?"reset":e.count>=r?"blocked":"increment"}const gi="Muitas mensagens em pouco tempo. Espere alguns segundos.",Pe=3,bi=["weapons","armor","inventory","abilities","macros","conditions"];function hi(e){if(!e||typeof e!="object")return e;const t={...e};bi.forEach(r=>{Array.isArray(t[r])||(t[r]=[])}),t.inventory=t.inventory.filter(r=>r&&String(r.name||"").trim()).map(r=>({...r,quantity:Math.max(1,Math.round(Number(r.quantity)||1)),weight:Math.max(0,Number(r.weight)||0)}));const a=Math.round(Number(t.coins));return t.coins=Number.isFinite(a)&&a>0?a:0,typeof t.condition!="string"&&(t.condition=""),t}const xi={chest:"chest",door:"door"};function vi(e){return!e||typeof e!="object"||e.sprite?e:{...e,sprite:xi[e.kind]||"object"}}function yi(e){return!e||typeof e!="object"||!(e.door||e.barrier)||typeof e.open=="boolean"?e:{...e,open:!1}}function wi(e){if(!e||typeof e!="object")return e;const t={...e};return Array.isArray(t.markers)&&(t.markers=t.markers.map(vi)),Array.isArray(t.walls)&&(t.walls=t.walls.map(yi)),t}function Xp(e){return!e||typeof e!="object"?!1:(Number(e.schemaVersion)||1)<Pe}function Si(e){if(!e||typeof e!="object")return{};const t=Number(e.version)||1;if(t>Pe)return{...e,futureVersion:!0};let a={...e};return t<3&&(a=wi(a),Array.isArray(a.sheets)&&(a.sheets=a.sheets.map(hi))),{...a,version:Pe}}function Jp(e){if(!e||typeof e!="object")return{error:"O arquivo não é um backup do NightTable."};const t=Number(e.version);return!Number.isInteger(t)||t<2?{error:"Backup sem versão: exporte de novo pela mesa."}:t>Pe?{error:`Backup feito numa versão mais nova do NightTable (v${t}). Atualize o app.`}:!e.scene||!Array.isArray(e.sheets)||e.sheets.length===0||!Array.isArray(e.tokens)||!Array.isArray(e.markers)?{error:"Backup incompleto: faltam cena, fichas, tokens ou objetos."}:{backup:Si(e)}}const ki=[{days:0,label:"Sempre"},{days:365,label:"1 ano"},{days:90,label:"90 dias"},{days:30,label:"30 dias"}],Ai=24*36e5;function Ei(e){const t=Number(e);return ki.some(a=>a.days===t)?t:0}function Zp(e,t=Date.now()){const a=Ei(e);return a?t-a*Ai:null}function Mi(e=[]){return{deleteTables:e.filter(t=>t.role==="gm").map(t=>t.tableId),leaveTables:e.filter(t=>t.role!=="gm").map(t=>t.tableId)}}const sa=e=>String(e??"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Ae=(e,t)=>String(e??"").trim().slice(0,t),We=(e,t,a)=>Math.max(t,Math.min(a,Math.round(Number(e)||0))),Qp=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Ti=e=>String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),ef=e=>sa(e).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");function _i(e){var a;const t=((a=e==null?void 0:e.toDate)==null?void 0:a.call(e))||(e?new Date(e):null);return t?t.toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):""}const ji=[{days:0,label:"Sem validade"},{days:1,label:"1 dia"},{days:7,label:"7 dias"},{days:30,label:"30 dias"}],zi=24*36e5;function Kr(e,t=Date.now()){const a=Number(e);return ji.some(r=>r.days===a&&a>0)?t+a*zi:null}const Xr=e=>{var t;return typeof e=="number"?e:((t=e==null?void 0:e.toMillis)==null?void 0:t.call(e))??null};function Ca(e,t=Date.now()){const a=Xr(e);return a!==null&&t>=a}function tf(e,t=Date.now()){const a=Xr(e);return a===null?"sem validade":t>=a?"vencido":`vale até ${_i(a)}`}function Le(e=(a=>(a=globalThis.location)==null?void 0:a.origin)()||"",t="/nighttablesite/"){return`${e}${t.endsWith("/")?t:`${t}/`}`}function af(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Le(t,a)}?convite=${encodeURIComponent(e)}`}function rf(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Le(t,a)}?transmissao=${encodeURIComponent(e)}`}function Ii(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{return(new URLSearchParams(e).get("transmissao")||"").trim().toUpperCase().slice(0,24)||null}catch{return null}}const Jr={weapon:{label:"Arma",limit:null},armor:{label:"Armadura",limit:1},gear:{label:"Outro equipável",limit:null}},Ci=12,pe=(e,t)=>Array.isArray(e==null?void 0:e[t])?e[t]:[];function Ri(e){const t=Math.round(Number(e==null?void 0:e.weapon));return{weapon:Number.isFinite(t)&&t>=1?Math.min(Ci,t):null}}function of(e){const t=(e==null?void 0:e.spend)===!0;return{spend:t,jamOnFumble:t&&!!(e!=null&&e.jamOnFumble)}}const Ni=(e,t)=>e==="weapon"?Ri(t).weapon:Jr[e].limit,Zr=e=>(e==null?void 0:e.equipped)!==!1;function Ra(e){if(!e||typeof e!="object"||!Jr[e.slot])return null;if(e.slot==="weapon"){const t=e.weapon||{},a=String(t.critical||"").trim().slice(0,12),r=We(t.magazine,0,200),o=!!t.ranged||r>0,n=o&&Number(t.dc)?We(t.dc,1,60):0,i=String(t.ammo||"").trim().slice(0,40),s=We(t.magazines,1,20);return{slot:"weapon",weapon:{attribute:String(t.attribute||"").trim().toUpperCase().slice(0,12),bonus:We(t.bonus,-20,30),damage:String(t.damage||"1d4").trim().slice(0,30),...a?{critical:a}:{},...o?{ranged:!0}:{},...n?{dc:n}:{},...r?{magazine:r,...s>1?{magazines:s}:{},...i?{ammo:i}:{},...t.ammoOff?{ammoOff:!0}:{}}:{}}}}return e.slot==="armor"?{slot:"armor",defense:We(e.defense,0,20)}:{slot:"gear"}}const Na=e=>{var t;return((t=Ra(e==null?void 0:e.equip))==null?void 0:t.slot)||null},Oi=e=>!Na(e)||!!e.equipped;function Oa(e,t){return pe(e,"inventory").filter(a=>a.equipped&&Na(a)===t)}function $i(e,t){const a=Oa(e,t).map(r=>({id:r.id,name:r.name}));return t==="armor"?[...pe(e,"armor").filter(r=>r.equipped).map(r=>({id:r.id,name:r.name})),...a]:t==="weapon"?[...pe(e,"weapons").filter(Zr).map(r=>({id:r.id,name:r.name})),...a]:a}function It(e,t,a,r){const o=Ni(t,r);if(!o)return null;const n=$i(e,t).filter(s=>s.id!==a);if(n.length<o)return null;const i=n.map(s=>s.name).join(", ");return t==="armor"?`Só dá para vestir uma armadura por vez: tire ${i} primeiro.`:o===1?`Nesta mesa só dá para ter 1 arma equipada (${i}): desequipe primeiro.`:`Nesta mesa só dá para ter ${o} armas equipadas (${i}): desequipe uma primeiro.`}const nf=(e,t)=>!It(e,"weapon",null,t);function sf(e,t,a){const r=pe(e,"inventory").find(i=>i.id===t);if(!r)return{error:"Item não encontrado."};const o=Na(r);if(!o)return{error:`${r.name} não é equipável.`};if(!r.equipped){const i=It(e,o,r.id,a);if(i)return{error:i}}const n=!r.equipped;return{sheet:{...e,inventory:pe(e,"inventory").map(i=>i.id===t?{...i,equipped:n}:i)},equipped:n,item:r}}function cf(e,t){const a=pe(e,"armor").find(r=>r.id===t);if(!a)return{error:"Armadura não encontrada."};if(!a.equipped){const r=It(e,"armor",a.id);if(r)return{error:r}}return{sheet:{...e,armor:pe(e,"armor").map(r=>r.id===t?{...r,equipped:!r.equipped}:r)},equipped:!a.equipped}}function lf(e,t,a){const r=pe(e,"weapons").find(n=>n.id===t);if(!r)return{error:"Arma não encontrada."};const o=!Zr(r);if(o){const n=It(e,"weapon",r.id,a);if(n)return{error:n}}return{sheet:{...e,weapons:pe(e,"weapons").map(n=>n.id===t?{...n,equipped:o}:n)},equipped:o,weapon:r}}function df(e){return Oa(e,"weapon").map(t=>{const a=Ra(t.equip).weapon,r=a.magazine?{loaded:t.loaded??a.magazine,...t.jammed?{jammed:!0}:{}}:{};return{id:t.id,name:t.name,...a,...r,fromInventory:!0}})}function pf(e){return Oa(e,"armor").reduce((t,a)=>t+(Ra(a.equip).defense||0),0)}const Pi=[{id:"reforcada",name:"Reforçada",defense:2,summary:"+2 na Defesa; +1 espaço"},{id:"sobMedida",name:"Sob medida",skills:{Reflexos:2},summary:"+2 em Reflexos"},{id:"blindada",name:"Blindada",summary:"resistência a dano maior; +1 espaço"},{id:"antibombas",name:"Antibombas",summary:"+5 na resistência contra efeitos de área (aplique na hora)"},{id:"discreta",name:"Discreta",summary:"mais fácil de esconder; −1 espaço"}],Li=[{id:"aprimorado",name:"Aprimorado",bonusTo:5,summary:"o bônus na perícia passa a +5"},{id:"funcaoAdicional",name:"Função adicional",extra:2,summary:"+2 numa segunda perícia"},{id:"instrumental",name:"Instrumental",summary:"também serve de kit de perícia"},{id:"discreto",name:"Discreto",summary:"mais fácil de esconder; −1 espaço"}],Qr=e=>Object.fromEntries(e.map(t=>[t.id,t])),eo=Qr(Pi),to=Qr(Li),Di=2,dr=(e,t)=>Array.isArray(e==null?void 0:e[t])?e[t]:[],$a=(e,t)=>(Array.isArray(e==null?void 0:e.mods)?e.mods:[]).map(a=>t[a]).filter(Boolean);function ff(e){return(Number(e==null?void 0:e.defense)||0)+$a(e,eo).reduce((t,a)=>t+(a.defense||0),0)}function Fi(e){if(!e||typeof e!="object")return null;const t=String(e.skill||"").trim().slice(0,40),a=(Array.isArray(e.mods)?e.mods:[]).filter(n=>to[n]),r=String(e.extraSkill||"").trim().slice(0,40),o=Math.max(0,Math.min(20,Math.round(Number(e.bonus??Di)||0)));return{skill:t,bonus:o,mods:[...new Set(a)],...r?{extraSkill:r}:{}}}function Bi(e){const t=Fi(e==null?void 0:e.gear);if(!t)return{};const a=$a(t,to),r={},o=(i,s)=>{i&&s&&(r[i]=Math.max(r[i]||0,s))},n=a.reduce((i,s)=>Math.max(i,s.bonusTo||0),0);return o(t.skill,Math.max(t.bonus,n)),a.some(i=>i.extra)&&o(t.extraSkill,a.find(i=>i.extra).extra),r}function uf(e,t){if(!t)return{bonus:0,sources:[]};const a=[];for(const r of dr(e,"armor").filter(o=>o.equipped)){const o=$a(r,eo).reduce((n,i)=>{var s;return n+(((s=i.skills)==null?void 0:s[t])||0)},0);o&&a.push({name:r.name,bonus:o})}for(const r of dr(e,"inventory").filter(Oi)){const o=Bi(r)[t]||0;o&&a.push({name:r.name,bonus:o})}return{bonus:a.reduce((r,o)=>r+o.bonus,0),sources:a}}const pr={life:"maxLife",effort:"maxEffort",coins:null,xp:null},Ui=new Set(["id","updatedAt","history"]),Gi=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function ca(e,t){return[...new Set([...Object.keys(e||{}),...Object.keys(t||{})])].filter(r=>!Ui.has(r)&&!Gi(e==null?void 0:e[r],t==null?void 0:t[r]))}const fr=e=>`${e==null?void 0:e.at}|${e==null?void 0:e.by}|${JSON.stringify(e==null?void 0:e.changes)}`;function qi(e,t,a){if(!a)return t;const r={...a};ca(e,t).forEach(i=>{if(!(i in pr&&Number.isFinite(Number(e==null?void 0:e[i]))&&Number.isFinite(Number(t==null?void 0:t[i]))&&Number.isFinite(Number(a[i])))){(t==null?void 0:t[i])===void 0?delete r[i]:r[i]=t[i];return}const c=Number(t[i])-Number(e[i]),l=pr[i],p=l?Number(ca(e,t).includes(l)?t[l]:a[l]):1/0;r[i]=Math.max(0,Math.min(Number.isFinite(p)?p:1/0,Number(a[i])+c))});const o=new Set(((e==null?void 0:e.history)||[]).map(fr)),n=((t==null?void 0:t.history)||[]).filter(i=>!o.has(fr(i)));return n.length&&(r.history=[...a.history||[],...n].slice(-30)),r}const Vi={map:{label:"Mapa",plural:"Mapas"},sheet:{label:"Ficha",plural:"Fichas"},macro:{label:"Macro",plural:"Macros"}},mf={pending:"em análise",approved:"aprovado",rejected:"recusado",hidden:"fora do ar (denúncias)"},ao=3,Wi=80,Yi=1e3,ur=8,gf={maxSize:1600,maxBytes:6e5},bf={maxSize:1200,maxBytes:3e5},Hi=82e4,ro="nighttable-gallery",de=(e,t)=>String(e??"").replace(/\s+/g," ").trim().slice(0,t);function Ki(e){const t=Array.isArray(e)?e:String(e||"").split(","),a=new Set;return t.map(r=>de(String(r).replace(/^#/,""),24)).filter(r=>r&&!a.has(r.toLowerCase())&&a.add(r.toLowerCase())).slice(0,8)}function Xi(e,t){var a,r;if(e==="map"){const o=typeof(t==null?void 0:t.image)=="string"&&t.image.startsWith("data:image/")&&t.image.length<=Hi?t.image:null;return o?{image:o,gridFit:t.gridFit&&typeof t.gridFit=="object"?t.gridFit:null}:null}if(e==="sheet"){const o=t==null?void 0:t.sheet;return!o||typeof o!="object"||!de(o.name,60)||!o.attributes?null:{sheet:o}}if(e==="macro"){const o=de((a=t==null?void 0:t.macro)==null?void 0:a.name,40),n=de((r=t==null?void 0:t.macro)==null?void 0:r.expression,80);return!o||!n?null:{macro:{name:o,expression:n,note:de(t.macro.note,140)}}}return null}function hf({kind:e,title:t,description:a="",tags:r="",payload:o,author:n,thumb:i=null,rightsConfirmed:s},c=Date.now()){if(!Vi[e])return{error:"Escolha o tipo do conteúdo."};const l=de(t,Wi);if(!l)return{error:"Dê um título ao conteúdo."};if(!s)return{error:"Confirme que você pode compartilhar este conteúdo."};const p=Xi(e,o);return p?{item:{kind:e,title:l,description:String(a||"").trim().slice(0,Yi),tags:Ki(r),authorUid:(n==null?void 0:n.uid)||"local",authorName:de(n==null?void 0:n.name,80)||"Mestre",status:"pending",reports:0,thumb:typeof i=="string"&&i.startsWith("data:image/")&&i.length<=9e3?i:null,createdAt:c},payload:p}:{error:e==="map"?"A mesa não tem um mapa enviado para compartilhar.":"Escolha o que compartilhar."}}function xf(e,{kind:t="all",query:a=""}={}){const r=sa(a).split(/\s+/).filter(Boolean);return e.filter(o=>t==="all"||o.kind===t).filter(o=>{const n=sa(`${o.title} ${o.description} ${o.tags.join(" ")} ${o.authorName}`);return r.every(i=>n.includes(i))}).sort((o,n)=>(n.createdAt||0)-(o.createdAt||0))}function vf(e,t,{by:a="moderador",note:r="",now:o=Date.now()}={}){const n={approve:"approved",reject:"rejected",hide:"hidden",restore:"approved"}[t];return n?{...e,status:n,reviewedBy:de(a,80),reviewNote:de(r,300),reviewedAt:o,reports:t==="restore"||t==="approve"?0:e.reports}:e}function yf(e,t,a){if(e.status!=="approved"||t.includes(a))return{item:e,counted:!1};const r=(e.reports||0)+1;return{item:{...e,reports:r,status:r>=ao?"hidden":"approved"},counted:!0}}function Ct(e){try{const t=JSON.parse((e==null?void 0:e.getItem(ro))||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function Pa(e,t){try{t.setItem(ro,JSON.stringify(e))}catch{throw new Error("A galeria local encheu este navegador. Apague um envio antigo e tente de novo.")}}function wf(e=globalThis.localStorage){return Ct(e)}function Sf({item:e,payload:t},a=globalThis.localStorage,r=`gal-${Date.now()}-${Math.floor(Math.random()*1e3)}`){const o=Ct(a);if(o.length>=ur)throw new Error(`A galeria local guarda até ${ur} envios. Apague algum antes.`);return Pa([{...e,id:r,payload:t,reporters:[]},...o],a),r}function kf(e,t,a=globalThis.localStorage){const r=Ct(a).map(o=>o.id===e?{...o,...t(o)}:o);Pa(r,a)}function Af(e,t=globalThis.localStorage){Pa(Ct(t).filter(a=>a.id!==e),t)}const Ze=()=>y(d,"gallery"),La=e=>m(d,"gallery",e,"payload","data"),Ji=e=>e.docs.map(t=>({id:t.id,...t.data()}));async function Zi(){var t;const e=(t=I.currentUser)==null?void 0:t.uid;if(!e)return!1;try{return(await P(m(d,"moderators",e))).exists()}catch{return!1}}function Qi({uid:e,moderator:t},a,r){const o={approved:[],mine:[],review:[]},n=()=>{const c=new Map;for(const l of Object.values(o))for(const p of l)c.set(p.id,p);a([...c.values()])},i=(c,l)=>z(l,p=>{o[c]=Ji(p),n()},r),s=[i("approved",_(Ze(),$("status","==","approved"),K(200)))];return e&&s.push(i("mine",_(Ze(),$("authorUid","==",e),K(50)))),t&&s.push(i("review",_(Ze(),$("status","in",["pending","hidden"]),K(100)))),()=>s.forEach(c=>c())}async function es({item:e,payload:t}){const a=m(Ze()),r=V(d);return r.set(a,{...e,authorUid:I.currentUser.uid}),r.set(La(a.id),t),await r.commit(),a.id}async function ts(e){const t=await P(La(e));return t.exists()?t.data():null}function as(e,t){const{status:a,reviewedBy:r,reviewNote:o,reviewedAt:n,reports:i}=t,s=V(d);return s.update(m(d,"gallery",e),{status:a,reviewedBy:r,reviewNote:o,reviewedAt:n,reports:i}),s.commit()}async function rs(e,t){const a=I.currentUser.uid,r=(e.reports||0)+1,o=V(d);o.set(m(d,"gallery",e.id,"reports",a),{uid:a,reason:String(t||"").slice(0,300),at:Date.now()}),o.update(m(d,"gallery",e.id),{reports:r,status:r>=ao?"hidden":"approved"}),await o.commit()}async function oo(e){await F(La(e)).catch(()=>{}),await F(m(d,"gallery",e))}async function no(e){const t=await G(_(Ze(),$("authorUid","==",e)));for(const a of t.docs)await oo(a.id)}const Ef=Object.freeze(Object.defineProperty({__proto__:null,checkModerator:Zi,deleteMyGalleryItems:no,fetchGalleryPayload:ts,moderateGalleryItem:as,removeGalleryItem:oo,reportGalleryItem:rs,submitToGallery:es,subscribeGallery:Qi},Symbol.toStringTag,{value:"Module"})),mr="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function Rt(e=6){const t=crypto.getRandomValues(new Uint32Array(e));return Array.from(t,a=>mr[a%mr.length]).join("")}function C(){if(!(I!=null&&I.currentUser))throw new Error("Usuário não autenticado.");return I.currentUser}const Y=e=>m(d,"tables",e);async function os({name:e,initialState:t={},campaign:a=null,avatar:r=null}){const o=C(),n=m(y(d,"tables")),i=Rt(),s=V(d);return s.set(n,{name:e,...a?{campaign:a}:{},ownerId:o.uid,inviteCode:i,state:{...t,schemaVersion:Pe},createdAt:b(),updatedAt:b()}),s.set(m(n,"members",o.uid),{uid:o.uid,role:"gm",displayName:o.displayName||o.email||"Mestre",tableName:e,...r?{avatar:r}:{},joinedAt:b()}),s.set(m(d,"invites",i),{tableId:n.id,tableName:e,gmName:String(o.displayName||"Mestre").slice(0,80),createdBy:o.uid,createdAt:b()}),await s.commit(),{tableId:n.id,inviteCode:i}}const Da=e=>String(e||"").trim().toUpperCase();async function io(e,t,a){const r=C(),o=m(d,"tables",e,"members",r.uid),n=await P(o).catch(()=>null);return n!=null&&n.exists()?{tableId:e,tableName:t}:(await R(o,{uid:r.uid,tableName:t,guest:!!r.isAnonymous,joinedAt:b(),...a}),{tableId:e,tableName:t})}async function ns(e){const t=Da(e);if(!t)return null;const a=await P(m(d,"invites",t));if(!a.exists())return null;const{tableName:r,gmName:o,expiresAt:n}=a.data();return{code:t,tableName:r||"Mesa",gmName:o||null,expiresAt:n??null,expired:Ca(n)}}async function so(e,{avatar:t=null}={}){const a=C(),r=Da(e),o=await P(m(d,"invites",r));if(!o.exists())throw new Error("Convite inválido ou expirado.");const{tableId:n,tableName:i,expiresAt:s,stream:c}=o.data();if(c||Ca(s))throw new Error("Convite inválido ou expirado.");return io(n,i,{role:"player",displayName:a.displayName||a.email||"Jogador",inviteCode:r,...t?{avatar:t}:{}})}async function co(){const e=C(),a=(await G(_(In(d,"members"),$("uid","==",e.uid)))).docs.map(r=>({tableId:r.ref.parent.parent.id,...r.data()}));return Promise.all(a.map(async r=>{var i,s;const o=await P(Y(r.tableId)).catch(()=>null),n=o!=null&&o.exists()?o.data():null;return{...r,tableName:(n==null?void 0:n.name)||r.tableName,archived:!!(n!=null&&n.archived),systemName:((s=(i=n==null?void 0:n.state)==null?void 0:i.system)==null?void 0:s.name)||"",campaign:(n==null?void 0:n.campaign)||null}}))}function is(e,t){return ee(Y(e),{name:String(t).trim().slice(0,80),updatedAt:b()})}function ss(e,t){return ee(Y(e),{archived:!!t,updatedAt:b()})}function cs(e,t,a,r=()=>{}){return z(Y(e),{includeMetadataChanges:!0},o=>{r({fromCache:o.metadata.fromCache,hasPendingWrites:o.metadata.hasPendingWrites}),t(o.exists()?{id:o.id,...o.data()}:null)},a)}function ls(e,t,a){return z(y(d,"tables",e,"members"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function ds(e,t){return ee(Y(e),{campaign:t,updatedAt:b()})}function ps(e,t){const a=Object.fromEntries(Object.entries(t).map(([r,o])=>[`state.${r}`,o]));return ja("state",ee(Y(e),{...a,updatedAt:b()}))}function fs(e,{isGm:t},a,r){const o=y(d,"tables",e,"tokens"),n=t?o:_(o,$("hidden","==",!1));return z(n,i=>a(i.docs.map(s=>({id:s.id,...s.data()}))),r)}function us(e,t){const{id:a,...r}=t;return R(m(d,"tables",e,"tokens",a),{hidden:!!r.monster,ownerUid:null,...r})}function ms(e,t,a,r){return ja("move",ee(m(d,"tables",e,"tokens",t),{x:a,y:r}))}function gs(e,t,a){return ee(m(d,"tables",e,"tokens",t),{rotation:a})}function bs(e,t){return F(m(d,"tables",e,"tokens",t))}function la({id:e,...t}){return t}async function hs(e,{tokens:t,sheets:a,currentTokens:r=[],currentSheets:o=[]}){const n=V(d),i=new Set(t.map(c=>c.id)),s=new Set(a.map(c=>c.id));r.filter(c=>!i.has(c.id)).forEach(c=>n.delete(m(d,"tables",e,"tokens",c.id))),o.filter(c=>!s.has(c.id)).forEach(c=>n.delete(m(d,"tables",e,"sheets",c.id))),t.forEach(c=>n.set(m(d,"tables",e,"tokens",c.id),{ownerUid:null,sheetId:null,...la(c),hidden:c.hidden??!!c.monster})),a.forEach(c=>n.set(m(d,"tables",e,"sheets",c.id),{ownerUid:null,...la(c),updatedAt:b()})),await n.commit()}async function xs(e,t,a,r=[]){const o=(a==null?void 0:a.uid)||null,n=V(d);n.update(m(d,"tables",e,"sheets",t),{ownerUid:o,owner:(a==null?void 0:a.displayName)||"Mestre",updatedAt:b()}),r.filter(i=>i.sheetId===t).forEach(i=>n.update(m(d,"tables",e,"tokens",i.id),{ownerUid:o})),await n.commit()}function vs(e,t,a){return z(y(d,"tables",e,"sheets"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function ys(e,t){const{id:a,...r}=t,o=a?m(d,"tables",e,"sheets",a):m(y(d,"tables",e,"sheets"));return R(o,{ownerUid:null,...r,updatedAt:b()}).then(()=>o.id)}async function ws(e,t,a){const r=m(d,"tables",e,"sheets",a.id);try{await Vr(d,async o=>{const n=await o.get(r),{id:i,...s}=n.exists()?qi(t,a,{id:n.id,...n.data()}):{ownerUid:null,...a};o.set(r,{...s,updatedAt:b()})})}catch(o){if((o==null?void 0:o.code)!=="unavailable"&&(o==null?void 0:o.code)!=="failed-precondition")throw o;const n=Object.fromEntries(ca(t,a).map(i=>[i,a[i]===void 0?Cn():a[i]]));a.history&&a.history!==(t==null?void 0:t.history)&&(n.history=a.history),await ee(r,{...n,updatedAt:b()})}}function Ss(e,t,a,r,o){const n=y(d,"tables",e,t,a,"versions");return z(_(n,Q("at","desc"),K(20)),i=>r(i.docs.map(s=>({id:s.id,...s.data()}))),o)}async function ks(e,t,a,r,o){const{id:n,...i}=r,s=y(d,"tables",e,t,a,"versions");await R(m(s,n),i);const l=(await G(_(s,Q("at","desc")))).docs.slice(o);if(l.length){const p=V(d);l.forEach(g=>p.delete(g.ref)),await p.commit()}}async function gr(e,t){const a=await G(y(d,"tables",e,t));for(const r of a.docs){const o=await G(y(r.ref,"versions"));await Te(o.docs.map(n=>i=>i.delete(n.ref)))}}async function As(e,t){return await Promise.all(["player","gm"].map(a=>F(m(d,"tables",e,"sheets",t,"private",a)).catch(()=>{}))),F(m(d,"tables",e,"sheets",t))}function Es(e,t,a,r,o){return z(m(d,"tables",e,"sheets",t,"private",a),n=>r(n.exists()&&n.data().notes||""),o)}function Ms(e,t,a,r){return R(m(d,"tables",e,"sheets",t,"private",a),{notes:String(r||"").slice(0,4e3),updatedAt:b()})}const Re=new Map;async function Ts(e){var t,a;if(!Re.has(e)){const r=await P(m(d,"tables",e,"rate",C().uid)).catch(()=>null),o=r!=null&&r.exists()?r.data():null;Re.set(e,o?{windowStart:(a=(t=o.windowStart)==null?void 0:t.toMillis)==null?void 0:a.call(t),count:o.count}:null)}return Re.get(e)}function _s(e,t,a){const r=C().uid,o=m(d,"tables",t,"rate",r);a==="increment"?e.update(o,{count:$n(1),updatedAt:b()}):e.set(o,{uid:r,windowStart:b(),count:1,updatedAt:b()})}async function lo(e,t){const a=await Ts(e),r=mi(a,Date.now()),o=r==="blocked"?"reset":r,n=async i=>{const s=V(d);t(s),_s(s,e,i),await s.commit();const c=Re.get(e);Re.set(e,i==="increment"&&c?{...c,count:c.count+1}:{windowStart:Date.now(),count:1})};try{await n(o)}catch(i){if((i==null?void 0:i.code)!=="permission-denied"&&(i==null?void 0:i.code)!=="not-found")throw i;Re.delete(e);try{await n(o==="increment"?"reset":"increment")}catch(s){throw(s==null?void 0:s.code)==="permission-denied"&&r==="blocked"?Object.assign(new Error(gi),{code:"rate-limited"}):s}}}async function js(e,{name:t,mime:a,bytes:r,dataUrl:o,visibility:n="public",to:i=null}){const s=m(y(d,"tables",e,"chatFiles"));return await R(s,{uid:C().uid,name:t,mime:String(a||"").slice(0,80),bytes:r,visibility:n,to:i,dataUrl:o,createdAt:b()}),s.id}async function zs(e,t){const a=await P(m(d,"tables",e,"chatFiles",t));if(!a.exists())throw new Error("Este anexo não está mais disponível.");return a.data().dataUrl}function Is(e,t){return F(m(d,"tables",e,"chatFiles",t))}function Cs(e,{author:t,text:a,type:r="chat",visibility:o="public",roll:n=null,apply:i=null,to:s=null,toName:c=null,character:l=null,sound:p=null,celebrate:g=null,attachment:x=null,channel:A=null,item:S=null}){const v=C(),N=m(y(d,"tables",e,"messages"));return ja("message",lo(e,T=>{g&&T.set(m(d,"tables",e,"celebration","state"),{at:b(),uid:v.uid,by:String(t||"").slice(0,80)}),T.set(N,{uid:v.uid,author:t,text:a,type:r,visibility:o,roll:n,apply:i,to:s,toName:c,...l?{character:l}:{},...p?{sound:String(p).slice(0,60)}:{},...g?{celebrate:g}:{},...x?{attachment:x}:{},...A&&A!=="mesa"?{channel:A}:{},...S?{item:S}:{},createdAt:b()})}).then(()=>N))}function Rs(e,t,a,r){const o=C().uid;return ee(m(d,"tables",e,"messages",t),new On("reactions",a),r?Rn(o):Nn(o))}async function Ns(e,{isGm:t,uid:a},r,o=500){const n=y(d,"tables",e,"messages"),i=r?[$("createdAt",">=",Ta.fromMillis(r))]:[],s=p=>p.docs.map(g=>({id:g.id,...g.data({serverTimestamps:"estimate"})})),c=t?[_(n,...i,Q("createdAt","desc"),K(o))]:[_(n,$("visibility","==","public"),...i,Q("createdAt","desc"),K(o)),_(n,$("uid","==",a),$("visibility","in",["gm","whisper"]),...i,Q("createdAt","desc"),K(o)),_(n,$("to","==",a),...i,Q("createdAt","desc"),K(o))],l=await Promise.all(c.map(p=>G(p)));return[...new Map(l.flatMap(s).map(p=>[p.id,p])).values()]}function Os(e,{isGm:t,uid:a},r,o,n=80){const i=y(d,"tables",e,"messages"),s=v=>v.docs.map(N=>({id:N.id,...N.data({serverTimestamps:"estimate"})}));if(t)return z(_(i,Q("createdAt","desc"),K(n)),v=>r(s(v).reverse()),o);let c=[],l=[],p=[];const g=()=>r([...new Map([...c,...l,...p].map(v=>[v.id,v])).values()].sort((v,N)=>{var T,h,B,X;return(((h=(T=v.createdAt)==null?void 0:T.toMillis)==null?void 0:h.call(T))||0)-(((X=(B=N.createdAt)==null?void 0:B.toMillis)==null?void 0:X.call(B))||0)}).slice(-n)),x=z(_(i,$("visibility","==","public"),Q("createdAt","desc"),K(n)),v=>{c=s(v),g()},o),A=z(_(i,$("uid","==",a),$("visibility","in",["gm","whisper"]),Q("createdAt","desc"),K(n)),v=>{l=s(v),g()},o),S=z(_(i,$("to","==",a),Q("createdAt","desc"),K(n)),v=>{p=s(v),g()},o);return()=>{x(),A(),S()}}function $s(e,t,a){return z(m(d,"tables",e,"private","gm"),r=>t(r.data()||{}),a)}function Ps(e,t,a,r){return z(m(d,"tables",e,"playerNotes",t),o=>{var n;return a(((n=o.data())==null?void 0:n.notes)||[])},r)}function Ls(e,t,a){return R(m(d,"tables",e,"playerNotes",t),{notes:a,updatedAt:b()})}function Ds(e,t){return R(m(d,"tables",e,"private","gm"),{...t,updatedAt:b()},{merge:!0})}function Fs(e,t,a){return z(y(d,"tables",e,"locks"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Bs(e,t,a){return R(m(d,"tables",e,"locks",t),{...a,updatedAt:b()})}async function Us(e,t){const a=await G(_(y(d,"tables",e,"locks"),$("markerId","==",t))),r=V(d);a.forEach(o=>r.delete(o.ref)),await r.commit()}function Gs(e,t,a){return R(m(d,"tables",e,"private","gm"),{lockCodes:{[t]:a},updatedAt:b()},{merge:!0})}function qs(e,t,a){return z(y(d,"tables",e,"scenes"),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function Vs(e,t){const{id:a,...r}=t;return R(m(d,"tables",e,"scenes",a),{...r,savedAt:b()})}function Ws(e,t){return F(m(d,"tables",e,"scenes",t))}async function Ys(e,{remove:t,add:a}){const r=V(d);t.forEach(o=>r.delete(m(d,"tables",e,"tokens",o.id))),a.forEach(o=>r.set(m(d,"tables",e,"tokens",o.id),{ownerUid:null,sheetId:null,...la(o),hidden:o.hidden??!!o.monster})),await r.commit()}function Hs(e,{isGm:t,uid:a},r,o){const n=y(d,"tables",e,"handouts"),i=t?n:_(n,$("audience","array-contains-any",["all",a]));return z(i,s=>r(s.docs.map(c=>({id:c.id,...c.data({serverTimestamps:"estimate"})}))),o)}function Ks(e,t){const{id:a,...r}=t;return R(m(d,"tables",e,"handouts",a),{...r,createdAt:b()})}function Xs(e,t){return F(m(d,"tables",e,"handouts",t))}function Js(e,{isGm:t},a,r){const o=y(d,"tables",e,"containers"),n=t?o:_(o,$("opened","==",!0));return z(n,i=>a(Object.fromEntries(i.docs.map(s=>[s.id,s.data()]))),r)}function Zs(e,t,{contents:a,opened:r=!1,reveal:o}){return R(m(d,"tables",e,"containers",t),{contents:a,opened:r,...o!==void 0?{reveal:o}:{}},{merge:!0})}function Qs(e,t){return R(m(d,"tables",e,"containers",t),{ensured:!0},{merge:!0})}function ec(e,t){return F(m(d,"tables",e,"containers",t))}function tc(e,t,a){return ee(m(d,"tables",e,"containers",t),{opened:!0,openedBy:String(a).slice(0,80),openedAt:b()})}function ac(e,t,a,r){const o=m(d,"tables",e,"containers",t);return Vr(d,async n=>{const i=await n.get(o),s=i.exists()?i.data().contents||[]:[],c=s.find(l=>l.id===a);if(!c)throw Object.assign(new Error("Alguém já pegou este item."),{code:"already-taken"});return n.update(o,{contents:s.filter(l=>l.id!==a),takenBy:String(r).slice(0,80)}),c})}function rc(e){const t=Object.fromEntries(Object.entries(e.context||{}).map(([a,r])=>[a,String(r??"").slice(0,80)]).slice(0,10));return Ma(y(d,"errorReports"),{at:Number(e.at)||Date.now(),where:String(e.where||"").slice(0,60),message:String(e.message||"").slice(0,300),code:e.code?String(e.code).slice(0,60):null,stack:e.stack?String(e.stack).slice(0,2e3):null,context:t,createdAt:b()})}async function oc(e,t,a=200){const r=await G(_(y(d,"tables",e,"messages"),$("createdAt","<",Ta.fromMillis(t)),Q("createdAt"),K(a)));return await Te(r.docs.map(o=>n=>n.delete(o.ref))),r.size}async function po(e=()=>{}){const t=C().uid,a=Mi(await co());for(const o of a.deleteTables)e("Apagando suas mesas…"),await xo(o);for(const o of a.leaveTables)e("Saindo das mesas em que você joga…"),await F(m(d,"tables",o,"members",t)).catch(()=>{});e("Apagando sua biblioteca e seu perfil…"),await no(t).catch(()=>{});const r=await G(y(d,"users",t,"library"));return await Te(r.docs.map(o=>n=>n.delete(o.ref))),await F(m(d,"users",t)),a}function nc(e,{actor:t,action:a,detail:r=""}){return Ma(y(d,"tables",e,"audit"),{uid:C().uid,actor:String(t).slice(0,80),action:String(a).slice(0,40),detail:String(r).slice(0,200),createdAt:b()})}function ic(e,t,a){return z(_(y(d,"tables",e,"audit"),Q("createdAt","desc"),K(50)),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function sc(e,t,a){return ee(m(d,"tables",e,"members",t),{permissions:a})}function cc(e,t,a){return ee(m(d,"tables",e,"members",t),{muted:!!a})}async function lc(e,t){return await R(m(d,"tables",e,"bans",t.uid),{uid:t.uid,displayName:String(t.displayName||"").slice(0,80),at:b()}),ho(e,t)}function dc(e,t){return F(m(d,"tables",e,"messages",t))}function pc(e,t,a){return ee(m(d,"tables",e,"messages",t),{text:a,editedAt:b()})}function fc(e,t,a){const{displayName:r,color:o,pronouns:n,avatar:i}=a;return ee(m(d,"tables",e,"members",t),{...r?{displayName:r}:{},color:o,pronouns:n,avatar:i})}function uc(e,t,a){return ee(m(d,"tables",e,"members",t),{role:a})}function mc(e,t){const a=C().uid;return z(y(d,"users",a,"library"),r=>e(r.docs.map(o=>({...o.data(),id:o.id}))),t)}function gc(e){const t=C().uid,{id:a,...r}=e;return R(m(d,"users",t,"library",a),{...r,createdAt:b()})}function bc(e){return F(m(d,"users",C().uid,"library",e))}function hc(e,t,a){return z(y(d,"tables",e,"presence"),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function xc(e,{name:t,activity:a}){const r=C().uid,o={uid:r,name:String(t||"Jogador").slice(0,80),lastSeen:b()};return a!==void 0&&Object.assign(o,{activity:a,activityAt:b()}),R(m(d,"tables",e,"presence",r),o,{merge:!0})}function vc(e,t,a){return z(_(y(d,"tables",e,"journal"),Q("createdAt","desc"),K(100)),r=>t(r.docs.map(o=>({id:o.id,...o.data({serverTimestamps:"estimate"})}))),a)}function yc(e,{title:t,text:a,author:r}){return Ma(y(d,"tables",e,"journal"),{title:t,text:a,author:r,uid:C().uid,createdAt:b()})}function wc(e,t){return F(m(d,"tables",e,"journal",t))}function Sc(e,t,a){return R(m(d,"tables",e,"private","gm"),{sceneNotes:{[t]:a},updatedAt:b()},{merge:!0})}function kc(e,t,a){return z(y(d,"tables",e,"drawings"),r=>t(r.docs.map(o=>({id:o.id,...o.data()}))),a)}function Ac(e,t){const a=C(),{id:r,...o}=t;return R(m(d,"tables",e,"drawings",r),{...o,uid:a.uid,createdAt:b()})}function Ec(e,t){return F(m(d,"tables",e,"drawings",t))}async function Mc(e,t){for(let a=0;a<t.length;a+=450){const r=V(d);t.slice(a,a+450).forEach(o=>r.delete(m(d,"tables",e,"drawings",o.id))),await r.commit()}}async function Te(e,t=400){for(let a=0;a<e.length;a+=t){const r=V(d);e.slice(a,a+t).forEach(o=>o(r)),await r.commit()}}function Fa(e,t){const a=o=>y(d,"tables",o,e),r=(o,n)=>y(d,"tables",o,e,n,"chunks");return{subscribe:(o,n,i)=>z(_(a(o),Q("createdAt","desc")),s=>n(s.docs.map(c=>({id:c.id,...c.data({serverTimestamps:"estimate"})}))),i),async upload(o,n,i){const s=m(a(o)),c=si(n);return await Te(c.map((l,p)=>g=>g.set(m(s,"chunks",String(p)),{index:p,data:l})),4),await R(s,{...i,chunkCount:c.length,uid:C().uid,createdAt:b()}),s.id},async load(o,n){const i=await G(r(o,n));if(i.empty)throw new Error(t);return ci(i.docs.map(s=>s.data()))},async remove(o,n){const i=await G(r(o,n)),s=V(d);i.forEach(c=>s.delete(c.ref)),s.delete(m(a(o),n)),await s.commit()}}}const Nt=Fa("mapImages","Mapa não encontrado."),Tc=Nt.subscribe,_c=(e,{name:t,dataUrl:a,bytes:r,width:o,height:n,thumb:i=null})=>Nt.upload(e,a,{name:t,bytes:r,width:o,height:n,...oi(i)?{thumb:i}:{}}),jc=Nt.load,fo=Nt.remove,Ot=Fa("audioFiles","Áudio não encontrado."),zc=Ot.subscribe,Ic=(e,{name:t,kind:a,dataUrl:r,bytes:o})=>Ot.upload(e,r,{name:t,kind:a,bytes:o}),Cc=Ot.load,uo=Ot.remove,$t=Fa("campaignFiles","Arquivo não encontrado."),Rc=$t.subscribe,Nc=(e,{name:t,fileName:a,mime:r,bytes:o,description:n,dataUrl:i})=>$t.upload(e,i,{name:t,fileName:a,mime:r,bytes:o,description:n}),Oc=$t.load,mo=$t.remove;function $c(e,t,a){return z(y(d,"tables",e,"sheetImages"),r=>t(Object.fromEntries(r.docs.map(o=>[o.id,o.data()]))),a)}function Pc(e,t,{portrait:a,avatar:r,animated:o=null,cutout:n=!1,frame:i=null,avatarCrop:s=null}){return R(m(d,"tables",e,"sheetImages",t),{portrait:a,avatar:r,...o?{animated:o}:{},...n?{cutout:!0}:{},...i==="whole"?{frame:i}:{},...s?{avatarCrop:s}:{},updatedAt:b()})}function Lc(e,t){return F(m(d,"tables",e,"sheetImages",t))}async function Dc(e,t=0){const a=await P(Y(e)),{inviteCode:r,name:o}=a.data();let n=null;for(let c=0;c<5&&!n;c+=1){const l=Rt();(await P(m(d,"invites",l))).exists()||(n=l)}if(!n)throw new Error("Não foi possível gerar um código. Tente de novo.");const i=V(d),s=Kr(t);return i.set(m(d,"invites",n),{tableId:e,tableName:o,gmName:String(C().displayName||"Mestre").slice(0,80),createdBy:C().uid,createdAt:b(),expiresAt:s?Ta.fromMillis(s):null}),i.update(Y(e),{inviteCode:n,inviteExpiresAt:s,updatedAt:b()}),r&&i.delete(m(d,"invites",r)),await i.commit(),n}async function Fc(e){const t=await P(Y(e)),{inviteCode:a}=t.data(),r=V(d);a&&r.delete(m(d,"invites",a)),r.update(Y(e),{inviteCode:null,inviteExpiresAt:null,updatedAt:b()}),await r.commit()}async function Bc(e){const t=await P(Y(e)),{streamCode:a,name:r}=t.data(),o=Rt(16),n=V(d);return n.set(m(d,"invites",o),{tableId:e,tableName:r,gmName:String(C().displayName||"Mestre").slice(0,80),createdBy:C().uid,createdAt:b(),stream:!0}),n.update(Y(e),{streamCode:o,updatedAt:b()}),a&&n.delete(m(d,"invites",a)),await n.commit(),a&&await go(e),o}async function Uc(e){const t=await P(Y(e)),{streamCode:a}=t.data(),r=V(d);a&&r.delete(m(d,"invites",a)),r.update(Y(e),{streamCode:null,updatedAt:b()}),await r.commit(),await go(e)}async function go(e){const t=await G(_(y(Y(e),"members"),$("stream","==",!0)));await Te(t.docs.map(a=>r=>r.delete(a.ref)))}async function bo(e){const t=C(),a=Da(e),r=await P(m(d,"invites",a));if(!r.exists()||!r.data().stream)throw new Error("Link de transmissão inválido ou revogado.");const{tableId:o,tableName:n}=r.data();return io(o,n,{role:"spectator",displayName:t.displayName||"Transmissão",inviteCode:a,stream:!0})}async function ho(e,t){const a=Y(e),[r,o]=await Promise.all([G(_(y(a,"sheets"),$("ownerUid","==",t.uid))),G(_(y(a,"tokens"),$("ownerUid","==",t.uid)))]);return await lo(e,n=>{n.delete(m(a,"members",t.uid)),r.forEach(i=>n.update(i.ref,{ownerUid:null,owner:"Mestre",updatedAt:b()})),o.forEach(i=>n.update(i.ref,{ownerUid:null})),n.set(m(y(a,"messages")),{uid:C().uid,author:"Sistema",text:`${t.displayName||"Um jogador"} foi removido da mesa`,type:"system",visibility:"public",roll:null,apply:null,to:null,toName:null,createdAt:b()})}),{releasedSheets:r.size,releasedTokens:o.size}}async function xo(e){const t=Y(e),a=await P(t),{inviteCode:r,streamCode:o}=a.data(),n=await P(De(e));for(const p of n.exists()?n.data().pages||[]:[])await F(m(d,"publicPages",p.code)).catch(()=>{});const i=await G(y(t,"mapImages"));for(const p of i.docs)await fo(e,p.id);await gr(e,"sheets"),await gr(e,"scenes");const s=await G(y(t,"audioFiles"));for(const p of s.docs)await uo(e,p.id);const c=await G(y(t,"campaignFiles"));for(const p of c.docs)await mo(e,p.id);for(const p of["tokens","sheets","sheetImages","messages","drawings","private","containers","celebration","bans","locks","handouts","journal","scenes","presence","rate","audit"]){const g=await G(y(t,p));await Te(g.docs.map(x=>A=>A.delete(x.ref)))}r&&await F(m(d,"invites",r)),o&&await F(m(d,"invites",o));const l=await G(y(t,"members"));await Te(l.docs.map(p=>g=>g.delete(p.ref))),await F(t)}const De=e=>m(d,"tables",e,"private","publicPages");async function Gc(e,t,a){const r=a.code||Rt(16),o=await P(De(e)),n=[{...a,code:r},...(o.exists()?o.data().pages||[]:[]).filter(s=>s.code!==r)].slice(0,10),i=V(d);return i.set(m(d,"publicPages",r),{...t,tableId:e,createdBy:C().uid,expiresAt:a.expiresAt?new Date(a.expiresAt):null,updatedAt:b()}),i.set(De(e),{pages:n,updatedAt:b()}),await i.commit(),r}async function qc(e,t){const a=await P(De(e)),r=(a.exists()?a.data().pages||[]:[]).filter(n=>n.code!==t),o=V(d);o.delete(m(d,"publicPages",t)),o.set(De(e),{pages:r,updatedAt:b()}),await o.commit()}function Vc(e,t,a){return z(De(e),r=>t(r.exists()?r.data().pages||[]:[]),a)}async function Wc(e){try{const t=await P(m(d,"publicPages",e));return t.exists()?t.data():null}catch(t){if((t==null?void 0:t.code)==="permission-denied")return null;throw t}}const Mf=Object.freeze(Object.defineProperty({__proto__:null,addDrawing:Ac,addJournalEntry:yc,assignSheetOwner:xs,banMember:lc,clearDrawings:Mc,createStreamLink:Bc,createTable:os,deleteAudioFile:uo,deleteCampaignFile:mo,deleteChatFile:Is,deleteContainer:ec,deleteDrawing:Ec,deleteHandout:Xs,deleteJournalEntry:wc,deleteLibraryEntry:bc,deleteMapImage:fo,deleteMessage:dc,deleteMyData:po,deleteSceneSnapshot:Ws,deleteSheet:As,deleteSheetImages:Lc,deleteTable:xo,deleteToken:bs,editMessage:pc,ensureContainer:Qs,fetchInvitePreview:ns,fetchPublicPage:Wc,fetchSessionMessages:Ns,joinTableByInvite:so,joinTableByStreamCode:bo,listMyTables:co,loadAudioFile:Cc,loadCampaignFile:Oc,loadChatFile:zs,loadMapImage:jc,logAudit:nc,mergeSaveSheet:ws,moveToken:ms,openContainer:tc,pruneMessages:oc,publishPublicPage:Gc,reactToMessage:Rs,regenerateInvite:Dc,removeMember:ho,renameTable:is,replaceSceneTokens:Ys,replaceTableContent:hs,reportError:rc,resetLock:Us,revokeInvite:Fc,revokePublicPage:qc,revokeStreamLink:Uc,rotateToken:gs,saveContainer:Zs,saveGmNotes:Ds,saveHandout:Ks,saveLibraryEntry:gc,saveLockCode:Gs,saveLockRecord:Bs,savePlayerNotes:Ls,saveSceneNote:Sc,saveSceneSnapshot:Vs,saveSheet:ys,saveSheetImages:Pc,saveSheetPrivate:Ms,saveToken:us,saveVersion:ks,sendMessage:Cs,setMemberMuted:cc,setMemberPermissions:sc,setMemberRole:uc,setTableArchived:ss,subscribeAudioFiles:zc,subscribeAudit:ic,subscribeCampaignFiles:Rc,subscribeContainers:Js,subscribeDrawings:kc,subscribeGmNotes:$s,subscribeHandouts:Hs,subscribeJournal:vc,subscribeLibrary:mc,subscribeLocks:Fs,subscribeMapImages:Tc,subscribeMembers:ls,subscribeMessages:Os,subscribePlayerNotes:Ps,subscribePresence:hc,subscribePublicPages:Vc,subscribeScenes:qs,subscribeSheetImages:$c,subscribeSheetPrivate:Es,subscribeSheets:vs,subscribeTable:cs,subscribeTokens:fs,subscribeVersions:Ss,takeFromContainer:ac,updateCampaign:ds,updateMemberProfile:fc,updatePresence:xc,updateTableState:ps,uploadAudioFile:Ic,uploadCampaignFile:Nc,uploadChatFile:js,uploadMapImage:_c},Symbol.toStringTag,{value:"Module"}));I&&(I.languageCode="pt");async function it(e,t={}){var o;const a=m(d,"users",e.uid);if((await P(a)).exists()){await R(a,{lastLoginAt:b()},{merge:!0});return}await R(a,{displayName:t.displayName||e.displayName||((o=e.email)==null?void 0:o.split("@")[0])||"Aventureiro",email:e.email||null,photoURL:e.photoURL||null,createdAt:b(),lastLoginAt:b()})}function Yc(e){return Un(I,e)}async function Tf(e,t){const{user:a}=await Pn(I,e,t);return await it(a),a}async function _f({name:e,email:t,password:a}){const{user:r}=await Ln(I,t,a);return e&&await jt(r,{displayName:e}),await it(r,{displayName:e}),r}async function jf(){const{user:e}=await Fn(I,new Bn);return await it(e),e}async function zf({name:e,inviteCode:t}){var n;const a=String(e||"").trim().slice(0,40);if(!a)throw Object.assign(new Error("Informe seu nome."),{code:"guest/no-name"});if(!String(t||"").trim())throw Object.assign(new Error("Informe o código de convite."),{code:"guest/no-code"});const r=(n=I.currentUser)!=null&&n.isAnonymous?I.currentUser:null,o=r||(await Wr(I)).user;await jt(o,{displayName:a}),await it(o,{displayName:a});try{return await so(t)}catch(i){throw r||await o.delete().catch(()=>_a(I)),i}}async function If(e){const t=I.currentUser,a=t||(await Wr(I)).user;t||(await jt(a,{displayName:"Transmissão"}),await it(a,{displayName:"Transmissão"}));try{return await bo(e)}catch(r){throw t||await a.delete().catch(()=>_a(I)),r}}async function Cf(e){const t=I.currentUser;t&&(await po(e),e==null||e("Apagando a conta…"),await t.delete())}function Rf(e){return Dn(I,e)}function Hc(){return _a(I)}async function Kc(e){const t=await P(m(d,"users",e));return t.exists()?t.data():null}async function Xc({displayName:e,photo:t,avatarId:a,avatarColor:r}){const o=I.currentUser;if(!o)throw new Error("Entre na sua conta para editar o perfil.");e&&e!==o.displayName&&await jt(o,{displayName:e}),await R(m(d,"users",o.uid),{displayName:e||o.displayName||null,photo:t,avatarId:a,avatarColor:r,updatedAt:b()},{merge:!0})}const Jc={"auth/invalid-email":"E-mail inválido.","auth/invalid-credential":"E-mail ou senha incorretos.","auth/user-not-found":"E-mail ou senha incorretos.","auth/wrong-password":"E-mail ou senha incorretos.","auth/email-already-in-use":"Este e-mail já está cadastrado.","auth/weak-password":"A senha precisa ter pelo menos 6 caracteres.","auth/too-many-requests":"Muitas tentativas. Aguarde um pouco e tente de novo.","auth/popup-closed-by-user":"A janela de login foi fechada antes de concluir.","auth/popup-blocked":"O navegador bloqueou a janela de login. Libere pop-ups para este site.","auth/network-request-failed":"Falha de conexão. Verifique sua internet.","auth/operation-not-allowed":"Este método de login não está ativado no Firebase.","auth/admin-restricted-operation":"A entrada sem conta não está ativada no Firebase (Authentication › Sign-in method › Anônimo).","guest/no-name":"Informe seu nome.","permission-denied":"Não foi possível entrar nesta mesa. Confira o código; se você foi bloqueado pelo Mestre, não dá para voltar.","auth/requires-recent-login":"Por segurança, saia, entre de novo e repita a exclusão.","guest/no-code":"Informe o código de convite."};function Nf(e){return(e==null?void 0:e.message)==="Convite inválido ou expirado."?e.message:Jc[e==null?void 0:e.code]||"Não foi possível concluir. Tente novamente."}const Zc=["#6d52be","#2f7280","#b36154","#4d7a3f","#a0742c","#7c4b62","#3d5fa8","#8a3f8f","#4b4f5c"],Of=["ela/dela","ele/dele","elu/delu"],vo=40,Qc=24,yo=4e4,el=/^#[0-9a-f]{6}$/i;function Ba(e){return typeof e=="string"&&el.test(e)}function $f(e={}){const t=String(e.displayName||"").trim().slice(0,vo),a=String(e.pronouns||"").trim().slice(0,Qc),r=typeof e.avatar=="string"&&e.avatar.startsWith("data:image/")&&e.avatar.length<=yo?e.avatar:null;return{displayName:t||null,pronouns:a||null,color:Ba(e.color)?e.color.toLowerCase():null,avatar:r}}function Pf(e){const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length===0?"?":t.length===1?t[0].slice(0,2).toUpperCase():`${t[0][0]}${t[t.length-1][0]}`.toUpperCase()}const tl=[{id:"dragao",emoji:"🐉",label:"Dragão"},{id:"mago",emoji:"🧙",label:"Mago"},{id:"elfo",emoji:"🧝",label:"Elfo"},{id:"caveira",emoji:"💀",label:"Caveira"},{id:"fantasma",emoji:"👻",label:"Fantasma"},{id:"lobo",emoji:"🐺",label:"Lobo"},{id:"coruja",emoji:"🦉",label:"Coruja"},{id:"gato",emoji:"🐈‍⬛",label:"Gato preto"},{id:"espadas",emoji:"⚔️",label:"Espadas"},{id:"escudo",emoji:"🛡️",label:"Escudo"},{id:"dado",emoji:"🎲",label:"Dado"},{id:"lua",emoji:"🌙",label:"Lua"}],da=Zc;function wo(e){return tl.find(t=>t.id===e)||null}function al(e,t=da[0]){const a=wo(e);if(!a)return null;const o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${Ba(t)?t:da[0]}"/><text x="32" y="43" font-size="34" text-anchor="middle">${a.emoji}</text></svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(o)}`}function br(e={}){const t=String(e.displayName||"").trim().slice(0,vo)||null,a=wo(e.avatarId)?e.avatarId:null,r=a&&Ba(e.avatarColor)?e.avatarColor.toLowerCase():null;let o=typeof e.photo=="string"&&e.photo.startsWith("data:image/")&&e.photo.length<=yo?e.photo:null;return a&&(o=al(a,r||da[0])),{displayName:t,photo:o,avatarId:a,avatarColor:r}}function Lf(e,t){return(e==null?void 0:e.photo)||(t==null?void 0:t.photoURL)||null}function Df(e,t){return(e==null?void 0:e.displayName)||(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||""}const So=O.createContext({user:null,profile:null,loading:!1,enabled:!1,logout:async()=>{},saveProfile:async()=>{}});function rl({children:e}){const[t,a]=O.useState(null),[r,o]=O.useState(bt),[n,i]=O.useState(null);O.useEffect(()=>{if(bt)return Yc(p=>{a(p),o(!1)})},[]),O.useEffect(()=>{if(i(null),!t)return;let p=!0;return Kc(t.uid).then(g=>{p&&g&&i(br({...g,displayName:g.displayName||t.displayName}))}).catch(()=>{}),()=>{p=!1}},[t==null?void 0:t.uid]);const s=async p=>{const g=br(p);if(!g.displayName)throw new Error("Escolha um nome.");return await Xc(g),i(g),g},c=async()=>{t!=null&&t.isAnonymous&&!window.confirm("Você entrou sem conta. Ao sair, perde o acesso a esta mesa e precisará do convite de novo. Sair mesmo assim?")||await Hc()},l=O.useMemo(()=>({user:t,profile:n,loading:r,enabled:bt,logout:c,saveProfile:s}),[t,n,r]);return f.jsx(So.Provider,{value:l,children:e})}function ol(){return O.useContext(So)}const hr=50,nl=5,Ce=[];let At={},pa=null,xr=0;function il(e){At={...At,...e}}function Ff(e){pa=e}const mt=(e,t)=>String(e||"").slice(0,t);function sl(e,t,a=At,r=Date.now()){const o=(e==null?void 0:e.message)||(typeof e=="string"?e:"Erro desconhecido");return{at:r,where:mt(t,60),message:mt(o,300),code:mt(e==null?void 0:e.code,60)||null,stack:mt(e==null?void 0:e.stack,2e3)||null,context:{...a}}}function fa(e,t="app"){const a=sl(e,t);return Ce.push(a),Ce.length>hr&&Ce.splice(0,Ce.length-hr),pa&&xr<nl&&(xr+=1,Promise.resolve().then(()=>pa(a)).catch(()=>{})),a}function vr(){return[...Ce]}function ko(){return JSON.stringify({geradoEm:new Date().toISOString(),contexto:At,erros:Ce},null,2)}function cl(e=globalThis.window){!(e!=null&&e.addEventListener)||e.__nighttableErrors||(e.__nighttableErrors=!0,e.addEventListener("error",t=>fa(t.error||t.message,"janela")),e.addEventListener("unhandledrejection",t=>fa(t.reason,"promessa")))}class ll extends Z.Component{constructor(a){super(a);or(this,"copy",async()=>{try{await navigator.clipboard.writeText(ko()),this.setState({copied:!0})}catch{}});this.state={failed:!1,copied:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(a,r){fa(Object.assign(a||new Error("Falha na tela"),{stack:`${(a==null?void 0:a.stack)||""}
${(r==null?void 0:r.componentStack)||""}`}),"tela")}render(){if(!this.state.failed)return this.props.children;const a={padding:"9px 16px",border:0,borderRadius:9,color:"#fff",background:"var(--c-7358d0)",fontSize:13,cursor:"pointer"};return f.jsx("main",{role:"alert",style:{height:"100dvh",overflowY:"auto",display:"grid",placeItems:"center",padding:24,color:"var(--c-e7e5e2)",background:"var(--c-0a0b0f)",fontFamily:"system-ui, sans-serif"},children:f.jsxs("div",{style:{maxWidth:440,display:"grid",gap:12,textAlign:"center"},children:[f.jsx("h1",{style:{margin:0,fontSize:22},children:"Algo deu errado nesta tela"}),f.jsx("p",{style:{margin:0,color:"var(--c-a9adb6)",fontSize:14,lineHeight:1.5},children:"Seus dados da mesa estão salvos. Recarregue a página; se continuar, copie o relatório e envie para quem cuida do NightTable."}),f.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[f.jsx("button",{type:"button",style:a,onClick:()=>window.location.reload(),children:"Recarregar"}),f.jsx("button",{type:"button",style:{...a,background:"var(--c-2a2d36)"},onClick:this.copy,children:this.state.copied?"Relatório copiado":"Copiar relatório"})]})]})})}}const dl={development:{label:"DEV",color:"#63d59a"},emulators:{label:"EMULADOR",color:"#7fe3ff"},staging:{label:"STAGING",color:"#f3c48f"},production:{label:null,color:null}};function pl(e={}){const t=String(e.VITE_APP_ENV||"").trim().toLowerCase();return t in dl?t:e.VITE_USE_FIREBASE_EMULATORS==="true"?"emulators":e.DEV?"development":"production"}const fl={BASE_URL:"/nighttablesite/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyAojCR46U1f6Bivq7ogNUkQMReQZ8RPpmI",VITE_FIREBASE_APP_ID:"1:839551252957:web:f9a1f161e39ab7ebb85e34",VITE_FIREBASE_AUTH_DOMAIN:"nighttable-5621b.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-1Z4XL9CFYE",VITE_FIREBASE_MESSAGING_SENDER_ID:"839551252957",VITE_FIREBASE_PROJECT_ID:"nighttable-5621b",VITE_FIREBASE_STORAGE_BUCKET:"nighttable-5621b.firebasestorage.app",VITE_SERVER_ROLLS:"false",VITE_USE_FIREBASE_EMULATORS:"false"},ul="09/10/2026";function ml(e=fl||{}){return String(e.VITE_LEGAL_CONTACT||"").trim()||null}const Et={privacidade:{title:"Política de privacidade",intro:"Esta política explica quais dados o NightTable guarda, para quê e como você pode apagá-los. Ela segue a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018).",sections:[["Quais dados guardamos",["Conta: nome de exibição, e-mail e, se você entrar com Google, a foto do perfil. Senhas ficam só no Firebase Authentication (Google) e nunca são vistas por nós.","Convidado sem conta: o nome que você digitou e um identificador anônimo deste navegador.","Conteúdo da mesa: o que você e os outros participantes criam — mensagens do chat, rolagens, fichas, mapas, imagens, áudios, desenhos, diário, handouts e anotações.","Perfil na mesa: nome, cor, pronome e avatar que você escolher para cada mesa.","Presença: se você está conectado e o que está fazendo no momento (digitando, rolando dados), para mostrar aos outros na mesa.","Registro de auditoria da mesa: ações do Mestre (convites, bloqueios, permissões), visível só aos Mestres."]],["Para que usamos",["Só para fazer a mesa funcionar: entrar, sincronizar em tempo real, guardar o histórico da campanha e aplicar as permissões de cada papel.","Não vendemos dados, não mostramos anúncios e não fazemos perfil de comportamento."]],["Quem vê o quê",["O conteúdo de uma mesa é visível para os participantes dela, conforme o papel (Mestre, co-Mestre, jogador, espectador). Sussurros e handouts privados ficam só com quem os recebe e com os Mestres quando aplicável.","O código de convite mostra o nome da mesa e do Mestre a quem tiver o código."]],["Onde os dados ficam",["No Google Firebase (Authentication e Cloud Firestore), que pode processar dados fora do Brasil, com as garantias contratuais do Google.","Neste navegador (localStorage): preferências, última mesa aberta, personagem escolhido e a biblioteca do modo local."]],["Serviços externos opcionais",["Relatórios de erro: desligados por padrão. Se você ativar em Ajuda e preferências, erros são enviados sem nome, e-mail ou conversas.","Discord: se o Mestre configurar um webhook, as rolagens da mesa são enviadas para o canal do Discord dele, sob a política do Discord.","Link de chamada de voz/vídeo: abre o serviço escolhido pelo Mestre (Discord, Meet etc.), com a política desse serviço."]],["Por quanto tempo",["Enquanto a mesa ou a conta existirem. O Mestre pode definir uma retenção do chat, e mensagens mais antigas são apagadas.","Ao excluir uma mesa, o conteúdo dela é apagado. Cópias em cache do navegador somem ao limpar os dados do site."]],["Seus direitos",['Você pode ver e corrigir seus dados (perfil e fichas), exportar fichas e campanhas em JSON, pedir ao Mestre para sair de uma mesa e excluir a conta em "Excluir minha conta", no lobby — isso apaga as mesas que você criou, sua biblioteca e seu perfil, e tira você das outras mesas.',"Mensagens que você enviou em mesas de outras pessoas ficam com a mesa; peça ao Mestre para apagá-las."]]]},termos:{title:"Termos de uso",intro:"Ao usar o NightTable você concorda com estes termos. Eles valem para quem mestra, joga ou assiste.",sections:[["O serviço",["O NightTable é uma mesa virtual de RPG. Ele é oferecido como está, sem garantia de disponibilidade contínua; faça cópias de segurança das campanhas importantes (Exportar campanha).","Recursos podem mudar ou ser retirados. Recursos experimentais ficam atrás de opções da mesa."]],["Sua conta",["Você é responsável pelo que acontece na sua conta e por guardar sua senha. Convidados sem conta perdem o acesso se apagarem os dados do navegador.","Para criar mesas é preciso ter uma conta cadastrada."]],["Conteúdo",["O que você envia (mapas, imagens, áudios, textos) continua seu. Você declara ter o direito de usá-lo e nos autoriza apenas a guardar e mostrar esse conteúdo aos participantes da mesa.","Não envie material de terceiros sem permissão, conteúdo ilegal, discurso de ódio, assédio, conteúdo sexual envolvendo menores ou dados pessoais de outras pessoas sem consentimento."]],["Convites e moderação",["Quem tem o código de convite entra na mesa. O Mestre é responsável por compartilhar o convite com cuidado e pode revogá-lo, silenciar, remover e bloquear participantes.","Podemos remover conteúdo ou contas que violem estes termos."]],["Limites",["Há limites técnicos de tamanho de imagens, áudios e mensagens, e um limite de mensagens em sequência, para manter o serviço no plano gratuito do Firebase.","Não tente contornar permissões, acessar mesas sem convite ou sobrecarregar o serviço."]],["Mudanças nestes termos",["Quando os termos mudarem, a data no topo será atualizada. Continuar usando depois disso significa aceitar a nova versão."]]]}};function Ao(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Le(t,a)}?pagina=${e}`}function gl(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{const a=new URLSearchParams(e).get("pagina");return Object.hasOwn(Et,a)?a:null}catch{return null}}const bl=8;function hl(e){const t=Array.isArray(e)?e:String(e||"").split(","),a=new Set;return t.map(r=>String(r||"").replace(/^#/,"").replace(/\s+/g," ").trim().slice(0,24)).filter(r=>r&&!a.has(r.toLowerCase())&&a.add(r.toLowerCase())).slice(0,bl)}function at(e){const t=e&&typeof e=="object"?e:{},a=(Array.isArray(t.sessions)?t.sessions:[]).filter(r=>r&&!Number.isNaN(Date.parse(r.at))).map(r=>({id:String(r.id||r.at),at:new Date(r.at).toISOString(),note:String(r.note||"").slice(0,140)})).sort((r,o)=>Date.parse(r.at)-Date.parse(o.at)).slice(-20);return{tagline:String(t.tagline||"").replace(/\s+/g," ").trim().slice(0,120),description:String(t.description||"").slice(0,2e3),image:typeof t.image=="string"&&t.image.startsWith("data:image/")?t.image:null,tags:hl(t.tags),sessions:a}}function Bf({campaign:e,systemName:t}={},a=Date.now()){const r=at(e);return{tagline:r.tagline,systemName:t?String(t).slice(0,40):"",tags:r.tags,nextSession:Eo(r.sessions,a)[0]||null}}function Eo(e,t=Date.now(),a=4*36e5){return(e||[]).filter(r=>Date.parse(r.at)+a>t)}function Uf(e,{at:t,note:a=""},r=`session-${Date.now()}`){const o=at(e);return Number.isNaN(Date.parse(t))?o:at({...o,sessions:[...o.sessions,{id:r,at:t,note:a}]})}function Gf(e,t){const a=at(e);return{...a,sessions:a.sessions.filter(r=>r.id!==t)}}function qf(e,t="pt-BR",a){return new Date(e).toLocaleString(t,{weekday:"short",day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}function Vf(e,t=Date.now()){const a=Date.parse(e)-t;if(a<=0)return"agora";const r=a/36e5;if(r<1)return`em ${Math.max(1,Math.round(a/6e4))} min`;if(r<24)return`em ${Math.round(r)} h`;const o=Math.round(r/24);return o===1?"amanhã":`em ${o} dias`}const Jt=e=>e.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),yr=e=>String(e||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n");function Wf({uid:e,title:t,description:a="",at:r,durationMinutes:o=240}){const n=new Date(r),i=new Date(n.getTime()+o*6e4);return["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//NightTable//Agenda//PT","BEGIN:VEVENT",`UID:${e}@nighttable`,`DTSTAMP:${Jt(new Date)}`,`DTSTART:${Jt(n)}`,`DTEND:${Jt(i)}`,`SUMMARY:${yr(t)}`,`DESCRIPTION:${yr(a)}`,"END:VEVENT","END:VCALENDAR",""].join(`\r
`)}const xl={scene:{label:"Apresentação de cena"},campaign:{label:"Página da campanha"}},vl=4,Yf={maxSize:1600,maxBytes:56e4},yl=8e5,wl=2e3,Ua="nighttable-public-pages",Sl=e=>{var t;return e==null?null:typeof e=="number"?e:((t=e==null?void 0:e.toMillis)==null?void 0:t.call(e))??(e instanceof Date?e.getTime():null)};function Hf(e,t=(r=>(r=globalThis.location)==null?void 0:r.origin)()||"",a){return`${Le(t,a)}?publico=${encodeURIComponent(e)}`}function kl(e=(t=>(t=globalThis.location)==null?void 0:t.search)()||""){try{return(new URLSearchParams(e).get("publico")||"").trim().toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,32)||null}catch{return null}}function Mo(e){const t=xl[e==null?void 0:e.kind]?e.kind:null,a=Ae(e==null?void 0:e.title,80);if(!t||!a)return null;const r=typeof(e==null?void 0:e.image)=="string"&&e.image.startsWith("data:image/")&&e.image.length<=yl?e.image:null;return{kind:t,title:a,subtitle:Ae(e==null?void 0:e.subtitle,120),text:Ae(e==null?void 0:e.text,wl),image:r,systemName:Ae(e==null?void 0:e.systemName,40),tags:(Array.isArray(e==null?void 0:e.tags)?e.tags:[]).map(o=>Ae(o,24)).filter(Boolean).slice(0,8),sessions:(Array.isArray(e==null?void 0:e.sessions)?e.sessions:[]).filter(o=>!Number.isNaN(Date.parse(o==null?void 0:o.at))).slice(0,6).map(o=>({at:new Date(o.at).toISOString(),note:Ae(o.note,140)})),tableName:Ae(e==null?void 0:e.tableName,80)}}function Kf({tableName:e,scene:t,opening:a="",image:r=null,includeOpening:o=!0}){return Mo({kind:"scene",title:(t==null?void 0:t.name)||"Cena",subtitle:(t==null?void 0:t.subtitle)||"",text:o?a:"",image:r,tableName:e})}function Xf({tableName:e,campaign:t,systemName:a="",show:r={}},o=Date.now()){const n=at(t),{description:i=!0,cover:s=!0,sessions:c=!0}=r;return Mo({kind:"campaign",title:e,subtitle:n.tagline,text:i?n.description:"",image:s?n.image:null,systemName:a,tags:n.tags,sessions:c?Eo(n.sessions,o):[],tableName:e})}function Jf(e,t,{validityDays:a=0,now:r=Date.now()}={}){return{code:e,kind:t.kind,title:t.title,createdAt:r,expiresAt:Kr(a,r)}}function Zf(e,t=Date.now()){return Ca(Sl(e==null?void 0:e.expiresAt),t)}function Qf(e=Math.random){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let a="L";for(let r=0;r<15;r+=1)a+=t[Math.floor(e()*t.length)];return a}function To(e=globalThis.localStorage){try{const t=JSON.parse((e==null?void 0:e.getItem(Ua))||"{}");return t&&typeof t=="object"?t:{}}catch{return{}}}function eu(e,t,a=globalThis.localStorage){const r={...To(a),[e]:t};let n=Object.keys(r).sort((i,s)=>(r[s].createdAt||0)-(r[i].createdAt||0)).slice(0,vl);for(;n.length;)try{return a.setItem(Ua,JSON.stringify(Object.fromEntries(n.map(i=>[i,r[i]])))),n}catch{if(n.length===1)break;n=n.slice(0,-1)}throw new Error("Não coube neste navegador. Revogue um link antigo e tente de novo.")}function tu(e,t=globalThis.localStorage){const a=To(t);delete a[e];try{t.setItem(Ua,JSON.stringify(a))}catch{}}function au(e,t="pt-BR"){return new Date(e).toLocaleString(t,{weekday:"long",day:"2-digit",month:"long",hour:"2-digit",minute:"2-digit"})}const Al=Ea(f.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47"}),"HelpOutlineRounded");var j="-ms-",Qe="-moz-",M="-webkit-",_o="comm",Pt="rule",Ga="decl",El="@import",Ml="@namespace",jo="@keyframes",Tl="@layer",zo=Math.abs,qa=String.fromCharCode,ua=Object.assign;function _l(e,t){return U(e,0)^45?(((t<<2^U(e,0))<<2^U(e,1))<<2^U(e,2))<<2^U(e,3):0}function Io(e){return e.trim()}function le(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,a){return e.replace(t,a)}function ht(e,t,a){return e.indexOf(t,a)}function U(e,t){return e.charCodeAt(t)|0}function _e(e,t,a){return e.slice(t,a)}function se(e){return e.length}function Co(e){return e.length}function Ke(e,t){return t.push(e),e}function jl(e,t){return e.map(t).join("")}function wr(e,t){return e.filter(function(a){return!le(a,t)})}var Lt=1,Fe=1,Ro=0,oe=0,D=0,Ge="";function Dt(e,t,a,r,o,n,i,s){return{value:e,root:t,parent:a,type:r,props:o,children:n,line:Lt,column:Fe,length:i,return:"",siblings:s}}function xe(e,t){return ua(Dt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ie(e){for(;e.root;)e=xe(e.root,{children:[e]});Ke(e,e.siblings)}function zl(){return D}function Il(){return D=oe>0?U(Ge,--oe):0,Fe--,D===10&&(Fe=1,Lt--),D}function ce(){return D=oe<Ro?U(Ge,oe++):0,Fe++,D===10&&(Fe=1,Lt++),D}function ve(){return U(Ge,oe)}function xt(){return oe}function Ft(e,t){return _e(Ge,e,t)}function rt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cl(e){return Lt=Fe=1,Ro=se(Ge=e),oe=0,[]}function Rl(e){return Ge="",e}function Zt(e){return Io(Ft(oe-1,ma(e===91?e+2:e===40?e+1:e)))}function Nl(e){for(;(D=ve())&&D<33;)ce();return rt(e)>2||rt(D)>3?"":" "}function Ol(e,t){for(;--t&&ce()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return Ft(e,xt()+(t<6&&ve()==32&&ce()==32))}function ma(e){for(;ce();)switch(D){case e:return oe;case 34:case 39:e!==34&&e!==39&&ma(D);break;case 40:e===41&&ma(e);break;case 92:ce();break}return oe}function $l(e,t){for(;ce()&&e+D!==57;)if(e+D===84&&ve()===47)break;return"/*"+Ft(t,oe-1)+"*"+qa(e===47?e:ce())}function Pl(e){for(;!rt(ve());)ce();return Ft(e,oe)}function Ll(e){return Rl(vt("",null,null,null,[""],e=Cl(e),0,[0],e))}function vt(e,t,a,r,o,n,i,s,c){for(var l=0,p=0,g=i,x=0,A=0,S=0,v=1,N=1,T=1,h=0,B="",X=o,L=n,W=r,k=B;N;)switch(S=h,h=ce()){case 40:if(S!=108&&U(k,g-1)==58){ht(k+=w(Zt(h),"&","&\f"),"&\f",zo(l?s[l-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:k+=Zt(h);break;case 9:case 10:case 13:case 32:k+=Nl(S);break;case 92:k+=Ol(xt()-1,7);continue;case 47:switch(ve()){case 42:case 47:Ke(Dl($l(ce(),xt()),t,a,c),c),(rt(S||1)==5||rt(ve()||1)==5)&&se(k)&&_e(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*v:s[l++]=se(k)*T;case 125*v:case 59:case 0:switch(h){case 0:case 125:N=0;case 59+p:T==-1&&(k=w(k,/\f/g,"")),A>0&&(se(k)-g||v===0&&S===47)&&Ke(A>32?kr(k+";",r,a,g-1,c):kr(w(k," ","")+";",r,a,g-2,c),c);break;case 59:k+=";";default:if(Ke(W=Sr(k,t,a,l,p,o,s,B,X=[],L=[],g,n),n),h===123)if(p===0)vt(k,t,W,W,X,n,g,s,L);else{switch(x){case 99:if(U(k,3)===110)break;case 108:if(U(k,2)===97)break;default:p=0;case 100:case 109:case 115:}p?vt(e,W,W,r&&Ke(Sr(e,W,W,0,0,o,s,B,o,X=[],g,L),L),o,L,g,s,r?X:L):vt(k,W,W,W,[""],L,0,s,L)}}l=p=A=0,v=T=1,B=k="",g=i;break;case 58:g=1+se(k),A=S;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&Il()==125)continue}switch(k+=qa(h),h*v){case 38:T=p>0?1:(k+="\f",-1);break;case 44:s[l++]=(se(k)-1)*T,T=1;break;case 64:ve()===45&&(k+=Zt(ce())),x=ve(),p=g=se(B=k+=Pl(xt())),h++;break;case 45:S===45&&se(k)==2&&(v=0)}}return n}function Sr(e,t,a,r,o,n,i,s,c,l,p,g){for(var x=o-1,A=o===0?n:[""],S=Co(A),v=0,N=0,T=0;v<r;++v)for(var h=0,B=_e(e,x+1,x=zo(N=i[v])),X=e;h<S;++h)(X=Io(N>0?A[h]+" "+B:w(B,/&\f/g,A[h])))&&(c[T++]=X);return Dt(e,t,a,o===0?Pt:s,c,l,p,g)}function Dl(e,t,a,r){return Dt(e,t,a,_o,qa(zl()),_e(e,2,-2),0,r)}function kr(e,t,a,r,o){return Dt(e,t,a,Ga,_e(e,0,r),_e(e,r+1,-1),r,o)}function No(e,t,a){switch(_l(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return M+e+e;case 4855:return M+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Qe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Qe+e+j+e+e;case 5936:switch(U(e,t+11)){case 114:return M+e+j+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+j+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+j+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+j+e+e;case 6165:return M+e+j+"flex-"+e+e;case 5187:return M+e+w(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+j+"flex-$1$2")+e;case 5443:return M+e+j+"flex-item-"+w(e,/flex-|-self/g,"")+(le(e,/flex-|baseline/)?"":j+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return M+e+j+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+j+w(e,"shrink","negative")+e;case 5292:return M+e+j+w(e,"basis","preferred-size")+e;case 6060:return M+"box-"+w(e,"-grow","")+M+e+j+w(e,"grow","positive")+e;case 4554:return M+w(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+j+"flex-pack:$3"),/space-between/,"justify")+M+e+e;case 4200:if(!le(e,/flex-|baseline/))return j+"grid-column-align"+_e(e,t)+e;break;case 2592:case 3360:return j+w(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,le(r.props,/grid-\w+-end/)})?~ht(e+(a=a[t].value),"span",0)?e:j+w(e,"-start","")+e+j+"grid-row-span:"+(~ht(a,"span",0)?le(a,/\d+/):+le(a,/\d+/)-+le(e,/\d+/))+";":j+w(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return le(r.props,/grid-\w+-start/)})?e:j+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(U(e,t+1)){case 109:if(U(e,t+4)!==45)break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Qe+(U(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ht(e,"stretch",0)?No(w(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,n,i,s,c,l){return j+o+":"+n+l+(i?j+o+"-span:"+(s?c:+c-+n)+l:"")+e});case 4949:if(U(e,t+6)===121)return w(e,":",":"+M)+e;break;case 6444:switch(U(e,U(e,14)===45?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(U(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+j+"$2box$3")+e;case 100:return w(e,":",":"+j)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function Mt(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function Fl(e,t,a,r){switch(e.type){case Tl:if(e.children.length)break;case El:case Ml:case Ga:return e.return=e.return||e.value;case _o:return"";case jo:return e.return=e.value+"{"+Mt(e.children,r)+"}";case Pt:if(!se(e.value=e.props.join(",")))return""}return se(a=Mt(e.children,r))?e.return=e.value+"{"+a+"}":""}function Bl(e){var t=Co(e);return function(a,r,o,n){for(var i="",s=0;s<t;s++)i+=e[s](a,r,o,n)||"";return i}}function Ul(e){return function(t){t.root||(t=t.return)&&e(t)}}function Gl(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case Ga:e.return=No(e.value,e.length,a);return;case jo:return Mt([xe(e,{value:w(e.value,"@","@"+M)})],r);case Pt:if(e.length)return jl(a=e.props,function(o){switch(le(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ie(xe(e,{props:[w(o,/:(read-\w+)/,":"+Qe+"$1")]})),Ie(xe(e,{props:[o]})),ua(e,{props:wr(a,r)});break;case"::placeholder":Ie(xe(e,{props:[w(o,/:(plac\w+)/,":"+M+"input-$1")]})),Ie(xe(e,{props:[w(o,/:(plac\w+)/,":"+Qe+"$1")]})),Ie(xe(e,{props:[w(o,/:(plac\w+)/,j+"input-$1")]})),Ie(xe(e,{props:[o]})),ua(e,{props:wr(a,r)});break}return""})}}var Ne={},Qt,ea;const Be=typeof process<"u"&&Ne!==void 0&&(Ne.REACT_APP_SC_ATTR||Ne.SC_ATTR)||"data-styled",Oo="active",$o="data-styled-version",Bt="6.5.3",Va=`/*!sc*/
`,et=typeof window<"u"&&typeof document<"u";function Ar(e){if(typeof process<"u"&&Ne!==void 0){const t=Ne[e];if(t!==void 0&&t!=="")return t!=="false"}}const ql=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(ea=(Qt=Ar("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Qt!==void 0?Qt:Ar("SC_DISABLE_SPEEDY"))!==null&&ea!==void 0?ea:typeof process<"u"&&Ne!==void 0&&!1),Po="sc-keyframes-",Vl={};function st(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let yt=new Map,Tt=new Map,wt=1;const Xe=e=>{if(yt.has(e))return yt.get(e);for(;Tt.has(wt);)wt++;const t=wt++;return yt.set(e,t),Tt.set(t,e),t},Wl=e=>Tt.get(e),Yl=(e,t)=>{wt=t+1,yt.set(e,t),Tt.set(t,e)},Wa=Object.freeze([]),Ue=Object.freeze({});function Lo(e,t,a=Ue){return e.theme!==a.theme&&e.theme||t||a.theme}const Hl=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kl=/(^-|-$)/g;function Do(e){return e.replace(Hl,"-").replace(Kl,"")}const Xl=/(a)(d)/gi,Er=e=>String.fromCharCode(e+(e>25?39:97));function Ya(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=Er(t%52)+a;return(Er(t%52)+a).replace(Xl,"$1-$2")}const ga=5381,Me=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},Fo=e=>Me(ga,e);function Ha(e){return Ya(Fo(e)>>>0)}function Jl(e){return e.displayName||e.name||"Component"}function ba(e){return typeof e=="string"&&!0}function Zl(e){return ba(e)?`styled.${e}`:`Styled(${Jl(e)})`}const Bo=Symbol.for("react.memo"),Ql=Symbol.for("react.forward_ref"),ed={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},td={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Uo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ad={[Ql]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Bo]:Uo};function Mr(e){return("type"in(t=e)&&t.type.$$typeof)===Bo?Uo:"$$typeof"in e?ad[e.$$typeof]:ed;var t}const rd=Object.defineProperty,od=Object.getOwnPropertyNames,nd=Object.getOwnPropertySymbols,id=Object.getOwnPropertyDescriptor,sd=Object.getPrototypeOf,cd=Object.prototype;function Go(e,t,a){if(typeof t!="string"){const r=sd(t);r&&r!==cd&&Go(e,r,a);const o=od(t).concat(nd(t)),n=Mr(e),i=Mr(t);for(let s=0;s<o.length;++s){const c=o[s];if(!(c in td||a&&a[c]||i&&c in i||n&&c in n)){const l=id(t,c);try{rd(e,c,l)}catch{}}}}return e}function ct(e){return typeof e=="function"}const ld=Symbol.for("react.forward_ref");function Ka(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===ld&&"styledComponentId"in e}function Je(e,t){return e&&t?e+" "+t:e||t||""}function _t(e,t){return e.join("")}function ot(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ha(e,t,a=!1){if(!a&&!ot(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ha(e[r],t[r]);else if(ot(t))for(const r in t)e[r]=ha(e[r],t[r]);return e}function Xa(e,t){Object.defineProperty(e,"toString",{value:t})}const dd=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,n=o.length;let i=n;for(;e>=i;)if(i<<=1,i<0)throw st(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(let s=n;s<i;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,n=t.length;o<n;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let n=r;n<o;n++)t+=this.tag.getRule(n)+Va;return t}},pd=`style[${Be}][${$o}="${Bt}"]`,fd=new RegExp(`^${Be}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Tr=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,xa=e=>{if(!e)return document;if(Tr(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Tr(t))return t}return document},ud=(e,t,a)=>{const r=a.split(",");let o;for(let n=0,i=r.length;n<i;n++)(o=r[n])&&e.registerName(t,o)},md=(e,t)=>{var a;const r=((a=t.textContent)!==null&&a!==void 0?a:"").split(Va),o=[];for(let n=0,i=r.length;n<i;n++){const s=r[n].trim();if(!s)continue;const c=s.match(fd);if(c){const l=0|parseInt(c[1],10),p=c[2];l!==0&&(Yl(p,l),ud(e,p,c[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(s)}},ta=e=>{const t=xa(e.options.target).querySelectorAll(pd);for(let a=0,r=t.length;a<r;a++){const o=t[a];o&&o.getAttribute(Be)!==Oo&&(md(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let Ye=!1;function gd(){if(Ye!==!1)return Ye;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Ye=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Ye=t.getAttribute("content")||void 0}return Ye=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const qo=(e,t)=>{const a=document.head,r=e||a,o=document.createElement("style"),n=(c=>{const l=Array.from(c.querySelectorAll(`style[${Be}]`));return l[l.length-1]})(r),i=n!==void 0?n.nextSibling:null;o.setAttribute(Be,Oo),o.setAttribute($o,Bt);const s=t||gd();return s&&o.setAttribute("nonce",s),r.insertBefore(o,i),o},bd=class{constructor(e,t){this.element=qo(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;const o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let n=0,i=o.length;n<i;n++){const s=o[n];if(s.ownerNode===a)return s}throw st(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},hd=class{constructor(e,t){this.element=qo(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let _r=et;const xd={isServer:!et,useCSSOMInjection:!ql};class lt{static registerId(t){return Xe(t)}constructor(t=Ue,a={},r){this.options=Object.assign(Object.assign({},xd),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&et&&_r&&(_r=!1,ta(this)),Xa(this,()=>(o=>{const n=o.getTag(),{length:i}=n;let s="";for(let c=0;c<i;c++){const l=Wl(c);if(l===void 0)continue;const p=o.names.get(l);if(p===void 0||!p.size)continue;const g=n.getGroup(c);if(g.length===0)continue;const x=Be+".g"+c+'[id="'+l+'"]';let A="";for(const S of p)S.length>0&&(A+=S+",");s+=g+x+'{content:"'+A+'"}'+Va}return s})(this))}rehydrate(){!this.server&&et&&ta(this)}reconstructWithOptions(t,a=!0){const r=new lt(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&et&&t.target!==this.options.target&&xa(this.options.target)!==xa(t.target)&&ta(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new bd(r,o):new hd(r,o))(this.options),new dd(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){Xe(t),t.startsWith(Po)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(Xe(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Xe(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const Vo=new WeakSet,vd={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function yd(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in vd||e.startsWith("--")?String(t).trim():t+"px"}const Ee=47;function jr(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){const r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}const Wo=Symbol.for("sc-keyframes");function wd(e){return typeof e=="object"&&e!==null&&Wo in e}function Yo(e){return ct(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Ho=e=>e==null||e===!1||e==="",Sd=Symbol.for("react.client.reference");function zr(e){return e.$$typeof===Sd}function Ko(e,t){for(const a in e){const r=e[a];e.hasOwnProperty(a)&&!Ho(r)&&(Array.isArray(r)&&Vo.has(r)||ct(r)?t.push(jr(a)+":",r,";"):ot(r)?(t.push(a+" {"),Ko(r,t),t.push("}")):t.push(jr(a)+": "+yd(a,r)+";"))}}function ye(e,t,a,r,o=[]){if(Ho(e))return o;const n=typeof e;if(n==="string")return o.push(e),o;if(n==="function"){if(zr(e))return o;if(Yo(e)&&t){const i=e(t);return ye(i,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let i=0;i<e.length;i++)ye(e[i],t,a,r,o);return o}return Ka(e)?(o.push(`.${e.styledComponentId}`),o):wd(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):zr(e)?o:ot(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Ko(e,o),o):(o.push(e.toString()),o)}const kd=Fo(Bt);class Ad{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=Me(kd,a),this.baseStyle=r,lt.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let n="";for(let i=0;i<this.rules.length;i++){const s=this.rules[i];if(typeof s=="string")n+=s;else if(s)if(Yo(s)){const c=s(t);typeof c=="string"?n+=c:c!=null&&c!==!1&&(n+=_t(ye(c,t,a,r)))}else n+=_t(ye(s,t,a,r))}if(n){this.dynamicNameCache||(this.dynamicNameCache=new Map);const i=r.hash?r.hash+n:n;let s=this.dynamicNameCache.get(i);if(!s){if(s=Ya(Me(Me(this.baseHash,r.hash),n)>>>0),this.dynamicNameCache.size>=200){const c=this.dynamicNameCache.keys().next().value;c!==void 0&&this.dynamicNameCache.delete(c)}this.dynamicNameCache.set(i,s)}if(!a.hasNameForId(this.componentId,s)){const c=r(n,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,c)}o=Je(o,s)}}return o}}const Ed=/&/g;function Xo(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function aa(e){const t=e.length;let a="",r=0,o=0,n=0,i=!1,s=!1;for(let c=0;c<t;c++){const l=e.charCodeAt(c);if(n!==0||i||l!==Ee||e.charCodeAt(c+1)!==42)if(i)l===42&&e.charCodeAt(c+1)===Ee&&(i=!1,c++);else if(l!==34&&l!==39||Xo(e,c)){if(n===0)if(l===123)o++;else if(l===125){if(o--,o<0){s=!0;let p=c+1;for(;p<t;){const g=e.charCodeAt(p);if(g===59||g===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,c=p-1,r=p;continue}o===0&&(a+=e.substring(r,c+1),r=c+1)}else l===59&&o===0&&(a+=e.substring(r,c+1),r=c+1)}else n===0?n=l:n===l&&(n=0);else i=!0,c++}return s||o!==0||n!==0?(r<t&&o===0&&n===0&&(a+=e.substring(r)),a):e}function Jo(e,t){const a=t+" ",r=","+a;for(let o=0;o<e.length;o++){const n=e[o];if(n.type==="rule"){n.value=(a+n.value).replaceAll(",",r);const i=n.props,s=[];for(let c=0;c<i.length;c++)s[c]=a+i[c];n.props=s}Array.isArray(n.children)&&n.type!=="@keyframes"&&Jo(n.children,t)}return e}function Md({options:e=Ue,plugins:t=Wa}=Ue){let a,r,o;const n=(x,A,S)=>S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?`.${a}`:x,i=t.slice();i.push(x=>{x.type===Pt&&x.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),x.props[0]=x.props[0].replace(Ed,r).replace(o,n))}),e.prefix&&i.push(Gl),i.push(Fl);let s=[];const c=Bl(i.concat(Ul(x=>s.push(x)))),l=(x,A="",S="",v="&")=>{a=v,r=A,o=void 0;const N=function(h){const B=h.indexOf("//")!==-1,X=h.indexOf("}")!==-1;if(!B&&!X)return h;if(!B)return aa(h);const L=h.length;let W="",k=0,E=0,Se=0,je=0,te=0,qe=!1;for(;E<L;){const H=h.charCodeAt(E);if(H!==34&&H!==39||Xo(h,E))if(Se===0)if(H===Ee&&E+1<L&&h.charCodeAt(E+1)===42){for(E+=2;E+1<L&&(h.charCodeAt(E)!==42||h.charCodeAt(E+1)!==Ee);)E++;E+=2}else if(H!==40)if(H!==41)if(je>0)E++;else if(H===42&&E+1<L&&h.charCodeAt(E+1)===Ee)W+=h.substring(k,E),E+=2,k=E,qe=!0;else if(H===Ee&&E+1<L&&h.charCodeAt(E+1)===Ee){for(W+=h.substring(k,E);E<L&&h.charCodeAt(E)!==10;)E++;k=E,qe=!0}else H===123?te++:H===125&&te--,E++;else je>0&&je--,E++;else je++,E++;else E++;else Se===0?Se=H:Se===H&&(Se=0),E++}return qe?(k<L&&(W+=h.substring(k)),te===0?W:aa(W)):te===0?h:aa(h)}(x);let T=Ll(S||A?S+" "+A+" { "+N+" }":N);return e.namespace&&(T=Jo(T,e.namespace)),s=[],Mt(T,c),s},p=e;let g=ga;for(let x=0;x<t.length;x++)t[x].name||st(15),g=Me(g,t[x].name);return p!=null&&p.namespace&&(g=Me(g,p.namespace)),p!=null&&p.prefix&&(g=Me(g,"p")),l.hash=g!==ga?g.toString():"",l}const Td=new lt,va=Md(),Zo=Z.createContext({shouldForwardProp:void 0,styleSheet:Td,stylis:va,stylisPlugins:void 0});Zo.Consumer;function Qo(){return Z.useContext(Zo)}const Ja=Z.createContext(void 0);Ja.Consumer;const Ir=Object.prototype.hasOwnProperty,ra={};function _d(e,t){const a=typeof e!="string"?"sc":Do(e);ra[a]=(ra[a]||0)+1;const r=a+"-"+Ha(Bt+a+ra[a]);return t?t+"-"+r:r}function jd(e,t,a){const r=Ka(e),o=e,n=!ba(e),{attrs:i=Wa,componentId:s=_d(t.displayName,t.parentComponentId),displayName:c=Zl(e)}=t,l=t.displayName&&t.componentId?Do(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&o.attrs?o.attrs.concat(i).filter(Boolean):i;let{shouldForwardProp:g}=t;if(r&&o.shouldForwardProp){const v=o.shouldForwardProp;if(t.shouldForwardProp){const N=t.shouldForwardProp;g=(T,h)=>v(T,h)&&N(T,h)}else g=v}const x=new Ad(a,l,r?o.componentStyle:void 0);function A(v,N){return function(T,h,B){const{attrs:X,componentStyle:L,defaultProps:W,foldedComponentIds:k,styledComponentId:E,target:Se}=T,je=Z.useContext(Ja),te=Qo(),qe=T.shouldForwardProp||te.shouldForwardProp,H=Lo(h,je,W)||Ue;let ue,Ve;{const me=Z.useRef(null),ne=me.current;if(ne!==null&&ne[1]===H&&ne[2]===te.styleSheet&&ne[3]===te.stylis&&ne[7]===L&&function(ze,ie,ae){const re=ze,J=ie;let pt=0;for(const ke in J)if(Ir.call(J,ke)&&(pt++,re[ke]!==J[ke]))return!1;return pt===ae}(ne[0],h,ne[4]))ue=ne[5],Ve=ne[6];else{ue=function(ie,ae,re){const J=Object.assign(Object.assign({},ae),{className:void 0,theme:re}),pt=ie.length>1;for(let ke=0;ke<ie.length;ke++){const Ht=ie[ke],ft=ct(Ht)?Ht(pt?Object.assign({},J):J):Ht;for(const ge in ft)ge==="className"?J.className=Je(J.className,ft[ge]):ge==="style"?J.style=Object.assign(Object.assign({},J.style),ft[ge]):ge in ae&&ae[ge]===void 0||(J[ge]=ft[ge])}return"className"in ae&&typeof ae.className=="string"&&(J.className=Je(J.className,ae.className)),J}(X,h,H),Ve=L.generateAndInjectStyles(ue,te.styleSheet,te.stylis);let ze=0;for(const ie in h)Ir.call(h,ie)&&ze++;me.current=[h,H,te.styleSheet,te.stylis,ze,ue,Ve,L]}}const dt=ue.as||Se,Wt=function(me,ne,ze,ie){const ae={};for(const re in me)me[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&me.theme===ze||(re==="forwardedAs"?ae.as=me.forwardedAs:ie&&!ie(re,ne)||(ae[re]=me[re]));return ae}(ue,dt,H,qe);let Yt=Je(k,E);return Ve&&(Yt+=" "+Ve),ue.className&&(Yt+=" "+ue.className),Wt[ba(dt)&&dt.includes("-")?"class":"className"]=Yt,B&&(Wt.ref=B),O.createElement(dt,Wt)}(S,v,N)}A.displayName=c;let S=Z.forwardRef(A);return S.attrs=p,S.componentStyle=x,S.displayName=c,S.shouldForwardProp=g,S.foldedComponentIds=r?Je(o.foldedComponentIds,o.styledComponentId):"",S.styledComponentId=l,S.target=r?o.target:e,Object.defineProperty(S,"defaultProps",{get(){return this._foldedDefaultProps},set(v){this._foldedDefaultProps=r?function(N,...T){for(const h of T)ha(N,h,!0);return N}({},o.defaultProps,v):v}}),Xa(S,()=>`.${S.styledComponentId}`),n&&Go(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}var zd=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Cr(e,t){const a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}const Rr=e=>(Vo.add(e),e);function Ut(e,...t){if(ct(e)||ot(e))return Rr(ye(Cr(Wa,[e,...t])));const a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?ye(a):Rr(ye(Cr(a,t)))}function ya(e,t,a=Ue){if(!t)throw st(1,t);const r=(o,...n)=>e(t,a,Ut(o,...n));return r.attrs=o=>ya(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>ya(e,t,Object.assign(Object.assign({},a),o)),r}const en=e=>ya(jd,e),u=en;zd.forEach(e=>{u[e]=en(e)});class Id{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const n=r[o];if(ct(n)&&!Ka(n))return!1}return!0}(t),lt.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){const n=this.componentId;if(this.isStatic){if(r.hasNameForId(n,n+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{const s=this.computeRules(t,a,r,o);r.insertRules(n,s.name,s.rules)}return}const i=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&i){const s=i.rules,c=this.instanceRules.get(t).rules;if(s.length===c.length){let l=!0;for(let p=0;p<s.length;p++)if(s[p]!==c[p]){l=!1;break}if(l)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){const n=_t(ye(this.rules,a,r,o)),i={name:this.componentId+t,rules:o(n,"")};return this.instanceRules.set(t,i),i}rebuildGroup(t){const a=this.componentId;t.clearRules(a);for(const r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}}function tn(e,...t){const a=Ut(e,...t),r=`sc-global-${Ha(JSON.stringify(a))}`,o=new Id(a,r),n=s=>{const c=Qo(),l=Z.useContext(Ja);let p;{const g=Z.useRef(null);g.current===null&&(g.current=c.styleSheet.allocateGSInstance(r)),p=g.current}c.styleSheet.server&&i(p,s,c.styleSheet,l,c.stylis);{const g=o.isStatic?[p,c.styleSheet,o]:[p,s,c.styleSheet,l,c.stylis,o],x=Z.useRef(o);Z.useLayoutEffect(()=>{c.styleSheet.server||(x.current!==o&&(c.styleSheet.clearRules(r),x.current=o),i(p,s,c.styleSheet,l,c.stylis))},g),Z.useLayoutEffect(()=>()=>{c.styleSheet.server||o.removeStyles(p,c.styleSheet)},[p,c.styleSheet,o])}return c.styleSheet.server&&o.instanceRules.delete(p),null};function i(s,c,l,p,g){if(o.isStatic)o.renderStyles(s,Vl,l,g);else{const x=Object.assign(Object.assign({},c),{theme:Lo(c,p,n.defaultProps)});o.renderStyles(s,x,l,g)}}return Z.memo(n)}var an;class Cd{constructor(t,a){this[an]=!0,this.inject=(r,o=va)=>{const n=this.getName(o);if(!r.hasNameForId(this.id,n)){const i=o(this.rules,n,"@keyframes");r.insertRules(this.id,n,i)}},this.name=t,this.id=Po+t,this.rules=a,Xe(this.id),Xa(this,()=>{throw st(12,String(this.name))})}getName(t=va){return t.hash?this.name+Ya(+t.hash>>>0):this.name}}function ru(e,...t){const a=_t(Ut(e,...t)),r=Ha(a);return new Cd(r,a)}an=Wo;const Rd=[{keys:["?"],action:"help",label:"Abrir a ajuda e os atalhos"},{keys:["Enter"],action:"focus-chat",label:"Escrever no chat"},{keys:["L"],action:"tool:free",label:"Lápis (desenho livre)"},{keys:["R"],action:"tool:measure",label:"Régua: medir distância"},{keys:["T"],action:"tool:text",label:"Texto no mapa"},{keys:["E"],action:"tool:erase",label:"Borracha"},{keys:["+"],action:"zoom-in",label:"Aproximar o mapa"},{keys:["-"],action:"zoom-out",label:"Afastar o mapa"},{keys:["0"],action:"zoom-reset",label:"Ver o mapa inteiro"},{keys:["M"],action:"toggle-mode",label:"Alternar visão de Mestre e de jogador",gmOnly:!0},{keys:["[","]"],action:null,label:"Girar o seu token (aponta a lanterna de mão)"},{keys:["S"],action:"stream",label:"Modo streaming (visão limpa para transmitir)"},{keys:["Esc"],action:null,label:"Sair da ferramenta ou desmarcar tokens"},{keys:["Ctrl","Z"],action:null,label:"Desfazer desenho"},{keys:["Ctrl","Y"],action:null,label:"Refazer desenho"},{keys:["roda"],action:null,label:"Zoom no ponto do cursor (Shift+roda desloca)"}],Nd={"?":"help",enter:"focus-chat",l:"tool:free",r:"tool:measure",t:"tool:text",e:"tool:erase","+":"zoom-in","=":"zoom-in","-":"zoom-out",0:"zoom-reset",m:"toggle-mode",s:"stream","[":"rotate-left","]":"rotate-right"};function Od(e){if(!e)return!1;const t=String(e.tagName||"").toUpperCase();return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||!!e.isContentEditable}function ou(e,{isGm:t=!1}={}){var r,o,n;if(!e||e.ctrlKey||e.metaKey||e.altKey||e.repeat||Od(e.target)||(o=(r=e.target)==null?void 0:r.closest)!=null&&o.call(r,'[role="dialog"]'))return null;const a=Nd[String(e.key||"").toLowerCase()]||null;return a==="focus-chat"&&!["BODY","HTML"].includes(String(((n=e.target)==null?void 0:n.tagName)||"").toUpperCase())||a==="toggle-mode"&&!t?null:a}const $d=Ea(f.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9"}),"CasinoRounded");function Nr(e){let t=String(e).replace("#","");t.length===3&&(t=[...t].map(n=>n+n).join(""));const[a,r,o]=[0,2,4].map(n=>parseInt(t.slice(n,n+2),16)/255).map(n=>n<=.03928?n/12.92:((n+.055)/1.055)**2.4);return .2126*a+.7152*r+.0722*o}const rn=["06070b","090a0d","0a0b0e","0a0b0f","0b0c10","0d0e12","0e0f13","0f1014","0f1a14","101116","111217","111318","121419","14161b","14161c","15171c","15232d","17191f","191b21","1a1209","1a1c22","1b1915","1b1d23","1b1d25","1d2027","1f2128","1f222a","20232b","211d37","21665f","242730","245a43","252831","26211b","262931","287a73","2a1d22","2a2118","2a2620","2a2d36","2a2e38","2d1e16","2d3038","343846","363943","3a3d46","3a3d48","3a3e48","3aa673","3d2864","3f8f66","434753","4b3777","4b4f5c","4fd1c5","503c1e","554376","555b66","56d28b","57d68d","5b2a30","6249c0","63d59a","666b76","6753bd","6b5a44","6d52be","6f59cf","7358d0","75d49b","7a552a","7d62ce","7e838f","848995","858a95","858b96","888d98","8a6230","8a8f99","8c2228","8c919b","8c919c","8cddb0","8d929d","8e6bff","8e7fd6","8e939e","8f86c9","8fd8b0","8fe3ae","9296a0","9297a3","9677ff","979aa5","9a4a5e","9a7bff","9a9ea8","9a9faa","9b7bff","9b7d7a","9c4ef3","9d93c9","9de4b9","9ea2ac","9edeb8","9fd8ff","9ff0e7","a0a5af","a28af3","a78cff","a795ff","a7abb4","a83a43","a8acb6","a995ff","a9a0ff","a9a4b8","a9adb6","aaa0ef","aeb2ba","b2b5be","b2b5bf","b35a6e","b7bac2","b8aaff","b98b67","b9abff","b9b8b6","b9bbc2","b9bcc5","be4372","beb2ff","bfc0c7","bfc1c7","c4b4ff","c6b9ff","c9c3ff","c9c9ca","cbbcff","cdbfff","cdeedb","cfc4ff","cfc8f5","d0ced0","d4ccff","d6d1c6","d6d4d0","d8cfff","d8d0ff","d8d2ff","d8d4cc","d9ccff","d9d6d3","db9189","dbd1ff","dcd9d2","ddd5ff","ddd8e6","dedbd3","dedbe1","e2b48d","e4e2dc","e58f48","e6dccb","e7e5e2","e7e6e4","e8d8b8","e8dccb","e8e6e1","e9d9ff","e9e3da","e9e4d9","e9e7e2","eab9b3","ebe5ff","ec9741","eceae4","edd8d5","eeece8","ef756a","efb1ab","efbd86","f04f4a","f07970","f09b95","f0a29b","f0ad61","f0bd86","f0e8d9","f0ece4","f0eeea","f1b17e","f1edff","f1efeb","f2ba85","f3a29b","f3b37d","f3b3aa","f3c48f","f3ead7","f4f2ef","f54843","f5f0e9","f8f7f5","fa6357","ffc896","ffd2cc","ffd38e","ffd49a","ffd9a8","ffe1b8","ffffff"],on=[{id:"dark",label:"Escuro"},{id:"light",label:"Claro"},{id:"system",label:"Seguir o sistema"}],Za=[{id:"violet",label:"Violeta",shift:0,swatch:"#9b7bff"},{id:"blue",label:"Azul",shift:-40,swatch:"#5f95ff"},{id:"teal",label:"Verde-água",shift:-100,swatch:"#3fbdb8"},{id:"green",label:"Verde",shift:-140,swatch:"#5fbf6a"},{id:"pink",label:"Rosa",shift:60,swatch:"#e46fb8"}];function Qa(e){return on.some(t=>t.id===e)?e:"dark"}function er(e){return Za.some(t=>t.id===e)?e:"violet"}const Pd=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,Ld=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;function tr(e){const t=e.replace("#",""),[a,r,o]=[0,2,4].map(g=>Pd(parseInt(t.slice(g,g+2),16)/255)),n=Math.cbrt(.4122214708*a+.5363325363*r+.0514459929*o),i=Math.cbrt(.2119034982*a+.6806995451*r+.1073969566*o),s=Math.cbrt(.0883024619*a+.2817188376*r+.6299787005*o),c=.2104542553*n+.793617785*i-.0040720468*s,l=1.9779984951*n-2.428592205*i+.4505937099*s,p=.0259040371*n+.7827717662*i-.808675766*s;return{l:c,c:Math.hypot(l,p),h:(Math.atan2(p,l)*180/Math.PI+360)%360}}function Or({l:e,c:t,h:a}){const r=t*Math.cos(a*Math.PI/180),o=t*Math.sin(a*Math.PI/180),n=(e+.3963377774*r+.2158037573*o)**3,i=(e-.1055613458*r-.0638541728*o)**3,s=(e-.0894841775*r-1.291485548*o)**3;return[4.0767416621*n-3.3077115913*i+.2309699292*s,-1.2684380046*n+2.6097574011*i-.3413193965*s,-.0041960863*n-.7034186147*i+1.707614701*s]}function wa(e){const t=r=>Or({...e,c:r}).every(o=>o>=-5e-4&&o<=1.0005);let a=e.c;if(!t(a)){let r=0;for(let o=0;o<24;o+=1){const n=(r+a)/2;t(n)?r=n:a=n}a=r}return`#${Or({...e,c:a}).map(r=>Math.round(Math.min(1,Math.max(0,Ld(Math.min(1,Math.max(0,r)))))*255).toString(16).padStart(2,"0")).join("")}`}function Dd(e){const{c:t,h:a}=tr(e);return t>.05&&a>=270&&a<=315}const He=[[0,1],[.1,.99],[.35,.89],[.5,.6],[.7,.38],[1,.05]];function Fd(e){for(let t=1;t<He.length;t+=1){const[a,r]=He[t],[o,n]=He[t-1];if(e<=a)return n+(e-o)/(a-o)*(r-n)}return He[He.length-1][1]}function Bd(e){const t=tr(e);if(t.c>.06&&t.l>=.35&&t.l<=.58)return`#${e.replace("#","").toLowerCase()}`;let a=Fd(t.l);return t.c>.06&&t.l>.5&&(a=Math.max(a,.47)),wa({...t,l:a,c:t.l<.35?t.c*.5:t.c})}function Ud(e,t){const a=tr(e),r=Nr(e),o=(a.h+t+360)%360;let n=0,i=1,s=wa({...a,h:o});for(let c=0;c<22;c+=1){const l=(n+i)/2;s=wa({...a,l,h:o}),Nr(s)<r?n=l:i=l}return s}function Gd(e,{theme:t="dark",accent:a="violet"}={}){const r=Za.find(n=>n.id===er(a)).shift;let o=`#${e.replace("#","").toLowerCase()}`;return r&&Dd(o)&&(o=Ud(o,r)),t==="light"?Bd(o):o}function qd(e,t=!1){const a=Qa(e);return a==="system"?t?"light":"dark":a}function Vd(e={}){return`:root{${rn.map(a=>`--c-${a}:${Gd(a,e)};`).join("")}}`}const Wd=new Set(rn);function St(e){if(typeof e!="string"||!/^#[0-9a-fA-F]{6}$/.test(e))return e;const t=e.slice(1).toLowerCase();return Wd.has(t)?`var(--c-${t})`:e}function Yd({theme:e,accent:t}={},a=typeof document<"u"?document:null){var i,s;if(!a)return;const r=!!((s=(i=a.defaultView)==null?void 0:i.matchMedia)!=null&&s.call(i,"(prefers-color-scheme: light)").matches),o=qd(e,r);let n=a.getElementById("nighttable-theme");n||(n=a.createElement("style"),n.id="nighttable-theme",a.head.appendChild(n)),n.textContent=Vd({theme:o,accent:t}),a.documentElement.dataset.theme=o,a.documentElement.style.colorScheme=o}const Hd=tn`
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
`,nu=u.div`
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
`,iu=u.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 20px;
  border-bottom: 1px solid var(--border);
  background: color-mix(in srgb, var(--c-0a0b0f) 95%, transparent);
  position: relative;
  z-index: 10;
`,Kd=u.div`
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 220px;
`,Xd=u.div`
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(135deg, var(--c-fa6357), var(--c-9c4ef3));
  border-radius: 10px 10px 10px 3px;
  box-shadow: 0 8px 22px color-mix(in srgb, var(--c-be4372) 24%, transparent);
`,Jd=u.div`
  display: grid;
  gap: 1px;
  line-height: 1;
  strong { font-size: 15px; letter-spacing: -0.04em; }
  span { color: var(--c-8d929d); font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; }
`,su=u.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--c-111318);
`,cu=u.button`
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
`,lu=u.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-width: 220px;
`,du=u.div`
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
`,pu=u.div`
  min-height: 0;
  display: grid;
  grid-template-columns: var(--dock-width) ${({$leftHidden:e})=>e?"0px":"calc(var(--left-rail) * var(--rail-scale, 1))"} minmax(0, 1fr) ${({$drawerOpen:e})=>e?"calc(var(--right-rail, 332px) * var(--rail-scale, 1) + var(--gm-nav, 0px) * var(--gm-nav-room, 1) * var(--text-zoom, 1))":"calc(54px * var(--text-zoom, 1))"};
  transition: grid-template-columns 220ms ease;
`,nn=Ut`
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
`,fu=u.nav`
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
  ${nn}
`,uu=u.aside`
  min-width: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
  background: var(--c-101116);
  /* Em telas baixas as seções não se sobrepõem: a coluna inteira rola. */
  overflow-x: hidden;
  overflow-y: auto;
`,Zd=u.section`
  flex: 0 0 auto;
  padding: 17px 16px;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 6.5%, transparent);
  @media (max-height: 760px) and (min-width: 761px) { padding-top: 12px; padding-bottom: 12px; }
  /* Com o chat fechado, o log ocupa o espaço que sobra na coluna. */
  ${({$grow:e})=>e&&"flex: 1 1 auto; min-height: 0; display: flex; flex-direction: column;"}
`,mu=u.div`
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
`,gu=u.div`
  display: grid;
  gap: 9px;
  max-height: clamp(120px, 30vh, 320px);
  overflow-y: auto;
  padding-right: 3px;
`,bu=u.div`
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
`,hu=u.div`
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
`,xu=u.div`
  min-width: 0;
  flex: 1;
  display: grid;
  gap: 2px;
  strong { overflow: hidden; color: var(--c-e7e6e4); font-size: 12px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { overflow: hidden; color: var(--c-8d929d); font-size: 10px; text-overflow: ellipsis; white-space: nowrap; }
`,vu=u.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({$online:e})=>e?"var(--c-56d28b)":"var(--c-555b66)"};
  box-shadow: ${({$online:e})=>e?"0 0 0 3px color-mix(in srgb, var(--c-56d28b) 10%, transparent)":"none"};
`,yu=u(Zd)`
  /* Sem min-height: 0 — a seção nunca fica menor que o próprio conteúdo (e não invade o log). */
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`,wu=u.div`
  flex: 1 1 0;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 3px;
  .chat-older { align-self: center; padding: 4px 10px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent); border-radius: 999px; color: var(--c-b9abff); background: var(--c-17191f); font-size: 10px; cursor: pointer; }
`,Su=u.div`
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
`,ku=u.div`
  min-height: 14px;
  margin-top: 8px;
  color: var(--c-8f86c9);
  font-size: 10px;
  font-style: italic;
  &:empty { visibility: hidden; }
`,Au=u.form`
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
`,Eu=u.div`
  max-height: ${({$grow:e})=>e?"none":"clamp(72px, 16vh, 142px)"};
  ${({$grow:e})=>e&&"flex: 1 1 0; min-height: 72px;"}
  display: flex;
  flex-direction: column;
  gap: 9px;
  overflow-y: auto;
`,Mu=u.div`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 6px;
  color: var(--c-848995);
  font-size: 10px;
  line-height: 1.35;
  .icon { color: ${({$accent:e})=>St(e)||"var(--c-9a9faa)"}; margin-top: 1px; }
  time { display: block; margin-top: 3px; color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 8px; }
`,Tu=u.main`
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: var(--c-0e0f13);
`,_u=u.div`
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
`,ju=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 1 180px;
  min-width: 0;
  .scene-icon { width: 31px; height: 31px; display: grid; place-items: center; border-radius: 9px; color: var(--c-e9d9ff); background: color-mix(in srgb, var(--c-9677ff) 14%, transparent); }
  .text { min-width: 0; display: grid; gap: 3px; }
  strong { overflow: hidden; color: var(--c-f1efeb); font-size: 14px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  span { color: var(--c-8d929d); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.04em; text-transform: uppercase; }
`,zu=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,Iu=u.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
`;const Cu=u.span`
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
`,Ru=u.div`
  display: flex;
  gap: 4px;
  margin: -4px 0 9px;
  button { padding: 3px 6px; border: 1px solid transparent; border-radius: 5px; color: var(--c-8d929d); background: transparent; cursor: pointer; font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; }
  button.active { color: var(--c-d8d0ff); border-color: color-mix(in srgb, var(--c-9b7bff) 28%, transparent); background: color-mix(in srgb, var(--c-9b7bff) 10%, transparent); }
`,Nu=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
`,Ou=u.div`
  display: grid;
  gap: 6px;
`,$u=u.div`
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
`,Pu=u.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 5px;
  border-radius: 5px;
  color: var(--c-eab9b3);
  background: color-mix(in srgb, var(--c-f04f4a) 10%, transparent);
  font-size: 8px;
`,Lu=u.button`
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
`,Du=u.span`
  min-width: 43px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  text-align: center;
`,Fu=u.div`
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 18px;
  background: radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--c-554376) 11%, transparent), transparent 52%), var(--c-0d0e12);
`,Bu=u.div`
  position: relative;
  min-height: 460px;
  height: 100%;
  min-width: 670px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 16px;
  background: #13151a;
  box-shadow: 0 25px 80px rgba(0,0,0,0.34), inset 0 0 0 1px rgba(255,255,255,0.025);
`,Uu=u.div`
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
`,q={objects:2,tokens:3,drawings:4,fog:5,partyAboveFog:6,fogEditor:7,interface:8},Gu=u.svg`
  position: absolute;
  inset: 0;
  z-index: ${q.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .fog-fill { fill: ${({$gm:e})=>e?"rgba(6, 7, 11, 0.5)":"rgba(6, 7, 11, 0.97)"}; }
  .fog-region { fill: none; stroke: rgba(240, 173, 97, 0.65); stroke-width: 1.5; stroke-dasharray: 6 5; }
  .fog-draft { fill: ${({$hide:e})=>e?"rgba(240, 79, 74, 0.16)":"rgba(255, 220, 160, 0.14)"}; stroke: ${({$hide:e})=>e?"#f07970":"#ffd49a"}; stroke-width: 1.5; stroke-dasharray: 4 4; }
`,qu=u.svg`
  position: absolute;
  inset: 0;
  z-index: ${q.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .dark-area { fill: ${({$gm:e})=>e?"rgba(4, 5, 9, 0.55)":"#040509"}; stroke: ${({$gm:e})=>e?"rgba(185, 139, 103, 0.8)":"none"}; stroke-width: 1.5; stroke-dasharray: 6 4; }
  .dark-area.open { fill: rgba(4, 5, 9, 0.12); }
  .dark-area.draft { fill: rgba(4, 5, 9, 0.45); stroke: #e2b48d; }
`,Vu=u.svg`
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
`,Wu=u.svg`
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
`,Yu=u.div`
  position: absolute;
  inset: 0;
  z-index: ${q.fogEditor};
  cursor: ${({$tool:e})=>e==="text"?"text":"crosshair"};
  touch-action: none;
`,Hu=u.div`
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
`,Ku=u.svg`
  position: absolute;
  inset: 0;
  z-index: ${q.fog};
  width: 100%;
  height: 100%;
  pointer-events: none;
  .vision-dark { fill: ${({$gm:e})=>e?"rgba(4, 5, 9, 0.38)":"rgba(4, 5, 9, 0.95)"}; }
`,Xu=u.svg`
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
`,Ju=u.div`
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
`,Zu=u.div`
  position: absolute;
  z-index: ${q.partyAboveFog};
  border: 2px dashed ${({$fired:e,$draft:t})=>t?"#9ff0e7":e?"rgba(111,116,127,0.7)":"rgba(79,209,197,0.8)"};
  border-radius: 8px;
  background: ${({$fired:e,$draft:t})=>t?"rgba(79,209,197,0.16)":e?"rgba(111,116,127,0.06)":"rgba(79,209,197,0.07)"};
  pointer-events: none;
  span { position: absolute; top: 4px; left: 6px; padding: 2px 6px; border-radius: 5px; color: ${({$fired:e})=>e?"#9a9faa":"#bff6ef"}; background: rgba(8, 20, 20, 0.75); font-family: 'DM Mono', monospace; font-size: 9px; white-space: nowrap; }
`,Qu=u.div`
  position: absolute;
  inset: 0;
  z-index: ${q.fogEditor};
  cursor: crosshair;
  touch-action: none;
`,em=u.div`
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
`,tm=u.span`
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
`,am=u.div`
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
`,rm=u.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.025) 50%, transparent 75%);
  mix-blend-mode: screen;
`,om=u.div`
  position: absolute;
  top: 22px;
  left: 24px;
  z-index: ${q.interface};
  display: grid;
  gap: 4px;
  pointer-events: none;
  .eyebrow { color: rgba(242, 218, 176, 0.66); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; }
  strong { color: rgba(255, 244, 222, 0.78); font-size: 21px; font-weight: 500; letter-spacing: -0.04em; }
`,nm=u.div`
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
`,im=u.button`
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
  .marker-pinned { position: absolute; left: -6px; bottom: -6px; width: 16px; height: 16px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; color: #e7e3da; background: #3a3f4b; }
  .marker-lock { position: absolute; right: -6px; bottom: -6px; width: 18px; height: 18px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; color: #1a1209; background: #f3b37d; }
`,oa=({$monster:e,$activeTurn:t,$marked:a,$selected:r})=>r?"0 0 0 3px #9b7bff, 0 0 0 8px rgba(155,123,255,0.3)":t?"0 0 0 4px rgba(240,173,97,0.85), 0 0 22px rgba(240,173,97,0.55)":a?"0 0 0 4px rgba(255,212,154,0.55)":`0 0 0 5px ${e?"rgba(240,79,74,0.12)":"rgba(233,228,217,0.11)"}`,sm=u.button`
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
  box-shadow: ${oa}, 0 12px 22px rgba(0,0,0,0.34);
  opacity: ${({$hiddenToken:e})=>e?.72:1};
  filter: ${({$defeated:e})=>e?"grayscale(1) brightness(0.6)":"none"};
  cursor: ${({$draggable:e})=>e?"grab":"default"};
  transform: translate(-50%, -50%);
  /* Quem vê o token de outra pessoa acompanha o movimento suavizado; quem arrasta vê o token preso ao cursor. */
  transition: ${({$dragging:e})=>e?"":"left 140ms linear, top 140ms linear, "}box-shadow 160ms ease, filter 160ms ease, opacity 160ms ease;
  &:active { cursor: ${({$draggable:e})=>e?"grabbing":"default"}; }
  &:hover { box-shadow: ${oa}, 0 0 0 9px rgba(233,228,217,0.08), 0 12px 22px rgba(0,0,0,0.42); }
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
  &[data-bare='true']:not(:hover) { box-shadow: ${e=>e.$selected||e.$activeTurn||e.$marked?oa(e):"none"}; }
  &[data-bare='true'] .token-face { overflow: visible; border-radius: 0; }
  &[data-bare='true'] .token-avatar { border-radius: 0; object-fit: contain; transform: scale(1.2); filter: drop-shadow(0 2px 2px rgb(0 0 0 / 55%)); }
  .token-avatar.cutout { border-radius: 0; object-fit: contain; transform: translateY(-14%) scale(1.25); filter: drop-shadow(0 2px 2px rgb(0 0 0 / 55%)); }
  .token-defeated { position: absolute; inset: -2px; display: grid; place-items: center; border-radius: 50%; color: #f07970; font-size: 22px; font-weight: 700; line-height: 1; pointer-events: none; }
  .token-turn { position: absolute; top: -9px; right: -9px; min-width: 17px; height: 17px; display: grid; place-items: center; padding: 0 4px; border-radius: 999px; color: #1a1209; background: #f3b37d; font-family: 'DM Mono', monospace; font-size: 8px; font-weight: 700; pointer-events: none; }
  .token-conditions { position: absolute; top: calc(100% + 19px); left: 50%; transform: translateX(-50%); display: flex; gap: 3px; pointer-events: none; }
  .token-conditions span { padding: 2px 5px; border-radius: 4px; color: #ffd2cc; background: rgba(140, 34, 40, 0.85); font-size: 7px; white-space: nowrap; }
`,cm=u.div`
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
`,lm=u.aside`
  min-width: 0;
  border-left: 1px solid var(--border);
  background: var(--c-111217);
  overflow: hidden;
`,dm=u.div`
  width: 54px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 18px;
`,pm=u.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,fm=u.div`
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
`,um=u.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  & > :first-child { margin-top: 0; }
  /* Ferramenta aberta pelo índice do Mestre pisca por um instante. */
  [data-flash='true'] { border-radius: 12px; box-shadow: 0 0 0 2px var(--c-9b7bff); transition: box-shadow 200ms ease; }
`,mm=u.div`
  height: 100%;
  display: flex;
  & > div:first-child { flex: 1; min-width: 0; }
`,gm=u.nav`
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
  ${nn}
  /* Grupos com o nome embaixo do ícone, para achar sem precisar passar o mouse. */
  button.nav-group { width: 48px; height: 44px; align-content: center; gap: 2px; }
  .nav-label { display: block; max-width: 46px; overflow: hidden; font-size: 8.5px; line-height: 1; letter-spacing: 0; text-overflow: ellipsis; white-space: nowrap; }
`,bm=u.nav`
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
`,hm=u.label`
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
`,xm=u.div`
  padding: 14px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 12px;
  background: ${({$tint:e})=>e||"var(--c-17191f)"};
`,vm=u.div`
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
`,ym=u.div`
  display: grid;
  gap: 6px;
  margin-top: 15px;
  .label { display: flex; align-items: center; justify-content: space-between; color: var(--c-8c919c); font-size: 10px; }
  .label strong { color: var(--c-e8e6e1); font-family: 'DM Mono', monospace; font-size: 10px; }
  .track { height: 6px; overflow: hidden; border-radius: 999px; background: var(--c-262931); }
  .fill { width: ${({$value:e})=>`${e}%`}; height: 100%; border-radius: inherit; background: ${({$color:e})=>e||"var(--c-f04f4a)"}; box-shadow: 0 0 14px ${({$glow:e})=>e||"color-mix(in srgb, var(--c-f04f4a) 25%, transparent)"}; }
`,wm=u.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin-top: 16px;
`,Qd=u.div`
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
`,Sm=u.button`
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
  ${Qd}:hover & { opacity: 1; transform: translateY(0); }
  &:hover { color: var(--c-ffffff); background: color-mix(in srgb, var(--c-9b7bff) 32%, transparent); }
`,km=u.div`
  margin-top: 18px;
  .section-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; color: var(--c-7e838f); font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; }
  .section-title button:hover { color: var(--c-d4ccff); }
  /* Recolhida: só o título fica à mostra. */
  &:has(> .section-title[data-collapsed='true']) > :not(.section-title) { display: none; }
  .section-title[data-collapsed='true'] { margin-bottom: 0; }
  /* Em destaque (cenas da campanha). */
  &[data-highlight='true'] { padding: 10px; border: 1px solid color-mix(in srgb, var(--c-f3b37d) 35%, transparent); border-radius: 12px; background: color-mix(in srgb, var(--c-f3b37d) 5%, transparent); }
  &[data-highlight='true'] > .section-title { color: var(--c-f3b37d); }
`,Am=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 5.5%, transparent);
  &:last-child { border-bottom: 0; }
  .skill-icon { width: 24px; height: 24px; display: grid; place-items: center; border-radius: 7px; color: var(--c-a995ff); background: color-mix(in srgb, var(--c-9b7bff) 11%, transparent); }
  .skill-name { flex: 1; color: var(--c-c9c9ca); font-size: 11px; }
`,ep=u.input`
  width: 100%;
  padding: 10px 11px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  outline: none;
  color: var(--c-e9e7e2);
  background: var(--c-15171c);
  font-size: 11px;
  &:focus { border-color: var(--c-b9abff); box-shadow: 0 0 0 3px color-mix(in srgb, var(--c-9b7bff) 10%, transparent); }
`,Em=u.label`
  display: grid;
  gap: 6px;
  color: var(--c-8c919b);
  font-size: 10px;
`,Mm=u.select`
  width: 100%;
  padding: 9px 10px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 9%, transparent);
  border-radius: 8px;
  outline: 0;
  color: var(--c-e9e7e2);
  background: var(--c-15171c);
  font-size: 11px;
  &:focus { border-color: color-mix(in srgb, var(--c-9b7bff) 70%, transparent); }
`,Tm=u.div`
  display: grid;
  grid-template-columns: 1fr 88px;
  gap: 8px;
  /* $stack: em telas estreitas os campos ficam um embaixo do outro (vence o grid-template-columns inline). */
  ${({$stack:e})=>e?"@media (max-width: 560px) { grid-template-columns: minmax(0, 1fr) !important; }":""}
`,_m=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,jm=u.button`
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
`,zm=u.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--c-ffffff) 5.5%, transparent);
  .track-icon { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 7px; color: ${({$active:e})=>e?"var(--c-f1b17e)":"var(--c-8e939e)"}; background: ${({$active:e})=>e?"color-mix(in srgb, var(--c-e58f48) 14%, transparent)":"var(--c-1b1d23)"}; }
  .track-name { flex: 1; color: var(--c-c9c9ca); font-size: 11px; }
`,Im=u.button`
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
`,Cm=u.div`
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
`,Rm=u.div`
  height: 100%;
  display: grid;
  place-items: center;
  padding: 24px;
  color: var(--c-8d929d);
  text-align: center;
  font-size: 11px;
`,Nm=u.span`
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
`,Om=u.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  > * { flex: 1; }
`,$m=u.p`
  margin: ${({$flush:e})=>e?"0":"9px 0 0"};
  color: var(--c-8d929d);
  font-size: 9px;
  line-height: 1.45;
`,Pm=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,Lm=u.button`
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
`,Dm=u.div`
  display: grid;
  gap: 7px;
`,Fm=u.button`
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
`,Bm=u.div`
  display: grid;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
`,Um=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`,Gm=u.button`
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
`,qm=u.span`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid ${({$accent:e})=>`color-mix(in srgb, ${St(e)||"var(--c-9b7bff)"} 40%, transparent)`};
  border-radius: 10px;
  color: ${({$accent:e})=>St(e)||"var(--c-b9abff)"};
  background: ${({$accent:e})=>`color-mix(in srgb, ${St(e)||"var(--c-9b7bff)"} 9%, transparent)`};
`,Vm=u.div`
  display: grid;
  gap: 6px;
  max-height: 166px;
  overflow-y: auto;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid color-mix(in srgb, var(--c-ffffff) 6%, transparent);
`,Wm=u.div`
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
`;u(ep)`
  padding: 8px 5px;
  text-align: center;
  font-family: 'DM Mono', monospace;
`;const Ym=u.div`
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
`,Hm=u.div`
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
`,Km=u.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
  color: #f4eefe;
  .total { font-size: 30px; font-weight: 700; letter-spacing: -.06em; }
  .math { color: #9da1ac; font-family: 'DM Mono', monospace; font-size: 10px; }
`,Xm=u.div`
  display: grid;
  gap: 14px;
  padding: 0 4px 8px;
  color: var(--c-b9bbc2);
`,Jm=u.div`
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
`;const Zm=tn`
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
`,tp=u.main`
  height: 100vh;
  height: 100dvh;
  display: grid;
  place-items: center;
  padding: 24px 16px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--c-9b7bff) 14%, transparent), transparent 40%), radial-gradient(circle at 75% 80%, color-mix(in srgb, var(--c-f04f4a) 10%, transparent), transparent 38%), var(--c-0a0b0f);
`,ap=u.form`
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
`,Qm=u(tp)`
  place-items: start center;
  padding: 32px 16px;
  @media (max-width: 760px) { padding: 16px; }
`,eg=u(ap)`
  width: min(100%, 1120px);
  gap: 18px;
  padding: 24px 28px;
  @media (max-width: 760px) { padding: 18px 16px; }
`,tg=u.div`
  display: grid;
  grid-template-columns: minmax(280px, 380px) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: minmax(0, 1fr); gap: 18px; }
`,ag=u.div`
  display: grid;
  gap: 13px;
  min-width: 0;
`,rg=u.section`
  display: grid;
  gap: 16px;
  min-width: 0;
  padding: 18px 20px;
  border: 1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent);
  border-radius: 12px;
  background: color-mix(in srgb, var(--c-ffffff) 1.5%, transparent);
  h2 { margin: 0; color: var(--c-e9e7e2); font-size: 15px; font-weight: 600; letter-spacing: -0.02em; }
  @media (max-width: 760px) { padding: 14px; }
`,og=u.div`
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
`,ng=u.div`
  display: grid;
  gap: 3px;
  strong { color: var(--c-d6d4d0); font-size: 12px; font-weight: 600; }
  span { color: var(--c-7e838f); font-size: 11px; line-height: 1.4; }
`,ig=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--c-8d929d);
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  &::before, &::after { content: ''; flex: 1; height: 1px; background: color-mix(in srgb, var(--c-ffffff) 8%, transparent); }
`,sg=u.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  button { padding: 0; border: 0; color: var(--c-b9abff); background: none; cursor: pointer; font-size: 11px; }
  button:hover { color: var(--c-ddd5ff); text-decoration: underline; }
`,cg=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--c-c9c9ca);
  font-size: 11px;
  .user-avatar { width: 26px; height: 26px; display: grid; place-items: center; overflow: hidden; border-radius: 8px; color: #fff; background: var(--c-6d52be); font-size: 10px; font-weight: 700; }
  .user-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .user-name { max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  @media (max-width: 900px) { .user-name { display: none; } }
`;function rp({kind:e}){const t=Et[e],a=ml(),r=e==="privacidade"?"termos":"privacidade";return O.useEffect(()=>{document.title=`${t.title} — NightTable`},[t.title]),f.jsxs(f.Fragment,{children:[f.jsx(Hd,{}),f.jsx("main",{style:{height:"100dvh",boxSizing:"border-box",padding:"32px 16px 56px",background:"var(--c-0a0b0f)",color:"var(--c-d6d4d0)",overflowY:"auto"},children:f.jsxs("article",{style:{maxWidth:720,margin:"0 auto",display:"grid",gap:18,lineHeight:1.6,fontSize:14},children:[f.jsx("a",{href:Le(),style:{textDecoration:"none"},children:f.jsxs(Kd,{children:[f.jsx(Xd,{children:f.jsx($d,{fontSize:"small"})}),f.jsxs(Jd,{children:[f.jsx("strong",{children:"NightTable"}),f.jsx("span",{children:"virtual tabletop"})]})]})}),f.jsxs("header",{children:[f.jsx("h1",{style:{margin:"0 0 4px",color:"var(--c-f4f2ef)",fontSize:26},children:t.title}),f.jsxs("p",{style:{margin:0,color:"var(--c-7e838f)",fontSize:12},children:["Última atualização: ",ul]})]}),f.jsx("p",{style:{margin:0},children:t.intro}),t.sections.map(([o,n])=>f.jsxs("section",{children:[f.jsx("h2",{style:{margin:"0 0 6px",color:"var(--c-c9c3ff)",fontSize:16},children:o}),f.jsx("ul",{style:{margin:0,paddingLeft:20,display:"grid",gap:6},children:n.map(i=>f.jsx("li",{children:i},i))})]},o)),f.jsxs("section",{children:[f.jsx("h2",{style:{margin:"0 0 6px",color:"var(--c-c9c3ff)",fontSize:16},children:"Contato"}),f.jsx("p",{style:{margin:0},children:a?f.jsxs(f.Fragment,{children:["Dúvidas, pedidos sobre seus dados ou denúncias: ",f.jsx("a",{href:a.includes("@")?`mailto:${a}`:a,style:{color:"var(--c-b9abff)"},children:a}),"."]}):"Dúvidas, pedidos sobre seus dados ou denúncias: fale com quem administra esta instalação do NightTable."})]}),f.jsxs("nav",{style:{display:"flex",gap:16,fontSize:12},children:[f.jsx("a",{href:Ao(r),style:{color:"var(--c-b9abff)"},children:Et[r].title}),f.jsx("a",{href:Le(),style:{color:"var(--c-b9abff)"},children:"Voltar ao NightTable"})]})]})})]})}function sn({style:e}){return f.jsx("p",{style:{margin:0,display:"flex",gap:12,flexWrap:"wrap",color:"var(--c-7e838f)",fontSize:11,...e},children:Object.entries(Et).map(([t,a])=>f.jsx("a",{href:Ao(t),target:"_blank",rel:"noopener",style:{color:"var(--c-9d93c9)"},children:a.title},t))})}const op=Object.freeze(Object.defineProperty({__proto__:null,LegalLinks:sn,default:rp},Symbol.toStringTag,{value:"Module"})),Gt={players:{label:"Jogadores na mesa",minimizable:!0},chat:{label:"Chat",minimizable:!0},log:{label:"Log da sessão",minimizable:!0,initial:"hidden"},minimap:{label:"Minimapa",minimizable:!1},legend:{label:"Legenda do mapa",minimizable:!1}},np=["players","chat","log"],ip=["open","min","hidden"];function fe(e){const t=e&&typeof e=="object"?e:{};return Object.fromEntries(Object.entries(Gt).map(([a,r])=>{const o=ip.includes(t[a])?t[a]:r.initial||"open";return[a,o==="min"&&!r.minimizable?"open":o]}))}function ar(e,t,a){return fe({...fe(e),[t]:a})}function lg(e,t){const a=fe(e)[t];return ar(e,t,a==="open"?"min":"open")}function sp(e,t){return fe(e)[t]!=="hidden"}function dg(e){const t=fe(e);return np.every(a=>t[a]==="hidden")}function pg(e){return Object.values(fe(e)).filter(t=>t==="hidden").length}function fg(){return Object.fromEntries(Object.keys(Gt).map(e=>[e,"hidden"]))}function ug(e,t){return ar(e,t,sp(e,t)?"hidden":"open")}function mg(){return Object.fromEntries(Object.keys(Gt).map(e=>[e,"open"]))}function nt(e){const t=e&&typeof e=="object"?e:{},a=Number(t.rate);return{narration:t.narration===!0,narrator:t.narrator===!0,voice:String(t.voice||"").slice(0,120),rate:Number.isFinite(a)?Math.min(1.6,Math.max(.6,Math.round(a*10)/10)):1}}function Sa(e){const t=a=>/^pt-BR/i.test(a.lang)?0:/^pt/i.test(a.lang)?1:2;return[...e||[]].sort((a,r)=>t(a)-t(r)||String(a.name).localeCompare(String(r.name)))}function cp(e,t){const a=Sa(e);return a.find(r=>r.name===t)||a.find(r=>/^pt/i.test(r.lang))||null}function gg(e){const t=String((e==null?void 0:e.title)||"").trim(),a=String((e==null?void 0:e.text)||"").trim();return t?!a||a===t?t:`${t}. ${a}`:a}const tt=()=>typeof window<"u"&&"speechSynthesis"in window&&typeof window.SpeechSynthesisUtterance=="function";function lp(e,t){const a=String(e||"").trim();if(!a||!tt())return!1;const{voice:r,rate:o}=nt(t),n=new window.SpeechSynthesisUtterance(a.slice(0,1200)),i=cp(window.speechSynthesis.getVoices(),r);return i&&(n.voice=i),n.lang=(i==null?void 0:i.lang)||"pt-BR",n.rate=o,window.speechSynthesis.speak(n),!0}function $r(){tt()&&window.speechSynthesis.cancel()}const rr=[{id:"normal",label:"Normal",zoom:1},{id:"large",label:"Grande",zoom:1.15},{id:"xlarge",label:"Muito grande",zoom:1.3}];function qt(e){return rr.some(t=>t.id===e)?e:"normal"}function cn(e){return rr.find(t=>t.id===qt(e)).zoom}function dp(e){return 1+(cn(e)-1)/2}function pp(e,t=typeof document<"u"?document.documentElement:null){t&&(t.style.setProperty("--text-zoom",String(cn(e))),t.style.setProperty("--rail-scale",String(dp(e))),t.dataset.textSize=qt(e))}const ln="nighttable-language",dn=[{value:"pt",label:"Português"},{value:"en",label:"English"}];function pn(e){return e==="en"?"en":"pt"}function Vt(e=globalThis.localStorage){try{return pn(e==null?void 0:e.getItem(ln))}catch{return"pt"}}function fp(e,t=globalThis.localStorage){try{t==null||t.setItem(ln,pn(e))}catch{}}function up(e){const t=new Map,a=new Map,r=[];for(const[i,s]of Object.entries(e)){if(!i.includes("{}")){t.set(i,s);continue}const c=i.split("{}"),l={regex:new RegExp(`^${c.map(Ti).join("([\\s\\S]*?)")}$`),value:s},p=c[0].slice(0,3);if(p.length<3){r.push(l);continue}a.has(p)||a.set(p,[]),a.get(p).push(l)}const o=(i,s)=>{let c=0;return i.replace(/\{(\d*)\}/g,(l,p)=>{const g=p?s[Number(p)-1]:s[c];return c+=1,n(g??"")??g??""})},n=i=>{if(t.has(i))return t.get(i);const s=a.get(i.slice(0,3));for(const c of[s,r])if(c)for(const l of c){const p=l.regex.exec(i);if(p)return o(l.value,p.slice(1))}return null};return i=>{if(typeof i!="string")return null;const s=i.trim();if(!s||!/[A-Za-zÀ-ú]/.test(s))return null;const c=n(s);if(c==null||c===s)return null;const l=i.indexOf(s);return i.slice(0,l)+c+i.slice(l+s.length)}}const Pr=["aria-label","title","placeholder","alt","aria-description","aria-valuetext"],mp=new Set(["SCRIPT","STYLE","TEXTAREA","CODE","PRE","svg"]);function na(e,t){for(let a=e;a&&a.nodeType===1;a=a.parentElement)if(t&&mp.has(a.tagName)||a.getAttribute("translate")==="no"||a.isContentEditable)return!0;return!1}function gp(e,t=document.body){const a=s=>{const c=e(s.data);c!=null&&c!==s.data&&!na(s.parentElement,!0)&&(s.data=c)},r=s=>{if(!na(s,!1)){for(const c of Pr){const l=s.getAttribute(c);if(!l)continue;const p=e(l);p!=null&&p!==l&&s.setAttribute(c,p)}if(s.tagName==="INPUT"&&(s.type==="button"||s.type==="submit")&&s.value){const c=e(s.value);c!=null&&(s.value=c)}}},o=s=>{if(s.nodeType===3){a(s);return}if(s.nodeType!==1||na(s,!1))return;r(s);const c=document.createTreeWalker(s,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:l=>l.nodeType===1&&l.getAttribute("translate")==="no"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});for(let l=c.nextNode();l;l=c.nextNode())l.nodeType===3?a(l):r(l)};o(t);const n=e(document.title);n&&(document.title=n);const i=new MutationObserver(s=>{for(const c of s)c.type==="characterData"?a(c.target):c.type==="attributes"?r(c.target):c.addedNodes.forEach(o)});return i.observe(t,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[...Pr,"value"]}),()=>i.disconnect()}async function bp(e=Vt()){var r;if(typeof document>"u"||(document.documentElement.lang=e==="en"?"en":"pt-BR",e!=="en"))return;const{default:t}=await we(async()=>{const{default:o}=await import("./en-j0Jal7t-.js");return{default:o}},[]),a=up(t);globalThis.__nighttableTranslate=a;for(const o of["confirm","prompt","alert"]){const n=(r=window[o])==null?void 0:r.bind(window);n&&(window[o]=(i,...s)=>n(typeof i=="string"?a(i)??i:i,...s))}gp(a,document.body)}function fn(e){e!==Vt()&&(fp(e),window.location.reload())}function bg({style:e}){const t=Vt();return f.jsx("div",{role:"radiogroup","aria-label":"Idioma · Language",translate:"no",style:{display:"inline-flex",gap:2,padding:2,border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:999,...e},children:dn.map(a=>f.jsx("button",{type:"button",role:"radio","aria-checked":t===a.value,title:a.label,onClick:()=>fn(a.value),style:{padding:"3px 8px",border:0,borderRadius:999,color:t===a.value?"var(--c-f4f2ef)":"var(--c-9a9faa)",background:t===a.value?"color-mix(in srgb, var(--c-8e6bff) 30%, transparent)":"transparent",fontSize:10,fontWeight:600,letterSpacing:".06em",cursor:"pointer"},children:a.value.toUpperCase()},a.value))})}const hp={bgcolor:"var(--c-17191f)",color:"var(--c-f4f2ef)",border:"1px solid color-mix(in srgb, var(--c-ffffff) 12%, transparent)",borderRadius:3},hg=(e,t="minWidth")=>({...hp,[t]:{xs:"calc(100% - 32px)",sm:e}}),xp={bgcolor:"var(--c-14161b)",color:"var(--c-e7e5e2)",border:"1px solid color-mix(in srgb, var(--c-ffffff) 8%, transparent)"},xg={bgcolor:"var(--c-1b1d23)",color:"var(--c-e9e7e2)",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)"},vp={textTransform:"none",bgcolor:"var(--c-7358d0)","&:hover":{bgcolor:"var(--c-6249c0)"}},vg={textTransform:"none",bgcolor:"var(--c-6d52be)","&:hover":{bgcolor:"var(--c-7d62ce)"}},yg={textTransform:"none",color:"var(--c-b9abff)",borderColor:"color-mix(in srgb, var(--c-9b7bff) 40%, transparent)"},wg={minWidth:0,px:.8,textTransform:"none",fontSize:9},Sg={color:"var(--c-aeb2ba)",textTransform:"none"},yp=Ea(f.jsx("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded"),wp={main:{gap:1.2,fontSize:18,fontWeight:600},form:{gap:1.2,fontSize:17,fontWeight:600},panel:{gap:1,fontSize:17}};function Sp({icon:e,children:t,onClose:a,closeLabel:r="Fechar",variant:o="main",sx:n,...i}){return f.jsxs(wn,{sx:{display:"flex",alignItems:"center",...wp[o],...n},...i,children:[e,t,a&&f.jsx(Sn,{"aria-label":r,onClick:a,sx:{ml:"auto",color:"var(--c-8e939e)"},children:f.jsx(yp,{})})]})}const kg=e=>f.jsx(qr,{dividers:!0,sx:{borderColor:"color-mix(in srgb, var(--c-ffffff) 8%, transparent)"},...e}),Ag=e=>f.jsx(kn,{sx:{px:3,py:2},...e}),Lr={player:[{title:"Bem-vindo à mesa",text:"O mapa fica no centro. Arraste o seu token para se mover; o Mestre controla a névoa e o que você enxerga."},{title:"Sua ficha",text:"No painel da direita estão sua ficha, armas e inventário. Clique em um atributo ou perícia para rolar os dados. Duplo clique no seu avatar (no mapa ou na lista) abre a ficha completa."},{title:"Sua tela, do seu jeito",text:"A barra de ícones na beirada esquerda mostra ou oculta jogadores, chat, log, ficha, minimapa e legenda. O modo limpo deixa só o mapa."},{title:"Conversa",text:"No chat, use @nome para chamar alguém, /w Nome para sussurrar e /gm para falar só com o Mestre. Passe o mouse numa mensagem para reagir."},{title:"Ferramentas do mapa",text:"A barra à esquerda do mapa tem lápis, régua e formas. Os desenhos aparecem para todos e somem sozinhos se forem temporários."},{title:"Atalhos",text:"Aperte ? a qualquer momento para ver os atalhos de teclado e reabrir este tutorial pelo botão de ajuda no topo."}],gm:[{title:"Visão do Mestre",text:"O painel da direita reúne tudo o que você controla: cena, tokens, objetos, iniciativa, áudio, handouts e regras."},{title:"Prepare as cenas",text:"Oculte o mapa dos jogadores enquanto prepara, salve o tabuleiro como cena e ative com um clique. O cartão de abertura aparece para todos."},{title:"Tokens e combate",text:"Coloque fichas no mapa, esconda inimigos, marque derrotados e use a iniciativa. Os geradores criam encontros prontos. Duplo clique num token abre a ficha dele."},{title:"Convide o grupo",text:"Compartilhe o código de convite. No lobby da campanha você escreve a descrição e marca as próximas sessões."},{title:"Atalhos e ajuda",text:"Aperte ? para ver os atalhos. M alterna entre a sua visão e a dos jogadores."}]},ka=e=>`nighttable-tutorial-v1:${e}`;function Eg(e){try{return window.localStorage.getItem(ka(e))==="done"}catch{return!0}}function Mg(e,t){try{t?window.localStorage.setItem(ka(e),"done"):window.localStorage.removeItem(ka(e))}catch{}}const kp=u.aside`
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
`;function Tg({role:e,onFinish:t}){const a=Lr[e]||Lr.player,[r,o]=O.useState(0),n=a[r],i=r===a.length-1;return f.jsxs(kp,{role:"dialog","aria-label":"Tutorial do NightTable",children:[f.jsxs("span",{className:"step",children:["primeiros passos · ",r+1,"/",a.length]}),f.jsx("h2",{children:n.title}),f.jsx("p",{children:n.text}),f.jsxs("div",{className:"actions",children:[f.jsx("div",{className:"dots","aria-hidden":"true",children:a.map((s,c)=>f.jsx("span",{className:c===r?"on":""},s.title))}),f.jsx(Oe,{onClick:t,size:"small",sx:{textTransform:"none",color:"var(--c-8e939e)",fontSize:11},children:"Pular"}),f.jsx(Oe,{onClick:()=>i?t():o(r+1),size:"small",variant:"contained",sx:{...vp,fontSize:11},children:i?"Começar":"Próximo"})]})]})}const Ap=u.span`
  display: inline-flex;
  gap: 3px;
  kbd { min-width: 20px; padding: 2px 6px; border: 1px solid color-mix(in srgb, var(--c-ffffff) 14%, transparent); border-bottom-width: 2px; border-radius: 5px; color: var(--c-f4f2ef); background: var(--c-1f222a); font-family: 'DM Mono', monospace; font-size: 10px; text-align: center; }
`,Ep=[["@Nome","Chama alguém (a mensagem fica destacada e toca um aviso para a pessoa)."],["/w Nome texto","Sussurro: só você, a pessoa e o Mestre leem."],["/gm texto","Mensagem privada para o Mestre."],["Falar como","Escolha seu personagem ao lado da caixa de texto para falar em personagem."]],Mp=[["2d6 + 3","Rola dois dados de 6 lados e soma 3."],["d20 + DES","Usa o valor do atributo da sua ficha."],["4d6kh3","Rola 4 e mantém os 3 maiores (kl = menores)."],["Vantagem","Escolha na ficha: o d20 vira 2d20 e fica o maior (desvantagem: o menor)."]],un=[{id:"compact",label:"Compacta"},{id:"normal",label:"Normal"},{id:"comfortable",label:"Confortável"}],mn=[{id:"system",label:"Seguir o sistema"},{id:"reduced",label:"Reduzidas"}],gn=[{id:"full",label:"Completa"},{id:"calm",label:"Discreta"},{id:"off",label:"Desligada"}],Dr=[{id:"open",label:"Aberto"},{id:"min",label:"Minimizado"},{id:"hidden",label:"Oculto"}],bn="nighttable-ui-prefs";function hn(){try{const e=JSON.parse(window.localStorage.getItem(bn))||{};return{density:un.some(t=>t.id===e.density)?e.density:"normal",textSize:qt(e.textSize),theme:Qa(e.theme),accent:er(e.accent),motion:mn.some(t=>t.id===e.motion)?e.motion:"system",diceAnimation:gn.some(t=>t.id===e.diceAnimation)?e.diceAnimation:"full",telemetry:e.telemetry===!0,panels:fe(e.panels),speech:nt(e.speech)}}catch{return{density:"normal",textSize:"normal",theme:"dark",accent:"violet",motion:"system",diceAnimation:"full",telemetry:!1,panels:fe(null),speech:nt(null)}}}function _g(e){try{window.localStorage.setItem(bn,JSON.stringify(e))}catch{}}function Tp({speech:e,onChange:t}){const[a,r]=O.useState(()=>tt()?Sa(window.speechSynthesis.getVoices()):[]);if(O.useEffect(()=>{var s,c;if(!tt())return;const i=()=>r(Sa(window.speechSynthesis.getVoices()));return(c=(s=window.speechSynthesis).addEventListener)==null||c.call(s,"voiceschanged",i),()=>{var l,p;return(p=(l=window.speechSynthesis).removeEventListener)==null?void 0:p.call(l,"voiceschanged",i)}},[]),!tt())return f.jsx("p",{style:{margin:"8px 0 0",color:"var(--c-7e838f)",fontSize:11},children:"Este navegador não lê texto em voz alta."});const o=nt(e),n=i=>t(nt({...o,...i}));return f.jsxs("div",{role:"group","aria-label":"Narração em voz",style:{display:"grid",gap:6,marginTop:10,color:"var(--c-c9c9ca)",fontSize:12},children:[f.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[f.jsx("input",{type:"checkbox",checked:o.narration,onChange:i=>n({narration:i.target.checked})})," Ler em voz alta as narrações na tela"]}),f.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[f.jsx("input",{type:"checkbox",checked:o.narrator,onChange:i=>n({narrator:i.target.checked})})," Ler as falas do canal #narrador"]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:8},children:[f.jsx("span",{style:{width:120},children:"Voz"}),f.jsxs("select",{value:o.voice,onChange:i=>n({voice:i.target.value}),"aria-label":"Voz da narração",style:{flex:1,minWidth:160,padding:"4px 6px",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:6,color:"var(--c-e7e5e2)",background:"var(--c-1a1c22)",fontSize:11},children:[f.jsx("option",{value:"",children:"Automática (português, se houver)"}),a.map(i=>f.jsxs("option",{value:i.name,children:[i.name," · ",i.lang]},i.name))]})]}),f.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[f.jsxs("span",{style:{width:120},children:["Velocidade ",o.rate.toFixed(1),"×"]}),f.jsx("input",{type:"range",min:"0.6",max:"1.6",step:"0.1",value:o.rate,onChange:i=>n({rate:Number(i.target.value)}),"aria-label":"Velocidade da narração em voz",style:{flex:1}})]}),f.jsxs("div",{style:{display:"flex",gap:8},children:[f.jsx(Oe,{size:"small",onClick:()=>{$r(),lp("A névoa cobre o porto. Ao longe, um sino toca.",o)},sx:{minWidth:0,color:"var(--c-b9abff)",textTransform:"none",fontSize:11},children:"Testar a voz"}),f.jsx(Oe,{size:"small",onClick:$r,sx:{minWidth:0,color:"var(--c-8e939e)",textTransform:"none",fontSize:11},children:"Parar"})]})]})}function be({label:e,value:t,options:a,onChange:r}){return f.jsxs("div",{role:"radiogroup","aria-label":e,style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",fontSize:12},children:[f.jsx("span",{style:{width:120,color:"var(--c-c9c9ca)"},children:e}),a.map(o=>f.jsxs("button",{type:"button",role:"radio","aria-checked":t===o.id,onClick:()=>r(o.id),style:{padding:"5px 10px",border:"1px solid color-mix(in srgb, var(--c-ffffff) 10%, transparent)",borderRadius:999,color:t===o.id?"var(--c-f4f2ef)":"var(--c-9a9faa)",background:t===o.id?"color-mix(in srgb, var(--c-8e6bff) 25%, transparent)":"var(--c-1a1c22)",fontSize:11,cursor:"pointer"},children:[o.swatch&&f.jsx("span",{"aria-hidden":"true",style:{display:"inline-block",width:9,height:9,marginRight:5,borderRadius:"50%",background:o.swatch}}),o.label]},o.id))]})}function jg({open:e,isGm:t,onClose:a,onRestartTutorial:r,prefs:o,onPrefsChange:n}){return f.jsxs(An,{open:e,onClose:a,fullWidth:!0,maxWidth:"sm",PaperProps:{sx:xp},children:[f.jsx(Sp,{variant:"panel",icon:f.jsx(Al,{sx:{color:"var(--c-b9abff)"}}),onClose:a,closeLabel:"Fechar ajuda",children:"Ajuda e preferências"}),f.jsxs(qr,{sx:{display:"grid",gap:2,pb:3},children:[o&&f.jsxs("section",{children:[f.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:"preferências deste navegador"}),f.jsxs("div",{style:{display:"grid",gap:8},children:[f.jsx(be,{label:"Idioma",value:Vt(),options:dn.map(i=>({id:i.value,label:i.label})),onChange:fn}),f.jsx(be,{label:"Densidade",value:o.density,options:un,onChange:i=>n({...o,density:i})}),f.jsx(be,{label:"Tema",value:Qa(o.theme),options:on,onChange:i=>n({...o,theme:i})}),f.jsx(be,{label:"Cor de destaque",value:er(o.accent),options:Za,onChange:i=>n({...o,accent:i})}),f.jsx(be,{label:"Tamanho do texto",value:qt(o.textSize),options:rr,onChange:i=>n({...o,textSize:i})}),f.jsx(be,{label:"Animações",value:o.motion,options:mn,onChange:i=>n({...o,motion:i})}),f.jsx(be,{label:"Dados na tela",value:o.diceAnimation||"full",options:gn,onChange:i=>n({...o,diceAnimation:i})}),Object.entries(Gt).map(([i,s])=>f.jsx(be,{label:s.label,value:fe(o.panels)[i],options:s.minimizable?Dr:Dr.filter(c=>c.id!=="min"),onChange:c=>n({...o,panels:ar(o.panels,i,c)})},i))]}),f.jsx(Tp,{speech:o.speech,onChange:i=>n({...o,speech:i})}),f.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10,color:"var(--c-c9c9ca)",fontSize:12},children:[f.jsx("input",{type:"checkbox",checked:!!o.telemetry,onChange:i=>n({...o,telemetry:i.target.checked})})," Enviar relatórios de erro anônimos (sem nome, e-mail ou conversas)"]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:6,color:"var(--c-7e838f)",fontSize:11},children:["Erros registrados nesta sessão: ",vr().length,vr().length>0&&f.jsx(Oe,{size:"small",onClick:()=>{var i;return(i=navigator.clipboard)==null?void 0:i.writeText([ko(),"","Desempenho:",...Kt()].join(`
`)).catch(()=>{})},sx:{minWidth:0,color:"var(--c-b9abff)",textTransform:"none",fontSize:11},children:"Copiar relatório"})]}),f.jsxs("div",{role:"group","aria-label":"Desempenho desta sessão",style:{marginTop:10,color:"var(--c-7e838f)",fontSize:11,lineHeight:1.6},children:[f.jsx("strong",{style:{display:"block",color:"var(--c-c9c9ca)",fontWeight:600},children:"Desempenho desta sessão"}),Kt().length?Kt().map(i=>f.jsx("div",{children:i},i)):f.jsx("div",{children:"Ainda sem medidas."}),f.jsx("div",{children:"Medido só neste navegador; nada é enviado."})]}),f.jsx("p",{style:{margin:"8px 0 0",color:"var(--c-7e838f)",fontSize:11},children:"Gire a roda do mouse sobre o mapa para aproximar e afastar no ponto do cursor. Com zoom, segure o botão esquerdo num ponto vazio do mapa (fora dos tokens e objetos) e arraste para mover a visão. No celular ou tablet, faça a pinça com dois dedos para aproximar entre os dedos e arraste com dois dedos para mover."})]}),f.jsxs("section",{children:[f.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:"atalhos de teclado"}),f.jsx("div",{style:{display:"grid",gap:6},children:Rd.filter(i=>t||!i.gmOnly).map(i=>f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,fontSize:12},children:[f.jsx(Ap,{style:{width:92},children:i.keys.map(s=>f.jsx("kbd",{children:s},s))}),f.jsx("span",{style:{color:"var(--c-c9c9ca)"},children:i.label})]},i.label))})]}),[["chat",Ep],["dados",Mp]].map(([i,s])=>f.jsxs("section",{children:[f.jsx("h3",{style:{margin:"0 0 8px",color:"var(--c-8f86c9)",fontFamily:"DM Mono, monospace",fontSize:10,letterSpacing:".14em",textTransform:"uppercase"},children:i}),f.jsx("div",{style:{display:"grid",gap:6},children:s.map(([c,l])=>f.jsxs("div",{style:{fontSize:12},children:[f.jsx("code",{style:{color:"var(--c-f3c48f)"},children:c})," ",f.jsxs("span",{style:{color:"var(--c-c9c9ca)"},children:["— ",l]})]},c))})]},i)),f.jsx(sn,{}),f.jsx(Oe,{onClick:r,sx:{justifySelf:"start",textTransform:"none",color:"var(--c-b9abff)"},children:"Ver o tutorial de novo"})]})]})}const _p={DEV:!1,VITE_USE_FIREBASE_EMULATORS:"false"};cl();pp(hn().textSize);Yd(hn());il({env:pl(_p),dataVersion:Pe});const jp=O.lazy(()=>we(()=>import("./App-BKjNMTTP.js").then(e=>e.aI),__vite__mapDeps([0,1,2,3]))),zp=O.lazy(()=>we(()=>import("./LoginScreen-AzZoBcJ6.js"),__vite__mapDeps([4,1,5,3]))),Ip=O.lazy(()=>we(()=>import("./Lobby-IDfXzvSl.js"),__vite__mapDeps([6,1,2,5,7,8,3]))),Cp=O.lazy(()=>we(()=>import("./OnlineTable-BGi17A2e.js"),__vite__mapDeps([9,1,0,2,3]))),Rp=O.lazy(()=>we(()=>Promise.resolve().then(()=>op),void 0)),Np=O.lazy(()=>we(()=>import("./StreamEntry-KDuD-tpk.js"),__vite__mapDeps([10,1,9,0,2,3]))),Op=O.lazy(()=>we(()=>import("./PublicPage-D7SISIFK.js"),__vite__mapDeps([11,1,3])));function $p(){return f.jsx("div",{role:"status",style:{minHeight:"100dvh",display:"grid",placeItems:"center",color:"var(--c-8d929d)",background:"var(--c-090a0d)",fontFamily:"DM Mono, monospace",fontSize:11,letterSpacing:".12em",textTransform:"uppercase"},children:"carregando a mesa…"})}const Aa="nighttable-active-table",Fr=gl(),Br=Ii(),Ur=kl();function Pp(){try{return JSON.parse(window.localStorage.getItem(Aa))||null}catch{return null}}function Gr(e){try{e?window.localStorage.setItem(Aa,JSON.stringify(e)):window.localStorage.removeItem(Aa)}catch{}}function Lp(){const{enabled:e,loading:t,user:a}=ol(),[r,o]=O.useState(Pp),n=s=>{const c=s?{uid:a.uid,tableId:s}:null;Gr(c),o(c)};if(Fr)return f.jsx(Rp,{kind:Fr});if(Ur)return f.jsx(Op,{code:Ur});if(!e)return f.jsx(jp,{});if(t)return null;if(Br)return f.jsx(Np,{code:Br,user:a});const i=a&&(r==null?void 0:r.uid)===a.uid?r.tableId:null;return!a||a.isAnonymous&&!i?f.jsx(zp,{onGuestJoined:s=>{var l;const c={uid:(l=I.currentUser)==null?void 0:l.uid,tableId:s};Gr(c),o(c)}}):i?f.jsx(Cp,{tableId:i,user:a,onLeave:()=>n(null)},i):f.jsx(Ip,{onEnterTable:n})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/nighttablesite/sw.js",{scope:"/nighttablesite/"}).catch(()=>{})});bp().catch(()=>{}).finally(()=>{ia.createRoot(document.getElementById("root")).render(f.jsx(Z.StrictMode,{children:f.jsx(ll,{children:f.jsx(rl,{children:f.jsx(O.Suspense,{fallback:f.jsx($p,{}),children:f.jsx(Lp,{})})})})}))});export{Cf as $,tp as A,Kd as B,$d as C,ep as D,Rm as E,Em as F,Hd as G,Uf as H,Wf as I,ai as J,Mm as K,bg as L,Qm as M,eg as N,yg as O,vp as P,Lf as Q,Pf as R,Tm as S,Df as T,cg as U,tg as V,ag as W,Bf as X,rg as Y,ng as Z,og as _,ap as a,We as a$,co as a0,os as a1,hs as a2,so as a3,ns as a4,tf as a5,If as a6,vs as a7,kc as a8,Tc as a9,Sg as aA,$m as aB,_i as aC,Wp as aD,q as aE,yp as aF,jc as aG,Vm as aH,Om as aI,Im as aJ,Wm as aK,qm as aL,wg as aM,Iu as aN,Nm as aO,hp as aP,Fi as aQ,Ra as aR,Di as aS,to as aT,Jr as aU,Sp as aV,Li as aW,Hp as aX,li as aY,hg as aZ,Hr as a_,$c as aa,Fs as ab,vc as ac,hc as ad,zc as ae,Rc as af,fs as ag,Os as ah,$s as ai,qs as aj,ic as ak,Js as al,Hs as am,Up as an,hi as ao,wi as ap,Ti as aq,u as ar,we as as,Ut as at,ru as au,Qp as av,ef as aw,sa as ax,km as ay,xm as az,Xd as b,Ns as b$,ym as b0,wm as b1,Qd as b2,Sm as b3,Am as b4,Cm as b5,vm as b6,Pu as b7,kg as b8,Xm as b9,ps as bA,nc as bB,fa as bC,uo as bD,ei as bE,Ic as bF,Cc as bG,hn as bH,pp as bI,Yd as bJ,fe as bK,Ii as bL,Gt as bM,_g as bN,lg as bO,ar as bP,Zp as bQ,oc as bR,xc as bS,dc as bT,pc as bU,Rs as bV,zs as bW,js as bX,Cs as bY,qp as bZ,Vp as b_,Ag as ba,pm as bb,fm as bc,um as bd,vg as be,Ou as bf,$u as bg,Pm as bh,Lm as bi,hm as bj,_m as bk,jm as bl,Bm as bm,Um as bn,Gm as bo,zm as bp,Nu as bq,ki as br,bm as bs,ji as bt,xg as bu,Lc as bv,As as bw,ws as bx,ys as by,ks as bz,Jd as c,Ac as c$,Is as c0,rf as c1,ho as c2,lc as c3,cc as c4,uc as c5,fc as c6,Bc as c7,af as c8,xo as c9,Yp as cA,_c as cB,Vs as cC,Xs as cD,Ks as cE,Pc as cF,Gp as cG,ms as cH,gs as cI,bs as cJ,us as cK,Zr as cL,Ri as cM,df as cN,Oa as cO,cf as cP,ff as cQ,eo as cR,Na as cS,Oi as cT,Bi as cU,sf as cV,lf as cW,nf as cX,Pi as cY,of as cZ,Ec as c_,Dc as ca,Fc as cb,Uc as cc,uf as cd,Ae as ce,Qs as cf,ec as cg,Zs as ch,ac as ci,Gs as cj,Us as ck,Bs as cl,tc as cm,mc as cn,bc as co,gc as cp,Zc as cq,xs as cr,Ss as cs,Ms as ct,Es as cu,Ys as cv,Mc as cw,Ws as cx,Kp as cy,Yr as cz,ig as d,sc as d$,fo as d0,ti as d1,ou as d2,Ps as d3,Sc as d4,wc as d5,yc as d6,Ls as d7,wf as d8,Af as d9,gg as dA,il as dB,Xp as dC,Ff as dD,rc as dE,Pe as dF,Zm as dG,nu as dH,iu as dI,dl as dJ,su as dK,cu as dL,lu as dM,Al as dN,du as dO,pu as dP,fu as dQ,pg as dR,dg as dS,uu as dT,Zd as dU,mu as dV,gu as dW,bu as dX,hu as dY,xu as dZ,vu as d_,vf as da,kf as db,yf as dc,gf as dd,bf as de,hf as df,Sf as dg,Vc as dh,To as di,qc as dj,tu as dk,Xf as dl,Yf as dm,Kf as dn,Hf as dp,Jf as dq,Gc as dr,Qf as ds,eu as dt,Ds as du,mo as dv,Oc as dw,Nc as dx,nt as dy,lp as dz,sg as e,Vt as e$,yu as e0,Ru as e1,wu as e2,ku as e3,Su as e4,Au as e5,Eu as e6,Mu as e7,Tu as e8,_u as e9,Ju as eA,lm as eB,mm as eC,gm as eD,dm as eE,Jm as eF,jg as eG,Mg as eH,Eg as eI,Tg as eJ,Ym as eK,Hm as eL,Km as eM,Cu as eN,Si as eO,pl as eP,sp as eQ,ug as eR,fg as eS,mg as eT,pf as eU,hl as eV,Jp as eW,Mo as eX,Le as eY,Zf as eZ,bt as e_,ju as ea,zu as eb,Lu as ec,Du as ed,Fu as ee,Bu as ef,Uu as eg,am as eh,rm as ei,om as ej,cm as ek,im as el,sm as em,Vu as en,Gu as eo,Qu as ep,qu as eq,Ku as er,Xu as es,Zu as et,Yu as eu,Wu as ev,tm as ew,nm as ex,em as ey,Hu as ez,sn as f,au as f0,xp as f1,xl as f2,Ci as f3,vo as f4,Qc as f5,Of as f6,$f as f7,xf as f8,Vi as f9,Yi as fa,ao as fb,mf as fc,da as fd,al as fe,tl as ff,br as fg,Ef as fh,Mf as fi,Nf as g,Rf as h,jf as i,zf as j,cs as k,ls as l,Eo as m,at as n,qf as o,Vf as p,Gf as q,_f as r,Tf as s,Dm as t,ol as u,Fm as v,is as w,ss as x,ds as y,di as z};
