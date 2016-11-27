'use strict';

(function () {
  var heroContainer = {},
    init = {};

  heroContainer = document.getElementById('vrlive__hero__canvas');

  /**
   * Initialize Page
   *
   * @return { void }
   */
  init = function () {
    GEILDANKEVR.single({
      container: heroContainer,
      single: {
        mediaType: 'image',
        url: '/images/vr-mountain.jpg',
        optionalConfig: {
          startRotation: 70,
          isAnimation: true,
          animationSpeed: 2
        }
      }
    });
  };

  init();
})();
