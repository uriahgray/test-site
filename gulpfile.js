var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('default', function(){
  console.log("you ran the gulp task");
})

gulp.task('html', function(){
  console.log("you created html");
});

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe()
    .pipe(gulp.dest('./app/temp/'));
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });

});
