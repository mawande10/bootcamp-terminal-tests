let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function' , function(){
    it('Expected to return the number of Years ago, given a year in the past.' , function(){
        
        assert.equal(yearsAgo(1976),42);
        
        assert.equal(yearsAgo(2017),1);
        
        

    });
    
    
     it('Expected result is not deeply equal to the Input value (i.e The input value(years ago) is incorrect).' , function(){
        
        assert.notDeepEqual(yearsAgo(2017),5);
        assert.notDeepEqual(yearsAgo(1996),23);

    });
    
});