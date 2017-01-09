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

describe('with props.value', () => {
  const props = { value: 'hey' }
  let component

  beforeAll(() => {
    component = renderShallow(<MaximumSpend {...props} />).output
  })

  it('renders the input with a value', () => {
    expect(component).toMatchSnapshot()
  })

})

describe('with props.onChange', () => {
  const props = { onChange(){} }
  let component

  beforeAll(() => {
    component = renderShallow(<MaximumSpend {...props} />).output
  })

  it('renders the input with an onChange', () => {
    expect(component).toMatchSnapshot()
  })

})

