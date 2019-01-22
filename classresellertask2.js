var randOneDay = require('./functask2');
class MyReseller {
    constructor (nameReseller) {
        this.nameReseller = [];
        this._maxTransfer = 100;
        this.transfer = [];
    }
    transmit (countClient, countReseller) {
       this.transfer.push(Math.min(...[countReseller, countClient, this._maxTransfer]));

       
       
    }
};

module.exports = MyReseller;
