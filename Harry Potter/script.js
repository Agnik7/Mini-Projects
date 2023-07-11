const Root = document.querySelector(":root");
const gryffindor = document.querySelector("#gryffindor"); 
const slytherin = document.querySelector("#slytherin");
const hufflepuff = document.querySelector("#hufflepuff");
const ravenclaw = document.querySelector("#ravenclaw");

gryffindor.addEventListener('click',()=>{
    document.querySelector(".gryffindor").style.display = 'block';
    document.querySelector(".slytherin").style.display = 'none';
    document.querySelector(".hufflepuff").style.display = 'none';
    document.querySelector(".ravenclaw").style.display = 'none';
    console.log("clicked gryffindor");
    Root.style.setProperty('--bg-nav', '#AE0001');
    Root.style.setProperty('--font-col', '#EEBA30');
    Root.style.setProperty('--font-hov', '#D3A625');
    Root.style.setProperty('--button-col', '#000000');
    Root.style.setProperty('--bg-main', '#740001');
    Root.style.setProperty('--font-head', '#C0C0C0');
    document.querySelectorAll('nav ul li').forEach((element)=>{
        element.style.textDecoration = 'none';
        element.style.color = 'var(--font-head)';
    })
    gryffindor.style.textDecoration = 'underline';
    gryffindor.style.color = 'var(--font-hov)';
    
});

slytherin.addEventListener('click',()=>{
    document.querySelector(".gryffindor").style.display = 'none';
    document.querySelector(".slytherin").style.display = 'block';
    document.querySelector(".hufflepuff").style.display = 'none';
    document.querySelector(".ravenclaw").style.display = 'none';
    console.log("clicked slytherin");
    Root.style.setProperty('--bg-nav', '#5D5D5D');
    Root.style.setProperty('--font-col', '#000000');
    Root.style.setProperty('--font-hov', '#1A472A');
    Root.style.setProperty('--button-col', '#AAAAAA');
    Root.style.setProperty('--bg-main', '#2A623D');
    Root.style.setProperty('--font-head', '#AAAAAA');
    document.querySelectorAll('nav ul li').forEach((element)=>{
        element.style.textDecoration = 'none';
        element.style.color = 'var(--font-col)';
    })
    slytherin.style.textDecoration = 'underline';
    slytherin.style.color = 'var(--font-hov)';
    
});


hufflepuff.addEventListener('click',()=>{
    document.querySelector(".gryffindor").style.display = 'none';
    document.querySelector(".slytherin").style.display = 'none';
    document.querySelector(".hufflepuff").style.display = 'block';
    document.querySelector(".ravenclaw").style.display = 'none';
    console.log("clicked hufflepuff");
    Root.style.setProperty('--bg-nav', ' #FFDB00');
    Root.style.setProperty('--font-col', '#FFED86');
    Root.style.setProperty('--font-hov', '#FFF4B1');
    Root.style.setProperty('--button-col', '#000000');
    Root.style.setProperty('--bg-main', '#60605C');
    Root.style.setProperty('--font-head', '#000000');
    document.querySelectorAll('nav ul li').forEach((element)=>{
        element.style.textDecoration = 'none';
        element.style.color = 'var(--font-head)';
    })
    hufflepuff.style.textDecoration = 'underline';
    hufflepuff.style.color = 'var(--font-hov)';
    
});


ravenclaw.addEventListener('click',()=>{
    document.querySelector(".gryffindor").style.display = 'none';
    document.querySelector(".slytherin").style.display = 'none';
    document.querySelector(".hufflepuff").style.display = 'none';
    document.querySelector(".ravenclaw").style.display = 'block';
    console.log("clicked ravenclaw");
    Root.style.setProperty('--bg-nav', '#5D5D5D');
    Root.style.setProperty('--font-col', '#946B2D');
    Root.style.setProperty('--font-hov', '#FFF4B1');
    Root.style.setProperty('--button-col', '#222F5B');
    Root.style.setProperty('--bg-main', '#0E1A40');
    Root.style.setProperty('--font-head', '#FFF4B1');
    document.querySelectorAll('nav ul li').forEach((element)=>{
        element.style.textDecoration = 'none';
        element.style.color = 'var(--font-head)';
    })
    ravenclaw.style.textDecoration = 'underline';
    ravenclaw.style.color = 'var(--font-hov)';
    
});