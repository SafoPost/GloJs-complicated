'use strict';

const one = function (argument) {
  if (typeof argument === 'string') {
    argument = argument.trim();
    if (argument.length > 30) {
      console.log(argument.slice(0, 30) + "...");
    } else {
      console.log(argument);
    }
  } else {
    console.log('Это не строка');
  }
};

one('    bfzjbnkjbnldkblkb lzjn    ');