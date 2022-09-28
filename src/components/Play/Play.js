import React, { useEffect, useState } from 'react';
import './Play.css'
import Player from '../Player/Player';

const Play = () => {
    const [games,setGames]=useState([]);
    useEffect(()=>{
        fetch(`health.json`)
        .then(res=>res.json())
        .then(data=>setGames(data))
    },[])
    return (
        <div className='play-container'>
            <div className="details-container">
               {
                games.map(game=> <Player 
                    key={game.id}
                    game={game}
                    ></Player>)
               }

            </div>
            <div className="cart-container">
                <h2>cart</h2>

            </div>
            
        </div>
        

    
    );
};

export default Play;