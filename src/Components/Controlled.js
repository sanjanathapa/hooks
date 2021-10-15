import React, { useState} from 'react'

const Controlled = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <h1>Uncontrolled</h1>
            <input type="text" id="textBox" placeholder="Enter text" />


            {/* State is the single source of truth in Controlled Component */}
            <h1>Controlled</h1>
            <input type="text" id="textBox" placeholder="Enter text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
        </div>
    )
}

export default Controlled;
