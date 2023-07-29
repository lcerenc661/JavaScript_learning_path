// WHILE LOOPS

/*Use a counter to control the loops*/

let counter = 0

while (counter < 3){
    counter++
    console.log("loop #", counter)
}

//=========================================================================================================================>>>>

// DO WHILE LOOPS

/* The main difference with the "While loops" its that do while will excecute the block of code at least for one time,
after that it will evaluate the condition to repeat the block or not*/

counter = 4

do{
    counter ++;
    console.log('loop #', counter);
}while(counter<3);

//=========================================================================================================================>>>>

// FOR LOOPS

for(let i=0; i<4; i++){
    console.log('counter', i)
}

let val
let myArray = [1,2,3,5,6,4];
for (let i=0; i<myArray.length; i++){
    val = myArray[i] * 2
    if (val==10){continue}
    console.log('value: ', val)
    
   
}