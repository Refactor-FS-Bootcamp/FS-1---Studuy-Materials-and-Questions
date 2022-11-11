import React, { useState } from 'react'

const HookCounter2 = () => {
    const initialState = 0
    const [count, setCount] = useState(initialState)

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevState => prevState + 1)
        }
    }

    return (
        <>
            <h1>Count - {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={incrementFive}>Increment 5</button>
        </>
    )
}

export default HookCounter2