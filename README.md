# rates-informer

 Rates-informer is a service that will offer an API and will act as a gateway for customers. It will handle calling third party services to get the latest foreign exchange reference rates. It was made using the Serverless Framework to build and deploy a simple Node.js API to Lambda and API Gateway.

### Access published endpoint
```
 https://hvdrvb8bab.execute-api.us-east-1.amazonaws.com/dev/exchange-rates
```

### Prerequisites

* Node.js version 6.x or later installed locally on your machine.
* Installed the serverless npm package. By using the -g flag, the package is installed globally on your machine.

```
npm install -g serverless
```

### How to run the dev enviroment

The serverless-offline node module allows you to run the server locally with the following command:

```
serverless offline
```
After running the command you should see the available routes printed in the terminal.

### How to run the test

To run the test you first require to have serverless running in offline mode ([How to run the dev environment](#How-to-run-the-dev-enviroment)) and in a different terminal run the following command:

```
npm run test
```

## Built With

* [Node.js](https://nodejs.org/en/download/)
* [serverless](https://www.serverless.com/)
* [Jest](https://www.npmjs.com/package/jest)
* [SuperTest](https://www.npmjs.com/package/supertest)

## Author

**Dayan Rojas** 

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details