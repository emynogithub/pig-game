'strict mode'

const navBar = document.querySelector('.middle-Nav-content');
const closeBtn = document.querySelector('.close-btn');
const menuBars = document.querySelector('.fa-bars');


menuBars.addEventListener('click', function(){
    navBar.classList.add('active2')

})

closeBtn.addEventListener('click', function(){
    navBar.classList.remove('active2')

})

