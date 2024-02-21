import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import Characters from './components/Characters';
// import CreateCharacter from './components/CreateCharacter';



//this is used to render the main menu which will have 4 buttons that will lead to new pages. 
// 3 of the buttons, the games, will be centered on one line, while the 

const App = props => {
    return (
        <div className='buttons'>
            <h1 class='header'>CODESMITH LEADERBOARDS</h1>
            <div className='primary'>
            <button className='primaryButt'>Mario Kart</button>
            <button className='primaryButt'>Ping Pong</button>
            <button className='primaryButt'>Super Smash</button>
            </div>
            <div className='cards'>
            <button class="primaryButt">Player Cards</button>
            </div>
        </div>
    )
}

export default App;