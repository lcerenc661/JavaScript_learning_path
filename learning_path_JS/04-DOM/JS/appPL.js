const people = [
    new Person("Juan", "Perez"),
    new Person("Karla", "Lara")
];

function showPeople(){
    console.log("showPeople function executing")
    let text = '';
    for (let person of people){
        text += `<li> ${person.name}  ${person.lastName} </li>`;
    }
    document.getElementById("people").innerHTML = text
}

function addPerson(){
    const form = document.getElementById("form");
    const name = form["name"].value;
    const lastName = form["lastName"].value;
    if (name == "" || lastName == ""){
        console.log("Args invalid")
        return
    }
    const person = new Person(name, lastName);  
    people.push(person);
    showPeople()
}