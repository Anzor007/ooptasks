// @ts-nocheck
var Maker = require("./classmakertask2");
var Client = require("./classclienttask2");
var Reseller = require("./classresellertask2");

var maker = new Maker();
var client = new Client();	
var reseller = new Reseller();
const COUNT_DAY = 3;
var dd = [];
var ttclient = [];
var ttmaker = [];
for (var  numberDay = 0; numberDay < COUNT_DAY; numberDay++) {
	//var client = new Client();	
	maker.generated();
	maker.balanseOneDay = 0;
	maker.balanses();
	ttmaker = maker.producedAllDay;
	console.log("ttmaker = ", ttmaker, numberDay+1);	// колличество необходимого потребителю товара

	console.log("\n");
	maker.threeDay();
	console.log("\n");

	client.generated();
	console.log("client.balanseOneDay = ", client.balanseOneDay = 7 ); //set 
	client.balanses();
	console.log("client.needOneDay = ", client.needAllDay); //get
	ttclient = client.needAllDay;				// колличество необходимого потребителю товара
	console.log("ttclient = ", ttclient, numberDay+1);	// колличество необходимого потребителю товара
	dd.push(client);

		
	/*maker.producedOneDay(numberDay);
	client.needOneDay(numberDay); 
	reseller.transmit(client.generatedNeeds[numberDay], maker.generatedMaked[numberDay]);
	maker.balanseOneDay(numberDay, reseller.transfer[numberDay]);
	client.balanseOneDay(numberDay, reseller.transfer[numberDay]);
	reseller.kpd(numberDay);

	const sum = reseller.transfer
		.filter(item => {

		})
		.reduce((acc, item, index) => {
			return acc + item;
		}, 0);
		*/
}

// console.table(maker);       
console.log("maker  =\n", maker);
// console.table(client);      
console.log("client =\n", client);
// console.table(reseller);    
// console.log("reseller =\n", reseller);
// console.table(dd);
// console.log("dd = \n", dd);

