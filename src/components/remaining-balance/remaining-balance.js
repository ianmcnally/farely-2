import React from 'react'
import PropTypes from 'prop-types'
import CurrencyMaskedInput from 'react-currency-masked-input'

const RemainingBalance = React.memo(({ onChange, value }) =>
  <p>
    <label className="db fw6 lh-copy f5" htmlFor="remaining-balance">
      Current balance
    </label>
    <CurrencyMaskedInput
      className="pa2 w-100 input-reset ba measure b--black-20"
      id="remaining-balance"
      autoFocus
      type="number"
      value={value}
      onChange={onChange}
    />
  </p>
)

RemainingBalance.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default RemainingBalance
