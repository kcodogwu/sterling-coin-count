'use strict';

// load modules
import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import coinCounter from './coin-counter';
import coinCountPage from './components/coin-count-page';
import styles from '../style/main.css';

let coinCountForm; // variable to hold the coin-count-form DOM element
let amount; // variable to hold the DOM element where user supplies input
let resultHtml; // variable hold the DOM element that shows the result of the operation

/**
 * Function to determine if DOM element
 * has a certain class
 * 
 * @param {Object} el - DOM element
 * @param {String} className - class name to be searched for
 */
const hasClass = (el, className) => {
  return el.classList ? 
    el.classList.contains(className) : 
    new RegExp('\\b'+ className+'\\b').test(el.className);
};
  
/**
 * Function to add a class to a DOM element
 * 
 * @param {Object} el - DOM element
 * @param {String} className - class name to be added
 */
const addClass = (el, className) => {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;
};

const CoinCountPage = coinCountPage(React, PropTypes); // create coin count page from component

/**
 * Event handler that is called when the form in the 
 * coin count page is submitted
 * 
 * @param {Object} e - event object
 */
const submitHandler = (e) => {
  e.preventDefault();

  let result; // variable to hold result from the coin counter function
  let div; // variable to hold child div elements to be appended
  let i = 0; // loop iterator

  result = coinCounter(amount.value); // get the result from the coin counter function

  // make result area visible
  if (resultHtml.classList) resultHtml.classList.remove('hide');
  else resultHtml.className = resultHtml.className.replace(new RegExp('\\bhide\\b', 'g'), '');

  // remove any child DOM element in the result element
  while (resultHtml.firstChild) {
    resultHtml.removeChild(resultHtml.firstChild);
  }

  if (Array.isArray(result)) { // if an array, it holds coin count
    while (true) {
      if (i < result.length) {
        div = document.createElement('div'); // create new div element
        div.innerText = result[i]; // set div content
        addClass(div, 'result-child'); // add it's class
        resultHtml.appendChild(div); // add as child element
      } else {
        break;
      }

      i++;
    }
  } else { // otherwise, show invalid message
    div = document.createElement('div'); // create new div element
    div.innerText = result; // set div content
    addClass(div, 'result-invalid'); // add it's class
    resultHtml.appendChild(div); // add as child element
  }
};

// props for CoinCountPage component
const coinCountPageProps = {
  actions: { submitHandler }
};


render(<CoinCountPage { ...coinCountPageProps } />, document.getElementById('page')); // render the CoinCountPage component
coinCountForm = document.forms['coin-count-form']; // get coin-count-form DOM element
amount = coinCountForm.amount; // get DOM element where user supplies input
resultHtml = document.getElementById('result'); // get DOM element that shows the result of the operation