import axios from "axios";

// login api
export const loginUser = async (email, password) => {
  try {
    return await axios.post(
      "/api/v1/user/login",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    alert(error.response.data.message);
  }
};

// logout api
export const logoutUser = async () => {
  try {
    return await axios.get("/api/v1/user/logout");
  } catch (error) {
    alert(error.response.data.message);
  }
};

// register api
export const registerUser = async (name, org, email, password) => {
  try {
    return await axios.post(
      "/api/v1/user/register",
      { name, org, email, password },
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    alert(error.response.data.message);
  }
};

// auth api
export const authUser = async () => {
  try {
    return await axios.get("/api/v1/user/auth");
  } catch (error) {
    alert(error.response.data.message);
  }
};

// todo api
export const todoAdd = async (name, designation, todaytask, nextdaytask) => {
  try {
    return await axios.post(
      "/api/v1/todo/create",
      { name, designation, todaytask, nextdaytask },
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    alert(error.response.data.message);
  }
};

// get todos
export const getTodo = async () => {
  try {
    return await axios.get("/api/v1/todo/alltodos");
  } catch (error) {
    alert(error.response.data.message);
  }
};
