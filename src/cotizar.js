import { renderTarifas } from './renderTarifas.js';


const BASE_URL = import.meta.env.VITE_API_URL;

//obtiene la data de local storage que se renderizo
export async function cotizar(data) {  
      
    const personas = data;
    
    const cotizarPersonas = personas.map( persona => ({
        edad: Number(persona.age),
        genero: String(persona.gender).trim()
    }));
  
    const costos = await fetch(`${BASE_URL}/api/cotizar`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({personas: cotizarPersonas})
    });

    const planes = await fetch(`${BASE_URL}/api/planes`, {
        method: 'GET',
        headers: {'Accept': 'application/json'}       
    });
    
    //Obtiene un objeto con los costos de cada plan
    const infoPlanes = await planes.json();
    // console.log('infoPlanes:', infoPlanes);
    
    //Obtiene un objeto con las caracteristicas de cada plan
    const payload = await costos.json();
    // console.log('payload', payload);

    //Verifica que infoPlanes sea un arreglo sino lo es lo lo crea
    const costosArray = Array.isArray(payload.items) ? payload.items : [];
    // console.log(costosArray);

    //Verifica que paylod sea un arreglo sino lo es lo lo crea
    const planesArray = Array.isArray(infoPlanes.item) ? infoPlanes.item : [];
    // console.log(planesArray);
 
    //crea un Map(diccionario indexado por llave-valor) que contiene una tupla donde la key es el plan y el value las caracteristicas
    const specByPlan = new Map(planesArray.map( specs => [specs.plan, specs]));
    // console.log(specByPlan);
    
    //Recorre costosArray y specByPlan, los combina usando costos.plan con las especificaciones obtenidad de specByPlan y crea un arreglo
    const merged = costosArray.map(costo => {
        const agregaA = specByPlan.get(costo.plan) || {};// || {} => si no lo encuentra crea el objeto vacio
        return {...costo, ...agregaA}
    });
    // console.log(merged);
    
    //Crea un Map separado por plan
    const porPlan = new Map(merged.map(plan => [plan.plan, plan]));

    // console.log(porPlan);

    const planOrden = ['optimo', 'premium', 'esencial'];

    const atributos = [
        {label: "Suma asegurada", key: "suma_asegurada", type: "moneda"},
        { label: "Deducible", key: "deducible", type: "uma" },
        { label: "Coaseguro", key: "coaseguro", type: "porcentaje" },
        { label: "Tope coaseguro", key: "tope_coaseguro", type: "moneda" },
        { label: "Costo anual", key: "total", type: "moneda" }
    ]

    let cardsVM = [];

    for( let planName of planOrden){
        const planData = porPlan.get(planName);

        let card = {
            plan: planName,
            items: []
        }

        for(let atributo of atributos) {
            card.items.push({
                label: atributo.label,
                type: atributo.type,
                value: planData[atributo.key]

            });
        }
        cardsVM.push(card);
    }

    // console.log(cardsVM);  

    renderTarifas(cardsVM);

}