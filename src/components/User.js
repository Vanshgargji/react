import { useState } from "react";

const User = (props)=>{
  const [count] = useState(0);
  const [count2] = useState(1);

  return <div className="user-card">
    <h1>Count: {count}</h1>
    <h2>count2: {count2}</h2>
    <h2>Name: {props.name}</h2>
    <h3>Location: delhi</h3>
    <h4>Contact: xyz</h4>

  </div>
}

export default User ; 