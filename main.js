let HeadPrev = document.querySelector(".HeadCarousel .prev");
let HeadNext = document.querySelector(".HeadCarousel .next");
let HeadCarouselContainer = document.querySelector(".HeadCarousel .container");

HeadNext.addEventListener('click', ()=>{
    HeadCarouselContainer.style.justifyContent = "flex-end";
    HeadPrev.style.display = "initial";
    HeadNext.style.display = "none";
})

HeadPrev.addEventListener('click', ()=>{
    HeadCarouselContainer.style.justifyContent = "flex-start";
    HeadPrev.style.display = "none";
    HeadNext.style.display = "initial";
})