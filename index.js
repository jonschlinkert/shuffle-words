/*!
 * shuffle-words <https://github.com/jonschlinkert/shuffle-words>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function shuffle(str, letters) {
  var words = str.split(' ');

  if (letters) {
    words = words.map(function(word) {
      return shuffle(word.split('')).join('');
    });
  }

  return shuffle(words).join(' ');
};

// see: http://stackoverflow.com/a/6274398/1267639
function shuffle(arr) {
  var len = arr.length;
  var swap;
  var i;

  while (len > 0) {
    i = Math.floor(Math.random() * len);
    len--;
    swap = arr[len];
    arr[len] = arr[i];
    arr[i] = swap;
  }
  return arr;
}