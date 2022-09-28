// 1 Переменные

// const firstName = 'Artem'; // string
// // const age = 24; // number
// const isProggramer = true; //boolean

// const _orivate = 'private';
// const $dollar = 'dollar';
// const asdas5 = '4';

// const false = 'false';  // error
// const 4asdas = '4sa'; // error

//  2 Мутирование

// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age);
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age);
//
// const lastName = prompt('Введите фамилию');
// alert(firstName +  ' ' + lastName);

// 3 Операторы

// let currentYear = 2022
// const birthYear = 1998
// const age = currentYear  + birthYear;
// console.log(age);
//
// const a = 10;
// const b = 5;
//
// let c = 32;
// c = c + a;
// c += a;


// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(++currentYear);
// console.log(--currentYear);
// console.log(c);

// 4 Основные типы данных
// const isProggramer = true; Булиновое
// const name = 'Artem';  строка
// const age = 24; номер
// let  x ; неопределнное
// null ; null
//
// console.log(typeof isProggramer);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);
// console.log( null);

//  5 Приоритет операторов
// const fullAge = 24;
// const birthYear  = 1998;
// const currenntYear = 2022;
//
//
// const isFullAge = currenntYear  - birthYear >= fullAge;
// console.log(isFullAge);

// 6 Условные операторы
// const courseStatus = 'ready'; //ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('Курс готов и его можно проходить');
// } else if (courseStatus === 'pending') {
//     console.log('Курс в процессе подготовки')
// } else {
//     console.log('ПОШЕЛ НАХУЙ ТОГДА')
// }

// const isReady = true ;
// if(isReady) {
//     console.log('Все заебись');
// } else {
//     console.log('Все хуево');
// }

// Тернарное выражение
// isReady ? console.log('Все заебись') : console.log('Все хуево');

// const num1 = 42;

// const num2 = '42';
//
// console.log(num1 === num2);

// 7 Булевая Логика
// true && true
// true
// true && false
// false
// false && true
// false
// false || true
// true
// true || false
// true
// false || false
// false
// true || true
// true
// false && false
// false
// true && !false
// true

// Функции

// function calculatAge (year) {
//     return 2022 - year;
// }

// console.log(calculatAge(1993));
// console.log(calculatAge(2019));
// console.log(calculatAge(1111));

// function logInfoPerson (name, year) {
//     const age = calculatAge(year)
//     if (age > 0){
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будующее')
//     }
// }
//
// logInfoPerson('Artem', '2023', )
// logInfoPerson('Kirill', '2007' )

// 9 Массивы
//c
// // const cars = new Array('Mazda', 'MB', 'Ford', 'VW');
// console.log(cars.length);
//
// console.log(cars[1]);
// console.log(cars[0]);
// console.log(cars[2]);
//
// cars[0] = 'Porsche';
// console.log(cars);
// cars[3] = 'Mazda';
// cars[100] = 'Zaz';
// console.log(cars);

// 10 Циклы
// const cars = ['Mazda', 'M-B','Ford', 'VW', 'Porsche'];
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }
//
// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
const person = {
    firsName: 'Artem',
    lastname: 'Soldatenko',
    year: 1998,
    languages: ['English', 'Ukraine', 'Spanish'],
    hasWife: false,
    greet: function () {
        console.log('greet from person');
    }

};

const key = 'year';
console.log(person[key]);
person.greet();
person.hasWife = true;
console.log(person.hasWife)
person.fromCountry = 'Ukraine';
console.log(person);