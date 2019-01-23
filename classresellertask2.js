var randOneDay = require('./functask2');

class MyReseller {
    constructor () {
        this._maxTransfer = 100;
        this._tmp;
        this.transfer = [];         // [3] количество доставленного товара за день
        this.kpdReseller = [];      // [6] КПД посредника
        this.transferThreeDay = []; // [5] количество доставленного товара за последние 3 дня
        this.needClient;
        this.prodecedMAker;
    }
    // заявка потребителя на продукцию
    set fromClient (dataClient) {
        this.needClient = dataClient;
    }
    // возможности производителя
    set fromMaker (dataMaker) {
        this.prodecedMAker = dataMaker;
    }
    // [5] количество доставленного товара за последние 3 дня
    threeDey () {
        var sumThreeDay = this.transfer.slice(-3).reduce((a,  b) => (a + b), 0);
        this.transferThreeDay.push(sumThreeDay);
    }
    // [3] количество доставленного товара за день
    transmit () {
        this._tmp = Math.min(...[this.needClient, this.prodecedMAker, this._maxTransfer]);
        this.transfer.push(this._tmp);
    }
    // [6] КПД посредника
    kpd () {
        this.kpdReseller.push(this._tmp / this._maxTransfer);
    }
    // Остаток для производителя
    get balansforMaker () {
        return this.prodecedMAker - this._tmp;
    }
    // Недовоз клиенту
    get balanseforClient () {
        return this.needClient - this._tmp;
    }
};

module.exports = MyReseller;
