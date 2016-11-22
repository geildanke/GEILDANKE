'use strict';

(function () {
  var activateHeroVr = {},
    activateExampleVrGallery = {},
    activateExampleVrVideo = {},
    addListeners = {},
    heroButton = {},
    heroContainer = {},
    onBoardingContainer = {},
    init = {},
    liveExampleButtonGallery = {},
    liveExampleButtonVideo = {},
    liveExampleContainerGallery = {},
    liveExampleContainerVideo = {},
    onBoardingContainer = {},
    removeAllVr = {},
    removeVr = {};

  onBoardingContainer = document.getElementById('vrlive-onboarding');
  heroButton = document.getElementById('hero_vr_start');
  heroContainer = document.getElementById('vrlive__hero__canvas');
  liveExampleContainerGallery = document.getElementById('vrlive__gallery__canvas');
  liveExampleContainerVideo = document.getElementById('vrlive__video__canvas');
  liveExampleButtonGallery = document.getElementById('vrlive_vrgallery_start');
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
   * Activate VR Plugin on Live Gallery Example
   * - remove all VR Plugins
   * - hide the start button
   * - activate VR Plugin on Live Gallery Example
   *
   * @return { void }
   */
  activateExampleVrGallery = function () {
    removeAllVr();
    liveExampleButtonGallery.style.visibility = 'hidden';
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
        url: {
            mp4: '/images/videos/R0010084_20160628124206_20160903212208.MP4',
            webm: '/images/videos/R0010084_20160628124206_20160903212208.webm'
        },
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
    liveExampleButtonGallery.addEventListener('click', activateExampleVrGallery);
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
    removeVr(liveExampleContainerGallery, '', liveExampleButtonGallery);
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
