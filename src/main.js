import { showPeople, loadPeople } from "./showList.js";

// seleciona el boton del form
const btnForm = document.getElementById('buttonForm');

// Crea un objeto donde que se almacena en listedPeople
class Person {
    constructor(name, /*phone, email,*/ age, gender) {
        
        this.id = Person.#nextId;
        this.name = name    
        // this.phone = phone
        // this.email = email
        this.age = age
        this.gender = gender    
    }

    static #nextId = Date.now();

}

btnForm.addEventListener('click', (e) => {
    
    
    e.preventDefault();

    // Almacena los objetos de la clase Person
    let listedPeople = loadPeople();
    
    //Obtine los compos del form
    let form = document.forms['newPerson'];
    let name = form.name.value;
    // let phone = form.phone.value;
    // let email = form.email.value;
    let age = form.age.value;
    let gender = form.gender.value;

    const validity = form.reportValidity();
    
    if (validity) {
        //Agrega los datos del form al array listedPeople
        listedPeople.push(new Person(name, /*phone, email,*/ age, gender));
        
        //Almacena listedPeople en localStorage
        localStorage.setItem("list",JSON.stringify(listedPeople));
        
        form.reset()
        
    }
    showPeople();

});