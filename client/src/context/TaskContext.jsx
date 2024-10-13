import { createContext, useContext, useState } from "react";
import {
  getAllTaskApi,
  gettaskApi,
  createTaskApi,
  updateTaskApi,
  deleteTaskApi,
  updateDoneApi,
} from "../api/task.api";

const TaskContext = createContext();

const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask debe estar dentro de un TaskContextProvider");
  }
  return context;
};

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = async (task) => {
    try {
      const response = await createTaskApi(task);
      console.log(response);
    } catch (err) {
      console.error("Error creando la tarea:", err);
    }
  };

  const loadTasks = async () => {
    try {
      const response = await getAllTaskApi();
      setTasks(response.data);
    } catch (err) {
      console.error("Error cargando las tareas:", err);
    }
  };

  const loadTask = async (id) => {
    try {
      const response = await gettaskApi(id);
      if (response) {
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskApi(id, newFields);
      if (response) {
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id_task === id);
      await updateDoneApi(id, taskFound.done === 0 ? true : false);
      setTasks(
        tasks.map((task) =>
          task.id_task === id ? { ...task, done: task.done === 0 ? 1 : 0 } : task
        )
      );
    } catch (err) {
      console.error("Error al actualizar el estado:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskApi(id);
      console.log(response);
      // Actualizar el estado tasks para excluir la tarea eliminada
      setTasks(tasks.filter((task) => task.id_task !== id));
    } catch (err) {
      console.error("Error eliminando la tarea:", err);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        loadTask,
        deleteTask,
        createTask,
        updateTask,
        updateDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContextProvider, TaskContext, useTask };
