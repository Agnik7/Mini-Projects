let list = document.querySelector(".list");
const add = document.querySelector(".add");
const complete = document.querySelector(".complete")
let inp = document.querySelector("#input");
add.addEventListener('click',()=>{
    if(inp.value.length == 0)
        document.querySelector(".error").style.display = "block";
    else{
        document.querySelector(".error").style.display = "none";
        list.innerHTML+= `
                        <div>
                            <input type="checkbox" id = "complete" class = "complete"/>
                            <p>${inp.value}</p>
                            <button onclick= "remove(this)"><i class='bx bxs-trash'></i></button>
                        </div>
                        `;
    inp.value = null;
    }
    
    
});
const remove = (e)=>{e.parentElement.remove();};