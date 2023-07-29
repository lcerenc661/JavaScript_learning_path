/*
Data type examples
*/

// Data type String
var nombre = "Luis";
console.log(nombre, typeof nombre);


// Data type Number
var numero = 18;
console.log(numero, typeof numero);

var numero2 = 18.5;
console.log(numero2, typeof numero2);


// Data type Object
var object = {
    nombre:"Alejandro",
    apellido:"Correa",
}
console.log(object.nombre, typeof object)


// Data type boolean(true, false)
var bandera = false; 
console.log(bandera, typeof bandera);


// Data type function
function miFuncion(){};
console.log(miFuncion, typeof miFuncion);


// Data type Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo, typeof simbolo);


//Class type are function
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido
    }
}
console.log(persona, typeof persona)

class pokemom {
    constructor(clase, nombre){
        this.clase = clase
        this.nombre = nombre
        this.nivel = 0
    }
}
 
pikachu = new pokemom('Electricidad', 'Pikachu')
console.log(pikachu.clase)

//Undefined type

var x;
console.log(x, typeof x);

//Null type

var y = null; 
console.log(y, typeof y)


// ================================================================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Arrays in JS are objects
var autos = ['BMW', 'Audi', 'Volvo',25];
console.log(autos, typeof autos)
console.log(autos[3], typeof autos[3])
console.log(autos[0], typeof autos[0])




