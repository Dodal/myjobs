"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var sandwichToggle = function sandwichToggle() {
    function showSandwichTarget() {
      var targetId = this.getAttribute('data-target-id');
      var targetClassToggle = this.getAttribute('data-target-class-toggle');
      this.classList.toggle('is-active');

      if (this.classList.contains('is-active')) {
        document.querySelector('.top-cart__currency').style.display = 'flex';
      } else if (!this.classList.contains('is-active')) {
        document.querySelector('.top-cart__currency').style.display = 'none';
        document.querySelector('.main-nav.active').style.overflow = '';
      } else {
        document.querySelector('.top-cart__currency').style.display = 'flex';
      }

      if (targetId && targetClassToggle) {
        document.getElementById(targetId).classList.toggle(targetClassToggle);
      }
    }

    var sandwichElements = document.querySelectorAll('.sandwich');
    sandwichElements.forEach(function (item) {
      item.addEventListener('click', showSandwichTarget);
    });
    var mainNavMenu = document.querySelector('.main-nav');
    sandwichElements.forEach(function (item) {
      item.addEventListener('click', function () {
        mainNavMenu.classList.toggle('active');

        if (document.documentElement.clientWidth < 576) {
          if (mainNavMenu.classList.contains('active')) {
            document.querySelector('.cart__wrapper').style.display = 'none';
            document.body.style.overflow = 'hidden';
            document.querySelector('.header-top').style.borderBottom = "".concat(1, "px solid #B0804B");
          } else if (!mainNavMenu.classList.contains('active')) {
            document.querySelector('.cart__wrapper').style.display = 'flex';
            document.body.style.overflow = '';
            document.querySelector('.header-top').style.borderBottom = 'none';
            document.querySelectorAll('.dropdown-base').forEach(function (base) {
              base.classList.remove('active');
              document.querySelector('.sandwich').style.cssText = "\n              order: 0;\n              margin-right: '';\n              ";
              document.querySelector('.chevron_back_icon').style.display = 'none';
              document.querySelector('.top-vector span').innerHTML = '';
              document.querySelector('.top-vector__logo').style.display = 'block';
            });
          }
        }
      });
    });
  };

  sandwichToggle();

  var chevronBack = function chevronBack() {
    var mainBackIcon = document.querySelector('.chevron_back_icon');
    var dropDownBaseMobile = document.querySelectorAll('.dropdown-base');
    mainBackIcon.addEventListener('click', function () {
      if (document.documentElement.clientWidth < 576) {
        dropDownBaseMobile.forEach(function (item) {
          if (item.classList.contains('active')) {
            item.classList.remove('active');
            document.querySelector('.main-nav.active').style.overflow = '';
          }
        });
        mainBackIcon.style.display = 'none';
        document.querySelector('.sandwich.is-active').style.cssText = "\n        order: 0;\n        margin-right: '';\n        ";
        document.querySelector('.top-vector span').innerHTML = '';
        document.querySelector('.top-vector__logo').style.display = 'block';
        document.querySelector('.top-cart__currency').style.display = 'flex';
      }
    });
  };

  chevronBack();
  var feedbackBtn = document.querySelectorAll('.feedback__btn');
  var popupOverlay = document.querySelector('.popup-overlay');
  var closePopup = document.querySelector('.popup-close');
  feedbackBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      popupOverlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
  closePopup.addEventListener('click', function () {
    popupOverlay.style.display = 'none';
    document.body.style.overflow = '';
  });
  var currencyValue = document.querySelectorAll('.top-cart__currency-btn');

  function currencyValueOn(e) {
    e.preventDefault();
    currencyValue.forEach(function (item) {
      item.classList.remove('active_value');
    });
    this.classList.add('active_value');
    var currencyData = this.getAttribute('data-currency');
    console.log(currencyData);
    var request = new XMLHttpRequest();
    request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
    request.setRequestHeader('Content-type', 'application/json: charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function () {
      if (request.readyState === 4 && request.status === 200) {
        var data = JSON.parse(request.response);
        console.log(data);
      }
    });
  }

  currencyValue.forEach(function (item) {
    item.addEventListener('click', currencyValueOn);
  });
  var cartBasketBtn = document.querySelector('.cart__basket');
  var cartInfo = document.querySelector('.cart__info');
  cartBasketBtn.addEventListener('click', function (e) {
    e.preventDefault();
    cartInfo.classList.toggle('active');
  });
  var mainNavLink = document.querySelectorAll('.main-nav__link');
  mainNavLink.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      if (document.documentElement.clientWidth < 576) {
        document.querySelector('.top-vector span').innerHTML = item.textContent;
        document.querySelector('.top-vector__logo').style.display = 'none';
        document.querySelector('.sandwich.is-active').style.cssText = "\n        order: 1;\n        margin-right: 0;\n        ";
        document.querySelector('.chevron_back_icon').style.display = 'block';
        document.querySelector('.top-cart').style.marginRight = 0;
      }
    });
  });

  function addActiveMainNav(e) {
    mainNavLink.forEach(function (item) {
      e.preventDefault();
      item.classList.remove('active');
      var base = item.parentElement.querySelector('.dropdown-base');
      if (base) base.classList.remove('active');
    });
    this.classList.add('active');
    var thisBase = this.parentElement.querySelector('.dropdown-base');
    if (thisBase) thisBase.classList.add('active');

    if (thisBase.classList.contains('active')) {
      document.querySelector('.main-nav.active').style.overflow = 'hidden';
      document.querySelector('.top-cart__currency').style.display = 'none';
    }
  }

  mainNavLink.forEach(function (item) {
    item.addEventListener('click', addActiveMainNav);
  });
  document.addEventListener('click', function (event) {
    var e = document.querySelectorAll('.main-nav__link');

    for (var i = 0; i < e.length; i += 1) {
      if (!e[i].contains(event.target)) e[i].classList.remove('active');
    }
  });
  var dropdownMenu = document.querySelectorAll('.dropdown-menu');
  var dropdownItem = document.querySelectorAll('.dropdown-menu__item');

  function borderNone() {
    dropdownMenu.forEach(function (item) {
      var border = item;
      border.style.borderRight = 'none';
    });
  }

  function addActive(e) {
    dropdownItem.forEach(function (item) {
      e.preventDefault();
      e.stopPropagation();
      item.classList.remove('active');
    });
    this.classList.add('active');
    borderNone();
  }

  dropdownItem.forEach(function (item) {
    item.addEventListener('click', addActive);
  });
  dropdownItem.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var target = e.target;
      var activeTarget = target.id;
      var request = new XMLHttpRequest();
      request.open('GET', 'static/js/data/links.json');
      request.setRequestHeader('Content-type', 'application/json: charset=utf-8');
      request.send();
      request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status === 200) {
          var data = JSON.parse(request.response);
          var leftListLinks = '';
          var leftList = data[activeTarget].slice(0, 13);

          for (var i = 0; i < leftList.length; i += 1) {
            leftListLinks += "\n          <li class=\"sub-menu__item\">\n            <a href=\"".concat(data[activeTarget][i].link, "\">\n              ").concat(data[activeTarget][i].title, "\n            </a>\n          </li>\n          ");
          }

          var rightListLinks = '';

          for (var _i = 0; _i < data[activeTarget].slice(13, 27).length; _i += 1) {
            rightListLinks += "\n          <li class=\"sub-menu__item\">\n            <a href=\"".concat(data[activeTarget].slice(13, 27)[_i].link, "\">\n              ").concat(data[activeTarget].slice(13, 27)[_i].title, "\n            </a>\n          </li>\n          ");
          }

          document.querySelectorAll('.sub-menu__wrapper').forEach(function (list) {
            var listWrapper = list;
            listWrapper.innerHTML = "<ul>".concat(leftListLinks, "</ul>");

            if (data[activeTarget].length >= 13) {
              listWrapper.innerHTML += "<ul>".concat(rightListLinks, "</ul>");
            }
          });
        }
      });
    });
  });
  var searchBtn = document.querySelector('.search-btn');
  var formSearch = document.querySelector('.main-search');
  searchBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    formSearch.classList.toggle('active');
  });
  document.addEventListener('click', function (event) {
    var e = document.querySelector('.main-search');
    if (!e.contains(event.target)) e.classList.remove('active');
  });
  $(document).ready(function () {
    $('.main-carousel__owl').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      startPosition: 2,
      navContainerClass: 'owl-nav container',
      navText: ['<img src="static/images/common/arrow_left.png">', '<img src="static/images/common/arrow_right.png">'],
      responsive: {
        0: {
          items: 1,
          center: true,
          nav: true,
          dots: true,
          autoplay: false
        },
        992: {
          items: 1
        }
      }
    });
  }); // eslint-disable-next-line func-names

  var tab = function tab() {
    var tabNav = document.querySelectorAll('.tabs-nav__item');
    var tabContent = document.querySelectorAll('.tabs-content__item'); // eslint-disable-next-line no-shadow

    function selectTabContent(tab) {
      tabContent.forEach(function (item) {
        var classList = item.classList; // eslint-disable-next-line no-unused-expressions

        classList.contains(tab) ? classList.add('is-active') : classList.remove('is-active');
      });
    }

    function selectTabNav() {
      tabNav.forEach(function (item) {
        item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      var tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }

    tabNav.forEach(function (item) {
      item.addEventListener('click', selectTabNav);
    });
  };

  tab();
  $(document).ready(function () {
    $('.owl-sales').owlCarousel({
      items: 3,
      loop: true,
      margin: 140,
      lazyLoad: true,
      mouseDrag: true,
      touchDrag: true,
      responsive: {
        0: {
          items: 1,
          margin: 0,
          center: true,
          nav: false,
          dots: true,
          autoplay: false
        },
        576: {
          items: 2,
          margin: 20,
          center: false
        },
        992: {
          items: 3
        }
      }
    });
  });
  $(document).ready(function () {
    $('.owl-action').owlCarousel({
      items: 3,
      loop: true,
      margin: 140,
      lazyLoad: true,
      mouseDrag: true,
      touchDrag: true,
      responsive: {
        0: {
          items: 1,
          margin: 0,
          center: true,
          nav: false,
          dots: true,
          autoplay: false
        },
        576: {
          items: 2,
          margin: 20,
          center: false
        },
        992: {
          items: 3
        }
      }
    });
  });
  $(document).ready(function () {
    $('.news-slider').owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      nav: true,
      lazyLoad: true,
      startPosition: 0,
      navContainerClass: 'owl-nav',
      navText: ['<img src="static/images/common/arrow_left.png">', '<img src="static/images/common/arrow_right.png">'],
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
          items: 1
        }
      }
    });
  });
  $(window).on('load', function () {
    $('.history-wrapper__scrollbar').mCustomScrollbar({
      setTop: 0,
      theme: 'my-theme'
    });
  });
  $(document).ready(function () {
    $('.brands__slider').owlCarousel({
      items: 4,
      loop: true,
      dots: false,
      nav: true,
      lazyLoad: true,
      navContainerClass: 'owl-nav',
      navText: ['<img src="static/images/common/arrow_left_gold.png">', '<img src="static/images/common/arrow_right_gold.png">'],
      startPosition: 0,
      responsive: {
        0: {
          items: 3,
          center: true,
          nav: false,
          margin: 20,
          navText: [],
          dots: false,
          autoplay: false
        },
        992: {
          items: 4
        }
      }
    });
  });
});