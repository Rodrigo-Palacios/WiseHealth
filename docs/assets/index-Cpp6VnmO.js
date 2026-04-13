(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();function R(c){let a=parseInt(c);const e=$();let t=e.findIndex(r=>r.id===a);e.splice(t,1),localStorage.setItem("list",JSON.stringify(e)),_();const n=document.getElementById("checkOut");n.textContent="",n.hidden=!0;const o=document.getElementById("payment");o.textContent="",o.hidden=!0}function O(c){let a=c.slice(0,1).toUpperCase(),e=c.slice(1);return`${a}${e}`}function k(c){return`$${c/1e6}M`}function M(c){return`${c*100}%`}function N(c){return`$${c/1e3}K`}function U(c,a){const t=a.find(o=>o.plan===c).items.find(o=>o.label==="Costo anual").value,n={orderId:crypto.randomUUID(),planId:c,amount:Number(t.toFixed(2)),currency:"MXN",status:"draft",createdAt:new Date().toISOString()};localStorage.setItem("saveOrder",JSON.stringify(n))}const A="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='%230f172a'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480-344%20240-584l56-56%20184%20184%20184-184%2056%2056z'/%3e%3c/svg%3e";function j(){document.getElementById("expDate").addEventListener("input",a=>{let e=a.target.value.replace("/","");e.length>=2&&(e=e.slice(0,2)+"/"+e.slice(2)),a.target.value=e})}const D="/WiseHealth/";function V(){const c=document.getElementById("payment"),a=document.createElement("div");a.id="divPayment";const e=document.createElement("div");e.classList.add("divTitlePayment");const t=document.createElement("img");t.classList.add("imgPayment"),t.src=`${D}payments.svg`,e.appendChild(t);const n=document.createElement("h2");n.textContent="Información de Pago",e.appendChild(n),a.appendChild(e);const o=document.createElement("div");o.id="paymentForm",o.innerHTML=`
        <form id="formPayment" >
            <div class="formFields">
                <label aria-describedby="name" for="cardName">Nombre del titular</label>
                <input type="text" id="cardName" name="cardName" placeholder="Como aparece en la tarjeta" required />
                            
            </div>
            <div class="formFields">
                <label aria-describedby="cardNumber" for="cardNumber">Número de tarjeta</label>
                <div class="cardNumber">
                    <input id="cardNumber" name="cardNumber" placeholder="0000 0000 0000 0000" type="text" inputmode="numeric" pattern="[0-9]{15-16}" minlength="15" maxlength="16" required/>
                    <img id="imgCardNumber" src="${D}credit_card_light.svg"/>
                </div>
            </div>
            <div class="formFieldsRow">
                <div class="formFields">
                    <label aria-describedby="fecha de expiración" for="expDate">Fecha de expiración</label>
                    <input id="expDate" name="expDate" placeholder="MM / YY" type="text" inputmode="numeric" pattern="^(0[1-9]|1[0-2])/(2[6-9]|3[0-9])$" maxlength="5" required/>
                </div>
                <div class="formFields">
                    <label aria-describedby="CVV" for="cvv">CVV</label>
                    <input id="cvv" name="cvv" placeholder="123" type="text" inputmod="numeric" pattern="[0-9]{3-4}" minlength="3" maxlength="4" required/>
                </div>
                </div>
            <div class="formFields">
                <label aria-describedby="email" for="email">Correo electrónico</label>
                <input id="email" name="email" placeholder="tucorreo@email.com" type="email" required />
            </div>
            <button id="completePayment" type="submit" >Finalizar Pago</button>
        </form>
    `,a.appendChild(o),c.appendChild(a),j(),c.hidden=!1,c.scrollIntoView({behavior:"smooth",block:"start"})}const z="/WiseHealth/";function J(){const c=document.querySelector(".infoCopy");c.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("000012345678901234");const a=c.textContent;c.textContent="¡Copiado!",setTimeout(()=>{const e=document.querySelector(".clabePflex");e.removeChild(c),e.innerHTML=`
                    <div class="clabeP">
                        <p>CLABE (18 Dígitos)</p>
                        <p><strong>0000 1234 5678 9012 34</strong></p>
                    </div>
                    <button class="infoCopy"><img class="infoImgCopy" src="${z}public/content_copy.svg"/>CLABE</button>
                `},2e3),console.log(a)}catch(a){console.error("Error al compiar: ",a),alert("No se pudo copiar el texto")}})}function W(c){const a=document.querySelector(".infoCopyRef");a.addEventListener("click",async()=>{await navigator.clipboard.writeText(c);const e=a.textContent;a.textContent="¡Copiado!",setTimeout(()=>{a.textContent=e},2e3)})}const L="/WiseHealth/";function X(){const c=localStorage.getItem("saveOrder"),e=JSON.parse(c).orderId.slice(0,7),t=document.getElementById("payment"),n=document.createElement("div");n.id="divPayment",n.innerHTML=`
        <div class="divTitlePayment">
            <img class="imgPayment" src="${L}account_balance_payment.svg"/>
            <h2>Datos de Trasnferencia SPEI</h2>
        </div>
    `;const o=document.createElement("div");o.classList.add("containerInfo"),o.innerHTML=`
    <div class="containerInfoStyle">
        <div>
            <p>Banco Receptor</p>
            <p><strong>Esto es una demo</strong></p>
        </div>
        <div>
            <p>Beneficiario</p>
            <p><strong>WiseHealth Seguros</strong></p>
        </div>
        <div class="infoClabe">
            <div class="clabePflex">
                <div class="clabeP">
                    <p>CLABE (18 Dígitos)</p>
                    <p><strong>0000 1234 5678 9012 34</strong></p>
                </div>
                <button class="infoCopy"><img class="infoImgCopy" src="${L}content_copy.svg"/>CLABE</button>
            </div>
        </div>
        <div class="refBanc">
            <div class="contRefBanc">
                <p>Referencia Bancaria</p>
                <p><strong data-order-Id="orderId">${e}</strong></p>
            </div>
            <button class="infoCopyRef"><img class="infoImgCopy" src="${L}content_copy.svg"/>Referencia</button>
        </div>
        <div class="infoP">
            <label for="email">Email:</label>
            <input class="speiEmail" type="email" name="email" id="email">
        </div>
        <div class="paragraphP">
            <img src="${L}info_24.svg" class="imgInfoSPEI"/>
            <p class="paragraphSPEI">
                Tu pago se acreditará de forma inmediata una vez realizada la transferencia.
            </p>
            
        </div>
        <button class="infoBtn">He realizado mi transferencia <img/></button>
    </div>
    `,n.appendChild(o),t.appendChild(n),J(),W(e),t.hidden=!1,t.scrollIntoView({behavior:"smooth",block:"center"})}function K(){document.getElementById("divMethod").addEventListener("click",a=>{const e=a.target.closest("button");if(!e){console.error(e);return}let t=a.target.dataset.idBtn;const n=document.getElementById("cardPay"),o=document.getElementById("speiPay");if(t==="card"){const r=document.getElementById("payment");r.textContent="",r.hidden=!0,o.classList.remove("methodCheckOutSelect"),n.classList.add("methodCheckOutSelect"),V();return}else{const r=document.getElementById("payment");r.textContent="",r.hidden=!0,n.classList.remove("methodCheckOutSelect"),o.classList.add("methodCheckOutSelect"),X()}t=""})}const B="/WiseHealth/";function Y(c){let a=c,e=O(a.planId);const t=document.getElementById("checkOut");t.hidden=!1;const n=document.createElement("div");n.classList.add("divTitle"),t.appendChild(n);const o=document.createElement("img");o.classList.add("imgCheckOut"),o.src=`${B}order_approve.svg`,n.appendChild(o);const r=document.createElement("h2");r.classList.add("titleCheckOut"),r.textContent="Resumen y Pago",n.appendChild(r);const l=document.createElement("div");l.classList.add("contCheckOut"),t.appendChild(l);const s=document.createElement("div");s.classList.add("resum");const u=document.createElement("h3");u.textContent="Detalles del Plan",s.appendChild(u);const m=document.createElement("div");m.classList.add("boxDetails"),s.appendChild(m),m.innerHTML=`
        <div class="resumDiv">
            <p class="resumS">Plan Seleccionado</p>
            <p class="resumD"><strong>${e}</strong></p>        
        </div>
        <div class="resumDiv">
            <p class="resumS">Asegurados</p>
            <p class="resumD"><strong>2 Personas</strong></p>
        </div>
        <div id="resumTot" class="resumDiv">
            <p class="resumS"><strong>Total a Pagar</strong></p>
            <p class="resumD"><span class="total">${Z(a.amount)}</span></p>
        </div>
        
    `;const h=document.createElement("div");h.classList.add("pay");const i=document.createElement("h3");i.classList.add("payMethod"),i.textContent="Método de Pago",h.appendChild(i);const y=document.createElement("div");y.id="divMethod",y.innerHTML=`
        <button id="cardPay" class="methodCheckOut" data-id-btn="card" type="button">
            <img src="${B}credit_card.svg">
            Tarjeta de Crédito / Débito
        </button>
        <button id="speiPay" class="methodCheckOut" data-id-btn="spei" type="button">
            <img src="${B}account_balance.svg">
            Hacer una Trasferencia SPEI
        </button>
    `,h.appendChild(y),l.appendChild(s),l.appendChild(h),t.scrollIntoView({behavior:"smooth",block:"start"}),K()}const Z=c=>new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",maximumFractionDigits:2}).format(c),Q=document.getElementById("checkOut");function ee(){document.getElementById("btnGoPay").addEventListener("click",a=>{const e=localStorage.getItem("saveOrder"),t=JSON.parse(e);try{if(!e)throw new Error("No existe ninguna orden");if(!t||Array.isArray(t))throw new Error("Orden inválida (formato)");if(typeof t.status!="string"||t.status!=="draft")throw new Error("Orden inválida: status");if(typeof t.planId!="string"||!t.planId)throw new Error("Orden inválida: planId");if(typeof t.amount!="number"||!t.amount>0)throw new Error("Orden inválida: amount");if(typeof t.currency!="string"||t.currency!=="MXN")throw new Error("Orden inválida: currency");if(typeof t.orderId!="string"||!t.orderId)throw new Error("Orden inválida: orderId");t.status="checkOut",localStorage.setItem("saveOrder",JSON.stringify(t)),Y(t),Q.scrollIntoView({behavior:"smooth",block:"center"})}catch(n){console.error(n)}})}function te(){const c=document.getElementById("tarifas");try{const a=localStorage.getItem("saveOrder"),e=JSON.parse(a);if(!a)throw new Error("No existe ninguna orden");if(!e||Array.isArray(e))throw new Error("Orden inválida (formato)");if(typeof e.orderId!="string"||e.orderId.length===0)throw new Error("Orden inválida: ordenId");if(typeof e.planId!="string"||e.planId.length===0)throw new Error("Orden inválida: planId");if(typeof e.amount!="number"||!e.amount>0)throw new Error("Orden inválida: amount");if(e.status!=="draft")throw new Error("Orden inválida: status");if(document.getElementById("btnGoPay")){document.getElementById("divGoPay").textContent="";const t=document.createElement("button");t.id="btnGoPay",t.textContent="Proceder al pago";const n=document.createElement("img");n.id="imgGoPay",n.src=A,divGoPay.appendChild(t),t.appendChild(n)}else{const t=document.createElement("div");t.id="divGoPay";const n=document.createElement("button");n.id="btnGoPay",n.textContent="Proceder al pago";const o=document.createElement("img");o.id="imgGoPay",o.src=A,c.appendChild(t),t.appendChild(n),n.appendChild(o)}ee()}catch(a){console.error(a)}}const P={selectedPlan:!1,containerPlan:null,ulCheck:null,btnClick:null};function H(c){document.getElementById("containerTarifas").addEventListener("click",e=>{localStorage.removeItem("saveOrder");const t=document.getElementById("checkOut");t.textContent="",t.hidden=!0;const n=document.getElementById("payment");n.textContent="",n.hidden=!0;const o=e.target.closest("button");if(!o){console.log(o);return}const r=e.target.dataset.planId,l=`card${O(r)}`;U(r,c);const s=`ul${O(r)}`,u=document.querySelector(`.btn${r}`),m=document.querySelector(`.${l}`),i=document.getElementById(`${s}`).querySelectorAll("span");if(P.selectedPlan){document.querySelector(`.${P.containerPlan}`).classList.remove("cardSelected"),document.getElementById(`${P.ulCheck}`).querySelectorAll("span").forEach(v=>{v.classList.remove("checkSelected")});const f=document.querySelector(`${P.btnClick}`);f.textContent="Seleccionar",f.classList.remove("btnSelected")}m.classList.add("cardSelected"),P.containerPlan=l,P.ulCheck=s,i.forEach(y=>{y.classList.add("checkSelected")}),u.textContent="Seleccionado",u.classList.add("btnSelected"),P.btnClick=`.btn${r}`,P.selectedPlan=!0,te()})}function ne(c){const a=document.getElementById("tarifas");if(document.getElementById("headerTarifas")){document.getElementById("tarifas").textContent="";const e=document.createElement("div");e.id="headerTarifas";const t=document.createElement("h2");t.textContent="Elige tu cobertura ideal",e.appendChild(t);const n=document.createElement("p");n.textContent="Compara los beneficios y selecciona el plan que mejor se adapte a ti.",e.appendChild(n),a.appendChild(e);const o=document.createElement("div");o.id="containerTarifas",a.appendChild(o),c.forEach(i=>{const y={optimo:"Óptimo",premium:"Premium",esencial:"Esencial"},g=O(i.plan),d=document.createElement("div");d.classList.add(`card${g}`),o.appendChild(d);const f=document.createElement("div");f.id=i.plan;const v=document.createElement("h2");v.id=`h2${g}`,v.textContent=`${y[i.plan]}`,f.appendChild(v),d.appendChild(f);const b=document.createElement("div");b.id=`preci${g}`;const I=document.createElement("span");I.textContent=G(i.items[4].value);const S=document.createElement("span");S.textContent=" /año",b.appendChild(I),b.appendChild(S),d.appendChild(b);const x=document.createElement("ul");x.id=`ul${g}`,d.appendChild(x),i.items.forEach(p=>{if(p.label==="Costo anual")return;const w=document.createElement("li");let E=p.value;p.label==="Suma asegurada"&&(E=k(p.value)),p.label==="Deducible"&&(E=`${p.value} UMAM`),p.label==="Coaseguro"&&(E=M(p.value)),p.label==="Tope coaseguro"&&(E=N(p.value)),w.innerHTML=`
                <span class="check_marck"></span>${p.label}: <strong>${E}</strong>
                `,x.appendChild(w)});const C=document.createElement("button");C.classList.add("btnPlan"),C.classList.add(`btn${i.plan}`),C.dataset.planId=i.plan,C.textContent="Seleccionar",d.appendChild(C)});const r=document.getElementById("optimo"),l=document.getElementById("premium"),s=document.getElementById("esencial"),u=document.createElement("p");u.id="pOptimo",u.textContent="Balance costo-beneficio.";const m=document.createElement("p");m.id="pPremium",m.textContent="Máxima protección posible.";const h=document.createElement("p");h.id="pEsencial",h.textContent="Protección básica vital.",r.appendChild(u),l.appendChild(m),s.appendChild(h),localStorage.removeItem("saveOrder"),H(c)}else{const e=document.createElement("div");e.id="headerTarifas";const t=document.createElement("h2");t.textContent="Elige tu cobertura ideal",e.appendChild(t);const n=document.createElement("p");n.textContent="Compara los beneficios y selecciona el plan que mejor se adapte a ti.",e.appendChild(n),a.appendChild(e);const o=document.createElement("div");o.id="containerTarifas",a.appendChild(o),c.forEach(i=>{const y={optimo:"Óptimo",premium:"Premium",esencial:"Esencial"},g=O(i.plan),d=document.createElement("div");d.classList.add(`card${g}`),o.appendChild(d);const f=document.createElement("div");f.id=i.plan;const v=document.createElement("h2");v.id=`h2${g}`,v.textContent=`${y[i.plan]}`,f.appendChild(v),d.appendChild(f);const b=document.createElement("div");b.id=`preci${g}`;const I=document.createElement("span");I.textContent=G(i.items[4].value);const S=document.createElement("span");S.textContent=" /año",b.appendChild(I),b.appendChild(S),d.appendChild(b);const x=document.createElement("ul");x.id=`ul${g}`,d.appendChild(x),i.items.forEach(p=>{if(p.label==="Costo anual")return;const w=document.createElement("li");let E=p.value;p.label==="Suma asegurada"&&(E=k(p.value)),p.label==="Deducible"&&(E=`${p.value} UMAM`),p.label==="Coaseguro"&&(E=M(p.value)),p.label==="Tope coaseguro"&&(E=N(p.value)),w.innerHTML=`
                <span class="check_marck"></span>${p.label}: <strong>${E}</strong>
                `,x.appendChild(w)});const C=document.createElement("button");C.classList.add("btnPlan"),C.classList.add(`btn${i.plan}`),C.dataset.planId=i.plan,C.textContent="Seleccionar",d.appendChild(C)});const r=document.getElementById("optimo"),l=document.getElementById("premium"),s=document.getElementById("esencial"),u=document.createElement("p");u.id="pOptimo",u.textContent="Balance costo-beneficio.";const m=document.createElement("p");m.id="pPremium",m.textContent="Máxima protección posible.";const h=document.createElement("p");h.id="pEsencial",h.textContent="Protección básica vital.",r.appendChild(u),l.appendChild(m),s.appendChild(h),H(c),localStorage.removeItem("saveOrder"),e.scrollIntoView({behavior:"smooth",block:"start"})}}const G=c=>new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",maximumFractionDigits:2}).format(c),F="https://wisehealth-api.vercel.app",ae=document.getElementById("tarifas");async function q(c){try{const e=c.map(d=>({edad:Number(d.age),genero:String(d.gender).trim()})),t=await fetch(`${F}/api/cotizar`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({personas:e})}),o=await(await fetch(`${F}/api/planes`,{method:"GET",headers:{Accept:"application/json"}})).json(),r=await t.json(),l=Array.isArray(r.items)?r.items:[],s=Array.isArray(o.item)?o.item:[],u=new Map(s.map(d=>[d.plan,d])),m=l.map(d=>{const f=u.get(d.plan)||{};return{...d,...f}}),h=new Map(m.map(d=>[d.plan,d])),i=["optimo","premium","esencial"],y=[{label:"Suma asegurada",key:"suma_asegurada",type:"moneda"},{label:"Deducible",key:"deducible",type:"uma"},{label:"Coaseguro",key:"coaseguro",type:"porcentaje"},{label:"Tope coaseguro",key:"tope_coaseguro",type:"moneda"},{label:"Costo anual",key:"total",type:"moneda"}];let g=[];for(let d of i){const f=h.get(d);let v={plan:d,items:[]};for(let b of y)v.items.push({label:b.label,type:b.type,value:f[b.key]});g.push(v)}ne(g)}catch{ae.textContent=""}}const oe="/WiseHealth/".endsWith("/")?"/WiseHealth/":"/WiseHealth//";function $(){const c=localStorage.getItem("list");return c?JSON.parse(c):[]}function _(){if(document.getElementById("tablePeople")){const c=document.getElementById("tableBody");c.innerHTML="";const a=$();if(a.length===0){const e=document.createElement("tr");e.innerHTML=`
      <td colspan="6">No hay personas registradas</td>
      `,c.appendChild(e)}a.forEach(e=>{const t=document.createElement("tr"),n=document.createElement("td"),o=document.createElement("td"),r=document.createElement("td"),l=document.createElement("td"),s=document.createElement("button");s.setAttribute("data-id",`${e.id}`),s.setAttribute("type","button"),n.textContent=`${e.name}`,o.textContent=`${e.age}`,r.textContent=`${e.gender}`,s.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      `,t.appendChild(n),t.appendChild(o),t.appendChild(r),l.appendChild(s),t.appendChild(l),c.appendChild(t)}),q(a)}else{document.getElementById("personList").setAttribute("id","personListStyle");const a=document.getElementById("info"),e=document.createElement("div");e.classList.add("headerSection");const t=document.createElement("img");t.src=oe+"group.svg",t.alt="group_svg",t.id="group_svg";const n=document.createElement("h2");n.textContent="Personas en tu poliza";const o=document.createElement("table");o.setAttribute("id","tablePeople");const r=document.createElement("thead"),l=document.createElement("tbody");l.setAttribute("id","tableBody"),o.appendChild(r),o.appendChild(l),l.addEventListener("click",u=>{const m=u.target.closest("button");if(m){let h=m.dataset.id;R(h)}}),r.innerHTML=`
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Género</th>
      <th>Eliminar</th>
    </tr>
    `;const s=$();s.forEach(u=>{const m=document.createElement("tr"),h=document.createElement("td"),i=document.createElement("td"),y=document.createElement("td"),g=document.createElement("td"),d=document.createElement("button");d.setAttribute("data-id",`${u.id}`),d.setAttribute("type","button"),h.textContent=`${u.name}`,i.textContent=`${u.age}`,y.textContent=`${u.gender}`,d.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      `,m.appendChild(h),m.appendChild(i),m.appendChild(y),g.appendChild(d),m.appendChild(g),l.appendChild(m)}),e.appendChild(t),e.appendChild(n),a.appendChild(e),a.appendChild(o),q(s)}}const ce=document.getElementById("buttonForm");class T{constructor(a,e,t){this.id=T.#e++,this.name=a,this.age=e,this.gender=t}static#e=Date.now()}ce.addEventListener("click",c=>{c.preventDefault();let a=$(),e=document.forms.newPerson,t=e.name.value,n=e.age.value,o=e.gender.value;e.reportValidity()&&(a.push(new T(t,n,o)),localStorage.setItem("list",JSON.stringify(a)),e.reset()),_();const l=document.getElementById("checkOut");l.textContent="",l.hidden=!0;const s=document.getElementById("payment");s.textContent="",s.hidden=!0});
