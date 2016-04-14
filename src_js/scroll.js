/**
* @file
* Provide JavaScript for main menu scroll.
*/

/*global jQuery*/
/*global Drupal*/

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.menuScroll = {
    attach: function(context) {

      $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

    }
  };
}(jQuery, Drupal));
