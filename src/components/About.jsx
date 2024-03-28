import "./About.scss";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
        <h1>About</h1>
        <User />
        <UserClass name={"Ameer khan"} />
    </div>
  )
}

export default About;