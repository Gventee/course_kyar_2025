document.addEventListener('DOMContentLoaded', () => {
  const pre = document.getElementById('preloader');
  window.addEventListener('load', () => { if (pre) pre.style.display = 'none'; });

  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.setAttribute('type','button');
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-label', mainNav.classList.contains('open') ? 'Закрыть меню' : 'Открыть меню');
    });
  }

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.setAttribute('type','button');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });
  }

 const blogModal = document.getElementById('blogModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.querySelector('.close');
if (closeModal) {
  const articles = {
    1: { title: "Тренды в загородной архитектуре 2025", content: "<p>Новые материалы и концепции для идеального загородного жилья: Экологичные материалы, такие как конопляный бетон и переработанная древесина, становятся все более популярными для строительства загородных домов, обеспечивая устойчивость и энергоэффективность. Концепция passive house (пассивного дома) предлагает проектирование, сводящее к минимуму потребление энергии для отопления и охлаждения за счет оптимизации изоляции и вентиляции. Модульные дома, собранные из готовых блоков, позволяют быстро и экономично возводить современные загородные резиденции с индивидуальным дизайном.</p>" },
    2: { title: "Топ-5 ошибок при инвестировании", content: "<p>Как избежать финансовых потерь при работе с недвижимостью: Тщательно исследуйте рынок недвижимости, анализируя динамику цен, спрос и предложение в выбранном районе, чтобы избежать переплаты при покупке или недооценки при продаже. Проведите независимую оценку объекта недвижимости и технический аудит состояния здания, чтобы выявить скрытые дефекты и возможные затраты на ремонт в будущем. Получите профессиональную консультацию у юриста и риелтора, чтобы убедиться в юридической чистоте сделки и избежать мошеннических схем.</p>" },
    3: { title: "Лучшие лайфхаки для лофта", content: "<p>Как создать индустриальную эстетику без ремонта: Используйте открытую проводку, металлические светильники и мебель с эффектом состаренности, чтобы добавить индустриальные акценты в интерьер без необходимости демонтажа стен или потолков. Подчеркните существующие текстуры, такие как кирпичная кладка или бетонные поверхности, обработав их защитным лаком или пропиткой, чтобы создать аутентичный индустриальный вид. Добавьте аксессуары в стиле лофт, такие как металлические полки, винтажные плакаты и минималистичные светильники, чтобы завершить индустриальный образ.</p>" },
    4: { title: "Технологии умного дома", content: "<p>Полная автоматизация жилья: от освещения до безопасности: Системы умного дома позволяют управлять освещением, отоплением и бытовыми приборами через смартфон или голосовые команды, повышая комфорт и экономя энергию. Интегрированные системы безопасности, включающие камеры видеонаблюдения, датчики движения и сигнализацию, обеспечивают надежную защиту дома от несанкционированного доступа. Автоматизированные системы управления климатом, такие как термостаты с функцией геозонирования, позволяют поддерживать оптимальную температуру в доме в зависимости от времени суток и присутствия жильцов.</p>" },
    5: { title: "Экологичные дома: тренды 2025", content: "<p>Солнечные панели и системы рециркуляции воды: Установка солнечных панелей на крыше дома позволяет генерировать собственную электроэнергию, снижая зависимость от централизованных сетей и экономя на оплате коммунальных услуг. Системы рециркуляции воды, собирающие дождевую воду и очищающие сточные воды, позволяют повторно использовать воду для полива сада, смыва туалета и других бытовых нужд. Интеграция солнечных панелей и систем рециркуляции воды в проект дома позволяет создать экологически устойчивое жилье, снижающее негативное воздействие на окружающую среду.</p>" },
    6: { title: "Интерьер: советы дизайнеров", content: "<p>10 приемов визуального расширения пространств: Используйте светлые тона в отделке стен и потолков, чтобы отражать больше света и создавать ощущение простора. Установите зеркала на стенах, чтобы визуально увеличить пространство и добавить глубину. Избавьтесь от лишней мебели и беспорядка, чтобы создать ощущение организованности и свободы.</p>" },
    7: { title: "Секреты бюджетного ремонта", content: "<p>Как преобразить квартиру без больших затрат: Перекрасьте стены в светлые тона, чтобы мгновенно освежить интерьер и визуально увеличить пространство. Замените старые шторы и текстиль на новые, чтобы добавить ярких акцентов и обновить обстановку. Организуйте пространство с помощью систем хранения, таких как полки, корзины и ящики, чтобы избавиться от беспорядка и освободить место.</p>" },
    8: { title: "Услуги покупки в 2025", content: "<p>Какие услуги актуальны при покупке дома: Юридическое сопровождение сделки для проверки документов и обеспечения ее законности. Техническая экспертиза дома для выявления скрытых дефектов и оценки состояния инженерных систем. Страхование недвижимости для защиты от финансовых потерь в случае повреждений или стихийных бедствий.</p>" },
    9: { title: "Продажа имущества имеет смысл?", content: "<p>Стоит ли продавать жилье в 2025: Прогнозировать рынок недвижимости сложно, но эксперты советуют следить за ключевыми экономическими показателями, такими как инфляция и процентные ставки. Если у вас есть конкретные планы по переезду или улучшению жилищных условий, то 2025 год может быть подходящим временем для продажи, если рыночные условия будут благоприятными. Оцените личные финансовые обстоятельства и проконсультируйтесь с риелтором, чтобы принять взвешенное решение о продаже жилья в 2025 году.</p>" }
  };
  document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const art = articles[btn.dataset.article];
      modalTitle.textContent = art.title;
      modalBody.innerHTML = art.content;
      blogModal.style.display = 'flex';
    });
  });
    closeModal.addEventListener('click', () => (blogModal.style.display = 'none'));
  window.addEventListener('click', e => e.target === blogModal ? (blogModal.style.display = 'none') : null);
  }

  const advCards = document.querySelectorAll('.adv-card');
  if (advCards.length) {
    const reveal = () => {
      advCards.forEach(c => {
        if (c.getBoundingClientRect().top < window.innerHeight * 0.85) {
          c.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);
  }
 
});

document.addEventListener("DOMContentLoaded", function () {
  const propModal = document.getElementById('propertyModal');
  const mImgs = document.getElementById('modalImages');
  const mTxt = document.getElementById('modalText');
  const mClose = document.getElementById('modalClose');
  const detailBtns = document.querySelectorAll('.btn-details');

  if (detailBtns.length) {
    detailBtns.forEach(btn => btn.setAttribute('type', 'button'));
  }

  if (propModal && mImgs && mTxt && mClose) {
    detailBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.property-card');

        if (!card) {
          console.error("No .property-card found for this .btn-details");
          return;
        }

        mImgs.innerHTML = '';

        const images = JSON.parse(card.dataset.images || '[]');
        const description = card.dataset.desc || '';

        images.forEach(imageSrc => {
          const img = document.createElement('img');
          img.src = imageSrc;
          img.alt = 'Property Image';
          img.style.width = '100%';
          img.style.maxHeight = '200px';
          mImgs.appendChild(img);
        });
        mTxt.textContent = description;
        propModal.style.display = 'block';
      });
    });

    mClose.addEventListener('click', () => propModal.style.display = 'none');

    window.addEventListener('click', e => {
      if (e.target === propModal) propModal.style.display = 'none';
    });
  }
});

const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
      
          const name = this.name.value.trim();
          const email = this.email.value.trim();
          const message = this.message.value.trim();
      
          const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
                              <data>
                                <contact>
                                  <name>${name}</name>
                                  <email>${email}</email>
                                  <message>${message}</message>
                                </contact>
                              </data>`;
      
          const blob = new Blob([xmlContent], { type: 'text/xml' });
      
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'data.xml';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
      
          alert('Данные успешно сохранены в data.xml');
        });
      }