'use strict';
const result = [];

const assert = (value, description) => {
  let entry = '';

  entry = value ? `PASS: ${ description }` : `FAIL: ${ description }`;
  result.push(entry);
  console.log(entry);
};

assert(true, 'The test suite is running.');
assert(false, 'Fail!');