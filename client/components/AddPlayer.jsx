import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';



const AddPlayer = props => {
    return (
        <div >
           <form method="PATCH">
    <input className='playerAdder' type="text" placeholder="Player Name"></input>
    <input className='playerAdder' type="text" placeholder="Location"></input>
    <input className='submitButton' type='submit' value="SUBMIT" />
  </form>
        </div>
    )
}

export default AddPlayer;