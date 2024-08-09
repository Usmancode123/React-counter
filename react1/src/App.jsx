import { useState } from 'react'
import React from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
const increase=()=>{
  setCount(count+1)
}
const decrease=()=>{
  setCount(count-1)
}
  return (
    <>
    <div className='conrtainer'>
      <p>count : {count}</p>
<button onClick={increase} className='btn1'>increace</button>
<button onClick={decrease} className='btn2'>deacrease</button>
</div>

    </>
  )
}

export default App
