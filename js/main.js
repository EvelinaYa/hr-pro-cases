(function () {
  'use strict';

  // ---------- Данные (из макета) ----------
  var cases = [1, 2, 3].map(function () {
    return {
      industry: 'Вузы',
      date: '8 октября 2026',
      title: '«ТИТАН-2» управляет кадровыми процессами и электронным подписанием в экосистеме Directum',
      solutions: 'Решения: КЭДО, Прием на работу, Командировки, Отпуска',
      url: '#'
    };
  });

  var reviews = [1, 2, 3].map(function () {
    return {
      industry: 'вузы',
      logo: 'img/review-logo-nmhc.png',
      logoAlt: 'Национальный медико-хирургический центр имени Н.И. Пирогова',
      text: [
        '«Когда в нашем медицинском учреждении появился Федеральный центр медицины катастроф, мы поставили задачу сформировать по всей России резерв специалистов, которые в любой момент могли бы мобилизоваться и поехать на место ЧС. Соответственно, врачи должны были быть готовы к приему на работу в экстренном порядке. Мы пришли к тому, что каждому сотруднику нужно завести электронный личный кабинет.',
        'Directum HR Pro как раз помогает решить все «бумажные» вопросы до наступления катастрофы. К моменту объявления оперативной готовности к выезду у специалиста уже сформированы необходимые кадровые документы согласно Трудовому кодексу»'
      ],
      name: 'Алёна Зотова',
      position: 'начальник административного управления Центра им. Н.И. Пирогова',
      url: '#'
    };
  });

  var videoReviews = [1, 2, 3].map(function () {
    return {
      industry: 'вузы',
      thumb: 'img/utair.jpg',
      title: '«ТИТАН-2» управляет кадровыми процессами и электронным подписанием в экосистеме Directum',
      url: '#'
    };
  });

  // ---------- Шаблоны карточек ----------
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function caseBody(c) {
    return '<p class="case__date">' + esc(c.date) + '</p>' +
      '<h3 class="case__title">' + esc(c.title) + '</h3>' +
      '<p class="case__solutions">' + esc(c.solutions) + '</p>';
  }

  var caseTemplates = {
    1: function (c) {
      return '<a class="case case--v1" href="' + c.url + '">' +
        '<div class="case__visual">' +
          '<img class="case__photo" src="img/case-photo.jpg" alt="">' +
          '<img class="case__logo" src="img/logo-theater-white.svg" width="353" height="65" alt="Театральный институт имени Бориса Щукина">' +
          '<span class="industry-tag">' + esc(c.industry) + '</span>' +
        '</div>' +
        '<div class="case__body">' + caseBody(c) + '</div>' +
      '</a>';
    },
    2: function (c) {
      return '<a class="case case--v2" href="' + c.url + '">' +
        '<div class="case__visual">' +
          '<img class="case__photo" src="img/case-photo.jpg" alt="">' +
          '<img class="case__logo" src="img/logo-theater-white-2.svg" width="305" height="60" alt="Театральный институт имени Бориса Щукина">' +
          '<span class="industry-tag">' + esc(c.industry) + '</span>' +
        '</div>' +
        '<div class="case__body">' + caseBody(c) + '</div>' +
      '</a>';
    },
    3: function (c) {
      return '<a class="case case--v3" href="' + c.url + '">' +
        '<div class="case__visual">' +
          '<img class="case__photo" src="img/case-photo.jpg" alt="">' +
          '<img class="case__logo" src="img/logo-theater-white-3.svg" width="305" height="60" alt="Театральный институт имени Бориса Щукина">' +
        '</div>' +
        '<span class="industry-tag">' + esc(c.industry) + '</span>' +
        '<div class="case__body">' + caseBody(c) + '</div>' +
      '</a>';
    },
    4: function (c) {
      return '<a class="case case--v4" href="' + c.url + '">' +
        '<div class="case__visual"><div class="case__photo-wrap">' +
          '<img class="case__photo" src="img/case-photo-4.jpg" alt="">' +
        '</div></div>' +
        '<span class="industry-tag">' + esc(c.industry) + '</span>' +
        '<div class="case__body">' +
          '<img class="case__body-logo" src="img/logo-theater-color.svg" width="237" height="43" alt="Театральный институт имени Бориса Щукина">' +
          caseBody(c) +
        '</div>' +
      '</a>';
    }
  };

  function arrowLink(text, url) {
    return '<a class="link-arrow" href="' + url + '">' + text +
      '<img src="img/arrow-right.svg" width="24" height="24" alt=""></a>';
  }

  function reviewText(r) {
    return '<div class="review__text">' + r.text.map(function (p) {
      return '<p>' + esc(p) + '</p>';
    }).join('') + '</div>';
  }

  function reviewAuthor(r) {
    return '<div class="review__author">' +
      '<p class="review__name">' + esc(r.name) + '</p>' +
      '<p class="review__position">' + esc(r.position) + '</p>' +
    '</div>';
  }

  function reviewLogo(r) {
    return '<img class="review__logo" src="' + r.logo + '" width="219" height="70" alt="' + esc(r.logoAlt) + '">';
  }

  var reviewTemplates = {
    1: function (r) {
      return '<article class="review review--v1">' +
        reviewLogo(r) + reviewText(r) + reviewAuthor(r) +
        '<div class="review__footer"><span class="pill">' + esc(r.industry) + '</span>' +
          arrowLink('Перейти к кейсу', r.url) + '</div>' +
      '</article>';
    },
    2: function (r) {
      return '<article class="review review--v2">' +
        '<div class="review__head">' + reviewLogo(r) + '<span class="pill">' + esc(r.industry) + '</span></div>' +
        reviewText(r) + arrowLink('Перейти к кейсу', r.url) + reviewAuthor(r) +
      '</article>';
    },
    video: function (v) {
      return '<article class="review review--video">' +
        '<a class="review__thumb" href="' + v.url + '"><img src="' + v.thumb + '" alt="Истории клиентов: Utair"></a>' +
        '<div class="review__body">' +
          '<h3 class="case__title">' + esc(v.title) + '</h3>' +
          '<div class="review__footer"><span class="pill">' + esc(v.industry) + '</span>' +
            '<a class="link-arrow" href="' + v.url + '">Смотреть отзыв' +
            '<img src="img/ic-play.svg" width="24" height="24" alt=""></a></div>' +
        '</div>' +
      '</article>';
    }
  };

  // ---------- Состояние: вариант кейсов, вариант отзывов ----------
  var params = new URLSearchParams(location.search);
  var state = {
    case: caseTemplates[params.get('case')] ? params.get('case') : '1',
    review: reviewTemplates[params.get('review')] ? params.get('review') : '1'
  };
  // последний выбранный «текстовый» вариант — к нему вернёмся с вкладки «Смотреть»
  var lastReadVariant = state.review === 'video' ? '1' : state.review;

  var casesList = document.getElementById('cases-list');
  var reviewsList = document.getElementById('reviews-list');

  function render() {
    casesList.innerHTML = cases.map(caseTemplates[state.case]).join('');
    var data = state.review === 'video' ? videoReviews : reviews;
    reviewsList.innerHTML = data.map(reviewTemplates[state.review]).join('');

    document.querySelectorAll('[data-variant-group]').forEach(function (group) {
      var value = state[group.getAttribute('data-variant-group')];
      group.querySelectorAll('button').forEach(function (b) {
        var on = b.getAttribute('data-value') === value;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on);
      });
    });

    var mode = state.review === 'video' ? 'watch' : 'read';
    document.querySelectorAll('.mode-tab').forEach(function (t) {
      var on = t.getAttribute('data-mode') === mode;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on);
    });

    var q = new URLSearchParams(location.search);
    q.set('case', state.case);
    q.set('review', state.review);
    history.replaceState(null, '', location.pathname + '?' + q.toString() + location.hash);
  }

  function setReview(value) {
    state.review = value;
    if (value !== 'video') lastReadVariant = value;
    render();
  }

  // Панель вариантов
  document.querySelectorAll('[data-variant-group]').forEach(function (group) {
    var key = group.getAttribute('data-variant-group');
    group.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      if (key === 'review') setReview(btn.getAttribute('data-value'));
      else { state[key] = btn.getAttribute('data-value'); render(); }
    });
  });

  // Сворачивание панели (запоминаем в браузере)
  var toggle = document.querySelector('.variants__toggle');
  var body = document.getElementById('variants-body');
  function setCollapsed(collapsed) {
    body.hidden = collapsed;
    toggle.setAttribute('aria-expanded', !collapsed);
  }
  // на телефоне панель по умолчанию свёрнута, чтобы не закрывать контент
  var saved = null;
  try { saved = localStorage.getItem('variantsCollapsed'); } catch (e) {}
  setCollapsed(saved === null ? window.innerWidth < 768 : saved === '1');
  toggle.addEventListener('click', function () {
    var collapsed = !body.hidden;
    setCollapsed(collapsed);
    try { localStorage.setItem('variantsCollapsed', collapsed ? '1' : '0'); } catch (e) {}
  });

  // Вкладки «Читать / Смотреть отзывы»
  document.querySelectorAll('.mode-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      setReview(tab.getAttribute('data-mode') === 'watch' ? 'video' : lastReadVariant);
    });
  });

  // Теги-фильтры: одиночный выбор
  document.querySelectorAll('[data-tags]').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var tag = e.target.closest('.tag');
      if (!tag) return;
      group.querySelectorAll('.tag').forEach(function (t) { t.classList.toggle('is-active', t === tag); });
    });
  });

  render();
})();
