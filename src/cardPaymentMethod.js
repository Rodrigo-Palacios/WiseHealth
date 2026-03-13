import { cardExpDate } from "./expDate.js"
const base = import.meta.env.BASE_URL;
export function cardPayment() {
    const section = document.getElementById('payment');
    section.hidden = false;
    
    const container = document.createElement('div');
    container.id = 'divPayment';
    
    const divTitlePayment = document.createElement('div');
    divTitlePayment.classList.add('divTitlePayment');

    const imgPayment = document.createElement('img');
    imgPayment.classList.add('imgPayment');
    imgPayment.src = `${base}public/payments.svg`;
    
    divTitlePayment.appendChild(imgPayment);
    
    const titlePayment = document.createElement('h2');
    titlePayment.textContent = 'Información de Pago'
    
    divTitlePayment.appendChild(titlePayment);

    container.appendChild(divTitlePayment);

    const paymentForm = document.createElement('div');
    paymentForm.id = 'paymentForm';
    paymentForm.innerHTML = `
        <form id="formPayment" >
            <div class="formFields">
                <label aria-describedby="name" for="cardName">Nombre del titular</label>
                <input type="text" id="cardName" name="cardName" placeholder="Como aparece en la tarjeta" required />
                            
            </div>
            <div class="formFields">
                <label aria-describedby="cardNumber" for="cardNumber">Número de tarjeta</label>
                <div class="cardNumber">
                    <input id="cardNumber" name="cardNumber" placeholder="0000 0000 0000 0000" type="text" inputmode="numeric" pattern="[0-9]{15-16}" minlength="15" maxlength="16" required/>
                    <img id="imgCardNumber" src="${base}public/credit_card_light.svg"/>
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
    `;
    
    container.appendChild(paymentForm);

    section.appendChild(container);

    section.scrollIntoView( { behavior: "smooth", block: "start" });

    cardExpDate();

}