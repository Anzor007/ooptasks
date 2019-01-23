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
    kpd (numDayi) {
        this.kpdReseller.push(this.transfer[numDayi] / this._maxTransfer);
    }
};

module.exports = MyReseller;
