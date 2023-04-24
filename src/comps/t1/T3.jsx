import React from 'react'

export default function T3({item,i}) {
  return (
    <div>
<h2 key={i}>{item.name }:{item.age}</h2>
    </div>
  )
}
