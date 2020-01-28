'use strict';
let lang = 'en';
let ruWeek = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
let enWeek = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';

if (lang === 'ru') {
  console.log(ruWeek)
} else {
  console.log(enWeek)
};

switch (true) {
  case (lang === 'ru'):
    console.log(ruWeek);
    break;
  case (lang === 'en'):
    console.log(enWeek);
    break;
};

let week = [
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];
let result = lang === 'en' ? week[0] : week[1];
console.log(result);

let namePerson = prompt('Введите ваше имя:');
let resultPerson = namePerson === 'Артем' ? 'Директор' :
  namePerson === 'Максим' ? 'Преподаватель' : 'Студент';
console.log(resultPerson);