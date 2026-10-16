/**
 * KMSS+ ENTERPRISE MANUFACTURING PLATFORM
 * Kievtonservice & Steko Hybrid Architecture
 * (c) 2026 «Комфорт-Монтаж Спецсервіс Плюс»
 * Window Film Cutting Engine, Live Calculator, Logistics & Lead Generation
 */

// --- 1. КАТАЛОГ СЕРТИФІКОВАНИХ ПЛІВОК KMSS+ ЗА ДСТУ EN 356 ---
const PRODUCT_CATEGORIES = {
  'serednij-plyus': {
    title: 'Хіти Захисту (300 мкм Р1А)',
    items: [
      {
        id: 'armor_300',
        title: 'KMSS SafeArmor 300 Pro',
        brandLabel: 'Хіт продажу • ДСТУ EN 356',
        categoryTag: 'Захист від вибухів та уламків',
        dstuClass: 'Клас К4 / Р1А (12 mil)',
        desc: 'Сертифікований протиударний бронезахист для квартир та приватних будинків. Витримує вибухову хвилю, багаторазові удари кувалдою, ломом та падіння сталевої кулі 4.11 кг.',
        thickness: '300 мкм',
        pricePerM2: 750, // Special direct DIY cut price
        isPopular: true,
        ratings: { heat: 4, impact: 10 },
        specs: { vlt: '91%', uv: '99%', warranty: '10 років' }
      },
      {
        id: 'armor_200',
        title: 'KMSS SafeArmor 200',
        brandLabel: 'Посилений бар\'єр',
        categoryTag: 'Захист від ударної хвилі',
        dstuClass: 'Клас К2 (7 mil)',
        desc: 'Посилена протиударна плівка для вікон приватних будинків, дач та офісів. Ефективно гасить ударну хвилю від дронів, утримує каміння та важкі предмети.',
        thickness: '200 мкм',
        pricePerM2: 590,
        ratings: { heat: 4, impact: 8 },
        specs: { vlt: '93%', uv: '99%', warranty: '7 років' }
      }
    ]
  },
  'ekonomichni': {
    title: 'Базові (112 мкм К1)',
    items: [
      {
        id: 'armor_112',
        title: 'KMSS SafeArmor 112',
        brandLabel: 'Базова Безпека',
        categoryTag: 'Протиосколковий захист',
        dstuClass: 'Клас К1 (4 mil)',
        desc: 'Протиосколкова плівка для шкіл, дитсадків та житлових поверхів від 5-го і вище. Утримує скло на клею при розбитті, захищаючи людей від різаних ран.',
        thickness: '112 мкм',
        pricePerM2: 450,
        ratings: { heat: 3, impact: 6 },
        specs: { vlt: '95%', uv: '99%', warranty: '5 років' }
      }
    ]
  },
  'premium': {
    title: 'Максимальна Броня (400 мкм Р2А)',
    items: [
      {
        id: 'armor_400',
        title: 'KMSS SafeArmor 400 Extreme',
        brandLabel: 'Банківський стандарт НБУ',
        categoryTag: 'Антивандальна броня',
        dstuClass: 'Клас Р2А (16 mil)',
        desc: 'Надпотужний бронезахист для вітрин магазинів, банків, ломбардів та перших поверхів. Витримує таран, сокиру та тривале проникнення.',
        thickness: '400 мкм',
        pricePerM2: 1150,
        ratings: { heat: 4, impact: 10 },
        specs: { vlt: '89%', uv: '99%', warranty: '10 років' }
      }
    ]
  },
  'solar-thermal': {
    title: 'Сонцезахисні та Атермальні',
    items: [
      {
        id: 'solar_silver20',
        title: 'KMSS SolarSilver 20%',
        brandLabel: 'Дзеркальний захист',
        categoryTag: 'Сонцезахист 82%',
        dstuClass: 'Дзеркальна Silver',
        desc: 'Одностороння дзеркальність вдень (повна приватність). Відбиває до 82% сонячного тепла та 99% ультрафіолету.',
        thickness: '50 мкм',
        pricePerM2: 550,
        ratings: { heat: 10, impact: 3 },
        specs: { vlt: '20%', uv: '99%', warranty: '5 років' }
      },
      {
        id: 'athermal_nano75',
        title: 'KMSS NanoCeramic 75%',
        brandLabel: 'Атермальна Нанокераміка',
        categoryTag: 'Прозора прохолода',
        dstuClass: 'Nano-Ceramic USA',
        desc: 'Кришталево прозора на вікні. Не затемнює приміщення, блокуючи 90% інфрачервоного сонячного нагріву.',
        thickness: '55 мкм',
        pricePerM2: 1100,
        ratings: { heat: 9, impact: 4 },
        specs: { vlt: '75%', uv: '99%', warranty: '10 років' }
      },
      {
        id: 'matte_white',
        title: 'KMSS PrivacyFrost White',
        brandLabel: 'Архітектурна Матова',
        categoryTag: '100% Приватність',
        dstuClass: 'Матова плівка',
        desc: 'Ефект білого піскоструйного скла для перегородок, ванних кімнат та санвузлів.',
        thickness: '55 мкм',
        pricePerM2: 450,
        ratings: { heat: 5, impact: 4 },
        specs: { vlt: '65%', uv: '99%', warranty: '7 років' }
      }
    ]
  }
};

