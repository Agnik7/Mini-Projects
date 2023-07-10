const Root = document.querySelector(":root");
const gryffindor = document.querySelector("#gryffindor"); 
const slytherin = document.querySelector("#slytherin");



gryffindor.addEventListener('click',()=>{
    document.querySelector(".gryffindor").style.display = 'block';
    document.querySelector(".slytherin").style.display = 'none';
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
