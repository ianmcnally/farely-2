import {
  BONUS_MIN,
  BONUS_PERCENT,
  TRANSACTION_MAX,
  RIDE_COST
} from '../constants'
import { faresForEvenRidesWithinRange } from './fare-calculations'

describe('faresForEvenRidesWithinRange', () => {

  describe('with a zero current balance', () => {
    const balance = 0
    const maximumSpend = 40
    let fares

    beforeAll(() => {
      fares = faresForEvenRidesWithinRange(balance, maximumSpend)
    })

    it.only('returns fares from one ride to maximum spend', () => {
      expect(fares).toEqual([
        { rides: 1, cost: 2.75 },
        { rides: 2, cost: 5.50 },
        { rides: 9, cost: 22.30 },
        { rides: 11, cost: 27.25 }
      ])
    })

  })

  describe('with a current balance below the maximum spend', () => {
  })

  describe('with a current balance above the maximum spend', () => {
  })

  describe('when a fare is above the bonus minimum', () => {
  })

  describe('when a fare is below the bonus minimum', () => {
  })

  describe('when a maximum spend value is not specified', () => {
  })

  describe('when a fare would exceed the transaction maximum', () => {
  })

})
