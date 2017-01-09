import React from 'react'
import * as AppPropTypes from '../../prop-types'

const defaultFares = []

const Additions = ({ fares = defaultFares  }) =>
  (fares.length) ?
  <ul>
  {fares.map(fare =>
    <li key={fare.rides}>Add {fare.cost.toFixed(2)} for {fare.rides} rides</li>
  )}
  </ul>
  : null

Additions.propTypes = {
  fares: AppPropTypes.fares
}

export default Additions
