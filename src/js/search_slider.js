jQuery(document).ready(function($){
    /*
    *   This is a custom slider widget.
    *   options:
    *   title   - The title to show and to be sent.
    *   min     - The minimum value of the range.
    *   max     - The maximum value of the range.
    */
    $.widget('bb_search.ship_slider', {
        _create: function() {
            this.element.append('<div class="row"></div>');
            this.element.find('.row')
                        .append(
                            '<div id="title"></div>' + 
                            '<div id="range"></div>'
                        );
            this.element.find('.row')
                        .children()
                        .addClass('col-6');
            this.element.find('#title')
                        .append('<p class="slider__title"></p>');
            this.element.find('.slider__title')
                        .text(this.options.title);
            this.element.find('#range')
                        .append(
                            '<input class="slider__range" type="text" readonly>'
                        );
            this.element.find('.slider__range')
                        .attr('id', this.options.title);
            this.element.append('<div class="bb_search_actual_slider"></div>');

            let actual_slider = this.element.find('.bb_search_actual_slider');

            actual_slider.slider({
                create: function() {
                    $('.ui-slider-handle').addClass('slider__handle');
                    $('.ui-slider').addClass('slider__bar');
                },
                range: true
            });

            actual_slider.slider('option','min',this.options.min);
            actual_slider.slider('option','max',this.options.max);
            actual_slider.slider('option','values', [this.options.min, this.options.max]);
            this.element.find('.slider__range').val( this.options.min + ' - ' + this.options.max );
            
            this._on(
                actual_slider, 
                {
                    'slide': function(event,ui){
                                this.element.find('.slider__range')
                                            .val( ui.values[0] + '-' + ui.values[1] );
                    }
                }
            );
        }
    });
});