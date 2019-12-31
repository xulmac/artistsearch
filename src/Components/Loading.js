import React from 'react'

const Loading = props => {
  return <div>{props.loading ? <div className='loading'></div> : null}</div>
}
export default Loading
