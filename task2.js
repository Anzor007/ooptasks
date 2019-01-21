// @ts-nocheck



class Maker {
    constructor (nameMaker, generatedMaked) {
        //this.nameMaker = [nameMaker];
        this._maxProduced = 150;
        this._minProduced = 50;      
        this.generatedMaked = [];
    }
    producedOneDay() {
        this.generatedMaked.push(Math.floor(Math.random()*(this._maxProduced-this._minProduced))+this._minProduced);
    }
};

var maker = new Maker('nameMaker');             
// console.log(maker);
maker.producedOneDay();
maker.producedOneDay();
maker.producedOneDay();
maker.producedOneDay();
maker.producedOneDay();
maker.producedOneDay();
maker.producedOneDay();
maker.producedOneDay();
maker.producedOneDay();
maker.producedOneDay();
// console.log(maker);
console.table(maker);


class Client {
    // #maxNeed = 120;
    constructor (nameClient, generatedNeeds) {
        //this.nameClient = [nameClient];
        this._maxNeed = 120;
        this._minNeed = 70;
        this.generatedNeeds = [];

    }

    needOneDay() {
        this.generatedNeeds.push(Math.floor(Math.random()*(this._maxNeed-this._minNeed))+this._minNeed);
    }
};


var client = new Client('nameClient');             
// console.log(client);
client.needOneDay();
client.needOneDay();
client.needOneDay();
client.needOneDay();
client.needOneDay();
client.needOneDay();
client.needOneDay();
client.needOneDay();
client.needOneDay();
client.needOneDay();

// console.log(client);
console.table(client);

class Reseller {
    constructor (transfer) {
        this._maxTransfer = 100;
        this.transfer = [];
    }
    
    transmit (nameClient, nameReseller) {
       this.transfer.push(Math.min(nameReseller, Math.min(nameClient, this._maxTransfer)));
    }
    
   
};

var reseller = new Reseller('nameReseller');

reseller.transmit(client.generatedNeeds[0], maker.generatedMaked[0]);
reseller.transmit(client.generatedNeeds[1], maker.generatedMaked[1]);
reseller.transmit(client.generatedNeeds[2], maker.generatedMaked[2]);
reseller.transmit(client.generatedNeeds[3], maker.generatedMaked[3]);
reseller.transmit(client.generatedNeeds[4], maker.generatedMaked[4]);
reseller.transmit(client.generatedNeeds[5], maker.generatedMaked[5]);
reseller.transmit(client.generatedNeeds[6], maker.generatedMaked[6]);
reseller.transmit(client.generatedNeeds[7], maker.generatedMaked[7]);
reseller.transmit(client.generatedNeeds[8], maker.generatedMaked[8]);
reseller.transmit(client.generatedNeeds[9], maker.generatedMaked[9]);
//console.log(reseller);
console.table(reseller);
