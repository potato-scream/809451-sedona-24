var btn = document.querySelector('.btn-search-open');
    var form = document.querySelector('.search-form');

    var firstDay = document.querySelector('[name=first-day-date]');
    var lastDay = document.querySelector('[name=last-day-date]');
    var adults = document.querySelector('[name=adults-number]');
    var kids = document.querySelector('[name=kids-number]');

    var isStorageSupport = true;
    var firstDayStorage = '';
    var lastDayStorage = '';
    var adultsStorage = '';
    var kidsStorage = '';

    try {
      firstDayStorage = localStorage.getItem('firstDay');
      lastDayStorage = localStorage.getItem('lastDay');
      adultsStorage = localStorage.getItem('adults');
      kidsStorage = localStorage.getItem('kids');
    } catch (err) {
      isStorageSupport = false;
    }

    btn.addEventListener('click', function(evt) {   
      evt.preventDefault();
      form.classList.toggle('form-visible');
      form.classList.remove('form-error');
    
      if (firstDayStorage) {
        firstDay.value = firstDayStorage;
      }

      if (lastDayStorage) {
        lastDay.value = lastDayStorage;
      }

      if (adultsStorage) {
        adults.value = adultsStorage;
      }

      if (kidsStorage) {
        kids.value = kidsStorage;
      }

      if (firstDay.value === '') {
        firstDay.focus();
      } else if (lastDay.value === '') {
        lastDay.focus();
      } else if (adults.value === '') {
        adults.focus();
      } else if (kids.value === '') {
        kids.focus();
      } else {
        firstDay.focus();
      }
 
    });

    form.addEventListener('submit', function (evt) {
      if (!firstDay.value || !lastDay.value || !adults.value || !kids.value) {
     evt.preventDefault();
     form.classList.remove('form-error');
    form.offsetWidth = form.offsetWidth;
     form.classList.add('form-error');
      } else {
        if (isStorageSupport) {
        localStorage.setItem('firstDay', firstDay.value);
        localStorage.setItem('lastDay', lastDay.value);
        localStorage.setItem('adults', adults.value);
        localStorage.setItem('kids', kids.value);
        }
      }
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (form.classList.contains('form-visible')) {
          form.classList.remove('form-visible');
          form.classList.remove('form-error');
        }
      }
    });