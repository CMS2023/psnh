//Smartphone-Menü
document.getElementById('menu-toggle').addEventListener('click', function() {
  var bars = document.querySelectorAll('.bar');
  for (var i = 0; i < bars.length; i++) {
    bars[i].classList.toggle('active');
  }
});

document.getElementById('menu-toggle').addEventListener('click', function() {
  if (document.getElementById('sliding-menu').classList.contains('show')) {
    document.getElementById('sliding-menu').classList.remove('show');
  } else {
    document.getElementById('sliding-menu').classList.add('show');
  }
}) 