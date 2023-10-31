const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});


src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"
var testimonialsSlider = new Swiper('.testimonials-slider', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: '.js-testimonials-pagination',
        clickable: true
    },
    breakpoints: {
        767: {
            slidesPerView: 2
        }
    }
});

src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"
var testimonialsSlider = new Swiper('.testimonial-slider', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: '.js-testimonial-pagination',
        clickable: true
    },
    breakpoints: {
        767: {
            slidesPerView: 5
        }
    }
});

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };

// Hide/show the navbar on scroll
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.querySelector('.navbar');

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-100px';
    }

    prevScrollPos = currentScrollPos;
}

document.addEventListener("DOMContentLoaded", function () {
    const mulaiButton = document.getElementById("mulaiButton");

    mulaiButton.addEventListener("click", function () {
        const testimonialsSection = document.querySelector(".testimonials");
        if (testimonialsSection) {
            testimonialsSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const mulaiButton = document.getElementById("GetStarted");

    mulaiButton.addEventListener("click", function () {
        const testimonialsSection = document.querySelector(".lsgfooter");
        if (testimonialsSection) {
            testimonialsSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});