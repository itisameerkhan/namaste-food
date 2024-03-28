import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="user-class">
        <p>{this.props.name}</p>
        <h1>Class based Component</h1>
      </div>
    );
  }
}

export default UserClass;
