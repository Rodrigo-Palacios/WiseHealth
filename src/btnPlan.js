import { toUpper } from "./toUpper.js";

const state = {
    selectedPlan: false,
    containerPlan: null,
    ulCheck: null,
    btnClick: null
}

export function btnSelect () {
    const containerTarifas = document.getElementById('containerTarifas');
    containerTarifas.addEventListener('click', event => {

        const btton = event.target.closest('button');

        if(!btton) {
            console.log(btton)
            return;
        }
        console.log(btton)
        
        const plan = event.target.dataset.planId;
        const container = `card${toUpper(plan)}`;
        
        const ul = `ul${toUpper(plan)}`;

        const selected = document.querySelector(`.btn${plan}`);
        const containerPlan = document.querySelector(`.${container}`);
        const ulCheckMarck = document.getElementById(`${ul}`);
        const span = ulCheckMarck.querySelectorAll('span');

        //Quita style previo
        if (state.selectedPlan) {
            //Quita el estilo de la card previamente seleccionada
            const stateContainer = document.querySelector(`.${state.containerPlan}`)
            stateContainer.classList.remove('cardSelected');
            
            //Quita el estilo de los checMack previamente seleccionados
            const stateUl = document.getElementById(`${state.ulCheck}`);
            const stateSPN = stateUl.querySelectorAll('span');
            stateSPN.forEach( rspn => {
                rspn.classList.remove('checkSelected')
            });

            //Cambia el texto y los styles del boton previamente seleccionado
            const stateBtn = document.querySelector(`${state.btnClick}`);
            stateBtn.textContent = 'Seleccionar'
            stateBtn.classList.remove('btnSelected');

        }
        
        //Agrega el border-color a la card
        containerPlan.classList.add('cardSelected');
        state.containerPlan = container;
        //Selecciona el ul e itela los span
        state.ulCheck = ul;
        span.forEach( spn => {
            spn.classList.add('checkSelected')
        });
        
        //Cambia el teto del boton y agrega styles
        selected.textContent = 'Seleccionado';
        selected.classList.add('btnSelected');
        state.btnClick = `.btn${plan}`;

        state.selectedPlan = true;      

    });

};