import React from 'react'
import Footer from './footer'
import renderShallow from 'render-shallow'

it('renders the correct footer information', () => {
  const component = renderShallow(<Footer />).output
  expect(component).toMatchSnapshot()
})
