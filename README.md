* To get react into our app there are two ways one is via CDN link and other is via npm.
* via CDN links it is not a preferred way into our project because it make a network call and it's a costly operation
* To create a react app use this command -> npm init
* Get react through package command -> npm install react. react is a normal dependency
* npm install react-dom is to install react-dom
* npm is a package manager but not node package manager.
* Package and dependencies are same thing.
* package.json is a configurations for npm.
* Bundler package helps to clean, compress, minified, bundled the html, css and js files before it sent to production.
* web pack, parcel and wheat are the bundler. At the EOD all bundlers are same.
* We are using parcel for this app. To install command is -> npm install -D parcel 
* There are two kind of dependencies. One is Dev dependency and other is Normal dependency. Since we are using parcel at development because bundler plays a role before production i.e., development. Normal dependencies will be used in the prod env as well.
* -D refers to Development
* ^ called as caret -> It automatically updates to the next minor version. Always it's safe to use caret 
* ~ called as tilde -> It automatically updates to the next major version
* Let's say there is a version we are using ^2.9.3 in package.json, later it upgrades to 2.9.4 but in package.json it shows ^2.9.3 but in package-lock.json file contaisn 2.9.4. package-lock.json locks the exact upgraded version of dependency.
* Every dependency in a node_modules folder has a package.json file
* node_modules folder is a collection of dependencies.
* If package.json and package-lock.json files you can regenerate all your dependecies even if someone deletes the node_modules folder. command -> npm install
* To build the app using parcle command -> npx parcel <source file> in our case it's index.html so command -> npx parcel index.html. This command will create a server for us and host the application in that port
* npx means executing the package
link: https://babeljs.io/
--------------------------------------------------------------------------------------------------
# PARCEL(parceljs.org) Usages:
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- Parcel uses File Watching Algorithm and written in C++
- Caching(can seen in .parcel-cache) & Faster Builder
- It does Image Optimisation as well
- We know it as a Bundler
- Differential Bundler means it supports different browsers
- Diagonstics
- Error Handling
- Tree Shaking Algorithm which means removes the unused code
- Different Dev and prod build
--------------------------------------------------------------------------------------------------
* Dist folder contains the Dev builds
* To create a prod build command -> npx parcel build index.html. index.html is the entry point. You can find package.json as main(i.e entry point) 
* To support different browsers we have to include the browerslist in package.json
--------------------------------------------------------------------------------------------------
* Instead of npm parcel index.html and npm parcel build index.html we can run the scripts by mentioning in package.json file.
* npm run start, npm run build where start, build are mentioned in the scripts of package.json file
* npm run start and npm start are same. start was the keyword in the npm. But it is not same for npm run build and npm build.
--------------------------------------------------------------------------------------------------
# React
* DOM Elements are html elements
* To create a element in react we use React.createElement. We pass threee arugments to this. First one tag name like "h1", second one is array of attributes like id and third one is child.
* React.createElement("h1",{ id: "heading" },"Hey Chandu") where it creates an object.
* When we render this object with HTML then it converts into HTML that we see on webpage.
--------------------------------------------------------------------------------------------------
# JSX React
* We can write without using jsx but jsx makes developers life easy
* jsx is not html inside javaScript. JSX is a html like syntax
* This is completely through React: const heading = React.createElement("h1",{ id: "heading" },"Hey Chandu"); . This is through core of React and it is not developer friendly.
* This is using JSX: const jsxHeading = <h1 id="heading">Hey Chandu by JSX</h1>. Both are same.
* ES6 called as ECMSScript language that javaScript engine(or webBrowser) understand.
* JSX is transpiled before it reaches to JSEngine and transipling is done by PARCEL(Babel package does that to be honest).
* Babel job is to convert jsx code into core react.
* Babel is a javaScript compiler.
--------------------------------------------------------------------------------------------------
* Everything in React is a component. Button is a component, navbar is a component and so on. 
* There are two types of Component
1. Class based Component - old way and no buddy is using this now.
2. Functional Component - new way and currently every one is using.(It is just a normal javascript function which returns some JSX element)
* To place a component inside a component(nested components or components composition) we should place the nested component inside the tags like this <Title />
* Always try to use arrow functions while writing the code because it's cleaner one.
* JSX Starts from open paranthesis and Ends with close paranthesis after arrow function.In between these paranthesis we can write any javascript code in curely braces . This exactly means JSX is a mixture of HTML and JavaScript.
----------------------------------------------------------------------------------------------------
* To write an in-style css code in js file, just add style in the div tag and js object into the style where js object contains css properties.
* But in-style not a preferred way.
-----------------------------------------------------------------------------------------------------
* props is properties which you can pass dynamically data into component.
* props are just arguments to a function.
* what is the CONFIG DRIVEN UI?
* Go through PROPS.
* ?. is called optional chaining. Go through it more.
* Usage of "key" is it doesn't render the old items and key should be unique. It will be useful to the render cycle. Whenever we write a map make a practise of using key.
-----------------------------------------------------------------------------------------------------
* Everything REACT do that normal HTML,CSS and JS can do. The beauty of using Library or Frame work is developer friendly like write less code and more on the webpage.
* To export a component we use this code "export default <component-name>"
* To export multiple things just write export infront on the things that you want to export, it is called as named exports. To import these named exports we have to write these in curly braces.
-----------------------------------------------------------------------------------------------------
# REACT HOOKS
* When we say REACT is fast that means REACT is fast in DOM manipulation.
* A Hook is a normal js function which is given by react and it is in-built which has super power behind the scenes.
* Two important HOOKS:
* 1. useState() - It gives super powerful variable. Import from react like named import. When ever the state variable changes react re-renders the component. It will return an array.
* 2. useEffect() - It takes two arguments. One is call back function and the second one is dependency array. Call back function is called when the page finished it's rendering.

