'use strict';

(function () {
  var init = {},
    liveExampleContainerVideo = {};

  liveExampleContainerVideo = document.getElementById('vrlive__video__canvas');

  /**
   * Initialize Page
   *
   * @return { void }
   */
  init = function () {
    GEILDANKEVR.single({
      container: liveExampleContainerVideo,
      single: {
        mediaType: 'video',
        url: {
            mp4: '/images/videos/R0010084_20160628124206_20160903212208.MP4',
            webm: '/images/videos/R0010084_20160628124206_20160903212208.webm'
        },
        optionalConfig: {
          startRotation: 70,
          isAnimation: false,
          videoMuted: true
        }
      }
    });
  };

  init();
})();
