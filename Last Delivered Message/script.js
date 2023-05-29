const but = document.querySelector("button");
const inp = document.querySelector("input");
const err = document.querySelector(".error");
const msg = document.querySelector(".message");
but.addEventListener('click',()=>{
    if((inp.value).length == 0)
        err.style.display="block";
    else
    {
        err.style.display="none";
        msg.innerHTML = inp.value;
        inp.value = null;
    }
    
});
