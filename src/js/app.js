import * as Ivanfunctions from "./modules/function.js";

Ivanfunctions.isWebp()




// Переменные
const popup = document.querySelector('.popup')
const iconMenu = document.querySelector(".header__menu-icon");
const overlayMenu = document.querySelector(".header__overlay");
const menuBody = document.querySelector(".header__menu")



// Если есть ссылки, то производится логика
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


// Якорные ссылки
const anchors = document.querySelectorAll('a.item-link')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href')
        if (iconMenu.classList.contains('_active')) {
            iconMenu.classList.remove("_active");
            menuBody.classList.remove("_active");
        }

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: "start", inline: "nearest"
        })

    })
}


//Открытие pop-up
function openPopup() { //открытие popup
    popup.classList.add('popup_opened');
}

// Закрытие pop-up
function closePopup() { //закрытие popup
    popup.classList.remove('popup_opened');
}


// Кнопки на закрытие и открытие popUp
document.querySelector("#openModal").addEventListener("click", openPopup)
document.querySelectorAll("#closeModal").forEach((el) => {
    el.addEventListener("click", closePopup)
})



// Кнопка Наверх 

function trackScroll() {
    var scrolled = window.pageYOffset
    var coords = 500;
    let btnTop = document.querySelector(".upbtn")
    if (scrolled > coords) {
        // btnTop.style.transform = 'scale(' + 1 + ')'
        btnTop.classList.remove('_hidden')
    }
    if (scrolled < coords) {
        // btnTop.style.transform = 'scale(' + 0 + ')'
        btnTop.classList.add('_hidden')
    }
}
window.addEventListener('scroll', trackScroll, { capture: true });

$('.upbtn').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
});
trackScroll()



// Функционал для показа большего кол-ва блоков
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


// Swiper слайдер
$(document).ready(function () {
    var $swiper = $(".swiper");
    var $bottomSlide = null;
    var $bottomSlideContent = null;

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


// Слик слайдер
$(".multiple-items").slick({

    // Options
    iinfinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    nextArrow: '<img class="reviews__next-arrow" src="img/ArrowRightSlider.png" alt="">',
    prevArrow: '<img class="reviews__prev-arrow" src="img/ArrowLeftSlider.png" alt="">',
    // Breakpoints
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


