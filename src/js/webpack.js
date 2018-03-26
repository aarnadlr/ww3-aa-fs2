// REQUIRING IN JS FILES FOR WEBPACK:

global.jQuery = require('jquery');
$ = require('jquery');
var venobox = require('venobox');
// var jQuery = require('jquery');
var Tilt = require('./tilt');
var bodymovin = require('lottie-web');





$(document).ready(function(){
  $('.venobox').venobox({

    // spinner: 'rotating-plane',
    spinner: '',
    titleattr: '',
    titleColor: '',
    overlayColor: 'rgba(0, 0, 50, 0.8)',
    spinColor: '#1164ff',
    framewidth: '500px',
    // frameheight: '500px',
    arrowsColor: 'cyan'
    // titleattr: 'data-title',    // default: 'title'
    // titlePosition: 'top',
    // titleColor: 'white'
    // border: '10px'             // default: '0'
    // spinColor: 'blue'
  });
   $('.venobox-wide').venobox({

    spinner: '',
    titleattr: '',
    titleColor: '',
    overlayColor: 'rgba(0, 0, 50, 0.8)',
    spinColor: '#1164ff',
    framewidth: '700px',
    // frameheight: '600px',
    arrowsColor: 'cyan'
    // titleattr: 'data-title',    // default: 'title'
    // titlePosition: 'top',
    // titleColor: 'white'
    // border: '10px'             // default: '0'
    // spinColor: 'blue'
  });
});






// JQUERY: SMOOTH SCROLL DOWN TO ANCHOR LINKS

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
  });




// IBM BODYMOVIN ANIMATION
var animData_ibm = {
  container: document.getElementById('animWindow-ibm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://s3.amazonaws.com/aws-website-animatedcodeme--n3fph/bodymovin_files/data-circle-diamond.json'
};

// PLACE THE ABOVE INTO A SHORTER VAR
var anim = bodymovin.loadAnimation(animData_ibm);

// SET SPEED
anim.setSpeed(.7);




