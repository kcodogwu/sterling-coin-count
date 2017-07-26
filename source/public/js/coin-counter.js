'use strict';

const coinCounter = (value) => {
  let check = false;
  let isPound = false;
  let strArr = [];
  let beforeDecimalPoint = '';
  let afterDecimalPoint = '';
  let num = 0;
  let i = 0;
  let coinCount = 0;
  let remainder = 0;

  const result = [];

  const commonCoins = [
    { label: '£2', value: 200 },
    { label: '£1', value: 100 },
    { label: '50p', value: 50 },
    { label: '20p', value: 20 },
    { label: '10p', value: 10 },
    { label: '5p', value: 5 },
    { label: '2p', value: 2 },
    { label: '1p', value: 1 }
  ];

  // gets rid of 'p' at the end if any
  if (value.substr(value.length - 1, 1) === 'p') {
    value = value.substr(0, value.length - 1);
  }

  // gets rid of '£' at the end if any
  if (value.substr(0, 1) === '£') {
    value = value.substr(1, value.length - 1);
  }
  
  // check if it's a proper number
  if ((Number.isNaN) && (Number.isFinite)) {
    check = !Number.isNaN(Number(value)) && Number.isFinite(Number(value)) && value.length > 0;
  } else {
    check = !isNaN(Number(value)) && isFinite(Number(value)) && value.length > 0;
  }

  strArr = value.split('.');

  // check if have had more than 1 decimal point
  if (strArr.length > 2) {
    check = false;
  }

  if (!check) {
    return 'INVALID INPUT!';
  } else {
    beforeDecimalPoint = strArr[0];
    afterDecimalPoint = strArr[1] === undefined ? '' : strArr[1];
    
    if (afterDecimalPoint) {
      num += (parseFloat(beforeDecimalPoint) * 100) + parseFloat(afterDecimalPoint);
    } else {
      num += parseFloat(beforeDecimalPoint);
    }

    while (true) {
      if (num === 0) {
        break;
      }

      coinCount = Math.trunc(num/commonCoins[i].value);
      remainder = num % commonCoins[i].value;

      if (coinCount > 0) {
        result.push(`${ Math.trunc(num/commonCoins[i].value) } x ${ commonCoins[i].label }`);
      }

      num = remainder;
      i++;
    }

    return result;
  }
};

export default coinCounter;