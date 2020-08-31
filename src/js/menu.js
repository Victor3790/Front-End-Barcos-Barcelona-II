jQuery(document).ready(function($){
    let menu            = $('.header__menu');
    let window_width    = $( window ).width();
    let menu_width      = 0;

    if( window_width < 576 )
    {
        menu_width = '75%';
    }
    else if( window_width <  768 )
    {
        menu_width = '65%';
    }
    else if( window_width < 992 )
    {
        menu_width = '55%';
    }
    else
    {
        menu_width = '45%';
    }

    $('.header__menu-icon').click(function(){
        if(menu.css('width')==='0px')
        {
            menu.animate(
                {
                    width: menu_width
                }, 
                {
                    duration: 190,
                    start: function(){menu.css('display','block')}
                }
            );
        }
    });

    $('.header__menu__close').click(function(){
        if(menu.css('width')!=='0px')
        {
            menu.animate({
                    width: '0'
                }, 
                {
                    duration: 190,
                    complete: function(){menu.css('display','none')}
                }
            );
        }
    });
});