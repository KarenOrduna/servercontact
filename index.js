const express = require('express');
const cors = require('cors');
const uniqid = require ('uniqid');

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

const comments = [{ 
  id: 1,  
  name: 'John',
  email: 'john@gmail.com',
  message: 'great',
}];

app.get('/comments', (request, response) => {
  return response.json(comments);
});

app.post('/comments', (request,response) => {
  const { message, name, email } = request.body;

  const newComments = { message, name, email, id: uniqid() };
  comments.push(newComments);

response.json(newComments);
});

app.listen(port, () => console.log(`Back end is listening on port ${port}`));
