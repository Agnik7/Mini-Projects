const inc= document.querySelector(".increase");
const decrease= document.querySelector(".decrease");
const reset= document.querySelector("#reset");
const val = document.querySelector(".count");
let count = 0;
val.innerHTML = count;
inc.addEventListener('click',()=>{
    count= count+1;
    val.innerHTML = count;
    change_color();
    console.log("Increase button clicked")
});
decrease.addEventListener('click',()=>{
    count= count-1;
    val.innerHTML = count;
    change_color();
    console.log("Decrease button clicked")
});
reset.addEventListener('click',()=>{
    count= 0;
    val.innerHTML = count;
    change_color();
    console.log("Reset button clicked")
});

const change_color = ()=>{
    if(count > 0)
        val.style.color = "var(--green)";
    else if(count < 0)
        val.style.color = "var(--red)";
    else
        val.style.color = "var(--white)";
};