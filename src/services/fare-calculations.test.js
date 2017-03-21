import {
  BONUS_MIN,
  BONUS_PERCENT,
  TRANSACTION_MAX,
  RIDE_COST
} from '../constants'
import { costForFaresInBudget } from './fare-calculations'
import last from 'lodash.last'

describe('costForFaresInBudget', () => {

  describe('with a zero current balance', () => {
    const balance = 0
    const maximumSpend = 40
    let costs

    beforeAll(() => {
      costs = costForFaresInBudget(balance, maximumSpend)
    })

    it('returns costs from one ride to maximum spend', () => {
      expect(costs).toEqual([
        {cost: 2.75, rides: 1},
        {cost: 32.35, rides: 6},
        {cost: 37.75, rides: 7}
      ])
    })

  })

  describe('with a current balance below the maximum spend', () => {
    const balance = 25
    const maximumSpend = 40
    let costs

    beforeAll(() => {
      costs = costForFaresInBudget(balance, maximumSpend)
    })

    it('returns costs from the current balance', () => {
      expect(costs).toEqual([
        { rides: 10, cost: 2.50 }
      ])
    })

  })

  describe('with a maximum spend above the transaction maximum', () => {
    const balance = 0
    const maximumSpend = 100
    let highestCost

    beforeAll(() => {
      const costs = costForFaresInBudget(balance, maximumSpend)
      highestCost = last(costs).cost
    })

    it('returns costs capped at the transaction max', () => {
      expect(highestCost).toBeLessThan(TRANSACTION_MAX)
    })

  })

})
