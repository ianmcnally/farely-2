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

describe('with props.hide=true', () => {
  const props = { hide: true }
  let component

  beforeAll(() => {
    component = renderShallow(<Instructions {...props} />).output
  })

  it('renders with a hidden class', () => {
    expect(component).toMatchSnapshot()
  })
})

