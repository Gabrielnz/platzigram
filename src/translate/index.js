// Si el navegador actual no tiene intl en su objeto global, le hace require al Polyfill de Format.js
if (!window.Intl) {
    window.Intl = require('intl') // polyfill for `Intl`
    require('intl/locale-data/jsonp/en-US.js')
    require('intl/locale-data/jsonp/es.js')
}

// Agregando internacionalizacion para las fechas en Browserify, con Format.js
window.IntlRelativeFormat = require('intl-relativeformat')
// Agregando internacionalizacion para los mensajes
window.IntlMessageFormat = require('intl-messageformat')

require('intl-relativeformat/dist/locale-data/en.js')
require('intl-relativeformat/dist/locale-data/es.js')

const es = require('./es')
const en = require('./en-US')

let MESSAGES = {}

MESSAGES.es = es
MESSAGES['en-US'] = en

const locale = 'es'

module.exports = {
	message: function (text, opts) {
		// Si opts no viene especificado, se le asigna un objeto vacio
		opts = opts || {}
		const msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null)
		return msg.format(opts)
	},
	date: new IntlRelativeFormat(locale)
}