// JQuery
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
  peliculas = $("#seccion-peliculas").offset().top,
  galeria = $("#seccion-galeria").offset().top,
  kaiosamas = $("#seccion-kaiosamas-ghibli").offset().top,
  frases = $("#frases-contenedor").offset().top,
  verPelis = $("#ver-pelis").offset().top;
window.addEventListener("resize", function () {
  let sobreGhibli = $("#seccion-sobre-ghibli").offset().top,
    peliculas = $("#seccion-peliculas").offset().top,
    galeria = $("#seccion-galeria").offset().top,
    kaiosamas = $("#seccion-kaiosamas-ghibli").offset().top,
    frases = $("#frases-contenedor").offset().top,
    verPelis = $("#ver-pelis").offset().top;
});
$(window).scroll(function() {
  if ($(document).scrollTop() >= sobreGhibli - 100) {
    $("#enlace-sobre-ghibli").addClass("foco");
  } else {
    $("#enlace-sobre-ghibli").removeClass("foco");
  }
});
$(window).scroll(function() {
  if ($(document).scrollTop() >= peliculas -200) {
    $("#enlace-peliculas").addClass("foco");
    $("#enlace-sobre-ghibli").removeClass("foco");
  } else {
    $("#enlace-peliculas").removeClass("foco");
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() >= galeria -200) {
    $("#enlace-galeria").addClass("foco");
    $("#enlace-peliculas").removeClass("foco");
  } else {
    $("#enlace-galeria").removeClass("foco");
  }
});
$(window).scroll(function() {
  if ($(document).scrollTop() >= kaiosamas -150) {
    $("#enlace-kaiosamas").addClass("foco");
    $("#enlace-galeria").removeClass("foco");
  } else {
    $("#enlace-kaiosamas").removeClass("foco");
  }
});
$(window).scroll(function() {
  if ($(document).scrollTop() >= frases -200) {
    $("#enlace-frases").addClass("foco");
    $("#enlace-kaiosamas").removeClass("foco");
  } else {
    $("#enlace-frases").removeClass("foco");
  }
});
$(window).scroll(function() {
  if ($(document).scrollTop() >= verPelis -300) {
    $("#enlace-ver-pelis").addClass("foco");
    $("#enlace-frases").removeClass("foco");
  } else {
    $("#enlace-ver-pelis").removeClass("foco");
  }
});
$("#enlace-sobre-ghibli").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
      scrollTop: sobreGhibli,
    },
    700
  );
});
$("#enlace-peliculas").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
      scrollTop: peliculas,
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

// Vanilla

// Slider Peliculas
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
  let contador = 1,
  contenedor = document.querySelector(".frases"),
  frase = document.querySelectorAll(".contenedor-frase"),
  tamañoWidht = frase[0].clientWidth,
  scroll = contenedor.offsetWidth
  flechaIzquierda = document.getElementById("flecha-izquierda"),
  flechaDerecha = document.getElementById("flecha-derecha");
  intervalo = 5000;
  window.addEventListener("resize", function () {
    tamañoWidht = frase[0].clientWidth;
    contenedor.style.transform = "translate(" + -tamañoWidht * contador + "px"
  })
  contenedor.scrollLeft = scroll
  
  // const transform = () => contenedor.style.transform = "translate(" + -tamañoWidht * contador + "px"
  const transform = () => {
    semaforo = false
    if (semaforo) {
      return
    }
    setTimeout(() => {
      semaforo = true
    }, 300);

  }
  
  const transformRight = () => {
    semaforo = false
    if (semaforo) {
      return
    }
    contenedor.classList.add("frases-transition-none")
    contenedor.scrollLeft = scroll
    // contenedor.scrollLeft -= scroll
    contenedor.classList.remove("frases-transition-none")
    contenedor.scrollLeft += scroll
    contador = 1
    setTimeout(() => {
      semaforo = true
    }, 300);
  }
  const transformLeft = () => {
    semaforo = false
    if (semaforo) {
      return
    }
    contenedor.classList.add("frases-transition-none")
    contenedor.scrollLeft = scroll * 6
    contenedor.classList.remove("frases-transition-none")
    contenedor.scrollLeft -= scroll
    // // contenedor.scrollLeft += scroll
    contador = 5
    // // contador--;
    contenedor.scrollLeft -= scroll
    setTimeout(() => {
      semaforo = true
    }, 300);
  }
  // const transform = () => contenedor.scrollLeft += tamañoWidht

  
  const transition = () => contenedor.style.transition = "transform 0.5s ease-in-out";
  
  flechaDerecha.addEventListener("click", () => {
    if (frase[contador].firstElementChild.id === "first-clone") {
      transformRight()
      
      
    }
    // contenedor.scrollLeft += scroll;
    contador++;
    contenedor.scrollLeft += scroll
    // transition();
    console.log (contador)
  });

  flechaIzquierda.addEventListener("click", () => {
    if (frase[contador].firstElementChild.id === "last-clone") {
      
      transformLeft()
      // contenedor.style.transition = "none";
      // alert ("hola")
      // contador = frase.length - 2;
      // // transform();
      // setTimeout(() => {
        //   contador--
        //   transition()
        //   // transform()
        
        // }, 10);
      }else{
        // contenedor.scrollLeft -= scroll;
        contador--;
        contenedor.scrollLeft -= scroll
        // transition();
        
      }
      // contenedor.scrollLeft -= slider.offsetWidth;
      console.log (contador)
    });
  contenedor.addEventListener("transitionend", () => {
    if (frase[contador].firstElementChild.id === "last-clone") {
      contenedor.style.transition = "none";
      contador = frase.length - 2;
      // transform();
    }
    if (frase[contador].lastElementChild.id === "first-clone") {
      contenedor.style.transition = "none";
      contador = frase.length - contador;
      // transform()
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
      }, 900);
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
});

// Ver Pelis
let imagenVerPelis = document.getElementsByClassName("contenedor-imagen-ver-pelis");
// imagenVerPelis.classList.add("contenedor-imagen-ver-pelis-hover");
let imagen = Array.from(imagenVerPelis)
imagen.forEach((elemento) => {
  elemento.addEventListener("mouseover", (evento) => {
    sema = false
    if (sema) {
      return
    }else{
      evento.toElement.parentElement.classList.toggle("contenedor-imagen-ver-pelis-hover")
      evento.toElement.parentElement.previousElementSibling.classList.toggle("contenedor-textos-ver-pelis-hover")
      evento.toElement.parentElement.nextElementSibling.classList.toggle("enlaces-ver-pelis-hover")
      sema = true
    }
    console.log (evento.toElement.parentElement.nextElementSibling)
  });
});