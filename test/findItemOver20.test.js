let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemOver20 function' , function(){
    it('It should return products that have quantity higher than the threshold given.', function(){
  
    assert.equal(findItemsOver20(
    [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
    ],20),2);
    });
    
    
    
    
    it('Expected result is not deeply equal to the input threshold.' , function(){
        
        assert.notDeepEqual(findItemsOver20(
    [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
    ],30),1000);
        assert.notDeepEqual(findItemsOver20(
    [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
    ],30),-8);

    });
});