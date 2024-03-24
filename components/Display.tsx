import React, { useContext } from "react"
import { CounterContext } from "@/context/counter-context"

export default function Display() {
    const { count } = useContext(CounterContext)
    return <span>Count: {count}</span>
}
