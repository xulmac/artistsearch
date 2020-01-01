# Install

- Clone or download the repository
- Make sure you are in the project directory
- Run `npm install`

# Run

- Add APP_ID for bandsintown API in .env.development
- Make sure you are in the project directory
- Run `npm start`

# Deploy

- Run `npm run-script build`
- Copy / FTP / SSH everything from build folder to your remote server’s root dir. For services such as Heroku, Google Cloud, AWS refer to their documentation. As this is a static build there are no server side / remote dependencies.

# Architecture

The architecture was determined by the time that I had and scale of the app. The app state is managed in the root component App.js, contents of which are passed as props to stateless functional child components. CSS is a single file that provides style to all components. The objective was to keep everything minimal.

# Code Challenge Requirements

A list of code challenge requirements that have been met:

- Show results based on the input of the artist’s name **_DONE_**
- Artist Name **_DONE_**
- Artist Picture **_DONE_**
- Artist Facebook URL **_DONE_**
- Artist Events **_DONE_**
- Event Venue **_DONE_**
- Event City **_DONE_**
- Event Country **_DONE_**
- Event Date **_DONE_**
- Unit tests of your JS code PARTLY **_DONE_** (Integration/render test for SearchBar only)
- Styling **_DONE_**

# Bonus Features

- Cache - Persist the last entered artist and events across browser reloads/refreshes **_DONE_**
- Creative? - Think of a cool feature?

  - Linked venue directions to google maps
  - Built a list of popular searches (artist names) for non music enthusiasts like me
  - Additional check for plurals (e.g. 01 Event and 33 Events)
  - Human readable date and time format
  - Total event count added for each artist

- Deploy - Include a deploy strategy for your app. **_DONE (as already stated above)_**
