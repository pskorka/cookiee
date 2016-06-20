var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    es = require('event-stream');
    livereload = require('gulp-livereload');

function error_handler(error) {
    console.log(error.toString());
    this.emit('end');
}

var CONFIG = {
    src: {
        sass: 'src/scss/',
        css: 'src/css/',
        js: 'src/js/',
        jsLibs: 'src/js/libs/',
        jquery: 'node_modules/jquery/dist/',
        jscookie: 'node_modules/js-cookie/src/'
    },
    dest: {
        css: {
            file: 'cookiee.css',
            dir: 'dist/css/'
        },
        js: {
            file: 'cookiee.js',
            dir: 'dist/js/',
            dirLibs: 'dist/js/libs/'
        }
    },
    docs: {
        css: {
            file: 'cookiee.css',
            dir: 'docs/css/'
        },
        js: {
            file: 'cookiee.js',
            dir: 'docs/js/',
            dirLibs: 'docs/js/libs/'
        }
    }
};

gulp.task('Generate-CSS', ['sass'], function () {
    return gulp.src(CONFIG.src.css + '*.css')
        .pipe(cssmin())
        .on('error', error_handler)
        .pipe(rename({
            suffix: '.min'
        }))
        .on('error', error_handler)
        .pipe(gulp.dest(CONFIG.dest.css.dir))
        .pipe(gulp.dest(CONFIG.docs.css.dir))
        .pipe(notify({
            title: 'Cookiee',
            subtitle: 'success',
            message: 'CSS updated',
            onLast: true
        }))
        .pipe(livereload());
});

gulp.task('sass', function () {
    return gulp.src(CONFIG.src.sass + '*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .on('error', error_handler)
        .pipe(gulp.dest(CONFIG.src.css))
        .pipe(gulp.dest(CONFIG.dest.css.dir))
});

function withJsCookies() {
    return gulp.src([CONFIG.src.jscookie + 'js.cookie.js', CONFIG.src.js + '*.js'])
        .pipe(concat('cookiee.js'))
        .on('error', error_handler)
        .pipe(gulp.dest(CONFIG.dest.js.dir))
        .pipe(gulp.dest(CONFIG.docs.js.dir))
}

function noJsCookies() {
    return gulp.src([CONFIG.src.js + '*.js'])
        .pipe(concat('cookiee-no-js.cookie.js'))
        .on('error', error_handler)
        .pipe(gulp.dest(CONFIG.dest.js.dir))
}

gulp.task('Generate-JS', function() {
    return es.merge(withJsCookies(), noJsCookies())
        .pipe(uglify())
        .on('error', error_handler)
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(CONFIG.dest.js.dir))
        .pipe(notify({
            title: 'Cookiee',
            subtitle: 'success',
            message: 'JS updated',
            onLast: true
        }))
        .pipe(livereload());
});


gulp.task('default', function () {
    gulp.watch(CONFIG.src.sass + '**/*.scss', function () {
        gulp.run('Generate-CSS');
    });

    gulp.watch(CONFIG.src.js + '**/*.js', function () {
        gulp.run('Generate-JS');
    });

    livereload.listen();
});


