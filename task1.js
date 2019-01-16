//var pick01 = require('./test_01.js');
 
var arrCourse = {};       //учебный курс
var arrTheme = {};   //тема учебного курса
var arrIssues = {};   //вопросы учебного курса
//var arrAnswers = {};   //ответы учебного курса

class Issues { //класс вопросов

    constructor (iss01) {

        this.iss01 = iss01;

    }

};


class Theme { // класс тем

    constructor (the01) {

        this.the01 = the01;

    }

};


class Course { //класс курса

    constructor (cou01) {

        this.cou01 = cou01;

    }

};

class Answer { // класс ответов
    constructor (name) {

        this.arrAnswers = [];

        this.add = function (name) {

            this.arrAnswers.push(name);

        }
        
    }

};

// создаем экземпляры класса
var ans1 = new Answer();        
ans1.add('otvet_0');
ans1.add('otvet_1');
ans1.add('otvet_2');
console.log('ответы  =', ans1.arrAnswers);




//module.exports = catFactoryL;

//  Course    =    учебный курс
//  Theme     =    тема учебного курса
//  Issues    =    вопросы учебного курса
//  Answers   =    ответы учебного курса