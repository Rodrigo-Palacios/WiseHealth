import { cardPayment } from "./cardPaymentMethod.js"
import { speiPayment } from "./speiPaymentMethod.js"
export function methodPayment() {
    const divMethod = document.getElementById('divMethod');
    divMethod.addEventListener('click', e => {
        const bttn = e.target.closest('button');

        if (!bttn) {
            console.error(bttn);
            return;
        }

        let chosenMethod = e.target.dataset.idBtn; 

        const btnCard = document.getElementById('cardPay');
        const btnSpei = document.getElementById('speiPay');

        
        if (chosenMethod === "card") {

            const paymentSec = document.getElementById('payment');
            paymentSec.textContent = '';
            paymentSec.hidden = true;
            
            btnSpei.classList.remove('methodCheckOutSelect')
            btnCard.classList.add('methodCheckOutSelect');
            
            cardPayment();
            
            return;
                        
        } else {

            const paymentSec = document.getElementById('payment');
            paymentSec.textContent = '';
            paymentSec.hidden = true;
            
            btnCard.classList.remove('methodCheckOutSelect')
            btnSpei.classList.add('methodCheckOutSelect');
            
            speiPayment();
        }

        chosenMethod = '';

    })
    
    
}