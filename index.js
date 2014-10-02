/*!
 * randomize-words <https://github.com/jonschlinkert/randomize-words>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function randomize(str, letters) {
  var words = str.split(' ');

  if (letters) {
    words = words.map(function(word) {
      return shuffle(word.split('')).join('');
    });
  }

  return shuffle(words).join(' ');
};


/**
 * Fischer-Yates Shuffle. This is my take on it.
 *
 * See: http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 *
 * @param  {Array} `arr`
 * @return {Array}
 */

function shuffle(arr) {
  var len = arr.length - 1;
  for (var i = len; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var end = arr[i];

    if (i !== j) {
      arr[i] = arr[j];
    }

    arr[j] = end;
  }
  return arr;
}
