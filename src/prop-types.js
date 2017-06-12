import PropTypes from 'prop-types'

export const fare = PropTypes.shape({
  cost: PropTypes.number.isRequired,
  rides: PropTypes.number.isRequired
})

export const fares = PropTypes.arrayOf(fare)
