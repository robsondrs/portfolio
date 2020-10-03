//Scroll menu
$(window).scroll(function(){
    if($(window).scrollTop() > 0){
        $('#navegacao').addClass('scroll');
    }else{
        $('#navegacao').removeClass('scroll');
    }
});

//Ancoras
$('#navegacao a').click(function(){
    if($($(this).attr('href')).length > 0){
        var top = $($(this).attr('href')).offset().top;
        $('html,body').animate({
            scrollTop: top
        });
        return false;
    }
});