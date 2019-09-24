## Dota 2 Hero Tracker

### App description

An App that lets user's login and select their favorite heroes in Dota 2
* Uses the OpenDotA API to retrieve information about heroes
* Create user account
* Login
* Add favorite heroes
* Check favorite heroes and see more information about them
- - - 

### Deployment

Deployed through heroku:
https://dota2tracker-client.herokuapp.com/


![Screenshot](/docs/images/screenshot-heroes.PNG)
- - - 

### Tech stack
Server: https://github.com/Logan-WangLW/DotA2herotracker-server
* React on the client side
* Redux for state management
* Redux-form for form manage
* React-router used for navigation management
* Node on the server side
* MongoDB for database
- - - 
### Key parts in the codebase
#### Components:
* favorites component contains the favorites page of the user
* header component sets up the header for use on every other component => menu is a child
* login-form, register-form and landing-info are all linked to the landing page which is a home page
* heroes-list component contains a list of the heroes
#### Root Directory: 
* Parent component is Home.js. It sets up react-router to link between the different pages
* Store.js stores primary source of information and combines reducers
#### Actions/Reducers: 
* Contains the auth, favorites, heroes actions/reducers which help retrieve, sendback, update and delete 
