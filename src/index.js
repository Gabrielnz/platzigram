const Page = require('page')
let main = document.getElementById('main-container')

Page('/', (context, next) => {
  main.innerHTML = 'Home <a href="/signup">Signup</a>' // que diga home
})

Page('/signup', (context, next) => {
  main.innerHTML = 'Signup <a href="/">Home</a>' // que diga signup
})

// Inicia Page
Page()
