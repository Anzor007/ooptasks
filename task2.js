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

	maker.generated();							// Производитель выпустил товар
	client.generated();							// Потребитель построил запрос
	reseller.fromClient = client.needAllDay;	// Поставщик узнает сколько нужно Потребителю
	reseller.fromMaker = maker.producedAllDay;	// Поставщик узнает сколько есть уПроизводителя
	reseller.transmit();						// Поставщик решает сколько будет везти
	client.balanseOneDay = 7 ; 					// (set)
	maker.balanseOneDay = 10;//reseller.balansforMaker; //10;
	client.balanses();
	maker.balanses();
	//client.needAllDay; //get
	//ttclient = client.needAllDay;				// колличество необходимого потребителю товара

	//console.log("ttclient = ", ttclient, numberDay+1);	// колличество необходимого потребителю товара
	//ddclient.push(client);	//delete



	//ttmaker = maker.producedAllDay;
	//console.log("ttmaker = ", ttmaker, numberDay+1);	// колличество необходимого потребителю товара


	maker.threeDay();
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