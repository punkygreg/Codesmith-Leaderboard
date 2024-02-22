import React, { Component } from 'react';
import { Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

// import { Routes} from 'react-router-dom';

import Board from './containers/Board.jsx';
import AddPlayer from './components/AddPlayer.jsx';
import AddGame from './components/AddGame.jsx';
// import PlayerCards from './components/PlayerCards';

//this is used to render the main menu which will have 4 buttons that will lead to new pages.
// 3 of the buttons, the games, will be centered on one line, while the

const App = (props) => {
  return (
    <div className="buttons">
      <h1 class="header">CODESMITH LEADERBOARDS</h1>
      <div >
        {/* <a href='/mariokart'><button className='primaryButt'>Mario Kart</button></a> */}

        {/* <button  className='primaryButt'>Mario Kart</button> */}
        <div className='primary'>
        <Link to={'/addplayer'}><button  className='primaryButt'>Add Player</button></Link>
        <Link to={'/'}><button  className='primaryButt'>LeaderBoard</button></Link>
        <Link to={'/addgame'}><button  className='primaryButt'>Add Game</button></Link>
        

        </div>
        <Routes>
          <Route path="/addplayer" element={<AddPlayer />} />
          <Route path="/addgame" element={<AddGame />} />
          <Route path="/" element={<Board />} />
        </Routes>
    </div>
   
    </div>
  );
};

export default App;
