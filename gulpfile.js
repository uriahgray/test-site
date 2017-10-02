var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("you ran the gulp task");
})

gulp.task('html', function(){
  console.log("you created html");
});

gulp.task('styles', function(){
  console.log('updates styles');
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });

});
