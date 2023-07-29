myFunc(6,6)
// FUNCTIONS :Declaring a function use the reserved word "Function", also use camelcase

function myFunc(a,b){
    console.log("sum : "+ (a+b))
    return a+b
}

/*In js you can call a function after or before defining it,
 this is known as Hoisting(transfer the function definition to the begining of the file, so it can be used anywhere)*/

result = myFunc(2,7);
console.log(result)

/* Return is added implicitly in alll js functions, if its not definded.*/


// Anonymus functions

let x = function(a,b){return a+b}

result = x(1,2)
console.log(result);


/* Self invoking functions: the syntax use an anonymus function inside parenthesis
 and next put another aprenthesis with the arguments to call the function, this functions only can be called once, 
  because its not defined in a variable*/

(function (){
    console.log('Executing function')
})();

(function (a,b,c){
    console.log('RESULT :'+ (a+b+c))
})(7,8,9)


// Functions as Objects : using methods

function newFunc(a,b){
    let result = a+b;
    console.log(result)
    console.log(arguments.length)
    console.log(newFunc.toString)
}

newFunc(5,6)


// Arrow functions, mostly const is used to define it. the arrow funtions will return the value after the arrow operator.

const sumArrowFunction = (a,b) => a+b;
result = sumArrowFunction(12,15)
console.log(result)



/* Functions managing args, the functions can recive any number of arguments. 
different from the parameters, which are specified when the function is defined.*/

function sumArgs(){
    let result = 0;
    for (let i = 0; i<arguments.length; i++){
        result = arguments[i] + result;
        }
    console.log(result)
    return result
    
}

result = sumArgs(7,8,5,2,18)
console.log(result)



let z = 10;


//======================================================================================================================>>>>>

// Pass-by-value of primitive values


/* Pass the "y" variable into the square() function. When passing the variable "y" to the square() function,
 JavaScript copies "y" value to the "x" variable.
 
 After that, the square() function changes the x variable. However, it does not impact the value of the y variable
because x and y are separate variables.*/ 

function square(x){
    x = x*x;
    return x
}

let y = 10;
result = square(y);

console.log(result)
console.log(y)


// Pass-by-value of refernce values

/* JavaScript engine creates the obj reference and make this variable reference the same object that the 
person variable references.

After that, increase the age property by one inside the increaseAge() function via the obj variable*/ 

let person = {
    name:'Jhon',
    age:25,
};

function increaseAge(obj){
    obj.age += 1
};

increaseAge(person);
console.log(person)

