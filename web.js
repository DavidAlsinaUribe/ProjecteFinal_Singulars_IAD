
/*----------------------------------------------------*/
/* LightBox -> Tarjetes presentació
------------------------------------------------------ */

// var obrir = document.querySelector('#obrir')
// var tancar = document.querySelector('#tancar')
// var lightbox= document.querySelector('#lightbox')
// var blackOverlay = document.querySelector('#blackOverlay')

// obrir.addEventListener("click", (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     blackOverlay.style.display = "block"
// })

// tancar.addEventListener("click", (e) => {
//     e.preventDefault();
//     blackOverlay.style.display = "none"
// })

// window.addEventListener("click", (e) => {
//     if (!lightbox.contains(e.target)){
//         blackOverlay.style.display = "block"
//     }
// })

/*----------------------------------------------------*/
/* Parallax -> Moviment LEGOS
------------------------------------------------------ */

window.addEventListener("mousemove", (e) => {
    console.log("ok");
    parallax(e);
});
function parallax(e) {
    layer = document.querySelector('.layer');

    const speed = layer.getAttribute('data-speed');
    
    const x = (e.pageX * speed)/100;
    const y = (e.pageY * speed)/100;
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
}










