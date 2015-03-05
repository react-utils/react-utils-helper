var gulp = require('gulp');
var react = require('gulp-react');
 
gulp.task('default', function () {
    return gulp.src([
    		'src/components/ComponentHelper/**/*.jsx',
    		'src/components/ComponentHelper/index.js',
    		'src/mixins/formMixin.js'])
        .pipe(react({harmony:true}))
        .pipe(gulp.dest('lib'));
});