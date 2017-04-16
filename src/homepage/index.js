const Page = require('page')

Page('/', (context, next) => {
  let main = document.getElementById('main-container')
  main.innerHTML = '<a href="/signup">Signup</a>'
})
