var randOneDay = require('./functask2');
class MyMaker {
    constructor (nameMaker, generatedMaked) {
        this.nameMaker = [];
        this._maxProduced = 150;
        this._minProduced = 50;      
        this.generatedMaked = [];
        this.balanseMaker = [0];
    }
    producedOneDay(i) { 
        this.generatedMaked.push(randOneDay(this._maxProduced, this._minProduced) + this.balanseMaker[i]); 
    }
    balanseOneDay(genaMak, transferMaker) {
        this.balanseMaker.push(genaMak - transferMaker);
    }

};
module.exports = MyMaker;