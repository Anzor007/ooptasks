// @ts-nocheck
var Maker = require("./classmakertask2");
var Client = require("./classclienttask2");
var Reseller = require("./classresellertask2");

var maker = new Maker();
var client = new Client();	
var reseller = new Reseller();
const COUNT_DAY = 10;
var ddclient = [];		//delete
var ttclient = [];		//delete
var ttmaker = [];		//delete
console.log("\n ========GO========== \n");	
for (var  numberDay = 0; numberDay < COUNT_DAY; numberDay++) {
	// ЗАМЫКАНИЕ!!! ???
	//var client = new Client();
	console.log("\n --- Maker ---");
	maker.generated();
	maker.balanseOneDay = 10;
	maker.balanses();
	ttmaker = maker.producedAllDay;
	console.log("ttmaker = ", ttmaker, numberDay+1);	// колличество необходимого потребителю товара
	maker.threeDay();
	
	console.log("\n --- Client ---");
	client.generated();
	console.log("client.balanseOneDay = ", client.balanseOneDay = 7 ); //set 
	client.balanses();
	console.log("getter client.needOneDay = ", client.needAllDay); //get
	ttclient = client.needAllDay;				// колличество необходимого потребителю товара
	console.log("ttclient = ", ttclient, numberDay+1);	// колличество необходимого потребителю товара
	ddclient.push(client);	//delete



	console.log("\n --- Reseller ---");
	console.log("\n");
	reseller.fromClient = client.needAllDay;
	reseller.fromMaker = maker.producedAllDay;
	reseller.transmit();
	reseller.threeDey();
	reseller.kpd();

}

// console.table(maker);       
console.log("\nmaker  =\n", maker);
// console.table(client);      
console.log("\nclient =\n", client);
// console.table(reseller);    
console.log("\nreseller =\n", reseller);
// console.table(ddclient);
// console.log("ddclient = \n", ddclient);

