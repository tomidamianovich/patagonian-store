# Sections of the application

The application has the following three sections separated in different pages:
  - Personal Data: Shows user data stored in the BE (name, location, profile pic, etc.).
  - Image Gallery: Shows a grid with images stored in FireStore. It offers the ability to add and remove images.
  - Products: Shows a table with products data stored in the firebase realtime datebase.
# Stack of technologies used in this project

This project was developed with [React](https://reactjs.org/) and Firebase (https://firebase.google.com/) among the following tools and libraries:
  - [Create React App](https://create-react-app.dev/): To bootstrap the application creating with a officially supported way a single-page React application. It offers a modern build setup with no configuration.
  - [React Router DOM](https://reactrouter.com/): To manage the differents routes of the application that are present in the menu.
  - [Material UI](https://material-ui.com/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Redux](https://redux.js.org/)
  - [React Redux](https://react-redux.js.org/)
  - Firebase: 
    - [Firebase Realtime Datebase](https://firebase.google.com/docs/database)
    - [FireStore](https://firebase.google.com/docs/firestore)

# Explanation of the structure of the proyect

Although the structure of the project is not a single answer question and that the structure will probably depend on the project itself, the methodology we are currently using and the number of members that are part of the dev team among other important things that will determine the structure of the project we could say that there are some common guidelines so i used that one to this proyect structure.

- Containers: Main features or big components that are will be the kickoff of the child components(generic/shared ones) that the proyect will have. This are the ones connected will redux and they will pass as props the info coming from the state management library, due to that they are called "Smart components".
  
- Components: A basic building block of the application, the idea of this one is that they could be used all over the application for a specific reason but with differents props. The perfect example in this proyect is the "LoadingSpinner" components that shows a spinner in order to show to the user that the application is loading something. This components is imported and used in the three containers.

  - Note: Components and Containers will have the following structure:
    * Component: The React component itself
    * Styles: The material ui component where the styles are added via makeStyles Hook
    * Tests: React Testing library/Jest basic tests.
  
- Reducers: Functions that are used to manage the application state, they use the action name and the payload data to manipulate the state of the application in a organized way.
  
- Actions: Functions that are dispatched via an application event or logic and they have the responsability to manage API calls or request various information from BE using actionTypes.
  
- Actions Types: Constants that contains a string value with an id of the type of action in order that the same one will be unique in the application. This types could be used among all the application.
  
- Utils: Extra utils folder where you could find:
  - Constants: Constants used to avoid hardcoded strings that are shared among the components and also if in the future the string changes we will need just to uploaded in a single line MR.
  - Type: Typescript types and interfaces used all over the application to check that we are using the correct types.

- Config file: File that stores the firebase config.

# Requirements to run the application

  - [Git](https://git-scm.com/)
  - [Node Js](https://nodejs.org/en/)
  - [Npm](https://www.npmjs.com/) || [Yarn](https://yarnpkg.com/)

# How to Run the application

1. Open a new terminal in your repositories folder

1. Clone the repository in your local machine:
  git clone https://gitlab.com/tdamianovich/patagonian-store.git

2. cd patagonian-store

3. npm install || yarn install

4. npm start || yarn start

5. The application will start and showed in the browser, you can use:
   1. Local Development build (The one that is automatically opened) Example: http://localhost:[port]
   2. Network Url, Example: http://192.168.0.49:[port]
