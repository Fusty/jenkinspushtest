casper.test.begin('Homepage Existence', 2, function(test) {
    casper.start('http://advancelocal.ethode.com', function() {
        test.assertSelectorHasText('h1', 'Advance Local');
    });

    casper.then(function(){
    	test.assertTitle("Advance Local - Dashboard", "Advance Local Dashboard Title Incorrect");
    });

    casper.run(function() {
        test.done();
    });
});
