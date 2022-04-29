const hamburgerBtn = document.querySelector('#hamburger');
const navBar = document.querySelector('#navBar');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('hamburger-active');
    navBar.classList.toggle('listActive');
})