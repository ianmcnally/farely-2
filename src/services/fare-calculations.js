import {
  TRANSACTION_MAX,
  RIDE_COST
} from '../constants'
import range from 'lodash.range'

const getPossibleFaresForSpendingRange = (currentBalance, maximumSpend) => {
  const ridesLeftOnCard = (currentBalance > RIDE_COST) ? Math.floor(currentBalance / RIDE_COST) : 0
  const amountOfRidesPossibleWithinBudget = Math.floor(maximumSpend / RIDE_COST)

  return range(ridesLeftOnCard + 1, amountOfRidesPossibleWithinBudget + 1).map(rideCount => ({
    rides: rideCount,
    fare: rideCount * RIDE_COST
  }))
}

const getCostsForFares = (currentBalance, fares) => fares.map(({ rides, fare }) => {
  const costOfFare = fare - currentBalance
  return { rides, cost: costOfFare }
})

const isDollarAmountAMultipleOfFive = dollarAmount => ((dollarAmount * 100) % 5) === 0

const isValidAmountToAdd = (value, maximumValue) => isDollarAmountAMultipleOfFive(value) && (value <= maximumValue)

export const costForFaresInBudget = (currentBalance = 0, maximumSpend = TRANSACTION_MAX) => {
  const maximumAmountToSpend = (maximumSpend > TRANSACTION_MAX) ? TRANSACTION_MAX : maximumSpend
  const possibleFares = getPossibleFaresForSpendingRange(currentBalance, maximumAmountToSpend)
  const possibleCosts = getCostsForFares(currentBalance, possibleFares)
  const validAmountsToAdd = possibleCosts.filter(({ cost }) => isValidAmountToAdd(cost, maximumAmountToSpend))
  return validAmountsToAdd
}
