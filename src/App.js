import React, { useMemo, useReducer } from 'react'
import {
  RemainingBalance,
  MaximumSpend,
  Additions,
  Instructions,
  Footer,
} from './components'
import { costForFaresInBudget } from './services/fare-calculations'
import './components/styling'

export default function App() {
  const [state, dispatch] = useBalancesReducer()

  const handleRemainingChange = (_e, value) =>
    dispatch({ type: 'CURRENT_BALANCE', value })

  const handleMaximumChange = (_e, value) =>
    dispatch({ type: 'MAXIMUM_VALUE', value })

  const hideInstructions = Boolean(state.fares)

  const additions = useMemo(() => <Additions fares={state.fares} />, [
    state.currentBalance,
    state.maximum,
  ])

  return (
    <main className="sans-serif mw5 center">
      <RemainingBalance
        value={state.currentBalance}
        onChange={handleRemainingChange}
      />
      <MaximumSpend value={state.maximum} onChange={handleMaximumChange} />
      {additions}
      <Instructions hide={hideInstructions} />
      <Footer />
    </main>
  )
}

function useBalancesReducer() {
  const initialState = {
    currentBalance: '0.00',
    maximum: '40.00',
  }
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'CURRENT_BALANCE':
        return {
          ...state,
          currentBalance: action.value,
          fares: costForFaresInBudget(action.value, state.maximum),
        }
      case 'MAXIMUM_VALUE':
        return {
          ...state,
          maximum: action.value,
          fares: costForFaresInBudget(state.currentBalance, action.value),
        }
      default:
        return state
    }
  }, initialState)

  return [state, dispatch]
}
