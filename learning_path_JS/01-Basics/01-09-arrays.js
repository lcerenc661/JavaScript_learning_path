// Arrays

//Old notation

let cars  = new Array('BWM', 'Mercedes Benz', 'Volvo')
console.log(cars)


/*New notation : Declaring arrays its used const because the refence 
in memory will allways be the same, but arrays values are still mutables */

const cars2 = ['BWN', 'Mercedes Benz', 'Volvo']
console.log(cars2)


/*Call one object*/

console.log(cars[0]);


//Iterating through arrays

for (let i = 0; i<cars.length; i++){
    console.log(cars[i])
}

/* Modifying Srrays elemnts =  */

cars[1] = 'MercedesBenz'
console.log(cars[1])

cars.push('Audi', 'Other Brand')
console.log(cars.length)

cars[cars.length] = 'Cadillac';
console.log(cars)

// Verifying if is an Array
console.log(Array.isArray(cars))
console.log(cars instanceof Array)

