function smothscroll(){
    /*SMOTH SCROLL*/
    $('.nav a').click(function(){
        /*Remove class active and ad this class to clicked element*/
        $('.nav li').removeClass('active');
        $(this).parents('li').addClass('active');
        
        /*Close collapse menu when mobile (Bootstrap)*/
        $('.navbar-collapse').collapse('hide');
        
        /*Animation to slide the page*/
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 90
        }, 900);
        return false;
    });
}
