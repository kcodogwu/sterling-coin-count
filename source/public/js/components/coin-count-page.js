'use strict';

// load modules


const coinCountPageFactory = (React, PropTypes) => {
  const { func, object, shape } = PropTypes;

  const coinCountPage = props => ({
    props,
    render() {
      const { submitHandler } = props.actions;

      return (
        <div id="wrapper">
          <header><h1>Sterling Coin Count</h1></header>
          <div id="content" action="#" method="POST" onSubmit={ submitHandler }>
            <form id="coin-count-form">
              <label>
                <span>Enter a pound sterling amount below</span>
                <input type="text" name="amount" id="amount" />
              </label>
              <input type="submit" value="Get coin count" name="submitButton" />
            </form>
            <div id="result" className="hide"></div>
          </div>
        </div>
      );
    }
  });

  coinCountPage.propTypes = {
    actions: shape({
      submitHandler: func.isRequired
    })
  };

  return coinCountPage;
};

export default coinCountPageFactory;