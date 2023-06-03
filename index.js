function toggleNav() {
    var navBar = document.getElementById('mobileLinks');

    navBar.classList.toggle('show')
}

var openBtn = document.getElementById('open')

openBtn.addEventListener('click', toggleNav)

var closeBtn = document.getElementById('close')

closeBtn.addEventListener('click', toggleNav)

var link = document.getElementById('link')

link.addEventListener('click', toggleNav)

var link2 = document.getElementById('link2')

link2.addEventListener('click', toggleNav)

var link3 = document.getElementById('link3')

link3.addEventListener('click', toggleNav)

var link4 = document.getElementById('link4')

link4.addEventListener('click', toggleNav)

