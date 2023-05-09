const link = document.getElementById('link');
var less = false;

link.addEventListener('click', function(){
  this.innerHTML = (less = !less) ? `<img src="assets/images/Site.svg" 
  alt="Icone de globo que te levará ao meu site. O site ainda não está disponivel." class="botao__imagem">
  <span class="botao__texto">Site</span>` 
  : `<img src="assets/images/Site.svg" alt="Icone de globo que te levará ao meu site."
  class="botao__imagem">
  <p class="botao__texto">Disponivel em breve</p>`;
});