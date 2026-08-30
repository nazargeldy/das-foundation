// Das Foundation — small progressive enhancements. No dependencies.

(function () {
  'use strict';

  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    // Close the menu when a link is followed or Escape is pressed
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Contact form. GitHub Pages cannot receive form posts, so submitting opens
  // the visitor's own mail client with the fields already composed. Replace
  // this with a real endpoint (Formspree, Basin, Tally) when one exists:
  // set the form's action to the endpoint URL and delete this block.
  var contactForm = document.querySelector('[data-mailto-form]');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var value = function (name) {
        var field = contactForm.querySelector('[name="' + name + '"]');
        return field ? field.value.trim() : '';
      };

      var subject = 'Website enquiry - ' + (value('topic') || 'General');
      var body = [
        'Name: ' + value('name'),
        'Email: ' + value('email'),
        'Location: ' + value('location'),
        '',
        value('message')
      ].join('\n');

      window.location.href = contactForm.getAttribute('data-mailto-form')
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);
    });
  }

  // Keep the footer copyright year current
  Array.prototype.forEach.call(
    document.querySelectorAll('[data-year]'),
    function (el) { el.textContent = String(new Date().getFullYear()); }
  );
})();
