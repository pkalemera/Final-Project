$(document).ready(function() {

  // Start Jquery Code HERE

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    }); // end smooth scroll

// end DOCUMENT READY
});

//start of burger menu

$( document ).ready(function() {
   $(".burger-button").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").slideToggle();
   });

  $(".burger-menu").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").slideToggle();
  });
  $("#map-popup-button").click(function(){
    $("#map-popup").slideToggle();
});

});

//end of burger menu
