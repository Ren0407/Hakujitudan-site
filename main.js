'use strict'

//top-back

{
  const topBack = document.querySelector(".top-back");

  topBack.addEventListener("click", e => {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
}

//gallary
{
  const galleryBtn = document.getElementById("gallery-btn");
  const galleryArrow = document.getElementById("gallery-arrow");
  const galleryPhoto = document.querySelector(".gallery-photo")

  galleryBtn.addEventListener("click", () => {
    galleryArrow.classList.toggle("active");
    galleryPhoto.classList.toggle("active");
  });
}

//swiper
{
  const mySwiper = new Swiper('.swiper-container', {
    // オプション設定
    loop: true, // ループするかどうか
    slidesPerView: 1,
    loopAdditionalSlides: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // ページネーションをクリック可能にするかどうか
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

//humberger
const humbergerMenu = document.querySelector(".humberger-menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  humbergerMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  humbergerMenu.classList.remove("active");
});