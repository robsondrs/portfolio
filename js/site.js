//Scroll menu
$(window).scroll(function(){
    if($(window).scrollTop() > 0){
        $('#navegacao').addClass('scroll');
    }else{
        $('#navegacao').removeClass('scroll');
    }
});

$('.navbar-nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 60
	}, 500);
});

$(document).ready(function(){
    if($(window).scrollTop() > 0){
        $('#navegacao').addClass('scroll');
    };
})

$(".nav-link").on("click", function(){
  $('.navbar-collapse').collapse('hide');
});

/*-- ANIMAÃ‡ÃƒO COM SCROLL PARA CARREGAMENTO DE BLOCOS --*/

var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

$(document).ready(function() {
  var $target = $(".anime-esquerda , .anime-direita , .anime-topo , .anime-debaixo"),
      animationClass = 'anime-init',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight /8);
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
