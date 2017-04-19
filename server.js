const Express = require('express')
const app = Express()
const ext = require('file-extension')
const multer  = require('multer')

// Engine de almacenamiento local, otorga control total para almacenar archivos en disco
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.' + ext(file.originalname))
  }
})

const upload = multer({ storage: storage }).single('picture')

//const upload = multer({ dest: 'uploads/' })

// Se le especifica a la app que va a utilizar Pug como motor de plantillas, para renderizar
// las vistas HTML que se manden
app.set('view engine', 'pug')

// Define un middleware para que la app Express sirva la carpeta public/ de manera estatica
app.use(Express.static(__dirname + '/public'))

// devuelve el index.html generado por gulp, para esta ruta
app.get('/', (req, res) => {
    res.render('index')
})

// devuelve el index.html generado por gulp, para esta ruta
app.get('/signup', (req, res) => {
    res.render('index')
})

// devuelve el index.html generado por gulp, para esta ruta
app.get('/signin', (req, res) => {
    res.render('index')
})

// devuelve las fotos a mostrar
app.get('/api/pictures', (req, res) => {

	const pictures = [
    {
      user: {
        username: 'bladelizard',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'bladelizard',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 2,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ]

  // Simulando el tiempo que toma hacer la consulta a la base de datos
  setTimeout(() => {
  	// Enviando las fotos
  	res.send(pictures)
  }, 2000)
})

app.post('/api/pictures', (req, res) => {
  upload(req, res, function (err) {
    if (err) return res.send(500, 'Error uploading file')

    res.send('File uploaded')
  })
})

app.listen(3000, (err) => {
  if (err) return console.log('Hubo un error', err), process.exit(1)

  console.log('Aplicacion de ejemplo escuchando en el puerto 3000!')
})
