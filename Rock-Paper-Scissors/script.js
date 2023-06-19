const rockUser = document.querySelector(".rock");
const paperUser = document.querySelector(".paper");
const scissorUser = document.querySelector(".scissor");
const results = document.querySelector(".results");
const User = document.querySelector(".user");
const Computer = document.querySelector(".computer");
let computerMoves = ['rock', 'paper', 'scissor'];
let user = 0, computer = 0;
rockUser.addEventListener('click',()=>{
    let index = Math.floor((Math.random()*10))%3;
    if(computerMoves[index] === 'paper')
        {
            results.innerHTML = "Computer won this round!!";
            ++computer;
        }
    else if(computerMoves[index] === 'scissor')
    {
        results.innerHTML = "User won this round!!";
        ++user;
    }
    else
        results.innerHTML = "It's a Tie!!";
    User.innerHTML = "User: " + user;
    Computer.innerHTML = "Computer: " + computer;
});
paperUser.addEventListener('click',()=>{
    let index = Math.floor((Math.random()*10))%3;
    if(computerMoves[index] === 'scissor')
    {
        results.innerHTML = "Computer won this round!!";
        ++computer;
    }
    else if(computerMoves[index] === 'rock')
    {
        results.innerHTML = "User won this round!!";
        ++user;
    }
    else
        results.innerHTML = "It's a Tie!!";
    User.innerHTML = "User: " + user;
    Computer.innerHTML = "Computer: " + computer;
});
scissorUser.addEventListener('click',()=>{
    let index = Math.floor((Math.random()*10))%3;
    if(computerMoves[index] === 'rock')
    {
        results.innerHTML = "Computer won this round!!";
        ++computer;
    }
    else if(computerMoves[index] === 'paper')
    {
        results.innerHTML = "User won this round!!";
        ++user;
    }
    else
        results.innerHTML = "It's a Tie!!";
    User.innerHTML = "User: " + user;
    Computer.innerHTML = "Computer: " + computer;
});