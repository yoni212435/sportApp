import React, { useEffect, useState } from 'react'

export default function T1() {
    const [num,setNum] = useState(0)
    useEffect(()=>{

    },[])

    
  return (
    <div>
        
        <div>{num}</div>
        <button onClick={()=>{
           setNum( Math.floor(Math.random()*6))
        }}>click</button>
    </div>
  )
}
