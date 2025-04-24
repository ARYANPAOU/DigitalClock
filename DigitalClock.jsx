import { useState, useEffect } from "react";

function DigitalClock(){

    const[time, settime]=useState(new Date());

    useEffect(()=>{  const IntervalId= setInterval(()=>{settime(new Date());},1000);
return()=>{
    clearInterval(IntervalId);
}  }
,[]);
//ABOVE USE EFFECT CODE EXPLAINED
// this code says that after every 1000ms or 1s, it will update to new date object.
//personal-note= we learned the set interval in JS async programming.
//now to create a return statement which will reset the timer opon unmounting.

function TimeFormat(){
    let hours= time.getHours();
    const minutes= time.getMinutes();
    const seconds= time.getSeconds();
//code to display time in 12 hr format
    const AmPm= hours >=12 ? "PM" : "AM";
    hours= hours % 12|| 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${AmPm}`   
    
}
function padZero(number){
    return(number < 10? "0" : "") + number;
}


    return(<div className="clock-container">
        <div className="clock">
            <span>{TimeFormat()}</span>
        </div>
    </div>);
    
}

export default DigitalClock;