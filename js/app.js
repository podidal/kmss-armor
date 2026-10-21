/**
 * KMSS+ (КОМФОРТ-МОНТАЖ СПЕЦСЕРВІС ПЛЮС)
 * Архітектура та логіка у стилі SafeHold (Еталон)
 * Динамічний калькулятор цін за обсяг, вибір товщини, оформлення заявки
 */

(function () {
  'use strict';

  // Цінові пороги: до 5 м², 5-9 м², 10-19 м², від 20 м²
  var CFG = window.SH || {
    tiers: [0, 5, 10, 20],
    prices: {
      100: [449, 419, 389, 369],
      200: [599, 559, 519, 489],
      300: [749, 699, 649, 599]
    }
  };

  function tierOf(area) {
    var t = 0;
    CFG.tiers.forEach(function (from, i) {
      if (area >= from) { t = i; }
    });
    return t;
  }

  function priceOf(thick, area) {
    var list = CFG.prices[thick] || CFG.prices[200];
    return list[tierOf(area)];
  }

  var fmt = function (n) {
    return Math.round(n).toLocaleString('uk-UA');
  };

  // Аудіо зворотний зв'язок (Web Audio API)
  var audioCtx = null;
  function playSound(type) {
    try {
      if (!audioCtx) {
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      if (!audioCtx) return;

      var now = audioCtx.currentTime;
      if (type === 'click') {
        var osc = audioCtx.createOscillator();
        var gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.03);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.03);
      } else if (type === 'success') {
        [523.25, 659.25, 783.99].forEach(function (f, i) {
          var osc = audioCtx.createOscillator();
          var gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now + i * 0.07);
          gain.gain.setValueAtTime(0.05, now + i * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.22);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + i * 0.07);
          osc.stop(now + i * 0.07 + 0.22);
        });
      }
    } catch (e) {}
  }

  // Елементи форми
  var form = document.getElementById('lead-form');
  var done = document.querySelector('.form__done');
  var errBox = form ? form.querySelector('.form__error') : null;
  var thickInput = form ? form.querySelector('[name=thickness]') : null;
  var areaInput = form ? form.querySelector('[name=area]') : null;

  // Вибір товщини у формі
  function setThick(id) {
    playSound('click');
    if (thickInput) thickInput.value = id;
    if (form) {
      form.querySelectorAll('[data-thick]').forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-thick') === id ? 'true' : 'false');
      });
    }
  }

  if (form) {
    form.querySelectorAll('[data-thick]').forEach(function (b) {
      b.addEventListener('click', function () {
        setThick(b.getAttribute('data-thick'));
      });
    });
  }

  document.querySelectorAll('[data-pick]').forEach(function (a) {
    a.addEventListener('click', function () {
      setThick(a.getAttribute('data-pick'));
    });
  });

  // Калькулятор площі (слайдер)
  var range = document.getElementById('calc-area');
  var out = document.getElementById('calc-out');
  var tierNote = document.querySelector('[data-tier-note]');

  function calc() {
    if (!range || !out) return;
    var a = Number(range.value) || 1;
    out.textContent = a + ' м²';
    range.setAttribute('aria-valuetext', a + ' квадратних метрів');
    if (areaInput) areaInput.value = a;

    document.querySelectorAll('[data-total]').forEach(function (el) {
      var k = el.getAttribute('data-total');
      var per = priceOf(k, a);
      el.textContent = fmt(per * a) + ' ₴ · ' + fmt(per) + ' ₴/м²';
    });

    if (tierNote) {
      var t = tierOf(a);
      var next = CFG.tiers[t + 1];
      if (next !== undefined) {
        var now = priceOf('200', a), then = priceOf('200', next);
        tierNote.textContent = 'Ще ' + (next - a) + ' м² до оптової ціни ' + fmt(then) + ' ₴/м² (200 мкм), це −' + fmt(now - then) + ' ₴ економії на кожному м².';
      } else {
        tierNote.textContent = 'У вас найнижча оптова ціна за м² від заводу.';
      }
    }
  }

  if (range) {
    range.addEventListener('input', function () {
      calc();
    });
    calc();
  }

  // Липка нижня панель на мобільних пристроях (ховаємо, коли видно форму або перший екран)
  var mbar = document.querySelector('.mbar');
  if (mbar && 'IntersectionObserver' in window) {
    var seen = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { seen[en.target.id] = en.isIntersecting; });
      mbar.classList.toggle('is-hidden', !!(seen.zayavka || seen['hero-title']));
    });
    ['zayavka', 'hero-title'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { io.observe(el); }
    });
  }

  // Обробка відправки форми
  function showError(msg) {
    if (errBox) {
      errBox.textContent = msg;
      errBox.hidden = false;
    }
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (errBox) errBox.hidden = true;

      var phone = form.elements.phone ? form.elements.phone.value.replace(/\D/g, '') : '';
      if (phone.length < 10) {
        showError('Вкажіть, будь ласка, контактний номер телефону (щонайменше 10 цифр).');
        if (form.elements.phone) form.elements.phone.focus();
        return;
      }

      var btn = form.querySelector('button[type=submit]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Надсилаємо розрахунок…';
      }

      playSound('success');

      // Симуляція успішного збереження в CRM/чат менеджера
      setTimeout(function () {
        var name = form.elements.name ? form.elements.name.value.trim() : '';
        var t = thickInput && thickInput.value === 'auto' ? 'товщину підберемо самі' : 'плівка ' + (thickInput ? thickInput.value : '200') + ' мкм';
        var thanksEl = done ? done.querySelector('.form__thanks') : null;
        if (thanksEl) {
          thanksEl.textContent = (name ? 'Дякуємо, ' + name + '! ' : 'Дякуємо! ') +
            'Ми зв’яжемося з вами за номером ' + form.elements.phone.value.trim() + ' і назвемо точну вартість комплекту (' + t + ').';
        }
        form.hidden = true;
        if (done) done.hidden = false;

        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Отримати розрахунок';
        }
      }, 400);
    });

    var resetBtn = done ? done.querySelector('[data-reset]') : null;
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        playSound('click');
        form.reset();
        setThick('200');
        calc();
        if (done) done.hidden = true;
        form.hidden = false;
      });
    }
  }

  // Додатковий 2D розкрій рулону (якщо користувач розгортає детальний модуль)
  window.toggleRollModule = function () {
    playSound('click');
    var el = document.getElementById('custom-roll-module');
    if (!el) return;
    el.hidden = !el.hidden;
    if (!el.hidden) {
      drawRoll();
    }
  };

  function drawRoll() {
    var canvas = document.getElementById('roll-cutting-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var w = canvas.clientWidth || 360;
    var h = 160;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    ctx.fillStyle = '#0E1628';
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#1E2A44';
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, w, h);

    // Зразки нарізаних полотен
    var panes = [
      { x: 10, y: 10, w: 90, h: 140, label: '130×60 см' },
      { x: 105, y: 10, w: 90, h: 140, label: '130×60 см' },
      { x: 200, y: 10, w: 120, h: 140, label: '140×75 см' }
    ];

    panes.forEach(function (p) {
      ctx.fillStyle = 'rgba(52, 216, 138, 0.12)';
      ctx.fillRect(p.x, p.y, p.w, p.h);

      ctx.strokeStyle = '#34D88A';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(p.x, p.y, p.w, p.h);

      ctx.fillStyle = '#EAF0FA';
      ctx.font = '600 11px Onest, sans-serif';
      ctx.fillText(p.label, p.x + 8, p.y + 24);
    });
  }

})();
