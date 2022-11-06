


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

