import { loadPeople, showPeople } from "./showList.js";

export function deletePerson(id) {
    
    let findId = parseInt(id);
    const storedPeople = loadPeople();
    
    console.log(findId);
    
    let finded = storedPeople.findIndex(find => find.id === findId);

    storedPeople.splice(finded, 1);

    localStorage.setItem("list", JSON.stringify(storedPeople));

    showPeople();

}