const TOOLKITS = {
  none: {
    id: 'none',
    title: 'Тільки плівка в тубусі',
    price: 0,
    desc: 'Готова нарізана плівка зі стікерами у посиленому захисному картонному тубусі.'
  },
  basic: {
    id: 'basic',
    title: 'Комплект «Старт»',
    price: 250,
    desc: 'Фетровий ракель + лезо Olfa + концентрат монтажного розчину на 1 літр води.'
  },
  pro: {
    id: 'pro',
    title: 'Комплект «Профі Blue Max»',
    price: 450,
    badge: 'РЕКОМЕНДОВАНО',
    desc: 'Оригінальний ракель Blue Max (США) з металевою ручкою + ніж Olfa + концентрат Film-On + мікрофібра.'
  }
};

const NP_CITIES = [
  { name: 'Дніпро', warehouses: ['Вантажне відділення №1 (вул. Княгині Ольги, 19б)', 'Відділення №5 (просп. Дмитра Яворницького, 41)', 'Відділення №12 (вул. Робоча, 154)', 'Відділення №27 (просп. Героїв, 3)'] },
  { name: 'Київ', warehouses: ['Вантажне відділення №1 (вул. Пирогівський шлях, 135)', 'Відділення №2 (вул. Берестейська, 20)', 'Відділення №15 (просп. Перемоги, 67)', 'Поштомат №4412'] },
  { name: 'Львів', warehouses: ['Вантажне відділення №1 (вул. Городоцька, 369)', 'Відділення №4 (вул. Зелена, 147)', 'Відділення №10 (вул. Франка, 61)'] },
  { name: 'Одеса', warehouses: ['Вантажне відділення №1 (вул. Дальницька, 23/4)', 'Відділення №3 (вул. Преображенська, 45)', 'Відділення №21 (Люстдорфська дор., 140/1)'] },
  { name: 'Харків', warehouses: ['Вантажне відділення №1 (просп. Гагаріна, 127а)', 'Відділення №8 (вул. Пушкінська, 54)'] },
  { name: 'Запоріжжя', warehouses: ['Вантажне відділення №1 (просп. Соборний, 2)', 'Відділення №6 (вул. Перемоги, 63)'] },
  { name: 'Вінниця', warehouses: ['Вантажне відділення №1 (вул. Сергія Зулінського, 54)', 'Відділення №2 (вул. Хмельницьке шосе, 82)'] },
  { name: 'Полтава', warehouses: ['Вантажне відділення №1 (вул. Європейська, 146)', 'Відділення №4 (вул. Котляревського, 38)'] },
  { name: 'Кривий Ріг', warehouses: ['Вантажне відділення №1 (вул. Купріна, 123б)', 'Відділення №2 (вул. Лермонтова, 19)'] }
];

// --- 2. СТАН ДОДАТКУ ---
let appState = {
  activeCategory: 'serednij-plyus',
  heroOrderType: 'diy', // 'diy' or 'pro'
  heroM2: 10,
  windows: [
    { id: 1, name: 'Кухня (Стулка 1)', width: 1300, height: 600, filmKey: 'armor_300' },
    { id: 2, name: 'Кухня (Стулка 2)', width: 1300, height: 600, filmKey: 'armor_300' },
    { id: 3, name: 'Вітальня / Спальня', width: 1400, height: 750, filmKey: 'armor_300' }
  ],
  selectedToolkit: 'pro',
  rollWidthMm: 1524,
  marginMm: 15,
  tubeFee: 120,
  soundEnabled: true,
  audioCtx: null
};

// --- 3. АУДІОВІДГУК (WEB AUDIO API) ---
function initAudio() {
  if (!appState.audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) appState.audioCtx = new AudioContext();
  }
  if (appState.audioCtx && appState.audioCtx.state === 'suspended') {
    appState.audioCtx.resume();
  }
}

