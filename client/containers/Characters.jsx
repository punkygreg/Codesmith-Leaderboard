import React from 'react'

const Characters = () => {
    return (
        <div id="characters">
            <div className='board' >
            <div>
                Standing
            </div>
            <div>
                Name
            </div>
            <div>
                Location
            </div>
        
            <div>
                Wins
            </div>
            <div>
                Losses
            </div>
        
        </div>

            {item()}
            {item()}
            {item()}
            {item()}
            {item()}
            {item()}
            {item()}
            {item()}
            {item()}
            {item()}
        </div>
    )
}

function item(){
    return(
        // <div className = "flex">
        //     <div className = "item">
        //         {/* <img src={"./Anon.png"}></img> */}
        //         <div className='item'>
        //         <h3 className="name">Name</h3>
        //         <span>Location</span>
        //         </div>
        //     </div>
        //     <div className="item">
        //         <span>Score</span>
        //     </div>
        // </div>
        <div className='characters' >
            <div>
                1.
            </div>
            <div>
                Greg
            </div>
            <div>
                Los Angeles
            </div>
        
            <div>
                15
            </div>
            <div>
                6
            </div>
        
        </div>
    )
}



export default Characters