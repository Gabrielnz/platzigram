const yo = require('yo-yo')
const translate = require('../translate')

function language(locale) {

  // Recarga la pagina solamente si se elige un idioma distinto al establecido actualmente
  if(localStorage.locale != locale){
    localStorage.locale = locale
    // Recargamos la pagina para que tome este cambio
  location.reload()
  }
  
  // Se retorna false para que no continúe con la navegación hacia la ruta # definida en el anchor en donde se llama esta función
  return false
}

const element = yo`<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l3 center-align"><a href="#" data-activates="dropdown1" class="dropdown-button btn btn-flat">${translate.message('language')}</a>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#" onclick=${language.bind(null, 'es')}">${translate.message('spanish')}</a></li>
          <li><a href="#" onclick=${language.bind(null, 'en-US')}">${translate.message('english')}</a></li>
        </ul>
      </div>
      <div class="col s12 l3 push-l6 center-align">© 2017 Platzigram</div>
    </div>
  </div>
</footer>`

// Incluye el footer en el cuerpo del HTML
document.body.appendChild(element)