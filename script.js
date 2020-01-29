'use strict';

const one = function (argument) {
  if (typeof argument === 'string') {
    argument.trim();
    if (argument.lenght > 30) {
      argument.slice(0, 30);
      console.log(argument.concat("..."))
    }
  } else {
    console.log('Это не строка');
  }
};

one();