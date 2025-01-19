const navigator = document.querySelector('.navigator');
const displayer = document.querySelector('#menu');

displayer.addEventListener('click', () => { 
    displayer.classList.toggle('show');
    navigator.classList.toggle('show');
});