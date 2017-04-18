const Page = require('page')

// cambiando el idioma para Moment.js
const moment = require('moment')
require('moment/locale/es')

moment.locale('es')

require('./homepage')
require('./signup')
require('./signin')

// Inicia Page
Page()
