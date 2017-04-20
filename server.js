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
        avatar: 'https://pbs.twimg.com/profile_images/849779346864787456/UBl2XoKX.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'bladelizard',
        avatar: 'https://pbs.twimg.com/profile_images/849779346864787456/UBl2XoKX.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 2,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ]

  setTimeout(() => res.send(pictures), 2000)
})

app.post('/api/pictures', (req, res) => {
  upload(req, res, function (err) {
    if (err) return res.send(500, 'Error uploading file')

    res.send('File uploaded')
  })
})

app.get('/api/user/:username', (req, res) => {
  const user = {
    username: 'bladelizard',
    avatar: 'https://pbs.twimg.com/profile_images/849779346864787456/UBl2XoKX.jpg',
    pictures: [
    {
      id: 1,
      src: 'http://materializecss.com/images/office.jpg',
      likes: 3
    },
    {
      id: 2,
      src: 'http://www.favourites.sg/wp-content/uploads/high-school-students-in-classroom-54tokmmx.jpg',
      likes: 10
    },
    {
      id: 3,
      src: 'https://www.smccme.edu/wp-content/uploads/2016/07/High-School-Students_P-header_1024x308_6-16.jpg.jpg',
      likes: 1
    },
    {
      id: 4,
      src: 'http://www.psu.edu/sites/default/files/CS_howdoi.jpg',
      likes: 24
    },
    {
      id: 5,
      src: 'http://materializecss.com/images/office.jpg',
      likes: 0
    }]
  }
  res.send(user)
})

app.get('/:username', (req, res) => {
  res.render('index')
})

app.listen(3000, (err) => {
  if (err) return console.log('Hubo un error', err), process.exit(1)

  console.log('Aplicacion de ejemplo escuchando en el puerto 3000!')
})
