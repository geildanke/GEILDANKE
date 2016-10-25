'use strict';

(function () {
  GEILDANKEVR.single({
    container: document.getElementById('vrlive__image__canvas'),
    single: {
      mediaType: 'image',
      url: '/images/vr_mountain.jpg',
      optionalConfig: {
        startRotation: 70,
        isAnimation: true
      }
    }
  });
})();
