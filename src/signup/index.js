const Page = require('page')
const signupTemplate = require('./template')

Page('/signup', (context, next) => {

  // Usando jQuery para cambiar el titulo de la pagina
  $('title').html('Platzigram - Signup')

  let main = $('#main-container')
  // Limpia el elemento main-container y le inserta el contenido de signup
  main.empty().append(signupTemplate)
})
