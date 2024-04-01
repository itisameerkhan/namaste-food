import { useEffect, useState } from "react";
import "./User.scss";

const User = () => {
  const [userData, setUserData] = useState(null);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/itisameerkhan");
    const json = await data.json();
    setUserData(json);
  };
  useEffect(() => {
    fetchData();
    const timer = setInterval(() => {
      console.log("NAMASTE REACT 🚀 from useEffect");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return userData === null ? (
    <h1>Loading</h1>
  ) : (
    <div className="user-card">
      <img
        src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
      <div className="pfp">
        <img src={userData.avatar_url} alt="" />
      </div>
      <div className="user-data">
        <p>{userData?.name}</p>
        <p>{userData?.bio}</p>
      </div>
      <div className="user-data-2">
        <div>
          <span className="material-symbols-outlined">list</span>
          {userData?.public_repos}
        </div>
        <div>
          <span className="material-symbols-outlined">group</span>
          {userData?.followers}
        </div>
        <div>
          <span className="material-symbols-outlined">person_add</span>
          {userData?.following}
        </div>
      </div>
      <div className="follow-btn">
        <button className="follow">Follow</button>
      </div>
    </div>
  );
};

export default User;
