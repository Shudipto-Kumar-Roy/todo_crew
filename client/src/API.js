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
