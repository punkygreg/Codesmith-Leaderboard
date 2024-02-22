// const { query } = require("express");

// const db = require('./pooler.js');


const controller = {};


//gets db info of all players add async
controller.getPlayer = (req, res, next) => {
    // try{
    //     res.locals.players = await db.query("SELECT * FROM 'pingpong' LIMIT 15"); //DW: removed peoples property.
    //     // console.log(res.locals);
    //     return next();
    //   }
    //   catch{
    //     return next()
    //   }

    return next();
}

//add player to db
controller.addPlayer =  (req, res, next) => {
   // this is the idea, values need to be variable, need to fix database to auto increment after adding player
   // db.query("INSERT INTO PingPong VALUES (7, 'james', 'The Bay', 0, 0)")
    return next();
}



//updates win loss columns for 2 players
controller.updateWinLoss = (req, res, next) => {

    //2 queries, 
    //update one player's win column
    // db.query("UPDATE PingPong SET wins = +1 WHERE name ='gregory'");
    //update one player's loss column
    // db.query("UPDATE PingPong SET losses = +1 WHERE name ='cheney'");
   
    return next();
}






module.exports = controller;