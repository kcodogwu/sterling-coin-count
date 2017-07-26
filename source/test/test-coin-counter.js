'use strict';

// load modules
const test = require('tape');
const coinCounter = require('../public/js/coin-counter');

const errorMsg = `INVALID INPUT!

Please enter valid inputs like:  432, 213p, £16.23p, £14, £54.04, £23.33333, 001.41p,...`;

test('Test the coin counting function', assert => {
  assert.equal(
    coinCounter('13x'),
    errorMsg,
    'Given invalid input, should return a message that shows invalid input.'
  );

  assert.equal(
    coinCounter('13p.02'),
    errorMsg,
    'Given invalid input, should return a message that shows invalid input.'
  );

  assert.equal(
    coinCounter('£p'),
    errorMsg,
    'Given invalid input, should return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('432') !== errorMsg) && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('213p') !== errorMsg) && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('£16.23p') !== errorMsg) && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('£14') !== errorMsg) && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('£54.04') !== errorMsg) && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('£23.33333') !== errorMsg) && (coinCounter('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (coinCounter('001.41p') !== errorMsg) && (coinCounter('432') !== undefined),
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