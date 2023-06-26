const button = document.querySelector("button");
const state = document.querySelector(".on-off");
const bulb = document.querySelector("#bulb");
let flag = 0; // flag=0 --> Off |||||| flag=1 --> On

button.addEventListener('click',()=>{
    console.log(window.getComputedStyle( bulb,null).getPropertyValue('color'));
    if(flag == 0)
    {
        state.innerHTML = 'Off';
        flag = 1;
        bulb.style.color = "var(--yellow)";
        bulb.style.filter = "drop-shadow(0 0 16px var(--yellow))";
    }
    else
    {
        state.innerHTML = 'On';
        flag = 0;
        bulb.style.color = "white";
        bulb.style.filter = "none";
    }
});