import React from 'react'
import Additions from './additions'
import renderShallow from 'render-shallow'

describe('with required props', () => {
  let component

  beforeAll(() => {
    component = renderShallow(<Additions />).output
  })

  it('renders the component', () => {
    expect(component).toMatchSnapshot()
  })

})

describe('with props.fares', () => {
  const props = {
    fares: [
      {cost: 1.50, rides: 100 },
      {cost: 2.50, rides: 200 }
    ]
  }
  let component

  beforeAll(() => {
    component = renderShallow(<Additions {...props} />).output
  })

  it('renders the fares', () => {
    expect(component).toMatchSnapshot()
  })

})
