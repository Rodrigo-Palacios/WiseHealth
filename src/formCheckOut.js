const base = import.meta.env.BASE_URL;
import { toUpper } from './toUpper.js'
import { methodPayment } from "./chooseMethod.js"
export function renderCheckOut(orden) {

    let order = orden;

    let planId = toUpper(order.planId)

    // console.log(planId);

    const section = document.getElementById('checkOut');
    section.hidden = false;

    const container = document.createElement('div');
    container.classList.add('divTitle');

    section.appendChild(container);

    const imgTitle = document.createElement('img');
    imgTitle.classList.add('imgCheckOut');
    imgTitle.src = `${base}order_approve.svg`;

    container.appendChild(imgTitle);

    const title = document.createElement('h2');
    title.classList.add('titleCheckOut');
    title.textContent ='Resumen y Pago';
    
    container.appendChild(title);

    const contCheckOut = document.createElement('div');
    contCheckOut.classList.add('contCheckOut');

    section.appendChild(contCheckOut);

    const resum = document.createElement('div');
    resum.classList.add('resum');

    const details = document.createElement('h3');
    details.textContent = 'Detalles del Plan';

    resum.appendChild(details);

    const boxDetails = document.createElement('div');
    boxDetails.classList.add('boxDetails');

    resum.appendChild(boxDetails);

    boxDetails.innerHTML = `
        <div class="resumDiv">
            <p class="resumS">Plan Seleccionado</p>
            <p class="resumD"><strong>${planId}</strong></p>        
        </div>
        <div class="resumDiv">
            <p class="resumS">Asegurados</p>
            <p class="resumD"><strong>2 Personas</strong></p>
        </div>
        <div id="resumTot" class="resumDiv">
            <p class="resumS"><strong>Total a Pagar</strong></p>
            <p class="resumD"><span class="total">${mxn(order.amount)}</span></p>
        </div>
        
    `;



    const pay = document.createElement('div');
    pay.classList.add('pay');

    const payMethod = document.createElement('h3');
    payMethod.classList.add('payMethod');
    payMethod.textContent = 'Método de Pago';
    
    pay.appendChild(payMethod);

    const divMethod = document.createElement('div');
    divMethod.id = 'divMethod';
    divMethod.innerHTML = `
        <button id="cardPay" class="methodCheckOut" data-id-btn="card" type="button">
            <img src="${base}credit_card.svg">
            Tarjeta de Crédito / Débito
        </button>
        <button id="speiPay" class="methodCheckOut" data-id-btn="spei" type="button">
            <img src="${base}account_balance.svg">
            Hacer una Trasferencia SPEI
        </button>
    `;
    
    pay.appendChild(divMethod);

    contCheckOut.appendChild(resum);
    contCheckOut.appendChild(pay);

    section.scrollIntoView( { behavior: "smooth", block: "start"});

    methodPayment();

}

const mxn = pesos => new Intl.NumberFormat('es-MX', {
        style: 'currency', currency: 'MXN', maximumFractionDigits: 2
}).format(pesos);