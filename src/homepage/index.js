const Page = require('page')

Page('/', (context, next) => {
  
  // Usando jQuery para cambiar el titulo de la pagina
  $('title').html('Platzigram')

  let main = document.getElementById('main-container')
  main.innerHTML = '<a href="/signup">Signup</a>'
})
