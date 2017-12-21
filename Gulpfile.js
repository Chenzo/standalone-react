/*

Default watch command:
		$ gulp

Update CacheBuster:
		$ gulp updateCacheBuster


*/





var gulp = require('gulp'),
	//sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    pump = require('pump'),
	replace = require('gulp-replace');
	babel = require('gulp-babel');

var browserSync = require('browser-sync').create();



//Task - compiles SCSS files into a single compressed CSS file with a sourcemap
gulp.task('styles', function() {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest('./www/css/'))
        .pipe(browserSync.stream());        
});



//Task - finds and updates chacheBusterNumber PHP variable in global with current time.
gulp.task('updateCacheBuster', function(){
    var timeInMs = Date.now();
    console.log("refreshing cacheBuster with timeStamp: " + timeInMs);
  	gulp.src(['./www/includes/globals.php'])
	    .pipe(replace(/\$cacheBusterNumber="\d+\";/g, '$cacheBusterNumber="' +  timeInMs + '";'))
	    .pipe(gulp.dest('./www/includes/'))
});



gulp.task('javascripting', function() {
	gulp.src('./src/js/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['env', 'react']
	}).on('error', console.error.bind(console)))
	
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('./www/js'))
	.pipe(uglify())
  	.pipe(rename('scripts.min.js'))
	.pipe(sourcemaps.write('/maps'))
	.pipe(gulp.dest('./www/js/'));
});




gulp.task('js', ['javascripting'], function() {
    console.log("----------------- > javascripting");
});


gulp.task('updateCB', ['updateCacheBuster'], function() {
    console.log("----------------- > Updated Cache Buster!!");
});




/* 

Default Watch Task
------------------
runs the sass and javascript commands on change in the SRC folder

*/
gulp.task('default', ['javascripting'] ,function() { //'styles', 
	browserSync.init({
	    proxy: 'http://localhost:8088'
	});
	gulp.watch('./src/js/**/*.js',['js']);
    //gulp.watch('./src/scss/**/*.scss',['styles']);
    gulp.watch("./www/*.php").on('change', browserSync.reload);
    gulp.watch("./www/*.html").on('change', browserSync.reload);
    gulp.watch("./www/**/*.php").on('change', browserSync.reload);
    gulp.watch("./www/**/*.html").on('change', browserSync.reload);
    gulp.watch("./www/js/**/*.js").on('change', browserSync.reload);
});


