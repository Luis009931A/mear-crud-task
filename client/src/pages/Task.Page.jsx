import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTask } from "../context/TaskContext";

function TaskPage() {
  const { tasks, loadTasks } = useTask();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return (
        <h2 className="text-4xl text-white font-bold text-center py-4">
          No Tasks
        </h2>
      );
    }    
    return tasks.map((task) => <TaskCard task={task} key={task.id_task} />);
  }

  return (
    <div className="p-4">
      <h2 className="text-5xl text-white font-bold text-center py-4">Tasks</h2>
      <div className="grid grid-cols-3 gap-4">{renderMain()}</div>
    </div>
  );
}

export default TaskPage;
