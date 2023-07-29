function myFunc(){
    console.log("Greetings from my func");
}

let myArrowFunc = () => {
    console.log("Greetings from my arrow function")
}

myFunc();
myArrowFunc();

/*Arrow functions doest apply hoisting, this because the use of the reserved word "let" */

let greet = () => "Greetings from another arrow function";
console.log(greet())

let returnObject = ()=>({nombre: 'Juan'})
console.log(returnObject())

let funcWithParams = (x)=> console.log(x)
funcWithParams("greetings")

let otherFunc = (x,y) => x+y
console.log(otherFunc(8,9))