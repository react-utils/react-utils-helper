var gulp = require('gulp');
var react = require('gulp-react');
 
gulp.task('default', function () {
    return gulp.src('src/components/ComponentHelper/**/*.jsx')
        .pipe(react({harmony:true}))
        .pipe(gulp.dest('lib'));
});