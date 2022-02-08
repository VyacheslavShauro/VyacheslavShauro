const btn = document.querySelector(".header__menu"),
      nav = document.querySelector(".header__nav"),
      modalOpenBtn = document.querySelector('.header__btn'),
      modalWindow = document.querySelector('.modal-window'),
      modalCloseBtn = document.querySelector('.modal-window__close'),
      slider = document.querySelector('.slider'),
      slides = slider.querySelectorAll('.slider__img'),
      sliderPrevBtn = slider.querySelector('.slider__prev'),
      sliderNextBtn = slider.querySelector('.slider__next'),
      current = slider.querySelector('.slider__current'),
      total = slider.querySelector('.slider__total');


let currentSlide = 1;
total.textContent = slides.length;




btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("header__nav_show");
});

modalOpenBtn.addEventListener('click', ()=>{
  modalWindow.classList.add('modal-window__show');
});
modalCloseBtn.addEventListener('click', () =>{
  modalWindow.classList.remove('modal-window__show');
});
modalWindow.addEventListener('click', (event) =>{
  if(!event.target.classList.contains("modal-window__wrapper")){
    modalWindow.classList.remove("modal-window__show");
  }
});

sliderPrevBtn.addEventListener('click', () => {
  showSlides((currentSlide -= 1))
  
});
sliderNextBtn.addEventListener('click', () => {
  showSlides((currentSlide += 1))
})

function showSlides(n){
  if(n > slides.length){
    currentSlide = 1;
  }
  if(n < 1){
    currentSlide = slides.length;
  }
  slides.forEach((item) => {
    item.style.display = 'none';
  });
  slides[currentSlide - 1].style.display = 'block';
  current.textContent = currentSlide;
}
showSlides(currentSlide);
