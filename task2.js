// @ts-nocheck
// var randOneDay = require('./functask2');
var Maker = require("./classmakertask2");
var Client = require("./classclienttask2");
var Reseller = require("./classresellertask2");


var maker = new Maker("nameMaker");             
// console.log(maker);

maker.producedOneDay(); maker.producedOneDay(); maker.producedOneDay(); maker.producedOneDay(); maker.producedOneDay();
//maker.producedOneDay(); maker.producedOneDay(); maker.producedOneDay(); maker.producedOneDay(); maker.producedOneDay();

var client = new Client("nameClient");             
// console.log(client);
client.needOneDay();    client.needOneDay();    client.needOneDay();    client.needOneDay();    client.needOneDay();
//client.needOneDay();    client.needOneDay();    client.needOneDay();    client.needOneDay();    client.needOneDay();

var reseller = new Reseller("nameReseller");

reseller.transmit(client.generatedNeeds[0], maker.generatedMaked[0]);   reseller.transmit(client.generatedNeeds[1], maker.generatedMaked[1]);
reseller.transmit(client.generatedNeeds[2], maker.generatedMaked[2]);   reseller.transmit(client.generatedNeeds[3], maker.generatedMaked[3]);
reseller.transmit(client.generatedNeeds[4], maker.generatedMaked[4]);   //reseller.transmit(client.generatedNeeds[5], maker.generatedMaked[5]);
//reseller.transmit(client.generatedNeeds[6], maker.generatedMaked[6]);   reseller.transmit(client.generatedNeeds[7], maker.generatedMaked[7]);
//reseller.transmit(client.generatedNeeds[8], maker.generatedMaked[8]);   reseller.transmit(client.generatedNeeds[9], maker.generatedMaked[9]);

maker.balanseOneDay(maker.generatedMaked[0], reseller.transfer[0]);     maker.balanseOneDay(maker.generatedMaked[1], reseller.transfer[1]);
maker.balanseOneDay(maker.generatedMaked[2], reseller.transfer[2]);     maker.balanseOneDay(maker.generatedMaked[3], reseller.transfer[3]);
maker.balanseOneDay(maker.generatedMaked[4], reseller.transfer[4]);

client.balanseOneDay(client.generatedNeeds[0], reseller.transfer[0]);   client.balanseOneDay(client.generatedNeeds[1], reseller.transfer[1]);
client.balanseOneDay(client.generatedNeeds[2], reseller.transfer[2]);   client.balanseOneDay(client.generatedNeeds[3], reseller.transfer[3]);
client.balanseOneDay(client.generatedNeeds[4], reseller.transfer[4]);   
//maker.balanseOneDay(reseller.transfer[1]);


console.table(maker);       // console.log(maker);
console.table(client);      // console.log(client);
console.table(reseller);    //console.log(reseller);