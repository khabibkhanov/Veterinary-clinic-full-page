var modalClick = document.querySelector('#modal')
var overlay = document.querySelector ('.overlay')
var modalWindow = document.querySelector ('.modal')
var modalX = document.querySelector ('.modal-x')


modalClick.addEventListener('click', function(e) {
    overlay.classList.toggle('opened')
    modalWindow.classList.toggle('opened')
})

modalX.addEventListener('click', function(e){
    overlay.classList.remove('opened')
    modalWindow.classList.remove('opened')
})



