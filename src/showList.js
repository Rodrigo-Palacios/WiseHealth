import { deletePerson } from './deletePerson.js'


export function loadPeople() {

  //recupera el listedPeople de local storage
  const storedPeople = localStorage.getItem("list");
  //verifica si la variable contiene informacion y la convierte en caso contrario crea un array vacio.
  const peopleArray = storedPeople ? JSON.parse(storedPeople) : [];
  //Devuelve el arreglo actualizado
  return peopleArray;
  
}

export function showPeople() {
   
  if (!document.getElementById('tablePeople')) {
    const renderInfo = document.getElementById('info');    
    const tablePeople = document.createElement('table');
    tablePeople.setAttribute('id', 'tablePeople');
    const theadPeople = document.createElement('thead');
    const tbodyPeople = document.createElement('tbody');
    tbodyPeople.setAttribute('id', 'tableBody');
    
    tablePeople.appendChild(theadPeople);
    tablePeople.appendChild(tbodyPeople);
    
    tbodyPeople.addEventListener('click', (e) => {
      
      const btn = e.target.closest('button');
      if (btn) {
        let id = btn.dataset.id;
        deletePerson(id);
      }
    });

    theadPeople.innerHTML = `
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Género</th>
      <th>Teléfono</th>
      <th>Correo</th>
      <th>Eliminar</th>
    </tr>
    `;

    const data = loadPeople();
    
    data.forEach(person => {
      
      const trTable = document.createElement('tr');   
      const name = document.createElement('td');
      const age = document.createElement('td');
      const gender = document.createElement('td');
      const phone = document.createElement('td');
      const email = document.createElement('td');
      const btnTd = document.createElement('td');
      const btnTbl = document.createElement('button');
      btnTbl.setAttribute('data-id', `${person.id}`);
      btnTbl.setAttribute('type', 'button');
      
      
      name.textContent = `${person.name}`;
      age.textContent = `${person.age}`;
      gender.textContent = `${person.gender}`;
      phone.textContent = `${person.phone}`;
      email.textContent = `${person.email}`;
      btnTbl.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      `;
      
      trTable.appendChild(name);
      trTable.appendChild(age);
      trTable.appendChild(gender);
      trTable.appendChild(phone);
      trTable.appendChild(email);
      btnTd.appendChild(btnTbl);
      trTable.appendChild(btnTd)
      tbodyPeople.appendChild(trTable);
      
    })
    
    renderInfo.appendChild(tablePeople);
  } else {
    
    const tBody = document.getElementById('tableBody');
    
    tBody.innerHTML = '';

    const data = loadPeople();

    if (data.length === 0 ) {
      const message = document.createElement('tr');
      message.innerHTML = `
      <td colspan="6">No hay personas registradas</td>
      `;

      tBody.appendChild(message);
    }

    data.forEach(person => {
      
      const trTable = document.createElement('tr');   
      const name = document.createElement('td');
      const age = document.createElement('td');
      const gender = document.createElement('td');
      const phone = document.createElement('td');
      const email = document.createElement('td');
      const btnTd = document.createElement('td');
      const btnTbl = document.createElement('button');
      btnTbl.setAttribute('data-id', `${person.id}`);
      btnTbl.setAttribute('type', 'button');
      
      
      name.textContent = `${person.name}`;
      age.textContent = `${person.age}`;
      gender.textContent = `${person.gender}`;
      phone.textContent = `${person.phone}`;
      email.textContent = `${person.email}`; 
      btnTbl.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      `;
      
      trTable.appendChild(name);
      trTable.appendChild(age);
      trTable.appendChild(gender);
      trTable.appendChild(phone);
      trTable.appendChild(email);
      btnTd.appendChild(btnTbl);
      trTable.appendChild(btnTd)
      tBody.appendChild(trTable);
      
    })    

  }
  
}
