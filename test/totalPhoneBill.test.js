let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function' , function(){
    it('It should return the total phone bill for the given string.' , function(){
        
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
        
      

    });
    
    
    it('Inputed variable(Total phone bill) string is not deeply equal to the given string(total phone bill).'  , function(){
        
      assert.notDeepEqual(totalPhoneBill('call, sms, call, sms, sms'),'R10.00');
      assert.notDeepEqual(totalPhoneBill('call, sms, call, sms, sms'),'  ');


    });

});