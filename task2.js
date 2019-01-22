// @ts-nocheck
var Maker = require("./classmakertask2");
var Client = require("./classclienttask2");
var Reseller = require("./classresellertask2");

var maker = new Maker();
var client = new Client();
var reseller = new Reseller();
const COUNT_DAY = 10;
for (var  numberDay = 0; numberDay < COUNT_DAY; numberDay++) {
	maker.producedOneDay(numberDay);
	client.needOneDay(numberDay); 
	reseller.transmit(client.generatedNeeds[numberDay], maker.generatedMaked[numberDay]);
	maker.balanseOneDay(numberDay, reseller.transfer[numberDay]);
	client.balanseOneDay(numberDay, reseller.transfer[numberDay]);
	reseller.kpd(numberDay);
}

console.table(maker);       // console.log(maker);
console.table(client);      // console.log(client);
console.table(reseller);    //console.log(reseller);