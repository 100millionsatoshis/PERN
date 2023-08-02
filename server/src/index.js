// 1. Importing the 'express' module and assigning it to the constant 'express'.
const express = require("express");

// 2. Creating an instance of the 'express' application and assigning it to the constant 'app'.
const app = express();

// 3. Importing the constant 'PORT' from the 'constants.js' file located in the same 'src' folder.
// This constant is likely used to specify the port on which the server will listen for incoming requests.
const { PORT } = require("./constants");

// 4. Defining a function named 'appStart'.
// This function is used to start the server and listen for incoming requests.
const appStart = () => {
  try {
    // 5. The 'app.listen()' method is called to start the server and make it listen on the specified port.
    // When the server starts, it will execute the callback function, which will print a message to the console.
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`)
    })
  } catch (error) {
    // 6. If there is an error while starting the server, the catch block will handle the error and log it to the console.
    console.log(`Error: ${error.message}`)
  }
}

// 7. The 'appStart()' function is called to initiate the server start-up process.
// The server will start listening for incoming requests after this function is called.
appStart();
