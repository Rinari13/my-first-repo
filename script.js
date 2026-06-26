// ПР №6. Этап 2. Пункт 4: Проверка сохранённой темы в localStorage при загрузке страницы
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  const toggleBtnEl = document.getElementById("theme-toggle");
  if (toggleBtnEl) toggleBtnEl.textContent = "☀️"; // Меняем иконку на солнце
}

// Код из ПР №2: Вывод текущей даты
const dateSpan = document.getElementById("update-date");
if (dateSpan) {
  const today = new Date();
  dateSpan.textContent = today.toLocaleDateString("ru-RU");
}

// Код из ПР №3: Подсветка активного пункта меню
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Код из ПР №4: Логика бургер-меню
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");
if (burgerBtn && nav) {
  burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Код из ПР №5: Кнопка «Показать больше»
const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");
if (toggleBtn && extraInfo) {
  toggleBtn.addEventListener("click", () => {
    extraInfo.classList.toggle("expanded");
    toggleBtn.textContent = extraInfo.classList.contains("expanded") ? "Скрыть" : "Показать больше";
  });
}

// ПР №6. Этап 2. Пункт 3: Логика переключения и записи темы в localStorage
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    
    const isLight = document.body.classList.contains("light-theme");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

// ПР №6. Этап 4. Пункт 8: Валидация полей формы перед отправкой
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Запрещаем странице перезагружаться
    
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    
    let isValid = true;
    
    // Проверка поля Имя
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Пожалуйста, введите ваше имя.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }
    
    // Проверка поля Email через регулярное выражение
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Введите корректный адрес электронной почты.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
    
    // Если всё заполнено верно
    if (isValid) {
      alert("Форма успешно отправлена!");
      form.reset(); // Очищаем поля формы
    }
  });
}
