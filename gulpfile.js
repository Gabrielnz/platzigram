const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const browserify = require('browserify')
const babel = require('babelify')
const source = require('vinyl-source-stream')
const watchify = require('watchify')

// Tarea para los estilos
gulp.task('styles', () => {
  gulp
    // toma el archivo sass
    .src('index.scss')
    // transforma el archivo
    .pipe(sass())
    // renombra el archivo a app
    .pipe(rename('app.css'))
    // genera el archivo en la carpeta public
    .pipe(gulp.dest('public'))
})

// Tarea para los assets
gulp.task('assets', () => {
  gulp
    // toma todos los assets
    .src('assets/*')
    // los copia a la carpeta public
    .pipe(gulp.dest('public'))
})

function compile(watch) {
  // watchify esta recibiendo el index que toma browserify,
  // y bundle recibe un objeto que va a escuchar cada vez que ocurra algun cambio
  let bundle = watchify(browserify('./src/index.js'))

  function rebundle() {
    bundle
      // transforma el archivo usando babel y el preset ES2015
      .transform(babel, {presets: ["es2015"]})
      // genera el bundle
      .bundle()
      // si ocurre algun error, lo muestra por consola
      .on('error', (err) => { console.log(err); this.emit('end'); })
      // convierte el bundle resultante en algo que gulp entiende
      .pipe(source('index.js'))
      // renombra el bundle a app
      .pipe(rename('app.js'))
      // genera el archivo en la carpeta public
      .pipe(gulp.dest('public'))
  }

  // Si se quieren escuchar los cambios que ocurran en los archivos, se dispara
  // un evento que hace rebundle cada vez que ocurran
  if (watch) {
    bundle.on('update', () => {
      console.log('--> Bundling...')
      rebundle()
    })
  }

  // Ejecuta rebundle al menos una vez
  rebundle()
}

// Tarea para generar la build
gulp.task('build', () => compile())

// Tarea para generar la build y escuchar cualquier cambio que ocurra
gulp.task('watch', () => compile(true))

// todas las tareas que va a ejecutar gulp
gulp.task('default', ['styles', 'assets', 'build'])
