let HeadPrev = document.querySelector(".HeadCarousel .prev");
let HeadNext = document.querySelector(".HeadCarousel .next");
let HeadCarouselContainer = document.querySelector(".HeadCarousel .container");
let HeadCarousel = document.querySelector(".HeadCarousel");
let width_HeadCarousel = HeadCarousel.offsetWidth;
let width_Container = HeadCarouselContainer.scrollWidth;

HeadNext.addEventListener('click', ()=>{
    HeadCarouselContainer.style.right = `${width_Container - width_HeadCarousel}px`;
    HeadPrev.style.display = "initial";
    HeadNext.style.display = "none";
})

HeadPrev.addEventListener('click', ()=>{
    HeadCarouselContainer.style.right = 0;
    HeadPrev.style.display = "none";
    HeadNext.style.display = "initial";
})


let MoneyPrev = document.querySelector(".carouselBox .box:nth-child(1) .carouselContainer .prev");
let MoneyNext = document.querySelector(".carouselBox .box:nth-child(1) .carouselContainer .next");
let MoneyCarouselContainer = document.querySelector(".carouselBox .box:nth-child(1) .carouselContainer");
let MoneyCarousel = document.querySelector(".carouselBox .box:nth-child(1) .carousel");
let width_MoneyCarousel = MoneyCarousel.offsetWidth;
let width_MoneyContainer = MoneyCarouselContainer.scrollWidth;

MoneyNext.addEventListener('click', ()=>{
    MoneyCarouselContainer.style.right = `${width_MoneyContainer - width_MoneyCarousel}px`;
    MoneyPrev.style.left = `${width_MoneyContainer - width_MoneyCarousel}px`;
    MoneyPrev.style.display = "initial";
    MoneyNext.style.display = "none";
})

MoneyPrev.addEventListener('click', ()=>{
    MoneyCarouselContainer.style.right = 0;
    MoneyPrev.style.display = "none";
    MoneyNext.style.display = "initial";
})


let TravelPrev = document.querySelector(".carouselBox .box:nth-child(2) .carouselContainer .prev");
let TravelNext = document.querySelector(".carouselBox .box:nth-child(2) .carouselContainer .next");
let TravelCarouselContainer = document.querySelector(".carouselBox .box:nth-child(2) .carouselContainer");
let TravelCarousel = document.querySelector(".carouselBox .box:nth-child(2) .carousel");
let width_TravelCarousel = MoneyCarousel.offsetWidth;
let width_TravelContainer = MoneyCarouselContainer.scrollWidth;

TravelNext.addEventListener('click', ()=>{
    TravelCarouselContainer.style.right = `${width_TravelContainer - width_TravelCarousel}px`;
    TravelPrev.style.left = `${width_TravelContainer - width_TravelCarousel}px`;
    TravelPrev.style.display = "initial";
    TravelNext.style.display = "none";
})

TravelPrev.addEventListener('click', ()=>{
    TravelCarouselContainer.style.right = 0;
    TravelPrev.style.display = "none";
    TravelNext.style.display = "initial";
})
