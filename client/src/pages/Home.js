import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { authUser, getTodo, logoutUser } from "../API";
import Table1 from "../components/Table1";
import Table2 from "../components/Table2";
const organizations = ["CREW", "Weero", "Weepoka", "BTL", "Circle"];
const Home = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getAuthData = async () => {
      const res = await authUser(); // api call
      if (res && res.status === 200) {
        setIsAuth(res.data.isAuthenticated);
      }
    };
    getAuthData();
  }, []);

  useEffect(() => {
    const getAllTodos = async () => {
      const res = await getTodo(); // api call
      if (res && res.status === 200) {
        setTodos((preVal) => [...preVal, ...res.data.todos]);
      }
    };
    getAllTodos();
  }, []);

  const handleLogout = async () => {
    const res = await logoutUser(); //api call
    if (res && res.status === 200) {
      alert("Logged out");
    }
  };

  return (
    <div className="home_container">
      <div className="logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
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
      <div className="show_todos">
        {todos &&
          todos.map((todo, index) => {
            return (
              <div className="card_body">
                <h3>Name: {todo.name}</h3>
                <h3>Designation: {todo.designation}</h3>
                <h3>Date: {todo.date}</h3>
                <div className="card_body_inner">
                  <div className="card_body_left">
                    <h4>Today Works</h4>
                    <Table1 today={todo.todaytask} key={index} />
                  </div>
                  <div className="card_body_right">
                    <h4>Nextday Works</h4>
                    <Table2 nextday={todo.nextdaytask} key={index} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
