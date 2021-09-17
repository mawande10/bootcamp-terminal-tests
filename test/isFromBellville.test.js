let assert = require("assert");
let isFromBellville = require("../isFromBellville");

assert.equal(isFromBellville('CY 123'), true);
assert.equal(isFromBellville('CJ 123'), false);

describe('isFromBellville' , function(){
    it('If the test passes it should write the registration number of bellville' , function(){
        assert.equal(isFromBellville("CY 123"), true);

    });

    it('If the test fails it should return the wrong registration' , function(){
        assert.equal(isFromBellville('CJ 123'), false)

    });

    it('should not give an error on an empty space' , function(){
        var name = ""; 
        assert.equal("", isFromBellville(name));
        

    });

});
