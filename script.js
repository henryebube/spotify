var mm =document.getElementById('menu');
var display =0;

function hideShow()
{
    if(display == 1)
    {
        mm.style.display = 'block';
        display = 0;
    }
    else
    {
        mm.style.display = 'none';
        display =1;
    }
}
