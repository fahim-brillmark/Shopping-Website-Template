document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "slide",
    perPage: 6,
    perMove: 1,
    pagination: false,
    rewind: true,
    autoplay:true,
    interval:1100,
    breakpoints: {
      768: {
        perPage: 2,
      },
    },
  }).mount();
});
