// STUB FUNCIONES GENERALES

function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}


// ANCHOR VANILLA

// TODO:STUB HAMBURGUER
let enlaces = document.getElementById("enlaces")
let hamburguer = document.getElementById("hamburguer")
document.getElementById("contenedor-hamburguer")
  .addEventListener("click", function () {
    var semaforoBurguer = true
    enlaces.classList.toggle("menudos");
    enlaces.classList.toggle("animation-enlace");
    hamburguer.classList.toggle("hamburguer-simple");
    document.getElementById("contenedor-hamburguer").classList.toggle("contenedor-hamburguer-active");
    document.getElementById("menu").classList.remove("menu-top");
    document.getElementById("menu").classList.toggle("menu-top-active");
  });


// TODO:STUB SCROLL

let ubicacionPrincipal = window.pageYOffset;
window.addEventListener("scroll", function scrollNav() {
  let desplazamientoActual = window.pageYOffset;

  if (ubicacionPrincipal >= desplazamientoActual) {
    document.getElementById("menu").classList.remove("menu-top");
    document.getElementById("menu").classList.add("menu-scroll");
    document.getElementById("contenedor-hamburguer").classList.add("contenedor-hamburguer-scroll");
  } else {
    document.getElementById("menu").classList.add("menu-top");
  }

  if (desplazamientoActual < 530 && desplazamientoActual !== 0) {
    document.getElementById("menu").classList.add("menu-top");
  }

  ubicacionPrincipal = desplazamientoActual;
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset == 0) {
    document.getElementById("menu").classList.remove("menu-scroll");
    document.getElementById("contenedor-hamburguer").classList.remove("contenedor-hamburguer-scroll");
  }
});

// TODO:STUB ACORDEON SOBRE-GHIBLI

let h3SobreGhibli = document.getElementsByClassName("h3-sobre-ghibli")
let textoSobreGhibli = document.getElementsByClassName("texto-sobre-ghibli")
var contenedortextoSobreGhibli = Array.from(textoSobreGhibli)
let contenedorh3SobreGhibli = Array.from(h3SobreGhibli)
contenedorh3SobreGhibli.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    console.log(evento.target.parentElement.parentElement)
    if (hasClass(evento.target.parentElement.parentElement, "texto-sobre-ghibli-visible")) {
      evento.target.parentElement.parentElement.classList.remove("texto-sobre-ghibli-visible")

    } else {
      for (let e of contenedortextoSobreGhibli) {
        e.classList.remove("texto-sobre-ghibli-visible")
      }
      evento.target.parentElement.parentElement.classList.toggle("texto-sobre-ghibli-visible")
    }
  });
})


// ANCHOR EJECUTAR LUEGO DEL DOM
document.addEventListener('DOMContentLoaded', () => {


  // TODO:STUB SLIDER PELICULAS

  window.addEventListener("load", () => {
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      // cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // mousewheel: true,
      keyboard: true,
    });
  })

  // TODO:STUB BOTON VER MAS KAIOSAMAS

  var botonVerMasKaiosama = document.getElementsByClassName("contenedor-boton-p")

  let botonT = Array.from(botonVerMasKaiosama)
  botonT.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      setTimeout(() => {
        texto = evento.target.parentElement.parentElement;
        texto.classList.toggle("kaiosama-active")
        setTimeout(() => {
          if (evento.target.innerHTML == "Mas") {
            evento.target.classList.add("transformacion")
            evento.target.innerHTML = "Menos";
          } else {
            evento.target.classList.add("transformacion")
            evento.target.innerHTML = "Mas";
          }
        }, 10);
      }, 500);

    });
  });



});

// TODO:STUB CAROUSEL FRASES

let contador = 1,
  contenedor = document.querySelector(".frases"),
  frase = document.querySelectorAll(".contenedor-frase"),
  tamañoWidht = frase[0].clientWidth,
  scroll = contenedor.offsetWidth
flechaIzquierda = document.getElementById("flecha-izquierda"),
  flechaDerecha = document.getElementById("flecha-derecha");
intervalo = 5000;
window.addEventListener("resize", function () {
  scroll = contenedor.offsetWidth
})
contenedor.scrollLeft = scroll

