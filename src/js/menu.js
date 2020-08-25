jQuery(document).ready(function($){
    $('.header__menu-icon').click(function(){
        $('.header__menu').show('slow');
    });

    $('.header__menu__close').click(function(){
        $('.header__menu').hide('slow');
    });
});