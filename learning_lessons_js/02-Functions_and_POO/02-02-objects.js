// OBJECTS

/* Objects in JS can contain properties like (name, lastname, email, age) and methods like (fullName) 

In the Objects methods, to refer to one of its propierties use the syntax "this.objproperty */

let person = {

    /*Properties*/
    name:'Juan',
    lastName: 'Perez',
    email: 'jperez@gmail.com',
    age: 28,

    /*Methods*/ 
    get fullName (){
        return this.name +" "+ this.lastName
    },

}

console.log(person)
console.log(person.email)
console.log(person.fullName)


// Creating objects with reserved word new, new is used to reserv a space in memory. 

let newPerson = new Object();
newPerson.name = 'Carlos'
newPerson.lasName = 'Sanchez'
newPerson.fullName = function (){
    return this.name +" "+ this.lasName
};

console.log(newPerson.fullName)
console.log(newPerson.name)
console.log(newPerson['name'])

// for in 

for (properety in newPerson){
    console.log(properety);
    console.log(newPerson[properety])
}

//Adding and deleting properties

// Adding
newPerson.phoneNumber = 3169426598

for (properety in newPerson){
    console.log(properety);
    console.log(newPerson[properety])
}

// deleting
delete newPerson.phoneNumber

for (properety in newPerson){
    console.log(properety);
    console.log(newPerson[properety])
}

// getting objects keys and values

let personKeys = Object.keys(newPerson)
let personValues = Object.values(newPerson)

console.log(personKeys)
console.log(personValues)

let personJson = JSON.stringify(newPerson)
console.log(personJson)

console.log(newPerson.fullName)

// GET AND SET methods in objects

/* get is used to get info about the object */

let dog ={
    dogName: 'snowflake',
    dogBreed: 'dalmata',
    age: 7,
    owner: 'alex',

    get dogAttr (){
        return this.dogName +' the ' + this.dogBreed
    },

    get dogSurName (){
        return this.dogName.slice(0,4)
    },

    get ownerName (){
        return this.owner.toUpperCase();
    },
    set ownerName( owner ){
        this.owner = owner.toUpperCase();
    }
}

console.log(dog.dogSurName)
dog.ownerName = 'luis'
console.log(dog.owner)

/* The constructor method:
 Is a special method of a class for creating and initializing an object instance of that class*/

 function Person (name,lastname, email){
    this.name = name;
    this.lastName = lastname;
    this.email = email;
    this.fullName = function(){
        return this.name + " "+ this.lastName
    }
 }

 /* Using the reserved word new*/

let person1 = new Person('Juan', 'Perez', 'pere@gmail.com');
console.log(person1)
console.log(person1.fullName())

let person2 = new Person ('Maria', 'Casas','mcasas@gmail.com');
console.log(person2)
console.log(person2.fullName())


/*Adding properties with prototype, prototype adds a property to all the objects created using the class defined,
giving a default value */

Person.prototype.tel = 3156322556
console.log(person1.tel)
console.log(person2.tel)

Person.prototype.initials = function(){
    return this.name.slice(0,1) + this.lastName.slice(0,1)
}

console.log(person1.initials())
console.log(person2.initials())