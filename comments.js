// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine to ejs
app.set('view engine', 'ejs');

// GET /comments
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments: comments });
});

// GET /comments/new
app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.redirect('/comments');
});

app.listen(port, () => console.log(`Express server listening on port ${port}!`));