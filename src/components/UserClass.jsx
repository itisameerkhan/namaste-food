import React from "react";
import "./UserClass.scss";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;

    return (
      <div className="user-class">
        <h1>Class based Component</h1>
        <h2>Count : {count}</h2>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
            console.log("count ->", count);
          }}
        >
          INCREASE
        </button>
      </div>
    );
  }
}

export default UserClass;
