var spawn = require('child_process').spawn,
    gulp = require('gulp'),
    gutil = require('gulp-util');

var exitcode = 0;

gulp.task('test', function () {
    var tests = ['tests.js'];

    var casperChild = spawn('casperjs', ['test', '--xunit=xunit.xml'].concat(tests));

    casperChild.stdout.on('data', function (data) {
        gutil.log('CasperJS:', data.toString().slice(0, -1)); // Remove \n
    });

    casperChild.on('close', function (code) {
    	exitcode = code;

        process.emit('exit');
    });
});


//Just to be sure about exit statuses
process.on('exit', function () {
  process.nextTick(function () {
    process.exit(exitcode)
  });
});
