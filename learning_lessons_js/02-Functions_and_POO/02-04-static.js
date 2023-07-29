/*STATIC METHODS: the static methods are those who are associated with the class,
 not with objects instanciated with the class */

class Person{

    static counter = 0;  //Class attribute
    nonStaticCounter = 0  //Object attribute

    static get MAX_OBJ(){
        return 5
    }
    constructor(name, lastName){
        this._name = name;
        this._lastName = lastName;
        if (Person.counter < Person.MAX_OBJ){
            this.idPerson = ++Person.counter
        }
        else{
            console.log('Max limit of objects reached')
        }
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName
    }
    get lastName(){
        return this._lastName
    }
    set lastName(newLastName){
        this._lastName = newLastName
    }
    static greet(){
        console.log('Greetings from the static method');
    }
    static greet2(person){
        console.log('Greetings '+ person.name + ' from the static method');
    }
}

let carlos = new Person("Carlos", "casas")
console.log(Person.counter)
let juan = new Person("Juan", "casas")
carlos.name = 'Carlos Daniel'
console.log(carlos.name)


/*carlos cant use the method, but the class Person can */

Person.greet()
Person.greet2(carlos)

/*Static attributes also are associated with the class. The child classes can
 use the static methods and attributes from fathers class  */

console.log(Person.counter)
console.log(carlos.counter)
console.log(Person.nonStaticCounter)
console.log(carlos.nonStaticCounter)

class Employee extends Person{
    constructor(name, lastName, department){
        super(name, lastName)
        this._department = department
    }
    get department(){
        return this._department
    }
    set department(newDepartment){
        this._department = newDepartment
    }
    fullName(){
        return super.fullName() + " from: " + this._department
    }
}

let tomas = new Employee('Tomas', 'Ramirez', 'IT')

console.log(carlos.idPerson)
console.log(juan.idPerson)
console.log(tomas.idPerson)

let alejandro = new Employee('Alejandro', 'Ramirez', 'IT')
let maria = new Employee('Maria', 'Ruiz', 'IT')
let mario = new Employee('MArio', 'Montoya', 'IT')
console.log(Person.MAX_OBJ);

console.log(mario.idPerson)