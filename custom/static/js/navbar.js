let mainNav = document.getElementById('js-main-nav');
let navToggle = document.getElementById('js-nav-toggle');
navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});
const animateBar = (e) => {
    e.classList.toggle("change");
}