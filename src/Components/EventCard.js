import React from 'react'
import Moment from 'react-moment'
import SimpleBar from 'simplebar-react'

import 'simplebar/dist/simplebar.min.css'

const EventCard = props => {
  let directionsUrl = 'https://www.google.com/maps/dir/'
  return (
    <SimpleBar autoHide='false' className='eventCard' data-testid='eventCard'>
      {!props.haserror ? (
        <ul>
          {props.events.map(event => (
            <li key={event.id}>
              <strong>{event.venue.city}</strong>
              <br />
              <span>{event.venue.country}</span>
              <br />
              <span>{event.venue.name}</span>
              <br />
              <Moment format='D MMM YYYY hh:mm a'>{event.datetime}</Moment>
              <br />
              <a
                href={
                  directionsUrl +
                  event.venue.latitude +
                  ',' +
                  event.venue.longitude
                }
                target='_blank'
                rel='noopener noreferrer'
              >
                Get Venue Directions
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          There are no upcoming events, <br />
          or may be the events information is unavailable
        </p>
      )}
    </SimpleBar>
  )
}
export default EventCard
