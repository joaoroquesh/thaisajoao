


(function () {
  var menu = document.getElementById('menu');
  var menuColor = document.getElementById('menuColor');
  var imgMenu = document.getElementById('imgMenu');
  var imgMenuDark = document.getElementById('imgMenuDark');
  imgMenuDark
  window.addEventListener('scroll', function () {
      if (window.scrollY > 0) menu.classList.add('nav-marsala'); // > 0 ou outro valor desejado
      else menu.classList.remove('nav-marsala');
  });
  window.addEventListener('scroll', function () {
      if (window.scrollY > 0) menuColor.classList.add('navbar-dark'); // > 0 ou outro valor desejado
      else menuColor.classList.remove('navbar-dark');
  });
  window.addEventListener('scroll', function () {
      if (window.scrollY > 0) imgMenuDark.classList.add('d-inline-block'); // > 0 ou outro valor desejado
      else imgMenuDark.classList.remove('d-inline-block');
  });
  window.addEventListener('scroll', function () {
      if (window.scrollY > 0) imgMenu.classList.add('d-none'); // > 0 ou outro valor desejado
      else imgMenu.classList.remove('d-none');
  });
})();



const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date('03/25/2023 15:00:00').getTime();
let x = setInterval(() => countDown(), second);

function countDown() {
  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;

  document.getElementById('days').innerText = Math.floor(diff / day);
  document.getElementById('hours').innerText = Math.floor(diff % day / hour);
  document.getElementById('minutes').innerText = Math.floor(diff % hour / minute);
  document.getElementById('seconds').innerText = Math.floor(diff % minute / second);
}

function resetCountdown() {
  clearInterval(x);
  let date_end = document.form_main.date_end.value;
  count_down = new Date(`${date_end} 00:00:00`).getTime();
  x = setInterval(() => countDown(), second);
}