//var pick01 = require('./test_01.js');


class Question { //класс вопросов

    constructor (question,answersOk) {

        this.question = question;
        this.answersNo = [];
        this.answersOk = [answersOk];
    }
    addAnswer(answer, isTrue) {

        isTrue ? this.answersOk.push(answer) : this.answersNo.push(answer) ;

    }
};

var q = new Question('chto za fignya 1','nifiga');
q.addAnswer("chiconya", 0);
q.addAnswer("chico", 1);
q.addAnswer("chnya", 1);
q.addAnswer("chiconya", 0);
q.addAnswer("chiconya", 0);
q.addAnswer("chiconya", 0);

console.log(q);
console.log("-------\n",Object.keys(q));

class Theme { // класс тем

    constructor(theme, question) {

        this.theme = theme;
        this.question = [question];

    }

    get questions() {       //получаем знач
        return this.question;
    }
    set questions(question) {   //устанавливаем значение
        this.question.push(question);
    }
    //set question
};
var t = new Theme('tema pampers', q);
t.questions = q; //set
console.log(" --1-t-\n", t.questions);  //get
console.log(" --2-t-\n", t); //instance

class Course extends Theme { //класс курса

    constructor (course, theme) {

        super(course,theme);

    }

};

var c = new Course('prevedD medvedD', t);

c.questions = t; //set
console.log(" --1-c-\n", c.questions);  //get
console.log(" --2-c-\n" + c); //instance
console.debug(JSON.stringify(c, null, 1));
/*
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

*/


//module.exports = catFactoryL;

//  Course    =    учебный курс
//  Theme     =    тема учебного курса
//  Issues    =    вопросы учебного курса
//  Answers   =    ответы учебного курса