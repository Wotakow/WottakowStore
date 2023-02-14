
function changeText(ev)
{
    if(ev.getAttribute('data-show') === "true") {
        ev.innerText = "ПОЛУЧИТЬ"
        ev.setAttribute('data-show', "false"); 
    }
    else {
        ev.innerText = "ЗАРЕГИСТРИРУЙТЕСЬ"
        ev.setAttribute('data-show', "true"); 
    }
}