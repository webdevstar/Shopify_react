(function ($) {
	"use strict";
	// Use strict
	$(window).on('load', function () {
		$('#slide-1').revolution({
			sliderLayout: "fullscreen",
			delay: '6000',
			autoPlay: 'off',
			fullScreenAlignForce: 'off',
			disableProgressBar: 'on',
			navigation: {
				arrows: {
					enable: true,
					hide_onleave: false,
					style: 'au-nav-1'
				},
				bullets: {
					enable: true,
					style: 'au-bullet-1',
					h_align: 'center',
					v_align: 'bottom',
					hide_onleave: false,
					h_offset: 0,
					v_offset: 40,
					space: 18,
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			gridwidth: [1240, 1024, 778, 480],
			gridheight: [600, 600, 500, 400],
		});


		$('#slide-2').revolution({
			sliderLayout: "fullscreen",
			delay: '5000',
			autoPlay: 'off',
			disableProgressBar: 'on',
			navigation: {
				arrows: {
					enable: true,
					hide_onleave: true,
					style: 'au-nav-1'
				},
				bullets: {
					enable: true,
					style: 'au-bullet-1',
					h_align: 'center',
					v_align: 'bottom',
					hide_onleave: false,
					h_offset: 0,
					v_offset: 40,
					space: 18,
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			gridwidth: [1240, 1024, 778, 480],
			gridheight: [600, 600, 500, 400],
		});

		$('#slide-3').revolution({
			sliderLayout: "fullscreen",
			delay: '6000',
			autoPlay: 'off',
			disableProgressBar: 'on',
			navigation: {
				arrows: {
					enable: true,
					hide_onleave: false,
					style: 'au-nav-3'
				},
				bullets: {
					enable: true,
					style: 'au-bullet-2',
					h_align: 'center',
					v_align: 'bottom',
					hide_onleave: false,
					h_offset: 0,
					v_offset: 40,
					space: 18,
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			gridwidth: [1240, 1024, 778, 480],
			gridheight: [600, 600, 500, 400],
		});


		$('#slide-4').revolution({
			sliderLayout: "fullscreen",
			delay: '6000',
			autoPlay: 'off',
			disableProgressBar: 'on',
			navigation: {
				arrows: {
					enable: true,
					hide_onleave: false,
					style: 'au-nav-2'
				},
				bullets: {
					enable: true,
					style: 'au-bullet-2',
					h_align: 'center',
					v_align: 'bottom',
					hide_onleave: false,
					h_offset: 0,
					v_offset: 30,
					space: 17,
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			gridwidth: [1240, 1024, 778, 480],
			gridheight: [600, 600, 500, 400],
		});

		$('#slide-5').revolution({
			sliderLayout: "fullscreen",
			delay: '6000',
			autoPlay: 'off',
			disableProgressBar: 'on',
			navigation: {
				arrows: {
					enable: true,
					hide_onleave: false,
					style: 'au-nav-1'
				},
				bullets: {
					enable: true,
					style: 'au-bullet-1',
					h_align: 'center',
					v_align: 'bottom',
					hide_onleave: false,
					h_offset: 0,
					v_offset: 40,
					space: 18,
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			gridwidth: [1240, 1024, 778, 480],
			gridheight: [600, 600, 500, 400],
		});

		$('#slide-6').revolution({
			sliderLayout: "fullscreen",
			delay: '6000',
			autoPlay: 'off',
			disableProgressBar: 'on',
			navigation: {
				arrows: {
					enable: true,
					hide_onleave: false,
					style: 'au-nav-1'
				},
				bullets: {
					enable: true,
					style: 'au-bullet-1',
					h_align: 'center',
					v_align: 'bottom',
					hide_onleave: false,
					h_offset: 0,
					v_offset: 40,
					space: 18,
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			gridwidth: [1240, 1024, 778, 480],
			gridheight: [600, 600, 500, 400],
		});
	});
})(jQuery);