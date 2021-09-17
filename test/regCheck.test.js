let assert = require("assert");
let regCheck = require("../regCheck");

var isGP = regCheck('DV 23 NB GP', 'GP');

//should print true
console.log(isGP);

var isMP = regCheck('DV 23 LP GP', 'MP');

//should print false
console.log(isMP);

// should return false
var isBellville = regCheck('CY 189-012', 'CY');

//should return false
var isDurban = regCheck('CY 189-012', 'ND');

describe('regCheck' , function(){
    it('should check if the regNumber of MP' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'MP') ,false);

    });

    it('it should check if the regNumber is from GP' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'), true); 

    });

});
