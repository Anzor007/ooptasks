console.log('jsdhgf \t \t dadfghf\n c= ');

var languages = {
    csharp: { name: "C#", paradigm: "object-oriented" },
    fsharp: { name: "F#", paradigm: "functional" }
};
console.log(languages);
console.table(languages);


console.info('Информационное сообщение');
console.warn('Предупреждение о чём-либо');
console.error('Какая-то ошибка');

console.group('Группа 1');

	console.group('Группа 2');
		console.log('Сообщение 1');
		console.log('Сообщение 2');
		console.log('Сообщение 3');
	console.groupEnd();

	console.group('Группа 3');
		console.log('Сообщение 1');
		console.log('Сообщение 2');
		console.log('Сообщение 3');
	console.groupEnd();

    let kv = [];
    for (let i = 0; i < 5; i++) {
        kv.push(i * i);
    }
    console.table(kv);
    
    
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    let vasya = new Person("Василий", "Иванович");
    let petka = new Person("Петька", "Семёнович");
    let anka = new Person("Анька", "Пулемётчица");
    
    console.table([vasya, petka, anka]);