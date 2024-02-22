import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


const AddGame = props => {
    return (
        <div id='game-box' >
        <form method="PATCH">
        <input className='submitButton2' type='submit' value="SUBMIT" />
        <input className='gameAdder' type="text" placeholder="Winner"></input>
        <input className='gameAdder' type="text" placeholder="Loser"></input>
 
</form>
     </div>
    )
}

export default AddGame;