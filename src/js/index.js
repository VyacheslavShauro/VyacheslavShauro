const btn = document.querySelector(".header__menu"),
      nav = document.querySelector(".header__nav"),
      modalOpenBtn = document.querySelector('.header__btn'),
      modalWindow = document.querySelector('.modal-window'),
      modalCloseBtn = document.querySelector('.modal-window__close')




btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("header__nav_show");
});

modalOpenBtn.addEventListener('click', ()=>{
  modalWindow.classList.add('modal-window__show');
});
modalCloseBtn.addEventListener('click', () =>{
  modalWindow.classList.remove('modal-window__show');
})
