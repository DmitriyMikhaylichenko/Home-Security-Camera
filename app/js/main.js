// ==========mobile-nav===============================
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});
// ===================================================

$('.product__slider').slick({
    slidesToShow: 3,
    infinite: false,
    initialSlide: 0,
    waitForAnimate: false,
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                // arrows: false
            }
        }
    ]

});
// ==============================
$('.why__cards').slick({
    slidesToShow: 3,
    infinite: false,
    initialSlide: 0,
    waitForAnimate: false,
    appendArrows: $('.why__arrows'),
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                appendArrows: $('.why__arrows-bottom')
            }
        }
    ]
})

$('.update__card').slick({
    slidesToShow: 3,
    infinite: false,
    initialSlide: 0,
    waitForAnimate: false,
    appendArrows: $('.update__arrows'),
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                appendArrows: $('.update__arrows-bottom')
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                appendArrows: $('.update__arrows-bottom')
            }
        }
    ]
})

// ===========================================================================================
$(function () {

})