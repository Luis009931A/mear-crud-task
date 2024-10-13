/* eslint-disable react/prop-types */
import { useTask } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard( {task} ) {
  const { deleteTask, updateDone } = useTask();
  const formattedDate = new Date(task.created_at).toLocaleDateString();
  const navigate = useNavigate();

  async function handleDone() {

    await updateDone(task.id_task);
    
  }

  return (
    <div className="flex flex-col gap-y-2 bg-gray-800 rounded-md p-4">
      <h2 className="text-2xl font-bold text-center text-gray-400">
        {task.title}
      </h2>
      <p className="text-white px-3 text-justify">{task.description}</p>
      <div className="flex flex-row-reverse justify-between px-3">
        <span className={`text-2xl ${task.done === 1 ? "text-green-500" : "text-red-500"}`}>
          {task.done === 1 ? "✔️" : "❌"}
        </span>
        <span className="text-white">{formattedDate}</span>
      </div>
      <div className="flex flex-row-reverse py-2 gap-x-3 px-3">
      <button className="p-2 rounded-md text-yellow-300 hover:bg-green-400 hover:text-black font-bold"
        onClick={() => handleDone() }
        >
          {task.done ? "Not Done" : "Done"}
        </button>
        <button className="p-2 rounded-md text-yellow-300 hover:bg-yellow-400 hover:text-black font-bold"
        onClick={() => navigate(`/updatetask/${task.id_task}`) }
        >
          Edit Task
        </button>
        <button
          className="p-2 rounded-md text-yellow-300 hover:bg-red-500 hover:text-black font-bold"
          onClick={() => {
            if (window.confirm(`Are you sure you want to delete the task "${task.title}"?`)) {
              deleteTask(task.id_task);
            }
          }}
          aria-label={`Delete task ${task.title}`}
        >
          Delete Task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
