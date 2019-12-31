import React from 'react'
import Error from './Error'

const SearchBar = props => {
  return (
    <div className='searchBar' data-testid='searchBar'>
      {props.haserror ? (
        <Error
          searchterm={props.searchterm}
          startOver={props.startOver}
        ></Error>
      ) : null}

      <form onSubmit={props.searchArtists}>
        <input
          type='search'
          tabIndex='1'
          autoComplete='off'
          required
          placeholder='Artist Name'
          defaultValue={props.searchterm}
          name='searchterm'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}
export default SearchBar
