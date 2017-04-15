import Express from 'express'
const app = Express()

app.get('/', (req, res) => res.send('Hola mundo!'))

app.listen(3000, (err) => {
  if (err) return console.log('Hubo un error', err), process.exit(1)

  console.log('Aplicacion de ejemplo escuchando en el puerto 3000!')
})
