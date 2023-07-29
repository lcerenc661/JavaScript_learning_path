// let mypromise = new Promise((resolve, reject) => {
//     let expresion = false;
//     if(expresion){
//         resolve('Resolved correctly');
//     }
//     else{
//         reject('An error has ocurred');
//     }
// });

// mypromise.then( value => console.log(value), error =>console.log(error));
// mypromise.then(value => console.log(value)).catch(error=>console.log(error));

let newPromise = new Promise((resolve)=>{
    console.log('Start promise');
    setTimeout( ()=> resolve('Greetings with promise and timeout'), 3000);
    console.log('End promise');
});

newPromise.then(value => console.log(value));

/*ASYNC before a method means that its returning a promise */

async function myPromiseFunc(){
    return "Greetings with async"
}

// myPromiseFunc().then(value => console.log(value))

/*AWAIT wait for the promises result */

async function awaitFunc(){
    let aPromise = new Promise(resolve => {
        resolve("Await promise");
    });

    console.log(await aPromise)
}