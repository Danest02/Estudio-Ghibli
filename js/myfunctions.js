
// TODO:STUB MEDIAS JS

function media(mediaqueryList){
    var pelicula = Array.from(document.getElementsByClassName("swiper-slide"))
    if(mediaqueryList.matches) {
      
    }else{

    }
  }
  var mediaqueryList = window.matchMedia("(min-width: 500px)");
  mediaqueryList.addListener(media)

  window.addEventListener("load", () => {
    media(mediaqueryList)
  })
// TODO:STUB TIENE LA CLASE

  function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
  }