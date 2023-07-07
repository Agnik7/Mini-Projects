const red = document.querySelector('#R');
const green = document.querySelector('#G');
const blue = document.querySelector('#B');
const code = document.querySelector('.code');
const generate = document.querySelector('.generate');
const Root = document.querySelector(':root');
const copy = document.querySelector('.copy');
let r= 0,g=0,b=0;

const colourGenerate =  ()=>{
    code.innerHTML = `rgb(${r}, ${g}, ${b})`;
    Root.style.setProperty('--bg-col-box', `rgb(${r}, ${g}, ${b})`);
};


red.addEventListener('input',()=>{
    document.querySelector('.val-R').innerHTML = red.value;
    r = red.value;
    colourGenerate();
});
green.addEventListener('input',()=>{
    document.querySelector('.val-G').innerHTML = green.value;
    g = green.value;
    colourGenerate();
});
blue.addEventListener('input',()=>{
    document.querySelector('.val-B').innerHTML = blue.value;
    b = blue.value;
    colourGenerate();
});



copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(code.innerHTML);
    alert("RGB code copied to clipboard.");
})