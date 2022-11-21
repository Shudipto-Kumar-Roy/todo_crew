import React, { useEffect, useState } from "react";
import { todoAdd } from "../API";
import { useNavigate } from "react-router-dom";
import "./Todo.css";

const Todo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [todaytaskName, setTodayTaskName] = useState("");
  const [todaytaskReason, setTodayTaskRason] = useState("");
  const [nextdaytaskName, setNextDayTaskName] = useState("");

  const [today, setToday] = useState([]);
  const [nextdayTasks, setNextDayTasks] = useState([]);
  const [nextday, setNextDay] = useState({ tasks: [] });

  const addTodayTask = () => {
    if (!todaytaskName) {
      alert("Please fill the form properly");
    } else {
      setToday((preVal) => [
        ...preVal,
        { name: todaytaskName, reason: todaytaskReason },
      ]);
      setTodayTaskName("");
      setTodayTaskRason("");
      alert("Task added");
    }
  };
  const addTomorrowTask = () => {
    if (!nextdaytaskName) {
      alert("Please fill the form properly");
    } else {
      setNextDayTasks((preVal) => [...preVal, { name: nextdaytaskName }]);
      setNextDayTaskName("");
      console.log(nextday);
      alert("Task added");
    }
  };
  useEffect(() => {
    setNextDay({ tasks: nextdayTasks });
  }, [nextdayTasks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !designation ||
      today.length === 0 ||
      Object.keys(nextday).length === 0
    ) {
      alert("Please fill the form properly");
    } else {
      const res = await todoAdd(name, designation, today, nextday);
      if (res && res.status === 201) {
        alert("Successfully Submitted");
        setName("");
        setDesignation("");
        navigate("/");
      }
    }
  };
  return (
    <div className="todo_container">
      <h1>Create Your Task</h1>
      <form className="todo_form" onSubmit={handleSubmit}>
        <div className="todo_info">
          <div className="todo_input_group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="todo_input_group">
            <label htmlFor="">Designation</label>
            <input
              type="text"
              onChange={(e) => setDesignation(e.target.value)}
              value={designation}
            />
          </div>
        </div>
        <div className="todo_main">
          <div className="todo_today">
            <h4>Today Task</h4>
            <div className="todo_input_group">
              <label htmlFor="">Task Name</label>
              <input
                type="text"
                onChange={(e) => setTodayTaskName(e.target.value)}
                value={todaytaskName}
              />
            </div>
            <div className="todo_input_group">
              <label htmlFor="">Reason</label>
              <input
                type="text"
                onChange={(e) => setTodayTaskRason(e.target.value)}
                value={todaytaskReason}
              />
            </div>
            <div className="todo_input_group">
              <button type="button" onClick={addTodayTask}>
                Add Task
              </button>
            </div>
          </div>
          <div className="todo_tomorrow">
            <h4>Tomorrow Task</h4>
            <div className="todo_input_group">
              <label htmlFor="">Task Name</label>
              <input
                type="text"
                onChange={(e) => setNextDayTaskName(e.target.value)}
                value={nextdaytaskName}
              />
            </div>
            <div className="todo_input_group">
              <button type="button" onClick={addTomorrowTask}>
                Add Task
              </button>
            </div>
          </div>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Todo;
