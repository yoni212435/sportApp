import React, { useRef, useState } from 'react'
import axios from 'axios';
export default function T5() {

const text = useRef();
const[data,setData] = useState([]);
let dataTemp = [];

const Data = async ()=>{
let {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
console.log(data);
dataTemp = data;
}

const filteredData = ()=>{
  let  filterData = dataTemp.filter(element => element.name.startsWith('A'))
  setData(filterData);
  console.log(filterData);
// console.log(data);
console.log(text.current.value);
}




  return (
<div>
    <input ref={text} type='text' onChange={filteredData } />
    
      {
        
        data.map((element) => <h2 key={element.id}>{element.name}l</h2> )
      }
      
    
</div>
  )
}
