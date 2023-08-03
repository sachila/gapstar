# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The main page of the application consists of three buttons. Initially, the counter is set to zero.

When a user clicks on the "Increase" button, the count will increase by one. When the counter value is 10, an increment is prevented
by showing the user a 'Count can't be more than 10' message.

When a user clicks on the "Decrease" button, the count will decrease by one. When the counter value is 0, decrement is prevented by showing the user a 'Count can't be less than 0' message.

When a user clicks on the "Reset" button, the count will be set to zero.

## Testing

For testing, Jest can be used to test the component.

The counter component has three main functions on where the developer can target tests on.

Use react testing library to tests the html elements.

Use jest features such as mockImplementation to mock the state values.

Generate jest coverage report to make sure tests are properly covering all paths.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
