import { renderCheckOut } from "./FormCheckOut";

const secCheckOut = document.getElementById('checkOut');

export function checkGoPay() {

    const btnGO = document.getElementById('btnGoPay');
    btnGO.addEventListener('click', e => {
        const raw = localStorage.getItem('saveOrder');
        const orden = JSON.parse(raw);
        try {

            if (!raw) throw new Error('No existe ninguna orden');
            if (!orden || Array.isArray(orden)) throw new Error('Orden inválida (formato)');
            if (typeof orden.status !== 'string' ||orden.status !== 'draft') throw new Error('Orden inválida: status');
            if (typeof orden.planId !== 'string' || !orden.planId) throw new Error('Orden inválida: planId');
            if (typeof orden.amount !== 'number' || !orden.amount > 0) throw new Error('Orden inválida: amount');
            if (typeof orden.currency !== 'string' || orden.currency !== 'MXN') throw new Error('Orden inválida: currency');
            if (typeof orden.orderId !== 'string' || !orden.orderId) throw new Error('Orden inválida: orderId');

            orden.status = 'checkOut';

            localStorage.setItem('saveOrder', JSON.stringify(orden));
            
            // console.log(orden);

            renderCheckOut(orden);

            secCheckOut.scrollIntoView( { behavior: "smooth", block: "center"});

        } catch (error) {
            console.error(error);
        }
    });
    
}