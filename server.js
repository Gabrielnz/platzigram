const Express = require('express')
const app = Express()

// Se le especifica a la app que va a utilizar Pug como motor de plantillas, para renderizar
// las vistas HTML que se manden
app.set('view engine', 'pug')

// Define un middleware para que la app Express sirva la carpeta public/ de manera estatica
app.use(Express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, (err) => {
  if (err) return console.log('Hubo un error', err), process.exit(1)

  console.log('Aplicacion de ejemplo escuchando en el puerto 3000!')
})
