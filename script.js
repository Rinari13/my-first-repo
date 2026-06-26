// ПР №7. Этап 1. Пункт 1: Массив данных из 5 объектов
const projects = [
  { id: 1, title: "Дроп «Cyber-Grunge»", category: "apparel", description: "Авторская серия худи и джинсов оверсайз с элементами ручного окрашивания (Tie-Dye) и грубыми внешними швами." },
  { id: 2, title: "Проект «Деконструкция»", category: "apparel", description: "Кастомная линейка пиджаков и тренчей, перешитых вручную из винтажных материалов с добавлением ремней." },
  { id: 3, title: "Сумка-патронташ RE:MADE", category: "accessories", description: "Апсайклинг-аксессуар, выполненный из плотных остатков денима и старых военных ремней." },
  { id: 4, title: "Футболка «Глитч-Арт»", category: "apparel", description: "Лимитированный тираж со сложной ручной шелкографией и эффектом размытия ткани." },
  { id: 5, title: "Ремень «Industrial»", category: "accessories", description: "Кастомный поясной ремень с массивной металлической пряжкой-фастексом и авторской гравировкой." }
];

// ПР №6: Проверка сохранённой темы в localStorage при загрузке
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  const toggleBtnEl = document.getElementById("theme-toggle");
  if (toggleBtnEl) toggleBtnEl.textContent = "☀️";
}

// ПР №2: Вывод текущей даты
const dateSpan = document.getElementById("update-date");
if (dateSpan) {
  const today = new Date();
  dateSpan.textContent = today.toLocaleDateString("ru-RU");
}

// ПР №3: Подсветка активного пункта меню
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ПР №4: Логика бургер-меню
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");
if (burgerBtn && nav) {
  burgerBtn.addEventListener("click", () => { nav.classList.toggle("open"); });
}

// ПР №5: Кнопка «Показать больше»
const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");
if (toggleBtn && extraInfo) {
  toggleBtn.addEventListener("click", () => {
    extraInfo.classList.toggle("expanded");
    toggleBtn.textContent = extraInfo.classList.contains("expanded") ? "Скрыть" : "Показать больше";
  });
}

// ПР №6: Переключение темы
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

// ПР №6: Валидация формы
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    let isValid = true;

    if (nameInput.value.trim() === "") { nameError.textContent = "Пожалуйста, введите ваше имя."; isValid = false; } 
    else { nameError.textContent = ""; }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) { emailError.textContent = "Введите корректный адрес электронной почты."; isValid = false; } 
    else { emailError.textContent = ""; }

    if (isValid) {
      nameError.textContent = "";
      emailError.textContent = "";
      alert("Form sent!");
      form.reset();
    }
  });
}

// =========================================================================
// ПР №7. Этап 2. Пункт 3: Функция генерации HTML-шаблона для карточки
function createCard(project) {
  return `
    <article class="project-card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </article>
  `;
}

// ПР №7. Этап 2. Пункт 4: Функция вывода списка проектов в контейнер
function renderProjects(list) {
  const container = document.getElementById("projects-grid");
  if (container) {
    container.innerHTML = list.map(createCard).join("");
  }
}

// Первоначальный вывод всех 5 карточек при загрузке страницы
renderProjects(projects);

// ПР №7. Этап 3. Пункт 6: Логика фильтрации по кнопкам-категориям
const filterButtons = document.querySelectorAll(".filters button");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    const filter = btn.dataset.filter;
    // Используем встроенный метод .filter() массива
    const filtered = filter === "all" 
      ? projects 
      : projects.filter(p => p.category === filter);
    
    renderProjects(filtered);
  });
});

// ПР №7. Этап 4. Пункт 9: Логика живого текстового поиска в поле ввода
const searchInput = document.getElementById("search-input");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    
    // Фильтруем элементы массива, чьи названия включают подстроку query
    const filtered = projects.filter(p => 
      p.title.toLowerCase().includes(query)
    );
    renderProjects(filtered);
  });
}
