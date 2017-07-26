'use strict';

// load modules
import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import coinCounter from './coin-counter';
import coinCountPage from './components/coin-count-page';
import styles from '../style/main.css';

let coinCountForm;
let amount;
let resultHtml;

const hasClass = (el, className) => {
  return el.classList ? 
    el.classList.contains(className) : 
    new RegExp('\\b'+ className+'\\b').test(el.className);
};

const addClass = (el, className) => {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;
};

const CoinCountPage = coinCountPage(React, PropTypes);

const submitHandler = (e) => {
  e.preventDefault();

  let result;
  let div;
  let i = 0;

  result = coinCounter(amount.value);

  if (resultHtml.classList) resultHtml.classList.remove('hide');
  else resultHtml.className = resultHtml.className.replace(new RegExp('\\bhide\\b', 'g'), '');

  while (resultHtml.firstChild) {
    resultHtml.removeChild(resultHtml.firstChild);
  }

  if (Array.isArray(result)) {
    while (true) {
      if (i < result.length) {
        div = document.createElement('div');
        div.innerText = result[i];
        addClass(div, 'result-child');
        resultHtml.appendChild(div);
      } else {
        break;
      }

      i++;
    }
  } else {
    div = document.createElement('div');
    div.innerText = result;
    addClass(div, 'result-child');
    resultHtml.appendChild(div);
  }
};

const coinCountPageProps = {
  actions: { submitHandler }
};

render(<CoinCountPage { ...coinCountPageProps } />, document.getElementById('page'));
coinCountForm = document.forms['coin-count-form'];
amount = coinCountForm.amount;
resultHtml = document.getElementById('result');