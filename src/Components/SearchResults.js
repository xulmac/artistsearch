import React from 'react'
import ArtistCard from './ArtistCard'
import EventCard from './EventCard'

const SearchResults = props => {
  return (
    <div className='searchResults'>
      {!props.haserror ? (
        <button
          className='back'
          title='Go Back &amp; Start Over'
          onClick={() => props.startOver()}
        >
          &nbsp;
        </button>
      ) : null}
      {!props.haserror ? (
        <h2 className='showEventCount'>
          {props.events.length !== 0 ? (
            <strong>
              {props.events.length <= 1
                ? `${props.events.length} Event Found`
                : `${props.events.length} Events Found`}
            </strong>
          ) : null}
        </h2>
      ) : null}
      {!props.haserror ? (
        <ArtistCard artists={props.artists}></ArtistCard>
      ) : null}
      {!props.haserror ? <EventCard events={props.events}></EventCard> : null}
    </div>
  )
}
export default SearchResults
