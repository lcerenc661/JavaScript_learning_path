'use strict'

/* The Finally block will always be excecuted, but it use is optional */

/* usimng the reserved word "throw" you can call your own errors*/

try{
    let x = 10;
    throw 'My Error';
}
catch(error){
    console.log(error)
}
finally{
    console.log('Error handling finished')
}

let result = 100

try{
     y =12
     if(isNaN(result)) throw "Not a number"
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}