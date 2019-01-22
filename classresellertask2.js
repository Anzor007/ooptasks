var randOneDay = require('./functask2');

class MyReseller {
    constructor () {
        this._maxTransfer = 100;
        this.transfer = [];
        this.kpdReseller = [];
    }
    transmit (countClient, countReseller) {
       this.transfer.push(Math.min(...[countReseller, countClient, this._maxTransfer]));
    }
    kpd (i) {
        this.kpdReseller.push(this.transfer[i] / this._maxTransfer);
    }
};

module.exports = MyReseller;
