'use strict';

// load modules
const test = require('tape');
const coinCounter = require('../public/js/coin-counter');

test('Test the coin counting function', assert => {
  assert.equal(
    coinCounter('13x'),
    'INVALID INPUT!',
    'Given invalid input, should return a message that shows invalid input.'
  );

  assert.equal(
    coinCounter('13p.02'),
    'INVALID INPUT!',
    'Given invalid input, should return a message that shows invalid input.'
  );

  assert.equal(
    coinCounter('£p'),
    'INVALID INPUT!',
    'Given invalid input, should return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('432') !== 'INVALID INPUT!') && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('213p') !== 'INVALID INPUT!') && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('£16.23p') !== 'INVALID INPUT!') && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('£14') !== 'INVALID INPUT!') && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('£54.04') !== 'INVALID INPUT!') && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('£23.33333') !== 'INVALID INPUT!') && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('001.41p') !== 'INVALID INPUT!') && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    coinCounter('123p').join(', '),
    '1 x £1, 1 x 20p, 1 x 2p, 1 x 1p',
    'Given valid input, should return expectted breakdown, starting with the highest coin and then descending till total amount is achieved.'
  );

  assert.equal(
    coinCounter('£12.34').join(', '),
    '6 x £2, 1 x 20p, 1 x 10p, 2 x 2p',
    'Given valid input, should return expectted breakdown, starting with the highest coin and then descending till total amount is achieved.'
  );

  assert.end();
});