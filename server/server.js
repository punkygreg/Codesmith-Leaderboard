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

//serve scss file to html
// app.get('/styles.scss', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, './client/styles.scss'));
// });

// ////////////////////////////////////
// //player cards req
// app.get('/cards', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../pages/PlayerCards.html'));
// });

// ////////////////////////////////////
// //Ping Pong page req
// app.get('/pong', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../pages/PingPong.html'));
// });


// ////////////////////////////////////
// //Mario Kart page req
// app.get('/mariokart', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../pages/MarioKart.html'));
// });


// ////////////////////////////////////
// //Super Smash page req
// app.get('/supersmash', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../pages/SuperSmash.html'));
// });


// ////////////////////////////////////
// //404 error handler
// app.use('*', (req, res) => {
//     return res.status(404).sendFile(path.join(__dirname, '../404.html'));
//   });



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
  module.exports = app;
