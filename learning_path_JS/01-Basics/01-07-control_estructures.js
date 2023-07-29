// IF - ELSE IF - ELSE

let hour = 14

let morning = [6,7,8,9,10,11]
let afternoon = [12,13,14,15,16,17,18]
let night = [19,20,21,22,23,24]
let earlyMorning = [0,1,2,3,4,5]


if (morning.includes(hour)){
    console.log('Good Morning')
}
else if(afternoon.includes(hour)){
    console.log('Good afternoon')
}
else if(night.includes(hour)){
    console.log('Good Night')
}
else if(earlyMorning.includes(hour)){
    console.log('Sleeping')
}
else{
    console.log('invalid value')
}

//===========================================================================================>>>>>>>>>>

// SWITCH

/*The switch statement needs the break command to stop the execution, if break is not found, 
it will continue executing the next case

Use deafult for the final case, as else is used in the "IF" statements */

let number = 2;

let strNumber = 'unknown value'

switch ( number ){
    case 1:
        strNumber = 'number one';
        break;
    case 2:
        strNumber = 'number two';
        break;
    case 3:
        strNumber = 'number three';
        break;
    default:
        strNumber = 'NOn-matching case'
}
console.log(strNumber)


let month = 4;
let season = 'Unknown'


switch(month){
    case 1: case 2: case 12:
        season = 'winter'
        break
    case 3: case 4: case 5: 
        season = 'spring'
        break
    case 7: case 8: case 9:
        season = 'summer'
        break
    case 10: case 11: case 12:
        season = 'autumn'
        break 
    default:
        'Non-matching case'
}
console.log(season)