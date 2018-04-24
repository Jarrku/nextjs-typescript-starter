BADGES

# Application name

Deployments can be found under following urls:

`master` branch: [NOW_LINK_PROD]

`develop` branch: [NOW_LINK_DEV]

## Application Stack

The application consists of several components, a rough outline:

### Backend

The backend consists of the following pieces:

* [NodeJS](https://nodejs.org/en/) as the server side runtime(Javascript).
* [Express](https://github.com/expressjs/express) as the web framework to handle incoming requests
* [GraphQL Server](http://graphql.org/learn/) as the data endpoint for the frontend application.
  * The GraphQL endpoint will be responsible to present our MongoDB to our frontend in a convenient matter.
  * There will only be a single endpoint and the frontend will not have to worry about where all the data is coming from or how to combine things.
  * GraphQL can also aggregate the external API's and route to the client side app in a friendly manner.
  * It sits inbetween our database + external information sources and the frontend app.

This will be the bulk of the backend application. There will be a small part in the serverside code that will be reponsible to bootup [NextJS](https://github.com/zeit/next.js/). More on NextJS in the Frontend section.

### Frontend

Frontend consists of the following pieces:

* [NextJS](https://github.com/zeit/next.js/) as a framework for a server-side rendered React Application.
  * NextJS solves a lot of the setup and boilerplate that you'd need to get a serverside rendered react application going.
  * It provides an extendable webpack and babel configuration and takes care of the regular boilerplate.
  * It's similar to create-react-app, in the sense that it tries to simplify the development experience.
  * The benefit of using NextJS is a server-side rendered application, built in codesplitting which leads to a fast bootup and following navigation experience for end users.
* [React](https://reactjs.org/) as a view library to build composible UI's in a declaritive manner.
* GraphQL Client to interact with the GraphQL server and feed the data to our React Application.

## Useful links

### NextJS:

* [Learn NextJS (tutorial)](https://learnnextjs.com/)
* [Github repo (docs)](https://github.com/zeit/next.js/)
* [Examples directory](https://github.com/zeit/next.js/tree/canary/examples)

### GraphQL

* [How to GraphQL (tutorial)](https://www.howtographql.com/)
* [GraphQL Documentation](http://graphql.org/learn/)

### React

* [Official React Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
