// @ts-nocheck



class Maker {
    constructor (nameMaker, maxGenerate, minGenerate) {
        this.nameMaker = [nameMaker];
        this.generated = [];
        //this.maxGenerate = maxGenerate;
        //this.minGenerate = minGenerate;
    }
    produceOneDay(maxGenerate, minGenerate) {
        this.generated.push(Math.floor(Math.random()*(maxGenerate-minGenerate))+minGenerate);
    }
    
};
const max = 150;
const min = 50;
var q = new Maker('name1');             
console.log(q);
q.produceOneDay(min, max);      
q.produceOneDay(min, max);      
q.produceOneDay(min, max);      
q.produceOneDay(min, max);      
q.produceOneDay(min, max);      
q.produceOneDay(min, max);      
q.produceOneDay(min, max);   
q.produceOneDay(min, max);      
q.produceOneDay(min, max);      
q.produceOneDay(min, max);   
console.log(q);
console.table(q);
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