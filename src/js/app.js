$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  const menuToggle= document.querySelector("#menu-toggle");
  const mobileNavContainer=document.querySelector('#mobile-nav');
  menuToggle.onclick=function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active')
  };
});
