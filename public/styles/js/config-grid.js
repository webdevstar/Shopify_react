(function ($) {
    $(window).on('load', function () {
        setTimeout(function(){
            $('.grid-body').each(function () {
                var layout = $(this).attr('data-layout') != null ? $(this).attr('data-layout') : 'masonry';
                var $grid = $(this).isotope({
                    itemSelector: '.grid-item',
                    layoutMode: layout,
                    masonry: {
                        columnWidth: '.grid-item'
                    }
                });
                $('.grid-filter').on('click', 'span', function () {
                    var filterValue = $(this).attr('data-filter');
                    $(this).parent().parent().find('li').removeClass('active');
                    $(this).parent().addClass('active');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
            });
        }, 1000);
    });
})(jQuery);