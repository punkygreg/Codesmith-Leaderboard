const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const controller = require('./controllers');


// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

//serve index file to the page, main page

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

//get request serves  leaderboard data

app.get('/', controller.getPlayer, (req, res) => {
  return res.status(200).send(res.locals.players);
})

app.post('/addplayer', controller.getPlayer, (req, res) => {
  return res.status(200).send("Player Added!");
})

app.patch('/addgame', controller.updateWinLoss , (req, res) => {
  return res.status(200).send("Players W/L updated!");
})


// ////////////////////////////////////


// ////////////////////////////////////
// //404 error handler
app.use('*', (req, res) => {
    return res.status(404).sendFile(path.join(__dirname, '../404.html'));
  });

///////
// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
  module.exports = app;
