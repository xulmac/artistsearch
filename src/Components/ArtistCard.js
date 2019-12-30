import React from 'react'

const ArtistCard = props => {
  return (
    <div className='artistCard'>
      {!props.haserror ? (
        <ul>
          {props.artists.map(artist => (
            <li key={artist.id}>
              <img src={artist.thumb_url} alt={artist.name} />
              <br />
              <strong>{artist.name}</strong>
              <br />
              <span>
                {artist.upcoming_event_count <= 1
                  ? `${artist.upcoming_event_count} Upcoming Event`
                  : `${artist.upcoming_event_count} Upcoming Events`}
              </span>
              <br />
              <a
                href={artist.facebook_page_url}
                target='_blank'
                rel='noopener noreferrer'
              >
                Facebook
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing Found</p>
      )}
    </div>
  )
}
export default ArtistCard
