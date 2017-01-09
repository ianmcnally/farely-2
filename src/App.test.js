import React from 'react';
import App from './App';
import renderShallow from 'render-shallow'
import { findWithType } from 'react-shallow-testutils'
import { Instructions, RemainingBalance, MaximumSpend } from './components'

describe('when it renders', () => {
  let component

  beforeAll(() => {
    component = renderShallow(<App />).output
  })

  it('renders the App components', () => {
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
  const mockChangeValue = '1.00'
  let instructionsComponent

  beforeAll(() => {
    const { output, rerender } = renderShallow(<App />)

    const maximumSpend = findWithType(output, MaximumSpend)
    maximumSpend.props.onChange(mockChangeEvent, mockChangeValue)

    const remainingBalance = findWithType(output, RemainingBalance)
    remainingBalance.props.onChange(mockChangeEvent, mockChangeValue)

    const nextOutput = rerender()
    instructionsComponent = findWithType(nextOutput, Instructions)
  })

  it('sets hide=true on <Instructions>', () => {
    expect(instructionsComponent.props.hide).toBe(true)
  })

})
