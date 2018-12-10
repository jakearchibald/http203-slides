const express = require('express');
const app = express();

app.use(express.static('.public'));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache');
  next();
});

app.get("/", (req, res) => {
  res.set('Cache-Control', 'no-cache');
  res.sendFile(__dirname + '/public/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
