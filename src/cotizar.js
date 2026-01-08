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
    
    const infoPlanes = await planes.json();
    // console.log('infoPlanes:', infoPlanes);

    const payload = await costos.json();
    // console.log('payload', payload);

    const costosArray = Array.isArray(payload.items) ? payload.items : [];
    const planesArray = Array.isArray(infoPlanes.item) ? infoPlanes.item : [];
 
    const specByPlan = new Map(planesArray.map( specs => [specs.plan, specs]));
    
    const merged = costosArray.map(costo => {
        const agregaA = specByPlan.get(costo.plan) ||{};
        return {...costo, ...agregaA}
    })

    const planOrden = ["optimo", "premium", "esencial"];

    const atributos = [
        {label: "Suma asegurada", key: "suma_asegurada", type: "moneda"},
        { label: "Deducible", key: "deducible", type: "uma" },
        { label: "Coaseguro", key: "coaseguro", type: "porcentaje" },
        { label: "Tope coaseguro", key: "tope_coaseguro", type: "moneda" },
        { label: "Costo anual", key: "total", type: "moneda" }
    ]

    const porPlan = {};
    for (const plan of merged) {
        porPlan[plan.plan] = plan;
    }

    const tableVM = {
        columns: planOrden,
        rows: []
    }

    //recorre atributos (filas)
    for (const atributo of atributos) {
        const valoresFila = [];
        
        //recorre planes (colums)
        for(const planNombre of planOrden) {
            const ordenPlan = porPlan[planNombre];
            const valor = ordenPlan ? ordenPlan[atributo.key] : null;
            valoresFila.push(valor);
        }

        tableVM.rows.push({
            label: atributo.label,
            type: atributo.type,
            values:valoresFila
        });
    }


    console.log(tableVM);

    renderTarifas(tableVM);


}