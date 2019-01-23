// @ts-nocheck
var Maker = require("./classmakertask2");
var Client = require("./classclienttask2");
var Reseller = require("./classresellertask2");

var maker = new Maker();
var client = new Client();
var reseller = new Reseller();

const COUNT_DAY = 10;

for (var  numberDay = 0; numberDay < COUNT_DAY; numberDay++) {
	// ЗАМЫКАНИЕ!!! ???
	maker.generated();									// Производитель выпустил товар
	client.generated();									// Потребитель построил запрос
	reseller.fromClient = client.needAllDay;			// Поставщик узнает сколько нужно Потребителю
	reseller.fromMaker = maker.producedAllDay;			// Поставщик узнает сколько есть уПроизводителя
	reseller.transmit();								// [3] количество доставленного товара за день	// Поставщик решает сколько будет везти
	client.balanseOneDay = reseller.balanseforClient;	// Поставщик не довез товар потребителю
	maker.balanseOneDay = reseller.balansforMaker; 		// Остаток Производителя
	client.balanses();									// [2] кол-во необходимого потребителю товара
	maker.balanses();									// [1] кол-во товара у производителя
	maker.threeDay();									// [4] кол-ва произведенного товара за последние 3 дня
	reseller.threeDey();								// [5] количество доставленного товара за последние 3 дня
	reseller.kpd();										// [6] КПД посредника
}

var ObjectforPrint = {};
ObjectforPrint.maker = maker.producedAll;
ObjectforPrint.client = client.NeedAll;
ObjectforPrint.reseller = reseller.transfer;
ObjectforPrint.maker3D = maker.producedThreeDay;
ObjectforPrint.reseller3D = reseller.transferThreeDay;
ObjectforPrint.kpd = reseller.kpdReseller;
console.table(ObjectforPrint);
/*
console.log(maker);
console.log(client);
console.log(reseller);
*/
/*
console.table(maker);
console.table(client);
console.table(reseller);
*/


