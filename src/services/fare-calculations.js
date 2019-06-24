import { TRANSACTION_MAX, RIDE_COST } from '../constants'

const getFaresForSpendingRange = (currentBalance, maximumSpend) => {
  const ridesLeftOnCard =
    currentBalance > RIDE_COST ? Math.floor(currentBalance / RIDE_COST) : 0
  const amountOfRidesPossibleWithinBudget = Math.floor(maximumSpend / RIDE_COST)
  const fares = []

  for (
    let rideCount = ridesLeftOnCard + 1;
    rideCount <= amountOfRidesPossibleWithinBudget;
    rideCount++
  ) {
    const fare = rideCount * RIDE_COST
    const cost = fare - currentBalance
    if (isValidAmountToAdd(cost, maximumSpend)) {
      fares.push({ rides: rideCount, cost })
    }
  }

  return fares
}

const isDollarAmountAMultipleOfFive = dollarAmount =>
  (dollarAmount * 100) % 5 === 0

const isValidAmountToAdd = (value, maximumValue) =>
  isDollarAmountAMultipleOfFive(value) && value <= maximumValue

export const costForFaresInBudget = (
  currentBalance = 0,
  maximumSpend = TRANSACTION_MAX,
) => {
  const maximumAmountToSpend =
    maximumSpend > TRANSACTION_MAX ? TRANSACTION_MAX : maximumSpend
  return getFaresForSpendingRange(currentBalance, maximumAmountToSpend)
}
