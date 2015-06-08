$(document).ready( function () {
	'use strict';

	var $mainNav = $('.main-nav');

	// Toggle menu
	$('#menu-toggle').click( function () {
		$mainNav.toggleClass('is-visible');
	});
});