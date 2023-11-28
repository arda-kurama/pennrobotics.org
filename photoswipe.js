import PhotoSwipeLightbox from "/photoswipe/photoswipe-lightbox.esm.js";
const options = {
  gallery: "#my-gallery",
  children: "a",
  pswpModule: () => import("/photoswipe/photoswipe.esm.js"),

  initialZoomLevel: "fit",
  secondaryZoomLevel: 1.5,
  maxZoomLevel: 1,
};
const lightbox = new PhotoSwipeLightbox(options);
lightbox.on("uiRegister", function () {
  lightbox.pswp.ui.registerElement({
    name: "custom-caption",
    order: 9,
    isButton: false,
    appendTo: "root",
    html: "Caption text",
    onInit: (el, pswp) => {
      lightbox.pswp.on("change", () => {
        const currSlideElement = lightbox.pswp.currSlide.data.element;
        let captionHTML = "";
        if (currSlideElement) {
          const hiddenCaption = currSlideElement.querySelector(
            ".hidden-caption-content"
          );
          if (hiddenCaption) {
            // get caption from element with class hidden-caption-content
            captionHTML = hiddenCaption.innerHTML;
          } else {
            // get caption from alt attribute
            captionHTML = currSlideElement
              .querySelector("img")
              .getAttribute("alt");
          }
        }
        el.innerHTML = captionHTML || "";
      });
    },
  });
  lightbox.pswp.ui.registerElement({
    name: "bulletsIndicator",
    className: "pswp__bullets-indicator",
    appendTo: "wrapper",
    onInit: (el, pswp) => {
      const bullets = [];
      let bullet;
      let prevIndex = -1;

      for (let i = 0; i < pswp.getNumItems(); i++) {
        bullet = document.createElement("div");
        bullet.className = "pswp__bullet";
        bullet.onclick = (e) => {
          pswp.goTo(bullets.indexOf(e.target));
        };
        el.appendChild(bullet);
        bullets.push(bullet);
      }

      pswp.on("change", (a) => {
        if (prevIndex >= 0) {
          bullets[prevIndex].classList.remove("pswp__bullet--active");
        }
        bullets[pswp.currIndex].classList.add("pswp__bullet--active");
        prevIndex = pswp.currIndex;
      });
    },
  });
});
lightbox.init();
