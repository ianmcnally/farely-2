import React from 'react';
import App from './App';
import renderShallow from 'render-shallow'

describe('when it renders', () => {
  let component

  beforeAll(() => {
    component = renderShallow(<App />).output
  })

  it('renders the App components', () => {
    expect(component).toMatchSnapshot()
  })

})
