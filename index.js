const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

const comments = {
  id: 1,
  name: 'John',
  email: 'john@gmail.com',
  message: 'great',
};

app.get('/comments', (request, response) => {
  return response.json(comments);
});

app.listen(port, () => console.log(`Back end is listening on port ${port}`));
