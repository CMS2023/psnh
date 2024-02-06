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

function smoothScrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Optional: Zeigen Sie den Scroll-Button nur an, wenn der Nutzer gescrollt hat
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTopButton").style.display = "block";
  } else {
    document.getElementById("scrollTopButton").style.display = "none";
  }
};
