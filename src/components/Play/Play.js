import React, { useEffect, useState } from 'react';
import './Play.css'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Play = () => {
    const [games,setGames]=useState([]);
    useEffect(()=>{
        fetch(`health.json`)
        .then(res=>res.json())
        .then(data=>setGames(data))
    },[])
    const addToList=(game)=>{
        console.log(game)
    }
    return (
        <div className='play-container'>
            <div className="details-container">
               {
                games.map(game=> <Player 
                    key={game.id}
                    game={game}
                    addToList={addToList}
                    ></Player>)
               }

            </div>
            <div className="cart-container">
               <Cart></Cart>

            </div>
            
        </div>
        

    
    );
};

export default Play;