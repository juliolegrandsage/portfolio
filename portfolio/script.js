document.addEventListener('DOMContentLoaded', function() {
    // Fonction de vérification à exécuter dès que la page est chargée
    lightDarkButton.addEventListener("dblclick", document =>
    {
        bgRand = getRandomColor();
        body.style.backgroundColor = bgRand;
    })

    const bcButton = document.getElementById("audioButton");
    bcButton.addEventListener("click", document =>{
        window.open("https://bisrian.bandcamp.com/track/inner-war");
    }) 
    const ytButton = document.getElementById("youtubeBisrian");
    ytButton.addEventListener("click", document =>{
        window.open("https://www.youtube.com/@bisrianmusic");
    }) 
});

const lightDarkButton = document.getElementById('lightDarkButton');
const body = document.getElementById('body');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

const githubLogo = document.getElementById('githubLogo');
const itchLogo = document.getElementById('itchLogo');
const bandcampLogo = document.getElementById('bandcampLogo');
const youtubeLogo = document.getElementById('youtubeLogo');


let isDark = true;
let easterEggClick = 0;

function getRandomColor() {
    // Générer trois composantes de couleur aléatoires (rouge, vert, bleu)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Formatage de la couleur en format hexadécimal
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}

function darkLight()
{
    if(isDark == true)
    {
        body.style.backgroundColor = '#fafafa';
        lightDarkButton.style.backgroundColor = '#2e373a'
        isDark = false;
        lightDarkButton.style.color = '#b9babb'
        lightDarkButton.innerText = 'Dark'

    }
    else
    {
        body.style.backgroundColor = '#4e5153';
        isDark = true;
        lightDarkButton.style.backgroundColor = '#9dd0df'
        lightDarkButton.style.color = '#17596d'
        lightDarkButton.innerText = 'Light'
    }
    easterEggClick++; // Incrémenter le compteur à chaque clic

}


