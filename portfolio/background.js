document.addEventListener('DOMContentLoaded', function()
{
    const mousePos = document.getElementById('mousePos');
    document.addEventListener("mousemove", function(e)
    {
        var x = e.clientX;
        var y = e.clientY;

        console.log(x + ", " + y);

        mousePos.innerText = x + ", " + y;
    })
}

)