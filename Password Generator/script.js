const passwordShow = document.querySelector("#pass");
const clipboard = document.querySelector("#copy-icon");
const range = document.querySelector("#range");
const span = document.querySelector(".slider span");
const but = document.querySelector("button");

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.+-*/&%^$#@~!,{}[]()?:;"
let password = '';

const generate = ()=>{
    password = '';
    let val = range.value;
    for(let i = 0; i < val;i++)
    {
        let rand = Math.floor(Math.random()*characters.length);
        password += characters[rand];
    }
    passwordShow.value = password;
}

range.addEventListener('input',()=>{
    span.innerHTML = range.value;
    generate();
})

but.addEventListener('click',()=>{
    generate();
})

clipboard.addEventListener('click',()=>{
    navigator.clipboard.writeText(passwordShow.value)
    alert("Copied to clipboard")
})