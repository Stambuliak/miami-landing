'use strict';

const form = document.querySelector('.contact-us__form--form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
