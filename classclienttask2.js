var randOneDay = require('./functask2');

class MyClient {
    // #maxNeed = 120;
    constructor (nameClient, generatedNeeds) {
        //this.nameClient = [nameClient];
        this._maxNeed = 120;
        this._minNeed = 70;
        this.generatedNeeds = [];
        this.balanseClient = [0];
    }
    needOneDay() {
        this.generatedNeeds.push(randOneDay(this._maxNeed, this._minNeed));
    }
    balanseOneDay(genaMak, transferMaker) {
        this.balanseClient.push(genaMak - transferMaker);
    }
};
module.exports = MyClient;
