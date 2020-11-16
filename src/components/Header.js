import PropTypes from 'prop-types';
import React, { Component } from 'react';
import trybeLogo from '../images/trybe-logo.png';

export default class Header extends Component {
  render() {
    const { email, totalValue } = this.props;
    return (
      <header className="wallet-header">
        <img src={ trybeLogo } alt="trybe logo" width="200px" />
        <div>
          <p data-testid="email-field">{`Email:  ${email}`}</p>
          <div>
            <span data-testid="total-field">{`Despesa Total: ${totalValue} `}</span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalValue: PropTypes.number.isRequired,
};
