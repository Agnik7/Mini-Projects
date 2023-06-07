let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let h = 0, m = 0, s = 0;
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let interval;

start.addEventListener('click',()=>{
    interval = setInterval(()=>{
        s++;
        if(s == 60)
        {
            s = 0;
            m++;
        }
        if(m == 60)
        {
            m = 0;
            h++;
        }
        
        hour.innerHTML = (h < 10)?"0"+h:h;
        minute.innerHTML = (m< 10)?"0"+m:m;
        second.innerHTML = (s < 10)?"0"+s:s;
    },250); 
    
});
stop.addEventListener('click',()=>{
    clearInterval(interval);
});
reset.addEventListener('click', ()=>{
    clearInterval(interval);
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
    h = 0;
     m = 0;
     s = 0;
});