const gulp = require('gulp')
const autoPrefixer = require('gulp-autoprefixer')

function css_styles (done) {
    gulp.src('./public/styles.css')
    .pipe(autoPrefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./public/css/'))
    done()
}

gulp.task(css_styles)