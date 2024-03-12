console.log("Digital Clock");
let hour=document.getElementById("hour");
let min=document.getElementById("minutes");
let sec=document.getElementById("seconds");
let AMPM=document.getElementById("AP");


function digitalClock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    hour.innerText=hours;
    min.innerText=minutes;
    sec.innerText=seconds;
    AMPM.innerText=meridiem;

}

setInterval(digitalClock, 1000);

digitalClock();