-----------------------------------------------------------------------------------------------------
# Reconciliation Algorithm
* React uses recon algo and it is also known as react fiber.
* This algorithm creates a virtual DOM which is nothing but representataion of original DOM. Virtual DOM stores the Objects.
link: https://github.com/acdlite/react-fiber-architecture
-----------------------------------------------------------------------------------------------------
# Shimmmer UI
* https://medium.com/lattice-what-is/shimmer-ui-a-better-way-to-show-loading-states-aa1f4e563d17
-----------------------------------------------------------------------------------------------------
* Whenever if there is an update in state variable, REACT re-render the component that means REACT triggers the RECONSICIALTION ALGORITHM.
-----------------------------------------------------------------------------------------------------
## DIVE INTO HOOKS
* Whenever there is "use" that means it is a hook that use in REACT industry. 
# useEffect()
* Whenever useEffect is called, useEffect has two parameters one is call back function and other is dependency array.
* For useEffect function call back is mandatory. If no depedency array is used the call back function is called for every render
* If dependency array is there and it is empty then useEffect will be called only once and it is at initial render.
* If dependency array is there and it is not empty then useEffect will be called when ever the variables in the array is updated.
# useState()
* Always call the hooks inside of the component. It doesn't make sense if you called it outside of component.
* Never use the useState hook inside the condition loops, for loops and fucntion. It makes the app inconsistency.
-----------------------------------------------------------------------------------------------------
# REACT ROUTING
* To install "npm i react-router-dom" 
* In order to create ROUTES we have to create ROUTING CONFIGURATION. That can be done in App.js
* CreateBrowserRouter takes a list of paths
* RouterProvider provides the routing configuration to our app.
* There are many routers that react router provides. But createBrowserRouter is the one that react suggests. link: https://reactrouter.com/en/main/routers/create-browser-router
* useRouteError is a hook that makes the page as error handling and more customised as per the user experience.
* Outlet is the Component that is from REACT ROUTER. It acts like a placeholder in replaces the whatever the components is present in the path.
* You can navigate to other page by using anchor tags in HTML but that makes the app slower. Instead of using anchor tags REACT provided us "link" that is from REACT ROUTER DOM. Link component exactly works like an anchor tag. Link makes the app faster than anchor tag
## Whenever you use a map always assign a key to it else REACT throws an ERROR.
* useParams hook is to read the param from the url
* Link is a component which is given by react router dom and behind the scenes Link is using anchor tag <a href="">
* Link is a wrapper over anchor tag
-----------------------------------------------------------------------------------------------------
* In current world every one is developing in react through functional based components. Earlier it was class based components.
* Class Baesed Components vs Functional Based Components
* Never update state variables directly in Class Based Components
* What exactly happens in rendering?
* Life Cycle of Functional Based Component & Class Based Component
* In class based Components 1st constructor will be called then render will be called
* Important use case of ComponentDidMount is to make API calls. The reason why they use it in componentDidMount is because it comes into the picture one complete render is happened.
* React lifecycle methods diagram for class based components.
* Render phase happens fast but Commit phase is slow in REACT
* Never ever compare functional based components to class based components in REACT.
* It is not mandatory to use prefix as "use" for a HOOK but REACT recommends to do it.
-----------------------------------------------------------------------------------------------------
# Bundling
* It also called as Chunking, Dynamic Loading, Code Splitting, On Demand Loading, Lazy loading
* Instead of importing any component we can call the component using Lazy function. Lazy is given by REACT package.
* Lazy functions takes a call back function and use import keyword to import the component.Here import is a function and it takes the path of the Component.
-----------------------------------------------------------------------------------------------------
# Tailwind CSS
* To install: npm install -D tailwindcss postcss
* To start: npx tailwindcss init by using parcel
* postcss is a tool for transforming CSS with JavaScript
* Cons: Poor readability
* Pros: It will never ship the unused CSS.
-----------------------------------------------------------------------------------------------------
# Higher Order Components
* Higher Order Components is a function that takes the components and return the components.
* It takes the input as existing one and produces output as enhanced verison of existing one.
* Spread Operator
* In REACT data always flows in ONE Direction. Always from Parent Component to Child Component
* Everything in REACT is built of Props and Hooks
* One way to escape from Props Drilling is React COntext
* There are two ways to get the data from Context one is using the hook(In functional Component) and other is using the Consumer Component(In class component)
* 

-----------------------------------------------------------------------------------------------------
# REDUX
* React and Redux are different libraries
* Redux is not MANDATORY and use the Redux superpowers wisely
* Zustand is an alternate to Zustand
* Redux offers easy debugging
* Redux offers State management
* React and Redux are great combo : https://react-redux.js.org/introduction/getting-started
* Steps to use
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to app
- Create a slice
- Dispatch an action
- Read the data using selector
* To install use this commands : npm install @reduxjs/toolkit and npm install react-redux
* Selector hook give access to redux store




2:50:40















Questions:
What does display flex do?
Go through fetch(), await and fetch()
Clien Side Routing vs Server Side Routing
Read about Lazy and Suspense Component
Read about window.addEventListener()
Go through SASS, Styled Components, Material UI, Bootstrap
what is REM in CSS.
Lifting the state up
props drilling
Go through about userContext.Consumer and userContext.Provider


