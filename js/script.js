(function ($) {
  "use strict";

  // current time
  var currentTime = document.getElementById("currtime");

  //current date
  var d = new Date, month = new Array; month[0] = "01", month[1] = "02", month[2] = "03", month[3] = "04", month[4] = "05", month[5] = "06", month[6] = "07", month[7] = "08", month[8] = "09", month[9] = "10", month[10] = "11", month[11] = "12"; var month_name = month[d.getMonth()], day_of_month = d.getDate(), current_year = d.getFullYear(), dayOfMonthElement = document.getElementById("current_day"), currentMonthElement = document.getElementById("current_month"), currentYearElement = document.getElementById("current_year"); !function () { currentMonthElement.innerHTML = month_name, dayOfMonthElement.innerHTML = day_of_month, currentYearElement.innerHTML = current_year }();

  //calender


  // explain: http://thenewcode.com/942/Create-A-Simple-JavaScript-Clock
  function zeropadder(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

  function updateTime() {
    var timeNow = new Date(),
      hh = timeNow.getHours(),
      mm = timeNow.getMinutes(),
      ss = timeNow.getSeconds(),
      formatAMPM = (hh >= 12 ? 'PM' : 'AM');
    hh = hh % 12 || 12;

    currentTime.innerHTML = hh + "<span>:</span>" + zeropadder(mm) + "<span>:</span>" + zeropadder(ss) + " " + formatAMPM;
    setTimeout(updateTime, 1000);
  }
  updateTime();

  // main menu
  (() => {

    const openNavMenu = document.querySelector(".open-nav-menu"),
      closeNavMenu = document.querySelector(".close-nav-menu"),
      navMenu = document.querySelector(".nav-menu"),
      menuOverlay = document.querySelector(".menu-overlay"),
      mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
      if (event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize) {
        // prevent default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if (menuItemHasChildren.classList.contains("active")) {
          collapseSubMenu();
        }
        else {
          // collapse existing expanded menuItemHasChildren
          if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    });
    function collapseSubMenu() {
      navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
      navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix() {
      // if navMenu is open ,close it
      if (navMenu.classList.contains("open")) {
        toggleNav();
      }
      // if menuItemHasChildren is expanded , collapse it
      if (navMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
      }
    }

    window.addEventListener("resize", function () {
      if (this.innerWidth > mediaSize) {
        resizeFix();
      }
    });

  })();

  // header sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });
  

  // slider active
  $('.slider-active').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 1000,
    // autoplayTimeout: 2000,
    smartSpeed: 500,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: true,
    items: 1
   })

  //counterup
$(document).ready(function(){
  console.log("Document ready!");
  $(".counter").counterUp();
});

  // school video
  $('.video-popup').magnificPopup({
    type: 'iframe'
    // other options
  });

  // photo zoom/lightbox
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

  // scroll up
  $(function () {
    $.scrollUp({
      scrollName: "scrollUp",
      topDistance: "300",
      topSpeed: 300,
      animation: "fade",
      animationInSpeed: 200,
      animationOutSpeed: 200,
      scrollText: '<i class="fa fa-arrow-up"></i>',
      activeOverlay: false,
    });
  });

})(jQuery);