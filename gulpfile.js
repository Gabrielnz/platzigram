const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const browserify = require('browserify')
const babel = require('babelify')
const source = require('vinyl-source-stream')

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

gulp.task('assets', () => {
  gulp
    // toma todos los assets
    .src('assets/*')
    // los copia a la carpeta public
    .pipe(gulp.dest('public'))
})

gulp.task('scripts', () => {
  // toma el index.js con browserify
  browserify('./src/index.js')
    // transforma el archivo usando babel y el preset ES2015
    .transform(babel, {presets: ["es2015"]})
    // genera el bundle
    .bundle()
    // convierte el bundle resultante en algo que gulp entiende
    .pipe(source('index.js'))
    // renombra el bundle a app
    .pipe(rename('app.js'))
    // genera el archivo en la carpeta public
    .pipe(gulp.dest('public'))
})

// todas las tareas que va a ejecutar gulp
gulp.task('default', ['styles', 'assets', 'scripts'])
