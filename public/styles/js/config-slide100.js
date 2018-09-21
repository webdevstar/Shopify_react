$(document).ready(function(){
    $(window).on('load', function () {
        setTimeout(function(){
            (function ($) {
                $('#slide100-01').slide100({
                    autoPlay: "false",
                    timeAuto: 3000,
                    deLay: 400,

                    linkIMG: [
                        'https://s3.ca-central-1.amazonaws.com/shopizer-demo/products/DEFAULT/test/SMALL/IMG_9386_200x152.jpg',
                        'https://s3.ca-central-1.amazonaws.com/shopizer-demo/products/DEFAULT/test/SMALL/IMG_9386_200x152.jpg',
                        'https://s3.ca-central-1.amazonaws.com/shopizer-demo/products/DEFAULT/test/SMALL/IMG_9386_200x152.jpg',
                        'https://s3.ca-central-1.amazonaws.com/shopizer-demo/products/DEFAULT/test/SMALL/IMG_9386_200x152.jpg',
                        'https://s3.ca-central-1.amazonaws.com/shopizer-demo/products/DEFAULT/test/SMALL/IMG_9386_200x152.jpg',
                    ],

                    linkThumb: [
                        'https://s3.ca-central-1.amazonaws.com/shopizer-demo/products/DEFAULT/test/SMALL/IMG_9386_200x152.jpg',
                        'https://s3.ca-central-1.amazonaws.com/shopizer-demo/products/DEFAULT/test/SMALL/IMG_9386_200x152.jpg',
                        'https://s3.ca-central-1.amazonaws.com/shopizer-demo/products/DEFAULT/test/SMALL/IMG_9386_200x152.jpg',
                        'https://s3.ca-central-1.amazonaws.com/shopizer-demo/products/DEFAULT/test/SMALL/IMG_9386_200x152.jpg',
                        'https://s3.ca-central-1.amazonaws.com/shopizer-demo/products/DEFAULT/test/SMALL/IMG_9386_200x152.jpg',
                    ]
                });
            })(jQuery);
        },500);
    });
});