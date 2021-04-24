# MessageBerry

To work with a led matrix as a hardware messenger system.
This is the software side.

## frontend
React app to have a nice gui to send questions and receive answers to/from the MessageBerry

## backend
A NodeJS server with websocket. This i primary to debug and test websocket functionality with JS.\
The final backend will run on python...

## pybackend
The real backend with websocket. This will run on the MessageBerry (Raspberry PI) to serve the websocket server and the frontend to the network.\
