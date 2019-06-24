import React from 'react'
import {
  RemainingBalance,
  MaximumSpend,
  Additions,
  Instructions,
  Footer,
} from './components'
import { costForFaresInBudget } from './services/fare-calculations'
import './styles'

const defaultCurrentBalance = '0.00'
const defaultMaximumSpend = '40.00'
const initialState = {
  interacted: false,
  fares: costForFaresInBudget(defaultCurrentBalance, defaultMaximumSpend),
  currentBalance: defaultCurrentBalance,
  maximum: defaultMaximumSpend,
}

function reducer(state, action) {
  switch (action.type) {
    case 'balance':
      return {
        ...state,
        currentBalance: action.value,
        fares: costForFaresInBudget(action.value, state.maximum),
        interacted: true,
      }
    case 'maximum':
      return {
        ...state,
        maximum: action.value,
        fares: costForFaresInBudget(state.currentBalance, action.value),
        interacted: true,
      }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { fares, currentBalance, maximum, interacted } = state

  function handleBalanceChange(event, value) {
    dispatch({ type: 'balance', value })
  }
  function handleMaximumChange(event, value) {
    dispatch({ type: 'maximum', value })
  }

  return (
    <main className="sans-serif mw5 center">
      <RemainingBalance value={currentBalance} onChange={handleBalanceChange} />
      <MaximumSpend value={maximum} onChange={handleMaximumChange} />
      {interacted ? (
        <Additions fares={fares} />
      ) : (
        <Instructions />
      )}
      <Footer />
    </main>
  )
}
