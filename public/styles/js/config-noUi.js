$(document).ready(function(){
    $(window).on('load', function () {
        (function ($) {
            var nonLinearSlider = document.getElementById('filter-price');
            if(nonLinearSlider){
                noUiSlider.create(nonLinearSlider, {
                    start: [0, 80],
                    connect: true,
                    range: {
                        'min': [8],
                        'max': [100]
                    }
                });
                var snapValues = [
                    document.getElementById('filter-price-value-lower'),
                    document.getElementById('filter-price-value-upper')
                ];

                nonLinearSlider.noUiSlider.on('update', function (values, handle) {
                    snapValues[handle].innerHTML = '$' + values[handle];
                });
            }
        })(jQuery);
    });
});