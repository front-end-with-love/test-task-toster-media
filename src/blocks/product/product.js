function initProduct() {
  // Получаем элемент с классом "product__slider"
  const element = document.querySelector('.product__slider');

  // Проверяем, существует ли элемент с классом "product__slider"
  if (element) {
    // Слайдер для превью https://swiperjs.com
    let productThumbs = new Swiper(".product__preview-list", {
      spaceBetween: 16,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      autoHeight: true
    });
    // Основной слайдер https://swiperjs.com
    let productSlider = new Swiper(".product__slider", {
      spaceBetween: 16,
      loop: true,
      loopedSlides: 5,
      thumbs: {
        swiper: productThumbs,
      },
      autoHeight: true
    });
  }
}

initProduct();
