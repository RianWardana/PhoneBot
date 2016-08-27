var gulp = require('gulp');
var polybuild = require('polybuild');

gulp.task('build', function() {
	return gulp.src('index.html')
	.pipe(polybuild({maximumCrush: true, suffix: ''}))
	.pipe(gulp.dest('../cordova/www'))
});

gulp.task('watch', function() {
	gulp.watch('bower_components/**/*.*', ['build']);
	gulp.watch('src/**/*.*', ['build']);
	gulp.watch('index.html', ['build']);
	gulp.watch('polymer.json', ['build']);
});

gulp.task('default', ['build', 'watch']);