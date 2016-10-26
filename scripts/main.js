'use strict';

(function () {
  var activateHeroVr = {},
    activateExampleVrImage = {},
    activateExampleVrVideo = {},
    heroButton = {},
    heroContainer = {},
    liveExampleButtonImage = {},
    liveExampleButtonVideo = {},
    liveExampleContainer = {},
    removeVr = {};

  heroButton = document.getElementById('hero_vr_start');
  heroContainer = document.getElementById('vrlive__image__canvas');
  liveExampleContainer = document.getElementById('vrlive__video__canvas');
  liveExampleButtonImage = document.getElementById('vrlive_vrimage_start');
  liveExampleButtonVideo = document.getElementById('vrlive_vrvideo_start');

  activateHeroVr = function () {
    GEILDANKEVR.single({
      container: heroContainer,
      single: {
        mediaType: 'image',
        url: '/images/vr-mountain.jpg',
        optionalConfig: {
          startRotation: 70,
          isAnimation: true
        }
      }
    });
  };

  activateExampleVrImage = function () {
    GEILDANKEVR.single({
      container: liveExampleContainer,
      single: {
        mediaType: 'image',
        url: '/images/vr-mountain.jpg',
        optionalConfig: {
          startRotation: 70,
          isAnimation: true
        }
      }
    });
  };

  activateExampleVrVideo = function () {
    GEILDANKEVR.single({
      container: liveExampleContainer,
      single: {
        mediaType: 'video',
        url: '/images/videos/R0010084_20160628124206_20160903212208.MP4',
        optionalConfig: {
          startRotation: 70,
          isAnimation: true
        }
      }
    });
  };

  removeVr = function (container, placeholderImageUrl, button) {
    container.innerHTML = '';
    container.style.backgroundImage = 'url(' + placeholderImageUrl + ')';
    container.style.backgroundSize = 'cover';
    container.style.backgroundPosition = 'center center';
    button.style.display = 'block';
  };

  liveExampleButtonImage.addEventListener('click', function () {
    removeVr(heroContainer, '/images/michaela.jpg', heroButton);
    removeVr(liveExampleContainer, '/images/michaela.jpg', liveExampleButtonImage);
    activateExampleVrImage();
  });

  liveExampleButtonVideo.addEventListener('click', function () {
    removeVr(heroContainer, '/images/michaela.jpg', heroButton);
    removeVr(liveExampleContainer, '/images/michaela.jpg', liveExampleButtonVideo);
    activateExampleVrVideo();
  });

  heroButton.addEventListener('click', function () {
    activateHeroVr();
  });

  activateHeroVr();
})();