function playSound(type) {
  if (!appState.soundEnabled) return;
  initAudio();
  if (!appState.audioCtx) return;

  const ctx = appState.audioCtx;
  const now = ctx.currentTime;

  if (type === 'click') {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.04);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  } else if (type === 'success') {
    [523.25, 659.25, 783.99].forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + i * 0.07);
      gain.gain.setValueAtTime(0.06, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.25);
    });
  }
}

// --- 4. HERO FAST LEAD CALCULATOR (KIEVTONSERVICE HYBRID) ---
function setHeroOrderType(type) {
  playSound('click');
  appState.heroOrderType = type;
  
  const diyBtn = document.getElementById('hero-type-diy');
  const proBtn = document.getElementById('hero-type-pro');

  if (type === 'diy') {
    diyBtn.className = 'p-2 rounded-xl border-2 border-orange-600 bg-orange-50 font-bold text-orange-700 text-[11px] text-center transition-all';
    proBtn.className = 'p-2 rounded-xl border border-slate-300 bg-white font-bold text-slate-700 text-[11px] text-center transition-all hover:border-slate-400';
  } else {
    proBtn.className = 'p-2 rounded-xl border-2 border-blue-600 bg-blue-50 font-bold text-blue-700 text-[11px] text-center transition-all';
    diyBtn.className = 'p-2 rounded-xl border border-slate-300 bg-white font-bold text-slate-700 text-[11px] text-center transition-all hover:border-slate-400';
  }

  updateHeroCalcLive();
}

function setHeroM2(m2) {
  playSound('click');
  appState.heroM2 = m2;
  const input = document.getElementById('hero-lead-m2');
  if (input) input.value = m2;

  document.querySelectorAll('.hero-m2-btn').forEach(btn => {
    if (parseInt(btn.dataset.m2) === m2) {
      btn.className = 'hero-m2-btn p-1.5 rounded-lg border-2 border-blue-600 bg-blue-50 text-blue-800 text-center font-bold';
    } else {
      btn.className = 'hero-m2-btn p-1.5 rounded-lg border border-slate-300 text-slate-700 text-center font-bold hover:bg-slate-100 transition-colors';
    }
  });

  updateHeroCalcLive();
}

function updateHeroCalcLive() {
  const m2Input = document.getElementById('hero-lead-m2');
  let m2 = parseFloat(m2Input ? m2Input.value : 10) || 10;
  if (m2 < 1) m2 = 1;

  const classSelect = document.getElementById('hero-lead-class');
  const selectedClass = classSelect ? classSelect.value : '300';

  // Base price per m2
  let basePrice = 750; // 300 mkm
  if (selectedClass === '112') basePrice = 450;
  else if (selectedClass === '200') basePrice = 590;
  else if (selectedClass === '400') basePrice = 1150;
  else if (selectedClass === 'solar') basePrice = 550;

  // If turnkey installation, add labor cost
  if (appState.heroOrderType === 'pro') {
    basePrice += 550; // installation per m2
  }

  const rawTotal = Math.round(m2 * basePrice);
  const discountAmount = Math.round(rawTotal * 0.10);
  const discountedTotal = rawTotal - discountAmount;

  const displayEl = document.getElementById('hero-live-estimate');
  if (displayEl) {
    displayEl.innerHTML = `
      ${discountedTotal.toLocaleString('uk-UA')} ₴ 
      <span class="text-xs text-red-600 font-normal line-through ml-1">${rawTotal.toLocaleString('uk-UA')} ₴</span>
    `;
  }
}

function submitHeroLeadForm(e) {
  e.preventDefault();
  playSound('success');

  const phone = document.getElementById('hero-lead-phone').value;
  const m2 = document.getElementById('hero-lead-m2').value;
  const filmClass = document.getElementById('hero-lead-class').value;
  const orderType = appState.heroOrderType === 'diy' ? 'Набір Поклей Сам' : 'Монтаж Під Ключ';

  // Simulation of CRM submission
  console.log('Lead Captured:', { phone, m2, filmClass, orderType });

  // Open confirmation
  const modal = document.getElementById('lead-modal');
  const title = document.getElementById('lead-modal-title');
  if (title) title.innerText = 'Дякуємо! Заявку прийнято';
  
  const form = modal.querySelector('form');
  if (form) {
    form.innerHTML = `
      <div class="text-center py-6 space-y-4">
        <div class="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 text-3xl flex items-center justify-center mx-auto font-bold">
          ✓
        </div>
        <h4 class="font-heading font-extrabold text-lg text-slate-900 uppercase">
          Знижка 10% успішно зафіксована!
        </h4>
        <p class="text-xs text-slate-600 leading-relaxed">
          Ми зв'яжемося з вами за номером <strong>${phone}</strong> протягом 5 хвилин для надання детального кошторису та відправки відеоінструкції.
        </p>
        <button type="button" onclick="closeLeadModal()" class="btn-steko btn-steko-dark text-xs uppercase px-6 py-2.5">
          Зрозуміло, чекаю дзвінка
        </button>
      </div>
    `;
  }

  modal.classList.remove('hidden');
}

