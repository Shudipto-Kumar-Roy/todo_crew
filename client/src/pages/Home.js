import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const organizations = ["CREW", "Weero", "Weepoka", "BTL", "Circle"];
const Home = () => {
  return (
    <div className="home_container">
      <h1>Todo Crew</h1>
      <div className="main_dash">
        {organizations &&
          organizations.map((organization, index) => {
            return (
              <div key={index} className="organization">
                <Link to={`/login/${organization}`}>
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