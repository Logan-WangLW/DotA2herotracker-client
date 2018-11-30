This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## DotA2 Hero Tracker

### App description

An App that lets user's login and select their favorite heroes in DotA2
* Uses the OpenDotA API to retrieve information about heroes
* Create user account
* Login
* Add favorite heroes
* Check favorite heroes and see more information about them
- - - 

### Deployment

Deployed through heroku:
https://dota2tracker-client.herokuapp.com/
- - - 

### Tech stack

* React on the client side
* Redux for state management
* Redux-form for form manage
* React-router used for navigation management
* Node on the server side
* MongoDB for database
- - - 
### Key parts in the codebase
* All components is in the src/components folder
## Root Directory: 
* Parent component is Home.js. It sets up react-router to link between the different pages
* Store.js stores primary source of information and combines reducers
