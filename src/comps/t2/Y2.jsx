import React from 'react'

export default function Y2({name,age}) {
  return (
    <div style={{textAlign:'center',background:'yellow',border:'1px solid',width:'130px',
    borderRadius:'20px' , boxShadow:'0 0 20px'
    }}>
        <h2>sun</h2>
        <h2>{name}     {age}</h2>
        
    </div>
  )
}
