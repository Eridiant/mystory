// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')


document.addEventListener('DOMContentLoaded', () => {

  if (document.querySelector('#gallery')) {
    
    document.querySelector('#gallery').addEventListener('click', (e) => {
      // console.log();
      location.href = e.target.closest('.main-gallery-item').getAttribute('data-url');
    })
  }


  var photost = new Swiper('.photost-swiper', {
    navigation: {
      nextEl: '.photost-next',
      prevEl: '.photost-prev',
    },
  });

  var loft0 = new Swiper('.loft-swiper0', {
    navigation: {
      nextEl: '.loft-next',
      prevEl: '.loft-prev',
    },
  });


  var loft1 = new Swiper('.loft-swiper1', {
    navigation: {
      nextEl: '.loft-next1',
      prevEl: '.loft-prev1',
    },
  });

  var loft2 = new Swiper('.loft-swiper2', {
    navigation: {
      nextEl: '.loft-next2',
      prevEl: '.loft-prev2',
    },
  });

  var loft3 = new Swiper('.loft-swiper3', {
    navigation: {
      nextEl: '.loft-next3',
      prevEl: '.loft-prev3',
    },
  });
  
  var gallery = new Swiper('.gallery-swiper', {
    slidesPerView: 1.3,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    }
  });

  var about = new Swiper('.about-swiper', {
    slidesPerView: 1.3,
    spaceBetween: 16,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    }
  });

  var list = new Swiper('.about-list', {
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
      640: {
        slidesPerView: 1.6,
        spaceBetween: 20,
      },
      850: {
        slidesPerView: 2,
      },
      1040: {
        slidesPerView: 3,
      },
    }
  });

  // aside-menu aside-menu-active
  // aside-mask aside-mask-active

  document.querySelector('.aside-toggle').addEventListener('click', () => {
    console.log('aside-toggle');
    document.querySelector('.aside-menu').classList.add('aside-menu-active');
    document.querySelector('.aside-mask').classList.add('aside-mask-active');

    document.querySelector('.aside-mask').addEventListener('click', () => {
      hideMenu();
    })
    document.querySelector('.aside-mob').addEventListener('click', () => {
      hideMenu();
    })
  })

  function hideMenu() {
    document.querySelector('.aside-menu').classList.remove('aside-menu-active');
    document.querySelector('.aside-mask').classList.remove('aside-mask-active');
  }

  const labels = document.querySelectorAll(".accordion-item__label");
  const tabs = document.querySelectorAll(".accordion-tab");

  function toggleShow() {
    const target = this;
    const item = target.classList.contains("accordion-tab")
      ? target
      : target.parentElement;
    const group = item.dataset.actabGroup;
    const id = item.dataset.actabId;

    tabs.forEach(function(tab) {
      if (tab.dataset.actabGroup === group) {
        if (tab.dataset.actabId === id) {
          tab.classList.add("accordion-active");
        } else {
          tab.classList.remove("accordion-active");
        }
      }
    });

    labels.forEach(function(label) {
      const tabItem = label.parentElement;

      if (tabItem.dataset.actabGroup === group) {
        if (tabItem.dataset.actabId === id) {
          tabItem.classList.add("accordion-active");
        } else {
          tabItem.classList.remove("accordion-active");
        }
      }
    });
  }

  labels.forEach(function(label) {
    label.addEventListener("click", toggleShow);
  });

  tabs.forEach(function(tab) {
    tab.addEventListener("click", toggleShow);
  });

  const lbs = document.querySelectorAll(".accord-item__label");

  lbs.forEach(function(lb) {
    lb.addEventListener("click", tglShow);
  });

  function tglShow() {
    const target = this;
    const item = target.parentElement;
    const group = item.dataset.acvtabGroup;
    const id = item.dataset.acvtabId;

    lbs.forEach(function(label) {
      const tabItem = label.parentElement;

      if (tabItem.dataset.acvtabGroup === group) {
        if (tabItem.dataset.acvtabId === id && !(tabItem.classList.contains("accord-active"))) {
          tabItem.classList.add("accord-active");
        } else {
          tabItem.classList.remove("accord-active");
        }
      }
    });
  }


})
