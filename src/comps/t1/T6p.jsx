import React, { useState } from "react";
import T6 from "./T6";

export default function T6p() {
  const [persone, setPerson] = useState([
    { name: "kkkkk", age: 9 },
    { name: "kkkkk33", age: 9 },
    { name: "kkkkk11", age: 3 },
  ]);

  const [newPerson,setNewPerson] = useState({name:'',age:''})

  function a(){
    
  }
  function addUser(e) {
    setNewPerson({...newPerson,[e.target.name]:e.target.value})
  }

  function addUser1() {
    setPerson([...persone,newPerson]);
  }


  return (
    <div>
      <input type="text"name="name"placeholder="first name"onChange={addUser}/>
      <input type="number" name='age' placeholder="age" onChange={addUser} />
      <button onClick={addUser1}>add user</button>
      {persone.map((element) => (
        <T6 key={element.name} element={element} />
      ))}
    </div>
  );
}
