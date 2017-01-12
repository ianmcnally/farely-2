import React, { PropTypes } from 'react'

const getClassNamesForInstructions = shouldHideInstructions => {
  let classNames = 'f5 lh-copy measure-narrow'
  if (shouldHideInstructions)
    classNames += ' dn'
  return classNames
}

const Instructions = ({ hide }) =>
  <p className={getClassNamesForInstructions(hide)}>
    Enter your MetroCard’s current balance to calculate the amount to put on it for an exact number of rides.
  </p>

Instructions.propTypes = {
  hide: PropTypes.bool.isRequired
}

Instructions.defaultProps = {
  hide: false
}

export default Instructions
