jQuery(document).ready(function($){
    $('#rate_slider').ship_slider({
        title:'PRECIO SEMANAL (€)', 
        min:2000, 
        max:800000
    });

    $('#length_slider').ship_slider({
        title:'LARGO (METROS)', 
        min:13, 
        max:99
    });

    $('#cabins_slider').ship_slider({
        title:'CAMAROTES', 
        min:1, 
        max:21
    });
});