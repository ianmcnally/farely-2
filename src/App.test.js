import React from 'react';
import App from './App';
import renderShallow from 'render-shallow'
import { findWithType, findAllWithType } from 'react-shallow-testutils'
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

describe('when the remaining balance changes', () => {
  const mockChangeEvent = {}
  const mockChangeValue = '1.00'
  let output
  let remainingBalanceComponent

  beforeAll(() => {
    const rendered = renderShallow(<App />)
    output = rendered.output

    const remainingBalance = findWithType(output, RemainingBalance)
    remainingBalance.props.onChange(mockChangeEvent, mockChangeValue)

    output = rendered.rerender()
    remainingBalanceComponent = findWithType(output, RemainingBalance)
  })

  it('updates the value passed to <RemainingBalance>', () => {
    expect(remainingBalanceComponent.props.value).toEqual(mockChangeValue)
  })

  it('renders Additions', () => {
    expect(findWithType(output, Additions)).toMatchSnapshot()
  })

  it('does not render instructions', () => {
    expect(findAllWithType(output, Instructions)).toHaveLength(0)
  })
})

describe('when the maximum spend changes', () => {
  const mockChangeEvent = {}
  const mockChangeValue = '1.00'
  let output
  let maximumSpendComponent

  beforeAll(() => {
    const rendered = renderShallow(<App />)
    output = rendered.output

    const maximumSpend = findWithType(output, MaximumSpend)
    maximumSpend.props.onChange(mockChangeEvent, mockChangeValue)

    output = rendered.rerender()
    maximumSpendComponent = findWithType(output, MaximumSpend)
  })

  it('updates the value passed to <MaximumSpend>', () => {
    expect(maximumSpendComponent.props.value).toEqual(mockChangeValue)
  })

  it('renders Additions', () => {
    expect(findWithType(output, Additions)).toMatchSnapshot()
  })

  it('does not render instructions', () => {
    expect(findAllWithType(output, Instructions)).toHaveLength(0)
  })

})

describe('when there are a remaining balance and maximum spend values', () => {
  const mockChangeEvent = {}
  const mockBalanceValue = '1.00'
  const mockSpendValue = '40.00'
  let additionsComponent

  beforeAll(() => {
    const { output, rerender } = renderShallow(<App />)

    const maximumSpend = findWithType(output, MaximumSpend)
    maximumSpend.props.onChange(mockChangeEvent, mockSpendValue)

    const remainingBalance = findWithType(output, RemainingBalance)
    remainingBalance.props.onChange(mockChangeEvent, mockBalanceValue)

    const nextOutput = rerender()
    additionsComponent = findWithType(nextOutput, Additions)
  })

  it('passes the fare calculations to <Additions>', () => {
    expect(additionsComponent.props.fares).toEqual(costForFaresInBudget(mockBalanceValue, mockSpendValue))
  })

  it('renders Additions with the correct fares', () => {
    expect(additionsComponent).toMatchSnapshot()
  })

})
