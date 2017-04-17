const Page = require('page')
const signinTemplate = require('./template')

Page('/signin', (context, next) => {

  // Usando jQuery para cambiar el titulo de la pagina
  $('title').html('Platzigram - Signin')

  let main = $('#main-container')
  // Limpia el elemento main-container y le inserta el contenido de signin
  main.empty().append(signinTemplate)
})
