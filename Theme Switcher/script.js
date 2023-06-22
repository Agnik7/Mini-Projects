/* 

FOR Default:
--navbar: #D88C9A;
--container: #F2D0A9;
--cards: #F1E3D3;
--card-h2: #8E7DBE;
--footer: #99C1B9;
--footer-text: #000000;
--nav-text: #000000;

FOR Sunrise:
--navbar: #F0A202;
--container: #F18805;
--cards: #D95D39;
--card-h2: #202C59;
--footer: #581F18;
--footer-text: #F18805;
--nav-text: #000000;

FOR Daylight Blues:
--navbar: #29339B;
--container: #74A4BC;
--cards: #B6D6CC;
--card-h2: #FF3A20;
--footer: #F1FEC6;
--footer-text: #000000;
--nav-text: #ffffff;

FOR Midnight:
--navbar: #01161E;
--container: #124559;
--cards: #598392;
--card-h2: #EFF6E0;
--footer: #AEC3B0;
--footer-text: #000000;
--nav-text: #ffffff;

*/
const Root = document.querySelector(":root");
const listItems = document.querySelectorAll(".list-items");

listItems.forEach((element)=>{
    element.addEventListener('click',()=>{
        if(element.innerHTML == 'Sunrise')
        {
            Sunrise();
        }
        else if(element.innerHTML == 'Daylight Blues')
        {
            Daylight();

        } 
        else if(element.innerHTML == 'Midnight')
        {
            Midnight();
        }
        else
        {
            Default();
        }
    });
});

function Sunrise(){
    Root.style.setProperty('--navbar','#F0A202');
    Root.style.setProperty('--container','#F18805');
    Root.style.setProperty('--cards','#D95D39');
    Root.style.setProperty('--card-h2','#8E7DBE');
    Root.style.setProperty('--footer','#581F18');
    Root.style.setProperty('--footer-text','#F18805');
    Root.style.setProperty('--nav-text','#000000');
}
function Daylight(){
    Root.style.setProperty('--navbar','#29339B');
    Root.style.setProperty('--container','#74A4BC');
    Root.style.setProperty('--cards','#B6D6CC');
    Root.style.setProperty('--card-h2','#FF3A20');
    Root.style.setProperty('--footer','#F1FEC6');
    Root.style.setProperty('--footer-text','#000000');
    Root.style.setProperty('--nav-text','#ffffff');
}
function Midnight(){
    Root.style.setProperty('--navbar','#01161E');
    Root.style.setProperty('--container','#124559');
    Root.style.setProperty('--cards','#598392');
    Root.style.setProperty('--card-h2','#EFF6E0');
    Root.style.setProperty('--footer','#AEC3B0');
    Root.style.setProperty('--footer-text','#000000');
    Root.style.setProperty('--nav-text','#ffffff');
}
function Default(){
    Root.style.setProperty('--navbar','#D88C9A');
    Root.style.setProperty('--container','#F2D0A9');
    Root.style.setProperty('--cards','#F1E3D3');
    Root.style.setProperty('--card-h2','#8E7DBE');
    Root.style.setProperty('--footer','#99C1B9');
    Root.style.setProperty('--footer-text','#000000');
    Root.style.setProperty('--nav-text','#000000');
}