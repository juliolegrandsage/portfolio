document.addEventListener('DOMContentLoaded', function() {
    const lightDarkButton = document.getElementById('lightDarkButton');
    const body = document.getElementById('body');
    const title = document.getElementById('title');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');

    let isDark = true;
    let isDblClick = false;

    isDark = true;


    document.addEventListener("dblclick", function()
    {
        title.innerText = "✌️Porfolio✌️"
        isDblClick = true;
        console.log(isDblClick);
    })


    function getRandomColor() {
    // Générer trois composantes de couleur aléatoires (rouge, vert, bleu)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Formatage de la couleur en format hexadécimal
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
    }




    
    lightDarkButton.addEventListener("dblclick", document =>
    {
        bgRand = getRandomColor();
        body.style.backgroundColor = bgRand;
        lightDarkButton.innerText = '🌈';
        lightDarkButton.style.paddingLeft = '0px';
        lightDarkButton.style.paddingRight = '0px';
        lightDarkButton.style.backgroundColor = getRandomColor();

    })

    const bcButton = document.getElementById("audioButton");
    bcButton.addEventListener("click", document =>{
        window.open("https://bisrian.bandcamp.com/track/inner-war");
    })
    const ytButton = document.getElementById("youtubeBisrian");
    ytButton.addEventListener("click", document =>{
        window.open("https://www.youtube.com/@bisrianmusic");
    }) 



    lightDarkButton.addEventListener("click", function(e)   
    {
    if(isDark == true)
    {
        isDark = false;
        console.log("dark light is " + isDark.toString())
        body.style.backgroundColor = '#fafafa';
        lightDarkButton.style.backgroundColor = '#2e373a';
        lightDarkButton.style.color = '#b9babb';
        lightDarkButton.innerText = '🌑';
        footer.style.backgroundColor = 'hsla(410, 50%, 27%, .9);';
        console.log("DarkMode enbabled");
        lightDarkButton.style.paddingLeft = '20px';
        lightDarkButton.style.paddingRight = '0px';

    }
    else
    {

        isDark = true;
        body.style.backgroundColor = '#4e5153';
        
        lightDarkButton.style.backgroundColor = '#9dd0df';
        lightDarkButton.style.color = '#17596d';
        lightDarkButton.innerText = '🌞';
        footer.style.backgroundColor = 'hsla(210, 7%, 17%, .9)';
        console.log("LightMode enabled");
        lightDarkButton.style.paddingLeft = '0px';
        lightDarkButton.style.paddingRight = '40px';
        

    }


    })

    function clock()
    {
        var date = new Date();

        const time = document.getElementById("time");
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        if(s > 10)
        {
            time.innerText = h + " : " + m + " : " + s;
        }
        else
        {
            time.innerText = h + " : " + m + " : " + "0" + s;

        }
    }

    
    clock();
    setInterval(clock, 1000);



});







