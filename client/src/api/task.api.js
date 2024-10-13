
import axios from "axios";

const getAllTaskApi = async () => {
  return await axios.get("http://localhost:4000/api/task");

};

const createTaskApi = async (task) => {
  return await axios.post("http://localhost:4000/api/task", task);

};

const deleteTaskApi = async (id) => {
  return await axios.delete(`http://localhost:4000/api/task/${id}`);

};


const gettaskApi = async (id) => {
  return await axios.get(`http://localhost:4000/api/task/${id}`);

};

const updateTaskApi = async (id, newFields) => {
  return await axios.put(`http://localhost:4000/api/task/${id}`, newFields);

};

const updateDoneApi = async (id, done) => {
  return await axios.put(`http://localhost:4000/api/task/${id}`, {done});

};


export {
  createTaskApi,
  getAllTaskApi,
  deleteTaskApi,
  updateTaskApi,
  gettaskApi,
  updateDoneApi,
} 