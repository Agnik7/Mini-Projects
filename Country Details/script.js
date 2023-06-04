const country = document.querySelector(".country");
const input = document.querySelector("#input");
const search = document.querySelector("button");
const error = document.querySelector(".error");
const capital = document.querySelector(".capital");
const population = document.querySelector(".population");
const continent = document.querySelector(".continent");
const flag = document.querySelector("img");
search.addEventListener('click',()=>{
    clear();
    if((input.value).length == 0)
    {
        error.style.display = "block";
    }
    else
    {
        const url = `https://restcountries.com/v3.1/name/${input.value}`;
        error.style.display = "none";
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                document.querySelector(".country-details").style.display = "block";
                country.innerHTML = data[0].name.official;
                capital.innerHTML += data[0].capital;
                population.innerHTML+=data[0].population;
                continent.innerHTML += data[0].continents;
                flag.src = data[0].flags.svg;
            })
            .catch((err)=>{
                console.log(err);
            })
            
        
    }
});
function clear(){
    country.innerHTML = '';
    capital.innerHTML = 'Capital: ';
    population.innerHTML='Population: ';
    continent.innerHTML = 'Continent: '; 
    document.querySelector(".country-details").style.display = "none";
    flag.src = "";
}