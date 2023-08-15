npm is a package manager but not node package manager.
Package and dependencies are same thing.
package.json is a configurations for npm.
Bundler package helps to clean, compress, minified, bundled the html, css and js files before it sent to production.
web pack, parcel and wheat are the bundler. At the EOD all bundlers are same.
We are using parcel for this app. To install command is -> npm install -D parcel 
There are two kind of dependencies. One is Dev dependency and other is Normal dependency. Since we are using parcel at development because bundler plays a role before production i.e., development. Normal dependencies will be used in the prod env as well.
-D refers to Development