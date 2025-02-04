const theme_button = document.querySelector('.theme-button');
const body = document.querySelector('body');
const button = document.querySelector('button');

theme_button.onclick = function(){
    this.classList.toggle('active')
    body.classList.toggle('active')
    button.classList.toggle('active')
}
