'use client'

import { useState } from 'react'

import Button from '@/components/Button'
import Display from '@/components/Display'
import { CounterContext } from '@/context/counter-context'

export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <CounterContext.Provider value={{ count, setCount }}>
        <Display />
        <Button />
      </CounterContext.Provider>
    </div>
  )
}
