// Incluye un polyfill necesario para usar el regenerator de babel del lado del cliente
require('babel-polyfill')

const Page = require('page')

require('./homepage')
require('./signup')
require('./signin')
require('./footer')
// Inicia Page
Page()
