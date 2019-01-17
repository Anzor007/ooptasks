


class Maker {

    constructor (nameMaker) {
        this.nameMaker = [nameMaker];
    }
    produceOneDay() {
        produce = Math.floor(Math.random()*150);
    }

};

class Reseller {

    constructor (nameReseller) {
        this.nameReseller = [nameReseller];
    }
};

class Client {

    constructor (nameClient) {
        this.nameClient = [nameClient];
    }
};