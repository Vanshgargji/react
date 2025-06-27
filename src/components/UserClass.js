import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props); // this is imp otherwise it will throw error 

    // this.state = {
    //   count: 0 ,
    //   count2: 1 
    // }

    // console.log(this.props.name +"constructor");

    this.state = {
      userInfo:{
        name: "dummy",
        location: "dummy"
      }
    }
  }

  async componentDidMount(){
    // console.log(this.props.name + "did mount");
    // Api call (because first rendered -> api called -> re rendering)
    const data = await fetch("https://api.github.com/users/vanshgargji")
    const json = await data.json()

    this.setState({
      userInfo: json,
    })

    console.log(json);
  }

  componentDidUpdate(){
    console.log("component did update")
  }

  componentWillUnmount(){
    console.log("compoent will unmount")  // this is called when we leave the page and go to other page
  }

  render() {
    // const {name}=this.props ; 
    // const {count,count2}=this.state ;
    // console.log(this.props.name + "rendered")

    const {name,location} = this.state.userInfo
    return (
      <div className="user-card">
        {/* <h1>count: {count}</h1>
        <button onClick={()=>{
          // never update state variables directly 
          this.setState({
            count: this.state.count + 1 , 
            count2: this.state.count2 + 1 
          })
        }}>
          count increase
        </button>
        <h2>count2: {count2}</h2> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: xyz</h4>
      </div>
    );
  }
}

export default UserClass;
