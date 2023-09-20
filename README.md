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
* 

















Questions:
What does display flex do?
