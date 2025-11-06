document.getElementById('menu__bar').addEventListener('click', function() {
  const menu = document.getElementById('dashboard__menus');
  menu.classList.toggle('hidden');
});

document.getElementById('audit__angle__down').addEventListener('click', function() {
  const auditSubMenu = document.getElementById('audit__sub__menu');
  auditSubMenu.classList.toggle('active');
});

document.getElementById('risk__angle__down').addEventListener('click', function() {
  const riskSubMenu = document.getElementById('risk__sub__menu');
  riskSubMenu.classList.toggle('active');
});

document.getElementById('control__angle__down').addEventListener('click', function() {
  const controlSubMenu = document.getElementById('control__sub__menu');
  controlSubMenu.classList.toggle('active');
});

document.getElementById('report__angle__down').addEventListener('click', function() {
  const reportSubMenu = document.getElementById('report__sub__menu');
  reportSubMenu.classList.toggle('active');
});