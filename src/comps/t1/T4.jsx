import React, { useRef, useState } from 'react'

export default function T4() {
    const text = useRef()
    const text2 = useRef()
    const num = useRef()
    const [textt,setTextt] = useState();

  return (
    <div>
        <input onChange={()=>{
            setTextt(text.current?.value)
        }} type='text' ref={text}/>
        <input onChange={()=>{
            
        }} type='text' ref={text2}/>
        <input onChange={()=>{
            
        }} type='number' ref={num}/>

        <h2>{textt}</h2>
        <h2>{text2.current?.value}</h2>
        <h2>{num.current?.value}</h2>
    </div>
  )
}
