'use strict';

(function () {
  var init = {},
    liveExampleContainerGallery = {};

  liveExampleContainerGallery = document.getElementById('vrlive__gallery__canvas');

  /**
   * Initialize Page
   *
   * @return { void }
   */
  init = function () {
    GEILDANKEVR.gallery({
      container: liveExampleContainerGallery,
      singles: [{
        mediaType: 'image',
        url: '/images/IGtoGD_0.jpg'
      },
      {
        mediaType: 'image',
        url: '/images/IGtoGD_1.jpg'
      },
      {
        mediaType: 'image',
        url: '/images/IGtoGD_2.jpg'
      },
      {
        mediaType: 'image',
        url: '/images/IGtoGD_3.jpg'
      },
      {
        mediaType: 'image',
        url: '/images/IGtoGD_4.jpg'
      }]
    });
  };

  init();
})();
