import React, { useState } from 'react';
import './style.css';

function Example(props){
    const name = props.name;
    const [pressed, setIsPressed] = useState(false);

    function handleClick(){
        setIsPressed(!pressed);
    }

    return !pressed ?(
        <div className="notPressed">
            <p>Button is not pressed</p>
            <button onClick={ handleClick }>change state</button>
        </div>
    )
    :
    <div>
        <p>Button is pressed</p>
        <button onClick={ handleClick }>change state</button>
    </div>
}

export default Example
