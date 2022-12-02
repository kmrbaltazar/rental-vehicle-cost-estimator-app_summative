// BURGER MENU FOR TABLET AND MOBILE
document.getElementById("burger-menu").onclick = function () {
  let burger_nav = document.getElementById("burger-nav");
  burger_nav.classList.toggle("no-display");
};

// FLATPICKR
const new_calendar = {
  mode: "range",
  minDate: "today",
  dateFormat: "y-M-d",
  altInput: true,
  altFormat: "d-M-y",
  allowInput: true,
};

flatpickr("#date-range", new_calendar);
