var randOneDay = require('./functask2');

class MyClient {
    // #maxNeed = 120;
    constructor (nameClient, generatedNeeds) {
        this.nameClient = [];
        this._maxNeed = 120;
        this._minNeed = 70;
        this.generatedNeeds = [];
        this.balanseClient = [0];
       
    }
   
    
    needOneDay(i) {
        this.generatedNeeds.push(randOneDay(this._maxNeed, this._minNeed) + this.balanseClient[i]);
        /*
        var a = randOneDay(this._maxNeed, this._minNeed);
        console.log("---------\nхотел    = ", a);
        this.generatedNeeds.push(a + this.balanseClient[j]);
        console.log("заказал  = ", this.generatedNeeds[j]);
        console.log("со вчера = ", this.balanseClient[j]);
        */
    }
    balanseOneDay(genaClient, transferMaker) {
        this.balanseClient.push(genaClient - transferMaker);
    }
};
module.exports = MyClient;