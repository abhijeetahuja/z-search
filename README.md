# Z-Search

Fast and reliable way to search Users, Tickets, and Organizations.
- Expose APIs so you can write your own UI.
- Comes with a basic in-browser search React app.

### Tech

Z-Search uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [react] - javaScript library for building user interfaces
* [redux] - predictable state container for JavaScript apps
* [webpack] - bundle your assets
* [jest] - for delightful JavaScript testing

### Installation

This project requires [Node.js](https://nodejs.org/) LTS to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone git@github.com:abhijeetahuja/z-search.git
$ cd z-search
$ npm install
$ npm run search
```

If browser doesn't open on it's own please navigate to [http://localhost:3000]

For running tests...

```sh
$ npm test
```

### How to search?
- Select one of the three options - Users or Tickets or Organizations (browser will fetch all possible search attributes)
- Select one of the search attributes. For example _id or name
- Key in the search value (for example 11) and hit search button.

### Providing inputs?

Place data in ./inputs/[users/tickets/organizations].json

   [node.js]: <http://nodejs.org>
   [react]: <https://reactjs.org/>
   [express]: <http://expressjs.com>
   [redux]: <https://redux.js.org/>
   [webpack]: <https://webpack.js.org/>
   [jest]: <https://facebook.github.io/jest/>
   [http://localhost:3000]: <http://localhost:3000>

