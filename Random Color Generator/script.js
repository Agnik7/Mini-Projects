const button = document.querySelector(".generate");

const hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
button.addEventListener('click', ()=>{
    let color = "#" + hex[parseInt(Math.random()*100)%16]+hex[parseInt(Math.random()*100)%16]+hex[parseInt(Math.random()*100)%16]+hex[parseInt(Math.random()*100)%16]+hex[parseInt(Math.random()*100)%16]+hex[parseInt(Math.random()*100)%16];
    document.body.style.backgroundColor = color;
});