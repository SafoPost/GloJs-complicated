'use strict';

const one = function (argument) {
  if (typeof argument === 'string') {
    argument = argument.trim();
    if (argument.lenght > 30) {
      argument.slice(0, 30);
      console.log(argument + "...");
    } else {
      console.log(argument);
    }
  } else {
    console.log('Это не строка');
  }
};

one();