import React, { useState } from "react";

export default function Y4() {
  const [str, setStr] = useState();
  function perceivesAndPresents(e) {
    setStr(e.target.value);
  }
  return (
    <div>
      <input type="text" name="inp" onChange={perceivesAndPresents} />
      <h2>{str}</h2>
    </div>
  );
}
