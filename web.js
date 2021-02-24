
/*----------------------------------------------------*/
/* LightBox -> Tarjetes presentació
------------------------------------------------------ */

var obrir = document.querySelector('#obrir')
var tancar = document.querySelector('#tancar')
var lightbox= document.querySelector('#lightbox')
var blackOverlay = document.querySelector('#blackOverlay')

obrir.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    blackOverlay.style.display = "block"
})

tancar.addEventListener("click", (e) => {
    e.preventDefault();
    blackOverlay.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (!lightbox.contains(e.target)){
        blackOverlay.style.display = "block"
    }
})







