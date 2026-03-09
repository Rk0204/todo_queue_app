import axios from "axios";

const API = "http://localhost:5000";

export const fetchTasks = async () => {
  const res = await axios.get(`${API}/tasks`);
  return res.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API}/tasks/${id}`);
};