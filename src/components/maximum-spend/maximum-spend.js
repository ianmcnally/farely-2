import React, { PropTypes } from 'react'
import CurrencyInput from 'react-currency-masked-input'

const MaximumSpend = ({ onChange, value }) =>
  <p>
    <label className="db fw6 lh-copy f5" htmlFor="maximum-spend">Max to spend</label>
    <CurrencyInput className="pa2 w-100 input-reset ba measure b--black-20" id="maximum-spend" type="number" value={value} onChange={onChange}/>
  </p>

MaximumSpend.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default MaximumSpend
