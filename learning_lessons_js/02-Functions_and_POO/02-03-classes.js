/* Classes are templates for creating objects, objects will inherit attributes and methods from classes. */ 

/* Use the reserved word class and the constructor */
/* Remenber that the GET and SET methods dont use parenthesis when called */

class Person{ 
    constructor(name, lastName){
        this._name = name;
        this._lastName = lastName;
        }

    get name(){
        return this._name
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

    fullName() {
        return this._name + " " + this._lastName
    }
}

let luis = new Person('Luis', 'Correa');
console.log(luis, typeof(luis))
luis.name = 'Juan' // SET method
console.log(luis.name) // GET method


/* Classes contrary to functions doesnt apply hoisting, which means that in order to
 create an object is needed that the class is defined first*/ 


/*INHERITANCE: creating class from classes, the child class inherit the father methods and attributes */
/* In order to inheritance, use the reserved word extends */
/* The child class can override the father method to change its function */

class Employed extends Person {
    constructor (name, lastName, department){
        super(name, lastName);
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

let Juan = new Employed('Juan', 'Casas', 'IT')
console.log(Juan)
console.log(Juan.name)
console.log(Juan.fullName())
console.log(luis.fullName())