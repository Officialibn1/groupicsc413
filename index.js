function toggleNav() {
    var navBar = document.getElementById('mobileLinks');

    navBar.classList.toggle('show')
}

var openBtn = document.getElementById('open')

openBtn.addEventListener('click', toggleNav)

var closeBtn = document.getElementById('close')

closeBtn.addEventListener('click', toggleNav)

