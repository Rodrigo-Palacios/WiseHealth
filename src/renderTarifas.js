import { toUpper } from "./toUpper.js";
import { formMill } from "./formatoMillones.js";
import { formPor } from "./formatoPorciento.js";
import { formMiles } from "./formatoMiles.js";
import { btnSelect } from "./btnPlan.js";

const CHECK_GREEN = new URL('./assets/check_green.svg', import.meta.url).href;

//Agrega la tabla de tarifas
export function renderTarifas(cardsVM) {
    const tarifas = document.getElementById('tarifas');
    
    if (!document.getElementById('headerTarifas')) {
        const headerTarifas = document.createElement('div');
        headerTarifas.id = 'headerTarifas';
        const h2Tarifas = document.createElement('h2');
        h2Tarifas.textContent = 'Elige tu cobertura ideal';
        headerTarifas.appendChild(h2Tarifas);
        const pTarifas = document.createElement('p');
        pTarifas.textContent = 'Compara los beneficios y selecciona el plan que mejor se adapte a ti.';
        headerTarifas.appendChild(pTarifas);

        tarifas.appendChild(headerTarifas);


        const containerTarifas = document.createElement('div');
        containerTarifas.id = 'containerTarifas';
        
        tarifas.appendChild(containerTarifas);

        cardsVM.forEach(i => {

            const nombres = {
                optimo: "Óptimo",
                premium: "Premium",
                esencial: "Esencial"
            }

            //**Pone la primera letra en mayusculas */
            const planUpper = toUpper(i.plan)

            //Agreca cada card
            const cardSpec = document.createElement('div');
            cardSpec.classList.add(`card${planUpper}`)
            containerTarifas.appendChild(cardSpec);

            //Crea el header de cada card
            const divPlan = document.createElement('div');
            divPlan.id = i.plan;

            const h2Plan = document.createElement('h2');
            h2Plan.id = `h2${planUpper}`;
            h2Plan.textContent = `${nombres[i.plan]}`;

            //Agrega el h2 al div de cada plan y el div del plan al div del card
            divPlan.appendChild(h2Plan);
            cardSpec.appendChild(divPlan);

            //Crea div con precio y vigenci del plan
            const precioVigencia = document.createElement('div');
            precioVigencia.id = `preci${planUpper}`;

            const precio = document.createElement('span');
            precio.textContent = mxn(i.items[4].value);

            const anual = document.createElement('span');
            anual.textContent = ' /año';
            precioVigencia.appendChild(precio);
            precioVigencia.appendChild(anual);
            
            cardSpec.appendChild(precioVigencia);

            //Crea ul con la data del plan
            const lista = document.createElement('ul');
            lista.id = `ul${planUpper}`;
            
            cardSpec.appendChild(lista);

            
            i.items.forEach(item => {
                if (item.label === "Costo anual") {
                    return;
                }
                const li = document.createElement('li');                
                
                let valueText = item.value;
                
                if (item.label === "Suma asegurada") {
                    valueText = formMill(item.value);
                }
                
                if (item.label === "Deducible") {
                    valueText = `${item.value} UMAM`
                }
                
                if (item.label === "Coaseguro") {
                    valueText = formPor(item.value);
                }
                
                if (item.label === "Tope coaseguro") {
                    valueText = formMiles(item.value);
                }
                
                li.innerHTML = `
                <span class="check_marck"></span>${item.label}: <strong>${valueText}</strong>
                `;

                lista.appendChild(li);

            })   
            
            const btnPlan = document.createElement('button');
            btnPlan.classList.add(`btn${i.plan}`);
            btnPlan.dataset.planId = i.plan;
            btnPlan.textContent = 'Seleccionar';
            
            cardSpec.appendChild(btnPlan);
            
        });
        
        const cardOptimo = document.getElementById('optimo');
        const cardPremium = document.getElementById('premium');
        const cardEsencial = document.getElementById('esencial');
        
        const pOptimo = document.createElement('p');
        pOptimo.id = 'pOptimo';
        pOptimo.textContent = 'Balance costo-beneficio.';
        
        const pPremium = document.createElement('p');
        pPremium.id = 'pPremium';
        pPremium.textContent = 'Máxima protección posible.';
        
        const pEsencial = document.createElement('p');
        pEsencial.id = 'pEsencial';
        pEsencial.textContent = 'Protección básica vital.';
        
        cardOptimo.appendChild(pOptimo);
        cardPremium.appendChild(pPremium);
        cardEsencial.appendChild(pEsencial);

        btnSelect();
              
    } else {
        //Limpia el contenedor de las cards
        document.getElementById('tarifas').textContent = '';
        const headerTarifas = document.createElement('div');
        headerTarifas.id = 'headerTarifas';
        const h2Tarifas = document.createElement('h2');
        h2Tarifas.textContent = 'Elige tu cobertura ideal';
        headerTarifas.appendChild(h2Tarifas);
        const pTarifas = document.createElement('p');
        pTarifas.textContent = 'Compara los beneficios y selecciona el plan que mejor se adapte a ti.';
        headerTarifas.appendChild(pTarifas);

        tarifas.appendChild(headerTarifas);


        const containerTarifas = document.createElement('div');
        containerTarifas.id = 'containerTarifas';
        
        tarifas.appendChild(containerTarifas);

        cardsVM.forEach(i => {

            const nombres = {
                optimo: "Óptimo",
                premium: "Premium",
                esencial: "Esencial"
            }

            //**Pone la primera letra en mayusculas */
            const planUpper = toUpper(i.plan)

            //Agreca cada card
            const cardSpec = document.createElement('div');
            cardSpec.classList.add(`card${planUpper}`)
            containerTarifas.appendChild(cardSpec);

            //Crea el header de cada card
            const divPlan = document.createElement('div');
            divPlan.id = i.plan;

            const h2Plan = document.createElement('h2');
            h2Plan.id = `h2${planUpper}`;
            h2Plan.textContent = `${nombres[i.plan]}`;

            //Agrega el h2 al div de cada plan y el div del plan al div del card
            divPlan.appendChild(h2Plan);
            cardSpec.appendChild(divPlan);

            //Crea div con precio y vigenci del plan
            const precioVigencia = document.createElement('div');
            precioVigencia.id = `preci${planUpper}`;

            const precio = document.createElement('span');
            precio.textContent = mxn(i.items[4].value);

            const anual = document.createElement('span');
            anual.textContent = ' /año';
            precioVigencia.appendChild(precio);
            precioVigencia.appendChild(anual);
            
            cardSpec.appendChild(precioVigencia);

            //Crea ul con la data del plan
            const lista = document.createElement('ul');
            lista.id = `ul${planUpper}`;
            
            cardSpec.appendChild(lista);

            
            i.items.forEach(item => {
                if (item.label === "Costo anual") {
                    return;
                }
                const li = document.createElement('li');                
                
                let valueText = item.value;
                
                if (item.label === "Suma asegurada") {
                    valueText = formMill(item.value);
                }
                
                if (item.label === "Deducible") {
                    valueText = `${item.value} UMAM`
                }
                
                if (item.label === "Coaseguro") {
                    valueText = formPor(item.value);
                }
                
                if (item.label === "Tope coaseguro") {
                    valueText = formMiles(item.value);
                }
                
                li.innerHTML = `
                <span class="check_marck"></span>${item.label}: <strong>${valueText}</strong>
                `;

                lista.appendChild(li);

            })   
            
            const btnPlan = document.createElement('button');
            btnPlan.classList.add('btnPlan');
            btnPlan.classList.add(`btn${i.plan}`);
            btnPlan.dataset.planId = i.plan;
            btnPlan.textContent = 'Seleccionar';
            
            cardSpec.appendChild(btnPlan);
            
        });
        
        const cardOptimo = document.getElementById('optimo');
        const cardPremium = document.getElementById('premium');
        const cardEsencial = document.getElementById('esencial');
        
        const pOptimo = document.createElement('p');
        pOptimo.id = 'pOptimo';
        pOptimo.textContent = 'Balance costo-beneficio.';
        
        const pPremium = document.createElement('p');
        pPremium.id = 'pPremium';
        pPremium.textContent = 'Máxima protección posible.';
        
        const pEsencial = document.createElement('p');
        pEsencial.id = 'pEsencial';
        pEsencial.textContent = 'Protección básica vital.';
        
        cardOptimo.appendChild(pOptimo);
        cardPremium.appendChild(pPremium);
        cardEsencial.appendChild(pEsencial);

        btnSelect();
        
        
    }
    // console.log(tableVM);
}

const mxn = pesos => new Intl.NumberFormat('es-MX', {
        style: 'currency', currency: 'MXN', maximumFractionDigits: 2
}).format(pesos);

