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

// ПР №5. Этап 3. Пункт 8: Управление раскрывающимся блоком информации
const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

if (toggleBtn && extraInfo) {
  toggleBtn.addEventListener("click", () => {
    // Переключаем класс для раскрытия/скрытия
    extraInfo.classList.toggle("expanded");
    
    // Меняем текст на кнопке в зависимости от состояния
    if (extraInfo.classList.contains("expanded")) {
      toggleBtn.textContent = "Скрыть";
    } else {
      toggleBtn.textContent = "Показать больше";
    }
  });
}
