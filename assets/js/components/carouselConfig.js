export function initCarousels() {
  const heroCarouselElement = document.querySelector('#hero-carousel');
  if (heroCarouselElement) {
    new Flickity(heroCarouselElement, {
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      pageDots: false,
      autoPlay: 2000
    });
  }

  const productsCarouselElement = document.querySelector('#products-carousel');
  if (!productsCarouselElement) return;

  let productsFlickityInstance = null;

  const handleProductsCarousel = () => {
    const isDesktop = window.matchMedia('(min-width: 1440px)').matches;

    if (isDesktop) {
      if (productsFlickityInstance) {
        productsFlickityInstance.destroy();
        productsFlickityInstance = null;
      }
      productsCarouselElement.classList.add('is-grid');
    } else {
      if (!productsFlickityInstance) {
        productsFlickityInstance = new Flickity(productsCarouselElement, {
          cellAlign: 'left',
          contain: true,
          pageDots: false,
          wrapAround: false
        });
      }
      productsCarouselElement.classList.remove('is-grid');
    }
  };

  handleProductsCarousel();
  window.addEventListener('resize', handleProductsCarousel);
}