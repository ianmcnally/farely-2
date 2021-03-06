import React from 'react'
import * as AppPropTypes from '../../prop-types'

const defaultFares = []

const getClassNamesForFareItem = (fareIndex, amountOfFares) => {
  let classNames = 'lh-copy pv2 ba bl-0 bt-0 br-0 b--dotted b--black-30'
  const isThisTheLastFare = fareIndex === (amountOfFares - 1)
  if (isThisTheLastFare)
    classNames += ' bb-0'
  return classNames
}

const getDisplayCost = actualCost => actualCost.toFixed(2)

const Additions = ({ fares = defaultFares  }) => (fares.length) ?
  <ul className="list pl0 measure center mt2 mb0">
  {fares.map((fare, idx) =>
    <li className={getClassNamesForFareItem(idx, fares.length)} key={idx}>
      Add {getDisplayCost(fare.cost)} for {fare.rides} rides
    </li>
  )}
  </ul>
  : null

Additions.propTypes = {
  fares: AppPropTypes.fares
}

export default Additions
