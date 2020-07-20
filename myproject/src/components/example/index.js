import React, { useState } from 'react';
import './style.css';

function Example(props){
    const name = props.name;
    const [pressed, setIsPressed] = useState(false);

    function handleClick(){
        setIsPressed(!pressed);
    }

    return (
        <div>
            <h3>Article 1</h3>
            <h3>Article 2</h3>
            <h3>Article 3</h3>
       </div>   
    )
    
}

export default Example;




