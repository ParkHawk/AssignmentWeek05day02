const express = require('express');
const mustacheExpress = require('mustache-express');
const users = require('./data');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './mustache');
app.set('view engine', 'mustache');

app.use(express.static("style"));



app.get("/", function (req, res){
  res.render("index", users)
})

console.log("data loaded");

app.get('/users/:id', function(req, res) {
  // console.log(req.params.id);
  // console.log(users.users[req.params.id-1]);
  res.render('profile', {
    user: users.users[req.params.id-1],
    skills: users.users[req.params.id-1].skills
  });
});


app.listen(3000);
