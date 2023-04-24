import React, { useState } from 'react'
let color_ar = ['green','blue','red'];





export default function T2() {
    const [i,setI]  = useState(0);
  return (
    <div>
        <div style={{background:color_ar[i],width:'200px',height:'200px'}}></div>
        <p>{i}</p>
        <button onClick={()=>{  
            setI(i+1)
            if(i >= color_ar.length-1){setI(0)} }}>click</button>
    </div>
  )
}
