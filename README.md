# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Zustand Notes

 small, fast and scalable bearbones state-management solution using simplified flux principles.



### `Flux principles`

<!-- Font https://medium.com/@goatslacker/principles-of-flux-ea872bc20772 -->

Flux is an application architecture for building complex user interfaces. It eschews MVC in favor of unidirectional data flow. What this means is that data enters through a single place (your actions) and then flow outward through their state manager (the store) and finally onto the view. The view can then restart the flow by calling other actions in response to user input.

- Stores have no setters.
- Inversion of Control.
- Single Central Dispatcher.
- All stores receive the dispatch.
- Unidirectional data flow: Action → Dispatcher → Stores → Views
  
### `Zombie child problem`

- Multiple nested connected components are mounted in a first pass, causing a child component to subscribe to the store before its parent.
- An action is dispatched that deletes data from the store, such as a todo item.
- The parent component would stop rendering that child as a result.
- However, because the child subscribed first, its subscription runs before the parent stops rendering it. When it reads a value from the store based on props, that data no longer exists, and if the extraction logic is not careful, this may result in an error being thrown.