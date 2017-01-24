const gulp = require('gulp');
const git = require('gulp-git');

//add task
gulp.task('addAll', function() {

  //pull source of all files
  return gulp.src('./gulpfile.js')
    .pipe(git.add());

});

//add task
gulp.task('commit', function() {

  //commit source of all files
  return gulp.src('./gulpfile.js')
    .pipe(git.commit('auto Commit message...loading'));

});

//add task
gulp.task('everything', ['addAll', 'commit']);
