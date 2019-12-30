# Install

* Clone or download the repository 
* Make sure you are in the project directory
* Run `npm install`

# Run

* Add APP_ID for bandsintown API in .env.development
* Make sure you are in the project directory
* Run `npm start`

# Deploy

* Run `npm run-script build`
* Copy / FTP / SSH everything from build folder to your remote server’s root dir. Depending on the type of server it is mostly /www or /public_html for services such as Heroku, Google Cloud, AWS refer to their documentation. As this is a static build there are no server side / remote dependencies.

# Architecture

The architecture was determined by the scale of the app and time that I had. The app state is managed in the root component App.js, contents of which are passed as props to stateless functional child components. CSS is a single file that provides style to all components. The objective was to keep everything minimal. Please see the image below -

# Code Challenge Requirements

A list of code challenge requirements that have been met:

* Show results based on the input of the artist’s name DONE
* Artist Name  DONE
* Artist Picture DONE
* Artist Facebook URL DONE
* Artist Events DONE
* Event Venue DONE
* Event City DONE
* Event Country DONE
* Event Date DONE
* Unit tests of your JS code PARTLY DONE (Integration/render tests for search only)
* Styling DONE

# Bonus Features

* Cache - Persist the last entered artist and events across browser reloads/refreshes DONE
* Creative? - Think of a cool feature? 

  * Linked venue directions to google maps 
  * Built a list of popular searches (artist names) for non music enthusiasts like me
  * Additional check for plurals (e.g. 01 Event and 33 Events)
  * Human readable date and time format
  * Total event count added for each artist

* Deploy - Include a deploy strategy for your app. DONE (as already stated above)

# Progressive Web App

While the service worker is registered, offline usage would not make sense in this particular app, since data is being fetched over HTTP.


