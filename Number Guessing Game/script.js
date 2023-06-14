const inp = document.querySelector("#number");
const button = document.querySelector(".check");
const guessStatus = document.querySelector(".guess-status");
const guessNumber = Math.floor(Math.random()*100);
const chances = document.querySelector(".chances-num");
let c = 10;
button.addEventListener('click',()=>{
    let num = inp.value;
    inp.value = null;
    guessStatus.style.display = (num == null)?"none":"block";
    if(num == guessNumber)
        guessStatus.innerHTML = "Congratulations! You Won!!!";
    else if(num < guessNumber)
        guessStatus.innerHTML = "Number is Low";
    else
        guessStatus.innerHTML = "Number is High";
    c--;
    if(c == 0)
        guessStatus.innerHTML = "Game Over! You Lost";

    chances.innerHTML = c;
});

