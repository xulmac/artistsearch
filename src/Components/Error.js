import React from 'react'

const Error = props => {
  return (
    <div className='error' data-testid='artistCard'>
      <p>
        There was an error, it is most likely that the artist you were searching
        for "{props.searchterm}" does not exits in bandsintown database
        <br />
        <br />
        <br />
        <button
          className='back'
          title='Go Back &amp; Start Over'
          onClick={() => props.startOver()}
        >
          &nbsp;
        </button>
      </p>
    </div>
  )
}
export default Error
