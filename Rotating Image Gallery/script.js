const container = document.querySelector(".container");
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let angle=0;
let timer=0;
prev.addEventListener('click',()=>{
    angle+=45;
    clearTimeout(timer);
    rotateGallery();
});

next.addEventListener('click', ()=>{
    angle-=45;
    clearTimeout(timer);
    rotateGallery()
});

const rotateGallery = ()=>{
container.style.transform = `perspective(1300px) rotateY(${angle}deg)`;
timer = setTimeout(()=>{
    angle-=45;
    rotateGallery();
},3000);
};

rotateGallery();