var gulp = require('gulp');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');


gulp.task('default', ['sprite', 'sass', 'watch'], function() {

});

gulp.task('sass', function () {
	gulp.src('./scss/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(''));
});
 
gulp.task('watch', function () {
	gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('sprite', function() {
	var spriteData = 
	gulp.src('img/sprite/*.png') 
		.pipe(spritesmith({
			imgName: 'img/sprite.png',
			cssName: 'sprite.scss',
			cssFormat: 'scss',
			algorithm: 'top-down',
			cssVarMap: function (sprite) {
			sprite.name = 'sprite_' + sprite.name;
		}
	}));
	spriteData.img.pipe(gulp.dest('')); 
	spriteData.css.pipe(gulp.dest('scss/')); 
});