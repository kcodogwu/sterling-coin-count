'use strict';

// load modules
const test = require('tape');

const dummy = () => {};

test('Test the coin counting function', assert => {
  assert.equal(
    dummy('13x'),
    'INVALID INPUT',
    'Given invalid input, should return a message that shows invalid input.'
  );

  assert.equal(
    dummy('13p.02'),
    'INVALID INPUT',
    'Given invalid input, should return a message that shows invalid input.'
  );

  assert.equal(
    (dummy('432') !== 'INVALID INPUT') && (dummy('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (dummy('213p') !== 'INVALID INPUT') && (dummy('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (dummy('£16.23p') !== 'INVALID INPUT') && (dummy('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (dummy('£14') !== 'INVALID INPUT') && (dummy('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (dummy('£54.04') !== 'INVALID INPUT') && (dummy('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (dummy('£23.33333') !== 'INVALID INPUT') && (dummy('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    (dummy('001.41p') !== 'INVALID INPUT') && (dummy('432') !== undefined),
    true,
    'Given valid input, should not return a message that shows invalid input.'
  );

  assert.equal(
    dummy('123p'),
    '1 x £1, 1 x 20p, 1 x 2p, 1 x 1p',
    'Given valid input, should return expectted breakdown, starting with the highest coin and then descending till total amount is achieved.'
  );

  assert.equal(
    dummy('£12.34'),
    '6 x £2, 1 x 20p, 1 x 10p, 2 x 2p',
    'Given valid input, should return expectted breakdown, starting with the highest coin and then descending till total amount is achieved.'
  );
});