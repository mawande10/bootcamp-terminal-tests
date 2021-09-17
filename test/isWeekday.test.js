let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function' , function(){
    it('It should true if the day passed is a Weekday' , function(){
        
        assert.equal(isWeekday('Monday'),true);
        
    });
    
    
     it('It should true if the day passed is a Weekday' , function(){
        
        assert.equal(isWeekday('Friday'),true);
        
    });
    
it('It should return false if the day passed is not a weekday' , function(){
        
 
        assert.equal(isWeekday('Sunday'),false);

    });
it('It should return false if the variable passed in not a Weekday (i.e Name of a person has been passed e.t.c)' , function(){
        
      
        assert.notDeepEqual(isWeekday('John'),false);

    });

});