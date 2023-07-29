console.log('JS watch enabled')

const showWatch = ()=>{

    let date = new Date();
    let hour = hourFormat(date.getHours());
    let minutes = hourFormat(date.getMinutes());
    let seconds = hourFormat(date.getSeconds());
     

    const months = ['Jan','Feb','Apr','Mar','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fryday', 'Saturday'];
    
    let day = date.getDate();
    let weekDay = days[date.getDay()];
    let month = months[date.getMonth()];

    document.getElementById("hour").innerHTML = `${hour} : ${minutes} : ${seconds}`;
    document.getElementById("date").innerHTML = `${month} ${day}, ${weekDay}`;

    document.getElementById("container").classList.toggle('animate');
}

const hourFormat = (hour)=>{
    if (hour<10){
        hour = "0" + hour;
    }
    return hour;
}

setInterval(showWatch,1000);