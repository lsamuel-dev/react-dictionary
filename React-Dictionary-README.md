# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

- Use This Section for Most Up-To-Date React Information and Components: https://github.com/facebook/create-react-app

## Setting up React using Vite

- Get Node and NPM versions by running node -v and npm -v in the terminal.
- Latest Node.js & npm Versions (Jan 2026)
  Node.js Current: 25.5.0 node.js
  Node.js LTS (Active): 24.13.0 node.js
  npm: 11.8.0 npm

- Installation steps:
  ![Step 1](../BOOTCAMP_CONTENT-STUDY/INTRODUCTION-TO-REACT/Images/react-vite1.png)
  ![Step 2](../BOOTCAMP_CONTENT-STUDY/INTRODUCTION-TO-REACT/Images/react-vite2.png)
  ![Step 3](../BOOTCAMP_CONTENT-STUDY/INTRODUCTION-TO-REACT/Images/react-vite3.png)
  ![Step 4](../BOOTCAMP_CONTENT-STUDY/INTRODUCTION-TO-REACT/Images/react-vite4.png)4

### React Fundamentals: Study Cheat Sheet

**1. Primary Purpose**
The core goal of React is **to build user interfaces**. It focuses specifically on the "View" layer of an application, enabling the creation of interactive and dynamic visual elements.

**2. Creating a New Project**
To initialize a fresh React application, the standard command is **`npx create-react-app my-app`**. Using `npx` ensures you are running the most recent version of the tool directly from the npm registry.

**3. JSX (JavaScript XML)**
JSX is a **syntax extension for JavaScript** that allows you to write HTML-like structures directly inside your code. While it looks like HTML, it is transpiled into standard JavaScript, allowing you to embed logic and variables directly within your UI templates.

**4. The Entry Point**
The **`index.js`** file serves as the typical entry point where the root React component is rendered. It uses `ReactDOM` to inject your main `<App />` component into a specific DOM node (usually a `div` with `id="root"`) found in the `index.html` file.

**5. Component-Based Architecture**
The primary benefit of this architecture is that it makes code **easier to manage and maintain**. By breaking the UI into independent, reusable pieces, you can isolate functionality, simplify debugging, and scale your application more efficiently.

---

**Environment Status:**

- **Node.js**: v22.18.0 (Update recommended to v24.13.0 LTS or v25.5.0 Current).
- **npm**: 10.9.3 (Update recommended to 11.8.0).
