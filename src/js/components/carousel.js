/* eslint-disable */
import $ from 'jquery';
/* eslint-enable */

export default function () {
  // Carousel Documentation: https://paypal.github.io/bootstrap-accessibility-plugin/demo.html#carousel

  const $carousels = $('.carousel');
  $carousels.each(function () {
    const $carousel = $(this);
    const $carouselPause = $carousel.find('.carousel-pause');
    const $carouselPlay = $carousel.find('.carousel-play');
    const $carouselSlideTitle = $carousel.find('.carousel-slide-title');

    $carousel.carousel({
      wrap: true,
      interval: 10000,
    });

    $carouselPause.click(() => {
      $carousel.carousel('pause');
      $carouselPause.hide();
      $carouselPlay.show().focus();
    });

    $carouselPlay.click(() => {
      $carousel.carousel('cycle');
      $carouselPlay.hide();
      $carouselPause.show().focus();
    });

    const $carouselControlButtons = $carousel.find('.carousel-controls button, .carousel-indicators button');

    $carouselControlButtons.click(() => {
      // Set a timeout for the duration of the CSS animation that switches the slide.
      // The new slide does not become "active" until the animation is complete.
      setTimeout(() => {
        const $activeSlide = $carousel.find('.carousel-item.active');
        $carouselSlideTitle.text($activeSlide.data('title'));
      }, 700);
    });
  });
}
