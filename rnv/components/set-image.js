/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300},
    key: {type: 'number'},
    role: {type: 'string'}
  },

  init: function () {
    var content = [
      {
        key: 0,
        image: '#tour_0',
        nextPosition: '-3 -1 -3',
        nextRotation: '0 90 0',
        phiStart: 350,
        prevPosition: '0 -100 0',
        prevRotation: '0 0 0'
      },
      {
        key: 1,
        image: '#tour_1',
        nextPosition: '-3 -1 2',
        nextRotation: '0 170 0',
        phiStart: 90,
        prevPosition: '3 -1 -2',
        prevRotation: '0 350 0'
      },
      {
        key: 2,
        image: '#tour_2',
        nextPosition: '-2 -1 3',
        nextRotation: '0 160 0',
        phiStart: 290,
        prevPosition: '3 -1 -2',
        prevRotation: '0 270 0'
      },
      {
        key: 3,
        image: '#tour_3',
        nextPosition: '0 -1 3',
        nextRotation: '0 240 0',
        phiStart: 0,
        prevPosition: '3 -1 -2',
        prevRotation: '0 270 0'
      },
      {
        key: 4,
        image: '#tour_4',
        nextPosition: '2 -1 3',
        nextRotation: '0 270 0',
        phiStart: 200,
        prevPosition: '3 -1 -2',
        prevRotation: '0 270 0'
      },
      {
        key: 5,
        image: '#tour_5',
        nextPosition: '3 -1 2',
        nextRotation: '0 270 0',
        phiStart: 180,
        prevPosition: '3 -1 -2',
        prevRotation: '0 270 0'
      },
      {
        key: 6,
        image: '#tour_6',
        nextPosition: '0 -100 0', // make button invisible o.o
        nextRotation: '0 0 0',
        phiStart: 190,
        prevPosition: '3 -1 -2',
        prevRotation: '0 270 0'
      }
    ],
    data = this.data,
    el = this.el,
    targetObject = document.querySelector('#image-360'),
    currentImageKey = parseInt(targetObject.getAttribute('key')),
    nextButtonElement = document.querySelector('#threeDNext'),
    prevButtonElement = document.querySelector('#threeDPrev'),
    nextUiButtonElement = document.querySelector('#next'),
    prevUiButtonElement = document.querySelector('#prev'),
    keyMax = 6,
    keyMin = 0;

    this.setupFadeAnimation();

    el.addEventListener(data.on, handleClick, data.dur);

    function handleClick() {

      currentImageKey = parseInt(targetObject.getAttribute('key'));
      // console.log('__Current Config__', content[currentImageKey], data, 'KEY:', currentImageKey);

      if (data.role === 'next' && currentImageKey < keyMax) {
        currentImageKey = currentImageKey + 1;
        targetObject.setAttribute('key', currentImageKey);
      } else if (data.role === 'prev' && currentImageKey > keyMin) {
        currentImageKey = currentImageKey - 1;
        targetObject.setAttribute('key', currentImageKey);
      }

      if (currentImageKey === keyMax) {
        nextUiButtonElement.classList.add('deactivated');
        prevUiButtonElement.classList.remove('deactivated');
      } else if (currentImageKey === keyMin) {
        nextUiButtonElement.classList.remove('deactivated');
        prevUiButtonElement.classList.add('deactivated');
      } else {
        nextUiButtonElement.classList.remove('deactivated');
        prevUiButtonElement.classList.remove('deactivated');
      }

      // Fade out image.
      data.target.emit('set-image-fade');
      // Wait for fade to complete.
      setTimeout(function () {
        // Set image and image phi start.
        data.target.setAttribute('material', 'src', content[currentImageKey].image);
        data.target.setAttribute('phi-start', content[currentImageKey].phiStart);
        // Set button position and configure button to load next image on click.
        nextButtonElement.setAttribute('position', content[currentImageKey].nextPosition);
        nextButtonElement.setAttribute('rotation', content[currentImageKey].nextRotation);
        prevButtonElement.setAttribute('position', content[currentImageKey].prevPosition);
        prevButtonElement.setAttribute('rotation', content[currentImageKey].prevRotation);
        data.src = content[currentImageKey].image;
      });
    }
  },

  /**
   * Setup fade-in + fade-out.
   */
  setupFadeAnimation: function () {
    var data = this.data;
    var targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
  }
});
