'use strict';

// Получил доступ к элементам по селектору
const btnOpenModal = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Использую цикл for of, добавил обработчик событий и функцию, в которой прописано, что должно происходить после срабатывания события
for (let value of btnOpenModal) {
  value.addEventListener('click', function () {
    overlay.classList.toggle('hidden');
    modalWindow.classList.toggle('hidden');
  });
}
// Добавил обработчик событий и функцию для кнопки закрытия модального окна, в которой прописано, что должно происходить после срабатывания события
btnCloseModal.addEventListener('click', function () {
  overlay.classList.toggle('hidden');
  modalWindow.classList.toggle('hidden');
});
// Добавил обработчик событий и функцию, в которой прописано, что должно происходить после срабатывания события
overlay.addEventListener('click', function () {
  overlay.classList.toggle('hidden');
  modalWindow.classList.toggle('hidden');
});
// Добавил обработчик событий и функцию для кнопки 'Escape', в которой прописано, что должно происходить после срабатывания события
document.addEventListener('keydown', function (event) {
  if (event.key == 'Escape' && !modalWindow.classList.contains('hidden')) {
    overlay.classList.toggle('hidden');
    modalWindow.classList.toggle('hidden');
  }
});
