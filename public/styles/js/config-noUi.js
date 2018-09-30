$(document).ready(function(){
    var delayTimer;
    var loaded = 0;
    $("body").on('DOMSubtreeModified', '#listingpage', function() {
        clearTimeout(delayTimer);
        loaded = 0;
        delayTimer = setTimeout(function(){
            if($("#filter-price") && loaded === 0) load();
        },1000);
    });
    function load(){
        console.log("asdfasdf");
        loaded = 1;
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
    }
});