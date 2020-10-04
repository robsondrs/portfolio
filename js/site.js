//Scroll menu
$(window).scroll(function(){
    if($(window).scrollTop() > 0){
        $('#navegacao').addClass('scroll');
    }else{
        $('#navegacao').removeClass('scroll');
    }
});

$(document).ready(function(){
    if($(window).scrollTop() > 0){
        $('#navegacao').addClass('scroll');
    }
})

/*-- ANIMAÇÃO COM SCROLL PARA CARREGAMENTO DE BLOCOS --*/

var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

$(document).ready(function() {
  var $target = $(".anime-esquerda , .anime-topo , .anime-direita , .anime-debaixo"),
      animationClass = 'anime-init',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 4);

  function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();

  $(document).scroll(function() {
    animeScroll();
  });
});
