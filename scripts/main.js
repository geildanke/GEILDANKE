'use strict';

(function () {
  var activateHeroVr = {},
    activateExampleVrImage = {},
    activateExampleVrVideo = {},
    addListeners = {},
    heroButton = {},
    heroContainer = {},
    init = {},
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
    removeVr(liveExampleContainer, '/images/michaela.jpg', liveExampleButtonVideo);
    removeVr(liveExampleContainer, '/images/michaela.jpg', liveExampleButtonImage);
    heroButton.style.visibility = 'hidden';
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
    removeVr(heroContainer, '/images/michaela.jpg', heroButton);
    removeVr(liveExampleContainer, '/images/michaela.jpg', liveExampleButtonVideo);
    liveExampleButtonImage.style.visibility = 'hidden';
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
    removeVr(heroContainer, '/images/michaela.jpg', heroButton);
    removeVr(liveExampleContainer, '/images/michaela.jpg', liveExampleButtonImage);
    liveExampleButtonVideo.style.visibility = 'hidden';
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

  addListeners = function () {
    liveExampleButtonImage.addEventListener('click', activateExampleVrImage);
    liveExampleButtonVideo.addEventListener('click', activateExampleVrVideo);
    heroButton.addEventListener('click', activateHeroVr);
  };

  init = function () {
    addListeners();
    activateHeroVr();
  };

  removeVr = function (container, placeholderImageUrl, button) {
    container.innerHTML = '';
    container.style.backgroundImage = 'url(' + placeholderImageUrl + ')';
    container.style.backgroundSize = 'cover';
    container.style.backgroundPosition = 'center center';
    button.style.visibility = 'visible';
  };

  init();
})();
