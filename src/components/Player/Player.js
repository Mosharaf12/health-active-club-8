import React from 'react';
import './Player.css'
const Player = ({game, addToList}) => {
    
    const {img,name, description ,Running,time}=game
    return (
        <div className='player-card'>
            <img src={img} alt="" />
            <div className="text-info">
            <h3> {name}</h3>
            <p><small>Description: {description}</small></p>
            <p><small>Running Times:  {Running}</small></p>
            <p>Time Required: {time} minutes</p>
            </div>
            <button onClick={()=>addToList(game)} className='btn-list'>
                <p>Add to List</p>
            </button>
        </div>
    );
};

export default Player;