let assert = require("assert");
let transportFee = require("../transportFee");

describe('transportFee' , function(){
    it('should return the morning shift amount' , function(){
        assert.equal(transportFee('morning'), 'R20');

    });

    it('should return the afternoon shift amount' , function(){
        assert.equal(transportFee('afternoon'), 'R10');

    });

    it('it should return nightshift' , function(){
        //  var none = '0.00';
            assert.equal(transportFee('nightshift'), 'free')
        
    });

});
