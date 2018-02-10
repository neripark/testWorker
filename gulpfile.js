var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('server', function(){
  gulp.src('./')
    .pipe(webserver({
      host: 'localhost',
      port: '8888',
      livereload: true
    }));
});

gulp.task('default', ['server']);