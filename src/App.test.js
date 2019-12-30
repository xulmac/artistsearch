import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import SearchBar from './Components/SearchBar'

test('renders search button', () => {
  const haserror = false
  const searchterm = ''
  const artists = []
  const { getByText } = render(
    <SearchBar
      haserror={haserror}
      searchterm={searchterm}
      artists={artists}
    ></SearchBar>
  )
  const buttonElement = getByText('Search')
  expect(buttonElement).toBeInTheDocument()
})

test('renders search input field', () => {
  const haserror = false
  const searchterm = ''
  const artists = []
  const { getByPlaceholderText } = render(
    <SearchBar
      haserror={haserror}
      searchterm={searchterm}
      artists={artists}
    ></SearchBar>
  )
  const searchInput = getByPlaceholderText('Artist Name')
  expect(searchInput).toHaveValue(searchterm)
})
