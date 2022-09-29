import React, { useEffect, useState } from 'react';
import './Play.css'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const Play = () => {
    const [games,setGames]=useState([]);
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch(`health.json`)
        .then(res=>res.json())
        .then(data=>setGames(data))
    },[])
    const addToList=(game)=>{
        console.log(game)
        const newCart=[...cart,game];
        setCart(newCart);
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
               <Cart cart={cart}></Cart>

            </div>
            
        </div>
        

    
    );
};

export default Play;