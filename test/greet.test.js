let assert = require("assert");
let greet = require("../greet");

describe('The greet function' , function(){
    it('should return "Hello, Mawande" when I greet Mawande' , function(){
        
        assert.equal('Hello, Mawande',greet('Mawande'));

    });

    it('should return "Hello, Sibusiso" when I greet Sibusiso' , function(){
        
        assert.equal('Hello, Sibusiso',greet('Sibusiso'));

    });

    it('should return "Hello" when no name is entered' , function(){
        
        assert.equal('Hello',greet());

    });

});
