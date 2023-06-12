const container = document.querySelector(".container");
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let angle=0;
let timer=0;
prev.addEventListener('click',()=>{
    angle+=36;
    clearTimeout(timer);
    rotateGallery();
});

next.addEventListener('click', ()=>{
    angle-=36;
    clearTimeout(timer);
    rotateGallery()
});

const rotateGallery = ()=>{
container.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
timer = setTimeout(()=>{
    angle-=36;
    rotateGallery();
},2000);
};

rotateGallery();