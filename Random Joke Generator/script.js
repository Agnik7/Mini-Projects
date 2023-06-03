

const joke = document.querySelector(".joke");
const generate = document.querySelector(".generate");
const url = "https://api.chucknorris.io/jokes/random";

generate.addEventListener('click',()=>{
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            joke.innerHTML = data.value;
        })
        .catch((error) => {
            console.log(error);
        });
});

