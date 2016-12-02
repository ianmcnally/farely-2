import React from 'react'
import renderShallow from 'render-shallow'
import MaximumSpend from './maximum-spend'

describe('with required props', () => {
  let component

  beforeAll(() => {
    component = renderShallow(<MaximumSpend />).output
  })

  it('renders the input', () => {
    expect(component).toMatchSnapshot()
  })

})
