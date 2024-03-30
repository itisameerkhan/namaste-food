import "./About.scss";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="user-comp">
        {/* <User /> */}
        <UserClass name={"Ameer khan"} />
      </div>
    </div>
  );
};

export default About;
