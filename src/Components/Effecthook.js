import React, { useEffect, useState} from 'react'



const Effecthook = () => {
    useEffect(() => {
        document.body.style.background =color;
        document.body.style.color='white'
    }, [color]);

    const changecolor=() =>{
        setColor('navy')
    }

    
    return (
        <div>
            <h1>Uses of useEffect</h1>
            <button onClick={changecolor}>Change color</button>
            
        </div>
    )
}

export default Effecthook
