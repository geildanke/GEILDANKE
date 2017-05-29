'use strict';

(function() {
    var btnNextElement = document.querySelector('#next'),
      btnPrevElement = document.querySelector('#prev'),
      switchSceneButtonNext = document.querySelector('#threeDNext'),
      switchSceneButtonPrev = document.querySelector('#threeDPrev');

  function init() {
    btnNextElement.addEventListener('click', handleNext);
    btnPrevElement.addEventListener('click', handlePrev);
  }

  function handleNext() {
    switchSceneButtonNext.click();
  }

  function handlePrev() {
    switchSceneButtonPrev.click();
  }

  init();

})();
