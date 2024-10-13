import { Formik, Form, Field } from "formik";
import { useTask } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NewTask() {
  const { createTask, loadTask, updateTask } = useTask();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigte = useNavigate();

  useEffect(() => {
    const getTask = async () => {
      if (params.id) {
        const taskArray = await loadTask(params.id);
        if (taskArray) {
          const task = taskArray[0];
          setTask({
            title: task.title || "",
            description: task.description || "",
          });
        } else console.log("Task not found");
      }
    };
    getTask();
  }, []);

  return (
    <div className="bg-slate-700 rounded-lg flex flex-col gap-y-4 w-1/3 h-3/4 mt-7 mx-auto py-8">
      <h2 className="text-3xl font-bold text-center text-cyan-400">
        {params.id ? "Update Task" : "Create Task"}
      </h2>
      <div>
        <Formik
          initialValues={task}
          enableReinitialize={true}
          onSubmit={async (values) => {
            try {
              if (params.id) {
                await updateTask(params.id, values);
                navigte("/tasks");
              } else {
                await createTask(values);
                navigte("/tasks");
              }
              setTask({
                title: "",
                description: "",
              });
            } catch (err) {
              console.error("Error creating task", err);
            }
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form
              className="flex flex-col gap-2 w-4/5 m-auto"
              onSubmit={handleSubmit}
            >
              <label
                className="text-cyan-600 font-bold text-lg"
                htmlFor="title"
              >
                Name Task
              </label>
              <Field
                className="p-2 text-gray-100 bg-slate-800"
                type="text"
                name="title"
                placeholder="Write a title"
                aria-label="Task Title"
              />

              <label
                className="text-cyan-600 font-bold text-lg"
                htmlFor="description"
              >
                Description
              </label>
              <Field
                className="p-2 text-gray-100 bg-slate-800"
                as="textarea"
                name="description"
                rows="4"
                placeholder="Write a description of your task"
                aria-label="Task Description"
              />

              <button
                className="bg-green-400 text-yellow-50 font-bold text-xl mt-3 py-3 px-4 rounded-lg hover:bg-green-500"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving Task..." : "Save Task"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewTask;
