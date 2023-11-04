## Basic authentication
Given the name “Basic Authentication”, you should not confuse Basic Authentication with the standard username and password authentication. Basic authentication is a part of the HTTP specification, and the details can be found in the RFC7617.

Because it is a part of the HTTP specifications, all the browsers have native support for “HTTP Basic Authentication”.

### Basic Authentication in Node.js
```
// src/index.js

const express = require('express');
const authMiddleware = require('./auth');

const app = express();
const port = 3000;

// This middleware is where we have the
// basic authentication implementation
app.use(authMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App running @ http://localhost:${port}`);
});
```
As you can see, it’s just a regular express server. authMiddleware registration is where we have all the code for “Basic Authentication”. Here is the content of the middleware:
```
// src/auth.js
const base64 = require('base-64');

function decodeCredentials(authHeader) {
  // ...
}

module.exports = function (req, res, next) {
  // Take the header and decode credentials
  const [username, password] = decodeCredentials(
    req.headers.authorization || ''
  );

  // Verify the credentials
  if (username === 'admin' && password === 'admin') {
    return next();
  }

  // Respond with authenticate header on auth failure.
  res.set('WWW-Authenticate', 'Basic realm="user_pages"');
  res.status(401).send('Authentication required.');
};
```