const Page = require('page')
const homepageTemplate = require('./template')

Page('/', (context, next) => {

  // Usando jQuery para cambiar el titulo de la pagina
  $('title').html('Platzigram')

  let main = $('#main-container')
  // Limpia el elemento main-container y le inserta el contenido del homepage
  main.empty().append(homepageTemplate)
})
