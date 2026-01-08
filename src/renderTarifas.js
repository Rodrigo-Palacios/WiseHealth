
//Agrega la tabla de tarifas
export function renderTarifas(tableVM) {
    const tarifas = document.getElementById('tarifas');
    
    if (!document.getElementById('tableTarifas')) {
        const tableTarifas = document.createElement('table');
        tableTarifas.setAttribute('id', 'tableTarifas'); 
        tarifas.appendChild(tableTarifas);

        const tableHead = document.createElement('thead');
        tableHead.innerHTML = `
        <tr>
            <th></th>
            <th>Otimo</th>
            <th>Premium</th>
            <th>Esencial</th>
        </tr>
        `
        tableTarifas.appendChild(tableHead);

        
        tableVM.rows.forEach(row => {
            const tableBody = document.createElement('tbody');
            const tableRow = document.createElement('tr');
            tableRow.textContent = row.label;

            
            for (const valor of row.values) {
                const tableData = document.createElement('td');

                let texto = "";
                
                if(row.type === 'moneda'){
                    texto = mxn(valor);
                } else if(row.type === 'uma') {
                    texto = valor + ' UMAM';
                } else if(row.type = 'porcentaje') {
                    texto = (valor * 100) + '%';
                } else {
                    texto = '_';
                }
                
                tableData.textContent = texto;
                tableRow.appendChild(tableData);

                console.log(texto);
            }
            tableBody.appendChild(tableRow);
            tableTarifas.appendChild(tableBody);

            console.log(row);
        });

    } else {
        tarifas.textContent = '';
        const tableTarifas = document.createElement('table');
        tableTarifas.setAttribute('id', 'tableTarifas'); 
        tarifas.appendChild(tableTarifas);

        const tableHead = document.createElement('thead');
        tableHead.innerHTML = `
        <tr>
            <th></th>
            <th>Otimo</th>
            <th>Premium</th>
            <th>Esencial</th>
        </tr>
        `
        tableTarifas.appendChild(tableHead);

        
        tableVM.rows.forEach(row => {
            const tableBody = document.createElement('tbody');
            const tableRow = document.createElement('tr');
            tableRow.textContent = row.label;

            
            for (const valor of row.values) {
                const tableData = document.createElement('td');

                let texto = "";
                
                if(row.type === 'moneda'){
                    texto = mxn(valor);
                } else if(row.type === 'uma') {
                    texto = valor + ' UMAM';
                } else if(row.type = 'porcentaje') {
                    texto = (valor * 100) + '%';
                } else {
                    texto = '_';
                }
                
                tableData.textContent = texto;
                tableRow.appendChild(tableData);

                console.log(texto);
            }
            tableBody.appendChild(tableRow);
            tableTarifas.appendChild(tableBody);

            console.log(row);
        });
    }
    console.log(tableVM);
}

const mxn = pesos => new Intl.NumberFormat('es-MX', {
        style: 'currency', currency: 'MXN', maximumFractionDigits: 2
    }).format(pesos);