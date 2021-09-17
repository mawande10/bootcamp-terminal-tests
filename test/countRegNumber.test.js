let assert = require("assert");
 let countRegNumber = require("../countRegNumber"); 

describe('countRegNumber' , function(){
    it('If the test passes, it should count the registration numbers' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519, CJ 812328'), 3)

    });

    it('If the test fails it should not count registration numbers' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519, CJ 812328, CJ 567486'), 4)
        

    });

});
