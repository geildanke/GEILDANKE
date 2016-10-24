'use strict';

(function () {
  GEILDANKEVR.single({
    container: document.getElementById('vrlive__image__canvas'),
    single: {
      mediaType: 'image',
      url: '/images/vr-italy.jpg',
      optionalConfig: {
        startRotation: 70,
        isAnimation: false
      }
    }
  });
  GEILDANKEVR.single({
    container: document.getElementById('vrlive__video__canvas'),
    single: {
      mediaType: 'video',
      url: '/images/videos/R0010084_20160628124206_20160903212208.MP4',
      optionalConfig: {
        startRotation: 90,
        isAnimation: false
      }
    }
  });
})();
