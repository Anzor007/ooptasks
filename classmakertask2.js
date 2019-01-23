var randOneDay = require('./functask2');

class MyMaker {
    constructor () {
        this._maxProduced = 150;    // максимум изготовляемой продукции
        this._minProduced = 50;     // минимум изготовляемой продукции
        this._tmp;
        this.generatedMaked = [];   // кол-во изготовляемой продукции
        this.balanseMaker = 0;      // остаток
        this.producedAll = [];      // кол-во изготовленной продукции с остатком
        this.producedThreeDay = [];
    }
    // вычисление кол-ва изготовляемой продукции на текущий день
    generated () {
        this._tmp = randOneDay(this._maxProduced, this._minProduced);
        this.generatedMaked.push(this._tmp);
    }
    // [1] кол-во товара у производителя
    balanses () {
        this.producedAll.push(this._tmp + this.balanseMaker);
    }
    // [4] кол-ва произведенного товара за последние 3 дня
    threeDay () {
        var sumThreeDay = this.generatedMaked.slice(-3).reduce((a,  b) => (a + b), 0);
        this.producedThreeDay.push(sumThreeDay);
    }
    // надо подумать
    set balanseOneDay (balanse) {
        this.balanseMaker = balanse;
    }
    // надо подумать
    get producedAllDay () {
        return this.producedAll.slice(-1);      // slice(-1)    ???
    }
};

module.exports = MyMaker;