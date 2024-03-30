import React from "react";
import "./UserClass.scss";

class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor called");
  }

  render() {
    console.log(this.props.name + " render called");

    return (
      <h1>class component -> {this.props.name}</h1>
    )
  };

  componentDidMount() {
    console.log(this.props.name + " componentDidMount called");
  }
}

class UserClass extends React.Component {
  constructor(props) {
    console.log("parent class constructor called");
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    console.log("parent class render called");
    const { count } = this.state;

    return (
      <div className="user-class">
      <ChildClass name={"First"} />
      <ChildClass name={"Second"} />
        {/* <h1>Class based Component</h1>
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
        </button> */}
      </div> 
    );
  }

  componentDidMount() {
    console.log("parentclass ComponentDidMount Called");
  }
}

export default UserClass;
