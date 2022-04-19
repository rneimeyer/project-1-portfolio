// if (typeof $ == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file properly!')};


// Used inspiration from a few sources on the below function.
// https://codepen.io/g13nn/pen/eHGEF
// https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

$(() => {
    $('.hamburger').click(function(event) {
        event.preventDefault();
        $('.links').slideToggle()
    })

// Used guidance from W3 and the jquery cheat sheet for below function
// https://www.w3schools.com/jquery/eff_animate.asp
// https://oscarotero.com/jquery/

    $('.fa-chevron-circle-up').click(function(event) {
        event.preventDefault();
        $('html').animate({scrollTop:0}, 100);
        console.log('hi')
    })
  });