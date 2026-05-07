import { useState } from "react";

export default function Player({initialName, symbol, isActive}){

    const[playerName, setPlayerName]=useState(initialName);
    const[isEditing, setIsEditing]=useState(false);

    function handleEditClick(){
        setIsEditing((editing)=>!editing);
    }

    function handleChange(event){
        // onchange provide the event and we use it this way has a target property.
        setPlayerName(event.target.value);
    }

    let editplayerName=<span className="player-name">{playerName}</span>
    let buttonCaption="Edit";

    if(isEditing)
    {
        editplayerName=<input type="text" required value={playerName} onChange={handleChange}/>
        buttonCaption="Save";
    }
    return(<li className={isActive? "active": undefined}>
        <span className="player">
        {editplayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{buttonCaption}</button>
      </li>);
}