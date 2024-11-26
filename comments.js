// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route that accepts GET requests on the /comments path
app.get('/comments', (req, res) => {
  res.send('This is the comments route');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});