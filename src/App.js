import React, { Component } from 'react'
import {
  RemainingBalance,
  MaximumSpend,
  Additions,
  Instructions,
  Footer
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

export default class App extends Component {
  state = { fares: undefined, remaining: '', maximum: '40.00' };

  handleRemainingChange = (_e, value) => {
    this.setState(currentState => ({
      remaining: value,
      fares: costForFaresInBudget(value, currentState.maximum)
    }))
  };

  handleMaximumChange = (_e, value) => {
    this.setState(currentState => ({
      maximum: value,
      fares: costForFaresInBudget(currentState.remaining, value)
    }))
  };

  render() {
    const { fares, remaining, maximum } = this.state
    const { handleMaximumChange, handleRemainingChange } = this
    const hideInstructions = Boolean(remaining && maximum)

    return (
      <main className="sans-serif mw5 center">
        <RemainingBalance value={remaining} onChange={handleRemainingChange} />
        <MaximumSpend value={maximum} onChange={handleMaximumChange} />
        <Additions fares={fares} />
        <Instructions hide={hideInstructions}/>
        <Footer />
      </main>
    )
  }
}

