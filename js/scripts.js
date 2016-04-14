/**
* @file
* Provide JavaScript for main menu toggle.
*/

/*global jQuery*/
/*global Drupal*/

(function ($, Drupal) {

 'use strict';

 Drupal.behaviors.menuToggle = {
   attach: function (context) {
     var $navToggle = $('.js-menu-item .more-link', context);

      // hide items depending on the viewport
      $('.js-hidden--small').addClass('hidden--small');
      $('.js-hidden--medium').addClass('hidden--medium');
      $('.js-hidden--large').addClass('hidden--large');
      // remove the hidden (everywhere) class
      $('.js-not-hidden').removeClass( 'hidden' );

      // Toggle
      $navToggle.on('click', function (event) {
        event.preventDefault();

        // Toggle text
        var el = $(this);
        el.text() === el.data('text-swap') ? el.text(el.data('text-original')) : el.text(el.data('text-swap'));

        // Show/unshow hidden menu
        $('.js-hidden--small').toggleClass('hidden--small');
        $('.js-hidden--medium').toggleClass('hidden--medium');
      });
    }
  };

})(jQuery, Drupal);

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
