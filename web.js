

/*----------------------------------------------------*/
/* Parallax -> Moviment LEGOS
------------------------------------------------------ */

window.addEventListener("mousemove", (e) => {
    
    parallax(e);
});
function parallax(e) {
    layer = document.querySelector('.layer');

    const speed = layer.getAttribute('data-speed');
    
    const x = (e.pageX * speed)/100;
    const y = (e.pageY * speed)/100;
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
}


/*----------------------------------------------------*/
/* LightBox -> Tarjetes presentació
------------------------------------------------------ */

var obrir = document.querySelector('.obrir')
var tancar = document.querySelector('#tancar')
var lightbox= document.querySelector('#lightbox')
var blackOverlay = document.querySelector('#blackOverlay')

var images = document.querySelectorAll('.tresd')
var cards = document.querySelectorAll('.perfils')
var blackOverlayInner = document.querySelector('.lightbox-cont')

cards.forEach((perfils) => {
    perfils.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        var perfils = e.target.closest("a")    // selecciones el contenidor del popup
        var id = perfils.id 
        blackOverlayInner.innerHTML = contingutPerfils[id]
        blackOverlay.style.display = "block"
    })
})

images.forEach((tresd) => {
    tresd.addEventListener("click", (e) => {
        // e.preventDefault();
        e.stopPropagation();

        var tresd = e.target    // selecciones el contenidor del popup
        var id = tresd.id 
        blackOverlayInner.innerHTML = contingut3d[id]
        blackOverlay.style.display = "block"
    })
})

contingutPerfils = {
    id1: `<h3 style="margin-top: 30px;"> <b>IVÁN FERNANDEZ - ART DIRECTOR</b> </h3>
        <div class="cartaFlex">
            <img src="./IMG/IvanApuesto.jpg" alt="" width="300">
            <p style="margin: 1em;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
        </div>`,

    id2: `<h3 style="margin-top: 30px;"> <b>DAVID ALSINA - LEAD DESIGNER</b> </h3>
        <div class="cartaFlex">
            <img src="./IMG/DavidAlsina.JPG" alt="" width="300">
            <p style="margin: 1em;">I am the lead designer in this company. I'm graduated in Interior Design and I got expertice on BIM methodology. I also have an especial interest in 3D models and rendering, I like to design real and imaginary design objects that are interesting and attractive to the humane eye. By the way, if you didn't notice I am the long hair playmobil that appears on the home of this web :) just to know</p>
        </div>`,

    id3:`<h3 style="margin-top: 30px;"> <b>ALEX FERNÁNDEZ - DEVELOPER</b> </h3>
        <div class="cartaFlex">
            <img src="./IMG/fotocarnetgrande_AlexFernandez.jpg" alt="" width="300">
            <p style="margin: 1em;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
        </div>`,

    id4: `<h3 style="margin-top: 30px;"> <b>BIMBODOGGY - HUNGRY PET</b> </h3>
        <div class="cartaFlex">
            <img src="./IMG/Perrete.jpg" alt="" width="300">
            <p style="margin: 1em;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
        </div>`,
}

contingut3d = {
    id31: `<div class="cartaFlex">
            <img class="img-small" style="margin: 1em; justify-content:center;" src="./IMG/Nike.jpg" alt="" width= "80%" height="fit-content">
        
            <div>
                <h3> <b>Nike Shoes</b> </h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
            </div> 
        </div>`,

    id32: `<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/Pokeball.jpg" alt="" width= "80%" height="fit-content">

            <div>
                <h3> <b>Pokeball</b> </h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
            </div> 
        </div>`,

    id33:`<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/SundayFunday.jpg" alt="" width= "80%" height="fit-content">

            <div>
                <h3> <b>Sunday Funday </b></h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
            </div> 
        </div>`,

    id34: `<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/RenderExterior_David.jpg" alt="" width= "80%" height="fit-content">

            <div>
                <h3> <b>Escuela Viladomat </b></h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
            </div> 
        </div>`,

    id35: `<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/Render_Comedor.jpg" alt="" width= "80%" height="fit-content">

            <div>
                <h3> <b>Single family home </b></h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
            </div> 
        </div>`,

    id36: `<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/Prueba2+Elements.jpg" alt="" width= "80%" height="fit-content">

            <div>
                <h3> <b>The creative house</b></h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
            </div> 
        </div>`,

    id37: `<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/interior\ david.RGB_color-Recuperado.png" alt="" width= "80%" height="fit-content">

            <div>
                <h3> <b>Viladomat classroom</b></h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
            </div> 
        </div>`,

    id38: `<div class="cartaFlex">
            <img style="margin: 1em; justify-content:center;" src="./IMG/9a1d1fb4-b584-4afa-98d7-9c756b62ddd6.jpg" alt="" width= "80%" height="fit-content">

            <div>
                <h3> <b>Abstract design</b></h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea porro odio vero nesciunt voluptates facere nostrum est, voluptate mollitia? Nulla non reiciendis assumenda sapiente natus iure maiores deserunt inventore dignissimos.</p>
            </div> 
        </div>`,
}




obrir.addEventListener("click", (e) => {
    e.preventDefault();     // això evita el comportament d'enllaç
    e.stopPropagation();    // evita el clic a la pantalla
    blackOverlay.style.display = "block"
})
// obrir2.addEventListener("click", (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     blackOverlay.style.display = "block"
// })

tancar.addEventListener("click", (e) => {
    e.preventDefault();
    blackOverlay.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (!lightbox.contains(e.target)){
        blackOverlay.style.display = "none"
    }
})












