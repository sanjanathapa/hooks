import React, { useState } from 'react'

function Hookcounter2() {
    const initialcount = 0
    const [count, setCount] = useState(initialcount)
    
    return (
        <div>
            Count: {count}
            <button onClick ={() => setCount(initialcount)}>RESETt</button>
            <button onClick ={() => setCount(count + 1)}>INCREMENT</button>
            <button onClick ={() => setCount(count - 1)}>Decrement</button>
            
        </div>
    )
}

export default Hookcounter2