flechaDerecha.addEventListener("click", () => {
  contenedor.scrollLeft += scroll
});
flechaIzquierda.addEventListener("click", () => {
  contenedor.scrollLeft -= scroll
});

// TODO:STUB VER PELIS

let imagenVerPelis = document.getElementsByClassName("contenedor-imagen-ver-pelis");
// imagenVerPelis.classList.add("contenedor-imagen-ver-pelis-hover");
let imagen = Array.from(imagenVerPelis)
imagen.forEach((elemento) => {
  elemento.addEventListener("mouseover", (evento) => {
    sema = false
    if (sema) {
      return
    } else {
      evento.target.parentElement.classList.toggle("contenedor-imagen-ver-pelis-hover")
      evento.target.parentElement.previousElementSibling.classList.toggle("contenedor-textos-ver-pelis-hover")
      evento.target.parentElement.nextElementSibling.classList.toggle("enlaces-ver-pelis-hover")
      sema = true
    }

    // console.log(evento.target.parentElement.nextElementSibling)
  });
  elemento.addEventListener("click", (evento) => {
    sema = false
    if (sema) {
      return
    } else {
      evento.target.parentElement.classList.toggle("contenedor-imagen-ver-pelis-hover")
      evento.target.parentElement.previousElementSibling.classList.toggle("contenedor-textos-ver-pelis-hover")
      evento.target.parentElement.nextElementSibling.classList.toggle("enlaces-ver-pelis-hover")
      sema = true
    }
    // console.log(evento.target.parentElement.nextElementSibling)
  });

  //* lo hice con toElement en lugar de target pero mozilla no lo reconoce

});

  // TODO LEER MAS KAIOSAMAS

  let leer = document.querySelectorAll(".boton-leer-mas");
  leer.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      texto = evento.target.parentElement.parentElement.parentElement;
      console.log(texto)
      texto.classList.toggle("active-boton-leer-mas")
      evento.target.classList.remove("transformacion")
      setTimeout(() => {
        if (evento.target.innerHTML == "Leer mas") {
          evento.target.classList.add("transformacion")
          evento.target.innerHTML = "Leer menos";
        } else {
          evento.target.classList.add("transformacion")
          evento.target.innerHTML = "Leer mas";
        }
      }, 10);
    });
  });


// TODO:STUB BOTON LEER MAS HISTORIA
let botonHistoria = document.getElementById("boton-historia");
let parrafoHistoria = document.getElementById("parrafo-historia");
// let maxheight = document.getElementById("parrafo-historia")
botonHistoria.addEventListener("click", (evento) => {
  parrafoHistoria.classList.toggle("contenedor-texto-historia-active")
  setTimeout(() => {
    if (evento.target.innerHTML == "Leer mas") {
      evento.target.classList.add("transformacion")
      evento.target.innerHTML = "Leer menos";
    } else {
      evento.target.classList.add("transformacion")
      evento.target.innerHTML = "Leer mas";
    }
  }, 10);

})



//   //* lo hice con toElement en lugar de target pero mozilla no lo reconoce
// TODO:STUB SIPNOSIS

// });
let botonSipnosisCerrar = document.getElementById("boton-sipnosis-cerrar")
let imagenSipnosis = document.getElementById("img-sipnosis")
let nombreSipnosis = document.getElementById("nombre-sipnosis")
let peliculas = document.getElementById("peliculas")
botonSipnosisCerrar.addEventListener("click", (evento) => {
  sipnosis.classList.remove("ver-sipnosis-active")
  arrowsPeliculas.classList.toggle("visibility-hidden")

  sipnosisActive.innerHTML = " "

})
let sipnosis = document.getElementById("sipnosis")
let arrowsPeliculas = document.getElementById("arrows-peliculas")
let verPeliculas = document.getElementsByClassName("ver-peliculas");
let sipnosisActive = document.getElementById("sipnosis-active");
let verSipnosis = Array.from(verPeliculas)
verSipnosis.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    evento.preventDefault()
    // evento.target.parentNode.parentNode.classList.add("ver-sipnosis-active");
    arrowsPeliculas.classList.toggle("visibility-hidden")
    peliculas.classList.toggle("height-auto")
    sipnosis.classList.add("ver-sipnosis-active")
    sipnosisActive.classList.remove("display-none")
    parrafo = evento.target.previousElementSibling.innerHTML
    sipnosisActive.innerHTML = parrafo
    imagen = evento.target.parentElement.previousElementSibling.firstElementChild.getAttribute("src")
    imagenSipnosis.src = imagen
    nombre = evento.target.parentElement.firstElementChild.firstElementChild.innerHTML
    nombreSipnosis.innerHTML = nombre

    console.log(nombre)
  });
});
// TODO:STUB OVERLAY
const overlay = document.getElementById("overlay"),
  y = document.querySelectorAll(".imagen-galeria"),
  x = document.querySelectorAll(".imagen-galeria>img");
