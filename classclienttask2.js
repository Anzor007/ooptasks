var randOneDay = require('./functask2');

class MyClient {
    constructor () {
        //this.nameClient = [];
        this._maxNeed = 120;
        this._minNeed = 70;
        this.generatedNeeds = [];
        this.balanseClient = [0];
    }
    needOneDay(i) {
        this.generatedNeeds.push(randOneDay(this._maxNeed, this._minNeed) + this.balanseClient[i]);
    }
    balanseOneDay(j, transferMaker) {
        this.balanseClient.push(this.generatedNeeds[j] - transferMaker);
    }
};

module.exports = MyClient;
