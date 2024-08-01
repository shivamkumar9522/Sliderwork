const left = document.querySelector('.fa-arrow-left');
const right = document.querySelector('.fa-arrow-right');
const slider = document.querySelector('.slider');
let slideNumber =1;
right.addEventListener(`click`,()=>{
  slider.style.transform =`translateX(-100px)`;
});