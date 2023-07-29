let a = 11;

if (a%2==0){
    console.log('its even')
}

else{
    console.log('its odd')
}

// =============================================================================================================>>>

let age = 10, legalAge = 18
if (age>=legalAge){
    console.log('Its legal')
} 
else {
    console.log('its not legal')
}

// =============================================================================================================>>>

let valMin = 0, valMax = 10

if (valMin < a && valMax > a){
    console.log('its in range')
}
else{
    console.log('not in range')
}

if (valMin < a || valMax > a){
    console.log('its in range')
}
else{
    console.log('not in range')
}

// =============================================================================================================>>>

//Ternary Operator

let resultado = (2>3) ? 'verdadero' : 'falso';
console.log(resultado)

let numero = 9
resultado = (numero%2 == 0) ? 'Odd' : 'even'
console.log(resultado)


// =============================================================================================================>>>

// Transform an str to a number

let myNumber = '17x'
console.log(myNumber)

edad = Number(myNumber)
console.log(edad)

if (isNaN(edad)){
    console.log('Not a Number');
}
else{
    if (edad>=18){
        console.log('Its allowed to vote')
    }
    else{
        console.log('ist not allowed to vote')
    }
}

