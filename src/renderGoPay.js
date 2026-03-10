import arrowIcon from './Arrow_down.svg';
import { checkGoPay } from "./checkOut.js";

export function renderGoPay() {
    const tarifas = document.getElementById('tarifas');

    try {
        const raw = localStorage.getItem('saveOrder');
        const order = JSON.parse(raw);

        if (!raw) throw new Error('No existe ninguna orden');

        if (!order || Array.isArray(order)) throw new Error('Orden inválida (formato)');
        
        if (typeof order.orderId !== 'string' || order.orderId.length === 0) throw new Error('Orden inválida: ordenId');

        if (typeof order.planId !== 'string' || order.planId.length === 0) throw new Error('Orden inválida: planId');

        if (typeof order.amount !== 'number' || !order.amount > 0) throw new Error('Orden inválida: amount');

        if ( order.status !== 'draft') throw new Error('Orden inválida: status')
        
        // console.log(order);

        ///Revisa si el boton existe 
        if (!document.getElementById('btnGoPay')) {
            //Crea el div
            const divGoPay = document.createElement('div');
            divGoPay.id = 'divGoPay';          

            //crea el boton
            const btnGoPay = document.createElement('button');
            btnGoPay.id = "btnGoPay";
            btnGoPay.textContent = 'Proceder al pago';

            const imgGoPay = document.createElement('img');
            imgGoPay.id = 'imgGoPay';
            imgGoPay.src = arrowIcon;

            
            //Se agregan al DOM
            tarifas.appendChild(divGoPay);
            divGoPay.appendChild(btnGoPay);
            btnGoPay.appendChild(imgGoPay);
    
        } else {
            //Si ya existe borra el contenido del div
            document.getElementById('divGoPay').textContent = '';     

            //crea el boton
            const btnGoPay = document.createElement('button');
            btnGoPay.id = "btnGoPay";
            btnGoPay.textContent = 'Proceder al pago';

            const imgGoPay = document.createElement('img');
            imgGoPay.id = 'imgGoPay';
            imgGoPay.src = arrowIcon;

            
            //Se agregan al DOM
            divGoPay.appendChild(btnGoPay);
            btnGoPay.appendChild(imgGoPay);
    
        }

        checkGoPay();

    } catch (error) {
        
        console.error(error)
        
    }




    

}