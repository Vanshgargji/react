import User from "./User"
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(props){
    super(props);
    // console.log("parent construstor");
  }

  componentDidMount(){
    // console.log("parent did mount");
  }

  render(){
    // console.log("parent rendered");
    return(
      <div>
      <h1>About</h1>
      <h2>this is namaste react series</h2>
      {/* <User name={"akshay from (function)"}></User> */}
      <UserClass name={"first"}></UserClass>
      </div>
     
    )
  }
}

// const About = ()=>{
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>this is namaste react series</h2>
//       <User name={"akshay from (function)"}></User>
//       <UserClass name={"akshay from (class)"}></UserClass>
//     </div>
//   )
// }

export default About ; 