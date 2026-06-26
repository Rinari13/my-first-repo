// Код вывод текущей даты
const dateSpan = document.getElementById("update-date");
if (dateSpan) {
  const today = new Date();
  dateSpan.textContent = today.toLocaleDateString("ru-RU");
}

// Код подсветка активного пункта меню
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Логика открытия/закрытия бургер-меню по клику
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

if (burgerBtn && nav) {
  burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}
