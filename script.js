'use strict';

const replies = [
  'Are you sure?',
  'Really really sure?',

  "But we'd be so cute tho",
  'Please...?',

  "I'll give you one more chance",
  'Is that your final answer?',

  'Surely a mistake',
  "Don't be mean",

  "You're hurting my feelings now ;(",
  "Yes again cuz it's the only right answer",
];

const btnYes = document.querySelector('.btn--yes');
const btnNo = document.querySelector('.btn--no');
const gifs = document.querySelectorAll('.gif');
const btnContainer = document.querySelector('.btns-container');
const message = document.querySelector('h1');

let counter = -1;

const saidYes = function () {
  gifs.forEach(gif => gif.classList.add('hidden'));
  document.querySelector('.final--gif').classList.remove('hidden');
  btnContainer.classList.add('hidden');
  message.textContent = "Looks like it's a date! xoxoxo";
};

const revealGif = function (gif) {
  gifs.forEach(gif => gif.classList.add('hidden'));
  gif.classList.remove('hidden');
};

btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn')) {
    const btn = e.target;

    if (btn.classList.contains('btn--yes')) return saidYes();

    if (btn.classList.contains('btn--no')) {
      counter++;

      if (counter >= 10) return saidYes();

      btn.textContent = replies[counter];
      gifs.forEach(gif => {
        if (counter === +gif.dataset.gif) revealGif(gif);
      });
    }
  }
});
