'use strict';

(function () {
  var activateHeroVr = {},
    activateExampleVrImage = {},
    activateExampleVrVideo = {},
    addListeners = {},
    heroButton = {},
    heroContainer = {},
    onBoardingContainer = {},
    init = {},
    liveExampleButtonImage = {},
    liveExampleButtonVideo = {},
    liveExampleContainerImage = {},
    liveExampleContainerVideo = {},
    onBoardingContainer = {},
    removeAllVr = {},
    removeVr = {},
    showOnboarding = {},
    hideOnboarding = {};

  onBoardingContainer = document.getElementById('vrlive-onboarding');
  heroButton = document.getElementById('hero_vr_start');
  heroContainer = document.getElementById('vrlive__hero__canvas');
  liveExampleContainerImage = document.getElementById('vrlive__image__canvas');
  liveExampleContainerVideo = document.getElementById('vrlive__video__canvas');
  liveExampleButtonImage = document.getElementById('vrlive_vrimage_start');
  liveExampleButtonVideo = document.getElementById('vrlive_vrvideo_start');

  activateHeroVr = function () {
    removeAllVr();
    showOnboarding();
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
    removeAllVr();
    hideOnboarding();
    liveExampleButtonImage.style.visibility = 'hidden';
    GEILDANKEVR.single({
      container: liveExampleContainerImage,
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
    removeAllVr();
    hideOnboarding();
    liveExampleButtonVideo.style.visibility = 'hidden';
    GEILDANKEVR.single({
      container: liveExampleContainerVideo,
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

  hideOnboarding = function () {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (width >= 960) {
      onBoardingContainer.style.visibility = 'hidden';
    }
  };

  init = function () {
    addListeners();
    // activateHeroVr();
  };

  removeAllVr = function () {
    removeVr(heroContainer, '/images/vr-mountain-placeholder.jpg', heroButton);
    removeVr(liveExampleContainerVideo, '', liveExampleButtonVideo);
    removeVr(liveExampleContainerImage, '', liveExampleButtonImage);
  };

  removeVr = function (container, placeholderImageUrl, button) {
    GEILDANKEVR.remove();
    container.innerHTML = '';
    container.style.backgroundImage = 'url(' + placeholderImageUrl + ')';
    container.style.backgroundSize = 'cover';
    container.style.backgroundPosition = 'center center';
    button.style.visibility = 'visible';
  };

  showOnboarding = function () {
    onBoardingContainer.style.visibility = 'visible';
  };

  init();
})();
