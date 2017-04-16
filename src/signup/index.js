const Page = require('page')
const empty = require('empty-element')
const signupTemplate = require('./template')

Page('/signup', (context, next) => {
  let main = document.getElementById('main-container')
  // Limpia el elemento main-container y le inserta el contenido de signup
  empty(main).appendChild(signupTemplate)
})
