const base = import.meta.env.BASE_URL;
import { btnCopy } from "./buttonCopyClabe.js"
import { copyRef } from "./buttonCopyRef.js"

export function speiPayment () {
    const orderLocal = localStorage.getItem('saveOrder')
    const order = JSON.parse(orderLocal);
    const refOrden = order.orderId.slice(0, 7)
    const section = document.getElementById('payment');
    

    const container = document.createElement('div');
    container.id = 'divPayment';
    container.innerHTML = `
        <div class="divTitlePayment">
            <img class="imgPayment" src="${base}account_balance_payment.svg"/>
            <h2>Datos de Trasnferencia SPEI</h2>
        </div>
    `;

    const containerInfo = document.createElement('div');
    containerInfo.classList.add('containerInfo');
    containerInfo.innerHTML = `
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
                <button class="infoCopy"><img class="infoImgCopy" src="${base}content_copy.svg"/>CLABE</button>
            </div>
        </div>
        <div class="refBanc">
            <div class="contRefBanc">
                <p>Referencia Bancaria</p>
                <p><strong data-order-Id="orderId">${refOrden}</strong></p>
            </div>
            <button class="infoCopyRef"><img class="infoImgCopy" src="${base}content_copy.svg"/>Referencia</button>
        </div>
        <div class="infoP">
            <label for="email">Email:</label>
            <input class="speiEmail" type="email" name="email" id="email">
        </div>
        <div class="paragraphP">
            <img src="${base}info_24.svg" class="imgInfoSPEI"/>
            <p class="paragraphSPEI">
                Tu pago se acreditará de forma inmediata una vez realizada la transferencia.
            </p>
            
        </div>
        <button class="infoBtn">He realizado mi transferencia <img/></button>
    </div>
    `;

    container.appendChild(containerInfo);

    section.appendChild(container);

    btnCopy();
    copyRef(refOrden);

    section.hidden = false;

    section.scrollIntoView({ behavior: "smooth", block: "center"});


    
    
}