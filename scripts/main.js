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
    removeVr = {};

  onBoardingContainer = document.getElementById('vrlive-onboarding');
  heroButton = document.getElementById('hero_vr_start');
  heroContainer = document.getElementById('vrlive__hero__canvas');
  liveExampleContainerImage = document.getElementById('vrlive__image__canvas');
  liveExampleContainerVideo = document.getElementById('vrlive__video__canvas');
  liveExampleButtonImage = document.getElementById('vrlive_vrimage_start');
  liveExampleButtonVideo = document.getElementById('vrlive_vrvideo_start');

  /**
   * Activate VR Plugin on Hero Placeholder
   * - remove all VR Plugins
   * - hide the start button
   * - activate VR Plugin on Hero
   *
   * @return { void }
   */
  activateHeroVr = function () {
    removeAllVr();
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

  /**
   * Activate VR Plugin on Live Image Example
   * - remove all VR Plugins
   * - hide the start button
   * - activate VR Plugin on Live Image Example
   *
   * @return { void }
   */
  activateExampleVrImage = function () {
    removeAllVr();
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

  /**
   * Activate VR Plugin on Live Video Example
   * - remove all VR Plugins
   * - hide the start button
   * - activate VR Plugin on Live Video Example
   *
   * @return { void }
   */
  activateExampleVrVideo = function () {
    removeAllVr();
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

  /**
   * Add Event Listeners
   *
   * @return { void }
   */
  addListeners = function () {
    liveExampleButtonImage.addEventListener('click', activateExampleVrImage);
    liveExampleButtonVideo.addEventListener('click', activateExampleVrVideo);
    heroButton.addEventListener('click', activateHeroVr);
  };

  /**
   * Initialize Page
   *
   * @return { void }
   */
  init = function () {
    addListeners();
    activateHeroVr();
  };

  /**
   * Remove All VR Plugins
   *
   * @return { void }
   */
  removeAllVr = function () {
    removeVr(heroContainer, '/images/vr-mountain-placeholder.jpg', heroButton);
    removeVr(liveExampleContainerVideo, '', liveExampleButtonVideo);
    removeVr(liveExampleContainerImage, '', liveExampleButtonImage);
  };

  /**
   * Remove a special VR Plugin
   *
   * @param  { object } container           container element
   * @param  { object } placeholderImageUrl placeholder image path
   * @param  { object } button              button element
   * @return { void }
   */
  removeVr = function (container, placeholderImageUrl, button) {
    GEILDANKEVR.remove();
    container.innerHTML = '';
    container.style.backgroundImage = 'url(' + placeholderImageUrl + ')';
    container.style.backgroundSize = 'cover';
    container.style.backgroundPosition = 'center center';
    button.style.visibility = 'visible';
  };

  init();
})();
