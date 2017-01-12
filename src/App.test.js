import React from 'react';
import App from './App';
import renderShallow from 'render-shallow'
import { findWithType } from 'react-shallow-testutils'
import { Additions, Instructions, RemainingBalance, MaximumSpend } from './components'
import { costForFaresInBudget } from './services/fare-calculations'

describe('when it renders', () => {
  let component

  beforeAll(() => {
    component = renderShallow(<App />).output
  })

  it('renders the App with a zero balance and its fares', () => {
    expect(component).toMatchSnapshot()
  })

})

describe('when it mounts', () => {
  let component

  beforeAll(() => {
    const { instance, rerender } = renderShallow(<App />)

    instance().componentDidMount()

    component = rerender()
  })

  it('renders the App with no current balance and no fares', () => {
    expect(component).toMatchSnapshot()
  })

})

describe('when the remaining balance changes', () => {
  const mockChangeEvent = {}
  const mockChangeValue = '1.00'
  let remainingBalanceComponent

  beforeAll(() => {
    const { output, rerender } = renderShallow(<App />)

    const remainingBalance = findWithType(output, RemainingBalance)
    remainingBalance.props.onChange(mockChangeEvent, mockChangeValue)

    const nextOutput = rerender()
    remainingBalanceComponent = findWithType(nextOutput, RemainingBalance)
  })

  it('updates the value passed to <RemainingBalance>', () => {
    expect(remainingBalanceComponent.props.value).toEqual(mockChangeValue)
  })

})

describe('when the maximum spend changes', () => {
  const mockChangeEvent = {}
  const mockChangeValue = '1.00'
  let maximumSpendComponent

  beforeAll(() => {
    const { output, rerender } = renderShallow(<App />)

    const maximumSpend = findWithType(output, MaximumSpend)
    maximumSpend.props.onChange(mockChangeEvent, mockChangeValue)

    const nextOutput = rerender()
    maximumSpendComponent = findWithType(nextOutput, MaximumSpend)
  })

  it('updates the value passed to <MaximumSpend>', () => {
    expect(maximumSpendComponent.props.value).toEqual(mockChangeValue)
  })

})

describe('when there are a remaining balance and maximum spend values', () => {
  const mockChangeEvent = {}
  const mockBalanceValue = '1.00'
  const mockSpendValue = '40.00'
  let instructionsComponent
  let additionsComponent

  beforeAll(() => {
    const { output, rerender } = renderShallow(<App />)

    const maximumSpend = findWithType(output, MaximumSpend)
    maximumSpend.props.onChange(mockChangeEvent, mockSpendValue)

    const remainingBalance = findWithType(output, RemainingBalance)
    remainingBalance.props.onChange(mockChangeEvent, mockBalanceValue)

    const nextOutput = rerender()
    instructionsComponent = findWithType(nextOutput, Instructions)
    additionsComponent = findWithType(nextOutput, Additions)
  })

  it('sets hide=true on <Instructions>', () => {
    expect(instructionsComponent.props.hide).toBe(true)
  })

  it('passes the fare calculations to <Additions>', () => {
    expect(additionsComponent.props.fares).toEqual(costForFaresInBudget(mockBalanceValue, mockSpendValue))
  })

})
