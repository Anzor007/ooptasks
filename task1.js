//var pick01 = require('./test_01.js');


class Question {                            //класс вопросов

    constructor (question, answersOk, answersNo) {

        this.question = question;
        this.answersNo = [answersNo];
        this.answersOk = [answersOk];

    }

    addAnswer(answer, isTrue) {

        isTrue ? this.answersOk.push(answer) : this.answersNo.push(answer) ;

    }

};

var q = new Question('questi_0', 'ansOk_0', 'ansNo_0');             //console.log(q);

q.addAnswer("ansNo_1", 0);      
q.addAnswer("ansOk_1", 1);
q.addAnswer("ansNo_2", 0);      
q.addAnswer("ansOk_2", 1);
q.addAnswer("ansNo_3", 0);
q.addAnswer("ansNo_4", 0);                                          //console.log("-- Object Qwestion ---\n",Object.keys(q));
console.log(q);

class Theme {                                                       // класс темa

    constructor(theme, question) {

        this.theme = theme;
        this.question = [question];

    }

    get questions() {                       

        return this.question;

    }

    set questions(question) {                                       //устанавливаем значение

        this.question.push(question);

    }
    
};

var t = new Theme('Theme 0', q);                                    //console.log("t 1 = ",t);

t.questions = q;                                                    //console.log("t 2 = ", t);                   
t.questions = q;                                                    //console.log("-- Object Theme ---\n",Object.keys(t));
console.log(t);

class Course extends Theme {                                        //класс курсa

    constructor (course, theme) {

        super(course,theme);

    }

};

var c = new Course('Cours_0', t);

c.questions = t;                                                    //console.log(" --1-c-\n", c.questions);              //get

console.log(c);                      
console.log(JSON.stringify(c, null, 4));                            //console.debug(JSON.stringify(c, null, 1));


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