y.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    setTimeout(() => {
      const ruta = elemento.firstChild.getAttribute("src");
      document.getElementById("ruta").src = ruta;
      overlay.classList.add("activo-overlay");
      const descripcion = elemento.dataset.descripcion;
      console.log(descripcion)
      document.querySelector(".descripcion").innerHTML = descripcion;
    }, 1000);

    // animacion click hover
    elemento.classList.add("escalar-pequeño");
    setTimeout(() => {
      elemento.classList.remove("escalar-pequeño");
    }, 900);
  });
});

// remover activo-overlay
overlay.addEventListener("click", (evento) => {
  evento.target.id === "overlay" ?
    overlay.classList.remove("activo-overlay") :
    "";
});
// Eventlistener del boton de cerrar
document.querySelector("#btn-cerrar-popup").addEventListener("click", () => {
  setTimeout(() => {
    overlay.classList.remove("activo-overlay");
  }, 600);
});







$(function () {

  // TODO:STUB VER MAS GALERIA
  let height = $(".imagenes-galeria").css("height");
  let gap = parseInt($(".imagenes-galeria").css("grid-gap"));
  let min = parseInt($(".imagenes-galeria").css("min-height"));
  let adicion = min + gap / 2 - 2
  let adicionContador = adicion
  console.log(adicion)
  $(".boton-ver-mas").on("click", function (evt) {
    console.log(adicion)
    adicion += adicionContador
    evt.preventDefault();
    let max = $(".imagenes-galeria").css("max-height");
    parseInt($(".imagenes-galeria").css("height", adicion + "px"))
    $(".boton-ver-menos").removeClass("display-none");
    $(".boton-cerrar-imagenes").removeClass("display-none");
    $(".boton-ver-mas").removeClass("mybtn");
    $(".boton-ver-mas").addClass("mybtn-borde");
  });
  $(".boton-ver-menos").on("click", function (evt) {
    console.log(adicion)
    adicion -= adicionContador
    evt.preventDefault();
    parseInt($(".imagenes-galeria").css("height", adicion + "px"))
    if (adicion == adicionContador) {
      $(".boton-ver-menos").addClass("display-none");
      $(".boton-cerrar-imagenes").addClass("display-none");
      $(".boton-ver-mas").removeClass("mybtn-borde");
      $(".boton-ver-mas").addClass("mybtn");
    }


    console.log(height)
  });
  $(".boton-cerrar-imagenes").on("click", function (evt) {
    parseInt($(".imagenes-galeria").css("height", min))
    $(".boton-ver-mas").removeClass("mybtn-borde");
    $(".boton-ver-mas").addClass("mybtn");
    $(".boton-ver-menos").addClass("display-none");
    $(".boton-cerrar-imagenes").addClass("display-none");

    adicion = 436
    console.log(adicion)
  });
  if (height < "500") {
    $(".boton-ver-menos").addClass("display-none");
    $(".boton-cerrar-imagenes").addClass("display-none");
    console.log("hola")
  }

  // TODO:STUB MARCADOR SECCIONES ENLACES MENU

  let sobreGhibli = $("#seccion-sobre-ghibli").offset().top,
    peliculas = $("#seccion-peliculas").offset().top,
    galeria = $("#seccion-galeria").offset().top,
    kaiosamas = $("#seccion-kaiosamas-ghibli").offset().top,
    frases = $("#frases-contenedor").offset().top,
    verPelis = $("#ver-pelis").offset().top;
  historia = $("#historia").offset().top;
  window.addEventListener("resize", function () {
    let sobreGhibli = $("#seccion-sobre-ghibli").offset().top,
      peliculas = $("#seccion-peliculas").offset().top,
      galeria = $("#seccion-galeria").offset().top,
      kaiosamas = $("#seccion-kaiosamas-ghibli").offset().top,
      frases = $("#frases-contenedor").offset().top,
      verPelis = $("#ver-pelis").offset().top;
    historia = $("#historia").offset().top;

  });
  $(window).scroll(function () {
    if ($(document).scrollTop() >= sobreGhibli - 100) {
      $("#enlace-Sobre-Ghibli").addClass("foco");
      // $("#imagen-sobre-ghibli-1").addClass("img1Totoro");
    } else {
      $("#enlace-Sobre-Ghibli").removeClass("foco");
    }
  });
  $(window).scroll(function () {
    if ($(document).scrollTop() >= peliculas - 200) {
      $("#enlace-Peliculas").addClass("foco");
      $("#enlace-Sobre-Ghibli").removeClass("foco");
    } else {
      $("#enlace-Peliculas").removeClass("foco");
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() >= galeria - 200) {
      $("#enlace-Imagenes").addClass("foco");
      $("#enlace-Peliculas").removeClass("foco");
    } else {
      $("#enlace-Imagenes").removeClass("foco");
    }
  });
  $(window).scroll(function () {
    if ($(document).scrollTop() >= kaiosamas - 200) {
      $("#enlace-Creadores").addClass("foco");
      $("#enlace-Imagenes").removeClass("foco");
    } else {
      $("#enlace-Creadores").removeClass("foco");
    }
  });
  $(window).scroll(function () {
    if ($(document).scrollTop() >= frases - 200) {
      $("#enlace-Frases").addClass("foco");
      $("#enlace-Creadores").removeClass("foco");
    } else {
      $("#enlace-Frases").removeClass("foco");
    }
  });
  $(window).scroll(function () {
    if ($(document).scrollTop() >= verPelis - 200) {
      $("#enlace-Ver-peliculas").addClass("foco");
      $("#enlace-Frases").removeClass("foco");
    } else {
      $("#enlace-Ver-peliculas").removeClass("foco");
    }
  });
  $(window).scroll(function () {
    if ($(document).scrollTop() >= verPelis - 200) {
      $("#enlace-Ver-peliculas").addClass("foco");
      $("#enlace-Frases").removeClass("foco");
    } else {
      $("#enlace-Ver-peliculas").removeClass("foco");
    }
  });
  $(window).scroll(function () {
    if ($(document).scrollTop() >= historia - 200) {
      $("#enlace-Historia").addClass("foco");
      $("#enlace-Ver-peliculas").removeClass("foco");
    } else {
      $("#enlace-Historia").removeClass("foco");
    }
  });

  // TODO:STUB DESPLAZARSE SECCIONES ENLACES MENU

  function hamburguer() {
    $("#enlaces").removeClass("menudos")
    $("#hamburguer").removeClass("hamburguer-simple")
    $("#contenedor-hamburguer").removeClass("contenedor-hamburguer-active")
    $("#menu").removeClass("menu-top")
    $("#menu").removeClass("menu-top-active")

  }

  $("#enlace-Sobre-Ghibli").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: sobreGhibli,
      },
      700
    );
    hamburguer()
  });
  $("#enlace-Peliculas").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: peliculas,
      },
      700
    );
    hamburguer()
  });
  $("#enlace-Imagenes").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: galeria,
      },
      700
    );
    hamburguer()
  });
  $("#enlace-Creadores").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: kaiosamas,
      },
      700
    );
    hamburguer()
  });
  $("#enlace-Frases").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: frases,
      },
      700
    );
    hamburguer()
  });
  $("#enlace-Ver-peliculas").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: verPelis,
      },
      700
    );
    hamburguer()
  });
  $("#enlace-Historia").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: historia,
      },
      700
    );
    hamburguer()
  });
  $(".enlace-historia").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: historia + 250,
      },
      700
    );
    hamburguer()
  });


})