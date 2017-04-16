const Page = require('page')
const yo = require('yo-yo')
const empty = require('empty-element')
let main = document.getElementById('main-container')

Page('/', (context, next) => {
  main.innerHTML = '<a href="/signup">Signup</a>'
})

Page('/signup', (context, next) => {

  let element = yo`<div class="container">
    <div class="row">
      <div class="col s10 push-s1">
        <div class="row">
          <div class="col m5 hide-on-small-only">
            <img class="iphone" src="iphone.png" />
          </div>
          <div class="col s12 m7">
            <div class="row">
              <div class="signup-box">
                <h1 class="platzigram">Platzigram</h1>
                <form class="signup-form">
                  <h2>Regístrate para ver fotos de tus amigos estudiando en Platzi</h2>
                  <div class="section">
                    <a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                    <a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                  </div>
                  <div class="divider"></div>
                  <div class="section">
                    <input type="email" name="email" placeholder="Correo electrónico" />
                    <input type="text" name="name" placeholder="Nombre completo" />
                    <input type="text" name="username" placeholder="Nombre de usuario" />
                    <input type="password" name="password" placeholder="Contraseña" />
                    <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="login-box">
                ¿Tienes una cuenta? <a href="/signin">Entrar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`

  // Limpia el elemento main-container y le inserta el contenido de signup
  empty(main).appendChild(element)
})

// Inicia Page
Page()
