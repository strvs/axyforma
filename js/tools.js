$(document).ready(function() {

    $.validator.addMethod('phoneRU',
        function(phone_number, element) {
            return this.optional(element) || phone_number.match(/^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/);
        },
        'Ошибка заполнения'
    );

    $('form').each(function() {
        initForm($(this));
    });

    $('.slider-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-prev"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-next"></use></svg></button>',
        dots: false
    });

    $('.line-docs-serts-list').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-prev"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-next"></use></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1149,
                settings: 'unslick'
            }
        ]
    });

    $('.project-content-list').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-prev"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-next"></use></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 767,
                settings: 'unslick'
            }
        ]
    });

    $('.axyforma-clients-list').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-prev"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-next"></use></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1149,
                settings: 'unslick'
            }
        ]
    });

    $('.main-projects-list').each(function() {
        var curGallery = $(this);
        var curBlock = curGallery.parents().filter('.main-projects-wrapper');
        curBlock.find('.main-projects-count-summ').html(curGallery.find('.main-projects-item').length);
        curGallery.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-next"></use></svg></button>',
            adaptiveHeight: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false
                    }
                }
            ]
        }).on('setPosition', function(event, slick) {
            curBlock.find('.main-projects-count-current').html(curGallery.slick('slickCurrentSlide') + 1);
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            curBlock.find('.main-projects-count-current').html(nextSlide + 1);
        });
    });

    $('.main-partners-list-inner').mCustomScrollbar({
        axis: 'x'
    });

    $('.line-compare-list-inner').mCustomScrollbar({
        axis: 'x'
    });

    $('.about-services-list').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-prev"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slider-next"></use></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.line-content').each(function() {
        var curBlock = $(this);
        if (curBlock.find('.line-content-item').length > 8) {
            curBlock.find('.line-content-more').addClass('visible');
        }
    });

    $('.line-content-more a').click(function(e) {
        $(this).parents().filter('.line-content').toggleClass('open');
        e.preventDefault();
    });

    $('.line-tech-menu ul li a').click(function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            var curBlock = curLi.parents().filter('.line-tech');
            var curIndex = curBlock.find('.line-tech-menu ul li').index(curLi);
            curBlock.find('.line-tech-menu ul li.active').removeClass('active');
            curLi.addClass('active');
            curBlock.find('.line-tech-tab.active').removeClass('active');
            curBlock.find('.line-tech-tab').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('.line-menu-inner a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            $('html, body').animate({'scrollTop': curBlock.offset().top - $('.line-menu').height() - $('header').height() - 30});
        }
        e.preventDefault();
    });

    $('.contacts-item-title a, .contacts-item-address a').click(function(e) {
        var curItem = $(this).parents().filter('.contacts-item');
        if (!curItem.hasClass('active')) {
            $('.contacts-item.active').removeClass('active');
            curItem.addClass('active');
            var curIndex = $('.contacts-item').index(curItem);
            myMap.setCenter(coords[curIndex]);
        }
        e.preventDefault();
    });

    $('.mobile-menu-link').click(function(e) {
        var curScroll = $(window).scrollTop();
        $('html').addClass('mobile-menu-open');
        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
        e.preventDefault();
    });

    $('.mobile-menu-close').click(function(e) {
        if ($('html').hasClass('mobile-submenu-open')) {
            $('html').removeClass('mobile-submenu-open');
            $('.nav ul li.open').removeClass('open');
        } else {
            $('html').removeClass('mobile-menu-open');
            $('.wrapper').css({'top': 'auto'});
            $(window).scrollTop($('.wrapper').data('curScroll'));
        }
        e.preventDefault();
    });

    $('.nav li').each(function() {
        if ($(this).find('ul').length > 0) {
            $(this).addClass('with-submenu');
        }
    });

    $('.nav ul li a').click(function(e) {
        var curLi = $(this).parent();
        if ($(window).width() < 1150 && curLi.find('ul').length > 0) {
            $('html').addClass('mobile-submenu-open');
            curLi.addClass('open');
            e.preventDefault();
        }
    });

});

function initForm(curForm) {
    curForm.find('input.phoneRU').mask('+7 (000) 000-00-00');

    curForm.find('.form-input input').blur(function(e) {
        $(this).val($(this).val()).change();
    });

    curForm.validate({
        ignore: ''
    });
}

$(window).on('load resize scroll', function() {
    var curScroll = $(window).scrollTop();
    var curHeight = $(window).height();
    if ($('.line-menu').length > 0) {
        if (curScroll >= $('.line-menu').offset().top - $('header').height()) {
            $('.line-menu').addClass('fixed');
        } else {
            $('.line-menu').removeClass('fixed');
        }

        $('.line-menu-inner li').each(function() {
            var curLi = $(this);
            var curBlock = $(curLi.find('a').attr('href'));
            if ((curBlock.length == 1) && ((curScroll + curHeight * 2 / 3) > curBlock.offset().top)) {
                $('.line-menu-inner li.active').removeClass('active');
                curLi.addClass('active');
            }
        });
    }
});

$(window).on('load resize', function() {

    if ($('.table-scroll').length > 0) {
        if ($(window).width() < 1146) {
            $('.table-scroll').each(function() {
                var curTableScroll = $(this);
                curTableScroll.mCustomScrollbar({
                    axis: 'x',
                    callbacks: {
                        onInit: function() {
                            curTableScroll.removeClass('with-left');
                            curTableScroll.addClass('with-right');
                        },

                        whileScrolling: function() {
                            if (this.mcs.leftPct == 100) {
                                curTableScroll.removeClass('with-right');
                            } else {
                                curTableScroll.addClass('with-right');
                            }

                            if (this.mcs.leftPct == 0) {
                                curTableScroll.removeClass('with-left');
                            } else {
                                curTableScroll.addClass('with-left');

                            }
                        }
                    }
                });
            });
        } else {
            if ($('.table-scroll').length > 0) {
                $('.table-scroll').mCustomScrollbar('destroy');
            }
        }
    }

});