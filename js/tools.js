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
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false
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
        axis: 'x',
        scrollInertia: 0
    });

    $('.line-compare-list-inner').mCustomScrollbar({
        axis: 'x',
        scrollInertia: 0
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

    $('body').on('click', '.window-link', function(e) {
        windowOpen($(this).attr('href'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window')) {
            windowClose();
        }
    });

    $('body').on('click', '.window-close', function(e) {
        windowClose();
        e.preventDefault();
    });
    
    $(window).trigger('resize');

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

    if (curScroll > 0) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }

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
                    scrollInertia: 0,
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

function windowOpen(linkWindow, dataWindow) {
    if ($('.window').length == 0) {
        var curPadding = $('.wrapper').width();
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});

        $('body').append('<div class="window"><div class="window-loading"></div></div>')

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
    } else {
        $('.window').append('<div class="window-loading"></div>')
        $('.window-container').addClass('window-container-preload');
    }

    $.ajax({
        type: 'POST',
        url: linkWindow,
        processData: false,
        contentType: false,
        dataType: 'html',
        data: dataWindow,
        cache: false
    }).done(function(html) {
        if ($('.window-container').length == 0) {
            $('.window').html('<div class="window-container window-container-preload">' + html + '<a href="#" class="window-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-close"></use></svg></a></div>');
        } else {
            $('.window-container').html(html + '<a href="#" class="window-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-close"></use></svg></a>');
            $('.window .window-loading').remove();
        }

        window.setTimeout(function() {
            $('.window-container-preload').removeClass('window-container-preload');
        }, 100);

        $('.window form').each(function() {
            initForm($(this));
        });

        $(window).trigger('resize');
    });
}

function windowClose() {
    if ($('.window').length > 0) {
        $('.window').remove();
        $('html').removeClass('window-open');
        $('body').css({'margin-right': 0});
        $('.wrapper').css({'top': 0});
        $(window).scrollTop($('.wrapper').data('curScroll'));
    }
}

$(window).on('load resize scroll', function() {
    if ($(window).width() > 1145) {

        var windowScroll = $(this).scrollTop();

        $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
        var windowHeight = $('#body-test-height').height();
        $('#body-test-height').remove();

        $('.main-complex-title, .main-production-anonce, .axyforma-title, h2, h3, h4, .main-production-title, .main-projects-title, .main-partners-title, .line-anonce-title, .lines-item-title, .lines-item-subtitle, .lines-item-text, .lines-item-zoom, .main-lines-more').each(function() {
            var curRow = $(this);

            var curPosition = windowScroll + windowHeight - windowHeight * 1/4;

            var curStart = curRow.offset().top - windowHeight * 1/4;
            var curStop = curRow.offset().top - windowHeight * 2/4;
            var curPersent = (curPosition - curStart) / (curStart - curStop);

            if (curPersent >= 0) {
                curRow.addClass('animated');
            }
        });

        $('.main-production-photo img, .main-projects-item-photo-inner img, .lines-item-preview-img img, .line-solution-photo-img img, .list-header-text, .about-brand-photo img').each(function() {
            var curRow = $(this);
            var curParent = $(this).parent();

            var curPosition = windowScroll + windowHeight;

            var curStart = curParent.offset().top;
            var curStop = curParent.offset().top + curParent.height() + windowHeight;
            var curPersent = -(curPosition - curStart) / (curStart - curStop);

            if (curPersent >= 0) {
                if (curPersent <= 1) {
                    curRow.css({'transform': 'translateY(' + (-100 * curPersent) + 'px)'});
                } else {
                    curRow.css({'transform': 'translateY(-100px)'});
                }
            } else {
                curRow.css({'transform': 'translateY(0)'});
            }
        });

        $('.projects-item:nth-child(odd) a').each(function() {
            var curRow = $(this);
            var curParent = $(this).parent();

            var curPosition = windowScroll + windowHeight;

            var curStart = curParent.offset().top;
            var curStop = curParent.offset().top + curParent.height() + windowHeight;
            var curPersent = -(curPosition - curStart) / (curStart - curStop);

            if (curPersent >= 0) {
                if (curPersent <= 1) {
                    curRow.css({'transform': 'translateY(' + (-100 * curPersent) + 'px)'});
                } else {
                    curRow.css({'transform': 'translateY(-100px)'});
                }
            } else {
                curRow.css({'transform': 'translateY(0)'});
            }
        });

        $('.project-gallery-list').each(function() {
            var curRow = $(this);
            var curParent = $(this);

            var curPosition = windowScroll + windowHeight;

            var curStart = curParent.offset().top;
            var curStop = curParent.offset().top + curParent.height() + windowHeight;
            var curPersent = -(curPosition - curStart) / (curStart - curStop);

            if (curPersent >= 0) {
                if (curPersent <= 1) {
                    $('.project-gallery-item:nth-child(odd) a').css({'transform': 'translateY(' + (-200 * curPersent) + 'px)'});
                } else {
                    $('.project-gallery-item:nth-child(odd) a').css({'transform': 'translateY(-200px)'});
                }
            } else {
                $('.project-gallery-item:nth-child(odd) a').css({'transform': 'translateY(0)'});
            }
        });

    }

});