// --- 5. GENERIC LEAD MODAL ---
function openLeadModal(sourceContext = 'Запит консультації') {
  playSound('click');
  const modal = document.getElementById('lead-modal');
  const title = document.getElementById('lead-modal-title');
  if (title) title.innerText = 'Попередній розрахунок вартості зі знижкою 10%';
  modal.classList.remove('hidden');
}

function closeLeadModal() {
  playSound('click');
  document.getElementById('lead-modal').classList.add('hidden');
}

function submitGenericLead(e) {
  e.preventDefault();
  playSound('success');

  const name = document.getElementById('generic-lead-name').value;
  const phone = document.getElementById('generic-lead-phone').value;
  const desc = document.getElementById('generic-lead-desc').value;

  console.log('Generic Lead:', { name, phone, desc });

  const modal = document.getElementById('lead-modal');
  const form = modal.querySelector('form');
  if (form) {
    form.innerHTML = `
      <div class="text-center py-6 space-y-4">
        <div class="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 text-3xl flex items-center justify-center mx-auto font-bold">
          ✓
        </div>
        <h4 class="font-heading font-extrabold text-lg text-slate-900 uppercase">
          Заявку прийнято!
        </h4>
        <p class="text-xs text-slate-600 leading-relaxed">
          Дякуємо, ${name || 'шановний клієнте'}! Наш спеціаліст зателефонує вам на номер <strong>${phone}</strong> найближчим часом.
        </p>
        <button type="button" onclick="closeLeadModal()" class="btn-steko btn-steko-dark text-xs uppercase px-6 py-2.5">
          Закрити
        </button>
      </div>
    `;
  }
}

// --- 6. CRASH TEST VIDEO MODAL & SIMULATION ---
function openVideoModal(testType) {
  playSound('click');
  const modal = document.getElementById('video-modal');
  const title = document.getElementById('video-modal-title');
  const desc = document.getElementById('video-modal-desc');

  if (testType === 'hammer') {
    title.innerText = 'Краш-тест молотком та ломом (KMSS 300 мкм)';
    desc.innerText = '20 сильних прямих ударів: скло кришиться, але монолітно утримується плівкою.';
  } else if (testType === 'ball') {
    title.innerText = 'Випробування сталевою кулею 4.11 кг за ДСТУ EN 356 (Клас Р1А)';
    desc.innerText = 'Падіння з висоти 1.5 метра: жодного наскрізного отвору або розльоту уламків.';
  } else if (testType === 'diy') {
    title.innerText = 'Відеоурок: як поклеїти вікно за 15 хвилин з вигонкою Blue Max';
    desc.innerText = 'Покроковий майстер-клас для набору «Поклей Сам».';
  } else if (testType === 'brick') {
    title.innerText = 'Антивандальний тест силікатною цеглою';
    desc.innerText = 'Удар цеглиною відпружинює, приміщення залишається у повній безпеці.';
  }

  modal.classList.remove('hidden');
  initVideoCanvasSimulation(testType);
}

function closeVideoModal() {
  playSound('click');
  document.getElementById('video-modal').classList.add('hidden');
}

function initVideoCanvasSimulation(testType) {
  const canvas = document.getElementById('video-simulation-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 340;

  // Background window
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Frame
  ctx.strokeStyle = '#64748b';
  ctx.lineWidth = 14;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  // Glass reflection
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, 'rgba(56, 189, 248, 0.15)');
  grad.addColorStop(1, 'rgba(30, 58, 138, 0.4)');
  ctx.fillStyle = grad;
  ctx.fillRect(27, 27, canvas.width - 54, canvas.height - 54);

  // Initial prompt
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px Montserrat, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Склопакет з бронеплівкою KMSS+ 300 мкм', canvas.width / 2, 70);
  ctx.font = '12px JetBrains Mono, monospace';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Готове до симуляції удару', canvas.width / 2, 95);
}

