const gulp = require('gulp'),
    pug  = require('gulp-pug'),
 	sass = require('gulp-sass'),
	sync = require('browser-sync'),
	nano = require('gulp-cssnano'),
	ren  = require('gulp-rename'),
    coffee = require('gulp-coffee'),
	minify = require('gulp-minify');


const src = 'src';
const config = {
	src: src,
	dist: 'dist',
	parts: src + '/parts',
  	coffee: {
    	bare: false
  	},
  	pug: {
    	pretty: true
  	},
  	sync: {
		server: {
      	baseDir: 'dist'
    	},
		notify: false
	},
  	minify: {
    	ext: {
    		src:'.js',
    		min:'.min.js'
    	}
  	}
};

gulp.task('coffee', function() {
  	gulp.src(config.src + '/coffee/**/*.coffee')
    	.pipe(coffee(config.coffee).on('error', console.error))
    	.pipe(gulp.dest(config.dist + '/coffee'));
});

gulp.task('coffee_parts', function() {
	gulp.src(config.src + '/parts/**/*.coffee')
		.pipe(coffee(config.coffee).on('error', console.error))
		.pipe(gulp.dest(config.dist + '/coffee/parts'));
});

gulp.task('pug', [ 'reload' ], function () {
  	return gulp.src([ config.src + '/view/**/*.pug', '!' + config.src + '/view/**/_*.pug' ])
    	.pipe(pug(config.pug).on('error', console.error))
    	.pipe(gulp.dest(config.dist));
});

gulp.task('html', [ 'reload' ], function () {
  	return gulp.src([ config.src + '/view/**/*.html', '!' + config.src + '/view/**/_*.html' ])
    	.pipe(gulp.dest(config.dist));
});

gulp.task('sass', function () {
	return gulp.src(config.src + '/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(config.dist + '/css'))
		.pipe(sync.stream());
});

gulp.task('css_compress', [ 'sass' ], function () {
	return gulp.src(config.src + '/css/**/*.css')
		.pipe(nano())
		.pipe(ren({ suffix: '.min' }))
		.pipe(gulp.dest(config.dist + '/css'));
});

gulp.task('sync', function () {
	sync(config.sync);
});

gulp.task('watch', function () {
	gulp.watch(config.src + '/sass/**/*.sass', [ 'sass' ]);
	gulp.watch(config.src + '/view/**/*.pug', [ 'pug' ]);
  	gulp.watch(config.src + '/view/**/*.html', [ 'pug' ]);
	gulp.watch(config.src + '/js/**/*.js', [ 'js_compress' ]);
	gulp.watch(config.src + '/coffee/**/*.coffee', [ 'coffee' ]);

	gulp.watch(config.src + '/parts/**/*.coffee', [ 'coffee_parts' ]);
  	gulp.watch(config.src + '/parts/**/*.pug', [ 'pug' ]);
	gulp.watch(config.src + '/parts/**/*.sass', [ 'sass' ]);
});

gulp.task('reload', function () {
  	sync.reload();
});

gulp.task('js_compress', [ 'reload' ], function() {
  	return gulp.src(config.src + '/js/**/*.js')
    	.pipe(minify(config.minify).on('error', console.error))
    	.pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('build', [ 'pug', 'sass' ]);
gulp.task('default', [ 'sync', 'watch' ]);
