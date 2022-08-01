import * as Ivanfunctions from "./modules/function.js";

Ivanfunctions.isWebp()







const iconMenu = document.querySelector(".header__menu-icon");
const overlayMenu = document.querySelector(".header__overlay");
const menuBody = document.querySelector(".header__menu")

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle("_active")
        overlayMenu.addEventListener('click', function (e) {
            iconMenu.classList.remove("_active")
            menuBody.classList.remove("_active")
        })
        menuBody.classList.toggle("_active")
    })
}

const anchors = document.querySelectorAll('a.item-link')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')
        console.log(iconMenu.classList.contains('_acitve'));
        if (iconMenu.classList.contains('_active')) {
            iconMenu.classList.remove("_active");
            menuBody.classList.remove("_active");
        }

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    })
}
let loadMoreBtn = document.querySelector('#load-more-btn');
let currentItem = 4;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.cases__body .cases__item')];

    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = "inline-block";
    }

    currentItem += 5;
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = "none"
    }

}

$(document).ready(function () {
    // Assign some jquery elements we'll need
    var $swiper = $(".swiper");
    var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // into a fixed position for animation purposes
    var $bottomSlideContent = null; // Slide content that gets passed between the
    // panning slide stack and the position 'behind'
    // the stack, needed for correct animation style

    var mySwiper = new Swiper(".mySwiper-1", {
        spaceBetween: 100,
        slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            // when window width is <= 499px
            320: {
                slidesPerView: "auto",
                spaceBetween: 250,
            },
            // when window width is <= 999px
            767: {
                slidesPerView: 2,
            },
            999: {
                spaceBetween: 100,
                slidesPerView: 3,
            }
        }
    });
});

$(".multiple-items").slick({

    // normal options...
    iinfinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    nextArrow: '<img class="reviews__next-arrow" src="img/ArrowRightSlider.png" alt="">',
    prevArrow: '<img class="reviews__prev-arrow" src="img/ArrowLeftSlider.png" alt="">',
    // the magic
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: true
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 2,
        }

    }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

    }]
});


$(".show-more button").on("click", function () {
    var $this = $(this);
    var $content = $this.parent().prev("div.reviews__item-description");
    var $itemContent = $this.parent().prev("div.reviews__item");
    var linkText = $this.text();

    if (linkText === "еще") {
        linkText = "закрыть";
        $content.addClass("showContent");
    } else {
        linkText = "еще";
        $content.removeClass("showContent");
    };

    $this.text(linkText);
})


// ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//         center: [47.222078, 39.720358],
//         zoom: 9,
//         controls: []
//     }, {
//         searchControlProvider: 'yandex#search'
//     }),

//         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//             hintContent: 'Чистопрудов',
//             balloonContent: 'Наша компания'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: 'img/iconMap.png',
//             // Размеры метки.
//             iconImageSize: [65, 85],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-33, -65]
//         });


//     myMap.geoObjects
//         .add(myPlacemark)
// });