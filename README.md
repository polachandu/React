* To get react into our app there are two ways one is via CDN link and other is via npm.
* via CDN links it is not a preferred way into our project because it make a network call and it's a costly operation
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