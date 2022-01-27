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

  });