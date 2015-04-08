(function($) {
	$('.js-tab-trigger').on('click', function(e) { // tabs
		var activeTabID = $(this).data('show-tab');

		e.preventDefault();

		$(this).closest('.js-tabs').find('.js-tab-trigger').removeClass('active');
		$(this).addClass('active');

		$(activeTabID).siblings('.js-tab').removeClass('active');
		$(activeTabID).addClass('active');

		if ($('.js-afterpaty-trigger').hasClass('active')) {
			$('.js-afterpaty-trigger.active').removeClass('active');
			$('#afterparty').hide();
		}
	});

	$('.js-show-modal').on('click', function(e) { // modals
		var modalID = $(this).data('show-modal');

		e.preventDefault();

		$(modalID).fadeIn();
		$('body').addClass('modal-open')
	});
	$('.js-modal-close').on('click', function(e) {
		e.preventDefault();

		$(this).closest('.h-modal').fadeOut();
		$('body').removeClass('modal-open')
	});

	$('.js-menu-open').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('active');
		$('.nav-primary, .nav-fixed').toggleClass('active');
	});

	$('.menu-primary a').on('click', function(e) {
		$('.nav-primary, .nav-fixed, .btn-primary-menu').toggleClass('active');
	});

	$('.js-show-speakers').on('click', function(e) {
		e.preventDefault();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active').children().html('показать всех');
			$(this).closest('.b-speakers__item').find('.b-speaker__item').eq(5).nextAll().addClass('hidden');
		} else {
			$(this).closest('.b-speakers__item').find('.b-speaker__item.hidden').removeClass('hidden');
			$(this).addClass('active').children().html('свернуть');
		}
	});

	$('.menu-lang').find('.active a').on('click', function(e) {
		var $langMenu = $('.menu-lang');
		e.preventDefault();

		if ($langMenu.hasClass('active')) {
			$langMenu.removeClass('active');
			$('.menu-lang li').not('.active').hide();
		} else {
			$langMenu.addClass('active');
			$('.menu-lang li').show();
		}
	});

	$(window).on('scroll', function() {
		if (this.scrollY > 768) {
			$('.nav-fixed').addClass('nav-fixed--tickets');
		} else {
			$('.nav-fixed').removeClass('nav-fixed--tickets');
		}
	});

	$('.js-afterpaty-trigger').on('click', function(e) {
		e.preventDefault();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('#afterparty').hide();
		} else {
			$('.b-program__item.active, .menu-sidebar--program .active').removeClass('active');
			$(this).addClass('active');
			$('#afterparty').show();
		}
	});

	$('.b-afterparty__close').on('click', function(e) {
		e.preventDefault();
		$('.js-afterpaty-trigger').removeClass('active');
		$('.menu-sidebar--program').find('li').first().children('.js-tab-trigger').addClass('active');
		$('.b-program').find('.js-tab').first().addClass('active');
		$('#afterparty').hide();
	});

	})(jQuery);
