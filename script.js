document.addEventListener('DOMContentLoaded', function() {
    const lightDarkButton = document.getElementById('lightDarkButton');
    const body = document.getElementById('body');
    const footer = document.getElementById('footer');

    let isDark = true;

    lightDarkButton.addEventListener("click", function(e) {
        if(isDark) {
            isDark = false;
            console.log("Switch to Light Mode");

            body.style.backgroundColor = '#fafafa'; // Mode clair
            lightDarkButton.style.backgroundColor = '#2e373a';
            lightDarkButton.style.color = '#b9babb';
            lightDarkButton.innerText = '🌑';
            footer.style.backgroundColor = 'hsla(410, 50%, 27%, .9)'; // Correction : pas de ;
            lightDarkButton.style.paddingLeft = '10px';
            lightDarkButton.style.paddingRight = '0px';

        } else {
            isDark = true;
            console.log("Switch to Dark Mode");

            body.style.backgroundColor = '#4e5153'; // Mode sombre
            lightDarkButton.style.backgroundColor = '#9dd0df';
            lightDarkButton.style.color = '#17596d';
            lightDarkButton.innerText = '🌞';
            footer.style.backgroundColor = 'hsla(210, 7%, 17%, .9)'; // Correction : pas de ;
            lightDarkButton.style.paddingLeft = '0px';
            lightDarkButton.style.paddingRight = '10px';
        }
    });

    function clock() {
        var date = new Date();
        const time = document.getElementById("time");
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        time.innerText = `${h} : ${m} : ${s <= 9 ? '0' + s : s}`;
    }

    clock();
    setInterval(clock, 1000);
});
