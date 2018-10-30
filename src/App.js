import React, { useState } from 'react'
import {
  RemainingBalance,
  MaximumSpend,
  Additions,
  Instructions,
  Footer,
} from './components'
import './components/styling'

export default function App() {
  const [balance, setBalance] = useState('0.00')
  const [maximum, setMaximum] = useState('40.00')
  const [showInstructions, setShowInstructions] = useState(true)

  const handleBalanceChange = (_e, value) => setBalance(value)
  const handleMaximumChange = (_e, value) => setMaximum(value)
  const hideInstructionsAfterInteraction = () => setShowInstructions(false)

  return (
    <main
      className="sans-serif mw5 center"
      onChange={hideInstructionsAfterInteraction}>
      <RemainingBalance value={balance} onChange={handleBalanceChange} />
      <MaximumSpend value={maximum} onChange={handleMaximumChange} />
      {showInstructions ? (
        <Instructions />
      ) : (
        <Additions balance={balance} maximum={maximum} />
      )}
      <Footer />
    </main>
  )
}
