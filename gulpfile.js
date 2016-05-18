/*
|--------------------------------------------------------------------
| SET DEPENDENCIES
|--------------------------------------------------------------------
*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');
var rename = require("gulp-rename");
var gulpif = require('gulp-if');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var glob = require('glob');
var streamify = require('gulp-streamify');
var runSequence = require('run-sequence');

var minify = true;

/*
|--------------------------------------------------------------------
|  DELETE DIST FOLDER
|--------------------------------------------------------------------
*/

gulp.task('deleteDist', function(){
	return del('dist/');
});

/*
|--------------------------------------------------------------------
|  JS
|--------------------------------------------------------------------
*/

gulp.task('js-process', function() {
	var files = glob.sync('./dev/js/*.js');
	files.map(function(file) {
		var name = file.replace("./dev/js/", "");
		name = name.replace(".js", "");
		return browserify({entries: file})
		.transform("babelify", {presets: ["es2015"]})
		.bundle()
		.pipe(source(file))
		.pipe(gulpif(minify, rename({ 
			dirname: "",
			basename: name,
			suffix: ".min",
			extname: ".js"
		}), rename({ 
			dirname: "",
			basename: name,
			extname: ".js"
		})))
	    	.pipe(gulpif(minify, streamify(uglify())))
	    	.pipe(gulp.dest('./dist/js/'));
	});
});

// Copy Across specific JS files
gulp.task('js-copy', function() {
	// Copy all non-directory files
	gulp.src('dev/js/*.js')
    	.pipe(gulpif(minify, rename({ suffix: '.min' }), gulp.dest('./dist/js/')))
    	.pipe(gulpif(minify, uglify()))
    	.pipe(gulpif(minify, gulp.dest('./dist/js/')));
});

gulp.task('js', function(){
	runSequence(
		"js-process",
		"js-copy"
	);
});

/*
|--------------------------------------------------------------------
|  MISC
|--------------------------------------------------------------------
*/

// Copy Misc Files Task
gulp.task('copy', function() {
	// Copy all non-directory files
	gulp.src('dev/*.+(xml|txt|json|php|html)')
	.pipe(gulp.dest('dist/'));
});

/*
|--------------------------------------------------------------------
|  PRODUCTION FUNCTIONS
|--------------------------------------------------------------------
*/

// Here we pull everything together into generic watch and build functions

// WATCH FUNCTION
gulp.task("watch", function() {
	gulp.watch('dev/js/**/*.html',['copy']);
	gulp.watch('dev/js/**/*.css',['copy']);
	gulp.watch('dev/js/**/*.js',['js']);
});

// BUILD FUNCTION
gulp.task('build',function() {
	runSequence(
		// Delete Dist Folder
		"deleteDist",	 
		// Run other tasks asynchronously 
		["js", "copy"]
	);
});