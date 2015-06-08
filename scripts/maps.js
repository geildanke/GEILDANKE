/* global $, google */
/* jshint indent: 2 */

$(document).ready(function () {
  'use strict';

  // Make open-space as height as viewport height
  $('#open-space').css('height', window.innerHeight * 0.5);

  var mapOptions = {},
    geocoder = new google.maps.Geocoder();

  mapOptions = {
    draggable: false,
    scrollwheel: false,
    zoom: 16,
    center: new google.maps.LatLng(-34.397, 150.644),
    styles: [
      {
        'featureType': 'poi.business',
        'stylers': [
          { 'visibility': 'off' }
        ]
      },{
        'stylers': [
          { 'hue': '#ff005d' },
          { 'gamma': 0.71 },
          { 'saturation': -8 }
        ]
      },{
        'featureType': 'water',
        'stylers': [
          { 'color': '#3a8080' },
          { 'saturation': -71 },
          { 'lightness': 30 }
        ]
      }
    ]
  };

  var map = new google.maps.Map(document.getElementById('open-space'), mapOptions);

  geocoder.geocode( { address: 'Geil,Danke! GmbH, Fischerinsel 4, 10179 Berlin, Germany' }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        title: 'Geil,Danke!'
      });
    } else {
      console.log('Google Map was not loaded for the following reason: ' + status);
    }
  });
});