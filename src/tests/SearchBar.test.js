import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import SearchBar from '../Components/SearchBar'

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

/* make sure the SearchBar component renders and 
has the necessary form inputs and attributes
as it is the only component driving the app */

it('make sure the search form is rendered', () => {
  const haserror = false,
    searchterm = '',
    artists = []
  act(() => {
    render(
      <SearchBar
        haserror={haserror}
        searchterm={searchterm}
        artists={artists}
      />,
      container
    )
  })
  expect(container).toContainElement(document.querySelector('form'))
  expect(container).toContainElement(document.querySelector('input'))
  expect(document.querySelector('input')).toHaveAttribute('value', searchterm)
  expect(document.querySelector('input')).toHaveAttribute('name', 'searchterm')
  expect(container).toContainElement(document.querySelector('button'))
})
