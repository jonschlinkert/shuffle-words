/*!
 * shuffle-words <https://github.com/jonschlinkert/shuffle-words>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var shuffle = require('./');

function match(a, b) {
  return new RegExp('['+a+']').test(b);
}

describe('shuffle', function () {
  it('should shuffle words', function () {
    var fixture = 'foo bar baz';
    match(shuffle(fixture), fixture).should.be.true;
    shuffle(fixture).should.not.equal(fixture);
  });
});