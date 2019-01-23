 var randOneDay = require('./functask2');

class MyClient {
    constructor () {
        this._maxNeed = 120;        // максимум необходимой продукции
        this._minNeed = 70;         // минимум необходимой продукции
        this._tmp ;
        this.generatedNeeds = [];   // кол-во необходимой продукции
        this.balanseClient = 0;     // недобор продукции
        this.NeedAll = [];          // кол-во необходимой продукции с недобором
    }
    // вычисление кол-ва необходимой продукции на текущий день
    generated () {
        this._tmp = randOneDay(this._maxNeed, this._minNeed);
        this.generatedNeeds.push(this._tmp);
    }
    // [2] кол-во необходимого потребителю товара
    balanses () {
        this.NeedAll.push(this._tmp + this.balanseClient);
    }
    // надо подумать
    set balanseOneDay (balanse) {
        this.balanseClient = balanse;
    }
    // надо подумать
    get needAllDay () {
        return this.NeedAll.slice(-1);                  // slice(-1) ???
    }
};

module.exports = MyClient;
