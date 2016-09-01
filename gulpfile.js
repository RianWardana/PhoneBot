var gulp = require('gulp');
var polybuild = require('polybuild');

gulp.task('build', function() {
	return gulp.src('index.html')
	.pipe(polybuild({maximumCrush: true, suffix: ''}))
	.pipe(gulp.dest('../cordova/www'))
});

gulp.task('cloneMedia', function() {
	return gulp.src('src/media/*.*')
	.pipe(gulp.dest('../cordova/www/src/media'))
});

gulp.task('cloneImages', function() {
	return gulp.src('img/*.*')
	.pipe(gulp.dest('../cordova/www/img'))
});

gulp.task('cloneCordova', function() {
	return gulp.src('../cordova/config.xml')
	.pipe(gulp.dest(''))
});

gulp.task('cloneAPK', function() {
	return gulp.src('../cordova/platforms/android/build/outputs/apk/android-debug.apk');
	.pipe(gulp.dest('apk'))
});

gulp.task('watch', function() {
	gulp.watch('bower_components/**/*.*', ['build']);
	gulp.watch('src/*.*', ['build']);
	gulp.watch('index.html', ['build']);
	gulp.watch('polymer.json', ['build']);
	gulp.watch('src/media/*.*', ['cloneMedia']);
	gulp.watch('img/*.*', ['cloneImages']);
	gulp.watch('../cordova/config.xml', ['cloneCordova']);
	gulp.watch('../cordova/platforms/android/build/outputs/apk/android-debug.apk', ['cloneAPK']);
});

gulp.task('default', ['build', 'watch']);