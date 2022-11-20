import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { authUser } from "../API";
const organizations = ["CREW", "Weero", "Weepoka", "BTL", "Circle"];
const Home = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const getAuthData = async () => {
      const res = await authUser(); // api call
      if (res && res.status === 200) {
        setIsAuth(res.data.isAuthenticated);
      }
    };
    getAuthData();
  }, []);
  
  return (
    <div className="home_container">
      <h1>Todo Crew</h1>
      <div className="main_dash">
        {organizations &&
          organizations.map((organization, index) => {
            return (
              <div key={index} className="organization">
                <Link to={isAuth ? `/todo` : `/login/${organization}`}>
                  <h1>{organization}</h1>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
