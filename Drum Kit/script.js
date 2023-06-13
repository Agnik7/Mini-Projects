const drums = ['kick','tom','crash', 'snare'];
const container = document.querySelector(".container")
drums.forEach((element)=>{
    let className = "." + element;
    let btn = document.querySelector(className);
    const aud = document.createElement('audio')
    btn.addEventListener('click',()=>{
        console.log(element + " was clicked");
        aud.src = `./assets/sounds/${element}.mp3`;
        container.appendChild(aud);
        aud.play();
    })  
})