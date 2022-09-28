import React from 'react';
import './Player.css'
const Player = (props) => {
    console.log(props)
    const {img,name, description ,Running,time}=props.game
    return (
        <div className='run-img'>
            <img src={img} alt="" />
            <h3> {name}</h3>
            <p><small>Description: {description}</small></p>
            <p>Running Times:  {Running}</p>
            <p>Time Required: {time} minutes</p>
        </div>
    );
};

export default Player;