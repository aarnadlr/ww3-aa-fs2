// var venobox       = require("venobox");

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


// IBM.HTML
// IBM.HTML
// IBM BODYMOVIN ANIMATION
// IBM BODYMOVIN ANIMATION

var animData = {
  container: document.getElementById('animWindow-ibm'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  // path: 'https://dl.dropboxusercontent.com/s/qwy4m0sexapyb8b/octoport-j.json?dl=0'
  // path: 'https://ww3.aaronadler.com/bodymovin/data.json'
  // IBM FIRST RENDER:
  // path: 'https://dl.dropboxusercontent.com/s/vlpdha884xnq1ta/data.json?dl=0'
  // IBM CIRCLES:
  // path: 'https://dl.dropboxusercontent.com/s/c58cyqrraerr0v5/data-circle-square-.json?dl=0'
  // IBM CIRCLE-DIAMOND:
  path: 'https://s3.amazonaws.com/aws-website-animatedcodeme--n3fph/bodymovin_files/data-circle-diamond.json'
};




// PLACE THE ABOVE INTO A SHORTER VAR
var anim = bodymovin.loadAnimation(animData);





// SET SPEED
anim.setSpeed(.8);

// SET INITIAL COLOR OF PHONERECT (BACKGROUND) HERE:
TweenMax.set(".phoneRect", {background:"rgb(8, 0, 255)", opacity:1});

// CLICK ANYWHERE ON TOP DIV TO PLAY
$('.phoneRect').click( function() {
  anim.setDirection(1);
  anim.goToAndStop(0);
  anim.play();
});





// FIRST ROW - PLAY CONTROLS
// FIRST ROW - PLAY CONTROLS
// FIRST ROW - PLAY CONTROLS
$('#play').click( function() {
  anim.setDirection(1);
  anim.goToAndStop(0);
  anim.play();
  anim.loop = false;
});

$('#pause').click( function() {
  anim.pause();
});

$('#loop').click( function() {
  // anim.setDirection(1);
  anim.goToAndStop(0);
  anim.play();
  anim.loop = true;
});


$('#fast').click( function() {
  anim.setDirection(1);
  anim.goToAndStop(0);
  anim.play();
  anim.setSpeed(2);
  anim.loop = false;
});

$('#normal').click( function() {
  anim.setDirection(1);
  anim.goToAndStop(0);
  anim.play();
  anim.setSpeed(1);
  anim.loop = false;
});

$('#slow').click( function() {
  anim.setDirection(1);
  anim.goToAndStop(0);
  anim.play();
  anim.setSpeed(.5);
  anim.loop = false;
});

$('#reverse').click( function() {
  anim.setDirection(-1);
  anim.goToAndStop(90, true);
  anim.play();
  anim.loop = false;
  // anim.loop = true;
});






// SECOND ROW - TYPE COLOR CONTROL
// SECOND ROW - TYPE COLOR CONTROL
// SECOND ROW - TYPE COLOR CONTROL
$('#white').click( function() {
  TweenMax.to("path", .5, {fill:"white", stroke:"white", opacity:1});
});

$('#red').click( function() {
  TweenMax.to("path", .5, {fill:"rgb(255, 0, 59)", stroke:"rgb(255, 0, 59)", opacity:1});
  // TweenMax.to("path", 1, {fill:"#70a8fc", opacity:1});
});
$('#cyan').click( function() {
  TweenMax.to("path", .5, {fill:"cyan", stroke:"cyan", opacity:1});
});

$('#magenta').click( function() {
  TweenMax.to("path", .5, {fill:"rgb(255, 0, 255)", stroke:"rgb(255, 0, 255)", opacity:1});
});

$('#black').click( function() {
  TweenMax.to("path", .5, {fill:"black", stroke:"black", opacity:1});
});







// THIRD ROW - BACKGROUND COLOR CONTROLS
// THIRD ROW - BACKGROUND COLOR CONTROLS
// THIRD ROW - BACKGROUND COLOR CONTROLS
$('#whiteBcg').click( function() {
  TweenMax.to(".phoneRect", .5, {background:"rgb(242, 242, 242)", opacity:1});
});

$('#redBcg').click( function() {
  TweenMax.to(".phoneRect", .5, {background:"rgb(255, 0, 59)", opacity:1});
});

$('#blueBcg').click( function() {
  TweenMax.to(".phoneRect", .5, {background:"rgb(8, 0, 255)", opacity:1});
});

$('#purpleBcg').click( function() {
  TweenMax.to(".phoneRect", .5, {background:"rgb(165, 0, 255)", opacity:1});
});

$('#blackBcg').click( function() {
  TweenMax.to(".phoneRect", .5, {background:"rgb(30, 30, 30)", opacity:1});
});
