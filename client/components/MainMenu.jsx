import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import Characters from './components/Characters';
// import CreateCharacter from './components/CreateCharacter';



//this is used to render the main menu which will have 4 buttons that will lead to new pages. 
// 3 of the buttons, the games, will be centered on one line, while the 

const App = props => {
    return (
        <div className='buttons'>
            <button>Mario Kart</button>
            <button>Ping Pong</button>
            <button>Super Smash Bros</button>
        </div>
    )
}

export default App;