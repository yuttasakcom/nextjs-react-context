import React, { useContext } from 'react'
import { CounterContext } from '@/context/counter-context'

export default function Button() {
    const { count, setCount } = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => {
                if (count > 0) {
                    setCount(count - 1)
                }
            }}>Remove</button>
        </div>
    )
}