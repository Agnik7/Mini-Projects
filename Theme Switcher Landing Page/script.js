const theme = document.querySelector('.tabs button');
const icon = document.querySelector('.tabs button img')
const Root = document.querySelector(':root');
let themeChange = true;
let isDark = true;
if(window.matchMedia('prefers-color-scheme: dark'))
{
    icon.src = './light.svg';
    isDark = true;
}
else
{
    icon.src = './dark.svg';
    isDark = false;
}

theme.addEventListener('click',()=>{
    isDark = !isDark;
    themeChange = !themeChange;
    if(isDark)
        icon.src = './light.svg';
    else
        icon.src = './dark.svg';

    if(themeChange)
    {
        Root.style.setProperty('--bg-navbar', '#2D2327');
        Root.style.setProperty('--bg-body', '#45364B');
        Root.style.setProperty('--bg-button', '#2F0A28');
        Root.style.setProperty('--font-col', '#B5C2B7');
    }
    else
    {
        Root.style.setProperty('--bg-navbar', '#B2967D');
        Root.style.setProperty('--bg-body', '#ECF8F8');
        Root.style.setProperty('--bg-button', '#E6BEAE');
        Root.style.setProperty('--font-col', '#212121');
    }

    
    
    
});