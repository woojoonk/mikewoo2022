/*!
* Start Bootstrap - Scrolling Nav v5.0.5 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 


setTimeout(function(){
    document.getElementsByClassName("firstWord")[0].classList.add("loaded")
},1000);

setTimeout(function(){
    document.getElementsByClassName("secondWord")[0].classList.add("loaded")
},2000);

setTimeout(function(){
    document.getElementsByClassName("photo")[0].classList.add("loaded")
},3000);

setTimeout(function(){
    document.getElementsByClassName("newButton")[0].classList.add("loaded")
},4000);

function readMore(number) {
  var dots = document.getElementById("dots" + number);
  var moreText = document.getElementById("more" + number);
  var btnText = document.getElementById("readMore" + number);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "About"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
