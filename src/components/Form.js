import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends Component {
  render() {
    const {
      currencyList,
      expenses,
      handleChange,
      saveExpensesToStore,
      isEditing } = this.props;

    return (
      <form className="form">
        <input
          data-testid="value-input"
          type="number"
          id="value-input"
          value={ expenses.value }
          name="value"
          placeholder="Valor"
          onChange={ (e) => handleChange(e.target) }
        />
        <input
          data-testid="description-input"
          id="description-input"
          value={ expenses.description }
          type="text"
          name="description"
          placeholder="Descrição"
          maxLength="40"
          onChange={ (e) => handleChange(e.target) }
        />
        <select
          data-testid="currency-input"
          id="currency-input"
          name="currency"
          placeholder="Moeda"
          defaultValue="default"
          onChange={ (e) => handleChange(e.target) }
        >
          <option disabled value="default">Moeda</option>
          {currencyList.map((currency) => {
            if (currency === 'USDT') return;
            return (
              <option
                data-testid={ currency }
                key={ currency }
                value={ currency }
              >
                {currency}
              </option>);
          })}
        </select>
        <select
          data-testid="method-input"
          name="method"
          id="method-input"
          defaultValue="default"
          onChange={ (e) => handleChange(e.target) }
        >
          <option disabled value="default">Método de pagamento</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name="tag"
          id="tag-input"
          defaultValue="default"
          onChange={ (e) => handleChange(e.target) }
        >
          <option disabled value="default">Categoria</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button type="button" onClick={ saveExpensesToStore }>
          {isEditing ? 'Editar despesa' : 'Adicionar despesa'}
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  currencyList: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.shape({
    currency: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  saveExpensesToStore: PropTypes.func.isRequired,
};
