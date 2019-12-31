import React from 'react'
import axios from 'axios'
import SearchBar from './Components/SearchBar'
import SearchResults from './Components/SearchResults'
import Loading from './Components/Loading'
import Home from './Components/Home'

class App extends React.Component {
  // setup state
  state = {
    loading: false,
    haserror: false,
    searchterm: '',
    artists: [],
    events: []
  }

  // setup API base url and APP_ID
  API = 'https://rest.bandsintown.com/'
  APP_ID = process.env.REACT_APP_APP_ID

  // get last search term from local storage
  storedSearchTerm = localStorage.getItem('searchterm')

  // use search term either from state or from local storage
  searchTerm = this.state.searchterm || this.storedSearchTerm

  // get events based on search term
  getEvents = searchTerm => {
    this.setState({
      loading: true
    })
    axios
      .get(`${this.API}artists/${searchTerm}/events?app_id=${this.APP_ID}`)
      .then(res => {
        const events = res.data
        this.setState({
          events,
          loading: false
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          haserror: true,
          artists: [],
          events: []
        })
      })
  }

  // store search term in local storage from search input
  storeSearchTerm = searchterm => {
    localStorage.setItem('searchterm', searchterm)
  }

  // make the search query for both artist and events
  searchArtists = e => {
    e.preventDefault()
    let artistsData
    const searchInput = e.target.elements.searchterm.value
    this.setState({
      haserror: false,
      searchterm: searchInput,
      loading: true
    })

    // use the search term from the input to persist on client reload/refresh
    this.storeSearchTerm(searchInput)

    // get the artist data
    axios
      .get(`${this.API}artists/${searchInput}?app_id=${this.APP_ID}`)
      .then(res => {
        artistsData = res.data

        // to push response data to an array so that we can use map method to render it
        let artistsArr = []
        artistsArr.push(artistsData)
        this.setState({
          artists: artistsArr,
          loading: false
        })
      })
      .then(() => {
        // get the events only if upcoming_event_count is not 0
        if (artistsData.upcoming_event_count !== 0) {
          this.getEvents(searchInput)
        } else {
          this.setState({
            events: []
          })
        }
      })
  }

  // reset state to start over
  startOver = () => {
    this.setState({
      artists: [],
      events: [],
      loading: false,
      haserror: false
    })
  }

  componentDidMount() {
    // get last search term if available from local storage
    if (this.storedSearchTerm) {
      this.setState({
        searchterm: this.storedSearchTerm
      })
    }
  }

  render() {
    // destructure the entire state to be passed as props to functional components
    const { loading, searchterm, artists, events, haserror } = this.state

    return (
      <div>
        <Loading loading={loading} data-testid='loading'></Loading>
        {!haserror && artists.length ? null : <Home></Home>}
        <SearchBar
          haserror={haserror}
          searchterm={searchterm}
          artists={artists}
          searchArtists={this.searchArtists}
          startOver={this.startOver}
        ></SearchBar>
        {!haserror && artists.length ? (
          <SearchResults
            haserror={haserror}
            artists={artists}
            events={events}
            startOver={this.startOver}
          ></SearchResults>
        ) : null}
      </div>
    )
  }
}
export default App
