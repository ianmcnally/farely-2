import React from 'react'
import Instructions from './instructions'
import renderShallow from 'render-shallow'

describe('with required props', () => {
  let component

  beforeAll(() => {
    component = renderShallow(<Instructions />).output
  })

  it('renders the correct instructions', () => {
    expect(component).toMatchSnapshot()
  })

})
