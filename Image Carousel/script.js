const url = ["https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80",
            "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"];

let image = document.querySelector("img");
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
let c_prev = url.length -1;
let c = 0;
let c_next = 1;
prev.addEventListener('click',()=>{
    //image.src = url[c_prev--];
    //c_prev = (c_prev < 0)?url.length-1:c_prev;
    --c;
    c = (c < 0)?url.length-1:c;
    image.src = url[c];
});
next.addEventListener('click',()=>{
    //image.src = url[c_next++];
   // c_next = (c_next > url.length-1)?0:c_next;
   ++c;
    c = (c > url.length-1)?0:c;
    image.src = url[c];
});