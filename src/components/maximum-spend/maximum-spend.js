import React from 'react'
import PropTypes from 'prop-types'
import CurrencyMaskedInput from 'react-currency-masked-input'

const MaximumSpend = ({ onChange, value }) => (
  <p className="mb0">
    <label className="db fw6 lh-copy f5" htmlFor="maximum-spend">
      Max to spend
    </label>
    <CurrencyMaskedInput
      className="pa2 w-100 input-reset ba measure b--black-20"
      id="maximum-spend"
      type="number"
      value={value}
      onChange={onChange}
    />
  </p>
)

MaximumSpend.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default MaximumSpend
