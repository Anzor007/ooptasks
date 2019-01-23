var randOneDay = require('./functask2');

class MyMaker {
    constructor () {
        this._maxProduced = 150;    // максимум изготовляемой продукции
        this._minProduced = 50;     // минимум изготовляемой продукции
        this._tmp;
        this.generatedMaked = [];   // кол-во изготовляемой продукции
        this.balanseMaker = 0;      // остаток
        this.producedAll = [];      // кол-во изготовленной продукции с остатком
    }
    // вычисление кол-ва изготовляемой продукции на текущий день
    generated () {
        this._tmp = randOneDay(this._maxProduced, this._minProduced);
        this.generatedMaked.push(this._tmp);
    }
    // вычисление кол-ва изготовляемой продукции c остатком на текущий день
    balanses () {
        this.producedAll.push(this._tmp + this.balanseMaker);
    }
    // кол-ва произведенной продукции за последние 3 дня
    threeDay () {
        var threeD = this.generatedMaked.slice(-3).reduce((a,  b) => (a + b), 0);
        console.log ("threeD = = = ", threeD);
    }
    set balanseOneDay (balanse) {
        this.balanseMaker = balanse;
    }
    // надо подумать
    get producedAllDay () {
        return this.producedAll;
    }
};

module.exports = MyMaker;