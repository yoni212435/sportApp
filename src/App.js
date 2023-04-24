// import logo from './logo.svg';
// import { useRef, useState } from 'react';
import './App.css';
import T5 from './comps/t1/T5';
import T6 from './comps/t1/T6';
import T6p from './comps/t1/T6p';
import Y1 from './comps/t2/Y1';
import Y2 from './comps/t2/Y2';
// import Y3 from './comps/t2/Y3.JSX';
import Y4 from './comps/t2/Y4';
// import T3 from './comps/t1/T3';
// import T4 from './comps/t1/T4';
// import Nav from './comps/Nav';
// import T1 from './comps/t1/T1';
// import T2 from './comps/t1/T2';

function App() {
  // const [name_ar,setNameAr] = useState([{name:'gg',age:40},{name:'gg',age:41},{name:'gg',age:42}])
//  const nameF = useRef()
//  const nameL = useRef()
//  const age = useRef()
// let arr = ['p','o','i','u'];
let obj = [{name:'q',age:8},
{name:'qk',age:8},
{name:'ql',age:8}
]
  return (
    <div style={{display:'flex', flexDirection:'column',alignItems:'center',gap:'20px'}}>
      {/* <h1>parent</h1> */}
     {/* <input ref={nameF} type='text'/>
     <input ref={nameL} type='text'/>
     <input ref={age} type='number'/>
     <button onClick={()=>{
      setNameAr([...name_ar,{name:nameF.current.value + nameL.current.value,age:age.current.value}])

     }}>add</button>
  
    {name_ar.map((item,i) => <T3 item={item} key={i}/>)} */}
    {/* <T4/> */}
    {/* <T5/> */}
    {/* <T6p/> */}
    
    
    {/* {arr.map(element=><Y1 element={element}/>)} */}
    {/* {
      obj.map(element=> <Y2 name={element.name} age={element.age}/>)
    } */}
    {/* <Y3/> */}
    <Y4/>
    </div>
  );
}

export default App;
