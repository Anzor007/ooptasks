//var pick01 = require('./test_01.js');

var Answers = function (answ01) {         //создали класс

    this.answ01 = answ01;
     
    //console.log("otvet01");

};

//определяем метод goodAnsw() для класса Answers
Answers.prototype.goodAnsw = function () {

    console.log('правильный ответ', this.answ01);
}

// создаем экземпляры класса
var answer1 = new Answers('otv1');        
var answer2 = new Answers('otv2');

//выводим свойства ancw01 в консоль
console.log('ответ 1 =', answer1.answ01);
console.log('ответ 2 =', answer2.answ01);


//вызываем метод goodAnsw() класса Answers
answer1.goodAnsw();
answer2.goodAnsw();

//module.exports = catFactoryL;

//  Course    =    учебный курс
//  Theme     =    тема учебного курса
//  Issues    =    вопросы учебного курса
//  Answers   =    ответы учебного курса