import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="user-class">
        <h1>{this.props.name}</h1>
        <h1>Class based Component</h1>
      </div>
    );
  }
}

export default UserClass;
