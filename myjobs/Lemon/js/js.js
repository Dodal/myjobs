$(document).ready(function() {
  $("#carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    center: true,
    dots: true,
    pagination: true,
    startPosition: 2,
    responsive: {
      0: {
        items: 1,
        center: true,
        nav: false,
        navText: [],
        dots: false,
        autoplay: false
      },
      992: {
        items: 1,
      }
    }
  });
});

$(document).ready(function() {
  $("#chi__slider").owlCarousel({
    items: 1,
    loop: true,
    center: true,
    dots: true,
    nav: false,
    pagination: true,
    startPosition: 2,
    responsive: {
      0: {
        items: 1,
        center: true,
        nav: false,
        navText: []
      },
      992: {
        items: 1
      }
    }
  });
});

$("#datepicker").dcalendar();

let tab = function () {
  let tabNav = document.querySelectorAll('.tabs-nav__item'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

  tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
      tabNav.forEach(item => {
          item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
      tabContent.forEach(item => {
          item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
  }

};

tab();