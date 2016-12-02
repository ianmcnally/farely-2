import React from 'react'
import renderShallow from 'render-shallow'
import RemainingBalance from './remaining-balance'

describe('with required props', () => {
  let component

  beforeAll(() => {
    component = renderShallow(<RemainingBalance />).output
  })

  it('renders the input', () => {
    expect(component).toMatchSnapshot()
  })

})
