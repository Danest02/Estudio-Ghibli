// JQuery
console.log ("hola")

// Boton ver mas
$(".boton-ver-mas").on("click", function (evt) {
  evt.preventDefault();
  let max = $(".imagenes-galeria").css("max-height"),
    min = $(".imagenes-galeria").css("min-height"),
    alto = $(".imagenes-galeria").css("height");
  if (alto == alto) {
    $(".imagenes-galeria").css("height", max);
    $(".boton-ver-mas").text("Ver menos");
  }
  if (alto == max) {
    $(".imagenes-galeria").css("height", min);
    $(".boton-ver-mas").text("Ver mas imagenes");
  }
});

// Categoria galeria - JQuery
const categoriaGaleria = document.querySelectorAll(".categoria-galeria");
$(".categoria-galeria").click(function () {
  $(this).addClass("activo").siblings().removeClass("activo");
  let valor = $(this).attr("data-categoria");
  if (valor == "todos") {
    $(".imagen-galeria").show(000);
  } else {
    $(".imagen-galeria")
      .not("." + valor)
      .hide(000);
    $(".imagen-galeria")
      .filter("." + valor)
      .show(000);
  }
});

// Desplazarse enlaces menu
let sobreGhibli = $("#seccion-sobre-ghibli").offset().top,
  galeria = $("#seccion-galeria").offset().top,
  kaiosamas = $("#seccion-kaiosamas-ghibli").offset().top,
  frases = $("#frases-contenedor").offset().top,
  verPelis = $("#ver-pelis").offset().top;
window.addEventListener("resize", function () {
  let sobreGhibli = $("#seccion-sobre-ghibli").offset().top,
    galeria = $("#seccion-galeria").offset().top,
    kaiosamas = $("#seccion-kaiosamas-ghibli").offset().top,
    frases = $("#frases-contenedor").offset().top,
    verPelis = $("#ver-pelis").offset().top;
});
$("#enlace-sobre-ghibli").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
      scrollTop: sobreGhibli,
    },
    700
  );
});
$("#enlace-galeria").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
      scrollTop: galeria,
    },
    700
  );
});
$("#enlace-kaiosamas").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
      scrollTop: kaiosamas,
    },
    700
  );
});
$("#enlace-frases").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
      scrollTop: frases,
    },
    700
  );
});
$("#enlace-ver-pelis").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
      scrollTop: verPelis,
    },
    700
  );
});

const imagen = document.querySelector('.contenedor-imagen-ver-pelis')
// Vanilla
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
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Scroll
  let ubicacionPrincipal = window.pageYOffset;
  window.addEventListener("scroll", function () {
    let desplazamientoActual = window.pageYOffset;

    if (ubicacionPrincipal >= desplazamientoActual) {
      document.getElementsByTagName("nav")[0].style.top = "0px";
      document.getElementsByTagName("nav")[0].classList.add("menu-scroll");
      document
        .getElementsByClassName("contenedor-hamburguer")[0]
        .classList.add("contenedor-hamburguer-scroll");
    } else {
      document.getElementsByTagName("nav")[0].style.top = "-100px";
    }

    if (desplazamientoActual < 676 && desplazamientoActual !== 0) {
      document.getElementsByTagName("nav")[0].style.top = "-100px";
    }

    ubicacionPrincipal = desplazamientoActual;
  });

  window.addEventListener("scroll", function () {
    if (window.pageYOffset == 0) {
      document.getElementsByTagName("nav")[0].classList.remove("menu-scroll");
      document
        .getElementById("contenedor-hamburguer")
        .classList.remove("contenedor-hamburguer-scroll");
    }
  });

  // Menu
  let enlaces = document.querySelectorAll(".enlaces")[0],
    semaforo = true;

  document
    .querySelectorAll(".contenedor-hamburguer")[0]
    .addEventListener("click", function () {
      enlaces.classList.toggle("menudos");
    });

  // Caroulse Frases
  let contador = 0,
    contenedor = document.querySelector(".frases"),
    frase = document.querySelectorAll(".contenedor-frase"),
    tamañoWidht = frase[0].clientWidth,
    flechaIzquierda = document.getElementById("flecha-izquierda"),
    flechaDerecha = document.getElementById("flecha-derecha");
  intervalo = 5000;

  window.addEventListener("resize", function () {
    tamañoWidht = frase[0].clientWidth;
    contenedor.style.transform = "translate(" + -tamañoWidht * contador + "px"
  })

  const transform = () => contenedor.style.transform = "translate(" + -tamañoWidht * contador + "px"
  const transition = () => contenedor.style.transition = "transform 0.5s ease-in-out";

  flechaDerecha.addEventListener("click", () => {
    if (contador >= frase.length - 1) return;
    contador++;
    // slider.scrollLeft += slider.offsetWidth;
    transform();
    transition();
  });
  flechaIzquierda.addEventListener("click", () => {
    if (contador <= 0) return;
    contador--;
    transform();
    transition();
    // contenedor.scrollLeft -= slider.offsetWidth;
  });
  contenedor.addEventListener("transitionend", () => {
    if (frase[contador].firstElementChild.id === "last-clone") {
      contenedor.style.transition = "none";
      contador = frase.length - 2;
      transform();
    }
    if (frase[contador].lastElementChild.id === "first-clone") {
      contenedor.style.transition = "none";
      contador = frase.length - contador;
      transform()
    }
  });

  // overlay galeria

  const overlay = document.getElementById("overlay"),
    y = document.querySelectorAll(".hover-imagen-galeria"),
    x = document.querySelectorAll(".imagen-galeria>img");
  y.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      setTimeout(() => {
        const ruta = elemento.previousElementSibling.getAttribute("src");
        document.getElementById("ruta").src = ruta;
        overlay.classList.add("activo-overlay");
        const descripcion = elemento.parentNode.dataset.descripcion;
        document.querySelector("#overlay .descripcion").innerHTML = descripcion;
      }, 1000);

      // animacion click hover
      elemento.classList.add("escalar");
      setTimeout(() => {
        elemento.classList.remove("escalar");
      }, 1000);
    });
  });
  // Eventlistener del boton de cerrar
  document.querySelector("#btn-cerrar-popup").addEventListener("click", () => {
    overlay.classList.remove("activo-overlay");
  });

  // remover activo-overlay
  overlay.addEventListener("click", (evento) => {
    evento.target.id === "overlay" ?
      overlay.classList.remove("activo-overlay") :
      "";
  });

  // Leer mas
  const leer = document.querySelectorAll(".boton-leer-mas");
  leer.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      // evento.preventDefault();
      const h3 = evento.target.parentElement.parentElement.firstElementChild;
      t = evento.target.parentElement.parentElement;
      if (h3.style.top !== "-40.5px") {
        t.style.padding = "1rem 2rem 1rem";
        h3.style.top = "-40.5px";
      } else {
        h3.style.top = "0";
        t.style.padding = "3rem 2rem 1.5rem";
      }
    });
  });


  const imagen = document.querySelector('.contenedor-imagen-ver-pelis')
  
  
  
  const contenedorTextoVerPeli = document.querySelectorAll(".contenedor-texto-ver-pelis")  
  imagen.style.border = "1px solid red"
});
