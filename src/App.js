import React from 'react'
import {
  RemainingBalance,
  MaximumSpend,
  Additions,
  Instructions,
  Footer,
} from './components'
import { costForFaresInBudget } from './services/fare-calculations'
import 'normalize.css'
import 'tachyons-borders/css/tachyons-borders.min.css'
import 'tachyons-border-colors/css/tachyons-border-colors.min.css'
import 'tachyons-display/css/tachyons-display.min.css'
import 'tachyons-font-family/css/tachyons-font-family.min.css'
import 'tachyons-font-weight/css/tachyons-font-weight.min.css'
import 'tachyons-forms/css/tachyons-forms.min.css'
import 'tachyons-line-height/css/tachyons-line-height.min.css'
import 'tachyons-max-widths/css/tachyons-max-widths.min.css'
import 'tachyons-spacing/css/tachyons-spacing.min.css'
import 'tachyons-type-scale/css/tachyons-type-scale.min.css'
import 'tachyons-typography/css/tachyons-typography.min.css'
import 'tachyons-utilities/css/tachyons-utilities.min.css'
import 'tachyons-widths/css/tachyons-widths.min.css'
import 'tachyons-lists/css/tachyons-lists.min.css'
import 'tachyons-border-style/css/tachyons-border-style.min.css'
import 'tachyons-border-widths/css/tachyons-border-widths.min.css'

const defaultCurrentBalance = '0.00'
const defaultMaximumSpend = '40.00'

const initialState = {
  fares: costForFaresInBudget(
    defaultCurrentBalance,
    defaultMaximumSpend,
  ),
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
      }
    case 'maximum':
      return {
        ...state,
        maximum: action.value,
        fares: costForFaresInBudget(state.currentBalance, action.value),
      }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { fares, currentBalance, maximum } = state
  const hideInstructions = Boolean(fares)

  function handleBalanceChange(event, value) {
    dispatch({ type: 'balance', value })
  }
  function handleMaximumChange(event, value) {
    dispatch({ type: 'maximum', value })
  }

  return (
    <main className="sans-serif mw5 center">
      <RemainingBalance
        value={currentBalance}
        onChange={handleBalanceChange}
      />
      <MaximumSpend value={maximum} onChange={handleMaximumChange} />
      <Additions fares={fares} />
      <Instructions hide={hideInstructions} />
      <Footer />
    </main>
  )
}
