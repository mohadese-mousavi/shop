// --- slider swiper container ---

const slider = new Swiper('#sc-slider', {

    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// --- sale swiper container ---

const sale = new Swiper('#sc-sale', {

    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    breakpoints: {

        // when window width is <= 0
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
        // when window width is <= 576
        576: {
            slidesPerView: 1,
            spaceBetweenSlides: 20
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        // when window width is <= 992px
        992: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    },


});

// ---  ---

const recentProduct = new Swiper('#sc-recent-procuct', {

    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    loopedSlides: 50,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    breakpoints: {

        // when window width is <= 576
        576: {
            slidesPerView: 2,
            spaceBetweenSlides: 20
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },
        // when window width is <= 992px
        992: {
            slidesPerView: 4,
            spaceBetweenSlides: 50
        }
    },
    pagination: {
        el: '#sp-recent-procuct',
        clickable: true,
    },

});

// ---  ---

const topCat = new Swiper('.sc-top-cat', {

    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    loopedSlides: 50,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    breakpoints: {


        // when window width is <= 768px
        768: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        // when window width is <= 992px
        992: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        }
    },
    pagination: {
        el: '.sp-top-cat',
        clickable: true,
    },

});

// ---  ---

const brands = new Swiper('#sc-brands', {

    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    breakpoints: {

        // when window width is <= 0
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        // when window width is <= 576
        576: {
            slidesPerView: 4,
            spaceBetweenSlides: 20
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 6,
            spaceBetweenSlides: 30
        },
        // when window width is <= 992px
        992: {
            slidesPerView: 8,
            spaceBetweenSlides: 50
        }
    }
});