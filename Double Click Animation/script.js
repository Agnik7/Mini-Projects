const container = document.querySelector(".container");
const icon = document.querySelector("#icon");
container.addEventListener('dblclick',(e)=>{
    let x = e.pageX;
    let y = e.pageY;
    console.log("X = " + x);
    console.log("Y = " + y);
    icon.style.display = "block";
    icon.style.top = y+"px";
    icon.style.left = x+"px";
    setTimeout(()=>{
        icon.style.display = "none";
    }, 1000);
});