function runVideoSimulation() {
  playSound('click');
  const overlay = document.getElementById('video-play-overlay');
  if (overlay) overlay.style.display = 'none';

  const canvas = document.getElementById('video-simulation-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let frame = 0;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  function animateImpact() {
    frame++;

    if (frame < 15) {
      // Impact flash
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.fillRect(27, 27, canvas.width - 54, canvas.height - 54);
    } else if (frame === 15) {
      // Crack generation
      playSound('click');
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;

      for (let i = 0; i < 35; i++) {
        const angle = (Math.PI * 2 * i) / 35 + (Math.random() - 0.5) * 0.2;
        const length = 40 + Math.random() * 160;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        const endX = centerX + Math.cos(angle) * length;
        const endY = centerY + Math.sin(angle) * length;
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // sub-cracks
        if (Math.random() > 0.4) {
          ctx.beginPath();
          ctx.moveTo(endX, endY);
          ctx.lineTo(endX + (Math.random() - 0.5) * 40, endY + (Math.random() - 0.5) * 40);
          ctx.stroke();
        }
      }

      // Rings
      for (let r = 25; r < 140; r += 25) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Overlay metrics
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fillRect(centerX - 160, centerY + 80, 320, 50);
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.strokeRect(centerX - 160, centerY + 80, 320, 50);

      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 14px Montserrat, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('✓ ПЛІВКА ВТРИМАЛА 100% СКЛА', centerX, centerY + 102);

      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('0 УЛАМКІВ У ПРИМІЩЕННІ • ДСТУ EN 356', centerX, centerY + 120);

      playSound('success');
      return;
    }

    requestAnimationFrame(animateImpact);
  }

  animateImpact();
}

// --- 7. PRODUCT SHOWCASE (STEKO STYLE TABS & 10-BOX RATINGS) ---
function initProductShowcase() {
  renderCategoryTabs();
  renderProductsGrid();
}

function renderCategoryTabs() {
  const container = document.getElementById('steko-category-tabs-container');
  if (!container) return;

  container.innerHTML = Object.entries(PRODUCT_CATEGORIES).map(([key, cat]) => {
    const isActive = key === appState.activeCategory;
    return `
      <button 
        type="button" 
        onclick="switchCategory('${key}')"
        class="steko-tab-btn ${isActive ? 'active' : ''}"
      >
        ${cat.title}
      </button>
    `;
  }).join('');
}

function switchCategory(catKey) {
  playSound('click');
  appState.activeCategory = catKey;
  renderCategoryTabs();
  renderProductsGrid();
}

function renderRatingBoxes(score, colorClass = 'filled') {
  let boxes = '';
  for (let i = 1; i <= 10; i++) {
    const isFilled = i <= score;
    boxes += `<div class="rating-box ${isFilled ? colorClass : 'empty'}"></div>`;
  }
  return `<div class="rating-boxes">${boxes}</div>`;
}

function renderProductsGrid() {
  const container = document.getElementById('steko-products-grid');
  if (!container) return;

  const currentCat = PRODUCT_CATEGORIES[appState.activeCategory];
  if (!currentCat) return;

  container.innerHTML = currentCat.items.map(p => {
    return `
      <div class="steko-card p-6 flex flex-col justify-between relative overflow-hidden">
        ${p.isPopular ? '<span class="absolute top-4 right-4 bg-orange-600 text-white font-bold text-[10px] uppercase font-mono px-2.5 py-1 rounded">Хіт продажу</span>' : ''}
        
        <div>
          <!-- Header Info -->
          <div class="text-[11px] font-mono font-bold text-orange-600 uppercase mb-1">${p.brandLabel}</div>
          <h3 class="text-xl font-extrabold text-slate-900 mb-2">${p.title}</h3>
          <p class="text-xs text-slate-500 leading-relaxed mb-4">${p.desc}</p>

          <!-- Steko Rating Indicators (10 boxes) -->
          <div class="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mb-5 space-y-3">
            <div class="property-indicator">
              <div class="flex justify-between items-center mb-1">
                <span class="property-label mb-0">Теплоізоляція та сонцезахист</span>
                <span class="text-[10px] font-mono font-bold text-slate-600">${p.ratings.heat}/10</span>
              </div>
              ${renderRatingBoxes(p.ratings.heat, 'filled')}
            </div>

            <div class="property-indicator">
              <div class="flex justify-between items-center mb-1">
                <span class="property-label mb-0">Ударостійкість та безпека (ДСТУ)</span>
                <span class="text-[10px] font-mono font-bold text-slate-600">${p.ratings.impact}/10</span>
              </div>
              ${renderRatingBoxes(p.ratings.impact, 'filled-orange')}
            </div>
          </div>

          <!-- Specs List -->
          <div class="grid grid-cols-3 gap-2 text-center text-xs font-mono py-3 border-y border-slate-100 mb-5">
            <div>
              <div class="text-[10px] text-slate-400 uppercase">Товщина</div>
              <div class="font-bold text-slate-800">${p.thickness}</div>
            </div>
            <div>
              <div class="text-[10px] text-slate-400 uppercase">Клас ДСТУ</div>
              <div class="font-bold text-slate-800">${p.dstuClass}</div>
            </div>
            <div>
              <div class="text-[10px] text-slate-400 uppercase">Гарантія</div>
              <div class="font-bold text-emerald-600">${p.specs.warranty}</div>
            </div>
          </div>
        </div>

        <!-- Footer: Pricing and CTA -->
        <div class="pt-2 flex items-center justify-between">
          <div>
            <div class="text-[10px] font-mono text-slate-400 uppercase">Фабричний розкрій:</div>
            <div class="text-2xl font-mono font-black text-slate-900">${p.pricePerM2} ₴ <span class="text-xs font-normal text-slate-500">/ м²</span></div>
          </div>
          <button 
            type="button" 
            onclick="addFilmToCalc('${p.id}')"
            class="btn-steko btn-steko-primary text-xs py-2.5 px-4 shadow"
          >
            <span>В розрахунок</span>
            <span>+</span>
          </button>
        </div>

      </div>
    `;
  }).join('');
}

