import React, {useState, useEffect} from 'react'

const Mount = () => {
    const [value, setValue] = useState("");
    useEffect(() => {
        console.log(value, "value has changed");
    }, [value]);


    return (
        <div>
            <h1>Mounted on Page</h1>
            <input type="text" value={value} placeholder="Enter Text" onChange={(e)=>setValue(e.target.value)} />
        </div>
    )
}

export default Mount;