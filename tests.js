casper.test.begin('Homepage Existence', 1, function(test) {
    casper.start('http://advancelocal.ethode.com', function() {
        test.assertSelectorHasText('h1', 'Advance Local');
    });

    casper.run(function() {
        test.done();
    });
});
