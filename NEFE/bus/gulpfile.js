var gulp = require('gulp');
// 引入the gulp-sass 插件
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


// 编译sass文件
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // 获取 app/scss 及其子目录下的全部.scss文件
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// 监视文件更新，自动编译刷新浏览器
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // HTML 或 JS 文件改变时自动刷新浏览器
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

// 自动刷新浏览器
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})