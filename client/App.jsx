import React, { Component } from 'react';
import { Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

// import { Routes} from 'react-router-dom';

import Board from './containers/Board.jsx';
import MarioKart from './components/MarioKart.jsx';
import PingPong from './components/PingPong.jsx';
import SuperSmash from './components/SuperSmash.jsx';
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
        <Link to={'/mariokart'}><button  className='primaryButt'>Mario Kart</button></Link>
        <Link to={'/pong'}><button  className='primaryButt'>Ping Pong</button></Link>
        <Link to={'/'}><button  className='primaryButt'>Super Smash</button></Link>
        {/* <button class="primaryButt">Add Player</button>
        <button class="primaryButt">Add Game</button> */}
        </div>
        <Routes>
          <Route path="/mariokart" element={<MarioKart />} />
          <Route path="/pingpong" element={<PingPong />} />
          <Route path="/" element={<Board />} />
        </Routes>

       
      </div>
      <div className='primary'>
            <button class="primaryButt">Add Player</button>
            <button class="primaryButt">Add Game</button>

            </div>
      {/* <div>
        <Board />
      </div> */}
    </div>
  );
};

export default App;
