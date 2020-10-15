let ham = document.querySelector(".ham");
let side = document.querySelector(".side");

ham.addEventListener("click", e => {
    ham.classList.toggle("hamActive")
    side.classList.toggle("sideActive")
});
// Star Effect -----------------------------------
document.addEventListener("mousemove", parallax)
function parallax(e){
  this.querySelectorAll(".layer").forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth + e.pageX * speed)/100
    const y = (window.innerWidth + e.pageY * speed)/100

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
  this.querySelectorAll(".layer2").forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX * speed)/100
    const y = (window.innerWidth - e.pageY * speed)/100

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
};
// Owl-Carousel ----------------------------------
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:60,
    nav:true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        },
        1400:{
            items:3
        },
        1600:{
            items:4
        }
    },
});

// AOS -----------------------------------------
AOS.init();

// AOS 2 ---------------------------------------
ScrollOut({
    targets: 'h1,a,div'
});

// Tilt -----------------------------------------
VanillaTilt.init(document.querySelectorAll(".pCard"), {
    max: 27,
    speed: 460
});

let navLs = document.querySelectorAll(".lkns");

for(let navL of navLs) {
    navL.addEventListener("click", e => {
        side.classList.remove("sideActive")
        ham.classList.remove("hamActive")
    });
};
