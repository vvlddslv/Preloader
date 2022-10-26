const gulp = require('gulp');
const browserSync = require('browser-sync');

// Static server
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "2"
        }
    });
});

gulp.task('styles', function () {
    return gulp.src("2/sass/*.+(scss|sass")
    pipe()
})