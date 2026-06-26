// Код вывод текущей даты в подвал сайта
const dateSpan = document.getElementById("update-date");
if (dateSpan) {
  const today = new Date();
  dateSpan.textContent = today.toLocaleDateString("ru-RU");
}

//  Подсветка активного пункта меню по клику
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Сначала убираем класс active у всех пунктов меню
    navLinks.forEach(l => l.classList.remove("active"));
    // Добавляем класс active только тому пункту, на который кликнули
    link.classList.add("active");
  });
});
