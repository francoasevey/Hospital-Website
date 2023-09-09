const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');

navbarShowBtn.addEventListener('click', function() {
    navbarCollapseDiv.classList.add('navbar-show')
})