function addFilmToCalc(filmKey) {
  playSound('click');
  addWindowPreset('Нове вікно', 1300, 600, filmKey);
  const calcSec = document.getElementById('calculator');
  if (calcSec) calcSec.scrollIntoView({ behavior: 'smooth' });
}

// --- 8. 2D MASTER ROLL CALCULATOR (KMSS CUTTING ENGINE) ---
function initCalculator() {
  renderWindowsList();
  renderToolkitSelector();
  recalculateRollAndCost();
}

function renderWindowsList() {
  const container = document.getElementById('calc-windows-container');
  if (!container) return;

  const filmOptions = [];
  Object.values(PRODUCT_CATEGORIES).forEach(cat => {
    cat.items.forEach(item => {
      filmOptions.push(`<option value="${item.id}">${item.title} (${item.pricePerM2} ₴/м²)</option>`);
    });
  });

  container.innerHTML = appState.windows.map((win, idx) => {
    return `
      <div class="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2 relative group hover:border-slate-300 transition-colors">
        <div class="flex items-center justify-between">
          <input 
            type="text" 
            value="${win.name}" 
            onchange="updateWindowProp(${win.id}, 'name', this.value)"
            class="font-heading font-extrabold text-xs uppercase text-slate-900 bg-transparent border-b border-dashed border-slate-300 focus:border-blue-600 outline-none w-48"
          />
          <button 
            type="button" 
            onclick="removeWindow(${win.id})"
            class="text-slate-400 hover:text-red-600 transition-colors text-xs font-mono font-bold"
            title="Видалити стулку"
          >
            ✕ Видалити
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
          <div>
            <label class="block text-[10px] text-slate-400 uppercase">Висота (мм):</label>
            <input 
              type="number" 
              value="${win.height}" 
              min="100" 
              max="3000" 
              onchange="updateWindowProp(${win.id}, 'height', parseInt(this.value))"
              class="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-blue-600 text-xs font-bold"
            />
          </div>
          <div>
            <label class="block text-[10px] text-slate-400 uppercase">Ширина (мм):</label>
            <input 
              type="number" 
              value="${win.width}" 
              min="100" 
              max="1520" 
              onchange="updateWindowProp(${win.id}, 'width', parseInt(this.value))"
              class="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-blue-600 text-xs font-bold"
            />
          </div>
          <div>
            <label class="block text-[10px] text-slate-400 uppercase">Тип плівки:</label>
            <select 
              onchange="updateWindowProp(${win.id}, 'filmKey', this.value)"
              class="w-full px-2 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-blue-600 text-[11px]"
            >
              ${filmOptions.map(opt => {
                const isSelected = opt.includes(`value="${win.filmKey}"`);
                return opt.replace(isSelected ? '>' : ' ', isSelected ? ' selected>' : ' ');
              }).join('')}
            </select>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function addWindowPreset(name, height, width, filmKey = 'armor_300') {
  playSound('click');
  const newId = Date.now() + Math.floor(Math.random() * 100);
  appState.windows.push({ id: newId, name, height, width, filmKey });
  renderWindowsList();
  recalculateRollAndCost();
}

function removeWindow(id) {
  playSound('click');
  if (appState.windows.length <= 1) {
    alert('Має залишитися хоча б одне вікно для розрахунку.');
    return;
  }
  appState.windows = appState.windows.filter(w => w.id !== id);
  renderWindowsList();
  recalculateRollAndCost();
}

function updateWindowProp(id, prop, value) {
  const win = appState.windows.find(w => w.id === id);
  if (win) {
    win[prop] = value;
    recalculateRollAndCost();
  }
}

function selectToolkit(toolkitId) {
  playSound('click');
  appState.selectedToolkit = toolkitId;
  renderToolkitSelector();
  recalculateRollAndCost();
}

function renderToolkitSelector() {
  ['none', 'basic', 'pro'].forEach(key => {
    const el = document.getElementById(`toolkit-${key}`);
    if (!el) return;
    if (key === appState.selectedToolkit) {
      el.className = 'p-3.5 rounded-xl border-2 border-blue-600 bg-blue-50/50 ring-2 ring-blue-600 cursor-pointer transition-all flex flex-col justify-between relative';
    } else {
      el.className = 'p-3.5 rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-slate-400 transition-all flex flex-col justify-between';
    }
  });
}

// 2D Nesting & Canvas Rendering
function recalculateRollAndCost() {
  const canvas = document.getElementById('roll-cutting-canvas');
  if (!canvas) return;

  const rollWidth = appState.rollWidthMm;
  const margin = appState.marginMm;

  let currentX = margin;
  let currentY = margin;
  let rowHeight = 0;
  let totalNetAreaM2 = 0;
  let totalFilmCost = 0;

  const placedPanes = [];

  appState.windows.forEach(win => {
    const netM2 = (win.width * win.height) / 1000000;
    totalNetAreaM2 += netM2;

    let pricePerM2 = 750;
    Object.values(PRODUCT_CATEGORIES).forEach(cat => {
      const match = cat.items.find(i => i.id === win.filmKey);
      if (match) pricePerM2 = match.pricePerM2;
    });

    totalFilmCost += netM2 * pricePerM2;

    const wMm = win.width;
    const hMm = win.height;

    if (currentX + wMm + margin > rollWidth) {
      currentX = margin;
      currentY += rowHeight + margin;
      rowHeight = 0;
    }

    placedPanes.push({
      id: win.id,
      name: win.name,
      x: currentX,
      y: currentY,
      w: wMm,
      h: hMm
    });

    currentX += wMm + margin;
    if (hMm > rowHeight) rowHeight = hMm;
  });

  const totalLengthMm = currentY + rowHeight + margin;
  const rollLinearMeters = (totalLengthMm / 1000).toFixed(2);
  const grossAreaM2 = (rollWidth * totalLengthMm) / 1000000;
  const wastePercent = Math.max(0, Math.round(((grossAreaM2 - totalNetAreaM2) / grossAreaM2) * 100));

  // Render Canvas
  drawRollCanvas(canvas, rollWidth, totalLengthMm, placedPanes);

  // Update DOM displays
  const m2El = document.getElementById('calc-total-m2');
  if (m2El) m2El.innerText = `${totalNetAreaM2.toFixed(2)} м²`;

  const linearEl = document.getElementById('calc-total-linear');
  if (linearEl) linearEl.innerText = `${rollLinearMeters} м`;

  const wasteEl = document.getElementById('calc-waste-percent');
  if (wasteEl) wasteEl.innerText = `${wastePercent}%`;

  const filmCostEl = document.getElementById('calc-film-cost');
  if (filmCostEl) filmCostEl.innerText = `${Math.round(totalFilmCost).toLocaleString('uk-UA')} ₴`;

  const toolCost = TOOLKITS[appState.selectedToolkit] ? TOOLKITS[appState.selectedToolkit].price : 0;
  const toolCostEl = document.getElementById('calc-tool-cost');
  if (toolCostEl) toolCostEl.innerText = `${toolCost} ₴`;

  const grandTotal = Math.round(totalFilmCost + toolCost + appState.tubeFee);
  const grandTotalEl = document.getElementById('calc-grand-total');
  if (grandTotalEl) grandTotalEl.innerText = `${grandTotal.toLocaleString('uk-UA')} ₴`;

  // Update Mobile Sticky Dock
  const stickyCountEl = document.getElementById('sticky-bar-count');
  if (stickyCountEl) stickyCountEl.innerText = `${appState.windows.length} вік. (${totalNetAreaM2.toFixed(1)} м²)`;

  const stickyTotalEl = document.getElementById('sticky-bar-total');
  if (stickyTotalEl) stickyTotalEl.innerText = `${grandTotal.toLocaleString('uk-UA')} ₴`;
}

function drawRollCanvas(canvas, rollWidth, rollLength, panes) {
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  const displayWidth = canvas.clientWidth || 400;
  const scale = displayWidth / rollWidth;
  const displayHeight = Math.max(160, rollLength * scale);

  canvas.width = displayWidth * dpr;
  canvas.height = displayHeight * dpr;
  ctx.scale(dpr, dpr);

  // Background roll
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, displayWidth, displayHeight);

  // Roll edges
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1;
  ctx.strokeRect(0, 0, displayWidth, displayHeight);

  // Panes
  panes.forEach((p, idx) => {
    const rx = p.x * scale;
    const ry = p.y * scale;
    const rw = p.w * scale;
    const rh = p.h * scale;

    ctx.fillStyle = idx % 2 === 0 ? 'rgba(37, 99, 235, 0.15)' : 'rgba(234, 88, 12, 0.15)';
    ctx.fillRect(rx, ry, rw, rh);

    ctx.strokeStyle = idx % 2 === 0 ? '#1d4ed8' : '#ea580c';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(rx, ry, rw, rh);

    if (rw > 30 && rh > 20) {
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 9px JetBrains Mono, monospace';
      ctx.fillText(`${p.w}×${p.h}`, rx + 4, ry + 12);
    }
  });
}

// --- 9. NOVA POSHTA CHECKOUT MODAL ---
function openOrderModal() {
  playSound('click');
  const modal = document.getElementById('order-modal');
  const formBlock = document.getElementById('order-form-block');
  const successBlock = document.getElementById('order-success-block');

  formBlock.classList.remove('hidden');
  successBlock.classList.add('hidden');

  // Summary calculation
  let totalNetM2 = 0;
  let totalFilmCost = 0;
  appState.windows.forEach(w => {
    const m2 = (w.width * w.height) / 1000000;
    totalNetM2 += m2;
    let price = 750;
    Object.values(PRODUCT_CATEGORIES).forEach(c => {
      const match = c.items.find(i => i.id === w.filmKey);
      if (match) price = match.pricePerM2;
    });
    totalFilmCost += m2 * price;
  });

  const toolCost = TOOLKITS[appState.selectedToolkit] ? TOOLKITS[appState.selectedToolkit].price : 0;
  const grandTotal = Math.round(totalFilmCost + toolCost + appState.tubeFee);

  const summaryEl = document.getElementById('modal-order-summary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="text-xs font-mono space-y-1">
        <div class="flex justify-between font-bold text-slate-900">
          <span>Стулок до розкрою:</span>
          <span>${appState.windows.length} шт. (${totalNetM2.toFixed(2)} м²)</span>
        </div>
        <div class="flex justify-between text-slate-600">
          <span>Комплектація:</span>
          <span>${TOOLKITS[appState.selectedToolkit].title}</span>
        </div>
        <div class="flex justify-between text-emerald-700 font-bold">
          <span>Страховка заміни «Zero Risk»:</span>
          <span>ВКЛЮЧЕНО (0 ₴)</span>
        </div>
      </div>
    `;
  }

  const modalTotalEl = document.getElementById('modal-order-total');
  if (modalTotalEl) modalTotalEl.innerText = `${grandTotal.toLocaleString('uk-UA')} ₴`;

  initNovaPoshtaCities();
  modal.classList.remove('hidden');
}

function closeOrderModal() {
  playSound('click');
  document.getElementById('order-modal').classList.add('hidden');
}

function initNovaPoshtaCities() {
  const citySelect = document.getElementById('order-city-select');
  if (!citySelect) return;

  citySelect.innerHTML = NP_CITIES.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  updateWarehouses();
}

function updateWarehouses() {
  const citySelect = document.getElementById('order-city-select');
  const whSelect = document.getElementById('order-warehouse-select');
  if (!citySelect || !whSelect) return;

  const currentCity = NP_CITIES.find(c => c.name === citySelect.value) || NP_CITIES[0];
  whSelect.innerHTML = currentCity.warehouses.map(w => `<option value="${w}">${w}</option>`).join('');
}

function submitOrder(e) {
  e.preventDefault();
  playSound('success');

  const name = document.getElementById('order-name').value;
  const phone = document.getElementById('order-phone').value;
  const city = document.getElementById('order-city-select').value;
  const wh = document.getElementById('order-warehouse-select').value;

  const fakeTtn = '20450' + Math.floor(100000000 + Math.random() * 900000000);

  const ttnEl = document.getElementById('success-ttn-number');
  if (ttnEl) ttnEl.innerText = fakeTtn;

  const descEl = document.getElementById('success-order-desc');
  if (descEl) {
    descEl.innerText = `Шановний ${name}, замовлення прийнято! Протягом 15 хвилин вам зателефонує інженер для фінального звірення розмірів. Відправка до ${city}, ${wh}.`;
  }

  document.getElementById('order-form-block').classList.add('hidden');
  document.getElementById('order-success-block').classList.remove('hidden');
}

// --- 10. INITIALIZATION ON DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  initProductShowcase();
  initCalculator();
  updateHeroCalcLive();

  // Window resize debouncer for roll canvas
  window.addEventListener('resize', () => {
    recalculateRollAndCost();
  });
});
