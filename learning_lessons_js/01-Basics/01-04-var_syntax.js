/* In order to declare a varible its used "let" and "const", but also you can declare variables without using reserved words.
 For good practices use let */

nombre = "luis";
console.log(nombre)

// Its possible to declare de variable first and then assign the value, if its required.

let na; 
na = "JUAN"
console.log(na, typeof na)

// When you define a constant with the reserved word const its value cant be changed.

const apellido = "Perez"
console.log(apellido, typeof apellido)


// ========================================================================================================================>>><

/*  Good practices
 1. Use camelCase for the variables = nombreCompleto
 2. Use let or const
 3. Its possible to declare or assingn two variables at same time
 4. A variable can't start with a numeric caracter, it can starts with "_" or "$" or "A-z".
 5. A variable can't have the same name as a reserved word (class, let, break, conts) */

let x,y ;
x=10, y=20;
let z = x + y;
console.log(z);

let _1nombreCompleto
let $nombre_Completo
let nombreCompleto
