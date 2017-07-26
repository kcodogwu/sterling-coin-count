'use strict';

// load modules
import coinCounter from 'coin-counter';

const coinCountForm = document.forms['coin-count-form'];
const amount = coinCountForm.amount;
const resultHtml = document.getElementById('result');

const addEvent = (el, type, handler) => {
  if (el.attachEvent) el.attachEvent('on'+type, handler); 
  else el.addEventListener(type, handler);
};

const hasClass = (el, className) => {
  return el.classList ? 
    el.classList.contains(className) : 
    new RegExp('\\b'+ className+'\\b').test(el.className);
};

const addClass = (el, className) => {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;
};

const submitHandler = (e) => {
  e.preventDefault();

  let result;
  let div;
  let i = 0;

  result = coinCounter(amount.value);

  if (Array.isArray(result)) {
    while (true) {
      div = document.createElement('div');

      if (i < result.length) {
        div.innerText = result[i];
        resultHtml.appendChild(div);
      }
    }
  }
};