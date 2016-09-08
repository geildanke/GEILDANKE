'use strict';

(function () {
  var vrImageContainer = document.getElementById( 'vrlive__image__canvas' ),
    vrVideoContainer = document.getElementById( 'vrlive__video__canvas' ),
    vrImagePath = '/images/vr-map.jpg',
    vrVideoPath = '/images/videos/R0010084_20160628124206_20160903212208.MP4',
    vrImage = new GEILDANKEVR( 'image', vrImagePath, vrImageContainer ),
    vrVideo = new GEILDANKEVR( 'video', vrVideoPath, vrVideoContainer );
})();