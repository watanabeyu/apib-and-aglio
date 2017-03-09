var gulp = require('gulp'),
    aglio = require('gulp-aglio'),
    rename = require('gulp-rename'),
    rimraf = require('rimraf'),
    ejs = require('gulp-ejs');

var TEMPLATE_FILES = ["apib/*.md"],
    LAYOUT_FILE = 'apib/index.md',
    PUBLISHED_DIR = 'dist';

gulp.task('combine', function(){
  return gulp.src(LAYOUT_FILE)
    .pipe(ejs({},{ ext: '.md' }))
    .pipe(rename('index.md'))
    .pipe(gulp.dest(PUBLISHED_DIR));
});

gulp.task('generate-api-docs', ['combine'], function() {
  return gulp.src(PUBLISHED_DIR + '/index.md')
    .pipe(aglio({
      themeVariables:"streak",
      themeTemplate:"triple"
    }))
    .pipe(gulp.dest(PUBLISHED_DIR));
});

gulp.task('clean', function(cb) {
  rimraf(PUBLISHED_DIR, cb);
});

gulp.task('build', ['clean', 'generate-api-docs']);