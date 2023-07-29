class Person{
    static personCounter = 0
    constructor(name, lastName, age){
        this._name= name
        this._lastName = lastName
        this._age = age
        this._idPerson = Person.personCounter++;
    }
    get idPerson(){
        return Number(this._idPerson)
    }
    get name(){
        return String(this._name)
    }
    set name(name){
        this._name = name
    }
    get lastName(){
        return String(this._lastName)
    }
    set lastName(lastName){
        this._lastName = lastName
    }
    get age(){
        return Number(this._age)
    }
    set age(age){
        this._age = age
    }
    toString (){
        return `${this.name} ${this.lastName} ${this.age}`
    } 
}

let luis = new Person('Luis Alberto', 'Ceren','25')
console.log(luis.toString())

class Employee extends Person{
    constructor(name, lastName, age, salary){
    super(name, lastName, age)
    this._salary = salary
    this._idEmployee = Person.personCounter
    }
    get idEmployee(){
        return this._idEmployee
    }
    get salary(){
        return Number(this._salary)
    }
    set salary(salary){
        this._salary = salary
    }
    toString(){
        return super.toString()+" "+ this.salary
    }
}

let tomas = new Employee('Tomas', 'Ramirez', 26, '3000000')
console.log(tomas.toString())
console.log(tomas.idEmployee)