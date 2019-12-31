import React from 'react'

const Home = () => {
  return (
    <div className='home' data-testid='home'>
      <h1>
        Search for <br />
        atrists &amp; events
      </h1>
      <strong>
        Popular Searches According To Billboard &amp; Google Trends
      </strong>
      <ul className='popularSearches'>
        <li>Harry Styles</li>
        <li>Post Malone</li>
        <li>Blake Shelton</li>
        <li>Billie Eilish</li>
        <li>Juice WRLD</li>
        <li>Taylor Swift</li>
        <li>Lizzo</li>
        <li>Mariah Carey</li>
        <li>DaBaby</li>
        <li>Roddy Ricch</li>
        <li>Luke Combs</li>
        <li>BTS</li>
        <li>Michael Buble</li>
        <li>Pentatonix</li>
        <li>Jonas Brothers</li>
        <li>Khalid</li>
        <li>Maroon 5</li>
      </ul>
    </div>
  )
}
export default Home
