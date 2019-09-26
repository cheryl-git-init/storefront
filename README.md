# storefront
Storefront is a vue.js application, written in JavaScript.

It uses vuex to store a consistent state / source of truth across the application and live update details by computed properties/getters.

It uses vue cli service to provide compatible dev tools and production builds.

To run locally, simply check out the repo, and from the root folder, run `npm install` to install all npm packages.
And then run `npm run serve` which will run a local dev server.

Tests are written in Jest (unit tests). To test, run `npm run test:unit`.

I had also planned to add e2e tests, with nightwatch, however, due to time constraints and compatibility issues, I chose to focus on functionality and unit testing.

Current unit testing is limited, with more time I'd look to add testing within the Vuex store (as well as breaking these out into separate files to help with readability), as this is only mocked currently. If I was to do over the project, I'd put more focus into TDD earlier on.

Build can also be seen on https://storefront.cheryllane.net (hosts the static build assets created by the command `npm run build`).

## All Commands
### Project setup
Install all packages:
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Run your tests
```
npm run test
```

#### Run your end-to-end tests
```
npm run test:e2e
```

#### Run your unit tests
```
npm run test:unit
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
